import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { buildFaqSchema } from "@/lib/seo/schema/pages";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE, BUSINESS } from "@/lib/seo/business-data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Eiscafé Wetzlar | Hausgemachtes Eis & Desserts | Hey Fede!",
  description:
    "Das gemütlichste Eiscafé in der Wetzlarer Altstadt. Hausgemachte Eisbecher, Crêpes, Bubble Waffles und Special Shakes. Besuche Hey Fede! in der Langgasse.",
  path: "/eiscafe-wetzlar",
  keywords: [
    "Eiscafé Wetzlar",
    "Eiscafe Wetzlar",
    "Eis essen Wetzlar",
    "Eis bestellen Wetzlar",
    "Eisdiele Altstadt Wetzlar",
    "Café Wetzlar",
    "Eis Wetzlar Langgasse",
    "Hey Fede Eiscafé",
  ],
});

/* ─── FAQ Data ─── */
const FAQ_DATA = [
  {
    q: "Wo befindet sich das Eiscafé Hey Fede! in Wetzlar?",
    a: "Hey Fede! liegt in der Langgasse 68 in der Wetzlarer Altstadt, nur wenige Gehminuten vom Dom und dem Lottehaus entfernt. Du findest uns in der Fußgängerzone.",
  },
  {
    q: "Welche Eissorten gibt es bei Hey Fede!?",
    a: "Wir bieten eine große Auswahl an hausgemachten Eissorten — von Klassikern wie Vanille, Schokolade und Erdbeere bis hin zu besonderen Kreationen wie Pistazie, Amarena und saisonalen Sorten. Alle Eissorten werden täglich frisch zubereitet.",
  },
  {
    q: "Kann ich bei Hey Fede! auch Eis bestellen und liefern lassen?",
    a: "Ja! Über unsere Website hey-fede.de/order-hub kannst du Eisbecher, Shakes und alle anderen Desserts zur Lieferung oder Abholung bestellen. Wir liefern in Wetzlar und im Lahn-Dill-Kreis.",
  },
  {
    q: "Gibt es bei Hey Fede! auch veganes Eis?",
    a: "Ja, wir bieten verschiedene vegane Eissorten und pflanzliche Alternativen an. Auch laktosefreie Optionen sind verfügbar. Frage einfach unser Team nach den aktuellen veganen Sorten.",
  },
  {
    q: "Hat das Eiscafé Hey Fede! Sitzplätze?",
    a: "Ja! Wir haben gemütliche Sitzplätze innen und außen in der schönen Wetzlarer Altstadt. Perfekt für einen Kaffee mit Eis, eine Dessert-Pause oder einen Ausflug mit der Familie.",
  },
];

/* ─── Cross-Links (excluding self) ─── */
const CROSS_LINKS = [
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🥤",
    label: "Eisdiele & Shakes",
  },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes" },
  { href: "/events-catering-hessen", emoji: "🎉", label: "Catering & Events" },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
  {
    href: "/kindergeburtstag-wetzlar",
    emoji: "🎂",
    label: "Kindergeburtstag",
  },
];

