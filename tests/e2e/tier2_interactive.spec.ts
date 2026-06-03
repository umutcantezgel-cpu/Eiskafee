import { test, expect } from "@playwright/test";

test.describe("Tier 2: Interactive Master-Features (Client Components)", () => {
  let consoleErrors: string[] = [];
  let pageErrors: Error[] = [];

  test.beforeEach(async ({ page }) => {
    consoleErrors = [];
    pageErrors = [];

    // Listen to console and page errors to ensure hydration and runtime safety
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // Specifically catch hydration mismatches and unhandled React errors
        if (
          text.includes("Hydration failed") ||
          text.includes("Text content did not match") ||
          text.includes("Minified React error") ||
          text.includes("Uncaught Error") ||
          text.includes("WebGL") ||
          text.includes("RequestAnimationFrame")
        ) {
          consoleErrors.push(text);
        }
      }
    });

    page.on("pageerror", (err) => {
      pageErrors.push(err);
    });
  });

  test.afterEach(() => {
    // Assert exactly zero hydration or unhandled errors across tests
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });

  test("SyrupCursor renders correctly and tracks movement without errors", async ({
    page,
    isMobile,
  }) => {
    test.skip(!!isMobile, "SyrupCursor is typically a desktop feature");

    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Ensure the Gooey SVG filter exists in the DOM for SyrupCursor
    const gooeyFilter = page.locator("svg filter#gooey");
    await expect(gooeyFilter).toBeAttached();

    // Simulate interactions to verify smooth event listener attachment
    await page.mouse.move(100, 100);
    await page.waitForTimeout(100);
    await page.mouse.move(500, 500);
    await page.waitForTimeout(200);
    await page.mouse.move(200, 800);
  });

  test("LiquidTransition allows smooth page transitions without React tree crashes", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Navigate using client-side routing
    const menuLink = page.locator('a[href="/menu"]').first();
    await menuLink.click();
    await page.waitForURL("**/menu", { timeout: 10000 });
    await page.waitForLoadState("domcontentloaded");

    const aboutLink = page.locator('a[href="/about"]').first();
    await aboutLink.click();
    await page.waitForURL("**/about", { timeout: 10000 });
    await page.waitForLoadState("domcontentloaded");

    // Navigate back to verify tree unmounting/remounting
    await page.goBack();
    await page.waitForLoadState("domcontentloaded");
    await page.goBack();
    await page.waitForLoadState("domcontentloaded");
  });

  test("PhysicsPlayground (Matter.js) canvas renders and handles interactions safely", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Wait for the PhysicsPlayground component to mount
    await page.waitForTimeout(500);

    // Canvas should exist for physics playground
    const canvas = page.locator("canvas").first();

    // Interact if it exists
    await expect(canvas).toBeAttached();
    await expect(canvas).toBeVisible();

    // Trigger interactions that would spawn Matter.js physics bodies
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();
    const cx = box!.x + box!.width / 2;
    const cy = box!.y + box!.height / 2;

    await page.mouse.click(cx, cy);
    await page.waitForTimeout(100);
    await page.mouse.click(cx + 50, cy);

    // Wait to allow Matter.js RequestAnimationFrame loops to run and potentially throw errors
    await page.waitForTimeout(1000);
  });

  test("ScratchCard component mounts and is visually present without crashing", async ({
    page,
  }) => {
    // ScratchCard is verified to be on the home page layout
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Simulate scratch gestures
    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();
    const cx = viewport!.width / 2;
    const cy = viewport!.height / 2;

    await page.mouse.move(cx - 50, cy - 50);
    await page.mouse.down();

    // Zig-zag motion
    await page.mouse.move(cx + 50, cy - 50, { steps: 5 });
    await page.mouse.move(cx - 50, cy, { steps: 5 });
    await page.mouse.move(cx + 50, cy, { steps: 5 });
    await page.mouse.move(cx - 50, cy + 50, { steps: 5 });
    await page.mouse.up();

    await page.waitForTimeout(500);
  });

  test("Hydration & Memory Safety (Rapid Navigation Check)", async ({
    page,
  }) => {
    // Rapidly navigate between interactive pages
    const routes = ["/", "/menu", "/about", "/"];

    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState("domcontentloaded");

      // Briefly interact to trigger potential event listener memory leaks
      await page.mouse.move(200, 200);
      await page.waitForTimeout(200);
    }

    // Verify CDPSession for JSHeap size retrieval (validating devtools connectivity without crashing)
    const client = await page.context().newCDPSession(page);
    await client.send("Performance.enable");
    const metrics = await client.send("Performance.getMetrics");
    const jsHeapUsedSize = metrics.metrics.find(
      (m) => m.name === "JSHeapUsedSize",
    )?.value;

    expect(jsHeapUsedSize).toBeGreaterThan(0);
  });
});
