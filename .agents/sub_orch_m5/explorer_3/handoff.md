# Handoff Report — Explorer 3: Duplicate Component Analysis

**Summary**: The app actively uses `layout/` versions for Header/Footer, `ui/` versions for Logo/PhysicsPlayground/ScratchCard/SyrupCursor. The `global/` folder and `interactive/` folder contain older/simpler duplicates that are NOT imported by the active app (except `interactive/SyrupCursor` in an unused `template.tsx`). All `global/*` and `interactive/*` duplicates can be safely deleted.

---

## 1. Observation

### Comparison 1: `global/` vs `layout/` (Header, Footer, Logo)

#### Header

| Property | `global/Header.tsx` | `layout/Header.tsx` |
|---|---|---|
| **Lines / Bytes** | 259 lines / 7,934 bytes | 182 lines / 7,884 bytes |
| **Imports** | `Link`, `Logo` from `./Logo` | `TransitionLink`, `Logo` from `@/components/ui/Logo`, `useStore` |
| **Features** | Basic scroll detection, nav links, mobile overlay | Scroll detection, **cart button** (`useStore`), **auth/login button**, **logo easter egg** (triple-click achievement), **TransitionLink** for smooth navigation |
| **Nav links** | Includes "/" (Startseite) in links | Omits "/" from nav links (logo serves as home link) |
| **CSS approach** | Inline styles, custom class names (`desktop-nav`, `hide-mobile`, `hamburger-btn`) | Tailwind classes (`hidden md:flex`, `md:hidden`), CSS vars (`var(--font-nunito)`) |
| **Scroll listener** | Not passive | Passive (`{ passive: true }`) — better performance |
| **Active import in `layout.tsx`?** | ❌ No | ✅ Yes — `src/app/layout.tsx:3` |

#### Footer

| Property | `global/Footer.tsx` | `layout/Footer.tsx` |
|---|---|---|
| **Lines / Bytes** | 218 lines / 6,797 bytes | 111 lines / 5,554 bytes |
| **Imports** | `Link`, `Logo` from `./Logo`, `WaveDivider` from `../ui/WaveDivider` | `Logo` from `@/components/ui/Logo`, `TransitionLink`, `WaveDivider` from `@/components/ui/WaveDivider` |
| **Social links** | `href="#"` placeholder | **Real URLs** (instagram.com/heyfede_wetzlar, tiktok.com/@heyfede_wetzlar) with `target="_blank"` |
| **Legal links** | `href="#"` placeholder | **Real routes** (`/legal#impressum`, `/legal#datenschutz`, `/legal#agb`) |
| **Year** | Hardcoded `© 2024` | Dynamic `© {new Date().getFullYear()}` |
| **WaveDivider colors** | `fromColor="#eedfcc"` (same as bg — invisible) | `fromColor="#f5efe8"` (correct preceding section bg) |
| **Navigation links** | `<Link>` | `<TransitionLink>` for smooth page transitions |
| **CSS** | Inline, hardcoded font names | CSS variables (`var(--font-nunito)`) |
| **Active import in `layout.tsx`?** | ❌ No | ✅ Yes — `src/app/layout.tsx:4` |

#### Logo

| Property | `global/Logo.tsx` | `ui/Logo.tsx` |
|---|---|---|
| **Lines / Bytes** | 39 lines / 794 bytes | 18 lines / 756 bytes |
| **Visual** | Red circle (`#CC624C`) with "F!" text | Organic blob SVG shape (`#E4C0A8`) with "Hey Fede!" text |
| **Default size** | 64 | 52 |
| **Props** | `size`, `className` | `size` only |
| **Active import?** | ❌ Only by `global/Header.tsx` and `global/Footer.tsx` | ✅ By `layout/Header.tsx:7` and `layout/Footer.tsx:4` |

### Comparison 2: `ui/` vs `interactive/` (PhysicsPlayground, ScratchCard, SyrupCursor)

#### PhysicsPlayground

