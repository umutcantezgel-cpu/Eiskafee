import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE } from "@/lib/seo/business-data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Eisdiele Wetzlar & Special Shakes | Hey Fede!",
  description:
    "Das beste Softeis in Wetzlar! Entdecke unsere gigantischen 500ml Eisbecher und extravaganten Special Milkshakes. Erfrischung pur direkt am Eisenmarkt.",
  path: "/eisdiele-wetzlar-special-shakes",
  keywords: [
    "Eisdiele Wetzlar",
    "Eis essen Wetzlar Altstadt",
    "Softeis Hessen",
    "Special Shakes Lahn-Dill",
    "Milchshake Gießen Umgebung",
    "Eisbecher bestellen Wetzlar",
    "Sommer Dessert Wetzlar",
    "Hey Fede Eis",
  ],
});

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
      <section className="relative pt-[120px] pb-24 bg-cream overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] bg-white rounded-[40px] border-4 border-peach/50 shadow-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl">🥤</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-nunito font-bold rounded-full text-sm mb-6 shadow-sm">
              Erfrischung pur am Eisenmarkt
            </div>
            <h1 className="font-calistoga text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              Deine moderne Eisdiele in Wetzlar
            </h1>
            <p className="font-nunito text-lg text-[#5c3d35] leading-relaxed mb-8 max-w-[500px]">
              Kugel-Eis war gestern. Erlebe die seidige Textur unseres frisch
              gezapften Softeises in gigantischen 500ml Bechern oder als Basis
              für unsere legendären Special Shakes. Ein kühles Meisterwerk für
              heiße Sommertage im Lahn-Dill-Kreis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Nicht einfach nur ein Milchshake">
            Die Special Shakes
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-calistoga prose-headings:text-charcoal prose-p:font-nunito prose-p:text-[#5c3d35] mt-12 mx-auto">
            <h2>Die Kunst des perfekten Shakes in Hessen</h2>
            <p>
              Wenn die Sonne über der Wetzlarer Altstadt und der Alten
              Lahnbrücke scheint, gibt es nichts Besseres als eine eiskalte
              Erfrischung. Doch wir bei Hey Fede! geben uns nicht mit einem
              einfachen Schoko-Milchshake zufrieden. Unsere{" "}
              <strong>Special Shakes</strong> sind hochstapelnde Kunstwerke.
            </p>
            <p>
              Wir nutzen unser hauseigenes Softeis als cremige Basis. Der
              Glasrand wird aufwendig mit Schokolade, Karamell oder Frosting
              verziert und mit knusprigen Crumbles besetzt. Das Sahnehäubchen
              wird wörtlich genommen und zusätzlich mit Brownie-Stücken, ganzen
              Keksen oder frischen Erdbeeren gekrönt. Kein Wunder, dass unsere
              Shakes auf Instagram so beliebt sind und Gäste aus Butzbach und
              Weilburg anlocken.
            </p>

            <h2>500ml Eisbecher: Das XL Eis-Erlebnis</h2>
            <p>
              Wer Eis liebt, wird unsere 500ml Eisbecher vergöttern. Wir
              schichten cremiges Softeis im perfekten Wechsel mit fruchtigen
              Soßen, Nuss-Nougat-Creme und knusprigen Toppings. Egal ob du
              deinen Eisbecher nach dem Spaziergang durch Wetzlar direkt bei uns
              im Café genießt, oder ihn dir entspannt über Lieferando nach
              Lahnau oder Aßlar bestellst – die Qualität bleibt kompromisslos
              hoch.
            </p>
          </div>
        </FadeUp>
      </section>

      <SchemaScripts schema={[getIceCreamSchema()]} />
    </div>
  );
}
