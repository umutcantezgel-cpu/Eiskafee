# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Core Page: /visit loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:56:5

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
+                   ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
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
+           ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(1) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#9a7060\\].font-normal.text-\\[0\\.87rem\\]",
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
+                   ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
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
+           ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(2) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#9a7060\\].font-normal.text-\\[0\\.87rem\\]",
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
+                   ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"] > .gap-\\[9px\\].items-center.flex > .bg-white\\/20.text-\\[0\\.63rem\\].py-0\\.5",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex justify-between items-center p-[13px_19px] bg-[#b34832]\" itemscope=\"\" itemprop=\"openingHoursSpecification\" itemtype=\"https://schema.org/OpeningHoursSpecification\">",
+                 "target": Array [
+                   ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"]",
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
+           ".mb-4 > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"] > .gap-\\[9px\\].items-center.flex > .bg-white\\/20.text-\\[0\\.63rem\\].py-0\\.5",
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
                - generic [ref=e43]:
                    - heading "Komm uns besuchen!" [level=1] [ref=e44]
                    - paragraph [ref=e45]: Wir freuen uns auf dich — vor Ort oder bequem per Lieferung.
                - img [ref=e47]
            - generic [ref=e51]:
                - generic [ref=e52]:
                    - heading "So findest du uns" [level=2] [ref=e53]
                    - generic [ref=e55]:
                        - generic [ref=e57]:
                            - generic:
                                - generic:
                                    - button [ref=e58] [cursor=pointer]:
                                        - img [ref=e61]
                                    - button [ref=e64] [cursor=pointer]:
                                        - img [ref=e65]
                                    - button [ref=e67] [cursor=pointer]:
                                        - img [ref=e68]
                                    - button [ref=e70] [cursor=pointer]:
                                        - img [ref=e71]
                                    - button [ref=e73] [cursor=pointer]:
                                        - img [ref=e74]
                                    - button [ref=e76] [cursor=pointer]:
                                        - img [ref=e77]
                                    - button [ref=e79] [cursor=pointer]:
                                        - img [ref=e80]
                                    - button [ref=e82] [cursor=pointer]:
                                        - img [ref=e83]
                        - generic [ref=e85]:
                            - generic [ref=e86]:
                                - generic [ref=e87]: Hey Fede! Dessertbar
                                - generic [ref=e88]: Langgasse 68 · 35576 Wetzlar
                            - link "Route" [ref=e89]:
                                - /url: https://www.google.com/maps/dir/?api=1&destination=50.5604,8.5048
                                - text: Route
                                - img [ref=e90]
                    - generic [ref=e95]:
                        - generic [ref=e96]:
                            - img [ref=e98]
                            - generic [ref=e101]:
                                - generic [ref=e102]: Adresse
                                - generic [ref=e103]: Langgasse 68, 35576 Wetzlar
                        - generic [ref=e104]:
                            - img [ref=e106]
                            - generic [ref=e108]:
                                - generic [ref=e109]: Telefon
                                - link "06441 7890426" [ref=e110]:
                                    - /url: tel:+4964417890426
                        - generic [ref=e111]:
                            - img [ref=e113]
                            - generic [ref=e115]:
                                - generic [ref=e116]: WhatsApp
                                - link "0176 25026991" [ref=e117]:
                                    - /url: https://wa.me/017625026991
                        - generic [ref=e118]:
                            - img [ref=e120]
                            - generic [ref=e123]:
                                - generic [ref=e124]: Instagram
                                - link "@heyfede_wetzlar" [ref=e125]:
                                    - /url: https://www.instagram.com/heyfede_wetzlar
                - generic [ref=e126]:
                    - generic [ref=e127]:
                        - heading "Öffnungszeiten" [level=2] [ref=e128]
                        - generic [ref=e130]:
                            - generic [ref=e131]:
                                - generic [ref=e133]: Montag
                                - generic [ref=e135]: Geschlossen
                            - generic [ref=e136]:
                                - generic [ref=e138]: Dienstag
                                - generic [ref=e140]: Geschlossen
                            - generic [ref=e141]:
                                - generic [ref=e144]: Mittwoch
                                - generic [ref=e145]:
                                    - generic [ref=e146]: 12:00 – 19:00 Uhr
                                    - generic [ref=e147]: Heute
                            - generic [ref=e148]:
                                - generic [ref=e150]: Donnerstag
                                - generic [ref=e152]: 12:00 – 19:00 Uhr
                            - generic [ref=e153]:
                                - generic [ref=e155]: Freitag
                                - generic [ref=e157]: 12:00 – 19:00 Uhr
                            - generic [ref=e158]:
                                - generic [ref=e160]: Samstag
                                - generic [ref=e162]: 12:00 – 19:00 Uhr
                            - generic [ref=e163]:
                                - generic [ref=e165]: Sonntag
                                - generic [ref=e167]: 13:00 – 19:00 Uhr
                    - generic [ref=e168]:
                        - heading "Bestellen & Abholen" [level=2] [ref=e169]
                        - generic [ref=e170]:
                            - generic [ref=e171]:
                                - generic [ref=e172]:
                                    - generic [ref=e173]: Lieferando
                                    - generic [ref=e174]: Keine Liefergebühr · Direkt nach Hause
                                    - link "Jetzt bestellen →" [ref=e176]:
                                        - /url: https://www.lieferando.de/speisekarte/hey-fede
                                        - button "Jetzt bestellen →" [ref=e177] [cursor=pointer]:
                                            - generic [ref=e178]: Jetzt bestellen →
                                - img [ref=e180]
                            - generic [ref=e185]:
                                - generic [ref=e186]:
                                    - generic [ref=e187]: Abholung
                                    - generic [ref=e188]: "Vor Ort: Langgasse 68, 35576 Wetzlar"
                                    - link "Route planen →" [ref=e189]:
                                        - /url: https://www.google.com/maps/dir/?api=1&destination=50.5604,8.5048
                                        - button "Route planen →" [ref=e190] [cursor=pointer]
                                - img [ref=e192]
                        - generic [ref=e195]:
                            - generic [ref=e197]: ✓
                            - paragraph [ref=e198]: Keine Liefergebühr bei Lieferando — frisch direkt zu dir!
            - generic [ref=e200]:
                - generic [ref=e201]:
                    - heading "Unsere Nachbarschaft" [level=2] [ref=e202]
                    - paragraph [ref=e203]: Hey Fede! liegt im Herzen der historischen Altstadt Wetzlars. Verbinde deinen Besuch bei uns mit einem Spaziergang zu diesen wunderschönen Sehenswürdigkeiten in unmittelbarer Nähe.
                - generic [ref=e204]:
                    - link "Wetzlarer Dom 350m Das historische Wahrzeichen der Stadt Wetzlar und ein absolutes Muss bei deinem Besuch in der Altstadt. Auf Wikipedia ansehen" [ref=e205]:
                        - /url: https://de.wikipedia.org/wiki/Wetzlarer_Dom
                        - generic [ref=e206]:
                            - heading "Wetzlarer Dom" [level=3] [ref=e207]
                            - generic [ref=e208]:
                                - img [ref=e209]
                                - text: 350m
                        - paragraph [ref=e212]: Das historische Wahrzeichen der Stadt Wetzlar und ein absolutes Muss bei deinem Besuch in der Altstadt.
                        - generic [ref=e213]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e214]
                    - link "Lottehaus 200m Die historische Gedenkstätte für Charlotte Buff, Werthers Muse in Goethes berühmtem Werkzeug. Auf Wikipedia ansehen" [ref=e216]:
                        - /url: https://de.wikipedia.org/wiki/Lottehaus
                        - generic [ref=e217]:
                            - heading "Lottehaus" [level=3] [ref=e218]
                            - generic [ref=e219]:
                                - img [ref=e220]
                                - text: 200m
                        - paragraph [ref=e223]: Die historische Gedenkstätte für Charlotte Buff, Werthers Muse in Goethes berühmtem Werkzeug.
                        - generic [ref=e224]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e225]
                    - link "Wetzlarer Altstadt 0m Wir befinden uns mitten in den verwinkelten Gassen der malerischen Wetzlarer Altstadt. Auf Wikipedia ansehen" [ref=e227]:
                        - /url: https://de.wikipedia.org/wiki/Historische_Altstadt_Wetzlar
                        - generic [ref=e228]:
                            - heading "Wetzlarer Altstadt" [level=3] [ref=e229]
                            - generic [ref=e230]:
                                - img [ref=e231]
                                - text: 0m
                        - paragraph [ref=e234]: Wir befinden uns mitten in den verwinkelten Gassen der malerischen Wetzlarer Altstadt.
                        - generic [ref=e235]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e236]
                    - link "Eisenmarkt 100m Der wunderschöne historische Eisenmarkt, umrahmt von charmanten Fachwerkhäusern, ist nur einen Katzensprung entfernt. Auf Wikipedia ansehen" [ref=e238]:
                        - /url: https://de.wikipedia.org/wiki/Historische_Altstadt_Wetzlar#Eisenmarkt
                        - generic [ref=e239]:
                            - heading "Eisenmarkt" [level=3] [ref=e240]
                            - generic [ref=e241]:
                                - img [ref=e242]
                                - text: 100m
                        - paragraph [ref=e245]: Der wunderschöne historische Eisenmarkt, umrahmt von charmanten Fachwerkhäusern, ist nur einen Katzensprung entfernt.
                        - generic [ref=e246]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e247]
                    - link "Alte Lahnbrücke 500m Die steinerne Brücke über die Lahn aus dem 13. Jahrhundert ist ein beliebtes Fotomotiv. Auf Wikipedia ansehen" [ref=e249]:
                        - /url: https://de.wikipedia.org/wiki/Alte_Lahnbr%C3%BCcke_(Wetzlar)
                        - generic [ref=e250]:
                            - heading "Alte Lahnbrücke" [level=3] [ref=e251]
                            - generic [ref=e252]:
                                - img [ref=e253]
                                - text: 500m
                        - paragraph [ref=e256]: Die steinerne Brücke über die Lahn aus dem 13. Jahrhundert ist ein beliebtes Fotomotiv.
                        - generic [ref=e257]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e258]
                    - link "Reichskammergerichtsmuseum 450m Tauche ein in die Rechtsgeschichte und das historische Erbe Wetzlars in diesem faszinierenden Museum. Auf Wikipedia ansehen" [ref=e260]:
                        - /url: https://de.wikipedia.org/wiki/Reichskammergerichtsmuseum
                        - generic [ref=e261]:
                            - heading "Reichskammergerichtsmuseum" [level=3] [ref=e262]
                            - generic [ref=e263]:
                                - img [ref=e264]
                                - text: 450m
                        - paragraph [ref=e267]: Tauche ein in die Rechtsgeschichte und das historische Erbe Wetzlars in diesem faszinierenden Museum.
                        - generic [ref=e268]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e269]
                    - link "Goethe-Weg 400m Spaziere auf den Pfaden, die einst der junge Goethe während seines Sommeraufenthalts in Wetzlar nahm. Auf Wikipedia ansehen" [ref=e271]:
                        - /url: https://de.wikipedia.org/wiki/Goetheweg_(Wetzlar)
                        - generic [ref=e272]:
                            - heading "Goethe-Weg" [level=3] [ref=e273]
                            - generic [ref=e274]:
                                - img [ref=e275]
                                - text: 400m
                        - paragraph [ref=e278]: Spaziere auf den Pfaden, die einst der junge Goethe während seines Sommeraufenthalts in Wetzlar nahm.
                        - generic [ref=e279]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e280]
        - region "Anfahrt, Parken & Tipps für deinen Besuch bei Hey Fede!" [ref=e282]:
            - region "Hey Fede! besuchen — Anfahrt, Öffnungszeiten und Tipps" [ref=e284]:
                - region [ref=e285]:
                    - heading "Willkommen in der Langgasse – Dein Zuhause für süße Momente in der Altstadt von Wetzlar" [level=2] [ref=e286]
                    - paragraph [ref=e287]: "Stell dir vor, du spazierst an einem entspannten Nachmittag durch die malerischen, von historischem Fachwerk gesäumten Gassen der Wetzlarer Altstadt. Deine Schritte hallen leise auf dem jahrhundertealten Kopfsteinpflaster wider, während du die besondere Atmosphäre dieser unvergleichlichen Stadt an der Lahn aufsaugst. Genau hier, inmitten dieses geschichtsträchtigen und gleichzeitig so lebendigen Umfelds, findest du uns: Hey Fede! in der Langgasse 68. Wir sind nicht einfach nur ein Ort, an dem man Desserts isst. Wir sind ein Ort der Begegnung, ein warmer, einladender Rückzugsort, an dem du für einen Moment den Alltag hinter dir lassen und dich voll und ganz dem Genuss hingeben kannst. Die Langgasse selbst ist eine der schönsten und traditionsreichsten Straßen Wetzlars, eine Hauptader der Altstadt, die Besucher und Einheimische gleichermaßen anzieht. Hier trifft modernes Leben auf jahrhundertealte Tradition, und wir sind unglaublich stolz darauf, ein Teil dieser wunderbaren Gemeinschaft zu sein."
                    - paragraph [ref=e288]: Wenn du dich unserer Tür näherst, wird dich vielleicht schon der unverwechselbare, warme Duft von frisch gebackenen Waffeln, geschmolzener Schokolade und aromatischem Kaffee begrüßen. Es ist ein Duft, der Erinnerungen weckt – an gemütliche Sonntagnachmittage bei den Großeltern, an ausgelassene Kindergeburtstage und an die pure, unbeschwerte Freude, die nur ein richtig gutes Dessert auslösen kann. Bei uns dreht sich alles um dieses Gefühl der Geborgenheit. Wir möchten, dass du eintrittst und dich sofort willkommen fühlst. Egal, ob du nach einem langen Arbeitstag eine süße Belohnung brauchst, ein romantisches Date planst, mit deinen Kindern einen besonderen Nachmittag verbringen möchtest oder einfach nur einen ruhigen Ort suchst, um ein gutes Buch zu lesen und dabei eine heiße Schokolade zu trinken – bei Hey Fede! bist du genau richtig. Wir haben diesen Ort mit viel Liebe zum Detail gestaltet, um eine Atmosphäre zu schaffen, die genauso herzlich, authentisch und einzigartig ist wie die Stadt Wetzlar selbst.
                    - separator [ref=e289]
                    - heading "So findest du Hey Fede! – Ein Spaziergang durch unsere Lieblingsstadt" [level=2] [ref=e290]
                    - paragraph [ref=e291]: Der Weg zu uns ist weit mehr als nur eine einfache Anreise – er ist bereits der Beginn deines kleinen Wetzlar-Erlebnisses. Die Altstadt von Wetzlar ist geprägt von einer beeindruckenden Kompaktheit und einer Fußgängerzone, die zum entspannten Flanieren einlädt. Wir empfehlen unseren Gästen immer, sich Zeit für den Weg zu nehmen, denn es gibt an fast jeder Ecke etwas Neues zu entdecken. Von historischen Gebäuden über kleine, inhabergeführte Boutiquen bis hin zu versteckten Innenhöfen – Wetzlar steckt voller Überraschungen.
                    - heading "Vom Bahnhof Wetzlar zu Fuß – Ein Weg, der sich lohnt" [level=3] [ref=e292]
                    - paragraph [ref=e293]: Wenn du mit dem Zug in Wetzlar ankommst, hast du die perfekte Gelegenheit, die Stadt Schritt für Schritt auf dich wirken zu lassen. Vom Hauptbahnhof bis zu uns in die Langgasse 68 sind es etwa 1,2 Kilometer – ein gemütlicher Spaziergang von rund 15 bis 20 Minuten, der dich direkt durch das Herz der Stadt führt. Wenn du das Bahnhofsgebäude verlässt, folgst du zunächst der Bahnhofstraße, die dich sanft in Richtung Zentrum leitet. Du passierst belebte Kreuzungen und spürst, wie die moderne Infrastruktur der Stadt allmählich der historischen Architektur weicht. Bald erreichst du die Lahn, den Fluss, der Wetzlar so maßgeblich prägt und der Stadt ihren unverwechselbaren, friedlichen Charakter verleiht.
                    - paragraph [ref=e294]: Der Weg über die Lahnbrücke ist immer ein besonderer Moment. Nimm dir hier eine Minute Zeit, um innezuhalten. Schau hinab auf das ruhig fließende Wasser, beobachte die Enten und Schwäne, die hier ihre Bahnen ziehen, und lass den Blick über die Uferpromenaden schweifen. An sonnigen Tagen glitzert das Wasser, und im Herbst spiegeln sich die bunten Blätter der Bäume auf der Oberfläche. Wenn du die Brücke überquert hast, befindest du dich am Rande der Altstadt. Über den Karl-Kellner-Ring gelangst du schließlich in die Fußgängerzone. Ab hier tauchst du ein in die Welt der Wetzlarer Geschichte. Die Straßen werden schmaler, die Häuser älter und charmanter. Du schlenderst über die Krämerstraße, vorbei an kleinen Geschäften und gemütlichen Cafés, bis du schließlich die Langgasse erreichst. Folge ihr einfach weiter – du wirst unser einladendes Schaufenster und den fröhlichen Hey Fede!-Schriftzug schon bald entdecken.
                    - heading "Mit dem Bus sicher und entspannt in die Altstadt" [level=3] [ref=e295]
                    - paragraph [ref=e296]: Wenn du lieber nicht so weit laufen möchtest oder das Wetter einmal nicht mitspielt, ist die Anreise mit dem Bus eine wunderbar bequeme und zuverlässige Alternative. Das Wetzlarer Busnetz ist hervorragend ausgebaut und verbindet alle umliegenden Stadtteile, Wohngebiete und wichtigen Knotenpunkte direkt mit dem Zentrum. Deine Zielhaltestelle für einen Besuch bei Hey Fede! ist der "Karl-Kellner-Ring". Diese zentrale Haltestelle wird von einer Vielzahl von Stadtbuslinien angefahren und liegt strategisch absolut perfekt, nur etwa 250 Meter von unserer Tür entfernt.
                    - paragraph [ref=e297]: Sobald du am Karl-Kellner-Ring aus dem Bus steigst, befindest du dich bereits in unmittelbarer Nähe zur Fußgängerzone. Ein kurzer, ebenerdiger Fußweg führt dich direkt in die Altstadt. Du biegst einfach in die Krämerstraße ein, genießt die historische Atmosphäre, die dich sofort umfängt, und spazierst ganz entspannt weiter bis zur Langgasse. Besonders für Familien mit kleinen Kindern, ältere Menschen oder Gäste, die nach einem ausgiebigen Shopping-Tag nicht mehr lange laufen möchten, ist der Bus die ideale Lösung. Die Haltestellen in Wetzlar sind in der Regel barrierefrei ausgebaut, und aktuelle Fahrpläne lassen sich ganz einfach über die Apps des lokalen Verkehrsverbundes (RMV) oder direkt an den digitalen Anzeigen der Haltestellen abrufen. So kommst du vollkommen stressfrei bei uns an und kannst dich direkt auf dein Dessert freuen.
                    - separator [ref=e298]
                    - heading "Der große Wetzlar-Park-Guide – Entspannt ankommen und genießen" [level=2] [ref=e299]
                    - paragraph [ref=e300]: "Wer mit dem Auto nach Wetzlar kommt, kennt vielleicht die kleine Herausforderung, die viele historische Städte mit sich bringen: Die Altstadt selbst ist verkehrsberuhigt und gehört den Fußgängern. Doch keine Sorge – Wetzlar hat dieses Thema hervorragend gelöst. Es gibt rund um die Altstadt eine Vielzahl von erstklassigen, gut ausgeschilderten und komfortablen Parkmöglichkeiten, die alle nur einen kurzen, schönen Spaziergang von uns entfernt liegen. Um dir die Anreise so einfach und entspannt wie möglich zu machen, haben wir hier einen umfassenden und unglaublich detaillierten Guide zu den besten Parkplätzen und Parkhäusern in unserer Nähe zusammengestellt. So weißt du genau, wo du dein Auto sicher abstellen kannst, und kannst deinen Besuch bei uns von der ersten Minute an in vollen Zügen genießen."
                    - heading "Parkplatz Domplatz – Der Klassiker im Herzen der Altstadt" [level=3] [ref=e301]
                    - paragraph [ref=e302]: Wenn du so nah wie möglich am Geschehen parken möchtest, ist der Parkplatz direkt am Domplatz eine hervorragende, wenngleich oft gut besuchte Wahl. Dieser offene Parkplatz liegt buchstäblich im Herzen der Altstadt, direkt neben dem imposanten Wetzlarer Dom. Von hier aus sind es nur etwa 350 bis 400 Meter bis zu unserer Tür in der Langgasse 68. Der Fußweg führt dich über das wunderschöne historische Pflaster, vorbei an ehrwürdigen Gebäuden und direkt durch das Zentrum der Altstadt.
                    - paragraph [ref=e303]: "Ein kleiner Tipp für dich: Da der Domplatz-Parkplatz sehr zentral liegt, ist er besonders an Samstagen oder während großer Veranstaltungen in der Stadt oft schnell besetzt. Wenn du jedoch an einem Dienstag-, Mittwoch- oder Donnerstagnachmittag zu uns kommst, stehen die Chancen meist sehr gut, hier einen bequemen Stellplatz zu finden. Vergiss nicht, ein gültiges Parkticket am Automaten zu ziehen, da hier regelmäßig kontrolliert wird. Der kurze Spaziergang vom Domplatz zu Hey Fede! ist ein Erlebnis für sich und stimmt dich perfekt auf eine süße Auszeit ein."
                    - heading "Parkhaus Forum Wetzlar – Perfekt für längere Ausflüge" [level=3] [ref=e304]
                    - paragraph [ref=e305]: Planst du einen ausgedehnten Tag in Wetzlar, möchtest vielleicht erst ein wenig einkaufen, dann gemütlich durch die Altstadt schlendern und den Tag bei uns mit einer herrlichen Bubble Waffle abschließen? Dann ist das Parkhaus im Einkaufszentrum "Forum Wetzlar" zweifellos die beste Wahl für dich. Dieses moderne, großzügig angelegte Parkhaus bietet Hunderte von überdachten, breiten Stellplätzen, verfügt über spezielle Familien- und Frauenparkplätze und ist durchgehend geöffnet.
                    - paragraph [ref=e306]: Vom Forum aus läufst du etwa 600 bis 800 Meter bis in die Langgasse. Der Weg ist dabei alles andere als langweilig. Du verlässt das moderne Einkaufszentrum, spazierst in Richtung Lahn, überquerst den Fluss über eine der Brücken und betrittst die Altstadt quasi durch ihr natürliches "Tor". Es ist ein wunderschöner Übergang von der modernen Shopping-Welt hinein in das historische, gemütliche Flair der Altstadt. Das Forum Wetzlar bietet zudem den Vorteil, dass du dir über die Parkdauer keine großen Gedanken machen musst – dein Auto steht sicher, im Trockenen und im Sommer angenehm kühl, während du ganz entspannt Wetzlar erkundest.
                    - heading "Parkplatz Lahninsel – Romantisch, naturnah und wunderschön" [level=3] [ref=e307]
                    - paragraph [ref=e308]: Unser absoluter Geheimtipp für alle, die Natur und Romantik lieben, ist der Parkplatz auf der Lahninsel. Dieser idyllische Parkplatz liegt – wie der Name schon sagt – auf einer kleinen Insel im Fluss, umgeben von alten, schattenspendenden Bäumen und dem beruhigenden Rauschen des Wassers. Wenn du dein Auto hier abstellst, beginnt dein Wetzlar-Erlebnis sofort mit einem Hauch von Urlaub.
                    - paragraph [ref=e309]: Der Fußweg von der Lahninsel zu uns in die Langgasse beträgt etwa 500 Meter und ist wahrscheinlich der landschaftlich schönste Weg in die Altstadt. Du überquerst eine kleine Fußgängerbrücke, von der aus du einen fantastischen Blick auf die historischen Gebäude am Ufer hast. Oft kannst du Kanufahrer oder Stand-Up-Paddler auf der Lahn beobachten. Von dort aus gehst du sanft bergauf in die Fußgängerzone. Dieser Parkplatz ist nicht nur unglaublich malerisch, sondern oft auch eine stressfreie Alternative an gut besuchten Wochenenden, wenn die Parkplätze direkt in der Altstadt knapper werden.
                    - heading "Parkhaus Altstadt (Am Stadion) – Die praktische Alternative" [level=3] [ref=e310]
                    - paragraph [ref=e311]: Eine weitere, oft übersehene, aber äußerst praktische Möglichkeit ist das Parkhaus Altstadt, das sich in der Nähe des Stadions befindet. Es bietet eine hervorragende Kapazität und ist tariflich oft sehr attraktiv gestaltet. Von hier aus näherst du dich der Altstadt von einer leicht erhöhten Position, was dir beim Spaziergang zu uns wunderbare Ausblicke auf die Dächer von Wetzlar beschert. Der Weg hinab in die Fußgängerzone ist entspannt, und nach etwa 10 bis 15 Minuten Gehzeit hast du die Langgasse und damit auch Hey Fede! erreicht. Es ist eine verlässliche Option für jeden Tag der Woche und bietet eine gute Anbindung an die großen Einfallstraßen der Stadt.
                    - separator [ref=e312]
                    - heading "Wetzlar erleben – Kultur, Geschichte und das perfekte Dessert" [level=2] [ref=e313]
                    - paragraph [ref=e314]: Einer der schönsten Aspekte von Hey Fede! ist unsere unschlagbare Lage. Wenn du zu uns kommst, besuchst du nicht nur ein Dessert-Café, sondern du tauchst ein in eine Stadt, die über Jahrhunderte hinweg Geschichte geschrieben hat. Wetzlar war einst eine freie Reichsstadt und Sitz des Reichskammergerichts, des höchsten Gerichts im Heiligen Römischen Reich. Große Dichter, Denker und Erfinder haben hier ihre Spuren hinterlassen. Ein Besuch bei uns lässt sich daher geradezu perfekt mit einer Entdeckungstour durch die Stadt verbinden. Wir haben für dich die absoluten Highlights zusammengestellt, die du vor oder nach deinem Dessert-Genuss auf keinen Fall verpassen solltest.
                    - heading "Der Wetzlarer Dom – Ein unvergleichliches Meisterwerk der Architektur" [level=3] [ref=e315]
                    - paragraph [ref=e316]: "Nur einen Steinwurf – genauer gesagt etwa 350 Meter – von uns entfernt thront der imposante Wetzlarer Dom, offiziell der Dom Unserer Lieben Frau. Wenn du vor diesem massiven Bauwerk stehst, wird dir sofort auffallen, dass etwas anders ist: Der Dom wirkt unfertig. Und das ist er tatsächlich! Über Jahrhunderte hinweg wurde an ihm gebaut, doch die Arbeiten wurden nie vollständig abgeschlossen. Das Ergebnis ist eine absolut faszinierende, beinahe wilde Mischung aus romanischer und gotischer Architektur."
                    - paragraph [ref=e317]: Du kannst die verschiedenen Baustile direkt an der Fassade ablesen. Der Dom ist nicht nur ein beeindruckendes Fotomotiv, sondern auch ein Ort tiefer Ruhe und Besinnung inmitten der lebhaften Altstadt. Nimm dir die Zeit, das Innere zu besichtigen, die beeindruckenden Glasfenster zu bewundern und die Stille zu genießen. Danach ist der Weg zu Hey Fede! für einen wärmenden Kaffee und eine frisch gebackene Waffel der perfekte Kontrast, um das Gesehene in gemütlicher Atmosphäre nachwirken zu lassen.
                    - heading "Das Lottehaus und Goethes romantische Spuren" [level=3] [ref=e318]
                    - paragraph [ref=e319]: Kein Name ist so eng mit der Romantik in Wetzlar verbunden wie der von Johann Wolfgang von Goethe. Im Jahr 1772 kam der damals noch unbekannte, junge Goethe als Praktikant an das Wetzlarer Reichskammergericht. Hier verliebte er sich unsterblich in Charlotte Buff, eine Liebe, die unerfüllt bleiben sollte, da "Lotte" bereits verlobt war. Diese leidenschaftliche und tragische Erfahrung inspirierte ihn zu seinem Weltbestseller "Die Leiden des jungen Werthers", ein Buch, das eine ganze Generation prägte und Wetzlar auf einen Schlag berühmt machte.
                    - paragraph [ref=e320]: Das Lottehaus, das ehemalige Wohnhaus der Familie Buff, liegt nur rund 200 Meter von Hey Fede! entfernt. Es ist heute ein wunderschön hergerichtetes Museum, das dich direkt in das 18. Jahrhundert zurückversetzt. Du kannst durch die original erhaltenen Räume wandern, persönliche Gegenstände von Charlotte betrachten und die Atmosphäre spüren, die einst Goethe inspirierte. Ein Spaziergang auf Goethes Spuren durch Wetzlar, gekrönt von einem anschließenden Besuch bei uns, ist ein fantastisches Programm für Geschichtsinteressierte, Schulklassen oder Paare, die einen romantischen Nachmittag verbringen möchten.
                    - heading "Die Alte Lahnbrücke – Romantik pur über dem fließenden Wasser" [level=3] [ref=e321]
                    - paragraph [ref=e322]: Wenn du dem Trubel der Gassen für einen Moment entfliehen möchtest, empfehlen wir dir einen kurzen Spaziergang zur Alten Lahnbrücke. Sie gehört zu den ältesten erhaltenen Brücken Hessens und überspannt den Fluss mit mehreren eleganten Steinbögen. Früher war sie ein wichtiger Handelsweg und ein Nadelöhr für Kaufleute aus aller Welt. Heute ist sie einer der friedlichsten und malerischsten Orte der Stadt.
                    - paragraph [ref=e323]: Besonders am späten Nachmittag oder in den frühen Abendstunden, wenn die tief stehende Sonne das Wasser der Lahn in ein goldenes Licht taucht, entfaltet die Brücke ihren ganzen Zauber. Es ist der perfekte Ort für ein Erinnerungsfoto oder einfach, um Arm in Arm zu stehen und aufs Wasser zu schauen. Von der Brücke aus bist du in weniger als zehn Minuten wieder bei uns in der Langgasse. Hol dir doch einfach einen unserer cremigen Shakes To-Go und genieße ihn bei einem Spaziergang über dieses historische Wahrzeichen.
                    - heading "Der Eisenmarkt – Das historische Herzstück der Altstadt" [level=3] [ref=e324]
                    - paragraph [ref=e325]: Nur etwa 100 Meter von Hey Fede! entfernt öffnet sich die Langgasse zum Eisenmarkt. Dieser kleiner, aber ungemein charmante Platz ist das heimliche Zentrum der Wetzlarer Altstadt. Umgeben von kunstvoll verzierten Fachwerkhäusern, von denen jedes seine eigene Geschichte erzählt, fühlt man sich hier wie in einer anderen Zeit. In der Mitte des Platzes plätschert friedlich ein historischer Brunnen.
                    - paragraph [ref=e326]: Der Eisenmarkt war über Jahrhunderte hinweg ein zentraler Handelsplatz. Heute ist er ein beliebter Treffpunkt, umgeben von kleinen Boutiquen und der perfekten Kulisse für ausgiebige Altstadtbummel. Der Platz strahlt eine unglaubliche Gemütlichkeit aus. Wenn du von hier aus weitergehst, wirst du unweigerlich das Gefühl haben, dass die Uhren in Wetzlar ein wenig langsamer, ein wenig entspannter ticken. Und genau dieses Gefühl möchten wir dir auch in unserem Café vermitteln.
                    - heading "Lokale Events und Feste in der Altstadt" [level=3] [ref=e327]
                    - paragraph [ref=e328]: Wetzlar ist eine Stadt, die weiß, wie man feiert, und die Altstadt ist regelmäßig Schauplatz wunderbarer Feste und Märkte. Ob das traditionelle Ochsenfest, das Menschen aus der ganzen Region anzieht, der fröhliche Gallusmarkt im Herbst mit seinen bunten Ständen und Fahrgeschäften oder der zauberhafte Wetzlarer Weihnachtsmarkt – zu diesen Zeiten verwandelt sich die Innenstadt in ein magisches Lichtermeer.
                    - paragraph [ref=e329]: Während dieser Events ist die Langgasse besonders belebt, und ein Besuch bei Hey Fede! wird zum perfekten Aufwärm-Stopp an kalten Wintertagen oder zur süßen Erfrischung während sommerlicher Stadtfeste. Wenn du deinen Besuch bei uns planst, lohnt es sich immer, einen Blick auf den Veranstaltungskalender der Stadt zu werfen. So kannst du ein grandioses Altstadt-Event mit unseren himmlischen Desserts kombinieren und den Tag absolut unvergesslich machen.
                    - separator [ref=e330]
                    - heading "Unsere Öffnungszeiten – Der perfekte Zeitpunkt für deinen Besuch" [level=2] [ref=e331]
                    - paragraph [ref=e332]: Wir möchten, dass Hey Fede! genau dann für dich da ist, wenn du Lust auf etwas Besonderes hast. Gleichzeitig legen wir größten Wert auf Frische, Qualität und eine liebevolle Vorbereitung all unserer Kreationen. Daher haben wir unsere Öffnungszeiten so gestaltet, dass wir dir an den geöffneten Tagen stets das bestmögliche, frischeste und leckerste Erlebnis bieten können. Hier findest du eine detaillierte Übersicht darüber, wann wir für dich da sind und welche Atmosphäre dich an den verschiedenen Tagen erwartet.
                    - heading "Montag und Dienstag – Unsere kreativen Ruhetage" [level=3] [ref=e333]
                    - paragraph [ref=e334]: An Montagen und Dienstagen bleiben die Türen von Hey Fede! geschlossen. Diese zwei Tage sind für uns unglaublich wichtig. Wir nutzen diese Zeit nicht nur, um durchzuatmen, sondern vor allem, um hinter den Kulissen aktiv zu sein. Wir testen neue Rezepte, verfeinern unsere hausgemachten Soßen, organisieren frische Zutaten von unseren Lieferanten und bereiten alles mit größter Sorgfalt für die kommende Woche vor. Auch wenn wir an diesen Tagen keine Gäste empfangen, fließt hier die kreative Energie, die du dann ab Mittwoch auf deinem Teller schmeckst.
                    - heading "Mittwoch bis Freitag – Die perfekten Nachmittage für eine süße Auszeit" [level=3] [ref=e335]
                    - paragraph [ref=e336]: Von Mittwoch bis Freitag öffnen wir unsere Türen pünktlich von 12:00 bis 19:00 Uhr. Diese Tage sind besonders bei jenen beliebt, die dem hektischen Alltag für eine Weile entfliehen möchten. Die Altstadt ist unter der Woche etwas ruhiger, das Tempo ist gedrosselt. Es ist die perfekte Zeit für ein entspanntes Date, ein ungestörtes Gespräch mit der besten Freundin oder einfach, um sich nach einem anstrengenden Arbeitstag oder nach der Schule selbst zu belohnen. Die Stimmung ist familiär, und oft bleibt an diesen Tagen auch ein wenig mehr Zeit für einen kurzen, persönlichen Plausch mit unserem Team.
                    - heading "Der Samstag – Buntes Treiben, Wochenmarkt und pure Lebensfreude" [level=3] [ref=e337]
                    - paragraph [ref=e338]: Samstags (ebenfalls 12:00 bis 19:00 Uhr) pulsiert das Leben in Wetzlar! Es ist der klassische Markttag, die Gassen sind erfüllt von fröhlichen Stimmen, Familien sind beim Wochenendeinkauf, und Touristen erkunden die Stadt. An Samstagen brummt der Laden, es wird gelacht, bestellt und genossen. Die Energie ist ansteckend, und es gibt kaum etwas Schöneres, als sich nach einem ausgiebigen Shopping-Marathon in der Fußgängerzone bei uns in den Sessel fallen zu lassen und sich eine unserer aufwendigen, prall gefüllten Bubble Waffles zu gönnen. Wenn du das lebhafte, urbane Gefühl der Altstadt liebst, ist der Samstag dein Tag für einen Besuch.
                    - heading "Der Sonntag – Entschleunigung pur und Zeit für die Familie" [level=3] [ref=e339]
                    - paragraph [ref=e340]: Der Sonntag ist in Wetzlar traditionell der Tag der Ruhe und der Familienausflüge. Von 13:00 bis 19:00 Uhr sind wir für dich da. Sonntage bei Hey Fede! haben eine ganz eigene, fast schon magische Atmosphäre. Nach einem ausgiebigen Sonntagsspaziergang an der Lahn oder einem späten Frühstück zu Hause kommen viele Familien und Paare zu uns, um den Tag gemütlich ausklingen zu lassen. Es ist die Zeit der großen Tische, der leuchtenden Kinderaugen und des gemeinsamen Genießens. Ein Sonntag ohne ein fantastisches Dessert ist schließlich nur ein halber Sonntag.
                    - separator [ref=e341]
                    - heading "Take-Away, Picknick-Spots und Lieferung direkt zu dir nach Hause" [level=2] [ref=e342]
                    - paragraph [ref=e343]: Wir lieben es, dich bei uns im Café als Gast zu begrüßen. Doch wir wissen auch, dass es Momente gibt, in denen man sein Dessert lieber unter freiem Himmel, im Park auf einer Decke oder gemütlich in den eigenen vier Wänden auf der heimischen Couch genießen möchte. Genau deshalb haben wir unser Angebot so flexibel wie möglich gestaltet. Alle unsere Köstlichkeiten, von den kunstvoll gefüllten Bubble Waffles bis hin zu unseren cremigen Shakes, gibt es selbstverständlich auch zum Mitnehmen. Sie werden mit derselben Liebe zum Detail zubereitet und sicher verpackt, sodass sie auch unterwegs nichts von ihrem Geschmack und ihrer Schönheit einbüßen.
                    - heading "Die schönsten Picknick-Spots rund um Hey Fede!" [level=3] [ref=e344]
                    - paragraph [ref=e345]: Wetzlar ist eine grüne Stadt, die zahlreiche wunderschöne Parks und Anlagen bietet – ideal für ein süßes Picknick an der frischen Luft. Wenn du dir dein Dessert bei uns als Take-Away holst, empfehlen wir dir besonders die Colchester-Anlage. Dieser weitläufige, gepflegte Park direkt am Ufer der Lahn ist nur wenige Gehminuten von der Langgasse entfernt. Hier kannst du dich ins weiche Gras setzen, dem Plätschern des Wassers lauschen und deine Waffel in absoluter Ruhe genießen.
                    - paragraph [ref=e346]: Eine weitere fantastische Option ist die Avignon-Anlage, die mit ihren schönen Blumenbeeten und alten Bäumen ein besonders romantisches Flair verströmt. Auch die Stufen am Rande des Kornmarkts oder die Bänke rund um den Domplatz bieten großartige Möglichkeiten, sich kurz niederzulassen, das Treiben der Altstadt zu beobachten und dabei einen unserer erfrischenden Drinks zu schlürfen. Egal für welchen Ort du dich entscheidest – Wetzlar bietet die perfekte Kulisse für jeden Freiluft-Genießer.
                    - heading "Lieferando – Dein Dessert kommt direkt zu dir" [level=3] [ref=e347]
                    - paragraph [ref=e348]: Manchmal möchte man das Haus einfach nicht verlassen. Es regnet, der Filmabend ist bereits im vollen Gange, oder man liegt am Sonntag gemütlich im Bett und hat plötzlich unglaubliche Lust auf etwas Süßes. Für genau diese Momente haben wir unsere Partnerschaft mit Lieferando eingerichtet. Du kannst unser gesamtes Sortiment ganz unkompliziert über die App oder die Website zu dir nach Hause bestellen.
                    - paragraph [ref=e349]: "Das Besondere daran: Wir berechnen keine Liefergebühren! Dein Dessert wird erst zubereitet, wenn der Fahrer fast bei uns ist, damit alles so warm, knusprig und frisch wie möglich bei dir ankommt. Wir verwenden für die Lieferung spezielle, umweltfreundliche Verpackungen, die dafür sorgen, dass das Eis kalt und die Waffel warm bleibt. Es ist der ultimative Komfort für alle, die das Hey Fede!-Erlebnis in ihren eigenen vier Wänden genießen möchten. Einfach bestellen, zurücklehnen und freuen."
                    - separator [ref=e350]
                    - heading "Familien, Gruppen, Kindergeburtstage & Besondere Anlässe" [level=2] [ref=e351]
                    - paragraph [ref=e352]: Ein Dessert ist immer auch ein Stück Lebensfreude, und Lebensfreude teilt man am besten mit anderen. Hey Fede! ist nicht nur ein Ort für das schnelle Dessert zwischendurch, sondern eine fantastische Location, um besondere Momente gemeinsam zu feiern. Ob es der fünfte Geburtstag deines Kindes ist, ein entspanntes Get-together mit den Kollegen nach einem langen Projekt oder ein runder Geburtstag im Familienkreis – wir sorgen dafür, dass euer Event süß und unvergesslich wird.
                    - heading "Strahlende Kinderaugen beim perfekten Kindergeburtstag" [level=3] [ref=e353]
                    - paragraph [ref=e354]: Kinder lieben Hey Fede! – und das beruht absolut auf Gegenseitigkeit. Die bunten Farben, die unzähligen Toppings von Schokolinsen über Gummibärchen bis hin zu frischen Erdbeeren, und die Möglichkeit, sich sein ganz persönliches Traum-Dessert zusammenzustellen, machen unser Café zu einem wahren Paradies für die Kleinen. Wenn du einen Kindergeburtstag bei uns feiern möchtest, bieten wir euch ein rundum sorglos Paket.
                    - paragraph [ref=e355]: Wir reservieren einen großen, gemütlichen Bereich für euch. Jedes Kind bekommt die Möglichkeit, seine eigene Bubble Waffle oder seine Pancakes nach Herzenslust am Tisch selbst mit bunten Streuseln, Soßen und Toppings zu dekorieren – ein interaktives Erlebnis, das unglaublich viel Spaß macht und für leuchtende Augen sorgt. Die Eltern können sich derweil entspannt zurücklehnen, einen fantastischen Kaffee genießen und dem fröhlichen Treiben zusehen, ohne sich am Ende um das Aufräumen der Küche kümmern zu müssen. Sprecht uns einfach frühzeitig an, damit wir die Details für euren perfekten Kindergeburtstag gemeinsam planen können!
                    - heading "Teamevents und Firmenfeiern mal anders" [level=3] [ref=e356]
                    - paragraph [ref=e357]: Wer sagt eigentlich, dass Teamevents immer in dunklen Bars oder bei einem klassischen Abendessen stattfinden müssen? Ein gemeinsamer Nachmittag bei Hey Fede! ist eine erfrischende, kreative und unglaublich motivierende Alternative. Es bricht das Eis, wenn der Chef sich eine Waffel mit extra viel Schokoladensoße gönnt und die Kollegen sich über die besten Topping-Kombinationen austauschen. Wir haben bereits viele kleine Teams, Start-ups und Abteilungen lokaler Unternehmen bei uns begrüßen dürfen, die nach einem Workshop oder als Jahresabschluss bei uns gefeiert haben. Wir können individuelle Dessert-Pakete zusammenstellen, Getränke vorbereiten und dafür sorgen, dass euer Team-Ausflug ein voller Erfolg wird.
                    - separator [ref=e358]
                    - heading "Barrierefreiheit, Inklusion & Unser herzliches Service-Versprechen" [level=2] [ref=e359]
                    - paragraph [ref=e360]: Gastfreundschaft bedeutet für uns, dass jeder Mensch bei uns nicht nur willkommen, sondern bestens aufgehoben ist. Wir haben Hey Fede! von Anfang an mit dem Gedanken der Inklusion und Zugänglichkeit geplant, denn Genuss darf keine Hürden kennen.
                    - list [ref=e361]:
                        - listitem [ref=e362]:
                            - strong [ref=e363]: "Barrierefreier Zugang:"
                            - text: Unser Eingang in der Langgasse 68 ist ebenerdig gestaltet. Es gibt keine lästigen Stufen an der Tür, sodass der Zugang für Rollstuhlfahrer, Menschen mit Gehhilfen oder Rollatoren sowie für Familien mit Kinderwagen absolut problemlos und sicher möglich ist. Auch im Innenraum haben wir darauf geachtet, breite Durchgänge zwischen den Tischen zu lassen, damit man sich komfortabel bewegen kann.
                        - listitem [ref=e364]:
                            - strong [ref=e365]: "Kinder- und Familienfreundlichkeit:"
                            - text: Familien sind bei uns immer herzlich willkommen. Wir stellen gerne Hochstühle zur Verfügung, haben ausreichend Platz für Kinderwagen und unser Team hat immer ein Lächeln und Verständnis für die kleinen, lebhaften Gäste übrig. Wir wissen, dass ein Besuch mit kleinen Kindern manchmal turbulent sein kann – bei uns dürft ihr euch entspannen.
                        - listitem [ref=e366]:
                            - strong [ref=e367]: "Hunde sind willkommen:"
                            - text: Als echte Tierfreunde wissen wir, dass der Hund oft zur Familie gehört. Gut erzogene Vierbeiner sind bei uns im Café gern gesehene Gäste. Frisches Wasser für deinen treuen Begleiter stellen wir auf Anfrage selbstverständlich und gerne zur Verfügung, damit auch er sich nach dem Spaziergang durch die Altstadt erfrischen kann.
                        - listitem [ref=e368]:
                            - strong [ref=e369]: "Kostenloses WLAN und Kartenzahlung:"
                            - text: "In unserer modernen Welt ist Vernetzung wichtig. Deshalb bieten wir all unseren Gästen schnelles, kostenfreies WLAN an. Du kannst ganz entspannt arbeiten, deine Lieblingsmusik hören oder – worüber wir uns besonders freuen – direkt ein Foto deines wunderschönen Desserts auf Instagram teilen und uns markieren. An der Kasse bist du völlig flexibel: Wir akzeptieren neben Bargeld alle gängigen EC- und Kreditkarten sowie kontaktlose Zahlungsarten per Smartphone oder Smartwatch."
                    - paragraph [ref=e370]: Letztendlich ist es unser größtes Ziel, dir ein Lächeln ins Gesicht zu zaubern. Unser Team steht dir jederzeit zur Seite, berät dich leidenschaftlich gern bei der Auswahl deiner Desserts und teilt vielleicht sogar den einen oder anderen Geheimtipp zu Wetzlar mit dir. Wir lieben das, was wir tun, wir lieben unsere Stadt, und wir freuen uns unglaublich darauf, dich bald bei uns in der Langgasse 68 begrüßen zu dürfen. Komm vorbei, mach es dir gemütlich, lass den Alltag draußen und genieße deinen perfekten Moment bei Hey Fede!
    - contentinfo [ref=e371]:
        - img [ref=e374]
        - generic [ref=e376]:
            - generic [ref=e377]:
                - generic [ref=e378]:
                    - link "Startseite" [ref=e379]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e381] [cursor=pointer]
                    - paragraph [ref=e382]: Dessertbar & Café
                    - generic [ref=e385]:
                        - generic [ref=e386]:
                            - img [ref=e387]
                            - generic [ref=e390]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e391]:
                            - img [ref=e392]
                            - link "06441 7890426" [ref=e394]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e396]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e397]
                        - text: Instagram
                - generic [ref=e400]:
                    - heading "Hey Fede!" [level=3] [ref=e401]
                    - navigation "Footer Navigation" [ref=e402]:
                        - link "Startseite" [ref=e403]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e404]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e405]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e406]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e407]
                    - navigation "SEO Navigation" [ref=e408]:
                        - link "Bubble Waffles" [ref=e409]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e410]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e411]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e412]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e413]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e414]:
                    - heading "Öffnungszeiten" [level=3] [ref=e415]
                    - generic [ref=e418]:
                        - generic [ref=e419]:
                            - generic [ref=e421]: Montag
                            - generic [ref=e423]: Geschlossen
                        - generic [ref=e424]:
                            - generic [ref=e426]: Dienstag
                            - generic [ref=e428]: Geschlossen
                        - generic [ref=e429]:
                            - generic [ref=e432]: Mittwoch
                            - generic [ref=e433]:
                                - generic [ref=e434]: 12:00 – 19:00 Uhr
                                - generic [ref=e435]: Heute
                        - generic [ref=e436]:
                            - generic [ref=e438]: Donnerstag
                            - generic [ref=e440]: 12:00 – 19:00 Uhr
                        - generic [ref=e441]:
                            - generic [ref=e443]: Freitag
                            - generic [ref=e445]: 12:00 – 19:00 Uhr
                        - generic [ref=e446]:
                            - generic [ref=e448]: Samstag
                            - generic [ref=e450]: 12:00 – 19:00 Uhr
                        - generic [ref=e451]:
                            - generic [ref=e453]: Sonntag
                            - generic [ref=e455]: 13:00 – 19:00 Uhr
                    - generic [ref=e456]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e457]:
                    - heading "Stay Sweet" [level=3] [ref=e458]
                    - paragraph [ref=e459]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e461]:
                        - textbox "Bleib hungrig..." [ref=e462]
                        - button "Abonnieren" [ref=e464]:
                            - generic [ref=e465]: Abonnieren
            - generic [ref=e466]:
                - generic [ref=e467]: Frisch
                - generic [ref=e468]: ·
                - generic [ref=e469]: Selbstgemacht
                - generic [ref=e470]: ·
                - generic [ref=e471]: Mit Liebe
            - generic [ref=e472]:
                - img [ref=e473]
                - img [ref=e475]
                - img [ref=e477]
                - img [ref=e479]
                - img [ref=e481]
            - generic [ref=e483]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e484]
                - paragraph [ref=e485]:
                    - generic [ref=e486]: Hessen
                    - generic [ref=e487]: ›
                    - generic [ref=e488]: Lahn-Dill-Kreis
                    - generic [ref=e489]: ›
                    - generic [ref=e490]: Wetzlar
                    - generic [ref=e491]: ›
                    - generic [ref=e492]: Langgasse
            - generic [ref=e493]:
                - heading "Besuche uns auch auf" [level=3] [ref=e494]
                - generic [ref=e495]:
                    - link "G Google" [ref=e496]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e497]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e498]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e499]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e500]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e501]: yelp
            - img "Made with Love in Wetzlar" [ref=e504]
            - generic [ref=e505]:
                - paragraph [ref=e506]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e507]:
                    - link "Impressum" [ref=e508]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e509]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e510]:
                        - /url: /legal#agb
    - alert [ref=e511]
    - iframe [ref=e512]:
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
> 68  |       expect(accessibilityScanResults.violations).toEqual([]);
      |                                                   ^ Error: expect(received).toEqual(expected) // deep equality
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
