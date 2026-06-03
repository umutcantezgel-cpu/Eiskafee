# E2E Test Infrastructure and Feature Inventory Proposal

## Observation

I have analyzed the following artifacts to formulate the E2E testing strategy:

- `ORIGINAL_REQUEST.md`: Details the requirement for a Next.js 16 App Router application, strict Server/Client component separation, interactive master-features (SyrupCursor, LiquidTransition, PhysicsPlayground, ScratchCard), order flow pages (`/order-hub`, `/checkout`, `/pickup-time`, `/order-review`, `/confirmation`, `/order-status`), and automated checks for hydration safety, memory management, and A11y.
- `SCOPE.md`: Requires requirement-driven, opaque-box testing partitioned into Tiers 1-4.
- `PROJECT.md`: Defines the entry points (e.g., `app/`, `components/`), Zustand state for cart, and Firebase for backend.
- E2E Testing Track Principles: Enforce independent decomposition by feature area and progressive testability.

## Logic Chain

1. **Framework Selection**: Playwright is the optimal framework for Next.js 16 App Router applications. It natively supports React hydration checks, canvas inspection (critical for `matter-js`), network interception (mocking Firebase), and a11y scanning via `@axe-core/playwright`.
2. **Infrastructure Design**: The test suite should be organized into directories corresponding to the progressively testable Tiers (`e2e/tier1`, `e2e/tier2`, etc.). This aligns with the E2E Testing Track Principles. Network mocking will be used to keep tests opaque-box and deterministic without relying on live Firebase instances.
3. **Tier 1 (Core Navigation & Static Content)**: Focuses on SSR content and initial routing. Based on `PROJECT.md`, this includes the Home, Menu, About, Visit, Legal (Impressum, Datenschutz, AGB), and Info (FAQ, Kontakt, Gutscheine, Reservierung) pages. We also include the baseline A11y checks here as requested in `ORIGINAL_REQUEST.md`.
4. **Tier 2 (Interactive Features)**: Focuses on Client Components (`"use client"`). `ORIGINAL_REQUEST.md` explicitly lists `SyrupCursor`, `LiquidTransition`, `PhysicsPlayground`, and `ScratchCard`. Tests must verify hydration safety (no console errors) and canvas rendering.
5. **Tier 3 (Form Submissions & State Management)**: Focuses on Zustand and Auth. This includes Cart operations (add, remove, update), Authentication (login, registration), and form validations (Kontakt, Reservierung).
6. **Tier 4 (Real-World Scenarios)**: Combines Tiers 1-3 into complete user journeys. The most critical journey, as defined in `ORIGINAL_REQUEST.md`, is the full "Order Flow" from selecting items to `/confirmation`.

## Caveats

- **Firebase Dependency**: Opaque-box E2E tests should not mutate a live production database. The infrastructure design assumes Firebase requests will be mocked via Playwright network interception or tested against a local Firebase Emulator.
- **Canvas Testing Limitations**: Verifying `matter-js` physics engines completely via DOM-based E2E tests is challenging. Tier 2 tests will rely on ensuring no JS errors/hydration mismatches occur and verifying the existence of the `<canvas>` element.

## Conclusion

The proposed E2E Test Infrastructure uses Playwright and `@axe-core/playwright`.

### Feature Inventory

**Tier 1: Core Navigation & Static Content**

- Navigation & Layout: Header/Footer visibility and correct routing.
- Core Pages Load: `/`, `/menu`, `/about`, `/visit`.
- Info & Legal Pages: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/legal`.
- Custom 404: Verify `not-found.tsx` rendering.
- Global A11y: Run `axe` checks on core pages ensuring no "Low Contrast" or "Missing Label" errors.

**Tier 2: Interactive Features (Client Components & Physics)**

- Hydration & Memory Safety: Verify no hydration mismatches or continuous unhandled errors in browser console across pages.
- WaffleCrafter: Verify interactive UI updates on the menu.
- Master Features: Verify rendering of `<canvas>` or specific DOM elements for `SyrupCursor`, `LiquidTransition`, `PhysicsPlayground`, and `ScratchCard` without breaking the application state.

**Tier 3: Form Submissions & State Management**

- Cart Management (Zustand): Open CartDrawer, add items, update quantities, remove items, verify total calculation.
- User Authentication: Test login and registration forms for correct validation errors and successful mocked submission.
- Contact/Reservation: Submit forms on `/kontakt` and `/reservierung` and verify success states.

**Tier 4: Real-World Scenarios (End-to-End Workflows)**

- **Scenario A: Guest Order Flow (The Hungry Guest)**
  1. Add items from `/menu`.
  2. Open cart and proceed to `/checkout`.
  3. Enter guest details.
  4. Navigate through `/pickup-time` and `/order-review`.
  5. Reach `/confirmation` and view `/order-status`.
- **Scenario B: Authenticated User Flow (The Loyal Customer)**
  1. Login via `/auth`.
  2. Verify profile loaded at `/profile`.
  3. Add items and checkout (verifying auto-filled data if applicable).
- **Scenario C: Admin Flow**
  1. Login as Admin.
  2. Navigate to `/admin` and toggle Store status.
  3. Verify store closed indicator on `/menu`.

## Verification Method

To verify this proposal:

1. Review the generated `TEST_INFRA.md` (to be created in the next step based on this proposal) to ensure it includes Playwright setup instructions matching this design.
2. Confirm that all routes listed in `ORIGINAL_REQUEST.md` (e.g., `/checkout`, `/order-review`) are accounted for in Tier 4.
3. Confirm that all Master Features (`SyrupCursor`, etc.) are accounted for in Tier 2.
