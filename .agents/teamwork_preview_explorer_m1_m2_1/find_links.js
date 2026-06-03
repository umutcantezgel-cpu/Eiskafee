const fs = require("fs");
const path = require("path");

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      walk(path.join(dir, file), fileList);
    } else {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        fileList.push(path.join(dir, file));
      }
    }
  }
  return fileList;
}

const srcDir = "/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src";
const files = walk(srcDir);

const linkPattern = /href=\{?["'`](\/[^"'`}]*)["'`]\}?/g;
const links = {};

for (const file of files) {
  const content = fs.readFileSync(file, "utf-8");
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    const href = match[1];
    // skip paths that look like svg IDs
    if (!links[href]) {
      links[href] = new Set();
    }
    links[href].add(file.replace(srcDir, ""));
  }
}

// Convert Sets to Arrays for printing
const output = {};
for (const [href, fileSet] of Object.entries(links)) {
  output[href] = Array.from(fileSet);
}

console.log(JSON.stringify(output, null, 2));
