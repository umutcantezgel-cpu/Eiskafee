# Handoff Report: E2E Test Facade Fix Strategy

## 1. Observation

Reviewers identified several integrity violations and facade logic in the E2E test suite that allow tests to pass even when the UI is broken.

1. **`tests/e2e/tier3_forms_state.spec.ts` (Lines 140-144)**:
   ```typescript
   if (await submitOrderBtn.isVisible()) {
     await expect(submitOrderBtn).toBeEnabled();
   }
   ```
2. **`tests/e2e/tier1_static_navigation.spec.ts` (Lines 106-113 & 121-123)**:
   ```typescript
   if (count > 0) {
     const navLink = headerLinks.filter({ hasText: /menu/i }).first();
     if (await navLink.count() > 0) {
       await navLink.click();
   ```
   ```typescript
   if (response) {
     expect(response.status()).toBe(404);
   }
   ```
3. **`tests/e2e/syrup-cursor.spec.ts` (Lines 33 & 77)**:
   ```typescript
   expect(bodyCursor === "none" || wrapperCursor === "none").toBeTruthy();
   ```
   ```typescript
   expect(
     hoverClass !== initialClass || hoverTransform !== initialTransform,
   ).toBeTruthy();
   ```
4. **`tests/e2e/global-layout.spec.ts` (Line 76)**:
   ```typescript
   await page.evaluate(() => window.scrollTo(0, 500));
   ```
5. **`tests/e2e/tier2_interactive.spec.ts` (Line 42)**:
   ```typescript
   if (isMobile) {
     test.skip();
   }
   ```

## 2. Logic Chain

- **Facade Logic**: Conditional statements like `if (await ...isVisible())` or `if (count > 0)` bypass test assertions. If an essential UI element fails to render, the test silently skips the check and passes. We must enforce strict visibility and count expectations.
- **Null-checks as Conditions**: Wrapping response status checks in `if (response)` is unreliable. We must explicitly verify that the navigation generated a valid response object.
- **Assertion Swallowing**: Boolean aggregations (`A || B`) within `.toBeTruthy()` obscure exactly which condition failed, making test logs useless. We need separate, concrete assertions for predictable failure messages.
- **Non-Native Interactions**: Using `page.evaluate(() => window.scrollTo(...))` manipulates the DOM state imperatively, which circumvents the browser's native scroll event queue. Playwright's native `page.mouse.wheel` more accurately simulates real user behavior and triggers event listeners effectively.
- **Imperative Skips**: Conditionally calling `test.skip()` inside the test body is generally an anti-pattern. Declarative skipping (`test.skip(condition, reason)`) correctly labels the test in the Playwright reporter without confusing the test execution context.

## 3. Conclusion & Fix Strategy

The e2e tests must be rewritten to use unconditional assertions and native interactions.

### Proposed Code Changes

**`tests/e2e/tier3_forms_state.spec.ts`**
_Before:_

```typescript
if (await submitOrderBtn.isVisible()) {
  await expect(submitOrderBtn).toBeEnabled();
}
```

_After:_

```typescript
await expect(submitOrderBtn).toBeVisible();
await expect(submitOrderBtn).toBeEnabled();
```

**`tests/e2e/tier1_static_navigation.spec.ts`**
_Before:_

```typescript
if (count > 0) {
  const navLink = headerLinks.filter({ hasText: /menu/i }).first();
  if ((await navLink.count()) > 0) {
    await navLink.click();
    await expect(page).toHaveURL(/\/menu/);
  }
}
```

_After:_

```typescript
const navLink = headerLinks.filter({ hasText: /menu/i }).first();
await expect(navLink).toBeVisible();
await navLink.click();
await expect(page).toHaveURL(/\/menu/);
```

_Before:_

```typescript
if (response) {
  expect(response.status()).toBe(404);
}
```

_After:_

```typescript
expect(response).not.toBeNull();
expect(response!.status()).toBe(404);
```

**`tests/e2e/syrup-cursor.spec.ts`**
_Before:_

```typescript
expect(bodyCursor === "none" || wrapperCursor === "none").toBeTruthy();
```

_After:_

```typescript
// Assert exactly on the wrapper or fallback element
expect(wrapperCursor).toBe("none");
```

_Before:_

```typescript
expect(
  hoverClass !== initialClass || hoverTransform !== initialTransform,
).toBeTruthy();
```

_After:_

```typescript
// Assert directly on the transform scale
expect(hoverTransform).not.toBe(initialTransform);
```

**`tests/e2e/global-layout.spec.ts`**
_Before:_

```typescript
await page.evaluate(() => window.scrollTo(0, 500));
```

_After:_

```typescript
await page.mouse.wheel(0, 500);
```

**`tests/e2e/tier2_interactive.spec.ts`**
_Before:_

```typescript
if (isMobile) {
  test.skip();
}
```

_After:_

```typescript
test.skip(isMobile, "SyrupCursor is typically a desktop feature");
```

## 4. Caveats

- For `syrup-cursor.spec.ts`, if the application specifically hides the cursor on the `body` instead of the `main` wrapper, the assertion `expect(wrapperCursor).toBe('none')` might need to be adjusted to `expect(bodyCursor).toBe('none')`. The implementer should verify which element actually receives the CSS property.

## 5. Verification Method

After implementing the changes, independently verify by running:

```bash
npx playwright test tests/e2e/tier3_forms_state.spec.ts tests/e2e/tier1_static_navigation.spec.ts tests/e2e/syrup-cursor.spec.ts tests/e2e/global-layout.spec.ts tests/e2e/tier2_interactive.spec.ts
```

The tests must pass natively. Furthermore, if you temporarily break the UI (e.g. hiding the checkout button or the navigation menu), the tests should **fail** instead of skipping.
