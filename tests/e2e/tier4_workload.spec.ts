import { test, expect } from "@playwright/test";

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

test.describe("Tier 4 - Real-World User Workloads & AI Agent Navigation Scenarios", () => {
  // ==========================================
  // SCENARIO 1: Real-World User Order Workload
  // ==========================================
  test("simulates a user landing, browsing the menu, adding items to cart, and entering checkout", async ({
    page,
  }) => {
    // 1. Landing on Homepage
    await page.goto("/");
    await waitForHydration(page);
    await expect(page.locator("body")).toContainText("Hey Fede");

    // 2. Navigating to Menu page
    const menuLink = page
      .locator('nav[role="navigation"] >> text=Speisekarte')
      .first();
    await menuLink.click();
    await page.waitForURL("**/menu**");
    await waitForHydration(page);

    // 3. Filtering to "crepes" category and adding a Crêpe to cart
    // Navigate via query param to ensure category is active
    await page.goto("/menu?category=crepes");
    await waitForHydration(page);

    // Locate the Nutella Crêpe card and click it to add to cart
    const crepeCard = page.locator("h3", { hasText: /Nutella/i }).first();
    await expect(crepeCard).toBeVisible({ timeout: 15000 });
    await crepeCard.click();

    // Verify cart count badge in header shows 1 item
    const cartBadge = page
      .locator("button[aria-label='Warenkorb'] >> span")
      .first();
    await expect(cartBadge).toHaveText("1");

    // 4. Open Cart Sidebar
    const cartBtn = page.locator("button[aria-label='Warenkorb']").first();
    await cartBtn.click();

    // Verify Cart Drawer is visible and contains our Nutella crepe
    const cartDrawer = page.locator("role=dialog[name='Warenkorb']");
    await expect(cartDrawer).toBeVisible();
    await expect(cartDrawer).toContainText("Nutella");

    // 5. Navigate to Checkout Page
    const checkoutBtn = page.locator("text=Weiter zur Kasse").first();
    await checkoutBtn.click();
    await page.waitForURL("**/checkout**");
    await waitForHydration(page);

    // 6. Fill Checkout Form (Step 1 of 3)
    const nameInput = page.locator("#checkout-name");
    const emailInput = page.locator("#checkout-email");
    const phoneInput = page.locator("#checkout-phone");

    await expect(nameInput).toBeVisible();
    await nameInput.fill("Test User");
    await emailInput.fill("testuser@example.com");
    await phoneInput.fill("017612345678");

    // Check that the form values have been filled correctly
    await expect(nameInput).toHaveValue("Test User");
    await expect(emailInput).toHaveValue("testuser@example.com");
    await expect(phoneInput).toHaveValue("017612345678");

    // Verify that the cart summary column displays the correct item name
    const rightCol = page.locator("div.bg-cream-warm");
    await expect(rightCol).toContainText("Nutella");
  });

  // ==========================================
  // SCENARIO 2: AI Agent Navigation Scenarios
  // ==========================================
  test.describe("AI Agent Navigation & Semantic Resource Discovery", () => {
    test("GET /llms.txt returns valid directory structure for LLMs", async ({
      request,
    }) => {
      const response = await getWithRetry(request, "/llms.txt");
      expect(response.status()).toBe(200);

      const contentType = response.headers()["content-type"];
      expect(contentType).toMatch(/text\/plain/);

      const text = await response.text();
      expect(text).toContain("Hey Fede!");
      expect(text).toContain("Speisekarte");
    });

    test("GET /llms-full.txt returns full details for LLM crawling", async ({
      request,
    }) => {
      const response = await getWithRetry(request, "/llms-full.txt");
      expect(response.status()).toBe(200);

      const contentType = response.headers()["content-type"];
      expect(contentType).toMatch(/text\/plain/);

      const text = await response.text();
      expect(text).toContain("Hey Fede!");
    });

    test("pages contain alternate link metadata for markdown mirroring", async ({
      page,
    }) => {
      // Go to homepage and check for <link rel="alternate" type="text/markdown">
      await page.goto("/");
      await waitForHydration(page);

      const alternateLink = page
        .locator('link[rel="alternate"][type="text/markdown"]')
        .first();
      await expect(alternateLink).toBeAttached();

      const href = await alternateLink.getAttribute("href");
      expect(href).not.toBeNull();
      expect(href).toMatch(/\.md$/);

      // Verify the mirrored markdown file is reachable and returns 200 OK
      const url = new URL(href!, page.url());
      const localPath = url.pathname;
      const mdResponse = await getWithRetry(page.request, localPath);
      expect(mdResponse.status()).toBe(200);
      const mdText = await mdResponse.text();

      // Mirror markdown files should start with YAML frontmatter
      expect(mdText.trim().startsWith("---")).toBe(true);
      expect(mdText).toContain("title:");
      expect(mdText).toContain("ai-summary:");
    });

    test("GET /api/ai-agent/health returns API health status", async ({
      request,
    }) => {
      const response = await getWithRetry(request, "/api/ai-agent/health");
      expect(response.status()).toBe(200);

      const json = await response.json();
      expect(json.status).toBe("ok");
      expect(json.service).toBe("ai-agent-api");
      expect(json.environment).toBeDefined();
      expect(json.checks.firebaseAdmin).toMatch(
        /(initialized|warning_not_configured)/,
      );
    });
  });
});
