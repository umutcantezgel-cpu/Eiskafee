const fs = require("fs");
const path = require("path");

const footerPath = path.join(
  __dirname,
  "../../../../src/components/layout/Footer.tsx",
);
const footerContent = fs.readFileSync(footerPath, "utf8");

const regex = /href=(?:{"([^"]+)"}|"([^"]+)")/g;
let match;
const links = [];

while ((match = regex.exec(footerContent)) !== null) {
  const link = match[1] || match[2];
  if (link && link.startsWith("/")) {
    links.push(link);
  }
}

const appDir = path.join(__dirname, "../../../../src/app/(public)");
const appPages = new Set();

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      walkSync(dirFile, filelist);
    } else {
      if (file === "page.tsx") {
        const relative = path
          .relative(appDir, dirFile)
          .replace("/page.tsx", "");
        const route = relative === "page.tsx" ? "/" : `/${relative}`;
        appPages.add(route);
      }
    }
  }
}

walkSync(appDir);

// Support page anchors check
const supportPagePath = path.join(appDir, "support/page.tsx");
let supportContent = "";
if (fs.existsSync(supportPagePath)) {
  supportContent = fs.readFileSync(supportPagePath, "utf8");
}

console.log("Found links in Footer:", [...new Set(links)]);

let hasError = false;

for (const link of new Set(links)) {
  const [route, hash] = link.split("#");

  if (!appPages.has(route)) {
    // Check if it's the root '/' handled differently or something?
    if (route === "/" && appPages.has("/")) {
      // it's fine
    } else {
      console.error(`❌ Route does not exist: ${route}`);
      hasError = true;
    }
  } else {
    console.log(`✅ Route exists: ${route}`);
  }

  // Next, if there's a redirection in the page.tsx, let's verify it
  const pagePath =
    route === "/"
      ? path.join(appDir, "page.tsx")
      : path.join(appDir, route, "page.tsx");
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, "utf8");
    const redirectMatch = content.match(/redirect\("([^"]+)"\)/);
    if (redirectMatch) {
      const redirectUrl = redirectMatch[1];
      const [redirRoute, redirHash] = redirectUrl.split("#");
      if (redirHash) {
        if (redirRoute === "/support") {
          if (
            !supportContent.includes(`id="${redirHash}"`) &&
            !supportContent.includes(`id='${redirHash}'`)
          ) {
            console.error(
              `❌ Anchor #${redirHash} does not exist on ${redirRoute} (redirected from ${route})`,
            );
            hasError = true;
          } else {
            console.log(`✅ Anchor #${redirHash} exists on ${redirRoute}`);
          }
        }
      }
    }
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log("All links are valid!");
}
