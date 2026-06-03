# Placeholder & Content Polish: Handoff Report

## Observation

1. **Literal `TODO` instances:**
   - `src/lib/seo/base-metadata.ts` (line 103): `google: 'google-site-verification-token', // TODO: Add actual token`
   - `tailwind.config.ts` (line 50): `// ── Backward compat (TODO: migrate to canonical tokens) ──`
2. **Generic/Empty Placeholders in Data (`src/lib/data.ts` & `seed-data.json`):**
   - Several products have prices set to `"Auf Anfrage"` (On request) or `0` and empty descriptions:
     - "Kuchen des Tages" (`k1`, `kuchen-kuchen-des-tages`): price `"Auf Anfrage"` / `0`
     - "Tortenstück" (`k2`, `kuchen-tortenst-ck`): price `"Auf Anfrage"` / `0`
     - "Cookies" (`co1`, `cookies-cookies`): price `"Auf Anfrage"` / `0`
     - "Stullen" (`st1`, `stullen-stullen`): price `"Auf Anfrage"` / `0`
     - Beverages (e.g., Eisschokolade, Eiskaffee, Milchshake): missing descriptions (`desc: ""`) in both files.
3. **No "Lorem" or "Ipsum":**
   - The exact strings "Lorem" or "Ipsum" do not appear anywhere in the source code. They are only mentioned in `PROJECT.md` as part of the task definition.
4. **Developer structural placeholders:**
   - E.g., `{/* Image Placeholder */}` and `{/* Content Placeholder */}` inside `src/components/ui/Skeleton.tsx`, `src/components/sections/menu/ProductGrid.tsx`, `src/app/(public)/bubble-waffles-wetzlar/page.tsx`, and `src/components/molecules/cards/SkeletonCard.tsx`. These are internal structural comments and not user-facing text.

## Logic Chain

- The task requires finding "TODO", "Lorem", "Ipsum", and generic placeholder text, and replacing them with production-ready German copy for "Hey Fede! – Dessertbar & Café Wetzlar", with prices in EUR (€).
- Since "Lorem Ipsum" does not exist in the codebase, the primary targets are the "TODO" markers and the placeholder product details ("Auf Anfrage", 0 prices, and empty `desc` fields) that need realistic copy and prices.
- Realistic prices and descriptions aligned with the café's other products (like 6,50€ shakes) should be proposed to replace these gaps.

## Caveats

- Structural developer comments (like `{/* Image Placeholder */}`) were identified but are left unchanged as they represent component slots rather than actual user-facing text.
- The `google-site-verification-token` TODO requires an actual string from Google Search Console, so a dummy generic string is proposed below as a fallback if the actual token is unavailable.
- Form placeholders (e.g., `placeholder="Dein Name"`) are valid UI patterns and were excluded from this replacement proposal.

## Conclusion & Proposed Replacements

The following replacements should be implemented to complete the content polish:

**1. `src/lib/seo/base-metadata.ts` (Line 103)**

- **Before:** `google: 'google-site-verification-token', // TODO: Add actual token`
- **After:** `google: 'your-google-site-verification-token',` (or the actual token if provided by the client)

**2. `src/lib/data.ts` and `seed-data.json` (Prices)**
Replace `"Auf Anfrage"` (and `0` in the JSON) with standard EUR prices:

- **Kuchen des Tages:** `4,50 €` (JSON: `4.5`)
- **Tortenstück:** `4,90 €` (JSON: `4.9`)
- **Cookies:** `3,50 €` (JSON: `3.5`)
- **Stullen:** `6,50 €` (JSON: `6.5`)

**3. `src/lib/data.ts` and `seed-data.json` (Empty Beverage Descriptions)**
Replace `desc: ""` with the following German production copy:

- **Eisschokolade 0,2l & 0,4l:** `"Kühle Erfrischung mit echter Schokolade und cremigem Milchschaum"`
- **Eiskaffee 0,3l & 0,5l:** `"Klassischer Eisgenuss mit feinstem Espresso und einer Kugel Vanilleeis"`
- **Milchshake 0,3l & 0,5l:** `"Cremig gemixter Shake in deiner Lieblingssorte"`

## Verification Method

- **Verify Data Changes:** Ensure `src/lib/data.ts` and `seed-data.json` are synced and `npm run dev` builds successfully.
- **Visual Check:** Navigate to `/menu` to confirm the new prices and descriptions render correctly for cakes, cookies, stullen, and beverages.
- **Search Verification:** Run `grep -ri "Auf Anfrage" src/` and `grep -ri "TODO" src/lib/seo/` to ensure they have been replaced.
