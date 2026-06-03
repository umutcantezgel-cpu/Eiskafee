const fs = require("fs");
const results = JSON.parse(fs.readFileSync("lint-results.json", "utf8"));
const counts = {};
results.forEach((file) => {
  file.messages.forEach((msg) => {
    const rule = msg.ruleId;
    counts[rule] = (counts[rule] || 0) + 1;
  });
});
console.log(
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20),
);
