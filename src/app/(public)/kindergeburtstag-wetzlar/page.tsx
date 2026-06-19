import React from "react";
import Image from "next/image";
import { getPhotosForPage } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildFaqSchema } from "@/lib/seo/schema/pages";
import { SITE, BUSINESS } from "@/lib/seo/business-data";

export const revalidate = 60;

/* ─── Metadata ─── */
export const metadata = buildMetadata({
  title: "Kindergeburtstag in Wetzlar feiern | Hey Fede! Dessertbar",
  description:
    "Den perfekten Kindergeburtstag in Wetzlar feiern! Dessert-Pakete, Fede Boxen und Sweettables für Kinderpartys. Jetzt bei Hey Fede! in der Altstadt anfragen.",
  path: "/kindergeburtstag-wetzlar",
  keywords: [
    "Kindergeburtstag Wetzlar",
    "Kindergeburtstag feiern Wetzlar",
    "Kinderparty Wetzlar",
    "Kindergeburtstag Café Wetzlar",
    "Kinderfeier Desserts Lahn-Dill",
    "Geburtstag Kinder Gießen",
    "Party Kinder Wetzlar",
    "Hey Fede Kindergeburtstag",
  ],
});

/* ─── FAQ Data ─── */
const FAQ_DATA = [
  {
    q: "Kann ich bei Hey Fede! einen Kindergeburtstag feiern?",
    a: "Ja! Wir bieten spezielle Kindergeburtstag-Pakete an. Von Fede Boxen mit Pancakes und Waffeln bis hin zu individuellen Sweettables — wir machen jede Kinderparty zu einem unvergesslichen Erlebnis.",
  },
  {
    q: "Was kostet ein Kindergeburtstag bei Hey Fede!?",
    a: "Unsere Fede Boxen starten ab 24,90€ und eignen sich perfekt für Kindergruppen. Für größere Feiern erstellen wir gerne ein individuelles Angebot. Kontaktiere uns einfach über unser Kontaktformular.",
  },
  {
    q: "Für wie viele Kinder eignet sich eine Feier bei Hey Fede!?",
    a: "Wir können Gruppen von 5 bis 20 Kindern bewirten. Für größere Gruppen bieten wir auch Catering-Pakete an, die wir zu eurem Veranstaltungsort liefern.",
  },
  {
    q: "Was gibt es bei einem Kindergeburtstag zu essen?",
    a: "Die Kinder können zwischen Pancakes, Bubble Waffles, Crêpes und Eisbecher wählen. Unsere Kinderbecher (Zuckerwatte, Regenbogen, Marshmallow, Spaghetti-Eis) sind besonders beliebt. Dazu gibt es Getränke und natürlich Kerzen für den Geburtstagskuchen!",
  },
  {
    q: "Muss ich einen Kindergeburtstag vorher reservieren?",
    a: "Ja, wir empfehlen eine Reservierung mindestens 1 Woche im Voraus. So können wir alles perfekt vorbereiten. Kontaktiere uns per WhatsApp (0176 25026991), Telefon (06441 7890426) oder über unser Online-Formular.",
  },
];

/* ─── Cross-Links (excluding self) ─── */
const CROSS_LINKS = [
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🍦",
    label: "Eisdiele & Shakes",
  },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes" },
  { href: "/eiscafe-wetzlar", emoji: "☕", label: "Eiscafé" },
  { href: "/events-catering-hessen", emoji: "🎪", label: "Catering & Events" },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
];

/* ─── Page Schema ─── */
function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kindergeburtstag bei Hey Fede! Wetzlar",
    description:
      "Organisiere den perfekten Kindergeburtstag mit Dessert-Paketen, Fede Boxen und Sweettables in der gemütlichen Dessertbar in der Wetzlarer Altstadt.",
    provider: {
      "@type": "Restaurant",
      "@id": `${SITE.url}/#localbusiness`,
      name: "Hey Fede! Dessertbar & Café",
    },
    areaServed: [
      { "@type": "City", name: "Wetzlar" },
      { "@type": "City", name: "Gießen" },
      { "@type": "City", name: "Marburg" },
      { "@type": "AdministrativeArea", name: "Lahn-Dill-Kreis" },
    ],
    serviceType: "Kindergeburtstag",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "49.90",
      description: "Fede Box Paket für Kindergeburtstage",
    },
  };
}

/* ─── Kinderbecher Cards ─── */
const KINDERBECHER = [
  { emoji: "🍭", name: "Zuckerwatte", desc: "Fluffig, pink & magisch" },
  { emoji: "🌈", name: "Regenbogen", desc: "Bunt, fruchtig & fröhlich" },
  { emoji: "☁️", name: "Marshmallow", desc: "Weich, süß & verträumt" },
  { emoji: "🍝", name: "Spaghetti-Eis", desc: "Der absolute Klassiker" },
];

