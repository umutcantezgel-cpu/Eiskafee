# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Info & Legal Page: /reservierung loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:82:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1592

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
+         "html": "<button class=\"w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".w-8.h-8.shadow-sm:nth-child(1)",
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
+         "html": "<button class=\"w-8 h-8 rounded-full bg-[#b34832] flex items-center justify-center shadow-sm\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".w-8.h-8.shadow-sm:nth-child(2)",
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
+               "bgColor": "#f5efe8",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ecd8cf",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8]\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-black text-[#b34832] tracking-[1.4px] uppercase mb-3\">Anzahl Gäste</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .tracking-\\[1\\.4px\\].uppercase.mb-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl p-4 flex items-center justify-between\">",
+                 "target": Array [
+                   ".p-4.rounded-2xl.justify-between",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-calistoga text-xl text-[#2d1f19]\">4<!-- --> Personen</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-xl.font-calistoga.text-\\[\\#2d1f19\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ecd8cf",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8]\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-black text-[#b34832] tracking-[1.4px] uppercase mb-3\">Datum</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(2) > .tracking-\\[1\\.4px\\].uppercase.mb-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.17,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e5dfd8",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold opacity-60\">Heute</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(1) > .opacity-60.text-\\[11px\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-xl mt-1 leading-none\">24</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(1) > .leading-none.mt-1.text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e8e2db",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[10px] font-bold mt-1 opacity-50\">JAN</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(1) > .opacity-50.text-\\[10px\\].mt-1",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ecd8cf",
+               "contrastRatio": 1.18,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f5ede7",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.18 (foreground color: #f5ede7, background color: #ecd8cf, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-[#b34832] text-white border-[#b34832]\">",
+                 "target": Array [
+                   ".border-\\[\\#b34832\\].w-\\[70px\\].py-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.18 (foreground color: #f5ede7, background color: #ecd8cf, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold opacity-85\">Fr</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".opacity-85",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ecd8cf",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f6f1eb",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #f6f1eb, background color: #ecd8cf, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-[#b34832] text-white border-[#b34832]\">",
+                 "target": Array [
+                   ".border-\\[\\#b34832\\].w-\\[70px\\].py-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #f6f1eb, background color: #ecd8cf, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-xl mt-1 leading-none\">25</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-\\[\\#b34832\\].w-\\[70px\\].py-3 > .leading-none.mt-1.text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ecd8cf",
+               "contrastRatio": 1.17,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f4ece6",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.17 (foreground color: #f4ece6, background color: #ecd8cf, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-[#b34832] text-white border-[#b34832]\">",
+                 "target": Array [
+                   ".border-\\[\\#b34832\\].w-\\[70px\\].py-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.17 (foreground color: #f4ece6, background color: #ecd8cf, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[10px] font-bold mt-1 opacity-80\">JAN</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".opacity-80.text-\\[10px\\].mt-1",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.17,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e5dfd8",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold opacity-60\">Sa</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(3) > .opacity-60.text-\\[11px\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-xl mt-1 leading-none\">26</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(3) > .leading-none.mt-1.text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e8e2db",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[10px] font-bold mt-1 opacity-50\">JAN</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(3) > .opacity-50.text-\\[10px\\].mt-1",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.17,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e5dfd8",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold opacity-60\">So</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(4) > .opacity-60.text-\\[11px\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-xl mt-1 leading-none\">27</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(4) > .leading-none.mt-1.text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e8e2db",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[10px] font-bold mt-1 opacity-50\">JAN</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(4) > .opacity-50.text-\\[10px\\].mt-1",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.17,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e5dfd8",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.17 (foreground color: #e5dfd8, background color: #f6f1eb, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-bold opacity-60\">Mo</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(5) > .opacity-60.text-\\[11px\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-xl mt-1 leading-none\">28</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(5) > .leading-none.mt-1.text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e8e2db",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">",
+                 "target": Array [
+                   ".w-\\[70px\\].py-3.shrink-0:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #e8e2db, background color: #f6f1eb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[10px] font-bold mt-1 opacity-50\">JAN</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-\\[70px\\].py-3.shrink-0:nth-child(5) > .opacity-50.text-\\[10px\\].mt-1",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ecd8cf",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8]\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-black text-[#b34832] tracking-[1.4px] uppercase mb-3\">Uhrzeit · Fr 25.01</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(3) > .tracking-\\[1\\.4px\\].uppercase.mb-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">12:00</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">12:00</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">12:30</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">12:30</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">13:30</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">13:30</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">18:00</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(9)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">18:00</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(9)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">18:30</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(10)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">18:30</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(10)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">19:00</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(11)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">19:00</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(11)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">19:30</button>",
+                 "target": Array [
+                   ".border-transparent.rounded-xl.py-2\\.5:nth-child(12)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-transparent\">19:30</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-transparent.rounded-xl.py-2\\.5:nth-child(12)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ecd8cf",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8]\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-black text-[#b34832] tracking-[1.4px] uppercase mb-3\">Bereich (optional)</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(4) > .tracking-\\[1\\.4px\\].uppercase.mb-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#dad2cc",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f6f1eb",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #f6f1eb, background color: #dad2cc, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-2xl p-3 flex items-center gap-2.5 transition-colors bg-[#2d1f19] text-white\">",
+                 "target": Array [
+                   ".bg-\\[\\#2d1f19\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #f6f1eb, background color: #dad2cc, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-extrabold\">Innen · Lounge</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#2d1f19\\] > .text-xs.font-extrabold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-2xl p-3 flex items-center gap-2.5 transition-colors bg-white text-[#2d1f19]\">",
+                 "target": Array [
+                   ".gap-2\\.5.p-3.rounded-2xl:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-extrabold\">Innen · Fenster</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2\\.5.p-3.rounded-2xl:nth-child(2) > .text-xs.font-extrabold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-2xl p-3 flex items-center gap-2.5 transition-colors bg-white text-[#2d1f19]\">",
+                 "target": Array [
+                   ".gap-2\\.5.p-3.rounded-2xl:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-extrabold\">Kinderecke</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2\\.5.p-3.rounded-2xl:nth-child(3) > .text-xs.font-extrabold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"rounded-2xl p-3 flex items-center gap-2.5 transition-colors bg-white text-[#2d1f19]\">",
+                 "target": Array [
+                   ".gap-2\\.5.p-3.rounded-2xl:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs font-extrabold\">Bar-Tisch</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2\\.5.p-3.rounded-2xl:nth-child(4) > .text-xs.font-extrabold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ecd8cf",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8]\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.2 (foreground color: #ecd8cf, background color: #f5efe8, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"text-[11px] font-black text-[#b34832] tracking-[1.4px] uppercase mb-3\">Besonderer Anlass?</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(5) > .tracking-\\[1\\.4px\\].uppercase.mb-3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ecd8cf",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f6f1eb",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #f6f1eb, background color: #ecd8cf, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-[#b34832] text-white border-[#b34832]\">Geburtstag</button>",
+                 "target": Array [
+                   ".flex-wrap.gap-2.flex > .border-\\[\\#b34832\\].bg-\\[\\#b34832\\].text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #f6f1eb, background color: #ecd8cf, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-[#b34832] text-white border-[#b34832]\">Geburtstag</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-wrap.gap-2.flex > .border-\\[\\#b34832\\].bg-\\[\\#b34832\\].text-white",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">Date</button>",
+                 "target": Array [
+                   ".border-\\[\\#eedfcc\\].px-4.py-2:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">Date</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-\\[\\#eedfcc\\].px-4.py-2:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">Familientreffen</button>",
+                 "target": Array [
+                   ".border-\\[\\#eedfcc\\].px-4.py-2:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">Familientreffen</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-\\[\\#eedfcc\\].px-4.py-2:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f6f1eb",
+               "contrastRatio": 1.32,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dad2cc",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">Sonstiges</button>",
+                 "target": Array [
+                   ".border-\\[\\#eedfcc\\].px-4.py-2:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.32 (foreground color: #dad2cc, background color: #f6f1eb, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 bg-white text-[#2d1f19] border-[#eedfcc]\">Sonstiges</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-\\[\\#eedfcc\\].px-4.py-2:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#eedfcc",
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#b34832",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #b34832, background color: #eedfcc, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-xl p-3 mb-3 flex justify-between items-center text-xs\"><span class=\"font-bold text-[#5c3d35]\">Fr 25.01 · <!-- -->15:30<!-- --> · <!-- -->4<!-- --> Personen</span><span class=\"font-black text-[#b34832] text-[11px]\">BEARBEITEN</span></div>",
+                 "target": Array [
+                   ".bg-\\[\\#eedfcc\\].p-3.mb-3",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #b34832, background color: #eedfcc, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-black text-[#b34832] text-[11px]\">BEARBEITEN</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-\\[\\#eedfcc\\].p-3.mb-3 > .font-black.text-\\[\\#b34832\\].text-\\[11px\\]",
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
+                   ".p-\\[13px_19px\\].bg-\\[\\#b34832\\][itemprop=\"openingHoursSpecification\"]",
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
            - generic [ref=e35]:
                - heading "Tisch reservieren" [level=1] [ref=e36]
                - paragraph [ref=e37]: Plane deinen Besuch
            - generic [ref=e39]:
                - generic [ref=e40]:
                    - generic [ref=e41]: Anzahl Gäste
                    - generic [ref=e42]:
                        - generic [ref=e43]:
                            - img [ref=e44]
                            - generic [ref=e49]: 4 Personen
                        - generic [ref=e50]:
                            - button [ref=e51]:
                                - img [ref=e52]
                            - button [ref=e53]:
                                - img [ref=e54]
                - generic [ref=e55]:
                    - generic [ref=e56]: Datum
                    - generic [ref=e57]:
                        - button "Heute 24 JAN" [ref=e58]:
                            - generic [ref=e59]: Heute
                            - generic [ref=e60]: "24"
                            - generic [ref=e61]: JAN
                        - button "Fr 25 JAN" [ref=e62]:
                            - generic [ref=e63]: Fr
                            - generic [ref=e64]: "25"
                            - generic [ref=e65]: JAN
                        - button "Sa 26 JAN" [ref=e66]:
                            - generic [ref=e67]: Sa
                            - generic [ref=e68]: "26"
                            - generic [ref=e69]: JAN
                        - button "So 27 JAN" [ref=e70]:
                            - generic [ref=e71]: So
                            - generic [ref=e72]: "27"
                            - generic [ref=e73]: JAN
                        - button "Mo 28 JAN" [ref=e74]:
                            - generic [ref=e75]: Mo
                            - generic [ref=e76]: "28"
                            - generic [ref=e77]: JAN
                - generic [ref=e78]:
                    - generic [ref=e79]: Uhrzeit · Fr 25.01
                    - generic [ref=e80]:
                        - button "12:00" [ref=e81]
                        - button "12:30" [ref=e82]
                        - button "13:00" [disabled] [ref=e83]
                        - button "13:30" [ref=e84]
                        - button "15:00" [ref=e85]
                        - button "15:30" [ref=e86]
                        - button "17:00" [ref=e87]
                        - button "17:30" [ref=e88]
                        - button "18:00" [ref=e89]
                        - button "18:30" [ref=e90]
                        - button "19:00" [ref=e91]
                        - button "19:30" [ref=e92]
                - generic [ref=e93]:
                    - generic [ref=e94]: Bereich (optional)
                    - generic [ref=e95]:
                        - button "Innen · Lounge" [ref=e96]:
                            - img [ref=e97]
                            - generic [ref=e99]: Innen · Lounge
                        - button "Innen · Fenster" [ref=e100]:
                            - img [ref=e101]
                            - generic [ref=e104]: Innen · Fenster
                        - button "Kinderecke" [ref=e105]:
                            - img [ref=e106]
                            - generic [ref=e111]: Kinderecke
                        - button "Bar-Tisch" [ref=e112]:
                            - img [ref=e113]
                            - generic [ref=e115]: Bar-Tisch
                - generic [ref=e116]:
                    - generic [ref=e117]: Besonderer Anlass?
                    - generic [ref=e118]:
                        - button "Geburtstag" [ref=e119]
                        - button "Date" [ref=e120]
                        - button "Familientreffen" [ref=e121]
                        - button "Sonstiges" [ref=e122]
            - generic [ref=e124]:
                - generic [ref=e125]:
                    - generic [ref=e126]: Fr 25.01 · 15:30 · 4 Personen
                    - generic [ref=e127]: BEARBEITEN
                - button "Tisch reservieren" [ref=e128] [cursor=pointer]:
                    - generic [ref=e129]:
                        - img [ref=e130]
                        - text: Tisch reservieren
    - contentinfo [ref=e132]:
        - img [ref=e135]
        - generic [ref=e137]:
            - generic [ref=e138]:
                - generic [ref=e139]:
                    - link "Startseite" [ref=e140] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e142]
                    - paragraph [ref=e143]: Dessertbar & Café
                    - generic [ref=e146]:
                        - generic [ref=e147]:
                            - img [ref=e148]
                            - generic [ref=e151]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e152]:
                            - img [ref=e153]
                            - link "06441 7890426" [ref=e155] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e157] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e158]
                        - text: Instagram
                - generic [ref=e161]:
                    - heading "Hey Fede!" [level=3] [ref=e162]
                    - navigation "Footer Navigation" [ref=e163]:
                        - link "Startseite" [ref=e164] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e165] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e166] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e167] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e168]
                    - navigation "SEO Navigation" [ref=e169]:
                        - link "Bubble Waffles" [ref=e170] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e171] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e172] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e173] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e174] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e175]:
                    - heading "Öffnungszeiten" [level=3] [ref=e176]
                    - generic [ref=e179]:
                        - generic [ref=e180]:
                            - generic [ref=e182]: Montag
                            - generic [ref=e184]: Geschlossen
                        - generic [ref=e185]:
                            - generic [ref=e187]: Dienstag
                            - generic [ref=e189]: Geschlossen
                        - generic [ref=e190]:
                            - generic [ref=e193]: Mittwoch
                            - generic [ref=e194]:
                                - generic [ref=e195]: 12:00 – 19:00 Uhr
                                - generic [ref=e196]: Heute
                        - generic [ref=e197]:
                            - generic [ref=e199]: Donnerstag
                            - generic [ref=e201]: 12:00 – 19:00 Uhr
                        - generic [ref=e202]:
                            - generic [ref=e204]: Freitag
                            - generic [ref=e206]: 12:00 – 19:00 Uhr
                        - generic [ref=e207]:
                            - generic [ref=e209]: Samstag
                            - generic [ref=e211]: 12:00 – 19:00 Uhr
                        - generic [ref=e212]:
                            - generic [ref=e214]: Sonntag
                            - generic [ref=e216]: 13:00 – 19:00 Uhr
                    - generic [ref=e217]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e218]:
                    - heading "Stay Sweet" [level=3] [ref=e219]
                    - paragraph [ref=e220]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e222]:
                        - textbox "Bleib hungrig..." [ref=e223]
                        - button "Abonnieren" [ref=e225]:
                            - generic [ref=e226]: Abonnieren
            - generic [ref=e227]:
                - generic [ref=e228]: Frisch
                - generic [ref=e229]: ·
                - generic [ref=e230]: Selbstgemacht
                - generic [ref=e231]: ·
                - generic [ref=e232]: Mit Liebe
            - generic [ref=e233]:
                - img [ref=e234]
                - img [ref=e236]
                - img [ref=e238]
                - img [ref=e240]
                - img [ref=e242]
            - generic [ref=e244]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e245]
                - paragraph [ref=e246]:
                    - generic [ref=e247]: Hessen
                    - generic [ref=e248]: ›
                    - generic [ref=e249]: Lahn-Dill-Kreis
                    - generic [ref=e250]: ›
                    - generic [ref=e251]: Wetzlar
                    - generic [ref=e252]: ›
                    - generic [ref=e253]: Langgasse
            - generic [ref=e254]:
                - heading "Besuche uns auch auf" [level=3] [ref=e255]
                - generic [ref=e256]:
                    - link "G Google" [ref=e257] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e258]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e259] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e260]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e261] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e262]: yelp
            - img "Made with Love in Wetzlar" [ref=e265]
            - generic [ref=e266]:
                - paragraph [ref=e267]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e268]:
                    - link "Impressum" [ref=e269] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e270] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e271] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e272]
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
