# Handoff Report

## 1. Observation

- `REVIEWS_M1_GEN3.md` flags two issues:
  1. `TEST_INFRA.md` contains outdated URLs (`/imprint` and `/privacy`) instead of the correct ones (`/legal?tab=impressum` and `/legal?tab=privacy`).
  2. `playwright.config.ts` uses the development server (`npm run dev`) for E2E tests instead of a production build, which violates the E2E Testing Track Principles regarding proper hydration testing.
- I checked `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/TEST_INFRA.md` and confirmed on line 28: `- **Info & Legal Pages**: \`/faq\`, \`/kontakt\`, \`/gutscheine\`, \`/reservierung\`, \`/imprint\`, \`/privacy\`.`
- I checked `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/playwright.config.ts` and confirmed on line 21: `command: 'npm run dev',`

## 2. Logic Chain

- To address finding 1 from the review, we must replace `/imprint` and `/privacy` in `TEST_INFRA.md` with `/legal?tab=impressum` and `/legal?tab=privacy` respectively.
- To address finding 2 from the review, we must update the `webServer.command` in `playwright.config.ts` to `npm run build && npm run start` so that tests execute against a compiled production bundle.

## 3. Caveats

- No caveats. The proposed changes map exactly to the review feedback.

## 4. Conclusion

We should apply the following modifications:

1. In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/TEST_INFRA.md` on line 28:
   - Replace:
     ```markdown
     - **Info & Legal Pages**: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/imprint`, `/privacy`.
     ```
   - With:
     ```markdown
     - **Info & Legal Pages**: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/legal?tab=impressum`, `/legal?tab=privacy`.
     ```

2. In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/playwright.config.ts` on line 21:
   - Replace:
     ```typescript
         command: 'npm run dev',
     ```
   - With:
     ```typescript
         command: 'npm run build && npm run start',
     ```

## 5. Verification Method

- After applying the changes, `grep_search` can be used to ensure `TEST_INFRA.md` contains the new URLs and `playwright.config.ts` contains `npm run build && npm run start`.
- Run tests via `npx playwright test` (if applicable locally) to verify it boots the production server.
