import React from "react";
import { BUSINESS } from "@/lib/seo/business-data";
/* ──────────────────────────────────────────────────────────────────────
   VisitSEO — Long-form SEO content for /visit
   ~3 000 Wörter  ·  Cream background  ·  Calistoga h2  ·  Nunito text
   ──────────────────────────────────────────────────────────────────── */

const seoSectionStyle: React.CSSProperties = {
  maxWidth: 820,
  margin: "0 auto",
  padding: "0 24px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "Calistoga, serif",
  fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)",
  color: "#2d1f19",
  lineHeight: 1.14,
  marginBottom: 18,
  marginTop: 0,
};

const h3Style: React.CSSProperties = {
  fontFamily: "Calistoga, serif",
  fontSize: "clamp(1.15rem, 2.2vw, 1.55rem)",
  color: "#CC624C",
  lineHeight: 1.2,
  marginBottom: 12,
  marginTop: 32,
};

const pStyle: React.CSSProperties = {
  fontFamily: "Nunito, sans-serif",
  fontSize: "0.97rem",
  color: "#5c3d35",
  lineHeight: 1.88,
  marginBottom: 18,
};

const ulStyle: React.CSSProperties = {
  fontFamily: "Nunito, sans-serif",
  fontSize: "0.97rem",
  color: "#5c3d35",
  lineHeight: 1.88,
  marginBottom: 18,
  paddingLeft: 24,
  margin: "0 0 18px 0",
};

const liStyle: React.CSSProperties = {
  marginBottom: 8,
};

const dividerStyle: React.CSSProperties = {
  width: 60,
  height: 3,
  background: "linear-gradient(90deg, #CC624C, #E4C0A8)",
  borderRadius: 2,
  margin: "48px auto",
  border: "none",
};

