# Handoff Report: Link Audit & Route Validation

## Observation

- Ran an exact search for `href="/*"`, `router.push('/*')`, and `<TransitionLink href="/*">` patterns across all files in `src/`.
- Discovered active internal links to: `/`, `/menu`, `/visit`, `/about`, `/order-status`, `/checkout`, `/pickup-time`, `/order-review`, `/auth`, `/profile`, `/profile/orders`, `/loyalty`, `/lieferservice-desserts-lahn-dill`, `/eisdiele-wetzlar-special-shakes`, `/events-catering-hessen`, `/vegane-desserts-wetzlar`, `/bubble-waffles-wetzlar`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb`, `/widerruf`, `/cookie-richtlinie`, `/order-hub`, and several `/admin/*` paths.
- Ran a directory scan of `src/app` and confirmed that **every single one of these paths** has a corresponding page/route in `src/app`.
- Reviewed the `PROJECT.md` interface contract which states the Footer must contain: `FAQ (/faq)`, `Kontakt (/kontakt)`, `Gutscheine (/gutscheine)`, `Reservierung (/reservierung)`. `src/components/layout/Footer.tsx` does **not** include these links.
- Found that `src/app/(public)/faq/page.tsx` and `src/app/(public)/kontakt/page.tsx` exist but simply execute a `redirect()` to `/support#faq` and `/support#kontakt`.
- Noticed in `src/app/(public)/auth/page.tsx` at line 130 that the text "Passwort vergessen?" is structurally missing an `href` (it is just a `<span>` element). The `password-reset` page itself exists but is orphaned from the UI.
- The `PROJECT.md` specifies `Impressum (/legal?tab=impressum)`, but the footer currently implements standalone routes (`/impressum`, `/datenschutz`, `/agb`) which is technically better for SEO and these pages actually exist.

## Logic Chain

1. Since all `href` and `router.push()` endpoints align exactly with directories existing in `src/app`, there are no hard 404s in the application.
2. While there are no 404s, there is a structural gap where valid pages (`/password-reset`, `/reservierung`, `/gutscheine`, `/faq`) exist but are unlinked from the main navigation.
3. The auth page needs a structural update to actually utilize the `/password-reset` page.
4. The footer needs a content update to comply with the project architectural contract (`PROJECT.md`).

## Caveats

- No caveats. The validation comprehensively covered the `src/` directory.

## Conclusion & Fix Strategy

There are **0** instances of 404s caused by broken `href` links. All linked routes exist.
However, there are "missing links" that must be added to fulfill the project contracts:

**Fix Strategy:**

1. **Footer Navigation (Missing Links):** Add `<TransitionLink>` entries in `src/components/layout/Footer.tsx` for:
   - `FAQ (/faq)`
   - `Kontakt (/kontakt)`
   - `Gutscheine (/gutscheine)`
   - `Reservierung (/reservierung)`
2. **Auth Page (Orphaned Route):** In `src/app/(public)/auth/page.tsx` (Line 130), wrap the `<span>Passwort vergessen?</span>` with `<TransitionLink href="/password-reset">`.
3. **Legal Routes Discrepancy:** The `PROJECT.md` documentation should be updated to reflect the standalone architecture (e.g., `/impressum`) instead of the query-param pattern (`/legal?tab=impressum`), as the standalone pages are correctly implemented and linked.

## Verification Method

- **To verify 404s:** Run `find src/app -type d` and cross-reference with the `href` usages to see that all linked directories exist.
- **To verify missing links:** Check `src/components/layout/Footer.tsx` for the absence of `href="/faq"`.
- **To verify auth link:** Inspect `src/app/(public)/auth/page.tsx` line 130.
