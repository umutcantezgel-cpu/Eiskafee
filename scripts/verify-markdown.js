const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const mdDir = path.join(projectRoot, "public", "md");
const llmsTxtPath = path.join(projectRoot, "public", "llms.txt");
const llmsFullTxtPath = path.join(projectRoot, "public", "llms-full.txt");

// 1. Read files in public/md/
const mdFiles = fs.readdirSync(mdDir).filter((f) => f.endsWith(".md"));

console.log(`Found ${mdFiles.length} markdown files in public/md/`);

const errors = [];
const fileMap = new Map();

// Helper to parse simple frontmatter
function parseFrontmatter(content) {
  if (!content.startsWith("---")) return null;
  const parts = content.split("---");
  if (parts.length < 3) return null;
  const yamlText = parts[1];
  const data = {};
  const lines = yamlText.split("\n");
  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  return data;
}

// Check each markdown file
for (const file of mdFiles) {
  const filePath = path.join(mdDir, file);
  const content = fs.readFileSync(filePath, "utf8");

  const fm = parseFrontmatter(content);
  if (!fm) {
    errors.push(
      `File ${file}: Missing or invalid frontmatter structure (must start and end with ---)`,
    );
    continue;
  }

  // Required fields
  const required = ["title", "ai-summary", "target-entities", "canonical"];
  for (const field of required) {
    if (!fm[field]) {
      errors.push(
        `File ${file}: Missing required frontmatter field '${field}'`,
      );
    }
  }

  // Check canonical URL format
  if (fm.canonical) {
    if (!fm.canonical.startsWith("https://hey-fede.de/")) {
      errors.push(
        `File ${file}: Canonical URL '${fm.canonical}' must start with 'https://hey-fede.de/'`,
      );
    }
    try {
      const url = new URL(fm.canonical);
      // Valid absolute URL check
    } catch (e) {
      errors.push(
        `File ${file}: Canonical URL '${fm.canonical}' is not a valid URL`,
      );
    }
  }

  // Verify target-entities is a valid array representation (e.g. starts with [ and ends with ])
  if (fm["target-entities"]) {
    const rawVal = fm["target-entities"].trim();
    if (!rawVal.startsWith("[") || !rawVal.endsWith("]")) {
      errors.push(
        `File ${file}: 'target-entities' should be a bracketed JSON array string, got: ${rawVal}`,
      );
    }
  }

  fileMap.set(file, fm);
}

// 2. Alternate link mappings verification
const pathsToTest = [
  { input: "/", expectedMd: "/md/home.md" },
  { input: "/about", expectedMd: "/md/about.md" },
  { input: "/agb", expectedMd: "/md/agb.md" },
  {
    input: "/bubble-waffles-wetzlar",
    expectedMd: "/md/bubble-waffles-wetzlar.md",
  },
  { input: "/cookie-richtlinie", expectedMd: "/md/cookie-richtlinie.md" },
  { input: "/datenschutz", expectedMd: "/md/datenschutz.md" },
  {
    input: "/eisdiele-wetzlar-special-shakes",
    expectedMd: "/md/eisdiele-wetzlar-special-shakes.md",
  },
  {
    input: "/events-catering-hessen",
    expectedMd: "/md/events-catering-hessen.md",
  },
  { input: "/gutscheine", expectedMd: "/md/gutscheine.md" },
  { input: "/impressum", expectedMd: "/md/impressum.md" },
  { input: "/menu", expectedMd: "/md/menu.md" },
  {
    input: "/vegane-desserts-wetzlar",
    expectedMd: "/md/vegane-desserts-wetzlar.md",
  },
  { input: "/visit", expectedMd: "/md/visit.md" },
  // Boundary/edge cases
  { input: "/about/", expectedMd: "/md/about.md" },
  { input: "/about?ref=share", expectedMd: "/md/about.md" },
  { input: "/about#contact", expectedMd: "/md/about.md" },
  { input: "//about", expectedMd: "/md/about.md" },
];

for (const { input, expectedMd } of pathsToTest) {
  const cleanPath = input.split("?")[0].split("#")[0];
  const normalizedPath = cleanPath.replace(/^\/+/, "").replace(/\/+$/, "");
  const mdPath =
    normalizedPath === "" ? "/md/home.md" : `/md/${normalizedPath}.md`;

  if (mdPath !== expectedMd) {
    errors.push(
      `Mapping error for path '${input}': resolved to '${mdPath}', expected '${expectedMd}'`,
    );
  }
}

// 3. Verify llms.txt and llms-full.txt
function verifyLlmFile(filePath, fileName) {
  if (!fs.existsSync(filePath)) {
    errors.push(`${fileName} does not exist at ${filePath}`);
    return;
  }
  const content = fs.readFileSync(filePath, "utf8");

  // Extract all markdown links: https://hey-fede.de/md/<name>.md
  const regex = /https:\/\/hey-fede\.de\/md\/([a-zA-Z0-9-]+\.md)/g;
  let match;
  const foundMdFiles = new Set();
  while ((match = regex.exec(content)) !== null) {
    foundMdFiles.add(match[1]);
  }

  // Check if each found file actually exists in public/md/
  for (const foundFile of foundMdFiles) {
    if (!fileMap.has(foundFile)) {
      errors.push(
        `${fileName} references non-existent markdown file: ${foundFile}`,
      );
    }
  }

  // Check if any actual markdown files are missing from this list
  for (const realFile of fileMap.keys()) {
    if (!foundMdFiles.has(realFile)) {
      errors.push(
        `${fileName} is missing reference to markdown file: ${realFile}`,
      );
    }
  }
}

verifyLlmFile(llmsTxtPath, "llms.txt");
verifyLlmFile(llmsFullTxtPath, "llms-full.txt");

// Output report
if (errors.length > 0) {
  console.error("Verification failed! Found the following errors:");
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
} else {
  console.log("Verification passed successfully! All checks match.");
}
