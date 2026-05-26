# Handoff Report — Explorer 1 (Milestone 5: Codebase Cleanup)

**Summary**: Three duplicate component directories exist (`global/`, `interactive/`) alongside the canonical `layout/` and `ui/` directories. Six files are dead duplicates, one component (`SyrupCursor`) is actively rendering twice from two different imports, and `template.tsx` imports from `interactive/` which should be consolidated.

---

## 1. Observation

### Directory Structure

| Directory | Files | Status |
|-----------|-------|--------|
| `src/components/ui/` | 20 files (canonical) | **Active — keep** |
| `src/components/layout/` | 2 files: `Header.tsx`, `Footer.tsx` (canonical) | **Active — keep** |
| `src/components/global/` | 3 files: `Header.tsx`, `Footer.tsx`, `Logo.tsx` | **Dead duplicates of layout/ + ui/** |
| `src/components/interactive/` | 4 files: `PhysicsPlayground.tsx`, `ScratchCard.tsx`, `SyrupCursor.tsx`, `LiquidTransition.tsx` | **Mostly dead duplicates of ui/; LiquidTransition is unique** |

### All Imports Referencing `global/`

**Zero external imports found.** No file in `src/` imports from `@/components/global/` or any relative path like `../global/`. The `global/` files only reference each other internally:

| File | Line | Import | Status |
|------|------|--------|--------|
| `src/components/global/Header.tsx` | 7 | `import { Logo } from "./Logo";` | Internal ref within dead directory |
| `src/components/global/Footer.tsx` | 5 | `import { Logo } from "./Logo";` | Internal ref within dead directory |
| `src/components/global/Footer.tsx` | 4 | `import { WaveDivider } from "../ui/WaveDivider";` | Internal ref within dead directory |

### All Imports Referencing `interactive/`

| File | Line | Current Import | What it should change to |
|------|------|---------------|--------------------------|
| `src/app/template.tsx` | 3 | `import { LiquidTransition } from "@/components/interactive/LiquidTransition";` | **Keep as-is OR move `LiquidTransition.tsx` to `ui/` and update** |
| `src/app/template.tsx` | 4 | `import { SyrupCursor } from "@/components/interactive/SyrupCursor";` | **DELETE this import — SyrupCursor already rendered from `layout.tsx`** |

### All Imports of `PhysicsPlayground`

| File | Line | Current Import | Action |
|------|------|---------------|--------|
| `src/app/page.tsx` | 9 | `import { PhysicsPlayground } from "@/components/ui/PhysicsPlayground";` | ✅ Keep (canonical) |

No other file imports `PhysicsPlayground`. The `interactive/PhysicsPlayground.tsx` is **never imported**.

### All Imports of `ScratchCard`

| File | Line | Current Import | Action |
|------|------|---------------|--------|
| `src/app/page.tsx` | 7 | `import { ScratchCard } from "@/components/ui/ScratchCard";` | ✅ Keep (canonical) |

No other file imports `ScratchCard`. The `interactive/ScratchCard.tsx` is **never imported**.

### All Imports of `SyrupCursor`

| File | Line | Current Import | Action |
|------|------|---------------|--------|
| `src/app/layout.tsx` | 8 | `import { SyrupCursor } from "@/components/ui/SyrupCursor";` | ✅ Keep (canonical) |
| `src/app/template.tsx` | 4 | `import { SyrupCursor } from "@/components/interactive/SyrupCursor";` | ⚠️ **REMOVE — causes double-render** |

**Critical Bug**: Both `layout.tsx` (line 46: `<SyrupCursor />`) and `template.tsx` (line 9: `<SyrupCursor />`) render a `SyrupCursor` component. This means **two custom cursor overlays** are active simultaneously. The `template.tsx` one should be removed.

### LiquidTransition (unique to `interactive/`)

| File | Line | Current Import | Action |
|------|------|---------------|--------|
| `src/app/template.tsx` | 3 | `import { LiquidTransition } from "@/components/interactive/LiquidTransition";` | Move `LiquidTransition.tsx` → `ui/` then update import |

`LiquidTransition.tsx` has **no equivalent** in `ui/` or anywhere else. It's a unique component that should be relocated from `interactive/` to `ui/` before `interactive/` is deleted.

---

## 2. Logic Chain

1. **`global/` is completely dead**: Zero imports reference it from anywhere outside the directory itself. `layout/Header.tsx` and `layout/Footer.tsx` are the versions actually used (imported by `layout.tsx`). `ui/Logo.tsx` is the version actually used (imported by `layout/Header.tsx` and `layout/Footer.tsx`). → **Safe to delete entire `global/` directory.**

2. **`interactive/` is mostly dead duplicates**: `PhysicsPlayground.tsx` and `ScratchCard.tsx` in `interactive/` are never imported by any file. They are simpler/older versions of the corresponding `ui/` files. → **Safe to delete these two files.**

3. **`interactive/SyrupCursor.tsx` is imported but shouldn't be**: `template.tsx` imports it, creating a double-render with the `ui/SyrupCursor.tsx` already rendered in `layout.tsx`. The `ui/` version is more sophisticated (5 tail segments, spring physics, pointer detection, hover magnification) vs the `interactive/` version (2 circles, basic spring). → **Remove the import and JSX from `template.tsx`, delete `interactive/SyrupCursor.tsx`.**

4. **`interactive/LiquidTransition.tsx` is unique and actively used**: This is the only component in `interactive/` that has no duplicate. It's imported by `template.tsx` for page transition animations. → **Move to `ui/` before deleting `interactive/`.**

---

## 3. Caveats

- **Component behavior differences**: The `ui/` and `interactive/` versions of each component are NOT identical — they have different APIs and implementations. The `ui/` versions are consistently more feature-rich. I verified the canonical versions are the ones actually imported by application code.
- **`template.tsx` purpose after cleanup**: After removing `SyrupCursor` from `template.tsx`, it will only contain `LiquidTransition`. This is still valid Next.js architecture (template wraps page transitions).
- **No tests found**: I did not search for test files referencing these components. If tests exist, they may also need updating.

---

## 4. Conclusion

### Files Safe to Delete (6 files)

| # | File Path | Reason |
|---|-----------|--------|
| 1 | `src/components/global/Header.tsx` (7934 bytes) | Dead duplicate of `layout/Header.tsx` — zero imports |
| 2 | `src/components/global/Footer.tsx` (6797 bytes) | Dead duplicate of `layout/Footer.tsx` — zero imports |
| 3 | `src/components/global/Logo.tsx` (794 bytes) | Dead duplicate of `ui/Logo.tsx` — zero imports |
| 4 | `src/components/interactive/PhysicsPlayground.tsx` (2870 bytes) | Dead duplicate of `ui/PhysicsPlayground.tsx` — zero imports |
| 5 | `src/components/interactive/ScratchCard.tsx` (4204 bytes) | Dead duplicate of `ui/ScratchCard.tsx` — zero imports |
| 6 | `src/components/interactive/SyrupCursor.tsx` (2546 bytes) | Duplicate of `ui/SyrupCursor.tsx` — causes double-render bug |

### Files to Relocate (1 file)

| # | From | To | Reason |
|---|------|----|--------|
| 1 | `src/components/interactive/LiquidTransition.tsx` | `src/components/ui/LiquidTransition.tsx` | Unique component; `interactive/` dir should be deleted |

### Imports to Change (2 lines in 1 file)

| File | Line | Current | New |
|------|------|---------|-----|
| `src/app/template.tsx` | 3 | `import { LiquidTransition } from "@/components/interactive/LiquidTransition";` | `import { LiquidTransition } from "@/components/ui/LiquidTransition";` |
| `src/app/template.tsx` | 4 | `import { SyrupCursor } from "@/components/interactive/SyrupCursor";` | **DELETE this line** |
| `src/app/template.tsx` | 9 | `<SyrupCursor />` | **DELETE this JSX** |

### After cleanup `template.tsx` should look like:

```tsx
"use client";

import { LiquidTransition } from "@/components/ui/LiquidTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <LiquidTransition>{children}</LiquidTransition>
  );
}
```

### Directories to Delete After File Operations

| Directory | Action |
|-----------|--------|
| `src/components/global/` | Delete entire directory (all 3 files are dead) |
| `src/components/interactive/` | Delete entire directory (after moving LiquidTransition) |

---

## 5. Verification Method

```bash
# 1. Verify no remaining imports reference global/ or interactive/
grep -r "components/global/" src/
grep -r "components/interactive/" src/

# 2. Verify the build succeeds
npm run build

# 3. Verify no duplicate SyrupCursor rendering
# Open browser, check only ONE custom cursor overlay is active
```

**Invalidation condition**: If any search returns imports from `global/` or `interactive/` not listed in this report, additional investigation is needed.
