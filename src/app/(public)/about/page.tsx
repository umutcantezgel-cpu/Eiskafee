import React from "react";
import { AboutSEO } from "@/content/seo/AboutSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import {
  buildBreadcrumbSchema,
  buildAboutPageSchema,
  buildPersonSchema,
} from "@/lib/seo/schema/pages";
import { GiganticTypography } from "@/components/ui/GiganticTypography";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { BUSINESS } from "@/lib/seo/business-data";
import { motion } from "framer-motion";
import { Sparkles, Heart, Coffee } from "lucide-react";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Über uns – Hey Fede! Die Dessertbar & Café in Wetzlar",
  description:
    "Erfahre die Geschichte von Hey Fede! Dessertbar & Café in Wetzlar – gegründet von Federica. Handgemachte Süßspeisen & Waffeln in der Altstadt.",
  path: "/about",
  keywords: [
    "Hey Fede Geschichte",
    "Dessertbar Wetzlar",
    "Café Wetzlar Altstadt",
    "Federica Wetzlar",
    "Handgemachte Desserts",
    "Familienfreundliches Café Hessen",
  ],
  ogImage: "/og/about.png",
});

export default function AboutPage() {
  return (
    <>
      {/* Wir machen den Hintergrund transparent, da ScrollLavaBackground dahinter liegt */}
      <div className="min-h-[500vh] bg-transparent text-charcoal">
        {/* SECTION 1: The Massive Hook */}
        <section className="min-h-[120vh] flex flex-col justify-center items-center px-6 relative">
          <GiganticTypography
            as="h1"
            highlightWords={["Fede"]}
            highlightColor="#CC624C"
            className="text-center justify-center max-w-[1200px] mx-auto mt-20"
          >
            Über uns – Die Hey Fede! Dessertbar in Wetzlar
          </GiganticTypography>
          <p className="font-body text-xl md:text-2xl mt-12 text-center max-w-[750px] font-bold text-brown/80">
            Hey Fede! entstand aus einer einfachen Frage: Was fehlt Wetzlar
            noch? Die Antwort war klar: Ein fröhlicher Ort für frische,
            handgemachte Desserts, leckere Waffeln und erstklassigen Kaffee
            mitten in der historischen Altstadt.
          </p>
        </section>

        {/* SECTION 2: The Founder Story */}
        <section className="min-h-[150vh] flex items-center px-6 relative z-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="font-body uppercase tracking-widest text-terracotta font-black mb-6">
                Wie alles begann
              </div>
              <GiganticTypography
                delay={0.2}
                as="h2"
                highlightWords={["Fede"]}
                highlightColor="#E4C0A8"
                className="!text-[clamp(2.5rem,6vw,5rem)] mb-8"
              >
                Hallo, ich bin Fede.
              </GiganticTypography>
              <div className="font-body text-lg md:text-xl text-brown/90 space-y-6 max-w-[500px]">
                <p>
                  Kein industrielles Fast-Food-Dessert, sondern liebevoll
                  handgemachte Kreationen aus den besten Zutaten – das war von
                  Anfang an meine persönliche Vision für Hey Fede! Ich wollte
                  ein Café schaffen, in dem jeder Bissen pure Freude schenkt.
                </p>
                <p>
                  Seit der Eröffnung im September 2023 mitten im Herzen von
                  Wetzlar ist Hey Fede! zu einem Ort der Begegnung geworden.
                  Hier kommen Familien, Freunde und Genießer jeden Alters
                  zusammen, um gemeinsam besondere Genussmomente in gemütlicher
                  Atmosphäre zu teilen.
                </p>
              </div>
            </div>
            <figure className="relative group">
              <div
                className="absolute inset-[-10px] bg-peach/50 z-0 transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ borderRadius: "48% 52% 56% 44%/54% 48% 52% 46%" }}
              />
              <div
                className="relative overflow-hidden aspect-[4/5] z-10 transform transition-transform duration-700 group-hover:scale-105 bg-[#fdf3e9]"
                style={{ borderRadius: "44% 56% 52% 48%/50% 46% 54% 50%" }}
              >
                <Image
                  src="/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg"
                  alt="Federica, Gründerin des Hey Fede! Dessertbar & Café in Wetzlar, bei der Arbeit in der Küche"
                  fill
                  className="object-contain scale-[0.70]"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
              <figcaption className="absolute -bottom-10 -left-10 bg-cream/80 backdrop-blur-md border border-peach/30 rounded-3xl p-6 shadow-clay transform -rotate-3 transition-transform group-hover:rotate-0 z-20">
                <div className="font-heading text-3xl text-terracotta">
                  Fede
                </div>
                <div className="font-body text-sm text-brown font-black tracking-wider uppercase mt-1">
                  Gründerin & Inhaberin
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SECTION 3: The Philosophy (Huge Values) */}
        <section className="min-h-[150vh] flex flex-col justify-center px-6 relative">
          {/* Floating background form */}
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] opacity-40 z-0 pointer-events-none">
            <Image
              src="/assets/illustrations/Form beige.svg"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[1200px] mx-auto w-full relative z-10">
            <div className="font-body uppercase tracking-widest text-terracotta font-black mb-12 text-center">
              Unsere Grundwerte
            </div>

            <div className="space-y-32">
              {/* Value 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:justify-start relative">
                <div className="absolute -left-16 -top-16 w-32 h-32 opacity-80 pointer-events-none transform -rotate-12">
                  <Image
                    src="/assets/illustrations/Hand illustration 2.svg"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 bg-terracotta rounded-full flex items-center justify-center shrink-0 shadow-clay-lg z-10 relative text-cream">
                  <Sparkles size={56} strokeWidth={1.5} />
                </div>
                <div>
                  <GiganticTypography
                    as="h3"
                    className="!text-[clamp(2rem,5vw,4rem)]"
                  >
                    Kompromisslose Frische.
                  </GiganticTypography>
                  <p className="font-body text-base md:text-lg text-brown/80 max-w-[500px] mt-2">
                    Bei uns kommen nur frischeste Zutaten und feine regionale
                    Produkte in die Schüssel. Wir bereiten all unsere Desserts
                    täglich frisch zu, damit du bei jedem Besuch maximale
                    Qualität genießt.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:justify-start relative">
                <div className="absolute -right-20 -bottom-10 w-40 h-40 opacity-80 pointer-events-none transform rotate-[25deg]">
                  <Image
                    src="/assets/illustrations/Hand illustration.svg"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 bg-peach rounded-full flex items-center justify-center shrink-0 shadow-clay-lg z-10 relative text-terracotta">
                  <Heart size={56} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <GiganticTypography
                    as="h3"
                    className="!text-[clamp(2rem,5vw,4rem)] text-right"
                  >
                    Mit purer Liebe gemacht.
                  </GiganticTypography>
                  <p className="font-body text-base md:text-lg text-brown/80 max-w-[500px] mt-2 ml-auto text-right">
                    Jede Waffel, jedes Eis und jedes Topping wird mit echter
                    Leidenschaft zubereitet. Wir investieren Herzblut in feine
                    Rezepturen und liebevolle Details, die man schmeckt.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:justify-start relative">
                <div className="absolute left-[30%] -top-20 w-32 h-32 opacity-80 pointer-events-none transform -rotate-[15deg]">
                  <Image
                    src="/assets/illustrations/Hand illustration 3.svg"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 bg-brown rounded-full flex items-center justify-center shrink-0 shadow-clay-lg z-10 relative text-cream">
                  <Coffee size={56} strokeWidth={1.5} />
                </div>
                <div>
                  <GiganticTypography
                    as="h3"
                    className="!text-[clamp(2rem,5vw,4rem)]"
                  >
                    Alles hausgemacht.
                  </GiganticTypography>
                  <p className="font-body text-base md:text-lg text-brown/80 max-w-[500px] mt-2">
                    Vom hausgemachten Teig bis hin zu unseren einzigartigen
                    Saucen verzichten wir komplett auf Fertigprodukte. Ehrliches
                    Konditorhandwerk trifft bei uns auf zeitgemäße Genusskultur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: The Location */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative z-10 pb-32">
          <GiganticTypography
            as="h2"
            highlightWords={["Zuhause"]}
            highlightColor="#CC624C"
            className="text-center justify-center mb-8"
          >
            Unser Zuhause in Wetzlar.
          </GiganticTypography>
          <p className="font-body text-lg md:text-xl text-center max-w-[700px] text-brown/80 mb-16">
            Besuche unsere Dessertbar im Herzen der Altstadt von Wetzlar.
            Genieße deinen Lieblings-Nachtisch, frischen Kaffee und hausgemachte
            Eisspezialitäten in entspannter, familienfreundlicher Atmosphäre.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto min-h-[400px]">
            <div className="md:col-span-2 rounded-[32px] overflow-hidden min-h-[400px] h-full relative shadow-clay hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/assets/photos/laden-sitzbereich-neon-mooswand-hey-fede-wetzlar.jpg"
                alt="Atmosphäre und Innenraum bei Hey Fede! Wetzlar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="flex flex-col gap-6 h-full">
              <div className="rounded-[32px] overflow-hidden flex-1 min-h-[200px] relative shadow-clay hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/assets/photos/laden-theke-innenraum-hey-fede-wetzlar.jpg"
                  alt="Innenraum und Theke"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="rounded-[32px] overflow-hidden flex-1 min-h-[200px] relative shadow-clay hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/assets/photos/laden-kinderecke-spielzimmer-hey-fede-wetzlar.jpg"
                  alt="Kinderecke und Spielzimmer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <SEOContentBlock
        visible={true}
        ariaLabel="Die Geschichte von Hey Fede! Dessertbar Wetzlar"
      >
        <AboutSEO />
      </SEOContentBlock>
      <SchemaScripts
        schema={[
          buildAboutPageSchema(),
          buildPersonSchema(),
          buildBreadcrumbSchema([{ name: "Über uns", path: "/about" }]),
        ]}
      />
    </>
  );
}
