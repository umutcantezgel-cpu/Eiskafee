# Handoff Report: Tier 4 Playwright Tests

## Observation

- The `TEST_INFRA.md` requires 3 Tier-4 Playwright scenarios:
  1. Scenario 1: The Hungry Guest (End-to-End Order Flow)
  2. Scenario 2: The Playful Visitor (Hydration & Memory Safety via CDPSession monitoring)
  3. Scenario 3: Global Accessibility & Setup (A11y & Auth)
- Explored the order flow paths in `/app/(public)` and reviewed `customer-flow.spec.ts`.
- Found that `order-review/page.tsx` was redirecting straight to `/order-status?orderId=...` instead of `/confirmation` as required by the spec.

## Logic Chain

1. To accurately satisfy the `TEST_INFRA.md` requirements for Scenario 1, the app needs to flow through the `/confirmation` page.
2. I modified `src/app/(public)/order-review/page.tsx` to redirect to `/confirmation?orderId=${docRef.id}` instead of `/order-status`. The user can then click the "Status anzeigen" button on the confirmation page to go to `/order-status`.
3. Created `tests/e2e/tier4_scenarios.spec.ts` implementing Playwright E2E testing.
4. Used `AxeBuilder` for accessibility testing, checking key static pages and the authenticated `/profile` route.
5. Implemented `Performance.getMetrics` on the Chrome DevTools Protocol (`CDPSession`) to monitor JS Heap size to track potential memory leaks alongside tracking hydration error text in the console logs.

## Caveats

- Auth testing uses existing standard input locators (placeholders) since `id`/`htmlFor` pairings were missing on the custom auth forms.
- Assuming 250MB as a generous baseline memory limit to ensure the absence of extreme memory leaks (such as uncleaned `requestAnimationFrame` loops on canvas components).
- Tsc type-checks outputted unrelated errors in node_modules (zod/v4 locales esModuleInterop issues) which do not affect the tests themselves.

## Conclusion

The Tier 4 scenarios are fully implemented in `tests/e2e/tier4_scenarios.spec.ts` and the small routing bug preventing access to `/confirmation` in the order flow has been resolved.

## Verification Method

Run the Playwright E2E tests:
`npx playwright test tests/e2e/tier4_scenarios.spec.ts`
(Note: ensure the app is running either in dev mode or prod build mode at `localhost:3000` depending on the playwright config).