/* ─── Page Schema ─── */
function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "IceCreamShop",
      name: "Hey Fede! Eiscafé Wetzlar",
      description:
        "Gemütliches Eiscafé mit hausgemachtem Eis, Crêpes und Bubble Waffles in der Wetzlarer Altstadt.",
      image: `${SITE.url}/og/home.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        postalCode: BUSINESS.postalCode,
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.latitude,
        longitude: BUSINESS.longitude,
      },
      servesCuisine: ["Desserts", "Eis", "Crêpes", "Waffeln"],
      priceRange: "€€",
    },
  };
}

export default function EiscafeWetzlarPage() {
  return (
    <div className="bg-bg-creme">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Seit 2023 in der Langgasse
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Dein Eiscafé in der Wetzlarer Altstadt
            </h1>
            <p className="font-body text-lg text-brown-mid leading-relaxed mb-8 max-w-[500px]">
              Hausgemachtes Eis, frische Crêpes, knusprige Bubble Waffles und
              legendäre Special Shakes — mitten in der historischen
              Fußgängerzone. Hey Fede! ist dein gemütlicher Anlaufpunkt für süße
              Momente in Wetzlar.
            </p>
            <PrimaryButton href="/menu">Unsere Karte entdecken →</PrimaryButton>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-beige rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🍨</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform -rotate-6">
              <p className="font-heading text-terracotta text-2xl">Täglich</p>
              <p className="font-body font-bold text-xs uppercase tracking-widest text-charcoal">
                Frisch gemacht
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content & SEO Text ─── */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Mehr als nur eine Eisdiele">
            Das besondere Eiscafé-Erlebnis
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Warum Hey Fede! das beste Eiscafé in Wetzlar ist</h2>
            <p>
              In der malerischen Wetzlarer Altstadt, umgeben von Fachwerkhäusern
              und historischen Gassen, hat sich Hey Fede! als das beliebteste
              Eiscafé der Stadt etabliert. Was 2023 mit einer großen
              Leidenschaft für hausgemachte Desserts begann, ist heute ein
              fester Bestandteil der Wetzlarer Gastronomieszene. In der
              Langgasse 68, nur wenige Schritte vom Wetzlarer Dom und dem
              berühmten Lottehaus entfernt, empfangen wir dich in einer warmen,
              einladenden Atmosphäre — perfekt für eine Auszeit vom Alltag.
            </p>
            <p>
              Was uns von anderen Eiscafés in Wetzlar und dem Lahn-Dill-Kreis
              unterscheidet? Wir setzen kompromisslos auf Qualität. Jede
              Eissorte wird täglich frisch in unserer eigenen Küche zubereitet.
              Wir verwenden keine industriellen Fertigmischungen, sondern echte
              Zutaten: frische Milch, reife Früchte und hochwertige Schokolade.
              Das Ergebnis ist ein Eis, das du so in keinem Supermarkt findest —
              cremig, intensiv im Geschmack und einfach unwiderstehlich.
            </p>

            <h2>Unsere Spezialitäten: Viel mehr als nur Eis</h2>
            <p>
              Hey Fede! ist weit mehr als eine klassische Eisdiele. Unser
              Eiscafé in Wetzlar bietet dir ein komplettes Dessert-Erlebnis.
              Unsere legendären <strong>Eisbecher im 500ml-Format</strong> sind
              großzügige Kunstwerke, geschichtet aus seidigem Softeis,
              fruchtigen Soßen, knusprigen Toppings und frischen Früchten. Jeder
              Becher wird mit Liebe und Sorgfalt zusammengestellt und ist ein
              echtes Geschmackserlebnis für alle Sinne.
            </p>
            <p>
              Doch das ist noch nicht alles. Unsere{" "}
              <strong>Special Shakes</strong> sind wahre Instagram-Stars: üppig
              dekorierte Milchshakes mit Sahne, Brownie-Stücken, Keksen und
              aufwendig verzierten Gläsern. Dazu kommen unsere frischen{" "}
              <strong>Crêpes</strong>, die wir direkt vor deinen Augen
              zubereiten und mit Nutella, frischen Beeren oder Eis füllen. Und
              natürlich unsere knusprigen <strong>Bubble Waffles</strong> — das
              Streetfood-Original aus Hongkong, außen karamellisiert und innen
              herrlich fluffig, gefüllt mit Softeis und Premium-Toppings.
            </p>

            <h2>Dein Ausflugsziel in der Altstadt</h2>
            <p>
              Ob du nach einem Bummel durch die Wetzlarer Fußgängerzone eine
              süße Pause brauchst, mit der Familie einen Sonntagsausflug planst
              oder nach einem romantischen Spaziergang entlang der Lahn ein
              Dessert genießen möchtest — Hey Fede! ist der perfekte Ort dafür.
              Unsere gemütlichen Sitzplätze innen und auf unserer Außenterrasse
              laden zum Verweilen ein. Genieße dein Eis mit Blick auf die
              historische Architektur der Altstadt und lasse den Stress des
              Alltags hinter dir.
            </p>
            <p>
              Viele unserer Stammgäste kommen nicht nur aus Wetzlar selbst,
              sondern fahren regelmäßig aus <strong>Gießen</strong>,{" "}
              <strong>Marburg</strong>, Herborn, Braunfels und dem gesamten{" "}
              <strong>Lahn-Dill-Kreis</strong>, um unsere Desserts zu genießen.
              Die Fahrt lohnt sich — versprochen! Ob Studenten aus der
              Universitätsstadt Gießen, Familien aus dem Umland oder Touristen,
              die die Goethe-Stadt entdecken: Alle finden bei uns ihren süßen
              Lieblingsplatz.
            </p>

            <h3>Qualität, die man schmeckt</h3>
            <p>
              Unser Versprechen an dich: Bei Hey Fede! bekommst du
              ausschließlich hausgemachte Produkte aus frischen, hochwertigen
              Zutaten. Wir bieten auch vegane Eissorten und pflanzliche
              Alternativen an, damit wirklich jeder bei uns fündig wird.
              Laktosefreie Optionen? Haben wir natürlich auch. Frage einfach
              unser freundliches Team — wir beraten dich gerne und finden
              gemeinsam dein perfektes Dessert.
            </p>
            <p>
              Du möchtest unsere Desserts lieber zu Hause genießen? Kein
              Problem! Über unseren Lieferservice kannst du Eisbecher, Crêpes
              und Shakes bequem nach Hause bestellen. Wir liefern in ganz
              Wetzlar und im Lahn-Dill-Kreis. Oder du holst deine Bestellung
              direkt bei uns in der Langgasse ab — schnell, unkompliziert und
              immer frisch.
            </p>
          </div>
        </FadeUp>
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

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#ffffff" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Bereit für dein Lieblingsdessert?
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10">
            Entdecke unsere gesamte Karte mit Eisbechern, Crêpes, Bubble
            Waffles, Special Shakes und vielem mehr. Ob vor Ort in der Langgasse
            oder bequem nach Hause geliefert — wir freuen uns auf dich!
          </p>
          <a
            href="/menu"
            className="inline-block bg-white text-terracotta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors"
          >
            Unsere Karte entdecken →
          </a>
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

      <SchemaScripts schema={[getPageSchema(), buildFaqSchema(FAQ_DATA)]} />
    </div>
  );
}
