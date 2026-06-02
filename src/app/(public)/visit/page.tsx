import React from "react";
import { VisitSEO } from "@/content/seo/VisitSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { FadeUp } from "@/components/ui/FadeUp";
import dynamic from "next/dynamic";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";
import { FoodIcon } from "@/components/ui/FoodIcon";
import {
  MapPin,
  Phone,
  MessageCircle,
  Truck,
  Camera,
  ChevronRight,
} from "lucide-react";
import { ClientHoursTable } from "@/components/ui/ClientHoursTable";

import { InteractiveMapClient } from "@/components/ui/InteractiveMapClient";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import {
  buildPlaceSchema,
  buildTouristDestinationSchema,
} from "@/lib/seo/schema/pages";
import { NAPBlock } from "@/components/seo/NAPBlock";
import {
  BUSINESS,
  FULL_ADDRESS,
  DIRECTIONS_URL,
} from "@/lib/seo/business-data";
import { LANDMARKS } from "@/lib/seo/wetzlar-entities";
import { Compass } from "lucide-react";

export const metadata = buildMetadata({
  title: "Besuche uns · Anfahrt, Öffnungszeiten & Kontakt",
  description:
    "Besuche Hey Fede! in der Langgasse 68, Wetzlar. Alle Infos zu Anfahrt, Parken, Öffnungszeiten und Lieferando-Bestellungen.",
  path: "/visit",
  keywords: [
    "Anfahrt Hey Fede",
    "Öffnungszeiten Café Wetzlar",
    "Parken Wetzlar Altstadt",
    "Hey Fede Kontakt",
    "Dessert Lieferung Wetzlar",
    "Langgasse 68",
    "Tischreservierung Dessertbar",
  ],
  ogImage: "/og/visit.png",
});

