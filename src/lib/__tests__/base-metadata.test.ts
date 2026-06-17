import { describe, it, expect } from "vitest";
import { buildMetadata } from "../seo/base-metadata";

describe("buildMetadata helper", () => {
  it("should generate correct canonical alternates and inject text/markdown types", () => {
    const meta = buildMetadata({
      title: "Test",
      description: "Test description",
      path: "/",
    });

    expect(meta.alternates?.canonical).toBe("https://hey-fede.de/");
    expect(meta.alternates?.types?.["text/markdown"]).toBe("/md/home.md");
  });

  it("should handle paths with slashes and map them correctly to md files", () => {
    const meta = buildMetadata({
      title: "Test",
      description: "Test description",
      path: "/about",
    });

    expect(meta.alternates?.types?.["text/markdown"]).toBe("/md/about.md");
  });

  it("should clean trailing slashes and query parameters when mapping to md files", () => {
    const meta1 = buildMetadata({
      title: "Test",
      description: "Test description",
      path: "/bubble-waffles-wetzlar/",
    });
    expect(meta1.alternates?.types?.["text/markdown"]).toBe(
      "/md/bubble-waffles-wetzlar.md",
    );

    const meta2 = buildMetadata({
      title: "Test",
      description: "Test description",
      path: "/eisdiele-wetzlar-special-shakes?ref=search",
    });
    expect(meta2.alternates?.types?.["text/markdown"]).toBe(
      "/md/eisdiele-wetzlar-special-shakes.md",
    );
  });

  it("should receive text/markdown alternate for all 13 whitelisted routes", () => {
    const whitelistedPaths = [
      "/",
      "/about",
      "/agb",
      "/bubble-waffles-wetzlar",
      "/cookie-richtlinie",
      "/datenschutz",
      "/eisdiele-wetzlar-special-shakes",
      "/events-catering-hessen",
      "/gutscheine",
      "/impressum",
      "/vegane-desserts-wetzlar",
      "/visit",
      "/menu",
    ];

    for (const path of whitelistedPaths) {
      const meta = buildMetadata({
        title: "Test",
        description: "Test description",
        path,
      });
      expect(meta.alternates?.types?.["text/markdown"]).toBeDefined();
    }
  });

  it("should NOT receive text/markdown alternate link for non-whitelisted routes", () => {
    const nonWhitelistedPaths = [
      "/widerruf",
      "/order-hub",
      "/loyalty",
      "/password-reset",
      "/support",
      "/reservierung",
      "/lieferservice-desserts-lahn-dill",
      "/legal",
    ];

    for (const path of nonWhitelistedPaths) {
      const meta = buildMetadata({
        title: "Test",
        description: "Test description",
        path,
      });
      // alternates.types should be undefined or not have "text/markdown"
      expect(meta.alternates?.types?.["text/markdown"]).toBeUndefined();
    }
  });
});
