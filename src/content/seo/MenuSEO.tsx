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
      {/* ——— 1) Bubble Waffles ——— */}
      <h2 style={h2Style}>
        Bubble Waffles — Die süße Sensation aus Hongkong
      </h2>
      <p style={pStyle}>
        In den lebhaften Straßen von Hongkong, irgendwann in den 1950er-Jahren,
        entstand ein Street-Food-Klassiker, der bis heute die Herzen von
        Naschkatzen auf der ganzen Welt erobert: die Egg Waffle, auf
        Kantonesisch 鷄蛋仔 (Gai Daan Jai). Was als clevere Idee begann,
        übrig gebliebene Eier in einem speziell geformten Waffeleisen zu
        verarbeiten, wurde schnell zur Kult-Süßigkeit — und wir haben diese
        Tradition nach Wetzlar in die Langgasse 68 gebracht. Bei Hey Fede!
        bekommst du Bubble Waffles, wie du sie in der gesamten Region nicht
        findest: authentisch inspiriert, aber mit unserem ganz eigenen Dreh.
      </p>
      <p style={pStyle}>
        Jede unserer Bubble Waffles wird erst zubereitet, wenn du sie bestellst —
        nichts liegt hier auf Vorrat, nichts wird aufgewärmt. Vier Minuten im
        Waffeleisen, und du hörst es schon zischen: Der frische Teig verwandelt
        sich in goldene, knusprige Blasen, die außen kross und innen herrlich
        weich sind. Dieser Kontrast aus Crunch und Fluffigkeit ist das
        Geheimnis, warum unsere Gäste in der Wetzlarer Fußgängerzone immer
        wieder kommen. Frischer geht es nicht — und das schmeckst du mit
        jedem Bissen.
      </p>
      <p style={pStyle}>
        Und dann kommt das Topping! Bei uns in der Wetzlarer Altstadt kannst du
        deine Bubble Waffle ganz nach deinem Geschmack zusammenstellen: eine
        Kugel cremiges Eis, frische Sahne, saisonale Früchte wie Erdbeeren oder
        Mangostücke, verschiedene Soßen von Schokolade über Karamell bis
        Erdbeere — und dazu knusprige Extras wie Kekskrümel, bunte Streusel
        oder gehackte Nüsse. Jede Kombination ist einzigartig, und genau das
        lieben wir: Bei Hey Fede! kreierst du dein ganz persönliches Dessert,
        jedes Mal aufs Neue. Kein Wunder, dass unsere Bubble Waffles der
        beliebteste Posten auf unserer Karte sind — und ein echtes
        Instagram-Highlight in Wetzlar.
      </p>

      {/* ——— 2) Crêpes ——— */}
      <h2 style={h2Style}>
        Crêpes — Französische Tradition, Wetzlarer Frische
      </h2>
      <p style={pStyle}>
        Es gibt wenige Desserts, die so elegant und gleichzeitig so
        unkompliziert sind wie ein guter Crêpe. In unserer Dessertbar in der
        Wetzlarer Langgasse ehren wir die französische Tradition: Ein
        hauchzarter Teig, auf der heißen Platte mit Präzision und Liebe
        ausgestrichen, bis er goldbraun und wunderbar dünn ist. Der Duft allein
        lässt dich an Pariser Straßencafés denken — nur dass du ihn hier
        mitten in der Wetzlarer Altstadt genießen kannst.
      </p>
      <p style={pStyle}>
        Unsere Crêpe-Karte ist bewusst vielseitig: Auf der süßen Seite findest
        du Klassiker wie Nutella mit Banane, aber auch raffinierte Kreationen
        mit weißer Schokolade, frischen Beeren, Karamellsoße oder
        saisonalen Früchten. Für alle, die es herzhaft mögen, bieten wir
        würzige Varianten, die genauso sorgfältig zubereitet werden. Jeder
        Crêpe wird direkt vor deinen Augen frisch zubereitet — du kannst
        zusehen, wie der Teig sich auf der Platte ausbreitet, wie die Füllung
        hinzugefügt und der fertige Crêpe kunstvoll gefaltet wird. Das ist
        nicht nur Essen — das ist ein kleines Erlebnis.
      </p>
      <p style={pStyle}>
        Was unsere Crêpes in der Langgasse 68 besonders macht, ist die Qualität
        des Teigs: Wir verwenden frische Eier, echte Butter und hochwertige
        Milch. Kein Pulver, keine Abkürzung. Das Ergebnis ist ein Crêpe, der
        zart auf der Zunge zergeht und den Geschmack der Füllung perfekt
        ergänzt, ohne ihn zu überdecken. Ob du zum ersten Mal bei Hey Fede! in
        Wetzlar bist oder schon Stammgast — unsere Crêpes werden dich immer
        wieder begeistern, weil wir sie jedes einzelne Mal mit derselben
        Sorgfalt zubereiten.
      </p>

      {/* ——— 3) Pancakes ——— */}
      <h2 style={h2Style}>Pancakes — Fluffig, frisch, fantastisch</h2>
      <p style={pStyle}>
        Pancakes gehören zu den Desserts, die einfach glücklich machen — und
        bei Hey Fede! in der Wetzlarer Altstadt haben wir sie zur Kunstform
        erhoben. Unser Pancake-Rezept ist das Ergebnis unzähliger Testrunden
        in unserer Küche in der Langgasse: Wir wollten den perfekten Pancake —
        fluffig wie eine Wolke, goldbraun am Rand, saftig in der Mitte. Und wir
        sind überzeugt, dass wir ihn gefunden haben. Jeden Tag rühren wir den
        Teig frisch an, denn nur so bekommen die Pancakes ihre unverwechselbare
        Textur.
      </p>
      <p style={pStyle}>
        Der amerikanische Klassiker bekommt bei uns eine deutsche Note: Wir
        verwenden hochwertige Zutaten aus der Region, frische Eier und echte
        Butter. Das Resultat sind Pancakes, die sich von der Tiefkühlware im
        Supermarkt so grundlegend unterscheiden, dass du nie wieder zurück
        willst. Serviert werden sie als großzügig gestapelte Türme — drei,
        vier oder sogar fünf Pancakes übereinander, getoppt mit deiner
        Wunschkombination.
      </p>
      <p style={pStyle}>
        Die Toppings machen jede Bestellung bei Hey Fede! in Wetzlar einzigartig:
        Frische Früchte der Saison, echter Ahornsirup, Schokoladenstückchen,
        Karamellsoße, Sahne, Nüsse, Beeren-Coulis — du hast die Wahl, und wir
        lieben es, wenn du kreativ wirst. Unsere Pancakes sind perfekt zum
        Brunchen, als Nachmittags-Belohnung oder als süßer Ausklang eines
        Stadtbummels durch die Wetzlarer Fußgängerzone. Einmal probiert,
        immer wieder bestellt — das bestätigen uns unsere Stammgäste immer
        wieder.
      </p>

      {/* ——— 4) Eisbecher 500ml ——— */}
      <h2 style={h2Style}>Eisbecher 500ml — Hausgemachtes Eis zum Genießen</h2>
      <p style={pStyle}>
        Ein richtig guter Eisbecher ist mehr als einfach nur eine Kugel Eis in
        einem Glas — er ist eine Komposition, ein kleines Kunstwerk, das alle
        Sinne anspricht. Bei Hey Fede! in der Wetzlarer Langgasse nehmen wir
        unsere Eisbecher besonders ernst. In großzügigen 500-ml-Gläsern
        servieren wir dir eine Auswahl an Eissorten, die wir sorgfältig
        kuratieren. Unsere Sorten rotieren regelmäßig, damit es bei jedem
        Besuch etwas Neues zu entdecken gibt — von intensiver Belgischer
        Schokolade über erfrischendes Mango-Sorbet bis hin zu cremiger
        Vanille mit echten Vanilleschoten.
      </p>
      <p style={pStyle}>
        Was unsere Eisbecher in der Wetzlarer Altstadt zu etwas Besonderem
        macht, sind die liebevollen Details: Wir verwenden frische Früchte, die
        wir von Hand schneiden, handgemachte Soßen, die wir in unserer Küche
        selbst kochen, und knusprige Toppings, die jedem Löffel eine neue
        Dimension geben. Ob du dich für einen klassischen Schokoladenbecher
        entscheidest, einen fruchtigen Sommerbecher mit Beeren und Sorbet
        wählst oder unsere saisonalen Specials probierst — jeder Becher wird
        mit derselben Liebe zusammengestellt.
      </p>
      <p style={pStyle}>
        An warmen Sommertagen sind unsere Eisbecher der absolute Renner in der
        Fußgängerzone von Wetzlar. Aber auch im Herbst und Winter bieten wir
        besondere Varianten an — zum Beispiel warme Brownie-Eisbecher oder
        Eiskombinationen mit Zimt und Spekulatius. Bei Hey Fede! gibt es
        Eisbecher für jede Jahreszeit und jeden Geschmack. Komm in die
        Langgasse 68 und finde deinen neuen Lieblingsbecher — wir haben
        garantiert etwas für dich.
      </p>

      {/* ——— 5) Special Shakes ——— */}
      <h2 style={h2Style}>Special Shakes — Flüssige Desserts zum Staunen</h2>
      <p style={pStyle}>
        Stell dir vor, dein Lieblingsdessert würde in einen Shake verwandelt —
        genau das sind unsere Special Shakes bei Hey Fede! in Wetzlar. Wir
        haben das Konzept des klassischen Milchshakes komplett neu gedacht und
        daraus flüssige Dessertkreationen gemacht, die nicht nur unglaublich
        schmecken, sondern auch spektakulär aussehen. Jeder Shake wird in
        unserer Dessertbar in der Langgasse frisch zubereitet, mit echtem Eis,
        frischer Milch und hochwertigen Zutaten.
      </p>
      <p style={pStyle}>
        Was unsere Shakes so besonders macht, sind die kreativen Kombinationen:
        Von Cookies &amp; Cream über Salted Caramel Brownie bis hin zu
        fruchtigen Varianten mit Mango, Erdbeere oder Passionsfrucht — unsere
        Karte bietet für jeden Geschmack den passenden Shake. Und dann ist da
        noch das Topping: Aufwendig dekoriert mit Sahne, Keksen, Soßen,
        Streuseln und manchmal sogar einem ganzen Stück Kuchen obendrauf,
        werden unsere Special Shakes in der Wetzlarer Fußgängerzone zu echten
        Hinguckern. Kein Wunder, dass sie auf Instagram und TikTok zu den
        meistfotografierten Desserts in Wetzlar gehören.
      </p>
      <p style={pStyle}>
        Ob du einen erfrischenden Frucht-Shake an einem heißen Sommertag in der
        Altstadt brauchst, einen cremig-schokoladigen Traum für den
        Nachmittag suchst oder einen saisonalen Special ausprobieren willst —
        bei Hey Fede! in der Langgasse 68 findest du deinen Perfect Match.
        Unsere Shakes sind ein Erlebnis für Augen und Gaumen — und immer
        frisch, immer handgemacht, immer mit Liebe.
      </p>

      {/* ——— 6) Fede Boxen ——— */}
      <h2 style={h2Style}>Fede Boxen — Dessert zum Teilen und Genießen</h2>
      <p style={pStyle}>
        Manche Momente werden erst richtig schön, wenn man sie teilt — und
        genau dafür haben wir unsere Fede Boxen geschaffen. Die Idee dahinter
        ist simpel: Wir packen eine sorgfältig zusammengestellte Auswahl
        unserer besten Desserts in eine Box, damit du und deine Liebsten alles
        zusammen probieren könnt. In unserer Dessertbar in der Wetzlarer
        Langgasse sind die Fede Boxen inzwischen legendär — als Geschenk, als
        Party-Mitbringsel oder einfach als Highlight für einen gemeinsamen
        Nachmittag.
      </p>
      <p style={pStyle}>
        Unser absolutes Highlight ist die Fede &amp; Friends Box: eine
        großzügige Zusammenstellung unserer beliebtesten Desserts, die zum
        Teilen gemacht ist. Aber das ist noch nicht alles — die Pancake Picknick
        Box bringt fluffige Pancakes mit einer Auswahl an Toppings zum
        Selbst-Kombinieren, und die Mix Box bietet einen bunten Querschnitt
        durch unsere Karte, perfekt für alle, die sich nicht entscheiden
        können (oder wollen).
      </p>
      <p style={pStyle}>
        Was wir von unseren Gästen in Wetzlar immer wieder hören: Die Fede
        Boxen sind das perfekte Mitbringsel. Ob zur Geburtstagsfeier, zum
        Familien-Brunch, zum Mädelsabend oder einfach als süße Überraschung —
        wer mit einer Fede Box auftaucht, macht sich garantiert beliebt. In
        der Langgasse 68 stellen wir jede Box mit Liebe und Sorgfalt zusammen,
        denn wir wissen: Wenn du eine Fede Box öffnest, soll es sich anfühlen
        wie ein kleines Fest. Komm bei Hey Fede! in der Wetzlarer Altstadt
        vorbei und nimm ein Stück Genuss mit nach Hause.
      </p>

      {/* ——— 7) Kuchen & Cookies ——— */}
      <h2 style={h2Style}>Kuchen &amp; Cookies — Täglich frisch aus unserer Küche</h2>
      <p style={pStyle}>
        Neben unseren Signature-Desserts bieten wir bei Hey Fede! in der
        Wetzlarer Langgasse auch eine wechselnde Auswahl an hausgemachten
        Kuchen und Cookies an. Was heute in unserer Vitrine liegt, wurde heute
        Morgen in unserer Küche gebacken — frischer geht es nicht. Ob
        saftiger Schokoladenkuchen, fruchtiger Cheesecake, butterweiche
        Cookies mit Chocolate Chunks oder ausgefallene Kreationen mit
        saisonalen Zutaten — unser Angebot wechselt regelmäßig, damit es
        immer etwas Neues zu entdecken gibt.
      </p>
      <p style={pStyle}>
        Unsere Cookies gehören zu den hidden Gems in der Wetzlarer Altstadt.
        Wer sie einmal probiert hat, kommt immer wieder — denn wir backen sie
        so, wie Cookies sein sollten: außen leicht knusprig, innen herrlich
        weich und chewy, mit großzügigen Stücken bester Schokolade. Dazu
        bieten wir immer wieder besondere Geschmacksrichtungen an, die du
        sonst nirgends in Wetzlar findest. Die Kuchen und Cookies eignen sich
        auch perfekt zum Mitnehmen — als süße Belohnung für zuhause oder als
        Mitbringsel für Freunde und Familie. Frag einfach bei deinem nächsten
        Besuch in der Langgasse 68, was heute frisch aus dem Ofen gekommen ist.
      </p>

      {/* ——— 8) Getränke ——— */}
      <h2 style={h2Style}>Getränke — Von Kaffee bis Matcha</h2>
      <p style={pStyle}>
        Zu einem perfekten Dessert gehört das passende Getränk — und bei Hey
        Fede! in der Wetzlarer Altstadt bieten wir eine sorgfältig kuratierte
        Auswahl, die unsere Dessertkarte wunderbar ergänzt. Unser Kaffee wird
        aus hochwertigen Bohnen frisch zubereitet, ob als kräftiger Espresso,
        cremiger Cappuccino oder als erfrischender Iced Coffee für warme Tage
        in der Fußgängerzone.
      </p>
      <p style={pStyle}>
        Für Trendgetränke-Fans haben wir eine besondere Auswahl: Unser Matcha
        Latte wird mit echtem japanischem Matcha-Pulver zubereitet und kann
        heiß oder eiskalt genossen werden. Die Iced Drinks sind perfekte
        Begleiter für den Sommer in Wetzlar — erfrischend, aromatisch und
        wunderschön serviert. Und wenn es draußen kalt wird und die Wetzlarer
        Altstadt sich in ein winterliches Märchen verwandelt, wärmt dich
        unsere heiße Schokolade von innen — cremig, reichhaltig und
        handgemacht, so wie alles bei Hey Fede!.
      </p>
      <p style={pStyle}>
        Ob du deinen Bubble-Waffle-Genuss mit einem Flat White abrundest, einen
        fruchtigen Iced Tea zu deinem Crêpe bestellst oder unsere heiße
        Schokolade als eigenständigen Genussmoment zelebrierst — unsere
        Getränkekarte in der Langgasse 68 bietet für jeden Moment und jede
        Stimmung das Richtige. Komm vorbei und lass dich inspirieren — bei Hey
        Fede! in Wetzlar findest du nicht nur die besten Desserts, sondern
        auch die Getränke, die perfekt dazu passen.
      </p>
    </section>
  );
}
