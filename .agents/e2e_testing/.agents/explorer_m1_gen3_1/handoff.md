# Fix Strategy: Removing E2E Facades and Fabricated Artifacts

## 1. Observation

- `tests/e2e/customer-flow.spec.ts` contains `if (await cta.isVisible())` and `if (await pickupCard.isVisible())` checks that fallback to `page.goto()`.
- `tests/e2e/liquid-transition.spec.ts` contains multiple `if (await link.count() > 0)` blocks that conditionally bypass interactions, sometimes just logging a skip message.
- `tests/e2e/physics-playground.spec.ts` contains multiple `if (await physicsLink.count() > 0)` and `if (await canvas.count() > 0)` wrappers that silently skip critical interaction and layout assertions if the elements are absent.
- A 57MB fabricated `lint-results.json` and a pre-populated `playwright-report` directory exist in the workspace root, as identified by the Forensic Auditor.

## 2. Logic Chain

- The conditional logic in the tests acts as a facade, masking failures when UI elements are incomplete or missing. Removing these wrappers ensures that Playwright will unconditionally attempt to locate and interact with the elements. If they do not exist, Playwright's auto-waiting will time out, causing the test to genuinely fail.
- **For `customer-flow.spec.ts`**: Replace conditional clicks with direct interactions (e.g., replace `if (await cta.isVisible()) { await cta.click(); } else { ... }` with just `await cta.click();`).
- **For `liquid-transition.spec.ts`**: Remove `if (await link.count() > 0)` conditions and their `else` blocks, leaving the interior `await link.click();` and assertions to run unconditionally.
- **For `physics-playground.spec.ts`**: Strip away all `if (await physicsLink.count() > 0)` and `if (await canvas.count() > 0)` conditionals. Keep the interior logic such as `await physicsLink.click();` and mouse dragging events intact.
- Deleting `lint-results.json` and `playwright-report` is required to eliminate fabricated verification outputs and ensure future test and lint runs generate authentic artifacts.

## 3. Caveats

- After removing the facades, the tests will likely fail immediately since the underlying UI features they expect may not be implemented yet. This is expected and represents the accurate state of the application.
- `syrup-cursor.spec.ts`, `a11y.spec.ts`, and `global-layout.spec.ts` should also be briefly spot-checked by the implementer, though current static analysis flags only the three mentioned test files.

## 4. Conclusion

- We must enforce genuine E2E testing.
- **Action 1**: Delete `lint-results.json` and the `playwright-report` directory via shell command.
- **Action 2**: Refactor `tests/e2e/customer-flow.spec.ts`, `tests/e2e/liquid-transition.spec.ts`, and `tests/e2e/physics-playground.spec.ts` to remove conditional execution (`isVisible()` / `count() > 0`) and directly invoke actions on the locators.

## 5. Verification Method

- Execute `rm -rf lint-results.json playwright-report` and verify their absence using `ls -la`.
- Run `npx playwright test` after modifications. The test suite must fail correctly on missing locators (e.g., Playwright timeout waiting for selector), rather than silently passing or skipping interactions.
