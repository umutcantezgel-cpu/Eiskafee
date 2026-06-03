# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Info & Legal Page: /kontakt loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:82:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 134

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
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Zum Hauptinhalt springen" [ref=e2] [cursor=pointer]:
        - /url: "#main-content"
    - status
    - banner [ref=e6]:
        - generic [ref=e7]:
            - link "Hey Fedee! Startseite" [ref=e9] [cursor=pointer]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e11]
            - navigation "Hauptnavigation" [ref=e12]:
                - link "Speisekarte" [ref=e13] [cursor=pointer]:
                    - /url: /menu
                - link "Über Uns" [ref=e14] [cursor=pointer]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e15] [cursor=pointer]:
                    - /url: /visit
            - generic [ref=e16]:
                - link "Jetzt bestellen" [ref=e18] [cursor=pointer]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e20]:
                        - generic [ref=e21]: Jetzt bestellen
                        - img [ref=e22]
                - link "Profil" [ref=e24] [cursor=pointer]:
                    - /url: /auth
                    - img [ref=e26]
                - button "Warenkorb" [ref=e29] [cursor=pointer]:
                    - img [ref=e30]
    - main [ref=e33]:
        - generic [ref=e34]:
            - generic [ref=e35]:
                - heading "Wie können wir helfen?" [level=1] [ref=e36]:
                    - generic [ref=e37]: Wie
                    - generic [ref=e38]: können
                    - generic [ref=e39]: wir
                    - generic [ref=e40]: helfen?
                - paragraph [ref=e41]: Scroll weiter, um Antworten zu finden oder schreib uns.
                - img [ref=e43]
            - generic [ref=e45]:
                - generic [ref=e46]:
                    - generic [ref=e47]: Fragen
                    - generic [ref=e48]: blubbern
                    - generic [ref=e49]: auf.
                - generic [ref=e50]:
                    - generic [ref=e52] [cursor=pointer]: Liefert ihr?
                    - generic [ref=e54] [cursor=pointer]: Was ist in der Box?
                    - generic [ref=e56] [cursor=pointer]: Vegan?
                    - generic [ref=e58] [cursor=pointer]: Reservieren?
            - generic [ref=e59]:
                - generic [ref=e60]:
                    - generic [ref=e61]: Nichts
                    - generic [ref=e62]: gefunden?
                - generic [ref=e63]:
                    - generic [ref=e65]:
                        - heading "Schreib uns" [level=2] [ref=e66]
                        - generic [ref=e67]:
                            - generic [ref=e68]: Dein Name
                            - textbox "Dein Name" [ref=e69]
                        - generic [ref=e70]:
                            - generic [ref=e71]: Deine E-Mail
                            - textbox "mail@beispiel.de" [ref=e72]
                        - generic [ref=e73]:
                            - generic [ref=e74]: Nachricht
                            - textbox "Was liegt dir auf dem Herzen?" [ref=e75]
                        - button "Senden" [ref=e76]:
                            - text: Senden
                            - img [ref=e77]
                    - generic [ref=e81]:
                        - img [ref=e83]
                        - heading "Direkt Texten?" [level=3] [ref=e85]
                        - paragraph [ref=e86]: Schreib uns einfach auf WhatsApp. Wir antworten superschnell.
                        - link "WhatsApp Chat Starten" [ref=e87] [cursor=pointer]:
                            - /url: https://wa.me/49123456789
    - contentinfo [ref=e88]:
        - img [ref=e91]
        - generic [ref=e93]:
            - generic [ref=e94]:
                - generic [ref=e95]:
                    - link "Startseite" [ref=e96] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e98]
                    - paragraph [ref=e99]: Dessertbar & Café
                    - generic [ref=e102]:
                        - generic [ref=e103]:
                            - img [ref=e104]
                            - generic [ref=e107]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e108]:
                            - img [ref=e109]
                            - link "06441 7890426" [ref=e111] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e113] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e114]
                        - text: Instagram
                - generic [ref=e117]:
                    - heading "Hey Fede!" [level=3] [ref=e118]
                    - navigation "Footer Navigation" [ref=e119]:
                        - link "Startseite" [ref=e120] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e121] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e122] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e123] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e124]
                    - navigation "SEO Navigation" [ref=e125]:
                        - link "Bubble Waffles" [ref=e126] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e127] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e128] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e129] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e130] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e131]:
                    - heading "Öffnungszeiten" [level=3] [ref=e132]
                    - generic [ref=e135]:
                        - generic [ref=e136]:
                            - generic [ref=e138]: Montag
                            - generic [ref=e140]: Geschlossen
                        - generic [ref=e141]:
                            - generic [ref=e143]: Dienstag
                            - generic [ref=e145]: Geschlossen
                        - generic [ref=e146]:
                            - generic [ref=e149]: Mittwoch
                            - generic [ref=e150]:
                                - generic [ref=e151]: 12:00 – 19:00 Uhr
                                - generic [ref=e152]: Heute
                        - generic [ref=e153]:
                            - generic [ref=e155]: Donnerstag
                            - generic [ref=e157]: 12:00 – 19:00 Uhr
                        - generic [ref=e158]:
                            - generic [ref=e160]: Freitag
                            - generic [ref=e162]: 12:00 – 19:00 Uhr
                        - generic [ref=e163]:
                            - generic [ref=e165]: Samstag
                            - generic [ref=e167]: 12:00 – 19:00 Uhr
                        - generic [ref=e168]:
                            - generic [ref=e170]: Sonntag
                            - generic [ref=e172]: 13:00 – 19:00 Uhr
                    - generic [ref=e173]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e174]:
                    - heading "Stay Sweet" [level=3] [ref=e175]
                    - paragraph [ref=e176]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e178]:
                        - textbox "Bleib hungrig..." [ref=e179]
                        - button "Abonnieren" [ref=e181]:
                            - generic [ref=e182]: Abonnieren
            - generic [ref=e183]:
                - generic [ref=e184]: Frisch
                - generic [ref=e185]: ·
                - generic [ref=e186]: Selbstgemacht
                - generic [ref=e187]: ·
                - generic [ref=e188]: Mit Liebe
            - generic [ref=e189]:
                - img [ref=e190]
                - img [ref=e192]
                - img [ref=e194]
                - img [ref=e196]
                - img [ref=e198]
            - generic [ref=e200]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e201]
                - paragraph [ref=e202]:
                    - generic [ref=e203]: Hessen
                    - generic [ref=e204]: ›
                    - generic [ref=e205]: Lahn-Dill-Kreis
                    - generic [ref=e206]: ›
                    - generic [ref=e207]: Wetzlar
                    - generic [ref=e208]: ›
                    - generic [ref=e209]: Langgasse
            - generic [ref=e210]:
                - heading "Besuche uns auch auf" [level=3] [ref=e211]
                - generic [ref=e212]:
                    - link "G Google" [ref=e213] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e214]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e215] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e216]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e217] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e218]: yelp
            - img "Made with Love in Wetzlar" [ref=e221]
            - generic [ref=e222]:
                - paragraph [ref=e223]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e224]:
                    - link "Impressum" [ref=e225] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e226] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e227] [cursor=pointer]:
                        - /url: /legal#agb
    - generic [ref=e229]:
        - img [ref=e231]
        - generic [ref=e233]:
            - heading "Cookies für dich!" [level=3] [ref=e234]
            - paragraph [ref=e235]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e236]:
            - button "Ablehnen" [ref=e237]
            - button "Anpassen" [ref=e238]
            - button "Akzeptieren" [ref=e240]:
                - generic [ref=e241]: Akzeptieren
    - alert [ref=e242]
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
