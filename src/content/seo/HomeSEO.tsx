import React from 'react';

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
      {/* ——— A) Hey Fede! — Deine Dessertbar im Herzen von Wetzlar ——— */}
      <h2 style={h2Style}>
        Hey Fede! — Deine Dessertbar im Herzen von Wetzlar
      </h2>
      <p style={pStyle}>
        Mitten in der Wetzlarer Altstadt, direkt in der lebhaften Langgasse 68,
        liegt ein Ort, der Dessert-Liebhaber und Genussmenschen gleichermaßen
        zum Strahlen bringt: Hey Fede! — unsere Dessertbar, geboren aus der
        Leidenschaft für süße Kreationen und dem Wunsch, Wetzlar um einen
        einzigartigen kulinarischen Treffpunkt zu bereichern. Wenn du durch die
        Fußgängerzone schlenderst, den historischen Charme der Altstadt auf dich
        wirken lässt und dann den warmen Duft von frisch gebackenen Waffeln und
        Crêpes wahrnimmst — dann bist du bei uns angekommen.
      </p>
      <p style={pStyle}>
        Wir haben Hey Fede! mit einer ganz klaren Vision gegründet: Wir wollen
        ein Stück Dolce Vita nach Wetzlar bringen. Bei uns ist jeder willkommen —
        ob du alleine auf einen schnellen Kaffee vorbeikommst, mit deinen
        Freundinnen und Freunden eine unserer Fede Boxen teilst oder einen
        romantischen Abend mit einem aufwendig dekorierten Eisbecher ausklingen
        lässt. Unsere Dessertbar ist mehr als nur ein Geschäft; sie ist ein
        Treffpunkt, ein Feel-Good-Ort, ein zweites Wohnzimmer für alle, die
        Süßes lieben.
      </p>
      <p style={pStyle}>
        Die Atmosphäre in unserer Dessertbar in der Langgasse ist etwas
        Besonderes: warme Töne, liebevolle Details, Instagram-taugliche
        Präsentation — und doch gemütlich genug, um stundenlang zu sitzen und zu
        plaudern. Wetzlar hat mit seinen verwinkelten Gassen und historischen
        Gebäuden einen ganz eigenen Zauber, und wir sind stolz darauf, ein Teil
        dieser Altstadt-Community zu sein. Komm vorbei, setz dich hin und lass
        dich verwöhnen — genau dafür sind wir hier, mitten im Herzen von
        Wetzlar.
      </p>

      {/* ——— B) Was uns besonders macht ——— */}
      <h2 style={h2Style}>Was uns besonders macht</h2>
      <p style={pStyle}>
        Bei Hey Fede! in Wetzlar ist alles handgemacht — und das meinen wir
        wirklich so. Jeden Morgen beginnt unser Team damit, frische Teige
        anzurühren, Soßen von Hand zu kochen und Toppings liebevoll
        vorzubereiten. Wir verwenden keine Fertigmischungen, keine
        Industrieprodukte und keine Abkürzungen. Wenn du bei uns in eine Bubble
        Waffle beißt, schmeckst du den Unterschied, den echte Handarbeit macht.
        Hier in der Langgasse 68 steckt in jedem Dessert die ganze Liebe
        unseres Teams.
      </p>
      <p style={pStyle}>
        Frische und Qualität stehen für uns an erster Stelle. Wo immer möglich,
        setzen wir auf Bio-Zutaten und beziehen Produkte von regionalen
        Lieferanten. Die Erdbeeren im Sommer kommen aus der Region, die Milch
        für unsere Shakes ist hochwertig und frisch, und unsere Schokoladen
        wählen wir sorgfältig aus. Wir glauben daran, dass gutes Essen mit
        guten Zutaten beginnt — und das gilt besonders für Desserts, bei denen
        jeder einzelne Geschmack zählt.
      </p>
      <p style={pStyle}>
        Hinter Hey Fede! steht Federica — und ihre persönliche Note spürst du
        überall. Von der Auswahl der Rezepte bis zur Dekoration jedes einzelnen
        Desserts: Federica bringt ihre italienische Leidenschaft für gutes Essen
        mit dem Wetzlarer Lebensgefühl zusammen. Jede neue Kreation wird erst
        getestet, verfeinert und noch einmal getestet, bevor sie auf unsere
        Karte kommt. Dieses Herzblut ist es, das unsere Dessertbar in der
        Wetzlarer Fußgängerzone so einzigartig macht — jedes Dessert erzählt
        eine kleine Geschichte.
      </p>

      {/* ——— C) Unsere Spezialitäten im Überblick ——— */}
      <h2 style={h2Style}>Unsere Spezialitäten im Überblick</h2>
      <p style={pStyle}>
        Bei Hey Fede! in Wetzlar bieten wir eine vielseitige Dessertkarte, die
        für jeden Geschmack etwas bereithält. Von asiatisch inspirierter
        Straßenküche bis zum klassischen französischen Crêpe — bei uns
        verbinden sich Traditionen aus aller Welt mit frischen Zutaten aus der
        Region. Hier ein Überblick über das, was dich in der Langgasse 68
        erwartet:
      </p>

      <h3 style={h3Style}>Bubble Waffles</h3>
      <p style={pStyle}>
        Unsere Bubble Waffles sind das Herzstück von Hey Fede! und ein
        absolutes Highlight in der Wetzlarer Dessert-Szene. Ursprünglich als
        sogenannte Egg Waffles in den Straßen von Hongkong entstanden, haben
        wir diese Tradition nach Wetzlar geholt und für dich neu interpretiert.
        Der knusprige Teig formt sich in kleinen Blasen, die von außen kross und
        innen weich sind — ein Mundgefühl, das süchtig macht. Jede Bubble
        Waffle wird frisch nach deiner Bestellung zubereitet und kann mit Eis,
        frischen Früchten, Sahne, Schokosoße, Karamell und vielen weiteren
        Toppings kombiniert werden.
      </p>

      <h3 style={h3Style}>Crêpes</h3>
      <p style={pStyle}>
        Unsere Crêpes werden nach französischer Art zubereitet — der Teig
        hauchzart, die Füllung großzügig. In unserer Dessertbar in der
        Wetzlarer Altstadt bekommst du sowohl süße als auch herzhafte
        Varianten: von klassisch mit Nutella und Banane bis hin zu raffinierten
        Kombinationen mit Beeren, weißer Schokolade oder saisonalen Zutaten.
        Jeder Crêpe wird direkt vor deinen Augen auf der heißen Platte
        zubereitet — frischer geht es nicht.
      </p>

      <h3 style={h3Style}>Pancakes</h3>
      <p style={pStyle}>
        Fluffig, golden und wunderbar vielseitig — unsere Pancakes sind der
        perfekte Begleiter für einen entspannten Nachmittag in Wetzlar. Wir
        servieren sie als großzügig gestapelte Türme mit einer Auswahl an
        Toppings: von frischen Früchten und Ahornsirup bis zu Schokostücken und
        Karamellsoße. Der Teig wird jeden Tag frisch in unserer Küche in der
        Langgasse angerührt — für den unverwechselbar fluffigen Biss, den du
        nur bei Hey Fede! bekommst.
      </p>

      <h3 style={h3Style}>Eisbecher 500ml</h3>
      <p style={pStyle}>
        Unsere großzügigen 500-ml-Eisbecher gehören zu den beliebtesten
        Bestellungen in unserer Dessertbar. Die Eissorten rotieren regelmäßig,
        damit es immer etwas Neues zu entdecken gibt. Kombiniert mit frischen
        Früchten, handgemachten Soßen, Sahne und knusprigen Toppings wird jeder
        Eisbecher bei Hey Fede! zu einem kleinen Kunstwerk — perfekt für warme
        Sommertage in der Wetzlarer Fußgängerzone.
      </p>

      <h3 style={h3Style}>Special Shakes</h3>
      <p style={pStyle}>
        Unsere Special Shakes sind mehr als Milchshakes — sie sind flüssige
        Desserts, die man trinken und gleichzeitig bestaunen kann. Kreative
        Kombinationen, aufwendige Toppings und saisonale Specials machen jeden
        Shake zu einem Erlebnis. In unserer Dessertbar in der Langgasse werden
        sie frisch zubereitet und wunderschön serviert — jeder Shake ist ein
        Instagram-Moment wert.
      </p>

      <h3 style={h3Style}>Fede Boxen</h3>
      <p style={pStyle}>
        Perfekt zum Teilen, perfekt als Geschenk, perfekt für jeden Anlass: Die
        Fede Boxen sind unsere Dessert-Zusammenstellungen für alle, die die
        Vielfalt von Hey Fede! auf einen Schlag erleben wollen. Ob die beliebte
        Fede &amp; Friends Box, die Pancake-Picknick-Box oder die Mix Box — hier
        bekommt jeder am Tisch seinen Favoriten. In Wetzlar sind unsere Boxen
        mittlerweile ein beliebtes Mitbringsel für Partys und Geburtstage.
      </p>

      {/* ——— D) Die beliebtesten Anlässe für einen Besuch ——— */}
      <h2 style={h2Style}>Die beliebtesten Anlässe für einen Besuch</h2>
      <p style={pStyle}>
        Es gibt so viele gute Gründe, bei Hey Fede! in der Wetzlarer Altstadt
        vorbeizuschauen — und unsere Gäste überraschen uns immer wieder mit den
        kreativen Anlässen, zu denen sie uns besuchen. Hier sind einige der
        beliebtesten:
      </p>
      <ul style={{ ...pStyle, paddingLeft: 24 }}>
        <li style={{ marginBottom: 10 }}>
          <strong>Date-Night in Wetzlar:</strong> Ein romantischer Spaziergang
          durch die Altstadt, vorbei am Lottehaus und über die Alte Lahnbrücke —
          und dann gemeinsam eine Bubble Waffle bei Kerzenschein. Die perfekte
          Kombination.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>Familien-Sonntag:</strong> Wenn die ganze Familie nach dem
          Sonntagsspaziergang durch Wetzlar etwas Süßes verdient hat, sind
          unsere Fede Boxen genau richtig — für jeden ist etwas dabei.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>After-Work-Süßigkeit:</strong> Nach einem langen Arbeitstag
          in Wetzlar einfach kurz in der Langgasse 68 vorbeischauen und sich
          einen Crêpe oder Shake gönnen — das ist Self-Care auf süße Art.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>Geburtstags-Treffen:</strong> Ob mit einer Fede Box als
          Überraschung oder einem dekorierten Eisbecher — Geburtstage bei Hey
          Fede! sind immer unvergesslich.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>Studi-Treff:</strong> Studierende der THM Wetzlar wissen es
          längst — unsere Dessertbar ist der perfekte Ort für eine süße
          Lernpause, ein Treffen zwischen den Vorlesungen oder einfach, um sich
          in guter Gesellschaft verwöhnen zu lassen.
        </li>
      </ul>

      {/* ——— E) Wetzlar entdecken — Hey Fede! als Treffpunkt ——— */}
      <h2 style={h2Style}>
        Wetzlar entdecken — Hey Fede! als dein Treffpunkt
      </h2>
      <p style={pStyle}>
        Wetzlar ist eine Stadt voller Geschichte, Kultur und charmanter Ecken —
        und Hey Fede! liegt mittendrin. Von unserer Dessertbar in der Langgasse
        68 aus erreichst du die schönsten Sehenswürdigkeiten der Stadt
        bequem zu Fuß: Der Wetzlarer Dom ist nur rund 350 Meter entfernt, das
        berühmte Lottehaus — das Goethe zu „Die Leiden des jungen Werthers"
        inspirierte — liegt gerade einmal 200 Meter von uns weg, und den
        historischen Eisenmarkt erreichst du in nur 100 Metern.
      </p>
      <p style={pStyle}>
        Die Alte Lahnbrücke mit ihrem malerischen Blick auf den Fluss und die
        Goethe-Spuren, die sich durch die ganze Altstadt ziehen, machen
        Wetzlar zu einem wunderbaren Ziel für Tagesausflüge, Städtetrips und
        Entdeckungstouren. Und wenn du nach einem ausgedehnten Stadtbummel
        durch die verwinkelten Gassen der Altstadt einen Ort suchst, um dich
        hinzusetzen, durchzuatmen und etwas Köstliches zu genießen — dann bist
        du bei Hey Fede! genau richtig. Wir sind dein Treffpunkt im Herzen von
        Wetzlar, ob du die Stadt als Tourist entdeckst oder als Wetzlarerin oder
        Wetzlarer deine Lieblingsecke in der Altstadt suchst. Komm auf einen
        Besuch vorbei — wir freuen uns auf dich.
      </p>

      {/* ——— F) Ernährungsweisen & Allergeninfos ——— */}
      <h2 style={h2Style}>Ernährungsweisen &amp; Allergeninfos</h2>
      <p style={pStyle}>
        Bei Hey Fede! in der Wetzlarer Langgasse möchten wir, dass wirklich
        jeder unsere Desserts genießen kann. Deshalb bieten wir eine Auswahl
        an Optionen für verschiedene Ernährungsweisen an: Viele unserer
        Kreationen sind vegetarisch, und wir erweitern laufend unser veganes
        Angebot. Für unsere Gäste, denen Halal-Ernährung wichtig ist, achten
        wir darauf, entsprechende Produkte anzubieten.
      </p>
      <p style={pStyle}>
        Glutenfreie Optionen haben wir dort, wo es möglich ist — sprich uns
        einfach an, und wir beraten dich gerne zu den verfügbaren Alternativen.
        Was Allergene betrifft, setzen wir auf volle Transparenz: Unsere
        Mitarbeiterinnen und Mitarbeiter können dir jederzeit Auskunft über die
        enthaltenen Allergene in jedem einzelnen Produkt geben. Denn wir
        finden: Genuss sollte sorgenfrei sein. Wenn du Fragen zu Inhaltsstoffen
        hast, zögere nicht — wir helfen dir gerne, das perfekte Dessert für
        dich zu finden, direkt bei uns in der Wetzlarer Altstadt.
      </p>

      {/* ——— G) Saisonale Highlights ——— */}
      <h2 style={h2Style}>Saisonale Highlights bei Hey Fede!</h2>
      <p style={pStyle}>
        Eine Sache, die unsere Stammgäste an Hey Fede! in Wetzlar besonders
        lieben: Es gibt immer etwas Neues! Unsere Karte lebt, weil wir mit
        den Jahreszeiten gehen und saisonale Zutaten in den Mittelpunkt stellen.
        So wird jeder Besuch in der Langgasse 68 zu einem neuen Erlebnis.
      </p>

      <h3 style={h3Style}>Frühling</h3>
      <p style={pStyle}>
        Wenn in der Wetzlarer Altstadt die ersten Blüten sprießen, bringen wir
        frische Erdbeeren und aromatischen Rhabarber auf unsere Karte. Unsere
        Frühlings-Specials sind leicht, fruchtig und voller Vorfreude auf den
        Sommer — zum Beispiel als Erdbeer-Rhabarber-Crêpe oder als fruchtige
        Bubble Waffle mit Erdbeersoße und Minze.
      </p>

      <h3 style={h3Style}>Sommer</h3>
      <p style={pStyle}>
        Im Sommer dreht sich bei uns alles um Erfrischung: Unsere Eisbecher
        und kühlen Special Shakes sind perfekte Begleiter für heiße Tage in
        der Wetzlarer Fußgängerzone. Frische Beeren, tropische Früchte und
        cremiges Eis — der Sommer schmeckt bei Hey Fede! einfach besonders
        gut. Wenn die Sonne auf die Langgasse scheint, gibt es kaum etwas
        Schöneres als einen unserer Sommer-Shakes in der Hand.
      </p>

      <h3 style={h3Style}>Herbst</h3>
      <p style={pStyle}>
        Wenn die Blätter in Wetzlar sich bunt färben, werden unsere Desserts
        warm und würzig: Kürbis-Gewürz in Pancakes, Zimt-Karamell auf Bubble
        Waffles und wohlig-warme Crêpes mit Bratapfel-Füllung. Die Herbst-Karte
        bei Hey Fede! in der Langgasse ist wie eine warme Umarmung — perfekt
        für kühle Nachmittage in der Altstadt.
      </p>

      <h3 style={h3Style}>Winter</h3>
      <p style={pStyle}>
        Im Winter verwandelt sich unsere Dessertbar in ein gemütliches Refugium
        mitten in der Wetzlarer Altstadt. Lebkuchen-Toppings, Spekulatius-
        Crumble und winterliche Gewürze wie Kardamom und Sternanis verfeinern
        unsere Kreationen. Und wenn der Wetzlarer Weihnachtsmarkt seine Pforten
        öffnet, sind wir die perfekte Ergänzung für einen süßen Abschluss des
        Bummels.
      </p>

      <h3 style={h3Style}>Ramadan</h3>
      <p style={pStyle}>
        Während des Ramadan bieten wir bei Hey Fede! in Wetzlar besondere süße
        Iftar-Kreationen an — Desserts, die den ganztägigen Fastenmonat
        versüßen und perfekt zum gemeinsamen Fastenbrechen passen. Wir sind
        stolz darauf, dass unsere Dessertbar in der Langgasse für alle
        Kulturen und Feiertage ein Ort der Freude ist. Denn guter Geschmack
        verbindet — und genau das ist unser Anspruch, hier in Wetzlar.
      </p>
    </section>
  );
}
