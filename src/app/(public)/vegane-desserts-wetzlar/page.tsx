import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { SITE } from "@/lib/seo/business-data";
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

export default function VeganeDessertsPage() {
  return (
    <div className="bg-bg-creme">
      <section className="relative pt-[120px] pb-24 bg-[#e6efeb] overflow-hidden border-b border-[#c8dbd1]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#4a7c59] text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
            Inklusiver Genuss in Mittelhessen
          </div>
          <h1 className="font-heading text-5xl md:text-7xl text-[#2d4b36] mb-6 leading-[1.1]">
            Vegane & Halal
            <br />
            Süßspeisen
          </h1>
          <p className="font-body text-lg text-[#3e664b] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Gutes Essen sollte für alle da sein. Wir sind stolz darauf, eine der
            besten Anlaufstellen im Lahn-Dill-Kreis und dem Raum Gießen für
            pflanzliche Eiscreme und Halal-konforme Desserts zu sein.
          </p>
          <PrimaryButton
            href="/menu"
            sectionBg="#e6efeb"
            className="bg-[#4a7c59] text-white hover:bg-[#3e664b]"
          >
            Zur Speisekarte
          </PrimaryButton>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Ohne Kompromisse beim Geschmack">
            Pflanzlich & Lecker
          </SectionTitle>

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

      <SchemaScripts schema={[getDietarySchema()]} />
    </div>
  );
}
