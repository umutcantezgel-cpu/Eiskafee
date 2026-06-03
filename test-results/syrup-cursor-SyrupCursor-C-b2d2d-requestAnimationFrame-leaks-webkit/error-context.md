# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: syrup-cursor.spec.ts >> SyrupCursor >> Cleanup Validation: Navigate between pages rapidly and check the console to ensure no requestAnimationFrame leaks
- Location: tests/e2e/syrup-cursor.spec.ts:80:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
============================================================
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
                - img
                - img
                - generic [ref=e41]:
                    - generic [ref=e42]:
                        - generic [ref=e48]: DESSERTBAR & CAFÉ · WETZLAR
                        - heading "Süße Momente, frisch gemacht." [level=1] [ref=e49]:
                            - text: Süße Momente,
                            - text: frisch gemacht.
                        - paragraph [ref=e50]: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
                        - generic [ref=e51]:
                            - link "Zur Speisekarte" [ref=e52]:
                                - /url: /menu
                                - button "Zur Speisekarte" [ref=e54]:
                                    - generic [ref=e55]: Zur Speisekarte
                                    - img [ref=e56]
                            - link "Uns besuchen" [ref=e58]:
                                - /url: /visit
                                - button "Uns besuchen" [ref=e59]
                        - generic [ref=e61]:
                            - generic [ref=e62]:
                                - img [ref=e63]
                                - img [ref=e65]
                                - img [ref=e67]
                                - img [ref=e69]
                                - img [ref=e71]
                            - generic [ref=e73]: "4.8"
                            - generic [ref=e74]: (84)
                    - generic [ref=e75]:
                        - generic [ref=e78]:
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
                - img [ref=e81]
            - generic [ref=e85]:
                - generic [ref=e86]:
                    - generic [ref=e88]:
                        - img [ref=e89]
                        - generic [ref=e91]: Café Atmosphäre\nFamilienfoto
                    - generic [ref=e92]:
                        - generic [ref=e93]: 4.8★
                        - generic [ref=e94]: 84+ Google Reviews
                - generic [ref=e95]:
                    - generic [ref=e96]:
                        - img [ref=e98]:
                            - generic [ref=e101]: FÜR DIE GANZE FAMILIE
                        - img [ref=e103]:
                            - generic [ref=e106]: MIT KINDERECKE
                    - heading "Ein Ort für alle Generationen" [level=2] [ref=e107]:
                        - text: Ein Ort für
                        - text: alle Generationen
                    - paragraph [ref=e108]: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
                    - generic [ref=e109]:
                        - generic [ref=e110]:
                            - generic [ref=e111]: Kinderecke
                            - generic [ref=e112]: Spielbereich für die Kleinen
                        - generic [ref=e113]:
                            - generic [ref=e114]: Wickelraum
                            - generic [ref=e115]: Komfort für Familien
                        - generic [ref=e116]:
                            - generic [ref=e117]: Vegan
                            - generic [ref=e118]: Vegane Optionen verfügbar
                        - generic [ref=e119]:
                            - generic [ref=e120]: Hausgemacht
                            - generic [ref=e121]: Alles frisch & selbst gemacht
            - generic [ref=e122]:
                - img [ref=e124]
                - generic [ref=e126]:
                    - generic [ref=e127]:
                        - heading "Unsere Highlights" [level=2] [ref=e128]
                        - paragraph [ref=e129]: Alles frisch und selbstgemacht — das schmeckt man.
                    - generic [ref=e130]:
                        - generic [ref=e132] [cursor=pointer]:
                            - generic [ref=e133]: Bestseller
                            - img [ref=e137]
                            - generic [ref=e141]:
                                - heading "Fede & Friends Box" [level=3] [ref=e142]
                                - paragraph [ref=e143]: Das ultimative Sharing-Erlebnis für Gruppen
                                - generic [ref=e144]:
                                    - generic [ref=e145]: 25,00 €
                                    - button "Fede & Friends Box ansehen" [ref=e146]:
                                        - img [ref=e147]
                        - generic [ref=e149] [cursor=pointer]:
                            - generic [ref=e150]: Beliebt
                            - img [ref=e154]
                            - generic [ref=e158]:
                                - heading "Bubble Waffle Deluxe" [level=3] [ref=e159]
                                - paragraph [ref=e160]: Eis + Sahne + 3 Toppings nach Wahl
                                - generic [ref=e161]:
                                    - generic [ref=e162]: 8,80 €
                                    - button "Bubble Waffle Deluxe ansehen" [ref=e163]:
                                        - img [ref=e164]
                        - generic [ref=e166] [cursor=pointer]:
                            - img [ref=e170]
                            - generic [ref=e172]:
                                - heading "Oreo Special Shake" [level=3] [ref=e173]
                                - paragraph [ref=e174]: 0,4l · frisch gemixt mit Sahne
                                - generic [ref=e175]:
                                    - generic [ref=e176]: 6,50 €
                                    - button "Oreo Special Shake ansehen" [ref=e177]:
                                        - img [ref=e178]
                        - generic [ref=e180] [cursor=pointer]:
                            - img [ref=e184]
                            - generic [ref=e187]:
                                - heading "Pancake Picknick" [level=3] [ref=e188]
                                - paragraph [ref=e189]: 12 Pancakes · 2 Fruchtsorten · Soße
                                - generic [ref=e190]:
                                    - generic [ref=e191]: 7,00 €
                                    - button "Pancake Picknick ansehen" [ref=e192]:
                                        - img [ref=e193]
                    - link "Alle Produkte ansehen" [ref=e195]:
                        - /url: /menu
                        - button "Alle Produkte ansehen" [ref=e196] [cursor=pointer]:
                            - generic [ref=e197]: Alle Produkte ansehen
            - generic [ref=e206]:
                - generic [ref=e207]:
                    - generic [ref=e208]: Dein exklusives Fede-Ticket
                    - heading "Kostenlose Lieferung über Lieferando!" [level=2] [ref=e209]
                    - paragraph [ref=e210]: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
                    - link "Jetzt bei Lieferando bestellen →" [ref=e212]:
                        - /url: https://www.lieferando.de/speisekarte/hey-fede
                        - button "Jetzt bei Lieferando bestellen →" [ref=e213] [cursor=pointer]:
                            - generic [ref=e214]: Jetzt bei Lieferando bestellen →
                - generic [ref=e217]:
                    - generic [ref=e218]: 0€
                    - generic [ref=e219]: LIEFERGEBÜHR
                    - generic [ref=e220]: Über Lieferando
            - generic [ref=e243]:
                - img [ref=e245]
                - generic [ref=e247]:
                    - generic [ref=e248]:
                        - heading "Unsere Werte" [level=2] [ref=e249]
                        - paragraph [ref=e250]: Was uns antreibt — jeden Tag.
                    - generic [ref=e251]:
                        - generic [ref=e252]:
                            - img [ref=e255]
                            - heading "100% Hausgemacht & Echt" [level=3] [ref=e258]
                            - paragraph [ref=e259]: Wenn wir morgens die Türen in der Wetzlarer Langgasse aufschließen, beginnt unser Tag mit echtem Handwerk. Wir rühren jeden einzelnen Teig für unsere Bubble Waffles und Pancakes frisch und nach eigener Geheimrezeptur an – ganz ohne fertige Backmischungen oder industrielle Zusätze. Selbst unsere cremigen Soßen und feinen Dips köcheln wir mit viel Geduld am eigenen Herd. Wir glauben fest daran, dass echte Liebe zum Produkt keinen Platz für Abkürzungen lässt. Jeder Bissen, den du bei uns genießt, ist das direkte Resultat ehrlicher, traditioneller Handarbeit, die wir mit größter Leidenschaft für dich ausführen.
                        - generic [ref=e260]:
                            - img [ref=e263]
                            - heading "Kompromisslose Frische" [level=3] [ref=e267]
                            - paragraph [ref=e268]: "Bei der Auswahl unserer Zutaten kennen wir keine Kompromisse. Ob knackige Nüsse, tiefroter Erdbeeren im Sommer oder cremige Milch für unsere legendären Special Shakes – wir achten penibel auf allerhöchste Qualität und tagesaktuelle Frische. Künstliche Aromen, Geschmacksverstärker oder unnötige Konservierungsstoffe haben in unserer Küche absolutes Hausverbot. Stattdessen vertrauen wir auf den reinen, unverfälschten Eigengeschmack bester Rohstoffe. Wenn du bei uns eine Bubble Waffle mit frischen Früchten und unserem hauseigenen Softeis bestellst, schmeckst du sofort den gewaltigen Unterschied: Natur pur, schonend verarbeitet und immer darauf ausgerichtet, dir das intensivste Geschmackserlebnis Wetzlars zu servieren."
                        - generic [ref=e269]:
                            - img [ref=e272]
                            - heading "Tief in Wetzlar verwurzelt" [level=3] [ref=e276]
                            - paragraph [ref=e277]: Unsere Dessertbar ist mehr als nur ein Café; sie ist unser persönlicher Liebesbrief an die historische Altstadt von Wetzlar. Wir lieben das bunte Treiben rund um den Eisenmarkt, die Spaziergänger auf dem Weg zum Lottehaus und die einzigartige, familiäre Gemeinschaft im Lahn-Dill-Kreis. Wo immer es uns möglich ist, arbeiten wir eng mit lokalen Partnern und Lieferanten zusammen, um die heimische Wirtschaft zu stärken und die Transportwege kurz zu halten. Hey Fede! ist ein lebendiger Treffpunkt für Einheimische und Besucher gleichermaßen – ein Ort, an dem sich die Wetzlarer Geschichte mit modernem, süßem Genuss verbindet.
                - img [ref=e280]
            - generic [ref=e283]:
                - generic [ref=e284]:
                    - heading "Hey Fede! im Überblick" [level=2] [ref=e285]
                    - paragraph [ref=e286]: Zahlen, die für uns sprechen.
                - generic [ref=e287]:
                    - generic [ref=e288]:
                        - generic [ref=e289]: ★
                        - generic [ref=e290]:
                            - text: "4.8"
                            - generic [ref=e291]: / 84+
                        - generic [ref=e292]: Google Reviews
                    - generic [ref=e293]:
                        - generic [ref=e294]: 🧇
                        - generic [ref=e295]: "39"
                        - generic [ref=e296]: Handgemachte Items
                    - generic [ref=e297]:
                        - generic [ref=e298]: 📍
                        - generic [ref=e299]:
                            - generic [ref=e300]: Seit
                            - text: "2023"
                        - generic [ref=e301]: In Wetzlar
            - generic [ref=e303]:
                - generic [ref=e304]:
                    - heading "Beliebte Anlässe" [level=2] [ref=e305]
                    - paragraph [ref=e306]: Jeder Besuch ein Fest.
                - generic [ref=e307]:
                    - generic [ref=e308]:
                        - img [ref=e310]
                        - heading "Romantische Date-Night" [level=3] [ref=e312]
                        - paragraph [ref=e313]: Gedimmtes Licht, eine süße Bubble Waffle zum Teilen und zwei Löffel. Hey Fede! bietet die perfekte, unkomplizierte Atmosphäre in der Wetzlarer Altstadt, um sich beim ersten oder hundertsten Date ungestört näherzukommen.
                    - generic [ref=e314]:
                        - img [ref=e316]
                        - heading "Sonntags mit der Familie" [level=3] [ref=e321]
                        - paragraph [ref=e322]: Nach einem langen Spaziergang an der Lahn gibt es nichts Schöneres, als sich gemeinsam aufzuwärmen. Unsere familienfreundliche Dessertbar bietet viel Platz, eine Kinderecke und süße Belohnungen, die garantiert jedes Kinderauge zum Leuchten bringen.
                    - generic [ref=e323]:
                        - img [ref=e325]
                        - heading "Der entspannte After-Work" [level=3] [ref=e327]
                        - paragraph [ref=e328]: Lass den anstrengenden Büroalltag einfach hinter dir. Ein aromatischer Espresso, ein frisch gebackener Crêpe und gute Gespräche mit Kollegen in gemütlicher Atmosphäre sind die beste Art, den verdienten Feierabend in Wetzlar einzuläuten.
                    - generic [ref=e329]:
                        - img [ref=e331]
                        - heading "Unvergessliche Geburtstage" [level=3] [ref=e335]
                        - paragraph [ref=e336]: Feier deinen besonderen Tag bei uns! Mit unseren riesigen Fede Boxen, dekoriert mit funkelnden Wunderkerzen, und einer Auswahl deiner absoluten Lieblingsdesserts wird jeder Geburtstag zu einem süßen Fest, das du und deine Freunde so schnell nicht vergessen werden.
                    - generic [ref=e337]:
                        - img [ref=e339]
                        - heading "Der wöchentliche Studi-Treff" [level=3] [ref=e342]
                        - paragraph [ref=e343]: Als Student der THM brauchst du Nervennahrung für lange Lernsessions. Bei Hey Fede! findest du kostenloses WLAN, bequeme Sitzplätze und großartige Pancake-Stapel, die dir die nötige Energie für deine nächste Klausurenphase liefern.
                    - generic [ref=e344]:
                        - img [ref=e346]
                        - heading "Die süße Shopping-Pause" [level=3] [ref=e349]
                        - paragraph [ref=e350]: Nach einem ausgiebigen Einkaufsbummel durch die Wetzlarer Altstadt gibt es keinen besseren Ort für einen Boxenstopp. Gönn dir eine wohlverdiente Zucker-Dosis in unserer gemütlichen Dessertbar, bevor es mit vollen Taschen weitergeht.
            - generic [ref=e351]:
                - img [ref=e354]
                - generic [ref=e356]:
                    - generic [ref=e357]:
                        - heading "Saisonale Highlights" [level=2] [ref=e358]
                        - paragraph [ref=e359]: Im Rhythmus der Jahreszeiten.
                    - generic [ref=e360]:
                        - button "Frühling" [ref=e361]:
                            - img [ref=e362]
                            - text: Frühling
                        - button "Sommer" [ref=e367]:
                            - img [ref=e368]
                            - text: Sommer
                        - button "Herbst" [ref=e374]:
                            - img [ref=e375]
                            - text: Herbst
                        - button "Winter" [ref=e378]:
                            - img [ref=e379]
                            - text: Winter
                    - generic [ref=e392]:
                        - generic [ref=e393]:
                            - generic [ref=e394]:
                                - generic [ref=e395]: Das aktuelle Special
                                - heading "Tropical Mango Madness" [level=3] [ref=e396]
                                - paragraph [ref=e397]: Wenn die Hitze über dem Eisenmarkt steht, sorgt unser Sommer-Spezial für die perfekte Abkühlung. Ein gigantischer 500ml Eisbecher mit hausgemachtem Mango-Sorbet, frischen Maracuja-Kernen, Kokosraspeln und unserem cremigen Softeis. Ein tropischer Kurzurlaub mitten in Hessen.
                            - generic [ref=e398]:
                                - generic [ref=e399]: ★
                                - heading "Weitere Sommers-Highlights" [level=4] [ref=e400]
                                - list [ref=e401]:
                                    - listitem [ref=e402]:
                                        - generic [ref=e403]: •
                                        - generic [ref=e404]: Tropical Mango Eisbecher
                                    - listitem [ref=e405]:
                                        - generic [ref=e406]: •
                                        - generic [ref=e407]: Iced Caramel Macchiato
                                    - listitem [ref=e408]:
                                        - generic [ref=e409]: •
                                        - generic [ref=e410]: Zitronen-Sorbet Shake
                        - button [ref=e412]:
                            - img [ref=e413]
                        - button [ref=e416]:
                            - img [ref=e417]
            - generic [ref=e419]:
                - img [ref=e421]
                - generic [ref=e424]:
                    - generic [ref=e425]:
                        - heading "Was unsere Gäste sagen" [level=2] [ref=e426]
                        - paragraph [ref=e427]: 4.8/5 · 84+ echte Bewertungen auf Google
                    - generic [ref=e428]:
                        - generic [ref=e429]:
                            - img [ref=e431]
                            - img "5 von 5 Sternen" [ref=e434]:
                                - img [ref=e436]
                                - img [ref=e439]
                                - img [ref=e442]
                                - img [ref=e445]
                                - img [ref=e448]
                            - paragraph [ref=e450]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
                            - generic [ref=e451]:
                                - generic [ref=e452]: SM
                                - generic [ref=e453]:
                                    - generic [ref=e454]: Sarah M.
                                    - generic [ref=e455]: Verifizierte Google-Bewertung
                        - generic [ref=e456]:
                            - img [ref=e458]
                            - img "5 von 5 Sternen" [ref=e461]:
                                - img [ref=e463]
                                - img [ref=e466]
                                - img [ref=e469]
                                - img [ref=e472]
                                - img [ref=e475]
                            - paragraph [ref=e477]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
                            - generic [ref=e478]:
                                - generic [ref=e479]: TK
                                - generic [ref=e480]:
                                    - generic [ref=e481]: Thomas K.
                                    - generic [ref=e482]: Verifizierte Google-Bewertung
                        - generic [ref=e483]:
                            - img [ref=e485]
                            - img "5 von 5 Sternen" [ref=e488]:
                                - img [ref=e490]
                                - img [ref=e493]
                                - img [ref=e496]
                                - img [ref=e499]
                                - img [ref=e502]
                            - paragraph [ref=e504]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
                            - generic [ref=e505]:
                                - generic [ref=e506]: LR
                                - generic [ref=e507]:
                                    - generic [ref=e508]: Lisa R.
                                    - generic [ref=e509]: Verifizierte Google-Bewertung
                        - generic [ref=e510]:
                            - img [ref=e512]
                            - img "4 von 5 Sternen" [ref=e515]:
                                - img [ref=e517]
                                - img [ref=e520]
                                - img [ref=e523]
                                - img [ref=e526]
                            - paragraph [ref=e528]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
                            - generic [ref=e529]:
                                - generic [ref=e530]: MS
                                - generic [ref=e531]:
                                    - generic [ref=e532]: Marco S.
                                    - generic [ref=e533]: Verifizierte Google-Bewertung
                        - generic [ref=e534]:
                            - img [ref=e536]
                            - img "5 von 5 Sternen" [ref=e539]:
                                - img [ref=e541]
                                - img [ref=e544]
                                - img [ref=e547]
                                - img [ref=e550]
                                - img [ref=e553]
                            - paragraph [ref=e555]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
                            - generic [ref=e556]:
                                - generic [ref=e557]: JW
                                - generic [ref=e558]:
                                    - generic [ref=e559]: Julia W.
                                    - generic [ref=e560]: Verifizierte Google-Bewertung
                        - generic [ref=e561]:
                            - img [ref=e563]
                            - img "5 von 5 Sternen" [ref=e566]:
                                - img [ref=e568]
                                - img [ref=e571]
                                - img [ref=e574]
                                - img [ref=e577]
                                - img [ref=e580]
                            - paragraph [ref=e582]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
                            - generic [ref=e583]:
                                - generic [ref=e584]: SM
                                - generic [ref=e585]:
                                    - generic [ref=e586]: Sarah M.
                                    - generic [ref=e587]: Verifizierte Google-Bewertung
                        - generic [ref=e588]:
                            - img [ref=e590]
                            - img "5 von 5 Sternen" [ref=e593]:
                                - img [ref=e595]
                                - img [ref=e598]
                                - img [ref=e601]
                                - img [ref=e604]
                                - img [ref=e607]
                            - paragraph [ref=e609]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
                            - generic [ref=e610]:
                                - generic [ref=e611]: TK
                                - generic [ref=e612]:
                                    - generic [ref=e613]: Thomas K.
                                    - generic [ref=e614]: Verifizierte Google-Bewertung
                        - generic [ref=e615]:
                            - img [ref=e617]
                            - img "5 von 5 Sternen" [ref=e620]:
                                - img [ref=e622]
                                - img [ref=e625]
                                - img [ref=e628]
                                - img [ref=e631]
                                - img [ref=e634]
                            - paragraph [ref=e636]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
                            - generic [ref=e637]:
                                - generic [ref=e638]: LR
                                - generic [ref=e639]:
                                    - generic [ref=e640]: Lisa R.
                                    - generic [ref=e641]: Verifizierte Google-Bewertung
                        - generic [ref=e642]:
                            - img [ref=e644]
                            - img "4 von 5 Sternen" [ref=e647]:
                                - img [ref=e649]
                                - img [ref=e652]
                                - img [ref=e655]
                                - img [ref=e658]
                            - paragraph [ref=e660]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
                            - generic [ref=e661]:
                                - generic [ref=e662]: MS
                                - generic [ref=e663]:
                                    - generic [ref=e664]: Marco S.
                                    - generic [ref=e665]: Verifizierte Google-Bewertung
                        - generic [ref=e666]:
                            - img [ref=e668]
                            - img "5 von 5 Sternen" [ref=e671]:
                                - img [ref=e673]
                                - img [ref=e676]
                                - img [ref=e679]
                                - img [ref=e682]
                                - img [ref=e685]
                            - paragraph [ref=e687]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
                            - generic [ref=e688]:
                                - generic [ref=e689]: JW
                                - generic [ref=e690]:
                                    - generic [ref=e691]: Julia W.
                                    - generic [ref=e692]: Verifizierte Google-Bewertung
                    - generic [ref=e693]:
                        - paragraph [ref=e694]: ← Hover um anzuhalten · Swipe zum Entdecken →
                        - link "Auf Google bewerten" [ref=e695]:
                            - /url: https://maps.app.goo.gl/heyfede
                            - img [ref=e696]
                            - text: Auf Google bewerten
                            - img [ref=e698]
            - generic [ref=e703]:
                - generic [ref=e704]:
                    - heading "FAQ Quick-Check" [level=2] [ref=e705]
                    - paragraph [ref=e706]: Gut zu wissen.
                - paragraph [ref=e707]: Hier sind die häufigsten Fragen, die unsere Gäste in Wetzlar stellen. Für noch mehr Details schau einfach auf unserer ausführlichen FAQ-Seite vorbei.
                - generic [ref=e708]:
                    - generic [ref=e709]:
                        - button "Was ist Hey Fede?" [expanded] [ref=e710]:
                            - generic [ref=e711]: Was ist Hey Fede?
                            - img [ref=e713]
                        - generic [ref=e718]: Hey Fede! ist eine Dessertbar in der Wetzlarer Altstadt, die auf handgemachte Bubble Waffles, Pancakes, Eis und kreative Dessert-Kreationen spezialisiert ist. Wir verbinden frische Zutaten mit einzigartigen Rezepturen, um dir ein unvergessliches Geschmackserlebnis zu bieten.
                    - button "Wo ist Hey Fede?" [ref=e720]:
                        - generic [ref=e721]: Wo ist Hey Fede?
                        - img [ref=e723]
                    - button "Wann hat Hey Fede geöffnet?" [ref=e726]:
                        - generic [ref=e727]: Wann hat Hey Fede geöffnet?
                        - img [ref=e729]
                    - button "Seit wann gibt es Hey Fede?" [ref=e732]:
                        - generic [ref=e733]: Seit wann gibt es Hey Fede?
                        - img [ref=e735]
                    - button "Wer steckt hinter Hey Fede?" [ref=e738]:
                        - generic [ref=e739]: Wer steckt hinter Hey Fede?
                        - img [ref=e741]
                    - button "Was macht Hey Fede besonders?" [ref=e744]:
                        - generic [ref=e745]: Was macht Hey Fede besonders?
                        - img [ref=e747]
                    - button "Wie sind die Bewertungen von Hey Fede?" [ref=e750]:
                        - generic [ref=e751]: Wie sind die Bewertungen von Hey Fede?
                        - img [ref=e753]
                    - button "Gibt es WLAN bei Hey Fede?" [ref=e756]:
                        - generic [ref=e757]: Gibt es WLAN bei Hey Fede?
                        - img [ref=e759]
            - generic [ref=e762]:
                - heading "Immer auf dem Laufenden" [level=2] [ref=e763]
                - paragraph [ref=e764]: Abonniere unseren Newsletter für exklusive Angebote und die neuesten Dessert-Kreationen.
                - generic [ref=e767]:
                    - textbox "Bleib hungrig..." [ref=e768]
                    - button "Abonnieren" [ref=e770]:
                        - generic [ref=e771]: Abonnieren
            - generic [ref=e773]:
                - heading "Hey Fede! – Die Wetzlarer Dessertbar, die Genuss neu definiert" [level=1] [ref=e774]
                - generic [ref=e775]:
                    - heading "Unsere Rolle in der Wetzlarer Gastro-Szene" [level=2] [ref=e776]
                    - paragraph [ref=e777]: Wir bei Hey Fede! sind unendlich stolz darauf, ein so lebendiger Teil der dynamischen Wetzlarer Gastro-Szene zu sein. Die Gastronomielandschaft im Herzen von Hessen, insbesondere im Lahn-Dill-Kreis, war schon immer geprägt von tief verwurzelten Traditionen, rustikalen Wirtshäusern und klassischen Cafés, in denen man sich sonntags zum Stückchen Schwarzwälder Kirschtorte traf. Doch als wir 2023 beschlossen haben, genau hier in der Langgasse 68 unsere Türen zu öffnen, wussten wir, dass wir eine neue, aufregende Facette in das städtische Kulinarik-Portfolio einbringen wollten. Wir haben die historische Kulisse der Wetzlarer Altstadt – mit all ihren charmanten Fachwerkhäusern, den engen, geschichtsträchtigen Gassen rund um den Eisenmarkt und der Nähe zum altehrwürdigen Wetzlarer Dom – nicht als Einschränkung, sondern als die absolut perfekte Bühne für unser innovatives Dessert-Konzept begriffen.
                    - paragraph [ref=e778]: "Unsere Vision war es, einen Kontrastpunkt zu setzen, ohne dabei den Respekt vor der Wetzlarer Geschichte zu verlieren. Wenn unsere Gäste heute nach einem ausgiebigen Besuch im berühmten Lottehaus, wo Johann Wolfgang von Goethe wichtige Inspirationen für sein literarisches Schaffen fand, oder nach einem entspannten Nachmittagsspaziergang über die Alte Lahnbrücke zu uns kommen, tauchen sie in eine völlig andere Welt ein. Wir verbinden die Gemütlichkeit eines familiären Wohnzimmers mit dem urbanen Flair moderner Metropolen, in denen Dessert-Trends wie die knusprige Bubble Waffle oder üppig dekorierte Special Shakes längst zum Alltag gehören. In der Wetzlarer Gastro-Szene verstehen wir uns als kulinarische Brückenbauer: Wir bieten vertraute, tröstliche Elemente wie erstklassigen, heiß dampfenden Kaffee und hausgemachte Fruchtsoßen, kombinieren diese aber mit völlig neuen Texturen und aufregenden, internationalen Geschmackskombinationen, die man in dieser Form zuvor im Lahn-Dill-Kreis vergeblich gesucht hat."
                    - paragraph [ref=e779]: Durch die enge und vertrauensvolle Zusammenarbeit mit lokalen Lieferanten und die aktive Teilnahme an Stadtfesten und Events rund um den Kornmarkt haben wir tiefe Wurzeln geschlagen. Wir sind nicht einfach nur irgendein Laden, der Süßigkeiten verkauft; wir sind eine etablierte Institution, ein Ort des täglichen, unbeschwerten Zusammenkommens für Studierende der Technischen Hochschule Mittelhessen (THM), für frisch verliebte Paare auf ihrer Date-Night und für Großfamilien, die sich nach der Arbeitswoche etwas ganz Besonderes gönnen möchten. Die Wetzlarer Gastronomie ist durch unsere Dessertbar um eine farbenfrohe, süße und unglaublich herzliche Facette reicher geworden, und wir arbeiten jeden Tag unermüdlich daran, diesen Standard nicht nur zu halten, sondern stetig weiter auszubauen.
                - generic [ref=e780]:
                    - 'heading "Der große Vergleich: Bubble Waffle vs. Klassische Waffel" [level=2] [ref=e781]'
                    - paragraph [ref=e782]: 'Eine Frage, die uns an der Theke in der Wetzlarer Langgasse immer wieder mit großer Neugier gestellt wird, lautet: "Wo liegt eigentlich der genaue Unterschied zwischen eurer berühmten Bubble Waffle und der klassischen, traditionellen Waffel, die meine Oma früher immer gebacken hat?" Wir lieben diese Frage, denn sie gibt uns die perfekte Gelegenheit, unsere absolute Leidenschaft für dieses außergewöhnliche Gebäck zu teilen. Um es vorwegzunehmen: Wir lieben beide Varianten, aber die Bubble Waffle, die ihren historischen Ursprung in den pulsierenden, neonbeleuchteten Straßenmärkten von Hongkong hat, spielt in einer völlig anderen, faszinierenden Textur-Liga.'
                    - paragraph [ref=e783]: Der offensichtlichste Unterschied liegt natürlich im visuellen Erscheinungsbild und der revolutionären Struktur. Während die klassische belgische oder bergische Waffel flach ist und durch tiefe, quadratische oder herzförmige Vertiefungen gekennzeichnet wird, in denen sich Kirschen, Puderzucker oder heiße Himbeeren sammeln können, zeichnet sich unsere Bubble Waffle durch ihre namensgebenden, kugelrunden Erhebungen, die sogenannten "Bubbles", aus. Dieses einzigartige Wabenmuster entsteht durch spezielle, aus dickem Gusseisen gefertigte Waffeleisen, die wir während des Backvorgangs im exakt richtigen Moment wenden müssen, um den flüssigen, frischen Teig perfekt in jede einzelne Rundung der Form fließen zu lassen.
                    - paragraph [ref=e784]: Das wirklich Bahnbrechende an diesem speziellen Backverfahren ist jedoch die daraus resultierende Konsistenz, die sich radikal von allem unterscheidet, was du bisher gekannt hast. Eine klassische Waffel ist oft durchgehend weich, saftig oder, je nach Rezept, gleichmäßig knusprig. Unsere frisch gebackene Bubble Waffle hingegen ist ein Meisterwerk der Gegensätze. Die dünnen Verbindungsstege zwischen den einzelnen Blasen backen schnell durch und werden wunderbar karamellisiert, goldbraun und extrem knusprig. Die runden Blasen selbst jedoch umschließen die heiße Luft und bleiben im Inneren herrlich fluffig, weich und weisen eine fast schon kuchenartige, leichte Elastizität auf. Jeder Bissen bietet also ein gleichzeitiges Erlebnis von zartem Schmelz und lautem Knuspern.
                    - paragraph [ref=e785]: Zudem bietet die Flexibilität unserer Bubble Waffle einen immensen praktischen Vorteil für unser Konzept der üppigen Desserts. Unmittelbar nach dem Backen, wenn der Teig noch heiß und geschmeidig ist, formen wir die Waffel vorsichtig zu einer trichterartigen Tüte. Sobald sie an der Luft leicht abkühlt und aushärtet, verwandelt sie sich in das perfekte, essbare Gefäß für unsere hausgemachten Eiscremes, Früchte und Toppings. Während eine klassische Waffel unter dem Gewicht von Eis und Soßen oft schnell durchweicht und zerfällt, behält die Bubble Waffle durch ihre gebogene Struktur und die knusprige Außenhülle lange ihre Stabilität. Für uns und unsere zahllosen Gäste in Wetzlar ist sie deshalb nicht nur ein Teigprodukt, sondern die ultimative Leinwand für grenzenlose, süße Kreativität.
                - generic [ref=e786]:
                    - 'heading "Unser Hey Fede! Dessert-Glossar: Die Sprache des puren Genusses" [level=2] [ref=e787]'
                    - paragraph [ref=e788]: Wenn du die Speisekarte von Hey Fede! studierst, stößt du auf viele Begriffe aus der internationalen Dessertwelt, die wir mit unserem ganz eigenen, Wetzlarer Twist interpretiert haben. Wir möchten, dass du genau weißt, welche fantastischen Geschmackserlebnisse dich bei uns erwarten. Deshalb haben wir dieses kleine, aber feine Glossar der Dessert-Begriffe für dich zusammengestellt. Wir sehen es als unseren persönlichen Reiseführer durch die faszinierende, süße Welt unserer Dessertbar.
                    - generic [ref=e789]:
                        - term [ref=e790]:
                            - strong [ref=e791]: Softeis (Soft Serve)
                        - definition [ref=e792]: Vergiss alles, was du bisher über wässriges Softeis aus dem Freizeitpark dachtest. Unser Softeis wird frisch in der Maschine aufgeschlagen. Durch die kontinuierliche Zugabe von kalter Luft während des Gefrierprozesses erhält es diese unvergleichlich seidige, dichte und cremige Textur, die bei exakt -7 Grad Celsius serviert wird. Es schmilzt sanfter auf der Zunge als traditionelles Speiseeis und bietet dadurch eine sofortige, intensive Geschmacksentfaltung. Wir verwenden es als Herzstück vieler unserer Special Shakes und natürlich als kühle, erfrischende Füllung in unseren noch leicht warmen Bubble Waffles.
                        - term [ref=e793]:
                            - strong [ref=e794]: Toppings & Crumbles
                        - definition [ref=e795]: Ein Dessert ohne den perfekten Crunch ist für uns nur die halbe Miete. Unter "Toppings" verstehen wir alles, was wir kunstvoll über unsere Kreationen streuen, gießen oder dekorativ platzieren. Unsere Crumbles bestehen aus im Ofen gerösteten, butterigen Streuseln, knusprigen Keksbröseln oder gehackten Nüssen. Sie sind die entscheidenden Gegenspieler zur cremigen Süße von Sahne und Eis und sorgen dafür, dass dein Gaumen bei jedem Löffel eine neue, aufregende Textur erlebt. Wir stellen unsere Crumbles liebevoll in Handarbeit her, um sicherzustellen, dass sie immer die perfekte Größe und den maximalen Röstgeschmack besitzen.
                        - term [ref=e796]:
                            - strong [ref=e797]: Crêpes
                        - definition [ref=e798]: Dieser stolze Klassiker der französischen Patisserie-Kunst bedarf eigentlich kaum einer Erklärung, doch wir perfektionieren ihn jeden Tag aufs Neue. Ein Crêpe ist ein extrem dünner, weicher Pfannkuchen, der auf einer speziell dafür vorgesehenen, flachen Gusseisenplatte (der sogenannten Crêpière) gebacken wird. Wir verteilen den flüssigen Teig mit einem traditionellen Holzrechen in Sekundenschnelle hauchdünn. Das Resultat ist ein fast durchscheinender Teigfladen, den wir kunstvoll falten und mit reichhaltigen, dekadenten Füllungen wie unserer Nuss-Nougat-Creme, frisch geschnittenen Erdbeeren oder herzhaften Kombinationen versehen. Er ist das perfekte, unkomplizierte Handheld-Dessert für deinen Spaziergang durch die Wetzlarer Altstadt.
                        - term [ref=e799]:
                            - strong [ref=e800]: Special Shakes
                        - definition [ref=e801]: 'Der Begriff Milchshake wird unseren Kreationen absolut nicht gerecht, deshalb nennen wir sie voller Stolz "Special Shakes". Wir vermischen hochwertiges Eis mit eisgekühlter Milch, aber der eigentliche Clou passiert danach: Die Gläser werden am Rand mit Schokolade oder Karamell verziert, der Shake wird mit ganzen Gebäckstücken, Brownies, Marshmallows oder Waffelstücken gekrönt. Sie sind hochgradig instagrammable, unfassbar reichhaltig und so sättigend, dass sie ohne Probleme als eigenständige, flüssige Hauptmahlzeit durchgehen. Ein Special Shake ist bei uns keine bloße Erfrischung, sondern ein opulentes, visuelles und geschmackliches Kunstwerk.'
                        - term [ref=e802]:
                            - strong [ref=e803]: Matcha
                        - definition [ref=e804]: Dieser Begriff stammt aus der tiefen japanischen Teetradition und bezeichnet einen sehr fein gemahlenen Grüntee von absolut höchster Qualität. Im Gegensatz zu normalem Tee, der nur aufgebrüht wird, konsumiert man beim Matcha das gesamte Teeblatt, was für einen extrem intensiven, leicht herben und wunderbar erdigen Geschmack sorgt. Wir lieben Matcha, weil seine natürliche Bitterkeit und die leuchtend grüne Farbe den perfekten, erwachsenen Kontrapunkt zur Süße von weißer Schokolade oder Vanilleeis bilden. Ob in unserem Iced Matcha Latte oder als spezielles Topping auf der Frühlings-Waffel – Matcha bringt eine raffinierte, asiatische Eleganz direkt in unsere Dessertbar nach Hessen.
                - generic [ref=e805]:
                    - heading "Darum liebt Wetzlar Hey Fede! – Eine Zusammenfassung unserer Reviews" [level=2] [ref=e806]
                    - paragraph [ref=e807]: Nichts erfüllt unser Team mit mehr Stolz und tiefer Dankbarkeit als die unglaublich positiven Rückmeldungen, die wir täglich von unseren fantastischen Gästen erhalten. Wir lesen wirklich jede einzelne Google-Bewertung, jeden Instagram-Kommentar und jede direkte Nachricht, denn euer ehrliches Feedback ist der absolute Treibstoff, der unseren Motor am Laufen hält. Wenn wir all die lobenden Worte aus den vergangenen Monaten zusammenfassen, zeichnet sich ein klares, wunderschönes Bild davon ab, wofür Hey Fede! in den Augen der Menschen aus dem Lahn-Dill-Kreis und weit darüber hinaus steht.
                    - paragraph [ref=e808]: 'Am häufigsten wird unsere kompromisslose Hingabe zur **Produktqualität und Frische** hervorgehoben. Viele Rezensenten schreiben euphorisch, dass sie noch nie zuvor eine Waffel gegessen haben, die außen derart "brillant knusprig" und innen so "unfassbar fluffig" war. Es wird immer wieder bemerkt, dass unsere Früchte extrem frisch schmecken und unsere hausgemachten Soßen nicht künstlich übersüßt sind, sondern den puren Geschmack der Zutaten in den Vordergrund stellen. Diese geschmackliche Authentizität ist genau das, wofür wir jeden Morgen früh aufstehen und in der Küche stehen. Ein Gast fasste es kürzlich treffend zusammen: "Man schmeckt bei Hey Fede! in jedem Bissen die ehrliche Handarbeit, die hinter der Theke passiert. Kein Vergleich zu industrieller Massenware."'
                    - paragraph [ref=e809]: Ein weiterer, riesiger Schwerpunkt in euren Reviews ist unsere **familiäre Atmosphäre und der zuvorkommende Service**. Die Menschen betonen immer wieder, wie freundlich, geduldig und herzlich unser Team auch an extrem stressigen, gut besuchten Samstagnachmittagen auftritt. Eltern schwärmen in höchsten Tönen von unserer liebevoll eingerichteten Kinderecke und der Tatsache, dass sich auch die kleinsten Gäste bei uns wie echte Könige fühlen dürfen. Die Kombination aus warmen Erdtönen, dem Duft nach frisch gebackenem Teig und unserem echten, unaufgesetzten Lächeln sorgt dafür, dass sich viele Besucher bei uns "wie im eigenen Wohnzimmer, nur mit viel besserem Essen" fühlen. Wir werden oft als die absolute Nummer Eins Anlaufstelle in Wetzlar für Wohlfühlmomente bezeichnet, ein Ort, der auch an regnerischen, grauen Tagen sofort die Stimmung hebt.
                    - paragraph [ref=e810]: 'Zuletzt wird unsere **visuelle Kreativität und die Großzügigkeit der Portionen** oft lobend in den Mittelpunkt gestellt. "Das Auge isst hier nicht nur mit, es feiert eine absolute Party", schrieb uns ein begeisterter Stammgast, nachdem er unseren imposanten Tropical Mango Eisbecher serviert bekommen hatte. Die Leute lieben es, unsere farbenfrohen Kreationen zu fotografieren und zu teilen, weil jedes Dessert mit so unfassbar viel Liebe zum kleinsten Detail dekoriert wird. Und niemand geht bei uns hungrig nach Hause. Wir sind bekannt dafür, dass wir bei Toppings und Soßen absolut nicht knausern. Wir möchten, dass ein Besuch bei Hey Fede! in Wetzlar immer ein großzügiges Fest der Fülle ist. All diese wundervollen Reviews bestärken uns jeden Tag aufs Neue in unserer Mission: Wir wollen nicht einfach nur eine Dessertbar sein. Wir wollen Wetzlars süßestes, glücklichstes und genussvollstes Erlebnis schaffen – für jeden einzelnen Gast, der durch unsere Türen in der Langgasse tritt.'
    - contentinfo [ref=e811]:
        - img [ref=e814]
        - generic [ref=e816]:
            - generic [ref=e817]:
                - generic [ref=e818]:
                    - link "Startseite" [ref=e819]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e821] [cursor=pointer]
                    - paragraph [ref=e822]: Dessertbar & Café
                    - generic [ref=e825]:
                        - generic [ref=e826]:
                            - img [ref=e827]
                            - generic [ref=e830]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e831]:
                            - img [ref=e832]
                            - link "06441 7890426" [ref=e834]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e836]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e837]
                        - text: Instagram
                - generic [ref=e840]:
                    - heading "Hey Fede!" [level=3] [ref=e841]
                    - navigation "Footer Navigation" [ref=e842]:
                        - link "Startseite" [ref=e843]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e844]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e845]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e846]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e847]
                    - navigation "SEO Navigation" [ref=e848]:
                        - link "Bubble Waffles" [ref=e849]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e850]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e851]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e852]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e853]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e854]:
                    - heading "Öffnungszeiten" [level=3] [ref=e855]
                    - generic [ref=e858]:
                        - generic [ref=e859]:
                            - generic [ref=e861]: Montag
                            - generic [ref=e863]: Geschlossen
                        - generic [ref=e864]:
                            - generic [ref=e866]: Dienstag
                            - generic [ref=e868]: Geschlossen
                        - generic [ref=e869]:
                            - generic [ref=e872]: Mittwoch
                            - generic [ref=e873]:
                                - generic [ref=e874]: 12:00 – 19:00 Uhr
                                - generic [ref=e875]: Heute
                        - generic [ref=e876]:
                            - generic [ref=e878]: Donnerstag
                            - generic [ref=e880]: 12:00 – 19:00 Uhr
                        - generic [ref=e881]:
                            - generic [ref=e883]: Freitag
                            - generic [ref=e885]: 12:00 – 19:00 Uhr
                        - generic [ref=e886]:
                            - generic [ref=e888]: Samstag
                            - generic [ref=e890]: 12:00 – 19:00 Uhr
                        - generic [ref=e891]:
                            - generic [ref=e893]: Sonntag
                            - generic [ref=e895]: 13:00 – 19:00 Uhr
                    - generic [ref=e896]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e897]:
                    - heading "Stay Sweet" [level=3] [ref=e898]
                    - paragraph [ref=e899]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e901]:
                        - textbox "Bleib hungrig..." [ref=e902]
                        - button "Abonnieren" [ref=e904]:
                            - generic [ref=e905]: Abonnieren
            - generic [ref=e906]:
                - generic [ref=e907]: Frisch
                - generic [ref=e908]: ·
                - generic [ref=e909]: Selbstgemacht
                - generic [ref=e910]: ·
                - generic [ref=e911]: Mit Liebe
            - generic [ref=e912]:
                - img [ref=e913]
                - img [ref=e915]
                - img [ref=e917]
                - img [ref=e919]
                - img [ref=e921]
            - generic [ref=e923]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e924]
                - paragraph [ref=e925]:
                    - generic [ref=e926]: Hessen
                    - generic [ref=e927]: ›
                    - generic [ref=e928]: Lahn-Dill-Kreis
                    - generic [ref=e929]: ›
                    - generic [ref=e930]: Wetzlar
                    - generic [ref=e931]: ›
                    - generic [ref=e932]: Langgasse
            - generic [ref=e933]:
                - heading "Besuche uns auch auf" [level=3] [ref=e934]
                - generic [ref=e935]:
                    - link "G Google" [ref=e936]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e937]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e938]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e939]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e940]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e941]: yelp
            - img "Made with Love in Wetzlar" [ref=e944]
            - generic [ref=e945]:
                - paragraph [ref=e946]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e947]:
                    - link "Impressum" [ref=e948]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e949]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e950]:
                        - /url: /legal#agb
    - generic [ref=e952]:
        - img [ref=e954]
        - generic [ref=e956]:
            - heading "Cookies für dich!" [level=3] [ref=e957]
            - paragraph [ref=e958]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e959]:
            - button "Ablehnen" [ref=e960]
            - button "Anpassen" [ref=e961]
            - button "Akzeptieren" [ref=e963]:
                - generic [ref=e964]: Akzeptieren
    - alert [ref=e965]
    - iframe [ref=e966]:
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
  66  |     const initialClass = await cursor.getAttribute('class');
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
> 95  |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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
