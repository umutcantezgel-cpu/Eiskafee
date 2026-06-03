# Progress

- Last visited: 2026-06-03T02:04:00-07:00
- Analyzed `src/components/layout/Footer.tsx`.
- Analyzed `src/app/(public)/faq/page.tsx` and `src/app/(public)/kontakt/page.tsx`.
- Discovered that `/kontakt` redirects to `/support#kontakt`, but `id="kontakt"` does not exist in `src/app/(public)/support/page.tsx`.
- Wrote `check_links.js` to ensure other links are correct.
- Documented findings in `handoff.md`.
