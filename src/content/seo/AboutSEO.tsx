import React from "react";

/* ──────────────────────────────────────────────────────────────────────
   AboutSEO — Long-form SEO content for /about
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

const dividerStyle: React.CSSProperties = {
  width: 60,
  height: 3,
  background: "linear-gradient(90deg, #CC624C, #E4C0A8)",
  borderRadius: 2,
  margin: "48px auto",
  border: "none",
};

export function AboutSEO() {
  return (
    <section
      aria-label="Über Hey Fede! — Ausführliche Geschichte und Philosophie"
      style={{ background: "#f5efe8", padding: "72px 0 80px" }}
    >
      <div style={seoSectionStyle}>
        {/* ═══════════════════════════════════════════════════════════════
           A) DIE GRÜNDUNGSGESCHICHTE — WIE HEY FEDE! ENTSTAND
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Die Gründungsgeschichte — Wie Hey Fede! entstand
        </h2>

        <p style={pStyle}>
          Jedes gute Dessert beginnt mit einem Traum. Für Federica war dieser
          Traum schon immer klar: einen Ort schaffen, an dem Menschen zusammenkommen,
          lachen und gemeinsam etwas Süßes genießen können. Einen Ort, der sich anfühlt
          wie ein verlängertes Wohnzimmer — nur mit deutlich besseren Nachtischen. Die
          Idee, eine eigene Dessertbar in Wetzlar zu eröffnen, trug Federica jahrelang
          mit sich herum, lange bevor sie den Schritt tatsächlich wagte.
        </p>

        <p style={pStyle}>
          Der Weg dahin war alles andere als geradlinig. Federica sammelte Erfahrung
          in der Gastronomie, probierte Rezepte zu Hause aus, lud Freunde und Familie
          zum Probieren ein und perfektionierte ihre Kreationen Stück für Stück. Dabei
          ging es nie darum, einfach nur Desserts herzustellen — es ging darum, ein
          Erlebnis zu erschaffen. Jede Bubble Waffle, jeder Pancake und jeder Shake
          sollte ein kleines Highlight im Alltag sein, etwas, das man mit einem Lächeln
          genießt und am liebsten sofort teilen möchte.
        </p>

        <h3 style={h3Style}>Die Suche nach dem perfekten Standort</h3>

        <p style={pStyle}>
          Die Suche nach dem richtigen Standort war eine Geschichte für sich. Wetzlar
          war von Anfang an gesetzt — diese Stadt mit ihrer charmanten Altstadt,
          den verwinkelten Gassen und der besonderen Atmosphäre zwischen Dom und Lahn
          war einfach der richtige Ort. Aber wo genau? Es musste ein Platz sein, an
          dem man nicht einfach vorbeiläuft, sondern stehen bleibt. Ein Platz, der
          einlädt, der neugierig macht, der selbst schon eine Geschichte erzählt.
        </p>

        <p style={pStyle}>
          Nach monatelanger Suche fiel die Wahl auf die Langgasse 68, mitten im Herzen
          der Wetzlarer Altstadt. Die Langgasse ist eine der ältesten und belebtesten
          Straßen in Wetzlar — hier trifft sich, wer die Altstadt erkundet, wer nach
          dem Dombesuch einen Spaziergang macht oder wer einfach die besondere
          Atmosphäre dieser historischen Fußgängerzone genießen möchte. Nur 350 Meter
          vom Wetzlarer Dom entfernt und nur 200 Meter vom berühmten Lottehaus —
          dem Ort, an dem Johann Wolfgang von Goethe die Inspiration für seinen
          „Werther" fand — liegt unser kleines Dessert-Zuhause.
        </p>

        <h3 style={h3Style}>Eröffnung und erste Schritte</h3>

        <p style={pStyle}>
          Im September 2023 war es dann so weit: Hey Fede! öffnete zum ersten Mal
          seine Türen. Die Aufregung war riesig — und die Reaktion der Wetzlarer
          übertraf alle Erwartungen. Schon in den ersten Wochen bildeten sich
          Schlangen vor der Theke, Social Media explodierte mit Fotos unserer
          Bubble Waffles und die ersten Stammgäste kamen bereits nach dem zweiten
          Besuch mit ihrem Vornamen herein. Diese persönliche Verbindung, dieses
          Gefühl von Zugehörigkeit, das war von Anfang an der Kern von Hey Fede!
        </p>

        <p style={pStyle}>
          Was uns besonders berührt hat: Es kamen nicht nur junge Leute. Familien
          brachten ihre Kinder mit, Großeltern kamen mit ihren Enkeln, Paare
          machten einen Abstecher nach dem Stadtbummel. Hey Fede! wurde schnell
          zu einem Treffpunkt für alle Generationen in Wetzlar. Und genau das
          war Federicas Vision: Ein Ort, der verbindet. Ein Ort, an dem das Alter
          keine Rolle spielt, sondern nur der gemeinsame Genuss zählt.
        </p>

        <p style={pStyle}>
          Der Aufbau unserer Community war ein organischer Prozess. Wir haben keine
          großen Werbekampagnen gestartet — die Qualität unserer Produkte und die
          Wärme unseres Empfangs sprachen für sich. Mund-zu-Mund-Propaganda,
          begeisterte Instagram-Stories und ehrliche Google-Bewertungen haben
          Hey Fede! zu dem gemacht, was es heute ist: ein fester Bestandteil der
          Wetzlarer Dessert-Kultur, eine Adresse, die man gerne weiterempfiehlt.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           B) UNSERE PHILOSOPHIE
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Unsere Philosophie — Frisch, hausgemacht, mit Liebe
        </h2>

        <p style={pStyle}>
          Bei Hey Fede! gibt es eine Regel, an der wir niemals rütteln: Alles, was
          über unsere Theke geht, ist frisch und hausgemacht. Punkt. Keine
          Fertigmischungen, keine industriellen Toppings, keine Kompromisse bei der
          Qualität. Wenn wir einen Teig anrühren, dann mit unseren eigenen Händen.
          Wenn wir Früchte schneiden, dann frisch am Morgen. Wenn wir einen Shake
          mixen, dann mit echten Zutaten und nicht mit Pulver aus der Tüte.
        </p>

        <p style={pStyle}>
          Diese Philosophie ist kein Marketing-Versprechen — sie ist unser täglicher
          Antrieb. Wir stehen jeden Morgen früh in der Küche, bereiten Teige vor,
          marinieren Früchte und testen neue Kreationen. Denn wir glauben fest
          daran: Man schmeckt den Unterschied. Man schmeckt, ob etwas mit Sorgfalt
          zubereitet wurde oder ob es lieblos zusammengeworfen wurde. Und unsere
          Gäste bestätigen uns das jeden Tag aufs Neue.
        </p>

        <p style={pStyle}>
          Qualität geht bei uns immer vor Quantität. Wir produzieren bewusst in
          kleineren Mengen, damit jedes einzelne Dessert die Aufmerksamkeit bekommt,
          die es verdient. Lieber verkaufen wir am Abend etwas weniger, als dass
          wir jemals einen Gast mit einem Produkt enttäuschen, das nicht unseren
          Ansprüchen genügt. Unsere Rezepte tragen alle eine persönliche Handschrift
          — inspiriert von mediterranen Aromen, verfeinert mit internationalen
          Einflüssen und immer abgestimmt auf den Geschmack unserer Stammgäste.
        </p>

        <p style={pStyle}>
          Apropos Stammgäste: Sie sind für uns nicht einfach Kunden, sie sind Teil
          unserer Fede-Familie. Ihr Feedback inspiriert uns zu neuen Kreationen,
          ihre Wünsche fließen in saisonale Specials ein und ihre Begeisterung
          gibt uns die Energie, jeden Tag unser Bestes zu geben. Wenn ein Stammgast
          sagt: „Das war das beste Dessert, das ich je hatte" — dann wissen wir,
          dass sich der Aufwand gelohnt hat.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           C) DAS TEAM HINTER HEY FEDE!
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Das Team hinter Hey Fede!</h2>

        <p style={pStyle}>
          Das Herzstück von Hey Fede! ist und bleibt Federica selbst. Als Gründerin
          und Inhaberin steckt sie nicht nur hinter den Rezepten, sondern auch
          hinter dem gesamten Konzept, der Einrichtung und der besonderen
          Atmosphäre, die unsere Gäste so lieben. Federica kennt viele unserer
          Stammgäste beim Namen, erinnert sich an Lieblingsbestellungen und nimmt
          sich immer die Zeit für ein persönliches Gespräch an der Theke.
        </p>

        <p style={pStyle}>
          Aber Federica ist nicht allein. Hinter Hey Fede! steht ein kleines,
          aber leidenschaftliches Team, das die gleiche Vision teilt: Menschen
          glücklich machen, einen Bissen nach dem anderen. Unsere Teamkultur basiert
          auf Respekt, Kreativität und der gemeinsamen Liebe zu guten Desserts. Wir
          lernen ständig voneinander, experimentieren zusammen und feiern jeden
          Erfolg gemeinsam — sei es eine neue Kreation, die sofort zum Bestseller
          wird, oder eine besonders herzliche Google-Bewertung.
        </p>

        <p style={pStyle}>
          Bei uns gilt ein einfacher Grundsatz: Jeder Gast ist ein Freund. Egal,
          ob du zum ersten Mal bei uns reinschaust oder schon zum hundertsten Mal
          kommst — du wirst immer mit einem echten Lächeln begrüßt. Das ist kein
          aufgesetzter Gastro-Service, das kommt von Herzen. Denn wenn man liebt,
          was man tut, und wenn man stolz auf das ist, was man anbietet, dann ist
          Freundlichkeit keine Pflicht, sondern eine Selbstverständlichkeit.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           D) UNSER BEZUG ZU WETZLAR
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Unser Bezug zu Wetzlar</h2>

        <p style={pStyle}>
          Wetzlar ist nicht einfach nur unser Standort — Wetzlar ist unsere Heimat.
          Die Wetzlarer Altstadt mit ihren Fachwerkhäusern, den kopfsteingepflasterten
          Gassen und der unverwechselbaren Mischung aus Geschichte und Lebendigkeit
          ist der perfekte Rahmen für eine Dessertbar wie Hey Fede! Wir fühlen uns
          hier verwurzelt und sind stolz darauf, ein Teil dieser besonderen Gemeinschaft
          zu sein.
        </p>

        <h3 style={h3Style}>Unsere Nachbarschaft</h3>

        <p style={pStyle}>
          Unsere Lage in der Langgasse 68 platziert uns mitten ins Herz des
          historischen Wetzlar. Der majestätische Wetzlarer Dom ist nur etwa
          350 Meter entfernt — ein kurzer Spaziergang bergauf, und man steht vor
          einem der bedeutendsten mittelalterlichen Bauwerke Mittelhessens. Das
          Lottehaus, jenes historische Gebäude, in dem Charlotte Buff lebte und
          das Goethe zu seinem „Werther" inspirierte, liegt nur rund 200 Meter
          von uns entfernt. Der Eisenmarkt, einer der zentralen Plätze der Altstadt,
          ist sogar nur 100 Meter vor unserer Tür.
        </p>

        <p style={pStyle}>
          Diese Nachbarschaft ist für uns nicht nur geographisch bedeutsam, sondern
          auch kulturell. Wetzlar ist eine Stadt der Geschichte, der Kultur und des
          Handwerks. Die Alte Lahnbrücke, die mit ihren steinernen Bögen über den
          Fluss führt, ist etwa 500 Meter entfernt und einer der beliebtesten
          Foto-Spots der Stadt. Goethe selbst wandelte durch genau diese Gassen,
          als er im Sommer 1772 als Praktikant am Reichskammergericht in Wetzlar
          lebte. Diese Geschichte atmet die Stadt noch heute — und wir sind
          privilegiert, ein neues Kapitel in dieser langen Erzählung mitschreiben
          zu dürfen.
        </p>

        <h3 style={h3Style}>Lokale Verbundenheit</h3>

        <p style={pStyle}>
          Wir arbeiten, wann immer es möglich ist, mit lokalen Lieferanten und
          regionalen Partnern zusammen. Denn wir glauben: Wer vor Ort einkauft,
          stärkt nicht nur die Qualität seiner Produkte, sondern auch die
          Gemeinschaft, in der man lebt. Ob frische Früchte aus der Region,
          Milchprodukte von hessischen Höfen oder Verpackungslösungen von lokalen
          Anbietern — wir schauen immer zuerst in unserer unmittelbaren Umgebung,
          bevor wir weiter suchen.
        </p>

        <p style={pStyle}>
          Unser Engagement in der Wetzlarer Gemeinschaft geht über den Geschäftsbetrieb
          hinaus. Wir unterstützen lokale Events, nehmen an Stadtfesten teil und
          freuen uns über jeden Austausch mit unseren Nachbarn in der Altstadt. Die
          Wetzlarer Altstadt lebt von der Vielfalt ihrer kleinen Läden, Cafés und
          Handwerksbetriebe — und wir sind stolz, ein Teil dieser lebendigen
          Gemeinschaft zu sein. Wetzlar ist nicht nur unser Geschäftsstandort.
          Wetzlar ist unser Zuhause.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           E) ZUTATEN & PARTNER
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Zutaten &amp; Partner</h2>

        <p style={pStyle}>
          Die Qualität eines Desserts steht und fällt mit den Zutaten. Das klingt
          wie eine Binsenweisheit, aber in der Praxis bedeutet es harte Arbeit
          und konsequente Entscheidungen. Bei Hey Fede! setzen wir auf frische,
          hochwertige Rohstoffe und pflegen langfristige Beziehungen zu unseren
          Lieferanten — denn nur wer seine Quellen kennt, kann für Qualität
          garantieren.
        </p>

        <p style={pStyle}>
          Unsere frischen Früchte beziehen wir, wo möglich, aus der Region. Erdbeeren,
          Himbeeren, Blaubeeren und andere saisonale Obstsorten kommen bevorzugt von
          lokalen Anbauern. Für unsere Teige verwenden wir hochwertiges Mehl, und bei
          unseren Milchprodukten achten wir auf Frische und Herkunft. Jede Zutat wird
          sorgfältig ausgewählt — denn wir sind überzeugt: Wenn die Basis stimmt,
          stimmt auch das Ergebnis.
        </p>

        <p style={pStyle}>
          Transparenz bei den Inhaltsstoffen ist uns besonders wichtig. Wir
          kennzeichnen Allergene sorgfältig und informieren unsere Gäste gerne
          persönlich über die Zusammensetzung unserer Produkte. Wer Fragen zu
          Zutaten hat, kann sich jederzeit an unser Team wenden — wir nehmen uns
          die Zeit, jedes Anliegen ausführlich zu beantworten. Denn wir möchten,
          dass sich jeder Gast bei uns sicher und gut aufgehoben fühlt.
        </p>

        <p style={pStyle}>
          Ein wichtiger Aspekt unseres Angebots ist die Halal-Zertifizierung
          relevanter Produkte. Wir möchten, dass möglichst viele Menschen unsere
          Desserts unbesorgt genießen können, unabhängig von ihren Ernährungs-
          gewohnheiten oder religiösen Überzeugungen. Deshalb achten wir bei der
          Auswahl unserer Zutaten und Lieferanten auf entsprechende Standards
          und Zertifizierungen. Inklusivität am Dessertteller — das gehört zu
          unserer DNA.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           F) NACHHALTIGKEIT BEI HEY FEDE!
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Nachhaltigkeit bei Hey Fede!</h2>

        <p style={pStyle}>
          Nachhaltigkeit ist für uns kein Trend, sondern eine Verantwortung.
          Als kleines Unternehmen in der Wetzlarer Altstadt wissen wir, dass
          jede einzelne Entscheidung zählt — vom Becher, in dem wir unsere
          Shakes servieren, bis zur Verpackung, in der unsere Desserts das
          Haus verlassen.
        </p>

        <h3 style={h3Style}>Mehrwegbecher &amp; Verpackungsreduktion</h3>

        <p style={pStyle}>
          Wir setzen aktiv auf Mehrwegbecher und ermutigen unsere Gäste, eigene
          Behälter mitzubringen. Für den Take-away-Bereich arbeiten wir
          kontinuierlich an der Reduzierung von Einwegverpackungen. Unsere
          Fede Boxen sind so konzipiert, dass sie möglichst wenig Material
          verbrauchen und dennoch unsere Produkte sicher und appetitlich
          transportieren. Wo immer es praktikabel ist, verwenden wir recycelbare
          oder kompostierbare Materialien.
        </p>

        <h3 style={h3Style}>Lokale Beschaffung</h3>

        <p style={pStyle}>
          Kurze Lieferwege bedeuten weniger Emissionen. Durch unsere Zusammenarbeit
          mit lokalen und regionalen Lieferanten halten wir Transportwege so kurz
          wie möglich. Das ist nicht nur besser für die Umwelt, sondern auch für
          die Frische unserer Zutaten. Frisch geerntete Erdbeeren aus der Region
          schmecken eben besser als solche, die tausende Kilometer gereist sind.
        </p>

        <h3 style={h3Style}>Energiebewusstsein im Alltag</h3>

        <p style={pStyle}>
          Auch im täglichen Betrieb achten wir auf einen bewussten Umgang mit
          Energie und Ressourcen. Von effizienten Kühlsystemen über sparsame
          Geräte bis hin zu einer durchdachten Küchenorganisation, die
          Lebensmittelverschwendung minimiert — Nachhaltigkeit steckt bei uns
          in den kleinen Details. Wir sind sicherlich nicht perfekt, aber wir
          arbeiten jeden Tag daran, ein bisschen besser zu werden. Denn wir
          möchten, dass unsere Desserts nicht nur heute gut schmecken, sondern
          dass auch morgen noch die Grundlage für gute Zutaten da ist.
        </p>

        <p style={pStyle}>
          Nachhaltigkeit ist für uns ein Prozess, kein Endzustand. Wir hinterfragen
          regelmäßig unsere Abläufe, suchen nach besseren Alternativen und sind
          offen für Anregungen unserer Gäste und Partner. Denn wir glauben:
          Verantwortung übernimmt man nicht einmal, sondern jeden Tag aufs Neue.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           G) DIE ZUKUNFT VON HEY FEDE!
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Die Zukunft von Hey Fede!</h2>

        <p style={pStyle}>
          Stillstand gibt es bei uns nicht. Wir arbeiten ständig an neuen
          Kreationen, testen saisonale Specials und überraschen unsere Gäste
          mit limitierten Editionen, die es nur für kurze Zeit gibt. Ob sommerliche
          Fruchtkreationen, winterliche Gewürz-Specials oder kreative
          Kooperationen mit anderen lokalen Akteuren — bei Hey Fede! gibt es
          immer etwas Neues zu entdecken.
        </p>

        <p style={pStyle}>
          Community-Events stehen ebenfalls ganz oben auf unserer Wunschliste. Wir
          träumen von Dessert-Workshops, bei denen unsere Gäste selbst kreativ
          werden können, von Sondereditions-Tastings und von Veranstaltungen, die
          die Wetzlarer Gemeinschaft noch enger zusammenbringen. Denn Hey Fede!
          ist mehr als ein Laden — es ist ein Treffpunkt, ein Ort der Freude und
          der süßen Momente.
        </p>

        <p style={pStyle}>
          Unser Ziel ist klar: Wir möchten in Wetzlar wachsen, tiefer Wurzeln
          schlagen und unsere Dessertkultur weiter stärken. Nicht durch blinden
          Größenwahn, sondern durch organisches, nachhaltiges Wachstum — immer
          nah an unseren Gästen, immer treu zu unserer Philosophie und immer mit
          der gleichen Leidenschaft, mit der alles begonnen hat. Die Geschichte
          von Hey Fede! hat gerade erst angefangen. Und das Schönste: Ihr schreibt
          sie mit uns.
        </p>
      </div>
    </section>
  );
}
