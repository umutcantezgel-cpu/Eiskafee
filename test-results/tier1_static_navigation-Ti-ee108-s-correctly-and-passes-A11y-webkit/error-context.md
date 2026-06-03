# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Info & Legal Page: /kontakt loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:82:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "No page errors expected"
Received: "/localhost:39485/?_rsc=Y3YEkhtBJt4BLSFY due to access control checks."
```

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 176

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
+     "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
+     "help": "Delayed refresh under 20 hours must not be used",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright",
+     "id": "meta-refresh",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "redirectDelay": 1,
+             },
+             "id": "meta-refresh",
+             "impact": "critical",
+             "message": "<meta> tag forces timed refresh of page (less than 20 hours)",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   <meta> tag forces timed refresh of page (less than 20 hours)",
+         "html": "<meta id=\"__next-page-redirect\" http-equiv=\"refresh\" content=\"1;url=/support#kontakt\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#__next-page-redirect",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.time-and-media",
+       "wcag2a",
+       "wcag221",
+       "TTv5",
+       "TT8.a",
+       "EN-301-549",
+       "EN-9.2.2.1",
+       "RGAAv4",
+       "RGAA-13.1.2",
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
                - heading "Wie können wir helfen?" [level=1] [ref=e40]:
                    - generic [ref=e41]: Wie
                    - generic [ref=e42]: können
                    - generic [ref=e43]: wir
                    - generic [ref=e44]: helfen?
                - paragraph [ref=e45]: Scroll weiter, um Antworten zu finden oder schreib uns.
                - img [ref=e47]
            - generic [ref=e49]:
                - generic [ref=e50]:
                    - generic [ref=e51]: Fragen
                    - generic [ref=e52]: blubbern
                    - generic [ref=e53]: auf.
                - generic [ref=e54]:
                    - generic [ref=e56] [cursor=pointer]: Liefert ihr?
                    - generic [ref=e58] [cursor=pointer]: Was ist in der Box?
                    - generic [ref=e60] [cursor=pointer]: Vegan?
                    - generic [ref=e62] [cursor=pointer]: Reservieren?
            - generic [ref=e63]:
                - generic [ref=e64]:
                    - generic [ref=e65]: Nichts
                    - generic [ref=e66]: gefunden?
                - generic [ref=e67]:
                    - generic [ref=e69]:
                        - heading "Schreib uns" [level=2] [ref=e70]
                        - generic [ref=e71]:
                            - generic [ref=e72]: Dein Name
                            - textbox "Dein Name" [ref=e73]
                        - generic [ref=e74]:
                            - generic [ref=e75]: Deine E-Mail
                            - textbox "mail@beispiel.de" [ref=e76]
                        - generic [ref=e77]:
                            - generic [ref=e78]: Nachricht
                            - textbox "Was liegt dir auf dem Herzen?" [ref=e79]
                        - button "Senden" [ref=e80]:
                            - text: Senden
                            - img [ref=e81]
                    - generic [ref=e85]:
                        - img [ref=e87]
                        - heading "Direkt Texten?" [level=3] [ref=e89]
                        - paragraph [ref=e90]: Schreib uns einfach auf WhatsApp. Wir antworten superschnell.
                        - link "WhatsApp Chat Starten" [ref=e91]:
                            - /url: https://wa.me/49123456789
    - contentinfo [ref=e92]:
        - img [ref=e95]
        - generic [ref=e97]:
            - generic [ref=e98]:
                - generic [ref=e99]:
                    - link "Startseite" [ref=e100]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e102] [cursor=pointer]
                    - paragraph [ref=e103]: Dessertbar & Café
                    - generic [ref=e106]:
                        - generic [ref=e107]:
                            - img [ref=e108]
                            - generic [ref=e111]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e112]:
                            - img [ref=e113]
                            - link "06441 7890426" [ref=e115]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e117]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e118]
                        - text: Instagram
                - generic [ref=e121]:
                    - heading "Hey Fede!" [level=3] [ref=e122]
                    - navigation "Footer Navigation" [ref=e123]:
                        - link "Startseite" [ref=e124]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e125]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e126]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e127]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e128]
                    - navigation "SEO Navigation" [ref=e129]:
                        - link "Bubble Waffles" [ref=e130]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e131]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e132]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e133]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e134]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e135]:
                    - heading "Öffnungszeiten" [level=3] [ref=e136]
                    - generic [ref=e139]:
                        - generic [ref=e140]:
                            - generic [ref=e142]: Montag
                            - generic [ref=e144]: Geschlossen
                        - generic [ref=e145]:
                            - generic [ref=e147]: Dienstag
                            - generic [ref=e149]: Geschlossen
                        - generic [ref=e150]:
                            - generic [ref=e153]: Mittwoch
                            - generic [ref=e154]:
                                - generic [ref=e155]: 12:00 – 19:00 Uhr
                                - generic [ref=e156]: Heute
                        - generic [ref=e157]:
                            - generic [ref=e159]: Donnerstag
                            - generic [ref=e161]: 12:00 – 19:00 Uhr
                        - generic [ref=e162]:
                            - generic [ref=e164]: Freitag
                            - generic [ref=e166]: 12:00 – 19:00 Uhr
                        - generic [ref=e167]:
                            - generic [ref=e169]: Samstag
                            - generic [ref=e171]: 12:00 – 19:00 Uhr
                        - generic [ref=e172]:
                            - generic [ref=e174]: Sonntag
                            - generic [ref=e176]: 13:00 – 19:00 Uhr
                    - generic [ref=e177]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e178]:
                    - heading "Stay Sweet" [level=3] [ref=e179]
                    - paragraph [ref=e180]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e182]:
                        - textbox "Bleib hungrig..." [ref=e183]
                        - button "Abonnieren" [ref=e185]:
                            - generic [ref=e186]: Abonnieren
            - generic [ref=e187]:
                - generic [ref=e188]: Frisch
                - generic [ref=e189]: ·
                - generic [ref=e190]: Selbstgemacht
                - generic [ref=e191]: ·
                - generic [ref=e192]: Mit Liebe
            - generic [ref=e193]:
                - img [ref=e194]
                - img [ref=e196]
                - img [ref=e198]
                - img [ref=e200]
                - img [ref=e202]
            - generic [ref=e204]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e205]
                - paragraph [ref=e206]:
                    - generic [ref=e207]: Hessen
                    - generic [ref=e208]: ›
                    - generic [ref=e209]: Lahn-Dill-Kreis
                    - generic [ref=e210]: ›
                    - generic [ref=e211]: Wetzlar
                    - generic [ref=e212]: ›
                    - generic [ref=e213]: Langgasse
            - generic [ref=e214]:
                - heading "Besuche uns auch auf" [level=3] [ref=e215]
                - generic [ref=e216]:
                    - link "G Google" [ref=e217]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e218]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e219]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e220]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e221]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e222]: yelp
            - img "Made with Love in Wetzlar" [ref=e225]
            - generic [ref=e226]:
                - paragraph [ref=e227]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e228]:
                    - link "Impressum" [ref=e229]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e230]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e231]:
                        - /url: /legal#agb
    - generic [ref=e233]:
        - img [ref=e235]
        - generic [ref=e237]:
            - heading "Cookies für dich!" [level=3] [ref=e238]
            - paragraph [ref=e239]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e240]:
            - button "Ablehnen" [ref=e241]
            - button "Anpassen" [ref=e242]
            - button "Akzeptieren" [ref=e244]:
                - generic [ref=e245]: Akzeptieren
    - alert [ref=e246]
    - iframe [ref=e247]:
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
