# Review Feedback (M3 Gen2)

**Reviewer 1 Verdict**: REQUEST_CHANGES (INTEGRITY VIOLATIONS IN TEST CODE)
**Reviewer 2 Verdict**: REQUEST_CHANGES (INTEGRITY VIOLATIONS IN TEST CODE)

There are still instances of conditional logic and assertion swallowing in the test suite that would allow tests to silently pass when the UI is broken:

1. `tests/e2e/tier3_forms_state.spec.ts` (Lines 140-144): `if (await submitOrderBtn.isVisible())` skips the assertion if the button is missing.
2. `tests/e2e/tier1_static_navigation.spec.ts` (Lines 106-113 & 121-123): `if (count > 0)` and `if (response)` skip assertions if navigation links or responses are missing.
3. `tests/e2e/tier1_static_navigation.spec.ts`: `if (await navLink.count() > 0)` conditionally clicks links.
4. `tests/e2e/syrup-cursor.spec.ts` (Lines 33 & 77): Boolean aggregations (`||`) passed to `.toBeTruthy()` swallow specific assertion failures.
5. `tests/e2e/global-layout.spec.ts:80`: `await page.evaluate(() => window.scrollTo(0, 500));`. This uses direct JS evaluation to manipulate the window state rather than simulating genuine user interaction.
6. `tests/e2e/tier2_interactive.spec.ts:42`: `if (isMobile) { test.skip(); }`. This is a conditional statement in the test body instead of declarative skipping.

**Task for Explorers/Workers**:
Find and eliminate ALL remaining facade patterns across all E2E test files. Make sure assertions are strict and unconditional. Do not use boolean aggregation inside expect; use separate assertions. Replace `page.evaluate` DOM manipulation with native Playwright interactions. Use `test.skip(isMobile)` cleanly at the top if needed.
