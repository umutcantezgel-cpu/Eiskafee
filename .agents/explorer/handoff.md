# Playwright E2E Setup & Tier 1 Test Analysis

## 1. Observation
- `TEST_INFRA.md` requires an opaque-box, requirement-driven testing approach using Playwright, with tests located in `tests/e2e/*.spec.ts`.
- `ORIGINAL_REQUEST.md` mandates strict separation of Client/Server components, safe SSR hydration for Canvas/Matter.js, and prevention of memory leaks (proper cleanup of RAF and Matter.js engines).
- `package.json` does not currently include `@playwright/test` or any Playwright configuration.
- The 4 Tier 1 features are: Global Layout, SyrupCursor, LiquidTransition, and PhysicsPlayground. Each requires at least 5 opaque-box test scenarios.

## 2. Logic Chain
- **Setup:** Because `package.json` lacks Playwright, the initial setup must involve installing `@playwright/test` and creating a Next.js-optimized `playwright.config.ts`. The config must spin up the Next.js dev or prod server for E2E runs.
- **Test Strategy:** Since the philosophy is opaque-box, tests must verify behavior via user-visible outcomes (DOM changes, URLs, cursor positions, no console errors) rather than checking React component states.
- **Hydration & Memory:** To meet the strict architecture constraints, tests for `PhysicsPlayground` and `SyrupCursor` must actively listen for browser console errors (`page.on('console')` and `pageerror`) during navigation to ensure there are no hydration mismatches or memory leak errors when components mount/unmount.

## 3. Caveats
- Canvas testing (Matter.js) is notoriously opaque. We cannot easily assert the exact pixel position of physics bodies. Tests will rely on asserting Canvas existence, resizing behavior, absence of JS crashes, and correct unmounting.
- The exact CSS classes, test IDs, or DOM elements used in the scenarios below are placeholders and should be adapted once the UI implementation of Phase 3/4 is finalized.

## 4. Conclusion

### A. Recommended Directory Structure
```
hey-fede-app/
├── playwright.config.ts
├── tests/
│   └── e2e/
│       ├── global-layout.spec.ts
│       ├── liquid-transition.spec.ts
│       ├── physics-playground.spec.ts
│       └── syrup-cursor.spec.ts
```

### B. Playwright Configuration Setup (`playwright.config.ts`)
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### C. Tier 1 Test Case Scenarios (5 per feature)

#### 1. Global Layout (`global-layout.spec.ts`)
1. **Header Rendering:** Verify the header is visible and contains core navigation links (Home, Menu, About, Visit).
2. **Footer Rendering:** Verify the footer loads with legal pages, contact info, and is structurally placed at the bottom.
3. **Mobile Responsiveness:** Viewport set to mobile; verify the hamburger menu is visible and toggles the navigation pane correctly.
4. **Layout Persistence:** Navigate across 3 different pages (Home -> Menu -> About) and verify the Layout (Header/Footer) persists without layout shift or unmounting errors.
5. **Sticky Header Behavior:** Scroll down the page and verify the header remains sticky/fixed (or transitions appropriately based on design).

#### 2. SyrupCursor (`syrup-cursor.spec.ts`)
1. **DOM Injection:** Verify the custom cursor container is present in the DOM upon page load without triggering Next.js hydration errors in the console.
2. **Native Cursor Hidden:** Verify that the `<body>` or main container has `cursor: none` applied.
3. **Movement Tracking:** Move the mouse via Playwright (`page.mouse.move()`) and assert the custom cursor element's inline style/transform updates to match the coordinates.
4. **Hover State Interaction:** Hover over a clickable element (button/link) and verify the cursor element receives an active/hover CSS class or scale transformation.
5. **Cleanup Validation:** Navigate between pages rapidly and check the console to ensure no `requestAnimationFrame` leaks or duplicate cursor elements are left behind.

#### 3. LiquidTransition (`liquid-transition.spec.ts`)
1. **Transition Trigger:** Click a navigation link and verify the LiquidTransition overlay element becomes briefly visible in the DOM.
2. **URL & Content Update:** Verify that after the transition overlay disappears, the URL has updated and the target page's content is visible.
3. **Back Navigation Safety:** Use `page.goBack()` and verify the transition runs in reverse without leaving a blank screen or causing hydration mismatches.
4. **Rapid Click Handling:** Rapidly click a navigation link 5 times; verify the app does not lock up and the transition completes cleanly to the target route.
5. **Direct Navigation Bypass:** Load a sub-page directly (e.g., `/menu`) and verify the page renders instantly without getting stuck in an infinite transition state.

#### 4. PhysicsPlayground (`physics-playground.spec.ts`)
1. **Canvas Hydration:** Navigate to the PhysicsPlayground page and verify the Matter.js `<canvas>` is mounted successfully with zero console errors (`next/dynamic` ssr:false validation).
2. **Interaction Safety:** Simulate click-and-drag events inside the canvas coordinates; verify no unhandled JavaScript exceptions are thrown by the engine.
3. **Resize Observer:** Resize the browser window via Playwright; verify the canvas width and height attributes update dynamically to fit the new container.
4. **Memory Leak / Engine Cleanup:** Navigate to the Physics page, then navigate away to the Home page. Verify via DOM and console that the Matter.js engine is destroyed (no ghost updates or lingering canvases).
5. **Multiple Instances Safety:** Navigate back and forth to the Physics page 3 times. Verify the page does not slow down and only one canvas exists at a time, proving `useEffect` cleanup is solid.

## 5. Verification Method
1. Install dependencies: `npm install -D @playwright/test`
2. Run installation: `npx playwright install`
3. Write the specs into the `tests/e2e/` folder matching the scenarios.
4. Execute the suite via `npx playwright test`.
5. Verify success by ensuring all 20 tests pass with a 0 exit code and no hydration errors in the output logs.
