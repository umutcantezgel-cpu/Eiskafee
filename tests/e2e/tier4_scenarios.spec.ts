import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Tier 4: Real-World Application Scenarios", () => {
  test("Scenario 1: The Hungry Guest (End-to-End Order Flow)", async ({
    page,
  }) => {
    // 1. User lands on `/` and navigates to `/menu`.
    await page.goto("/");

    const cta = page
      .getByRole("link", { name: /Menü entdecken|Bestellen/i })
      .first();
    await cta.click();

    // 2. Click 'Abholung' on order-hub
    await page.getByRole("button", { name: /Abholung/i }).click();

    // 3. User adds multiple dessert items to the Cart.
    await expect(page).toHaveURL(/\/menu/);
    const addBtns = page.getByRole("button", { name: /Hinzufügen|\+/i });

    // Wait for buttons to be visible
    await expect(addBtns.first()).toBeVisible();
    await addBtns.nth(0).click();
    await addBtns.nth(1).click();

    // 4. User proceeds to cart and clicks "Checkout".
    const cartButton = page.getByRole("button", { name: /Warenkorb/i });
    await cartButton.click();
    const cartDrawer = page
      .locator('[role="dialog"]')
      .filter({ hasText: /Warenkorb/i });
    await expect(cartDrawer).toBeVisible();

    const checkoutBtn = page.getByRole("button", { name: /Zur Kasse/i });
    await checkoutBtn.click();

    // 5. User enters details on `/checkout`.
    await expect(page).toHaveURL(/\/checkout/);
    await page.getByLabel(/Name/i).fill("Test Guest");
    await page.getByLabel(/E-Mail/i).fill("guest@hey-fede.de");
    await page.getByLabel(/Telefon/i).fill("0123456789");
    await page.getByRole("button", { name: /Weiter/i }).click();

    // 6. User selects a valid time on `/pickup-time`.
    await expect(page).toHaveURL(/\/pickup-time/);
    const timeSlot = page.getByRole("button", { name: /:/ }).first();
    await timeSlot.click();
    await page.getByRole("button", { name: /Weiter zur Übersicht/i }).click();

    // 7. User reviews the order summary on `/order-review`.
    await expect(page).toHaveURL(/\/order-review/);
    const submitOrderBtn = page.getByRole("button", {
      name: /Verbindlich bestellen|Kostenpflichtig bestellen|vorbestellen/i,
    });
    await submitOrderBtn.click();

    // 8. User confirms the order and is redirected to `/confirmation`.
    await expect(page).toHaveURL(/\/confirmation/);
    await expect(page.getByText(/Bestellung bestätigt/i)).toBeVisible();

    // 9. User checks the status on `/order-status`.
    await page.getByRole("button", { name: /Status anzeigen/i }).click();
    await expect(page).toHaveURL(/\/order-status/);
    await expect(page.getByRole("progressbar")).toBeVisible();
  });

  test("Scenario 2: The Playful Visitor (Hydration & Memory Safety Check)", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        if (
          text.includes("Hydration failed") ||
          text.includes("Text content did not match") ||
          text.includes("Uncaught Error")
        ) {
          errors.push(text);
        }
      }
    });
    page.on("pageerror", (err) => {
      errors.push(err.message);
    });

    const client = await page.context().newCDPSession(page);
    await client.send("Performance.enable");

    // 1. User visits `/` and interacts with the `SyrupCursor`.
    await page.goto("/");

    // Simulate interaction with SyrupCursor (moving mouse)
    await page.mouse.move(100, 100);
    await page.mouse.move(200, 200);
    await page.waitForTimeout(500);

    // 2. Navigates back and forth between interactive pages
    const interactiveRoutes = ["/", "/menu", "/about", "/"];

    for (let i = 0; i < 3; i++) {
      // Navigate back and forth a few times
      for (const route of interactiveRoutes) {
        await page.goto(route);
        await page.waitForLoadState("networkidle");
        await page.mouse.move(Math.random() * 500, Math.random() * 500);
      }
    }

    // 3. System validates via Playwright's CDPSession that no memory leaks occur
    const metrics = await client.send("Performance.getMetrics");
    const jsHeapSizeMetric = metrics.metrics.find(
      (m) => m.name === "JSHeapUsedSize",
    );

    expect(errors.length).toBe(0);

    // Validate JS heap size limit (e.g., < 250MB) to check for catastrophic leaks
    expect(jsHeapSizeMetric).toBeDefined();
    expect(jsHeapSizeMetric!.value).toBeLessThan(250 * 1024 * 1024);
  });

  test("Scenario 3: Global Accessibility & Setup (A11y & Auth)", async ({
    page,
  }) => {
    // 1. Playwright navigates across Tier 1 static pages
    const staticPages = ["/", "/menu", "/faq", "/kontakt"];

    for (const route of staticPages) {
      await page.goto(route);
      await page.waitForLoadState("networkidle");

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      const seriousViolations = accessibilityScanResults.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious",
      );
      expect(seriousViolations.length).toBe(0);
    }

    // Authenticated user logs in via `/auth`
    await page.goto("/auth");
    await page
      .getByPlaceholder("hallo@example.de")
      .fill("testuser@example.com");
    await page.getByPlaceholder("••••••••").fill("test1234");
    await page.getByRole("button", { name: /Anmelden|Login/i }).click();

    // Verifies profile at `/profile` (if auth configuration works or we reach loading state)
    // Here we just wait for URL to transition
    await expect(page).toHaveURL(/\/profile/);

    // A11y scan on profile page
    await page.waitForLoadState("networkidle");
    const profileA11y = await new AxeBuilder({ page }).analyze();
    const profileSeriousViolations = profileA11y.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    );
    expect(profileSeriousViolations.length).toBe(0);
  });
});
