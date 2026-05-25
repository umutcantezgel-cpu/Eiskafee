# Handoff Report: Milestone 1 - Global Layout & UI-Core Extraction

## 1. Observation
- The project is a Next.js 14/15 App Router app enforcing Server Components by default, Client Components (`"use client"`) only when needed. Type safety (strict TypeScript) and Tailwind CSS are required (`PROJECT.md` & `SCOPE.md`).
- File `/Users/umurey/Downloads/Hey Fedee/global-v2.jsx` contains:
  - `Logo` (Lines 10-23): SVG-based brand logo.
  - `Header` (Lines 26-146): Sticky navigation with scroll state (`scrolled`), mobile menu state (`open`), and simulated routing (`activePage`, `setPage`).
  - `Footer` (Lines 149-238): Complex footer referencing `WaveDivider`, `Logo`, and simulated routing.
- File `/Users/umurey/Downloads/Hey Fedee/design-v2.jsx` contains:
  - `useFadeUp` (Lines 10-23): Intersection observer hook.
  - `WaveDivider` (Lines 26-48): SVG shape divider.
  - `FoodIcon` (Lines 51-79): Dynamic Lucide icon wrapper.
  - `StampBadge` (Lines 82-99): Circular SVG text badge.
  - `TicketCard` (Lines 102-117): Dashed-border card with holes.
  - `PrimaryButton` / `SecondaryButton` (Lines 122-170): `PrimaryButton` uses `onMouseEnter` state for a "bite-mark" hover animation.
  - `SectionTitle` (Lines 173-182): Standard typography wrapper.

## 2. Logic Chain
- **Server vs. Client Identification**:
  - Components requiring React hooks (`useState`, `useEffect`, DOM events) must be Client Components (`"use client"`).
  - `Header` needs state for scrolling and mobile menu toggle. `PrimaryButton` needs state for hover animation. `useFadeUp` uses `useRef` and `useEffect`.
  - All other components (`Logo`, `Footer`, `WaveDivider`, `FoodIcon`, `StampBadge`, `TicketCard`, `SecondaryButton`, `SectionTitle`) are purely presentational and can be Server Components.
- **Routing Modernization**:
  - The prototype uses a simulated `activePage` / `setPage` routing approach. In Next.js, this must be replaced with `next/link` (`<Link href="...">`) and `next/navigation` (`usePathname()` in Client Components like `Header`) for active route highlighting.
- **Icon Handling**:
  - `FoodIcon` dynamically looks up icons via `LucideReact[icon]`. In Next.js, dynamic string lookups for icons aren't easily typed or tree-shaken on the server. The icon mapping should be handled via a static map or by passing the icon component directly.

## 3. Caveats
- `SecondaryButton` doesn't strictly need `"use client"`, but if grouped in `components/ui/Button.tsx` with `PrimaryButton`, the whole file becomes a Client Component. This is acceptable for simple buttons, but can be split if Server Side rendering of `SecondaryButton` is strictly preferred.
- `FoodIcon`'s dynamic Lucide icon rendering needs a refactor to be statically analyzable or passed as a prop to maintain tree-shaking and type safety.
- The `href` targets (`/menu`, `/about`, `/visit`) are planned for Phase 5 (Core Pages) and Phase 6 (Order-Hub), so the links will initially navigate to 404s until those pages are built.
- `useFadeUp` is defined in `design-v2.jsx` but probably belongs in a `hooks/` directory, rather than `components/ui/`.

## 4. Conclusion
Here is the recommended file-by-file extraction strategy:

### Global Components (`components/global/`)
- `Logo.tsx`: **Server Component**. Extract SVG. Remove `onClick` prop, accept `className` and `size`.
- `Header.tsx`: **Client Component** (`"use client"`). Use `usePathname` for active link state. Replace buttons with `next/link`.
- `Footer.tsx`: **Server Component**. Replace `setPage` buttons with `next/link`.

### UI Components (`components/ui/`)
- `WaveDivider.tsx`: **Server Component**. Typed props (`fromColor`, `toColor`, `variant`, `flip`).
- `FoodIcon.tsx`: **Server Component**. Accept a Lucide icon component as a prop rather than a string to keep it Server-friendly and tree-shakable.
- `StampBadge.tsx`: **Server Component**. Keep SVG, add typed props.
- `TicketCard.tsx`: **Server Component**. Add `children: React.ReactNode` prop.
- `Button.tsx`: **Client Component** (`"use client"`). Contains `PrimaryButton` and `SecondaryButton`.
- `SectionTitle.tsx`: **Server Component**. Add typed props.

### Hooks (`hooks/`)
- `useFadeUp.ts`: Extract hook logic, type `useRef` as `RefObject<HTMLElement>`.

### App Layout (`app/layout.tsx`)
- Render `<Header />` and `<Footer />` as wrappers around `{children}`.
- Ensure the `<body>` has the correct background colour and Tailwind fonts configuration applied.

## 5. Verification Method
- **TypeScript & Linting**: Run `npm run build` or `npm run type-check` to ensure no `any` types and that all component props are properly typed.
- **Server/Client Validation**: Check for `"use client"` directives in the compiled `.next` outputs or verify no client hooks are placed in Server Components.
- **Visual Regression**: Ensure `npm run dev` successfully renders the Header and Footer with matching visual styles and the interactive "bite-mark" on the `PrimaryButton`.
