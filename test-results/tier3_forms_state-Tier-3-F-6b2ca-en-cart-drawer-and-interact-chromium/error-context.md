# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_forms_state.spec.ts >> Tier 3: Form Submissions & State Management >> Cart Management (Zustand) >> should add items, open cart drawer and interact
- Location: tests/e2e/tier3_forms_state.spec.ts:21:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: /Warenkorb/i }) resolved to 8 elements:
    1) <button aria-label="Warenkorb" class="relative w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer">…</button> aka getByRole('button', { name: 'Warenkorb', exact: true })
    2) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka getByRole('button', { name: 'Zum Warenkorb hinzufügen' }).first()
    3) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka getByRole('button', { name: 'Zum Warenkorb hinzufügen' }).nth(1)
    4) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka getByRole('button', { name: 'Zum Warenkorb hinzufügen' }).nth(2)
    5) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka getByRole('button', { name: 'Zum Warenkorb hinzufügen' }).nth(3)
    6) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka getByRole('button', { name: 'Zum Warenkorb hinzufügen' }).nth(4)
    7) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka getByRole('button', { name: 'Zum Warenkorb hinzufügen' }).nth(5)
    8) <button tabindex="0" aria-label="Zum Warenkorb hinzufügen" class="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">…</button> aka locator('div:nth-child(8) > .relative.flex.flex-col.p-5 > .relative.z-10 > .flex.flex-col.h-full > .flex.items-center.justify-between > div > .bg-terracotta')

