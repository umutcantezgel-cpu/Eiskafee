import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE, BUSINESS } from "@/lib/seo/business-data";

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

export default function BubbleWafflePage() {
  return (
    <div className="bg-bg-creme">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-nunito font-bold rounded-full text-sm mb-6 shadow-sm">
              Das Original in Mittelhessen
            </div>
            <h1 className="font-calistoga text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Die beste Bubble Waffle im gesamten Lahn-Dill-Kreis
            </h1>
            <p className="font-nunito text-lg text-[#5c3d35] leading-relaxed mb-8 max-w-[500px]">
              Vergiss trockene, langweilige Waffeln. In der historischen
              Wetzlarer Langgasse backen wir das Streetfood-Original aus
              Hongkong. Viele unserer Stammgäste fahren extra aus Gießen,
              Marburg und Herborn zu uns, um dieses Meisterwerk der Texturen zu
              erleben.
            </p>
            <PrimaryButton href="/menu">Jetzt Karte ansehen</PrimaryButton>
          </div>
          <div className="relative">
            {/* Image Placeholder styled nicely */}
            <div className="aspect-[4/5] bg-[#eedfcc] rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🧇</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform -rotate-6">
              <p className="font-calistoga text-terracotta text-2xl">100%</p>
              <p className="font-nunito font-bold text-xs uppercase tracking-widest text-charcoal">
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

          <div className="prose prose-lg prose-headings:font-calistoga prose-headings:text-charcoal prose-p:font-nunito prose-p:text-[#5c3d35] mt-12 mx-auto">
            <h2>Handwerkskunst am Wetzlarer Eisenmarkt</h2>
            <p>
              Was macht eine Bubble Waffle so unwiderstehlich? Es ist das
              perfekte, physikalische Zusammenspiel von Hitze, Teig und
              Gusseisen. Während eine klassische Waffel oft durchgehend weich
              oder komplett knusprig ist, bieten wir bei Hey Fede! in Wetzlar
              das Beste aus beiden Welten. Durch das schnelle Wenden unserer
              speziellen Waffeleisen im exakt richtigen Moment karamellisieren
              die dünnen Verbindungsstege zwischen den "Bubbles" goldbraun.
              Gleichzeitig schließen die Kapseln heiße Luft ein und bleiben im
              Kern unfassbar fluffig.
            </p>

            <h2>Dein Dessert-Trip aus Gießen, Marburg & Limburg</h2>
            <p>
              Wir hören es fast täglich:{" "}
              <em>
                "Für diese Waffel fahre ich gerne die halbe Stunde aus Gießen!"
              </em>{" "}
              Unsere Dessertbar hat sich schnell als Pilgerstätte für
              Süßspeisen-Liebhaber im gesamten Radius von 50 Kilometrom
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

      {/* Cross Linking / CTA */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#ffffff" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-calistoga text-4xl mb-6">
            Lust auf eine Waffel auf dem Sofa?
          </h2>
          <p className="font-nunito text-lg text-cream/90 mb-10">
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

      <SchemaScripts schema={[getPageSchema()]} />
    </div>
  );
}