export function VisitSEO() {
  return (
    <section
      aria-label="Hey Fede! besuchen — Anfahrt, Öffnungszeiten und Tipps"
      style={{ background: "#f5efe8", padding: "72px 0 80px" }}
    >
      <div style={seoSectionStyle} role="region">
        {/* ═══════════════════════════════════════════════════════════════
           A) WILLKOMMEN
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Willkommen in der Langgasse – Dein Zuhause für süße Momente in der
          Altstadt von Wetzlar
        </h2>
        <p style={pStyle}>
          Stell dir vor, du spazierst an einem entspannten Nachmittag durch die
          malerischen, von historischem Fachwerk gesäumten Gassen der Wetzlarer
          Altstadt. Deine Schritte hallen leise auf dem jahrhundertealten
          Kopfsteinpflaster wider, während du die besondere Atmosphäre dieser
          unvergleichlichen Stadt an der Lahn aufsaugst. Genau hier, inmitten
          dieses geschichtsträchtigen und gleichzeitig so lebendigen Umfelds,
          findest du uns: Hey Fede! in der {BUSINESS.street}. Wir sind nicht
          einfach nur ein Ort, an dem man Desserts isst. Wir sind ein Ort der
          Begegnung, ein warmer, einladender Rückzugsort, an dem du für einen
          Moment den Alltag hinter dir lassen und dich voll und ganz dem Genuss
          hingeben kannst. Die Langgasse selbst ist eine der schönsten und
          traditionsreichsten Straßen Wetzlars, eine Hauptader der Altstadt, die
          Besucher und Einheimische gleichermaßen anzieht. Hier trifft modernes
          Leben auf jahrhundertealte Tradition, und wir sind unglaublich stolz
          darauf, ein Teil dieser wunderbaren Gemeinschaft zu sein.
        </p>
        <p style={pStyle}>
          Wenn du dich unserer Tür näherst, wird dich vielleicht schon der
          unverwechselbare, warme Duft von frisch gebackenen Waffeln,
          geschmolzener Schokolade und aromatischem Kaffee begrüßen. Es ist ein
          Duft, der Erinnerungen weckt – an gemütliche Sonntagnachmittage bei
          den Großeltern, an ausgelassene Kindergeburtstage und an die pure,
          unbeschwerte Freude, die nur ein richtig gutes Dessert auslösen kann.
          Bei uns dreht sich alles um dieses Gefühl der Geborgenheit. Wir
          möchten, dass du eintrittst und dich sofort willkommen fühlst. Egal,
          ob du nach einem langen Arbeitstag eine süße Belohnung brauchst, ein
          romantisches Date planst, mit deinen Kindern einen besonderen
          Nachmittag verbringen möchtest oder einfach nur einen ruhigen Ort
          suchst, um ein gutes Buch zu lesen und dabei eine heiße Schokolade zu
          trinken – bei Hey Fede! bist du genau richtig. Wir haben diesen Ort
          mit viel Liebe zum Detail gestaltet, um eine Atmosphäre zu schaffen,
          die genauso herzlich, authentisch und einzigartig ist wie die Stadt
          Wetzlar selbst.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           B) SO FINDEST DU UNS
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          So findest du Hey Fede! – Ein Spaziergang durch unsere Lieblingsstadt
        </h2>
        <p style={pStyle}>
          Der Weg zu uns ist weit mehr als nur eine einfache Anreise – er ist
          bereits der Beginn deines kleinen Wetzlar-Erlebnisses. Die Altstadt
          von Wetzlar ist geprägt von einer beeindruckenden Kompaktheit und
          einer Fußgängerzone, die zum entspannten Flanieren einlädt. Wir
          empfehlen unseren Gästen immer, sich Zeit für den Weg zu nehmen, denn
          es gibt an fast jeder Ecke etwas Neues zu entdecken. Von historischen
          Gebäuden über kleine, inhabergeführte Boutiquen bis hin zu versteckten
          Innenhöfen – Wetzlar steckt voller Überraschungen.
        </p>
        <h3 style={h3Style}>
          Vom Bahnhof Wetzlar zu Fuß – Ein Weg, der sich lohnt
        </h3>
        <p style={pStyle}>
          Wenn du mit dem Zug in Wetzlar ankommst, hast du die perfekte
          Gelegenheit, die Stadt Schritt für Schritt auf dich wirken zu lassen.
          Vom Hauptbahnhof bis zu uns in die {BUSINESS.street} sind es etwa 1,2
          Kilometer – ein gemütlicher Spaziergang von rund 15 bis 20 Minuten,
          der dich direkt durch das Herz der Stadt führt. Wenn du das
          Bahnhofsgebäude verlässt, folgst du zunächst der Bahnhofstraße, die
          dich sanft in Richtung Zentrum leitet. Du passierst belebte Kreuzungen
          und spürst, wie die moderne Infrastruktur der Stadt allmählich der
          historischen Architektur weicht. Bald erreichst du die Lahn, den
          Fluss, der Wetzlar so maßgeblich prägt und der Stadt ihren
          unverwechselbaren, friedlichen Charakter verleiht.
        </p>
        <p style={pStyle}>
          Der Weg über die Lahnbrücke ist immer ein besonderer Moment. Nimm dir
          hier eine Minute Zeit, um innezuhalten. Schau hinab auf das ruhig
          fließende Wasser, beobachte die Enten und Schwäne, die hier ihre
          Bahnen ziehen, und lass den Blick über die Uferpromenaden schweifen.
          An sonnigen Tagen glitzert das Wasser, und im Herbst spiegeln sich die
          bunten Blätter der Bäume auf der Oberfläche. Wenn du die Brücke
          überquert hast, befindest du dich am Rande der Altstadt. Über den
          Karl-Kellner-Ring gelangst du schließlich in die Fußgängerzone. Ab
          hier tauchst du ein in die Welt der Wetzlarer Geschichte. Die Straßen
          werden schmaler, die Häuser älter und charmanter. Du schlenderst über
          die Krämerstraße, vorbei an kleinen Geschäften und gemütlichen Cafés,
          bis du schließlich die Langgasse erreichst. Folge ihr einfach weiter –
          du wirst unser einladendes Schaufenster und den fröhlichen Hey
          Fede!-Schriftzug schon bald entdecken.
        </p>
        <h3 style={h3Style}>
          Mit dem Bus sicher und entspannt in die Altstadt
        </h3>
        <p style={pStyle}>
          Wenn du lieber nicht so weit laufen möchtest oder das Wetter einmal
          nicht mitspielt, ist die Anreise mit dem Bus eine wunderbar bequeme
          und zuverlässige Alternative. Das Wetzlarer Busnetz ist hervorragend
          ausgebaut und verbindet alle umliegenden Stadtteile, Wohngebiete und
          wichtigen Knotenpunkte direkt mit dem Zentrum. Deine Zielhaltestelle
          für einen Besuch bei Hey Fede! ist der "Karl-Kellner-Ring". Diese
          zentrale Haltestelle wird von einer Vielzahl von Stadtbuslinien
          angefahren und liegt strategisch absolut perfekt, nur etwa 250 Meter
          von unserer Tür entfernt.
        </p>
        <p style={pStyle}>
          Sobald du am Karl-Kellner-Ring aus dem Bus steigst, befindest du dich
          bereits in unmittelbarer Nähe zur Fußgängerzone. Ein kurzer,
          ebenerdiger Fußweg führt dich direkt in die Altstadt. Du biegst
          einfach in die Krämerstraße ein, genießt die historische Atmosphäre,
          die dich sofort umfängt, und spazierst ganz entspannt weiter bis zur
          Langgasse. Besonders für Familien mit kleinen Kindern, ältere Menschen
          oder Gäste, die nach einem ausgiebigen Shopping-Tag nicht mehr lange
          laufen möchten, ist der Bus die ideale Lösung. Die Haltestellen in
          Wetzlar sind in der Regel barrierefrei ausgebaut, und aktuelle
          Fahrpläne lassen sich ganz einfach über die Apps des lokalen
          Verkehrsverbundes (RMV) oder direkt an den digitalen Anzeigen der
          Haltestellen abrufen. So kommst du vollkommen stressfrei bei uns an
          und kannst dich direkt auf dein Dessert freuen.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           C) PARKEN
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Der große Wetzlar-Park-Guide – Entspannt ankommen und genießen
        </h2>
        <p style={pStyle}>
          Wer mit dem Auto nach Wetzlar kommt, kennt vielleicht die kleine
          Herausforderung, die viele historische Städte mit sich bringen: Die
          Altstadt selbst ist verkehrsberuhigt und gehört den Fußgängern. Doch
          keine Sorge – Wetzlar hat dieses Thema hervorragend gelöst. Es gibt
          rund um die Altstadt eine Vielzahl von erstklassigen, gut
          ausgeschilderten und komfortablen Parkmöglichkeiten, die alle nur
          einen kurzen, schönen Spaziergang von uns entfernt liegen. Um dir die
          Anreise so einfach und entspannt wie möglich zu machen, haben wir hier
          einen umfassenden und unglaublich detaillierten Guide zu den besten
          Parkplätzen und Parkhäusern in unserer Nähe zusammengestellt. So weißt
          du genau, wo du dein Auto sicher abstellen kannst, und kannst deinen
          Besuch bei uns von der ersten Minute an in vollen Zügen genießen.
        </p>
        <h3 style={h3Style}>
          Parkplatz Domplatz – Der Klassiker im Herzen der Altstadt
        </h3>
        <p style={pStyle}>
          Wenn du so nah wie möglich am Geschehen parken möchtest, ist der
          Parkplatz direkt am Domplatz eine hervorragende, wenngleich oft gut
          besuchte Wahl. Dieser offene Parkplatz liegt buchstäblich im Herzen
          der Altstadt, direkt neben dem imposanten Wetzlarer Dom. Von hier aus
          sind es nur etwa 350 bis 400 Meter bis zu unserer Tür in der{" "}
          {BUSINESS.street}. Der Fußweg führt dich über das wunderschöne
          historische Pflaster, vorbei an ehrwürdigen Gebäuden und direkt durch
          das Zentrum der Altstadt.
        </p>
        <p style={pStyle}>
          Ein kleiner Tipp für dich: Da der Domplatz-Parkplatz sehr zentral
          liegt, ist er besonders an Samstagen oder während großer
          Veranstaltungen in der Stadt oft schnell besetzt. Wenn du jedoch an
          einem Dienstag-, Mittwoch- oder Donnerstagnachmittag zu uns kommst,
          stehen die Chancen meist sehr gut, hier einen bequemen Stellplatz zu
          finden. Vergiss nicht, ein gültiges Parkticket am Automaten zu ziehen,
          da hier regelmäßig kontrolliert wird. Der kurze Spaziergang vom
          Domplatz zu Hey Fede! ist ein Erlebnis für sich und stimmt dich
          perfekt auf eine süße Auszeit ein.
        </p>
        <h3 style={h3Style}>
          Parkhaus Forum Wetzlar – Perfekt für längere Ausflüge
        </h3>
        <p style={pStyle}>
          Planst du einen ausgedehnten Tag in Wetzlar, möchtest vielleicht erst
          ein wenig einkaufen, dann gemütlich durch die Altstadt schlendern und
          den Tag bei uns mit einer herrlichen Bubble Waffle abschließen? Dann
          ist das Parkhaus im Einkaufszentrum "Forum Wetzlar" zweifellos die
          beste Wahl für dich. Dieses moderne, großzügig angelegte Parkhaus
          bietet Hunderte von überdachten, breiten Stellplätzen, verfügt über
          spezielle Familien- und Frauenparkplätze und ist durchgehend geöffnet.
        </p>
        <p style={pStyle}>
          Vom Forum aus läufst du etwa 600 bis 800 Meter bis in die Langgasse.
          Der Weg ist dabei alles andere als langweilig. Du verlässt das moderne
          Einkaufszentrum, spazierst in Richtung Lahn, überquerst den Fluss über
          eine der Brücken und betrittst die Altstadt quasi durch ihr
          natürliches "Tor". Es ist ein wunderschöner Übergang von der modernen
          Shopping-Welt hinein in das historische, gemütliche Flair der
          Altstadt. Das Forum Wetzlar bietet zudem den Vorteil, dass du dir über
          die Parkdauer keine großen Gedanken machen musst – dein Auto steht
          sicher, im Trockenen und im Sommer angenehm kühl, während du ganz
          entspannt Wetzlar erkundest.
        </p>
        <h3 style={h3Style}>
          Parkplatz Lahninsel – Romantisch, naturnah und wunderschön
        </h3>
        <p style={pStyle}>
          Unser absoluter Geheimtipp für alle, die Natur und Romantik lieben,
          ist der Parkplatz auf der Lahninsel. Dieser idyllische Parkplatz liegt
          – wie der Name schon sagt – auf einer kleinen Insel im Fluss, umgeben
          von alten, schattenspendenden Bäumen und dem beruhigenden Rauschen des
          Wassers. Wenn du dein Auto hier abstellst, beginnt dein
          Wetzlar-Erlebnis sofort mit einem Hauch von Urlaub.
        </p>
        <p style={pStyle}>
          Der Fußweg von der Lahninsel zu uns in die Langgasse beträgt etwa 500
          Meter und ist wahrscheinlich der landschaftlich schönste Weg in die
          Altstadt. Du überquerst eine kleine Fußgängerbrücke, von der aus du
          einen fantastischen Blick auf die historischen Gebäude am Ufer hast.
          Oft kannst du Kanufahrer oder Stand-Up-Paddler auf der Lahn
          beobachten. Von dort aus gehst du sanft bergauf in die Fußgängerzone.
          Dieser Parkplatz ist nicht nur unglaublich malerisch, sondern oft auch
          eine stressfreie Alternative an gut besuchten Wochenenden, wenn die
          Parkplätze direkt in der Altstadt knapper werden.
        </p>
        <h3 style={h3Style}>
          Parkhaus Altstadt (Am Stadion) – Die praktische Alternative
        </h3>
        <p style={pStyle}>
          Eine weitere, oft übersehene, aber äußerst praktische Möglichkeit ist
          das Parkhaus Altstadt, das sich in der Nähe des Stadions befindet. Es
          bietet eine hervorragende Kapazität und ist tariflich oft sehr
          attraktiv gestaltet. Von hier aus näherst du dich der Altstadt von
          einer leicht erhöhten Position, was dir beim Spaziergang zu uns
          wunderbare Ausblicke auf die Dächer von Wetzlar beschert. Der Weg
          hinab in die Fußgängerzone ist entspannt, und nach etwa 10 bis 15
          Minuten Gehzeit hast du die Langgasse und damit auch Hey Fede!
          erreicht. Es ist eine verlässliche Option für jeden Tag der Woche und
          bietet eine gute Anbindung an die großen Einfallstraßen der Stadt.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           D) WETZLAR ERLEBEN
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Wetzlar erleben – Kultur, Geschichte und das perfekte Dessert
        </h2>
        <p style={pStyle}>
          Einer der schönsten Aspekte von Hey Fede! ist unsere unschlagbare
          Lage. Wenn du zu uns kommst, besuchst du nicht nur ein Dessert-Café,
          sondern du tauchst ein in eine Stadt, die über Jahrhunderte hinweg
          Geschichte geschrieben hat. Wetzlar war einst eine freie Reichsstadt
          und Sitz des Reichskammergerichts, des höchsten Gerichts im Heiligen
          Römischen Reich. Große Dichter, Denker und Erfinder haben hier ihre
          Spuren hinterlassen. Ein Besuch bei uns lässt sich daher geradezu
          perfekt mit einer Entdeckungstour durch die Stadt verbinden. Wir haben
          für dich die absoluten Highlights zusammengestellt, die du vor oder
          nach deinem Dessert-Genuss auf keinen Fall verpassen solltest.
        </p>
        <h3 style={h3Style}>
          Der Wetzlarer Dom – Ein unvergleichliches Meisterwerk der Architektur
        </h3>
        <p style={pStyle}>
          Nur einen Steinwurf – genauer gesagt etwa 350 Meter – von uns entfernt
          thront der imposante Wetzlarer Dom, offiziell der Dom Unserer Lieben
          Frau. Wenn du vor diesem massiven Bauwerk stehst, wird dir sofort
          auffallen, dass etwas anders ist: Der Dom wirkt unfertig. Und das ist
          er tatsächlich! Über Jahrhunderte hinweg wurde an ihm gebaut, doch die
          Arbeiten wurden nie vollständig abgeschlossen. Das Ergebnis ist eine
          absolut faszinierende, beinahe wilde Mischung aus romanischer und
          gotischer Architektur.
        </p>
        <p style={pStyle}>
          Du kannst die verschiedenen Baustile direkt an der Fassade ablesen.
          Der Dom ist nicht nur ein beeindruckendes Fotomotiv, sondern auch ein
          Ort tiefer Ruhe und Besinnung inmitten der lebhaften Altstadt. Nimm
          dir die Zeit, das Innere zu besichtigen, die beeindruckenden
          Glasfenster zu bewundern und die Stille zu genießen. Danach ist der
          Weg zu Hey Fede! für einen wärmenden Kaffee und eine frisch gebackene
          Waffel der perfekte Kontrast, um das Gesehene in gemütlicher
          Atmosphäre nachwirken zu lassen.
        </p>
        <h3 style={h3Style}>Das Lottehaus und Goethes romantische Spuren</h3>
        <p style={pStyle}>
          Kein Name ist so eng mit der Romantik in Wetzlar verbunden wie der von
          Johann Wolfgang von Goethe. Im Jahr 1772 kam der damals noch
          unbekannte, junge Goethe als Praktikant an das Wetzlarer
          Reichskammergericht. Hier verliebte er sich unsterblich in Charlotte
          Buff, eine Liebe, die unerfüllt bleiben sollte, da "Lotte" bereits
          verlobt war. Diese leidenschaftliche und tragische Erfahrung
          inspirierte ihn zu seinem Weltbestseller "Die Leiden des jungen
          Werthers", ein Buch, das eine ganze Generation prägte und Wetzlar auf
          einen Schlag berühmt machte.
        </p>
        <p style={pStyle}>
          Das Lottehaus, das ehemalige Wohnhaus der Familie Buff, liegt nur rund
          200 Meter von Hey Fede! entfernt. Es ist heute ein wunderschön
          hergerichtetes Museum, das dich direkt in das 18. Jahrhundert
          zurückversetzt. Du kannst durch die original erhaltenen Räume wandern,
          persönliche Gegenstände von Charlotte betrachten und die Atmosphäre
          spüren, die einst Goethe inspirierte. Ein Spaziergang auf Goethes
          Spuren durch Wetzlar, gekrönt von einem anschließenden Besuch bei uns,
          ist ein fantastisches Programm für Geschichtsinteressierte,
          Schulklassen oder Paare, die einen romantischen Nachmittag verbringen
          möchten.
        </p>
        <h3 style={h3Style}>
          Die Alte Lahnbrücke – Romantik pur über dem fließenden Wasser
        </h3>
        <p style={pStyle}>
          Wenn du dem Trubel der Gassen für einen Moment entfliehen möchtest,
          empfehlen wir dir einen kurzen Spaziergang zur Alten Lahnbrücke. Sie
          gehört zu den ältesten erhaltenen Brücken Hessens und überspannt den
          Fluss mit mehreren eleganten Steinbögen. Früher war sie ein wichtiger
          Handelsweg und ein Nadelöhr für Kaufleute aus aller Welt. Heute ist
          sie einer der friedlichsten und malerischsten Orte der Stadt.
        </p>
        <p style={pStyle}>
          Besonders am späten Nachmittag oder in den frühen Abendstunden, wenn
          die tief stehende Sonne das Wasser der Lahn in ein goldenes Licht
          taucht, entfaltet die Brücke ihren ganzen Zauber. Es ist der perfekte
          Ort für ein Erinnerungsfoto oder einfach, um Arm in Arm zu stehen und
          aufs Wasser zu schauen. Von der Brücke aus bist du in weniger als zehn
          Minuten wieder bei uns in der Langgasse. Hol dir doch einfach einen
          unserer cremigen Shakes To-Go und genieße ihn bei einem Spaziergang
          über dieses historische Wahrzeichen.
        </p>
        <h3 style={h3Style}>
          Der Eisenmarkt – Das historische Herzstück der Altstadt
        </h3>
        <p style={pStyle}>
          Nur etwa 100 Meter von Hey Fede! entfernt öffnet sich die Langgasse
          zum Eisenmarkt. Dieser kleiner, aber ungemein charmante Platz ist das
          heimliche Zentrum der Wetzlarer Altstadt. Umgeben von kunstvoll
          verzierten Fachwerkhäusern, von denen jedes seine eigene Geschichte
          erzählt, fühlt man sich hier wie in einer anderen Zeit. In der Mitte
          des Platzes plätschert friedlich ein historischer Brunnen.
        </p>
        <p style={pStyle}>
          Der Eisenmarkt war über Jahrhunderte hinweg ein zentraler
          Handelsplatz. Heute ist er ein beliebter Treffpunkt, umgeben von
          kleinen Boutiquen und der perfekten Kulisse für ausgiebige
          Altstadtbummel. Der Platz strahlt eine unglaubliche Gemütlichkeit aus.
          Wenn du von hier aus weitergehst, wirst du unweigerlich das Gefühl
          haben, dass die Uhren in Wetzlar ein wenig langsamer, ein wenig
          entspannter ticken. Und genau dieses Gefühl möchten wir dir auch in
          unserem Café vermitteln.
        </p>
        <h3 style={h3Style}>Lokale Events und Feste in der Altstadt</h3>
        <p style={pStyle}>
          Wetzlar ist eine Stadt, die weiß, wie man feiert, und die Altstadt ist
          regelmäßig Schauplatz wunderbarer Feste und Märkte. Ob das
          traditionelle Ochsenfest, das Menschen aus der ganzen Region anzieht,
          der fröhliche Gallusmarkt im Herbst mit seinen bunten Ständen und
          Fahrgeschäften oder der zauberhafte Wetzlarer Weihnachtsmarkt – zu
          diesen Zeiten verwandelt sich die Innenstadt in ein magisches
          Lichtermeer.
        </p>
        <p style={pStyle}>
          Während dieser Events ist die Langgasse besonders belebt, und ein
          Besuch bei Hey Fede! wird zum perfekten Aufwärm-Stopp an kalten
          Wintertagen oder zur süßen Erfrischung während sommerlicher
          Stadtfeste. Wenn du deinen Besuch bei uns planst, lohnt es sich immer,
          einen Blick auf den Veranstaltungskalender der Stadt zu werfen. So
          kannst du ein grandioses Altstadt-Event mit unseren himmlischen
          Desserts kombinieren und den Tag absolut unvergesslich machen.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           E) ÖFFNUNGSZEITEN
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Unsere Öffnungszeiten – Der perfekte Zeitpunkt für deinen Besuch
        </h2>
        <p style={pStyle}>
          Wir möchten, dass Hey Fede! genau dann für dich da ist, wenn du Lust
          auf etwas Besonderes hast. Gleichzeitig legen wir größten Wert auf
          Frische, Qualität und eine liebevolle Vorbereitung all unserer
          Kreationen. Daher haben wir unsere Öffnungszeiten so gestaltet, dass
          wir dir an den geöffneten Tagen stets das bestmögliche, frischeste und
          leckerste Erlebnis bieten können. Hier findest du eine detaillierte
          Übersicht darüber, wann wir für dich da sind und welche Atmosphäre
          dich an den verschiedenen Tagen erwartet.
        </p>
        <h3 style={h3Style}>Montag und Dienstag – Unsere kreativen Ruhetage</h3>
        <p style={pStyle}>
          An Montagen und Dienstagen bleiben die Türen von Hey Fede!
          geschlossen. Diese zwei Tage sind für uns unglaublich wichtig. Wir
          nutzen diese Zeit nicht nur, um durchzuatmen, sondern vor allem, um
          hinter den Kulissen aktiv zu sein. Wir testen neue Rezepte, verfeinern
          unsere hausgemachten Soßen, organisieren frische Zutaten von unseren
          Lieferanten und bereiten alles mit größter Sorgfalt für die kommende
          Woche vor. Auch wenn wir an diesen Tagen keine Gäste empfangen, fließt
          hier die kreative Energie, die du dann ab Mittwoch auf deinem Teller
          schmeckst.
        </p>
        <h3 style={h3Style}>
          Mittwoch bis Freitag – Die perfekten Nachmittage für eine süße Auszeit
        </h3>
        <p style={pStyle}>
          Von Mittwoch bis Freitag öffnen wir unsere Türen pünktlich von 12:00
          bis 19:00 Uhr. Diese Tage sind besonders bei jenen beliebt, die dem
          hektischen Alltag für eine Weile entfliehen möchten. Die Altstadt ist
          unter der Woche etwas ruhiger, das Tempo ist gedrosselt. Es ist die
          perfekte Zeit für ein entspanntes Date, ein ungestörtes Gespräch mit
          der besten Freundin oder einfach, um sich nach einem anstrengenden
          Arbeitstag oder nach der Schule selbst zu belohnen. Die Stimmung ist
          familiär, und oft bleibt an diesen Tagen auch ein wenig mehr Zeit für
          einen kurzen, persönlichen Plausch mit unserem Team.
        </p>
        <h3 style={h3Style}>
          Der Samstag – Buntes Treiben, Wochenmarkt und pure Lebensfreude
        </h3>
        <p style={pStyle}>
          Samstags (ebenfalls 12:00 bis 19:00 Uhr) pulsiert das Leben in
          Wetzlar! Es ist der klassische Markttag, die Gassen sind erfüllt von
          fröhlichen Stimmen, Familien sind beim Wochenendeinkauf, und Touristen
          erkunden die Stadt. An Samstagen brummt der Laden, es wird gelacht,
          bestellt und genossen. Die Energie ist ansteckend, und es gibt kaum
          etwas Schöneres, als sich nach einem ausgiebigen Shopping-Marathon in
          der Fußgängerzone bei uns in den Sessel fallen zu lassen und sich eine
          unserer aufwendigen, prall gefüllten Bubble Waffles zu gönnen. Wenn du
          das lebhafte, urbane Gefühl der Altstadt liebst, ist der Samstag dein
          Tag für einen Besuch.
        </p>
        <h3 style={h3Style}>
          Der Sonntag – Entschleunigung pur und Zeit für die Familie
        </h3>
        <p style={pStyle}>
          Der Sonntag ist in Wetzlar traditionell der Tag der Ruhe und der
          Familienausflüge. Von 13:00 bis 19:00 Uhr sind wir für dich da.
          Sonntage bei Hey Fede! haben eine ganz eigene, fast schon magische
          Atmosphäre. Nach einem ausgiebigen Sonntagsspaziergang an der Lahn
          oder einem späten Frühstück zu Hause kommen viele Familien und Paare
          zu uns, um den Tag gemütlich ausklingen zu lassen. Es ist die Zeit der
          großen Tische, der leuchtenden Kinderaugen und des gemeinsamen
          Genießens. Ein Sonntag ohne ein fantastisches Dessert ist schließlich
          nur ein halber Sonntag.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           F) TAKE-AWAY
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Take-Away, Picknick-Spots und Lieferung direkt zu dir nach Hause
        </h2>
        <p style={pStyle}>
          Wir lieben es, dich bei uns im Café als Gast zu begrüßen. Doch wir
          wissen auch, dass es Momente gibt, in denen man sein Dessert lieber
          unter freiem Himmel, im Park auf einer Decke oder gemütlich in den
          eigenen vier Wänden auf der heimischen Couch genießen möchte. Genau
          deshalb haben wir unser Angebot so flexibel wie möglich gestaltet.
          Alle unsere Köstlichkeiten, von den kunstvoll gefüllten Bubble Waffles
          bis hin zu unseren cremigen Shakes, gibt es selbstverständlich auch
          zum Mitnehmen. Sie werden mit derselben Liebe zum Detail zubereitet
          und sicher verpackt, sodass sie auch unterwegs nichts von ihrem
          Geschmack und ihrer Schönheit einbüßen.
        </p>
        <h3 style={h3Style}>Die schönsten Picknick-Spots rund um Hey Fede!</h3>
        <p style={pStyle}>
          Wetzlar ist eine grüne Stadt, die zahlreiche wunderschöne Parks und
          Anlagen bietet – ideal für ein süßes Picknick an der frischen Luft.
          Wenn du dir dein Dessert bei uns als Take-Away holst, empfehlen wir
          dir besonders die Colchester-Anlage. Dieser weitläufige, gepflegte
          Park direkt am Ufer der Lahn ist nur wenige Gehminuten von der
          Langgasse entfernt. Hier kannst du dich ins weiche Gras setzen, dem
          Plätschern des Wassers lauschen und deine Waffel in absoluter Ruhe
          genießen.
        </p>
        <p style={pStyle}>
          Eine weitere fantastische Option ist die Avignon-Anlage, die mit ihren
          schönen Blumenbeeten und alten Bäumen ein besonders romantisches Flair
          verströmt. Auch die Stufen am Rande des Kornmarkts oder die Bänke rund
          um den Domplatz bieten großartige Möglichkeiten, sich kurz
          niederzulassen, das Treiben der Altstadt zu beobachten und dabei einen
          unserer erfrischenden Drinks zu schlürfen. Egal für welchen Ort du
          dich entscheidest – Wetzlar bietet die perfekte Kulisse für jeden
          Freiluft-Genießer.
        </p>
        <h3 style={h3Style}>Lieferando – Dein Dessert kommt direkt zu dir</h3>
        <p style={pStyle}>
          Manchmal möchte man das Haus einfach nicht verlassen. Es regnet, der
          Filmabend ist bereits im vollen Gange, oder man liegt am Sonntag
          gemütlich im Bett und hat plötzlich unglaubliche Lust auf etwas Süßes.
          Für genau diese Momente haben wir unsere Partnerschaft mit Lieferando
          eingerichtet. Du kannst unser gesamtes Sortiment ganz unkompliziert
          über die App oder die Website zu dir nach Hause bestellen.
        </p>
        <p style={pStyle}>
          Das Besondere daran: Wir berechnen keine Liefergebühren! Dein Dessert
          wird erst zubereitet, wenn der Fahrer fast bei uns ist, damit alles so
          warm, knusprig und frisch wie möglich bei dir ankommt. Wir verwenden
          für die Lieferung spezielle, umweltfreundliche Verpackungen, die dafür
          sorgen, dass das Eis kalt und die Waffel warm bleibt. Es ist der
          ultimative Komfort für alle, die das Hey Fede!-Erlebnis in ihren
          eigenen vier Wänden genießen möchten. Einfach bestellen, zurücklehnen
          und freuen.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           G) EVENTS
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Familien, Gruppen, Kindergeburtstage & Besondere Anlässe
        </h2>
        <p style={pStyle}>
          Ein Dessert ist immer auch ein Stück Lebensfreude, und Lebensfreude
          teilt man am besten mit anderen. Hey Fede! ist nicht nur ein Ort für
          das schnelle Dessert zwischendurch, sondern eine fantastische
          Location, um besondere Momente gemeinsam zu feiern. Ob es der fünfte
          Geburtstag deines Kindes ist, ein entspanntes Get-together mit den
          Kollegen nach einem langen Projekt oder ein runder Geburtstag im
          Familienkreis – wir sorgen dafür, dass euer Event süß und
          unvergesslich wird.
        </p>
        <h3 style={h3Style}>
          Strahlende Kinderaugen beim perfekten Kindergeburtstag
        </h3>
        <p style={pStyle}>
          Kinder lieben Hey Fede! – und das beruht absolut auf Gegenseitigkeit.
          Die bunten Farben, die unzähligen Toppings von Schokolinsen über
          Gummibärchen bis hin zu frischen Erdbeeren, und die Möglichkeit, sich
          sein ganz persönliches Traum-Dessert zusammenzustellen, machen unser
          Café zu einem wahren Paradies für die Kleinen. Wenn du einen
          Kindergeburtstag bei uns feiern möchtest, bieten wir euch ein rundum
          sorglos Paket.
        </p>
        <p style={pStyle}>
          Wir reservieren einen großen, gemütlichen Bereich für euch. Jedes Kind
          bekommt die Möglichkeit, seine eigene Bubble Waffle oder seine
          Pancakes nach Herzenslust am Tisch selbst mit bunten Streuseln, Soßen
          und Toppings zu dekorieren – ein interaktives Erlebnis, das
          unglaublich viel Spaß macht und für leuchtende Augen sorgt. Die Eltern
          können sich derweil entspannt zurücklehnen, einen fantastischen Kaffee
          genießen und dem fröhlichen Treiben zusehen, ohne sich am Ende um das
          Aufräumen der Küche kümmern zu müssen. Sprecht uns einfach frühzeitig
          an, damit wir die Details für euren perfekten Kindergeburtstag
          gemeinsam planen können!
        </p>
        <h3 style={h3Style}>Teamevents und Firmenfeiern mal anders</h3>
        <p style={pStyle}>
          Wer sagt eigentlich, dass Teamevents immer in dunklen Bars oder bei
          einem klassischen Abendessen stattfinden müssen? Ein gemeinsamer
          Nachmittag bei Hey Fede! ist eine erfrischende, kreative und
          unglaublich motivierende Alternative. Es bricht das Eis, wenn der Chef
          sich eine Waffel mit extra viel Schokoladensoße gönnt und die Kollegen
          sich über die besten Topping-Kombinationen austauschen. Wir haben
          bereits viele kleine Teams, Start-ups und Abteilungen lokaler
          Unternehmen bei uns begrüßen dürfen, die nach einem Workshop oder als
          Jahresabschluss bei uns gefeiert haben. Wir können individuelle
          Dessert-Pakete zusammenstellen, Getränke vorbereiten und dafür sorgen,
          dass euer Team-Ausflug ein voller Erfolg wird.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           H) BARRIEREFREIHEIT
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Barrierefreiheit, Inklusion & Unser herzliches Service-Versprechen
        </h2>
        <p style={pStyle}>
          Gastfreundschaft bedeutet für uns, dass jeder Mensch bei uns nicht nur
          willkommen, sondern bestens aufgehoben ist. Wir haben Hey Fede! von
          Anfang an mit dem Gedanken der Inklusion und Zugänglichkeit geplant,
          denn Genuss darf keine Hürden kennen.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Barrierefreier Zugang:</strong> Unser Eingang in der{" "}
            {BUSINESS.street} ist ebenerdig gestaltet. Es gibt keine lästigen
            Stufen an der Tür, sodass der Zugang für Rollstuhlfahrer, Menschen
            mit Gehhilfen oder Rollatoren sowie für Familien mit Kinderwagen
            absolut problemlos und sicher möglich ist. Auch im Innenraum haben
            wir darauf geachtet, breite Durchgänge zwischen den Tischen zu
            lassen, damit man sich komfortabel bewegen kann.
          </li>
          <li style={liStyle}>
            <strong>Kinder- und Familienfreundlichkeit:</strong> Familien sind
            bei uns immer herzlich willkommen. Wir stellen gerne Hochstühle zur
            Verfügung, haben ausreichend Platz für Kinderwagen und unser Team
            hat immer ein Lächeln und Verständnis für die kleinen, lebhaften
            Gäste übrig. Wir wissen, dass ein Besuch mit kleinen Kindern
            manchmal turbulent sein kann – bei uns dürft ihr euch entspannen.
          </li>
          <li style={liStyle}>
            <strong>Hunde sind willkommen:</strong> Als echte Tierfreunde wissen
            wir, dass der Hund oft zur Familie gehört. Gut erzogene Vierbeiner
            sind bei uns im Café gern gesehene Gäste. Frisches Wasser für deinen
            treuen Begleiter stellen wir auf Anfrage selbstverständlich und
            gerne zur Verfügung, damit auch er sich nach dem Spaziergang durch
            die Altstadt erfrischen kann.
          </li>
          <li style={liStyle}>
            <strong>Kostenloses WLAN und Kartenzahlung:</strong> In unserer
            modernen Welt ist Vernetzung wichtig. Deshalb bieten wir all unseren
            Gästen schnelles, kostenfreies WLAN an. Du kannst ganz entspannt
            arbeiten, deine Lieblingsmusik hören oder – worüber wir uns
            besonders freuen – direkt ein Foto deines wunderschönen Desserts auf
            Instagram teilen und uns markieren. An der Kasse bist du völlig
            flexibel: Wir akzeptieren neben Bargeld alle gängigen EC- und
            Kreditkarten sowie kontaktlose Zahlungsarten per Smartphone oder
            Smartwatch.
          </li>
        </ul>
        <p style={pStyle}>
          Letztendlich ist es unser größtes Ziel, dir ein Lächeln ins Gesicht zu
          zaubern. Unser Team steht dir jederzeit zur Seite, berät dich
          leidenschaftlich gern bei der Auswahl deiner Desserts und teilt
          vielleicht sogar den einen oder anderen Geheimtipp zu Wetzlar mit dir.
          Wir lieben das, was wir tun, wir lieben unsere Stadt, und wir freuen
          uns unglaublich darauf, dich bald bei uns in der {BUSINESS.street}{" "}
          begrüßen zu dürfen. Komm vorbei, mach es dir gemütlich, lass den
          Alltag draußen und genieße deinen perfekten Moment bei Hey Fede!
        </p>
      </div>
    </section>
  );
}
