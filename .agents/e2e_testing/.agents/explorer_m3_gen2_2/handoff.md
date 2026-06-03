# Handoff: E2E Test Facade Fix Strategy

## Observation

I have inspected the `tests/e2e/` files referenced in the `REVIEWS_M3.md` feedback. The following facade logic patterns, conditional bypasses, and fake assertions are present:

1. **`tests/e2e/liquid-transition.spec.ts` (Line 27)**: Uses `.catch(() => {})` to swallow assertion errors when waiting for the transition overlay: `await expect(overlay).toBeVisible({ timeout: 5000 }).catch(() => {});`
2. **`tests/e2e/tier2_interactive.spec.ts`**:
   - Line 51: Checks for existence conditionally: `if (await gooeyFilter.count() > 0)` instead of enforcing it.
   - Lines 69-84: Falls back to direct navigation if links are missing: `if (await menuLink.isVisible()) { await menuLink.click(); ... } else { await page.goto('/menu'); }`
   - Lines 104, 109, 130: Checks for visibility and box existence (`if (await canvas.isVisible())`, `if (box)`, `if (viewport)`) before interacting, which allows tests to pass silently if elements fail to render.
3. **`tests/e2e/tier4_scenarios.spec.ts`**:
   - Line 15: Uses a conditional flow: `if (page.url().includes('/order-hub')) { await page.getByRole('button', { name: /Abholung/i }).click(); }`
   - Line 107: Uses a conditional check for metrics: `if (jsHeapSizeMetric)` instead of asserting its existence.
4. **`tests/e2e/physics-playground.spec.ts` (Line 123)**: Asserts `expect(count).toBeLessThanOrEqual(1);` when verifying if the canvas exists after navigating to the physics page, which allows it to pass if the count is `0`.
5. **`tests/e2e/syrup-cursor.spec.ts` (Lines 63-73)**: Injects a dummy button into the DOM using `document.createElement('button')` to test hover states, bypassing the actual page content.
6. **`tests/e2e/global-layout.spec.ts` (Lines 69-71)**: Artificially alters the DOM to force scrollability: `document.body.style.minHeight = '2000px';`.

## Logic Chain

To ensure genuine opaque-box tests that interact unconditionally and fail if elements are missing, we must remove all fallback pathways and artificially injected state.

- A robust E2E test must assume a deterministic application state. Conditional logic (`if (element.isVisible())`) hides regressions because the test silently bypasses the interaction block.
- Swallowing errors with `.catch(() => {})` defeats the purpose of the `expect()` assertion.
- Artificially injecting DOM elements (`document.createElement`) or styles (`style.minHeight = '2000px'`) tests a state that real users will never encounter.
- Loose assertions (`toBeLessThanOrEqual(1)`) mask total failures (e.g., when a feature completely fails to mount and count is `0`).

## Caveats

- Removing conditionals means tests will immediately break if the current application implementation does not actually support these features. The next agent may need to either adjust the selectors to match the real implementation, or fix the application code if it is currently failing.
- For `global-layout.spec.ts`, if the homepage is inherently too short to scroll, scrolling to the footer might not trigger the sticky header. The test might need to be pointed to a naturally longer page (e.g., `/menu` or `/about`).

## Conclusion

The E2E tests need to be refactored with the following strategies:

1. **Remove Error Swallows**: In `liquid-transition.spec.ts`, remove `.catch(() => {})` so `toBeVisible()` properly fails if the overlay is missing.
2. **Remove Conditionals**: In `tier2_interactive.spec.ts` and `tier4_scenarios.spec.ts`, remove all `if (isVisible())`, `if (box)`, and `if (url.includes(...))` statements. Directly await and interact with elements (`click()`, `mouse.move()`) and rely on Playwright's default timeouts to fail the test if the elements are not ready or missing.
3. **Enforce Strict Assertions**: In `physics-playground.spec.ts`, change `toBeLessThanOrEqual(1)` to `toBe(1)` when expecting the canvas to be mounted. In `tier4_scenarios.spec.ts`, assert `expect(jsHeapSizeMetric).toBeDefined()` before checking its value.
4. **Remove DOM Injection**: In `syrup-cursor.spec.ts`, remove the `document.createElement` script. Instead, locate a genuine interactive element (e.g., a real CTA or link from the page) and use `await realElement.hover();`.
5. **Remove Style Manipulation**: In `global-layout.spec.ts`, remove the `minHeight` injection. Instead, use Playwright's native scrolling commands on existing content, or navigate to a naturally longer page to verify the sticky header.

## Verification Method

1. Run the modified tests using Playwright: `npx playwright test`.
2. Inspect the test output. They should either fail outright (highlighting missing features in the app) or pass cleanly without relying on facade logic.
3. Perform a manual review of the `.spec.ts` files to confirm no `if`, `.catch`, `.createElement`, or `style.minHeight` logic exists in the test bodies.