| Property | `ui/PhysicsPlayground.tsx` | `interactive/PhysicsPlayground.tsx` |
|---|---|---|
| **Lines / Bytes** | 176 lines / 6,386 bytes | 89 lines / 2,870 bytes |
| **Rendering** | DOM-based (Lucide icons in `<div>` elements synced via `requestAnimationFrame`) | Canvas-based (`Matter.Render.create`) |
| **Items** | 14 dessert-themed items with icons (Cookie, Sparkles, Coffee, Cake, Heart, Star, Droplets) | Generic random circles/rectangles on click |
| **Interaction** | Mouse constraint (drag items) | Click to add items |
| **Accessibility** | `prefers-reduced-motion` fallback to static `FoodIcon` | None |
| **Responsiveness** | `ResizeObserver` to update physics walls | Fixed 300px height, no resize handling |
| **Cleanup** | Full cleanup (RAF cancel, RO disconnect, Matter cleanup) | Full cleanup |
| **Active import?** | ✅ `src/app/page.tsx:9` | ❌ No |

#### ScratchCard

| Property | `ui/ScratchCard.tsx` | `interactive/ScratchCard.tsx` |
|---|---|---|
| **Lines / Bytes** | 163 lines / 5,278 bytes | 114 lines / 4,204 bytes |
| **API** | Wraps `children` as revealed content, `frostingColor` prop | Fixed `discountCode` prop, fixed 250×100 size |
| **Features** | Confetti celebration, haptic feedback (`navigator.vibrate`), session persistence, `prefers-reduced-motion`, `ResizeObserver` for responsive sizing, Framer Motion shake animation on reveal | Basic scratch-to-reveal, fixed dimensions, no celebration effects |
| **Canvas approach** | Pointer events (supports touch natively), DPR-aware, line-based scratch strokes | Mouse + Touch event listeners (manual setup/teardown), circle-based scratching |
| **Progress check** | Throttled (150ms debounce), samples every 32nd pixel | Every scratch event, checks every 4th pixel |
| **Active import?** | ✅ `src/app/page.tsx:7` | ❌ No |

#### SyrupCursor

| Property | `ui/SyrupCursor.tsx` | `interactive/SyrupCursor.tsx` |
|---|---|---|
| **Lines / Bytes** | 134 lines / 5,102 bytes | 83 lines / 2,546 bytes |
| **Motion model** | `useMotionValue` + `useSpring` (5 trail dots with cascading stiffness), snap-to-target on interactive elements | `useState` for position, 2 dots (main + trailing) |
| **Interactive detection** | Detects `button, a, [role="button"], .octa, .hbtn` — cursor expands/morphs to highlight element | Detects `button, a, input, [role="button"]` — simple scale+color change |
| **Pointer detection** | `window.matchMedia('(pointer: fine)')` to disable on touch | None (uses Tailwind `hidden md:block` as proxy) |
| **Reduced motion** | Checks `prefers-reduced-motion`, adjusts spring stiffness | No reduced motion support |
| **Goo filter** | Custom ID `syrup-goo`, hidden SVG element | ID `goo`, visible SVG with class `gooey-filter` |
| **Active import?** | ✅ `src/app/layout.tsx:8` | ⚠️ `src/app/template.tsx:4` (but layout.tsx also imports ui/ version) |

**Note on double-import**: Both `layout.tsx` and `template.tsx` import SyrupCursor — `layout.tsx` from `ui/`, `template.tsx` from `interactive/`. This means **two SyrupCursor instances** may render simultaneously, which is a bug.

---

## 2. Logic Chain

1. **`src/app/layout.tsx` is the root layout** — it imports Header and Footer from `@/components/layout/` (lines 3-4). This is the canonical, active version.
2. **No file in `src/` imports from `@/components/global/`** — confirmed by grep returning zero results. The `global/` components are orphaned dead code.
3. **`global/` components use `./Logo`** (relative import to `global/Logo.tsx`), while `layout/` components use `@/components/ui/Logo`. The `ui/Logo.tsx` is the actively used logo (SVG blob with "Hey Fede!" text).
4. **`layout/` versions are more advanced**: they use `TransitionLink`, `useStore` (cart), auth button, CSS variables, passive scroll listeners, and real URLs. The `global/` versions are earlier prototypes.
5. **For interactive components (`ui/` vs `interactive/`)**: the `ui/` versions are imported by `page.tsx` and `layout.tsx`. They are more feature-rich (accessibility, responsive, animations).
6. **`interactive/SyrupCursor` is imported in `template.tsx`** alongside `ui/SyrupCursor` in `layout.tsx`, creating a dual-cursor bug. The `interactive/` version is simpler and should be removed.
7. **`interactive/PhysicsPlayground` and `interactive/ScratchCard`** are not imported anywhere — orphaned code.

