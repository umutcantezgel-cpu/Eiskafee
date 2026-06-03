## 2026-06-03T09:05:55Z

You are an Explorer for Milestone 3: Link Fixing (Iteration 2).
Your working directory is /Users/umurey/Downloads/Hey Fedee/hey-fede-app/.agents/teamwork_preview_explorer_m3_iter2_2

Context:
Previous iteration found two issues that still need fixing:

1. In `src/app/(public)/auth/page.tsx`, the "Passwort vergessen?" text is a static `<span>` instead of a Link to `/password-reset`.
2. The `/kontakt` footer link correctly redirects to `/support#kontakt`, but the contact form in `src/app/(public)/support` lacks the `id="kontakt"` attribute, making the anchor link dead.

Objective:

1. Analyze how to implement a `Link` component around "Passwort vergessen?" in `src/app/(public)/auth/page.tsx`.
2. Analyze how to add `id="kontakt"` to the contact form section in `src/app/(public)/support/page.tsx` (or whichever component holds the form).
3. Do NOT implement the fix yourself. Provide a fix strategy in `handoff.md` and report back.
