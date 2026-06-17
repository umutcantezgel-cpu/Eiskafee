import { test, expect } from "@playwright/test";

test("homepage is reachable and has correct title/heading", async ({
  page,
}) => {
  // Navigate to the base URL
  await page.goto("/");

  // Expect the page to have some title containing Bubble Waffles or similar
  const title = await page.title();
  console.log("Page title is:", title);
  expect(title).toMatch(/(Bubble Waffles|Hey Fede)/i);

  // Check that key layout is loaded, e.g. body element exists
  const body = page.locator("body");
  await expect(body).toBeVisible();
});
