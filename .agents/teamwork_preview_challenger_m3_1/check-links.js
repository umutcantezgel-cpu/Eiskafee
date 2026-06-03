const http = require("http");

const urls = [
  "/",
  "/menu",
  "/about",
  "/visit",
  "/faq",
  "/kontakt",
  "/gutscheine",
  "/reservierung",
  "/bubble-waffles-wetzlar",
  "/lieferservice-desserts-lahn-dill",
  "/eisdiele-wetzlar-special-shakes",
  "/events-catering-hessen",
  "/vegane-desserts-wetzlar",
  "/impressum",
  "/datenschutz",
  "/agb",
  "/widerruf",
  "/cookie-richtlinie",
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http
      .get(`http://localhost:3000${path}`, (res) => {
        resolve({ path, statusCode: res.statusCode });
      })
      .on("error", (err) => {
        resolve({ path, error: err.message });
      });
  });
}

async function main() {
  const results = await Promise.all(urls.map(checkUrl));
  const errors = results.filter((r) => !r.statusCode || r.statusCode >= 400);

  console.log(JSON.stringify(results, null, 2));

  if (errors.length > 0) {
    console.error("Found errors:", errors);
    process.exit(1);
  } else {
    console.log("All links are OK!");
  }
}

main();
