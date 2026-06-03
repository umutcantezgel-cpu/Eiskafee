# Handoff Report: Fix `useMenu.test.ts` Data Length Failure

## Observation

- Running `npm run test` fails with:
  ```
  FAIL  src/hooks/__tests__/useMenu.test.ts > useMenu > should handle errors in onSnapshot
  AssertionError: expected [ …(37) ] to have a length of +0 but got 37
  ```
- Looking at `src/hooks/useMenu.ts`, lines 86-92:
  ```typescript
      (err) => {
        console.error("useMenu error:", err);
        // Fallback to local data on error
        setItems(getLocalFallback(category));
        setError(err);
        setLoading(false);
      },
  ```
- On a simulated error, `useMenu` falls back to `getLocalFallback(category)`.
- Without a specific category, `getLocalFallback` returns all items from `HF_DATA.menu`.
- Looking at `src/lib/data.ts`, `HF_DATA.menu` contains 10 categories and a total of 37 items.
- In `src/hooks/__tests__/useMenu.test.ts` (line 68), the error case test expects `result.current.items` to have length 0:
  ```typescript
  expect(result.current.items).toHaveLength(0);
  ```

## Logic Chain

1. The error case test simulates an `onSnapshot` error.
2. The hook catches this error and calls `setItems(getLocalFallback(category))`.
3. Because we recently replaced the placeholder menu in `src/lib/data.ts` with real data, `HF_DATA.menu` now has 37 items.
4. Therefore, instead of defaulting to an empty array (length 0), the hook correctly populates the state with the 37 fallback items.
5. The test is asserting `toHaveLength(0)`, which is outdated and incorrect for the new behavior.
6. The test should be updated to assert the dynamically calculated length of all fallback items from `HF_DATA.menu` (or 37).

## Caveats

- We use `.reduce` on `HF_DATA.menu` to calculate the total number of items, which is more robust than hardcoding `37` in case the data changes again in the future.
- The `beforeEach` hook in the test clears mocks via `vi.clearAllMocks()`, but not mock _implementations_. The mock implementation of `onSnapshot` bleeds into the next test (`should query by category if provided`), but since that test only verifies `where` call arguments, it still passes. Using `mockImplementationOnce` instead of `mockImplementation` might be cleaner, but isn't strictly necessary to fix the currently failing assertion.

## Conclusion

The failing test `should handle errors in onSnapshot` should be updated to expect the length of the fallback data, rather than 0.

### Proposed Code Change

In `src/hooks/__tests__/useMenu.test.ts`:

1. Import `HF_DATA`:

```typescript
import { HF_DATA } from "@/lib/data";
```

2. Replace the old assertion:

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

## Verification Method

1. Apply the proposed change to `src/hooks/__tests__/useMenu.test.ts`.
2. Run the test command: `npm run test`
3. Verify that the test suite passes successfully.
