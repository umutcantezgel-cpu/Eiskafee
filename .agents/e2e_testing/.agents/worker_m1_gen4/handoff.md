# Handoff Report

## 1. Observation

- The auditor flagged two issues from `REVIEWS_M1_GEN3.md`:
  1. `TEST_INFRA.md` used outdated routes (`/imprint` and `/privacy`).
  2. `playwright.config.ts` used `npm run dev` instead of a production build command.
- The `TEST_INFRA.md` file originally had `- **Info & Legal Pages**: \`/faq\`, \`/kontakt\`, \`/gutscheine\`, \`/reservierung\`, \`/imprint\`, \`/privacy\`.` at line 28.
- The `playwright.config.ts` file originally had `command: 'npm run dev',` at line 21.

## 2. Logic Chain

- To accurately reflect the application's actual routes as per the review feedback, `/imprint` and `/privacy` in `TEST_INFRA.md` needed to be updated to `/legal?tab=impressum` and `/legal?tab=privacy`.
- To properly test hydration errors which only reliably reproduce in production builds (as opposed to development server builds), the WebServer command in `playwright.config.ts` had to be updated to `npm run build && npm run start`.

## 3. Caveats

- No caveats. The fix was directly aligned with the review feedback.

## 4. Conclusion

- Updated `TEST_INFRA.md` on line 28 to use the new legal routes: `/legal?tab=impressum` and `/legal?tab=privacy`.
- Updated `playwright.config.ts` on line 21 to use the production command: `npm run build && npm run start`.

## 5. Verification Method

- Can be verified visually using `cat` or `grep` on `TEST_INFRA.md` and `playwright.config.ts`.
- `npm run build` runs successfully.
- Tests executed via `npx playwright test` will now trigger a production build, ensuring strict hydration checks.
