# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: syrup-cursor.spec.ts >> SyrupCursor >> Hover State Interaction: Hover over a clickable element and verify the cursor element receives an active/hover state
- Location: tests/e2e/syrup-cursor.spec.ts:59:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#syrup-cursor, .custom-cursor').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Zum Hauptinhalt springen" [ref=e2] [cursor=pointer]:
        - /url: "#main-content"
    - status
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
                - img
                - img
                - generic [ref=e36]:
                    - generic [ref=e37]:
                        - generic [ref=e43]: DESSERTBAR & CAFÉ · WETZLAR
                        - heading "Süße Momente, frisch gemacht." [level=1] [ref=e44]:
                            - text: Süße Momente,
                            - text: frisch gemacht.
                        - paragraph [ref=e45]: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
                        - generic [ref=e46]:
                            - link "Zur Speisekarte" [ref=e47] [cursor=pointer]:
                                - /url: /menu
                                - button "Zur Speisekarte" [ref=e49]:
                                    - generic [ref=e50]: Zur Speisekarte
                                    - img [ref=e51]
                            - link "Uns besuchen" [ref=e53] [cursor=pointer]:
                                - /url: /visit
                                - button "Uns besuchen" [ref=e54]
                        - generic [ref=e56]:
                            - generic [ref=e57]:
                                - img [ref=e58]
                                - img [ref=e60]
                                - img [ref=e62]
                                - img [ref=e64]
                                - img [ref=e66]
                            - generic [ref=e68]: "4.8"
                            - generic [ref=e69]: (84)
                    - generic [ref=e70]:
                        - generic [ref=e73]:
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
                - img [ref=e76]
            - generic [ref=e80]:
                - generic [ref=e81]:
                    - generic [ref=e83]:
                        - img [ref=e84]
                        - generic [ref=e86]: Café Atmosphäre\nFamilienfoto
                    - generic [ref=e87]:
                        - generic [ref=e88]: 4.8★
                        - generic [ref=e89]: 84+ Google Reviews
                - generic [ref=e90]:
                    - generic [ref=e91]:
                        - img [ref=e93]:
                            - generic [ref=e95]: FÜR DIE GANZE FAMILIE
                        - img [ref=e97]:
                            - generic [ref=e99]: MIT KINDERECKE
                    - heading "Ein Ort für alle Generationen" [level=2] [ref=e100]:
                        - text: Ein Ort für
                        - text: alle Generationen
                    - paragraph [ref=e101]: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
                    - generic [ref=e102]:
                        - generic [ref=e103]:
                            - generic [ref=e104]: Kinderecke
                            - generic [ref=e105]: Spielbereich für die Kleinen
                        - generic [ref=e106]:
                            - generic [ref=e107]: Wickelraum
                            - generic [ref=e108]: Komfort für Familien
                        - generic [ref=e109]:
                            - generic [ref=e110]: Vegan
                            - generic [ref=e111]: Vegane Optionen verfügbar
                        - generic [ref=e112]:
                            - generic [ref=e113]: Hausgemacht
                            - generic [ref=e114]: Alles frisch & selbst gemacht
            - generic [ref=e115]:
                - img [ref=e117]
                - generic [ref=e119]:
                    - generic [ref=e120]:
                        - heading "Unsere Highlights" [level=2] [ref=e121]
                        - paragraph [ref=e122]: Alles frisch und selbstgemacht — das schmeckt man.
                    - generic [ref=e123]:
                        - generic [ref=e125] [cursor=pointer]:
                            - generic [ref=e126]: Bestseller
                            - img [ref=e130]
                            - generic [ref=e135]:
                                - heading "Fede & Friends Box" [level=3] [ref=e136]
                                - paragraph [ref=e137]: Das ultimative Sharing-Erlebnis für Gruppen
                                - generic [ref=e138]:
                                    - generic [ref=e139]: 25,00 €
                                    - button "Fede & Friends Box ansehen" [ref=e140]:
                                        - img [ref=e141]
                        - generic [ref=e145] [cursor=pointer]:
                            - generic [ref=e146]: Beliebt
                            - img [ref=e150]
                            - generic [ref=e154]:
                                - heading "Bubble Waffle Deluxe" [level=3] [ref=e155]
                                - paragraph [ref=e156]: Eis + Sahne + 3 Toppings nach Wahl
                                - generic [ref=e157]:
                                    - generic [ref=e158]: 8,80 €
                                    - button "Bubble Waffle Deluxe ansehen" [ref=e159]:
                                        - img [ref=e160]
                        - generic [ref=e164] [cursor=pointer]:
                            - img [ref=e168]
                            - generic [ref=e173]:
                                - heading "Oreo Special Shake" [level=3] [ref=e174]
                                - paragraph [ref=e175]: 0,4l · frisch gemixt mit Sahne
                                - generic [ref=e176]:
                                    - generic [ref=e177]: 6,50 €
                                    - button "Oreo Special Shake ansehen" [ref=e178]:
                                        - img [ref=e179]
                        - generic [ref=e183] [cursor=pointer]:
                            - img [ref=e187]
                            - generic [ref=e197]:
                                - heading "Pancake Picknick" [level=3] [ref=e198]
                                - paragraph [ref=e199]: 12 Pancakes · 2 Fruchtsorten · Soße
                                - generic [ref=e200]:
                                    - generic [ref=e201]: 7,00 €
                                    - button "Pancake Picknick ansehen" [ref=e202]:
                                        - img [ref=e203]
                    - link "Alle Produkte ansehen" [ref=e207] [cursor=pointer]:
                        - /url: /menu
                        - button "Alle Produkte ansehen" [ref=e208]:
                            - generic [ref=e209]: Alle Produkte ansehen
            - generic [ref=e218]:
                - generic [ref=e219]:
                    - generic [ref=e220]: Dein exklusives Fede-Ticket
                    - heading "Kostenlose Lieferung über Lieferando!" [level=2] [ref=e221]
                    - paragraph [ref=e222]: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
                    - link "Jetzt bei Lieferando bestellen →" [ref=e224] [cursor=pointer]:
                        - /url: https://www.lieferando.de/speisekarte/hey-fede
                        - button "Jetzt bei Lieferando bestellen →" [ref=e225]:
                            - generic [ref=e226]: Jetzt bei Lieferando bestellen →
                - generic [ref=e229]:
                    - generic [ref=e230]: 0€
                    - generic [ref=e231]: LIEFERGEBÜHR
                    - generic [ref=e232]: Über Lieferando
            - generic [ref=e255]:
                - img [ref=e257]
                - generic [ref=e259]:
                    - generic [ref=e260]:
                        - heading "Unsere Werte" [level=2] [ref=e261]
                        - paragraph [ref=e262]: Was uns antreibt — jeden Tag.
                    - generic [ref=e263]:
                        - generic [ref=e264]:
                            - img [ref=e267]
                            - heading "100% Hausgemacht & Echt" [level=3] [ref=e270]
                            - paragraph [ref=e271]: Wenn wir morgens die Türen in der Wetzlarer Langgasse aufschließen, beginnt unser Tag mit echtem Handwerk. Wir rühren jeden einzelnen Teig für unsere Bubble Waffles und Pancakes frisch und nach eigener Geheimrezeptur an – ganz ohne fertige Backmischungen oder industrielle Zusätze. Selbst unsere cremigen Soßen und feinen Dips köcheln wir mit viel Geduld am eigenen Herd. Wir glauben fest daran, dass echte Liebe zum Produkt keinen Platz für Abkürzungen lässt. Jeder Bissen, den du bei uns genießt, ist das direkte Resultat ehrlicher, traditioneller Handarbeit, die wir mit größter Leidenschaft für dich ausführen.
                        - generic [ref=e272]:
                            - img [ref=e275]
                            - heading "Kompromisslose Frische" [level=3] [ref=e281]
                            - paragraph [ref=e282]: "Bei der Auswahl unserer Zutaten kennen wir keine Kompromisse. Ob knackige Nüsse, tiefroter Erdbeeren im Sommer oder cremige Milch für unsere legendären Special Shakes – wir achten penibel auf allerhöchste Qualität und tagesaktuelle Frische. Künstliche Aromen, Geschmacksverstärker oder unnötige Konservierungsstoffe haben in unserer Küche absolutes Hausverbot. Stattdessen vertrauen wir auf den reinen, unverfälschten Eigengeschmack bester Rohstoffe. Wenn du bei uns eine Bubble Waffle mit frischen Früchten und unserem hauseigenen Softeis bestellst, schmeckst du sofort den gewaltigen Unterschied: Natur pur, schonend verarbeitet und immer darauf ausgerichtet, dir das intensivste Geschmackserlebnis Wetzlars zu servieren."
                        - generic [ref=e283]:
                            - img [ref=e286]
                            - heading "Tief in Wetzlar verwurzelt" [level=3] [ref=e290]
                            - paragraph [ref=e291]: Unsere Dessertbar ist mehr als nur ein Café; sie ist unser persönlicher Liebesbrief an die historische Altstadt von Wetzlar. Wir lieben das bunte Treiben rund um den Eisenmarkt, die Spaziergänger auf dem Weg zum Lottehaus und die einzigartige, familiäre Gemeinschaft im Lahn-Dill-Kreis. Wo immer es uns möglich ist, arbeiten wir eng mit lokalen Partnern und Lieferanten zusammen, um die heimische Wirtschaft zu stärken und die Transportwege kurz zu halten. Hey Fede! ist ein lebendiger Treffpunkt für Einheimische und Besucher gleichermaßen – ein Ort, an dem sich die Wetzlarer Geschichte mit modernem, süßem Genuss verbindet.
                - img [ref=e294]
            - generic [ref=e297]:
                - generic [ref=e298]:
                    - heading "Hey Fede! im Überblick" [level=2] [ref=e299]
                    - paragraph [ref=e300]: Zahlen, die für uns sprechen.
                - generic [ref=e301]:
                    - generic [ref=e302]:
                        - generic [ref=e303]: ★
                        - generic [ref=e304]:
                            - text: "4.8"
                            - generic [ref=e305]: / 84+
                        - generic [ref=e306]: Google Reviews
                    - generic [ref=e307]:
                        - generic [ref=e308]: 🧇
                        - generic [ref=e309]: "39"
                        - generic [ref=e310]: Handgemachte Items
                    - generic [ref=e311]:
                        - generic [ref=e312]: 📍
                        - generic [ref=e313]:
                            - generic [ref=e314]: Seit
                            - text: "2023"
                        - generic [ref=e315]: In Wetzlar
            - generic [ref=e317]:
                - generic [ref=e318]:
                    - heading "Beliebte Anlässe" [level=2] [ref=e319]
                    - paragraph [ref=e320]: Jeder Besuch ein Fest.
                - generic [ref=e321]:
                    - generic [ref=e322]:
                        - img [ref=e324]
                        - heading "Romantische Date-Night" [level=3] [ref=e326]
                        - paragraph [ref=e327]: Gedimmtes Licht, eine süße Bubble Waffle zum Teilen und zwei Löffel. Hey Fede! bietet die perfekte, unkomplizierte Atmosphäre in der Wetzlarer Altstadt, um sich beim ersten oder hundertsten Date ungestört näherzukommen.
                    - generic [ref=e328]:
                        - img [ref=e330]
                        - heading "Sonntags mit der Familie" [level=3] [ref=e335]
                        - paragraph [ref=e336]: Nach einem langen Spaziergang an der Lahn gibt es nichts Schöneres, als sich gemeinsam aufzuwärmen. Unsere familienfreundliche Dessertbar bietet viel Platz, eine Kinderecke und süße Belohnungen, die garantiert jedes Kinderauge zum Leuchten bringen.
                    - generic [ref=e337]:
                        - img [ref=e339]
                        - heading "Der entspannte After-Work" [level=3] [ref=e344]
                        - paragraph [ref=e345]: Lass den anstrengenden Büroalltag einfach hinter dir. Ein aromatischer Espresso, ein frisch gebackener Crêpe und gute Gespräche mit Kollegen in gemütlicher Atmosphäre sind die beste Art, den verdienten Feierabend in Wetzlar einzuläuten.
                    - generic [ref=e346]:
                        - img [ref=e348]
                        - heading "Unvergessliche Geburtstage" [level=3] [ref=e353]
                        - paragraph [ref=e354]: Feier deinen besonderen Tag bei uns! Mit unseren riesigen Fede Boxen, dekoriert mit funkelnden Wunderkerzen, und einer Auswahl deiner absoluten Lieblingsdesserts wird jeder Geburtstag zu einem süßen Fest, das du und deine Freunde so schnell nicht vergessen werden.
                    - generic [ref=e355]:
                        - img [ref=e357]
                        - heading "Der wöchentliche Studi-Treff" [level=3] [ref=e361]
                        - paragraph [ref=e362]: Als Student der THM brauchst du Nervennahrung für lange Lernsessions. Bei Hey Fede! findest du kostenloses WLAN, bequeme Sitzplätze und großartige Pancake-Stapel, die dir die nötige Energie für deine nächste Klausurenphase liefern.
                    - generic [ref=e363]:
                        - img [ref=e365]
                        - heading "Die süße Shopping-Pause" [level=3] [ref=e369]
                        - paragraph [ref=e370]: Nach einem ausgiebigen Einkaufsbummel durch die Wetzlarer Altstadt gibt es keinen besseren Ort für einen Boxenstopp. Gönn dir eine wohlverdiente Zucker-Dosis in unserer gemütlichen Dessertbar, bevor es mit vollen Taschen weitergeht.
            - generic [ref=e371]:
                - img [ref=e374]
                - generic [ref=e376]:
                    - generic [ref=e377]:
                        - heading "Saisonale Highlights" [level=2] [ref=e378]
                        - paragraph [ref=e379]: Im Rhythmus der Jahreszeiten.
                    - generic [ref=e380]:
                        - button "Frühling" [ref=e381]:
                            - img [ref=e382]
                            - text: Frühling
                        - button "Sommer" [ref=e388]:
                            - img [ref=e389]
                            - text: Sommer
                        - button "Herbst" [ref=e399]:
                            - img [ref=e400]
                            - text: Herbst
                        - button "Winter" [ref=e403]:
                            - img [ref=e404]
                            - text: Winter
                    - generic [ref=e417]:
                        - generic [ref=e418]:
                            - generic [ref=e419]:
                                - generic [ref=e420]: Das aktuelle Special
                                - heading "Tropical Mango Madness" [level=3] [ref=e421]
                                - paragraph [ref=e422]: Wenn die Hitze über dem Eisenmarkt steht, sorgt unser Sommer-Spezial für die perfekte Abkühlung. Ein gigantischer 500ml Eisbecher mit hausgemachtem Mango-Sorbet, frischen Maracuja-Kernen, Kokosraspeln und unserem cremigen Softeis. Ein tropischer Kurzurlaub mitten in Hessen.
                            - generic [ref=e423]:
                                - generic [ref=e424]: ★
                                - heading "Weitere Sommers-Highlights" [level=4] [ref=e425]
                                - list [ref=e426]:
                                    - listitem [ref=e427]:
                                        - generic [ref=e428]: •
                                        - generic [ref=e429]: Tropical Mango Eisbecher
                                    - listitem [ref=e430]:
                                        - generic [ref=e431]: •
                                        - generic [ref=e432]: Iced Caramel Macchiato
                                    - listitem [ref=e433]:
                                        - generic [ref=e434]: •
                                        - generic [ref=e435]: Zitronen-Sorbet Shake
                        - button [ref=e437]:
                            - img [ref=e438]
                        - button [ref=e441]:
                            - img [ref=e442]
            - generic [ref=e444]:
                - img [ref=e446]
                - generic [ref=e449]:
                    - generic [ref=e450]:
                        - heading "Was unsere Gäste sagen" [level=2] [ref=e451]
                        - paragraph [ref=e452]: 4.8/5 · 84+ echte Bewertungen auf Google
                    - generic [ref=e453]:
                        - generic [ref=e454]:
                            - img [ref=e456]
                            - img "5 von 5 Sternen" [ref=e459]:
                                - img [ref=e461]
                                - img [ref=e464]
                                - img [ref=e467]
                                - img [ref=e470]
                                - img [ref=e473]
                            - paragraph [ref=e475]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
                            - generic [ref=e476]:
                                - generic [ref=e477]: SM
                                - generic [ref=e478]:
                                    - generic [ref=e479]: Sarah M.
                                    - generic [ref=e480]: Verifizierte Google-Bewertung
                        - generic [ref=e481]:
                            - img [ref=e483]
                            - img "5 von 5 Sternen" [ref=e486]:
                                - img [ref=e488]
                                - img [ref=e491]
                                - img [ref=e494]
                                - img [ref=e497]
                                - img [ref=e500]
                            - paragraph [ref=e502]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
                            - generic [ref=e503]:
                                - generic [ref=e504]: TK
                                - generic [ref=e505]:
                                    - generic [ref=e506]: Thomas K.
                                    - generic [ref=e507]: Verifizierte Google-Bewertung
                        - generic [ref=e508]:
                            - img [ref=e510]
                            - img "5 von 5 Sternen" [ref=e513]:
                                - img [ref=e515]
                                - img [ref=e518]
                                - img [ref=e521]
                                - img [ref=e524]
                                - img [ref=e527]
                            - paragraph [ref=e529]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
                            - generic [ref=e530]:
                                - generic [ref=e531]: LR
                                - generic [ref=e532]:
                                    - generic [ref=e533]: Lisa R.
                                    - generic [ref=e534]: Verifizierte Google-Bewertung
                        - generic [ref=e535]:
                            - img [ref=e537]
                            - img "4 von 5 Sternen" [ref=e540]:
                                - img [ref=e542]
                                - img [ref=e545]
                                - img [ref=e548]
                                - img [ref=e551]
                            - paragraph [ref=e553]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
                            - generic [ref=e554]:
                                - generic [ref=e555]: MS
                                - generic [ref=e556]:
                                    - generic [ref=e557]: Marco S.
                                    - generic [ref=e558]: Verifizierte Google-Bewertung
                        - generic [ref=e559]:
                            - img [ref=e561]
                            - img "5 von 5 Sternen" [ref=e564]:
                                - img [ref=e566]
                                - img [ref=e569]
                                - img [ref=e572]
                                - img [ref=e575]
                                - img [ref=e578]
                            - paragraph [ref=e580]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
                            - generic [ref=e581]:
                                - generic [ref=e582]: JW
                                - generic [ref=e583]:
                                    - generic [ref=e584]: Julia W.
                                    - generic [ref=e585]: Verifizierte Google-Bewertung
                        - generic [ref=e586]:
                            - img [ref=e588]
                            - img "5 von 5 Sternen" [ref=e591]:
                                - img [ref=e593]
                                - img [ref=e596]
                                - img [ref=e599]
                                - img [ref=e602]
                                - img [ref=e605]
                            - paragraph [ref=e607]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
                            - generic [ref=e608]:
                                - generic [ref=e609]: SM
                                - generic [ref=e610]:
                                    - generic [ref=e611]: Sarah M.
                                    - generic [ref=e612]: Verifizierte Google-Bewertung
                        - generic [ref=e613]:
                            - img [ref=e615]
                            - img "5 von 5 Sternen" [ref=e618]:
                                - img [ref=e620]
                                - img [ref=e623]
                                - img [ref=e626]
                                - img [ref=e629]
                                - img [ref=e632]
                            - paragraph [ref=e634]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
                            - generic [ref=e635]:
                                - generic [ref=e636]: TK
                                - generic [ref=e637]:
                                    - generic [ref=e638]: Thomas K.
                                    - generic [ref=e639]: Verifizierte Google-Bewertung
                        - generic [ref=e640]:
                            - img [ref=e642]
                            - img "5 von 5 Sternen" [ref=e645]:
                                - img [ref=e647]
                                - img [ref=e650]
                                - img [ref=e653]
                                - img [ref=e656]
                                - img [ref=e659]
                            - paragraph [ref=e661]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
                            - generic [ref=e662]:
                                - generic [ref=e663]: LR
                                - generic [ref=e664]:
                                    - generic [ref=e665]: Lisa R.
                                    - generic [ref=e666]: Verifizierte Google-Bewertung
                        - generic [ref=e667]:
                            - img [ref=e669]
                            - img "4 von 5 Sternen" [ref=e672]:
                                - img [ref=e674]
                                - img [ref=e677]
                                - img [ref=e680]
                                - img [ref=e683]
                            - paragraph [ref=e685]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
                            - generic [ref=e686]:
                                - generic [ref=e687]: MS
                                - generic [ref=e688]:
                                    - generic [ref=e689]: Marco S.
                                    - generic [ref=e690]: Verifizierte Google-Bewertung
                        - generic [ref=e691]:
                            - img [ref=e693]
                            - img "5 von 5 Sternen" [ref=e696]:
                                - img [ref=e698]
                                - img [ref=e701]
                                - img [ref=e704]
                                - img [ref=e707]
                                - img [ref=e710]
                            - paragraph [ref=e712]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
                            - generic [ref=e713]:
                                - generic [ref=e714]: JW
                                - generic [ref=e715]:
                                    - generic [ref=e716]: Julia W.
                                    - generic [ref=e717]: Verifizierte Google-Bewertung
                    - generic [ref=e718]:
                        - paragraph [ref=e719]: ← Hover um anzuhalten · Swipe zum Entdecken →
                        - link "Auf Google bewerten" [ref=e720] [cursor=pointer]:
                            - /url: https://maps.app.goo.gl/heyfede
                            - img [ref=e721]
                            - text: Auf Google bewerten
                            - img [ref=e723]
            - generic [ref=e728]:
                - generic [ref=e729]:
                    - heading "FAQ Quick-Check" [level=2] [ref=e730]
                    - paragraph [ref=e731]: Gut zu wissen.
                - paragraph [ref=e732]: Hier sind die häufigsten Fragen, die unsere Gäste in Wetzlar stellen. Für noch mehr Details schau einfach auf unserer ausführlichen FAQ-Seite vorbei.
                - generic [ref=e733]:
                    - generic [ref=e734]:
                        - button "Was ist Hey Fede?" [expanded] [ref=e735]:
                            - generic [ref=e736]: Was ist Hey Fede?
                            - img [ref=e738]
                        - generic [ref=e743]: Hey Fede! ist eine Dessertbar in der Wetzlarer Altstadt, die auf handgemachte Bubble Waffles, Pancakes, Eis und kreative Dessert-Kreationen spezialisiert ist. Wir verbinden frische Zutaten mit einzigartigen Rezepturen, um dir ein unvergessliches Geschmackserlebnis zu bieten.
                    - button "Wo ist Hey Fede?" [ref=e745]:
                        - generic [ref=e746]: Wo ist Hey Fede?
                        - img [ref=e748]
                    - button "Wann hat Hey Fede geöffnet?" [ref=e751]:
                        - generic [ref=e752]: Wann hat Hey Fede geöffnet?
                        - img [ref=e754]
                    - button "Seit wann gibt es Hey Fede?" [ref=e757]:
                        - generic [ref=e758]: Seit wann gibt es Hey Fede?
                        - img [ref=e760]
                    - button "Wer steckt hinter Hey Fede?" [ref=e763]:
                        - generic [ref=e764]: Wer steckt hinter Hey Fede?
                        - img [ref=e766]
                    - button "Was macht Hey Fede besonders?" [ref=e769]:
                        - generic [ref=e770]: Was macht Hey Fede besonders?
                        - img [ref=e772]
                    - button "Wie sind die Bewertungen von Hey Fede?" [ref=e775]:
                        - generic [ref=e776]: Wie sind die Bewertungen von Hey Fede?
                        - img [ref=e778]
                    - button "Gibt es WLAN bei Hey Fede?" [ref=e781]:
                        - generic [ref=e782]: Gibt es WLAN bei Hey Fede?
                        - img [ref=e784]
            - generic [ref=e787]:
                - heading "Immer auf dem Laufenden" [level=2] [ref=e788]
                - paragraph [ref=e789]: Abonniere unseren Newsletter für exklusive Angebote und die neuesten Dessert-Kreationen.
                - generic [ref=e792]:
                    - textbox "Bleib hungrig..." [ref=e793]
                    - button "Abonnieren" [ref=e795]:
                        - generic [ref=e796]: Abonnieren
            - generic [ref=e798]:
                - heading "Hey Fede! – Die Wetzlarer Dessertbar, die Genuss neu definiert" [level=1] [ref=e799]
                - generic [ref=e800]:
                    - heading "Unsere Rolle in der Wetzlarer Gastro-Szene" [level=2] [ref=e801]
                    - paragraph [ref=e802]: Wir bei Hey Fede! sind unendlich stolz darauf, ein so lebendiger Teil der dynamischen Wetzlarer Gastro-Szene zu sein. Die Gastronomielandschaft im Herzen von Hessen, insbesondere im Lahn-Dill-Kreis, war schon immer geprägt von tief verwurzelten Traditionen, rustikalen Wirtshäusern und klassischen Cafés, in denen man sich sonntags zum Stückchen Schwarzwälder Kirschtorte traf. Doch als wir 2023 beschlossen haben, genau hier in der Langgasse 68 unsere Türen zu öffnen, wussten wir, dass wir eine neue, aufregende Facette in das städtische Kulinarik-Portfolio einbringen wollten. Wir haben die historische Kulisse der Wetzlarer Altstadt – mit all ihren charmanten Fachwerkhäusern, den engen, geschichtsträchtigen Gassen rund um den Eisenmarkt und der Nähe zum altehrwürdigen Wetzlarer Dom – nicht als Einschränkung, sondern als die absolut perfekte Bühne für unser innovatives Dessert-Konzept begriffen.
                    - paragraph [ref=e803]: "Unsere Vision war es, einen Kontrastpunkt zu setzen, ohne dabei den Respekt vor der Wetzlarer Geschichte zu verlieren. Wenn unsere Gäste heute nach einem ausgiebigen Besuch im berühmten Lottehaus, wo Johann Wolfgang von Goethe wichtige Inspirationen für sein literarisches Schaffen fand, oder nach einem entspannten Nachmittagsspaziergang über die Alte Lahnbrücke zu uns kommen, tauchen sie in eine völlig andere Welt ein. Wir verbinden die Gemütlichkeit eines familiären Wohnzimmers mit dem urbanen Flair moderner Metropolen, in denen Dessert-Trends wie die knusprige Bubble Waffle oder üppig dekorierte Special Shakes längst zum Alltag gehören. In der Wetzlarer Gastro-Szene verstehen wir uns als kulinarische Brückenbauer: Wir bieten vertraute, tröstliche Elemente wie erstklassigen, heiß dampfenden Kaffee und hausgemachte Fruchtsoßen, kombinieren diese aber mit völlig neuen Texturen und aufregenden, internationalen Geschmackskombinationen, die man in dieser Form zuvor im Lahn-Dill-Kreis vergeblich gesucht hat."
                    - paragraph [ref=e804]: Durch die enge und vertrauensvolle Zusammenarbeit mit lokalen Lieferanten und die aktive Teilnahme an Stadtfesten und Events rund um den Kornmarkt haben wir tiefe Wurzeln geschlagen. Wir sind nicht einfach nur irgendein Laden, der Süßigkeiten verkauft; wir sind eine etablierte Institution, ein Ort des täglichen, unbeschwerten Zusammenkommens für Studierende der Technischen Hochschule Mittelhessen (THM), für frisch verliebte Paare auf ihrer Date-Night und für Großfamilien, die sich nach der Arbeitswoche etwas ganz Besonderes gönnen möchten. Die Wetzlarer Gastronomie ist durch unsere Dessertbar um eine farbenfrohe, süße und unglaublich herzliche Facette reicher geworden, und wir arbeiten jeden Tag unermüdlich daran, diesen Standard nicht nur zu halten, sondern stetig weiter auszubauen.
                - generic [ref=e805]:
                    - 'heading "Der große Vergleich: Bubble Waffle vs. Klassische Waffel" [level=2] [ref=e806]'
                    - paragraph [ref=e807]: 'Eine Frage, die uns an der Theke in der Wetzlarer Langgasse immer wieder mit großer Neugier gestellt wird, lautet: "Wo liegt eigentlich der genaue Unterschied zwischen eurer berühmten Bubble Waffle und der klassischen, traditionellen Waffel, die meine Oma früher immer gebacken hat?" Wir lieben diese Frage, denn sie gibt uns die perfekte Gelegenheit, unsere absolute Leidenschaft für dieses außergewöhnliche Gebäck zu teilen. Um es vorwegzunehmen: Wir lieben beide Varianten, aber die Bubble Waffle, die ihren historischen Ursprung in den pulsierenden, neonbeleuchteten Straßenmärkten von Hongkong hat, spielt in einer völlig anderen, faszinierenden Textur-Liga.'
                    - paragraph [ref=e808]: Der offensichtlichste Unterschied liegt natürlich im visuellen Erscheinungsbild und der revolutionären Struktur. Während die klassische belgische oder bergische Waffel flach ist und durch tiefe, quadratische oder herzförmige Vertiefungen gekennzeichnet wird, in denen sich Kirschen, Puderzucker oder heiße Himbeeren sammeln können, zeichnet sich unsere Bubble Waffle durch ihre namensgebenden, kugelrunden Erhebungen, die sogenannten "Bubbles", aus. Dieses einzigartige Wabenmuster entsteht durch spezielle, aus dickem Gusseisen gefertigte Waffeleisen, die wir während des Backvorgangs im exakt richtigen Moment wenden müssen, um den flüssigen, frischen Teig perfekt in jede einzelne Rundung der Form fließen zu lassen.
                    - paragraph [ref=e809]: Das wirklich Bahnbrechende an diesem speziellen Backverfahren ist jedoch die daraus resultierende Konsistenz, die sich radikal von allem unterscheidet, was du bisher gekannt hast. Eine klassische Waffel ist oft durchgehend weich, saftig oder, je nach Rezept, gleichmäßig knusprig. Unsere frisch gebackene Bubble Waffle hingegen ist ein Meisterwerk der Gegensätze. Die dünnen Verbindungsstege zwischen den einzelnen Blasen backen schnell durch und werden wunderbar karamellisiert, goldbraun und extrem knusprig. Die runden Blasen selbst jedoch umschließen die heiße Luft und bleiben im Inneren herrlich fluffig, weich und weisen eine fast schon kuchenartige, leichte Elastizität auf. Jeder Bissen bietet also ein gleichzeitiges Erlebnis von zartem Schmelz und lautem Knuspern.
                    - paragraph [ref=e810]: Zudem bietet die Flexibilität unserer Bubble Waffle einen immensen praktischen Vorteil für unser Konzept der üppigen Desserts. Unmittelbar nach dem Backen, wenn der Teig noch heiß und geschmeidig ist, formen wir die Waffel vorsichtig zu einer trichterartigen Tüte. Sobald sie an der Luft leicht abkühlt und aushärtet, verwandelt sie sich in das perfekte, essbare Gefäß für unsere hausgemachten Eiscremes, Früchte und Toppings. Während eine klassische Waffel unter dem Gewicht von Eis und Soßen oft schnell durchweicht und zerfällt, behält die Bubble Waffle durch ihre gebogene Struktur und die knusprige Außenhülle lange ihre Stabilität. Für uns und unsere zahllosen Gäste in Wetzlar ist sie deshalb nicht nur ein Teigprodukt, sondern die ultimative Leinwand für grenzenlose, süße Kreativität.
                - generic [ref=e811]:
                    - 'heading "Unser Hey Fede! Dessert-Glossar: Die Sprache des puren Genusses" [level=2] [ref=e812]'
                    - paragraph [ref=e813]: Wenn du die Speisekarte von Hey Fede! studierst, stößt du auf viele Begriffe aus der internationalen Dessertwelt, die wir mit unserem ganz eigenen, Wetzlarer Twist interpretiert haben. Wir möchten, dass du genau weißt, welche fantastischen Geschmackserlebnisse dich bei uns erwarten. Deshalb haben wir dieses kleine, aber feine Glossar der Dessert-Begriffe für dich zusammengestellt. Wir sehen es als unseren persönlichen Reiseführer durch die faszinierende, süße Welt unserer Dessertbar.
                    - generic [ref=e814]:
                        - term [ref=e815]:
                            - strong [ref=e816]: Softeis (Soft Serve)
                        - definition [ref=e817]: Vergiss alles, was du bisher über wässriges Softeis aus dem Freizeitpark dachtest. Unser Softeis wird frisch in der Maschine aufgeschlagen. Durch die kontinuierliche Zugabe von kalter Luft während des Gefrierprozesses erhält es diese unvergleichlich seidige, dichte und cremige Textur, die bei exakt -7 Grad Celsius serviert wird. Es schmilzt sanfter auf der Zunge als traditionelles Speiseeis und bietet dadurch eine sofortige, intensive Geschmacksentfaltung. Wir verwenden es als Herzstück vieler unserer Special Shakes und natürlich als kühle, erfrischende Füllung in unseren noch leicht warmen Bubble Waffles.
                        - term [ref=e818]:
                            - strong [ref=e819]: Toppings & Crumbles
                        - definition [ref=e820]: Ein Dessert ohne den perfekten Crunch ist für uns nur die halbe Miete. Unter "Toppings" verstehen wir alles, was wir kunstvoll über unsere Kreationen streuen, gießen oder dekorativ platzieren. Unsere Crumbles bestehen aus im Ofen gerösteten, butterigen Streuseln, knusprigen Keksbröseln oder gehackten Nüssen. Sie sind die entscheidenden Gegenspieler zur cremigen Süße von Sahne und Eis und sorgen dafür, dass dein Gaumen bei jedem Löffel eine neue, aufregende Textur erlebt. Wir stellen unsere Crumbles liebevoll in Handarbeit her, um sicherzustellen, dass sie immer die perfekte Größe und den maximalen Röstgeschmack besitzen.
                        - term [ref=e821]:
                            - strong [ref=e822]: Crêpes
                        - definition [ref=e823]: Dieser stolze Klassiker der französischen Patisserie-Kunst bedarf eigentlich kaum einer Erklärung, doch wir perfektionieren ihn jeden Tag aufs Neue. Ein Crêpe ist ein extrem dünner, weicher Pfannkuchen, der auf einer speziell dafür vorgesehenen, flachen Gusseisenplatte (der sogenannten Crêpière) gebacken wird. Wir verteilen den flüssigen Teig mit einem traditionellen Holzrechen in Sekundenschnelle hauchdünn. Das Resultat ist ein fast durchscheinender Teigfladen, den wir kunstvoll falten und mit reichhaltigen, dekadenten Füllungen wie unserer Nuss-Nougat-Creme, frisch geschnittenen Erdbeeren oder herzhaften Kombinationen versehen. Er ist das perfekte, unkomplizierte Handheld-Dessert für deinen Spaziergang durch die Wetzlarer Altstadt.
                        - term [ref=e824]:
                            - strong [ref=e825]: Special Shakes
                        - definition [ref=e826]: 'Der Begriff Milchshake wird unseren Kreationen absolut nicht gerecht, deshalb nennen wir sie voller Stolz "Special Shakes". Wir vermischen hochwertiges Eis mit eisgekühlter Milch, aber der eigentliche Clou passiert danach: Die Gläser werden am Rand mit Schokolade oder Karamell verziert, der Shake wird mit ganzen Gebäckstücken, Brownies, Marshmallows oder Waffelstücken gekrönt. Sie sind hochgradig instagrammable, unfassbar reichhaltig und so sättigend, dass sie ohne Probleme als eigenständige, flüssige Hauptmahlzeit durchgehen. Ein Special Shake ist bei uns keine bloße Erfrischung, sondern ein opulentes, visuelles und geschmackliches Kunstwerk.'
                        - term [ref=e827]:
                            - strong [ref=e828]: Matcha
                        - definition [ref=e829]: Dieser Begriff stammt aus der tiefen japanischen Teetradition und bezeichnet einen sehr fein gemahlenen Grüntee von absolut höchster Qualität. Im Gegensatz zu normalem Tee, der nur aufgebrüht wird, konsumiert man beim Matcha das gesamte Teeblatt, was für einen extrem intensiven, leicht herben und wunderbar erdigen Geschmack sorgt. Wir lieben Matcha, weil seine natürliche Bitterkeit und die leuchtend grüne Farbe den perfekten, erwachsenen Kontrapunkt zur Süße von weißer Schokolade oder Vanilleeis bilden. Ob in unserem Iced Matcha Latte oder als spezielles Topping auf der Frühlings-Waffel – Matcha bringt eine raffinierte, asiatische Eleganz direkt in unsere Dessertbar nach Hessen.
                - generic [ref=e830]:
                    - heading "Darum liebt Wetzlar Hey Fede! – Eine Zusammenfassung unserer Reviews" [level=2] [ref=e831]
                    - paragraph [ref=e832]: Nichts erfüllt unser Team mit mehr Stolz und tiefer Dankbarkeit als die unglaublich positiven Rückmeldungen, die wir täglich von unseren fantastischen Gästen erhalten. Wir lesen wirklich jede einzelne Google-Bewertung, jeden Instagram-Kommentar und jede direkte Nachricht, denn euer ehrliches Feedback ist der absolute Treibstoff, der unseren Motor am Laufen hält. Wenn wir all die lobenden Worte aus den vergangenen Monaten zusammenfassen, zeichnet sich ein klares, wunderschönes Bild davon ab, wofür Hey Fede! in den Augen der Menschen aus dem Lahn-Dill-Kreis und weit darüber hinaus steht.
                    - paragraph [ref=e833]: 'Am häufigsten wird unsere kompromisslose Hingabe zur **Produktqualität und Frische** hervorgehoben. Viele Rezensenten schreiben euphorisch, dass sie noch nie zuvor eine Waffel gegessen haben, die außen derart "brillant knusprig" und innen so "unfassbar fluffig" war. Es wird immer wieder bemerkt, dass unsere Früchte extrem frisch schmecken und unsere hausgemachten Soßen nicht künstlich übersüßt sind, sondern den puren Geschmack der Zutaten in den Vordergrund stellen. Diese geschmackliche Authentizität ist genau das, wofür wir jeden Morgen früh aufstehen und in der Küche stehen. Ein Gast fasste es kürzlich treffend zusammen: "Man schmeckt bei Hey Fede! in jedem Bissen die ehrliche Handarbeit, die hinter der Theke passiert. Kein Vergleich zu industrieller Massenware."'
                    - paragraph [ref=e834]: Ein weiterer, riesiger Schwerpunkt in euren Reviews ist unsere **familiäre Atmosphäre und der zuvorkommende Service**. Die Menschen betonen immer wieder, wie freundlich, geduldig und herzlich unser Team auch an extrem stressigen, gut besuchten Samstagnachmittagen auftritt. Eltern schwärmen in höchsten Tönen von unserer liebevoll eingerichteten Kinderecke und der Tatsache, dass sich auch die kleinsten Gäste bei uns wie echte Könige fühlen dürfen. Die Kombination aus warmen Erdtönen, dem Duft nach frisch gebackenem Teig und unserem echten, unaufgesetzten Lächeln sorgt dafür, dass sich viele Besucher bei uns "wie im eigenen Wohnzimmer, nur mit viel besserem Essen" fühlen. Wir werden oft als die absolute Nummer Eins Anlaufstelle in Wetzlar für Wohlfühlmomente bezeichnet, ein Ort, der auch an regnerischen, grauen Tagen sofort die Stimmung hebt.
                    - paragraph [ref=e835]: 'Zuletzt wird unsere **visuelle Kreativität und die Großzügigkeit der Portionen** oft lobend in den Mittelpunkt gestellt. "Das Auge isst hier nicht nur mit, es feiert eine absolute Party", schrieb uns ein begeisterter Stammgast, nachdem er unseren imposanten Tropical Mango Eisbecher serviert bekommen hatte. Die Leute lieben es, unsere farbenfrohen Kreationen zu fotografieren und zu teilen, weil jedes Dessert mit so unfassbar viel Liebe zum kleinsten Detail dekoriert wird. Und niemand geht bei uns hungrig nach Hause. Wir sind bekannt dafür, dass wir bei Toppings und Soßen absolut nicht knausern. Wir möchten, dass ein Besuch bei Hey Fede! in Wetzlar immer ein großzügiges Fest der Fülle ist. All diese wundervollen Reviews bestärken uns jeden Tag aufs Neue in unserer Mission: Wir wollen nicht einfach nur eine Dessertbar sein. Wir wollen Wetzlars süßestes, glücklichstes und genussvollstes Erlebnis schaffen – für jeden einzelnen Gast, der durch unsere Türen in der Langgasse tritt.'
    - contentinfo [ref=e836]:
        - img [ref=e839]
        - generic [ref=e841]:
            - generic [ref=e842]:
                - generic [ref=e843]:
                    - link "Startseite" [ref=e844] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e846]
                    - paragraph [ref=e847]: Dessertbar & Café
                    - generic [ref=e850]:
                        - generic [ref=e851]:
                            - img [ref=e852]
                            - generic [ref=e855]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e856]:
                            - img [ref=e857]
                            - link "06441 7890426" [ref=e859] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e861] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e862]
                        - text: Instagram
                - generic [ref=e865]:
                    - heading "Hey Fede!" [level=3] [ref=e866]
                    - navigation "Footer Navigation" [ref=e867]:
                        - link "Startseite" [ref=e868] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e869] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e870] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e871] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e872]
                    - navigation "SEO Navigation" [ref=e873]:
                        - link "Bubble Waffles" [ref=e874] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e875] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e876] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e877] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e878] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e879]:
                    - heading "Öffnungszeiten" [level=3] [ref=e880]
                    - generic [ref=e883]:
                        - generic [ref=e884]:
                            - generic [ref=e886]: Montag
                            - generic [ref=e888]: Geschlossen
                        - generic [ref=e889]:
                            - generic [ref=e891]: Dienstag
                            - generic [ref=e893]: Geschlossen
                        - generic [ref=e894]:
                            - generic [ref=e897]: Mittwoch
                            - generic [ref=e898]:
                                - generic [ref=e899]: 12:00 – 19:00 Uhr
                                - generic [ref=e900]: Heute
                        - generic [ref=e901]:
                            - generic [ref=e903]: Donnerstag
                            - generic [ref=e905]: 12:00 – 19:00 Uhr
                        - generic [ref=e906]:
                            - generic [ref=e908]: Freitag
                            - generic [ref=e910]: 12:00 – 19:00 Uhr
                        - generic [ref=e911]:
                            - generic [ref=e913]: Samstag
                            - generic [ref=e915]: 12:00 – 19:00 Uhr
                        - generic [ref=e916]:
                            - generic [ref=e918]: Sonntag
                            - generic [ref=e920]: 13:00 – 19:00 Uhr
                    - generic [ref=e921]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e922]:
                    - heading "Stay Sweet" [level=3] [ref=e923]
                    - paragraph [ref=e924]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e926]:
                        - textbox "Bleib hungrig..." [ref=e927]
                        - button "Abonnieren" [ref=e929]:
                            - generic [ref=e930]: Abonnieren
            - generic [ref=e931]:
                - generic [ref=e932]: Frisch
                - generic [ref=e933]: ·
                - generic [ref=e934]: Selbstgemacht
                - generic [ref=e935]: ·
                - generic [ref=e936]: Mit Liebe
            - generic [ref=e937]:
                - img [ref=e938]
                - img [ref=e940]
                - img [ref=e942]
                - img [ref=e944]
                - img [ref=e946]
            - generic [ref=e948]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e949]
                - paragraph [ref=e950]:
                    - generic [ref=e951]: Hessen
                    - generic [ref=e952]: ›
                    - generic [ref=e953]: Lahn-Dill-Kreis
                    - generic [ref=e954]: ›
                    - generic [ref=e955]: Wetzlar
                    - generic [ref=e956]: ›
                    - generic [ref=e957]: Langgasse
            - generic [ref=e958]:
                - heading "Besuche uns auch auf" [level=3] [ref=e959]
                - generic [ref=e960]:
                    - link "G Google" [ref=e961] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e962]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e963] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e964]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e965] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e966]: yelp
            - img "Made with Love in Wetzlar" [ref=e969]
            - generic [ref=e970]:
                - paragraph [ref=e971]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e972]:
                    - link "Impressum" [ref=e973] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e974] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e975] [cursor=pointer]:
                        - /url: /legal#agb
    - generic [ref=e977]:
        - img [ref=e979]
        - generic [ref=e986]:
            - heading "Cookies für dich!" [level=3] [ref=e987]
            - paragraph [ref=e988]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e989]:
            - button "Ablehnen" [ref=e990]
            - button "Anpassen" [ref=e991]
            - button "Akzeptieren" [ref=e993]:
                - generic [ref=e994]: Akzeptieren
    - alert [ref=e995]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   |
  3   | test.describe('SyrupCursor', () => {
  4   |   test('DOM Injection: Verify the custom cursor container is present in the DOM upon page load without triggering Next.js hydration errors', async ({ page }) => {
  5   |     const logs: string[] = [];
  6   |     page.on('console', msg => {
  7   |       if (msg.type() === 'error') logs.push(msg.text());
  8   |     });
  9   |     page.on('pageerror', err => logs.push(err.message));
  10  |
  11  |     await page.goto('/');
  12  |
  13  |     // Check for custom cursor container (placeholder selector)
  14  |     const cursorContainer = page.locator('#syrup-cursor, .custom-cursor');
  15  |     await expect(cursorContainer).toBeAttached();
  16  |
  17  |     expect(logs.filter(log => log.includes('Hydration') || log.includes('Minified React error'))).toHaveLength(0);
  18  |   });
  19  |
  20  |   test('Native Cursor Hidden: Verify that the <body> or main container has cursor: none applied', async ({ page }) => {
  21  |     await page.goto('/');
  22  |
  23  |     const bodyCursor = await page.evaluate(() => {
  24  |       return window.getComputedStyle(document.body).cursor;
  25  |     });
  26  |
  27  |     // Some implementations might hide the cursor on a specific wrapper rather than body
  28  |     const wrapperCursor = await page.evaluate(() => {
  29  |       const wrapper = document.querySelector('main') || document.querySelector('#__next') || document.body;
  30  |       return window.getComputedStyle(wrapper).cursor;
  31  |     });
  32  |
  33  |     expect([bodyCursor, wrapperCursor]).toContain('none');
  34  |   });
  35  |
  36  |   test('Movement Tracking: Move the mouse via Playwright and assert the custom cursor element updates to match coordinates', async ({ page }) => {
  37  |     await page.goto('/');
  38  |
  39  |     const cursor = page.locator('#syrup-cursor, .custom-cursor').first();
  40  |     await expect(cursor).toBeAttached();
  41  |
  42  |     await page.mouse.move(100, 100);
  43  |     await page.waitForTimeout(100); // Give RAF time to update
  44  |
  45  |     const box = await cursor.boundingBox();
  46  |     expect(box).not.toBeNull();
  47  |
  48  |     // The visual center of the custom cursor should be close to 100, 100
  49  |     // We do a loose assertion since it might have a delay/spring physics
  50  |     await page.mouse.move(300, 300);
  51  |     await page.waitForTimeout(300);
  52  |
  53  |     const newBox = await cursor.boundingBox();
  54  |     expect(newBox).not.toBeNull();
  55  |     expect(newBox!.x).not.toBe(box!.x);
  56  |     expect(newBox!.y).not.toBe(box!.y);
  57  |   });
  58  |
  59  |   test('Hover State Interaction: Hover over a clickable element and verify the cursor element receives an active/hover state', async ({ page }) => {
  60  |     await page.goto('/');
  61  |
  62  |     const cursor = page.locator('#syrup-cursor, .custom-cursor').first();
  63  |     const btn = page.getByRole('link', { name: /Menü entdecken|Bestellen/i }).first();
  64  |
  65  |     // Initial state
> 66  |     const initialClass = await cursor.getAttribute('class');
      |                                       ^ Error: locator.getAttribute: Test timeout of 30000ms exceeded.
  67  |     const initialTransform = await cursor.evaluate(el => window.getComputedStyle(el).transform);
  68  |
  69  |     // Hover over button
  70  |     await btn.hover();
  71  |     await page.waitForTimeout(200); // Wait for transition
  72  |
  73  |     const hoverClass = await cursor.getAttribute('class');
  74  |     const hoverTransform = await cursor.evaluate(el => window.getComputedStyle(el).transform);
  75  |
  76  |     // The cursor should have changed visually (class change or transform scale change)
  77  |     expect({ class: hoverClass, transform: hoverTransform }).not.toEqual({ class: initialClass, transform: initialTransform });
  78  |   });
  79  |
  80  |   test('Cleanup Validation: Navigate between pages rapidly and check the console to ensure no requestAnimationFrame leaks', async ({ page }) => {
  81  |     const logs: string[] = [];
  82  |     page.on('console', msg => {
  83  |       if (msg.type() === 'error') logs.push(msg.text());
  84  |     });
  85  |
  86  |     await page.goto('/');
  87  |
  88  |     // Rapid navigation
  89  |     for (let i = 0; i < 5; i++) {
  90  |       await page.goto('/menu', { waitUntil: 'commit' });
  91  |       await page.goto('/', { waitUntil: 'commit' });
  92  |     }
  93  |
  94  |     // Wait for everything to settle
  95  |     await page.waitForLoadState('networkidle');
  96  |
  97  |     // Ensure only one cursor exists
  98  |     const cursors = page.locator('#syrup-cursor, .custom-cursor');
  99  |     const count = await cursors.count();
  100 |     expect(count).toBe(1);
  101 |
  102 |     // Check for leak errors in console
  103 |     expect(logs.filter(log => log.toLowerCase().includes('leak') || log.toLowerCase().includes('unmounted'))).toHaveLength(0);
  104 |   });
  105 | });
  106 |
```
