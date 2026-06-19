import React from "react";
import Image from "next/image";
import { getPhotosForPage } from "@/lib/photos";
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
  title: "Bubble Waffles Wetzlar | Original & Handgemacht bei Hey Fede!",
  description:
    "Erlebe die originalen Bubble Waffles in der Wetzlarer Altstadt. Knusprig, fluffig & handgemacht. Jetzt in der Langgasse probieren oder aus Gießen & Lahn-Dill-Kreis vorbeikommen.",
  path: "/bubble-waffles-wetzlar",
  keywords: [
    "Bubble Waffle Wetzlar",
    "Waffel Gießen",
    "Dessert Lahn-Dill-Kreis",
    "Café Wetzlar Altstadt",
    "Hongkong Waffle Hessen",
    "Süßes Essen Wetzlar",
    "Eis in Waffel",
    "Hey Fede Waffeln",
  ],
});

// The specific Sub-Schema for this Silo Page
function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "Product",
      name: "Original Bubble Waffles Wetzlar",
      description:
        "Hausgemachte Bubble Waffles nach authentischem Rezept, frisch gebacken in der Wetzlarer Langgasse. Außen knusprig, innen fluffig, mit Softeis und Premium-Toppings.",
      image: `${SITE.url}/og/home.png`,
      brand: {
        "@type": "Brand",
        name: "Hey Fede!",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "6.90",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Restaurant",
          "@id": `${SITE.url}/#localbusiness`,
        },
      },
    },
  };
}

const FAQ_DATA = [
  {
    q: "Was ist eine Bubble Waffle?",
    a: "Eine Bubble Waffle ist ein Streetfood-Original aus Hongkong. Der Teig wird in einem speziellen Waffeleisen gebacken, das runde 'Bubbles' erzeugt — außen knusprig, innen fluffig. Bei Hey Fede! wird sie als Tüte geformt und mit Softeis, Soßen und Toppings gefüllt.",
  },
  {
    q: "Welche Toppings gibt es für die Bubble Waffle?",
    a: "Du kannst aus einer Vielzahl von Toppings wählen: Softeis, hausgemachte Soßen (Schokolade, Erdbeere, Karamell), frische Früchte, Crumbles, Kekse, Nüsse und mehr. Du kannst dir auch deine eigene Kreation zusammenstellen.",
  },
  {
    q: "Was kostet eine Bubble Waffle bei Hey Fede!?",
    a: "Unsere Bubble Waffles starten ab 6,90€. Je nach Toppings und Extras kann der Preis variieren. Die aktuelle Preisliste findest du auf unserer Speisekarte unter hey-fede.de/menu.",
  },
  {
    q: "Kann ich Bubble Waffles auch bestellen und liefern lassen?",
    a: "Ja! Wir liefern Bubble Waffles in Wetzlar und im Lahn-Dill-Kreis. Bestelle einfach über hey-fede.de/order-hub. Wir verpacken sie so, dass sie knusprig bleiben.",
  },
  {
    q: "Gibt es auch vegane Bubble Waffles?",
    a: "Ja, wir können Bubble Waffles auch ohne tierische Produkte zubereiten. Frage unser Team nach den aktuellen veganen Optionen für Teig, Eis und Toppings.",
  },
];

const CROSS_LINKS = [
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🍨",
    label: "Eisbecher & Shakes",
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
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
];

export default function BubbleWafflePage() {
  return (
    <div className="bg-bg-creme">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Das Original in Mittelhessen
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Die beste Bubble Waffle im gesamten Lahn-Dill-Kreis
            </h1>
            <p className="font-body text-lg text-brown-mid leading-relaxed mb-8 max-w-[500px]">
              Vergiss trockene, langweilige Waffeln. In der historischen
              Wetzlarer Langgasse backen wir das Streetfood-Original aus
              Hongkong. Viele unserer Stammgäste fahren extra aus Gießen,
              Marburg und Herborn zu uns, um dieses Meisterwerk der Texturen zu
              erleben.
            </p>
            <PrimaryButton href="/menu">Jetzt Karte ansehen</PrimaryButton>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-beige rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🧇</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform -rotate-6">
              <p className="font-heading text-terracotta text-2xl">100%</p>
              <p className="font-body font-bold text-xs uppercase tracking-widest text-charcoal">
                Hausgemacht
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & SEO Text */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Warum unsere Waffeln Wetzlar begeistern">
            Die Magie der Texturen
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Handwerkskunst am Wetzlarer Eisenmarkt</h2>
            <p>
              Was macht eine Bubble Waffle so unwiderstehlich? Es ist das
              perfekte, physikalische Zusammenspiel von Hitze, Teig und
              Gusseisen. Während eine klassische Waffel oft durchgehend weich
              oder komplett knusprig ist, bieten wir bei Hey Fede! in Wetzlar
              das Beste aus beiden Welten. Durch das schnelle Wenden unserer
              speziellen Waffeleisen im exakt richtigen Moment karamellisieren
              die dünnen Verbindungsstege zwischen den &quot;Bubbles&quot;
              goldbraun. Gleichzeitig schließen die Kapseln heiße Luft ein und
              bleiben im Kern unfassbar fluffig.
            </p>

            <h2>Dein Dessert-Trip aus Gießen, Marburg & Limburg</h2>
            <p>
              Wir hören es fast täglich:{" "}
              <em>
                &quot;Für diese Waffel fahre ich gerne die halbe Stunde aus
                Gießen!&quot;
              </em>{" "}
              Unsere Dessertbar hat sich schnell als Pilgerstätte für
              Süßspeisen-Liebhaber im gesamten Radius von 50 Kilometern
              etabliert. Egal ob als krönender Abschluss nach einem
              Shopping-Trip im Forum Wetzlar, als Ziel eines Familienausflugs
              aus Braunfels oder als After-Work-Treff für Pendler aus Dillenburg
              – Hey Fede! ist der süße Ankerpunkt in Mittelhessen.
            </p>

            <h3>Die unendliche Vielfalt der Toppings</h3>
            <p>
              Eine frisch gebackene, warme Waffel-Tüte ist für uns nur die leere
              Leinwand. Wir füllen sie mit unserem seidigen, hauseigenen
              Softeis, das bei perfekten Minusgraden gezapft wird. Darüber
              gießen wir hausgemachte Soßen – von fruchtigem Erdbeer-Püree bis
              hin zu reichhaltiger belgischer Schokolade. Gekrönt wird das
              Spektakel mit frischen Früchten, die wir von regionalen
              Lieferanten beziehen, sowie knusprigen Crumbles, zerkrümelten
              Keksen oder Nüssen. Jeder Bissen ist ein neues Abenteuer.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Echte Fotos */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Unsere Bubble Waffles — frisch zubereitet
          </h2>
          <p className="font-body text-charcoal/60 text-center mb-8 max-w-lg mx-auto">
            Echte Fotos direkt aus unserer Dessertbar in Wetzlar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getPhotosForPage("/bubble-waffles-wetzlar").map((photo) => (
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

      {/* Cross Linking / CTA */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#F5EDE3" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Lust auf eine Waffel auf dem Sofa?
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10">
            Wir liefern unsere Bubble Waffles natürlich auch direkt zu dir nach
            Hause. Perfekt verpackt, damit sie knusprig bleiben. Entdecke
            unseren Lieferservice im Lahn-Dill-Kreis.
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

      <SchemaScripts schema={[getPageSchema(), buildFaqSchema(FAQ_DATA)]} />
    </div>
  );
}
