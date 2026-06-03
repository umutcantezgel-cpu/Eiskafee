# E2E Test Infrastructure & Feature Inventory

## 1. Test Infrastructure Design

### Framework & Tools

- **E2E Framework**: Playwright (`@playwright/test` is already installed). Playwright is chosen for its excellent cross-browser support, network interception, and ability to easily test opaque-box scenarios.
- **Accessibility (A11y)**: `@axe-core/playwright` for automated accessibility checks (contrast, ARIA labels).
- **Performance**: Lighthouse CI (`@lhci/cli`) to validate the performance requirements.
- **Console Monitoring**: Playwright will be configured to listen to `page.on('console')` and `page.on('pageerror')` to detect hydration mismatches, React errors, or Matter.js canvas crashes.

### Configuration (`playwright.config.ts` plan)

- **Base URL**: `http://localhost:3000` (run against `npm run build && npm run start` for accurate production behavior).
- **Browsers**: Chromium, WebKit, Firefox.
- **Retries**: 1 retry on CI.
- **Reporters**: HTML reporter and CI standard output.

---

## 2. Feature Inventory

### Tier 1: Core Navigation & Structure (P0)

Verifies that basic routing and static content render correctly without errors.

- `/` (Home)
- `/menu` (Menu)
- `/about` (About)
- `/visit` (Visit)
- Global Layout (Header, Footer presence on all pages)

### Tier 2: Interactive Master-Features

Verifies that advanced interactive components mount, run, and unmount without throwing errors or causing hydration mismatches.

- **SyrupCursor**: Renders on desktop viewports.
- **LiquidTransition**: Smooth navigation between pages without React tree crashes.
- **PhysicsPlayground (Matter.js)**: Canvas renders, no WebGL/RAF errors in console.
- **ScratchCard**: Component mounts and is visually present.

### Tier 3: Sub-Routes & Component Flows

Verifies isolated functional flows before chaining them into full scenarios.

- **Cart**: Add item, update quantity, remove item, verify totals.
- **Auth**: Mock login/register interactions.
- **Support**: Form validation and submission.
- **Legal Pages**: `/imprint`, `/privacy` render successfully.

---

## 3. Real-World Scenarios (Tier 4)

These scenarios follow a requirement-driven, opaque-box methodology to validate the entire acceptance criteria.

### Scenario 1: The Complete Order-Flow (Happy Path)

**Goal**: Verify R1 (Implementierung der fehlenden "Order-Flow" Pages).
**Steps**:

1. User visits `/menu` and adds items to the Cart.
2. User proceeds to `/order-hub` and clicks "Checkout".
3. User fills out details on `/checkout` and submits.
4. User selects a time on `/pickup-time`.
5. User reviews the order summary on `/order-review`.
6. User confirms and is redirected to `/confirmation`.
7. User checks the status on `/order-status`.
   **Assertions**: The user can progress through all steps without errors. Relevant data is carried over (opaque-box: verify totals/items on the review page).

### Scenario 2: Hydration & Memory Safety Check

**Goal**: Verify Hydration Safety and Memory Management criteria.
**Steps**:

1. User navigates to Home `/`.
2. User clicks a link to `/menu` (triggering LiquidTransition).
3. User navigates back and forth between pages with physics/canvas features 5 times rapidly.
   **Assertions**:

- Console contains exactly **zero** "Hydration failed" or "Text content did not match" errors.
- Console contains exactly **zero** "Uncaught Error" or Matter.js engine crashes.
- No memory leak warnings.

### Scenario 3: Global Accessibility & Error-Free Build Validation

**Goal**: Verify A11y, Performance & UI requirements.
**Steps**:

1. Playwright dynamically navigates to every route listed in Tier 1 and the Order-Flow.
2. Injects `@axe-core/playwright`.
   **Assertions**:

- Axe reports 0 critical/serious violations (especially "Low Contrast" and "Missing Label").
- No visual or DOM errors on load.
