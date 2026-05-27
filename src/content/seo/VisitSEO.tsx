import React from "react";

/* ──────────────────────────────────────────────────────────────────────
   VisitSEO — Long-form SEO content for /visit
   ~2 500 Wörter  ·  Cream background  ·  Calistoga h2  ·  Nunito text
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

export function VisitSEO() {
  return (
    <section
      aria-label="Hey Fede! besuchen — Anfahrt, Öffnungszeiten und Tipps"
      style={{ background: "#f5efe8", padding: "72px 0 80px" }}
    >
      <div style={seoSectionStyle}>
        {/* ═══════════════════════════════════════════════════════════════
           A) SO FINDEST DU HEY FEDE!
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          So findest du Hey Fede! — Langgasse 68 in Wetzlar
        </h2>

        <p style={pStyle}>
          Unser Dessert-Zuhause befindet sich in der Langgasse 68, mitten in der
          Wetzlarer Altstadt. Egal, ob du mit dem Zug, dem Bus, dem Auto oder
          zu Fuß unterwegs bist — der Weg zu uns ist unkompliziert. Die Langgasse
          gehört zur Fußgängerzone und ist eine der Hauptachsen der historischen
          Altstadt. Du erkennst uns am einladenden Eingang und dem unverwechselbaren
          Hey Fede!-Schriftzug.
        </p>

        <h3 style={h3Style}>Vom Bahnhof Wetzlar zu Fuß</h3>

        <p style={pStyle}>
          Vom Wetzlarer Bahnhof erreichst du uns in etwa 15 Minuten zu Fuß — das
          sind rund 1,2 Kilometer. Geh vom Hauptausgang des Bahnhofs geradeaus
          Richtung Altstadt. Du folgst der Bahnhofstraße, die dich direkt zur
          Karl-Kellner-Straße führt. Von dort geht es weiter über die Langgasse
          bis zur Hausnummer 68. Der Weg ist gut ausgeschildert und führt dich
          durch eine der schönsten Ecken der Stadt. Unterwegs kommst du an kleinen
          Geschäften und charmanten Fachwerkhäusern vorbei — der Spaziergang
          ist bereits ein Erlebnis für sich.
        </p>

        <h3 style={h3Style}>Mit dem Bus</h3>

        <p style={pStyle}>
          Die nächstgelegene Bushaltestelle ist Karl-Kellner-Ring, nur etwa
          250 Meter von Hey Fede! entfernt. Von dort sind es nur wenige
          Gehminuten durch die Altstadt bis zu uns. Der Karl-Kellner-Ring
          wird von mehreren Buslinien angefahren, die Wetzlar und die
          umliegenden Stadtteile verbinden. Aktuelle Fahrpläne findest du
          auf der Website der lokalen Verkehrsgesellschaft oder in der
          jeweiligen Fahrplan-App.
        </p>

        <h3 style={h3Style}>Mit dem Auto</h3>

        <p style={pStyle}>
          Da die Langgasse Teil der Fußgängerzone ist, kannst du nicht direkt
          vor unserer Tür parken. Aber keine Sorge — es gibt mehrere bequeme
          Parkmöglichkeiten in unmittelbarer Nähe. Der Parkplatz Domplatz liegt
          nur wenige Gehminuten entfernt und bietet eine gute Anbindung an die
          Altstadt. Das Parkhaus Forum und das Parkhaus Altstadt sind ebenfalls
          schnell erreichbar und bieten ausreichend Stellplätze, auch an
          belebten Samstagen.
        </p>

        <p style={pStyle}>
          Wenn du die Fußgängerzone betrittst, halte dich auf der linken Seite
          der Langgasse — du wirst Hey Fede! nicht übersehen können. Unser
          Eingangsbereich ist einladend gestaltet und in den wärmeren Monaten
          stehen manchmal auch Tische vor der Tür, die schon von Weitem
          nach Dessert duften.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           B) ÖFFNUNGSZEITEN
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Öffnungszeiten — Wann hat Hey Fede! geöffnet?
        </h2>

        <p style={pStyle}>
          Unsere regulären Öffnungszeiten sind so gestaltet, dass du uns perfekt
          in deinen Tag einbauen kannst — ob für ein Nachmittagsdessert nach der
          Arbeit, einen Wochenend-Bummel durch die Altstadt oder einen spontanen
          Sweet-Tooth-Moment.
        </p>

        <p style={pStyle}>
          <strong style={{ color: "#2d1f19" }}>Montag &amp; Dienstag:</strong> Geschlossen
          — unsere Ruhetage, an denen wir neue Rezepte testen und alles für die
          Woche vorbereiten.<br />
          <strong style={{ color: "#2d1f19" }}>Mittwoch bis Samstag:</strong> 12:00 – 19:00 Uhr<br />
          <strong style={{ color: "#2d1f19" }}>Sonntag:</strong> 13:00 – 19:00 Uhr
        </p>

        <p style={pStyle}>
          An Feiertagen können unsere Öffnungszeiten abweichen. Wir kündigen
          besondere Zeiten oder Schließtage immer rechtzeitig auf unserem
          Instagram-Kanal @heyfede_wetzlar an. Ein Blick in unsere Stories
          vor dem Besuch lohnt sich also!
        </p>

        <p style={pStyle}>
          <strong style={{ color: "#CC624C" }}>Insider-Tipp:</strong> Samstags
          ist bei uns am meisten los — die Kombination aus Wochenmarkt und
          Altstadtbummel zieht viele Besucher an. Wenn du es ruhiger magst,
          empfehlen wir einen Besuch unter der Woche, besonders mittwochs oder
          donnerstags. Dann hast du mehr Zeit, in Ruhe unsere Karte zu studieren
          und vielleicht sogar ein kurzes Gespräch mit Fede zu führen.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           C) HEY FEDE! ALS TREFFPUNKT
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>
          Hey Fede! als Treffpunkt — Wetzlar Altstadt entdecken
        </h2>

        <p style={pStyle}>
          Ein Besuch bei Hey Fede! lässt sich wunderbar mit einem Ausflug in die
          Wetzlarer Altstadt kombinieren. Die historische Innenstadt bietet so viel
          zu entdecken, dass sich ein ganzer Nachmittag leicht füllen lässt — und
          unser Dessert ist dabei die perfekte süße Pause oder das krönende Finale.
        </p>

        <h3 style={h3Style}>Dom &amp; Dessert</h3>

        <p style={pStyle}>
          Der Wetzlarer Dom ist eines der bekanntesten Wahrzeichen der Stadt und
          nur etwa 350 Meter von uns entfernt. Besichtige die beeindruckende
          romanisch-gotische Kirche mit ihrem markanten, unvollendeten Westturm
          und komm danach auf eine Bubble Waffle oder einen Shake zu uns. Nach
          einem kulturellen Highlight schmeckt das Dessert doppelt so gut.
        </p>

        <h3 style={h3Style}>Lottehaus &amp; Goethe-Geschichte</h3>

        <p style={pStyle}>
          Das Lottehaus liegt nur rund 200 Meter entfernt und erzählt die
          Geschichte von Charlotte Buff und Johann Wolfgang von Goethe. Der junge
          Goethe verliebte sich 1772 während seines Aufenthalts in Wetzlar in
          Charlotte und verarbeitete diese Erfahrung in seinem berühmten Roman
          „Die Leiden des jungen Werthers". Kombiniere den Besuch des Museums mit
          einem Stopp bei Hey Fede! — ein Nachmittag voller Kultur, Geschichte
          und süßer Genüsse, der sich perfekt für Paare, Familien oder allein
          reisende Entdecker eignet.
        </p>

        <h3 style={h3Style}>Eisenmarkt, Lahnbrücke &amp; Stadtspaziergang</h3>

        <p style={pStyle}>
          Der Eisenmarkt, nur 100 Meter vor unserer Tür, ist ein idealer
          Ausgangspunkt für jeden Altstadtbummel. Von dort aus erreichst du
          die Alte Lahnbrücke in etwa 500 Metern — einer der romantischsten
          Orte in Wetzlar, besonders bei Sonnenuntergang. Der klassische
          Goethe-Rundweg durch die Altstadt führt an vielen historischen
          Stationen vorbei und endet perfekt bei uns, wo ein frisches Dessert
          als Belohnung auf dich wartet. Stadtbummel plus Dessert — so sollte
          ein guter Tag aussehen.
        </p>

        <p style={pStyle}>
          Ob spontaner Stopp beim Shopping, geplanter Ausflug mit Freunden
          oder romantischer Stadtbummel zu zweit — Hey Fede! passt in jeden
          Wetzlar-Nachmittag. Wir sind der süße Fixpunkt in deinem Altstadt-
          Erlebnis, der Ort, an dem du dich hinsetzt, durchatmest und genießt.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           D) ANREISE & PARKEN
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Anreise &amp; Parken</h2>

        <p style={pStyle}>
          Wir wissen, dass eine gute Anreise den Besuch noch angenehmer macht.
          Deshalb hier nochmal alle wichtigen Informationen zu Parkmöglichkeiten
          und Anreise kompakt zusammengefasst:
        </p>

        <h3 style={h3Style}>Parkmöglichkeiten in der Nähe</h3>

        <p style={pStyle}>
          <strong style={{ color: "#2d1f19" }}>Parkplatz Domplatz:</strong> Etwa
          400 Meter entfernt, ideal für einen kurzen Fußweg durch die Altstadt zu
          uns. Begrenzte Stellplätze, aber zentral gelegen.<br />
          <strong style={{ color: "#2d1f19" }}>Parkhaus Forum Wetzlar:</strong> Größeres
          Parkhaus mit vielen Stellplätzen, etwa 600 Meter Fußweg. Gut geeignet
          für längere Besuche in der Altstadt, da ausreichend Kapazität vorhanden
          ist.<br />
          <strong style={{ color: "#2d1f19" }}>Parkhaus Altstadt:</strong> Ebenfalls
          in Laufentfernung, gut angebunden an die Fußgängerzone.
        </p>

        <h3 style={h3Style}>ÖPNV-Anbindung</h3>

        <p style={pStyle}>
          Die Haltestelle Karl-Kellner-Ring ist die nächstgelegene Busstation
          (ca. 250 m). Vom Wetzlarer Bahnhof aus sind es 15 Minuten zu Fuß oder
          eine kurze Busfahrt. Wetzlar ist gut an das Regionalbahnnetz angeschlossen
          und von Gießen, Marburg und dem Rhein-Main-Gebiet aus bequem erreichbar.
        </p>

        <h3 style={h3Style}>Mit dem Fahrrad</h3>

        <p style={pStyle}>
          In der Nähe der Langgasse gibt es mehrere Fahrrad-Abstellmöglichkeiten.
          Der Lahnradweg führt direkt an Wetzlar vorbei — ein Dessert-Stopp bei
          einer Radtour entlang der Lahn ist immer eine gute Idee. Stell dein
          Fahrrad sicher ab und gönn dir eine Pause mit einer Bubble Waffle.
        </p>

        <h3 style={h3Style}>Taxi &amp; Ride-Sharing</h3>

        <p style={pStyle}>
          Vom Bahnhof oder Hotels aus kannst du bequem ein Taxi nehmen. Der
          nächste Absetzpunkt ist der Karl-Kellner-Ring oder der Eisenmarkt,
          von wo aus es nur wenige Schritte bis zu uns sind. Auch gängige
          Ride-Sharing-Dienste funktionieren in Wetzlar problemlos.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           E) TAKE-AWAY & LIEFERUNG
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Take-Away &amp; Lieferung</h2>

        <p style={pStyle}>
          Du hast gerade keine Zeit, dich bei uns hinzusetzen? Kein Problem —
          unsere Desserts schmecken auch unterwegs oder zu Hause fantastisch.
          Wir bieten mehrere Möglichkeiten, damit du in den Genuss unserer
          Kreationen kommst, egal wo du gerade bist.
        </p>

        <h3 style={h3Style}>Lieferando</h3>

        <p style={pStyle}>
          Über Lieferando kannst du unsere gesamte Speisekarte bequem von zu
          Hause oder vom Büro aus bestellen. Und das Beste: Wir berechnen
          keine Liefergebühr. Dein Dessert kommt frisch zubereitet und sorgfältig
          verpackt direkt an deine Tür. Einfach „Hey Fede" in der Lieferando-App
          suchen, bestellen und genießen. So einfach kann süß sein.
        </p>

        <h3 style={h3Style}>Abholung vor Ort</h3>

        <p style={pStyle}>
          Natürlich kannst du deine Bestellung auch direkt bei uns in der
          Langgasse 68 abholen. Ruf uns an, schreib uns eine WhatsApp-Nachricht
          oder bestell einfach vor Ort — wir bereiten alles frisch für dich
          vor, damit du es mitnehmen kannst. Perfekt für den schnellen
          Dessert-Fix auf dem Weg nach Hause.
        </p>

        <h3 style={h3Style}>Fede Boxen zum Mitnehmen</h3>

        <p style={pStyle}>
          Für größere Anlässe oder einfach als süße Überraschung für Familie
          und Freunde bieten wir unsere Fede Boxen an. Das sind liebevoll
          zusammengestellte Dessert-Pakete, die sich hervorragend als
          Geschenk, für Partys oder als Mitbringsel eignen. Frag uns
          einfach nach den aktuellen Box-Optionen — wir beraten dich gerne.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           F) FAMILIEN, GRUPPEN, EVENTS
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Familien, Gruppen, Events</h2>

        <p style={pStyle}>
          Hey Fede! ist nicht nur für den spontanen Dessert-Genuss da — wir sind
          auch der perfekte Ort für besondere Anlässe und Gruppenevents. Ob
          Kindergeburtstag, Firmen-Event oder ein süßer Nachmittag mit der
          ganzen Familie — wir machen euren Besuch zu einem unvergesslichen
          Erlebnis.
        </p>

        <h3 style={h3Style}>Kindergeburtstage</h3>

        <p style={pStyle}>
          Kinder lieben Hey Fede! — und wir lieben es, Kinderaugen zum Leuchten
          zu bringen. Für Kindergeburtstage bieten wir spezielle Pakete an,
          bei denen die kleinen Gäste ihre eigenen Bubble Waffles oder Pancakes
          mit ihren Lieblingstoppings zusammenstellen können. Ein süßes Abenteuer,
          das garantiert in Erinnerung bleibt. Sprecht uns einfach an, und wir
          planen gemeinsam den perfekten Geburtstags-Nachmittag.
        </p>

        <h3 style={h3Style}>Firmen-Events &amp; Gruppenbestellungen</h3>

        <p style={pStyle}>
          Auch für Teams und Gruppen ist Hey Fede! eine großartige Wahl. Ob als
          süßes Highlight bei einem Team-Ausflug, als Dessert-Catering für ein
          Firmenevent oder als Belohnung nach einem Workshop — wir stellen
          individuelle Pakete zusammen, die genau zu eurem Anlass passen.
          Gruppenbestellungen nehmen wir gerne entgegen und sorgen dafür,
          dass alle gleichzeitig ihr Dessert genießen können.
        </p>

        <h3 style={h3Style}>Fede &amp; Friends Box</h3>

        <p style={pStyle}>
          Unsere Fede &amp; Friends Box ist perfekt für alle, die gemeinsam
          genießen wollen. Eine abwechslungsreiche Auswahl unserer besten
          Kreationen, liebevoll verpackt und ideal zum Teilen. Ob beim
          Picknick an der Lahn, beim Filmabend zu Hause oder als Mitbringsel
          zur Geburtstagsfeier — mit der Fede &amp; Friends Box bringst du
          garantiert süße Stimmung mit. Erkundige dich bei uns nach
          Verfügbarkeit und aktuellen Zusammenstellungen.
        </p>

        <hr style={dividerStyle} />

        {/* ═══════════════════════════════════════════════════════════════
           G) BARRIEREFREIHEIT & SERVICE
           ═══════════════════════════════════════════════════════════════ */}
        <h2 style={h2Style}>Barrierefreiheit &amp; Service</h2>

        <p style={pStyle}>
          Bei Hey Fede! soll sich jeder willkommen fühlen — ausnahmslos. Deshalb
          legen wir Wert auf einen möglichst barrierefreien Zugang und einen
          Service, der keine Wünsche offenlässt.
        </p>

        <p style={pStyle}>
          Unser Eingang ist ebenerdig, sodass Rollstuhlfahrer, Kinderwagen und
          Gehilfen problemlos passieren können. Im Innenraum sorgen breite Tische
          und eine durchdachte Möblierung dafür, dass sich alle Gäste komfortabel
          bewegen können. Auch mit größeren Gruppen oder Familien findet ihr bei
          uns Platz.
        </p>

        <p style={pStyle}>
          Kostenloses WLAN steht unseren Gästen selbstverständlich zur Verfügung —
          perfekt, um Fotos eurer Desserts direkt auf Instagram zu teilen. Wir
          akzeptieren alle gängigen Kartenzahlungen sowie kontaktloses Bezahlen.
          Bargeld nehmen wir natürlich ebenfalls gerne entgegen.
        </p>

        <p style={pStyle}>
          Familien mit kleinen Kindern finden bei uns eine Kinderecke mit
          Beschäftigungsmöglichkeiten und einen Wickelraum. Denn wir wissen: Wenn
          die Kleinen zufrieden sind, können die Großen in Ruhe genießen. Hey Fede!
          ist ein Ort für alle — und das meinen wir genauso, wie es klingt.
          Kommt vorbei, macht es euch gemütlich und lasst euch von uns verwöhnen.
          Wir freuen uns auf euch!
        </p>
      </div>
    </section>
  );
}
