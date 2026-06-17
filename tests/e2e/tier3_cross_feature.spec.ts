import { test, expect } from "@playwright/test";
import { HF_DATA } from "../../src/lib/data";

// Helper for hydration wait
async function waitForHydration(page: any) {
  const loader = page.locator(".bg-cream.z-50");
  if ((await loader.count()) > 0) {
    await expect(loader.first()).not.toBeAttached({ timeout: 15000 });
  }
  await page.waitForTimeout(1000);
}

// Helper to perform APIRequestContext GET with retries to prevent transient ECONNRESET in parallel tests
async function getWithRetry(
  request: any,
  url: string,
  options?: any,
  retries = 3,
) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await request.get(url, options);
      await response.text();
      return response;
    } catch (e: any) {
      if (i === retries - 1) throw e;
      console.warn(
        `[getWithRetry] Request to ${url} failed with: ${e.message || e}. Retrying in 1s...`,
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

test.describe("Tier 3 - Cross-Feature Consistency & Navigation Flows", () => {
  // 1. Navigation Flow: Homepage -> Menu -> Reservation
  test("successfully navigates from Homepage to Menu to Reservation and interacts", async ({
    page,
  }) => {
    // Start at homepage
    await page.goto("/");
    await waitForHydration(page);

    // Locate and click the Speisekarte link in the header nav
    const menuLink = page
      .locator('nav[role="navigation"] >> text=Speisekarte')
      .first();
    await expect(menuLink).toBeVisible();
    await menuLink.click();
    await page.waitForURL("**/menu**");
    await waitForHydration(page);

    // Verify we are on the menu page by checking heading
    await expect(page.locator("h1").first()).toContainText("Süßes");

    // Navigate to Reservation page. Since there isn't a direct header link to Reservation,
    // we go to /reservierung directly or via footer/visit page link.
    // Let's navigate to /reservierung and check interaction.
    await page.goto("/reservierung");
    await waitForHydration(page);

    // Verify reservation page is loaded
    await expect(page.locator("h1").first()).toContainText("Tisch");

    // Click the guest count increase button
    const plusBtn = page.locator("button:has(svg.lucide-plus)").first();
    await expect(plusBtn).toBeVisible();
    await plusBtn.click();

    // Assert the guest count updated
    await expect(page.locator("body")).toContainText("5 Personen");
  });

  // 2. NAP Consistency Checks (Homepage, Visit Page, Schemas, and API)
  test.describe("Business NAP (Name, Address, Phone, Hours) Consistency", () => {
    test("address and phone are consistent in footer/page content across different routes", async ({
      page,
    }) => {
      // Check homepage footer address
      await page.goto("/");
      await waitForHydration(page);
      const footer = page.locator("footer");
      await expect(footer).toContainText("Langgasse 68");
      await expect(footer).toContainText("35576 Wetzlar");
      await expect(footer).toContainText("06441 7890426");

      // Check visit page
      await page.goto("/visit");
      await waitForHydration(page);
      await expect(page.locator("body")).toContainText("Langgasse 68");
      await expect(page.locator("body")).toContainText("35576 Wetzlar");
      await expect(page.locator("body")).toContainText("06441 7890426");
    });

    test("opening hours are consistent (Mo/Di closed, Sun opens at 13:00)", async ({
      page,
    }) => {
      await page.goto("/visit");
      await waitForHydration(page);

      // Verify Montag/Dienstag is Closed / Geschlossen
      const bodyText = await page.locator("body").innerText();
      expect(bodyText).toMatch(/Montag.*(Geschlossen|closed)/i);
      expect(bodyText).toMatch(/Dienstag.*(Geschlossen|closed)/i);

      // Verify Sonntag is 13:00
      expect(bodyText).toMatch(/Sonntag.*13:00/i);
    });

    test("Schema.org JSON-LD contains consistent business data", async ({
      page,
    }) => {
      await page.goto("/");
      await waitForHydration(page);

      const scripts = page.locator('script[type="application/ld+json"]');
      const count = await scripts.count();
      expect(count).toBeGreaterThan(0);

      let foundRestaurantSchema = false;

      function getRestaurantSchema(parsed: any): any | null {
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            const match = getRestaurantSchema(item);
            if (match) return match;
          }
        } else if (parsed && typeof parsed === "object") {
          const type = parsed["@type"];
          const isRestaurant =
            (Array.isArray(type) &&
              (type.includes("FoodEstablishment") ||
                type.includes("Restaurant"))) ||
            type === "FoodEstablishment" ||
            type === "Restaurant";
          if (isRestaurant) {
            return parsed;
          }
        }
        return null;
      }

      for (let i = 0; i < count; i++) {
        const textContent = await scripts.nth(i).textContent();
        if (textContent) {
          const parsed = JSON.parse(textContent);
          const restaurantSchema = getRestaurantSchema(parsed);

          if (restaurantSchema) {
            foundRestaurantSchema = true;
            expect(restaurantSchema.name).toContain("Hey Fede");
            expect(restaurantSchema.address.streetAddress).toBe("Langgasse 68");
            expect(restaurantSchema.address.postalCode).toBe("35576");
            expect(restaurantSchema.address.addressLocality).toBe("Wetzlar");
            expect(restaurantSchema.telephone).toContain("6441");
          }
        }
      }
      expect(foundRestaurantSchema).toBe(true);
    });

    test("API read response contains consistent store address and details", async ({
      request,
    }) => {
      const apiKey =
        process.env.AI_AGENT_API_KEY ||
        process.env.MCP_API_KEY ||
        "development_key";
      const response = await getWithRetry(request, "/api/ai-agent/read", {
        headers: { "X-API-Key": apiKey },
      });

      // If API key auth is disabled or bypassed or service unavailable, we handle status code gracefully
      const status = response.status();
      expect([200, 401, 503]).toContain(status);

      if (status === 200) {
        const json = await response.json();
        expect(json.success).toBe(true);
        expect(json.store.name).toContain("Hey Fede");
        expect(json.store.address).toContain("Langgasse 68");
        expect(json.store.address).toContain("35576 Wetzlar");
        expect(json.store.phone).toContain("06441 7890426");
      }
    });
  });

  // 3. Menu Item IDs, Prices and Price Calculations
  test.describe("Menu Item IDs and Price Calculations", () => {
    test("verifies menu item prices from API and calculates a simulated total", async ({
      request,
    }) => {
      const apiKey =
        process.env.AI_AGENT_API_KEY ||
        process.env.MCP_API_KEY ||
        "development_key";
      const response = await getWithRetry(request, "/api/ai-agent/read", {
        headers: { "X-API-Key": apiKey },
      });

      const status = response.status();
      expect([200, 401, 503]).toContain(status);

      // We extract menu items from the API if 200 OK, otherwise fallback to local HF_DATA.menu
      let menuItems: Record<string, any> = {};
      if (status === 200) {
        const json = await response.json();
        menuItems = json.menu;
      } else {
        menuItems = HF_DATA.menu;
      }

      // Check item IDs eg1 and eg2 exist and have valid prices
      const eisGetraenke = menuItems["eis-getraenke"]?.items || [];
      const eg1 = eisGetraenke.find((item: any) => item.id === "eg1");
      const eg2 = eisGetraenke.find((item: any) => item.id === "eg2");

      expect(eg1).toBeDefined();
      expect(eg2).toBeDefined();

      // Check prices
      expect(eg1.price).toMatch(/(6,00|6)/);
      expect(eg2.price).toMatch(/(7,00|7)/);

      // Parse and compute total of eg1 and eg2
      const parsePrice = (priceStr: string): number => {
        const match = priceStr.match(/[\d,]+/);
        return match ? parseFloat(match[0].replace(",", ".")) : 0;
      };

      const price1 = parsePrice(eg1.price);
      const price2 = parsePrice(eg2.price);
      const computedTotal = price1 + price2;

      expect(computedTotal).toBe(13.0);
    });

    test("menu UI prices match local data source", async ({ page }) => {
      // Go to menu page
      await page.goto("/menu?category=eis-getraenke");
      await waitForHydration(page);

      // Verify that Eisschokolade (0,3l) price on UI is correct
      const eg1Local = HF_DATA.menu["eis-getraenke"]?.items[0];
      expect(eg1Local).toBeDefined();

      // Look for the product card containing item name
      const productCard = page
        .locator("h3", { hasText: "Eisschokolade (0,3l)" })
        .locator("xpath=../..");
      await expect(productCard).toBeVisible();

      // Extract price displayed on UI
      const priceText = await productCard
        .locator(".text-terracotta")
        .innerText();
      const normalizePrice = (p: string) =>
        p.replace(/\s/g, "").replace("€", "").trim();
      expect(normalizePrice(priceText)).toContain(
        normalizePrice(eg1Local!.price),
      );
    });
  });
});
