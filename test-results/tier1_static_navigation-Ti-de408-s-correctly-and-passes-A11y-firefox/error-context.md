# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Info & Legal Page: /legal?tab=privacy loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:82:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 303

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
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#b34832",
+               "fontSize": "10.2pt (13.6px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #b34832, background color: #eedfcc, font size: 10.2pt (13.6px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span style=\"display:inline-block;background:#eedfcc;padding:3px 10px;border-radius:8px;font-family:monospace;font-size:0.85rem;margin-top:6px;color:#b34832;font-weight:bold\">[HIER DEINE USt-ID EINTRAGEN]</span>",
+                 "target": Array [
+                   "div:nth-child(3) > p > span",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #b34832, background color: #eedfcc, font size: 10.2pt (13.6px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"display:inline-block;background:#eedfcc;padding:3px 10px;border-radius:8px;font-family:monospace;font-size:0.85rem;margin-top:6px;color:#b34832;font-weight:bold\">[HIER DEINE USt-ID EINTRAGEN]</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(3) > p > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 3.78,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div style=\"display:flex;align-items:center;gap:16px;background:#f5efe8;border-radius:16px;padding:14px 20px;border:1px solid rgba(228,192,168,0.3);flex-wrap:wrap\">",
+                 "target": Array [
+                   "#cookies > div > div:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-size:0.75rem;color:#9a7060;min-width:70px\">6 Monate</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > span:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 3.78,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div style=\"display:flex;align-items:center;gap:16px;background:#f5efe8;border-radius:16px;padding:14px 20px;border:1px solid rgba(228,192,168,0.3);flex-wrap:wrap\">",
+                 "target": Array [
+                   "#cookies > div > div:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-size:0.75rem;color:#9a7060;min-width:70px\">Sitzung</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#cookies > div > div:nth-child(2) > span:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 3.78,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div style=\"display:flex;align-items:center;gap:16px;background:#f5efe8;border-radius:16px;padding:14px 20px;border:1px solid rgba(228,192,168,0.3);flex-wrap:wrap\">",
+                 "target": Array [
+                   "#cookies > div > div:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-size:0.75rem;color:#9a7060;min-width:70px\">Sitzung</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(3) > span:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 3.78,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div style=\"display:flex;align-items:center;gap:16px;background:#f5efe8;border-radius:16px;padding:14px 20px;border:1px solid rgba(228,192,168,0.3);flex-wrap:wrap\">",
+                 "target": Array [
+                   "#cookies > div > div:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-size:0.75rem;color:#9a7060;min-width:70px\">Dauerhaft</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(4) > span:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 3.78,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a7060",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div style=\"display:flex;align-items:center;gap:16px;background:#f5efe8;border-radius:16px;padding:14px 20px;border:1px solid rgba(228,192,168,0.3);flex-wrap:wrap\">",
+                 "target": Array [
+                   "#cookies > div > div:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.78 (foreground color: #9a7060, background color: #f5efe8, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-size:0.75rem;color:#9a7060;min-width:70px\">6 Monate</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(5) > span:nth-child(3)",
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
    - main [ref=e32]:
        - generic [ref=e33]:
            - generic [ref=e34]:
                - generic [ref=e37]:
                    - generic [ref=e38]:
                        - img [ref=e39]
                        - generic [ref=e41]: DSGVO · TDDDG · DDG konform
                    - heading "Rechtliches" [level=1] [ref=e42]
                    - paragraph [ref=e43]: Transparenz & Vertrauen bei Hey Fede!
                - navigation [ref=e44]:
                    - link "Impressum" [ref=e45] [cursor=pointer]:
                        - /url: "#impressum"
                        - img [ref=e46]
                        - text: Impressum
                    - link "Datenschutz" [ref=e52] [cursor=pointer]:
                        - /url: "#datenschutz"
                        - img [ref=e53]
                        - text: Datenschutz
                    - link "Cookies" [ref=e55] [cursor=pointer]:
                        - /url: "#cookies"
                        - img [ref=e56]
                        - text: Cookies
                    - link "AGB" [ref=e63] [cursor=pointer]:
                        - /url: "#agb"
                        - img [ref=e64]
                        - text: AGB
            - generic [ref=e70]:
                - generic [ref=e71]:
                    - heading "Impressum" [level=2] [ref=e72]:
                        - img [ref=e73]
                        - text: Impressum
                    - generic [ref=e79]:
                        - generic [ref=e80]:
                            - generic [ref=e81]:
                                - img [ref=e82]
                                - heading "Anbieter" [level=3] [ref=e88]
                            - paragraph [ref=e89]:
                                - text: Hey Fede! Dessertbar & Café
                                - text: "Inhaberin: Federica Rossi"
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e90]:
                            - generic [ref=e91]:
                                - img [ref=e92]
                                - heading "Kontakt" [level=3] [ref=e94]
                            - paragraph [ref=e95]:
                                - text: "Tel: 06441 7890426"
                                - text: "WhatsApp: 0176 25026991"
                                - text: "E-Mail: hallo@hey-fede.de"
                        - generic [ref=e96]:
                            - generic [ref=e97]:
                                - img [ref=e98]
                                - heading "Steuernummer" [level=3] [ref=e104]
                            - paragraph [ref=e105]:
                                - text: "USt-IdNr. gem. § 27a UStG:"
                                - generic [ref=e106]: "[HIER DEINE USt-ID EINTRAGEN]"
                        - generic [ref=e107]:
                            - generic [ref=e108]:
                                - img [ref=e109]
                                - heading "§ 18 MStV" [level=3] [ref=e113]
                            - paragraph [ref=e114]:
                                - text: "Verantwortlich für den Inhalt:"
                                - text: Federica Rossi
                                - text: Langgasse 68, 35576 Wetzlar
                    - generic [ref=e115]:
                        - strong [ref=e116]: "EU-Streitschlichtung:"
                        - text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:"
                        - link "ec.europa.eu/consumers/odr" [ref=e117] [cursor=pointer]:
                            - /url: https://ec.europa.eu/consumers/odr
                            - text: ec.europa.eu/consumers/odr
                            - img [ref=e118]
                        - text: . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                - generic [ref=e122]:
                    - heading "Datenschutzerklärung" [level=2] [ref=e123]:
                        - img [ref=e124]
                        - text: Datenschutzerklärung
                    - generic [ref=e126]:
                        - button "01 Verantwortlicher" [expanded] [ref=e127] [cursor=pointer]:
                            - img [ref=e129]
                            - generic [ref=e131]:
                                - text: "01"
                                - generic [ref=e132]: Verantwortlicher
                            - img [ref=e134]
                        - paragraph [ref=e138]:
                            - text: Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café
                            - text: Langgasse 68, 35576 Wetzlar
                            - text: "E-Mail: datenschutz@hey-fede.de"
                    - button "02 Erhobene Daten" [ref=e140] [cursor=pointer]:
                        - img [ref=e142]
                        - generic [ref=e146]:
                            - text: "02"
                            - generic [ref=e147]: Erhobene Daten
                        - img [ref=e149]
                    - button "03 Rechtsgrundlagen" [ref=e152] [cursor=pointer]:
                        - img [ref=e154]
                        - generic [ref=e160]:
                            - text: "03"
                            - generic [ref=e161]: Rechtsgrundlagen
                        - img [ref=e163]
                    - button "04 Empfänger & Auftragsverarbeiter" [ref=e166] [cursor=pointer]:
                        - img [ref=e168]
                        - generic [ref=e171]:
                            - text: "04"
                            - generic [ref=e172]: Empfänger & Auftragsverarbeiter
                        - img [ref=e174]
                    - button "05 Drittlandtransfer (USA)" [ref=e177] [cursor=pointer]:
                        - img [ref=e179]
                        - generic [ref=e184]:
                            - text: "05"
                            - generic [ref=e185]: Drittlandtransfer (USA)
                        - img [ref=e187]
                    - button "06 Speicherdauer" [ref=e190] [cursor=pointer]:
                        - img [ref=e192]
                        - generic [ref=e198]:
                            - text: "06"
                            - generic [ref=e199]: Speicherdauer
                        - img [ref=e201]
                    - button "07 Deine Rechte (Betroffenenrechte)" [ref=e204] [cursor=pointer]:
                        - img [ref=e206]
                        - generic [ref=e209]:
                            - text: "07"
                            - generic [ref=e210]: Deine Rechte (Betroffenenrechte)
                        - img [ref=e212]
                    - button "08 Hosting & CDN" [ref=e215] [cursor=pointer]:
                        - img [ref=e217]
                        - generic [ref=e222]:
                            - text: "08"
                            - generic [ref=e223]: Hosting & CDN
                        - img [ref=e225]
                    - button "09 Firebase (Google)" [ref=e228] [cursor=pointer]:
                        - img [ref=e230]
                        - generic [ref=e234]:
                            - text: "09"
                            - generic [ref=e235]: Firebase (Google)
                        - img [ref=e237]
                    - button "10 Kontaktformular" [ref=e240] [cursor=pointer]:
                        - img [ref=e242]
                        - generic [ref=e245]:
                            - text: "10"
                            - generic [ref=e246]: Kontaktformular
                        - img [ref=e248]
                    - button "11 Beschwerderecht" [ref=e251] [cursor=pointer]:
                        - img [ref=e253]
                        - generic [ref=e257]:
                            - text: "11"
                            - generic [ref=e258]: Beschwerderecht
                        - img [ref=e260]
                - generic [ref=e262]:
                    - heading "Cookies & Tracking" [level=2] [ref=e263]:
                        - img [ref=e264]
                        - text: Cookies & Tracking
                    - paragraph [ref=e271]: Unsere Website verwendet Cookies. Die Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen Cookies holen wir deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).
                    - generic [ref=e272]:
                        - generic [ref=e273]:
                            - generic [ref=e274]: cc_cookie
                            - generic [ref=e275]: Cookie-Einstellungen speichern
                            - generic [ref=e276]: 6 Monate
                            - generic [ref=e277]: Notwendig
                        - generic [ref=e278]:
                            - generic [ref=e279]: __session
                            - generic [ref=e280]: Login-Session-Verwaltung
                            - generic [ref=e281]: Sitzung
                            - generic [ref=e282]: Notwendig
                        - generic [ref=e283]:
                            - generic [ref=e284]: splash_shown
                            - generic [ref=e285]: Splash-Screen nur 1× zeigen
                            - generic [ref=e286]: Sitzung
                            - generic [ref=e287]: Notwendig
                        - generic [ref=e288]:
                            - generic [ref=e289]: hf_ach_*
                            - generic [ref=e290]: Achievement-Gamification-Fortschritt
                            - generic [ref=e291]: Dauerhaft
                            - generic [ref=e292]: Funktional
                        - generic [ref=e293]:
                            - generic [ref=e294]: NID / 1P_JAR
                            - generic [ref=e295]: Interaktive Karte auf der Besuch-Seite
                            - generic [ref=e296]: 6 Monate
                            - generic [ref=e297]: Funktional
                    - button "Cookie-Einstellungen jetzt anpassen" [ref=e298] [cursor=pointer]:
                        - img [ref=e299]
                        - text: Cookie-Einstellungen jetzt anpassen
                - generic [ref=e306]:
                    - heading "AGB" [level=2] [ref=e307]:
                        - img [ref=e308]
                        - text: AGB
                    - generic [ref=e314]:
                        - heading "Das Wichtigste in Kürze" [level=3] [ref=e315]:
                            - img [ref=e316]
                            - text: Das Wichtigste in Kürze
                        - generic [ref=e320]:
                            - generic [ref=e321]:
                                - img [ref=e322]
                                - generic [ref=e325]: Vorbestellung ist kostenlos & unverbindlich
                            - generic [ref=e326]:
                                - img [ref=e327]
                                - generic [ref=e330]: Zahlung erfolgt vor Ort im Laden
                            - generic [ref=e331]:
                                - img [ref=e332]
                                - generic [ref=e335]: Stornierung bis 30 Min vor Abholung möglich
                            - generic [ref=e336]:
                                - img [ref=e337]
                                - generic [ref=e340]: Nicht abgeholte Bestellungen werden nach 30 Min aufgelöst
                    - button "§ 1 Geltungsbereich" [ref=e342] [cursor=pointer]:
                        - img [ref=e344]
                        - generic [ref=e350]:
                            - text: § 1
                            - generic [ref=e351]: Geltungsbereich
                        - img [ref=e353]
                    - button "§ 2 Vertragsschluss" [ref=e356] [cursor=pointer]:
                        - img [ref=e358]
                        - generic [ref=e364]:
                            - text: § 2
                            - generic [ref=e365]: Vertragsschluss
                        - img [ref=e367]
                    - button "§ 3 Preise & Bezahlung" [ref=e370] [cursor=pointer]:
                        - img [ref=e372]
                        - generic [ref=e378]:
                            - text: § 3
                            - generic [ref=e379]: Preise & Bezahlung
                        - img [ref=e381]
                    - button "§ 4 Abholung & Stornierung" [ref=e384] [cursor=pointer]:
                        - img [ref=e386]
                        - generic [ref=e392]:
                            - text: § 4
                            - generic [ref=e393]: Abholung & Stornierung
                        - img [ref=e395]
                    - button "§ 5 Haftung" [ref=e398] [cursor=pointer]:
                        - img [ref=e400]
                        - generic [ref=e406]:
                            - text: § 5
                            - generic [ref=e407]: Haftung
                        - img [ref=e409]
                - generic [ref=e411]: "Stand: Mai 2026 · Diese Seite dient der Information und ersetzt keine Rechtsberatung."
    - contentinfo [ref=e412]:
        - img [ref=e415]
        - generic [ref=e417]:
            - generic [ref=e418]:
                - generic [ref=e419]:
                    - link "Startseite" [ref=e420] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e422]
                    - paragraph [ref=e423]: Dessertbar & Café
                    - generic [ref=e426]:
                        - generic [ref=e427]:
                            - img [ref=e428]
                            - generic [ref=e431]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e432]:
                            - img [ref=e433]
                            - link "06441 7890426" [ref=e435] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e437] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e438]
                        - text: Instagram
                - generic [ref=e441]:
                    - heading "Hey Fede!" [level=3] [ref=e442]
                    - navigation "Footer Navigation" [ref=e443]:
                        - link "Startseite" [ref=e444] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e445] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e446] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e447] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e448]
                    - navigation "SEO Navigation" [ref=e449]:
                        - link "Bubble Waffles" [ref=e450] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e451] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e452] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e453] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e454] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e455]:
                    - heading "Öffnungszeiten" [level=3] [ref=e456]
                    - generic [ref=e459]:
                        - generic [ref=e460]:
                            - generic [ref=e462]: Montag
                            - generic [ref=e464]: Geschlossen
                        - generic [ref=e465]:
                            - generic [ref=e467]: Dienstag
                            - generic [ref=e469]: Geschlossen
                        - generic [ref=e470]:
                            - generic [ref=e473]: Mittwoch
                            - generic [ref=e474]:
                                - generic [ref=e475]: 12:00 – 19:00 Uhr
                                - generic [ref=e476]: Heute
                        - generic [ref=e477]:
                            - generic [ref=e479]: Donnerstag
                            - generic [ref=e481]: 12:00 – 19:00 Uhr
                        - generic [ref=e482]:
                            - generic [ref=e484]: Freitag
                            - generic [ref=e486]: 12:00 – 19:00 Uhr
                        - generic [ref=e487]:
                            - generic [ref=e489]: Samstag
                            - generic [ref=e491]: 12:00 – 19:00 Uhr
                        - generic [ref=e492]:
                            - generic [ref=e494]: Sonntag
                            - generic [ref=e496]: 13:00 – 19:00 Uhr
                    - generic [ref=e497]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e498]:
                    - heading "Stay Sweet" [level=3] [ref=e499]
                    - paragraph [ref=e500]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e502]:
                        - textbox "Bleib hungrig..." [ref=e503]
                        - button "Abonnieren" [ref=e505]:
                            - generic [ref=e506]: Abonnieren
            - generic [ref=e507]:
                - generic [ref=e508]: Frisch
                - generic [ref=e509]: ·
                - generic [ref=e510]: Selbstgemacht
                - generic [ref=e511]: ·
                - generic [ref=e512]: Mit Liebe
            - generic [ref=e513]:
                - img [ref=e514]
                - img [ref=e516]
                - img [ref=e518]
                - img [ref=e520]
                - img [ref=e522]
            - generic [ref=e524]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e525]
                - paragraph [ref=e526]:
                    - generic [ref=e527]: Hessen
                    - generic [ref=e528]: ›
                    - generic [ref=e529]: Lahn-Dill-Kreis
                    - generic [ref=e530]: ›
                    - generic [ref=e531]: Wetzlar
                    - generic [ref=e532]: ›
                    - generic [ref=e533]: Langgasse
            - generic [ref=e534]:
                - heading "Besuche uns auch auf" [level=3] [ref=e535]
                - generic [ref=e536]:
                    - link "G Google" [ref=e537] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e538]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e539] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e540]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e541] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e542]: yelp
            - img "Made with Love in Wetzlar" [ref=e545]
            - generic [ref=e546]:
                - paragraph [ref=e547]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e548]:
                    - link "Impressum" [ref=e549] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e550] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e551] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e552]
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
