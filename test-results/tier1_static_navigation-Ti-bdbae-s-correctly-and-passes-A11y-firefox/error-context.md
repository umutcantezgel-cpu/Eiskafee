# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_static_navigation.spec.ts >> Tier 1: Core Navigation & Static Content >> Core Page: /about loads correctly and passes A11y
- Location: tests/e2e/tier1_static_navigation.spec.ts:56:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 198

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
+               "bgColor": "#e4c0a8",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#bd604a",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #bd604a, background color: #e4c0a8, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#E4C0A8] flex flex-col items-center justify-center gap-2 overflow-hidden flex-shrink-0 w-full aspect-square rounded-none h-full min-h-[400px]\">",
+                 "target": Array [
+                   ".min-h-\\[400px\\].rounded-none.h-full",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #bd604a, background color: #e4c0a8, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-family:monospace;font-size:9px;color:#b34832;opacity:0.8;text-align:center;line-height:1.4;padding:0 8px;white-space:pre-line\">Außenansicht\\nHey Fede! Wetzlar</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".min-h-\\[400px\\].rounded-none.h-full > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#e4c0a8",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#bd604a",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #bd604a, background color: #e4c0a8, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#E4C0A8] flex flex-col items-center justify-center gap-2 overflow-hidden flex-shrink-0 w-full aspect-square rounded-none h-full min-h-[200px]\">",
+                 "target": Array [
+                   ".flex-1.rounded-\\[32px\\].hover\\:scale-\\[1\\.02\\]:nth-child(1) > .min-h-\\[200px\\].rounded-none.h-full",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #bd604a, background color: #e4c0a8, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-family:monospace;font-size:9px;color:#b34832;opacity:0.8;text-align:center;line-height:1.4;padding:0 8px;white-space:pre-line\">Innenraum</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-1.rounded-\\[32px\\].hover\\:scale-\\[1\\.02\\]:nth-child(1) > .min-h-\\[200px\\].rounded-none.h-full > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#e4c0a8",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#bd604a",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #bd604a, background color: #e4c0a8, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-[#E4C0A8] flex flex-col items-center justify-center gap-2 overflow-hidden flex-shrink-0 w-full aspect-square rounded-none h-full min-h-[200px]\">",
+                 "target": Array [
+                   ".flex-1.rounded-\\[32px\\].hover\\:scale-\\[1\\.02\\]:nth-child(2) > .min-h-\\[200px\\].rounded-none.h-full",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #bd604a, background color: #e4c0a8, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span style=\"font-family:monospace;font-size:9px;color:#b34832;opacity:0.8;text-align:center;line-height:1.4;padding:0 8px;white-space:pre-line\">Kinderecke</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-1.rounded-\\[32px\\].hover\\:scale-\\[1\\.02\\]:nth-child(2) > .min-h-\\[200px\\].rounded-none.h-full > span",
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
                - heading "Unser Rezept? Leidenschaft." [level=1] [ref=e35]:
                    - generic [ref=e36]: Unser
                    - generic [ref=e37]: Rezept?
                    - generic [ref=e38]: Leidenschaft.
                - paragraph [ref=e39]: "Entstanden aus der einfachen Frage: Was fehlt Wetzlar?"
            - generic [ref=e41]:
                - generic [ref=e42]:
                    - generic [ref=e43]: Wie alles begann
                    - generic [ref=e44]:
                        - generic [ref=e45]: Hallo,
                        - generic [ref=e46]: ich
                        - generic [ref=e47]: bin
                        - generic [ref=e48]: Fede.
                    - generic [ref=e49]:
                        - paragraph [ref=e50]: Kein Fast-Food-Dessert, sondern handgemachte Kreationen mit Herz. Das war meine Vision.
                        - paragraph [ref=e51]: Seit September 2023 ist Hey Fede! ein Ort geworden, an dem Generationen zusammenkommen. Familien, Freunde, Großeltern mit ihren Enkeln.
                - generic [ref=e52]:
                    - generic [ref=e54]:
                        - img [ref=e55]
                        - generic [ref=e57]: Inhaberin Fede\nPorträt / Team-Foto
                    - generic [ref=e58]:
                        - generic [ref=e59]: Fede
                        - generic [ref=e60]: Gründerin & Inhaberin
            - generic [ref=e61]:
                - generic:
                    - img "shape"
                - generic [ref=e62]:
                    - generic [ref=e63]: Unsere Grundwerte
                    - generic [ref=e64]:
                        - generic [ref=e65]:
                            - generic:
                                - img "hand illustration"
                            - img [ref=e68]
                            - generic [ref=e73]:
                                - generic [ref=e74]: Kompromisslose
                                - generic [ref=e75]: Frische.
                        - generic [ref=e76]:
                            - generic:
                                - img "hand illustration"
                            - img [ref=e79]
                            - generic [ref=e81]:
                                - generic [ref=e82]: Mit
                                - generic [ref=e83]: purer
                                - generic [ref=e84]: Liebe
                                - generic [ref=e85]: gemacht.
                        - generic [ref=e86]:
                            - generic:
                                - img "hand illustration"
                            - img [ref=e89]
                            - generic [ref=e94]:
                                - generic [ref=e95]: Alles
                                - generic [ref=e96]: hausgemacht.
            - generic [ref=e97]:
                - generic [ref=e98]:
                    - generic [ref=e99]: Unser
                    - generic [ref=e100]: Zuhause
                    - generic [ref=e101]: in
                    - generic [ref=e102]: Wetzlar.
                - generic [ref=e103]:
                    - generic [ref=e105]:
                        - img [ref=e106]
                        - generic [ref=e109]: Außenansicht\nHey Fede! Wetzlar
                    - generic [ref=e110]:
                        - generic [ref=e112]:
                            - img [ref=e113]
                            - generic [ref=e118]: Innenraum
                        - generic [ref=e120]:
                            - img [ref=e121]
                            - generic [ref=e126]: Kinderecke
        - region "Die Geschichte von Hey Fede! Dessertbar Wetzlar" [ref=e127]:
            - region "Über Hey Fede! — Ausführliche Geschichte und Philosophie" [ref=e129]:
                - region [ref=e130]:
                    - heading "Ein Funke, der zur Flamme wurde — Die Anfänge von Hey Fede!" [level=2] [ref=e131]
                    - paragraph [ref=e132]: Jedes große, bedeutungsvolle Abenteuer beginnt mit einem winzigen, fast unscheinbaren Gedanken. Für Federica war dieser Gedanke kein plötzlicher Geistesblitz, der sie aus dem Nichts traf, sondern vielmehr ein leises, stetiges Flüstern, das sie über viele Jahre hinweg begleitete. Schon in ihrer frühen Jugend übte die Welt der Süßspeisen eine unbeschreibliche Faszination auf sie aus. Es war nicht nur der reine Geschmack von feinem Zucker, geschmolzener Schokolade und sonnengereiften, frischen Früchten, der sie in den Bann zog, sondern die tiefgründige emotionale Kraft, die einem liebevoll und von Hand zubereiteten Dessert innewohnt. Ein Dessert, so erkannte sie früh, ist selten nur reine Nahrungsaufnahme; es ist ein kostbarer Moment des Innehaltens, eine kleine, aber bedeutungsvolle Belohnung nach einem langen, kräftezehrenden Tag, ein sanftes Trostpflaster in schwierigen Zeiten und unweigerlich das strahlende, oft lang ersehnte Zentrum jeder familiären oder freundschaftlichen Feierlichkeit.
                    - paragraph [ref=e133]: "Federica verbrachte unzählige Stunden in der heimischen Küche. Sie beobachtete mit der Neugier einer Forscherin und der Leidenschaft einer Künstlerin, wie aus ganz einfachen, scheinbar unscheinbaren Grundzutaten – staubigem Mehl, frischen Eiern, cremiger Milch und kristallinem Zucker – unter der Zugabe von wohliger Wärme, beständiger Zeit und beharrlicher Hingabe etwas völlig Neues, geradezu Magisches entstand. Der unverwechselbare Duft von karamellisiertem Zucker, der langsam durch die heimischen Flure zog, das sanfte, leise zischende Schmelzen von goldgelber Butter in einer heißen Pfanne, das rhythmische, fast schon beruhigende Geräusch des Schneebesens, der flüssige Sahne zu luftigen, weißen Wolken schlug – all das waren für sie nicht einfach nur physikalische oder chemische Küchenprozesse. Es war reine, ungeschriebene Poesie. Es war eine universelle Sprache der tiefen Zuneigung, die sie fließend und mit großer Begeisterung zu sprechen lernte. Wenn sie schließlich ihre engsten Freunde und ihre Familie an den großen Holztisch rief, um ihre neuesten, oft noch leicht experimentellen Kreationen zu probieren, war ihr größter, wertvollster Lohn nicht das bloße verbale Lob für den perfekten Geschmack. Ihr eigentlicher, viel tiefgreifenderer Lohn war das leuchtende Funkeln in den Augen der Menschen, das augenblickliche, entspannte Aufhellen ihrer Gesichtszüge und das leise, genussvolle Seufzen unmittelbar nach dem ersten Bissen. In exakt diesen flüchtigen, aber unendlich wertvollen Momenten erkannte Federica ihre wahre, unausweichliche Berufung: Sie wollte tief im Inneren nichts anderes, als Menschen glücklich zu machen, und ihr erwähltes Werkzeug dafür war die zeitlose Kunst der süßen Verführung."
                    - paragraph [ref=e134]: 'Doch zwischen einem leidenschaftlichen Hobby in den sicheren, vertrauten heimischen vier Wänden und der tatsächlichen, oftmals furchteinflößenden Eröffnung einer eigenen, echten Dessertbar liegt ein weiter, oft äußerst steiniger und unvorhersehbarer Weg. Federicas beruflicher Werdegang führte sie zunächst in ganz andere, vernünftigere Richtungen, wo sie wertvolle Lebenserfahrungen sammelte, eiserne Disziplin lernte und den professionellen Umgang mit den unterschiedlichsten Menschen perfektionierte. Doch die lodernde Sehnsucht nach etwas vollkommen Eigenem, nach einem physischen Ort, der kompromisslos ihre ganz persönliche, unverwechselbare Handschrift trug, ließ sie nie auch nur für einen einzigen Tag los. Die eigentliche, konkrete Idee von "Hey Fede!" begann als vages, flimmerndes Konzept in kleinen, dicht beschriebenen Notizbüchern. Dort skizzierte sie mit Bleistift erste Logoentwürfe, notierte wilde Geschmackskombinationen, die ihr oft mitten in der Nacht plötzlich in den Sinn kamen, und entwarf detaillierte Grundrisse für ein imaginäres, wunderschönes Café, das bis dahin nur in ihrem Kopf existierte. Mit jedem Tag, jeder Woche und jedem Monat, der verging, wuchs in ihr die absolute, nicht mehr zu ignorierende Gewissheit, dass sie diesen Lebenstraum nicht länger in der metaphorischen Schublade verstecken durfte. Sie wusste mit jeder Faser ihres Körpers: Wenn sie es nicht zumindest mit all ihrer Kraft versuchte, würde sie es den verdammten Rest ihres Lebens zutiefst bereuen. Der finale Entschluss zur tatsächlichen Gründung war schließlich gefallen – eine Entscheidung, die gleichermaßen von unbändigem, fast schon rücksichtslosem Mut und großem, ehrfürchtigem Respekt vor der bevorstehenden Herkulesaufgabe geprägt war.'
                    - separator [ref=e135]
                    - heading "Die Suche nach dem perfekten Zuhause — Warum Wetzlar die einzige Antwort war" [level=2] [ref=e136]
                    - paragraph [ref=e137]: Ein gastronomisches Konzept kann auf dem Papier noch so brillant, durchdacht und innovativ sein; wenn der physische Ort, an dem es zum Leben erweckt werden soll, nicht die richtige Frequenz ausstrahlt, fehlt ihm schlichtweg die Seele. Für Federica stand von dem allerersten Moment an unverrückbar und ohne jeden Zweifel fest, dass ihr absolutes Herzensprojekt in Wetzlar das Licht der Welt erblicken musste. Diese Stadt ist in ihren Augen nicht einfach nur ein unbedeutender Punkt auf der Landkarte Hessens oder ein beliebiger Wohnort. Wetzlar ist ein kraftvoller Ort, der an jeder Ecke reiche Geschichte atmet, der tief verwurzelte Kultur aktiv lebt und der eine ganz eigene, fast schon greifbare, unverwechselbare Energie verströmt. Die eng verwinkelten, kopfsteingepflasterten Gassen der historischen Altstadt, die sich wie ein gemütliches Labyrinth der Geborgenheit aneinanderreihen, übten schon immer eine tiefe, fast schon magische Anziehungskraft auf sie aus. Hier, zwischen den ehrwürdigen Fachwerkhäusern, ticken die Uhren spürbar ein wenig anders, ein wenig menschlicher. Die Menschen hetzen hier nicht einfach mit anonym gesenktem Blick aneinander vorbei, isoliert in ihrer eigenen Blase; sie grüßen sich noch auf der Straße, sie bleiben auf einen kurzen Plausch stehen, sie nehmen ihre Umgebung und ihre Mitmenschen noch bewusst wahr.
                    - paragraph [ref=e138]: Die konkrete Suche nach der perfekten, für ihr Konzept maßgeschneiderten Immobilie glich einer kräftezehrenden, emotionalen Achterbahnfahrt voller Hoffnungen und Enttäuschungen. Federica besichtigte im Laufe der Zeit zahlreiche Räumlichkeiten quer durch die Stadt. Manche waren einfach viel zu groß und wirkten dadurch bedrückend kühl und unpersönlich, andere waren wiederum viel zu klein, wieder andere lagen an Durchgangsstraßen, denen jeglicher Charme und die notwendige Seele fehlte. Sie suchte schließlich nicht einfach nur nach einer gewissen Anzahl an Quadratmetern, passenden Stromanschlüssen und den gesetzlich vorgeschriebenen Fluchtwegen; sie suchte vielmehr nach einem ganz bestimmten, kaum in Worte zu fassenden Gefühl. Sie suchte nach einem Raum, der sie förmlich umarmte, wenn sie durch die knarzende Eingangstür trat. Und dann, an einem eher grauen, regnerischen Nachmittag, der eigentlich keine Offenbarungen versprach, stand sie zum allerersten Mal im Inneren der Langgasse 68. Die Langgasse ist nicht einfach irgendeine beliebige Straße in Wetzlar. Sie ist vielmehr das pulsierende, historische Herzstück der wunderschönen Wetzlarer Altstadt, eine der ältesten, traditionsreichsten und belebtesten Fußgängerzonen, durch die schon vor Jahrhunderten lauthals feilschende Händler, stolze Handwerker und flanierende Bürger schritten.
                    - paragraph [ref=e139]: "Als Federica die besagten Räumlichkeiten betrat, waren sie vollkommen leer, von einer dicken Schicht Baustaub bedeckt und bedurften einer enormen Menge an Vorstellungskraft und Fantasie, um ihr wahres Potenzial auch nur erahnen zu können. Doch in exakt dem Moment, als sie durch die großen, etwas blinden Fenster nach draußen auf das vom Regen glänzende Kopfsteinpflaster der Langgasse blickte, passierte etwas Magisches, fast schon Schicksalhaftes. Sie sah vor ihrem inneren Auge plötzlich keine kahlen, kalten Wände mehr. Sie hörte bereits das lebhafte, fröhliche Lachen unzähliger zukünftiger Gäste, die den Raum füllten; sie roch den warmen, imaginären Duft frisch gebackener, goldbrauner Waffeln; sie sah glückliche Familien, die an gemütlichen, runden Tischen saßen, und verliebte, junge Paare, die sich lachend einen cremigen Milchshake teilten. Die geografische Lage dieses Ortes war schlichtweg ein absoluter, unverhoffter Traum: Nur einen einzigen Steinwurf, exakt 350 Meter, bergauf entfernt ragt der imposante, majestätische Wetzlarer Dom schützend in den hessischen Himmel, dessen tiefes, stündliches Glockenläuten seit Jahrhunderten den ruhigen Rhythmus der Stadt vorgibt. Nur etwa 200 Meter weiter schlendert man unweigerlich am weltberühmten Lottehaus vorbei, jenem geschichtsträchtigen, musealen Ort, an dem der junge Johann Wolfgang von Goethe einst unsterblich in Charlotte Buff verliebt war und hier die entscheidende Inspiration für seinen literarischen Welterfolg „Die Leiden des jungen Werthers“ fand. Die spürbare Nähe zur sanft fließenden Lahn, deren grüne Ufer an sonnigen Tagen zu ausgedehnten, entspannenden Spaziergängen einladen, rundete das perfekte, idyllische Bild ab. Hey Fede! sollte und durfte nur genau hier entstehen – tief eingebettet in die so reiche Historie Wetzlars, liebevoll umgeben von kulturellem Erbe und buchstäblich mitten im pulsierenden Leben der Menschen."
                    - paragraph [ref=e140]: Die sich unmittelbar anschließende, monatelange Renovierungsphase war ein schierer, physischer wie psychischer Kraftakt, der Federica und ihrem unglaublich loyalen, engsten Umfeld alles, aber auch wirklich alles abverlangte. Alte, hartnäckige Wände wurden mühsam neu verputzt, unebene Böden in stundenlanger Knochenarbeit verlegt, spezielle, maßgeschneiderte Möbel in nächtlichen Sessions entworfen und von Hand zusammengebaut. Es flossen so manche salzige Tränen der absoluten Erschöpfung und der zwischenzeitlichen Verzweiflung, aber am Ende überwog immer der vergossene Schweiß der reinen Leidenschaft. Jede einzelne, bunte Fliese an der Theke, jede warm leuchtende Lampe an der Decke, jeder sorgsame Pinselstrich an der Wand wurde mit tiefstem Bedacht und unendlich viel Liebe gewählt. Das oberste Ziel war es nie, blindlings einem sterilen, austauschbaren, modernen Instagram-Trend hinterherzulaufen. Das wahre Ziel war es vielmehr, ein verlängertes, authentisches Wohnzimmer zu erschaffen. Ein vertrauter Ort, der sofort wohlige Wärme ausstrahlt, der zutiefst authentisch und echt ist und der jeden einzelnen Gast, der zögerlich oder zielstrebig über die hölzerne Schwelle tritt, sofort in eine tröstliche, gemütliche und friedvolle Atmosphäre hüllt. Als im goldenen September 2023 dann endlich das sorgfältig designte Schild „Hey Fede!“ gut sichtbar über der Tür hing und die Lichter zum allerersten Mal ganz offiziell für die Öffentlichkeit eingeschaltet wurden, war es für alle Beteiligten nicht nur die schnöde Geschäftseröffnung eines weiteren Ladens. Es war die triumphal gefeierte Manifestation eines tiefgreifenden Lebenstraums, der hier in der Langgasse 68 endlich seine feste, wunderschöne physische Form gefunden hatte.
                    - separator [ref=e141]
                    - heading "Die unumstößliche Philosophie — Ehrliches Handwerk, Zeit und absolute Hingabe" [level=2] [ref=e142]
                    - paragraph [ref=e143]: "In einer hektischen, von Effizienz getriebenen gastronomischen Landschaft, die zunehmend und erschreckend oft von seelenloser Systemgastronomie, billigen Convenience-Produkten, künstlichen Zusatzstoffen und der reinen, unbarmherzigen Profitoptimierung dominiert wird, stellt Hey Fede! einen ganz bewussten, fast schon trotzigen und rebellischen Gegenentwurf dar. Unsere tief in uns verankerte Philosophie ist nicht einfach nur ein hübscher Marketing-Slogan, der auf Hochglanzbroschüren gedruckt wird, sondern sie wird jeden einzelnen verdammten Tag in unserer kleinen, heißen Küche von uns allen gelebt und geatmet. Sie lässt sich im Grunde in einem einzigen, kraftvollen, nicht verhandelbaren Satz zusammenfassen: Wir machen niemals, unter keinen Umständen, auch nur den geringsten Kompromiss bei der Qualität. Was in der Theorie so unfassbar einfach und logisch klingt, erfordert in der täglichen, harten Umsetzung immense, eiserne Disziplin, unermüdlichen, körperlichen Fleiß und einen absolut unerschütterlichen, fast religiösen Glauben an das eigene ehrliche Handwerk."
                    - paragraph [ref=e144]: "Für uns bedeutet das oft fälschlich verwendete Prädikat „hausgemacht“ noch genau das, was es ursprünglich heißen sollte: von unseren eigenen, echten Händen und mit unserem eigenen Schweiß hergestellt. Wenn Federica oder ein Teammitglied morgens als Allerster im Morgengrauen die Tür zur Langgasse aufschließt, die kühle Stille der noch tief schlafenden Altstadt hinter sich lässt und mit einem leisen Klicken das warme Licht in der Vorbereitungsküche einschaltet, beginnt ein tägliches, fast meditatives Ritual, das mit tiefstem, aufrichtigem Respekt vor den Lebensmitteln einhergeht. Wir rühren jeden unserer Teige vollkommen selbst an, basierend auf geheimen, komplexen Rezepten, die Federica in jahrelanger, oft frustrierender Kleinarbeit entwickelt, verworfen, neu gedacht und schließlich bis zur absoluten, unanfechtbaren Perfektion verfeinert hat. Wir verzichten aus tiefster Überzeugung geradezu kategorisch auf den Einsatz jeglicher industrieller Backmischungen, weigern uns, künstliche, im Labor erzeugte Aromastoffe oder chemische Geschmacksverstärker zu nutzen, und verbannen fertige, farbstoffübersättigte Pürees aus großen Plastikeimern strikt aus unseren Räumlichkeiten. Wenn ein frisch serviertes Dessert bei uns intensiv und wohlig nach Vanille schmeckt, dann einzig und allein deshalb, weil echte, kostbare Vanilleschoten von uns ausgekratzt und verwendet wurden. Wenn ein cremiger Shake nach reifer Erdbeere schmeckt, dann nur deshalb, weil wir tatsächliche, frische Erdbeeren stundenlang gewaschen, geputzt und von Hand püriert haben."
                    - paragraph [ref=e145]: Diese traditionelle, handwerkliche Herangehensweise ist naturgemäß unglaublich zeitaufwendig. Sie erfordert unzählige, kleine Handgriffe, die große, automatisierte Industriemaschinen vielleicht in einem Bruchteil der Zeit erledigen könnten. Sie erfordert das ständige, aufmerksame Abschmecken, das sensible Justieren von feinsten geschmacklichen Nuancen, das genaue, erfahrungsbasierte Beobachten der Teigkonsistenz je nach Luftfeuchtigkeit und Tagestemperatur. Aber genau diese investierte Zeit, diese fokussierte Aufmerksamkeit, diese essenzielle, warme menschliche Komponente ist am Ende unsere wichtigste, unersetzliche Geheimzutat. Wir sind fest und unwiderruflich davon überzeugt, dass Nahrungsmittel die Energie aufnehmen, mit der sie behandelt werden. Ein Teig, der lieblos, gestresst und mechanisch angerührt wurde, wird niemals, nicht in tausend Jahren, so gut schmecken wie ein Teig, dem mit echter Sorgfalt, Ruhe und aufrichtiger Hingabe begegnet wurde.
                    - heading "Die Säulen unseres Handwerks" [level=3] [ref=e146]
                    - paragraph [ref=e147]: "Unsere Philosophie stützt sich auf mehrere grundlegende, nicht verhandelbare Säulen, die das eiserne Fundament unserer täglichen Arbeit bilden:"
                    - list [ref=e148]:
                        - listitem [ref=e149]:
                            - strong [ref=e150]: "Radikale Transparenz:"
                            - text: Unsere geschätzten Gäste haben das absolute, uneingeschränkte Recht zu wissen, was sie essen und ihren Kindern zu essen geben. Wir kennen jeden einzelnen Bestandteil unserer sorgfältig ausgetüftelten Rezepte in- und auswendig. Ob es nun um komplexe Allergene, spezifische, persönliche Ernährungsweisen oder einfach nur um kulinarische Neugier geht – wir stehen jederzeit offen, ehrlich und detailliert Rede und Antwort. Bei uns gibt es keine verborgenen Zutatenlisten.
                        - listitem [ref=e151]:
                            - strong [ref=e152]: "Der Mut zum mutigen Weglassen:"
                            - text: Ein in sich perfektes, harmonisches Dessert braucht keine zwanzig überladenen Zutaten, um geschmacklich zu überzeugen. Es braucht wenige, aber dafür absolut erstklassige, herausragende Komponenten, die perfekt ausbalanciert und harmonisch miteinander interagieren. Wir verzichten ganz bewusst auf unnötigen, effekthascherischen Schnickschnack, der vielleicht für ein Foto gut aussieht, aber absolut keinen spürbaren geschmacklichen Mehrwert bietet. Weniger ist mehr, wenn das Wenige von höchster Qualität ist.
                        - listitem [ref=e153]:
                            - strong [ref=e154]: "Ständige, rastlose Evolution statt bequemem Stillstand:"
                            - text: Obwohl wir unglaublich stolz auf unsere fest etablierten, geliebten bewährten Rezepte sind, ruhen wir uns niemals, keinen einzigen Tag, selbstgefällig darauf aus. Unsere kleine Küche ist unser kreatives Labor. Wir experimentieren dort nach Ladenschluss fortwährend und leidenschaftlich mit neuen, spannenden Texturen, regionalen und saisonalen Einflüssen sowie ungewöhnlichen, mutigen Geschmackskombinationen, um unsere treuen Gäste (und nicht zuletzt auch uns selbst) immer wieder aufs Neue kulinarisch zu überraschen und zu begeistern.
                        - listitem [ref=e155]:
                            - strong [ref=e156]: "Qualität geht immer kompromisslos vor Quantität:"
                            - text: Wenn eine bestimmte Zutat, etwa frische Früchte vom Markt, an einem bestimmten Tag nicht unseren extrem hohen, strengen Standards entspricht, wird das entsprechende Produkt an diesem Tag schlichtweg nicht angeboten. Punkt. Lieber verzichten wir zähneknirschend auf wertvollen Tagesumsatz, als das hart erarbeitete, blinde Vertrauen unserer Gäste durch auch nur ein einziges Mal mittelmäßige, unzureichende Qualität leichtfertig zu gefährden.
                    - paragraph [ref=e157]: Jedes einzelne, mit Liebe gefertigte Dessert, das vorsichtig über unsere Theke in die wartenden Hände eines Gastes wandert, ist ein stolzer, kleiner Botschafter genau dieser Philosophie. Es trägt tief in seinem süßen Kern unsere feste Überzeugung in sich, dass wahrer, unvergesslicher Genuss immer und ausnahmslos aus gelebter Authentizität, handwerklicher Ehrlichkeit und einer unermesslich großen Portion Liebe entspringt.
                    - separator [ref=e158]
                    - heading "Eine Sinfonie der Sinne — Unsere Produkte und Kreationen im Detail" [level=2] [ref=e159]
                    - paragraph [ref=e160]: Wenn man die große, liebevoll gestaltete Speisekarte von Hey Fede! im Gastraum betrachtet, liest sie sich nicht wie eine gewöhnliche, langweilige Auflistung von austauschbaren Nachtischen, wie man sie überall findet. Sie ist vielmehr eine äußerst sorgfältig kuratierte, durchdachte Galerie von intensiven Geschmackserlebnissen, von denen jedes einzelne eine eigene, spannende Geschichte von Versuch, Irrtum und schließlichem Triumph erzählt. Unsere unangefochtenen Kernprodukte – die ikonischen Bubble Waffles, die himmlisch weichen Pancakes und die reichhaltigen Shakes – sind keine zufällige, schnelle Auswahl. Sie sind vielmehr das hart erarbeitete Ergebnis unzähliger Testläufe, kritischer Verkostungen im Freundeskreis und vieler schlafloser Nächte der Rezeptoptimierung. Wir haben es uns von Tag eins an zur absoluten Aufgabe gemacht, bekannte Dessert-Klassiker nicht einfach nur lieblos zu kopieren, sondern sie komplett neu zu interpretieren, ihre Texturen zu verfeinern und sie auf ein völlig neues, bis dato in Wetzlar ungekanntes Level zu heben.
                    - heading "Die unverkennbare Magie der Bubble Waffles" [level=3] [ref=e161]
                    - paragraph [ref=e162]: "Die Hey Fede! Bubble Waffle ist weit mehr als nur ein optisch ansprechendes Trendprodukt für den schnellen Social-Media-Post; sie ist eine regelrechte architektonische Meisterleistung aus feinstem Teig. Was auf den allerersten Blick so wunderbar verspielt und fast schon ein wenig exotisch wirkt, ist in der Vorbereitung und der tatsächlichen, punktgenauen Zubereitung eine hochkomplexe Kunst für sich. Unser spezieller Waffelteig wird jeden verdammten Tag in den frühen Morgenstunden mehrfach frisch von uns angesetzt. Er muss exakt die richtige, heikle Balance aus luftiger Leichtigkeit und notwendiger Dichte aufweisen, um später in den kochend heißen, schweren, wabenförmigen Spezialeisen perfekt und gleichmäßig aufzugehen. Das genaue Timing beim Backvorgang ist absolut essenziell und duldet keine Ablenkung: Nur wenige, entscheidende Sekunden entscheiden unerbittlich darüber, ob die fertige Waffel außen diese einzigartige, unwiderstehliche, goldbraune Knusprigkeit erreicht, während die vielen kleinen, charakteristischen „Bubbles“ tief in ihrem Inneren noch wunderbar weich, wolkig, warm und fluffig bleiben."
                    - paragraph [ref=e163]: Doch der meisterhafte Teig ist letztlich nur die leere, wenn auch köstliche Leinwand. Das wahre, atemberaubende Meisterwerk entsteht erst bei der kunstvollen Befüllung durch unser Team. Wenn wir eine Bubble Waffle für einen Gast kreieren, achten wir peinlich genau auf ein hochkomplexes, perfekt abgestimmtes Zusammenspiel von kontrastierenden Texturen und überraschenden Temperaturen. Die wohlige, tröstliche Wärme der soeben frisch gebackenen Waffel trifft in perfekter Harmonie auf die erfrischende, kühle, cremige Schmelze von hochwertigstem Eis. Dazu gesellen sich handverlesene, frische Früchte, die eine dringend benötigte, natürliche Säure und Leichtigkeit einbringen. Um das Ganze abzurunden, fügen wir gezielt knusprige Elemente wie frisch geröstete, duftende Nüsse oder von Hand zerkrümelte, feine Kekse für den essenziellen, befriedigenden „Crunch“ im Mund hinzu, und schließlich die seidigen, reichhaltigen Saucen, die sich wie ein glänzendes, verführerisches Netz über das gesamte, essbare Gesamtkunstwerk legen. Jeder einzelne Bissen, den der Gast nimmt, ist völlig anders, jeder Bissen ist eine neue, süße Überraschung. Wir drapieren die Toppings nicht einfach lieblos oder hektisch übereinander; wir platzieren sie mit der ruhigen, geübten Präzision eines Goldschmieds, damit das Auge vor dem Essen ebenso voll auf seine Kosten kommt wie danach der verwöhnte Gaumen.
                    - 'heading "Pancakes: Gestapeltes, warmes Glück" [level=3] [ref=e164]'
                    - paragraph [ref=e165]: Es gibt wahrscheinlich auf der ganzen Welt kaum ein Gericht, das so sehr und so laut nach einem unbeschwerten, langen, gemütlichen Sonntagmorgen schreit wie ein dicker, dampfender Stapel wunderbar frischer Pancakes. Bei Hey Fede! haben wir diesen magischen Sonntagmorgen eingefangen und zum ständigen, verlässlichen Begleiter für jeden Tag der Woche gemacht. Unsere Pancakes sind meilenweit entfernt von den flachen, oft zähen, traurigen Fladen, die man leider vielerorts lieblos serviert bekommt. Sie sind von einer unglaublichen Fluffigkeit, backen im Inneren extrem luftig auf und saugen die herrlichen Aromen der sorgfältig ausgewählten begleitenden Zutaten förmlich in sich auf wie ein Schwamm, ohne dabei auch nur im Geringsten ihre aufrechte, weiche Struktur zu verlieren.
                    - paragraph [ref=e166]: Ihre Zubereitung auf der millimetergenau temperierten, heißen Platte erfordert höchstes handwerkliches Fingerspitzengefühl und ständige Präsenz. Wir wenden sie mit einem gekonnten Schwung genau in jenem flüchtigen, perfekten Moment, in dem sich an der Teigoberfläche winzige, kleine Bläschen bilden, um absolut sicherzustellen, dass sie eine perfekte, gleichmäßige, goldbraune und unglaublich appetitliche Bräunung erhalten. Ob nun ganz puristisch und klassisch überschüttet mit reinem, dunkel-bernsteinfarbenem, echtem kanadischem Ahornsirup und gekrönt von einem langsam schmelzenden Stück bester Butter, oder in weit dekadenteren, moderneren Varianten mit reichhaltiger, grüner Pistaziencreme, säuerlich-frischen Beeren der Saison und großzügigen Raspeln von zartschmelzender, weißer Schokolade – unsere Pancakes sind nicht weniger als eine warme, tröstliche Umarmung von innen heraus. Sie sind pures, unverfälschtes Soul Food in seiner reinsten, ehrlichsten und unwiderstehlichsten Form.
                    - 'heading "Shakes: Kalte Erfrischung mit unverkennbarem, starkem Charakter" [level=3] [ref=e167]'
                    - paragraph [ref=e168]: Ein guter, solider Shake ist im Grunde genommen einfach nur etwas Milch, die lieblos mit ein wenig Eiscreme im Mixer verrührt wurde. Ein herausragender, unvergesslicher Shake hingegen ist eine flüssige, aromatische Offenbarung, die lange im Gedächtnis bleibt. Bei der monatelangen Entwicklung unserer Fede-Shakes haben wir extrem viel Wert, Zeit und Nerven auf die perfekte Textur gelegt. Sie müssen zwingend dickflüssig genug sein, um ein wirklich vollmundiges, befriedigendes Mundgefühl zu erzeugen, aber gleichzeitig noch geschmeidig und flüssig genug, um mühelos und ohne große Anstrengung durch den Strohhalm zu gleiten. Wir verwenden in unseren Mixern ausschließlich und ohne Ausnahme absolute Premium-Zutaten, um hundertprozentig sicherzustellen, dass der finale Geschmack unglaublich intensiv, rund und zu jeder Zeit authentisch ist.
                    - paragraph [ref=e169]: Ein Erdbeer-Shake bei Hey Fede! schmeckt nicht nach einer blassen Idee von Obst, er schmeckt voll und intensiv nach echten, roten, sonnengereiften Erdbeeren, und niemals nach jenem künstlichen, kratzigen Aromastoff aus dem Chemielabor, der so oft verwendet wird. Ein Schokoladen-Shake bei uns offenbart tiefgründige, komplexe, erdige Kakaonoten, die selbst die kritischsten Liebhaber dunkler, hochwertiger Schokolade in augenblickliche Verzückung versetzen. Unsere Shakes sind durchweg opulent konzipiert, werden äußerst großzügig und mit viel Liebe zum Detail am Glasrand garniert und sind so intelligent ausbalanciert, dass sie sowohl an brennend heißen Hochsommertagen in der Altstadt eine perfekte, willkommene Abkühlung bieten, als auch tief im frostigen Winter als ein wunderbar reichhaltiges, süßes und extrem tröstliches Getränk fungieren, das die Seele wärmt.
                    - separator [ref=e170]
                    - heading "Herkunft, Qualität und tiefgreifendes Vertrauen — Unsere Zutaten und Partner" [level=2] [ref=e171]
                    - paragraph [ref=e172]: Die zutiefst romantische, fast schon verklärte Vorstellung von handwerklicher Perfektion und unbändiger Leidenschaft in der Küche bleibt letztlich immer nur eine wunderschöne Illusion, wenn sie nicht knallhart durch die unerbittliche, bodenständige Realität absolut erstklassiger, fehlerfreier Zutaten gedeckt wird. Ein Küchenchef, so unendlich talentiert und erfahren er auch sein mag, kann ein qualitativ minderwertiges, schlechtes Produkt niemals durch bloße technische Zauberei in etwas Exzellentes verwandeln. Deshalb beginnt die eigentliche, wichtigste Arbeit bei Hey Fede! lange, lange bevor am frühen Morgen der erste Schneebesen geschwungen wird – sie beginnt tief an der Basis, bei der sorgfältigen, strengen Auswahl unserer Lieferanten und unserer landwirtschaftlichen Partner.
                    - paragraph [ref=e173]: Wir betrachten unsere geschätzten Lieferanten nicht einfach als austauschbare, gesichtslose Geschäftspartner, die Rechnungen schreiben, sondern als absolut integrale, unverzichtbare Bestandteile der erweiterten Fede-Familie. Diese essenziellen Beziehungen sind über die Jahre hinweg durch unglaublich viele, intensive persönliche Gespräche vor Ort, das Teilen von gemeinsamen, hohen Werten und ein extrem tiefes, beiderseitiges gegenseitiges Vertrauen gewachsen. Wenn wir ganz genau wissen, wer frühmorgens die Kühe gemolken hat, deren frische Milch wir später verarbeiten, wenn wir den Bauern persönlich kennen, der noch im feuchten Morgentau auf dem hessischen Feld kniend die roten Erdbeeren für uns geerntet hat, dann schließt sich ein wunderbarer, intakter Kreis der tiefen Wertschätzung und des Respekts, den man am Ende unweigerlich auch in jedem einzelnen Bissen schmeckt.
                    - list [ref=e174]:
                        - listitem [ref=e175]:
                            - strong [ref=e176]: "Heimatliebe und kompromisslose Regionalität:"
                            - text: Die Stadt Wetzlar und das wunderbare, weite Umland in ganz Mittelhessen bieten glücklicherweise eine immense Fülle an absolut hervorragenden, frischen landwirtschaftlichen Erzeugnissen. Wo immer es logistisch auch nur im Ansatz machbar und qualitativ vertretbar ist, beziehen wir unsere sensiblen Rohstoffe direkt, ohne große Umwege aus der nahen Region. Das unterstützt nicht nur aktiv die lokale Wirtschaft, fördert kurze Wege und sichert wertvolle Arbeitsplätze direkt vor Ort in der Landwirtschaft, sondern es garantiert uns auch eine unglaubliche, unschlagbare Frische, die durch tagelange, anonyme Transportwege quer durch Europa schlichtweg unmöglich zu erreichen wäre. Frisches, saftiges Obst, beste Eier von garantiert freilaufenden, glücklichen Hühnern und hochwertige Milchprodukte aus kleinen, regionalen Molkereien bilden das absolut unerschütterliche, geschmackliche Rückgrat unseres gesamten Sortiments.
                        - listitem [ref=e177]:
                            - strong [ref=e178]: "Global denken, wo es geschmacklich nötig ist:"
                            - text: "Natürlich sind wir Realisten und wissen: Es gibt fantastische Zutaten, die aufgrund des Klimas in Hessen nun einmal nicht wachsen können. Echte, aromatische Vanille aus Madagaskar, hochwertiger, kräftiger Kakao aus Südamerika oder ganz bestimmte, sonnenverwöhnte exotische Früchte müssen zwangsläufig importiert werden. In all diesen Fällen greifen wir nach langer Recherche ausschließlich auf absolut vertrauenswürdige, zertifizierte Händler zurück, die uns eine lückenlose, nachvollziehbare Transparenz über die genaue Herkunft und die spezifischen Anbaubedingungen gewährleisten können. Echter Fair Trade, faire Bezahlung der Bauern und ethisch vertretbare, gute Arbeitsbedingungen auf den Plantagen sind für uns dabei absolut keine optionalen Boni für ein reines Gewissen, sondern zwingende, unverhandelbare Voraussetzungen für eine Zusammenarbeit."
                        - listitem [ref=e179]:
                            - strong [ref=e180]: "Absolut inklusiver Genuss durch strenge Halal-Zertifizierung:"
                            - text: Wir bei Hey Fede! glauben tief, fest und aus vollem Herzen daran, dass wahrer Genuss keine Grenzen ziehen, keine Religionen ausklammern und keine kulturellen Barrieren errichten sollte. Gutes Essen verbindet Menschen seit Jahrtausenden auf die allerursprünglichste, ehrlichste und friedlichste aller Arten. Um absolut sicherzustellen, dass sich bei uns in der Langgasse wirklich jeder einzelne Gast bedingungslos willkommen, respektiert und kulinarisch sicher fühlt, haben wir von Anfang an sehr strenge, unnachgiebige Richtlinien für den Einkauf unserer Zutaten eingeführt. Ein entscheidender, sehr wichtiger Teil dieser Bemühungen ist die konsequente Überprüfung und Halal-Zertifizierung relevanter, heikler Produkte in unserem Sortiment, insbesondere wenn es um Zutaten wie Gelatine, bestimmte komplexe Aromen oder unsere beliebten Marshmallows geht. Unsere zahlreichen muslimischen Gäste können sich bei jedem Besuch zu 100% darauf verlassen, dass sie bei Hey Fede! vollkommen bedenkenlos und entspannt schlemmen können, ohne im Vorfeld nervös winzig gedruckte Inhaltsangaben auf Verpackungen studieren zu müssen.
                        - listitem [ref=e181]:
                            - strong [ref=e182]: "Tief empfundener Respekt vor dem kostbaren Lebensmittel:"
                            - text: Zu guter Letzt gebietet es der bloße, moralische Respekt vor der Natur, die alles hervorbringt, und den hart arbeitenden Produzenten, dass wir mit den uns anvertrauten Lebensmitteln in unserer Küche äußerst sorgsam, achtsam und wirtschaftlich umgehen. Wir kalkulieren unsere tägliche Produktionsmenge an Teig und frischen Früchten mit allergrößter, analytischer Präzision, lagern alle sensiblen Zutaten unter optimalen klimatischen Bedingungen und minimieren so den unvermeidbaren Ausschuss auf ein absolutes, kaum noch messbares Minimum. Ein noch gutes Lebensmittel aufgrund von schlechter Planung achtlos in den Müll wegzuwerfen, ist für uns nicht nur ein vermeidbarer wirtschaftlicher Verlust für das Geschäft, sondern vor allem ein schwerer, ethischer Fehler, den wir unter allen Umständen verhindern wollen.
                    - separator [ref=e183]
                    - heading "Das pulsierende, laute Herz unserer Mission — Die Hey Fede! Community" [level=2] [ref=e184]
                    - paragraph [ref=e185]: "Wenn man spät abends, weit nach offiziellem Ladenschluss, erschöpft, aber glücklich durch den leeren Raum in der Langgasse läuft, die schweren Holzstühle gewissenhaft auf die Tische stellt und den warmen Holzboden fegt, könnte man als Außenstehender vielleicht für einen kurzen Moment denken, Hey Fede! sei letztendlich auch nur ein gastronomisches Geschäft wie jedes andere in der Stadt. Ein simpler Raum, ausgestattet mit einigen Tischen, Stühlen, Lampen und einer Kühltheke. Doch wer tagsüber auch nur einmal etwas länger bei uns gesessen, das treiben beobachtet und die Luft geatmet hat, der weiß mit unumstößlicher Sicherheit: Das eigentliche, unzerstörbare Fundament dieses besonderen Ortes besteht nicht aus gebrannten Ziegeln, gestrichenem Holz und getrocknetem Mörtel, sondern einzig und allein aus den wunderbaren Menschen, die ihn täglich mit Leben, Lärm und Liebe füllen. Unsere bunte Community, unsere unglaublich treuen Gäste, sind die eigentliche, strahlende Seele von Hey Fede!"
                    - paragraph [ref=e186]: Als Federica am Tag der Eröffnung mit zitternden Händen die Türen zum allerersten Mal aufschloss, hoffte sie tief in sich drinnen natürlich auf Kunden, die ihre Rechnungen bezahlen würden. Was sie stattdessen innerhalb kürzester Zeit und völlig unerwartet bekam, war eine riesige, bunte, manchmal laute, aber immer unglaublich liebevolle und unterstützende Familie. Der stetige Aufbau dieser einzigartigen Gemeinschaft in Wetzlar verlief völlig organisch, natürlich und ohne jeden Zwang. Es gab bei uns nie ausgeklügelte, teure Marketingstrategien aus Agenturen oder aggressive, groß angelegte Werbekampagnen mit leeren Versprechungen. Es war schlichtweg und ergreifend die ehrliche, authentische Gastfreundschaft und die kompromisslose Qualität auf dem Teller, die von begeistertem Mensch zu neugierigem Mensch weitergetragen wurde. Wer bei uns zur schweren Eingangstür hereinkommt, ist nicht einfach nur ein anonymer Konsument, der eine kalte, geschäftliche Transaktion an der Kasse durchführt. Er ist ein geschätzter Gast, ein Freund in unserem Haus, der eine gute Zeit verdient hat.
                    - paragraph [ref=e187]: Wir haben als Team das geradezu unglaubliche Privileg, Menschen in ihren allerschönsten, glücklichsten und manchmal eben auch in ihren traurigsten, verletzlichsten Momenten begleiten zu dürfen. Wir haben mit feuchtem Blick von der Theke aus unzählige erste Dates beobachtet, bei denen zwei junge Menschen unglaublich schüchtern und nervös über ihren großen Shakes zusammensaßen, kaum wagend, sich in die Augen zu schauen. Monate, manchmal Jahre später kamen exakt dieselben Menschen strahlend und fest Hand in Hand zu uns zurück. Wir haben stolze Großeltern erlebt, die mit dem größten Stolz der ganzen Welt ihre winzigen, neugeborenen Enkelkinder der Belegschaft präsentierten, während sie feierlich eine große Bubble Waffle teilten. Wir haben verzweifelte Schüler gesehen, die nach einer völlig verhauenen, katastrophalen Mathearbeit dringend Trost in einem riesigen, warmen Berg von flüssiger Schokoladensauce suchten, und wir haben dutzende ausgelassene Examensfeiern mit knallendem Sekt, lautem Lachen und unzähligen Pancakes bis in den späten Nachmittag hinein begleitet.
                    - paragraph [ref=e188]: Unsere vielen Stammgäste sind das unbestreitbare Herzblut unseres oftmals anstrengenden Café-Alltags. Wir kennen ihre vertrauten Gesichter, wir kennen ihre Vornamen und wir kennen vor allem ihre ganz speziellen, individuellen Vorlieben und Gewohnheiten. Ein kurzer Zuruf wie „Das Übliche für Thomas?“ ist bei uns keine einstudierte, künstliche Gastro-Floskel, sondern tief gelebte, herzliche Realität. Sehr oft fangen wir schon routiniert an, den bevorzugten Lieblingsteig vorzubereiten, wenn wir jemanden bereits von Weitem durch das große Fenster der Langgasse auf unseren Laden zukommen sehen. Dieser stetige persönliche Kontakt, dieser kurze, aber wichtige Moment des völlig echten Austauschs – das kurze, freundliche Plaudern über das trübe Wetter, die Kinder, die letzte Reise oder den stressigen neuen Job – exakt das sind die kleinen, unscheinbaren Dinge, die unsere tägliche Arbeit so unendlich, unbezahlbar wertvoll und erfüllend machen.
                    - paragraph [ref=e189]: Hinter der geschäftigen Theke steht ein starkes Team, das diese tiefen menschlichen Werte bedingungslos teilt und lebt. Federica hat ihre Mitarbeiterinnen und Mitarbeiter von Tag eins an nicht in erster Linie nach deren Fähigkeit ausgewählt, einen Teller in Rekordzeit möglichst perfekt und symmetrisch zu dekorieren. Solche rein technischen, handwerklichen Fertigkeiten kann man mit etwas Geduld jedem lernen. Was man einem Menschen jedoch absolut nicht lernen kann, ist tiefe Empathie, natürliche Herzenswärme, Geduld und die aufrichtige, ehrliche Freude daran, anderen, fremden Menschen eine gute Zeit und ein Lächeln zu bereiten. Unser Team ist eine extrem eingeschworene, loyale Gemeinschaft, eine echte zweite Familie geworden. Wir lachen laut zusammen, wir schwitzen gemeinsam an den extrem heißen, kräftezehrenden Sommertagen, wenn sich die hungrigen Schlangen der Wartenden bis weit hinaus auf das Kopfsteinpflaster der Straße bilden, und wir stehen in Krisen immer felsenfest füreinander ein. Diese spürbare, unglaublich positive Energie, die hinter unserer Theke herrscht, überträgt sich unsichtbar, aber unweigerlich auf den gesamten Gastraum. Man kann dauerhaft gute Laune nicht vortäuschen – Menschen spüren das. Und wer Hey Fede! betritt, der spürt in der allerersten Sekunde, dass hier Menschen arbeiten, die ihren harten Job aufrichtig, aus tiefstem Herzen lieben.
                    - separator [ref=e190]
                    - heading "Der weite Blick über den Tellerrand — Unsere Verantwortung für gelebte Nachhaltigkeit" [level=2] [ref=e191]
                    - paragraph [ref=e192]: "Die große Liebe zu hochwertigen Lebensmitteln und die unbändige Freude am unbeschwerten Genuss dürfen niemals, an keinem Punkt der Kette, zu Lasten unserer empfindlichen Umwelt gehen. Als florierendes Unternehmen, das so fest und glücklich in der lokalen Wetzlarer Gemeinschaft verwurzelt ist, tragen wir eine unbedingte, nicht verhandelbare Verantwortung für die Welt, die wir den nachfolgenden Generationen hinterlassen wollen. Der Begriff der Nachhaltigkeit ist in der modernen Gastronomie leider oft zu einem reinen, missbrauchten Buzzword für PR-Kampagnen verkommen, doch bei Hey Fede! betrachten wir sie als einen kontinuierlichen, ernsten und täglichen Auftrag, der jeden noch so kleinen Aspekt unseres wirtschaftlichen Handelns durchdringt. Wir sind dabei ehrlich genug zuzugeben: Wir sind absolut nicht perfekt. Es gibt bei uns immer noch Prozesse, die optimiert werden können, und ökologische Herausforderungen, für die wir momentan noch nicht die ultimative, perfekte Lösung gefunden haben. Aber wir versprechen hiermit feierlich, dass wir jeden Tag extrem hart daran arbeiten, unseren unvermeidbaren ökologischen Fußabdruck so gering und unsichtbar wie nur irgend möglich zu halten."
                    - paragraph [ref=e193]: "Unser tiefes, ehrliches Engagement für eine grünere, saubere Zukunft manifestiert sich für unsere Gäste sichtbar in verschiedenen, ganz konkreten und messbaren Handlungsfeldern:"
                    - list [ref=e194]:
                        - listitem [ref=e195]:
                            - strong [ref=e196]: "Der kompromisslose Kampf gegen die bequeme Wegwerfgesellschaft:"
                            - text: Der völlig ausufernde Einsatz von billigen Einwegverpackungen ist unbestritten eine der allergrößten ökologischen Herausforderungen unserer Zeit und unserer Branche. Wir haben diesem enormen Problem von Beginn an lautstark den Kampf angesagt. Wo immer es im Café-Alltag logistisch und gesetzlich hygienisch machbar ist, setzen wir ohne Ausnahme auf echte, schwere Teller, echtes Metallbesteck und langlebige, echte Gläser. Für das immer wichtiger werdende Take-away-Geschäft, das insbesondere an schönen, sonnigen Tagen in der Altstadt stark boomt, haben wir monatelang nach den bestmöglichen, nachhaltigsten Verpackungslösungen gesucht, ohne dabei an Qualität zu sparen. Unsere beliebten "Fede Boxen" und unsere To-Go-Becher bestehen heute zu einem überwiegenden, sehr großen Teil aus bereits recycelten oder sehr leicht kompostierbaren, umweltfreundlichen Materialien. Sinnlose Plastikstrohhalme wurden von uns schon lange und endgültig in die dunklen Geschichtsbücher verbannt.
                        - listitem [ref=e197]:
                            - strong [ref=e198]: "Die aktive Förderung von intelligenten Mehrwegsystemen:"
                            - text: "Wir glauben an Belohnung statt Bestrafung und belohnen deshalb Gäste aktiv, die selbst Verantwortung für ihren Konsum übernehmen. Jeder Gast, der seinen eigenen, sauberen Mehrwegbecher für einen unserer Shakes oder seinen eigenen, mitgebrachten Behälter für eine Waffel auf die Theke stellt, wird von uns nicht nur mit einem besonders freudigen, dankbaren Lächeln, sondern oft auch mit einem kleinen, finanziellen Bonus oder einem extra Topping bedacht. Wir sind fest davon überzeugt: Es sind exakt diese vielen kleinen, scheinbar unbedeutenden Verhaltensänderungen im Alltag jedes Einzelnen, die in der großen Summe eine gewaltige, rettende Wirkung für unseren Planeten entfalten können."
                        - listitem [ref=e199]:
                            - strong [ref=e200]: "Strikte Energieeffizienz leise hinter den Kulissen:"
                            - text: "Es ist kein Geheimnis: Eine voll ausgestattete, gewerbliche Küche benötigt extrem viel Strom und unzählige Liter Wasser am Tag. Durch die anfängliche, bewusste Investition in modernste, hochpreisige und extrem energieeffiziente Kühlgeräte, Hightech-Waffeleisen und wassersparende Spülmaschinen konnten wir unseren täglichen Verbrauch jedoch signifikant und messbar senken. Wir achten im Team zudem penibel darauf, energiehungrige Geräte auch wirklich nur dann einzuschalten, wenn sie auch tatsächlich akut benötigt werden. Selbst unsere gesamte, warme Beleuchtung im Gastraum, die so unendlich viel zur berühmten, gemütlichen Hey Fede! Atmosphäre beiträgt, basiert mittlerweile vollständig auf hochmoderner, extrem stromsparender LED-Technologie."
                        - listitem [ref=e201]:
                            - strong [ref=e202]: "Lebensmittelverschwendung radikal minimieren (Das Zero Waste Mindset):"
                            - text: Durch unsere extrem exakte, auf jahrelangen, akribischen Erfahrungswerten basierende tägliche Produktionsplanung schaffen wir es fast immer, am Ende eines langen Verkaufstages kaum noch angerührten Teig oder geschnittene, frische Zutaten übrig zu haben. Sollte wider Erwarten doch einmal etwas in absolut einwandfreiem, genießbarem Zustand übrig bleiben, wird es restlos an das harte arbeitende Team verteilt oder über fest etablierte, lokale Lebensmittelrettungs-Netzwerke an bedürftige Menschen weitergegeben, die sich extrem darüber freuen. Der schwarze Mülleimer ist für essbare, fehlerfreie Produkte in unserer Küche stets die absolut letzte, schmerzhafteste und am meisten verachtete Option.
                        - listitem [ref=e203]:
                            - strong [ref=e204]: "Tägliche Bildung und sanfte Sensibilisierung:"
                            - text: Wir nutzen unsere wertvolle Plattform und unsere stetig wachsende Reichweite auf unseren Social Media Kanälen ganz bewusst nicht nur dazu, um massenhaft schöne, hungrig machende Bilder unserer perfekten Desserts zu posten. Wir versuchen dort auch, unsere aufmerksame Community sehr behutsam, ohne erhobenen Zeigefinger, für extrem wichtige Nachhaltigkeitsthemen zu sensibilisieren. Wir tun dies, indem wir unsere eigenen, echten Fortschritte, aber eben auch unsere frustrierenden Rückschläge bei bestimmten Themen völlig offen und transparent kommunizieren. Wenn unsere Gäste erst einmal tiefgreifend verstehen, warum bestimmte neue Verpackungen bei uns vielleicht plötzlich etwas anders aussehen oder warum es absolut Sinn macht, mit Vorfreude auf ein bestimmtes saisonales Obst zu warten, anstatt stur im tiefsten hessischen Winter frische Erdbeeren aus stark beheizten, spanischen Gewächshäusern zu verlangen, dann haben wir als Unternehmen schon unendlich viel in den Köpfen erreicht.
                    - separator [ref=e205]
                    - heading "Ein unendliches Kapitel — Die Zukunftsvisionen von Hey Fede!" [level=2] [ref=e206]
                    - paragraph [ref=e207]: Die wunderschöne, verrückte Geschichte, die wir damals mit so viel Herzklopfen hier in der Langgasse 68 mitten im historischen Wetzlar begonnen haben, ist noch lange, lange nicht zu Ende erzählt. Ganz im Gegenteil, sie fängt gerade erst an. Wenn wir heute, nach all dem Trubel, für einen Moment ruhig zurückblicken auf die allerersten, noch sehr wackligen Schritte als Jungunternehmer, die endlosen, durchwachten Nächte voller Sorgen kurz vor der Eröffnung und die völlig überwältigende, laute Resonanz, die uns seither von der Stadt entgegengebracht wurde, dann empfinden wir alle im Team nichts als tiefe, aufrichtige, stille Demut und eine geradezu unendliche Dankbarkeit. Jede einzelne Person, die jemals über unsere Türschwelle getreten ist, bei uns eine dampfende Waffel bestellt, einen kühlen Shake getrunken oder auch einfach nur für ein paar Minuten einen Moment der Ruhe vor dem Trubel der Altstadt gesucht hat, hat völlig aktiv und unverzichtbar an diesem großen Traum mitgebaut. Ihr alle da draußen seid die wahren Co-Autoren der Erfolgsgeschichte von Hey Fede!
                    - paragraph [ref=e208]: "Doch wer Federica und ihr umtriebiges Team wirklich gut kennt, der weiß auch: Wir ruhen uns niemals, auch nicht für eine Sekunde, gemütlich auf dem bisher Erreichten aus. In unseren rastlosen Köpfen sprudeln die neuen Ideen für die Zukunft fast täglich wie kohlensäurehaltiges, sprudelndes Wasser. Die nahe und ferne Zukunft von Hey Fede! wird garantiert geprägt sein von noch weitaus mehr Mut zur Kreativität, noch viel feineren, komplexeren Geschmackserlebnissen auf dem Teller und einer noch viel tieferen, festeren Verwurzelung in der Mitte der Wetzlarer Gesellschaft. Wir träumen in den ruhigen Momenten nach Ladenschluss von so vielen großen Dingen, die wir in den kommenden Monaten und Jahren hartnäckig, Schritt für Schritt, in die Realität umsetzen möchten."
                    - paragraph [ref=e209]: Wir planen ganz konkret, unsere ohnehin schon abwechslungsreiche Speisekarte in Zukunft noch viel stärker und extremer den natürlichen, vorgegebenen Rhythmen der Jahreszeiten anzupassen. Wir möchten noch mutiger und tiefer in die faszinierende, oft vergessene Welt der regionalen Botanik eintauchen, um völlig neuartige Desserts mit wilden, heimischen Kräutern, heute fast vergessenen, seltenen Beeren und innovativen, überraschend floralen Noten zu kreieren. Darüber hinaus denken wir intensiv über neue, interaktive Formate für unsere Community nach – wie etwa eigene Workshops, in denen Federica und ihr erfahrenes Team ihr über die Jahre angesammeltes, kostbares Fachwissen endlich teilen können. Wie macht man zu Hause den absolut perfekten Waffelteig, der nicht zusammenfällt? Wie komponiert man einen vielschichtigen Shake, der wirklich alle Sinne berührt, ohne künstlich zu schmecken? Wir möchten in Kursen kleinen Kindern zeigen, wie unendlich viel Spaß es macht, aus ein paar wenigen, guten Grundzutaten mit den eigenen Händen etwas unfassbar Leckeres zu zaubern, und wir wollen gestressten Erwachsenen einen geschützten Raum bieten, in dem sie den ständigen Druck des Alltags beim entspannten, gemeinsamen Backen, Rühren und Dekorieren für ein paar Stunden komplett vergessen können.
                    - paragraph [ref=e210]: Zudem ist es uns ein riesiges Anliegen, unsere aktive Rolle und unsere Verantwortung in der Wetzlarer Altstadt noch weiter zu stärken und auszubauen. Wir denken an spannende kulturelle Events, an kleine, intime akustische Live-Konzerte in unserem Café an dunklen Winterabenden oder an kreative, inspirierende Kooperationen mit aufstrebenden Wetzlarer Künstlern, lokalen Manufakturen und ehrbaren Handwerkern. Die fantastischen Möglichkeiten, puren kulinarischen Genuss und lokale Kultur auf höchstem Niveau miteinander zu verschmelzen, sind schlichtweg grenzenlos, wenn man nur offen dafür ist. Hey Fede! soll sich langfristig von einem reinen, hervorragenden Dessertladen hin zu einer kleinen, aber feinen kulturellen Institution entwickeln, einem festen, verlässlichen Ort der Begegnung, der auf ewig unzertrennlich mit dem positiven, warmen Lebensgefühl dieser wundervollen Stadt Wetzlar verbunden ist.
                    - paragraph [ref=e211]: "Bei all diesen hochfliegenden, großen Träumen und ehrgeizigen Plänen für die Zukunft bleibt jedoch eines immer, unter allen Umständen und völlig unverrückbar bestehen: unser innerster Kern. Völlig egal, wie sehr wir uns in den nächsten Jahren weiterentwickeln werden, egal, welche völlig neuen, verrückten Kreationen wir vielleicht erfinden werden oder welche noch so glänzenden gastronomischen Auszeichnungen wir vielleicht eines fernen Tages stolz erhalten mögen – Hey Fede! wird tief im Herzen immer der gleiche warme, extrem einladende und ehrliche Ort in der Wetzlarer Langgasse bleiben, den ihr heute kennt. Wir werden niemals, für kein Geld der Welt, die reine, handwerkliche Philosophie vergessen oder verraten, mit der wir damals an Tag eins gestartet sind. Wir versprechen euch, wir werden weiterhin jeden einzelnen Morgen mit genau der gleichen, leisen Demut im Bauch die schwere Tür aufschließen, den Teig mit der exakt gleichen, tiefen Liebe von eigener Hand anrühren und absolut jeden einzelnen Gast mit dem gleichen, völlig ehrlichen, strahlenden Lächeln hinter der Theke begrüßen."
                    - paragraph [ref=e212]: "Dieser Text, so ausführlich, lang und emotional er auch geworden sein mag, kann letztendlich immer nur ein unvollständiger Versuch bleiben, das eigentliche, magische Gefühl von Hey Fede! in bloße Worte zu fassen. Die wahre Magie dieses Ortes lässt sich schlichtweg nicht auf einem Bildschirm lesen, man muss sie hautnah spüren und auf der Zunge schmecken. Deshalb schließt diese lange Geschichte hier nicht endgültig mit einem einfachen Punkt, sondern vielmehr mit einer weit offenen, herzlichen Einladung an euch alle: Kommt einfach vorbei. Spaziert an einem schönen Tag durch die wunderschöne, historische Wetzlarer Altstadt, lasst den mächtigen Dom langsam hinter euch, flaniert die geschäftige Langgasse tiefenentspannt hinab und tretet einfach durch unsere offene Tür. Setzt euch an einen unserer gemütlichen Tische, lasst den stressigen Alltag für einen Moment komplett draußen, atmet tief den süßen, unwiderstehlichen Duft von frischen, heißen Waffeln ein und lasst euch von uns nach allen Regeln der Kunst verwöhnen. Wir freuen uns jeden Tag unbändig darauf, euch persönlich kennenzulernen und gemeinsam mit euch den allerersten, oder den hundertsten, nächsten wunderbaren, süßen Moment eures Lebens zu erschaffen. Bis ganz bald bei uns zu Hause, bei Hey Fede!"
    - contentinfo [ref=e213]:
        - img [ref=e216]
        - generic [ref=e218]:
            - generic [ref=e219]:
                - generic [ref=e220]:
                    - link "Startseite" [ref=e221] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e223]
                    - paragraph [ref=e224]: Dessertbar & Café
                    - generic [ref=e227]:
                        - generic [ref=e228]:
                            - img [ref=e229]
                            - generic [ref=e232]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e233]:
                            - img [ref=e234]
                            - link "06441 7890426" [ref=e236] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e238] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e239]
                        - text: Instagram
                - generic [ref=e242]:
                    - heading "Hey Fede!" [level=3] [ref=e243]
                    - navigation "Footer Navigation" [ref=e244]:
                        - link "Startseite" [ref=e245] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e246] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e247] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e248] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e249]
                    - navigation "SEO Navigation" [ref=e250]:
                        - link "Bubble Waffles" [ref=e251] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e252] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e253] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e254] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e255] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e256]:
                    - heading "Öffnungszeiten" [level=3] [ref=e257]
                    - generic [ref=e260]:
                        - generic [ref=e261]:
                            - generic [ref=e263]: Montag
                            - generic [ref=e265]: Geschlossen
                        - generic [ref=e266]:
                            - generic [ref=e268]: Dienstag
                            - generic [ref=e270]: Geschlossen
                        - generic [ref=e271]:
                            - generic [ref=e274]: Mittwoch
                            - generic [ref=e275]:
                                - generic [ref=e276]: 12:00 – 19:00 Uhr
                                - generic [ref=e277]: Heute
                        - generic [ref=e278]:
                            - generic [ref=e280]: Donnerstag
                            - generic [ref=e282]: 12:00 – 19:00 Uhr
                        - generic [ref=e283]:
                            - generic [ref=e285]: Freitag
                            - generic [ref=e287]: 12:00 – 19:00 Uhr
                        - generic [ref=e288]:
                            - generic [ref=e290]: Samstag
                            - generic [ref=e292]: 12:00 – 19:00 Uhr
                        - generic [ref=e293]:
                            - generic [ref=e295]: Sonntag
                            - generic [ref=e297]: 13:00 – 19:00 Uhr
                    - generic [ref=e298]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e299]:
                    - heading "Stay Sweet" [level=3] [ref=e300]
                    - paragraph [ref=e301]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e303]:
                        - textbox "Bleib hungrig..." [ref=e304]
                        - button "Abonnieren" [ref=e306]:
                            - generic [ref=e307]: Abonnieren
            - generic [ref=e308]:
                - generic [ref=e309]: Frisch
                - generic [ref=e310]: ·
                - generic [ref=e311]: Selbstgemacht
                - generic [ref=e312]: ·
                - generic [ref=e313]: Mit Liebe
            - generic [ref=e314]:
                - img [ref=e315]
                - img [ref=e317]
                - img [ref=e319]
                - img [ref=e321]
                - img [ref=e323]
            - generic [ref=e325]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e326]
                - paragraph [ref=e327]:
                    - generic [ref=e328]: Hessen
                    - generic [ref=e329]: ›
                    - generic [ref=e330]: Lahn-Dill-Kreis
                    - generic [ref=e331]: ›
                    - generic [ref=e332]: Wetzlar
                    - generic [ref=e333]: ›
                    - generic [ref=e334]: Langgasse
            - generic [ref=e335]:
                - heading "Besuche uns auch auf" [level=3] [ref=e336]
                - generic [ref=e337]:
                    - link "G Google" [ref=e338] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e339]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e340] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e341]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e342] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e343]: yelp
            - img "Made with Love in Wetzlar" [ref=e346]
            - generic [ref=e347]:
                - paragraph [ref=e348]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e349]:
                    - link "Impressum" [ref=e350] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e351] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e352] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e353]
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
