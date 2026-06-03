import React from "react";
import { HomeSEO } from "@/content/seo/HomeSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/seo/schema/pages";
import { FAQ_DATA } from "@/content/seo/faq-data";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";
import { WaveDivider } from "@/components/ui/WaveDivider";
import {
  SectionTitle,
  StampBadge,
  TicketCard,
} from "@/components/ui/LayoutBlocks";
import { HoloTiltCard } from "@/components/ui/HoloTiltCard";
import { ScratchCard } from "@/components/ui/ScratchCard";
import { FoodIcon } from "@/components/ui/FoodIcon";
import { ReviewsSection } from "@/components/ui/ReviewsSection";
import { Star } from "lucide-react";
import { HF_DATA } from "@/lib/data";
import { buildMetadata } from "@/lib/seo/base-metadata";

import { Hero } from "@/components/sections/home/Hero";
import { BestsellersSection } from "@/components/sections/home/BestsellersSection";
import { ValuesSection } from "@/components/sections/home/ValuesSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { OccasionsSection } from "@/components/sections/home/OccasionsSection";
import { SeasonalHighlights } from "@/components/sections/home/SeasonalHighlights";
import { FAQQuickCheck } from "@/components/sections/home/FAQQuickCheck";
import { NewsletterSection } from "@/components/sections/home/NewsletterSection";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Hey Fede! — Handgemachte Bubble Waffles & Eis in Wetzlar",
  description:
    "Süße Momente im Herzen der Wetzlarer Altstadt. Handgemachte Bubble Waffles, Premium-Softeis und Shakes. Komm vorbei oder bestelle direkt online zur Abholung.",
  path: "/",
  ogImage: "/og/home.png",
  keywords: [
    "Bubble Waffle Wetzlar",
    "Dessertbar Wetzlar",
    "Café Wetzlar",
    "Pancakes Wetzlar",
    "Eisbecher Wetzlar",
    "Hey Fede",
    "Frühstück Wetzlar",
    "Süßigkeiten",
    "Familienausflug Hessen",
    "Crêpes Lieferservice",
  ],
});

