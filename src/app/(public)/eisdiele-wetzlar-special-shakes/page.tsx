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

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Eisdiele Wetzlar: Special Shakes & Softeis | Hey Fede!",
  description:
    "Deine Eisdiele in Wetzlar für Special Shakes & Softeis! Entdecke gigantische 500ml Eisbecher und kreative Milkshake-Kreationen direkt in der Altstadt.",
  path: "/eisdiele-wetzlar-special-shakes",
  keywords: [
    "Eisdiele Wetzlar",
    "Eis essen Wetzlar Altstadt",
    "Softeis Hessen",
    "Special Shakes Lahn-Dill",
    "Milchshake Gießen Umgebung",
    "Eisbecher bestellen Wetzlar",
    "Eis bestellen Wetzlar",
    "Sommer Dessert Wetzlar",
    "Hey Fede Eis",
  ],
});

const FAQ_DATA = [
  {
    q: "Was macht Hey Fede! zur besonderen Eisdiele in Wetzlar?",
    a: "Bei Hey Fede! bekommst du kein gewöhnliches Kugeleis, sondern seidig-cremiges Softeis in gigantischen 500ml Bechern, kreative Special Shakes und handgemachte Desserts. Alles wird täglich frisch zubereitet in unserer Dessertbar in der Wetzlarer Altstadt.",
  },
  {
    q: "Welche Eisbecher gibt es bei Hey Fede!?",
    a: "Wir bieten eine große Auswahl: Schoko, Haselnuss, Walnuss, Erdbeere, Fruchtbecher, Banana Split, Amarena und Spaghetti-Eis. Jeder Becher fasst 500ml und wird mit Premium-Toppings und hausgemachten Soßen serviert.",
  },
  {
    q: "Was sind die Special Shakes?",
    a: "Unsere Special Shakes sind Milkshake-Kunstwerke mit Softeis als Basis, dekoriert mit Schokolade, Frosting, Crumbles, Keksen und frischen Früchten. Sie sehen nicht nur auf Instagram spektakulär aus, sondern schmecken auch einzigartig.",
  },
  {
    q: "Kann ich Eis bei Hey Fede! bestellen und liefern lassen?",
    a: "Ja! Über unsere Website hey-fede.de/order-hub kannst du Eisbecher, Shakes und alle anderen Desserts zur Lieferung oder Abholung bestellen. Wir liefern in Wetzlar und im Lahn-Dill-Kreis.",
  },
  {
    q: "Gibt es bei Hey Fede! auch Eis für Kinder?",
    a: "Ja! Unsere beliebten Kinderbecher — Zuckerwatte, Regenbogen, Marshmallow und Spaghetti-Eis — sind perfekt für kleine Eisliebhaber. Bunt, lecker und kindergerecht portioniert.",
  },
];

const CROSS_LINKS = [
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes" },
  { href: "/eiscafe-wetzlar", emoji: "☕", label: "Eiscafé" },
  {
    href: "/events-catering-hessen",
    emoji: "🎉",
    label: "Catering & Events",
  },
  {
    href: "/kindergeburtstag-wetzlar",
    emoji: "🎂",
    label: "Kindergeburtstag",
  },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
  {
    href: "/vegane-desserts-wetzlar",
    emoji: "🌱",
    label: "Vegan & Halal",
  },
];

function getIceCreamSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "Product",
      name: "Special Shakes & Premium Eisbecher",
      description:
        "Gigantische 500ml Special Shakes und frische Softeis-Becher, meisterhaft dekoriert mit Premium-Toppings. Die moderne Eisdiele in der Wetzlarer Altstadt.",
      image: `${SITE.url}/og/menu.png`,
      brand: {
        "@type": "Brand",
        name: "Hey Fede!",
      },
      category: "Ice Cream & Milkshakes",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "5.50",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "IceCreamShop",
          "@id": `${SITE.url}/#localbusiness`,
        },
      },
    },
  };
}

