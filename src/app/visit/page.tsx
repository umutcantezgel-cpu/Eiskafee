"use client";

import React from "react";
import { VisitSEO } from "@/content/seo/VisitSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { FadeUp } from "@/components/ui/FadeUp";
import dynamic from "next/dynamic";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";
import { FoodIcon } from "@/components/ui/FoodIcon";
import { MapPin, Phone, MessageCircle, Truck, Camera, ChevronRight } from "lucide-react";

const InteractiveMap = dynamic(() => import("@/components/ui/InteractiveMap"), {
  ssr: false,
  loading: () => <div style={{ height: 320, borderRadius: 22, background: '#eedfcc' }} />,
});

const DAYS = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
const todayIdx = (() => { const d = new Date().getDay(); return d === 0 ? 6 : d - 1; })();

export default function VisitPage() {
  return (
    <>
    <div className="min-h-screen bg-[#f5efe8] animate-fade-in">
      {/* Hero */}
      <section className="bg-[#eedfcc] pt-[110px] px-6 pb-[88px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] dot-bg" />
        <div className="absolute top-[14%] left-[4%] w-[220px] h-[220px] bg-[#E4C0A8] opacity-50 animate-blob-float" 
             style={{ borderRadius: '56% 44% 48% 52%/52% 60% 40% 48%' }} />
        <div className="absolute bottom-[10%] right-[6%] w-[160px] h-[160px] bg-[#CC624C] opacity-10" 
             style={{ borderRadius: '42% 58% 55% 45%' }} />

        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          <h1 className="font-calistoga text-[clamp(2.4rem,6vw,4.2rem)] text-[#2d1f19] mb-3.5 leading-[1.05]">
            Komm uns besuchen!
          </h1>
          <p className="font-nunito text-[1.04rem] text-[#5c3d35]">
            Wir freuen uns auf dich — vor Ort oder bequem per Lieferung.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 44" className="block w-full h-[44px]" preserveAspectRatio="none">
            <path d="M0,22 C480,48 960,0 1440,26 L1440,44 L0,44 Z" fill="#f5efe8" />
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
                <InteractiveMap />
              </div>

              {/* Contact rows */}
              <div className="flex flex-col gap-2.5">
                {[
                  { Icon: MapPin,         label: 'Adresse',   val: 'Langgasse 68, 35576 Wetzlar',   href: null },
                  { Icon: Phone,          label: 'Telefon',   val: '06441 7890426',                  href: 'tel:+4964417890426' },
                  { Icon: MessageCircle,  label: 'WhatsApp',  val: '0176 25026991',                   href: 'https://wa.me/4917625026991' },
                  { Icon: Camera,      label: 'Instagram', val: '@heyfede_wetzlar',               href: 'https://www.instagram.com/heyfede_wetzlar' },
                ].map(({ Icon, label, val, href }) => (
                  <div key={label} className="bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center">
                    <div className="w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0">
                      <Icon size={16} color="#fefefe" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]">{label}</div>
                      {href
                        ? <a href={href} className="font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline">{val}</a>
                        : <span className="font-nunito font-bold text-[0.88rem] text-[#2d1f19]">{val}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Hours + CTAs ── */}
            <div className="flex flex-col gap-8">
              {/* Opening hours */}
              <div>
                <h2 className="font-calistoga text-[1.7rem] text-[#2d1f19] mb-4.5">
                  Öffnungszeiten
                </h2>
                <div className="bg-[#eedfcc] rounded-[18px] overflow-hidden">
                  {DAYS.map((day, i) => {
                    const isToday = i === todayIdx;
                    const hours = i <= 1 ? 'Geschlossen' : i === 6 ? '13:00 – 19:00 Uhr' : '12:00 – 19:00 Uhr';
                    const isClosed = i <= 1;
                    return (
                      <div key={day} className={`flex justify-between items-center p-[13px_19px] ${isToday ? 'bg-[#CC624C]' : 'bg-transparent border-b border-[rgba(228,192,168,0.45)] last:border-b-0'}`}>
                        <div className="flex items-center gap-2">
                          {isToday && <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />}
                          <span className={`font-nunito text-[0.87rem] ${isToday ? 'font-black text-white' : 'font-semibold text-[#2d1f19]'}`}>{day}</span>
                        </div>
                        <div className="flex items-center gap-[9px]">
                          <span className={`font-nunito text-[0.87rem] ${isToday ? 'text-white font-bold' : isClosed ? 'text-[#9a7060] font-normal' : 'text-[#5c3d35] font-normal'}`}>
                            {hours}
                          </span>
                          {isToday && (
                            <span className="bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full">Heute</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order / pickup CTAs */}
              <div>
                <h2 className="font-calistoga text-[1.7rem] text-[#2d1f19] mb-4">
                  Bestellen & Abholen
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    { id: 'lieferando', title: 'Lieferando', sub: 'Keine Liefergebühr · Direkt nach Hause', Icon: Truck, accent: true, href: 'https://www.lieferando.de/speisekarte/hey-fede' },
                    { id: 'abholung',   title: 'Abholung',   sub: 'Vor Ort: Langgasse 68, Wetzlar',        Icon: MapPin, accent: false, href: 'https://maps.google.com/?q=Langgasse+68+Wetzlar' },
                  ].map(c => (
                    <div key={c.id}
                      className="group bg-[#eedfcc] rounded-[18px] p-5 flex justify-between items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(204,98,76,0.13)]">
                      <div>
                        <div className="font-calistoga text-[1.1rem] text-[#2d1f19] mb-1">{c.title}</div>
                        <div className="font-nunito text-[0.8rem] text-[#9a7060] mb-3">{c.sub}</div>
                        {c.accent
                          ? <PrimaryButton sectionBg="#eedfcc" href={c.href}>Jetzt bestellen →</PrimaryButton>
                          : <SecondaryButton href={c.href}>Route planen →</SecondaryButton>}
                      </div>
                      <div className={`w-14 h-14 rounded-xl shrink-0 flex items-center justify-center ${c.accent ? 'bg-[#CC624C]' : 'bg-[#E4C0A8]'}`}>
                        <c.Icon size={24} color={c.accent ? '#fefefe' : '#CC624C'} strokeWidth={1.8} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* No-fee badge */}
                <div className="mt-4.5 bg-[rgba(204,98,76,0.07)] border-[1.5px] border-[rgba(204,98,76,0.18)] rounded-xl p-[13px_17px] flex gap-2.5 items-center">
                  <div className="w-[26px] h-[26px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-[0.75rem] font-black">✓</span>
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blobFloat{0%,100%{transform:translate(0,0)}33%{transform:translate(6px,-10px)}66%{transform:translate(-5px,7px)}}
        .animate-blob-float { animation: blobFloat 10s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
      `}} />
    </div>
      <SEOContentBlock visible={true} ariaLabel="Anfahrt, Parken & Tipps für deinen Besuch bei Hey Fede!">
        <VisitSEO />
      </SEOContentBlock>
    </>
  );
}
