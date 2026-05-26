import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionTitle, StampBadge, TicketCard } from "@/components/ui/LayoutBlocks";
import { HoloTiltCard } from "@/components/ui/HoloTiltCard";
import { ScratchCard } from "@/components/ui/ScratchCard";
import { FoodIcon } from "@/components/ui/FoodIcon";
import { PhysicsPlayground } from "@/components/ui/PhysicsPlayground";
import { ReviewsSection } from "@/components/ui/ReviewsSection";
import { Star } from "lucide-react";
import { HF_DATA } from "@/lib/data";

export default function HomePage() {
  const { bestsellers, reviews, config } = HF_DATA;

  return (
    <div className="animate-fade-in">
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-[100vh] bg-[#E4C0A8] overflow-hidden pt-[68px]">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-50 dot-bg" />

        {/* Decorative blobs */}
        <div className="absolute top-[6%] -right-[3%] w-[360px] h-[360px] bg-[rgba(245,239,232,0.35)] animate-blob-float"
             style={{ borderRadius: '60% 40% 55% 45%/52% 60% 40% 48%' }} />
        <div className="absolute bottom-[10%] -left-[4%] w-[240px] h-[240px] bg-[rgba(204,98,76,0.12)] animate-blob-float-reverse"
             style={{ borderRadius: '45% 55% 40% 60%/58% 42% 58% 42%' }} />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <FadeUp delay={0.08}>


            <h1 className="font-calistoga text-[clamp(2.8rem,6vw,5.2rem)] text-[#2d1f19] leading-[1.02] mb-6">
              Süße Momente,<br/>
              <span className="text-[#CC624C]">frisch gemacht.</span>
            </h1>

            <p className="font-nunito text-[clamp(0.95rem,1.4vw,1.06rem)] text-[#5c3d35] max-w-[460px] mb-8 leading-[1.78]">
              Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe.
              Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <PrimaryButton large href="/menu" sectionBg="#E4C0A8">
                Zur Speisekarte →
              </PrimaryButton>
              <SecondaryButton href="/visit">Uns besuchen</SecondaryButton>
            </div>

            {/* Google rating pill */}
            <div className="inline-flex items-center gap-2.5 mt-8 bg-white/50 px-4 py-2.5 rounded-full backdrop-blur-md">
              <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#CC624C" color="#CC624C" aria-hidden="true" />)}
              </div>
              <span className="font-nunito font-black text-[0.87rem] text-[#2d1f19]">
                {config.rating}/5 auf Google
              </span>
              <span className="font-nunito text-[0.76rem] text-[#7a5a52]">
                ({config.reviewCount}+ Rezensionen)
              </span>
            </div>
          </FadeUp>

          {/* Food visual */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute w-[88%] aspect-square bg-[#f5efe8]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 style={{ borderRadius: '56% 44% 52% 48%/48% 56% 44% 52%' }} />
            <div className="relative z-10 w-[76%] max-w-[360px] aspect-square shadow-2xl"
                 style={{ borderRadius: '54% 46% 56% 44%/50% 54% 46% 50%' }}>
              <PhysicsPlayground size={360} />
            </div>
            <div className="absolute top-[4%] -right-[2%] z-20">
              <StampBadge text="Hausgemacht" size={86} rotate={14} />
            </div>
            <div className="absolute bottom-[5%] left-[0%] z-20">
              <StampBadge text="Frisch & Lecker" size={78} rotate={-9} color="#5c3d35" />
            </div>
          </div>
        </div>

        {/* Wave to cream */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 58" xmlns="http://www.w3.org/2000/svg" className="block w-full h-[58px]" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,29 C240,57 480,1 720,29 C960,57 1200,1 1440,29 L1440,58 L0,58 Z" fill="#f5efe8" />
          </svg>
        </div>
      </section>

      {/* ─── Intro / Family & Friends ──────────────────────────────────────── */}
      <section className="bg-[#f5efe8] pt-[88px] pb-[80px]">
        <FadeUp>
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Image blob */}
            <div className="relative">
              <div className="overflow-hidden aspect-[4/5]" style={{ borderRadius: '44% 56% 50% 50%/52% 48% 52% 48%' }}>
                <FoodIcon icon="Heart" label="Café Atmosphäre\nFamilienfoto" size="sq" shape="rounded-none" className="w-full h-full" />
              </div>
              {/* Rating badge */}
              <div className="absolute -bottom-4 -right-2 bg-[#CC624C] text-white px-4 py-3 rounded-2xl shadow-terra">
                <div className="font-calistoga text-[1.8rem] leading-none">{config.rating}★</div>
                <div className="font-nunito text-[0.68rem] font-extrabold opacity-90 mt-0.5">
                  {config.reviewCount}+ Google Reviews
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="flex gap-2.5 mb-4">
                <StampBadge text="Für die ganze Familie" size={84} rotate={-10} />
                <StampBadge text="Mit Kinderecke" size={76} rotate={8} color="#5c3d35" />
              </div>
              <h2 className="font-calistoga text-[clamp(1.7rem,3.5vw,2.7rem)] text-[#2d1f19] mb-4 leading-[1.1]">
                Ein Ort für<br/><span className="text-[#CC624C]">alle Generationen</span>
              </h2>
              <p className="font-nunito text-[0.97rem] text-[#5c3d35] leading-[1.85] mb-7 max-w-[440px]">
                Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden
                oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ['Kinderecke', 'Spielbereich für die Kleinen'],
                  ['Wickelraum', 'Komfort für Familien'],
                  ['Vegan', 'Vegane Optionen verfügbar'],
                  ['Hausgemacht', 'Alles frisch & selbst gemacht']
                ].map(([t, d]) => (
                  <div key={t} className="bg-[#eedfcc] rounded-[14px] px-4 py-3.5">
                    <div className="font-nunito font-black text-[0.84rem] text-[#2d1f19]">{t}</div>
                    <div className="font-nunito text-[0.75rem] text-[#9a7060] mt-0.5">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ─── Bestsellers ───────────────────────────────────────────────────── */}
      <section className="bg-[#eedfcc] py-20 relative">
        <div className="absolute top-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 44" className="block w-full h-[44px]" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,22 C360,44 720,0 1080,22 C1260,33 1380,18 1440,22 L1440,0 L0,0 Z" fill="#eedfcc" />
          </svg>
        </div>

        <FadeUp className="max-w-[1200px] mx-auto px-6 pt-7">
          <SectionTitle sub="Alles frisch und selbstgemacht — das schmeckt man.">Unsere Highlights</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {bestsellers.map((item: any) => (
              <HoloTiltCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <PrimaryButton large sectionBg="#eedfcc" href="/menu">Alle Produkte ansehen</PrimaryButton>
          </div>
        </FadeUp>
      </section>

      {/* ─── Lieferando Ticket Promo ───────────────────────────────────────── */}
      <section className="bg-[#f5efe8] py-20">
        <FadeUp className="max-w-[860px] mx-auto px-6">
          <ScratchCard>
            <TicketCard sectionBg="#f5efe8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_0.7fr] gap-7 items-center">
              <div>
                <div className="font-nunito font-black text-[0.7rem] text-[#CC624C] tracking-[2px] uppercase mb-2.5">
                  Dein exklusives Fede-Ticket
                </div>
                <h2 className="font-calistoga text-[clamp(1.3rem,3vw,1.9rem)] text-[#2d1f19] leading-[1.2] mb-3">
                  Kostenlose Lieferung über Lieferando!
                </h2>
                <p className="font-nunito text-[0.87rem] text-[#9a7060] mb-5 leading-[1.6]">
                  Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
                </p>
                <PrimaryButton sectionBg="#fefefe" href="https://www.lieferando.de/speisekarte/hey-fede">Jetzt bei Lieferando bestellen →</PrimaryButton>
              </div>
              {/* Dashed separator */}
              <div className="hidden md:block w-[1px] h-[110px] mx-auto"
                style={{ background: 'repeating-linear-gradient(to bottom,#CC624C 0,#CC624C 5px,transparent 5px,transparent 11px)' }} />
              {/* Value badge */}
              <div className="text-center">
                <div className="bg-[#eedfcc] rounded-2xl p-5 border-2 border-dashed border-[#E4C0A8] inline-block">
                  <div className="font-calistoga text-[3.4rem] text-[#CC624C] leading-none">0€</div>
                  <div className="font-nunito font-black text-[0.8rem] text-[#2d1f19] tracking-widest mt-1">LIEFERGEBÜHR</div>
                  <div className="font-nunito text-[0.7rem] text-[#9a7060] mt-1">Über Lieferando</div>
                  <div className="mt-2.5 flex gap-[1.5px] justify-center">
                    {Array.from({length: 20}, (_,i) => (
                      <div key={i} className="bg-[#CC624C] opacity-55 rounded-sm"
                           style={{ width: i%3===0 ? 2.5 : 1.2, height: i%5===0 ? 20 : 14 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </TicketCard>
          </ScratchCard>
        </FadeUp>
      </section>

      {/* ─── Reviews ───────────────────────────────────────────────────────── */}
      <ReviewsSection reviews={reviews} config={config} />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blobFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(6px,-10px)} 66%{transform:translate(-5px,7px)} }
        .animate-blob-float { animation: blobFloat 9s ease-in-out infinite; }
        .animate-blob-float-reverse { animation: blobFloat 12s ease-in-out infinite reverse; }
        .animate-fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
      `}} />
    </div>
  );
}
