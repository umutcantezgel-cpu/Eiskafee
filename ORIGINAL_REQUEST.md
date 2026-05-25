# Original User Request

## Initial Request — 2026-05-24T21:57:10Z

Migrate the monolithic prototype of "Hey Fede! – Dessertbar & Café Wetzlar" into a highly polished, production-ready Next.js 14/15 (App Router) application. The app must feature a strict separation of Server and Client components, Framer Motion animations, Matter.js physics integration, and a Zustand-based state management layer.

Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app
Integrity mode: development

## Requirements

### R1. Complete Phases 3-6
Implement the remaining project phases:
- Phase 3: Global Layout & UI-Core (Header, Footer, atomic UI components).
- Phase 4: Interactive Master-Features (SyrupCursor, LiquidTransition, PhysicsPlayground, ScratchCard).
- Phase 5: Core Pages (Home, Menu, About, Visit).
- Phase 6: Order-Hub & Sub-Routen (Auth, Cart, Support, Legal-Pages).

### R2. Strict Technical Architecture
Adhere to the following constraints:
- Use TypeScript in strict mode (no `any`).
- Use Tailwind CSS with the provided custom configuration (cream, beige, peach, terra, bark).
- Manage animations and Web-Physics safely without memory leaks (proper cleanup of RAF and Matter.js engines).
- Ensure safe SSR hydration for canvas and physics features (`next/dynamic` with `ssr: false` or `useEffect`).

### R3. Deploy-Ready Performance
Ensure optimal performance, accessibility, and GEO (Generative Engine Optimization) via semantic HTML and Server-Side Rendering for all non-interactive content.

## Acceptance Criteria

### Automated Agent-as-Judge Verification
- [ ] **Hydration Safety**: An independent agent verifies that `matter-js` and Canvas components do not trigger server-side rendering errors or hydration mismatches.
- [ ] **Memory Management**: An independent agent verifies that all Matter.js engines and `requestAnimationFrame` loops include proper cleanup logic within `useEffect`.
- [ ] **Component Separation**: An independent agent verifies that interactive components (Framer Motion, Context, Zustand hooks) are explicitly marked with `"use client"` and isolated from Server Components.
- [ ] **Build Validation**: The command `npm run build` executes successfully without strict TypeScript or ESLint errors.

## Follow-up — 2026-05-25T13:04:09Z

Das Next.js App-Projekt "Hey Fede!" soll vervollständigt (alle ausstehenden Order-Pages) und umfassend optimiert (A11y, Performance, UI-Polish) werden, um dem Kunden einen finalen Vercel-Link für die Abnahme und Bezahlung übergeben zu können.

Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app
Integrity mode: development

## Requirements

### R1. Implementierung der fehlenden "Order-Flow" Pages
Alle noch fehlenden Unterseiten aus der `pages-order.jsx` (Order-Hub, Checkout, Pickup-Time, Order-Review, Confirmation, Order-Status) müssen als funktionale Next.js App-Router Pages implementiert werden.

### R2. Volles Optimierungs-Paket (A11y, Performance & UI)
Die gesamte Applikation (inkl. der neuen Pages) muss auf Barrierefreiheit (a11y), Performance (Lighthouse) und UI-Feinschliff (Animationen, Farben) geprüft und optimiert werden.

### R3. Vercel Deployment Sync
Der funktionale Endstand muss fehlerfrei (`npm run build`) sein, damit das laufende Vercel-Deployment automatisch den neuesten Stand für den Kunden ausliefert.

## Acceptance Criteria

### Order-Flow Vollständigkeit
- [ ] Die Routen `/order-hub`, `/checkout`, `/pickup-time`, `/order-review`, `/confirmation` und `/order-status` existieren und sind funktional miteinander verlinkt.

### A11y & Performance (Automated Check)
- [ ] Ein `npm run build` läuft ohne strikte TypeScript- oder ESLint-Fehler durch.
- [ ] Es gibt keine schweren "Low Contrast" oder "Missing Label" Fehler in der Chrome Console (geprüft über DevTools).
