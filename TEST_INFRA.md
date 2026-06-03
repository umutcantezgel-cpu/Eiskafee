# E2E Test Infrastructure

## 1. Test Philosophy

- **Requirement-Driven**: Tests must rigorously validate the requirements outlined in the `ORIGINAL_REQUEST.md`, specifically focusing on the Next.js 14/15 App Router application and its strict Server/Client component separation.
- **Opaque-Box Testing**: Testing must validate end-to-end user journeys from the outside in, without relying on internal component implementation details. External dependencies like Firebase should use the Firebase Local Emulator Suite to ensure determinism and avoid mutating production databases while genuinely evaluating security rules.
- **Scope Disclaimer**: Checking source code directives like `"use client"` and `useEffect` cleanups is OUT OF SCOPE for E2E testing and must be handled by static analysis.
- **Progressive Testability**: Follow a strict 4-Tier strategy. Build confidence sequentially from simple static routes (Tier 1) to complex real-world scenarios (Tier 4).
- **Safety & Stability**: Ensure absolute hydration safety. There must be zero React hydration mismatches, unhandled errors, or memory leaks across the interactive canvas and physics components.
- **Accessibility (A11y)**: Automated baseline accessibility checks (e.g., contrast, ARIA labels) must be enforced across all key user journeys.

## 2. Test Architecture using Playwright

- **Framework**: Playwright (`@playwright/test`) is selected for its robust Next.js support, canvas inspection, and cross-browser reliability.
- **Environment**: Base URL configured to `http://localhost:3000`. Tests should run against the production build output (`npm run build && npm run start`) to accurately capture SSR/hydration behavior.
- **Configuration (`playwright.config.ts`)**:
  - **Browsers**: Chromium, WebKit, Firefox.
  - **Error Monitoring**: Listen to `page.on('console')` and `page.on('pageerror')` globally to detect hydration mismatches (`Text content did not match`), unhandled React errors, or Matter.js canvas crashes. Playwright's `CDPSession` (Chrome DevTools Protocol) will be used to monitor JS heap size for memory leak detection.
  - **Firebase Integration**: Use the Firebase Local Emulator Suite for Auth and Database reads/writes to keep tests fast, deterministic, and to accurately test security rules.
- **Plugins**: Incorporate `@axe-core/playwright` for automated A11y scanning on critical pages.

## 3. Feature Inventory (Tiers 1-3)

### Tier 1: Core Navigation & Static Content

Verifies that basic routing and server-rendered content load correctly without errors.

- **Home (`/`)**: SEO meta tags, basic layout loading.
- **Core Pages**: `/menu`, `/about`, `/visit`.
- **Info & Legal Pages**: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/legal?tab=impressum`, `/legal?tab=privacy`.
- **Global UI**: Header, Footer, navigation links functionality, Custom 404 (`not-found.tsx`).
- **Global A11y**: Baseline `axe` checks on core pages ensuring no "Low Contrast" or "Missing Label" errors.

### Tier 2: Interactive Master-Features (Client Components)

Verifies that advanced interactive components mount, run, and unmount safely.

- **SyrupCursor**: Renders correctly on desktop viewports.
- **LiquidTransition**: Smooth page transitions without React tree crashes.
- **PhysicsPlayground (Matter.js)**: `<canvas>` renders properly; no WebGL or RequestAnimationFrame (RAF) errors in console.
- **ScratchCard**: Component mounts and is visually present.
- **Hydration & Memory Safety**: Console must be free of hydration mismatches or unhandled errors across all interactive pages.

### Tier 3: Form Submissions & State Management

Verifies isolated functional flows before chaining them into complete scenarios.

- **Cart Management (Zustand)**: Open CartDrawer, add items, update quantities, remove items, verify total calculation.
- **User Authentication**: Test login/register forms using the Firebase Local Emulator Suite, verify correct validation errors and successful submission.
- **Support Forms**: Submit forms on `/kontakt` and `/reservierung` and verify success states.
- **Order Flow Fragments**: Independent verification of `/order-hub`, `/checkout`, `/pickup-time`, `/order-review`, `/confirmation`, and `/order-status`.

## 4. Real-World Application Scenarios for Tier 4

These scenarios follow a requirement-driven, opaque-box methodology to validate the entire application flow.

### Scenario 1: The Hungry Guest (End-to-End Order Flow)

**Goal**: Validate the complete "Order-Flow" pages requested in `ORIGINAL_REQUEST.md`.

1. User lands on `/` and navigates to `/menu`.
2. User adds multiple dessert items to the Cart.
3. User proceeds to `/order-hub` and clicks "Checkout".
4. User enters details on `/checkout`.
5. User selects a valid time on `/pickup-time`.
6. User reviews the order summary on `/order-review`.
7. User confirms the order and is redirected to `/confirmation`.
8. User checks the status on `/order-status`.
   **Assertions**: The user can progress through all steps without errors. Cart state persists through steps, and order totals are accurate on the review page.

### Scenario 2: The Playful Visitor (Hydration & Memory Safety Check)

**Goal**: Verify Hydration Safety and Memory Management criteria.

1. User visits `/` and interacts with the `SyrupCursor`.
2. User navigates through the `LiquidTransition` to `/menu` and `/about`.
3. User interacts with the `PhysicsPlayground` and tries the `ScratchCard` feature.
4. User navigates back and forth between these interactive pages rapidly (e.g., 5 times).
   **Assertions**:

- Console contains exactly zero "Hydration failed" or "Text content did not match" errors.
- Console contains exactly zero "Uncaught Error" or Matter.js engine crashes.
- System validates via Playwright's CDPSession (Chrome DevTools Protocol) that no memory leaks or uncleaned RAF loops occur.

### Scenario 3: Global Accessibility & Setup (A11y & Auth)

**Goal**: Verify A11y and Authenticated flows.

1. Playwright navigates across Tier 1 static pages and the complete Order-Flow.
2. Injects `@axe-core/playwright` and runs checks.
3. Authenticated user logs in via `/auth`, verifies profile at `/profile`.
   **Assertions**:

- Axe reports 0 critical/serious violations.
- Profile and secure areas load correctly based on authenticated session state via the Firebase Local Emulator Suite.

## 5. Coverage Thresholds

- **A11y**: 100% of tested pages must pass `@axe-core/playwright` with zero critical or serious violations.
- **Hydration/Errors**: 0 hydration mismatches and 0 unhandled console errors are permitted across all Tier 1-4 tests.
- **E2E Scenario Coverage**: Tier 4 scenarios must successfully pass in CI environments simulating a production build.
