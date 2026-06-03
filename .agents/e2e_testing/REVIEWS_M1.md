# Review Feedback for TEST_INFRA.md

**Reviewer 2 Verdict**: REQUEST_CHANGES

## Findings

1. **Unsubstantiated Memory Leak Detection**: E2E tests (Playwright) cannot natively detect memory leaks or uncleaned RAF loops opaquely. You must either specify using CDP (Chrome DevTools Protocol) or explicitly state that source-level `useEffect` cleanup validation is out of scope for E2E and belongs to static analysis.
2. **Scope Confusion**: The original request asks to verify `"use client"` and `useEffect` cleanup logic. E2E tests cannot inspect source code directives. Clarify that this is out of scope for E2E.
3. **Firebase Mocking vs True E2E**: Mocking Firebase network responses bypasses security rules. Use the Firebase Local Emulator Suite instead.
4. **Next.js Version Mismatch**: The document states Next.js 16, but `ORIGINAL_REQUEST.md` specifically asks for Next.js 14/15. Update this.

**Reviewer 1 Verdict**: APPROVE (with minor suggestions)

- Clarify that Firebase is an assumption, or if using it, use Local Emulator.
- Acknowledge that CDP is required for memory checks.
