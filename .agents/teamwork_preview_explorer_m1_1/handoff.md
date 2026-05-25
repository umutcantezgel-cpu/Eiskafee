# Handoff Report: Milestone 1 (Phase 3: Global Layout & UI-Core)

## 1. Observation
- Read `PROJECT.md` and `.agents/sub_orch_m1_ui_core/SCOPE.md`: The architecture strictly separates Next.js 14/15 App Router Server Components (default) from Client Components (`"use client"`). The styling uses Tailwind CSS with strict TypeScript.
- Analyzed `/Users/umurey/Downloads/Hey Fedee/global-v2.jsx`:
  - `Logo`: Static SVG component.
  - `Header`: Uses `useState` (`scrolled`, `open`) and `useEffect` (scroll event listener). Uses a custom `activePage`/`setPage` routing approach.
  - `Footer`: Static layout, uses `setPage` callbacks for navigation links.
- Analyzed `/Users/umurey/Downloads/Hey Fedee/design-v2.jsx`:
  - `useFadeUp`: Hook using `useState`, `useEffect`, `useRef`, and `IntersectionObserver`.
  - `PrimaryButton`: Uses `useState` and `onMouseEnter`/`onMouseLeave` for a dynamic "bite-mark" hover animation.
  - `SecondaryButton`: Stateless, but takes an `onClick` prop.
  - `WaveDivider`, `FoodIcon`, `StampBadge`, `TicketCard`, `SectionTitle`: Pure, stateless UI elements rendering HTML/SVG.

## 2. Logic Chain
- **Header**: Because `Header` manages scroll event listeners and mobile menu state, it must be migrated as a **Client Component** (`"use client"`). Its prototype routing (`setPage`) needs to be refactored to use Next.js `usePathname` and `next/link`.
- **Footer**: `Footer` relies on static content. Replacing prototype `setPage` calls with standard Next.js `<Link href="...">` allows it to be a **Server Component**.
- **PrimaryButton**: The custom interactive hover effect relies on React state. Thus, the file hosting it (e.g., `components/ui/Button.tsx`) needs to be a **Client Component** (`"use client"`).
- **Atomic UI**: The remaining UI elements (`WaveDivider`, `FoodIcon`, `StampBadge`, `TicketCard`, `SectionTitle`, `Logo`) do not use state or side-effects and can be implemented as standard **Server Components**.
- **Layout Integration**: In Next.js App Router, `Header` and `Footer` must be injected into `app/layout.tsx`, enclosing the `{children}` payload.

## 3. Caveats
- **Routing API**: The prototype heavily passes `activePage` and `setPage` props. The implementer must replace these with Next.js App Router concepts (`<Link href>` and `usePathname()` from `next/navigation`).
- **Dynamic Icons**: `FoodIcon` dynamically maps a string prop to a `LucideReact` component. In strict TypeScript, this requires an explicit, type-safe mapping of imported icons from `lucide-react` rather than relying on a global object.
- **Button Click Handlers**: `SecondaryButton` receives an `onClick` prop. In Next.js, passing functions to Server Components is not allowed. The implementer should consider adding an `href` prop to render an anchor tag via `<Link>` if the button is used purely for navigation, or group it with `PrimaryButton` in a `"use client"` file if it handles interactive events.
- **Fonts**: The inline styles reference fonts like `Calistoga` and `Nunito`. These should be configured using `next/font/google` in the layout or tailwind config, rather than inline CSS.

## 4. Conclusion
**Proposed Migration Strategy (File by File):**
- **Client Components (`"use client"`)**:
  - `src/components/global/Header.tsx` (convert `setPage` to Next.js routing)
  - `src/components/ui/Button.tsx` (contains `PrimaryButton` and `SecondaryButton`)
  - `src/hooks/useFadeUp.ts` (Client-side custom hook)
- **Server Components (Default)**:
  - `src/components/global/Footer.tsx` (convert `setPage` buttons to `<Link>`)
  - `src/components/global/Logo.tsx`
  - `src/components/ui/WaveDivider.tsx`
  - `src/components/ui/FoodIcon.tsx` (add proper Lucide icon imports/typing)
  - `src/components/ui/StampBadge.tsx`
  - `src/components/ui/TicketCard.tsx`
  - `src/components/ui/SectionTitle.tsx`
- **Layout (`app/layout.tsx`)**:
  - Import and place `<Header />` above and `<Footer />` below the `<main>{children}</main>` block.

## 5. Verification Method
- **Implementation check**: Inspect the generated files to ensure `"use client"` is only present in `Header.tsx` and `Button.tsx`.
- **Compilation**: Run the build step in the Next.js app (`npm run build`). It should complete without hydration errors or Server Component prop violations (e.g., passing functions to Server Components).
- **Type Safety**: Run `npm run lint` or `tsc --noEmit` to verify strict TypeScript adherence, especially regarding the `FoodIcon` Lucide mappings and component props.
