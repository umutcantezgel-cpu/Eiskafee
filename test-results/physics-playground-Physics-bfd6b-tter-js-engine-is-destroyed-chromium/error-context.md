# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: physics-playground.spec.ts >> PhysicsPlayground >> Memory Leak / Engine Cleanup: Navigate to the Physics page, then away. Verify via DOM and console that the Matter.js engine is destroyed
- Location: tests/e2e/physics-playground.spec.ts:86:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://127.0.0.1:3000/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('PhysicsPlayground', () => {
  4   |   test('Canvas Hydration: Navigate to PhysicsPlayground and verify the Matter.js canvas is mounted successfully with zero console errors', async ({ page }) => {
  5   |     const logs: string[] = [];
  6   |     page.on('console', msg => {
  7   |       if (msg.type() === 'error') logs.push(msg.text());
  8   |     });
  9   |     page.on('pageerror', err => logs.push(err.message));
  10  | 
  11  |     // Assume the physics playground might be on the home page or a specific route
  12  |     await page.goto('/');
  13  |     
  14  |     // Attempt to navigate to a physics page if it exists, otherwise test the home page
  15  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  16  |     if (await physicsLink.count() > 0) {
  17  |       await physicsLink.click();
  18  |       await page.waitForLoadState('networkidle');
  19  |     }
  20  | 
  21  |     const canvas = page.locator('canvas').first();
  22  |     await expect(canvas).toBeAttached();
  23  |     
  24  |     // No hydration errors
  25  |     expect(logs.filter(log => log.includes('Hydration') || log.includes('Minified React error'))).toHaveLength(0);
  26  |   });
  27  | 
  28  |   test('Interaction Safety: Simulate click-and-drag events inside the canvas coordinates; verify no unhandled JS exceptions', async ({ page }) => {
  29  |     let hasError = false;
  30  |     page.on('pageerror', () => { hasError = true; });
  31  |     
  32  |     await page.goto('/');
  33  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  34  |     if (await physicsLink.count() > 0) {
  35  |       await physicsLink.click();
  36  |       await page.waitForLoadState('networkidle');
  37  |     }
  38  | 
  39  |     const canvas = page.locator('canvas').first();
  40  |     if (await canvas.count() > 0) {
  41  |       const box = await canvas.boundingBox();
  42  |       if (box) {
  43  |         // Simulate click and drag from center
  44  |         const startX = box.x + box.width / 2;
  45  |         const startY = box.y + box.height / 2;
  46  |         
  47  |         await page.mouse.move(startX, startY);
  48  |         await page.mouse.down();
  49  |         await page.mouse.move(startX + 100, startY + 100, { steps: 10 });
  50  |         await page.mouse.up();
  51  |       }
  52  |     }
  53  |     
  54  |     expect(hasError).toBe(false);
  55  |   });
  56  | 
  57  |   test('Resize Observer: Resize the browser window via Playwright; verify the canvas width and height attributes update dynamically', async ({ page }) => {
  58  |     await page.goto('/');
  59  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  60  |     if (await physicsLink.count() > 0) {
  61  |       await physicsLink.click();
  62  |       await page.waitForLoadState('networkidle');
  63  |     }
  64  | 
  65  |     const canvas = page.locator('canvas').first();
  66  |     if (await canvas.count() > 0) {
  67  |       // Set to one size
  68  |       await page.setViewportSize({ width: 800, height: 600 });
  69  |       await page.waitForTimeout(500); // Allow resize observer to fire
  70  |       
  71  |       const box1 = await canvas.boundingBox();
  72  |       
  73  |       // Set to another size
  74  |       await page.setViewportSize({ width: 1024, height: 768 });
  75  |       await page.waitForTimeout(500);
  76  |       
  77  |       const box2 = await canvas.boundingBox();
  78  |       
  79  |       if (box1 && box2) {
  80  |         expect(box2.width).not.toBe(box1.width);
  81  |         expect(box2.height).not.toBe(box1.height);
  82  |       }
  83  |     }
  84  |   });
  85  | 
  86  |   test('Memory Leak / Engine Cleanup: Navigate to the Physics page, then away. Verify via DOM and console that the Matter.js engine is destroyed', async ({ page }) => {
  87  |     const logs: string[] = [];
  88  |     page.on('console', msg => {
  89  |       if (msg.type() === 'error') logs.push(msg.text());
  90  |     });
  91  | 
> 92  |     await page.goto('/');
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  93  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  94  |     if (await physicsLink.count() > 0) {
  95  |       await physicsLink.click();
  96  |       await page.waitForLoadState('networkidle');
  97  |       
  98  |       // Verify canvas is there
  99  |       await expect(page.locator('canvas').first()).toBeAttached();
  100 |       
  101 |       // Navigate away
  102 |       await page.goto('/about');
  103 |       await page.waitForLoadState('networkidle');
  104 |       
  105 |       // Verify canvas is gone
  106 |       await expect(page.locator('canvas')).toHaveCount(0);
  107 |     }
  108 |     
  109 |     // Check for leak errors
  110 |     expect(logs.filter(log => log.toLowerCase().includes('leak') || log.toLowerCase().includes('engine'))).toHaveLength(0);
  111 |   });
  112 | 
  113 |   test('Multiple Instances Safety: Navigate back and forth to the Physics page 3 times. Verify only one canvas exists at a time', async ({ page }) => {
  114 |     await page.goto('/');
  115 |     
  116 |     // To reliably test this, we can force multiple visits
  117 |     for (let i = 0; i < 3; i++) {
  118 |       // Go to physics-related route or just home if it's there
  119 |       await page.goto('/?physics=true', { waitUntil: 'commit' });
  120 |       await page.waitForTimeout(500);
  121 |       
  122 |       await page.goto('/about', { waitUntil: 'commit' });
  123 |       await page.waitForTimeout(500);
  124 |     }
  125 |     
  126 |     await page.goto('/?physics=true', { waitUntil: 'networkidle' });
  127 |     
  128 |     // Ensure we don't have dangling canvases
  129 |     const canvases = page.locator('canvas');
  130 |     const count = await canvases.count();
  131 |     
  132 |     // Depending on architecture, might be 0 if not on the right page, but should never be > 1
  133 |     expect(count).toBeLessThanOrEqual(1);
  134 |   });
  135 | });
  136 | 
```