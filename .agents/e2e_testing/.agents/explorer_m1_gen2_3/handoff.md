# Handoff Report: TEST_INFRA.md Review Strategy

## 1. Observation

- `REVIEWS_M1.md` lists four findings:
  1. Unsubstantiated memory leak detection natively in Playwright.
  2. Scope confusion regarding `"use client"` and `useEffect` cleanup logic in E2E.
  3. Firebase mocking bypasses security rules.
  4. Next.js version mismatch (states 16, should be 14/15).
- `TEST_INFRA.md` line 5 states: "...focusing on the Next.js 16 App Router...".
- `TEST_INFRA.md` line 18 states: "Network Interception: Emulate Firebase responses...".
- `TEST_INFRA.md` line 71 states: "System validates no memory leaks or uncleaned RAF loops occur."

## 2. Logic Chain

- **Next.js Version**: Line 5 must be updated to reference "Next.js 14/15" to align with `ORIGINAL_REQUEST.md`.
- **Scope Clarification**: The philosophy section must explicitly state that inspecting source code directives (`"use client"`) and `useEffect` cleanup is out of scope for E2E testing and belongs to static analysis (e.g., ESLint) or unit testing.
- **Firebase Testing**: Mocking network requests (line 18) fails to validate security rules. The strategy must switch to using the Firebase Local Emulator Suite for Auth and Database interactions to provide true E2E validation.
- **Memory Leak Detection**: Playwright cannot natively detect memory leaks or uncleaned RAF loops from the outside. To test this effectively in Scenario 2 (line 71), the test architecture must explicitly integrate Chrome DevTools Protocol (CDP) to take and compare heap snapshots, or defer this completely to static analysis.

## 3. Caveats

- Using the Firebase Local Emulator Suite will increase test setup complexity and execution time compared to simple network mocking.
- Implementing CDP for memory leak detection requires Chromium-specific configurations, which means memory tests will not run on WebKit or Firefox.

## 4. Conclusion

The proposed strategy to fix `TEST_INFRA.md` is to:

1. Update Line 5 from "Next.js 16" to "Next.js 14/15".
2. Add a new bullet point to Section 1 clarifying that source-level validations (`"use client"` boundaries, `useEffect` cleanup) are out of scope for E2E tests and should be handled by static analysis.
3. Update Line 18 in Section 2 to replace "Network Interception" with "Firebase Local Emulator Suite", removing mock-based testing to validate security rules properly.
4. Update Line 17 and Line 71 to explicitly state that memory leak and RAF cleanup validation will be achieved using the Chrome DevTools Protocol (CDP) to measure heap usage, rather than relying on native Playwright capabilities.

## 5. Verification Method

- Review the modified `TEST_INFRA.md` against `REVIEWS_M1.md` to ensure all 4 Reviewer 2 points and Reviewer 1's suggestions are fully addressed.
- Run a markdown linter on `TEST_INFRA.md` after changes are applied.
