import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Tier 1: Core Navigation & Static Content", () => {
  // Global error monitoring for hydration mismatches and unhandled errors
  test.beforeEach(({ page }) => {
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // Fail the test if we see React hydration errors or Matter.js crashes
        if (
          text.includes("Hydration failed") ||
          text.includes("Text content did not match") ||
          text.includes("Minified React error")
        ) {
          expect(text).toBe("No hydration or React errors expected");
        }
      }
    });

    page.on("pageerror", (err) => {
      // Fail on any uncaught exceptions
      expect(err.message).toBe("No page errors expected");
    });
  });

  test("Home (/) - SEO, Basic Layout, A11y", async ({ page }) => {
    await page.goto("/");

    // SEO meta tags & Title
    // Wait for title to not be empty
    await expect(page).toHaveTitle(/.+/);

    // Check for description meta tag
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);

    // Basic layout loading (Header & Footer)
    const header = page.locator("header");
    await expect(header).toBeVisible();

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Baseline A11y check
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  const corePages = ["/menu", "/about", "/visit"];

  for (const url of corePages) {
    test(`Core Page: ${url} loads correctly and passes A11y`, async ({
      page,
    }) => {
      await page.goto(url);

      // Verify Header is visible (implies layout loaded)
      const header = page.locator("header");
      await expect(header).toBeVisible();

      // Check for A11y
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  const infoAndLegalPages = [
    "/faq",
    "/kontakt",
    "/gutscheine",
    "/reservierung",
    "/legal?tab=impressum",
    "/legal?tab=privacy",
  ];

  for (const url of infoAndLegalPages) {
    test(`Info & Legal Page: ${url} loads correctly and passes A11y`, async ({
      page,
    }) => {
      await page.goto(url);

      // Verify Header is visible
      const header = page.locator("header");
      await expect(header).toBeVisible();

      // Check for A11y
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test("Global UI: Navigation links functionality", async ({ page }) => {
    await page.goto("/");

    // Test a common navigation link if present.
    // For a generic check, we look for any link in the header and click it.
    const headerLinks = page.locator('header a[href^="/"]');
    await expect(headerLinks).not.toHaveCount(0);

    // Find a link that goes to a different page, like /menu
    const navLink = headerLinks.filter({ hasText: /menu/i }).first();
    await expect(navLink).toBeVisible();
    await navLink.click();
    await expect(page).toHaveURL(/\/menu/);
  });

  test("Custom 404 (not-found.tsx) rendering and A11y", async ({ page }) => {
    // Navigate to a non-existent route
    const response = await page.goto("/this-route-does-not-exist");

    // Check that we get a 404 status code (if standard SSR/App Router behavior)
    expect(response).not.toBeNull();
    expect(response!.status()).toBe(404);

    // Verify some 404 indication is on the page
    // (We assume "404" or "not found" is somewhere in the body)
    const bodyText = await page.locator("body").textContent();
    expect(bodyText?.toLowerCase()).toMatch(
      /(404|not found|page could not be found)/,
    );

    // Baseline A11y check for 404 page
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
