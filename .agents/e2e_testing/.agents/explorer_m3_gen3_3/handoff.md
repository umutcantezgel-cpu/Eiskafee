# Observation

- **`tests/e2e/tier3_forms_state.spec.ts`**: At line 141, `if (await submitOrderBtn.isVisible())` wraps the `.toBeEnabled()` assertion, creating a facade that skips assertions if the button is missing.
- **`tests/e2e/tier1_static_navigation.spec.ts`**: At line 106, `if (count > 0)` and line 109 `if (await navLink.count() > 0)` wrap the navigation link click logic. At line 121, `if (response)` wraps the `response.status() === 404` assertion.
- **`tests/e2e/syrup-cursor.spec.ts`**: At line 33, `expect(bodyCursor === 'none' || wrapperCursor === 'none').toBeTruthy();` uses boolean OR inside expect. At line 77, `expect(hoverClass !== initialClass || hoverTransform !== initialTransform).toBeTruthy();` also uses a boolean OR.
- **`tests/e2e/global-layout.spec.ts`**: At line 76, `await page.evaluate(() => window.scrollTo(0, 500));` uses JS evaluation instead of simulated user interaction.
- **`tests/e2e/tier2_interactive.spec.ts`**: At line 42, `if (isMobile) { test.skip(); }` uses an imperative conditional skip within the test body.

# Logic Chain

1. The reviewer mandate strictly forbids facade patterns, conditional logic, and boolean aggregations in Playwright assertions, as these allow tests to silently pass under failure conditions (e.g., missing elements or null responses).
2. By removing the `if` checks in `tier3_forms_state.spec.ts` and `tier1_static_navigation.spec.ts` and replacing them with unconditional assertions (like `await expect(locator).toBeVisible()` and `expect(response).not.toBeNull()`), the tests will strictly fail if the expected elements/responses are not present.
3. In `syrup-cursor.spec.ts`, boolean aggregations swallow specific failures. We must assert strictly against the single intended DOM element that holds the cursor rule (e.g. `expect(bodyCursor).toBe('none')`), and the precise property that handles the hover state (e.g. `expect(hoverTransform).not.toBe(initialTransform)`).
4. For `global-layout.spec.ts`, native user emulation is required for genuine E2E testing. `page.mouse.wheel(0, 500)` replaces `window.scrollTo` to trigger potential native scroll event listeners correctly.
5. In `tier2_interactive.spec.ts`, replacing the conditional skip with `test.skip(!!isMobile, 'reason')` satisfies the declarative test skip requirement.

# Caveats

- `syrup-cursor.spec.ts` fix requires knowing exactly which element (body vs wrapper) holds the `cursor: none` style and whether `class` or `transform` handles the hover state. The implementer should verify the application's implementation and assert the exact changing property.
- `page.mouse.wheel` may behave slightly differently than `window.scrollTo` if the page has a custom scroll container instead of using the window scroll. The implementer should ensure the mouse is positioned over the correct scrollable area if the scroll doesn't happen on the document root.

# Conclusion

The proposed fix strategy removes all remaining facade patterns and integrity violations by enforcing strict Playwright assertions and native browser interactions. The implementer should replace conditionals with `toBeVisible()`/`not.toBeNull()` assertions, dismantle boolean aggregations in favor of exact property assertions, use `page.mouse.wheel()` for scrolling, and `test.skip(condition, reason)` for declarative test skipping.

# Verification Method

1. Apply the proposed fixes to the 5 specified test files.
2. Run the tests using `npx playwright test`.
3. Verify all tests pass locally.
4. Manually introduce a failure (e.g., change `cursor: none` to `cursor: auto` in the app, or rename the navigation link) and confirm the test strictly fails, proving the facade patterns are gone and assertion swallowing is resolved.
