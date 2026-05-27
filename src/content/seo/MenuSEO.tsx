import React from 'react';
import { BUSINESS } from '@/lib/seo/business-data';

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-calistoga), serif',
  fontSize: '1.4rem',
  color: '#2d1f19',
  marginTop: 40,
  marginBottom: 12,
};

const pStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  marginBottom: 16,
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-calistoga), serif',
  fontSize: '1.15rem',
  color: '#3a2820',
  marginTop: 24,
  marginBottom: 8,
};

export function MenuSEO() {
  return (
    <section
      aria-label="Hey Fede! Menü — Ausführliche Beschreibungen"
      style={{
        background: '#faf6f1',
        borderTop: '1px solid rgba(228,192,168,0.3)',
        padding: '60px 20px',
        fontFamily: 'var(--font-nunito), sans-serif',
        color: '#5c3d35',
        lineHeight: 1.8,
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <h2 style={h2Style}>Herzlich willkommen bei Hey Fede! in der {BUSINESS.street}</h2>
      <p style={pStyle}>
        Wenn du durch die historischen Gassen der Wetzlarer Altstadt spazierst, vorbei an den liebevoll restaurierten Fachwerkhäusern und über das alte Kopfsteinpflaster, das schon Johann Wolfgang von Goethe unter seinen Sohlen spürte, dann führt dich dein Weg früher oder später in die malerische Langgasse. Hier, inmitten dieser wundervollen Kulisse, nur einen Steinwurf vom majestätischen Wetzlarer Dom und dem belebten Eisenmarkt entfernt, haben wir einen Ort geschaffen, der für puren Genuss, echte Handwerkskunst und herzliche Gastfreundschaft steht. Hey Fede! ist nicht einfach nur eine Dessertbar in Wetzlar. Es ist unsere Vision eines Ortes, der Menschen zusammenbringt. Ein Raum, in dem der Alltagsstress an der Eingangstür abgegeben wird und Platz macht für Momente des bewussten Genießens.
      </p>
      <p style={pStyle}>
        Wenn du unsere Tür öffnest, empfängt dich sofort der warme, tröstliche Duft von frisch gebackenem Waffelteig, gerösteten Kaffeebohnen, leicht gebräunter Butter und geschmolzener Schokolade. Wir möchten, dass sich jeder Besuch bei uns anfühlt wie eine herzliche Umarmung, wie das Nach-Hause-Kommen an einem kalten Wintertag oder wie ein erfrischender Kurzurlaub im Hochsommer. Die Atmosphäre in der {BUSINESS.street} ist geprägt von echter Gemütlichkeit, tiefgründigen Gesprächen und natürlich von Speisen, die mit bedingungsloser Hingabe zubereitet werden. Wir glauben fest daran, dass gutes Essen eine Seele hat. Deshalb nehmen wir uns für jede einzelne Bestellung exakt die Zeit, die sie braucht, um perfekt zu werden. Bei uns bist du kein anonymer Gast, der schnell abgefertigt wird, sondern Teil unserer lebendigen Hey Fede! Familie.
      </p>
      <p style={pStyle}>
        Egal, ob du nach einem langen, ausgedehnten Spaziergang entlang der Lahn bei uns einkehrst, dich mit alten Freunden zum ausführlichen Brunch triffst, nach einem Einkaufsbummel in der Wetzlarer Fußgängerzone neue Energie tanken möchtest oder dir einfach selbst nach Feierabend eine wohlverdiente Auszeit gönnst – wir sind hier, um dir diesen Moment so süß, so ehrlich und so unvergesslich wie möglich zu machen. Unsere Türen stehen für jeden offen, der die Liebe zum Detail genauso schätzt wie wir.
      </p>

      <h2 style={h2Style}>Unsere Philosophie: Eine kompromisslose Reise zu den besten Zutaten</h2>
      <p style={pStyle}>
        Ein herausragendes Dessert, an das man sich noch Tage später erinnert, ist immer nur so gut wie die Zutaten, aus denen es besteht. Diese einfache, aber absolut elementare Wahrheit leitet uns jeden einzelnen Tag in unserer Küche in Wetzlar. Wir haben Monate damit verbracht, Lieferanten zu suchen, zu prüfen und Partnerschaften aufzubauen, die unsere immense Leidenschaft für Qualität, Nachhaltigkeit und unverfälschten, natürlichen Geschmack voll und ganz teilen. Bei Hey Fede! gibt es keinerlei Abkürzungen, keine künstlichen Aromastoffe, die Fehler kaschieren sollen, und absolut keine Kompromisse bei der Frische.
      </p>
      
      <h3 style={h3Style}>Die Basis: Mehl, Eier und Milchprodukte</h3>
      <p style={pStyle}>
        Die fundamentale Basis unserer Bubble Waffles, Crêpes und Pancakes bildet ein Teig, den wir nach eigenen, über Monate hinweg perfektionierten und streng gehüteten Rezepturen jeden Morgen in den frühen Stunden frisch anrühren. Das Mehl, das wir verwenden, beziehen wir von Mühlen, die das Korn schonend und langsam vermahlen, sodass die essenziellen Backeigenschaften und der nussige, natürliche Geschmack des Getreides vollständig erhalten bleiben. Bei den Eiern setzen wir konsequent auf artgerechte Freilandhaltung, denn nur glückliche Hühner, die Platz und gutes Futter haben, legen Eier, die unseren Teigen diese wunderbare, leuchtend goldgelbe Farbe und die unvergleichlich geschmeidige Bindung verleihen. Auch unsere Milch, die Sahne und die Butter, die wir in großen Mengen verarbeiten, stammen von Höfen, die das Wohl der Tiere an erste Stelle setzen. Diese Sorgfalt bei den Grundzutaten schmeckt man in jedem einzelnen Bissen, in jeder knusprigen Kante und in jedem fluffigen Kern.
      </p>

      <h3 style={h3Style}>Die Welt der echten Schokolade und echten Vanille</h3>
      <p style={pStyle}>
        Wenn wir bei Hey Fede! von Schokolade sprechen, dann meinen wir echte, ehrliche, hochwertige Schokolade mit einem hohen, reinen Kakaoanteil, die langsam auf der Zunge schmilzt und ein komplexes, langanhaltendes und tiefes Aroma am Gaumen hinterlässt. Ob weiße Schokolade, die nach echter Kakaobutter schmeckt, cremige Vollmilchschokolade oder tiefgründige, leicht bittere Zartbitterschokolade – wir verwenden ausschließlich Kuvertüren von Meister-Chocolatiers, die ihr Handwerk von der Röstung der Bohne bis zum Conchieren meisterhaft verstehen. Unsere Vanille ist keine chemische Essenz aus dem Labor und kein billiges Pulver. Wir verwenden das Mark echter, praller Madagaskar-Bourbon-Vanilleschoten. Du siehst die unzähligen, winzigen schwarzen Punkte in unserer frisch aufgeschlagenen Sahne, in unseren Pürees und in unserem hausgemachten Eis, und du schmeckst diese unverwechselbare warme, blumige und leicht holzige Süße, die nur echte Vanille bieten kann.
      </p>

      <h3 style={h3Style}>Frische Früchte im Einklang mit der Natur</h3>
      <p style={pStyle}>
        Wässrige Erdbeeren im tiefsten Winter? Nicht bei uns. Wir respektieren den natürlichen Rhythmus der Jahreszeiten und der Natur. Unsere Früchte werden extrem sorgfältig ausgewählt, und wir bevorzugen es, dann frisches Obst anzubieten, wenn es auf dem Höhepunkt seines Geschmacks ist. In den warmen Sommermonaten leuchten unsere Desserts in den kräftigen Farben von sonnengereiften, tiefroten Himbeeren, saftigen, blauschwarzen Blaubeeren und prallen Kirschen, die fast vor Saft platzen. Wenn der Herbst in die Wetzlarer Langgasse einzieht und der Winter folgt, setzen wir auf aromatische, regionale Äpfel, die wir mit einem Hauch von echtem Ceylon-Zimt verfeinern, auf weiche, saftige Birnen oder auf exotische Früchte wie süße Mango und säuerliche Maracuja, die wir von verlässlichen, zertifizierten Partnern aus sonnigen Gefilden beziehen. Jede einzelne Frucht wird von unserem Team von Hand gewaschen, sorgfältig geschnitten und mit größter ästhetischer Sorgfalt auf deinen Tellern drapiert.
      </p>

      <h3 style={h3Style}>Die Kunst der hausgemachten Soßen</h3>
      <p style={pStyle}>
        Unsere Soßen sind nicht einfach nur süße Begleiter, sie sind das i-Tüpfelchen, das krönende Element eines jeden Desserts. Wir weigern uns, auf industriell gefertigte Eimerware zurückzugreifen. Stattdessen kochen wir unsere Karamellsoße in unserer eigenen Küche selbst. Wir karamellisieren Zucker langsam, bis er genau diese perfekte, warme, bernsteinfarbene Tönung erreicht hat. Dann fügen wir frische Butter und Sahne hinzu, um diesen unverwechselbaren, leicht buttrigen und tiefgründigen Geschmack zu kreieren, der so unglaublich perfekt mit einer Prise grobem Meersalz harmoniert. Unsere Fruchtpürees bestehen aus purer, echter Frucht, die wir nur sanft erhitzen und mit etwas Zucker einkochen, um das natürliche Aroma zu verdichten und zu intensivieren, ohne die Frische zu zerstören.
      </p>

      <h2 style={h2Style}>Bubble Waffles — Die süße Sensation aus Hongkong und ihre Reise an die Lahn</h2>
      <p style={pStyle}>
        Die faszinierende Geschichte der Bubble Waffle, die in ihrem Ursprungsort im Kantonesischen als 鷄蛋仔 (Gai Daan Jai) bekannt und geliebt ist, ist eine wunderbare Geschichte von menschlichem Erfindungsreichtum und kulinarischer Magie aus der Not heraus. Im Hongkong der 1950er-Jahre, in einer intensiven Zeit des wirtschaftlichen Wiederaufbaus und der begrenzten Ressourcen, suchten findige und kreative Straßenverkäufer nach einer praktikablen Möglichkeit, leicht beschädigte oder nicht verkaufte Eier sinnvoll zu verwerten, bevor sie verderben würden. Sie mischten die Eier mit etwas Mehl, Zucker und Kondensmilch und gossen diesen sehr flüssigen, eierreichen Teig in spezielle, wabenförmige, gusseiserne Pfannen, die direkt über heißen, glühenden Kohlen gewendet wurden.
      </p>
      <p style={pStyle}>
        Das Ergebnis dieses einfachen Prozesses war eine spektakuläre Waffel, die aus vielen kleinen, zusammenhängenden "Blasen" oder "Bubbles" bestand. Sie war außen herrlich dünn und knusprig und innen, im Herzen jeder Blase, wunderbar fluffig, weich und teigig. Dieses unkomplizierte Street-Food wurde in Rekordzeit zu einer absoluten Sensation, die den verlockenden Duft von süßem, karamellisierendem Eierteig durch die dichten, engen Straßen von Kowloon und Hong Kong Island trug und Generationen von Kindern und Erwachsenen prägte.
      </p>
      <p style={pStyle}>
        Wir bei Hey Fede! waren von der ersten Sekunde an so fasziniert von dieser historischen Geschichte und dem unvergleichlichen, kontrastreichen Biss dieser Waffeln, dass wir beschlossen, diese wunderbare Tradition nach Deutschland, genauer gesagt direkt in die Wetzlarer Langgasse, zu bringen. Aber wir wollten die Bubble Waffle nicht einfach nur plump kopieren; wir haben sie zu einem unverwechselbaren Hey Fede! Original gemacht. Unser spezielles Teigrezept wurde in zahllosen, detailversessenen Testläufen perfektioniert, bis wir exakt die goldene Balance zwischen der traditionellen asiatischen Elastizität des Teigs und einem sanften Hauch von lokaler, europäischer Backtradition gefunden hatten.
      </p>
      <p style={pStyle}>
        Wenn du bei uns an der Theke eine Bubble Waffle bestellst, gießen wir den tagesfrischen Teig direkt vor deinen Augen in unsere extrem heißen, speziell für uns importierten Waffeleisen. Für genau die richtige, exakt gestoppte Zeit – nicht eine einzige Sekunde zu lang, damit sie nicht verbrennt, und nicht zu kurz, damit sie nicht matschig bleibt – wird die Waffel gebacken, bevor sie heiß und dampfend herausgenommen und mit einem geübten Handgriff sofort zu einem eleganten Kegel geformt wird. In diesen ersten, entscheidenden Minuten nach dem Backen entsteht die eigentliche Magie: Der Teig kühlt durch die Umgebungsluft minimal ab, wodurch die äußere Schicht blitzschnell aushärtet und dieser fantastische, laute Crunch entsteht, während das Innere der kleinen "Bubbles" durch die eingeschlossene Hitze herrlich luftig, saftig und teigig bleibt.
      </p>
      
      <h3 style={h3Style}>Die Vollendung: Unsere Toppings und Kombinationen</h3>
      <p style={pStyle}>
        Dann beginnt der kreative, künstlerische Teil der Zubereitung. Wir füllen deine noch warme Bubble Waffle mit einer großzügigen Kugel unseres eiskalten, cremigen Eises, fügen einen Berg luftiger, hausgemachter Sahne hinzu und drapieren frische, bunte Früchte, knusprige, zerbröselte Keksstücke, geröstete Nüsse und unsere samtigen, fließenden Soßen kunstvoll darüber. Die sanfte Wärme der frisch gebackenen Waffel lässt das Eis in der Mitte ganz leicht anschmelzen, sodass sich die unterschiedlichen Aromen und Temperaturen auf unvergleichlich harmonische Weise verbinden. Jeder einzelne Bissen bietet dir ein völlig neues Texturerlebnis – knusprig, cremig, warm und eiskalt zugleich.
      </p>
      <ul style={{ ...pStyle, paddingLeft: 24 }}>
        <li><strong>Fruchtige Frische:</strong> Gefüllt mit Vanilleeis, frischen Erdbeeren, Blaubeeren und abgerundet mit unserem hausgemachten, leicht säuerlichen Beeren-Coulis.</li>
        <li><strong>Schokoladen-Traum:</strong> Mit cremigem Schokoladeneis, Brownie-Stücken, Schokoladenraspeln und unserer intensiv-dunklen Schokoladensoße.</li>
        <li><strong>Karamell-Nuss-Crunch:</strong> Haselnusseis kombiniert mit gerösteten Mandeln, Pekannüssen und großzügig übergossen mit unserer legendären, leicht salzigen Karamellsoße.</li>
      </ul>
      <p style={pStyle}>
        <strong>Unsere Pairing-Empfehlung:</strong> Zu einer fruchtigen, leichten Bubble Waffle mit Erdbeeren und Vanilleeis empfehlen wir unseren milden, hausgemachten, eisgekühlten Pfirsich-Eistee, der die Frische der Früchte unterstreicht. Wenn du dich jedoch für eine üppige, schokoladige Variante entscheidest, bildet ein heißer, extrem kräftiger Espresso aus unserer Siebträgermaschine den absolut perfekten, leicht herben Kontrast zur intensiven Süße.
      </p>

      <h2 style={h2Style}>Crêpes — Französische Handwerkskunst trifft auf Wetzlarer Charme</h2>
      <p style={pStyle}>
        Es gibt in der gesamten kulinarischen Welt wohl kaum ein Dessert oder Gebäck, das so schlicht, so elegant und gleichzeitig so tief in der europäischen Straßen- und Café-Kultur verwurzelt ist wie der klassische französische Crêpe. Die rauen, aber landschaftlich wunderschönen Küsten der Bretagne im Nordwesten Frankreichs gelten als die historische Wiege dieses hauchdünnen, delikaten Pfannkuchens. Was dort vor Jahrhunderten als sehr einfaches, nahrhaftes Essen der Bauern und Fischer begann, oft aus dunklem Buchweizenmehl hergestellt, hat längst die feinsten Pâtisserien, Straßencafés und Dessertbars der ganzen Welt erobert. In unserer gemütlichen Küche in der Wetzlarer Langgasse verbeugen wir uns jeden Tag tief vor dieser alten, anspruchsvollen Handwerkskunst und interpretieren sie mit der für Hey Fede! typischen, detailverliebten Leidenschaft.
      </p>
      <p style={pStyle}>
        Der ultimative Schlüssel zu einem außergewöhnlichen, perfekten Crêpe liegt nicht nur im Rezept des Teigs, sondern vor allem in der Technik der Zubereitung. Unser Crêpe-Teig wird mit äußerster Sorgfalt angerührt und muss zwingend über Nacht im Kühlhaus ruhen. Nur durch diese lange Ruhephase kann das feine Mehl vollständig quellen und sich die Glutenstruktur im Teig entspannen. Nur so erreichen wir am nächsten Tag diese seidige, absolut glatte Textur, die den Teig beim raschen Ausstreichen auf der kochend heißen, gusseisernen Crêpière nicht reißen oder klumpen lässt. Es ist ein fast schon meditativer, hypnotisierender Prozess, unseren Köchen dabei zuzusehen, wie der flüssige Teig mit einem extrem schnellen, fließenden Schwung des Teigverteilers – dem traditionellen Holzwerkzeug namens Rozell – hauchdünn und millimetergenau gleichmäßig zu einem perfekten, großen Kreis geformt wird. Innerhalb von Bruchteilen von Sekunden verwandelt sich die weiße Flüssigkeit, mikroskopisch kleine Bläschen steigen an die Oberfläche, der Teig verfestigt sich, und der Rand beginnt langsam, appetitlich goldbraun und hauchzart knusprig zu werden.
      </p>
      
      <h3 style={h3Style}>Süße Verführungen und herzhafte Momente</h3>
      <p style={pStyle}>
        Unsere umfassende Crêpe-Karte deckt das gesamte erdenkliche Spektrum des guten Geschmacks ab. Für die absoluten Puristen bieten wir den puren Klassiker an: bestrichen mit echter, hochwertiger geschmolzener Butter und bestreut mit feinem, weißen Zucker, vielleicht noch abgerundet mit einem frischen Spritzer Zitronensaft, um die Süße zu brechen. Wer es üppiger, reichhaltiger und dekadenter mag, taucht ein in unsere beliebtesten Kombinationen aus dicker Nuss-Nougat-Creme, frisch geschnittenen, reifen Bananenscheiben und sanft gerösteten Haselnüssen, die einen wunderbaren Crunch bieten. Ein ganz besonderes, visuelles und geschmackliches Highlight ist unser Crêpe mit zartschmelzender, feinster weißer Schokolade und einem kräftigen Püree aus roten Beeren, das eine wunderbare, natürliche Säure mitbringt und die cremige Süße der weißen Schokolade am Gaumen perfekt ausbalanciert.
      </p>
      <p style={pStyle}>
        Aber wir wissen auch: Ein Crêpe muss nicht immer zwingend süß sein. Für all jene Momente am Tag, in denen du bei uns einkehrst und Lust auf etwas Deftiges, Herzhaftes hast, bereiten wir mit der gleichen Hingabe herzhafte Varianten zu. Gefüllt mit herzhaft geschmolzenem, würzigem Käse, verfeinert mit frischen, aromatischen Kräutern und belegt mit ausgewählten, regionalen Zutaten. Diese herzhaften Crêpes – in ihrer Heimat oft als Galettes bezeichnet – sind das absolut perfekte, leichte Mittagessen oder der ideale Snack bei einem ausgedehnten Spaziergang durch die verwinkelten Gassen der Wetzlarer Altstadt. Jeder einzelne Crêpe wird direkt vor deinen Augen auf Bestellung frisch zubereitet, nach dem Belegen kunstvoll und präzise gefaltet und so an deinen Tisch serviert, dass er seine wohlige Wärme noch lange behält.
      </p>
      <p style={pStyle}>
        <strong>Unsere Pairing-Empfehlung:</strong> Zu unseren intensiv süßen Crêpes passt ein klassischer, italienischer Cappuccino mit seiner vollmundigen, feinporigen Milch-Crema ganz hervorragend. Wählst du hingegen eine herzhafte, würzige Variante mit Käse und Kräutern, empfehlen wir dir eine spritzige, eisgekühlte und hausgemachte Zitronen-Minz-Limonade, die den Gaumen wunderbar erfrischt.
      </p>

      <h2 style={h2Style}>Pancakes — Der amerikanische Traum, neu interpretiert an der Lahn</h2>
      <p style={pStyle}>
        Pancakes sind längst kein rein amerikanisches Frühstück mehr, sie sind ein globales, kulturelles Phänomen, ein universelles Synonym für ein entspanntes Wochenende, für Zeit mit der Familie und für ein Essen, das sich anfühlt wie eine warme, tröstende Umarmung. Während der traditionelle europäische Pfannkuchen in der Regel eher flach, dicht und schwer ist, zeichnet sich der echte amerikanische Pancake durch sein bemerkenswertes, luftiges Volumen und seine wolkenartige Schwammigkeit aus. Bei Hey Fede! haben wir dieses klassische Konzept des amerikanischen Diners genommen und es mit besten Zutaten auf das hohe Niveau einer handwerklichen Pâtisserie gehoben. Wir wollten Pancakes kreieren, die in Wetzlar und Umgebung ihresgleichen suchen.
      </p>
      <p style={pStyle}>
        Das verborgene Geheimnis unserer hochgelobten Pancakes liegt in der faszinierenden Wissenschaft des Backens, genauer gesagt im Zusammenspiel von Backpulver und der Säure in der Milch. Wir rühren unseren Pancake-Teig jeden Morgen mit einer extremen Behutsamkeit von Hand an. Dieser Vorgang sorgt dafür, dass die empfindliche Glutenstruktur im Weizenmehl nicht durch zu starkes Rühren überstrapaziert wird, was den Teig zäh machen würde. Das phänomenale Ergebnis unserer Methode? Ein Teig, der, sobald er die heiße, gebutterte Grillplatte berührt, sofort nach oben schießt und im Inneren unzählige kleine Lufttaschen bildet. Diese Lufttaschen machen den Pancake so unglaublich fluffig und leicht, dass er auf dem Teller fast zu schweben scheint. Wir backen jeden Pancake bei mittlerer Hitze goldbraun an, sodass sich an den äußeren Rändern eine ganz leichte, fein karamellisierte Kruste entwickelt, während das dicke Innere wolkenweich, heiß und saftig bleibt.
      </p>
      
      <h3 style={h3Style}>Gestapeltes Glück: Von Ahornsirup bis Schokoladen-Ganache</h3>
      <p style={pStyle}>
        Wenn wir bei Hey Fede! Pancakes servieren, machen wir absolut keine halben Sachen. Ein einzelner Pancake ist schön, aber ein Turm ist ein Erlebnis. Wir stapeln sie zu imposanten, hohen Türmen auf deinem Teller auf. Zwischen jeder noch dampfenden Schicht kannst du auf Wunsch ein kleines Stückchen frischer, leicht gesalzener Butter schmelzen lassen, bevor der warme, bernsteinfarbene Ahornsirup langsam von der Spitze an den Seiten hinunterläuft und vom porösen, aufnahmefähigen Teig aufgesaugt wird. Und um es klar zu betonen: Wir verwenden ausschließlich echten, naturreinen, hochwertigen kanadischen Ahornsirup – keinen mit künstlichen Aromen versetzten Zuckersirup aus der Plastikflasche.
      </p>
      <p style={pStyle}>
        Doch das ist nur der Anfang; wir gehen in unserer Kreativität noch viel weiter. Unsere speziellen, kuratierten Pancake-Stacks sind regelrechte Meisterwerke der Dessertkunst. Stell dir einen warmen Pancake-Turm vor, der zwischen jeder einzelnen Teigschicht mit einer leichten, hausgemachten Vanillecreme gefüllt ist, auf der Spitze großzügig mit frischen, prallen Blaubeeren gekrönt wird und ringsum mit dicken, knusprigen Streuseln aus hauskaramellisierten Mandeln bestreut ist. Oder unser berühmter "Chocolate Lover"-Stack, der Traum eines jeden Schokoladenfans: Hier werden Tropfen von dunkler und weißer Schokolade bereits direkt in den rohen Teig auf der Grillplatte gebacken. Der fertige Turm wird dann mit einer so dicken, warmen Schicht aus Schokoladen-Ganache übergossen, dass sie sich fast wie ein Mantel um die Pancakes legt. Jeder Bissen, den du mit der Gabel nimmst, durchbricht die verschiedenen Schichten aus fluffigem, warmem Teig, kühlen, weichen Cremes und knackigen, schokoladigen Texturen.
      </p>
      <p style={pStyle}>
        <strong>Unsere Pairing-Empfehlung:</strong> Ein solch intensiver, süßer Pancake-Turm verlangt nach einem Getränk, das die vielfältigen Aromen trägt und unterstützt, ohne sie jedoch zu dominieren oder zu überdecken. Ein eleganter, cremiger Flat White oder eine große Tasse von unserem feinen, dampfenden Earl Grey Tee harmonieren wunderbar mit den leichten Röst- und starken Karamellnoten unserer Pancakes.
      </p>

      <h2 style={h2Style}>Eisbecher 500ml — Löffel für Löffel pures Glück in Übergröße</h2>
      <p style={pStyle}>
        Ein Eisbecher ist für unser Team bei Hey Fede! weit mehr als nur ein paar Kugeln gefrorene Sahne und Milch, die lieblos in ein Glas geworfen werden. Ein echter Eisbecher ist für uns eine durchdachte, fast schon architektonische Meisterleistung, eine aufregende Reise durch völlig verschiedene Geschmacksschichten und kontrastierende Temperaturen. Er ist präzise konzipiert, um jeden einzelnen Löffel, den du zu dir nimmst, zu einer neuen, spannenden Entdeckung zu machen. In unserer Wetzlarer Manufaktur servieren wir diese aufwendigen Kreationen ganz bewusst in sehr großzügigen, schweren 500-Milliliter-Gläsern, denn wir sind der festen Überzeugung: Wenn es um handwerklich wirklich gutes, cremiges Eis geht, ist weniger definitiv nicht mehr – in diesem Fall ist mehr einfach mehr.
      </p>
      <p style={pStyle}>
        Das tragende Fundament eines jeden Eisbechers, der unsere Theke verlässt, bildet unser exquisites, dichtes Eis. Wir arbeiten ausschließlich mit Sorten, die mit echten, rein natürlichen Zutaten und ohne künstliche Luftaufschlagung hergestellt werden. Unser Pistazieneis, zum Beispiel, leuchtet nicht in einem künstlichen Neongrün, sondern hat die blassgrüne Farbe echter Nüsse und schmeckt unfassbar intensiv nach gerösteten, hochwertigen sizilianischen Pistazien – tief nussig und abgerundet mit einer kaum wahrnehmbaren, aber wichtigen Prise Salz. Unser Fruchtsorbet hingegen enthält einen so extrem hohen Fruchtanteil, dass es in Konsistenz und Geschmack fast an gefrorenen, puren Fruchtnektar erinnert. Diese herausragende Qualität ist die unabdingbare Basis für alles Weitere, was in den Becher kommt.
      </p>

      <h3 style={h3Style}>Architektur im Glas: Schichten, Crunch und cremige Perfektion</h3>
      <p style={pStyle}>
        Beim Aufbau und Schichten des Eisbechers achten wir penibel auf ein absolut harmonisches Gleichgewicht zwischen eiskaltem Eis, warmer Soße, knusprigem Crunch und fruchtiger Frische. Nehmen wir als prominentes Beispiel unseren "Nutty Caramel Dream", der unsere Gäste regelmäßig in Verzückung versetzt: Wir beginnen ganz unten im Glas mit einer dicken Basis aus grob zerkrümelten, buttrigen Keksen. Darauf folgen abwechselnd üppige Schichten aus cremigem Haselnuss- und reinem Vanilleeis. Darüber drapieren wir in konzentrierter Handarbeit unsere hausgekochte Karamellsoße, die wir vorher ganz leicht erwärmen, damit sie genau in dem Moment, in dem sie auf das kalte Eis trifft, verführerisch erstarrt und kleine, knackige Karamellplatten bildet. Den optischen und geschmacklichen Abschluss bildet ein wahrhaft großzügiger Berg frisch aufgeschlagener, ungesüßter Sahne, liebevoll garniert mit grob gehackten, gerösteten Pekannüssen.
      </p>
      <p style={pStyle}>
        Aber auch die Liebhaber von fruchtigen, leichten Desserts kommen bei uns in der Langgasse voll und ganz auf ihre Kosten. Unser opulenter Beerenbecher kombiniert intensiv leuchtendes Himbeer- und erfrischendes Zitronensorbet mit einer Fülle an frischen, saisonalen Beeren der Region. Dazwischen verstecken sich kleine, süße Meringue-Küsse (Baiser), die beim Hineinbeißen leicht knistern und dann sofort süß auf der Zunge zergehen. In der dunklen, kalten Jahreszeit, wenn der Frost über die Lahn zieht, verwandeln wir unsere Eisbecher mit wohligen Zutaten wie warmen, dampfenden Zimtäpfeln, zerbröseltem, würzigem Lebkuchen oder einer heißen, dicken Kirschsoße in gemütliche, winterliche Seelentröster.
      </p>
      <p style={pStyle}>
        Jedes 500ml-Glas, das unsere Theke verlässt, ist ein kleines, vergängliches Kunstwerk, das wir mit unermüdlicher Liebe zum Detail anrichten. Es ist das absolut ideale, kühlende Dessert für den heißen Wetzlarer Hochsommer, wenn die Sonne unerbittlich auf die Kopfsteinpflaster der Altstadt brennt, aber auch ein wohlig süßer Trost an grauen, verregneten Herbsttagen.
      </p>
      <p style={pStyle}>
        <strong>Unsere Pairing-Empfehlung:</strong> Zu unseren sehr fruchtigen, säuerlich-süßen Eisbechern passt ein einfaches Glas eiskaltes, stark prickelndes Mineralwasser am allerbesten, um den Gaumen zwischen den reichhaltigen Löffeln immer wieder zu erfrischen und zu neutralisieren. Zu den schweren, cremigen Schokoladen- und Nuss-Bechern empfehlen wir als Kontrast einen schlichten, schwarzen, handgefilterten Kaffee.
      </p>

      <h2 style={h2Style}>Special Shakes — Wenn Desserts völlig flüssig werden und Grenzen verschwinden</h2>
      <p style={pStyle}>
        Erinnere dich für einen Moment zurück an den simplen Milchshake deiner frühen Kindheit. Höchstwahrscheinlich war er einfach nur sehr süß, auffällig bunt und schmeckte irgendwie ein bisschen nach unbeschwerter Nostalgie. Bei Hey Fede! haben wir dieses alte Konzept genommen, es komplett auf den Kopf gestellt und in das 21. Jahrhundert katapultiert. Unsere Special Shakes sind keine einfachen, durstlöschenden Getränke mehr; sie sind vollwertige, gigantische, flüssige Desserts, die optisch wie auch geschmacklich alle bisherigen Regeln der Café-Kultur brechen. Wir nennen sie in unserem Team gerne "Freakshakes" mit Stil – opulente, verrückte Kreationen, die das Auge begeistern, die Kamera-Linsen auf sich ziehen und den Gaumen gnadenlos verwöhnen.
      </p>
      <p style={pStyle}>
        Die handwerkliche Basis unserer Shakes besteht aus unserem extrem cremigen, hochwertigen Eis, das wir mit eiskalter, frischer Vollmilch in leistungsstarken Mixern zu einer dichten, samtigen und homogenen Textur verarbeiten. Wir verwenden für unsere Shakes keinerlei künstliche Verdickungsmittel, Pulver oder Emulgatoren, die perfekte, löffelbare Konsistenz entsteht einzig und allein durch das physikalisch perfekte, erprobte Verhältnis von stark gekühltem Eis und Milch. Wenn diese Basis perfekt gemixt ist, beginnt das wahre Spektakel an unserer Theke: die ausufernde Dekoration.
      </p>
      
      <h3 style={h3Style}>Die Anatomie eines Freakshakes</h3>
      <p style={pStyle}>
        Wir kleiden zunächst die gläserne Innenseite der großen Becher kunstvoll mit dickflüssiger Schokoladen-, Erdbeer- oder Karamellsoße aus, die in schönen, unregelmäßigen Schlieren langsam am Rand nach unten läuft und ein wunderschönes Muster bildet. Dann wird der kühle, dichte Shake eingefüllt. Und dann folgt ein imposanter, fast schon waghalsiger Aufbau, der der Schwerkraft trotzt. Auf den Shake setzen wir eine riesige, stabile Haube aus steif geschlagener, frischer Sahne. Aber das ist nur das Fundament der Dekoration. Je nach gewählter Shake-Sorte garnieren und dekorieren wir die Sahnehaube mit ganzen, saftigen Kuchenstücken, klobigen Brownie-Würfeln, frisch gebackenen, halben Cookies, mit dem Bunsenbrenner flammbierten, karamellisierten Marshmallows, bunten Zuckerstreuseln, Brezeln oder kunstvoll drapierten, frischen Früchten.
      </p>
      <p style={pStyle}>
        Nehmen wir unseren berühmten "Chocoholic Supreme" Shake als Beispiel: Er kombiniert extrem intensives, doppeltes Schokoladeneis mit eiskalter Milch. Der äußere Rand des Glases ist dick mit einer klebrigen Schokoladencreme bestrichen und rundherum mit knusprigen Mini-Schokoladenraspeln verziert. Obenauf, majestätisch auf der Sahne thronend, sitzt ein großes, saftiges Stück unseres legendären, hausgemachten Schokoladen-Brownies, das wiederum verschwenderisch mit noch mehr dunkler Schokoladensoße beträufelt wird. Ein solcher Shake ist ein Erlebnis, das man zelebrieren muss. Er ist der unbestrittene, farbenfrohe Star auf jedem Foto und oft der Hauptgrund, warum so viele neue Gäste aus der ganzen hessischen Umgebung extra anreisen, um ihn in der {BUSINESS.street} zu probieren. Es ist ein lautes, fröhliches Fest der Texturen: das langsame, cremige Trinken durch den extradicken Strohhalm, das genüssliche Löffeln der Sahne und das Knabbern der Brownie-Stücke.
      </p>
      <p style={pStyle}>
        <strong>Unsere Pairing-Empfehlung:</strong> Ein Special Shake steht majestätisch für sich selbst. Er ist Getränk, Snack und Haupt-Dessert in einem einzigen, großen Glas. Wenn du ihn begleitest, dann am besten mit guten Freunden, mit denen du dieses imposante Dessert teilen, bestaunen und natürlich ausgiebig fotografieren kannst.
      </p>

      <h2 style={h2Style}>Fede Boxen — Gemeinsam schmeckt es am besten, ein süßes Fest im Karton</h2>
      <p style={pStyle}>
        In einer modernen Welt, die sich gefühlt jeden Tag ein bisschen schneller dreht und in der Zeit oft Mangelware ist, sind Momente des bewussten, gemeinsamen Genießens ein unglaublich kostbares, seltenes Gut geworden. Um genau diese wertvollen Momente des Miteinanders zu fördern und zu feiern, haben wir die Fede Boxen entwickelt. Sie sind unsere süße, durchdachte Antwort auf die immer wiederkehrende Frage unserer Gäste: "Was bringen wir zum großen Picknick unten an der Lahn, zur Geburtstagsparty der besten Freundin oder zum gemütlichen, langen Fernsehabend auf der Couch mit?" Eine Fede Box ist weit mehr als nur Essen to go; sie ist eine regelrechte Schatzkiste voller liebevoll zubereiteter, süßer Überraschungen, von uns sorgfältig zusammengestellt, um in großer Runde geteilt zu werden.
      </p>
      
      <h3 style={h3Style}>Für jede Gelegenheit die richtige Box</h3>
      <p style={pStyle}>
        Unsere große "Fede & Friends Box" ist ein unangefochtener, echter Bestseller in Wetzlar. Sie bietet einen perfekten, vielfältigen Querschnitt durch all das, was unsere Küche in der Langgasse so besonders und einzigartig macht. Wenn du zu Hause oder im Park den Deckel des Kartons anhebst, offenbart sich ein wunderschönes Mosaik aus Aromen und Farben: Ein Berg von Mini-Pancakes, perfekt in runder Form und goldbrauner Farbe, kleine, fluffige, frisch gebackene Bubble-Waffle-Ecken, dazu eine handverlesene Auswahl unserer feinsten, weichsten Cookies und saftigsten Kuchenstücke. Aber eine echte Fede Box wäre natürlich nicht komplett ohne die passenden Toppings, die das Ganze erst interaktiv machen. In kleinen, separaten Dosen legen wir frische, geschnittene Früchte, geröstete Nüsse, weiche Marshmallows und eine Auswahl unserer unvergleichlichen hausgemachten Soßen bei. So kann jeder am Tisch oder auf der Picknickdecke seine eigene, kleine Traumkombination zusammenstellen. Es wird gedippt, eifrig gestapelt und querbeet probiert. Die Box verwandelt den einfachen Akt des Dessert-Essens von einem passiven Erlebnis in eine interaktive, laute und fröhliche Angelegenheit.
      </p>
      <ul style={{ ...pStyle, paddingLeft: 24 }}>
        <li><strong>Fede & Friends Box:</strong> Der ultimative Allrounder. Mini-Pancakes, Bubble Waffle Stücke, Cookies, Kuchen und eine riesige Auswahl an Dips und Früchten. Ideal für 3-4 Personen.</li>
        <li><strong>Pancake Picknick Box:</strong> Ein Berg unserer fluffigen Pancakes, sicher verpackt, dazu Ahornsirup, Butter, Puderzucker und frische Beeren. Der Hit für den Sonntagmorgen.</li>
        <li><strong>Sweet Lovers Box:</strong> Eine reine Auswahl unserer besten, tagesaktuellen Cookies, Brownies und Kuchenstücke. Perfekt zum Nachmittagskaffee im Büro.</li>
      </ul>
      <p style={pStyle}>
        Besonders im Sommer, wenn die Wetzlarer ihre großen Decken auf den grünen Wiesen am Ufer der Lahn ausbreiten und die Sonne genießen, darf unsere "Pancake Picknick Box" nicht fehlen. Sie hält die dicken Pancakes durch unsere clevere, thermische Verpackung lange angenehm warm und sorgt gleichzeitig dafür, dass das beiliegende Obst frisch, kühl und knackig bleibt. Wir bereiten diese großen Boxen immer erst auf konkrete Vorbestellung oder direkte Anfrage im Laden zu, damit wir ausnahmslos garantieren können, dass jedes einzelne Element absolut frisch ist, wenn du mit dem Karton unter dem Arm unseren Laden in der Altstadt verlässt. Die Fede Boxen sind zudem das absolut perfekte, kreative Geschenk. Anstatt Blumen von der Tankstelle oder einer klassischen, oft langweiligen Pralinenschachtel aus dem Supermarkt bringst du mit einer unserer Boxen ein echtes, gemeinschaftliches Erlebnis mit, an das man sich noch lange erinnert.
      </p>

      <h2 style={h2Style}>Kuchen & Cookies — Handgemacht, ofenwarm und mit kompromissloser Liebe gebacken</h2>
      <p style={pStyle}>
        Während die imposanten Bubble Waffles und die turmhohen Shakes zweifellos unsere optisch extravaganten Stars auf Instagram und Co. sind, bilden unsere liebevoll gebackenen Kuchen und Cookies das solide, ehrliche und beruhigende Herzstück und die wahre Seele unserer Dessertbar. Sie sind das tiefe, traditionelle Fundament, auf dem die gemütliche Café-Kultur bei Hey Fede! aufbaut. Wenn du morgens an unserer Backstube in der Langgasse vorbeigehst, riecht es meilenweit nach geschmolzener, brauner Butter, warmer Schokolade, im Ofen gerösteten Nüssen und frischem, zuckrigem Teig. Alles, was in unserer gut beleuchteten Vitrine liegt, wurde von unserem Team selbst erdacht, in vielen Versuchen getestet und jeden Morgen von Hand gebacken.
      </p>
      
      <h3 style={h3Style}>Die komplexe Wissenschaft des perfekten Cookies</h3>
      <p style={pStyle}>
        Lass uns intensiv über Cookies sprechen. Ein wirklich herausragender, guter Cookie ist eine bemerkenswerte Wissenschaft für sich, und wir nehmen sie sehr ernst. Wir verwenden für unseren Cookie-Teig konsequent gebräunte Butter (die sogenannte Beurre noisette), die dem fertigen Cookie eine unglaublich tiefe, nussige und vielschichtige Karamellnote verleiht, die mit normaler Butter schlichtweg unmöglich zu erreichen ist. Der Teig wird nach dem sorgfältigen Kneten fest in Folie gewickelt und muss zwingend mindestens 24 Stunden im Kühlschrank ruhen, damit sich die komplexen Aromen verbinden können und das Mehl vollständig hydratisiert. Wenn wir die kühlen Teigkugeln dann endlich backen, achten wir penibel, fast schon besessen auf die Zeit: Sie müssen an den äußeren Rändern gerade eben so goldbraun und knusprig sein, während der dicke Kern noch wunderbar weich, saftig, teigig und herrlich "chewy" bleibt. Wenn du bei uns an der Theke einen Chocolate Chunk Cookie bestellst und ihn in der Mitte brichst, spürst du die noch leicht warme, flüssig geschmolzene belgische Schokolade, die sich in feinen Fäden zieht. Wir experimentieren zudem unglaublich gerne mit neuen Sorten, wie etwa Macadamia-Weiße-Schokolade, Haferflocken-Rosine mit einem Hauch Ceylon-Zimt oder einem tiefdunklen Double-Chocolate-Cookie, der mit großen Flocken von knusprigem Meersalz abgerundet wird.
      </p>

      <h3 style={h3Style}>Kuchenklassiker mit dem Hey Fede! Twist</h3>
      <p style={pStyle}>
        Unsere Kuchenauswahl in der Vitrine wechselt stetig und dynamisch, immer inspiriert von den aktuellen Jahreszeiten, dem Angebot auf dem Markt und der unbändigen Kreativität unseres Back-Teams. Du findest bei uns regelmäßig extrem saftige Banana Breads, die so unglaublich reich an überreifer Frucht sind, dass sie fast auf der Zunge zergehen, verfeinert mit sanft gerösteten, herben Walnüssen, die für den nötigen Biss sorgen. Unser mächtiger New York Cheesecake ist mittlerweile geradezu legendär in der gesamten Wetzlarer Altstadt – gebacken auf einem extradicken, knusprig-buttrigen Keksboden, mit einer unglaublich cremigen, dichten, fast schon schweren Käsemasse, die wir großzügig mit echter Vanille verfeinern. Im warmen Sommer backen wir luftig-leichte Biskuitrollen, gefüllt mit einer erfrischenden, säuerlichen Zitronencreme, im regnerischen Herbst rustikale, offene Apfel-Galettes mit einer reichen Mandelfrangipane. Jedes einzelne Stück Kuchen, das wir dir auf dem Teller servieren, ist unser persönliches Versprechen an dich: Bei uns gibt es absolut keine industriellen Fertigmischungen, keine künstlichen Konservierungsstoffe, sondern einfach nur ehrliches, durchdachtes und handgemachtes Backwerk, das genau so tröstlich schmeckt, wie damals bei Oma am Sonntagnachmittag – nur versehen mit einem modernen, raffinierten Twist.
      </p>
      <p style={pStyle}>
        <strong>Unsere Pairing-Empfehlung:</strong> Ein großes, noch leicht warmes und weiches Stück unseres Banana Breads harmoniert absolut traumhaft mit einem cremigen, milchigen Cappuccino. Zu einem intensiv schokoladigen, schweren Cookie empfehlen wir dir hingegen ganz klassisch ein Glas eiskalte Vollmilch oder einen klaren, milden, aromatischen Americano, der die Schokolade umschmeichelt.
      </p>

      <h2 style={h2Style}>Getränke — Von der schonend gerösteten Kaffeebohne bis zum japanischen Matcha</h2>
      <p style={pStyle}>
        Was um alles in der Welt wäre das beste, aufwendigste Dessert ohne das dazu perfekt passende Getränk, um das gesamte Geschmackserlebnis am Gaumen harmonisch abzurunden? In der {BUSINESS.street} legen wir auf unsere umfangreiche Getränkekarte exakt genauso viel Wert wie auf unsere berühmten Süßspeisen. Kaffee ist für uns niemals einfach nur ein schwarzer Wachmacher am Morgen; er ist ein hochkomplexes, handwerkliches Produkt, das Respekt verdient. Wir arbeiten sehr eng mit leidenschaftlichen Röstern zusammen, die ihre hochwertigen Kaffeebohnen aus nachhaltigem, fairem Handel beziehen und sie in kleinen Chargen so schonend und präzise rösten, dass ihre natürlichen, feinen Frucht- und Schokoladennoten in der Tasse optimal zur Geltung kommen. An unserer professionellen, blitzenden Siebträgermaschine zaubern unsere geschulten Baristas jeden Tag Hunderte kleine Kunstwerke mit perfekter, haselnussbrauner Crema und kunstvoller, millimetergenauer Latte Art.
      </p>

      <h3 style={h3Style}>Die Kunst der Extraktion und pflanzliche Vielfalt</h3>
      <p style={pStyle}>
        Vom starken, fast schon sirupartigen, ristretto-artigen Espresso, der dich sofort wachrüttelt, über den perfekt ausbalancierten Flat White mit seinem glänzenden, samtigen Mikroschaum bis hin zum ausladenden, cremigen Latte Macchiato im großen, hohen Glas – jeder einzelne Kaffee wird bei uns mit einer digitalen Waage und einer Stoppuhr exakt bezogen, um Überextraktion und Bitterkeit zu vermeiden. Wir bieten zudem eine erfreulich große Vielzahl an hochwertigen pflanzlichen Milchalternativen an. Sei es reichhaltige Hafermilch, nussige Mandelmilch oder klassische Sojamilch, wir verwenden spezielle Barista-Editionen, die sich unter der Dampflanze genauso wunderbar, cremig und stabil aufschäumen lassen wie herkömmliche Kuhmilch.
      </p>

      <h3 style={h3Style}>Matcha, Cold Brew und heiße Schokolade</h3>
      <p style={pStyle}>
        Für all diejenigen, die eine spannende Alternative zu Kaffee suchen, ist unser Matcha Latte ein visuelles und geschmackliches Highlight. Wir verwenden ausschließlich feingemahlenes, leuchtend neon-grünes Premium-Matcha-Pulver aus Japan. Dieses wird von uns traditionell mit einem speziellen Bambusbesen (dem Chasen) schaumig und klumpenfrei geschlagen, bevor wir es mit heißer oder eiskalter Milch aufgießen. Sein charakteristischer herb-süßlicher, leicht erdiger und komplexer Geschmack (das berühmte Umami) bildet einen wahnsinnig spannenden und sehr erfrischenden, erwachsenen Kontrast zu unseren durchweg süßen Desserts.
      </p>
      <p style={pStyle}>
        In den langen, wärmeren Monaten, wenn sich die engen Gassen der Wetzlarer Altstadt aufheizen und die Luft steht, sind unsere eiskalten Iced Drinks die reinsten Lebensretter. Iced Lattes, über viele Stunden kaltgezogene Cold Brew Kaffees, die besonders mild und säurearm sind, oder unsere fruchtigen, hausgemachten Eistees und Limonaden, die wir mit frischen Minzzweigen, sauren Limettenspalten und nur sehr wenig Zucker im Glas zubereiten. Und im tiefen Winter? Dann schlägt in unserem Café die große Stunde unserer legendären heißen Schokolade. Diese wird bei Hey Fede! niemals aus wässrigem Kakaopulver angerührt, sondern aus echter, langsam geschmolzener Schokolade und dampfend heißer Milch zubereitet, stets gekrönt von einem großzügigen, weißen Berg frischer Sahne. Egal, für welches unserer liebevoll zubereiteten Getränke du dich am Ende entscheidest, es wird mit derselben chirurgischen Präzision und tiefen Sorgfalt zubereitet wie unsere aufwendigsten Desserts, um dir das absolut perfekte, ganzheitliche Genusserlebnis zu bieten, für das wir jeden Morgen aufstehen.
      </p>

      <h2 style={h2Style}>Wir freuen uns von Herzen auf deinen Besuch in der Altstadt!</h2>
      <p style={pStyle}>
        Wir könnten dir an dieser Stelle noch tausend, abertausend weitere Worte über die unvergleichliche Knusprigkeit unserer frisch gebackenen Waffeln, den unwiderstehlichen, betörenden Duft unserer Backstube am frühen Morgen und die unübertroffene Qualität unserer fair gehandelten Kaffeebohnen erzählen. Aber die wahre, greifbare Magie von Hey Fede! lässt sich auf einem flachen Bildschirm oder einem Stück Papier schlichtweg nicht vollständig einfangen. Sie entsteht erst in genau dem magischen Moment, in dem du die Türklinke in die Hand nimmst, durch unsere Tür in der {BUSINESS.street} trittst, den lauten Trubel der Wetzlarer Fußgängerzone hinter dir lässt und in unsere Welt eintauchst. Sie entsteht, wenn du den allersten Löffel deines Lieblingseises probierst oder der erste, warme Bissen deines Crêpes auf der Zunge zergeht. Wir laden dich hiermit von ganzem Herzen ein, diesen Ort der Freude und des Genusses selbst, mit all deinen Sinnen, zu erleben. Bring ausreichend Zeit mit, bring guten Hunger mit und vor allem: Bring deine uneingeschränkte Freude am bewussten Genießen mit. Wir können es kaum erwarten, dich persönlich bei Hey Fede! begrüßen zu dürfen und dir mit unserer tiefen Leidenschaft für exzellente Desserts ein ehrliches, strahlendes Lächeln ins Gesicht zu zaubern. Bis ganz bald in Wetzlar!
      </p>
    </section>
  );
}
