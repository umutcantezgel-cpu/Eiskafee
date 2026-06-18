import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE, BUSINESS } from "@/lib/seo/business-data";
import { buildFaqSchema } from "@/lib/seo/schema/pages";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Dessert Catering & Events in Hessen | Hey Fede!",
  description:
    "Mache dein Event unvergesslich! Dessert-Catering, Fede-Boxen und Sweettables für Hochzeiten & Firmenfeiern in Gießen, Marburg, Wetzlar und Frankfurt.",
  path: "/events-catering-hessen",
  keywords: [
    "Dessert Catering Wetzlar",
    "Hochzeit Sweettable Gießen",
    "Catering Hessen",
    "Firmenfeier Marburg Dessert",
    "Fede Boxen Wetzlar",
    "Event Catering Lahn-Dill-Kreis",
    "Süßes Catering Frankfurt",
    "Hey Fede Catering",
    "Kindergeburtstag Wetzlar",
    "Kindergeburtstag Catering",
  ],
});

function getCateringSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hey Fede! Dessert Catering & Events",
    description:
      "Exklusives Dessert-Catering für Hochzeiten, Geburtstage und Firmen-Events. Wir liefern unsere Fede-Boxen und Sweettables im Radius von 50 km (Wetzlar, Gießen, Marburg, Butzbach, Frankfurt-Nord).",
    provider: {
      "@type": "Restaurant",
      "@id": `${SITE.url}/#localbusiness`,
    },
    areaServed: [
      { "@type": "City", name: "Wetzlar" },
      { "@type": "City", name: "Gießen" },
      { "@type": "City", name: "Marburg" },
      { "@type": "City", name: "Frankfurt am Main" },
      { "@type": "City", name: "Limburg an der Lahn" },
      { "@type": "City", name: "Bad Nauheim" },
      { "@type": "City", name: "Butzbach" },
      { "@type": "AdministrativeArea", name: "Hessen" },
    ],
    serviceType: "Catering",
  };
}

const FAQ_DATA = [
  {
    q: "Welche Catering-Optionen bietet Hey Fede! an?",
    a: "Wir bieten Dessert-Catering mit Bubble Waffles, Crêpes, Eisbecher und unseren beliebten Fede Boxen. Perfekt für Hochzeiten, Firmenfeiern, Geburtstage und private Events in Wetzlar, Gießen, Marburg und ganz Hessen.",
  },
  {
    q: "Wie viel kostet das Dessert-Catering?",
    a: "Die Preise richten sich nach Gruppengröße und Auswahl. Unsere Fede Boxen starten ab 24,90€. Für individuelle Catering-Angebote kontaktiere uns über unser Formular auf hey-fede.de/kontakt.",
  },
  {
    q: "Für wie viele Personen liefert Hey Fede! Catering?",
    a: "Wir liefern Catering für Gruppen von 10 bis 200+ Personen. Von kleinen Familienfeiern bis hin zu großen Firmenvents — wir passen unser Angebot an eure Bedürfnisse an.",
  },
  {
    q: "Bietet Hey Fede! auch Kindergeburtstag-Catering an?",
    a: "Ja! Kindergeburtstage sind einer unserer beliebtesten Anlässe. Wir bringen Pancakes, Waffeln, Eis und bunte Kinderbecher direkt zu eurer Feier. Mehr Infos unter hey-fede.de/kindergeburtstag-wetzlar.",
  },
  {
    q: "In welchem Gebiet liefert Hey Fede! Catering?",
    a: "Wir liefern Catering in ganz Hessen, mit Schwerpunkt Wetzlar, Gießen, Marburg, Frankfurt, Limburg, Dillenburg und den gesamten Lahn-Dill-Kreis.",
  },
];

const CROSS_LINKS = [
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🍨",
    label: "Eisbecher & Shakes",
  },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes" },
  { href: "/eiscafe-wetzlar", emoji: "☕", label: "Eiscafé" },
  { href: "/kindergeburtstag-wetzlar", emoji: "🎂", label: "Kindergeburtstag" },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
];

