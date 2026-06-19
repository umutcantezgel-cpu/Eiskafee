import React from "react";
import Image from "next/image";
import { HomeSEO } from "@/content/seo/HomeSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/seo/schema/pages";
import { FAQ_DATA } from "@/content/seo/faq-data";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";

import { TransitionLink } from "@/components/ui/TransitionLink";
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
  title: "Hey Fede! - Handgemachte Bubble Waffles & Eis in Wetzlar",
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

      {/* Lava-Line Divider (Hero -> Intro) */}
      <div
        className="hf-lava-line bg-cream"
        style={
          { "--lava": "#CC624C", "--lava2": "#E4C0A8" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── Intro / Family & Friends ──────────────────────────────────────── */}
      <section className="bg-cream pt-[88px] pb-[80px]">
        <FadeUp>
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Image blob — echtes Foto von Gründerin Federica */}
            <div className="relative">
              <div
                className="absolute inset-[-8px] bg-peach/60 z-0"
                style={{ borderRadius: "48% 52% 54% 46%/50% 48% 52% 50%" }}
              />
              <div
                className="relative overflow-hidden aspect-[4/5] z-10"
                style={{ borderRadius: "44% 56% 50% 50%/52% 48% 52% 48%" }}
              >
                <Image
                  src="/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg"
                  alt="Federica, Gründerin des Hey Fede! Dessertbar & Café in Wetzlar, bei der Arbeit in der Küche"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 45vw"
                  priority
                />
              </div>
              {/* Rating badge */}
              <div className="absolute -bottom-4 -right-2 bg-terracotta text-white px-4 py-3 rounded-2xl shadow-terra">
                <div className="font-heading text-[1.8rem] leading-none">
                  {config.rating}★
                </div>
                <div className="font-body text-[0.68rem] font-extrabold opacity-90 mt-0.5">
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
              <h2 className="font-heading text-[clamp(1.7rem,3.5vw,2.7rem)] text-brown mb-4 leading-[1.1]">
                Ein Ort für
                <br />
                <span className="text-terracotta">alle Generationen</span>
              </h2>
              <p className="font-body text-[0.97rem] text-brown-mid leading-[1.85] mb-7 max-w-[440px]">
                Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob
                Familienausflug, Verabredung mit Freunden oder ein süßer
                Nachmittag mit den Kleinen - hier ist Platz für alle.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: "Kinderecke",
                    desc: "Spielbereich für die Kleinen",
                    photo:
                      "/assets/photos/laden-kinderecke-spielzeug-nahaufnahme-hey-fede-wetzlar.jpg",
                    photoAlt:
                      "Kinderecke mit Spielzeug im Hey Fede! Dessertbar & Café Wetzlar",
                  },
                  {
                    title: "Wickelraum",
                    desc: "Komfort für Familien",
                    photo:
                      "/assets/photos/laden-wickeltisch-babyraum-hey-fede-wetzlar.jpg",
                    photoAlt:
                      "Babyraum mit Wickeltisch im Hey Fede! Café Wetzlar",
                  },
                  {
                    title: "Vegan",
                    desc: "Vegane Optionen verfügbar",
                    photo: null,
                    photoAlt: null,
                  },
                  {
                    title: "Hausgemacht",
                    desc: "Alles frisch & selbst gemacht",
                    photo: null,
                    photoAlt: null,
                  },
                ].map(({ title, desc, photo, photoAlt }) => (
                  <div
                    key={title}
                    className="bg-beige rounded-[14px] overflow-hidden"
                  >
                    {photo && (
                      <div className="relative h-20 w-full">
                        <Image
                          src={photo}
                          alt={photoAlt!}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                      </div>
                    )}
                    <div className="px-4 py-3.5">
                      <div className="font-body font-black text-[0.84rem] text-brown">
                        {title}
                      </div>
                      <div className="font-body text-[0.75rem] text-bark-soft mt-0.5">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Lava-Line Divider (Intro -> Bestsellers) */}
      <div
        className="hf-lava-line bg-beige"
        style={
          { "--lava": "#CC624C", "--lava2": "#E4C0A8" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── Bestsellers ───────────────────────────────────────────────────── */}
      <BestsellersSection />

      {/* Lava-Line Divider (Bestsellers -> Values) */}
      <div
        className="hf-lava-line bg-beige"
        style={
          { "--lava": "#E4C0A8", "--lava2": "#CC624C" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── Values ────────────────────────────────────────────────────────── */}
      <ValuesSection />

      {/* Lava-Line Divider (Values -> Stats) */}
      <div
        className="hf-lava-line bg-cream"
        style={
          { "--lava": "#CC624C", "--lava2": "#E4C0A8" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── Stats ─────────────────────────────────────────────────────────── */}
      <StatsSection />

      {/* Lava-Line Divider (Stats -> Occasions) */}
      <div
        className="hf-lava-line bg-cream"
        style={
          { "--lava": "#E4C0A8", "--lava2": "#CC624C" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── Occasions ─────────────────────────────────────────────────────── */}
      <OccasionsSection />

      {/* Lava-Line Divider (Occasions -> Seasonal) */}
      <div
        className="hf-lava-line bg-beige"
        style={
          { "--lava": "#CC624C", "--lava2": "#E4C0A8" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── Seasonal ──────────────────────────────────────────────────────── */}
      <SeasonalHighlights />

      {/* Lava-Band Divider (SeasonalHighlights -> Reviews) */}
      {/* SeasonalHighlights is bg-beige, Reviews is bg-peach */}
      <div
        className="hf-lava-band"
        style={
          {
            "--lava": "#E4C0A8",
            "--lava2": "#EAD2BE",
            backgroundColor: "#eedfcc",
          } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 160"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,94 Q-90,60 0,94 T180,94 T360,94 T540,94 T720,94 T900,94 T1080,94 T1260,94 T1440,94 T1620,94 T1800,94 T1980,94 T2160,94 T2340,94 T2520,94 T2700,94 T2880,94 T3060,94 L3060,160 L-180,160 Z" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 160"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,70 Q-90,40 0,70 T180,70 T360,70 T540,70 T720,70 T900,70 T1080,70 T1260,70 T1440,70 T1620,70 T1800,70 T1980,70 T2160,70 T2340,70 T2520,70 T2700,70 T2880,70 T3060,70 L3060,160 L-180,160 Z" />
          </svg>
        </div>
      </div>

      {/* ─── Reviews ───────────────────────────────────────────────────────── */}
      <ReviewsSection reviews={reviews} config={config} />

      {/* Lava-Line Divider (Reviews -> FAQ) */}
      {/* Reviews is bg-peach, FAQ is bg-cream */}
      <div
        className="hf-lava-line bg-cream"
        style={
          { "--lava": "#CC624C", "--lava2": "#EAD2BE" } as React.CSSProperties
        }
      >
        <div className="flow flow-b">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
        <div className="flow flow-f">
          <svg
            viewBox="0 0 2880 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-180,50 Q-90,28 0,50 T180,50 T360,50 T540,50 T720,50 T900,50 T1080,50 T1260,50 T1440,50 T1620,50 T1800,50 T1980,50 T2160,50 T2340,50 T2520,50 T2700,50 T2880,50 T3060,50" />
          </svg>
        </div>
      </div>

      {/* ─── FAQ Quick Check ───────────────────────────────────────────────── */}
      <FAQQuickCheck />

      {/* ─── Newsletter ────────────────────────────────────────────────────── */}
      <NewsletterSection />

      {/* ─── CTA Banner ────────────────────────────────────────────────────── */}
      <div className="bg-cream pb-24">
        <div className="hf-container">
          <section
            style={{
              background: "#CC624C",
              borderRadius: 24,
              padding: "48px 32px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute inset-0 hf-dot-bg pointer-events-none"
              style={{ opacity: 0.15 }}
            />
            <div style={{ position: "relative" }}>
              <h2
                style={{
                  font: "400 clamp(1.6rem,4vw,2.4rem)/1.1 var(--font-display)",
                  color: "#fefefe",
                }}
              >
                Hunger auf was Süßes?
              </h2>
              <p
                style={{
                  font: "400 .95rem var(--font-body)",
                  color: "rgba(255,255,255,.85)",
                  margin: "10px 0 24px",
                }}
              >
                Bestelle jetzt bei Lieferando - keine Liefergebühr.
              </p>
              <TransitionLink href="/menu">
                <span
                  className="hf-btn-wrap"
                  style={{ "--bite": "#CC624C" } as React.CSSProperties}
                >
                  <span
                    className="hf-btn-primary inline-block text-center"
                    style={{
                      background: "#fefefe",
                      color: "#CC624C",
                      boxShadow: "0 3px 12px rgba(0,0,0,.12)",
                    }}
                  >
                    Jetzt bestellen →
                  </span>
                </span>
              </TransitionLink>
            </div>
          </section>
        </div>
      </div>

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
