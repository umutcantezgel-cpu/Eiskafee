# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Info & Legal Page: /gutscheine loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:82:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 301

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#eedfcc",
+               "contrastRatio": 3.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.3 (foreground color: #9a7060, background color: #eedfcc, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   ".bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.3 (foreground color: #9a7060, background color: #eedfcc, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-[#9a7060] font-normal\">Geschlossen</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(1) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#9a7060\\].font-normal.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#eedfcc",
+               "contrastRatio": 3.3,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.3 (foreground color: #9a7060, background color: #eedfcc, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   ".bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.3 (foreground color: #9a7060, background color: #eedfcc, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-[#9a7060] font-normal\">Geschlossen</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(2) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#9a7060\\].font-normal.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c26d5b",
+               "contrastRatio": 3.72,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "7.6pt (10.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.72 (foreground color: #ffffff, background color: #c26d5b, font size: 7.6pt (10.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full\">Heute</span>",
+                 "target": Array [
+                   ".bg-white\\/20",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex justify-between items-center p-[13px_19px] bg-[#b34832]\" itemscope=\"\" itemprop=\"openingHoursSpecification\" itemtype=\"https://schema.org/OpeningHoursSpecification\">",
+                 "target": Array [
+                   ".bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.72 (foreground color: #ffffff, background color: #c26d5b, font size: 7.6pt (10.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full\">Heute</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-white\\/20",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure every form element has a label",
+     "help": "Form elements must have labels",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/label?application=playwright",
+     "id": "label",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"text\" class=\"w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta\" value=\"\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "input[type=\"text\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"email\" class=\"w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta\" value=\"\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(2) > input[type=\"email\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Zum Hauptinhalt springen" [ref=e2]:
        - /url: "#main-content"
    - status
    - generic:
        - generic:
            - heading "Hey Fede!" [level=1]
            - paragraph: Dessertbar & Café
        - img
    - banner [ref=e10]:
        - generic [ref=e11]:
            - link "Hey Fedee! Startseite" [ref=e13]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e15] [cursor=pointer]
            - navigation "Hauptnavigation" [ref=e16]:
                - link "Speisekarte" [ref=e17]:
                    - /url: /menu
                - link "Über Uns" [ref=e18]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e19]:
                    - /url: /visit
            - generic [ref=e20]:
                - link "Jetzt bestellen" [ref=e22]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e24]:
                        - generic [ref=e25]: Jetzt bestellen
                        - img [ref=e26]
                - link "Profil" [ref=e28]:
                    - /url: /auth
                    - img [ref=e30] [cursor=pointer]
                - button "Warenkorb" [ref=e33] [cursor=pointer]:
                    - img [ref=e34]
    - main [ref=e37]:
        - generic [ref=e38]:
            - generic [ref=e39]:
                - heading "Verschenke Freude." [level=1] [ref=e40]:
                    - generic [ref=e41]: Verschenke
                    - generic [ref=e42]: Freude.
                - paragraph [ref=e43]: Scroll weiter, um deinen Liebsten einen süßen Moment zu kreieren.
                - img [ref=e45]
            - generic [ref=e47]:
                - generic [ref=e53]:
                    - generic [ref=e54]: Hey Fede! Gutschein
                    - generic [ref=e55]:
                        - generic [ref=e56]: "50"
                        - generic [ref=e57]: €
                    - generic [ref=e58]: Einlösbar im Laden · 36 Monate gültig
                - generic [ref=e60]:
                    - generic [ref=e61]:
                        - generic [ref=e62]: Wähle den Betrag
                        - generic [ref=e63]:
                            - button "10 €" [ref=e64]
                            - button "25 €" [ref=e65]
                            - button "50 €" [ref=e66]
                            - button "75 €" [ref=e67]
                            - button "100 €" [ref=e68]
                            - button "Frei" [ref=e69]
                    - generic [ref=e70]:
                        - generic [ref=e71]: Zustellung
                        - generic [ref=e72]:
                            - button "Per E-Mail Sofort verfügbar · PDF" [ref=e73]:
                                - img [ref=e75]
                                - generic [ref=e78]:
                                    - generic [ref=e79]: Per E-Mail
                                    - generic [ref=e80]: Sofort verfügbar · PDF
                                - img [ref=e81]
                            - button "Edler Umschlag + 3,90 € · per Post" [ref=e84]:
                                - img [ref=e86]
                                - generic [ref=e90]:
                                    - generic [ref=e91]: Edler Umschlag
                                    - generic [ref=e92]: + 3,90 € · per Post
                    - generic [ref=e93]:
                        - generic [ref=e94]:
                            - generic [ref=e95]: Nachricht (optional)
                            - textbox "Alles Liebe..." [ref=e96]
                        - generic [ref=e97]:
                            - generic [ref=e98]:
                                - generic [ref=e99]: An (Name)
                                - textbox [ref=e100]
                            - generic [ref=e101]:
                                - generic [ref=e102]: E-Mail
                                - textbox [ref=e103]
                    - button "In den Warenkorb" [ref=e104]:
                        - text: In den Warenkorb
                        - img [ref=e105]
    - contentinfo [ref=e107]:
        - img [ref=e110]
        - generic [ref=e112]:
            - generic [ref=e113]:
                - generic [ref=e114]:
                    - link "Startseite" [ref=e115]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e117] [cursor=pointer]
                    - paragraph [ref=e118]: Dessertbar & Café
                    - generic [ref=e121]:
                        - generic [ref=e122]:
                            - img [ref=e123]
                            - generic [ref=e126]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e127]:
                            - img [ref=e128]
                            - link "06441 7890426" [ref=e130]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e132]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e133]
                        - text: Instagram
                - generic [ref=e136]:
                    - heading "Hey Fede!" [level=3] [ref=e137]
                    - navigation "Footer Navigation" [ref=e138]:
                        - link "Startseite" [ref=e139]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e140]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e141]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e142]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e143]
                    - navigation "SEO Navigation" [ref=e144]:
                        - link "Bubble Waffles" [ref=e145]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e146]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e147]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e148]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e149]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e150]:
                    - heading "Öffnungszeiten" [level=3] [ref=e151]
                    - generic [ref=e154]:
                        - generic [ref=e155]:
                            - generic [ref=e157]: Montag
                            - generic [ref=e159]: Geschlossen
                        - generic [ref=e160]:
                            - generic [ref=e162]: Dienstag
                            - generic [ref=e164]: Geschlossen
                        - generic [ref=e165]:
                            - generic [ref=e168]: Mittwoch
                            - generic [ref=e169]:
                                - generic [ref=e170]: 12:00 – 19:00 Uhr
                                - generic [ref=e171]: Heute
                        - generic [ref=e172]:
                            - generic [ref=e174]: Donnerstag
                            - generic [ref=e176]: 12:00 – 19:00 Uhr
                        - generic [ref=e177]:
                            - generic [ref=e179]: Freitag
                            - generic [ref=e181]: 12:00 – 19:00 Uhr
                        - generic [ref=e182]:
                            - generic [ref=e184]: Samstag
                            - generic [ref=e186]: 12:00 – 19:00 Uhr
                        - generic [ref=e187]:
                            - generic [ref=e189]: Sonntag
                            - generic [ref=e191]: 13:00 – 19:00 Uhr
                    - generic [ref=e192]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e193]:
                    - heading "Stay Sweet" [level=3] [ref=e194]
                    - paragraph [ref=e195]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e197]:
                        - textbox "Bleib hungrig..." [ref=e198]
                        - button "Abonnieren" [ref=e200]:
                            - generic [ref=e201]: Abonnieren
            - generic [ref=e202]:
                - generic [ref=e203]: Frisch
                - generic [ref=e204]: ·
                - generic [ref=e205]: Selbstgemacht
                - generic [ref=e206]: ·
                - generic [ref=e207]: Mit Liebe
            - generic [ref=e208]:
                - img [ref=e209]
                - img [ref=e211]
                - img [ref=e213]
                - img [ref=e215]
                - img [ref=e217]
            - generic [ref=e219]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e220]
                - paragraph [ref=e221]:
                    - generic [ref=e222]: Hessen
                    - generic [ref=e223]: ›
                    - generic [ref=e224]: Lahn-Dill-Kreis
                    - generic [ref=e225]: ›
                    - generic [ref=e226]: Wetzlar
                    - generic [ref=e227]: ›
                    - generic [ref=e228]: Langgasse
            - generic [ref=e229]:
                - heading "Besuche uns auch auf" [level=3] [ref=e230]
                - generic [ref=e231]:
                    - link "G Google" [ref=e232]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e233]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e234]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e235]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e236]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e237]: yelp
            - img "Made with Love in Wetzlar" [ref=e240]
            - generic [ref=e241]:
                - paragraph [ref=e242]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e243]:
                    - link "Impressum" [ref=e244]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e245]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e246]:
                        - /url: /legal#agb
    - alert [ref=e247]
    - iframe [ref=e248]:
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import AxeBuilder from '@axe-core/playwright';
  3   |
  4   | test.describe('Tier 1: Core Navigation & Static Content', () => {
  5   |   // Global error monitoring for hydration mismatches and unhandled errors
  6   |   test.beforeEach(({ page }) => {
  7   |     page.on('console', (msg) => {
  8   |       if (msg.type() === 'error') {
  9   |         const text = msg.text();
  10  |         // Fail the test if we see React hydration errors or Matter.js crashes
  11  |         if (
  12  |           text.includes('Hydration failed') ||
  13  |           text.includes('Text content did not match') ||
  14  |           text.includes('Minified React error')
  15  |         ) {
  16  |           expect(text).toBe('No hydration or React errors expected');
  17  |         }
  18  |       }
  19  |     });
  20  |
  21  |     page.on('pageerror', (err) => {
  22  |       // Fail on any uncaught exceptions
  23  |       expect(err.message).toBe('No page errors expected');
  24  |     });
  25  |   });
  26  |
  27  |   test('Home (/) - SEO, Basic Layout, A11y', async ({ page }) => {
  28  |     await page.goto('/');
  29  |
  30  |     // SEO meta tags & Title
  31  |     // Wait for title to not be empty
  32  |     await expect(page).toHaveTitle(/.+/);
  33  |
  34  |     // Check for description meta tag
  35  |     const metaDescription = page.locator('meta[name="description"]');
  36  |     await expect(metaDescription).toHaveCount(1);
  37  |
  38  |     // Basic layout loading (Header & Footer)
  39  |     const header = page.locator('header');
  40  |     await expect(header).toBeVisible();
  41  |
  42  |     const footer = page.locator('footer');
  43  |     await expect(footer).toBeVisible();
  44  |
  45  |     // Baseline A11y check
  46  |     const accessibilityScanResults = await new AxeBuilder({ page })
  47  |       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  48  |       .analyze();
  49  |
  50  |     expect(accessibilityScanResults.violations).toEqual([]);
  51  |   });
  52  |
  53  |   const corePages = ['/menu', '/about', '/visit'];
  54  |
  55  |   for (const url of corePages) {
  56  |     test(`Core Page: ${url} loads correctly and passes A11y`, async ({ page }) => {
  57  |       await page.goto(url);
  58  |
  59  |       // Verify Header is visible (implies layout loaded)
  60  |       const header = page.locator('header');
  61  |       await expect(header).toBeVisible();
  62  |
  63  |       // Check for A11y
  64  |       const accessibilityScanResults = await new AxeBuilder({ page })
  65  |         .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  66  |         .analyze();
  67  |
  68  |       expect(accessibilityScanResults.violations).toEqual([]);
  69  |     });
  70  |   }
  71  |
  72  |   const infoAndLegalPages = [
  73  |     '/faq',
  74  |     '/kontakt',
  75  |     '/gutscheine',
  76  |     '/reservierung',
  77  |     '/legal?tab=impressum',
  78  |     '/legal?tab=privacy'
  79  |   ];
  80  |
  81  |   for (const url of infoAndLegalPages) {
  82  |     test(`Info & Legal Page: ${url} loads correctly and passes A11y`, async ({ page }) => {
  83  |       await page.goto(url);
  84  |
  85  |       // Verify Header is visible
  86  |       const header = page.locator('header');
  87  |       await expect(header).toBeVisible();
  88  |
  89  |       // Check for A11y
  90  |       const accessibilityScanResults = await new AxeBuilder({ page })
  91  |         .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  92  |         .analyze();
  93  |
> 94  |       expect(accessibilityScanResults.violations).toEqual([]);
      |                                                   ^ Error: expect(received).toEqual(expected) // deep equality
  95  |     });
  96  |   }
  97  |
  98  |   test('Global UI: Navigation links functionality', async ({ page }) => {
  99  |     await page.goto('/');
  100 |
  101 |     // Test a common navigation link if present.
  102 |     // For a generic check, we look for any link in the header and click it.
  103 |     const headerLinks = page.locator('header a[href^="/"]');
  104 |     await expect(headerLinks).not.toHaveCount(0);
  105 |
  106 |     // Find a link that goes to a different page, like /menu
  107 |     const navLink = headerLinks.filter({ hasText: /menu/i }).first();
  108 |     await expect(navLink).toBeVisible();
  109 |     await navLink.click();
  110 |     await expect(page).toHaveURL(/\/menu/);
  111 |   });
  112 |
  113 |   test('Custom 404 (not-found.tsx) rendering and A11y', async ({ page }) => {
  114 |     // Navigate to a non-existent route
  115 |     const response = await page.goto('/this-route-does-not-exist');
  116 |
  117 |     // Check that we get a 404 status code (if standard SSR/App Router behavior)
  118 |     expect(response).not.toBeNull();
  119 |     expect(response!.status()).toBe(404);
  120 |
  121 |     // Verify some 404 indication is on the page
  122 |     // (We assume "404" or "not found" is somewhere in the body)
  123 |     const bodyText = await page.locator('body').textContent();
  124 |     expect(bodyText?.toLowerCase()).toMatch(/(404|not found|page could not be found)/);
  125 |
  126 |     // Baseline A11y check for 404 page
  127 |     const accessibilityScanResults = await new AxeBuilder({ page })
  128 |       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  129 |       .analyze();
  130 |
  131 |     expect(accessibilityScanResults.violations).toEqual([]);
  132 |   });
  133 | });
  134 |
```
