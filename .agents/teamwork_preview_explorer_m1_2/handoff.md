# Handoff Report: M1 Global Layout & UI-Core Migration

**Mission:** Analyze prototype files (`global-v2.jsx`, `design-v2.jsx`) and provide a strategy to migrate Header, Footer, and atomic UI components to the Next.js App Router (`hey-fede-app`).

## 1. Observation
- `global-v2.jsx` defines three UI components: `Logo`, `Header` (uses `useState`, `useEffect` for scroll/hamburger), and `Footer` (static, uses `lucide-react` icons). It currently relies on `activePage` and `setPage` props for custom routing.
- `design-v2.jsx` defines atomic UI components: `useFadeUp` (hook using `IntersectionObserver`), `WaveDivider` (SVG), `FoodIcon`, `StampBadge`, `TicketCard`, `PrimaryButton` (uses `useState` and `onMouseEnter`/`Leave` for bite-mark animation), `SecondaryButton`, and `SectionTitle`.
- The Next.js app (`hey-fede-app/src/`) uses the `src/` directory convention. The main layout is in `src/app/layout.tsx` which currently defaults to `Geist` fonts.
- `lucide-react` is already installed in `package.json`.

## 2. Logic Chain
1. **Server vs. Client Components:**
   - Because `Header` uses `useState` for mobile menu and `useEffect` for scroll events, it MUST be a Client Component (`"use client"`).
   - `PrimaryButton` uses `useState` for hover effects, so `src/components/ui/Button.tsx` MUST be a Client Component.
   - `useFadeUp` uses `useRef` and `useEffect`, so it's a client-only hook.
   - All other components (`Footer`, `Logo`, `WaveDivider`, `FoodIcon`, `StampBadge`, `TicketCard`, `SectionTitle`) are static and should be **Server Components** by default for optimal performance.
2. **Routing Update:** 
   - The custom `setPage` callbacks in `Header` and `Footer` need to be replaced with Next.js `<Link>` components from `next/link`.
   - `activePage` styling in `Header` should use `usePathname()` from `next/navigation` to detect the current route.
3. **Layout Integration:**
   - `src/app/layout.tsx` must be updated to import `Calistoga` and `Nunito` from `next/font/google` instead of `Geist`.
   - The `<body>` tag should wrap its children with `<Header />`, `<main>`, and `<Footer />`, and apply the brand background color (`bg-[#f5efe8]`).

## 3. Caveats
- `SecondaryButton` doesn't strictly need state, but it makes sense to export it alongside `PrimaryButton` in a `"use client"` file (`src/components/ui/Button.tsx`).
- The prototype components inject global `LucideReact` and `React` via CDN. The Next.js components must use standard imports (`import { Menu, X } from 'lucide-react'`).
- The hook `useFadeUp.ts` should be placed in `src/hooks/useFadeUp.ts` to keep `components/ui/` clean.

## 4. Conclusion & Fix Strategy
Implement the migration file-by-file as follows:

**1. Create Hooks:**
- `src/hooks/useFadeUp.ts`: Export the `useFadeUp` hook (client-only).

**2. Create Global Components (`src/components/global/`):**
- `Logo.tsx`: Server Component. Export the SVG. Wrap it in a `<Link href="/">` where used.
- `Header.tsx`: Client Component (`"use client"`). Use `usePathname()` and `<Link>` instead of `setPage`.
- `Footer.tsx`: Server Component. Use `<Link>` and import `WaveDivider`.

**3. Create UI Components (`src/components/ui/`):**
- `WaveDivider.tsx`: Server Component.
- `FoodIcon.tsx`: Server Component.
- `StampBadge.tsx`: Server Component.
- `TicketCard.tsx`: Server Component.
- `Button.tsx`: Client Component (`"use client"`). Export `PrimaryButton` and `SecondaryButton`.
- `SectionTitle.tsx`: Server Component.

**4. Update Layout (`src/app/layout.tsx`):**
- Import and apply `Calistoga` and `Nunito` fonts.
- Assemble the DOM: `<body> <Header /> <main>{children}</main> <Footer /> </body>`.

## 5. Verification Method
- **Implementation:** Check that all files are created in `src/components/global/` and `src/components/ui/` with the correct `"use client"` directives.
- **Build/Test:** Run `npm run lint` and `npm run build` from `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/` to ensure TypeScript interfaces are strict, Next.js routing is properly imported, and there are no Hydration errors.
