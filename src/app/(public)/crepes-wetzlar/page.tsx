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

export const metadata = buildMetadata({
  title: "Crêpes Wetzlar | Frisch & Handgemacht | Hey Fede!",
  description:
    "Die besten Crêpes in Wetzlar! Süß oder herzhaft, frisch zubereitet in der Altstadt. Von Nutella über Pistazie bis Schinken-Käse. Jetzt bei Hey Fede! probieren.",
  path: "/crepes-wetzlar",
  keywords: [
    "Crêpes Wetzlar",
    "Crêperie Wetzlar",
    "Crêpes bestellen Wetzlar",
    "Pfannkuchen Wetzlar",
    "Süße Crêpes Hessen",
    "Herzhafte Crêpes Lahn-Dill",
    "Crêpes Gießen",
    "Hey Fede Crêpes",
  ],
});

/* ─── Data ─── */

const FAQ_DATA = [
  {
    q: "Welche Crêpes gibt es bei Hey Fede! in Wetzlar?",
    a: "Wir bieten süße Crêpes (z.B. Nutella, Kinderschokolade, Pistazie, Lotus, Bueno, Yogurette, Zimt & Zucker) und herzhafte Crêpes (Schinken-Käse, Salami-Käse, Caprese). Dazu kannst du dir eine eigene Kreation zusammenstellen.",
  },
  {
    q: "Werden die Crêpes frisch zubereitet?",
    a: "Ja, jede Crêpe wird direkt vor deinen Augen auf unserer heißen Platte frisch gebacken und gerollt. Wir verwenden nur hochwertige Zutaten — vom Teig bis zu den Toppings.",
  },
  {
    q: "Was kostet eine Crêpe bei Hey Fede!?",
    a: "Unsere süßen Crêpes starten ab 4,50€, herzhafte Crêpes ab 5,50€. Eine eigene Kreation mit Wunsch-Toppings ist ebenfalls möglich. Die vollständige Preisliste findest du auf unserer Speisekarte.",
  },
  {
    q: "Gibt es auch vegane Crêpes?",
    a: "Ja! Wir können Crêpes auch mit veganen Zutaten zubereiten. Frage unser Team nach den aktuellen veganen Optionen — wir finden immer eine leckere Lösung.",
  },
  {
    q: "Kann ich Crêpes auch bestellen und liefern lassen?",
    a: "Ja, über unsere Online-Bestellung auf hey-fede.de/order-hub kannst du Crêpes zur Abholung oder Lieferung bestellen. Wir liefern in Wetzlar und Umgebung.",
  },
];

const CROSS_LINKS = [
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🥤",
    label: "Eisdiele & Shakes",
  },
  { href: "/eiscafe-wetzlar", emoji: "🍨", label: "Eiscafé" },
  {
    href: "/events-catering-hessen",
    emoji: "🎉",
    label: "Catering & Events",
  },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚚",
    label: "Lieferservice",
  },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
  {
    href: "/kindergeburtstag-wetzlar",
    emoji: "🎂",
    label: "Kindergeburtstag",
  },
];

/* ─── Schema ─── */

function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "Product",
      name: "Handgemachte Crêpes Wetzlar",
      description:
        "Französische Crêpes frisch zubereitet — süß mit Nutella, Pistazie oder Lotus, oder herzhaft mit Schinken, Käse oder Caprese. Bei Hey Fede! in der Wetzlarer Altstadt.",
      image: `${SITE.url}/og/home.png`,
      brand: { "@type": "Brand", name: "Hey Fede!" },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "5.50",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Restaurant",
          "@id": `${SITE.url}/#localbusiness`,
        },
      },
    },
  };
}

/* ─── Page ─── */

