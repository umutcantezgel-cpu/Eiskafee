# Handoff Report

## 1. Observation

- In `TEST_INFRA.md`, line 28 lists the Info & Legal Pages as: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/imprint`, `/privacy`. The review feedback notes that the application actually uses `/legal?tab=impressum` and `/legal?tab=privacy`.
- In `playwright.config.ts`, line 21 configures the `webServer.command` as `npm run dev`. The review feedback notes this must be a production build to test hydration accurately.

## 2. Logic Chain

1. To address finding 1, we must replace the incorrect URLs `/imprint` and `/privacy` in `TEST_INFRA.md` with `/legal?tab=impressum` and `/legal?tab=privacy`.
2. To address finding 2, we must replace the `npm run dev` command in `playwright.config.ts` (inside the `webServer` object) with `npm run build && npm run start` to ensure Playwright tests run against a built production app.

## 3. Caveats

- No caveats. The review feedback is clear and directly maps to specific line items in `TEST_INFRA.md` and `playwright.config.ts`.

## 4. Conclusion

The fix strategy is to:

1. Edit `TEST_INFRA.md` line 28 to: `- **Info & Legal Pages**: \`/faq\`, \`/kontakt\`, \`/gutscheine\`, \`/reservierung\`, \`/legal?tab=impressum\`, \`/legal?tab=privacy\`.`
2. Edit `playwright.config.ts` line 21 to: `command: 'npm run build && npm run start',`

## 5. Verification Method

- Use `npm run build && npm run start` locally to verify the build completes.
- Check `npx playwright test` to ensure tests run against the production server successfully.
- Verify `TEST_INFRA.md` to ensure URLs are updated.