export default function VisitPage() {
  return (
    <>
      <div className="min-h-screen bg-[#f5efe8] animate-fade-in">
        {/* Hero */}
        <section className="bg-[#eedfcc] pt-[110px] px-6 pb-[88px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22] dot-bg" />
          <div
            className="absolute top-[14%] left-[4%] w-[220px] h-[220px] bg-[#E4C0A8] opacity-50 animate-blob-float"
            style={{ borderRadius: "56% 44% 48% 52%/52% 60% 40% 48%" }}
          />
          <div
            className="absolute bottom-[10%] right-[6%] w-[160px] h-[160px] bg-[#CC624C] opacity-10"
            style={{ borderRadius: "42% 58% 55% 45%" }}
          />

          <div className="relative z-10 max-w-[700px] mx-auto text-center">
            <h1 className="font-calistoga text-[clamp(2.4rem,6vw,4.2rem)] text-[#2d1f19] mb-3.5 leading-[1.05]">
              Komm uns besuchen!
            </h1>
            <p className="font-nunito text-[1.04rem] text-[#5c3d35]">
              Wir freuen uns auf dich — vor Ort oder bequem per Lieferung.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg
              viewBox="0 0 1440 44"
              className="block w-full h-[44px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,22 C480,48 960,0 1440,26 L1440,44 L0,44 Z"
                fill="#f5efe8"
              />
            </svg>
          </div>
        </section>

        {/* Main grid */}
        <section className="py-20">
          <FadeUp className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-13 items-start">
              {/* ── Left: Map + Contact ── */}
              <div>
                <h2 className="font-calistoga text-[1.7rem] text-[#2d1f19] mb-5.5">
                  So findest du uns
                </h2>

                {/* Interactive Google Map */}
                <div className="mb-5.5">
                  <InteractiveMapClient />
                </div>

                {/* Contact rows */}
                <NAPBlock variant="visit" />
              </div>

              {/* ── Right: Hours + CTAs ── */}
              <div className="flex flex-col gap-8">
                {/* Opening hours */}
                <div>
                  <h2 className="font-calistoga text-[1.7rem] text-[#2d1f19] mb-4.5">
                    Öffnungszeiten
                  </h2>
                  <ClientHoursTable />
                </div>

                {/* Order / pickup CTAs */}
                <div>
                  <h2 className="font-calistoga text-[1.7rem] text-[#2d1f19] mb-4">
                    Bestellen & Abholen
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        id: "lieferando",
                        title: "Lieferando",
                        sub: "Keine Liefergebühr · Direkt nach Hause",
                        Icon: Truck,
                        accent: true,
                        href: BUSINESS.lieferandoUrl,
                      },
                      {
                        id: "abholung",
                        title: "Abholung",
                        sub: `Vor Ort: ${FULL_ADDRESS}`,
                        Icon: MapPin,
                        accent: false,
                        href: DIRECTIONS_URL,
                      },
                    ].map((c) => (
                      <div
                        key={c.id}
                        className="group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]"
                      >
                        <div>
                          <div className="font-calistoga text-[1.1rem] text-[#2d1f19] mb-1">
                            {c.title}
                          </div>
                          <div className="font-nunito text-[0.8rem] text-[#9a7060] mb-3">
                            {c.sub}
                          </div>
                          {c.accent ? (
                            <PrimaryButton sectionBg="#eedfcc" href={c.href}>
                              Jetzt bestellen →
                            </PrimaryButton>
                          ) : (
                            <SecondaryButton href={c.href}>
                              Route planen →
                            </SecondaryButton>
                          )}
                        </div>
                        <div
                          className={`w-14 h-14 rounded-xl shrink-0 flex items-center justify-center ${c.accent ? "bg-[#CC624C]" : "bg-[#E4C0A8]"}`}
                        >
                          <c.Icon
                            size={24}
                            color={c.accent ? "#fefefe" : "#CC624C"}
                            strokeWidth={1.8}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* No-fee badge */}
                  <div className="mt-4.5 bg-[rgba(204,98,76,0.07)] border-[1.5px] border-[rgba(204,98,76,0.18)] rounded-xl p-[13px_17px] flex gap-2.5 items-center">
                    <div className="w-[26px] h-[26px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-[0.75rem] font-black">
                        ✓
                      </span>
                    </div>
                    <p className="font-nunito text-[0.83rem] text-[#CC624C] font-extrabold">
                      Keine Liefergebühr bei Lieferando — frisch direkt zu dir!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* Neighborhood / Landmarks Section */}
        <section className="py-20 bg-white border-t border-peach/30">
          <FadeUp className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-calistoga text-[2rem] text-charcoal mb-4">
                Unsere Nachbarschaft
              </h2>
              <p className="font-nunito text-charcoal/80 max-w-[600px] mx-auto">
                Hey Fede! liegt im Herzen der historischen Altstadt Wetzlars.
                Verbinde deinen Besuch bei uns mit einem Spaziergang zu diesen
                wunderschönen Sehenswürdigkeiten in unmittelbarer Nähe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LANDMARKS.map((landmark, idx) => (
                <a
                  key={idx}
                  href={landmark.wikipediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-cream border border-peach/50 rounded-[18px] p-6 transition-all duration-300 hover:shadow-clay hover:-translate-y-1 block"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="font-calistoga text-xl text-terracotta group-hover:text-[#b05240] transition-colors flex-1 min-w-0 break-words"
                      style={{
                        wordBreak: "break-word",
                        WebkitHyphens: "auto",
                        hyphens: "auto",
                      }}
                      lang="de"
                    >
                      {landmark.name}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5 bg-[#eedfcc] text-brown text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                      <Compass size={14} />
                      {landmark.distanceStr}
                    </div>
                  </div>
                  <p className="font-nunito text-sm text-charcoal/80 leading-relaxed">
                    {landmark.description}
                  </p>
                  <div className="mt-4 text-xs font-bold text-terracotta flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Auf Wikipedia ansehen <ChevronRight size={14} />
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes blobFloat{0%,100%{transform:translate(0,0)}33%{transform:translate(6px,-10px)}66%{transform:translate(-5px,7px)}}
        .animate-blob-float { animation: blobFloat 10s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
      `,
          }}
        />
      </div>
      <SEOContentBlock
        visible={true}
        ariaLabel="Anfahrt, Parken & Tipps für deinen Besuch bei Hey Fede!"
      >
        <VisitSEO />
      </SEOContentBlock>
      <SchemaScripts
        schema={[buildPlaceSchema(), buildTouristDestinationSchema()]}
      />
    </>
  );
}
