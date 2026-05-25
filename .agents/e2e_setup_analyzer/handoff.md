# Handoff Report: E2E Test Setup Analysis

## 1. Observation
- The `hey-fede-app` project is a Next.js 14/15 App Router application emphasizing strict Server/Client component separation.
- `ORIGINAL_REQUEST.md` and `TEST_INFRA.md` define 4 key features for Tier 1 testing: **Global Layout**, **SyrupCursor**, **LiquidTransition**, and **PhysicsPlayground**.
- The testing framework is Playwright, with tests to be located in `tests/e2e/`.
- Acceptance criteria mandate checking for **hydration safety**, **memory management** (Matter.js/RAF cleanup), and **component separation** errors.
- At least 5 opaque-box test cases are required per feature.

## 2. Logic Chain
1. **Framework & Configuration**: Playwright is ideal for these interactive features. The `playwright.config.ts` must include a `webServer` block to automatically build and start the Next.js app (`npm run build && npm run start`). To enforce hydration safety and error-free rendering, the config or a global setup should fail tests if Next.js hydration errors or React boundary errors appear in `page.on('console')` or `page.on('pageerror')`.
2. **Test Structure Strategy**: To map 1:1 with the Feature Inventory, we should create individual spec files for each feature under `tests/e2e/`. This keeps tests isolated and maps directly to the milestones.
3. **Opaque-Box Scenarios**: 
   - **Global Layout**: Must test fundamental navigation, responsive visibility (mobile/desktop), and constant presence across routes.
   - **SyrupCursor**: Needs to verify mouse-following behavior, visual changes on hoverable targets, and disabling/hiding on touch devices.
   - **LiquidTransition**: Focuses on the presence of the transition element during navigation, preventing layout breakage on rapid navigation, and visual completion.
   - **PhysicsPlayground**: Must assert the existence of the `<canvas>` or Matter.js container, user drag interactions (MouseConstraint), gravity/falling simulation (via bounding box changes), and layout stability on window resize.
4. **Hydration & Memory Leaks**: While exact memory leak detection is hard in standard E2E, navigating away and back to the `PhysicsPlayground` repeatedly while asserting that multiple `<canvas>` instances or duplicate engines aren't spawned serves as an effective opaque-box heuristic.

## 3. Caveats
- Since the components are not fully implemented yet, the test scenarios rely on standard semantic HTML/accessibility roles, or placeholder locators (like `data-testid="physics-canvas"`). These locators will need to be matched by the implementers.
- Opaque-box testing cannot perfectly verify internal memory cleanup (e.g., Matter.js `Engine.clear()`), so tests will rely on DOM cleanup and consecutive navigation stability as proxies.

## 4. Conclusion
I recommend the following Playwright setup and test scenarios for Tier 1 coverage:

### Directory Structure
```
hey-fede-app/
├── playwright.config.ts
└── tests/
    └── e2e/
        ├── global-layout.spec.ts
        ├── syrup-cursor.spec.ts
        ├── liquid-transition.spec.ts
        └── physics-playground.spec.ts
```

### Recommended `playwright.config.ts` Setup
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    // Treat console errors (hydration, React errors) as test failures
    failOnConsoleError: true, 
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### Test Case Scenarios (≥5 per feature)

**1. Global Layout (`global-layout.spec.ts`)**
1. *Visibility on all pages*: Header and Footer are visible on Home, Menu, About, and Visit pages.
2. *Desktop Navigation*: Clicking header links correctly routes to corresponding pages without full page reload.
3. *Mobile Menu Toggle*: On mobile viewports, the hamburger menu opens the navigation overlay, and it can be closed.
4. *Logo Routing*: Clicking the brand logo from any sub-page routes back to the Home page.
5. *Footer Content*: Footer displays correct copyright information, legal links, and social icons.

**2. SyrupCursor (`syrup-cursor.spec.ts`)**
1. *Initial Render*: The custom cursor element is injected into the DOM and visible on desktop viewports.
2. *Mouse Tracking*: Moving the mouse updates the `transform` or `top/left` CSS properties of the cursor element to match page coordinates.
3. *Hover State*: Hovering over a clickable element (`<a>`, `<button>`) changes the cursor's visual state (e.g., adds an "active" or "hover" class).
4. *Viewport Bounds*: Moving the cursor to the extreme edges does not cause unintended horizontal or vertical scrollbars.
5. *Touch Device Exclusion*: On mobile viewports/touch devices, the custom cursor element is not rendered or is hidden.

**3. LiquidTransition (`liquid-transition.spec.ts`)**
1. *Trigger on Navigation*: Clicking a navigation link triggers the liquid transition overlay before the new page content appears.
2. *Content Visibility Post-Transition*: The transition element unmounts or becomes transparent, ensuring the new page is fully visible and interactive.
3. *Browser History*: Using the browser's Back and Forward buttons also triggers the fluid transition effect smoothly.
4. *Rapid Navigation Handling*: Rapidly clicking multiple links does not trap the user in a perpetual transition state or crash the app.
5. *Hydration Safety*: Navigating between server-rendered and client-rendered pages during the transition does not throw hydration mismatch errors in the console.

**4. PhysicsPlayground (`physics-playground.spec.ts`)**
1. *Canvas Initialization*: The physics playground renders a `<canvas>` element (or Matter.js container) upon navigating to the playground section.
2. *Entity Presence*: The canvas contains interactive entities (e.g., dessert shapes) that settle at the bottom of the container due to gravity.
3. *Drag Interaction*: Simulating a mouse drag on an entity moves it from its initial position (testing Matter.js `MouseConstraint`).
4. *Cleanup & Memory*: Navigating away from the playground and back multiple times does not duplicate the `<canvas>` element or cause performance degradation/console warnings.
5. *Responsive Boundaries*: Resizing the browser window adjusts the Matter.js physics boundaries, preventing entities from falling out of the viewport.

## 5. Verification Method
- **Implementation**: The proposed structure should be created in the repository.
- **Execution**: Run `npx playwright test`. 
- **Validation**:
  - Tests will initially fail (acting as TDD requirements).
  - Check that the `webServer` properly builds the Next.js app.
  - Verify that hydration errors caught via `page.on('console')` successfully fail the test runs.
  - As the implementation team delivers the features, the E2E tests should pass with an exit code of `0`.
