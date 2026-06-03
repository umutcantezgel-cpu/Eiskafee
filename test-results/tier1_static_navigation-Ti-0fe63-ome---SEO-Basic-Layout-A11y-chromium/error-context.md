# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Home (/) - SEO, Basic Layout, A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:27:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 297

- Array []
+ Array [
+   Object {
+     "description": "Ensure buttons have discernible text",
+     "help": "Buttons must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright",
+     "id": "button-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
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
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button class=\"bg-white text-terracotta w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-cream transition-colors border-2 border-peach/30\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".top-1\\/2.-translate-y-1\\/2.-translate-x-1\\/2 > .w-14.h-14.shadow-lg",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
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
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button class=\"bg-white text-terracotta w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-cream transition-colors border-2 border-peach/30\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".translate-x-1\\/2 > .w-14.h-14.shadow-lg",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
+     ],
+   },
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
+                   ".rounded-\\[18px\\]",
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
+           ".border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(1) > .gap-\\[9px\\].items-center.flex > .font-normal.text-\\[\\#9a7060\\].text-\\[0\\.87rem\\]",
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
+                   ".rounded-\\[18px\\]",
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
+           ".border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(2) > .gap-\\[9px\\].items-center.flex > .font-normal.text-\\[\\#9a7060\\].text-\\[0\\.87rem\\]",
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
+                   ".p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"][itemscope=\"\"]:nth-child(3)",
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
    - generic:
        - generic:
            - heading "Hey Fede!" [level=1]
            - paragraph: Dessertbar & Café
        - img
    - banner [ref=e4]:
        - generic [ref=e5]:
            - link "Hey Fedee! Startseite" [ref=e7] [cursor=pointer]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e9]
            - navigation "Hauptnavigation" [ref=e10]:
                - link "Speisekarte" [ref=e11] [cursor=pointer]:
                    - /url: /menu
                - link "Über Uns" [ref=e12] [cursor=pointer]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e13] [cursor=pointer]:
                    - /url: /visit
            - generic [ref=e14]:
                - link "Jetzt bestellen" [ref=e16] [cursor=pointer]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e18]:
                        - generic [ref=e19]: Jetzt bestellen
                        - img [ref=e20]
                - link "Profil" [ref=e22] [cursor=pointer]:
                    - /url: /auth
                    - img [ref=e24]
                - button "Warenkorb" [ref=e27] [cursor=pointer]:
                    - img [ref=e28]
    - main [ref=e31]:
        - generic [ref=e32]:
            - generic [ref=e33]:
                - img
                - img
                - generic [ref=e35]:
                    - generic [ref=e36]:
                        - generic [ref=e42]: DESSERTBAR & CAFÉ · WETZLAR
                        - heading "Süße Momente, frisch gemacht." [level=1] [ref=e43]:
                            - text: Süße Momente,
                            - text: frisch gemacht.
                        - paragraph [ref=e44]: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
                        - generic [ref=e45]:
                            - link "Zur Speisekarte" [ref=e46] [cursor=pointer]:
                                - /url: /menu
                                - button "Zur Speisekarte" [ref=e48]:
                                    - generic [ref=e49]: Zur Speisekarte
                                    - img [ref=e50]
                            - link "Uns besuchen" [ref=e52] [cursor=pointer]:
                                - /url: /visit
                                - button "Uns besuchen" [ref=e53]
                        - generic [ref=e55]:
                            - generic [ref=e56]:
                                - img [ref=e57]
                                - img [ref=e59]
                                - img [ref=e61]
                                - img [ref=e63]
                                - img [ref=e65]
                            - generic [ref=e67]: "4.8"
                            - generic [ref=e68]: (84)
                    - generic [ref=e69]:
                        - generic [ref=e72]:
                            - generic: Spiel mit uns!
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                            - generic:
                                - img
                        - generic:
                            - generic:
                                - img:
                                    - generic: HAUSGEMACHT
                        - generic:
                            - generic:
                                - img:
                                    - generic: FRISCH & LECKER
                - img [ref=e75]
            - generic [ref=e79]:
                - generic [ref=e80]:
                    - generic [ref=e82]:
                        - img [ref=e83]
                        - generic [ref=e85]: Café Atmosphäre\nFamilienfoto
                    - generic [ref=e86]:
                        - generic [ref=e87]: 4.8★
                        - generic [ref=e88]: 84+ Google Reviews
                - generic [ref=e89]:
                    - generic [ref=e90]:
                        - img [ref=e92]:
                            - generic [ref=e94]: FÜR DIE GANZE FAMILIE
                        - img [ref=e96]:
                            - generic [ref=e98]: MIT KINDERECKE
                    - heading "Ein Ort für alle Generationen" [level=2] [ref=e99]:
                        - text: Ein Ort für
                        - text: alle Generationen
                    - paragraph [ref=e100]: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
                    - generic [ref=e101]:
                        - generic [ref=e102]:
                            - generic [ref=e103]: Kinderecke
                            - generic [ref=e104]: Spielbereich für die Kleinen
                        - generic [ref=e105]:
                            - generic [ref=e106]: Wickelraum
                            - generic [ref=e107]: Komfort für Familien
                        - generic [ref=e108]:
                            - generic [ref=e109]: Vegan
                            - generic [ref=e110]: Vegane Optionen verfügbar
                        - generic [ref=e111]:
                            - generic [ref=e112]: Hausgemacht
                            - generic [ref=e113]: Alles frisch & selbst gemacht
            - generic [ref=e114]:
                - img [ref=e116]
                - generic [ref=e118]:
                    - generic [ref=e119]:
                        - heading "Unsere Highlights" [level=2] [ref=e120]
                        - paragraph [ref=e121]: Alles frisch und selbstgemacht — das schmeckt man.
                    - generic [ref=e122]:
                        - generic [ref=e124] [cursor=pointer]:
                            - generic [ref=e125]: Bestseller
                            - img [ref=e129]
                            - generic [ref=e133]:
                                - heading "Fede & Friends Box" [level=3] [ref=e134]
                                - paragraph [ref=e135]: Das ultimative Sharing-Erlebnis für Gruppen
                                - generic [ref=e136]:
                                    - generic [ref=e137]: 25,00 €
                                    - button "Fede & Friends Box ansehen" [ref=e138]:
                                        - img [ref=e139]
                        - generic [ref=e141] [cursor=pointer]:
                            - generic [ref=e142]: Beliebt
                            - img [ref=e146]
                            - generic [ref=e150]:
                                - heading "Bubble Waffle Deluxe" [level=3] [ref=e151]
                                - paragraph [ref=e152]: Eis + Sahne + 3 Toppings nach Wahl
                                - generic [ref=e153]:
                                    - generic [ref=e154]: 8,80 €
                                    - button "Bubble Waffle Deluxe ansehen" [ref=e155]:
                                        - img [ref=e156]
                        - generic [ref=e158] [cursor=pointer]:
                            - img [ref=e162]
                            - generic [ref=e164]:
                                - heading "Oreo Special Shake" [level=3] [ref=e165]
                                - paragraph [ref=e166]: 0,4l · frisch gemixt mit Sahne
                                - generic [ref=e167]:
                                    - generic [ref=e168]: 6,50 €
                                    - button "Oreo Special Shake ansehen" [ref=e169]:
                                        - img [ref=e170]
                        - generic [ref=e172] [cursor=pointer]:
                            - img [ref=e176]
                            - generic [ref=e179]:
                                - heading "Pancake Picknick" [level=3] [ref=e180]
                                - paragraph [ref=e181]: 12 Pancakes · 2 Fruchtsorten · Soße
                                - generic [ref=e182]:
                                    - generic [ref=e183]: 7,00 €
                                    - button "Pancake Picknick ansehen" [ref=e184]:
                                        - img [ref=e185]
                    - link "Alle Produkte ansehen" [ref=e187] [cursor=pointer]:
                        - /url: /menu
                        - button "Alle Produkte ansehen" [ref=e188]:
                            - generic [ref=e189]: Alle Produkte ansehen
            - generic [ref=e198]:
                - generic [ref=e199]:
                    - generic [ref=e200]: Dein exklusives Fede-Ticket
                    - heading "Kostenlose Lieferung über Lieferando!" [level=2] [ref=e201]
                    - paragraph [ref=e202]: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
                    - link "Jetzt bei Lieferando bestellen →" [ref=e204] [cursor=pointer]:
                        - /url: https://www.lieferando.de/speisekarte/hey-fede
                        - button "Jetzt bei Lieferando bestellen →" [ref=e205]:
                            - generic [ref=e206]: Jetzt bei Lieferando bestellen →
                - generic [ref=e209]:
                    - generic [ref=e210]: 0€
                    - generic [ref=e211]: LIEFERGEBÜHR
                    - generic [ref=e212]: Über Lieferando
            - generic [ref=e235]:
                - img [ref=e237]
                - generic [ref=e239]:
                    - generic [ref=e240]:
                        - heading "Unsere Werte" [level=2] [ref=e241]
                        - paragraph [ref=e242]: Was uns antreibt — jeden Tag.
                    - generic [ref=e243]:
                        - generic [ref=e244]:
                            - img [ref=e247]
                            - heading "100% Hausgemacht & Echt" [level=3] [ref=e250]
                            - paragraph [ref=e251]: Wenn wir morgens die Türen in der Wetzlarer Langgasse aufschließen, beginnt unser Tag mit echtem Handwerk. Wir rühren jeden einzelnen Teig für unsere Bubble Waffles und Pancakes frisch und nach eigener Geheimrezeptur an – ganz ohne fertige Backmischungen oder industrielle Zusätze. Selbst unsere cremigen Soßen und feinen Dips köcheln wir mit viel Geduld am eigenen Herd. Wir glauben fest daran, dass echte Liebe zum Produkt keinen Platz für Abkürzungen lässt. Jeder Bissen, den du bei uns genießt, ist das direkte Resultat ehrlicher, traditioneller Handarbeit, die wir mit größter Leidenschaft für dich ausführen.
                        - generic [ref=e252]:
                            - img [ref=e255]
                            - heading "Kompromisslose Frische" [level=3] [ref=e259]
                            - paragraph [ref=e260]: "Bei der Auswahl unserer Zutaten kennen wir keine Kompromisse. Ob knackige Nüsse, tiefroter Erdbeeren im Sommer oder cremige Milch für unsere legendären Special Shakes – wir achten penibel auf allerhöchste Qualität und tagesaktuelle Frische. Künstliche Aromen, Geschmacksverstärker oder unnötige Konservierungsstoffe haben in unserer Küche absolutes Hausverbot. Stattdessen vertrauen wir auf den reinen, unverfälschten Eigengeschmack bester Rohstoffe. Wenn du bei uns eine Bubble Waffle mit frischen Früchten und unserem hauseigenen Softeis bestellst, schmeckst du sofort den gewaltigen Unterschied: Natur pur, schonend verarbeitet und immer darauf ausgerichtet, dir das intensivste Geschmackserlebnis Wetzlars zu servieren."
                        - generic [ref=e261]:
                            - img [ref=e264]
                            - heading "Tief in Wetzlar verwurzelt" [level=3] [ref=e268]
                            - paragraph [ref=e269]: Unsere Dessertbar ist mehr als nur ein Café; sie ist unser persönlicher Liebesbrief an die historische Altstadt von Wetzlar. Wir lieben das bunte Treiben rund um den Eisenmarkt, die Spaziergänger auf dem Weg zum Lottehaus und die einzigartige, familiäre Gemeinschaft im Lahn-Dill-Kreis. Wo immer es uns möglich ist, arbeiten wir eng mit lokalen Partnern und Lieferanten zusammen, um die heimische Wirtschaft zu stärken und die Transportwege kurz zu halten. Hey Fede! ist ein lebendiger Treffpunkt für Einheimische und Besucher gleichermaßen – ein Ort, an dem sich die Wetzlarer Geschichte mit modernem, süßem Genuss verbindet.
                - img [ref=e272]
            - generic [ref=e275]:
                - generic [ref=e276]:
                    - heading "Hey Fede! im Überblick" [level=2] [ref=e277]
                    - paragraph [ref=e278]: Zahlen, die für uns sprechen.
                - generic [ref=e279]:
                    - generic [ref=e280]:
                        - generic [ref=e281]: ★
                        - generic [ref=e282]:
                            - text: "4.8"
                            - generic [ref=e283]: / 84+
                        - generic [ref=e284]: Google Reviews
                    - generic [ref=e285]:
                        - generic [ref=e286]: 🧇
                        - generic [ref=e287]: "39"
                        - generic [ref=e288]: Handgemachte Items
                    - generic [ref=e289]:
                        - generic [ref=e290]: 📍
                        - generic [ref=e291]:
                            - generic [ref=e292]: Seit
                            - text: "2023"
                        - generic [ref=e293]: In Wetzlar
            - generic [ref=e295]:
                - generic [ref=e296]:
                    - heading "Beliebte Anlässe" [level=2] [ref=e297]
                    - paragraph [ref=e298]: Jeder Besuch ein Fest.
                - generic [ref=e299]:
                    - generic [ref=e300]:
                        - img [ref=e302]
                        - heading "Romantische Date-Night" [level=3] [ref=e304]
                        - paragraph [ref=e305]: Gedimmtes Licht, eine süße Bubble Waffle zum Teilen und zwei Löffel. Hey Fede! bietet die perfekte, unkomplizierte Atmosphäre in der Wetzlarer Altstadt, um sich beim ersten oder hundertsten Date ungestört näherzukommen.
                    - generic [ref=e306]:
                        - img [ref=e308]
                        - heading "Sonntags mit der Familie" [level=3] [ref=e313]
                        - paragraph [ref=e314]: Nach einem langen Spaziergang an der Lahn gibt es nichts Schöneres, als sich gemeinsam aufzuwärmen. Unsere familienfreundliche Dessertbar bietet viel Platz, eine Kinderecke und süße Belohnungen, die garantiert jedes Kinderauge zum Leuchten bringen.
                    - generic [ref=e315]:
                        - img [ref=e317]
                        - heading "Der entspannte After-Work" [level=3] [ref=e319]
                        - paragraph [ref=e320]: Lass den anstrengenden Büroalltag einfach hinter dir. Ein aromatischer Espresso, ein frisch gebackener Crêpe und gute Gespräche mit Kollegen in gemütlicher Atmosphäre sind die beste Art, den verdienten Feierabend in Wetzlar einzuläuten.
                    - generic [ref=e321]:
                        - img [ref=e323]
                        - heading "Unvergessliche Geburtstage" [level=3] [ref=e327]
                        - paragraph [ref=e328]: Feier deinen besonderen Tag bei uns! Mit unseren riesigen Fede Boxen, dekoriert mit funkelnden Wunderkerzen, und einer Auswahl deiner absoluten Lieblingsdesserts wird jeder Geburtstag zu einem süßen Fest, das du und deine Freunde so schnell nicht vergessen werden.
                    - generic [ref=e329]:
                        - img [ref=e331]
                        - heading "Der wöchentliche Studi-Treff" [level=3] [ref=e334]
                        - paragraph [ref=e335]: Als Student der THM brauchst du Nervennahrung für lange Lernsessions. Bei Hey Fede! findest du kostenloses WLAN, bequeme Sitzplätze und großartige Pancake-Stapel, die dir die nötige Energie für deine nächste Klausurenphase liefern.
                    - generic [ref=e336]:
                        - img [ref=e338]
                        - heading "Die süße Shopping-Pause" [level=3] [ref=e341]
                        - paragraph [ref=e342]: Nach einem ausgiebigen Einkaufsbummel durch die Wetzlarer Altstadt gibt es keinen besseren Ort für einen Boxenstopp. Gönn dir eine wohlverdiente Zucker-Dosis in unserer gemütlichen Dessertbar, bevor es mit vollen Taschen weitergeht.
            - generic [ref=e343]:
                - img [ref=e346]
                - generic [ref=e348]:
                    - generic [ref=e349]:
                        - heading "Saisonale Highlights" [level=2] [ref=e350]
                        - paragraph [ref=e351]: Im Rhythmus der Jahreszeiten.
                    - generic [ref=e352]:
                        - button "Frühling" [ref=e353]:
                            - img [ref=e354]
                            - text: Frühling
                        - button "Sommer" [ref=e359]:
                            - img [ref=e360]
                            - text: Sommer
                        - button "Herbst" [ref=e366]:
                            - img [ref=e367]
                            - text: Herbst
                        - button "Winter" [ref=e370]:
                            - img [ref=e371]
                            - text: Winter
                    - generic [ref=e384]:
                        - generic [ref=e385]:
                            - generic [ref=e386]:
                                - generic [ref=e387]: Das aktuelle Special
                                - heading "Tropical Mango Madness" [level=3] [ref=e388]
                                - paragraph [ref=e389]: Wenn die Hitze über dem Eisenmarkt steht, sorgt unser Sommer-Spezial für die perfekte Abkühlung. Ein gigantischer 500ml Eisbecher mit hausgemachtem Mango-Sorbet, frischen Maracuja-Kernen, Kokosraspeln und unserem cremigen Softeis. Ein tropischer Kurzurlaub mitten in Hessen.
                            - generic [ref=e390]:
                                - generic [ref=e391]: ★
                                - heading "Weitere Sommers-Highlights" [level=4] [ref=e392]
                                - list [ref=e393]:
                                    - listitem [ref=e394]:
                                        - generic [ref=e395]: •
                                        - generic [ref=e396]: Tropical Mango Eisbecher
                                    - listitem [ref=e397]:
                                        - generic [ref=e398]: •
                                        - generic [ref=e399]: Iced Caramel Macchiato
                                    - listitem [ref=e400]:
                                        - generic [ref=e401]: •
                                        - generic [ref=e402]: Zitronen-Sorbet Shake
                        - button [ref=e404]:
                            - img [ref=e405]
                        - button [ref=e408]:
                            - img [ref=e409]
            - generic [ref=e411]:
                - img [ref=e413]
                - generic [ref=e416]:
                    - generic [ref=e417]:
                        - heading "Was unsere Gäste sagen" [level=2] [ref=e418]
                        - paragraph [ref=e419]: 4.8/5 · 84+ echte Bewertungen auf Google
                    - generic [ref=e420]:
                        - generic [ref=e421]:
                            - img [ref=e423]
                            - img "5 von 5 Sternen" [ref=e426]:
                                - img [ref=e428]
                                - img [ref=e431]
                                - img [ref=e434]
                                - img [ref=e437]
                                - img [ref=e440]
                            - paragraph [ref=e442]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
                            - generic [ref=e443]:
                                - generic [ref=e444]: SM
                                - generic [ref=e445]:
                                    - generic [ref=e446]: Sarah M.
                                    - generic [ref=e447]: Verifizierte Google-Bewertung
                        - generic [ref=e448]:
                            - img [ref=e450]
                            - img "5 von 5 Sternen" [ref=e453]:
                                - img [ref=e455]
                                - img [ref=e458]
                                - img [ref=e461]
                                - img [ref=e464]
                                - img [ref=e467]
                            - paragraph [ref=e469]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
                            - generic [ref=e470]:
                                - generic [ref=e471]: TK
                                - generic [ref=e472]:
                                    - generic [ref=e473]: Thomas K.
                                    - generic [ref=e474]: Verifizierte Google-Bewertung
                        - generic [ref=e475]:
                            - img [ref=e477]
                            - img "5 von 5 Sternen" [ref=e480]:
                                - img [ref=e482]
                                - img [ref=e485]
                                - img [ref=e488]
                                - img [ref=e491]
                                - img [ref=e494]
                            - paragraph [ref=e496]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
                            - generic [ref=e497]:
                                - generic [ref=e498]: LR
                                - generic [ref=e499]:
                                    - generic [ref=e500]: Lisa R.
                                    - generic [ref=e501]: Verifizierte Google-Bewertung
                        - generic [ref=e502]:
                            - img [ref=e504]
                            - img "4 von 5 Sternen" [ref=e507]:
                                - img [ref=e509]
                                - img [ref=e512]
                                - img [ref=e515]
                                - img [ref=e518]
                            - paragraph [ref=e520]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
                            - generic [ref=e521]:
                                - generic [ref=e522]: MS
                                - generic [ref=e523]:
                                    - generic [ref=e524]: Marco S.
                                    - generic [ref=e525]: Verifizierte Google-Bewertung
                        - generic [ref=e526]:
                            - img [ref=e528]
                            - img "5 von 5 Sternen" [ref=e531]:
                                - img [ref=e533]
                                - img [ref=e536]
                                - img [ref=e539]
                                - img [ref=e542]
                                - img [ref=e545]
                            - paragraph [ref=e547]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
                            - generic [ref=e548]:
                                - generic [ref=e549]: JW
                                - generic [ref=e550]:
                                    - generic [ref=e551]: Julia W.
                                    - generic [ref=e552]: Verifizierte Google-Bewertung
                        - generic [ref=e553]:
                            - img [ref=e555]
                            - img "5 von 5 Sternen" [ref=e558]:
                                - img [ref=e560]
                                - img [ref=e563]
                                - img [ref=e566]
                                - img [ref=e569]
                                - img [ref=e572]
                            - paragraph [ref=e574]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
                            - generic [ref=e575]:
                                - generic [ref=e576]: SM
                                - generic [ref=e577]:
                                    - generic [ref=e578]: Sarah M.
                                    - generic [ref=e579]: Verifizierte Google-Bewertung
                        - generic [ref=e580]:
                            - img [ref=e582]
                            - img "5 von 5 Sternen" [ref=e585]:
                                - img [ref=e587]
                                - img [ref=e590]
                                - img [ref=e593]
                                - img [ref=e596]
                                - img [ref=e599]
                            - paragraph [ref=e601]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
                            - generic [ref=e602]:
                                - generic [ref=e603]: TK
                                - generic [ref=e604]:
                                    - generic [ref=e605]: Thomas K.
                                    - generic [ref=e606]: Verifizierte Google-Bewertung
                        - generic [ref=e607]:
                            - img [ref=e609]
                            - img "5 von 5 Sternen" [ref=e612]:
                                - img [ref=e614]
                                - img [ref=e617]
                                - img [ref=e620]
                                - img [ref=e623]
                                - img [ref=e626]
                            - paragraph [ref=e628]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
                            - generic [ref=e629]:
                                - generic [ref=e630]: LR
                                - generic [ref=e631]:
                                    - generic [ref=e632]: Lisa R.
                                    - generic [ref=e633]: Verifizierte Google-Bewertung
                        - generic [ref=e634]:
                            - img [ref=e636]
                            - img "4 von 5 Sternen" [ref=e639]:
                                - img [ref=e641]
                                - img [ref=e644]
                                - img [ref=e647]
                                - img [ref=e650]
                            - paragraph [ref=e652]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
                            - generic [ref=e653]:
                                - generic [ref=e654]: MS
                                - generic [ref=e655]:
                                    - generic [ref=e656]: Marco S.
                                    - generic [ref=e657]: Verifizierte Google-Bewertung
                        - generic [ref=e658]:
                            - img [ref=e660]
                            - img "5 von 5 Sternen" [ref=e663]:
                                - img [ref=e665]
                                - img [ref=e668]
                                - img [ref=e671]
                                - img [ref=e674]
                                - img [ref=e677]
                            - paragraph [ref=e679]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
                            - generic [ref=e680]:
                                - generic [ref=e681]: JW
                                - generic [ref=e682]:
                                    - generic [ref=e683]: Julia W.
                                    - generic [ref=e684]: Verifizierte Google-Bewertung
                    - generic [ref=e685]:
                        - paragraph [ref=e686]: ← Hover um anzuhalten · Swipe zum Entdecken →
                        - link "Auf Google bewerten" [ref=e687] [cursor=pointer]:
                            - /url: https://maps.app.goo.gl/heyfede
                            - img [ref=e688]
                            - text: Auf Google bewerten
                            - img [ref=e690]
            - generic [ref=e695]:
                - generic [ref=e696]:
                    - heading "FAQ Quick-Check" [level=2] [ref=e697]
                    - paragraph [ref=e698]: Gut zu wissen.
                - paragraph [ref=e699]: Hier sind die häufigsten Fragen, die unsere Gäste in Wetzlar stellen. Für noch mehr Details schau einfach auf unserer ausführlichen FAQ-Seite vorbei.
                - generic [ref=e700]:
                    - generic [ref=e701]:
                        - button "Was ist Hey Fede?" [expanded] [ref=e702]:
                            - generic [ref=e703]: Was ist Hey Fede?
                            - img [ref=e705]
                        - generic [ref=e710]: Hey Fede! ist eine Dessertbar in der Wetzlarer Altstadt, die auf handgemachte Bubble Waffles, Pancakes, Eis und kreative Dessert-Kreationen spezialisiert ist. Wir verbinden frische Zutaten mit einzigartigen Rezepturen, um dir ein unvergessliches Geschmackserlebnis zu bieten.
                    - button "Wo ist Hey Fede?" [ref=e712]:
                        - generic [ref=e713]: Wo ist Hey Fede?
                        - img [ref=e715]
                    - button "Wann hat Hey Fede geöffnet?" [ref=e718]:
                        - generic [ref=e719]: Wann hat Hey Fede geöffnet?
                        - img [ref=e721]
                    - button "Seit wann gibt es Hey Fede?" [ref=e724]:
                        - generic [ref=e725]: Seit wann gibt es Hey Fede?
                        - img [ref=e727]
                    - button "Wer steckt hinter Hey Fede?" [ref=e730]:
                        - generic [ref=e731]: Wer steckt hinter Hey Fede?
                        - img [ref=e733]
                    - button "Was macht Hey Fede besonders?" [ref=e736]:
                        - generic [ref=e737]: Was macht Hey Fede besonders?
                        - img [ref=e739]
                    - button "Wie sind die Bewertungen von Hey Fede?" [ref=e742]:
                        - generic [ref=e743]: Wie sind die Bewertungen von Hey Fede?
                        - img [ref=e745]
                    - button "Gibt es WLAN bei Hey Fede?" [ref=e748]:
                        - generic [ref=e749]: Gibt es WLAN bei Hey Fede?
                        - img [ref=e751]
            - generic [ref=e754]:
                - heading "Immer auf dem Laufenden" [level=2] [ref=e755]
                - paragraph [ref=e756]: Abonniere unseren Newsletter für exklusive Angebote und die neuesten Dessert-Kreationen.
                - generic [ref=e759]:
                    - textbox "Bleib hungrig..." [ref=e760]
                    - button "Abonnieren" [ref=e762]:
                        - generic [ref=e763]: Abonnieren
            - generic [ref=e765]:
                - heading "Hey Fede! – Die Wetzlarer Dessertbar, die Genuss neu definiert" [level=1] [ref=e766]
                - generic [ref=e767]:
                    - heading "Unsere Rolle in der Wetzlarer Gastro-Szene" [level=2] [ref=e768]
                    - paragraph [ref=e769]: Wir bei Hey Fede! sind unendlich stolz darauf, ein so lebendiger Teil der dynamischen Wetzlarer Gastro-Szene zu sein. Die Gastronomielandschaft im Herzen von Hessen, insbesondere im Lahn-Dill-Kreis, war schon immer geprägt von tief verwurzelten Traditionen, rustikalen Wirtshäusern und klassischen Cafés, in denen man sich sonntags zum Stückchen Schwarzwälder Kirschtorte traf. Doch als wir 2023 beschlossen haben, genau hier in der Langgasse 68 unsere Türen zu öffnen, wussten wir, dass wir eine neue, aufregende Facette in das städtische Kulinarik-Portfolio einbringen wollten. Wir haben die historische Kulisse der Wetzlarer Altstadt – mit all ihren charmanten Fachwerkhäusern, den engen, geschichtsträchtigen Gassen rund um den Eisenmarkt und der Nähe zum altehrwürdigen Wetzlarer Dom – nicht als Einschränkung, sondern als die absolut perfekte Bühne für unser innovatives Dessert-Konzept begriffen.
                    - paragraph [ref=e770]: "Unsere Vision war es, einen Kontrastpunkt zu setzen, ohne dabei den Respekt vor der Wetzlarer Geschichte zu verlieren. Wenn unsere Gäste heute nach einem ausgiebigen Besuch im berühmten Lottehaus, wo Johann Wolfgang von Goethe wichtige Inspirationen für sein literarisches Schaffen fand, oder nach einem entspannten Nachmittagsspaziergang über die Alte Lahnbrücke zu uns kommen, tauchen sie in eine völlig andere Welt ein. Wir verbinden die Gemütlichkeit eines familiären Wohnzimmers mit dem urbanen Flair moderner Metropolen, in denen Dessert-Trends wie die knusprige Bubble Waffle oder üppig dekorierte Special Shakes längst zum Alltag gehören. In der Wetzlarer Gastro-Szene verstehen wir uns als kulinarische Brückenbauer: Wir bieten vertraute, tröstliche Elemente wie erstklassigen, heiß dampfenden Kaffee und hausgemachte Fruchtsoßen, kombinieren diese aber mit völlig neuen Texturen und aufregenden, internationalen Geschmackskombinationen, die man in dieser Form zuvor im Lahn-Dill-Kreis vergeblich gesucht hat."
                    - paragraph [ref=e771]: Durch die enge und vertrauensvolle Zusammenarbeit mit lokalen Lieferanten und die aktive Teilnahme an Stadtfesten und Events rund um den Kornmarkt haben wir tiefe Wurzeln geschlagen. Wir sind nicht einfach nur irgendein Laden, der Süßigkeiten verkauft; wir sind eine etablierte Institution, ein Ort des täglichen, unbeschwerten Zusammenkommens für Studierende der Technischen Hochschule Mittelhessen (THM), für frisch verliebte Paare auf ihrer Date-Night und für Großfamilien, die sich nach der Arbeitswoche etwas ganz Besonderes gönnen möchten. Die Wetzlarer Gastronomie ist durch unsere Dessertbar um eine farbenfrohe, süße und unglaublich herzliche Facette reicher geworden, und wir arbeiten jeden Tag unermüdlich daran, diesen Standard nicht nur zu halten, sondern stetig weiter auszubauen.
                - generic [ref=e772]:
                    - 'heading "Der große Vergleich: Bubble Waffle vs. Klassische Waffel" [level=2] [ref=e773]'
                    - paragraph [ref=e774]: 'Eine Frage, die uns an der Theke in der Wetzlarer Langgasse immer wieder mit großer Neugier gestellt wird, lautet: "Wo liegt eigentlich der genaue Unterschied zwischen eurer berühmten Bubble Waffle und der klassischen, traditionellen Waffel, die meine Oma früher immer gebacken hat?" Wir lieben diese Frage, denn sie gibt uns die perfekte Gelegenheit, unsere absolute Leidenschaft für dieses außergewöhnliche Gebäck zu teilen. Um es vorwegzunehmen: Wir lieben beide Varianten, aber die Bubble Waffle, die ihren historischen Ursprung in den pulsierenden, neonbeleuchteten Straßenmärkten von Hongkong hat, spielt in einer völlig anderen, faszinierenden Textur-Liga.'
                    - paragraph [ref=e775]: Der offensichtlichste Unterschied liegt natürlich im visuellen Erscheinungsbild und der revolutionären Struktur. Während die klassische belgische oder bergische Waffel flach ist und durch tiefe, quadratische oder herzförmige Vertiefungen gekennzeichnet wird, in denen sich Kirschen, Puderzucker oder heiße Himbeeren sammeln können, zeichnet sich unsere Bubble Waffle durch ihre namensgebenden, kugelrunden Erhebungen, die sogenannten "Bubbles", aus. Dieses einzigartige Wabenmuster entsteht durch spezielle, aus dickem Gusseisen gefertigte Waffeleisen, die wir während des Backvorgangs im exakt richtigen Moment wenden müssen, um den flüssigen, frischen Teig perfekt in jede einzelne Rundung der Form fließen zu lassen.
                    - paragraph [ref=e776]: Das wirklich Bahnbrechende an diesem speziellen Backverfahren ist jedoch die daraus resultierende Konsistenz, die sich radikal von allem unterscheidet, was du bisher gekannt hast. Eine klassische Waffel ist oft durchgehend weich, saftig oder, je nach Rezept, gleichmäßig knusprig. Unsere frisch gebackene Bubble Waffle hingegen ist ein Meisterwerk der Gegensätze. Die dünnen Verbindungsstege zwischen den einzelnen Blasen backen schnell durch und werden wunderbar karamellisiert, goldbraun und extrem knusprig. Die runden Blasen selbst jedoch umschließen die heiße Luft und bleiben im Inneren herrlich fluffig, weich und weisen eine fast schon kuchenartige, leichte Elastizität auf. Jeder Bissen bietet also ein gleichzeitiges Erlebnis von zartem Schmelz und lautem Knuspern.
                    - paragraph [ref=e777]: Zudem bietet die Flexibilität unserer Bubble Waffle einen immensen praktischen Vorteil für unser Konzept der üppigen Desserts. Unmittelbar nach dem Backen, wenn der Teig noch heiß und geschmeidig ist, formen wir die Waffel vorsichtig zu einer trichterartigen Tüte. Sobald sie an der Luft leicht abkühlt und aushärtet, verwandelt sie sich in das perfekte, essbare Gefäß für unsere hausgemachten Eiscremes, Früchte und Toppings. Während eine klassische Waffel unter dem Gewicht von Eis und Soßen oft schnell durchweicht und zerfällt, behält die Bubble Waffle durch ihre gebogene Struktur und die knusprige Außenhülle lange ihre Stabilität. Für uns und unsere zahllosen Gäste in Wetzlar ist sie deshalb nicht nur ein Teigprodukt, sondern die ultimative Leinwand für grenzenlose, süße Kreativität.
                - generic [ref=e778]:
                    - 'heading "Unser Hey Fede! Dessert-Glossar: Die Sprache des puren Genusses" [level=2] [ref=e779]'
                    - paragraph [ref=e780]: Wenn du die Speisekarte von Hey Fede! studierst, stößt du auf viele Begriffe aus der internationalen Dessertwelt, die wir mit unserem ganz eigenen, Wetzlarer Twist interpretiert haben. Wir möchten, dass du genau weißt, welche fantastischen Geschmackserlebnisse dich bei uns erwarten. Deshalb haben wir dieses kleine, aber feine Glossar der Dessert-Begriffe für dich zusammengestellt. Wir sehen es als unseren persönlichen Reiseführer durch die faszinierende, süße Welt unserer Dessertbar.
                    - generic [ref=e781]:
                        - term [ref=e782]:
                            - strong [ref=e783]: Softeis (Soft Serve)
                        - definition [ref=e784]: Vergiss alles, was du bisher über wässriges Softeis aus dem Freizeitpark dachtest. Unser Softeis wird frisch in der Maschine aufgeschlagen. Durch die kontinuierliche Zugabe von kalter Luft während des Gefrierprozesses erhält es diese unvergleichlich seidige, dichte und cremige Textur, die bei exakt -7 Grad Celsius serviert wird. Es schmilzt sanfter auf der Zunge als traditionelles Speiseeis und bietet dadurch eine sofortige, intensive Geschmacksentfaltung. Wir verwenden es als Herzstück vieler unserer Special Shakes und natürlich als kühle, erfrischende Füllung in unseren noch leicht warmen Bubble Waffles.
                        - term [ref=e785]:
                            - strong [ref=e786]: Toppings & Crumbles
                        - definition [ref=e787]: Ein Dessert ohne den perfekten Crunch ist für uns nur die halbe Miete. Unter "Toppings" verstehen wir alles, was wir kunstvoll über unsere Kreationen streuen, gießen oder dekorativ platzieren. Unsere Crumbles bestehen aus im Ofen gerösteten, butterigen Streuseln, knusprigen Keksbröseln oder gehackten Nüssen. Sie sind die entscheidenden Gegenspieler zur cremigen Süße von Sahne und Eis und sorgen dafür, dass dein Gaumen bei jedem Löffel eine neue, aufregende Textur erlebt. Wir stellen unsere Crumbles liebevoll in Handarbeit her, um sicherzustellen, dass sie immer die perfekte Größe und den maximalen Röstgeschmack besitzen.
                        - term [ref=e788]:
                            - strong [ref=e789]: Crêpes
                        - definition [ref=e790]: Dieser stolze Klassiker der französischen Patisserie-Kunst bedarf eigentlich kaum einer Erklärung, doch wir perfektionieren ihn jeden Tag aufs Neue. Ein Crêpe ist ein extrem dünner, weicher Pfannkuchen, der auf einer speziell dafür vorgesehenen, flachen Gusseisenplatte (der sogenannten Crêpière) gebacken wird. Wir verteilen den flüssigen Teig mit einem traditionellen Holzrechen in Sekundenschnelle hauchdünn. Das Resultat ist ein fast durchscheinender Teigfladen, den wir kunstvoll falten und mit reichhaltigen, dekadenten Füllungen wie unserer Nuss-Nougat-Creme, frisch geschnittenen Erdbeeren oder herzhaften Kombinationen versehen. Er ist das perfekte, unkomplizierte Handheld-Dessert für deinen Spaziergang durch die Wetzlarer Altstadt.
                        - term [ref=e791]:
                            - strong [ref=e792]: Special Shakes
                        - definition [ref=e793]: 'Der Begriff Milchshake wird unseren Kreationen absolut nicht gerecht, deshalb nennen wir sie voller Stolz "Special Shakes". Wir vermischen hochwertiges Eis mit eisgekühlter Milch, aber der eigentliche Clou passiert danach: Die Gläser werden am Rand mit Schokolade oder Karamell verziert, der Shake wird mit ganzen Gebäckstücken, Brownies, Marshmallows oder Waffelstücken gekrönt. Sie sind hochgradig instagrammable, unfassbar reichhaltig und so sättigend, dass sie ohne Probleme als eigenständige, flüssige Hauptmahlzeit durchgehen. Ein Special Shake ist bei uns keine bloße Erfrischung, sondern ein opulentes, visuelles und geschmackliches Kunstwerk.'
                        - term [ref=e794]:
                            - strong [ref=e795]: Matcha
                        - definition [ref=e796]: Dieser Begriff stammt aus der tiefen japanischen Teetradition und bezeichnet einen sehr fein gemahlenen Grüntee von absolut höchster Qualität. Im Gegensatz zu normalem Tee, der nur aufgebrüht wird, konsumiert man beim Matcha das gesamte Teeblatt, was für einen extrem intensiven, leicht herben und wunderbar erdigen Geschmack sorgt. Wir lieben Matcha, weil seine natürliche Bitterkeit und die leuchtend grüne Farbe den perfekten, erwachsenen Kontrapunkt zur Süße von weißer Schokolade oder Vanilleeis bilden. Ob in unserem Iced Matcha Latte oder als spezielles Topping auf der Frühlings-Waffel – Matcha bringt eine raffinierte, asiatische Eleganz direkt in unsere Dessertbar nach Hessen.
                - generic [ref=e797]:
                    - heading "Darum liebt Wetzlar Hey Fede! – Eine Zusammenfassung unserer Reviews" [level=2] [ref=e798]
                    - paragraph [ref=e799]: Nichts erfüllt unser Team mit mehr Stolz und tiefer Dankbarkeit als die unglaublich positiven Rückmeldungen, die wir täglich von unseren fantastischen Gästen erhalten. Wir lesen wirklich jede einzelne Google-Bewertung, jeden Instagram-Kommentar und jede direkte Nachricht, denn euer ehrliches Feedback ist der absolute Treibstoff, der unseren Motor am Laufen hält. Wenn wir all die lobenden Worte aus den vergangenen Monaten zusammenfassen, zeichnet sich ein klares, wunderschönes Bild davon ab, wofür Hey Fede! in den Augen der Menschen aus dem Lahn-Dill-Kreis und weit darüber hinaus steht.
                    - paragraph [ref=e800]: 'Am häufigsten wird unsere kompromisslose Hingabe zur **Produktqualität und Frische** hervorgehoben. Viele Rezensenten schreiben euphorisch, dass sie noch nie zuvor eine Waffel gegessen haben, die außen derart "brillant knusprig" und innen so "unfassbar fluffig" war. Es wird immer wieder bemerkt, dass unsere Früchte extrem frisch schmecken und unsere hausgemachten Soßen nicht künstlich übersüßt sind, sondern den puren Geschmack der Zutaten in den Vordergrund stellen. Diese geschmackliche Authentizität ist genau das, wofür wir jeden Morgen früh aufstehen und in der Küche stehen. Ein Gast fasste es kürzlich treffend zusammen: "Man schmeckt bei Hey Fede! in jedem Bissen die ehrliche Handarbeit, die hinter der Theke passiert. Kein Vergleich zu industrieller Massenware."'
                    - paragraph [ref=e801]: Ein weiterer, riesiger Schwerpunkt in euren Reviews ist unsere **familiäre Atmosphäre und der zuvorkommende Service**. Die Menschen betonen immer wieder, wie freundlich, geduldig und herzlich unser Team auch an extrem stressigen, gut besuchten Samstagnachmittagen auftritt. Eltern schwärmen in höchsten Tönen von unserer liebevoll eingerichteten Kinderecke und der Tatsache, dass sich auch die kleinsten Gäste bei uns wie echte Könige fühlen dürfen. Die Kombination aus warmen Erdtönen, dem Duft nach frisch gebackenem Teig und unserem echten, unaufgesetzten Lächeln sorgt dafür, dass sich viele Besucher bei uns "wie im eigenen Wohnzimmer, nur mit viel besserem Essen" fühlen. Wir werden oft als die absolute Nummer Eins Anlaufstelle in Wetzlar für Wohlfühlmomente bezeichnet, ein Ort, der auch an regnerischen, grauen Tagen sofort die Stimmung hebt.
                    - paragraph [ref=e802]: 'Zuletzt wird unsere **visuelle Kreativität und die Großzügigkeit der Portionen** oft lobend in den Mittelpunkt gestellt. "Das Auge isst hier nicht nur mit, es feiert eine absolute Party", schrieb uns ein begeisterter Stammgast, nachdem er unseren imposanten Tropical Mango Eisbecher serviert bekommen hatte. Die Leute lieben es, unsere farbenfrohen Kreationen zu fotografieren und zu teilen, weil jedes Dessert mit so unfassbar viel Liebe zum kleinsten Detail dekoriert wird. Und niemand geht bei uns hungrig nach Hause. Wir sind bekannt dafür, dass wir bei Toppings und Soßen absolut nicht knausern. Wir möchten, dass ein Besuch bei Hey Fede! in Wetzlar immer ein großzügiges Fest der Fülle ist. All diese wundervollen Reviews bestärken uns jeden Tag aufs Neue in unserer Mission: Wir wollen nicht einfach nur eine Dessertbar sein. Wir wollen Wetzlars süßestes, glücklichstes und genussvollstes Erlebnis schaffen – für jeden einzelnen Gast, der durch unsere Türen in der Langgasse tritt.'
    - contentinfo [ref=e803]:
        - img [ref=e806]
        - generic [ref=e808]:
            - generic [ref=e809]:
                - generic [ref=e810]:
                    - link "Startseite" [ref=e811] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e813]
                    - paragraph [ref=e814]: Dessertbar & Café
                    - generic [ref=e817]:
                        - generic [ref=e818]:
                            - img [ref=e819]
                            - generic [ref=e822]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e823]:
                            - img [ref=e824]
                            - link "06441 7890426" [ref=e826] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e828] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e829]
                        - text: Instagram
                - generic [ref=e832]:
                    - heading "Hey Fede!" [level=3] [ref=e833]
                    - navigation "Footer Navigation" [ref=e834]:
                        - link "Startseite" [ref=e835] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e836] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e837] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e838] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e839]
                    - navigation "SEO Navigation" [ref=e840]:
                        - link "Bubble Waffles" [ref=e841] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e842] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e843] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e844] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e845] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e846]:
                    - heading "Öffnungszeiten" [level=3] [ref=e847]
                    - generic [ref=e850]:
                        - generic [ref=e851]:
                            - generic [ref=e853]: Montag
                            - generic [ref=e855]: Geschlossen
                        - generic [ref=e856]:
                            - generic [ref=e858]: Dienstag
                            - generic [ref=e860]: Geschlossen
                        - generic [ref=e861]:
                            - generic [ref=e864]: Mittwoch
                            - generic [ref=e865]:
                                - generic [ref=e866]: 12:00 – 19:00 Uhr
                                - generic [ref=e867]: Heute
                        - generic [ref=e868]:
                            - generic [ref=e870]: Donnerstag
                            - generic [ref=e872]: 12:00 – 19:00 Uhr
                        - generic [ref=e873]:
                            - generic [ref=e875]: Freitag
                            - generic [ref=e877]: 12:00 – 19:00 Uhr
                        - generic [ref=e878]:
                            - generic [ref=e880]: Samstag
                            - generic [ref=e882]: 12:00 – 19:00 Uhr
                        - generic [ref=e883]:
                            - generic [ref=e885]: Sonntag
                            - generic [ref=e887]: 13:00 – 19:00 Uhr
                    - generic [ref=e888]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e889]:
                    - heading "Stay Sweet" [level=3] [ref=e890]
                    - paragraph [ref=e891]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e893]:
                        - textbox "Bleib hungrig..." [ref=e894]
                        - button "Abonnieren" [ref=e896]:
                            - generic [ref=e897]: Abonnieren
            - generic [ref=e898]:
                - generic [ref=e899]: Frisch
                - generic [ref=e900]: ·
                - generic [ref=e901]: Selbstgemacht
                - generic [ref=e902]: ·
                - generic [ref=e903]: Mit Liebe
            - generic [ref=e904]:
                - img [ref=e905]
                - img [ref=e907]
                - img [ref=e909]
                - img [ref=e911]
                - img [ref=e913]
            - generic [ref=e915]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e916]
                - paragraph [ref=e917]:
                    - generic [ref=e918]: Hessen
                    - generic [ref=e919]: ›
                    - generic [ref=e920]: Lahn-Dill-Kreis
                    - generic [ref=e921]: ›
                    - generic [ref=e922]: Wetzlar
                    - generic [ref=e923]: ›
                    - generic [ref=e924]: Langgasse
            - generic [ref=e925]:
                - heading "Besuche uns auch auf" [level=3] [ref=e926]
                - generic [ref=e927]:
                    - link "G Google" [ref=e928] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e929]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e930] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e931]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e932] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e933]: yelp
            - img "Made with Love in Wetzlar" [ref=e936]
            - generic [ref=e937]:
                - paragraph [ref=e938]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e939]:
                    - link "Impressum" [ref=e940] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e941] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e942] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e943]
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
> 50  |     expect(accessibilityScanResults.violations).toEqual([]);
      |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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
  94  |       expect(accessibilityScanResults.violations).toEqual([]);
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
