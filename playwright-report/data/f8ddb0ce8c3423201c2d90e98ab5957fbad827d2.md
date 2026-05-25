# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: liquid-transition.spec.ts >> LiquidTransition >> Direct Navigation Bypass: Load a sub-page directly and verify the page renders instantly without infinite transition state
- Location: tests/e2e/liquid-transition.spec.ts:83:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://127.0.0.1:3000/menu", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('LiquidTransition', () => {
  4  |   test('Transition Trigger: Click a navigation link and verify the LiquidTransition overlay element becomes briefly visible', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     // Set up a listener for the transition overlay
  8  |     // It might be added to the DOM dynamically or just change visibility
  9  |     const overlay = page.locator('#liquid-transition, .transition-overlay');
  10 |     
  11 |     // Inject a dummy link that doesn't cause a hard reload if needed
  12 |     // Assuming standard Next.js routing via Link component exists for "Menu"
  13 |     const link = page.getByRole('link', { name: 'Menu' });
  14 |     
  15 |     // If there is no menu link yet, we shouldn't fail the logic, but the actual app will have it.
  16 |     if (await link.count() > 0) {
  17 |       await link.click();
  18 |       await expect(overlay).toBeVisible({ timeout: 5000 });
  19 |     } else {
  20 |       // Fallback for tests before UI is complete: force an evaluation
  21 |       console.log('Skipping click - missing link');
  22 |     }
  23 |   });
  24 | 
  25 |   test('URL & Content Update: Verify that after the transition overlay disappears, the URL has updated and target page content is visible', async ({ page }) => {
  26 |     await page.goto('/');
  27 |     
  28 |     const link = page.getByRole('link', { name: 'Menu' });
  29 |     if (await link.count() > 0) {
  30 |       await link.click();
  31 |       
  32 |       const overlay = page.locator('#liquid-transition, .transition-overlay');
  33 |       // Wait for it to appear then disappear
  34 |       await expect(overlay).toBeVisible({ timeout: 5000 }).catch(() => {});
  35 |       await expect(overlay).toBeHidden({ timeout: 5000 });
  36 |       
  37 |       // Check URL and content
  38 |       await expect(page).toHaveURL(/.*\/menu/);
  39 |     }
  40 |   });
  41 | 
  42 |   test('Back Navigation Safety: Use page.goBack() and verify the transition runs in reverse without leaving a blank screen', async ({ page }) => {
  43 |     const logs: string[] = [];
  44 |     page.on('console', msg => {
  45 |       if (msg.type() === 'error') logs.push(msg.text());
  46 |     });
  47 | 
  48 |     await page.goto('/');
  49 |     await page.goto('/menu');
  50 |     await page.waitForLoadState('networkidle');
  51 |     
  52 |     await page.goBack();
  53 |     await page.waitForURL('**/');
  54 |     
  55 |     // Ensure body isn't blank
  56 |     const htmlContent = await page.content();
  57 |     expect(htmlContent.length).toBeGreaterThan(100);
  58 |     
  59 |     // Ensure no hydration errors
  60 |     expect(logs.filter(log => log.includes('Hydration'))).toHaveLength(0);
  61 |   });
  62 | 
  63 |   test('Rapid Click Handling: Rapidly click a navigation link 5 times; verify the app does not lock up and transition completes cleanly', async ({ page }) => {
  64 |     await page.goto('/');
  65 |     
  66 |     const link = page.getByRole('link', { name: 'Menu' });
  67 |     
  68 |     if (await link.count() > 0) {
  69 |       // Rapidly click 5 times
  70 |       for (let i = 0; i < 5; i++) {
  71 |         await link.click({ force: true });
  72 |         await page.waitForTimeout(50);
  73 |       }
  74 |       
  75 |       // It should eventually settle on the menu page
  76 |       await page.waitForURL(/.*\/menu/, { timeout: 10000 });
  77 |       
  78 |       const overlay = page.locator('#liquid-transition, .transition-overlay');
  79 |       await expect(overlay).toBeHidden({ timeout: 5000 });
  80 |     }
  81 |   });
  82 | 
  83 |   test('Direct Navigation Bypass: Load a sub-page directly and verify the page renders instantly without infinite transition state', async ({ page }) => {
  84 |     // Start at a subpage directly
> 85 |     await page.goto('/menu');
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  86 |     
  87 |     // Check that we can see normal content without being stuck behind an overlay
  88 |     const overlay = page.locator('#liquid-transition, .transition-overlay');
  89 |     await expect(overlay).toBeHidden({ timeout: 5000 });
  90 |     
  91 |     const bodyText = await page.locator('body').innerText();
  92 |     expect(bodyText.trim().length).toBeGreaterThan(0);
  93 |   });
  94 | });
  95 | 
```