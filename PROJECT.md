# Project: Hey Fede! – Dessertbar & Café Wetzlar

## Architecture
- Strictly separated Next.js 14/15 App Router architecture.
- **Server Components (Default):** Static UI, initial data layout.
- **Client Components (`"use client"`):** Framer Motion animations, Matter.js Physics integration, Zustand state management.
- **Styling:** Tailwind CSS with custom palette (cream, beige, peach, terra, bark).
- **Type Safety:** Strict TypeScript (no `any`).

## Code Layout
- `app/` - Next.js App Router pages and layout (`layout.tsx`, `page.tsx`).
- `components/` - Reusable UI components.
  - `components/global/` - Header, Footer.
  - `components/ui/` - Atomic UI components.
  - `components/features/` - Interactive Master-Features (SyrupCursor, LiquidTransition, PhysicsPlayground, ScratchCard).
- `store/` - Zustand store definition.
- `styles/` - Global CSS and Tailwind config.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Global Layout & UI-Core | Phase 3: Header, Footer, atomic UI components | none | IN_PROGRESS (ce7b3e8e-953f-4c26-85d5-19943576c943) |
| 2 | Interactive Master-Features | Phase 4: SyrupCursor, LiquidTransition, PhysicsPlayground, ScratchCard | M1 | PLANNED |
| 3 | Core Pages | Phase 5: Home, Menu, About, Visit | M1, M2 | PLANNED |
| 4 | Order-Hub & Sub-Routen | Phase 6: Auth, Cart, Support, Legal-Pages | M1, M2 | PLANNED |
| 5 | E2E Testing Suite | Dual Track Test Automation (Tiers 1-4) | none | IN_PROGRESS (a550946a-1512-48da-8813-7d84456ac75a) |
| 6 | Final Delivery & Pass Tests | Pass 100% E2E tests + Tier 5 Hardening | M1, M2, M3, M4, M5 | PLANNED |

## Interface Contracts
### `components/features/` ↔ `app/`
- Physics and Canvas features must be loaded via `next/dynamic` with `ssr: false` or managed via strict `useEffect` to avoid hydration mismatches.
- Matter.js engines and `requestAnimationFrame` loops must provide explicit cleanup functions in their `useEffect` hooks.

### `store/` ↔ `components/`
- Zustand store state must only be accessed inside Client Components.

## Important Note regarding Next.js version
Refer to `AGENTS.md` - read Next.js docs in `node_modules/next/dist/docs/` when in doubt, as API/conventions might differ.
