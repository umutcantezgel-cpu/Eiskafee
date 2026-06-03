# Project: Hey Fede! – Dessertbar & Café Wetzlar

## Architecture

- Next.js 16 App Router with React 19, TypeScript
- **Server Components (Default):** Static UI, initial data layout.
- **Client Components (`"use client"`):** Framer Motion animations, Zustand state management.
- **Styling:** Tailwind CSS with custom palette — Terracotta (#CC624C), Cream (#FFF8F0 / #f5efe8), beige, peach, bark.
- **State:** Zustand (useStore) for cart management
- **Backend:** Firebase (Auth + Firestore)
- **Type Safety:** Strict TypeScript (no `any`).

## Code Layout

- `src/app/` - Next.js App Router pages and layout
  - `layout.tsx`, `page.tsx` (Home), `template.tsx`, `globals.css`
  - Route dirs: about/, admin/, auth/, checkout/, confirmation/, legal/, loyalty/, menu/, order-hub/, order-review/, order-status/, pickup-time/, profile/, support/, visit/
  - **TO ADD:** gutscheine/, reservierung/, password-reset/, faq/, kontakt/, not-found.tsx (custom 404)
- `src/components/` - Reusable UI components
  - `layout/` - Header.tsx, Footer.tsx (ACTIVE — used by app/layout.tsx)
  - `global/` - Header.tsx, Footer.tsx, Logo.tsx (DUPLICATE — to be deleted per R5)
  - `ui/` - Atomic UI components (Button, Logo, FadeUp, SectionTitle, etc.)
  - `interactive/` - SyrupCursor, LiquidTransition, PhysicsPlayground, ScratchCard
  - `cart/` - CartDrawer.tsx
  - `menu/` - MenuClient.tsx, WaffleCrafter.tsx
  - `admin/` - StoreToggle.tsx
- `src/store/` - Zustand store (useStore.ts)
- `src/lib/` - Data + Firebase
  - `data.ts` - Menu items, categories, config
  - `firebase/config.ts` - Firebase init
  - `firebase/AuthContext.tsx` - Auth provider
- `src/hooks/` - Custom hooks
- `src/types/` - TypeScript type definitions

## Blueprint Sources (Read-Only Reference)

- `/Users/umurey/Downloads/Hey Fedee/Hey Fedee Kopie/` - 15+ JSX files with page designs
- `/Users/umurey/Downloads/Hey Fedee/data.js` - Menu data, categories, reviews
- `/Users/umurey/Downloads/Hey Fedee/design-v2.jsx` - Design system definitions
- `/Users/umurey/Downloads/Hey Fedee/styles.css` - Blueprint CSS
- `/Users/umurey/Downloads/Hey Fedee/pages-support.jsx` - FAQ, Kontakt, Gutscheine
- `/Users/umurey/Downloads/Hey Fedee/pages-account.jsx` - Profile, Loyalty, Password Reset
- `/Users/umurey/Downloads/Hey Fedee/pages-legal-error.jsx` - Impressum, Datenschutz, AGB, 404
- `/Users/umurey/Downloads/Hey Fedee/pages-order.jsx` - Checkout, Pickup, Review, Confirmation, Status
- `/Users/umurey/Downloads/Hey Fedee/pages-shared.jsx` - Reservierung
- `/Users/umurey/Downloads/Hey Fedee/global-v2.jsx` - Header, Footer with full nav

## Milestones

| #   | Name                         | Scope                                                                            | Dependencies   | Status |
| --- | ---------------------------- | -------------------------------------------------------------------------------- | -------------- | ------ |
| 1   | Initial Build & Type Audit   | Run `npm run build`, fix type/lint/build errors                                  | none           | DONE   |
| 2   | Placeholder & Content Polish | Search and remove "TODO", "Lorem Ipsum", replace with production copy            | none           | DONE   |
| 3   | Internal Link Integrity      | Verify all internal links, fix 404s                                              | none           | DONE   |
| 4   | External Config Prompts      | Identify missing configs (Firebase, Stripe) and create `comet_*_prompt.md` files | M1, M2         | DONE   |
| 5   | E2E Testing Track            | Design and execute E2E opaque-box tests per requirements                         | none           | DONE   |
| 6   | Final Production Build       | Pass `npm run build` with zero errors                                            | M1, M2, M3, M4 | DONE   |

## Interface Contracts

### `components/layout/` ↔ `app/layout.tsx`

- Header and Footer in layout/ are the active components used by the root layout
- Header nav links: Speisekarte (/menu), Über Uns (/about), Besuchen & Liefern (/visit), Login/Profile (/auth or /profile), Cart (toggle)
- Footer nav links: Startseite (/), Speisekarte (/menu), Über Uns (/about), Besuchen & Liefern (/visit), FAQ (/faq), Kontakt (/kontakt), Gutscheine (/gutscheine), Reservierung (/reservierung), Impressum (/legal?tab=impressum), Datenschutz (/legal?tab=datenschutz), AGB (/legal?tab=agb)

### `store/useStore.ts` ↔ Order Flow Pages

- Cart items: { id, name, price, quantity, desc? }
- Actions: addToCart, removeFromCart, updateQuantity, toggleCart, clearCart
- Order flow reads cart state, writes order to Firestore on confirmation

### `lib/firebase/` ↔ All Firebase-dependent components

- config.ts exports: app, auth, db
- AuthContext.tsx provides auth state to components
- Firestore collections: orders (for order flow)

## Important Notes

- Next.js 16 — check node_modules/next/dist/docs/ for API conventions
- ALL text must be in German
- ALL prices in EUR (€)
- Terracotta primary: #CC624C, Cream background: #FFF8F0 / #f5efe8
