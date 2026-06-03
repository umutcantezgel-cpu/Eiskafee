# Handoff Report: E2E Test Facade Fix Strategy

## 1. Observation

I reviewed the Review Feedback in `REVIEWS_M3_GEN2.md` and inspected the referenced E2E test files. I observed the following facade patterns and integrity violations:

- **`tests/e2e/tier3_forms_state.spec.ts`**: Lines 141-144 contain conditional logic:
  ```typescript
  if (await submitOrderBtn.isVisible()) {
    await expect(submitOrderBtn).toBeEnabled();
  }
  ```
- **`tests/e2e/tier1_static_navigation.spec.ts`**: Lines 106-113 use conditional nesting:
  ```typescript
  if (count > 0) { ... if (await navLink.count() > 0) { ... } }
  ```
  Lines 121-123 conditionally check the response status:
  ```typescript
  if (response) {
    expect(response.status()).toBe(404);
  }
  ```
- **`tests/e2e/syrup-cursor.spec.ts`**: Line 33 uses boolean aggregation:
  ```typescript
  expect(bodyCursor === "none" || wrapperCursor === "none").toBeTruthy();
  ```
  Line 77 uses boolean aggregation:
  ```typescript
  expect(
    hoverClass !== initialClass || hoverTransform !== initialTransform,
  ).toBeTruthy();
  ```
- **`tests/e2e/global-layout.spec.ts`**: Line 76 uses JS injection to manipulate state:
  ```typescript
  await page.evaluate(() => window.scrollTo(0, 500));
  ```
- **`tests/e2e/tier2_interactive.spec.ts`**: Lines 41-43 use conditional skipping inside the test:
  ```typescript
  if (isMobile) {
    test.skip();
  }
  ```

## 2. Logic Chain

To eliminate these facade patterns and enforce strict, robust tests:

1. **Unconditional Assertions**: `if` statements wrapping assertions allow tests to pass silently when elements are absent. Removing the `if` checks forces the assertions to fail correctly if the application state is invalid.
2. **Eliminating Boolean Aggregations**: Using `.toBeTruthy()` with `||` hides the values being evaluated upon failure. To prevent this "assertion swallowing":
   - For arrays of possible values, use `expect([value1, value2]).toContain('expected')`. This fails loudly with the actual values.
   - For state changes, compare state objects directly: `expect({ class: newClass, transform: newTransform }).not.toEqual({ class: oldClass, transform: oldTransform })`. This provides a clean diff output on failure without conditional branching. Alternatively, use separate strict assertions if the exact application behavior is known.
3. **Native Interactions**: `window.scrollTo` bypasses the browser's natural input mechanisms. It should be replaced with `page.mouse.wheel(0, 500)` to simulate genuine user scrolling.
4. **Declarative Skips**: Imperative conditionals like `if (isMobile) { test.skip(); }` clutter the test body. `test.skip(!!isMobile, 'Reason');` handles skipping cleanly at the top.

## 3. Caveats

- I did not modify the files directly, as my role is read-only.
- The object comparison approach for `syrup-cursor.spec.ts` resolves the boolean aggregation rule without enforcing strict failure if only _one_ specific property changes. If the target application _always_ changes both properties, the implementer should use two separate strict assertions instead.

## 4. Conclusion

The files contain structural flaws that must be corrected to maintain test integrity. The proposed fix strategy is:

**Fix 1: `tests/e2e/tier3_forms_state.spec.ts` (Remove `if`)**

```typescript
// Replace lines 141-144 with:
await expect(submitOrderBtn).toBeVisible();
await expect(submitOrderBtn).toBeEnabled();
```

**Fix 2: `tests/e2e/tier1_static_navigation.spec.ts` (Remove `if` checks)**

```typescript
// Replace lines 106-113 with:
await expect(headerLinks).not.toHaveCount(0);
const navLink = headerLinks.filter({ hasText: /menu/i }).first();
await expect(navLink).toBeVisible();
await navLink.click();
await expect(page).toHaveURL(/\/menu/);

// Replace lines 121-123 with:
expect(response).not.toBeNull();
expect(response!.status()).toBe(404);
```

**Fix 3: `tests/e2e/syrup-cursor.spec.ts` (Remove `||`)**

```typescript
// Replace line 33 with:
expect([bodyCursor, wrapperCursor]).toContain("none");

// Replace line 77 with:
expect({ class: hoverClass, transform: hoverTransform }).not.toEqual({
  class: initialClass,
  transform: initialTransform,
});
```

**Fix 4: `tests/e2e/global-layout.spec.ts` (Replace JS eval)**

```typescript
// Replace line 76 with native scrolling:
await page.mouse.wheel(0, 500);
```

**Fix 5: `tests/e2e/tier2_interactive.spec.ts` (Declarative skip)**

```typescript
// Replace lines 41-43 with:
test.skip(!!isMobile, "SyrupCursor is a desktop feature");
```

## 5. Verification Method

1. The implementer should apply the specific diffs listed in the Conclusion.
2. Run `npx playwright test tests/e2e/` to ensure the E2E suite executes completely.
3. Validate that none of the modified files contain `if (` conditions wrapping assertions or `||` operators inside `expect()`.
