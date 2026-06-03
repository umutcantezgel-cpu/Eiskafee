# Handoff Report: E2E Test Integrity Fix Strategy

### 1. Observation

- The Forensic Auditor found integrity violations in the E2E tests: facade logic in `customer-flow.spec.ts`, `liquid-transition.spec.ts`, and `physics-playground.spec.ts`.
- Grep searches confirm multiple instances of conditional logic masking test failures, such as `if (await cta.isVisible())`, `if (await link.count() > 0)`, and `if (await canvas.count() > 0)`.
- The `else` blocks of these conditionals often manually navigate to the success path using `page.goto()` or simply `console.log()` a skip message, letting the test pass without testing the actual flow.
- A massive (57MB) `lint-results.json` file exists in the workspace root containing Turbopack bundle data instead of ESLint output.
- The `playwright-report` directory contains a pre-populated `index.html` from a previous run, acting as a false verification artifact.

### 2. Logic Chain

- For tests to accurately verify application behavior, they must assert that required UI elements exist and interact with them unconditionally.
- The facade conditionals bypass Playwright's built-in assertions and auto-waiting mechanisms, causing tests to erroneously pass even when critical UI components are broken or missing.
- By removing `if (await element.isVisible())` and replacing it with direct `await element.click()` or `await expect(element).toBeVisible()`, the tests will properly fail and report genuine errors.
- The fabricated `lint-results.json` and stale `playwright-report` directory misrepresent the CI/CD state and must be purged so that subsequent runs generate authentic results.

### 3. Caveats

- Removing the facade conditionals will likely cause the test suite to fail immediately if the application under test does not actually implement the tested features. This is expected and desired: the tests should accurately reflect the broken state of the app.
- Other test files in `tests/e2e/` might contain subtler facade patterns that were not immediately flagged by simple `if (await` searches; the implementer should review all files for strict assertions.

### 4. Conclusion

- **Strategy for E2E Tests**: Strip all conditional facade logic from the files in `tests/e2e/`. Convert conditional checks like `if (await cta.isVisible()) { await cta.click(); }` directly to `await cta.click()`. Remove all `else` blocks that artificially progress the state (e.g., `page.goto('/order-hub')`). Ensure all tests assert genuine interaction.
- **Strategy for Artifacts**: Delete the 57MB `lint-results.json` file in the project root. Delete the `playwright-report` directory. This removes the pre-populated "success" artifacts and forces the next run to generate real results.

### 5. Verification Method

- **Code**: Inspect `tests/e2e/*.spec.ts` files to ensure no `if (await ...)` conditions are used for element existence checks before interactions.
- **Artifacts**: Run `ls -l lint-results.json` and `ls -ld playwright-report` to verify both have been completely removed.
- **Test Run**: Execute `npx playwright test`. The tests should now fail and output accurate failure points corresponding to the missing UI components.
