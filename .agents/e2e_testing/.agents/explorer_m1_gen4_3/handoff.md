# Observation

- **`REVIEWS_M1_GEN3.md`**: The auditor feedback states that `TEST_INFRA.md` incorrectly references `/imprint` and `/privacy`, which should be `/legal?tab=impressum` and `/legal?tab=privacy` based on the app's routing. The feedback also requires updating `playwright.config.ts` to run a production build (`npm run build && npm run start`) instead of `npm run dev` for proper hydration testing.
- **`TEST_INFRA.md`**: On line 28, it reads: `- **Info & Legal Pages**: \`/faq\`, \`/kontakt\`, \`/gutscheine\`, \`/reservierung\`, \`/imprint\`, \`/privacy\`.`
- **`playwright.config.ts`**: On line 21, the `webServer` block has `command: 'npm run dev',`.

# Logic Chain

1. The review feedback mandates specific URL corrections in the infrastructure documentation to match the actual routes implemented in the app.
2. Replacing `/imprint` and `/privacy` with their corresponding `/legal` variants in `TEST_INFRA.md` satisfies the documentation requirement.
3. The feedback specifically requests running E2E tests against a production build to check for hydration mismatch errors correctly (as development mode behaves differently).
4. Changing the `command` in `playwright.config.ts` from `npm run dev` to `npm run build && npm run start` executes a production build before launching the Playwright test server, fulfilling the testing track principles.

# Caveats

No caveats. The required changes are precisely scoped and clearly address the feedback in `REVIEWS_M1_GEN3.md`.

# Conclusion

Update the files as follows:

**1. `TEST_INFRA.md`**:
Replace line 28:

```markdown
- **Info & Legal Pages**: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/imprint`, `/privacy`.
```

With:

```markdown
- **Info & Legal Pages**: `/faq`, `/kontakt`, `/gutscheine`, `/reservierung`, `/legal?tab=impressum`, `/legal?tab=privacy`.
```

**2. `playwright.config.ts`**:
Replace line 21:

```typescript
    command: 'npm run dev',
```

With:

```typescript
    command: 'npm run build && npm run start',
```

# Verification Method

1. Verify `TEST_INFRA.md` using `grep_search` for `/legal?tab=impressum` and confirm `/imprint` is removed.
2. Verify `playwright.config.ts` using `grep_search` for `npm run build && npm run start`.
3. Optionally, run `npm run build && npm run start` locally to confirm the app builds successfully, then run `npx playwright test` to verify the test suite uses the production server.
