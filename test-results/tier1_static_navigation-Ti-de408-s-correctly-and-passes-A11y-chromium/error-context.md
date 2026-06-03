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
+ Received  + 344

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
                - generic [ref=e36]:
                    - generic [ref=e37]:
                        - img [ref=e38]
                        - generic [ref=e40]: DSGVO · TDDDG · DDG konform
                    - heading "Rechtliches" [level=1] [ref=e41]
                    - paragraph [ref=e42]: Transparenz & Vertrauen bei Hey Fede!
                - navigation [ref=e43]:
                    - link "Impressum" [ref=e44] [cursor=pointer]:
                        - /url: "#impressum"
                        - img [ref=e45]
                        - text: Impressum
                    - link "Datenschutz" [ref=e49] [cursor=pointer]:
                        - /url: "#datenschutz"
                        - img [ref=e50]
                        - text: Datenschutz
                    - link "Cookies" [ref=e52] [cursor=pointer]:
                        - /url: "#cookies"
                        - img [ref=e53]
                        - text: Cookies
                    - link "AGB" [ref=e55] [cursor=pointer]:
                        - /url: "#agb"
                        - img [ref=e56]
                        - text: AGB
            - generic [ref=e59]:
                - generic [ref=e60]:
                    - heading "Impressum" [level=2] [ref=e61]:
                        - img [ref=e62]
                        - text: Impressum
                    - generic [ref=e66]:
                        - generic [ref=e67]:
                            - generic [ref=e68]:
                                - img [ref=e69]
                                - heading "Anbieter" [level=3] [ref=e73]
                            - paragraph [ref=e74]:
                                - text: Hey Fede! Dessertbar & Café
                                - text: "Inhaberin: Federica Rossi"
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e75]:
                            - generic [ref=e76]:
                                - img [ref=e77]
                                - heading "Kontakt" [level=3] [ref=e79]
                            - paragraph [ref=e80]:
                                - text: "Tel: 06441 7890426"
                                - text: "WhatsApp: 0176 25026991"
                                - text: "E-Mail: hallo@hey-fede.de"
                        - generic [ref=e81]:
                            - generic [ref=e82]:
                                - img [ref=e83]
                                - heading "Steuernummer" [level=3] [ref=e86]
                            - paragraph [ref=e87]:
                                - text: "USt-IdNr. gem. § 27a UStG:"
                                - generic [ref=e88]: "[HIER DEINE USt-ID EINTRAGEN]"
                        - generic [ref=e89]:
                            - generic [ref=e90]:
                                - img [ref=e91]
                                - heading "§ 18 MStV" [level=3] [ref=e93]
                            - paragraph [ref=e94]:
                                - text: "Verantwortlich für den Inhalt:"
                                - text: Federica Rossi
                                - text: Langgasse 68, 35576 Wetzlar
                    - generic [ref=e95]:
                        - strong [ref=e96]: "EU-Streitschlichtung:"
                        - text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:"
                        - link "ec.europa.eu/consumers/odr" [ref=e97] [cursor=pointer]:
                            - /url: https://ec.europa.eu/consumers/odr
                            - text: ec.europa.eu/consumers/odr
                            - img [ref=e98]
                        - text: . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                - generic [ref=e102]:
                    - heading "Datenschutzerklärung" [level=2] [ref=e103]:
                        - img [ref=e104]
                        - text: Datenschutzerklärung
                    - generic [ref=e106]:
                        - button "01 Verantwortlicher" [expanded] [ref=e107] [cursor=pointer]:
                            - img [ref=e109]
                            - generic [ref=e111]:
                                - text: "01"
                                - generic [ref=e112]: Verantwortlicher
                            - img [ref=e114]
                        - paragraph [ref=e118]:
                            - text: Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café
                            - text: Langgasse 68, 35576 Wetzlar
                            - text: "E-Mail: datenschutz@hey-fede.de"
                    - button "02 Erhobene Daten" [ref=e120] [cursor=pointer]:
                        - img [ref=e122]
                        - generic [ref=e126]:
                            - text: "02"
                            - generic [ref=e127]: Erhobene Daten
                        - img [ref=e129]
                    - button "03 Rechtsgrundlagen" [ref=e132] [cursor=pointer]:
                        - img [ref=e134]
                        - generic [ref=e138]:
                            - text: "03"
                            - generic [ref=e139]: Rechtsgrundlagen
                        - img [ref=e141]
                    - button "04 Empfänger & Auftragsverarbeiter" [ref=e144] [cursor=pointer]:
                        - img [ref=e146]
                        - generic [ref=e149]:
                            - text: "04"
                            - generic [ref=e150]: Empfänger & Auftragsverarbeiter
                        - img [ref=e152]
                    - button "05 Drittlandtransfer (USA)" [ref=e155] [cursor=pointer]:
                        - img [ref=e157]
                        - generic [ref=e160]:
                            - text: "05"
                            - generic [ref=e161]: Drittlandtransfer (USA)
                        - img [ref=e163]
                    - button "06 Speicherdauer" [ref=e166] [cursor=pointer]:
                        - img [ref=e168]
                        - generic [ref=e171]:
                            - text: "06"
                            - generic [ref=e172]: Speicherdauer
                        - img [ref=e174]
                    - button "07 Deine Rechte (Betroffenenrechte)" [ref=e177] [cursor=pointer]:
                        - img [ref=e179]
                        - generic [ref=e182]:
                            - text: "07"
                            - generic [ref=e183]: Deine Rechte (Betroffenenrechte)
                        - img [ref=e185]
                    - button "08 Hosting & CDN" [ref=e188] [cursor=pointer]:
                        - img [ref=e190]
                        - generic [ref=e193]:
                            - text: "08"
                            - generic [ref=e194]: Hosting & CDN
                        - img [ref=e196]
                    - button "09 Firebase (Google)" [ref=e199] [cursor=pointer]:
                        - img [ref=e201]
                        - generic [ref=e205]:
                            - text: "09"
                            - generic [ref=e206]: Firebase (Google)
                        - img [ref=e208]
                    - button "10 Kontaktformular" [ref=e211] [cursor=pointer]:
                        - img [ref=e213]
                        - generic [ref=e216]:
                            - text: "10"
                            - generic [ref=e217]: Kontaktformular
                        - img [ref=e219]
                    - button "11 Beschwerderecht" [ref=e222] [cursor=pointer]:
                        - img [ref=e224]
                        - generic [ref=e226]:
                            - text: "11"
                            - generic [ref=e227]: Beschwerderecht
                        - img [ref=e229]
                - generic [ref=e231]:
                    - heading "Cookies & Tracking" [level=2] [ref=e232]:
                        - img [ref=e233]
                        - text: Cookies & Tracking
                    - paragraph [ref=e235]: Unsere Website verwendet Cookies. Die Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen Cookies holen wir deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).
                    - generic [ref=e236]:
                        - generic [ref=e237]:
                            - generic [ref=e238]: cc_cookie
                            - generic [ref=e239]: Cookie-Einstellungen speichern
                            - generic [ref=e240]: 6 Monate
                            - generic [ref=e241]: Notwendig
                        - generic [ref=e242]:
                            - generic [ref=e243]: __session
                            - generic [ref=e244]: Login-Session-Verwaltung
                            - generic [ref=e245]: Sitzung
                            - generic [ref=e246]: Notwendig
                        - generic [ref=e247]:
                            - generic [ref=e248]: splash_shown
                            - generic [ref=e249]: Splash-Screen nur 1× zeigen
                            - generic [ref=e250]: Sitzung
                            - generic [ref=e251]: Notwendig
                        - generic [ref=e252]:
                            - generic [ref=e253]: hf_ach_*
                            - generic [ref=e254]: Achievement-Gamification-Fortschritt
                            - generic [ref=e255]: Dauerhaft
                            - generic [ref=e256]: Funktional
                        - generic [ref=e257]:
                            - generic [ref=e258]: NID / 1P_JAR
                            - generic [ref=e259]: Interaktive Karte auf der Besuch-Seite
                            - generic [ref=e260]: 6 Monate
                            - generic [ref=e261]: Funktional
                    - button "Cookie-Einstellungen jetzt anpassen" [ref=e262] [cursor=pointer]:
                        - img [ref=e263]
                        - text: Cookie-Einstellungen jetzt anpassen
                - generic [ref=e265]:
                    - heading "AGB" [level=2] [ref=e266]:
                        - img [ref=e267]
                        - text: AGB
                    - generic [ref=e270]:
                        - heading "Das Wichtigste in Kürze" [level=3] [ref=e271]:
                            - img [ref=e272]
                            - text: Das Wichtigste in Kürze
                        - generic [ref=e274]:
                            - generic [ref=e275]:
                                - img [ref=e276]
                                - generic [ref=e279]: Vorbestellung ist kostenlos & unverbindlich
                            - generic [ref=e280]:
                                - img [ref=e281]
                                - generic [ref=e284]: Zahlung erfolgt vor Ort im Laden
                            - generic [ref=e285]:
                                - img [ref=e286]
                                - generic [ref=e289]: Stornierung bis 30 Min vor Abholung möglich
                            - generic [ref=e290]:
                                - img [ref=e291]
                                - generic [ref=e294]: Nicht abgeholte Bestellungen werden nach 30 Min aufgelöst
                    - button "§ 1 Geltungsbereich" [ref=e296] [cursor=pointer]:
                        - img [ref=e298]
                        - generic [ref=e302]:
                            - text: § 1
                            - generic [ref=e303]: Geltungsbereich
                        - img [ref=e305]
                    - button "§ 2 Vertragsschluss" [ref=e308] [cursor=pointer]:
                        - img [ref=e310]
                        - generic [ref=e314]:
                            - text: § 2
                            - generic [ref=e315]: Vertragsschluss
                        - img [ref=e317]
                    - button "§ 3 Preise & Bezahlung" [ref=e320] [cursor=pointer]:
                        - img [ref=e322]
                        - generic [ref=e326]:
                            - text: § 3
                            - generic [ref=e327]: Preise & Bezahlung
                        - img [ref=e329]
                    - button "§ 4 Abholung & Stornierung" [ref=e332] [cursor=pointer]:
                        - img [ref=e334]
                        - generic [ref=e338]:
                            - text: § 4
                            - generic [ref=e339]: Abholung & Stornierung
                        - img [ref=e341]
                    - button "§ 5 Haftung" [ref=e344] [cursor=pointer]:
                        - img [ref=e346]
                        - generic [ref=e350]:
                            - text: § 5
                            - generic [ref=e351]: Haftung
                        - img [ref=e353]
                - generic [ref=e355]: "Stand: Mai 2026 · Diese Seite dient der Information und ersetzt keine Rechtsberatung."
    - contentinfo [ref=e356]:
        - img [ref=e359]
        - generic [ref=e361]:
            - generic [ref=e362]:
                - generic [ref=e363]:
                    - link "Startseite" [ref=e364] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e366]
                    - paragraph [ref=e367]: Dessertbar & Café
                    - generic [ref=e370]:
                        - generic [ref=e371]:
                            - img [ref=e372]
                            - generic [ref=e375]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e376]:
                            - img [ref=e377]
                            - link "06441 7890426" [ref=e379] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e381] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e382]
                        - text: Instagram
                - generic [ref=e385]:
                    - heading "Hey Fede!" [level=3] [ref=e386]
                    - navigation "Footer Navigation" [ref=e387]:
                        - link "Startseite" [ref=e388] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e389] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e390] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e391] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e392]
                    - navigation "SEO Navigation" [ref=e393]:
                        - link "Bubble Waffles" [ref=e394] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e395] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e396] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e397] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e398] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e399]:
                    - heading "Öffnungszeiten" [level=3] [ref=e400]
                    - generic [ref=e403]:
                        - generic [ref=e404]:
                            - generic [ref=e406]: Montag
                            - generic [ref=e408]: Geschlossen
                        - generic [ref=e409]:
                            - generic [ref=e411]: Dienstag
                            - generic [ref=e413]: Geschlossen
                        - generic [ref=e414]:
                            - generic [ref=e417]: Mittwoch
                            - generic [ref=e418]:
                                - generic [ref=e419]: 12:00 – 19:00 Uhr
                                - generic [ref=e420]: Heute
                        - generic [ref=e421]:
                            - generic [ref=e423]: Donnerstag
                            - generic [ref=e425]: 12:00 – 19:00 Uhr
                        - generic [ref=e426]:
                            - generic [ref=e428]: Freitag
                            - generic [ref=e430]: 12:00 – 19:00 Uhr
                        - generic [ref=e431]:
                            - generic [ref=e433]: Samstag
                            - generic [ref=e435]: 12:00 – 19:00 Uhr
                        - generic [ref=e436]:
                            - generic [ref=e438]: Sonntag
                            - generic [ref=e440]: 13:00 – 19:00 Uhr
                    - generic [ref=e441]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e442]:
                    - heading "Stay Sweet" [level=3] [ref=e443]
                    - paragraph [ref=e444]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e446]:
                        - textbox "Bleib hungrig..." [ref=e447]
                        - button "Abonnieren" [ref=e449]:
                            - generic [ref=e450]: Abonnieren
            - generic [ref=e451]:
                - generic [ref=e452]: Frisch
                - generic [ref=e453]: ·
                - generic [ref=e454]: Selbstgemacht
                - generic [ref=e455]: ·
                - generic [ref=e456]: Mit Liebe
            - generic [ref=e457]:
                - img [ref=e458]
                - img [ref=e460]
                - img [ref=e462]
                - img [ref=e464]
                - img [ref=e466]
            - generic [ref=e468]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e469]
                - paragraph [ref=e470]:
                    - generic [ref=e471]: Hessen
                    - generic [ref=e472]: ›
                    - generic [ref=e473]: Lahn-Dill-Kreis
                    - generic [ref=e474]: ›
                    - generic [ref=e475]: Wetzlar
                    - generic [ref=e476]: ›
                    - generic [ref=e477]: Langgasse
            - generic [ref=e478]:
                - heading "Besuche uns auch auf" [level=3] [ref=e479]
                - generic [ref=e480]:
                    - link "G Google" [ref=e481] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e482]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e483] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e484]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e485] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e486]: yelp
            - img "Made with Love in Wetzlar" [ref=e489]
            - generic [ref=e490]:
                - paragraph [ref=e491]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e492]:
                    - link "Impressum" [ref=e493] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e494] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e495] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e496]
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
