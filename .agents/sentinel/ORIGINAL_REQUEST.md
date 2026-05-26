# Original User Request

## Initial Request — 2026-05-26T12:51:57Z

Complete integration of all blueprint pages from the "Hey Fedee Kopie" folder into the production Next.js app, fix all hardcoded order-flow pages, configure Firebase with real keys, unify design to Terracotta/Cream, and clean up the entire codebase.

Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app
Integrity mode: development

## Reference Material

The blueprint folder `/Users/umurey/Downloads/Hey Fedee/Hey Fedee Kopie/` contains 15+ JSX files defining 28 screens. These are the **authoritative design source** for all pages. The static data layer lives in `data.js` (menu items, categories, reviews, config). The design system is defined in `design-v2.jsx` and `styles.css`.

## Requirements

### R1. Integrate All Missing Pages from Blueprints
Routes: `/gutscheine`, `/reservierung`, `/password-reset`, custom 404 page
Ensure `/faq` and `/kontakt` are accessible.

### R2. Fix the Entire Order Flow (Remove All Hardcoded Data)
Pages: `/checkout`, `/pickup-time`, `/order-review`, `/confirmation`, `/order-status`
Must use Zustand cart, real Firestore writes, dynamic dates/times.

### R3. Configure Firebase with Real Keys
Replace dummy config with real values via `.env.local` + `process.env.NEXT_PUBLIC_*`.
Keys: apiKey=AIzaSyBsX2Xrr31gmxRbR1l76k0CRGQGxy-y9fk, projectId=hey-fedee, etc.

### R4. Redesign Profile & Loyalty Pages (Terracotta/Cream Theme)
German language, EUR currency, Terracotta/Cream colors. Follow blueprints.

### R5. Complete Codebase Cleanup
Delete `src/components/global/`, remove duplicates, fix all imports, update Header/Footer links, remove loose blueprint files from parent directory.

### R6. Admin Subroutes
Create `/admin/orders`, `/admin/menu`, `/admin/settings`.

## Acceptance Criteria
- All new routes render correctly
- Order flow uses real cart data + Firestore
- Firebase configured with real keys
- All pages use Terracotta/Cream theme, German, EUR
- No dead code/duplicates
- `npm run build` completes with zero errors