export default function HomePage() {
  const { bestsellers, reviews, config } = HF_DATA;

  return (
    <div className="animate-fade-in">
      <Hero />

      {/* ─── Intro / Family & Friends ──────────────────────────────────────── */}
      <section className="bg-[#f5efe8] pt-[88px] pb-[80px]">
        <FadeUp>
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Image blob */}
            <div className="relative">
              <div
                className="overflow-hidden aspect-[4/5]"
                style={{ borderRadius: "44% 56% 50% 50%/52% 48% 52% 48%" }}
              >
                <FoodIcon
                  icon="Heart"
                  label="Café Atmosphäre\nFamilienfoto"
                  size="sq"
                  shape="rounded-none"
                  className="w-full h-full"
                />
              </div>
              {/* Rating badge */}
              <div className="absolute -bottom-4 -right-2 bg-[#b34832] text-white px-4 py-3 rounded-2xl shadow-terra">
                <div className="font-calistoga text-[1.8rem] leading-none">
                  {config.rating}★
                </div>
                <div className="font-nunito text-[0.68rem] font-extrabold opacity-90 mt-0.5">
                  {config.reviewCount}+ Google Reviews
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="flex gap-2.5 mb-4">
                <StampBadge
                  text="Für die ganze Familie"
                  size={84}
                  rotate={-10}
                />
                <StampBadge
                  text="Mit Kinderecke"
                  size={76}
                  rotate={8}
                  color="#5c3d35"
                />
              </div>
              <h2 className="font-calistoga text-[clamp(1.7rem,3.5vw,2.7rem)] text-[#2d1f19] mb-4 leading-[1.1]">
                Ein Ort für
                <br />
                <span className="text-[#b34832]">alle Generationen</span>
              </h2>
              <p className="font-nunito text-[0.97rem] text-[#5c3d35] leading-[1.85] mb-7 max-w-[440px]">
                Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob
                Familienausflug, Verabredung mit Freunden oder ein süßer
                Nachmittag mit den Kleinen — hier ist Platz für alle.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Kinderecke", "Spielbereich für die Kleinen"],
                  ["Wickelraum", "Komfort für Familien"],
                  ["Vegan", "Vegane Optionen verfügbar"],
                  ["Hausgemacht", "Alles frisch & selbst gemacht"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="bg-[#eedfcc] rounded-[14px] px-4 py-3.5"
                  >
                    <div className="font-nunito font-black text-[0.84rem] text-[#2d1f19]">
                      {t}
                    </div>
                    <div className="font-nunito text-[0.75rem] text-[#9a7060] mt-0.5">
                      {d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ─── Bestsellers ───────────────────────────────────────────────────── */}
      <BestsellersSection />

      {/* ─── Lieferando Ticket Promo ───────────────────────────────────────── */}
      <section className="bg-[#f5efe8] py-20">
        <FadeUp className="max-w-[860px] mx-auto px-6">
          <ScratchCard>
            <TicketCard sectionBg="#f5efe8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_0.7fr] gap-7 items-center">
                <div>
                  <div className="font-nunito font-black text-[0.7rem] text-[#b34832] tracking-[2px] uppercase mb-2.5">
                    Dein exklusives Fede-Ticket
                  </div>
                  <h2 className="font-calistoga text-[clamp(1.3rem,3vw,1.9rem)] text-[#2d1f19] leading-[1.2] mb-3">
                    Kostenlose Lieferung über Lieferando!
                  </h2>
                  <p className="font-nunito text-[0.87rem] text-[#9a7060] mb-5 leading-[1.6]">
                    Bestell bequem von zu Hause — ohne Liefergebühr. Frische
                    Desserts direkt zu dir.
                  </p>
                  <PrimaryButton
                    sectionBg="#fefefe"
                    href="https://www.lieferando.de/speisekarte/hey-fede"
                  >
                    Jetzt bei Lieferando bestellen →
                  </PrimaryButton>
                </div>
                {/* Dashed separator */}
                <div
                  className="hidden md:block w-[1px] h-[110px] mx-auto"
                  style={{
                    background:
                      "repeating-linear-gradient(to bottom,#b34832 0,#b34832 5px,transparent 5px,transparent 11px)",
                  }}
                />
                {/* Value badge */}
                <div className="text-center">
                  <div className="bg-[#eedfcc] rounded-2xl p-5 border-2 border-dashed border-[#E4C0A8] inline-block">
                    <div className="font-calistoga text-[3.4rem] text-[#b34832] leading-none">
                      0€
                    </div>
                    <div className="font-nunito font-black text-[0.8rem] text-[#2d1f19] tracking-widest mt-1">
                      LIEFERGEBÜHR
                    </div>
                    <div className="font-nunito text-[0.7rem] text-[#9a7060] mt-1">
                      Über Lieferando
                    </div>
                    <div className="mt-2.5 flex gap-[1.5px] justify-center">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div
                          key={i}
                          className="bg-[#b34832] opacity-55 rounded-sm"
                          style={{
                            width: i % 3 === 0 ? 2.5 : 1.2,
                            height: i % 5 === 0 ? 20 : 14,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TicketCard>
          </ScratchCard>
        </FadeUp>
      </section>

      {/* ─── Values ────────────────────────────────────────────────────────── */}
      <ValuesSection />

      {/* ─── Stats ─────────────────────────────────────────────────────────── */}
      <StatsSection />

      {/* ─── Occasions ─────────────────────────────────────────────────────── */}
      <OccasionsSection />

      {/* ─── Seasonal ──────────────────────────────────────────────────────── */}
      <SeasonalHighlights />

      {/* ─── Reviews ───────────────────────────────────────────────────────── */}
      <ReviewsSection reviews={reviews} config={config} />

      {/* ─── FAQ Quick Check ───────────────────────────────────────────────── */}
      <FAQQuickCheck />

      {/* ─── Newsletter ────────────────────────────────────────────────────── */}
      <NewsletterSection />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blobFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(6px,-10px)} 66%{transform:translate(-5px,7px)} }
        .animate-blob-float { animation: blobFloat 9s ease-in-out infinite; }
        .animate-blob-float-reverse { animation: blobFloat 12s ease-in-out infinite reverse; }
        .animate-fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
      `,
        }}
      />
      <div className="sr-only">
        <HomeSEO />
      </div>
      <SchemaScripts
        schema={[buildFaqSchema(FAQ_DATA), buildBreadcrumbSchema([])]}
      />
    </div>
  );
}
