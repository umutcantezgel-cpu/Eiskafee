import React from "react";
import Image from "next/image";
import { getPhotosForPage } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE } from "@/lib/seo/business-data";
import { buildFaqSchema } from "@/lib/seo/schema/pages";
import { CheckCircle2 } from "lucide-react";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Vegane & Halal Desserts Wetzlar | Hey Fede!",
  description:
    "Inklusiver Genuss in der Wetzlarer Altstadt. Entdecke unsere Auswahl an 100% veganen Eis-Sorten, laktosefreien Shakes und Halal-zertifizierten Süßspeisen.",
  path: "/vegane-desserts-wetzlar",
  keywords: [
    "Veganes Café Wetzlar",
    "Halal Desserts Gießen",
    "Veganes Eis Lahn-Dill-Kreis",
    "Laktosefreie Waffeln Hessen",
    "Pflanzliche Süßspeisen",
    "Halal Süßigkeiten Wetzlar",
    "Vegan essen gehen Wetzlar",
    "Hey Fede Vegan",
  ],
});

function getDietarySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vegane & Halal Desserts bei Hey Fede!",
    description:
      "Informationen zu pflanzlichen, laktosefreien und Halal-zertifizierten Dessert-Optionen in unserer Wetzlarer Dessertbar.",
    about: {
      "@type": "Thing",
      name: "Dietary Options (Vegan, Halal, Lactose-Free)",
    },
    provider: {
      "@type": "Restaurant",
      "@id": `${SITE.url}/#localbusiness`,
    },
  };
}

const FAQ_DATA = [
  {
    q: "Welche veganen Desserts gibt es bei Hey Fede!?",
    a: "Wir bieten vegane Eissorten, pflanzliche Crêpes, laktosefreie Shakes und verschiedene vegane Toppings. Unsere Auswahl wechselt saisonal — frage einfach unser Team nach den aktuellen Optionen.",
  },
  {
    q: "Sind die Produkte bei Hey Fede! halal?",
    a: "Ja, ein Großteil unserer Desserts ist halal-geeignet. Wir verwenden kein Schweinefleisch und achten auf halal-konforme Zutaten. Bei Fragen hilft dir unser Team gerne weiter.",
  },
  {
    q: "Gibt es laktosefreie Optionen?",
    a: "Ja! Wir bieten laktosefreie Eissorten und können viele Desserts auch mit pflanzlichen Alternativen zubereiten. Perfekt für Gäste mit Laktoseintoleranz.",
  },
  {
    q: "Sind die veganen Optionen extra gekennzeichnet?",
    a: "Unser Team berät dich gerne vor Ort, welche Produkte vegan, laktosefrei oder halal sind. Auf unserer Speisekarte findest du auch entsprechende Hinweise.",
  },
  {
    q: "Kann ich vegane Desserts auch bestellen und liefern lassen?",
    a: "Ja, über hey-fede.de/order-hub kannst du auch vegane und halal Optionen bestellen. Wir liefern in Wetzlar und im Lahn-Dill-Kreis.",
  },
];

const CROSS_LINKS = [
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🍨",
    label: "Eisdiele & Shakes",
  },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes" },
  { href: "/eiscafe-wetzlar", emoji: "☕", label: "Eiscafé" },
  { href: "/events-catering-hessen", emoji: "🎉", label: "Catering & Events" },
  { href: "/kindergeburtstag-wetzlar", emoji: "🎂", label: "Kindergeburtstag" },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
];