export default function EisdielePage() {
  return (
    <div className="bg-bg-creme">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-24 bg-cream overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] bg-white rounded-[40px] border-4 border-peach/50 shadow-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🥤</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Erfrischung pur in der Altstadt
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Eisdiele Wetzlar – Special Shakes & Softeis
            </h1>
            <p className="font-body text-lg text-brown-mid leading-relaxed mb-8 max-w-[500px]">
              Kugel-Eis war gestern: Erlebe die seidig-cremige Textur unseres
              frisch gezapften Softeises in gigantischen 500ml Bechern und als
              Basis für unsere extravaganten Special Shakes. Dein erfrischendes
              Dessert-Erlebnis mitten in der Wetzlarer Altstadt.
            </p>
            <PrimaryButton href="/menu">Unsere Eiskarte ansehen</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Main Content & SEO Text */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Nicht einfach nur ein Milchshake">
            Die Special Shakes
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Die Kunst des perfekten Shakes in Hessen</h2>
            <p>
              Wenn die Sonne über der Wetzlarer Altstadt und der Alten
              Lahnbrücke scheint, gibt es nichts Einzigartigeres als eine
              eiskalte Erfrischung. Doch bei Hey Fede! geben wir uns nicht mit
              gewöhnlichen Schoko- oder Vanilleshakes zufrieden. Unsere{" "}
              <strong>Special Shakes</strong> sind spektakuläre
              Dessert-Kunstwerke, die mit viel Liebe zum Detail in der Langgasse
              68 frisch zubereitet werden.
            </p>
            <p>
              Als Basis dient unser seidig-cremiges Softeis, das besonders
              luftig und geschmacksintensiv ist. Der Glasrand wird aufwendig mit
              feiner Schokolade, hausgemachtem Karamell oder cremigem Frosting
              verziert und mit knusprigen Toppings besetzt. Abgerundet durch
              softe Sahne, knusprige Brownie-Stücke, ganze Kekse oder frische
              Beeren werden diese Shakes zu einem echten Highlight für
              Dessert-Liebhaber aus Wetzlar, Gießen und Limburg.
            </p>

            <h2>500ml Eisbecher: Das XL Eis-Erlebnis</h2>
            <p>
              Wer Eis liebt, wird unsere riesigen 500ml Eisbecher schätzen. Wir
              schichten frisches Softeis im Wechsel mit fruchtigen Soßen,
              samtiger Nuss-Nougat-Creme und knusprigen Toppings. Von zeitlosen
              Klassikern wie <strong>Schoko</strong>, <strong>Haselnuss</strong>{" "}
              und <strong>Erdbeere</strong> über exotische Varianten wie{" "}
              <strong>Amarena</strong> bis hin zum beliebten{" "}
              <strong>Spaghetti-Eis</strong> bietet unsere Speisekarte Vielfalt
              für jeden Geschmack.
            </p>
            <p>
              Ob gemütlich vor Ort in unserer stimmungsvollen Eisdiele oder
              bequem per Lieferdienst nach Hause geliefert – unsere
              Dessert-Spezialitäten garantieren stets höchste Frische. Unser
              Softeis wird täglich aus besten Zutaten hergestellt, um dir bei
              jedem Besuch erstklassigen Geschmack zu bieten.
            </p>

            <h2>Kinderbecher für kleine Eis-Fans</h2>
            <p>
              Auch für die jüngsten Schleckermäuler haben wir farbenfrohe
              Kinderbecher entwickelt. Der <strong>Zuckerwatte-Becher</strong>{" "}
              mit fluffy Topping, der farbenfrohe{" "}
              <strong>Regenbogen-Becher</strong> mit bunten Streuseln, der süße{" "}
              <strong>Marshmallow-Becher</strong> sowie unser kindergerechtes{" "}
              <strong>Spaghetti-Eis</strong> machen den Familienausflug in die
              Wetzlarer Altstadt zu einem unvergesslichen Erlebnis.
            </p>

            <h2>Warum Gäste aus Gießen und Marburg zu uns kommen</h2>
            <p>
              Viele Genießer nehmen den Weg aus Nachbarstädten wie Gießen,
              Marburg oder Weilburg gerne auf sich. Bei Hey Fede! verbinden sich
              frische Zutaten, kreative Rezepte und ein modernes
              Wohlfühl-Ambiente zu einer besonderen Eisdiele in Hessen. Nach
              einem Bummel im Forum Wetzlar oder an der Lahn ist ein kühler
              Special Shake der perfekte Genussmoment.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Echte Fotos */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Eis, Shakes & Spezialitäten
          </h2>
          <p className="font-body text-charcoal/60 text-center mb-8 max-w-lg mx-auto">
            Echte Impressionen aus unserer Eisdiele in Wetzlar – entdecke unsere
            cremigen Softeis-Kreationen und handgemachten Special Shakes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getPhotosForPage("/eisdiele-wetzlar-special-shakes").map(
              (photo) => (
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
              ),
            )}
          </div>
        </div>
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

      {/* CTA Section */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#F5EDE3" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Eis genießen auf dem Sofa?
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10 max-w-xl mx-auto">
            Hole dir deine Lieblings-Eisbecher und spektakulären Special Shakes
            bequem nach Hause. Wir liefern blitzschnell und gekühlt in Wetzlar,
            Gießen und dem gesamten Lahn-Dill-Kreis direkt an deine Haustür.
          </p>
          <a
            href="/lieferservice-desserts-lahn-dill"
            className="inline-block bg-white text-terracotta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors"
          >
            Zum Lieferservice →
          </a>
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

      <SchemaScripts schema={[getIceCreamSchema(), buildFaqSchema(FAQ_DATA)]} />
    </div>
  );
}
