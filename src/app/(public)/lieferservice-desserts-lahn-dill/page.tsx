import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE, BUSINESS } from "@/lib/seo/business-data";
import { MapPin, Clock, Bike } from "lucide-react";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Dessert Lieferservice Wetzlar & Lahn-Dill-Kreis | Hey Fede!",
  description:
    "Süßigkeiten, Bubble Waffles und Eis direkt nach Hause bestellen. Wir liefern in Wetzlar, Lahnau, Solms und Umgebung.",
  path: "/lieferservice-desserts-lahn-dill",
  keywords: [
    "Dessert bestellen Wetzlar",
    "Süßigkeiten Lieferservice",
    "Waffeln bestellen Lahn-Dill-Kreis",
    "Eis Lieferservice Wetzlar",
    "Dessert Lieferservice",
    "Essen bestellen Gießen Umgebung",
    "Hey Fede Lieferservice",
    "Nachtisch bestellen",
  ],
});

function getDeliverySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dessert Lieferservice Wetzlar & Lahn-Dill",
    description:
      "Bestelle frische Bubble Waffles, Crêpes und Eis bequem nach Hause. Schnelle Lieferung in Wetzlar und im gesamten Lahn-Dill-Kreis.",
    mainEntity: {
      "@type": "Service",
      name: "Dessert Delivery Hey Fede!",
      provider: {
        "@type": "Restaurant",
        "@id": `${SITE.url}/#localbusiness`,
      },
      areaServed: [
        { "@type": "City", name: "Wetzlar" },
        { "@type": "City", name: "Lahnau" },
        { "@type": "City", name: "Solms" },
        { "@type": "City", name: "Aßlar" },
        { "@type": "AdministrativeArea", name: "Lahn-Dill-Kreis" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Lieferservice Speisekarte",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Bubble Waffles Delivery",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Eisbecher Delivery",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        name: "Lieferung direkt nach Hause",
        priceSpecification: {
          "@type": "DeliveryChargeSpecification",
          price: "0.00",
          priceCurrency: "EUR",
          appliesToDeliveryMethod:
            "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
        },
      },
    },
  };
}

export default function LieferservicePage() {
  return (
    <div className="bg-bg-creme">
      <section className="relative pt-[120px] pb-24 bg-terracotta text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-[1.1]">
            Der süßeste Lieferservice
            <br />
            in Wetzlar
          </h1>
          <p className="font-body text-lg text-cream/90 leading-relaxed mb-10 max-w-[600px] mx-auto">
            Regenwetter in der Altstadt? Kein Problem! Mach es dir auf dem Sofa
            bequem. Wir bringen dir unsere frisch gebackenen Bubble Waffles,
            Crêpes und Premium-Eisbecher direkt an die Haustür – im gesamten
            Lahn-Dill-Kreis.
          </p>
          <PrimaryButton
            href="/order-hub"
            sectionBg="#ffffff"
            className="text-terracotta shadow-lg"
          >
            Jetzt online bestellen →
          </PrimaryButton>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-1">
          <WaveDivider fromColor="#CC624C" toColor="#ffffff" variant={3} />
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-6xl mx-auto px-6">
          <SectionTitle sub="Bequem, schnell & frisch">
            So funktioniert's
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-terracotta" />,
                title: "Dein Liefergebiet",
                desc: "Wir beliefern nicht nur die Wetzlarer Innenstadt. Unser Radius erstreckt sich über Lahnau, Solms, Aßlar bis in angrenzende Teile des Lahn-Dill-Kreises.",
              },
              {
                icon: <Clock className="w-8 h-8 text-terracotta" />,
                title: "Schnelle Zubereitung",
                desc: "Sobald deine Bestellung reinkommt, wird der Waffelteig frisch auf das Eisen gegossen. Keine Vorproduktion, 100% à la minute Qualität.",
              },
              {
                icon: <Bike className="w-8 h-8 text-terracotta" />,
                title: "Sichere Verpackung",
                desc: "Wir nutzen spezielle Thermo-Verpackungen. Dein Eis kommt eisgekühlt und deine Waffel angenehm warm bei dir an – getrennt verpackt für den optimalen Genuss.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-sand rounded-[32px] p-8 text-center border border-peach/30 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-brown-mid leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="py-24 bg-sand relative">
        <FadeUp className="max-w-4xl mx-auto px-6 prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid">
          <h2>Dein Dessert-Delivery für jeden Anlass</h2>
          <p>
            Stell dir vor: Es ist ein verregneter Sonntagabend in Hessen. Der
            letzte Tatort läuft im Fernsehen, und plötzlich packt dich dieser
            unbändige Heißhunger auf etwas Süßes. Früher musstest du dich in
            Gießen oder Wetzlar noch ins Auto setzen – heute bestellst du
            einfach online bei uns.
          </p>
          <p>
            Unser Dessert-Lieferservice schließt eine gewaltige Lücke in der
            Wetzlarer Gastronomie. Ob als süße Überraschung für die Date-Night
            zu Hause, als Nervennahrung für Studierende der THM, die bis tief in
            die Nacht an Hausarbeiten tippen, oder als Highlight auf eurer
            WG-Party: Hey Fede! liefert das volle Dessertbar-Erlebnis.
          </p>
        </FadeUp>
      </section>

      <SchemaScripts schema={[getDeliverySchema()]} />
    </div>
  );
}
