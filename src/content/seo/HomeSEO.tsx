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

export function HomeSEO() {
  return (
    <section
      aria-label="Über Hey Fede! — Hintergrundinformationen"
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
      <h2 style={h2Style}>
        Willkommen bei Hey Fede! — Deinem süßen Rückzugsort im Herzen von Wetzlar
      </h2>
      <p style={pStyle}>
        Wenn du durch die malerischen, von Kopfsteinpflaster gesäumten Gassen der Wetzlarer Altstadt spazierst, vorbei an den liebevoll restaurierten Fachwerkhäusern, deren Balken unzählige Geschichten aus vergangenen Jahrhunderten erzählen, und deinen Blick auf den majestätischen Wetzlarer Dom richtest, spürst du den unverwechselbaren, historischen Puls dieser wunderschönen Stadt. Genau hier, inmitten dieses geschichtsträchtigen und doch so ungemein lebendigen Ambientes, direkt in der geschäftigen {BUSINESS.street}, liegt unser kleiner, aber mit ganz viel Herzblut gestalteter Rückzugsort: Hey Fede! Wir sind nicht einfach nur ein klassisches Café oder eine gewöhnliche Eisdiele, an der man im Vorbeigehen schnell eine Kugel Eis mitnimmt. Wir verstehen uns als eine echte, moderne Dessertbar, einen warmen Ort der Begegnung, an dem der pure, unverfälschte Genuss, die ehrliche handwerkliche Qualität und die zwischenmenschliche Geselligkeit an allererster Stelle stehen.
      </p>
      <p style={pStyle}>
        Sobald du unsere Tür öffnest und den alltäglichen Trubel der Fußgängerzone hinter dir lässt, empfängt dich eine Atmosphäre, die dich sofort wie eine unsichtbare Umarmung umhüllt. Es ist der warme, wohlige Duft nach frisch gebackenem Waffelteig, der auf den heißen Eisen langsam karamellisiert, gemischt mit den tiefen, runden Noten von geschmolzener Schokolade, frisch aufgebrühtem Kaffee und einem zarten Hauch von echter Vanille. Dieser Duft weckt wehmütige Kindheitserinnerungen, er beruhigt den gestressten Geist und zaubert unseren Gästen oft schon beim Eintreten ein unwillkürliches Lächeln auf die Lippen. Unsere Vision war es von Anfang an, einen Raum zu schaffen, der sich anfühlt wie eine stilvolle Erweiterung deines eigenen Wohnzimmers — ein Ort, an dem man sich sofort geborgen fühlt, umgeben von guten Freunden, inspirierenden Gesprächen und natürlich einer unerschöpflichen Quelle an fantastischen Süßspeisen.
      </p>
      <p style={pStyle}>
        Die Langgasse ist die pulsierende Ader der Wetzlarer Altstadt, ein faszinierender Ort, an dem sich alteingesessene Einheimische, neugierige Studierende, Familien auf ihrem Wochenendausflug und Besucher aus aller Welt begegnen. Wir lieben diese Straße zutiefst, wir lieben ihre unbändige Energie und ihre bunte Vielfalt. Bei Hey Fede! hast du den perfekten Logenplatz, um das lebhafte Treiben draußen durch unsere großen Fenster zu beobachten, während du drinnen in eine Welt der süßen Aromen abtauchst. Ob du dich nach einem langen Spaziergang entlang der idyllischen Lahn aufwärmen möchtest, eine kleine Flucht aus dem stressigen Arbeitsalltag suchst oder einfach nur deine Sehnsucht nach etwas Außergewöhnlichem stillen willst — bei uns bist du genau am richtigen Ort angekommen. Wir haben Hey Fede! ins Leben gerufen, um den rastlosen Alltag für einen Moment anzuhalten und das Leben von seiner süßesten, entspanntesten Seite zu feiern.
      </p>

      <h2 style={h2Style}>
        Die Geschichte und Vision hinter Hey Fede! — Aus purer Leidenschaft geboren
      </h2>
      <p style={pStyle}>
        Hinter jedem außergewöhnlichen Ort steht eine Geschichte, die von Hingabe, Träumen und unermüdlicher Arbeit erzählt. Hey Fede! ist das Herzensprojekt von Federica, deren Leidenschaft für exzellentes Essen und tief verwurzelte Gastfreundschaft den Grundstein für diese Dessertbar legte. In der italienischen Kultur, aus der Federica ihre Inspiration schöpft, ist Essen niemals nur reine Nahrungsaufnahme. Es ist ein soziales Ereignis, ein Ausdruck von Liebe und Fürsorge, ein Moment, in dem die Familie und Freunde am Tisch zusammenkommen, um das Leben zu teilen. Genau dieses Gefühl des "Dolce Vita", gepaart mit einer großen Faszination für moderne, internationale Dessert-Trends, wollte sie in das Herz von Hessen, in die Wetzlarer Altstadt, bringen. Es ging nicht nur darum, Desserts zu servieren, sondern ein Erlebnis zu kreieren, das alle Sinne anspricht und die Seele wärmt.
      </p>
      <p style={pStyle}>
        Der Weg von der ersten Idee bis zur Eröffnung in der Langgasse war geprägt von unzähligen durchwachten Nächten in der Testküche. Es wurden hunderte von Teigrezepten angerührt, verworfen und wieder neu erdacht, bis die perfekte Balance aus Knusprigkeit, Fluffigkeit und Geschmack gefunden war. Die Suche nach den besten regionalen Lieferanten, das feine Abstimmen der Soßen und das ständige Probieren mit Freunden und Familie waren wesentliche Schritte auf dieser Reise. Wetzlar als Standort war dabei eine bewusste, zutiefst emotionale Entscheidung. Die engen Gassen, das historische Flair und die starke Verbundenheit der Menschen in dieser Stadt boten genau den familiären, authentischen Rahmen, den eine Dessertbar wie Hey Fede! brauchte, um nicht nur zu existieren, sondern wirklich zu leben und Teil der Gemeinschaft zu werden.
      </p>
      <p style={pStyle}>
        Heute ist Hey Fede! weit mehr als nur die Erfüllung eines persönlichen Traums; es ist ein fester Bestandteil des Wetzlarer Stadtbildes geworden. Federicas Vision, einen Ort zu erschaffen, an dem sich Menschen wohlfühlen, an dem gelacht, geredet und hemmungslos genossen wird, ist in jedem Winkel der Dessertbar spürbar. Von der sorgfältig ausgewählten, warmen Einrichtung über die liebevolle Präsentation jedes einzelnen Tellers bis hin zum persönlichen Gespräch an der Theke — die Seele von Hey Fede! ist in jedem Detail präsent. Es ist diese aufrichtige, ungeschminkte Gastfreundschaft, die unsere Gäste spüren und die sie immer wieder zu uns in die Langgasse zurückkehren lässt.
      </p>

      <h2 style={h2Style}>
        Handgemacht aus Überzeugung — Wahre Handwerkskunst in unserer Backstube
      </h2>
      <p style={pStyle}>
        In einer Welt, die sich immer schneller dreht und in der Effizienz oft über Qualität gestellt wird, haben wir uns bei Hey Fede! ganz bewusst für einen anderen Weg entschieden: den Weg der traditionellen Handwerkskunst. Bei uns gibt es keine Abkürzungen, keine industriellen Backmischungen, keine künstlichen Aromen aus dem Eimer und keine fertigen Teiglinge, die nur noch aufgewärmt werden müssen. Wenn du bei uns ein Dessert bestellst, kannst du sicher sein, dass es mit echten Zutaten, viel handwerklichem Geschick und einer großen Portion Liebe von Grund auf neu zubereitet wurde. Unser Tag beginnt lange bevor die ersten Gäste durch die Tür treten, in der stillen, noch schlafenden Wetzlarer Altstadt, wenn unser Team die frischen Teige für den Tag ansetzt.
      </p>
      <p style={pStyle}>
        Es ist eine Arbeit, die alle Sinne erfordert. Das exakte Abwiegen des feinen Mehls, das sanfte Aufschlagen der Eier, das langsame Schmelzen der hochwertigen Kuvertüre — all das sind Schritte in einem täglichen Ritual, dem wir uns mit voller Überzeugung verschrieben haben. Wir schälen die Bananen von Hand, wir waschen und schneiden die frischen Erdbeeren, wir kochen unsere fruchtigen Pürees und cremigen Soßen selbst. Diese bewusste Entschleunigung in der Zubereitung ist für uns kein unnötiger Aufwand, sondern das absolute Fundament unseres Geschmacks. Nur wenn man die Zutaten spürt, die Konsistenz des Teiges fühlt und den Duft der frischen Früchte einatmet, kann am Ende ein Dessert entstehen, das nicht nur gut, sondern unvergesslich schmeckt.
      </p>
      <p style={pStyle}>
        Diese Hingabe zur Handarbeit erfordert ein Team, das unsere Philosophie teilt. Jeder Handgriff an den heißen Waffeleisen, jedes präzise Streichen des Crêpeteigs auf der gusseisernen Platte und jedes kunstvolle Dekorieren der Eisbecher wird mit größter Sorgfalt ausgeführt. Wir glauben fest daran, dass man diese Leidenschaft und diese Zeit, die in jedes einzelne Dessert fließt, beim allerersten Bissen schmecken kann. Die ehrliche Handarbeit verleiht unseren Kreationen eine Textur und eine geschmackliche Tiefe, die maschinell gefertigte Produkte niemals erreichen können. Es ist diese pure Handwerkskunst, die Hey Fede! in der Wetzlarer Gastronomielandschaft so besonders macht.
      </p>

      <h2 style={h2Style}>
        Unsere Spezialitäten: Ein Universum der süßen Verführungen
      </h2>
      <p style={pStyle}>
        Unsere Speisekarte bei Hey Fede! ist das stolze Ergebnis jahrelanger kulinarischer Entdeckungsreisen, unzähliger Geschmacksexperimente und einer tiefen Liebe zur Vielfalt der weltweiten Dessertkultur. Wir wollten nicht einfach nur ein weiteres Café sein, sondern einen Ort schaffen, an dem sich Tradition und Innovation auf dem Teller begegnen. Deshalb findest du bei uns eine sorgfältig kuratierte Auswahl an Spezialitäten, die von der asiatischen Straßenküche über französische Patisserie-Klassiker bis hin zu üppigen, amerikanischen Wohlfühl-Desserts reicht. Jede einzelne Kategorie auf unserer Karte wurde mit dem Anspruch entwickelt, das absolute Best-in-Class-Erlebnis in ganz Wetzlar zu bieten.
      </p>

      <h3 style={h3Style}>Die Bubble Waffle — Ein Knuspertraum erobert die Wetzlarer Altstadt</h3>
      <p style={pStyle}>
        Ursprünglich als "Egg Waffles" in den belebten Straßen von Hongkong erfunden, haben wir diese faszinierende Waffel-Kreation nach Hessen gebracht und sie zu unserem absoluten Signature-Dish gemacht. Das Geheimnis der Bubble Waffle liegt in ihrem einzigartigen Backprozess und dem speziell dafür angefertigten Waffeleisen mit seiner charakteristischen Wabenstruktur. Wenn unser hausgemachter Teig auf das heiße Eisen trifft, beginnt es leise zu zischen, der Teig dehnt sich aus und bildet diese unverwechselbaren, kleinen Blasen. Durch ein präzises Wenden des Eisens im perfekten Moment entsteht eine Waffel, die außen wunderbar knusprig und goldbraun ist, während sie im Inneren der Blasen luftig, weich und leicht teigig bleibt. Dieser unglaubliche Texturkontrast ist es, der unsere Gäste immer wieder begeistert.
      </p>
      <p style={pStyle}>
        Doch die Waffel selbst ist nur der Anfang. Bei Hey Fede! wird die frisch gebackene, noch warme Bubble Waffle behutsam zu einer Tüte geformt und dient als essbares Gefäß für ein grenzenloses Universum an Füllungen. Stell dir vor: Die Wärme der Waffel trifft auf kühles, sanft schmelzendes Eis, umhüllt von hausgemachten Fruchtsoßen, bestreut mit knusprigen Keksstückchen, frischen Beeren und vielleicht einem großzügigen Klecks frischer Schlagsahne. Jeder Bissen bietet ein neues Zusammenspiel von Temperaturen, Texturen und Aromen. Es ist ein interaktives Dessert, das nicht nur fantastisch schmeckt, sondern auch optisch ein echtes Kunstwerk ist — ein Meisterwerk, das in der Wetzlarer Langgasse seinesgleichen sucht.
      </p>

      <h3 style={h3Style}>Traditionelle Crêpes — Hauchdünne Eleganz auf der heißen Platte</h3>
      <p style={pStyle}>
        Die Kunst des perfekten Crêpes ist eine Disziplin für sich, die ihren Ursprung in den malerischen Küstenstädten der französischen Bretagne hat. Wir ehren diese alte Tradition, indem wir unsere Crêpes genau so zubereiten, wie es sein sollte: auf großen, runden, gusseisernen Platten, die die Hitze gleichmäßig verteilen. Wenn unser Teig auf die heiße Platte gegossen wird, erfordert es jahrelange Übung und ein schnelles, fließendes Handgelenk, um ihn mit dem traditionellen Holzverteiler in einer perfekten, hauchdünnen Schicht auszustreichen. Das Ergebnis ist ein eleganter, feinporiger Crêpe mit leicht knusprigen Rändern und einem weichen, elastischen Kern, der zart nach Butter und Vanille duftet.
      </p>
      <p style={pStyle}>
        Unsere Crêpe-Karte in der Wetzlarer Altstadt bietet sowohl süße als auch herzhafte Variationen, um jedem Geschmack gerecht zu werden. Ob klassisch und schlicht mit etwas Zimt und Zucker, üppig gefüllt mit hausgemachter Schokoladencreme und frischen Bananenscheiben, oder in einer raffinierten Kombination mit weißer Schokolade und säuerlichen Waldbeeren — der Crêpe ist die perfekte Leinwand für unsere hochwertigen Zutaten. Ein warmer, frisch gefalteter Crêpe von Hey Fede! in der Hand, während man durch das kopfsteingepflasterte Wetzlar schlendert, ist für viele unserer Stammgäste der Inbegriff eines perfekten Nachmittags.
      </p>

      <h3 style={h3Style}>Fluffige Pancakes — Ein gestapelter Traum aus purem Komfort</h3>
      <p style={pStyle}>
        Pancakes sind für uns mehr als nur ein Frühstücksklassiker; sie sind der Inbegriff von Gemütlichkeit, ein kulinarisches Synonym für ein entspanntes Wochenende. Unsere amerikanischen Pancakes zeichnen sich durch ihre außergewöhnliche Dicke und ihre unwiderstehlich fluffige Textur aus. Dieses Volumen erreichen wir nicht durch künstliche Triebmittel, sondern durch eine spezielle Ruhezeit unseres handgerührten Teiges und die perfekte Temperatur auf unserer Grillplatte. Wenn die Pancakes langsam vor sich hin backen und sich die ersten kleinen Bläschen an der Oberfläche bilden, wissen wir, dass sie im Inneren genau die richtige Luftigkeit entwickeln.
      </p>
      <p style={pStyle}>
        Serviert werden sie bei uns natürlich nicht einzeln, sondern als großzügiger Stapel, der darauf wartet, erobert zu werden. Wir krönen unsere Pancakes mit einer Vielzahl von köstlichen Begleitern: von der klassischen Variante mit schmelzender Butter und hochwertigem, kanadischem Ahornsirup, der tief in die Poren des Teiges eindringt, bis hin zu dekadenten Kreationen mit frischen Blaubeeren, gerösteten Nüssen und warmer Karamellsoße. An regnerischen, grauen Tagen, wenn die Wetzlarer Altstadt im Nebel liegt, gibt es kaum etwas Tröstlicheres, als sich in unsere Dessertbar zurückzuziehen und einen dampfenden Stapel unserer legendären Pancakes zu genießen.
      </p>

      <h3 style={h3Style}>Unsere 500ml Eisbecher — Großzügiger Genuss für echte Dessert-Liebhaber</h3>
      <p style={pStyle}>
        Manchmal ist eine kleine Kugel Eis in der Waffel einfach nicht genug, um das Verlangen nach einer süßen Abkühlung zu stillen. Für genau diese Momente haben wir unsere imposanten 500ml Eisbecher kreiert. Diese Becher sind keine bloßen Gefäße für Eiscreme; sie sind sorgfältig durchdachte, architektonische Meisterwerke des Genusses. Wir schichten unsere hochwertigen, regelmäßig wechselnden Eissorten kunstvoll übereinander und trennen die Schichten mit knusprigen Texturen, frischen Früchten und unseren hausgemachten, reichhaltigen Soßen. Jede Schicht bietet eine neue geschmackliche Überraschung, sodass der Genuss vom ersten bis zum letzten Löffel spannend bleibt.
      </p>
      <p style={pStyle}>
        Das großzügige 500ml-Format lädt wunderbar zum Teilen ein — sei es bei einem romantischen Date oder mit dem besten Freund. Doch wir verurteilen niemanden, der diesen majestätischen Becher ganz für sich alleine beansprucht! Wenn im Sommer die Sonne unbarmherzig auf die Wetzlarer Fußgängerzone brennt und die Hitze sich in den alten Gassen staut, sind unsere Eisbecher die ultimative, erfrischende Rettung. Die Kombination aus intensivem Geschmack, cremiger Textur und der schieren Menge macht sie zu einem der unangefochtenen Favoriten auf unserer Karte.
      </p>

      <h3 style={h3Style}>Special Shakes — Wenn Trinken zu einem visuellen und geschmacklichen Erlebnis wird</h3>
      <p style={pStyle}>
        Wer sagt, dass Milchshakes langweilig sein müssen, hat noch nie einen Special Shake bei Hey Fede! probiert. Wir haben das Konzept des klassischen Shakes völlig neu definiert und ihn von einem simplen Getränk in ein opulentes, flüssiges Dessert verwandelt. Bei der Zubereitung legen wir größten Wert auf die perfekte Konsistenz: dick genug, dass man eigentlich einen Löffel bräuchte, aber cremig genug, um ihn genüsslich durch den Strohhalm zu ziehen. Wir blenden hochwertige Eiscreme mit eisgekühlter Milch und ausgewählten Zutaten, bis eine seidige, vollmundige Emulsion entsteht, die den reinen Geschmack der Hauptzutat perfekt einfängt.
      </p>
      <p style={pStyle}>
        Doch der eigentliche Zauber unserer Special Shakes liegt in der Präsentation. Wir dekorieren die Ränder unserer Gläser kunstvoll mit Schokolade, garnieren sie mit Streuseln oder Keksbröseln und krönen das Ganze mit einer majestätischen Haube aus frischer, aufgeschlagener Sahne, die wiederum mit Soßen und kleinen Gebäckstücken verziert wird. Jeder Shake ist ein optisches Highlight, ein wahrgewordener Instagram-Traum, der fast zu schade zum Trinken aussieht — aber eben nur fast. Sie sind die perfekte Begleitung zu unseren Bubble Waffles oder einfach ein grandioser Solo-Genuss bei einem Spaziergang durch Wetzlar.
      </p>

      <h2 style={h2Style}>
        Die Fede Boxen — Geteilte Freude ist die allerschönste Freude
      </h2>
      <p style={pStyle}>
        Wir bei Hey Fede! glauben fest daran, dass die allerschönsten Momente im Leben diejenigen sind, die wir mit unseren Liebsten teilen. Und was könnte schöner sein, als gemeinsam ein phänomenales Dessert zu genießen? Genau aus diesem Gedanken heraus sind unsere beliebten Fede Boxen entstanden. Wir wissen, wie schwer es sein kann, sich bei all den verlockenden Optionen auf unserer Karte für nur eine einzige Sache zu entscheiden. Die Fede Boxen lösen dieses süße Dilemma auf elegante Weise, indem sie eine liebevoll kuratierte Auswahl unserer besten Leckereien in einer einzigen, beeindruckenden Box vereinen. Sie sind wie eine kleine, tragbare Party voller Süßigkeiten.
      </p>
      <p style={pStyle}>
        Jede Fede Box wird von uns wie ein Mosaik arrangiert: Hier ein paar warme Mini-Pancakes, dort eine gefaltete Crêpe-Variation, umgeben von frischen Beeren, kleinen Schalen mit unseren hausgemachten Dips und Soßen, knusprigen Keksen und flauschigen Marshmallows. Wenn du den Deckel der Box anhebst, offenbart sich ein farbenfrohes, duftendes Paradies, das sofort zum Zugreifen verleitet. Ob für den entspannten Mädelsabend, als Highlight beim Picknick auf den Lahnufern, als kreative Geburtstagstorte der etwas anderen Art oder einfach für den gemütlichen Filmeabend auf dem heimischen Sofa — die Fede Boxen bringen die einzigartige Magie unserer Wetzlarer Dessertbar direkt zu dir nach Hause.
      </p>
      <p style={pStyle}>
        Besonders im Sommer sehen wir oft Gruppen von Freunden, die sich eine unserer Boxen schnappen und gemeinsam die wenigen hundert Meter hinunter an die Lahnwiesen spazieren. Dort, mit Blick auf das sanft fließende Wasser und die historische Alte Lahnbrücke im Hintergrund, breiten sie ihre Picknickdecke aus und teilen sich die vielfältigen Köstlichkeiten. Es ist genau dieses Bild von gemeinschaftlichem Genuss und unbeschwerter Lebensfreude, das uns jeden Tag aufs Neue antreibt und motiviert. Die Fede Boxen sind unser Beitrag zu deinen schönsten gemeinsamen Erinnerungen in Wetzlar.
      </p>

      <h2 style={h2Style}>
        Wetzlar entdecken und erleben — Dein perfekter Tag beginnt und endet bei uns
      </h2>
      <p style={pStyle}>
        Die Stadt Wetzlar ist ein wahres Juwel in Mittelhessen, eine Stadt, in der sich mittelalterliche Architektur, literarische Weltgeschichte und eine lebendige, moderne Kulturszene auf faszinierende Weise überschneiden. Hey Fede! ist fest in dieser Stadtkulisse verwurzelt. Wenn du einen Ausflug nach Wetzlar planst, sei es als neugieriger Tourist oder als Einheimischer, der seine Stadt neu entdecken möchte, bieten wir den perfekten Ankerpunkt in der Altstadt. Stell dir vor, du startest deinen Tag mit einem aromatischen Kaffee und einem kleinen, feinen Crêpe bei uns in der {BUSINESS.street}, während die Stadt langsam erwacht und die ersten Sonnenstrahlen die Fachwerkhäuser in ein warmes Licht tauchen.
      </p>
      <p style={pStyle}>
        Von unserer Tür aus liegt dir die gesamte Historie Wetzlars buchstäblich zu Füßen. Nur einen kurzen, malerischen Spaziergang entfernt erhebt sich der mächtige Wetzlarer Dom, dessen faszinierende, unvollendete Architektur Einblicke in verschiedene Bauepochen der Gotik und Romanik bietet. Wenn du den Spuren von Johann Wolfgang von Goethe folgen möchtest, führt dich dein Weg unweigerlich zum nahegelegenen Lottehaus. Hier verbrachte Goethe jene schicksalhaften Monate, die ihn zu seinem Weltbestseller „Die Leiden des jungen Werthers“ inspirierten. Die historischen Schauplätze, die Kopfsteinpflastergassen wie die Krämerstraße oder der geschäftige Kornmarkt verleihen Wetzlar eine romantische Atmosphäre, die zum endlosen Flanieren und Verweilen einlädt.
      </p>
      <p style={pStyle}>
        Nach Stunden der Erkundung, nachdem du die Alte Lahnbrücke überquert und den Blick auf das Optikparcours-Denkmal geworfen hast, werden die Beine langsam schwer, und die Sehnsucht nach einer echten Stärkung wächst. Das ist der Moment, in dem dich dein Weg fast magisch zurück zu Hey Fede! führt. Zurück in unserer gemütlichen Dessertbar kannst du dich in unsere bequemen Sessel fallen lassen, die müden Füße entspannen und bei einer warmen Bubble Waffle oder einem erfrischenden Eisbecher die gesammelten Eindrücke des Tages Revue passieren lassen. Wir sind stolz darauf, Teil deines Wetzlar-Erlebnisses zu sein, ein Ort, an dem sich die Geschichte der Stadt mit dem modernen Genuss von heute verbindet.
      </p>

      <h2 style={h2Style}>
        Jeder Besuch ein kleines Fest — Die schönsten Anlässe für eine süße Auszeit
      </h2>
      <p style={pStyle}>
        Es fasziniert uns jeden Tag aufs Neue, aus wie vielen unterschiedlichen Gründen unsere Gäste den Weg zu uns in die Langgasse finden. Bei Hey Fede! in Wetzlar wird aus einer einfachen Dessertbestellung oft ein besonderer Moment, ein kleines Ritual im Alltag. Wir durften schon Zeuge von unzähligen, aufregenden ersten Dates werden, bei denen die anfängliche Nervosität schnell verflog, während man gemeinsam versuchte, eine hoch aufgetürmte Pancake-Kreation zu meistern. Das gedimmte, warme Licht in unserem Café und die entspannte Hintergrundmusik schaffen genau den richtigen Rahmen für ungestörte Gespräche und tiefe Blicke über den Rand eines Special Shakes hinweg.
      </p>
      <ul style={{ ...pStyle, paddingLeft: 24 }}>
        <li style={{ marginBottom: 10 }}>
          <strong>Der Familien-Sonntag:</strong> Ein Klassiker in Wetzlar. Nach dem ausgedehnten Spaziergang durch den Leitz-Park oder entlang der Lahn kehren Familien bei uns ein. Die leuchtenden Kinderaugen beim Anblick unserer bunten Toppings und die entspannten Eltern, die bei einem exzellenten Espresso durchatmen können, machen den Sonntag bei uns besonders lebendig.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>After-Work Entspannung:</strong> Wenn die Bürotüren in der Stadt schließen, füllt sich unsere Dessertbar oft mit Berufstätigen, die den Stress des Arbeitstages hinter sich lassen wollen. Ein warmer Crêpe oder eine Bubble Waffle wirken wie ein süßer Puffer zwischen dem anstrengenden Job und dem gemütlichen Feierabend. Es ist Self-Care, die man schmecken kann.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>Die Studenten-Oase:</strong> Für die Studierenden der Technischen Hochschule Mittelhessen (THM) ist Hey Fede! längst zu einem zweiten Wohnzimmer geworden. Zwischen zähen Vorlesungen oder nach bestandenen Klausuren wird hier bei uns in der Altstadt neue Energie getankt, in Gruppen gelernt oder einfach nur das Studentenleben gefeiert.
        </li>
      </ul>
      <p style={pStyle}>
        Darüber hinaus sind wir regelmäßig der Austragungsort für besondere Feierlichkeiten. Geburtstage werden bei uns mit speziellen, wunderbar dekorierten Fede Boxen zelebriert, auf denen Wunderkerzen funkeln, während das gesamte Team gratuliert. Freundinnengruppen treffen sich zum ausgiebigen Catch-up am Samstagnachmittag. Jeder dieser Anlässe, ob groß gefeiert oder nur eine kleine Auszeit im Alltag, erfüllt unsere Dessertbar mit Leben, Lachen und einer unvergleichlichen Energie, die Hey Fede! zu dem macht, was es ist.
      </p>

      <h2 style={h2Style}>
        Unsere Philosophie — Kompromisslose Qualität und ehrlicher Geschmack
      </h2>
      <p style={pStyle}>
        Das Geheimnis eines wirklich außergewöhnlichen Desserts liegt nicht in komplizierten Tricks, sondern in der absoluten Kompromisslosigkeit bei der Auswahl der Zutaten. Diese Philosophie ist tief in der DNA von Hey Fede! verankert. Wenn wir in der Wetzlarer Altstadt unsere Türen öffnen, dann mit dem sicheren Wissen, dass wir unseren Gästen nur das Beste vom Besten servieren. Wir wissen ganz genau, wo unsere Milch herkommt, welche Kakaobohnen für unsere Schokolade geröstet wurden und wie reif die Früchte sein müssen, bevor sie in unsere Küche gelangen. Es ist diese detailversessene Suche nach Qualität, die den entscheidenden Unterschied auf dem Teller ausmacht.
      </p>
      <p style={pStyle}>
        Wo immer es uns möglich ist, arbeiten wir eng mit regionalen Erzeugern aus Hessen zusammen. Kurze Lieferwege garantieren nicht nur die maximale Frische, sondern unterstützen auch die landwirtschaftlichen Betriebe in unserer direkten Umgebung. Im Sommer beziehen wir unsere Erdbeeren von Bauern aus der Region, deren Früchte unter der echten Sonne reifen durften und nicht in anonymen Gewächshäusern. Unsere Eier für die Teige stammen aus Freilandhaltung, und bei unserer Schokolade setzen wir auf fair gehandelte Premium-Kuvertüren, deren Schmelz und Geschmackstiefe unvergleichlich sind. 
      </p>
      <p style={pStyle}>
        Wir verzichten konsequent auf künstliche Konservierungsstoffe, industrielle Geschmacksverstärker oder billige Ersatzprodukte. Wenn bei uns etwas nach Vanille schmeckt, dann deshalb, weil wir echte Vanilleschoten verwenden, und nicht, weil ein künstliches Aroma aus dem Labor hinzugefügt wurde. Wir sind fest davon überzeugt, dass unsere Gäste diese Ehrlichkeit schmecken. Der menschliche Gaumen lässt sich nicht täuschen; er erkennt echte Butter, frische Sahne und reife Früchte sofort. Diese kompromisslose Qualität ist unser Versprechen an dich bei jedem einzelnen Besuch in unserer Dessertbar in der {BUSINESS.street}.
      </p>

      <h2 style={h2Style}>
        Inklusive Dessertkultur — Für jeden Lebensstil genau das Richtige
      </h2>
      <p style={pStyle}>
        Gastfreundschaft bedeutet für uns bei Hey Fede!, dass sich absolut jeder bei uns willkommen, sicher und kulinarisch verwöhnt fühlt. Wir wissen, dass Ernährung heutzutage so individuell ist wie die Menschen selbst. Ob ethische Überzeugungen, gesundheitliche Notwendigkeiten oder religiöse Vorschriften — wir haben es uns zur Aufgabe gemacht, eine inklusive Dessertkultur in Wetzlar zu etablieren. Niemand sollte am Tisch sitzen müssen und zusehen, während die anderen genießen, nur weil die Speisekarte keine passenden Optionen bietet.
      </p>
      <p style={pStyle}>
        Deshalb haben wir viel Zeit und Energie in die Entwicklung von veganen Alternativen investiert, die nicht wie ein Kompromiss schmecken, sondern voll und ganz überzeugen. Unser veganer Teig für Bubble Waffles und Crêpes wurde in unzähligen Testläufen so perfektioniert, dass er in Sachen Knusprigkeit und Geschmack dem Original in nichts nachsteht. Auch für unsere Gäste, die sich nach Halal-Richtlinien ernähren, achten wir bei der Auswahl unserer Produkte, Gelatinen und Soßen streng auf entsprechende Zertifizierungen und Inhaltsstoffe. Wir wollen, dass du mit einem guten Gefühl und absolut sorgenfrei bei uns bestellen kannst.
      </p>
      <p style={pStyle}>
        Gleiches gilt für Nahrungsmittelunverträglichkeiten und Allergien. Transparenz ist für uns nicht nur ein leeres Wort, sondern gelebte Praxis in unserer Dessertbar. Unser gesamtes Team in der Langgasse ist bestens geschult und kennt die genauen Inhaltsstoffe jedes einzelnen Produkts. Wir beantworten geduldig und kompetent jede Frage zu Gluten, Nüssen, Laktose oder anderen Allergenen. Wir beraten dich gerne zu Alternativen und achten bei der Zubereitung auf höchste Hygiene, um Kreuzkontaminationen zu vermeiden. Bei Hey Fede! in Wetzlar steht dein unbeschwerter Genuss im absoluten Mittelpunkt.
      </p>

      <h2 style={h2Style}>
        Die Jahreszeiten in unserer Dessertbar — Ein Rhythmus der frischen Aromen
      </h2>
      <p style={pStyle}>
        So wie sich das Gesicht der Wetzlarer Altstadt im Laufe des Jahres wandelt, so verändert sich auch die Speisekarte bei Hey Fede!. Wir lassen uns vom natürlichen Rhythmus der Jahreszeiten inspirieren und passen unsere Kreationen an das an, was die Natur uns in den verschiedenen Monaten schenkt. Diese ständige Erneuerung hält unsere Dessertbar lebendig und bietet unseren Stammgästen bei jedem Besuch in der {BUSINESS.street} die Möglichkeit, etwas völlig Neues zu entdecken und sich saisonal überraschen zu lassen.
      </p>
      <h3 style={h3Style}>Der Wetzlarer Frühling und Sommer</h3>
      <p style={pStyle}>
        Wenn der Winter sich zurückzieht und die ersten warmen Sonnenstrahlen das Kopfsteinpflaster der Altstadt erwärmen, erwacht auch bei uns eine neue Leichtigkeit. Der Frühling bringt frischen Rhabarber und die allerersten, tiefroten Erdbeeren auf unsere Karte. Unsere Desserts werden fruchtiger, spritziger und leichter. Im Hochsommer, wenn Wetzlar pulsiert und die Hitze sich in den Gassen staut, dreht sich bei uns alles um eisige Erfrischung. Unsere mächtigen Eisbecher und eiskalten Special Shakes mit tropischen Früchten wie Mango, Maracuja oder frischer Zitrone werden zu den unangefochtenen Bestsellern, die eine willkommene Abkühlung beim Stadtbummel bieten.
      </p>
      <h3 style={h3Style}>Der Herbst und Winter in der Altstadt</h3>
      <p style={pStyle}>
        Wenn die Tage kürzer werden und der Herbstwind das Laub über den Eisenmarkt weht, sehnen wir uns nach wohliger Wärme. Unsere Küche reagiert darauf mit Aromen, die tief im Inneren wärmen. Kürbis-Gewürze, karamellisierte Äpfel, geröstete Pekannüsse und großzügige Prisen von Zimt halten Einzug in unsere Teige. Im Winter, wenn der Wetzlarer Weihnachtsmarkt seine Tore öffnet und der Duft von Glühwein durch die Luft zieht, verwandelt sich Hey Fede! in eine besonders kuschlige Zuflucht. Lebkuchen-Toppings, Spekulatius-Crumbles, Kardamom und heiße Schokoladensoßen auf frisch gebackenen Pancakes bieten den perfekten, süßen Abschluss nach einem kalten Winterspaziergang.
      </p>
      <h3 style={h3Style}>Besondere Momente: Der Ramadan bei Hey Fede!</h3>
      <p style={pStyle}>
        Eine ganz besondere Zeit im Jahr ist für uns der Fastenmonat Ramadan. In dieser Zeit verwandelt sich unsere Dessertbar am Abend in einen lebhaften, freudigen Treffpunkt für das gemeinsame Iftar. Wir erweitern unsere Karte um spezielle, oft orientalisch inspirierte Süßspeisen, die sich perfekt für das Fastenbrechen eignen – mit Datteln, Honig, Pistazien und speziellen Teigkreationen. Es ist eine Zeit der starken Gemeinschaft und des intensiven Zusammenhalts, und wir sind zutiefst stolz darauf, dass Hey Fede! ein Ort ist, an dem Menschen verschiedenster Kulturen zusammenkommen, um gemeinsam zu genießen und zu feiern.
      </p>

      <h2 style={h2Style}>
        Dein Platz ist schon reserviert — Wir freuen uns auf deinen Besuch
      </h2>
      <p style={pStyle}>
        All diese Worte, all diese Beschreibungen der Düfte, Geschmäcker und der besonderen Atmosphäre in Wetzlar können das tatsächliche Erlebnis bei Hey Fede! am Ende doch nur erahnen lassen. Die wahre Magie entsteht erst, wenn du selbst bei uns in der {BUSINESS.street} durch die Tür trittst, wenn du das fröhliche Klappern der Teller hörst, den unwiderstehlichen Duft nach Waffeln in der Nase hast und den ersten warmen Bissen deiner Lieblingskreation probierst. Wir laden dich von ganzem Herzen ein, Teil unserer Geschichte zu werden. Komm vorbei, lass den Alltag für einen Moment hinter dir, finde deinen neuen Lieblingsplatz in unserer Dessertbar und lass dich von uns nach allen Regeln der Handwerkskunst verwöhnen. Dein Platz bei Hey Fede! in Wetzlar ist schon für dich reserviert — wir können es kaum erwarten, dich bei uns willkommen zu heißen!
      </p>
    </section>
  );
}