export default function CrepesWetzlarPage() {
  return (
    <div className="bg-bg-creme">
      {/* ── Hero Section ── */}
      <section className="relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Frisch von der Platte in der Altstadt
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Crêpes wie in Paris — mitten in Wetzlar
            </h1>
            <p className="font-body text-lg text-brown-mid leading-relaxed mb-8 max-w-[500px]">
              Hauchdünn, butterweich und frisch vor deinen Augen zubereitet.
              Süße Klassiker mit Nutella oder Pistazie, herzhafte Varianten mit
              Schinken und Käse — oder deine ganz eigene Kreation. In der
              Langgasse 68 wird jede Crêpe zum Erlebnis.
            </p>
            <PrimaryButton href="/menu">Alle Crêpes entdecken →</PrimaryButton>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-beige rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🥞</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform rotate-6">
              <p className="font-heading text-terracotta text-2xl">Frisch</p>
              <p className="font-body font-bold text-xs uppercase tracking-widest text-charcoal">
                vor deinen Augen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content & SEO Text ── */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Tradition trifft Wetzlarer Handwerkskunst">
            Von der Bretagne in die Langgasse
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Französische Crêpe-Tradition in der Wetzlarer Altstadt</h2>
            <p>
              Die Geschichte der Crêpe beginnt in der Bretagne, wo dünne
              Buchweizenpfannkuchen seit Jahrhunderten zum Alltag gehören. Was
              in kleinen Küstendörfern als einfaches Bauerngericht entstand,
              wurde über die Jahre zu einem der beliebtesten
              Streetfood-Klassiker Europas. Bei Hey Fede! in der Wetzlarer
              Langgasse bringen wir diese Tradition nach Mittelhessen — mit
              einem modernen Twist und unendlich vielen Variationen.
            </p>
            <p>
              Unsere Crêperie ist ein fester Bestandteil der Wetzlarer Altstadt
              geworden. Direkt in der historischen Langgasse 68 bereiten wir
              jede einzelne Crêpe frisch auf unserer heißen Platte zu. Der Teig
              wird täglich frisch angerührt, und die Zubereitung geschieht
              direkt vor deinen Augen. Von dem Moment, in dem der Teig auf die
              heiße Platte trifft, bis zum fertigen, duftenden Kunstwerk dauert
              es nur wenige Augenblicke — und genau diese Frische schmeckst du
              in jedem Bissen.
            </p>

            <h2>Süße Crêpes — für jeden Geschmack die richtige Füllung</h2>
            <p>
              Unsere süßen Crêpes sind der Klassiker bei Hey Fede! und der
              Liebling vieler Stammgäste aus Wetzlar, Gießen und dem gesamten
              Lahn-Dill-Kreis. Ob du ein Fan von Nutella bist, die feine Süße
              von Kinderschokolade liebst oder den einzigartigen Geschmack von
              Pistaziencreme bevorzugst — wir haben für jeden Gaumen das
              Richtige. Besonders beliebt sind unsere Crêpes mit Lotus-Creme,
              Bueno oder Yogurette. Für den puristischen Genuss empfehlen wir
              die zeitlose Kombination aus Zimt und Zucker, die an warmen
              Nachmittagen in der Altstadt einfach unschlagbar schmeckt. Und für
              die Fruchtliebhaber gibt es selbstverständlich auch Apfelmus als
              frische, leichtere Alternative.
            </p>

            <h3>Herzhafte Crêpes — die perfekte Mittagsalternative</h3>
            <p>
              Crêpes können mehr als nur süß. Unsere herzhaften Varianten sind
              die perfekte Alternative für alle, die mittags keine schwere
              Mahlzeit wollen, aber trotzdem etwas Sättigendes suchen. Die Crêpe
              mit Schinken und Käse ist ein absoluter Klassiker: würziger
              Schinken, geschmolzener Käse und der butterweiche Teig ergeben ein
              harmonisches Geschmackserlebnis. Wer es würziger mag, greift zur
              Salami-Käse-Variante. Und mit unserer Caprese-Crêpe — gefüllt mit
              Tomate, Mozzarella und frischem Basilikum — wird es mediterran und
              leicht. Perfekt für einen schnellen Lunch zwischen Sightseeing am
              Dom und einem Bummel durch die Fachwerkhäuser.
            </p>

            <h2>Deine eigene Kreation — Crêpes nach deinem Geschmack</h2>
            <p>
              Bei Hey Fede! glauben wir an Individualität. Deshalb kannst du dir
              bei uns deine Crêpe ganz nach deinen Wünschen zusammenstellen.
              Wähle aus unserem vielfältigen Sortiment an Cremes, Soßen,
              Früchten und Toppings und kreiere dein ganz persönliches
              Meisterwerk. Ob eine wilde Mischung aus Nutella und Erdbeeren oder
              eine exotische Kombination mit Pistazie und weißer Schokolade —
              deiner Fantasie sind keine Grenzen gesetzt. Unser freundliches
              Team berät dich gerne und hilft dir, die perfekte Kombination zu
              finden.
            </p>

            <h2>Qualität, die man schmeckt</h2>
            <p>
              Wir bei Hey Fede! legen größten Wert auf Qualität. Unser
              Crêpe-Teig wird nach eigenem Rezept frisch zubereitet, und wir
              verwenden ausschließlich hochwertige Zutaten — von der
              Premium-Nuss-Nougat-Creme bis hin zu echtem italienischen
              Mozzarella. Das ist unser Versprechen an dich, egal ob du uns aus
              der Wetzlarer Nachbarschaft, aus Gießen, Marburg oder Limburg
              besuchst.
            </p>

            <h3>Perfekt für jeden Anlass</h3>
            <p>
              Eine Crêpe bei Hey Fede! passt immer — als schneller Snack beim
              Stadtbummel durch die Altstadt, als süßes Dessert nach dem
              Mittagessen, als Mittagsalternative für alle, die es leicht mögen,
              oder als Highlight bei einem Kindergeburtstag. Auch für Events und
              Catering bieten wir unsere frischen Crêpes an. Stell dir eine
              Live-Crêpe-Station auf deiner Feier vor — das Aroma von frisch
              gebackenem Teig und warmer Schokolade wird deine Gäste begeistern.
            </p>
          </div>
        </FadeUp>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#ffffff" variant={1} />

      {/* Echte Fotos */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Unsere Crêpes — frisch vom Eisen
          </h2>
          <p className="font-body text-charcoal/60 text-center mb-8 max-w-lg mx-auto">
            Echte Fotos aus der Hey Fede! Dessertbar in Wetzlar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getPhotosForPage("/crepes-wetzlar").map((photo) => (
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

      {/* ── FAQ Section ── */}
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

      {/* ── CTA Banner ── */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#ffffff" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Crêpes-Lust? Bestell jetzt online!
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10">
            Ob zur Abholung oder direkt an deine Haustür — bestelle deine
            Lieblingscrêpes bequem online. Wir liefern in Wetzlar und den
            gesamten Lahn-Dill-Kreis.
          </p>
          <a
            href="/lieferservice-desserts-lahn-dill"
            className="inline-block bg-white text-terracotta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors"
          >
            Zum Lieferservice →
          </a>
        </FadeUp>
      </section>

      {/* ── Entdecke mehr ── */}
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