export default function VeganeDessertsPage() {
  return (
    <div className="bg-bg-creme">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-24 bg-[#e6efeb] overflow-hidden border-b border-[#c8dbd1]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#4a7c59] text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Inklusiver Genuss in Mittelhessen
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-[#2d4b36] mb-6 leading-[1.1]">
              Vegane & Halal
              <br />
              Süßspeisen
            </h1>
            <p className="font-body text-lg text-[#3e664b] leading-relaxed mb-10 max-w-[500px]">
              Gutes Essen sollte für alle da sein. Wir sind stolz darauf, eine
              der besten Anlaufstellen im Lahn-Dill-Kreis und dem Raum Gießen
              für pflanzliche Eiscreme und Halal-konforme Desserts zu sein.
            </p>
            <PrimaryButton
              href="/menu"
              sectionBg="#e6efeb"
              className="bg-[#4a7c59] text-white hover:bg-[#3e664b]"
            >
              Zur Speisekarte
            </PrimaryButton>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#d4e5da] rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🌱</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform -rotate-6">
              <p className="font-heading text-[#4a7c59] text-2xl">100%</p>
              <p className="font-body font-bold text-xs uppercase tracking-widest text-charcoal">
                Pflanzlich
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & SEO Text */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Ohne Kompromisse beim Geschmack">
            Pflanzlich & Lecker
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Warum inklusives Essen wichtig ist</h2>
            <p>
              Bei Hey Fede! in der Wetzlarer Altstadt glauben wir, dass jeder
              Mensch das Recht auf großartigen Genuss hat — unabhängig von
              Ernährungsform, Allergie oder religiöser Überzeugung. Ob du dich
              bewusst vegan ernährst, eine Laktoseintoleranz hast oder Wert auf
              Halal-konforme Zutaten legst: In unserer Dessertbar in der
              Langgasse 68 findest du eine große Auswahl an Süßspeisen, die ohne
              Kompromisse beim Geschmack auskommen. Wir möchten, dass sich jeder
              Gast willkommen fühlt, und das spiegelt sich in jedem Detail
              unserer Speisekarte wider.
            </p>

            <h2>Veganes Eis: Mango, Erdbeere, Zitrone & mehr</h2>
            <p>
              Unsere fruchtigen Sorbets gehören zu den beliebtesten Produkten
              bei Hey Fede!. Ob sonnig-tropische Mango, klassisch-süße Erdbeere
              oder erfrischend-spritzige Zitrone — jede Sorte wird mit echten
              Früchten und ohne tierische Produkte hergestellt. Das Ergebnis ist
              ein intensives Geschmackserlebnis, das dem klassischen Milcheis in
              nichts nachsteht. Zusätzlich bieten wir pflanzliche
              Milchalternativen auf Hafer-, Soja- und Mandelbasis an, sodass
              auch cremige Eissorten wie Schokolade oder Vanille in veganer
              Variante genossen werden können. Vegane Cookie-Crumbles, dunkle
              Premium-Schokoladensoße und frische Früchte runden jede Kreation
              perfekt ab.
            </p>

            <h2>Vegane Crêpes & Pancake-Optionen</h2>
            <p>
              Neben unserem Eis bieten wir auch vegane Crêpes und Pancakes an.
              Unser Crêpe-Teig kann komplett ohne Ei und Milch zubereitet
              werden, ohne dass die zarte, goldbraune Textur verloren geht.
              Gefüllt mit frischen Bananen, veganem Nutella oder hausgemachtem
              Fruchtpüree sind unsere pflanzlichen Crêpes ein echtes Highlight.
              Auch unsere fluffigen Pancakes lassen sich auf Wunsch vegan
              zubereiten — mit Ahornsirup, Beeren und knusprigem Granola.
              Perfekt als süßes Frühstück, Nachmittags-Snack oder als Dessert
              nach einem Spaziergang entlang der Lahn.
            </p>

            <h2>Halal-Transparenz bei Hey Fede!</h2>
            <p>
              Viele unserer Gäste aus Wetzlar, Gießen und Marburg legen großen
              Wert auf Halal-konforme Ernährung. Bei Hey Fede! nehmen wir dieses
              Bedürfnis ernst. Wir verwenden grundsätzlich kein Schweinefleisch
              und keine Schweinegelatine in unseren Produkten. Unsere
              Gummibärchen und Marshmallows basieren auf pflanzlichem Pektin
              statt auf tierischer Gelatine. Es kommt kein Alkohol in unsere
              Desserts oder Soßen. Alle unsere Zutaten stammen aus
              nachverfolgbaren, zertifizierten Quellen. Unser Team ist geschult
              und berät dich jederzeit gerne zu den Inhaltsstoffen einzelner
              Produkte. So kannst du sorgenfrei genießen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="font-heading text-3xl text-charcoal mb-6">
                Veganes Eis & Shakes
              </h2>
              <ul className="space-y-4">
                {[
                  "Fruchtige Sorbets (Mango, Zitrone, Erdbeere)",
                  "Pflanzliche Milchalternativen (Hafer, Soja, Mandel)",
                  "Vegane Cookie-Crumbles & Toppings",
                  "100% dunkle Premium-Schokoladensoße",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#4a7c59] shrink-0 mt-0.5" />
                    <span className="font-body text-brown-mid text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-brown-mid mt-6 leading-relaxed">
                Egal ob du dich aus ethischen Gründen rein pflanzlich ernährst
                oder laktoseintolerant bist – bei uns musst du auf nichts
                verzichten. Genieße unsere veganen Fruit-Shakes, während du
                durch die Wetzlarer Altstadt schlenderst.
              </p>
            </div>

            <div className="bg-cream rounded-3xl p-8 border border-peach/30">
              <h2 className="font-heading text-3xl text-charcoal mb-6">
                Halal Transparenz
              </h2>
              <p className="font-body text-brown-mid leading-relaxed mb-4">
                Viele unserer Gäste aus Wetzlar, Gießen und Marburg legen großen
                Wert auf Halal-konforme Ernährung. Bei uns gibt es volle
                Transparenz:
              </p>
              <ul className="space-y-4">
                {[
                  "Kein Alkohol in unseren Desserts oder Soßen",
                  "Gelatinefreie Marshmallows & Gummibärchen (auf pflanzlicher Pektin-Basis)",
                  "Zutaten aus nachverfolgbaren, sicheren Quellen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
                    <span className="font-body text-brown-mid">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Location & Accessibility */}
      <section className="py-24 bg-sand">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Mitten in der Altstadt, für alle erreichbar">
            Dein Ziel für inklusive Desserts
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Zentral in der Wetzlarer Altstadt</h2>
            <p>
              Unsere Dessertbar liegt in der Langgasse 68, mitten im Herzen der
              historischen Wetzlarer Altstadt. Die Lage ist ideal zu Fuß, mit
              dem Bus oder dem Auto erreichbar. Parkplätze findest du in
              unmittelbarer Nähe am Forum Wetzlar, und die Bushaltestellen der
              Linie sind nur wenige Gehminuten entfernt. So steht deinem veganen
              oder Halal-konformen Genussmoment nichts im Wege — egal ob du aus
              der Innenstadt kommst oder von weiter weg anreist.
            </p>

            <h2>Gäste aus Gießen, Marburg & dem Lahn-Dill-Kreis</h2>
            <p>
              Immer mehr Besucher mit speziellen Ernährungsbedürfnissen kommen
              gezielt aus Gießen, Marburg, Herborn und dem gesamten
              Lahn-Dill-Kreis zu uns. Der Grund ist einfach: Es gibt in der
              Region nur wenige Cafés und Dessertbars, die eine so breite
              Auswahl an veganen, laktosefreien und Halal-konformen Süßspeisen
              anbieten. Bei Hey Fede! musst du nicht lange fragen oder
              komplizierte Zutatenlisten studieren — wir beraten dich ehrlich
              und persönlich. Für viele Familien ist der Besuch bei uns ein
              fester Bestandteil des Wochenendausflugs geworden, weil hier
              wirklich jeder etwas Passendes findet. Ob Oma mit
              Laktoseintoleranz, der vegane Teenager oder die kleinen Kinder,
              die einfach ein leckeres Eis wollen — bei uns geht niemand leer
              aus.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4a7c59] relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#F5EDE3" toColor="#4a7c59" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Vegane Desserts bis an die Haustür?
          </h2>
          <p className="font-body text-lg text-white/90 mb-10">
            Wir liefern unsere veganen und Halal-konformen Desserts direkt zu
            dir nach Hause. Bestelle bequem über unseren Online-Shop — wir
            liefern in Wetzlar und im gesamten Lahn-Dill-Kreis.
          </p>
          <a
            href="/lieferservice-desserts-lahn-dill"
            className="inline-block bg-white text-[#4a7c59] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors"
          >
            Zum Lieferservice →
          </a>
        </FadeUp>
      </section>

      {/* Echte Fotos */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Vegane Vielfalt bei Hey Fede!
          </h2>
          <p className="font-body text-charcoal/60 text-center mb-8 max-w-lg mx-auto">
            Echte Fotos unserer pflanzlichen Köstlichkeiten
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getPhotosForPage("/vegane-desserts-wetzlar").map((photo) => (
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

      {/* FAQ Section */}
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

      {/* Entdecke mehr */}
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

      <SchemaScripts schema={[getDietarySchema(), buildFaqSchema(FAQ_DATA)]} />
    </div>
  );
}
