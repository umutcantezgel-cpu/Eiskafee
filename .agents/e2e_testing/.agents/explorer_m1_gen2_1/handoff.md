# Handoff Report: TEST_INFRA.md Fix Strategy

## 1. Observation

I reviewed `TEST_INFRA.md` and the review feedback in `REVIEWS_M1.md`.

- `TEST_INFRA.md` Line 5 references "Next.js 16 App Router application". The review notes it should be "Next.js 14/15" based on `ORIGINAL_REQUEST.md`.
- `REVIEWS_M1.md` notes scope confusion: E2E tests cannot natively verify `"use client"` or `useEffect` cleanup logic (which are source code directives).
- `TEST_INFRA.md` Lines 6 and 18 propose mocking Firebase network responses. The review highlights this bypasses security rules, instructing to use the Firebase Local Emulator Suite instead.
- `TEST_INFRA.md` Lines 68-71 ("Scenario 2") assert validation of memory leaks and uncleaned RAF loops. The review points out Playwright E2E cannot opaquely test this without Chrome DevTools Protocol (CDP).

## 2. Logic Chain

Based on the observations, we must update the infrastructure plan to align with technical realities and original requirements:

1. **Next.js Version Update**: The reference on line 5 must be corrected from "Next.js 16" to "Next.js 14/15".
2. **Clarify E2E Testing Scope**: Add a disclaimer under "1. Test Philosophy" stating that verifying Next.js source code directives (e.g., `"use client"`) and `useEffect` source-level cleanups is out of scope for Playwright E2E and delegated to static analysis/linters.
3. **Adopt Firebase Local Emulator**: Replace mentions of "mocking" or "emulating Firebase responses" (Lines 6 and 18) with instructions to boot the **Firebase Local Emulator Suite** before test runs. This ensures auth and database security rules are genuinely evaluated rather than bypassed.
4. **Adopt CDP for Memory Validation**: To keep the Scenario 2 goal of validating memory leaks, we must explicitly state the use of Playwright's `CDPSession` (Chrome DevTools Protocol) to monitor JS heap size and memory growth. Alternatively, clarify that source-level `useEffect` leaks are out of scope if we do not wish to use CDP. The recommended approach is specifying CDP usage in Section 2 (Test Architecture) and Section 4.

## 3. Caveats

- Using the Firebase Local Emulator Suite will slightly increase the CI test execution time and complexity since the emulator process must be started and seeded with data prior to the Playwright test suite.
- Using CDP for memory leak detection can be flaky in CI environments due to garbage collection non-determinism. We assume this flakiness will be managed by setting reasonable memory growth thresholds rather than absolute zero byte checks.

## 4. Conclusion

I propose the following specific modifications to `TEST_INFRA.md`:

- **Change**: In section 1, line 5, replace "Next.js 16" with "Next.js 14/15".
- **Change**: In section 1, add a bullet explicitly placing `"use client"` directive checks and static `useEffect` analysis out of scope for E2E.
- **Change**: In section 1, line 6, change "External dependencies like Firebase should be mocked..." to "External dependencies like Firebase should rely on the Firebase Local Emulator Suite...".
- **Change**: In section 2, line 18, replace network interception instructions with setting up and connecting to the Firebase Local Emulator.
- **Change**: In section 2, add a bullet specifying the use of Playwright CDP (`page.context().newCDPSession(page)`) to gather memory performance metrics.
- **Change**: In section 4, line 71, update the assertion to read: "System utilizes CDP to validate that JS heap size does not continuously grow (indicating memory leaks)."

## 5. Verification Method

1. The implementer should apply the proposed modifications to `TEST_INFRA.md`.
2. Inspect the revised `TEST_INFRA.md` to confirm all 4 points from `REVIEWS_M1.md` are addressed.
3. Validate that the term "mocking" regarding Firebase is fully replaced with "Firebase Local Emulator Suite".
4. Validate that CDP is mentioned as the mechanism for memory checks, and Next.js 16 is completely removed.
