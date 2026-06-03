# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier2_interactive.spec.ts >> Tier 2: Interactive Master-Features (Client Components) >> SyrupCursor renders correctly and tracks movement without errors
- Location: tests/e2e/tier2_interactive.spec.ts:40:3

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('svg filter#gooey')
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('svg filter#gooey')

```

```yaml
- link "Zum Hauptinhalt springen":
    - /url: "#main-content"
- status
- banner:
    - link "Hey Fedee! Startseite":
        - /url: /
        - img "Hey Fede! Logo"
    - navigation "Hauptnavigation":
        - link "Speisekarte":
            - /url: /menu
        - link "Über Uns":
            - /url: /about
        - link "Besuchen & Liefern":
            - /url: /visit
    - link "Jetzt bestellen":
        - /url: /menu
        - button "Jetzt bestellen"
    - link "Profil":
        - /url: /auth
    - button "Warenkorb"
- main:
    - text: DESSERTBAR & CAFÉ · WETZLAR
    - heading "Süße Momente, frisch gemacht." [level=1]
    - paragraph: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
    - link "Zur Speisekarte":
        - /url: /menu
        - button "Zur Speisekarte"
    - link "Uns besuchen":
        - /url: /visit
        - button "Uns besuchen"
    - img
    - img
    - img
    - img
    - img
    - text: 4.8 (84) Spiel mit uns!
    - img: HAUSGEMACHT
    - img: FRISCH & LECKER
    - img
    - text: Café Atmosphäre\nFamilienfoto 4.8★ 84+ Google Reviews
    - img: FÜR DIE GANZE FAMILIE
    - img: MIT KINDERECKE
    - heading "Ein Ort für alle Generationen" [level=2]
    - paragraph: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
    - text: Kinderecke Spielbereich für die Kleinen Wickelraum Komfort für Familien Vegan Vegane Optionen verfügbar Hausgemacht Alles frisch & selbst gemacht
    - heading "Unsere Highlights" [level=2]
    - paragraph: Alles frisch und selbstgemacht — das schmeckt man.
    - text: Bestseller
    - heading "Fede & Friends Box" [level=3]
    - paragraph: Das ultimative Sharing-Erlebnis für Gruppen
    - text: 25,00 €
    - button "Fede & Friends Box ansehen"
    - text: Beliebt
    - heading "Bubble Waffle Deluxe" [level=3]
    - paragraph: Eis + Sahne + 3 Toppings nach Wahl
    - text: 8,80 €
    - button "Bubble Waffle Deluxe ansehen"
    - heading "Oreo Special Shake" [level=3]
    - paragraph: 0,4l · frisch gemixt mit Sahne
    - text: 6,50 €
    - button "Oreo Special Shake ansehen"
    - heading "Pancake Picknick" [level=3]
    - paragraph: 12 Pancakes · 2 Fruchtsorten · Soße
    - text: 7,00 €
    - button "Pancake Picknick ansehen"
    - link "Alle Produkte ansehen":
        - /url: /menu
        - button "Alle Produkte ansehen"
    - text: Dein exklusives Fede-Ticket
    - heading "Kostenlose Lieferung über Lieferando!" [level=2]
    - paragraph: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
    - link "Jetzt bei Lieferando bestellen →":
        - /url: https://www.lieferando.de/speisekarte/hey-fede
        - button "Jetzt bei Lieferando bestellen →"
    - text: 0€ LIEFERGEBÜHR Über Lieferando
    - img
    - heading "Unsere Werte" [level=2]
    - paragraph: Was uns antreibt — jeden Tag.
    - heading "100% Hausgemacht & Echt" [level=3]
    - paragraph: Wenn wir morgens die Türen in der Wetzlarer Langgasse aufschließen, beginnt unser Tag mit echtem Handwerk. Wir rühren jeden einzelnen Teig für unsere Bubble Waffles und Pancakes frisch und nach eigener Geheimrezeptur an – ganz ohne fertige Backmischungen oder industrielle Zusätze. Selbst unsere cremigen Soßen und feinen Dips köcheln wir mit viel Geduld am eigenen Herd. Wir glauben fest daran, dass echte Liebe zum Produkt keinen Platz für Abkürzungen lässt. Jeder Bissen, den du bei uns genießt, ist das direkte Resultat ehrlicher, traditioneller Handarbeit, die wir mit größter Leidenschaft für dich ausführen.
    - heading "Kompromisslose Frische" [level=3]
    - paragraph: "Bei der Auswahl unserer Zutaten kennen wir keine Kompromisse. Ob knackige Nüsse, tiefroter Erdbeeren im Sommer oder cremige Milch für unsere legendären Special Shakes – wir achten penibel auf allerhöchste Qualität und tagesaktuelle Frische. Künstliche Aromen, Geschmacksverstärker oder unnötige Konservierungsstoffe haben in unserer Küche absolutes Hausverbot. Stattdessen vertrauen wir auf den reinen, unverfälschten Eigengeschmack bester Rohstoffe. Wenn du bei uns eine Bubble Waffle mit frischen Früchten und unserem hauseigenen Softeis bestellst, schmeckst du sofort den gewaltigen Unterschied: Natur pur, schonend verarbeitet und immer darauf ausgerichtet, dir das intensivste Geschmackserlebnis Wetzlars zu servieren."
    - heading "Tief in Wetzlar verwurzelt" [level=3]
    - paragraph: Unsere Dessertbar ist mehr als nur ein Café; sie ist unser persönlicher Liebesbrief an die historische Altstadt von Wetzlar. Wir lieben das bunte Treiben rund um den Eisenmarkt, die Spaziergänger auf dem Weg zum Lottehaus und die einzigartige, familiäre Gemeinschaft im Lahn-Dill-Kreis. Wo immer es uns möglich ist, arbeiten wir eng mit lokalen Partnern und Lieferanten zusammen, um die heimische Wirtschaft zu stärken und die Transportwege kurz zu halten. Hey Fede! ist ein lebendiger Treffpunkt für Einheimische und Besucher gleichermaßen – ein Ort, an dem sich die Wetzlarer Geschichte mit modernem, süßem Genuss verbindet.
    - img
    - heading "Hey Fede! im Überblick" [level=2]
    - paragraph: Zahlen, die für uns sprechen.
    - text: ★ 4.8 / 84+ Google Reviews 🧇 39 Handgemachte Items 📍 Seit 2023 In Wetzlar
    - heading "Beliebte Anlässe" [level=2]
    - paragraph: Jeder Besuch ein Fest.
    - heading "Romantische Date-Night" [level=3]
    - paragraph: Gedimmtes Licht, eine süße Bubble Waffle zum Teilen und zwei Löffel. Hey Fede! bietet die perfekte, unkomplizierte Atmosphäre in der Wetzlarer Altstadt, um sich beim ersten oder hundertsten Date ungestört näherzukommen.
    - heading "Sonntags mit der Familie" [level=3]
    - paragraph: Nach einem langen Spaziergang an der Lahn gibt es nichts Schöneres, als sich gemeinsam aufzuwärmen. Unsere familienfreundliche Dessertbar bietet viel Platz, eine Kinderecke und süße Belohnungen, die garantiert jedes Kinderauge zum Leuchten bringen.
    - heading "Der entspannte After-Work" [level=3]
    - paragraph: Lass den anstrengenden Büroalltag einfach hinter dir. Ein aromatischer Espresso, ein frisch gebackener Crêpe und gute Gespräche mit Kollegen in gemütlicher Atmosphäre sind die beste Art, den verdienten Feierabend in Wetzlar einzuläuten.
    - heading "Unvergessliche Geburtstage" [level=3]
    - paragraph: Feier deinen besonderen Tag bei uns! Mit unseren riesigen Fede Boxen, dekoriert mit funkelnden Wunderkerzen, und einer Auswahl deiner absoluten Lieblingsdesserts wird jeder Geburtstag zu einem süßen Fest, das du und deine Freunde so schnell nicht vergessen werden.
    - heading "Der wöchentliche Studi-Treff" [level=3]
    - paragraph: Als Student der THM brauchst du Nervennahrung für lange Lernsessions. Bei Hey Fede! findest du kostenloses WLAN, bequeme Sitzplätze und großartige Pancake-Stapel, die dir die nötige Energie für deine nächste Klausurenphase liefern.
    - heading "Die süße Shopping-Pause" [level=3]
    - paragraph: Nach einem ausgiebigen Einkaufsbummel durch die Wetzlarer Altstadt gibt es keinen besseren Ort für einen Boxenstopp. Gönn dir eine wohlverdiente Zucker-Dosis in unserer gemütlichen Dessertbar, bevor es mit vollen Taschen weitergeht.
    - img
    - heading "Saisonale Highlights" [level=2]
    - paragraph: Im Rhythmus der Jahreszeiten.
    - button "Frühling"
    - button "Sommer"
    - button "Herbst"
    - button "Winter"
    - text: Das aktuelle Special
    - heading "Tropical Mango Madness" [level=3]
    - paragraph: Wenn die Hitze über dem Eisenmarkt steht, sorgt unser Sommer-Spezial für die perfekte Abkühlung. Ein gigantischer 500ml Eisbecher mit hausgemachtem Mango-Sorbet, frischen Maracuja-Kernen, Kokosraspeln und unserem cremigen Softeis. Ein tropischer Kurzurlaub mitten in Hessen.
    - text: ★
    - heading "Weitere Sommers-Highlights" [level=4]
    - list:
        - listitem: • Tropical Mango Eisbecher
        - listitem: • Iced Caramel Macchiato
        - listitem: • Zitronen-Sorbet Shake
    - button
    - button
    - img
    - heading "Was unsere Gäste sagen" [level=2]
    - paragraph: 4.8/5 · 84+ echte Bewertungen auf Google
    - img "5 von 5 Sternen"
    - paragraph: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
    - text: SM Sarah M. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
    - text: TK Thomas K. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
    - text: LR Lisa R. Verifizierte Google-Bewertung
    - img "4 von 5 Sternen"
    - paragraph: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
    - text: MS Marco S. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
    - text: JW Julia W. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
    - text: SM Sarah M. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
    - text: TK Thomas K. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
    - text: LR Lisa R. Verifizierte Google-Bewertung
    - img "4 von 5 Sternen"
    - paragraph: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
    - text: MS Marco S. Verifizierte Google-Bewertung
    - img "5 von 5 Sternen"
    - paragraph: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
    - text: JW Julia W. Verifizierte Google-Bewertung
    - paragraph: ← Hover um anzuhalten · Swipe zum Entdecken →
    - link "Auf Google bewerten":
        - /url: https://maps.app.goo.gl/heyfede
    - heading "FAQ Quick-Check" [level=2]
    - paragraph: Gut zu wissen.
    - paragraph: Hier sind die häufigsten Fragen, die unsere Gäste in Wetzlar stellen. Für noch mehr Details schau einfach auf unserer ausführlichen FAQ-Seite vorbei.
    - button "Was ist Hey Fede?" [expanded]
    - text: Hey Fede! ist eine Dessertbar in der Wetzlarer Altstadt, die auf handgemachte Bubble Waffles, Pancakes, Eis und kreative Dessert-Kreationen spezialisiert ist. Wir verbinden frische Zutaten mit einzigartigen Rezepturen, um dir ein unvergessliches Geschmackserlebnis zu bieten.
    - button "Wo ist Hey Fede?"
    - button "Wann hat Hey Fede geöffnet?"
    - button "Seit wann gibt es Hey Fede?"
    - button "Wer steckt hinter Hey Fede?"
    - button "Was macht Hey Fede besonders?"
    - button "Wie sind die Bewertungen von Hey Fede?"
    - button "Gibt es WLAN bei Hey Fede?"
    - heading "Immer auf dem Laufenden" [level=2]
    - paragraph: Abonniere unseren Newsletter für exklusive Angebote und die neuesten Dessert-Kreationen.
    - textbox "Bleib hungrig..."
    - button "Abonnieren"
    - heading "Hey Fede! – Die Wetzlarer Dessertbar, die Genuss neu definiert" [level=1]
    - heading "Unsere Rolle in der Wetzlarer Gastro-Szene" [level=2]
    - paragraph: Wir bei Hey Fede! sind unendlich stolz darauf, ein so lebendiger Teil der dynamischen Wetzlarer Gastro-Szene zu sein. Die Gastronomielandschaft im Herzen von Hessen, insbesondere im Lahn-Dill-Kreis, war schon immer geprägt von tief verwurzelten Traditionen, rustikalen Wirtshäusern und klassischen Cafés, in denen man sich sonntags zum Stückchen Schwarzwälder Kirschtorte traf. Doch als wir 2023 beschlossen haben, genau hier in der Langgasse 68 unsere Türen zu öffnen, wussten wir, dass wir eine neue, aufregende Facette in das städtische Kulinarik-Portfolio einbringen wollten. Wir haben die historische Kulisse der Wetzlarer Altstadt – mit all ihren charmanten Fachwerkhäusern, den engen, geschichtsträchtigen Gassen rund um den Eisenmarkt und der Nähe zum altehrwürdigen Wetzlarer Dom – nicht als Einschränkung, sondern als die absolut perfekte Bühne für unser innovatives Dessert-Konzept begriffen.
    - paragraph: "Unsere Vision war es, einen Kontrastpunkt zu setzen, ohne dabei den Respekt vor der Wetzlarer Geschichte zu verlieren. Wenn unsere Gäste heute nach einem ausgiebigen Besuch im berühmten Lottehaus, wo Johann Wolfgang von Goethe wichtige Inspirationen für sein literarisches Schaffen fand, oder nach einem entspannten Nachmittagsspaziergang über die Alte Lahnbrücke zu uns kommen, tauchen sie in eine völlig andere Welt ein. Wir verbinden die Gemütlichkeit eines familiären Wohnzimmers mit dem urbanen Flair moderner Metropolen, in denen Dessert-Trends wie die knusprige Bubble Waffle oder üppig dekorierte Special Shakes längst zum Alltag gehören. In der Wetzlarer Gastro-Szene verstehen wir uns als kulinarische Brückenbauer: Wir bieten vertraute, tröstliche Elemente wie erstklassigen, heiß dampfenden Kaffee und hausgemachte Fruchtsoßen, kombinieren diese aber mit völlig neuen Texturen und aufregenden, internationalen Geschmackskombinationen, die man in dieser Form zuvor im Lahn-Dill-Kreis vergeblich gesucht hat."
    - paragraph: Durch die enge und vertrauensvolle Zusammenarbeit mit lokalen Lieferanten und die aktive Teilnahme an Stadtfesten und Events rund um den Kornmarkt haben wir tiefe Wurzeln geschlagen. Wir sind nicht einfach nur irgendein Laden, der Süßigkeiten verkauft; wir sind eine etablierte Institution, ein Ort des täglichen, unbeschwerten Zusammenkommens für Studierende der Technischen Hochschule Mittelhessen (THM), für frisch verliebte Paare auf ihrer Date-Night und für Großfamilien, die sich nach der Arbeitswoche etwas ganz Besonderes gönnen möchten. Die Wetzlarer Gastronomie ist durch unsere Dessertbar um eine farbenfrohe, süße und unglaublich herzliche Facette reicher geworden, und wir arbeiten jeden Tag unermüdlich daran, diesen Standard nicht nur zu halten, sondern stetig weiter auszubauen.
    - 'heading "Der große Vergleich: Bubble Waffle vs. Klassische Waffel" [level=2]'
    - paragraph: 'Eine Frage, die uns an der Theke in der Wetzlarer Langgasse immer wieder mit großer Neugier gestellt wird, lautet: "Wo liegt eigentlich der genaue Unterschied zwischen eurer berühmten Bubble Waffle und der klassischen, traditionellen Waffel, die meine Oma früher immer gebacken hat?" Wir lieben diese Frage, denn sie gibt uns die perfekte Gelegenheit, unsere absolute Leidenschaft für dieses außergewöhnliche Gebäck zu teilen. Um es vorwegzunehmen: Wir lieben beide Varianten, aber die Bubble Waffle, die ihren historischen Ursprung in den pulsierenden, neonbeleuchteten Straßenmärkten von Hongkong hat, spielt in einer völlig anderen, faszinierenden Textur-Liga.'
    - paragraph: Der offensichtlichste Unterschied liegt natürlich im visuellen Erscheinungsbild und der revolutionären Struktur. Während die klassische belgische oder bergische Waffel flach ist und durch tiefe, quadratische oder herzförmige Vertiefungen gekennzeichnet wird, in denen sich Kirschen, Puderzucker oder heiße Himbeeren sammeln können, zeichnet sich unsere Bubble Waffle durch ihre namensgebenden, kugelrunden Erhebungen, die sogenannten "Bubbles", aus. Dieses einzigartige Wabenmuster entsteht durch spezielle, aus dickem Gusseisen gefertigte Waffeleisen, die wir während des Backvorgangs im exakt richtigen Moment wenden müssen, um den flüssigen, frischen Teig perfekt in jede einzelne Rundung der Form fließen zu lassen.
    - paragraph: Das wirklich Bahnbrechende an diesem speziellen Backverfahren ist jedoch die daraus resultierende Konsistenz, die sich radikal von allem unterscheidet, was du bisher gekannt hast. Eine klassische Waffel ist oft durchgehend weich, saftig oder, je nach Rezept, gleichmäßig knusprig. Unsere frisch gebackene Bubble Waffle hingegen ist ein Meisterwerk der Gegensätze. Die dünnen Verbindungsstege zwischen den einzelnen Blasen backen schnell durch und werden wunderbar karamellisiert, goldbraun und extrem knusprig. Die runden Blasen selbst jedoch umschließen die heiße Luft und bleiben im Inneren herrlich fluffig, weich und weisen eine fast schon kuchenartige, leichte Elastizität auf. Jeder Bissen bietet also ein gleichzeitiges Erlebnis von zartem Schmelz und lautem Knuspern.
    - paragraph: Zudem bietet die Flexibilität unserer Bubble Waffle einen immensen praktischen Vorteil für unser Konzept der üppigen Desserts. Unmittelbar nach dem Backen, wenn der Teig noch heiß und geschmeidig ist, formen wir die Waffel vorsichtig zu einer trichterartigen Tüte. Sobald sie an der Luft leicht abkühlt und aushärtet, verwandelt sie sich in das perfekte, essbare Gefäß für unsere hausgemachten Eiscremes, Früchte und Toppings. Während eine klassische Waffel unter dem Gewicht von Eis und Soßen oft schnell durchweicht und zerfällt, behält die Bubble Waffle durch ihre gebogene Struktur und die knusprige Außenhülle lange ihre Stabilität. Für uns und unsere zahllosen Gäste in Wetzlar ist sie deshalb nicht nur ein Teigprodukt, sondern die ultimative Leinwand für grenzenlose, süße Kreativität.
    - 'heading "Unser Hey Fede! Dessert-Glossar: Die Sprache des puren Genusses" [level=2]'
    - paragraph: Wenn du die Speisekarte von Hey Fede! studierst, stößt du auf viele Begriffe aus der internationalen Dessertwelt, die wir mit unserem ganz eigenen, Wetzlarer Twist interpretiert haben. Wir möchten, dass du genau weißt, welche fantastischen Geschmackserlebnisse dich bei uns erwarten. Deshalb haben wir dieses kleine, aber feine Glossar der Dessert-Begriffe für dich zusammengestellt. Wir sehen es als unseren persönlichen Reiseführer durch die faszinierende, süße Welt unserer Dessertbar.
    - term:
        - strong: Softeis (Soft Serve)
    - definition: Vergiss alles, was du bisher über wässriges Softeis aus dem Freizeitpark dachtest. Unser Softeis wird frisch in der Maschine aufgeschlagen. Durch die kontinuierliche Zugabe von kalter Luft während des Gefrierprozesses erhält es diese unvergleichlich seidige, dichte und cremige Textur, die bei exakt -7 Grad Celsius serviert wird. Es schmilzt sanfter auf der Zunge als traditionelles Speiseeis und bietet dadurch eine sofortige, intensive Geschmacksentfaltung. Wir verwenden es als Herzstück vieler unserer Special Shakes und natürlich als kühle, erfrischende Füllung in unseren noch leicht warmen Bubble Waffles.
    - term:
        - strong: Toppings & Crumbles
    - definition: Ein Dessert ohne den perfekten Crunch ist für uns nur die halbe Miete. Unter "Toppings" verstehen wir alles, was wir kunstvoll über unsere Kreationen streuen, gießen oder dekorativ platzieren. Unsere Crumbles bestehen aus im Ofen gerösteten, butterigen Streuseln, knusprigen Keksbröseln oder gehackten Nüssen. Sie sind die entscheidenden Gegenspieler zur cremigen Süße von Sahne und Eis und sorgen dafür, dass dein Gaumen bei jedem Löffel eine neue, aufregende Textur erlebt. Wir stellen unsere Crumbles liebevoll in Handarbeit her, um sicherzustellen, dass sie immer die perfekte Größe und den maximalen Röstgeschmack besitzen.
    - term:
        - strong: Crêpes
    - definition: Dieser stolze Klassiker der französischen Patisserie-Kunst bedarf eigentlich kaum einer Erklärung, doch wir perfektionieren ihn jeden Tag aufs Neue. Ein Crêpe ist ein extrem dünner, weicher Pfannkuchen, der auf einer speziell dafür vorgesehenen, flachen Gusseisenplatte (der sogenannten Crêpière) gebacken wird. Wir verteilen den flüssigen Teig mit einem traditionellen Holzrechen in Sekundenschnelle hauchdünn. Das Resultat ist ein fast durchscheinender Teigfladen, den wir kunstvoll falten und mit reichhaltigen, dekadenten Füllungen wie unserer Nuss-Nougat-Creme, frisch geschnittenen Erdbeeren oder herzhaften Kombinationen versehen. Er ist das perfekte, unkomplizierte Handheld-Dessert für deinen Spaziergang durch die Wetzlarer Altstadt.
    - term:
        - strong: Special Shakes
    - definition: 'Der Begriff Milchshake wird unseren Kreationen absolut nicht gerecht, deshalb nennen wir sie voller Stolz "Special Shakes". Wir vermischen hochwertiges Eis mit eisgekühlter Milch, aber der eigentliche Clou passiert danach: Die Gläser werden am Rand mit Schokolade oder Karamell verziert, der Shake wird mit ganzen Gebäckstücken, Brownies, Marshmallows oder Waffelstücken gekrönt. Sie sind hochgradig instagrammable, unfassbar reichhaltig und so sättigend, dass sie ohne Probleme als eigenständige, flüssige Hauptmahlzeit durchgehen. Ein Special Shake ist bei uns keine bloße Erfrischung, sondern ein opulentes, visuelles und geschmackliches Kunstwerk.'
    - term:
        - strong: Matcha
    - definition: Dieser Begriff stammt aus der tiefen japanischen Teetradition und bezeichnet einen sehr fein gemahlenen Grüntee von absolut höchster Qualität. Im Gegensatz zu normalem Tee, der nur aufgebrüht wird, konsumiert man beim Matcha das gesamte Teeblatt, was für einen extrem intensiven, leicht herben und wunderbar erdigen Geschmack sorgt. Wir lieben Matcha, weil seine natürliche Bitterkeit und die leuchtend grüne Farbe den perfekten, erwachsenen Kontrapunkt zur Süße von weißer Schokolade oder Vanilleeis bilden. Ob in unserem Iced Matcha Latte oder als spezielles Topping auf der Frühlings-Waffel – Matcha bringt eine raffinierte, asiatische Eleganz direkt in unsere Dessertbar nach Hessen.
    - heading "Darum liebt Wetzlar Hey Fede! – Eine Zusammenfassung unserer Reviews" [level=2]
    - paragraph: Nichts erfüllt unser Team mit mehr Stolz und tiefer Dankbarkeit als die unglaublich positiven Rückmeldungen, die wir täglich von unseren fantastischen Gästen erhalten. Wir lesen wirklich jede einzelne Google-Bewertung, jeden Instagram-Kommentar und jede direkte Nachricht, denn euer ehrliches Feedback ist der absolute Treibstoff, der unseren Motor am Laufen hält. Wenn wir all die lobenden Worte aus den vergangenen Monaten zusammenfassen, zeichnet sich ein klares, wunderschönes Bild davon ab, wofür Hey Fede! in den Augen der Menschen aus dem Lahn-Dill-Kreis und weit darüber hinaus steht.
    - paragraph: 'Am häufigsten wird unsere kompromisslose Hingabe zur **Produktqualität und Frische** hervorgehoben. Viele Rezensenten schreiben euphorisch, dass sie noch nie zuvor eine Waffel gegessen haben, die außen derart "brillant knusprig" und innen so "unfassbar fluffig" war. Es wird immer wieder bemerkt, dass unsere Früchte extrem frisch schmecken und unsere hausgemachten Soßen nicht künstlich übersüßt sind, sondern den puren Geschmack der Zutaten in den Vordergrund stellen. Diese geschmackliche Authentizität ist genau das, wofür wir jeden Morgen früh aufstehen und in der Küche stehen. Ein Gast fasste es kürzlich treffend zusammen: "Man schmeckt bei Hey Fede! in jedem Bissen die ehrliche Handarbeit, die hinter der Theke passiert. Kein Vergleich zu industrieller Massenware."'
    - paragraph: Ein weiterer, riesiger Schwerpunkt in euren Reviews ist unsere **familiäre Atmosphäre und der zuvorkommende Service**. Die Menschen betonen immer wieder, wie freundlich, geduldig und herzlich unser Team auch an extrem stressigen, gut besuchten Samstagnachmittagen auftritt. Eltern schwärmen in höchsten Tönen von unserer liebevoll eingerichteten Kinderecke und der Tatsache, dass sich auch die kleinsten Gäste bei uns wie echte Könige fühlen dürfen. Die Kombination aus warmen Erdtönen, dem Duft nach frisch gebackenem Teig und unserem echten, unaufgesetzten Lächeln sorgt dafür, dass sich viele Besucher bei uns "wie im eigenen Wohnzimmer, nur mit viel besserem Essen" fühlen. Wir werden oft als die absolute Nummer Eins Anlaufstelle in Wetzlar für Wohlfühlmomente bezeichnet, ein Ort, der auch an regnerischen, grauen Tagen sofort die Stimmung hebt.
    - paragraph: 'Zuletzt wird unsere **visuelle Kreativität und die Großzügigkeit der Portionen** oft lobend in den Mittelpunkt gestellt. "Das Auge isst hier nicht nur mit, es feiert eine absolute Party", schrieb uns ein begeisterter Stammgast, nachdem er unseren imposanten Tropical Mango Eisbecher serviert bekommen hatte. Die Leute lieben es, unsere farbenfrohen Kreationen zu fotografieren und zu teilen, weil jedes Dessert mit so unfassbar viel Liebe zum kleinsten Detail dekoriert wird. Und niemand geht bei uns hungrig nach Hause. Wir sind bekannt dafür, dass wir bei Toppings und Soßen absolut nicht knausern. Wir möchten, dass ein Besuch bei Hey Fede! in Wetzlar immer ein großzügiges Fest der Fülle ist. All diese wundervollen Reviews bestärken uns jeden Tag aufs Neue in unserer Mission: Wir wollen nicht einfach nur eine Dessertbar sein. Wir wollen Wetzlars süßestes, glücklichstes und genussvollstes Erlebnis schaffen – für jeden einzelnen Gast, der durch unsere Türen in der Langgasse tritt.'
