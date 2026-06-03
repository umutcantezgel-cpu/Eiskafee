# Handoff Report: E2E Test Facade Logic Remediation

## 1. Observation

After reviewing `REVIEWS_M3.md` and grepping through `tests/e2e/`, I directly observed the following violations across 6 test files:

- **`tier2_interactive.spec.ts`**: Uses structural bypasses like `if (await gooeyFilter.count() > 0)` (line 51), `if (await menuLink.isVisible())` (line 69), `if (await canvas.isVisible())` (line 104), and `if (viewport)` / `if (box)` checks to conditionally skip actions.
- **`tier4_scenarios.spec.ts`**: Implements non-deterministic flow logic via `if (page.url().includes('/order-hub'))` (line 14) and skips metric validation with `if (jsHeapSizeMetric)` (line 107).
- **`liquid-transition.spec.ts`**: Explicitly swallows an assertion failure with `await expect(overlay).toBeVisible({ timeout: 5000 }).catch(() => {});` (line 27).
- **`physics-playground.spec.ts`**: Uses weak bounds `expect(count).toBeLessThanOrEqual(1);` (line 123) which evaluates to true even if the canvas (`count === 0`) never loads.
- **`syrup-cursor.spec.ts`**: Uses `document.createElement('button')` within `page.evaluate` (line 63) to inject a fake button to test hover states. It also uses the weak `expect(count).toBeLessThanOrEqual(1);` bounds (line 113).
- **`global-layout.spec.ts`**: Artificially manipulates the page to test scrolling by executing `document.body.style.minHeight = '2000px';` via `page.evaluate` (line 69).

## 2. Logic Chain

- Conditional execution blocks (`if (element.isVisible())`) completely negate the purpose of E2E testing by allowing the test suite to pass silently when a feature is broken, missing, or unrendered.
- Using `.catch(() => {})` on assertions explicitly instructs the runner to ignore a test failure, rendering the assertion meaningless.
- Asserting `toBeLessThanOrEqual(1)` on element counts masks total rendering failures, as `0` is a passing condition for an element that strictly needs to exist (`1`).
- Modifying the DOM mid-test (`createElement`, injecting `minHeight`) fakes the environment. The test ends up validating standard browser behavior on injected elements instead of verifying the actual application components, CSS layout, and visual interactions.
- To convert these into genuine opaque-box tests, we must unconditionally expect target elements to be visible, rely on the actual rendered UI for targets (e.g., real links instead of injected ones), and enforce exact matches.

## 3. Caveats

- Removing the DOM injections (like faking `minHeight`) requires the target test page to natively contain scrollable content. If the home page isn't long enough, the test may need to route to `/menu` to properly verify sticky headers.
- If `/order-hub` is an A/B test or conditional redirect based on backend state in Tier 4, stripping the `if` statement might require enforcing a deterministic test state (mocking or seeding).
- Strict validation will likely expose pre-existing UI bugs that these facade patterns were hiding. The implementer may see test failures immediately after patching the tests.

## 4. Conclusion

A direct rewrite of the assertions and interactions in the 6 specified files is necessary:

1. **Remove all `if (...)` guards** surrounding element interactions and metric validations in `tier2_interactive.spec.ts` and `tier4_scenarios.spec.ts`. Replace them with strict `await expect(...).toBeVisible()` or `toBeDefined()`.
2. **Remove `.catch(() => {})`** from the `expect()` statement in `liquid-transition.spec.ts`.
3. **Replace weak boundary assertions** (`toBeLessThanOrEqual(1)`) with strict exact-match expectations (e.g., `toBe(1)`) where the element is expected to be present, as seen in `physics-playground.spec.ts` and `syrup-cursor.spec.ts`.
4. **Remove `page.evaluate` DOM mutations** (`createElement` and `minHeight`) from `syrup-cursor.spec.ts` and `global-layout.spec.ts`. Use naturally rendered interactive elements (like navigation links or CTA buttons) to test hover and scrolling logic.

## 5. Verification Method

- **Command**: Run the E2E suite via `npx playwright test`.
- **Inspection**: Read the updated `.spec.ts` files to confirm no `isVisible()`, `catch()`, `evaluate` (for DOM mutation), or `< 1` checks exist in the aforementioned blocks.
- **Invalidation**: Deliberately break a UI feature (e.g., comment out the LiquidTransition overlay rendering in the source code). If the test continues to pass, the facade logic was not properly removed.
