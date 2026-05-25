# Analysis of Playwright E2E Test Requirements

## Observation
- `TEST_INFRA.md` mandates the use of Playwright as the E2E test runner for Next.js with tests located in `tests/e2e/*.spec.ts`.
- `ORIGINAL_REQUEST.md` specifies Next.js 14/15 App Router architecture with Framer Motion, Matter.js, and Zustand.
- Four features are prioritized for Tier 1 testing: Global Layout, SyrupCursor, LiquidTransition, and PhysicsPlayground. Each requires at least 5 opaque-box tests.
- `package.json` does not currently include Playwright dependencies or scripts.
- Opaque-box testing requires interacting with the application via the browser without accessing internal React/Zustand state or Matter.js engine instances.

## Logic Chain
1. **Setup & Config**: Playwright needs to be installed (`npm init playwright@latest`). `playwright.config.ts` must configure the Next.js `webServer` (either `npm run dev` or `npm run start`) and define the `tests/e2e` test directory as per `TEST_INFRA.md`.
2. **Global Layout Tests**: Must verify the presence of core structural elements (Header, Footer) across multiple routes and ensure navigation works without breaking the layout.
3. **SyrupCursor Tests**: Opaque-box testing of a custom cursor requires simulating mouse movements and asserting that the custom cursor DOM element follows the coordinates, changes state on interactive elements, and hides when the mouse leaves the page.
4. **LiquidTransition Tests**: Testing a page transition requires asserting that an overlay element appears during route changes, covers the viewport, and that the URL successfully updates once the transition completes.
5. **PhysicsPlayground Tests**: Testing a Matter.js physics engine in an opaque box is challenging. If rendered via `<canvas>`, we can assert the canvas exists, has the correct dimensions, and that interacting with it (mouse clicks/drags) doesn't produce browser console errors. If rendered via DOM elements, we can assert that element bounding boxes change over time (due to gravity). We must also ensure hydration errors do not occur.

## Caveats
- Since the components are not fully implemented yet, the test scenarios rely on assumed data attributes (e.g., `data-testid="syrup-cursor"`, `data-testid="liquid-overlay"`). The implementation must match these selectors.
- Exact Matter.js object positions cannot be easily tested in a pure opaque `<canvas>` without visual regression testing. The scenarios recommend checking for canvas presence, no console errors, and canvas interaction.

## Conclusion

### Recommended Directory Structure
```text
tests/e2e/
├── global-layout.spec.ts
├── syrup-cursor.spec.ts
├── liquid-transition.spec.ts
├── physics-playground.spec.ts
```

### Recommended `playwright.config.ts` Setup
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
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm run dev', // Or 'npm run build && npm run start' for CI
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### Test Case Scenarios (5 per Feature)

**1. Global Layout (`global-layout.spec.ts`)**
1. *Header visibility*: The header is present and visible on the home page.
2. *Footer visibility*: The footer is present and visible on the home page.
3. *Navigation*: Clicking a header link navigates to the correct URL (e.g., `/menu`).
4. *Persistence*: Header and footer remain visible after navigating to a different page.
5. *Responsiveness*: The header adapts to mobile viewports (e.g., hamburger menu appears and opens correctly).

**2. SyrupCursor (`syrup-cursor.spec.ts`)**
1. *Presence*: The custom cursor element (`data-testid="syrup-cursor"`) is injected into the DOM.
2. *Tracking*: When the mouse moves, the custom cursor element's CSS `transform` or `top/left` properties update to match the mouse coordinates.
3. *Hover State*: Hovering over a button or link adds a specific class or modifier (e.g., `cursor-hover`) to the custom cursor.
4. *Click State*: Clicking the mouse triggers a visual change (e.g., scale reduction) on the cursor element.
5. *Boundary/Leave*: Moving the mouse out of the viewport hides the custom cursor element.

**3. LiquidTransition (`liquid-transition.spec.ts`)**
1. *Trigger on Navigation*: Clicking an internal link triggers the appearance of the liquid transition overlay (`data-testid="liquid-overlay"`).
2. *Full Screen Coverage*: During the transition, the overlay covers 100% of the viewport width and height.
3. *URL Update*: The browser URL correctly updates to the target page while the transition overlay is active.
4. *Dismissal*: After the target page loads, the liquid transition overlay is removed or hidden from the DOM.
5. *Browser Back Button*: Navigating back using the browser's back button correctly triggers the transition again.

**4. PhysicsPlayground (`physics-playground.spec.ts`)**
1. *Rendering*: The physics playground container or canvas (`data-testid="physics-canvas"`) renders successfully on the page.
2. *Hydration Safety*: The page loads the physics playground without throwing any hydration or server-side rendering console errors.
3. *Interactivity (Drag)*: Simulating a mouse drag within the canvas boundaries does not throw errors and (if DOM-based) changes the position of a physics object.
4. *Resize Stability*: Resizing the browser window updates the canvas dimensions properly without crashing the page.
5. *Cleanup*: Navigating away from the PhysicsPlayground page cleans up the Matter.js engine (verified by ensuring no memory leaks or active physics loops throw console errors on the new page).

## Verification Method
1. Install Playwright: `npm init playwright@latest`
2. Create the `playwright.config.ts` and `tests/e2e/` files as specified.
3. Run `npx playwright test` and verify that the tests attempt to execute.
4. The implementation team will need to add `data-testid` attributes matching the test assertions.