/* ─── Fede Box Cards ─── */
const FEDE_BOXEN = [
  {
    emoji: "🥞",
    name: "Pancake Picknick",
    desc: "Fluffige Pancake-Türme mit Toppings zum Teilen",
  },
  {
    emoji: "🍓",
    name: "Fruit Fiesta",
    desc: "Frische Früchte, Joghurt & knusprige Granola-Streusel",
  },
  {
    emoji: "🎁",
    name: "Mix Box",
    desc: "Das Beste aus Waffeln, Crêpes & Pancakes in einer Box",
  },
  {
    emoji: "🎉",
    name: "Fede & Friends",
    desc: "Das XL-Paket für die große Geburtstagsrunde",
  },
];

export default function KindergeburtstagPage() {
  return (
    <div className="bg-bg-creme">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Kinderpartys in der Wetzlarer Altstadt
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Der süßeste Kindergeburtstag in Wetzlar
            </h1>
            <p className="font-body text-lg text-brown-mid leading-relaxed mb-8 max-w-[500px]">
              Pancakes, Bubble Waffles, Crêpes, bunte Eisbecher und strahlende
              Kinderaugen — bei Hey Fede! in der Langgasse 68 wird jeder
              Kindergeburtstag zum unvergesslichen Erlebnis. Ob direkt bei uns
              in der gemütlichen Dessertbar oder als Catering-Paket bei euch
              zuhause.
            </p>
            <PrimaryButton href="/kontakt">
              Jetzt Kindergeburtstag anfragen →
            </PrimaryButton>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-beige rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🎂</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform -rotate-6">
              <p className="font-heading text-terracotta text-2xl">5–20</p>
              <p className="font-body font-bold text-xs uppercase tracking-widest text-charcoal">
                Kinder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content — Why Hey Fede ─── */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Warum Eltern Hey Fede! lieben">
            Der perfekte Ort für Kinderpartys
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Warum Hey Fede! perfekt für Kindergeburtstage ist</h2>
            <p>
              Einen Kindergeburtstag zu planen ist für viele Eltern mit Stress
              verbunden. Was gibt es zu essen? Wo hat man genug Platz? Und wie
              begeistert man eine Gruppe aufgedrehter Kinder? Die Antwort ist
              einfach: mit Desserts, die Kinderaugen zum Leuchten bringen. In
              unserer Dessertbar in der Wetzlarer Altstadt, direkt in der
              Langgasse 68, bieten wir alles, was eine gelungene Kinderparty
              braucht — leckeres Essen, eine gemütliche Atmosphäre und ein Team,
              das sich auf kleine Gäste freut.
            </p>
            <p>
              Unsere Lage mitten in der Fußgängerzone der Wetzlarer Altstadt ist
              ideal für Familien. Die Kinder können sich sicher bewegen, es gibt
              keine Autos und nach dem Essen kann die Gruppe die historischen
              Gassen erkunden. Viele Eltern aus Gießen, Solms, Braunfels, Aßlar
              und Herborn planen den Geburtstag bei uns als kleinen Tagesausflug
              — mit einem Spaziergang entlang der Lahn und einem Abstecher in
              die Altstadt als Rahmenprogramm.
            </p>

            <h2>Unsere beliebten Kinderbecher</h2>
            <p>
              Das absolute Highlight jeder Kinderparty bei Hey Fede! sind unsere
              Kinderbecher. Diese speziell für junge Gäste kreierten Eisbecher
              sind nicht nur köstlich, sondern ein echtes Erlebnis für alle
              Sinne. Der <strong>Zuckerwatte-Becher</strong> kommt mit einer
              riesigen Wolke aus rosa Zuckerwatte und lässt jedes Kind strahlen.
              Der <strong>Regenbogen-Becher</strong> begeistert mit bunten
              Frucht-Soßen und knalligen Streuseln. Wer es kuschelig mag, greift
              zum <strong>Marshmallow-Becher</strong> mit fluffigen,
              gelatinefreien Mini-Marshmallows. Und der Klassiker unter den
              Eisbechern, das <strong>Spaghetti-Eis</strong>, darf natürlich
              auch nicht fehlen — frisch gepresst, mit Erdbeersoße und weißer
              Schokolade.
            </p>

            <h2>Fede Boxen — Gemeinsam schlemmen und teilen</h2>
            <p>
              Für Kindergeburtstage, bei denen es richtig üppig zugehen soll,
              empfehlen wir unsere <strong>Fede Boxen</strong>. Diese
              großzügigen Sharing-Boxen werden frisch in unserer Dessertbar
              zusammengestellt und eignen sich perfekt für Gruppen. Die
              <strong> Pancake Picknick Box</strong> enthält einen Turm aus
              fluffigen Pancakes mit verschiedenen Toppings zum Selbstbelegen.
              Die <strong>Fruit Fiesta</strong> kombiniert frische Früchte mit
              Joghurt und knusprigem Granola. Unsere <strong>Mix Box</strong>{" "}
              vereint die Highlights aus Waffeln, Crêpes und Pancakes. Und für
              die große Runde gibt es die{" "}
              <strong>Fede &amp; Friends Box</strong> — unser XL-Paket, das
              locker 8 bis 10 Kinder satt und glücklich macht. Die Boxen starten
              ab 24,90&thinsp;€ und sind damit eine unkomplizierte und
              bezahlbare Lösung für jede Kinderfeier.
            </p>

            <h2>Pakete, Preise und Buchung</h2>
            <p>
              Unsere Geburtstags-Pakete starten ab 49,90&thinsp;€ für eine
              Gruppe bis zu 8 Kinder. Im Paket enthalten sind eine Fede Box nach
              Wahl, Getränke und natürlich Geburtstagskerzen. Für größere
              Gruppen von bis zu 20 Kindern erstellen wir gerne ein
              individuelles Angebot. Die Reservierung ist ganz einfach: Nutze
              unser <strong>Online-Kontaktformular</strong>, schreibe uns eine
              Nachricht per <strong>WhatsApp</strong> an{" "}
              {BUSINESS.whatsappDisplay} oder ruf uns direkt an unter{" "}
              {BUSINESS.phone}. Wir empfehlen, mindestens eine Woche im Voraus
              zu buchen, damit wir alles perfekt vorbereiten können.
            </p>

            <h2>Catering-Option — Wir kommen zu euch!</h2>
            <p>
              Ihr möchtet den Kindergeburtstag lieber bei euch zuhause, im
              Garten oder in einem Gemeinschaftsraum feiern? Kein Problem! Wir
              liefern unsere Fede Boxen und Sweettables im gesamten
              Lahn-Dill-Kreis und darüber hinaus. Ob Solms, Braunfels, Aßlar,
              Herborn oder sogar Gießen und Marburg — wir bringen die
              Party-Desserts direkt an euren Veranstaltungsort. Frisch
              zubereitet, liebevoll verpackt und bereit zum Schlemmen.
            </p>

            <h2>Anreise aus der Region</h2>
            <p>
              Hey Fede! liegt im Herzen der Wetzlarer Altstadt und ist aus der
              gesamten Region Mittelhessen bequem erreichbar. Von Gießen sind es
              nur 20 Minuten über die B49, von Marburg ca. 40 Minuten über die
              B3. Familien aus Solms, Braunfels oder Aßlar erreichen uns in
              unter 15 Minuten. Auch aus Herborn und Dillenburg lohnt sich die
              Fahrt — denn einen Kindergeburtstag wie bei Hey Fede! gibt es nur
              einmal im gesamten Lahn-Dill-Kreis.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ─── Kinderbecher Highlights ─── */}
      <section className="py-24 bg-sand">
        <FadeUp className="max-w-5xl mx-auto px-6">
          <SectionTitle sub="Die Stars jeder Kinderparty">
            Unsere Kinderbecher
          </SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {KINDERBECHER.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-peach/20 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="font-heading text-lg text-charcoal mb-1">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-brown-mid">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── Fede Boxen Highlights ─── */}
      <section className="py-24 bg-white">
        <FadeUp className="max-w-5xl mx-auto px-6">
          <SectionTitle sub="Sharing is caring — ab 24,90 €">
            Fede Boxen für Kindergruppen
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {FEDE_BOXEN.map((box, i) => (
              <div
                key={i}
                className="bg-sand rounded-3xl p-8 border border-peach/20 flex items-start gap-5 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl shrink-0">{box.emoji}</span>
                <div>
                  <h3 className="font-heading text-xl text-charcoal mb-1">
                    {box.name}
                  </h3>
                  <p className="font-body text-brown-mid leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#ffffff" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Bereit für die süßeste Party des Jahres?
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10">
            Kontaktiere uns jetzt und wir planen gemeinsam den perfekten
            Kindergeburtstag — ob bei uns in der Langgasse oder als Catering bei
            dir zuhause. Wir freuen uns auf euch!
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-white text-terracotta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors"
          >
            Jetzt Kindergeburtstag anfragen →
          </a>
        </FadeUp>
      </section>

      {/* ─── Echte Fotos ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Unser Spielbereich & Kinderecke
          </h2>
          <p className="font-body text-charcoal/60 text-center mb-8 max-w-lg mx-auto">
            Spielzimmer, Wickelraum & alles für die Kleinen bei Hey Fede!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getPhotosForPage("/kindergeburtstag-wetzlar").map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-clay group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-24 bg-white">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Antworten auf deine Fragen">
            Häufig gestellte Fragen
          </SectionTitle>
          <div className="mt-12 space-y-6">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-sand rounded-2xl border border-peach/20 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-heading text-lg text-charcoal">
                  {faq.q}
                  <span className="text-terracotta group-open:rotate-45 transition-transform text-2xl">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 font-body text-brown-mid leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── Entdecke mehr ─── */}
      <section className="py-20 bg-sand">
        <FadeUp className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-charcoal mb-10">
            Entdecke mehr von Hey Fede!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CROSS_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="bg-white rounded-2xl p-5 border border-peach/20 hover:border-terracotta/40 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl block mb-2">{link.emoji}</span>
                <span className="font-body font-bold text-sm text-charcoal group-hover:text-terracotta transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── Schema Scripts ─── */}
      <SchemaScripts schema={[getPageSchema(), buildFaqSchema(FAQ_DATA)]} />
    </div>
  );
}
