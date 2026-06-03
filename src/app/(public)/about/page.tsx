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
import { FoodIcon } from "@/components/ui/FoodIcon";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { BUSINESS } from "@/lib/seo/business-data";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Über uns · Die Geschichte hinter Hey Fede!",
  description:
    "Erfahre die Geschichte von Hey Fede! — gegründet von Federica. Frische Desserts, hausgemacht mit Liebe, in der Wetzlarer Altstadt.",
  path: "/about",
  keywords: [
    "Hey Fede Geschichte",
    "Dessertbar Gründerin",
    "Federica Wetzlar",
    "Café Wetzlar Altstadt",
    "Familienfreundliches Café Hessen",
    "Regionale Gastronomie",
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
            highlightWords={["Leidenschaft."]}
            highlightColor="#b34832"
            className="text-center justify-center max-w-[1200px] mx-auto mt-20"
          >
            Unser Rezept? Leidenschaft.
          </GiganticTypography>
          <p className="font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80">
            Entstanden aus der einfachen Frage: Was fehlt Wetzlar?
          </p>
        </section>

        {/* SECTION 2: The Founder Story */}
        <section className="min-h-[150vh] flex items-center px-6 relative z-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="font-nunito uppercase tracking-widest text-terracotta font-black mb-6">
                Wie alles begann
              </div>
              <GiganticTypography
                delay={0.2}
                highlightWords={["Fede"]}
                highlightColor="#E4C0A8"
                className="!text-[clamp(2.5rem,6vw,5rem)] mb-8"
              >
                Hallo, ich bin Fede.
              </GiganticTypography>
              <div className="font-nunito text-lg md:text-xl text-brown/90 space-y-6 max-w-[500px]">
                <p>
                  Kein Fast-Food-Dessert, sondern handgemachte Kreationen mit
                  Herz. Das war meine Vision.
                </p>
                <p>
                  Seit September 2023 ist Hey Fede! ein Ort geworden, an dem
                  Generationen zusammenkommen. Familien, Freunde, Großeltern mit
                  ihren Enkeln.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="overflow-hidden aspect-[4/5] transform transition-transform duration-700 group-hover:scale-105"
                style={{ borderRadius: "44% 56% 52% 48%/50% 46% 54% 50%" }}
              >
                <FoodIcon
                  icon="Heart"
                  label="Inhaberin Fede\nPorträt / Team-Foto"
                  size="sq"
                  shape="rounded-none"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-cream/80 backdrop-blur-md border border-peach/30 rounded-3xl p-6 shadow-clay transform -rotate-3 transition-transform group-hover:rotate-0">
                <div className="font-calistoga text-3xl text-terracotta">
                  Fede
                </div>
                <div className="font-nunito text-sm text-brown font-black tracking-wider uppercase mt-1">
                  Gründerin & Inhaberin
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The Philosophy (Huge Values) */}
        <section className="min-h-[150vh] flex flex-col justify-center px-6 relative">
          {/* Floating background form */}
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] opacity-40 z-0 pointer-events-none">
            <Image
              src="/assets/illustrations/Form beige.svg"
              alt="shape"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[1200px] mx-auto w-full relative z-10">
            <div className="font-nunito uppercase tracking-widest text-terracotta font-black mb-12 text-center">
              Unsere Grundwerte
            </div>

            <div className="space-y-32">
              {/* Value 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:justify-start relative">
                <div className="absolute -left-16 -top-16 w-32 h-32 opacity-80 pointer-events-none transform -rotate-12">
                  <Image
                    src="/assets/illustrations/Hand illustration 2.svg"
                    alt="hand illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 bg-terracotta rounded-full flex items-center justify-center shrink-0 shadow-clay-lg z-10 relative">
                  <FoodIcon icon="Sparkles" size="60" />
                </div>
                <GiganticTypography className="!text-[clamp(2rem,5vw,4rem)]">
                  Kompromisslose Frische.
                </GiganticTypography>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:justify-start relative">
                <div className="absolute -right-20 -bottom-10 w-40 h-40 opacity-80 pointer-events-none transform rotate-[25deg]">
                  <Image
                    src="/assets/illustrations/Hand illustration.svg"
                    alt="hand illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 bg-peach rounded-full flex items-center justify-center shrink-0 shadow-clay-lg z-10 relative">
                  <FoodIcon icon="Heart" size="60" />
                </div>
                <GiganticTypography className="!text-[clamp(2rem,5vw,4rem)] text-right">
                  Mit purer Liebe gemacht.
                </GiganticTypography>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:justify-start relative">
                <div className="absolute left-[30%] -top-20 w-32 h-32 opacity-80 pointer-events-none transform -rotate-[15deg]">
                  <Image
                    src="/assets/illustrations/Hand illustration 3.svg"
                    alt="hand illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-32 h-32 bg-brown rounded-full flex items-center justify-center shrink-0 shadow-clay-lg z-10 relative">
                  <FoodIcon icon="Coffee" size="60" />
                </div>
                <GiganticTypography className="!text-[clamp(2rem,5vw,4rem)]">
                  Alles hausgemacht.
                </GiganticTypography>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: The Location */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative z-10 pb-32">
          <GiganticTypography
            highlightWords={["Zuhause"]}
            highlightColor="#b34832"
            className="text-center justify-center mb-16"
          >
            Unser Zuhause in Wetzlar.
          </GiganticTypography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            <div className="md:col-span-2 rounded-[32px] overflow-hidden min-h-[400px] shadow-clay hover:scale-[1.02] transition-transform duration-500">
              <FoodIcon
                icon="MapPin"
                label="Außenansicht\nHey Fede! Wetzlar"
                size="sq"
                shape="rounded-none"
                className="h-full min-h-[400px]"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-[32px] overflow-hidden flex-1 shadow-clay hover:scale-[1.02] transition-transform duration-500">
                <FoodIcon
                  icon="Coffee"
                  label="Innenraum"
                  size="sq"
                  shape="rounded-none"
                  className="h-full min-h-[200px]"
                />
              </div>
              <div className="rounded-[32px] overflow-hidden flex-1 shadow-clay hover:scale-[1.02] transition-transform duration-500">
                <FoodIcon
                  icon="Baby"
                  label="Kinderecke"
                  size="sq"
                  shape="rounded-none"
                  className="h-full min-h-[200px]"
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
