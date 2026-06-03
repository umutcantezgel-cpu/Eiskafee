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

- Expected  -    1
+ Received  + 1527

- Array []
+ Array [
+   Object {
+     "description": "Ensure every ARIA button, link and menuitem has an accessible name",
+     "help": "ARIA commands must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright",
+     "id": "aria-command-name",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -30px; margin-top: -55px; width: 60px; height: 60px; transform: translate3d(275px, 200px, 0px); z-index: 200;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(145px, 522px, 0px); z-index: 522;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(75px, 471px, 0px); z-index: 471;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(168px, 596px, 0px); z-index: 596;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(145px, 559px, 0px); z-index: 559;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(5)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(-4px, 633px, 0px); z-index: 633;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(6)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(122px, 493px, 0px); z-index: 493;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(7)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div class=\"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive\" tabindex=\"0\" role=\"button\" style=\"margin-left: -14px; margin-top: -42px; width: 28px; height: 42px; transform: translate3d(285px, 449px, 0px); z-index: 449;\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".leaflet-marker-icon.leaflet-interactive[role=\"button\"]:nth-child(8)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.aria",
+       "wcag2a",
+       "wcag412",
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
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.11,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ebe0d7",
+               "fontSize": "8.9pt (11.84px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]\">Adresse</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(1) > div:nth-child(2) > .text-\\[0\\.74rem\\].uppercase.tracking-\\[0\\.8px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span itemprop=\"streetAddress\">Langgasse 68</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-\\[0\\.88rem\\].text-\\[\\#2d1f19\\].font-bold > span[itemprop=\"streetAddress\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span itemprop=\"postalCode\">35576</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-\\[0\\.88rem\\].text-\\[\\#2d1f19\\].font-bold > span[itemprop=\"postalCode\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span itemprop=\"addressLocality\">Wetzlar</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-\\[0\\.88rem\\].text-\\[\\#2d1f19\\].font-bold > span[itemprop=\"addressLocality\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.11,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ebe0d7",
+               "fontSize": "8.9pt (11.84px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]\">Telefon</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(2) > div:nth-child(2) > .text-\\[0\\.74rem\\].uppercase.tracking-\\[0\\.8px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"tel:+4964417890426\" class=\"font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline\">06441 7890426</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".no-underline.text-\\[0\\.88rem\\][href=\"tel:+4964417890426\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.11,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ebe0d7",
+               "fontSize": "8.9pt (11.84px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]\">WhatsApp</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(3) > div:nth-child(2) > .text-\\[0\\.74rem\\].uppercase.tracking-\\[0\\.8px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://wa.me/017625026991\" class=\"font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline\">0176 25026991</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"https://wa.me/017625026991\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.11,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ebe0d7",
+               "fontSize": "8.9pt (11.84px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 8.9pt (11.84px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]\">Instagram</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(4) > div:nth-child(2) > .text-\\[0\\.74rem\\].uppercase.tracking-\\[0\\.8px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center\">",
+                 "target": Array [
+                   ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://www.instagram.com/heyfede_wetzlar\" class=\"font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline\">@<!-- -->heyfede_wetzlar</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-\\[15px\\].gap-\\[13px\\].p-\\[13px_17px\\]:nth-child(4) > div:nth-child(2) > .no-underline.text-\\[0\\.88rem\\].text-\\[\\#2d1f19\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#edddd4",
+               "contrastRatio": 1.09,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ded5cd",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.09 (foreground color: #ded5cd, background color: #edddd4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.09 (foreground color: #ded5cd, background color: #edddd4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] font-semibold text-[#2d1f19]\">Montag</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(1) > .gap-2.items-center.flex > .font-semibold.text-\\[\\#2d1f19\\].text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f0e1d8",
+               "contrastRatio": 1.03,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eaded4",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.03 (foreground color: #eaded4, background color: #f0e1d8, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.03 (foreground color: #eaded4, background color: #f0e1d8, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-[#9a7060] font-normal\">Geschlossen</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(1) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#9a7060\\].font-normal.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#edddd4",
+               "contrastRatio": 1.09,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ded5cd",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.09 (foreground color: #ded5cd, background color: #edddd4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.09 (foreground color: #ded5cd, background color: #edddd4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] font-semibold text-[#2d1f19]\">Dienstag</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(2) > .gap-2.items-center.flex > .font-semibold.text-\\[\\#2d1f19\\].text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f0e1d8",
+               "contrastRatio": 1.03,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eaded4",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.03 (foreground color: #eaded4, background color: #f0e1d8, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.03 (foreground color: #eaded4, background color: #f0e1d8, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-[#9a7060] font-normal\">Geschlossen</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(2) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#9a7060\\].font-normal.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#e6cec4",
+               "contrastRatio": 1.15,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eedfd6",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.15 (foreground color: #eedfd6, background color: #e6cec4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex justify-between items-center p-[13px_19px] bg-[#b34832]\" itemscope=\"\" itemprop=\"openingHoursSpecification\" itemtype=\"https://schema.org/OpeningHoursSpecification\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.15 (foreground color: #eedfd6, background color: #e6cec4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] font-black text-white\">Mittwoch</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"] > .gap-2.items-center.flex > .text-white.font-black.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#e6cec4",
+               "contrastRatio": 1.15,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eedfd6",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.15 (foreground color: #eedfd6, background color: #e6cec4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex justify-between items-center p-[13px_19px] bg-[#b34832]\" itemscope=\"\" itemprop=\"openingHoursSpecification\" itemtype=\"https://schema.org/OpeningHoursSpecification\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.15 (foreground color: #eedfd6, background color: #e6cec4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-white font-bold\">12:00 – 19:00 Uhr</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"] > .gap-\\[9px\\].items-center.flex > .text-white.text-\\[0\\.87rem\\].font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ebd6cc",
+               "contrastRatio": 1.1,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f1e2db",
+               "fontSize": "7.6pt (10.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.1 (foreground color: #f1e2db, background color: #ebd6cc, font size: 7.6pt (10.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full\">Heute</span>",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"] > .gap-\\[9px\\].items-center.flex > .bg-white\\/20.text-\\[0\\.63rem\\].py-0\\.5",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex justify-between items-center p-[13px_19px] bg-[#b34832]\" itemscope=\"\" itemprop=\"openingHoursSpecification\" itemtype=\"https://schema.org/OpeningHoursSpecification\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.1 (foreground color: #f1e2db, background color: #ebd6cc, font size: 7.6pt (10.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full\">Heute</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .bg-\\[\\#b34832\\].p-\\[13px_19px\\][itemprop=\"openingHoursSpecification\"] > .gap-\\[9px\\].items-center.flex > .bg-white\\/20.text-\\[0\\.63rem\\].py-0\\.5",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#edddd4",
+               "contrastRatio": 1.09,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ded5cd",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.09 (foreground color: #ded5cd, background color: #edddd4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.09 (foreground color: #ded5cd, background color: #edddd4, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] font-semibold text-[#2d1f19]\">Donnerstag</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(4) > .gap-2.items-center.flex > .font-semibold.text-\\[\\#2d1f19\\].text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f0e1d8",
+               "contrastRatio": 1.09,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e3d9d0",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.09 (foreground color: #e3d9d0, background color: #f0e1d8, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.09 (foreground color: #e3d9d0, background color: #f0e1d8, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-[#5c3d35] font-normal\">12:00 – 19:00 Uhr</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(4) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#5c3d35\\].font-normal.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 10.4pt (13.92px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] font-semibold text-[#2d1f19]\">Sonntag</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(7) > .gap-2.items-center.flex > .font-semibold.text-\\[\\#2d1f19\\].text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.17,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e4dbd3",
+               "fontSize": "10.4pt (13.92px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.17 (foreground color: #e4dbd3, background color: #f4ede5, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#eedfcc] rounded-[18px] overflow-hidden\">",
+                 "target": Array [
+                   "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.17 (foreground color: #e4dbd3, background color: #f4ede5, font size: 10.4pt (13.92px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-nunito text-[0.87rem] text-[#5c3d35] font-normal\">13:00 – 19:00 Uhr</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(1) > .flex-col.gap-3.flex > .overflow-hidden.rounded-\\[18px\\].bg-\\[\\#eedfcc\\] > .border-b.border-\\[rgba\\(228\\,192\\,168\\,0\\.45\\)\\].last\\:border-b-0:nth-child(7) > .gap-\\[9px\\].items-center.flex > .text-\\[\\#5c3d35\\].font-normal.text-\\[0\\.87rem\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5efe8",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#eeded5",
+               "fontSize": "36.0pt (48px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #eeded5, background color: #f5efe8, font size: 36.0pt (48px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8] animate-fade-in\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-full flex flex-col m-0 p-0 overflow-x-hidden font-body bg-bg-creme text-terracotta\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #eeded5, background color: #f5efe8, font size: 36.0pt (48px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2 class=\"font-calistoga text-[1.7rem] text-[#2d1f19] mb-4\">Bestellen &amp; Abholen</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-\\[1\\.7rem\\].mb-4",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "13.2pt (17.6px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 13.2pt (17.6px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]\">",
+                 "target": Array [
+                   ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 13.2pt (17.6px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-[1.1rem] text-[#2d1f19] mb-1\">Lieferando</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(1) > div:nth-child(1) > .text-\\[1\\.1rem\\].mb-1.text-\\[\\#2d1f19\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.11,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ebe0d7",
+               "fontSize": "9.6pt (12.8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]\">",
+                 "target": Array [
+                   ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-nunito text-[0.8rem] text-[#9a7060] mb-3\">Keine Liefergebühr · Direkt nach Hause</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(1) > div:nth-child(1) > .text-\\[0\\.8rem\\].mb-3.text-\\[\\#9a7060\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.22,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dfd7d0",
+               "fontSize": "13.2pt (17.6px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 13.2pt (17.6px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]\">",
+                 "target": Array [
+                   ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.22 (foreground color: #dfd7d0, background color: #f4ede5, font size: 13.2pt (17.6px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-calistoga text-[1.1rem] text-[#2d1f19] mb-1\">Abholung</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(2) > div:nth-child(1) > .text-\\[1\\.1rem\\].mb-1.text-\\[\\#2d1f19\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.11,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ebe0d7",
+               "fontSize": "9.6pt (12.8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]\">",
+                 "target": Array [
+                   ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.11 (foreground color: #ebe0d7, background color: #f4ede5, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"font-nunito text-[0.8rem] text-[#9a7060] mb-3\">Vor Ort: Langgasse 68, 35576 Wetzlar</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(2) > div:nth-child(1) > .text-\\[0\\.8rem\\].mb-3.text-\\[\\#9a7060\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4ede5",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eddcd2",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #eddcd2, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]\">",
+                 "target": Array [
+                   ".p-5.gap-3\\.5.hover\\:-translate-y-0\\.5:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #eddcd2, background color: #f4ede5, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"relative inline-flex...\" tabindex=\"0\" style=\"border:2px solid #b3...\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-\\[25px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5eee7",
+               "contrastRatio": 1.14,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eeddd4",
+               "fontSize": "10.0pt (13.28px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.14 (foreground color: #eeddd4, background color: #f5eee7, font size: 10.0pt (13.28px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-4.5 bg-[rgba(204,98,76,0.07)] border-[1.5px] border-[rgba(204,98,76,0.18)] rounded-xl p-[13px_17px] flex gap-2.5 items-center\">",
+                 "target": Array [
+                   ".mt-4\\.5",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"min-h-screen bg-[#f5efe8] animate-fade-in\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-full flex flex-col m-0 p-0 overflow-x-hidden font-body bg-bg-creme text-terracotta\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.14 (foreground color: #eeddd4, background color: #f5eee7, font size: 10.0pt (13.28px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"font-nunito text-[0.83rem] text-[#b34832] font-extrabold\">Keine Liefergebühr bei Lieferando — frisch direkt zu dir!</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-\\[0\\.83rem\\]",
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
                - generic [ref=e37]:
                    - heading "Komm uns besuchen!" [level=1] [ref=e38]
                    - paragraph [ref=e39]: Wir freuen uns auf dich — vor Ort oder bequem per Lieferung.
                - img [ref=e41]
            - generic [ref=e45]:
                - generic [ref=e46]:
                    - heading "So findest du uns" [level=2] [ref=e47]
                    - generic [ref=e49]:
                        - generic [ref=e51]:
                            - generic:
                                - generic:
                                    - button [ref=e52] [cursor=pointer]:
                                        - img [ref=e55]
                                    - button [ref=e58] [cursor=pointer]:
                                        - img [ref=e59]
                                    - button [ref=e61] [cursor=pointer]:
                                        - img [ref=e62]
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
                        - generic [ref=e79]:
                            - generic [ref=e80]:
                                - generic [ref=e81]: Hey Fede! Dessertbar
                                - generic [ref=e82]: Langgasse 68 · 35576 Wetzlar
                            - link "Route" [ref=e83] [cursor=pointer]:
                                - /url: https://www.google.com/maps/dir/?api=1&destination=50.5604,8.5048
                                - text: Route
                                - img [ref=e84]
                    - generic [ref=e89]:
                        - generic [ref=e90]:
                            - img [ref=e92]
                            - generic [ref=e95]:
                                - generic [ref=e96]: Adresse
                                - generic [ref=e97]: Langgasse 68, 35576 Wetzlar
                        - generic [ref=e98]:
                            - img [ref=e100]
                            - generic [ref=e102]:
                                - generic [ref=e103]: Telefon
                                - link "06441 7890426" [ref=e104] [cursor=pointer]:
                                    - /url: tel:+4964417890426
                        - generic [ref=e105]:
                            - img [ref=e107]
                            - generic [ref=e109]:
                                - generic [ref=e110]: WhatsApp
                                - link "0176 25026991" [ref=e111] [cursor=pointer]:
                                    - /url: https://wa.me/017625026991
                        - generic [ref=e112]:
                            - img [ref=e114]
                            - generic [ref=e117]:
                                - generic [ref=e118]: Instagram
                                - link "@heyfede_wetzlar" [ref=e119] [cursor=pointer]:
                                    - /url: https://www.instagram.com/heyfede_wetzlar
                - generic [ref=e120]:
                    - generic [ref=e121]:
                        - heading "Öffnungszeiten" [level=2] [ref=e122]
                        - generic [ref=e124]:
                            - generic [ref=e125]:
                                - generic [ref=e127]: Montag
                                - generic [ref=e129]: Geschlossen
                            - generic [ref=e130]:
                                - generic [ref=e132]: Dienstag
                                - generic [ref=e134]: Geschlossen
                            - generic [ref=e135]:
                                - generic [ref=e138]: Mittwoch
                                - generic [ref=e139]:
                                    - generic [ref=e140]: 12:00 – 19:00 Uhr
                                    - generic [ref=e141]: Heute
                            - generic [ref=e142]:
                                - generic [ref=e144]: Donnerstag
                                - generic [ref=e146]: 12:00 – 19:00 Uhr
                            - generic [ref=e147]:
                                - generic [ref=e149]: Freitag
                                - generic [ref=e151]: 12:00 – 19:00 Uhr
                            - generic [ref=e152]:
                                - generic [ref=e154]: Samstag
                                - generic [ref=e156]: 12:00 – 19:00 Uhr
                            - generic [ref=e157]:
                                - generic [ref=e159]: Sonntag
                                - generic [ref=e161]: 13:00 – 19:00 Uhr
                    - generic [ref=e162]:
                        - heading "Bestellen & Abholen" [level=2] [ref=e163]
                        - generic [ref=e164]:
                            - generic [ref=e165]:
                                - generic [ref=e166]:
                                    - generic [ref=e167]: Lieferando
                                    - generic [ref=e168]: Keine Liefergebühr · Direkt nach Hause
                                    - link "Jetzt bestellen →" [ref=e170] [cursor=pointer]:
                                        - /url: https://www.lieferando.de/speisekarte/hey-fede
                                        - button "Jetzt bestellen →" [ref=e171]:
                                            - generic [ref=e172]: Jetzt bestellen →
                                - img [ref=e174]
                            - generic [ref=e179]:
                                - generic [ref=e180]:
                                    - generic [ref=e181]: Abholung
                                    - generic [ref=e182]: "Vor Ort: Langgasse 68, 35576 Wetzlar"
                                    - link "Route planen →" [ref=e183] [cursor=pointer]:
                                        - /url: https://www.google.com/maps/dir/?api=1&destination=50.5604,8.5048
                                        - button "Route planen →" [ref=e184]
                                - img [ref=e186]
                        - generic [ref=e189]:
                            - generic [ref=e191]: ✓
                            - paragraph [ref=e192]: Keine Liefergebühr bei Lieferando — frisch direkt zu dir!
            - generic [ref=e194]:
                - generic [ref=e195]:
                    - heading "Unsere Nachbarschaft" [level=2] [ref=e196]
                    - paragraph [ref=e197]: Hey Fede! liegt im Herzen der historischen Altstadt Wetzlars. Verbinde deinen Besuch bei uns mit einem Spaziergang zu diesen wunderschönen Sehenswürdigkeiten in unmittelbarer Nähe.
                - generic [ref=e198]:
                    - link "Wetzlarer Dom 350m Das historische Wahrzeichen der Stadt Wetzlar und ein absolutes Muss bei deinem Besuch in der Altstadt. Auf Wikipedia ansehen" [ref=e199] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Wetzlarer_Dom
                        - generic [ref=e200]:
                            - heading "Wetzlarer Dom" [level=3] [ref=e201]
                            - generic [ref=e202]:
                                - img [ref=e203]
                                - text: 350m
                        - paragraph [ref=e206]: Das historische Wahrzeichen der Stadt Wetzlar und ein absolutes Muss bei deinem Besuch in der Altstadt.
                        - generic [ref=e207]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e208]
                    - link "Lottehaus 200m Die historische Gedenkstätte für Charlotte Buff, Werthers Muse in Goethes berühmtem Werkzeug. Auf Wikipedia ansehen" [ref=e210] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Lottehaus
                        - generic [ref=e211]:
                            - heading "Lottehaus" [level=3] [ref=e212]
                            - generic [ref=e213]:
                                - img [ref=e214]
                                - text: 200m
                        - paragraph [ref=e217]: Die historische Gedenkstätte für Charlotte Buff, Werthers Muse in Goethes berühmtem Werkzeug.
                        - generic [ref=e218]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e219]
                    - link "Wetzlarer Altstadt 0m Wir befinden uns mitten in den verwinkelten Gassen der malerischen Wetzlarer Altstadt. Auf Wikipedia ansehen" [ref=e221] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Historische_Altstadt_Wetzlar
                        - generic [ref=e222]:
                            - heading "Wetzlarer Altstadt" [level=3] [ref=e223]
                            - generic [ref=e224]:
                                - img [ref=e225]
                                - text: 0m
                        - paragraph [ref=e228]: Wir befinden uns mitten in den verwinkelten Gassen der malerischen Wetzlarer Altstadt.
                        - generic [ref=e229]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e230]
                    - link "Eisenmarkt 100m Der wunderschöne historische Eisenmarkt, umrahmt von charmanten Fachwerkhäusern, ist nur einen Katzensprung entfernt. Auf Wikipedia ansehen" [ref=e232] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Historische_Altstadt_Wetzlar#Eisenmarkt
                        - generic [ref=e233]:
                            - heading "Eisenmarkt" [level=3] [ref=e234]
                            - generic [ref=e235]:
                                - img [ref=e236]
                                - text: 100m
                        - paragraph [ref=e239]: Der wunderschöne historische Eisenmarkt, umrahmt von charmanten Fachwerkhäusern, ist nur einen Katzensprung entfernt.
                        - generic [ref=e240]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e241]
                    - link "Alte Lahnbrücke 500m Die steinerne Brücke über die Lahn aus dem 13. Jahrhundert ist ein beliebtes Fotomotiv. Auf Wikipedia ansehen" [ref=e243] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Alte_Lahnbr%C3%BCcke_(Wetzlar)
                        - generic [ref=e244]:
                            - heading "Alte Lahnbrücke" [level=3] [ref=e245]
                            - generic [ref=e246]:
                                - img [ref=e247]
                                - text: 500m
                        - paragraph [ref=e250]: Die steinerne Brücke über die Lahn aus dem 13. Jahrhundert ist ein beliebtes Fotomotiv.
                        - generic [ref=e251]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e252]
                    - link "Reichskammergerichtsmuseum 450m Tauche ein in die Rechtsgeschichte und das historische Erbe Wetzlars in diesem faszinierenden Museum. Auf Wikipedia ansehen" [ref=e254] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Reichskammergerichtsmuseum
                        - generic [ref=e255]:
                            - heading "Reichskammergerichtsmuseum" [level=3] [ref=e256]
                            - generic [ref=e257]:
                                - img [ref=e258]
                                - text: 450m
                        - paragraph [ref=e261]: Tauche ein in die Rechtsgeschichte und das historische Erbe Wetzlars in diesem faszinierenden Museum.
                        - generic [ref=e262]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e263]
                    - link "Goethe-Weg 400m Spaziere auf den Pfaden, die einst der junge Goethe während seines Sommeraufenthalts in Wetzlar nahm. Auf Wikipedia ansehen" [ref=e265] [cursor=pointer]:
                        - /url: https://de.wikipedia.org/wiki/Goetheweg_(Wetzlar)
                        - generic [ref=e266]:
                            - heading "Goethe-Weg" [level=3] [ref=e267]
                            - generic [ref=e268]:
                                - img [ref=e269]
                                - text: 400m
                        - paragraph [ref=e272]: Spaziere auf den Pfaden, die einst der junge Goethe während seines Sommeraufenthalts in Wetzlar nahm.
                        - generic [ref=e273]:
                            - text: Auf Wikipedia ansehen
                            - img [ref=e274]
        - region "Anfahrt, Parken & Tipps für deinen Besuch bei Hey Fede!" [ref=e276]:
            - region "Hey Fede! besuchen — Anfahrt, Öffnungszeiten und Tipps" [ref=e278]:
                - region [ref=e279]:
                    - heading "Willkommen in der Langgasse – Dein Zuhause für süße Momente in der Altstadt von Wetzlar" [level=2] [ref=e280]
                    - paragraph [ref=e281]: "Stell dir vor, du spazierst an einem entspannten Nachmittag durch die malerischen, von historischem Fachwerk gesäumten Gassen der Wetzlarer Altstadt. Deine Schritte hallen leise auf dem jahrhundertealten Kopfsteinpflaster wider, während du die besondere Atmosphäre dieser unvergleichlichen Stadt an der Lahn aufsaugst. Genau hier, inmitten dieses geschichtsträchtigen und gleichzeitig so lebendigen Umfelds, findest du uns: Hey Fede! in der Langgasse 68. Wir sind nicht einfach nur ein Ort, an dem man Desserts isst. Wir sind ein Ort der Begegnung, ein warmer, einladender Rückzugsort, an dem du für einen Moment den Alltag hinter dir lassen und dich voll und ganz dem Genuss hingeben kannst. Die Langgasse selbst ist eine der schönsten und traditionsreichsten Straßen Wetzlars, eine Hauptader der Altstadt, die Besucher und Einheimische gleichermaßen anzieht. Hier trifft modernes Leben auf jahrhundertealte Tradition, und wir sind unglaublich stolz darauf, ein Teil dieser wunderbaren Gemeinschaft zu sein."
                    - paragraph [ref=e282]: Wenn du dich unserer Tür näherst, wird dich vielleicht schon der unverwechselbare, warme Duft von frisch gebackenen Waffeln, geschmolzener Schokolade und aromatischem Kaffee begrüßen. Es ist ein Duft, der Erinnerungen weckt – an gemütliche Sonntagnachmittage bei den Großeltern, an ausgelassene Kindergeburtstage und an die pure, unbeschwerte Freude, die nur ein richtig gutes Dessert auslösen kann. Bei uns dreht sich alles um dieses Gefühl der Geborgenheit. Wir möchten, dass du eintrittst und dich sofort willkommen fühlst. Egal, ob du nach einem langen Arbeitstag eine süße Belohnung brauchst, ein romantisches Date planst, mit deinen Kindern einen besonderen Nachmittag verbringen möchtest oder einfach nur einen ruhigen Ort suchst, um ein gutes Buch zu lesen und dabei eine heiße Schokolade zu trinken – bei Hey Fede! bist du genau richtig. Wir haben diesen Ort mit viel Liebe zum Detail gestaltet, um eine Atmosphäre zu schaffen, die genauso herzlich, authentisch und einzigartig ist wie die Stadt Wetzlar selbst.
                    - separator [ref=e283]
                    - heading "So findest du Hey Fede! – Ein Spaziergang durch unsere Lieblingsstadt" [level=2] [ref=e284]
                    - paragraph [ref=e285]: Der Weg zu uns ist weit mehr als nur eine einfache Anreise – er ist bereits der Beginn deines kleinen Wetzlar-Erlebnisses. Die Altstadt von Wetzlar ist geprägt von einer beeindruckenden Kompaktheit und einer Fußgängerzone, die zum entspannten Flanieren einlädt. Wir empfehlen unseren Gästen immer, sich Zeit für den Weg zu nehmen, denn es gibt an fast jeder Ecke etwas Neues zu entdecken. Von historischen Gebäuden über kleine, inhabergeführte Boutiquen bis hin zu versteckten Innenhöfen – Wetzlar steckt voller Überraschungen.
                    - heading "Vom Bahnhof Wetzlar zu Fuß – Ein Weg, der sich lohnt" [level=3] [ref=e286]
                    - paragraph [ref=e287]: Wenn du mit dem Zug in Wetzlar ankommst, hast du die perfekte Gelegenheit, die Stadt Schritt für Schritt auf dich wirken zu lassen. Vom Hauptbahnhof bis zu uns in die Langgasse 68 sind es etwa 1,2 Kilometer – ein gemütlicher Spaziergang von rund 15 bis 20 Minuten, der dich direkt durch das Herz der Stadt führt. Wenn du das Bahnhofsgebäude verlässt, folgst du zunächst der Bahnhofstraße, die dich sanft in Richtung Zentrum leitet. Du passierst belebte Kreuzungen und spürst, wie die moderne Infrastruktur der Stadt allmählich der historischen Architektur weicht. Bald erreichst du die Lahn, den Fluss, der Wetzlar so maßgeblich prägt und der Stadt ihren unverwechselbaren, friedlichen Charakter verleiht.
                    - paragraph [ref=e288]: Der Weg über die Lahnbrücke ist immer ein besonderer Moment. Nimm dir hier eine Minute Zeit, um innezuhalten. Schau hinab auf das ruhig fließende Wasser, beobachte die Enten und Schwäne, die hier ihre Bahnen ziehen, und lass den Blick über die Uferpromenaden schweifen. An sonnigen Tagen glitzert das Wasser, und im Herbst spiegeln sich die bunten Blätter der Bäume auf der Oberfläche. Wenn du die Brücke überquert hast, befindest du dich am Rande der Altstadt. Über den Karl-Kellner-Ring gelangst du schließlich in die Fußgängerzone. Ab hier tauchst du ein in die Welt der Wetzlarer Geschichte. Die Straßen werden schmaler, die Häuser älter und charmanter. Du schlenderst über die Krämerstraße, vorbei an kleinen Geschäften und gemütlichen Cafés, bis du schließlich die Langgasse erreichst. Folge ihr einfach weiter – du wirst unser einladendes Schaufenster und den fröhlichen Hey Fede!-Schriftzug schon bald entdecken.
                    - heading "Mit dem Bus sicher und entspannt in die Altstadt" [level=3] [ref=e289]
                    - paragraph [ref=e290]: Wenn du lieber nicht so weit laufen möchtest oder das Wetter einmal nicht mitspielt, ist die Anreise mit dem Bus eine wunderbar bequeme und zuverlässige Alternative. Das Wetzlarer Busnetz ist hervorragend ausgebaut und verbindet alle umliegenden Stadtteile, Wohngebiete und wichtigen Knotenpunkte direkt mit dem Zentrum. Deine Zielhaltestelle für einen Besuch bei Hey Fede! ist der "Karl-Kellner-Ring". Diese zentrale Haltestelle wird von einer Vielzahl von Stadtbuslinien angefahren und liegt strategisch absolut perfekt, nur etwa 250 Meter von unserer Tür entfernt.
                    - paragraph [ref=e291]: Sobald du am Karl-Kellner-Ring aus dem Bus steigst, befindest du dich bereits in unmittelbarer Nähe zur Fußgängerzone. Ein kurzer, ebenerdiger Fußweg führt dich direkt in die Altstadt. Du biegst einfach in die Krämerstraße ein, genießt die historische Atmosphäre, die dich sofort umfängt, und spazierst ganz entspannt weiter bis zur Langgasse. Besonders für Familien mit kleinen Kindern, ältere Menschen oder Gäste, die nach einem ausgiebigen Shopping-Tag nicht mehr lange laufen möchten, ist der Bus die ideale Lösung. Die Haltestellen in Wetzlar sind in der Regel barrierefrei ausgebaut, und aktuelle Fahrpläne lassen sich ganz einfach über die Apps des lokalen Verkehrsverbundes (RMV) oder direkt an den digitalen Anzeigen der Haltestellen abrufen. So kommst du vollkommen stressfrei bei uns an und kannst dich direkt auf dein Dessert freuen.
                    - separator [ref=e292]
                    - heading "Der große Wetzlar-Park-Guide – Entspannt ankommen und genießen" [level=2] [ref=e293]
                    - paragraph [ref=e294]: "Wer mit dem Auto nach Wetzlar kommt, kennt vielleicht die kleine Herausforderung, die viele historische Städte mit sich bringen: Die Altstadt selbst ist verkehrsberuhigt und gehört den Fußgängern. Doch keine Sorge – Wetzlar hat dieses Thema hervorragend gelöst. Es gibt rund um die Altstadt eine Vielzahl von erstklassigen, gut ausgeschilderten und komfortablen Parkmöglichkeiten, die alle nur einen kurzen, schönen Spaziergang von uns entfernt liegen. Um dir die Anreise so einfach und entspannt wie möglich zu machen, haben wir hier einen umfassenden und unglaublich detaillierten Guide zu den besten Parkplätzen und Parkhäusern in unserer Nähe zusammengestellt. So weißt du genau, wo du dein Auto sicher abstellen kannst, und kannst deinen Besuch bei uns von der ersten Minute an in vollen Zügen genießen."
                    - heading "Parkplatz Domplatz – Der Klassiker im Herzen der Altstadt" [level=3] [ref=e295]
                    - paragraph [ref=e296]: Wenn du so nah wie möglich am Geschehen parken möchtest, ist der Parkplatz direkt am Domplatz eine hervorragende, wenngleich oft gut besuchte Wahl. Dieser offene Parkplatz liegt buchstäblich im Herzen der Altstadt, direkt neben dem imposanten Wetzlarer Dom. Von hier aus sind es nur etwa 350 bis 400 Meter bis zu unserer Tür in der Langgasse 68. Der Fußweg führt dich über das wunderschöne historische Pflaster, vorbei an ehrwürdigen Gebäuden und direkt durch das Zentrum der Altstadt.
                    - paragraph [ref=e297]: "Ein kleiner Tipp für dich: Da der Domplatz-Parkplatz sehr zentral liegt, ist er besonders an Samstagen oder während großer Veranstaltungen in der Stadt oft schnell besetzt. Wenn du jedoch an einem Dienstag-, Mittwoch- oder Donnerstagnachmittag zu uns kommst, stehen die Chancen meist sehr gut, hier einen bequemen Stellplatz zu finden. Vergiss nicht, ein gültiges Parkticket am Automaten zu ziehen, da hier regelmäßig kontrolliert wird. Der kurze Spaziergang vom Domplatz zu Hey Fede! ist ein Erlebnis für sich und stimmt dich perfekt auf eine süße Auszeit ein."
                    - heading "Parkhaus Forum Wetzlar – Perfekt für längere Ausflüge" [level=3] [ref=e298]
                    - paragraph [ref=e299]: Planst du einen ausgedehnten Tag in Wetzlar, möchtest vielleicht erst ein wenig einkaufen, dann gemütlich durch die Altstadt schlendern und den Tag bei uns mit einer herrlichen Bubble Waffle abschließen? Dann ist das Parkhaus im Einkaufszentrum "Forum Wetzlar" zweifellos die beste Wahl für dich. Dieses moderne, großzügig angelegte Parkhaus bietet Hunderte von überdachten, breiten Stellplätzen, verfügt über spezielle Familien- und Frauenparkplätze und ist durchgehend geöffnet.
                    - paragraph [ref=e300]: Vom Forum aus läufst du etwa 600 bis 800 Meter bis in die Langgasse. Der Weg ist dabei alles andere als langweilig. Du verlässt das moderne Einkaufszentrum, spazierst in Richtung Lahn, überquerst den Fluss über eine der Brücken und betrittst die Altstadt quasi durch ihr natürliches "Tor". Es ist ein wunderschöner Übergang von der modernen Shopping-Welt hinein in das historische, gemütliche Flair der Altstadt. Das Forum Wetzlar bietet zudem den Vorteil, dass du dir über die Parkdauer keine großen Gedanken machen musst – dein Auto steht sicher, im Trockenen und im Sommer angenehm kühl, während du ganz entspannt Wetzlar erkundest.
                    - heading "Parkplatz Lahninsel – Romantisch, naturnah und wunderschön" [level=3] [ref=e301]
                    - paragraph [ref=e302]: Unser absoluter Geheimtipp für alle, die Natur und Romantik lieben, ist der Parkplatz auf der Lahninsel. Dieser idyllische Parkplatz liegt – wie der Name schon sagt – auf einer kleinen Insel im Fluss, umgeben von alten, schattenspendenden Bäumen und dem beruhigenden Rauschen des Wassers. Wenn du dein Auto hier abstellst, beginnt dein Wetzlar-Erlebnis sofort mit einem Hauch von Urlaub.
                    - paragraph [ref=e303]: Der Fußweg von der Lahninsel zu uns in die Langgasse beträgt etwa 500 Meter und ist wahrscheinlich der landschaftlich schönste Weg in die Altstadt. Du überquerst eine kleine Fußgängerbrücke, von der aus du einen fantastischen Blick auf die historischen Gebäude am Ufer hast. Oft kannst du Kanufahrer oder Stand-Up-Paddler auf der Lahn beobachten. Von dort aus gehst du sanft bergauf in die Fußgängerzone. Dieser Parkplatz ist nicht nur unglaublich malerisch, sondern oft auch eine stressfreie Alternative an gut besuchten Wochenenden, wenn die Parkplätze direkt in der Altstadt knapper werden.
                    - heading "Parkhaus Altstadt (Am Stadion) – Die praktische Alternative" [level=3] [ref=e304]
                    - paragraph [ref=e305]: Eine weitere, oft übersehene, aber äußerst praktische Möglichkeit ist das Parkhaus Altstadt, das sich in der Nähe des Stadions befindet. Es bietet eine hervorragende Kapazität und ist tariflich oft sehr attraktiv gestaltet. Von hier aus näherst du dich der Altstadt von einer leicht erhöhten Position, was dir beim Spaziergang zu uns wunderbare Ausblicke auf die Dächer von Wetzlar beschert. Der Weg hinab in die Fußgängerzone ist entspannt, und nach etwa 10 bis 15 Minuten Gehzeit hast du die Langgasse und damit auch Hey Fede! erreicht. Es ist eine verlässliche Option für jeden Tag der Woche und bietet eine gute Anbindung an die großen Einfallstraßen der Stadt.
                    - separator [ref=e306]
                    - heading "Wetzlar erleben – Kultur, Geschichte und das perfekte Dessert" [level=2] [ref=e307]
                    - paragraph [ref=e308]: Einer der schönsten Aspekte von Hey Fede! ist unsere unschlagbare Lage. Wenn du zu uns kommst, besuchst du nicht nur ein Dessert-Café, sondern du tauchst ein in eine Stadt, die über Jahrhunderte hinweg Geschichte geschrieben hat. Wetzlar war einst eine freie Reichsstadt und Sitz des Reichskammergerichts, des höchsten Gerichts im Heiligen Römischen Reich. Große Dichter, Denker und Erfinder haben hier ihre Spuren hinterlassen. Ein Besuch bei uns lässt sich daher geradezu perfekt mit einer Entdeckungstour durch die Stadt verbinden. Wir haben für dich die absoluten Highlights zusammengestellt, die du vor oder nach deinem Dessert-Genuss auf keinen Fall verpassen solltest.
                    - heading "Der Wetzlarer Dom – Ein unvergleichliches Meisterwerk der Architektur" [level=3] [ref=e309]
                    - paragraph [ref=e310]: "Nur einen Steinwurf – genauer gesagt etwa 350 Meter – von uns entfernt thront der imposante Wetzlarer Dom, offiziell der Dom Unserer Lieben Frau. Wenn du vor diesem massiven Bauwerk stehst, wird dir sofort auffallen, dass etwas anders ist: Der Dom wirkt unfertig. Und das ist er tatsächlich! Über Jahrhunderte hinweg wurde an ihm gebaut, doch die Arbeiten wurden nie vollständig abgeschlossen. Das Ergebnis ist eine absolut faszinierende, beinahe wilde Mischung aus romanischer und gotischer Architektur."
                    - paragraph [ref=e311]: Du kannst die verschiedenen Baustile direkt an der Fassade ablesen. Der Dom ist nicht nur ein beeindruckendes Fotomotiv, sondern auch ein Ort tiefer Ruhe und Besinnung inmitten der lebhaften Altstadt. Nimm dir die Zeit, das Innere zu besichtigen, die beeindruckenden Glasfenster zu bewundern und die Stille zu genießen. Danach ist der Weg zu Hey Fede! für einen wärmenden Kaffee und eine frisch gebackene Waffel der perfekte Kontrast, um das Gesehene in gemütlicher Atmosphäre nachwirken zu lassen.
                    - heading "Das Lottehaus und Goethes romantische Spuren" [level=3] [ref=e312]
                    - paragraph [ref=e313]: Kein Name ist so eng mit der Romantik in Wetzlar verbunden wie der von Johann Wolfgang von Goethe. Im Jahr 1772 kam der damals noch unbekannte, junge Goethe als Praktikant an das Wetzlarer Reichskammergericht. Hier verliebte er sich unsterblich in Charlotte Buff, eine Liebe, die unerfüllt bleiben sollte, da "Lotte" bereits verlobt war. Diese leidenschaftliche und tragische Erfahrung inspirierte ihn zu seinem Weltbestseller "Die Leiden des jungen Werthers", ein Buch, das eine ganze Generation prägte und Wetzlar auf einen Schlag berühmt machte.
                    - paragraph [ref=e314]: Das Lottehaus, das ehemalige Wohnhaus der Familie Buff, liegt nur rund 200 Meter von Hey Fede! entfernt. Es ist heute ein wunderschön hergerichtetes Museum, das dich direkt in das 18. Jahrhundert zurückversetzt. Du kannst durch die original erhaltenen Räume wandern, persönliche Gegenstände von Charlotte betrachten und die Atmosphäre spüren, die einst Goethe inspirierte. Ein Spaziergang auf Goethes Spuren durch Wetzlar, gekrönt von einem anschließenden Besuch bei uns, ist ein fantastisches Programm für Geschichtsinteressierte, Schulklassen oder Paare, die einen romantischen Nachmittag verbringen möchten.
                    - heading "Die Alte Lahnbrücke – Romantik pur über dem fließenden Wasser" [level=3] [ref=e315]
                    - paragraph [ref=e316]: Wenn du dem Trubel der Gassen für einen Moment entfliehen möchtest, empfehlen wir dir einen kurzen Spaziergang zur Alten Lahnbrücke. Sie gehört zu den ältesten erhaltenen Brücken Hessens und überspannt den Fluss mit mehreren eleganten Steinbögen. Früher war sie ein wichtiger Handelsweg und ein Nadelöhr für Kaufleute aus aller Welt. Heute ist sie einer der friedlichsten und malerischsten Orte der Stadt.
                    - paragraph [ref=e317]: Besonders am späten Nachmittag oder in den frühen Abendstunden, wenn die tief stehende Sonne das Wasser der Lahn in ein goldenes Licht taucht, entfaltet die Brücke ihren ganzen Zauber. Es ist der perfekte Ort für ein Erinnerungsfoto oder einfach, um Arm in Arm zu stehen und aufs Wasser zu schauen. Von der Brücke aus bist du in weniger als zehn Minuten wieder bei uns in der Langgasse. Hol dir doch einfach einen unserer cremigen Shakes To-Go und genieße ihn bei einem Spaziergang über dieses historische Wahrzeichen.
                    - heading "Der Eisenmarkt – Das historische Herzstück der Altstadt" [level=3] [ref=e318]
                    - paragraph [ref=e319]: Nur etwa 100 Meter von Hey Fede! entfernt öffnet sich die Langgasse zum Eisenmarkt. Dieser kleiner, aber ungemein charmante Platz ist das heimliche Zentrum der Wetzlarer Altstadt. Umgeben von kunstvoll verzierten Fachwerkhäusern, von denen jedes seine eigene Geschichte erzählt, fühlt man sich hier wie in einer anderen Zeit. In der Mitte des Platzes plätschert friedlich ein historischer Brunnen.
                    - paragraph [ref=e320]: Der Eisenmarkt war über Jahrhunderte hinweg ein zentraler Handelsplatz. Heute ist er ein beliebter Treffpunkt, umgeben von kleinen Boutiquen und der perfekten Kulisse für ausgiebige Altstadtbummel. Der Platz strahlt eine unglaubliche Gemütlichkeit aus. Wenn du von hier aus weitergehst, wirst du unweigerlich das Gefühl haben, dass die Uhren in Wetzlar ein wenig langsamer, ein wenig entspannter ticken. Und genau dieses Gefühl möchten wir dir auch in unserem Café vermitteln.
                    - heading "Lokale Events und Feste in der Altstadt" [level=3] [ref=e321]
                    - paragraph [ref=e322]: Wetzlar ist eine Stadt, die weiß, wie man feiert, und die Altstadt ist regelmäßig Schauplatz wunderbarer Feste und Märkte. Ob das traditionelle Ochsenfest, das Menschen aus der ganzen Region anzieht, der fröhliche Gallusmarkt im Herbst mit seinen bunten Ständen und Fahrgeschäften oder der zauberhafte Wetzlarer Weihnachtsmarkt – zu diesen Zeiten verwandelt sich die Innenstadt in ein magisches Lichtermeer.
                    - paragraph [ref=e323]: Während dieser Events ist die Langgasse besonders belebt, und ein Besuch bei Hey Fede! wird zum perfekten Aufwärm-Stopp an kalten Wintertagen oder zur süßen Erfrischung während sommerlicher Stadtfeste. Wenn du deinen Besuch bei uns planst, lohnt es sich immer, einen Blick auf den Veranstaltungskalender der Stadt zu werfen. So kannst du ein grandioses Altstadt-Event mit unseren himmlischen Desserts kombinieren und den Tag absolut unvergesslich machen.
                    - separator [ref=e324]
                    - heading "Unsere Öffnungszeiten – Der perfekte Zeitpunkt für deinen Besuch" [level=2] [ref=e325]
                    - paragraph [ref=e326]: Wir möchten, dass Hey Fede! genau dann für dich da ist, wenn du Lust auf etwas Besonderes hast. Gleichzeitig legen wir größten Wert auf Frische, Qualität und eine liebevolle Vorbereitung all unserer Kreationen. Daher haben wir unsere Öffnungszeiten so gestaltet, dass wir dir an den geöffneten Tagen stets das bestmögliche, frischeste und leckerste Erlebnis bieten können. Hier findest du eine detaillierte Übersicht darüber, wann wir für dich da sind und welche Atmosphäre dich an den verschiedenen Tagen erwartet.
                    - heading "Montag und Dienstag – Unsere kreativen Ruhetage" [level=3] [ref=e327]
                    - paragraph [ref=e328]: An Montagen und Dienstagen bleiben die Türen von Hey Fede! geschlossen. Diese zwei Tage sind für uns unglaublich wichtig. Wir nutzen diese Zeit nicht nur, um durchzuatmen, sondern vor allem, um hinter den Kulissen aktiv zu sein. Wir testen neue Rezepte, verfeinern unsere hausgemachten Soßen, organisieren frische Zutaten von unseren Lieferanten und bereiten alles mit größter Sorgfalt für die kommende Woche vor. Auch wenn wir an diesen Tagen keine Gäste empfangen, fließt hier die kreative Energie, die du dann ab Mittwoch auf deinem Teller schmeckst.
                    - heading "Mittwoch bis Freitag – Die perfekten Nachmittage für eine süße Auszeit" [level=3] [ref=e329]
                    - paragraph [ref=e330]: Von Mittwoch bis Freitag öffnen wir unsere Türen pünktlich von 12:00 bis 19:00 Uhr. Diese Tage sind besonders bei jenen beliebt, die dem hektischen Alltag für eine Weile entfliehen möchten. Die Altstadt ist unter der Woche etwas ruhiger, das Tempo ist gedrosselt. Es ist die perfekte Zeit für ein entspanntes Date, ein ungestörtes Gespräch mit der besten Freundin oder einfach, um sich nach einem anstrengenden Arbeitstag oder nach der Schule selbst zu belohnen. Die Stimmung ist familiär, und oft bleibt an diesen Tagen auch ein wenig mehr Zeit für einen kurzen, persönlichen Plausch mit unserem Team.
                    - heading "Der Samstag – Buntes Treiben, Wochenmarkt und pure Lebensfreude" [level=3] [ref=e331]
                    - paragraph [ref=e332]: Samstags (ebenfalls 12:00 bis 19:00 Uhr) pulsiert das Leben in Wetzlar! Es ist der klassische Markttag, die Gassen sind erfüllt von fröhlichen Stimmen, Familien sind beim Wochenendeinkauf, und Touristen erkunden die Stadt. An Samstagen brummt der Laden, es wird gelacht, bestellt und genossen. Die Energie ist ansteckend, und es gibt kaum etwas Schöneres, als sich nach einem ausgiebigen Shopping-Marathon in der Fußgängerzone bei uns in den Sessel fallen zu lassen und sich eine unserer aufwendigen, prall gefüllten Bubble Waffles zu gönnen. Wenn du das lebhafte, urbane Gefühl der Altstadt liebst, ist der Samstag dein Tag für einen Besuch.
                    - heading "Der Sonntag – Entschleunigung pur und Zeit für die Familie" [level=3] [ref=e333]
                    - paragraph [ref=e334]: Der Sonntag ist in Wetzlar traditionell der Tag der Ruhe und der Familienausflüge. Von 13:00 bis 19:00 Uhr sind wir für dich da. Sonntage bei Hey Fede! haben eine ganz eigene, fast schon magische Atmosphäre. Nach einem ausgiebigen Sonntagsspaziergang an der Lahn oder einem späten Frühstück zu Hause kommen viele Familien und Paare zu uns, um den Tag gemütlich ausklingen zu lassen. Es ist die Zeit der großen Tische, der leuchtenden Kinderaugen und des gemeinsamen Genießens. Ein Sonntag ohne ein fantastisches Dessert ist schließlich nur ein halber Sonntag.
                    - separator [ref=e335]
                    - heading "Take-Away, Picknick-Spots und Lieferung direkt zu dir nach Hause" [level=2] [ref=e336]
                    - paragraph [ref=e337]: Wir lieben es, dich bei uns im Café als Gast zu begrüßen. Doch wir wissen auch, dass es Momente gibt, in denen man sein Dessert lieber unter freiem Himmel, im Park auf einer Decke oder gemütlich in den eigenen vier Wänden auf der heimischen Couch genießen möchte. Genau deshalb haben wir unser Angebot so flexibel wie möglich gestaltet. Alle unsere Köstlichkeiten, von den kunstvoll gefüllten Bubble Waffles bis hin zu unseren cremigen Shakes, gibt es selbstverständlich auch zum Mitnehmen. Sie werden mit derselben Liebe zum Detail zubereitet und sicher verpackt, sodass sie auch unterwegs nichts von ihrem Geschmack und ihrer Schönheit einbüßen.
                    - heading "Die schönsten Picknick-Spots rund um Hey Fede!" [level=3] [ref=e338]
                    - paragraph [ref=e339]: Wetzlar ist eine grüne Stadt, die zahlreiche wunderschöne Parks und Anlagen bietet – ideal für ein süßes Picknick an der frischen Luft. Wenn du dir dein Dessert bei uns als Take-Away holst, empfehlen wir dir besonders die Colchester-Anlage. Dieser weitläufige, gepflegte Park direkt am Ufer der Lahn ist nur wenige Gehminuten von der Langgasse entfernt. Hier kannst du dich ins weiche Gras setzen, dem Plätschern des Wassers lauschen und deine Waffel in absoluter Ruhe genießen.
                    - paragraph [ref=e340]: Eine weitere fantastische Option ist die Avignon-Anlage, die mit ihren schönen Blumenbeeten und alten Bäumen ein besonders romantisches Flair verströmt. Auch die Stufen am Rande des Kornmarkts oder die Bänke rund um den Domplatz bieten großartige Möglichkeiten, sich kurz niederzulassen, das Treiben der Altstadt zu beobachten und dabei einen unserer erfrischenden Drinks zu schlürfen. Egal für welchen Ort du dich entscheidest – Wetzlar bietet die perfekte Kulisse für jeden Freiluft-Genießer.
                    - heading "Lieferando – Dein Dessert kommt direkt zu dir" [level=3] [ref=e341]
                    - paragraph [ref=e342]: Manchmal möchte man das Haus einfach nicht verlassen. Es regnet, der Filmabend ist bereits im vollen Gange, oder man liegt am Sonntag gemütlich im Bett und hat plötzlich unglaubliche Lust auf etwas Süßes. Für genau diese Momente haben wir unsere Partnerschaft mit Lieferando eingerichtet. Du kannst unser gesamtes Sortiment ganz unkompliziert über die App oder die Website zu dir nach Hause bestellen.
                    - paragraph [ref=e343]: "Das Besondere daran: Wir berechnen keine Liefergebühren! Dein Dessert wird erst zubereitet, wenn der Fahrer fast bei uns ist, damit alles so warm, knusprig und frisch wie möglich bei dir ankommt. Wir verwenden für die Lieferung spezielle, umweltfreundliche Verpackungen, die dafür sorgen, dass das Eis kalt und die Waffel warm bleibt. Es ist der ultimative Komfort für alle, die das Hey Fede!-Erlebnis in ihren eigenen vier Wänden genießen möchten. Einfach bestellen, zurücklehnen und freuen."
                    - separator [ref=e344]
                    - heading "Familien, Gruppen, Kindergeburtstage & Besondere Anlässe" [level=2] [ref=e345]
                    - paragraph [ref=e346]: Ein Dessert ist immer auch ein Stück Lebensfreude, und Lebensfreude teilt man am besten mit anderen. Hey Fede! ist nicht nur ein Ort für das schnelle Dessert zwischendurch, sondern eine fantastische Location, um besondere Momente gemeinsam zu feiern. Ob es der fünfte Geburtstag deines Kindes ist, ein entspanntes Get-together mit den Kollegen nach einem langen Projekt oder ein runder Geburtstag im Familienkreis – wir sorgen dafür, dass euer Event süß und unvergesslich wird.
                    - heading "Strahlende Kinderaugen beim perfekten Kindergeburtstag" [level=3] [ref=e347]
                    - paragraph [ref=e348]: Kinder lieben Hey Fede! – und das beruht absolut auf Gegenseitigkeit. Die bunten Farben, die unzähligen Toppings von Schokolinsen über Gummibärchen bis hin zu frischen Erdbeeren, und die Möglichkeit, sich sein ganz persönliches Traum-Dessert zusammenzustellen, machen unser Café zu einem wahren Paradies für die Kleinen. Wenn du einen Kindergeburtstag bei uns feiern möchtest, bieten wir euch ein rundum sorglos Paket.
                    - paragraph [ref=e349]: Wir reservieren einen großen, gemütlichen Bereich für euch. Jedes Kind bekommt die Möglichkeit, seine eigene Bubble Waffle oder seine Pancakes nach Herzenslust am Tisch selbst mit bunten Streuseln, Soßen und Toppings zu dekorieren – ein interaktives Erlebnis, das unglaublich viel Spaß macht und für leuchtende Augen sorgt. Die Eltern können sich derweil entspannt zurücklehnen, einen fantastischen Kaffee genießen und dem fröhlichen Treiben zusehen, ohne sich am Ende um das Aufräumen der Küche kümmern zu müssen. Sprecht uns einfach frühzeitig an, damit wir die Details für euren perfekten Kindergeburtstag gemeinsam planen können!
                    - heading "Teamevents und Firmenfeiern mal anders" [level=3] [ref=e350]
                    - paragraph [ref=e351]: Wer sagt eigentlich, dass Teamevents immer in dunklen Bars oder bei einem klassischen Abendessen stattfinden müssen? Ein gemeinsamer Nachmittag bei Hey Fede! ist eine erfrischende, kreative und unglaublich motivierende Alternative. Es bricht das Eis, wenn der Chef sich eine Waffel mit extra viel Schokoladensoße gönnt und die Kollegen sich über die besten Topping-Kombinationen austauschen. Wir haben bereits viele kleine Teams, Start-ups und Abteilungen lokaler Unternehmen bei uns begrüßen dürfen, die nach einem Workshop oder als Jahresabschluss bei uns gefeiert haben. Wir können individuelle Dessert-Pakete zusammenstellen, Getränke vorbereiten und dafür sorgen, dass euer Team-Ausflug ein voller Erfolg wird.
                    - separator [ref=e352]
                    - heading "Barrierefreiheit, Inklusion & Unser herzliches Service-Versprechen" [level=2] [ref=e353]
                    - paragraph [ref=e354]: Gastfreundschaft bedeutet für uns, dass jeder Mensch bei uns nicht nur willkommen, sondern bestens aufgehoben ist. Wir haben Hey Fede! von Anfang an mit dem Gedanken der Inklusion und Zugänglichkeit geplant, denn Genuss darf keine Hürden kennen.
                    - list [ref=e355]:
                        - listitem [ref=e356]:
                            - strong [ref=e357]: "Barrierefreier Zugang:"
                            - text: Unser Eingang in der Langgasse 68 ist ebenerdig gestaltet. Es gibt keine lästigen Stufen an der Tür, sodass der Zugang für Rollstuhlfahrer, Menschen mit Gehhilfen oder Rollatoren sowie für Familien mit Kinderwagen absolut problemlos und sicher möglich ist. Auch im Innenraum haben wir darauf geachtet, breite Durchgänge zwischen den Tischen zu lassen, damit man sich komfortabel bewegen kann.
                        - listitem [ref=e358]:
                            - strong [ref=e359]: "Kinder- und Familienfreundlichkeit:"
                            - text: Familien sind bei uns immer herzlich willkommen. Wir stellen gerne Hochstühle zur Verfügung, haben ausreichend Platz für Kinderwagen und unser Team hat immer ein Lächeln und Verständnis für die kleinen, lebhaften Gäste übrig. Wir wissen, dass ein Besuch mit kleinen Kindern manchmal turbulent sein kann – bei uns dürft ihr euch entspannen.
                        - listitem [ref=e360]:
                            - strong [ref=e361]: "Hunde sind willkommen:"
                            - text: Als echte Tierfreunde wissen wir, dass der Hund oft zur Familie gehört. Gut erzogene Vierbeiner sind bei uns im Café gern gesehene Gäste. Frisches Wasser für deinen treuen Begleiter stellen wir auf Anfrage selbstverständlich und gerne zur Verfügung, damit auch er sich nach dem Spaziergang durch die Altstadt erfrischen kann.
                        - listitem [ref=e362]:
                            - strong [ref=e363]: "Kostenloses WLAN und Kartenzahlung:"
                            - text: "In unserer modernen Welt ist Vernetzung wichtig. Deshalb bieten wir all unseren Gästen schnelles, kostenfreies WLAN an. Du kannst ganz entspannt arbeiten, deine Lieblingsmusik hören oder – worüber wir uns besonders freuen – direkt ein Foto deines wunderschönen Desserts auf Instagram teilen und uns markieren. An der Kasse bist du völlig flexibel: Wir akzeptieren neben Bargeld alle gängigen EC- und Kreditkarten sowie kontaktlose Zahlungsarten per Smartphone oder Smartwatch."
                    - paragraph [ref=e364]: Letztendlich ist es unser größtes Ziel, dir ein Lächeln ins Gesicht zu zaubern. Unser Team steht dir jederzeit zur Seite, berät dich leidenschaftlich gern bei der Auswahl deiner Desserts und teilt vielleicht sogar den einen oder anderen Geheimtipp zu Wetzlar mit dir. Wir lieben das, was wir tun, wir lieben unsere Stadt, und wir freuen uns unglaublich darauf, dich bald bei uns in der Langgasse 68 begrüßen zu dürfen. Komm vorbei, mach es dir gemütlich, lass den Alltag draußen und genieße deinen perfekten Moment bei Hey Fede!
    - contentinfo [ref=e365]:
        - img [ref=e368]
        - generic [ref=e370]:
            - generic [ref=e371]:
                - generic [ref=e372]:
                    - link "Startseite" [ref=e373] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e375]
                    - paragraph [ref=e376]: Dessertbar & Café
                    - generic [ref=e379]:
                        - generic [ref=e380]:
                            - img [ref=e381]
                            - generic [ref=e384]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e385]:
                            - img [ref=e386]
                            - link "06441 7890426" [ref=e388] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e390] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e391]
                        - text: Instagram
                - generic [ref=e394]:
                    - heading "Hey Fede!" [level=3] [ref=e395]
                    - navigation "Footer Navigation" [ref=e396]:
                        - link "Startseite" [ref=e397] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e398] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e399] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e400] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e401]
                    - navigation "SEO Navigation" [ref=e402]:
                        - link "Bubble Waffles" [ref=e403] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e404] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e405] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e406] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e407] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e408]:
                    - heading "Öffnungszeiten" [level=3] [ref=e409]
                    - generic [ref=e412]:
                        - generic [ref=e413]:
                            - generic [ref=e415]: Montag
                            - generic [ref=e417]: Geschlossen
                        - generic [ref=e418]:
                            - generic [ref=e420]: Dienstag
                            - generic [ref=e422]: Geschlossen
                        - generic [ref=e423]:
                            - generic [ref=e426]: Mittwoch
                            - generic [ref=e427]:
                                - generic [ref=e428]: 12:00 – 19:00 Uhr
                                - generic [ref=e429]: Heute
                        - generic [ref=e430]:
                            - generic [ref=e432]: Donnerstag
                            - generic [ref=e434]: 12:00 – 19:00 Uhr
                        - generic [ref=e435]:
                            - generic [ref=e437]: Freitag
                            - generic [ref=e439]: 12:00 – 19:00 Uhr
                        - generic [ref=e440]:
                            - generic [ref=e442]: Samstag
                            - generic [ref=e444]: 12:00 – 19:00 Uhr
                        - generic [ref=e445]:
                            - generic [ref=e447]: Sonntag
                            - generic [ref=e449]: 13:00 – 19:00 Uhr
                    - generic [ref=e450]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e451]:
                    - heading "Stay Sweet" [level=3] [ref=e452]
                    - paragraph [ref=e453]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e455]:
                        - textbox "Bleib hungrig..." [ref=e456]
                        - button "Abonnieren" [ref=e458]:
                            - generic [ref=e459]: Abonnieren
            - generic [ref=e460]:
                - generic [ref=e461]: Frisch
                - generic [ref=e462]: ·
                - generic [ref=e463]: Selbstgemacht
                - generic [ref=e464]: ·
                - generic [ref=e465]: Mit Liebe
            - generic [ref=e466]:
                - img [ref=e467]
                - img [ref=e469]
                - img [ref=e471]
                - img [ref=e473]
                - img [ref=e475]
            - generic [ref=e477]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e478]
                - paragraph [ref=e479]:
                    - generic [ref=e480]: Hessen
                    - generic [ref=e481]: ›
                    - generic [ref=e482]: Lahn-Dill-Kreis
                    - generic [ref=e483]: ›
                    - generic [ref=e484]: Wetzlar
                    - generic [ref=e485]: ›
                    - generic [ref=e486]: Langgasse
            - generic [ref=e487]:
                - heading "Besuche uns auch auf" [level=3] [ref=e488]
                - generic [ref=e489]:
                    - link "G Google" [ref=e490] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e491]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e492] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e493]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e494] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e495]: yelp
            - img "Made with Love in Wetzlar" [ref=e498]
            - generic [ref=e499]:
                - paragraph [ref=e500]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e501]:
                    - link "Impressum" [ref=e502] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e503] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e504] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e505]
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