- contentinfo:
    - img
    - link "Startseite":
        - /url: /
        - img "Hey Fede! Logo"
    - paragraph: Dessertbar & Café
    - text: Langgasse 68 35576 Wetzlar
    - link "06441 7890426":
        - /url: tel:+4964417890426
    - link "Instagram":
        - /url: https://www.instagram.com/heyfede_wetzlar
    - heading "Hey Fede!" [level=3]
    - navigation "Footer Navigation":
        - link "Startseite":
            - /url: /
        - link "Speisekarte":
            - /url: /menu
        - link "Über Uns":
            - /url: /about
        - link "Besuchen & Liefern":
            - /url: /visit
    - heading "Entdecke Mehr" [level=3]
    - navigation "SEO Navigation":
        - link "Bubble Waffles":
            - /url: /bubble-waffles-wetzlar
        - link "Lieferservice":
            - /url: /lieferservice-desserts-lahn-dill
        - link "Eisdiele & Shakes":
            - /url: /eisdiele-wetzlar-special-shakes
        - link "Event Catering":
            - /url: /events-catering-hessen
        - link "Vegane Desserts":
            - /url: /vegane-desserts-wetzlar
    - heading "Öffnungszeiten" [level=3]
    - text: Montag Geschlossen Dienstag Geschlossen Mittwoch 12:00 – 19:00 Uhr Heute Donnerstag 12:00 – 19:00 Uhr Freitag 12:00 – 19:00 Uhr Samstag 12:00 – 19:00 Uhr Sonntag 13:00 – 19:00 Uhr ✓ Keine Liefergebühr bei Lieferando
    - heading "Stay Sweet" [level=3]
    - paragraph: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
    - textbox "Bleib hungrig..."
    - button "Abonnieren"
    - text: Frisch · Selbstgemacht · Mit Liebe
    - img
    - img
    - img
    - img
    - img
    - heading "Wir sind hier zuhause" [level=3]
    - paragraph: Hessen › Lahn-Dill-Kreis › Wetzlar › Langgasse
    - heading "Besuche uns auch auf" [level=3]
    - link "G Google":
        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
    - link "● TripAdvisor":
        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
    - link "yelp":
        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
    - img "Made with Love in Wetzlar"
    - paragraph: © 2026 Hey Fede! Dessertbar & Café
    - link "Impressum":
        - /url: /legal#impressum
    - link "Datenschutz":
        - /url: /legal#datenschutz
    - link "AGB":
        - /url: /legal#agb