export default function CateringPage() {
  return (
    <div className="bg-bg-creme">
      <section className="relative pt-[120px] pb-24 bg-brown-mid text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
            B2B & Private Feiern in ganz Hessen
          </div>
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-[1.1]">
            Dessert Catering, das
            <br />
            Begeisterung weckt
          </h1>
          <p className="font-body text-lg text-cream/80 leading-relaxed mb-10 max-w-[600px] mx-auto">
            Von der eleganten Hochzeit in Marburg bis zum Corporate Event im
            Frankfurter Norden. Wir bringen die Magie der Bubble Waffles und
            unsere exklusiven Fede Boxen direkt auf dein Event.
          </p>
          <PrimaryButton
            href="/kontakt"
            sectionBg="#5c3d35"
            className="bg-white text-charcoal hover:bg-cream"
          >
            Jetzt Event-Anfrage stellen
          </PrimaryButton>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-1">
          <WaveDivider fromColor="#5c3d35" toColor="#F5EFE8" variant={2} />
        </div>
      </section>

      <section className="py-24 bg-cream relative">
        <FadeUp className="max-w-5xl mx-auto px-6">
          <SectionTitle sub="Das Highlight deiner Feier">
            Die Fede Boxen
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid">
              <h2>Süße Vielfalt, perfekt präsentiert</h2>
              <p>
                Kuchenbüffet war gestern. Überrasche deine Gäste oder
                Mitarbeiter mit unseren maßgeschneiderten{" "}
                <strong>Fede Boxen</strong>. Diese edlen Präsentationsboxen
                werden frisch in unserer Wetzlarer Dessertbar bestückt und
                enthalten eine sorgfältig kuratierte Auswahl unserer besten
                Kreationen.
              </p>
              <ul>
                <li>
                  <strong>Bubble Waffle Minis:</strong> Handlich, knusprig und
                  perfekt portioniert.
                </li>
                <li>
                  <strong>Crêpe-Röllchen:</strong> Gefüllt mit
                  Premium-Nougatcreme und frischen Erdbeeren.
                </li>
                <li>
                  <strong>Churros & Dips:</strong> Spanischer Flair mit
                  hausgemachter belgischer Schokoladensoße.
                </li>
              </ul>
              <p>
                Egal, ob du ein Team-Meeting in Gießen aufwerten willst, oder
                einen Sweettable für eine Traumhochzeit in Braunfels planst –
                wir haben die perfekte Box für dich.
              </p>

              <h2>Kindergeburtstag Catering in Wetzlar & Umgebung</h2>
              <p>
                Einer der beliebtesten Anlässe für unser Dessert-Catering ist
                der <strong>Kindergeburtstag</strong>. Eltern aus Wetzlar,
                Gießen, Herborn und dem gesamten Lahn-Dill-Kreis buchen unsere
                Fede Boxen, um den großen Tag ihres Kindes unvergesslich zu
                machen. Statt klassischer Kuchen und Muffins bringen wir Pancake
                Towers, bunte Kinderbecher mit Softeis und knusprige
                Mini-Waffeln direkt zur Feier — ob im Garten, im Gemeindehaus
                oder in der Kita. Unsere Kindergeburtstag-Pakete sind speziell
                auf kleine Gäste abgestimmt: kindgerechte Portionen, farbenfrohe
                Präsentation und natürlich jede Menge Spaß beim
                Topping-Aussuchen. Viele Familien kombinieren unseren
                Catering-Service mit einer kreativen Bastelstation oder einem
                Motto-Event. Wir liefern alles fertig portioniert und
                angerichtet, sodass Mama und Papa den Geburtstag entspannt
                genießen können. Mehr Infos zu unseren speziellen
                Kindergeburtstag-Angeboten findest du unter{" "}
                <a
                  href="/kindergeburtstag-wetzlar"
                  className="text-terracotta underline"
                >
                  Kindergeburtstag Wetzlar
                </a>
                .
              </p>

              <h2>So funktioniert unser Event-Catering</h2>
              <p>
                Der Ablauf ist denkbar einfach: Du schickst uns deine Anfrage
                über unser Kontaktformular auf{" "}
                <a href="/kontakt" className="text-terracotta underline">
                  hey-fede.de/kontakt
                </a>{" "}
                mit dem gewünschten Datum, der Personenzahl und deinen
                Wunschdesserts. Wir erstellen dir ein individuelles Angebot
                innerhalb von 24 Stunden. Am Tag deines Events liefern wir alles
                frisch aus unserer Dessertbar in der Langgasse 68 in der
                Wetzlarer Altstadt. Unser Lieferradius umfasst ganz Hessen — von
                Frankfurt über Limburg und Dillenburg bis nach Marburg und
                natürlich den gesamten Lahn-Dill-Kreis.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-[40px] border border-peach/50 shadow-lg p-8 flex flex-col justify-center items-center text-center">
                <span className="text-7xl mb-6">🎁</span>
                <h3 className="font-heading text-2xl text-charcoal mb-2">
                  Corporate & Wedding
                </h3>
                <p className="font-body text-brown-mid">
                  Lieferung im gesamten 50km Radius
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-sand">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Antworten auf deine Fragen">
            Häufig gestellte Fragen
          </SectionTitle>
          <div className="mt-12 space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-peach/20 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-heading text-lg text-charcoal">
                  {faq.q}
                  <span className="text-terracotta group-open:rotate-45 transition-transform text-2xl ml-4 shrink-0">
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

      {/* Cross Links */}
      <section className="py-20 bg-bg-creme">
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

      <SchemaScripts schema={[getCateringSchema(), buildFaqSchema(FAQ_DATA)]} />
    </div>
  );
}
