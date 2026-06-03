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
                - generic [ref=e42]:
                    - generic [ref=e43]:
                        - img [ref=e44]
                        - generic [ref=e46]: DSGVO · TDDDG · DDG konform
                    - heading "Rechtliches" [level=1] [ref=e47]
                    - paragraph [ref=e48]: Transparenz & Vertrauen bei Hey Fede!
                - navigation [ref=e49]:
                    - link "Impressum" [ref=e50]:
                        - /url: "#impressum"
                        - img [ref=e51]
                        - text: Impressum
                    - link "Datenschutz" [ref=e55]:
                        - /url: "#datenschutz"
                        - img [ref=e56]
                        - text: Datenschutz
                    - link "Cookies" [ref=e58]:
                        - /url: "#cookies"
                        - img [ref=e59]
                        - text: Cookies
                    - link "AGB" [ref=e61]:
                        - /url: "#agb"
                        - img [ref=e62]
                        - text: AGB
            - generic [ref=e65]:
                - generic [ref=e66]:
                    - heading "Impressum" [level=2] [ref=e67]:
                        - img [ref=e68]
                        - text: Impressum
                    - generic [ref=e72]:
                        - generic [ref=e73]:
                            - generic [ref=e74]:
                                - img [ref=e75]
                                - heading "Anbieter" [level=3] [ref=e79]
                            - paragraph [ref=e80]:
                                - text: Hey Fede! Dessertbar & Café
                                - text: "Inhaberin: Federica Rossi"
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e81]:
                            - generic [ref=e82]:
                                - img [ref=e83]
                                - heading "Kontakt" [level=3] [ref=e85]
                            - paragraph [ref=e86]:
                                - text: "Tel: 06441 7890426"
                                - text: "WhatsApp: 0176 25026991"
                                - text: "E-Mail: hallo@hey-fede.de"
                        - generic [ref=e87]:
                            - generic [ref=e88]:
                                - img [ref=e89]
                                - heading "Steuernummer" [level=3] [ref=e92]
                            - paragraph [ref=e93]:
                                - text: "USt-IdNr. gem. § 27a UStG:"
                                - generic [ref=e94]: "[HIER DEINE USt-ID EINTRAGEN]"
                        - generic [ref=e95]:
                            - generic [ref=e96]:
                                - img [ref=e97]
                                - heading "§ 18 MStV" [level=3] [ref=e99]
                            - paragraph [ref=e100]:
                                - text: "Verantwortlich für den Inhalt:"
                                - text: Federica Rossi
                                - text: Langgasse 68, 35576 Wetzlar
                    - generic [ref=e101]:
                        - strong [ref=e102]: "EU-Streitschlichtung:"
                        - text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:"
                        - link "ec.europa.eu/consumers/odr" [ref=e103]:
                            - /url: https://ec.europa.eu/consumers/odr
                            - text: ec.europa.eu/consumers/odr
                            - img [ref=e104]
                        - text: . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                - generic [ref=e108]:
                    - heading "Datenschutzerklärung" [level=2] [ref=e109]:
                        - img [ref=e110]
                        - text: Datenschutzerklärung
                    - generic [ref=e112]:
                        - button "01 Verantwortlicher" [expanded] [ref=e113] [cursor=pointer]:
                            - img [ref=e115]
                            - generic [ref=e117]:
                                - text: "01"
                                - generic [ref=e118]: Verantwortlicher
                            - img [ref=e120]
                        - paragraph [ref=e124]:
                            - text: Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café
                            - text: Langgasse 68, 35576 Wetzlar
                            - text: "E-Mail: datenschutz@hey-fede.de"
                    - button "02 Erhobene Daten" [ref=e126] [cursor=pointer]:
                        - img [ref=e128]
                        - generic [ref=e132]:
                            - text: "02"
                            - generic [ref=e133]: Erhobene Daten
                        - img [ref=e135]
                    - button "03 Rechtsgrundlagen" [ref=e138] [cursor=pointer]:
                        - img [ref=e140]
                        - generic [ref=e144]:
                            - text: "03"
                            - generic [ref=e145]: Rechtsgrundlagen
                        - img [ref=e147]
                    - button "04 Empfänger & Auftragsverarbeiter" [ref=e150] [cursor=pointer]:
                        - img [ref=e152]
                        - generic [ref=e155]:
                            - text: "04"
                            - generic [ref=e156]: Empfänger & Auftragsverarbeiter
                        - img [ref=e158]
                    - button "05 Drittlandtransfer (USA)" [ref=e161] [cursor=pointer]:
                        - img [ref=e163]
                        - generic [ref=e166]:
                            - text: "05"
                            - generic [ref=e167]: Drittlandtransfer (USA)
                        - img [ref=e169]
                    - button "06 Speicherdauer" [ref=e172] [cursor=pointer]:
                        - img [ref=e174]
                        - generic [ref=e177]:
                            - text: "06"
                            - generic [ref=e178]: Speicherdauer
                        - img [ref=e180]
                    - button "07 Deine Rechte (Betroffenenrechte)" [ref=e183] [cursor=pointer]:
                        - img [ref=e185]
                        - generic [ref=e188]:
                            - text: "07"
                            - generic [ref=e189]: Deine Rechte (Betroffenenrechte)
                        - img [ref=e191]
                    - button "08 Hosting & CDN" [ref=e194] [cursor=pointer]:
                        - img [ref=e196]
                        - generic [ref=e199]:
                            - text: "08"
                            - generic [ref=e200]: Hosting & CDN
                        - img [ref=e202]
                    - button "09 Firebase (Google)" [ref=e205] [cursor=pointer]:
                        - img [ref=e207]
                        - generic [ref=e211]:
                            - text: "09"
                            - generic [ref=e212]: Firebase (Google)
                        - img [ref=e214]
                    - button "10 Kontaktformular" [ref=e217] [cursor=pointer]:
                        - img [ref=e219]
                        - generic [ref=e222]:
                            - text: "10"
                            - generic [ref=e223]: Kontaktformular
                        - img [ref=e225]
                    - button "11 Beschwerderecht" [ref=e228] [cursor=pointer]:
                        - img [ref=e230]
                        - generic [ref=e232]:
                            - text: "11"
                            - generic [ref=e233]: Beschwerderecht
                        - img [ref=e235]
                - generic [ref=e237]:
                    - heading "Cookies & Tracking" [level=2] [ref=e238]:
                        - img [ref=e239]
                        - text: Cookies & Tracking
                    - paragraph [ref=e241]: Unsere Website verwendet Cookies. Die Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen Cookies holen wir deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).
                    - generic [ref=e242]:
                        - generic [ref=e243]:
                            - generic [ref=e244]: cc_cookie
                            - generic [ref=e245]: Cookie-Einstellungen speichern
                            - generic [ref=e246]: 6 Monate
                            - generic [ref=e247]: Notwendig
                        - generic [ref=e248]:
                            - generic [ref=e249]: __session
                            - generic [ref=e250]: Login-Session-Verwaltung
                            - generic [ref=e251]: Sitzung
                            - generic [ref=e252]: Notwendig
                        - generic [ref=e253]:
                            - generic [ref=e254]: splash_shown
                            - generic [ref=e255]: Splash-Screen nur 1× zeigen
                            - generic [ref=e256]: Sitzung
                            - generic [ref=e257]: Notwendig
                        - generic [ref=e258]:
                            - generic [ref=e259]: hf_ach_*
                            - generic [ref=e260]: Achievement-Gamification-Fortschritt
                            - generic [ref=e261]: Dauerhaft
                            - generic [ref=e262]: Funktional
                        - generic [ref=e263]:
                            - generic [ref=e264]: NID / 1P_JAR
                            - generic [ref=e265]: Interaktive Karte auf der Besuch-Seite
                            - generic [ref=e266]: 6 Monate
                            - generic [ref=e267]: Funktional
                    - button "Cookie-Einstellungen jetzt anpassen" [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                        - text: Cookie-Einstellungen jetzt anpassen
                - generic [ref=e271]:
                    - heading "AGB" [level=2] [ref=e272]:
                        - img [ref=e273]
                        - text: AGB
                    - generic [ref=e276]:
                        - heading "Das Wichtigste in Kürze" [level=3] [ref=e277]:
                            - img [ref=e278]
                            - text: Das Wichtigste in Kürze
                        - generic [ref=e280]:
                            - generic [ref=e281]:
                                - img [ref=e282]
                                - generic [ref=e285]: Vorbestellung ist kostenlos & unverbindlich
                            - generic [ref=e286]:
                                - img [ref=e287]
                                - generic [ref=e290]: Zahlung erfolgt vor Ort im Laden
                            - generic [ref=e291]:
                                - img [ref=e292]
                                - generic [ref=e295]: Stornierung bis 30 Min vor Abholung möglich
                            - generic [ref=e296]:
                                - img [ref=e297]
                                - generic [ref=e300]: Nicht abgeholte Bestellungen werden nach 30 Min aufgelöst
                    - button "§ 1 Geltungsbereich" [ref=e302] [cursor=pointer]:
                        - img [ref=e304]
                        - generic [ref=e308]:
                            - text: § 1
                            - generic [ref=e309]: Geltungsbereich
                        - img [ref=e311]
                    - button "§ 2 Vertragsschluss" [ref=e314] [cursor=pointer]:
                        - img [ref=e316]
                        - generic [ref=e320]:
                            - text: § 2
                            - generic [ref=e321]: Vertragsschluss
                        - img [ref=e323]
                    - button "§ 3 Preise & Bezahlung" [ref=e326] [cursor=pointer]:
                        - img [ref=e328]
                        - generic [ref=e332]:
                            - text: § 3
                            - generic [ref=e333]: Preise & Bezahlung
                        - img [ref=e335]
                    - button "§ 4 Abholung & Stornierung" [ref=e338] [cursor=pointer]:
                        - img [ref=e340]
                        - generic [ref=e344]:
                            - text: § 4
                            - generic [ref=e345]: Abholung & Stornierung
                        - img [ref=e347]
                    - button "§ 5 Haftung" [ref=e350] [cursor=pointer]:
                        - img [ref=e352]
                        - generic [ref=e356]:
                            - text: § 5
                            - generic [ref=e357]: Haftung
                        - img [ref=e359]
                - generic [ref=e361]: "Stand: Mai 2026 · Diese Seite dient der Information und ersetzt keine Rechtsberatung."
    - contentinfo [ref=e362]:
        - img [ref=e365]
        - generic [ref=e367]:
            - generic [ref=e368]:
                - generic [ref=e369]:
                    - link "Startseite" [ref=e370]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e372] [cursor=pointer]
                    - paragraph [ref=e373]: Dessertbar & Café
                    - generic [ref=e376]:
                        - generic [ref=e377]:
                            - img [ref=e378]
                            - generic [ref=e381]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e382]:
                            - img [ref=e383]
                            - link "06441 7890426" [ref=e385]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e387]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e388]
                        - text: Instagram
                - generic [ref=e391]:
                    - heading "Hey Fede!" [level=3] [ref=e392]
                    - navigation "Footer Navigation" [ref=e393]:
                        - link "Startseite" [ref=e394]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e395]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e396]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e397]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e398]
                    - navigation "SEO Navigation" [ref=e399]:
                        - link "Bubble Waffles" [ref=e400]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e401]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e402]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e403]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e404]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e405]:
                    - heading "Öffnungszeiten" [level=3] [ref=e406]
                    - generic [ref=e409]:
                        - generic [ref=e410]:
                            - generic [ref=e412]: Montag
                            - generic [ref=e414]: Geschlossen
                        - generic [ref=e415]:
                            - generic [ref=e417]: Dienstag
                            - generic [ref=e419]: Geschlossen
                        - generic [ref=e420]:
                            - generic [ref=e423]: Mittwoch
                            - generic [ref=e424]:
                                - generic [ref=e425]: 12:00 – 19:00 Uhr
                                - generic [ref=e426]: Heute
                        - generic [ref=e427]:
                            - generic [ref=e429]: Donnerstag
                            - generic [ref=e431]: 12:00 – 19:00 Uhr
                        - generic [ref=e432]:
                            - generic [ref=e434]: Freitag
                            - generic [ref=e436]: 12:00 – 19:00 Uhr
                        - generic [ref=e437]:
                            - generic [ref=e439]: Samstag
                            - generic [ref=e441]: 12:00 – 19:00 Uhr
                        - generic [ref=e442]:
                            - generic [ref=e444]: Sonntag
                            - generic [ref=e446]: 13:00 – 19:00 Uhr
                    - generic [ref=e447]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e448]:
                    - heading "Stay Sweet" [level=3] [ref=e449]
                    - paragraph [ref=e450]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e452]:
                        - textbox "Bleib hungrig..." [ref=e453]
                        - button "Abonnieren" [ref=e455]:
                            - generic [ref=e456]: Abonnieren
            - generic [ref=e457]:
                - generic [ref=e458]: Frisch
                - generic [ref=e459]: ·
                - generic [ref=e460]: Selbstgemacht
                - generic [ref=e461]: ·
                - generic [ref=e462]: Mit Liebe
            - generic [ref=e463]:
                - img [ref=e464]
                - img [ref=e466]
                - img [ref=e468]
                - img [ref=e470]
                - img [ref=e472]
            - generic [ref=e474]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e475]
                - paragraph [ref=e476]:
                    - generic [ref=e477]: Hessen
                    - generic [ref=e478]: ›
                    - generic [ref=e479]: Lahn-Dill-Kreis
                    - generic [ref=e480]: ›
                    - generic [ref=e481]: Wetzlar
                    - generic [ref=e482]: ›
                    - generic [ref=e483]: Langgasse
            - generic [ref=e484]:
                - heading "Besuche uns auch auf" [level=3] [ref=e485]
                - generic [ref=e486]:
                    - link "G Google" [ref=e487]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e488]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e489]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e490]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e491]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e492]: yelp
            - img "Made with Love in Wetzlar" [ref=e495]
            - generic [ref=e496]:
                - paragraph [ref=e497]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e498]:
                    - link "Impressum" [ref=e499]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e500]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e501]:
                        - /url: /legal#agb
    - alert [ref=e502]
    - iframe [ref=e503]:
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
