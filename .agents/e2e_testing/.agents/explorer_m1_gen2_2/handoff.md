# E2E Testing Infrastructure Strategy

## 1. Observation

- `TEST_INFRA.md` contains outdated or incorrect claims:
  - Line 5 states "Next.js 16".
  - Line 18 states "Emulate Firebase responses for Auth and Database reads/writes".
  - Line 71 asserts "System validates no memory leaks or uncleaned RAF loops occur" via purely opaque-box assertions.
- `REVIEWS_M1.md` details 4 explicit issues:
  1. **Unsubstantiated Memory Leak Detection**: E2E tests cannot natively detect memory leaks opaquely without Chrome DevTools Protocol (CDP).
  2. **Scope Confusion**: E2E cannot verify source-level directives like `"use client"` and `useEffect`.
  3. **Firebase Mocking**: Mocking bypasses security rules; Local Emulator Suite should be used.
  4. **Next.js Version**: Should be 14/15, not 16.

## 2. Logic Chain

- To address the **Next.js version mismatch** (Review finding 4), `TEST_INFRA.md` line 5 must be updated from "Next.js 16" to "Next.js 14/15".
- To address **Firebase Mocking** (Review finding 3), the "Network Interception" bullet in Section 2 (line 18) must be changed. Instead of mocking network responses, the architecture must specify the use of the **Firebase Local Emulator Suite** to accurately test backend interactions and security rules.
- To address **Scope Confusion** (Review finding 2), a clarification must be added to Section 1 (Test Philosophy). It should explicitly state that source-level validations (verifying `"use client"` placement and `useEffect` logic) are out of scope for Playwright E2E and should be relegated to static analysis (e.g., ESLint) and unit testing.
- To address **Memory Leak Detection** (Review finding 1), Section 2 (Configuration) and Section 4 (Scenario 2, line 71) must be updated. We must specify that Playwright will attach via **CDP (Chrome DevTools Protocol)** to measure JS heap sizes for memory leak and RAF loop assertions, turning an unsubstantiated claim into a technically feasible requirement.

## 3. Caveats

- Relying on CDP for memory leak testing makes the Playwright tests Chromium-only for those specific scenarios. We assume this tradeoff is acceptable for Scenario 2.
- No other sections of the document were reviewed for issues outside of `REVIEWS_M1.md`.

## 4. Conclusion

The recommended strategy is to modify `TEST_INFRA.md` with the following targeted updates:

1. **Change Next.js version**: Update "Next.js 16" to "Next.js 14/15" in Section 1.
2. **Clarify E2E Scope**: Add a bullet in Section 1 stating that E2E tests will not verify `"use client"` directives or `useEffect` code, as this is delegated to static analysis.
3. **Adopt Firebase Emulator**: Replace "Network Interception" in Section 2 with a requirement to run tests against the "Firebase Local Emulator Suite".
4. **Implement CDP for Memory**: Update the "Error Monitoring" bullet in Section 2 and Scenario 2 in Section 4 to explicitly require the Chrome DevTools Protocol (CDP) session in Playwright for JS heap and memory leak validation.

## 5. Verification Method

- Read `TEST_INFRA.md` after implementation to confirm it no longer mentions "Next.js 16" or Firebase "Network Interception".
- Confirm the terms "CDP" or "Chrome DevTools Protocol" and "Firebase Local Emulator" are present in the text.
- Confirm a disclaimer regarding E2E out-of-scope tasks (static analysis for source directives) is clearly documented.
