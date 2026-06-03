# Handoff Report: `useMenu.test.ts` failure investigation

## 1. Observation

- Running `npm run test src/hooks/__tests__/useMenu.test.ts` fails with `AssertionError: expected [ …(37) ] to have a length of +0 but got 37` at line 68 of `src/hooks/__tests__/useMenu.test.ts`.
- The test case `should handle errors in onSnapshot` simulates a Firestore error, expecting `result.current.items` to be an empty array (`toHaveLength(0)`).
- Inspection of `src/hooks/useMenu.ts` shows that on a Firestore error, the hook calls `setItems(getLocalFallback(category));`.
- `getLocalFallback()` populates the items from `HF_DATA.menu` (imported from `@/lib/data`).
- `HF_DATA` was recently updated from empty placeholders to contain 37 actual items.

## 2. Logic Chain

1. The `useMenu` hook is designed to gracefully fall back to local static data (`HF_DATA.menu`) if the Firestore fetch fails or returns empty.
2. In the `useMenu.test.ts` suite, the test `should handle errors in onSnapshot` triggers a mock error.
3. The hook catches this error and calls `getLocalFallback()` without a category. This function aggregates all items across all categories in `HF_DATA.menu`.
4. Previously, `HF_DATA.menu` had 0 items, so the test correctly expected `toHaveLength(0)`.
5. Now that `HF_DATA.menu` has 37 items, the hook correctly returns all 37 fallback items. The hook is behaving exactly as intended, but the test's hardcoded expectation of `0` is now outdated.
6. To make the test robust against future data updates, the assertion should dynamically calculate the expected length based on `HF_DATA.menu` instead of a hardcoded number.

## 3. Caveats

- No caveats. The issue is purely a test asserting outdated placeholder data state.

## 4. Conclusion

The failing test is a predictable side effect of populating `data.ts` with real data. The test should be updated to expect the total number of fallback items available in `HF_DATA.menu`.

**Proposed Fix:**
Apply the following changes to `src/hooks/__tests__/useMenu.test.ts`:

1. Add the import for `HF_DATA`:

```typescript
import { HF_DATA } from "@/lib/data";
```

2. Update the assertion in the `should handle errors in onSnapshot` test block:

```typescript
<<<<
    expect(result.current.items).toHaveLength(0);
====
    const totalFallbackItems = Object.values(HF_DATA.menu).reduce(
      (acc, cat: any) => acc + cat.items.length,
      0
    );
    expect(result.current.items).toHaveLength(totalFallbackItems);
>>>>
```

## 5. Verification Method

1. Implement the proposed change in `src/hooks/__tests__/useMenu.test.ts`.
2. Run `npm run test src/hooks/__tests__/useMenu.test.ts` from the workspace root.
3. All tests in the file should pass (`3 passed`).
