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

      <SchemaScripts schema={[getCateringSchema()]} />
    </div>
  );
}
