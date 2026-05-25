# Scope: Milestone 1 - Global Layout & UI-Core

## Architecture
- Extract Header, Footer, and atomic UI components from prototype files (`global-v2.jsx`, `design-v2.jsx`, etc.) in `/Users/umurey/Downloads/Hey Fedee/`.
- Migrate them into the new Next.js app in `/Users/umurey/Downloads/Hey Fedee/hey-fede-app`.
- **Server Components (Default):** Static UI, initial data layout.
- **Client Components (`"use client"`):** UI components that require interaction or hooks.
- **Styling:** Tailwind CSS with custom palette (cream, beige, peach, terra, bark).
- **Type Safety:** Strict TypeScript (no `any`).

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Extract Header & Footer | Create layout components (`components/global/Header.tsx`, `components/global/Footer.tsx`), integrate them into `app/layout.tsx`. | none | PLANNED |
| 2 | Extract Atomic UI Components | Create reusable atomic UI components in `components/ui/` based on prototype. | none | PLANNED |
| 3 | Types & Styling | Ensure strict TypeScript and Tailwind classes match the prototype. | 1, 2 | PLANNED |

## Interface Contracts
### `components/global/` & `components/ui/` ↔ `app/`
- All interactive components must be marked with `"use client"`.
- Provide proper TypeScript interfaces for component props.
- Global layout components (Header, Footer) will be rendered in `app/layout.tsx`.