- heading "Cookies für dich!" [level=3]
- paragraph: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
- button "Ablehnen"
- button "Anpassen"
- button "Akzeptieren"
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   |
  3   | test.describe('Tier 2: Interactive Master-Features (Client Components)', () => {
  4   |   let consoleErrors: string[] = [];
  5   |   let pageErrors: Error[] = [];
  6   |
  7   |   test.beforeEach(async ({ page }) => {
  8   |     consoleErrors = [];
  9   |     pageErrors = [];
  10  |
  11  |     // Listen to console and page errors to ensure hydration and runtime safety
  12  |     page.on('console', (msg) => {
  13  |       if (msg.type() === 'error') {
  14  |         const text = msg.text();
  15  |         // Specifically catch hydration mismatches and unhandled React errors
  16  |         if (
  17  |           text.includes('Hydration failed') ||
  18  |           text.includes('Text content did not match') ||
  19  |           text.includes('Minified React error') ||
  20  |           text.includes('Uncaught Error') ||
  21  |           text.includes('WebGL') ||
  22  |           text.includes('RequestAnimationFrame')
  23  |         ) {
  24  |           consoleErrors.push(text);
  25  |         }
  26  |       }
  27  |     });
  28  |
  29  |     page.on('pageerror', (err) => {
  30  |       pageErrors.push(err);
  31  |     });
  32  |   });
  33  |
  34  |   test.afterEach(() => {
  35  |     // Assert exactly zero hydration or unhandled errors across tests
  36  |     expect(consoleErrors).toEqual([]);
  37  |     expect(pageErrors).toEqual([]);
  38  |   });
  39  |
  40  |   test('SyrupCursor renders correctly and tracks movement without errors', async ({ page, isMobile }) => {
  41  |     test.skip(!!isMobile, 'SyrupCursor is typically a desktop feature');
  42  |
  43  |     await page.goto('/');
  44  |     await page.waitForLoadState('domcontentloaded');
  45  |
  46  |     // Ensure the Gooey SVG filter exists in the DOM for SyrupCursor
  47  |     const gooeyFilter = page.locator('svg filter#gooey');
> 48  |     await expect(gooeyFilter).toBeAttached();
      |                               ^ Error: expect(locator).toBeAttached() failed
  49  |
  50  |     // Simulate interactions to verify smooth event listener attachment
  51  |     await page.mouse.move(100, 100);
  52  |     await page.waitForTimeout(100);
  53  |     await page.mouse.move(500, 500);
  54  |     await page.waitForTimeout(200);
  55  |     await page.mouse.move(200, 800);
  56  |   });
  57  |
  58  |   test('LiquidTransition allows smooth page transitions without React tree crashes', async ({ page }) => {
  59  |     await page.goto('/');
  60  |     await page.waitForLoadState('domcontentloaded');
  61  |
  62  |     // Navigate using client-side routing
  63  |     const menuLink = page.locator('a[href="/menu"]').first();
  64  |     await menuLink.click();
  65  |     await page.waitForURL('**/menu', { timeout: 10000 });
  66  |     await page.waitForLoadState('domcontentloaded');
  67  |
  68  |     const aboutLink = page.locator('a[href="/about"]').first();
  69  |     await aboutLink.click();
  70  |     await page.waitForURL('**/about', { timeout: 10000 });
  71  |     await page.waitForLoadState('domcontentloaded');
  72  |
  73  |     // Navigate back to verify tree unmounting/remounting
  74  |     await page.goBack();
  75  |     await page.waitForLoadState('domcontentloaded');
  76  |     await page.goBack();
  77  |     await page.waitForLoadState('domcontentloaded');
  78  |   });
  79  |
  80  |   test('PhysicsPlayground (Matter.js) canvas renders and handles interactions safely', async ({ page }) => {
  81  |     await page.goto('/');
  82  |     await page.waitForLoadState('domcontentloaded');
  83  |
  84  |     // Wait for the PhysicsPlayground component to mount
  85  |     await page.waitForTimeout(500);
  86  |
  87  |     // Canvas should exist for physics playground
  88  |     const canvas = page.locator('canvas').first();
  89  |
  90  |     // Interact if it exists
  91  |     await expect(canvas).toBeAttached();
  92  |     await expect(canvas).toBeVisible();
  93  |
  94  |     // Trigger interactions that would spawn Matter.js physics bodies
  95  |     const box = await canvas.boundingBox();
  96  |     expect(box).not.toBeNull();
  97  |     const cx = box!.x + box!.width / 2;
  98  |     const cy = box!.y + box!.height / 2;
  99  |
  100 |     await page.mouse.click(cx, cy);
  101 |     await page.waitForTimeout(100);
  102 |     await page.mouse.click(cx + 50, cy);
  103 |
  104 |     // Wait to allow Matter.js RequestAnimationFrame loops to run and potentially throw errors
  105 |     await page.waitForTimeout(1000);
  106 |   });
  107 |
  108 |   test('ScratchCard component mounts and is visually present without crashing', async ({ page }) => {
  109 |     // ScratchCard is verified to be on the home page layout
  110 |     await page.goto('/');
  111 |     await page.waitForLoadState('domcontentloaded');
  112 |
  113 |     // Simulate scratch gestures
  114 |     const viewport = page.viewportSize();
  115 |     expect(viewport).not.toBeNull();
  116 |     const cx = viewport!.width / 2;
  117 |     const cy = viewport!.height / 2;
  118 |
  119 |     await page.mouse.move(cx - 50, cy - 50);
  120 |     await page.mouse.down();
  121 |
  122 |     // Zig-zag motion
  123 |     await page.mouse.move(cx + 50, cy - 50, { steps: 5 });
  124 |     await page.mouse.move(cx - 50, cy, { steps: 5 });
  125 |     await page.mouse.move(cx + 50, cy, { steps: 5 });
  126 |     await page.mouse.move(cx - 50, cy + 50, { steps: 5 });
  127 |     await page.mouse.up();
  128 |
  129 |     await page.waitForTimeout(500);
  130 |   });
  131 |
  132 |   test('Hydration & Memory Safety (Rapid Navigation Check)', async ({ page }) => {
  133 |     // Rapidly navigate between interactive pages
  134 |     const routes = ['/', '/menu', '/about', '/'];
  135 |
  136 |     for (const route of routes) {
  137 |       await page.goto(route);
  138 |       await page.waitForLoadState('domcontentloaded');
  139 |
  140 |       // Briefly interact to trigger potential event listener memory leaks
  141 |       await page.mouse.move(200, 200);
  142 |       await page.waitForTimeout(200);
  143 |     }
  144 |
  145 |     // Verify CDPSession for JSHeap size retrieval (validating devtools connectivity without crashing)
  146 |     const client = await page.context().newCDPSession(page);
  147 |     await client.send('Performance.enable');
  148 |     const metrics = await client.send('Performance.getMetrics');
```