---

## 3. Caveats

- **`template.tsx` dual import**: Removing `interactive/SyrupCursor.tsx` will require also removing the import from `template.tsx:4` and the `<SyrupCursor />` JSX at line 9. The `template.tsx` also imports `LiquidTransition` from `interactive/` which was NOT part of this analysis scope.
- **`global/Logo.tsx` has `className` prop** that `ui/Logo.tsx` does not. If any future consumer needs `className`, the `ui/Logo` should add it.
- **No build/test was run** to confirm the app works without the duplicate files.

---

## 4. Conclusion — Recommendations

### Comparison 1: `global/` vs `layout/`

| Pair | KEEP | DELETE | Merge needed? |
|---|---|---|---|
| **Header** | `layout/Header.tsx` | `global/Header.tsx` | No — layout version is a superset (cart, auth, transitions, perf) |
| **Footer** | `layout/Footer.tsx` | `global/Footer.tsx` | No — layout version has real URLs, dynamic year, correct wave colors |
| **Logo** | `ui/Logo.tsx` | `global/Logo.tsx` | Minor — consider adding `className` prop from global version to ui version |

**Entire `global/` folder** can be deleted — none of its components are imported anywhere in the active app.

### Comparison 2: `ui/` vs `interactive/`

| Pair | KEEP | DELETE | Merge needed? |
|---|---|---|---|
| **PhysicsPlayground** | `ui/PhysicsPlayground.tsx` | `interactive/PhysicsPlayground.tsx` | No — ui version is far more complete (icons, drag, a11y, responsive) |
| **ScratchCard** | `ui/ScratchCard.tsx` | `interactive/ScratchCard.tsx` | No — ui version has confetti, haptics, session persistence, responsive |
| **SyrupCursor** | `ui/SyrupCursor.tsx` | `interactive/SyrupCursor.tsx` | No — ui version has spring physics trail, pointer detection, reduced motion |

**⚠️ Action required when deleting `interactive/SyrupCursor.tsx`**: Must also update `src/app/template.tsx` to remove its import (line 4) and JSX usage (line 9), or remove the file entirely if `LiquidTransition` is handled elsewhere. Currently **two SyrupCursor instances render** (one from layout, one from template).

### Import verification

| File | Imports from | Confirmed |
|---|---|---|
| `src/app/layout.tsx:3` | `@/components/layout/Header` | ✅ |
| `src/app/layout.tsx:4` | `@/components/layout/Footer` | ✅ |
| `src/app/layout.tsx:8` | `@/components/ui/SyrupCursor` | ✅ |
| `src/app/page.tsx:7` | `@/components/ui/ScratchCard` | ✅ |
| `src/app/page.tsx:9` | `@/components/ui/PhysicsPlayground` | ✅ |
| `src/app/template.tsx:4` | `@/components/interactive/SyrupCursor` | ⚠️ Dual with layout.tsx |

---

## 5. Verification Method

1. **Confirm no imports from global/**: `grep -r 'from "@/components/global/' src/` → should return 0 results ✅
2. **Confirm active imports**: `grep -r 'from "@/components/layout/' src/` → layout.tsx lines 3-4 ✅
3. **Check for dual SyrupCursor bug**: `grep -r 'SyrupCursor' src/app/` → returns both layout.tsx:8 and template.tsx:4
4. **After deletion**: Run `npm run build` or `next build` to confirm no broken imports
5. **Invalidation**: If any file outside `src/app/` imports from `global/` or `interactive/`, the delete recommendation would need adjustment (already confirmed none do)
