# Handoff Report: E2E Test Facade & Integrity Fix Strategy

## 1. Observation

After reviewing the reviewer feedback (`REVIEWS_M3.md`) and the `tests/e2e/*.spec.ts` files, the following integrity violations were found:

- **`tier2_interactive.spec.ts`**: Uses `if (await element.isVisible())` and `if (await gooeyFilter.count() > 0)` to conditionally execute test steps. This bypasses the actions if elements are missing, causing tests to silently pass.
- **`tier4_scenarios.spec.ts`**: Uses conditional flow bypassing: `if (page.url().includes('/order-hub')) { await page.getByRole('button', ...).click(); }`.
- **`liquid-transition.spec.ts`**: Uses `await expect(overlay).toBeVisible({ timeout: 5000 }).catch(() => {});` (Line 27), swallowing failures.
- **`physics-playground.spec.ts`**: Asserts `expect(count).toBeLessThanOrEqual(1)` (Line 123) for the canvas element, meaning the test passes if the canvas fails to mount (count is 0).
- **`syrup-cursor.spec.ts`**: Injects a fake button using `document.createElement('button')` (Lines 62-73) to test hover states, bypassing the actual application DOM.
- **`global-layout.spec.ts`**: Artificially expands the page by injecting `document.body.style.minHeight = '2000px'` (Lines 69-71) to test sticky headers.

## 2. Logic Chain

E2E tests must be opaque-box and unconditional. If a feature is broken or missing, the test must fail.

- Conditional checks (`if isVisible()`, `if url.includes()`) mask genuine failures by skipping the interaction. They must be replaced with strict `await expect(...).toBeVisible()` and `await locator.click()`.
- Swallowing errors with `.catch(() => {})` defeats the purpose of an assertion. Removing the catch ensures the test fails if the transition overlay doesn't appear.
- Loose bounds like `toBeLessThanOrEqual(1)` for a required component allow false positives. The expected count must be exactly `1`.
- DOM injections (`createElement`, `style.minHeight`) create a synthetic environment. Tests should interact with existing elements (e.g., hover over a real navigation link, scroll to the natural page footer) to verify real application behavior.

## 3. Caveats

- Removing `.catch()` on fast transitions (like `liquid-transition`) might introduce flakiness if the overlay disappears before Playwright catches it. The worker might need to adjust the application state or use tighter Playwright listeners (like `page.waitForSelector('#liquid-transition', { state: 'attached' })`) to reliably catch it without swallowing.
- The `order-hub` step in `tier4_scenarios` must be resolved to a single definitive flow based on the current app routing (either the step is always required or never required).

## 4. Conclusion

The proposed fix strategy is to rewrite the tests to enforce strict interactions:

1. **Remove all `if (isVisible)` / `if (count > 0)` blocks** in `tier2_interactive.spec.ts` and `tier4_scenarios.spec.ts`. Execute the actions unconditionally.
2. **Remove `.catch(() => {})`** in `liquid-transition.spec.ts`.
3. **Change `toBeLessThanOrEqual(1)` to `toBe(1)`** in `physics-playground.spec.ts` for the canvas count.
4. **Remove `document.createElement`** in `syrup-cursor.spec.ts` and instead `hover()` over a real interactive element (e.g., a real `<a>` or `<button>` already present on the page).
5. **Remove `style.minHeight` manipulation** in `global-layout.spec.ts`. Use a naturally long page or scroll to an existing footer element (`await footer.scrollIntoViewIfNeeded()`) to test the sticky header.

## 5. Verification Method

After implementing the changes, an implementer agent should:

1. Run `npx playwright test tests/e2e/`.
2. Ensure no tests are skipped or artificially passed.
3. Temporarily break a feature (e.g., remove the `<canvas>` from the app) and confirm the associated test (`physics-playground.spec.ts`) actually fails.