Call log:
  - waiting for getByRole('button', { name: /Warenkorb/i })

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
    - banner [ref=e6]:
        - generic [ref=e7]:
            - link "Hey Fedee! Startseite" [ref=e9] [cursor=pointer]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e11]
            - navigation "Hauptnavigation" [ref=e12]:
                - link "Speisekarte" [ref=e13] [cursor=pointer]:
                    - /url: /menu
                - link "Über Uns" [ref=e14] [cursor=pointer]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e15] [cursor=pointer]:
                    - /url: /visit
            - generic [ref=e16]:
                - link "Jetzt bestellen" [ref=e18] [cursor=pointer]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e20]:
                        - generic [ref=e21]: Jetzt bestellen
                        - img [ref=e22]
                - link "Profil" [ref=e24] [cursor=pointer]:
                    - /url: /auth
                    - img [ref=e26]
                - button "Warenkorb" [ref=e29] [cursor=pointer]:
                    - img [ref=e30]
                    - generic [ref=e33]: "1"
    - main [ref=e34]:
        - generic [ref=e35]:
            - generic [ref=e36]:
                - generic:
                    - img "hand"
                - heading "Gönn dir was Süßes!" [level=1] [ref=e37]:
                    - generic [ref=e38]: Gönn
                    - generic [ref=e39]: dir
                    - generic [ref=e40]: was
                    - generic [ref=e41]: Süßes!
                - paragraph [ref=e42]: Alles frisch, hausgemacht und mit viel Liebe zubereitet. Wähl deinen Favoriten.
            - generic [ref=e43]:
                - generic:
                    - img "shape"
                - generic [ref=e44]:
                    - generic [ref=e47]:
                        - button "Fede Boxen" [ref=e48]:
                            - generic [ref=e49]:
                                - img [ref=e50]
                                - text: Fede Boxen
                        - button "Bubble Waffle" [ref=e53]:
                            - generic [ref=e55]:
                                - img [ref=e56]
                                - text: Bubble Waffle
                        - button "Crêpes" [ref=e64]:
                            - generic [ref=e65]:
                                - img [ref=e66]
                                - text: Crêpes
                        - button "Kuchen" [ref=e70]:
                            - generic [ref=e71]:
                                - img [ref=e72]
                                - text: Kuchen
                        - button "Cookies" [ref=e75]:
                            - generic [ref=e76]:
                                - img [ref=e77]
                                - text: Cookies
                        - button "Eisbecher 500ml" [ref=e80]:
                            - generic [ref=e81]:
                                - img [ref=e82]
                                - text: Eisbecher 500ml
                        - button "Special Shakes" [ref=e87]:
                            - generic [ref=e88]:
                                - img [ref=e89]
                                - text: Special Shakes
                        - button "Iced Drinks" [ref=e93]:
                            - generic [ref=e94]:
                                - img [ref=e95]
                                - text: Iced Drinks
                        - button "Stullen" [ref=e101]:
                            - generic [ref=e102]:
                                - img [ref=e103]
                                - text: Stullen
                        - button "Getränke" [ref=e108]:
                            - generic [ref=e109]:
                                - img [ref=e110]
                                - text: Getränke
                    - generic [ref=e118]:
                        - generic [ref=e122] [cursor=pointer]:
                            - generic [ref=e124]:
                                - img [ref=e125]
                                - generic [ref=e129]: Kein Bild
                            - heading "Puderzucker" [level=3] [ref=e130]
                            - paragraph [ref=e131]: Klassisch mit Puderzucker bestäubt
                            - generic [ref=e132]:
                                - generic [ref=e133]: 3,80 €
                                - generic [ref=e135]:
                                    - button "Menge reduzieren" [ref=e136]:
                                        - img [ref=e137]
                                    - generic [ref=e139]: "1"
                                    - button "Menge erhöhen" [ref=e140]:
                                        - img [ref=e141]
                        - generic [ref=e146] [cursor=pointer]:
                            - generic [ref=e148]:
                                - img [ref=e149]
                                - generic [ref=e153]: Kein Bild
                            - heading "Soße nach Wahl" [level=3] [ref=e154]
                            - paragraph [ref=e155]: Mit deiner Lieblingssoße
                            - generic [ref=e156]:
                                - generic [ref=e157]: 5,00 €
                                - button "Zum Warenkorb hinzufügen" [ref=e159]:
                                    - img [ref=e160]
                        - generic [ref=e164] [cursor=pointer]:
                            - generic [ref=e166]:
                                - img [ref=e167]
                                - generic [ref=e171]: Kein Bild
                            - heading "Eis + Sahne" [level=3] [ref=e172]
                            - paragraph [ref=e173]: Mit Eiskugel & Sahne (oder 2 Eiskugeln statt Sahne)
                            - generic [ref=e174]:
                                - generic [ref=e175]: 6,50 €
                                - button "Zum Warenkorb hinzufügen" [ref=e177]:
                                    - img [ref=e178]
                        - generic [ref=e182] [cursor=pointer]:
                            - generic [ref=e184]:
                                - img [ref=e185]
                                - generic [ref=e189]: Kein Bild
                            - heading "Deluxe" [level=3] [ref=e190]
                            - paragraph [ref=e191]: Eis + Sahne + 3 Toppings + Soße · auch mit 2 Eiskugeln möglich
                            - generic [ref=e192]:
                                - generic [ref=e193]: 8,80 €
                                - button "Zum Warenkorb hinzufügen" [ref=e195]:
                                    - img [ref=e196]
                        - generic [ref=e200] [cursor=pointer]:
                            - generic [ref=e202]:
                                - img [ref=e203]
                                - generic [ref=e207]: Kein Bild
                            - heading "Deluxe" [level=3] [ref=e208]
                            - paragraph [ref=e209]: Eis + Sahne + 3 Toppings + Soße · auch mit 2 Eiskugeln möglich
                            - generic [ref=e210]:
                                - generic [ref=e211]: 8,80 €
                                - button "Zum Warenkorb hinzufügen" [ref=e213]:
                                    - img [ref=e214]
                        - generic [ref=e218] [cursor=pointer]:
                            - generic [ref=e220]:
                                - img [ref=e221]
                                - generic [ref=e225]: Kein Bild
                            - heading "Eis + Sahne" [level=3] [ref=e226]
                            - paragraph [ref=e227]: Mit Eiskugel & Sahne (oder 2 Eiskugeln statt Sahne)
                            - generic [ref=e228]:
                                - generic [ref=e229]: 6,50 €
                                - button "Zum Warenkorb hinzufügen" [ref=e231]:
                                    - img [ref=e232]
                        - generic [ref=e236] [cursor=pointer]:
                            - generic [ref=e238]:
                                - img [ref=e239]
                                - generic [ref=e243]: Kein Bild
                            - heading "Puderzucker" [level=3] [ref=e244]
                            - paragraph [ref=e245]: Klassisch mit Puderzucker bestäubt
                            - generic [ref=e246]:
                                - generic [ref=e247]: 3,80 €
                                - button "Zum Warenkorb hinzufügen" [ref=e249]:
                                    - img [ref=e250]
                        - generic [ref=e254] [cursor=pointer]:
                            - generic [ref=e256]:
                                - img [ref=e257]
                                - generic [ref=e261]: Kein Bild
                            - heading "Soße nach Wahl" [level=3] [ref=e262]
                            - paragraph [ref=e263]: Mit deiner Lieblingssoße
                            - generic [ref=e264]:
                                - generic [ref=e265]: 5,00 €
                                - button "Zum Warenkorb hinzufügen" [ref=e267]:
                                    - img [ref=e268]
        - region "Wissenswertes rund um unsere Speisekarte" [ref=e269]:
            - region "Hey Fede! Menü — Ausführliche Beschreibungen" [ref=e271]:
                - heading "Herzlich willkommen bei Hey Fede! in der Langgasse 68" [level=2] [ref=e272]
                - paragraph [ref=e273]: Wenn du durch die historischen Gassen der Wetzlarer Altstadt spazierst, vorbei an den liebevoll restaurierten Fachwerkhäusern und über das alte Kopfsteinpflaster, das schon Johann Wolfgang von Goethe unter seinen Sohlen spürte, dann führt dich dein Weg früher oder später in die malerische Langgasse. Hier, inmitten dieser wundervollen Kulisse, nur einen Steinwurf vom majestätischen Wetzlarer Dom und dem belebten Eisenmarkt entfernt, haben wir einen Ort geschaffen, der für puren Genuss, echte Handwerkskunst und herzliche Gastfreundschaft steht. Hey Fede! ist nicht einfach nur eine Dessertbar in Wetzlar. Es ist unsere Vision eines Ortes, der Menschen zusammenbringt. Ein Raum, in dem der Alltagsstress an der Eingangstür abgegeben wird und Platz macht für Momente des bewussten Genießens.
                - paragraph [ref=e274]: Wenn du unsere Tür öffnest, empfängt dich sofort der warme, tröstliche Duft von frisch gebackenem Waffelteig, gerösteten Kaffeebohnen, leicht gebräunter Butter und geschmolzener Schokolade. Wir möchten, dass sich jeder Besuch bei uns anfühlt wie eine herzliche Umarmung, wie das Nach-Hause-Kommen an einem kalten Wintertag oder wie ein erfrischender Kurzurlaub im Hochsommer. Die Atmosphäre in der Langgasse 68 ist geprägt von echter Gemütlichkeit, tiefgründigen Gesprächen und natürlich von Speisen, die mit bedingungsloser Hingabe zubereitet werden. Wir glauben fest daran, dass gutes Essen eine Seele hat. Deshalb nehmen wir uns für jede einzelne Bestellung exakt die Zeit, die sie braucht, um perfekt zu werden. Bei uns bist du kein anonymer Gast, der schnell abgefertigt wird, sondern Teil unserer lebendigen Hey Fede! Familie.
                - paragraph [ref=e275]: Egal, ob du nach einem langen, ausgedehnten Spaziergang entlang der Lahn bei uns einkehrst, dich mit alten Freunden zum ausführlichen Brunch triffst, nach einem Einkaufsbummel in der Wetzlarer Fußgängerzone neue Energie tanken möchtest oder dir einfach selbst nach Feierabend eine wohlverdiente Auszeit gönnst – wir sind hier, um dir diesen Moment so süß, so ehrlich und so unvergesslich wie möglich zu machen. Unsere Türen stehen für jeden offen, der die Liebe zum Detail genauso schätzt wie wir.
                - 'heading "Unsere Philosophie: Eine kompromisslose Reise zu den besten Zutaten" [level=2] [ref=e276]'
                - paragraph [ref=e277]: Ein herausragendes Dessert, an das man sich noch Tage später erinnert, ist immer nur so gut wie die Zutaten, aus denen es besteht. Diese einfache, aber absolut elementare Wahrheit leitet uns jeden einzelnen Tag in unserer Küche in Wetzlar. Wir haben Monate damit verbracht, Lieferanten zu suchen, zu prüfen und Partnerschaften aufzubauen, die unsere immense Leidenschaft für Qualität, Nachhaltigkeit und unverfälschten, natürlichen Geschmack voll und ganz teilen. Bei Hey Fede! gibt es keinerlei Abkürzungen, keine künstlichen Aromastoffe, die Fehler kaschieren sollen, und absolut keine Kompromisse bei der Frische.
                - 'heading "Die Basis: Mehl, Eier und Milchprodukte" [level=3] [ref=e278]'
                - paragraph [ref=e279]: Die fundamentale Basis unserer Bubble Waffles, Crêpes und Pancakes bildet ein Teig, den wir nach eigenen, über Monate hinweg perfektionierten und streng gehüteten Rezepturen jeden Morgen in den frühen Stunden frisch anrühren. Das Mehl, das wir verwenden, beziehen wir von Mühlen, die das Korn schonend und langsam vermahlen, sodass die essenziellen Backeigenschaften und der nussige, natürliche Geschmack des Getreides vollständig erhalten bleiben. Bei den Eiern setzen wir konsequent auf artgerechte Freilandhaltung, denn nur glückliche Hühner, die Platz und gutes Futter haben, legen Eier, die unseren Teigen diese wunderbare, leuchtend goldgelbe Farbe und die unvergleichlich geschmeidige Bindung verleihen. Auch unsere Milch, die Sahne und die Butter, die wir in großen Mengen verarbeiten, stammen von Höfen, die das Wohl der Tiere an erste Stelle setzen. Diese Sorgfalt bei den Grundzutaten schmeckt man in jedem einzelnen Bissen, in jeder knusprigen Kante und in jedem fluffigen Kern.
                - heading "Die Welt der echten Schokolade und echten Vanille" [level=3] [ref=e280]
                - paragraph [ref=e281]: Wenn wir bei Hey Fede! von Schokolade sprechen, dann meinen wir echte, ehrliche, hochwertige Schokolade mit einem hohen, reinen Kakaoanteil, die langsam auf der Zunge schmilzt und ein komplexes, langanhaltendes und tiefes Aroma am Gaumen hinterlässt. Ob weiße Schokolade, die nach echter Kakaobutter schmeckt, cremige Vollmilchschokolade oder tiefgründige, leicht bittere Zartbitterschokolade – wir verwenden ausschließlich Kuvertüren von Meister-Chocolatiers, die ihr Handwerk von der Röstung der Bohne bis zum Conchieren meisterhaft verstehen. Unsere Vanille ist keine chemische Essenz aus dem Labor und kein billiges Pulver. Wir verwenden das Mark echter, praller Madagaskar-Bourbon-Vanilleschoten. Du siehst die unzähligen, winzigen schwarzen Punkte in unserer frisch aufgeschlagenen Sahne, in unseren Pürees und in unserem hausgemachten Eis, und du schmeckst diese unverwechselbare warme, blumige und leicht holzige Süße, die nur echte Vanille bieten kann.
                - heading "Frische Früchte im Einklang mit der Natur" [level=3] [ref=e282]
                - paragraph [ref=e283]: Wässrige Erdbeeren im tiefsten Winter? Nicht bei uns. Wir respektieren den natürlichen Rhythmus der Jahreszeiten und der Natur. Unsere Früchte werden extrem sorgfältig ausgewählt, und wir bevorzugen es, dann frisches Obst anzubieten, wenn es auf dem Höhepunkt seines Geschmacks ist. In den warmen Sommermonaten leuchten unsere Desserts in den kräftigen Farben von sonnengereiften, tiefroten Himbeeren, saftigen, blauschwarzen Blaubeeren und prallen Kirschen, die fast vor Saft platzen. Wenn der Herbst in die Wetzlarer Langgasse einzieht und der Winter folgt, setzen wir auf aromatische, regionale Äpfel, die wir mit einem Hauch von echtem Ceylon-Zimt verfeinern, auf weiche, saftige Birnen oder auf exotische Früchte wie süße Mango und säuerliche Maracuja, die wir von verlässlichen, zertifizierten Partnern aus sonnigen Gefilden beziehen. Jede einzelne Frucht wird von unserem Team von Hand gewaschen, sorgfältig geschnitten und mit größter ästhetischer Sorgfalt auf deinen Tellern drapiert.
                - heading "Die Kunst der hausgemachten Soßen" [level=3] [ref=e284]
                - paragraph [ref=e285]: Unsere Soßen sind nicht einfach nur süße Begleiter, sie sind das i-Tüpfelchen, das krönende Element eines jeden Desserts. Wir weigern uns, auf industriell gefertigte Eimerware zurückzugreifen. Stattdessen kochen wir unsere Karamellsoße in unserer eigenen Küche selbst. Wir karamellisieren Zucker langsam, bis er genau diese perfekte, warme, bernsteinfarbene Tönung erreicht hat. Dann fügen wir frische Butter und Sahne hinzu, um diesen unverwechselbaren, leicht buttrigen und tiefgründigen Geschmack zu kreieren, der so unglaublich perfekt mit einer Prise grobem Meersalz harmoniert. Unsere Fruchtpürees bestehen aus purer, echter Frucht, die wir nur sanft erhitzen und mit etwas Zucker einkochen, um das natürliche Aroma zu verdichten und zu intensivieren, ohne die Frische zu zerstören.
                - heading "Bubble Waffles — Die süße Sensation aus Hongkong und ihre Reise an die Lahn" [level=2] [ref=e286]
                - paragraph [ref=e287]: Die faszinierende Geschichte der Bubble Waffle, die in ihrem Ursprungsort im Kantonesischen als 鷄蛋仔 (Gai Daan Jai) bekannt und geliebt ist, ist eine wunderbare Geschichte von menschlichem Erfindungsreichtum und kulinarischer Magie aus der Not heraus. Im Hongkong der 1950er-Jahre, in einer intensiven Zeit des wirtschaftlichen Wiederaufbaus und der begrenzten Ressourcen, suchten findige und kreative Straßenverkäufer nach einer praktikablen Möglichkeit, leicht beschädigte oder nicht verkaufte Eier sinnvoll zu verwerten, bevor sie verderben würden. Sie mischten die Eier mit etwas Mehl, Zucker und Kondensmilch und gossen diesen sehr flüssigen, eierreichen Teig in spezielle, wabenförmige, gusseiserne Pfannen, die direkt über heißen, glühenden Kohlen gewendet wurden.
                - paragraph [ref=e288]: Das Ergebnis dieses einfachen Prozesses war eine spektakuläre Waffel, die aus vielen kleinen, zusammenhängenden "Blasen" oder "Bubbles" bestand. Sie war außen herrlich dünn und knusprig und innen, im Herzen jeder Blase, wunderbar fluffig, weich und teigig. Dieses unkomplizierte Street-Food wurde in Rekordzeit zu einer absoluten Sensation, die den verlockenden Duft von süßem, karamellisierendem Eierteig durch die dichten, engen Straßen von Kowloon und Hong Kong Island trug und Generationen von Kindern und Erwachsenen prägte.
                - paragraph [ref=e289]: Wir bei Hey Fede! waren von der ersten Sekunde an so fasziniert von dieser historischen Geschichte und dem unvergleichlichen, kontrastreichen Biss dieser Waffeln, dass wir beschlossen, diese wunderbare Tradition nach Deutschland, genauer gesagt direkt in die Wetzlarer Langgasse, zu bringen. Aber wir wollten die Bubble Waffle nicht einfach nur plump kopieren; wir haben sie zu einem unverwechselbaren Hey Fede! Original gemacht. Unser spezielles Teigrezept wurde in zahllosen, detailversessenen Testläufen perfektioniert, bis wir exakt die goldene Balance zwischen der traditionellen asiatischen Elastizität des Teigs und einem sanften Hauch von lokaler, europäischer Backtradition gefunden hatten.
                - paragraph [ref=e290]: 'Wenn du bei uns an der Theke eine Bubble Waffle bestellst, gießen wir den tagesfrischen Teig direkt vor deinen Augen in unsere extrem heißen, speziell für uns importierten Waffeleisen. Für genau die richtige, exakt gestoppte Zeit – nicht eine einzige Sekunde zu lang, damit sie nicht verbrennt, und nicht zu kurz, damit sie nicht matschig bleibt – wird die Waffel gebacken, bevor sie heiß und dampfend herausgenommen und mit einem geübten Handgriff sofort zu einem eleganten Kegel geformt wird. In diesen ersten, entscheidenden Minuten nach dem Backen entsteht die eigentliche Magie: Der Teig kühlt durch die Umgebungsluft minimal ab, wodurch die äußere Schicht blitzschnell aushärtet und dieser fantastische, laute Crunch entsteht, während das Innere der kleinen "Bubbles" durch die eingeschlossene Hitze herrlich luftig, saftig und teigig bleibt.'
                - 'heading "Die Vollendung: Unsere Toppings und Kombinationen" [level=3] [ref=e291]'
                - paragraph [ref=e292]: Dann beginnt der kreative, künstlerische Teil der Zubereitung. Wir füllen deine noch warme Bubble Waffle mit einer großzügigen Kugel unseres eiskalten, cremigen Eises, fügen einen Berg luftiger, hausgemachter Sahne hinzu und drapieren frische, bunte Früchte, knusprige, zerbröselte Keksstücke, geröstete Nüsse und unsere samtigen, fließenden Soßen kunstvoll darüber. Die sanfte Wärme der frisch gebackenen Waffel lässt das Eis in der Mitte ganz leicht anschmelzen, sodass sich die unterschiedlichen Aromen und Temperaturen auf unvergleichlich harmonische Weise verbinden. Jeder einzelne Bissen bietet dir ein völlig neues Texturerlebnis – knusprig, cremig, warm und eiskalt zugleich.
                - list [ref=e293]:
                    - listitem [ref=e294]:
                        - strong [ref=e295]: "Fruchtige Frische:"
                        - text: Gefüllt mit Vanilleeis, frischen Erdbeeren, Blaubeeren und abgerundet mit unserem hausgemachten, leicht säuerlichen Beeren-Coulis.
                    - listitem [ref=e296]:
                        - strong [ref=e297]: "Schokoladen-Traum:"
                        - text: Mit cremigem Schokoladeneis, Brownie-Stücken, Schokoladenraspeln und unserer intensiv-dunklen Schokoladensoße.
                    - listitem [ref=e298]:
                        - strong [ref=e299]: "Karamell-Nuss-Crunch:"
                        - text: Haselnusseis kombiniert mit gerösteten Mandeln, Pekannüssen und großzügig übergossen mit unserer legendären, leicht salzigen Karamellsoße.
                - paragraph [ref=e300]:
                    - strong [ref=e301]: "Unsere Pairing-Empfehlung:"
                    - text: Zu einer fruchtigen, leichten Bubble Waffle mit Erdbeeren und Vanilleeis empfehlen wir unseren milden, hausgemachten, eisgekühlten Pfirsich-Eistee, der die Frische der Früchte unterstreicht. Wenn du dich jedoch für eine üppige, schokoladige Variante entscheidest, bildet ein heißer, extrem kräftiger Espresso aus unserer Siebträgermaschine den absolut perfekten, leicht herben Kontrast zur intensiven Süße.
                - heading "Crêpes — Französische Handwerkskunst trifft auf Wetzlarer Charme" [level=2] [ref=e302]
                - paragraph [ref=e303]: Es gibt in der gesamten kulinarischen Welt wohl kaum ein Dessert oder Gebäck, das so schlicht, so elegant und gleichzeitig so tief in der europäischen Straßen- und Café-Kultur verwurzelt ist wie der klassische französische Crêpe. Die rauen, aber landschaftlich wunderschönen Küsten der Bretagne im Nordwesten Frankreichs gelten als die historische Wiege dieses hauchdünnen, delikaten Pfannkuchens. Was dort vor Jahrhunderten als sehr einfaches, nahrhaftes Essen der Bauern und Fischer begann, oft aus dunklem Buchweizenmehl hergestellt, hat längst die feinsten Pâtisserien, Straßencafés und Dessertbars der ganzen Welt erobert. In unserer gemütlichen Küche in der Wetzlarer Langgasse verbeugen wir uns jeden Tag tief vor dieser alten, anspruchsvollen Handwerkskunst und interpretieren sie mit der für Hey Fede! typischen, detailverliebten Leidenschaft.
                - paragraph [ref=e304]: Der ultimative Schlüssel zu einem außergewöhnlichen, perfekten Crêpe liegt nicht nur im Rezept des Teigs, sondern vor allem in der Technik der Zubereitung. Unser Crêpe-Teig wird mit äußerster Sorgfalt angerührt und muss zwingend über Nacht im Kühlhaus ruhen. Nur durch diese lange Ruhephase kann das feine Mehl vollständig quellen und sich die Glutenstruktur im Teig entspannen. Nur so erreichen wir am nächsten Tag diese seidige, absolut glatte Textur, die den Teig beim raschen Ausstreichen auf der kochend heißen, gusseisernen Crêpière nicht reißen oder klumpen lässt. Es ist ein fast schon meditativer, hypnotisierender Prozess, unseren Köchen dabei zuzusehen, wie der flüssige Teig mit einem extrem schnellen, fließenden Schwung des Teigverteilers – dem traditionellen Holzwerkzeug namens Rozell – hauchdünn und millimetergenau gleichmäßig zu einem perfekten, großen Kreis geformt wird. Innerhalb von Bruchteilen von Sekunden verwandelt sich die weiße Flüssigkeit, mikroskopisch kleine Bläschen steigen an die Oberfläche, der Teig verfestigt sich, und der Rand beginnt langsam, appetitlich goldbraun und hauchzart knusprig zu werden.
                - heading "Süße Verführungen und herzhafte Momente" [level=3] [ref=e305]
                - paragraph [ref=e306]: "Unsere umfassende Crêpe-Karte deckt das gesamte erdenkliche Spektrum des guten Geschmacks ab. Für die absoluten Puristen bieten wir den puren Klassiker an: bestrichen mit echter, hochwertiger geschmolzener Butter und bestreut mit feinem, weißen Zucker, vielleicht noch abgerundet mit einem frischen Spritzer Zitronensaft, um die Süße zu brechen. Wer es üppiger, reichhaltiger und dekadenter mag, taucht ein in unsere beliebtesten Kombinationen aus dicker Nuss-Nougat-Creme, frisch geschnittenen, reifen Bananenscheiben und sanft gerösteten Haselnüssen, die einen wunderbaren Crunch bieten. Ein ganz besonderes, visuelles und geschmackliches Highlight ist unser Crêpe mit zartschmelzender, feinster weißer Schokolade und einem kräftigen Püree aus roten Beeren, das eine wunderbare, natürliche Säure mitbringt und die cremige Süße der weißen Schokolade am Gaumen perfekt ausbalanciert."
                - paragraph [ref=e307]: "Aber wir wissen auch: Ein Crêpe muss nicht immer zwingend süß sein. Für all jene Momente am Tag, in denen du bei uns einkehrst und Lust auf etwas Deftiges, Herzhaftes hast, bereiten wir mit der gleichen Hingabe herzhafte Varianten zu. Gefüllt mit herzhaft geschmolzenem, würzigem Käse, verfeinert mit frischen, aromatischen Kräutern und belegt mit ausgewählten, regionalen Zutaten. Diese herzhaften Crêpes – in ihrer Heimat oft als Galettes bezeichnet – sind das absolut perfekte, leichte Mittagessen oder der ideale Snack bei einem ausgedehnten Spaziergang durch die verwinkelten Gassen der Wetzlarer Altstadt. Jeder einzelne Crêpe wird direkt vor deinen Augen auf Bestellung frisch zubereitet, nach dem Belegen kunstvoll und präzise gefaltet und so an deinen Tisch serviert, dass er seine wohlige Wärme noch lange behält."
                - paragraph [ref=e308]:
                    - strong [ref=e309]: "Unsere Pairing-Empfehlung:"
                    - text: Zu unseren intensiv süßen Crêpes passt ein klassischer, italienischer Cappuccino mit seiner vollmundigen, feinporigen Milch-Crema ganz hervorragend. Wählst du hingegen eine herzhafte, würzige Variante mit Käse und Kräutern, empfehlen wir dir eine spritzige, eisgekühlte und hausgemachte Zitronen-Minz-Limonade, die den Gaumen wunderbar erfrischt.
                - heading "Pancakes — Der amerikanische Traum, neu interpretiert an der Lahn" [level=2] [ref=e310]
                - paragraph [ref=e311]: Pancakes sind längst kein rein amerikanisches Frühstück mehr, sie sind ein globales, kulturelles Phänomen, ein universelles Synonym für ein entspanntes Wochenende, für Zeit mit der Familie und für ein Essen, das sich anfühlt wie eine warme, tröstende Umarmung. Während der traditionelle europäische Pfannkuchen in der Regel eher flach, dicht und schwer ist, zeichnet sich der echte amerikanische Pancake durch sein bemerkenswertes, luftiges Volumen und seine wolkenartige Schwammigkeit aus. Bei Hey Fede! haben wir dieses klassische Konzept des amerikanischen Diners genommen und es mit besten Zutaten auf das hohe Niveau einer handwerklichen Pâtisserie gehoben. Wir wollten Pancakes kreieren, die in Wetzlar und Umgebung ihresgleichen suchen.
                - paragraph [ref=e312]: Das verborgene Geheimnis unserer hochgelobten Pancakes liegt in der faszinierenden Wissenschaft des Backens, genauer gesagt im Zusammenspiel von Backpulver und der Säure in der Milch. Wir rühren unseren Pancake-Teig jeden Morgen mit einer extremen Behutsamkeit von Hand an. Dieser Vorgang sorgt dafür, dass die empfindliche Glutenstruktur im Weizenmehl nicht durch zu starkes Rühren überstrapaziert wird, was den Teig zäh machen würde. Das phänomenale Ergebnis unserer Methode? Ein Teig, der, sobald er die heiße, gebutterte Grillplatte berührt, sofort nach oben schießt und im Inneren unzählige kleine Lufttaschen bildet. Diese Lufttaschen machen den Pancake so unglaublich fluffig und leicht, dass er auf dem Teller fast zu schweben scheint. Wir backen jeden Pancake bei mittlerer Hitze goldbraun an, sodass sich an den äußeren Rändern eine ganz leichte, fein karamellisierte Kruste entwickelt, während das dicke Innere wolkenweich, heiß und saftig bleibt.
                - 'heading "Gestapeltes Glück: Von Ahornsirup bis Schokoladen-Ganache" [level=3] [ref=e313]'
                - paragraph [ref=e314]: "Wenn wir bei Hey Fede! Pancakes servieren, machen wir absolut keine halben Sachen. Ein einzelner Pancake ist schön, aber ein Turm ist ein Erlebnis. Wir stapeln sie zu imposanten, hohen Türmen auf deinem Teller auf. Zwischen jeder noch dampfenden Schicht kannst du auf Wunsch ein kleines Stückchen frischer, leicht gesalzener Butter schmelzen lassen, bevor der warme, bernsteinfarbene Ahornsirup langsam von der Spitze an den Seiten hinunterläuft und vom porösen, aufnahmefähigen Teig aufgesaugt wird. Und um es klar zu betonen: Wir verwenden ausschließlich echten, naturreinen, hochwertigen kanadischen Ahornsirup – keinen mit künstlichen Aromen versetzten Zuckersirup aus der Plastikflasche."
                - paragraph [ref=e315]: 'Doch das ist nur der Anfang; wir gehen in unserer Kreativität noch viel weiter. Unsere speziellen, kuratierten Pancake-Stacks sind regelrechte Meisterwerke der Dessertkunst. Stell dir einen warmen Pancake-Turm vor, der zwischen jeder einzelnen Teigschicht mit einer leichten, hausgemachten Vanillecreme gefüllt ist, auf der Spitze großzügig mit frischen, prallen Blaubeeren gekrönt wird und ringsum mit dicken, knusprigen Streuseln aus hauskaramellisierten Mandeln bestreut ist. Oder unser berühmter "Chocolate Lover"-Stack, der Traum eines jeden Schokoladenfans: Hier werden Tropfen von dunkler und weißer Schokolade bereits direkt in den rohen Teig auf der Grillplatte gebacken. Der fertige Turm wird dann mit einer so dicken, warmen Schicht aus Schokoladen-Ganache übergossen, dass sie sich fast wie ein Mantel um die Pancakes legt. Jeder Bissen, den du mit der Gabel nimmst, durchbricht die verschiedenen Schichten aus fluffigem, warmem Teig, kühlen, weichen Cremes und knackigen, schokoladigen Texturen.'
                - paragraph [ref=e316]:
                    - strong [ref=e317]: "Unsere Pairing-Empfehlung:"
                    - text: Ein solch intensiver, süßer Pancake-Turm verlangt nach einem Getränk, das die vielfältigen Aromen trägt und unterstützt, ohne sie jedoch zu dominieren oder zu überdecken. Ein eleganter, cremiger Flat White oder eine große Tasse von unserem feinen, dampfenden Earl Grey Tee harmonieren wunderbar mit den leichten Röst- und starken Karamellnoten unserer Pancakes.
                - heading "Eisbecher 500ml — Löffel für Löffel pures Glück in Übergröße" [level=2] [ref=e318]
                - paragraph [ref=e319]: "Ein Eisbecher ist für unser Team bei Hey Fede! weit mehr als nur ein paar Kugeln gefrorene Sahne und Milch, die lieblos in ein Glas geworfen werden. Ein echter Eisbecher ist für uns eine durchdachte, fast schon architektonische Meisterleistung, eine aufregende Reise durch völlig verschiedene Geschmacksschichten und kontrastierende Temperaturen. Er ist präzise konzipiert, um jeden einzelnen Löffel, den du zu dir nimmst, zu einer neuen, spannenden Entdeckung zu machen. In unserer Wetzlarer Manufaktur servieren wir diese aufwendigen Kreationen ganz bewusst in sehr großzügigen, schweren 500-Milliliter-Gläsern, denn wir sind der festen Überzeugung: Wenn es um handwerklich wirklich gutes, cremiges Eis geht, ist weniger definitiv nicht mehr – in diesem Fall ist mehr einfach mehr."
                - paragraph [ref=e320]: Das tragende Fundament eines jeden Eisbechers, der unsere Theke verlässt, bildet unser exquisites, dichtes Eis. Wir arbeiten ausschließlich mit Sorten, die mit echten, rein natürlichen Zutaten und ohne künstliche Luftaufschlagung hergestellt werden. Unser Pistazieneis, zum Beispiel, leuchtet nicht in einem künstlichen Neongrün, sondern hat die blassgrüne Farbe echter Nüsse und schmeckt unfassbar intensiv nach gerösteten, hochwertigen sizilianischen Pistazien – tief nussig und abgerundet mit einer kaum wahrnehmbaren, aber wichtigen Prise Salz. Unser Fruchtsorbet hingegen enthält einen so extrem hohen Fruchtanteil, dass es in Konsistenz und Geschmack fast an gefrorenen, puren Fruchtnektar erinnert. Diese herausragende Qualität ist die unabdingbare Basis für alles Weitere, was in den Becher kommt.
                - 'heading "Architektur im Glas: Schichten, Crunch und cremige Perfektion" [level=3] [ref=e321]'
                - paragraph [ref=e322]: 'Beim Aufbau und Schichten des Eisbechers achten wir penibel auf ein absolut harmonisches Gleichgewicht zwischen eiskaltem Eis, warmer Soße, knusprigem Crunch und fruchtiger Frische. Nehmen wir als prominentes Beispiel unseren "Nutty Caramel Dream", der unsere Gäste regelmäßig in Verzückung versetzt: Wir beginnen ganz unten im Glas mit einer dicken Basis aus grob zerkrümelten, buttrigen Keksen. Darauf folgen abwechselnd üppige Schichten aus cremigem Haselnuss- und reinem Vanilleeis. Darüber drapieren wir in konzentrierter Handarbeit unsere hausgekochte Karamellsoße, die wir vorher ganz leicht erwärmen, damit sie genau in dem Moment, in dem sie auf das kalte Eis trifft, verführerisch erstarrt und kleine, knackige Karamellplatten bildet. Den optischen und geschmacklichen Abschluss bildet ein wahrhaft großzügiger Berg frisch aufgeschlagener, ungesüßter Sahne, liebevoll garniert mit grob gehackten, gerösteten Pekannüssen.'
                - paragraph [ref=e323]: Aber auch die Liebhaber von fruchtigen, leichten Desserts kommen bei uns in der Langgasse voll und ganz auf ihre Kosten. Unser opulenter Beerenbecher kombiniert intensiv leuchtendes Himbeer- und erfrischendes Zitronensorbet mit einer Fülle an frischen, saisonalen Beeren der Region. Dazwischen verstecken sich kleine, süße Meringue-Küsse (Baiser), die beim Hineinbeißen leicht knistern und dann sofort süß auf der Zunge zergehen. In der dunklen, kalten Jahreszeit, wenn der Frost über die Lahn zieht, verwandeln wir unsere Eisbecher mit wohligen Zutaten wie warmen, dampfenden Zimtäpfeln, zerbröseltem, würzigem Lebkuchen oder einer heißen, dicken Kirschsoße in gemütliche, winterliche Seelentröster.
                - paragraph [ref=e324]: Jedes 500ml-Glas, das unsere Theke verlässt, ist ein kleines, vergängliches Kunstwerk, das wir mit unermüdlicher Liebe zum Detail anrichten. Es ist das absolut ideale, kühlende Dessert für den heißen Wetzlarer Hochsommer, wenn die Sonne unerbittlich auf die Kopfsteinpflaster der Altstadt brennt, aber auch ein wohlig süßer Trost an grauen, verregneten Herbsttagen.
                - paragraph [ref=e325]:
                    - strong [ref=e326]: "Unsere Pairing-Empfehlung:"
                    - text: Zu unseren sehr fruchtigen, säuerlich-süßen Eisbechern passt ein einfaches Glas eiskaltes, stark prickelndes Mineralwasser am allerbesten, um den Gaumen zwischen den reichhaltigen Löffeln immer wieder zu erfrischen und zu neutralisieren. Zu den schweren, cremigen Schokoladen- und Nuss-Bechern empfehlen wir als Kontrast einen schlichten, schwarzen, handgefilterten Kaffee.
                - heading "Special Shakes — Wenn Desserts völlig flüssig werden und Grenzen verschwinden" [level=2] [ref=e327]
                - paragraph [ref=e328]: Erinnere dich für einen Moment zurück an den simplen Milchshake deiner frühen Kindheit. Höchstwahrscheinlich war er einfach nur sehr süß, auffällig bunt und schmeckte irgendwie ein bisschen nach unbeschwerter Nostalgie. Bei Hey Fede! haben wir dieses alte Konzept genommen, es komplett auf den Kopf gestellt und in das 21. Jahrhundert katapultiert. Unsere Special Shakes sind keine einfachen, durstlöschenden Getränke mehr; sie sind vollwertige, gigantische, flüssige Desserts, die optisch wie auch geschmacklich alle bisherigen Regeln der Café-Kultur brechen. Wir nennen sie in unserem Team gerne "Freakshakes" mit Stil – opulente, verrückte Kreationen, die das Auge begeistern, die Kamera-Linsen auf sich ziehen und den Gaumen gnadenlos verwöhnen.
                - paragraph [ref=e329]: "Die handwerkliche Basis unserer Shakes besteht aus unserem extrem cremigen, hochwertigen Eis, das wir mit eiskalter, frischer Vollmilch in leistungsstarken Mixern zu einer dichten, samtigen und homogenen Textur verarbeiten. Wir verwenden für unsere Shakes keinerlei künstliche Verdickungsmittel, Pulver oder Emulgatoren, die perfekte, löffelbare Konsistenz entsteht einzig und allein durch das physikalisch perfekte, erprobte Verhältnis von stark gekühltem Eis und Milch. Wenn diese Basis perfekt gemixt ist, beginnt das wahre Spektakel an unserer Theke: die ausufernde Dekoration."
                - heading "Die Anatomie eines Freakshakes" [level=3] [ref=e330]
                - paragraph [ref=e331]: Wir kleiden zunächst die gläserne Innenseite der großen Becher kunstvoll mit dickflüssiger Schokoladen-, Erdbeer- oder Karamellsoße aus, die in schönen, unregelmäßigen Schlieren langsam am Rand nach unten läuft und ein wunderschönes Muster bildet. Dann wird der kühle, dichte Shake eingefüllt. Und dann folgt ein imposanter, fast schon waghalsiger Aufbau, der der Schwerkraft trotzt. Auf den Shake setzen wir eine riesige, stabile Haube aus steif geschlagener, frischer Sahne. Aber das ist nur das Fundament der Dekoration. Je nach gewählter Shake-Sorte garnieren und dekorieren wir die Sahnehaube mit ganzen, saftigen Kuchenstücken, klobigen Brownie-Würfeln, frisch gebackenen, halben Cookies, mit dem Bunsenbrenner flammbierten, karamellisierten Marshmallows, bunten Zuckerstreuseln, Brezeln oder kunstvoll drapierten, frischen Früchten.
                - paragraph [ref=e332]: 'Nehmen wir unseren berühmten "Chocoholic Supreme" Shake als Beispiel: Er kombiniert extrem intensives, doppeltes Schokoladeneis mit eiskalter Milch. Der äußere Rand des Glases ist dick mit einer klebrigen Schokoladencreme bestrichen und rundherum mit knusprigen Mini-Schokoladenraspeln verziert. Obenauf, majestätisch auf der Sahne thronend, sitzt ein großes, saftiges Stück unseres legendären, hausgemachten Schokoladen-Brownies, das wiederum verschwenderisch mit noch mehr dunkler Schokoladensoße beträufelt wird. Ein solcher Shake ist ein Erlebnis, das man zelebrieren muss. Er ist der unbestrittene, farbenfrohe Star auf jedem Foto und oft der Hauptgrund, warum so viele neue Gäste aus der ganzen hessischen Umgebung extra anreisen, um ihn in der Langgasse 68 zu probieren. Es ist ein lautes, fröhliches Fest der Texturen: das langsame, cremige Trinken durch den extradicken Strohhalm, das genüssliche Löffeln der Sahne und das Knabbern der Brownie-Stücke.'
                - paragraph [ref=e333]:
                    - strong [ref=e334]: "Unsere Pairing-Empfehlung:"
                    - text: Ein Special Shake steht majestätisch für sich selbst. Er ist Getränk, Snack und Haupt-Dessert in einem einzigen, großen Glas. Wenn du ihn begleitest, dann am besten mit guten Freunden, mit denen du dieses imposante Dessert teilen, bestaunen und natürlich ausgiebig fotografieren kannst.
                - heading "Fede Boxen — Gemeinsam schmeckt es am besten, ein süßes Fest im Karton" [level=2] [ref=e335]
                - paragraph [ref=e336]: 'In einer modernen Welt, die sich gefühlt jeden Tag ein bisschen schneller dreht und in der Zeit oft Mangelware ist, sind Momente des bewussten, gemeinsamen Genießens ein unglaublich kostbares, seltenes Gut geworden. Um genau diese wertvollen Momente des Miteinanders zu fördern und zu feiern, haben wir die Fede Boxen entwickelt. Sie sind unsere süße, durchdachte Antwort auf die immer wiederkehrende Frage unserer Gäste: "Was bringen wir zum großen Picknick unten an der Lahn, zur Geburtstagsparty der besten Freundin oder zum gemütlichen, langen Fernsehabend auf der Couch mit?" Eine Fede Box ist weit mehr als nur Essen to go; sie ist eine regelrechte Schatzkiste voller liebevoll zubereiteter, süßer Überraschungen, von uns sorgfältig zusammengestellt, um in großer Runde geteilt zu werden.'
                - heading "Für jede Gelegenheit die richtige Box" [level=3] [ref=e337]
                - paragraph [ref=e338]: 'Unsere große "Fede & Friends Box" ist ein unangefochtener, echter Bestseller in Wetzlar. Sie bietet einen perfekten, vielfältigen Querschnitt durch all das, was unsere Küche in der Langgasse so besonders und einzigartig macht. Wenn du zu Hause oder im Park den Deckel des Kartons anhebst, offenbart sich ein wunderschönes Mosaik aus Aromen und Farben: Ein Berg von Mini-Pancakes, perfekt in runder Form und goldbrauner Farbe, kleine, fluffige, frisch gebackene Bubble-Waffle-Ecken, dazu eine handverlesene Auswahl unserer feinsten, weichsten Cookies und saftigsten Kuchenstücke. Aber eine echte Fede Box wäre natürlich nicht komplett ohne die passenden Toppings, die das Ganze erst interaktiv machen. In kleinen, separaten Dosen legen wir frische, geschnittene Früchte, geröstete Nüsse, weiche Marshmallows und eine Auswahl unserer unvergleichlichen hausgemachten Soßen bei. So kann jeder am Tisch oder auf der Picknickdecke seine eigene, kleine Traumkombination zusammenstellen. Es wird gedippt, eifrig gestapelt und querbeet probiert. Die Box verwandelt den einfachen Akt des Dessert-Essens von einem passiven Erlebnis in eine interaktive, laute und fröhliche Angelegenheit.'
                - list [ref=e339]:
                    - listitem [ref=e340]:
                        - strong [ref=e341]: "Fede & Friends Box:"
                        - text: Der ultimative Allrounder. Mini-Pancakes, Bubble Waffle Stücke, Cookies, Kuchen und eine riesige Auswahl an Dips und Früchten. Ideal für 3-4 Personen.
                    - listitem [ref=e342]:
                        - strong [ref=e343]: "Pancake Picknick Box:"
                        - text: Ein Berg unserer fluffigen Pancakes, sicher verpackt, dazu Ahornsirup, Butter, Puderzucker und frische Beeren. Der Hit für den Sonntagmorgen.
                    - listitem [ref=e344]:
                        - strong [ref=e345]: "Sweet Lovers Box:"
                        - text: Eine reine Auswahl unserer besten, tagesaktuellen Cookies, Brownies und Kuchenstücke. Perfekt zum Nachmittagskaffee im Büro.
                - paragraph [ref=e346]: Besonders im Sommer, wenn die Wetzlarer ihre großen Decken auf den grünen Wiesen am Ufer der Lahn ausbreiten und die Sonne genießen, darf unsere "Pancake Picknick Box" nicht fehlen. Sie hält die dicken Pancakes durch unsere clevere, thermische Verpackung lange angenehm warm und sorgt gleichzeitig dafür, dass das beiliegende Obst frisch, kühl und knackig bleibt. Wir bereiten diese großen Boxen immer erst auf konkrete Vorbestellung oder direkte Anfrage im Laden zu, damit wir ausnahmslos garantieren können, dass jedes einzelne Element absolut frisch ist, wenn du mit dem Karton unter dem Arm unseren Laden in der Altstadt verlässt. Die Fede Boxen sind zudem das absolut perfekte, kreative Geschenk. Anstatt Blumen von der Tankstelle oder einer klassischen, oft langweiligen Pralinenschachtel aus dem Supermarkt bringst du mit einer unserer Boxen ein echtes, gemeinschaftliches Erlebnis mit, an das man sich noch lange erinnert.
                - heading "Kuchen & Cookies — Handgemacht, ofenwarm und mit kompromissloser Liebe gebacken" [level=2] [ref=e347]
                - paragraph [ref=e348]: Während die imposanten Bubble Waffles und die turmhohen Shakes zweifellos unsere optisch extravaganten Stars auf Instagram und Co. sind, bilden unsere liebevoll gebackenen Kuchen und Cookies das solide, ehrliche und beruhigende Herzstück und die wahre Seele unserer Dessertbar. Sie sind das tiefe, traditionelle Fundament, auf dem die gemütliche Café-Kultur bei Hey Fede! aufbaut. Wenn du morgens an unserer Backstube in der Langgasse vorbeigehst, riecht es meilenweit nach geschmolzener, brauner Butter, warmer Schokolade, im Ofen gerösteten Nüssen und frischem, zuckrigem Teig. Alles, was in unserer gut beleuchteten Vitrine liegt, wurde von unserem Team selbst erdacht, in vielen Versuchen getestet und jeden Morgen von Hand gebacken.
                - heading "Die komplexe Wissenschaft des perfekten Cookies" [level=3] [ref=e349]
                - paragraph [ref=e350]: 'Lass uns intensiv über Cookies sprechen. Ein wirklich herausragender, guter Cookie ist eine bemerkenswerte Wissenschaft für sich, und wir nehmen sie sehr ernst. Wir verwenden für unseren Cookie-Teig konsequent gebräunte Butter (die sogenannte Beurre noisette), die dem fertigen Cookie eine unglaublich tiefe, nussige und vielschichtige Karamellnote verleiht, die mit normaler Butter schlichtweg unmöglich zu erreichen ist. Der Teig wird nach dem sorgfältigen Kneten fest in Folie gewickelt und muss zwingend mindestens 24 Stunden im Kühlschrank ruhen, damit sich die komplexen Aromen verbinden können und das Mehl vollständig hydratisiert. Wenn wir die kühlen Teigkugeln dann endlich backen, achten wir penibel, fast schon besessen auf die Zeit: Sie müssen an den äußeren Rändern gerade eben so goldbraun und knusprig sein, während der dicke Kern noch wunderbar weich, saftig, teigig und herrlich "chewy" bleibt. Wenn du bei uns an der Theke einen Chocolate Chunk Cookie bestellst und ihn in der Mitte brichst, spürst du die noch leicht warme, flüssig geschmolzene belgische Schokolade, die sich in feinen Fäden zieht. Wir experimentieren zudem unglaublich gerne mit neuen Sorten, wie etwa Macadamia-Weiße-Schokolade, Haferflocken-Rosine mit einem Hauch Ceylon-Zimt oder einem tiefdunklen Double-Chocolate-Cookie, der mit großen Flocken von knusprigem Meersalz abgerundet wird.'
                - heading "Kuchenklassiker mit dem Hey Fede! Twist" [level=3] [ref=e351]
                - paragraph [ref=e352]: "Unsere Kuchenauswahl in der Vitrine wechselt stetig und dynamisch, immer inspiriert von den aktuellen Jahreszeiten, dem Angebot auf dem Markt und der unbändigen Kreativität unseres Back-Teams. Du findest bei uns regelmäßig extrem saftige Banana Breads, die so unglaublich reich an überreifer Frucht sind, dass sie fast auf der Zunge zergehen, verfeinert mit sanft gerösteten, herben Walnüssen, die für den nötigen Biss sorgen. Unser mächtiger New York Cheesecake ist mittlerweile geradezu legendär in der gesamten Wetzlarer Altstadt – gebacken auf einem extradicken, knusprig-buttrigen Keksboden, mit einer unglaublich cremigen, dichten, fast schon schweren Käsemasse, die wir großzügig mit echter Vanille verfeinern. Im warmen Sommer backen wir luftig-leichte Biskuitrollen, gefüllt mit einer erfrischenden, säuerlichen Zitronencreme, im regnerischen Herbst rustikale, offene Apfel-Galettes mit einer reichen Mandelfrangipane. Jedes einzelne Stück Kuchen, das wir dir auf dem Teller servieren, ist unser persönliches Versprechen an dich: Bei uns gibt es absolut keine industriellen Fertigmischungen, keine künstlichen Konservierungsstoffe, sondern einfach nur ehrliches, durchdachtes und handgemachtes Backwerk, das genau so tröstlich schmeckt, wie damals bei Oma am Sonntagnachmittag – nur versehen mit einem modernen, raffinierten Twist."
                - paragraph [ref=e353]:
                    - strong [ref=e354]: "Unsere Pairing-Empfehlung:"
                    - text: Ein großes, noch leicht warmes und weiches Stück unseres Banana Breads harmoniert absolut traumhaft mit einem cremigen, milchigen Cappuccino. Zu einem intensiv schokoladigen, schweren Cookie empfehlen wir dir hingegen ganz klassisch ein Glas eiskalte Vollmilch oder einen klaren, milden, aromatischen Americano, der die Schokolade umschmeichelt.
                - heading "Getränke — Von der schonend gerösteten Kaffeebohne bis zum japanischen Matcha" [level=2] [ref=e355]
                - paragraph [ref=e356]: Was um alles in der Welt wäre das beste, aufwendigste Dessert ohne das dazu perfekt passende Getränk, um das gesamte Geschmackserlebnis am Gaumen harmonisch abzurunden? In der Langgasse 68 legen wir auf unsere umfangreiche Getränkekarte exakt genauso viel Wert wie auf unsere berühmten Süßspeisen. Kaffee ist für uns niemals einfach nur ein schwarzer Wachmacher am Morgen; er ist ein hochkomplexes, handwerkliches Produkt, das Respekt verdient. Wir arbeiten sehr eng mit leidenschaftlichen Röstern zusammen, die ihre hochwertigen Kaffeebohnen aus nachhaltigem, fairem Handel beziehen und sie in kleinen Chargen so schonend und präzise rösten, dass ihre natürlichen, feinen Frucht- und Schokoladennoten in der Tasse optimal zur Geltung kommen. An unserer professionellen, blitzenden Siebträgermaschine zaubern unsere geschulten Baristas jeden Tag Hunderte kleine Kunstwerke mit perfekter, haselnussbrauner Crema und kunstvoller, millimetergenauer Latte Art.
                - heading "Die Kunst der Extraktion und pflanzliche Vielfalt" [level=3] [ref=e357]
                - paragraph [ref=e358]: Vom starken, fast schon sirupartigen, ristretto-artigen Espresso, der dich sofort wachrüttelt, über den perfekt ausbalancierten Flat White mit seinem glänzenden, samtigen Mikroschaum bis hin zum ausladenden, cremigen Latte Macchiato im großen, hohen Glas – jeder einzelne Kaffee wird bei uns mit einer digitalen Waage und einer Stoppuhr exakt bezogen, um Überextraktion und Bitterkeit zu vermeiden. Wir bieten zudem eine erfreulich große Vielzahl an hochwertigen pflanzlichen Milchalternativen an. Sei es reichhaltige Hafermilch, nussige Mandelmilch oder klassische Sojamilch, wir verwenden spezielle Barista-Editionen, die sich unter der Dampflanze genauso wunderbar, cremig und stabil aufschäumen lassen wie herkömmliche Kuhmilch.
                - heading "Matcha, Cold Brew und heiße Schokolade" [level=3] [ref=e359]
                - paragraph [ref=e360]: Für all diejenigen, die eine spannende Alternative zu Kaffee suchen, ist unser Matcha Latte ein visuelles und geschmackliches Highlight. Wir verwenden ausschließlich feingemahlenes, leuchtend neon-grünes Premium-Matcha-Pulver aus Japan. Dieses wird von uns traditionell mit einem speziellen Bambusbesen (dem Chasen) schaumig und klumpenfrei geschlagen, bevor wir es mit heißer oder eiskalter Milch aufgießen. Sein charakteristischer herb-süßlicher, leicht erdiger und komplexer Geschmack (das berühmte Umami) bildet einen wahnsinnig spannenden und sehr erfrischenden, erwachsenen Kontrast zu unseren durchweg süßen Desserts.
                - paragraph [ref=e361]: In den langen, wärmeren Monaten, wenn sich die engen Gassen der Wetzlarer Altstadt aufheizen und die Luft steht, sind unsere eiskalten Iced Drinks die reinsten Lebensretter. Iced Lattes, über viele Stunden kaltgezogene Cold Brew Kaffees, die besonders mild und säurearm sind, oder unsere fruchtigen, hausgemachten Eistees und Limonaden, die wir mit frischen Minzzweigen, sauren Limettenspalten und nur sehr wenig Zucker im Glas zubereiten. Und im tiefen Winter? Dann schlägt in unserem Café die große Stunde unserer legendären heißen Schokolade. Diese wird bei Hey Fede! niemals aus wässrigem Kakaopulver angerührt, sondern aus echter, langsam geschmolzener Schokolade und dampfend heißer Milch zubereitet, stets gekrönt von einem großzügigen, weißen Berg frischer Sahne. Egal, für welches unserer liebevoll zubereiteten Getränke du dich am Ende entscheidest, es wird mit derselben chirurgischen Präzision und tiefen Sorgfalt zubereitet wie unsere aufwendigsten Desserts, um dir das absolut perfekte, ganzheitliche Genusserlebnis zu bieten, für das wir jeden Morgen aufstehen.
                - heading "Wir freuen uns von Herzen auf deinen Besuch in der Altstadt!" [level=2] [ref=e362]
                - paragraph [ref=e363]: "Wir könnten dir an dieser Stelle noch tausend, abertausend weitere Worte über die unvergleichliche Knusprigkeit unserer frisch gebackenen Waffeln, den unwiderstehlichen, betörenden Duft unserer Backstube am frühen Morgen und die unübertroffene Qualität unserer fair gehandelten Kaffeebohnen erzählen. Aber die wahre, greifbare Magie von Hey Fede! lässt sich auf einem flachen Bildschirm oder einem Stück Papier schlichtweg nicht vollständig einfangen. Sie entsteht erst in genau dem magischen Moment, in dem du die Türklinke in die Hand nimmst, durch unsere Tür in der Langgasse 68 trittst, den lauten Trubel der Wetzlarer Fußgängerzone hinter dir lässt und in unsere Welt eintauchst. Sie entsteht, wenn du den allersten Löffel deines Lieblingseises probierst oder der erste, warme Bissen deines Crêpes auf der Zunge zergeht. Wir laden dich hiermit von ganzem Herzen ein, diesen Ort der Freude und des Genusses selbst, mit all deinen Sinnen, zu erleben. Bring ausreichend Zeit mit, bring guten Hunger mit und vor allem: Bring deine uneingeschränkte Freude am bewussten Genießen mit. Wir können es kaum erwarten, dich persönlich bei Hey Fede! begrüßen zu dürfen und dir mit unserer tiefen Leidenschaft für exzellente Desserts ein ehrliches, strahlendes Lächeln ins Gesicht zu zaubern. Bis ganz bald in Wetzlar!"
    - contentinfo [ref=e364]:
        - img [ref=e367]
        - generic [ref=e369]:
            - generic [ref=e370]:
                - generic [ref=e371]:
                    - link "Startseite" [ref=e372] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e374]
                    - paragraph [ref=e375]: Dessertbar & Café
                    - generic [ref=e378]:
                        - generic [ref=e379]:
                            - img [ref=e380]
                            - generic [ref=e383]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e384]:
                            - img [ref=e385]
                            - link "06441 7890426" [ref=e387] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e389] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e390]
                        - text: Instagram
                - generic [ref=e393]:
                    - heading "Hey Fede!" [level=3] [ref=e394]
                    - navigation "Footer Navigation" [ref=e395]:
                        - link "Startseite" [ref=e396] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e397] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e398] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e399] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e400]
                    - navigation "SEO Navigation" [ref=e401]:
                        - link "Bubble Waffles" [ref=e402] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e403] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e404] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e405] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e406] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e407]:
                    - heading "Öffnungszeiten" [level=3] [ref=e408]
                    - generic [ref=e411]:
                        - generic [ref=e412]:
                            - generic [ref=e414]: Montag
                            - generic [ref=e416]: Geschlossen
                        - generic [ref=e417]:
                            - generic [ref=e419]: Dienstag
                            - generic [ref=e421]: Geschlossen
                        - generic [ref=e422]:
                            - generic [ref=e425]: Mittwoch
                            - generic [ref=e426]:
                                - generic [ref=e427]: 12:00 – 19:00 Uhr
                                - generic [ref=e428]: Heute
                        - generic [ref=e429]:
                            - generic [ref=e431]: Donnerstag
                            - generic [ref=e433]: 12:00 – 19:00 Uhr
                        - generic [ref=e434]:
                            - generic [ref=e436]: Freitag
                            - generic [ref=e438]: 12:00 – 19:00 Uhr
                        - generic [ref=e439]:
                            - generic [ref=e441]: Samstag
                            - generic [ref=e443]: 12:00 – 19:00 Uhr
                        - generic [ref=e444]:
                            - generic [ref=e446]: Sonntag
                            - generic [ref=e448]: 13:00 – 19:00 Uhr
                    - generic [ref=e449]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e450]:
                    - heading "Stay Sweet" [level=3] [ref=e451]
                    - paragraph [ref=e452]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e454]:
                        - textbox "Bleib hungrig..." [ref=e455]
                        - button "Abonnieren" [ref=e457]:
                            - generic [ref=e458]: Abonnieren
            - generic [ref=e459]:
                - generic [ref=e460]: Frisch
                - generic [ref=e461]: ·
                - generic [ref=e462]: Selbstgemacht
                - generic [ref=e463]: ·
                - generic [ref=e464]: Mit Liebe
            - generic [ref=e465]:
                - img [ref=e466]
                - img [ref=e468]
                - img [ref=e470]
                - img [ref=e472]
                - img [ref=e474]
            - generic [ref=e476]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e477]
                - paragraph [ref=e478]:
                    - generic [ref=e479]: Hessen
                    - generic [ref=e480]: ›
                    - generic [ref=e481]: Lahn-Dill-Kreis
                    - generic [ref=e482]: ›
                    - generic [ref=e483]: Wetzlar
                    - generic [ref=e484]: ›
                    - generic [ref=e485]: Langgasse
            - generic [ref=e486]:
                - heading "Besuche uns auch auf" [level=3] [ref=e487]
                - generic [ref=e488]:
                    - link "G Google" [ref=e489] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e490]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e491] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e492]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e493] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e494]: yelp
            - img "Made with Love in Wetzlar" [ref=e497]
            - generic [ref=e498]:
                - paragraph [ref=e499]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e500]:
                    - link "Impressum" [ref=e501] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e502] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e503] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e504]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   |
  3   | test.describe('Tier 3: Form Submissions & State Management', () => {
  4   |
  5   |   test.beforeEach(async ({ page }) => {
  6   |     // Catch unhandled errors to ensure hydration safety and stability
  7   |     page.on('pageerror', (err) => {
  8   |       console.error('Unhandled Exception:', err.message);
  9   |     });
  10  |     page.on('console', (msg) => {
  11  |       if (msg.type() === 'error') {
  12  |         const text = msg.text();
  13  |         if (text.includes('Hydration failed') || text.includes('Text content did not match')) {
  14  |           console.error('Hydration Error:', text);
  15  |         }
  16  |       }
  17  |     });
  18  |   });
  19  |
  20  |   test.describe('Cart Management (Zustand)', () => {
  21  |     test('should add items, open cart drawer and interact', async ({ page }) => {
  22  |       await page.goto('/menu');
  23  |
  24  |       // Wait for at least one "Hinzufügen" button to be visible
  25  |       const addBtns = page.getByRole('button', { name: /Hinzufügen|\+/i });
  26  |       await expect(addBtns.first()).toBeVisible();
  27  |
  28  |       // Add first product to cart
  29  |       await addBtns.first().click();
  30  |
  31  |       // Open CartDrawer
  32  |       const cartButton = page.getByRole('button', { name: /Warenkorb/i });
> 33  |       await cartButton.click();
      |                        ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: /Warenkorb/i }) resolved to 8 elements:
  34  |
  35  |       // Verify drawer opens
  36  |       const cartDrawer = page.locator('[role="dialog"]').filter({ hasText: /Warenkorb/i }).first();
  37  |       await expect(cartDrawer).toBeVisible();
  38  |
  39  |       // Since it's opaque-box, let's just make sure "Zur Kasse" is visible in the drawer
  40  |       const checkoutBtn = page.getByRole('button', { name: /Zur Kasse/i });
  41  |       await expect(checkoutBtn).toBeVisible();
  42  |     });
  43  |   });
  44  |
  45  |   test.describe('User Authentication', () => {
  46  |     test('should show validation errors on empty submit', async ({ page }) => {
  47  |       await page.goto('/auth');
  48  |
  49  |       // Wait for form to appear
  50  |       await expect(page.getByRole('heading', { level: 1, name: /Willkommen zurück/i })).toBeVisible();
  51  |
  52  |       // Try to submit empty form
  53  |       const loginBtn = page.getByRole('button', { name: /Anmelden/i });
  54  |
  55  |       // Native validation will prevent form submission if required fields are empty
  56  |       // So we can just check if the inputs are required.
  57  |       const emailInput = page.getByLabel(/E-Mail/i);
  58  |       await expect(emailInput).toHaveAttribute('required', '');
  59  |       const passwordInput = page.getByLabel(/Passwort/i);
  60  |       await expect(passwordInput).toHaveAttribute('required', '');
  61  |     });
  62  |
  63  |     test('should allow user login attempt', async ({ page }) => {
  64  |       await page.goto('/auth');
  65  |
  66  |       const emailInput = page.getByLabel(/E-Mail/i);
  67  |       const passwordInput = page.getByLabel(/Passwort/i);
  68  |
  69  |       await emailInput.fill('test@example.com');
  70  |       await passwordInput.fill('password123');
  71  |
  72  |       const loginBtn = page.getByRole('button', { name: /Anmelden/i });
  73  |       await loginBtn.click();
  74  |
  75  |       // Given we use the dummy key in tests or emulator, it might show an error or load
  76  |       // Just ensure the loading state or error state appears without crashing
  77  |       const submitText = page.locator('text=Firebase Konfiguration fehlt').first();
  78  |       // Alternatively, the button disables
  79  |       await expect(loginBtn).toBeEnabled();
  80  |     });
  81  |   });
  82  |
  83  |   test.describe('Support Forms', () => {
  84  |     test('should fill out Kontakt form', async ({ page }) => {
  85  |       await page.goto('/support#kontakt');
  86  |
  87  |       await page.getByLabel(/Dein Name/i).fill('Test User');
  88  |       await page.getByLabel(/Deine E-Mail/i).fill('test@example.com');
  89  |       await page.getByLabel(/Nachricht/i).fill('Dies ist eine Testnachricht aus Playwright.');
  90  |
  91  |       const submitBtn = page.getByRole('button', { name: /Senden/i });
  92  |       await submitBtn.click();
  93  |
  94  |       // Check if button text changes to "Wird gesendet..." or success happens
  95  |       // (Assuming mock API or fast execution, just ensure it doesn't crash)
  96  |       await expect(submitBtn).toBeVisible();
  97  |     });
  98  |
  99  |     test('should interact with Reservierung page', async ({ page }) => {
  100 |       await page.goto('/reservierung');
  101 |
  102 |       // Check heading
  103 |       await expect(page.getByRole('heading', { level: 1, name: /Tisch reservieren/i })).toBeVisible();
  104 |
  105 |       // Click on a date
  106 |       const dateBtn = page.getByRole('button').filter({ hasText: 'Sa' }).first();
  107 |       await dateBtn.click();
  108 |
  109 |       // Click the final submit button
  110 |       const submitBtn = page.getByRole('button', { name: /Tisch reservieren/i });
  111 |       await expect(submitBtn).toBeVisible();
  112 |     });
  113 |   });
  114 |
  115 |   test.describe('Order Flow Fragments', () => {
  116 |     test('Order-Hub is accessible', async ({ page }) => {
  117 |       await page.goto('/order-hub');
  118 |       // The page should contain options like "Abholung" or "Lieferung"
  119 |       const btn = page.getByRole('button', { name: /Abholung/i }).first();
  120 |       await expect(btn).toBeVisible();
  121 |     });
  122 |
  123 |     test('Checkout page renders', async ({ page }) => {
  124 |       await page.goto('/checkout');
  125 |       const emailInput = page.getByLabel(/E-Mail/i).first();
  126 |       await expect(emailInput).toBeVisible();
  127 |
  128 |       const continueBtn = page.getByRole('button', { name: /Weiter/i });
  129 |       await expect(continueBtn).toBeVisible();
  130 |     });
  131 |
  132 |     test('Pickup-Time selection renders', async ({ page }) => {
  133 |       await page.goto('/pickup-time');
```
