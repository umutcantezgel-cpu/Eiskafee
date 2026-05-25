"use client";

import React from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";

export default function OrderReviewPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      {/* Header */}
      <div className="bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Icons.ArrowLeft size={20} color="#2d1f19" />
        </button>
        <div className="text-center">
          <div className="font-calistoga text-lg text-[#2d1f19] leading-tight">Übersicht</div>
          <div className="font-nunito text-[11px] font-bold text-[#7a5a52]">Schritt 3 von 3</div>
        </div>
        <div className="w-10 h-10" />
      </div>

      <div className="px-5 pb-4 flex gap-1.5">
        {[true, true, true].map((active, i) => (
          <div key={i} className={`flex-1 h-1 rounded-full ${active ? 'bg-[#CC624C]' : 'bg-[#eedfcc]'}`} />
        ))}
      </div>

      <div className="px-5 flex-1 overflow-y-auto pb-6">
        {/* Pickup Card */}
        <FadeUp delay={0.1} className="bg-[#E4C0A8] rounded-[20px] p-[16px_18px] mb-3.5 relative overflow-hidden shadow-sm">
          <div className="absolute -top-5 -right-5 w-[90px] h-[90px] bg-[rgba(245,239,232,0.4)] rounded-full" />
          <div className="relative z-10">
            <div className="font-nunito text-[10px] font-black text-[#CC624C] tracking-[1.4px] uppercase">Abholung</div>
            <div className="flex items-baseline gap-2 mt-1">
              <div className="font-calistoga text-[26px] text-[#2d1f19] leading-none">Heute · 15:30</div>
            </div>
            <div className="font-nunito text-[11.5px] text-[#5c3d35] mt-1.5 font-bold">Langgasse 68 · Wetzlar</div>
          </div>
        </FadeUp>

        {/* Items Header */}
        <FadeUp delay={0.2} className="flex justify-between items-baseline mb-2">
          <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase">3 Artikel</div>
          <button onClick={() => router.back()} className="font-nunito text-[11px] font-extrabold text-[#CC624C] underline">
            Bearbeiten
          </button>
        </FadeUp>

        {/* Items List */}
        <FadeUp delay={0.3} className="bg-white rounded-[18px] p-1 mb-3.5 shadow-sm">
          {[
            { n: 'Pancake Picknick Box', v: 'Erdbeere · Banane · Schoko', q: 1, p: '9,80' },
            { n: 'Bubble Waffel Klassik', v: 'Vanille · Erdbeere', q: 2, p: '15,00' },
          ].map((it, i, a) => (
            <div key={it.n} className={`p-3 flex justify-between gap-2.5 ${i < a.length - 1 ? 'border-b border-[#eedfcc]' : ''}`}>
              <div className="flex-1 min-w-0">
                <div className="flex gap-2 mb-0.5 items-baseline">
                  <span className="font-nunito font-extrabold text-[12.5px] text-[#7a5a52]">{it.q}×</span>
                  <span className="font-nunito font-extrabold text-[13px] text-[#2d1f19]">{it.n}</span>
                </div>
                <div className="font-nunito text-[11px] text-[#7a5a52] ml-[23px]">{it.v}</div>
              </div>
              <span className="font-calistoga text-[14px] text-[#CC624C]">{it.p} €</span>
            </div>
          ))}
        </FadeUp>

        {/* Payment Notice */}
        <FadeUp delay={0.4} className="border-2 border-dashed border-[#CC624C] rounded-[16px] bg-white p-[14px_16px] mb-3.5 relative shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-[38px] h-[38px] rounded-full bg-[#eedfcc] flex items-center justify-center shrink-0">
              <Icons.Wallet size={18} color="#CC624C" strokeWidth={2} />
            </div>
            <div>
              <div className="font-calistoga text-[14px] text-[#2d1f19]">Bezahlung im Laden</div>
              <div className="font-nunito text-[11px] text-[#7a5a52] mt-[1px] leading-tight">Bar oder Karte · keine Vorkasse · stornierbar bis 30 Min vor Abholung</div>
            </div>
          </div>
        </FadeUp>

        {/* Summary */}
        <FadeUp delay={0.5} className="bg-[#eedfcc] rounded-[18px] p-[14px_16px] shadow-sm">
          <div className="flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-1.5">
            <span>Zwischensumme</span><span className="font-bold">24,80 €</span>
          </div>
          <div className="flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-2">
            <span>inkl. 7% MwSt.</span><span className="font-bold">1,62 €</span>
          </div>
          <div className="h-[1px] bg-[#E4C0A8] my-1.5" />
          <div className="flex justify-between items-baseline mt-2">
            <span className="font-nunito font-black text-[13px] text-[#2d1f19]">Vor Ort zahlen</span>
            <span className="font-calistoga text-[24px] text-[#CC624C]">24,80 €</span>
          </div>
        </FadeUp>
      </div>

      <div className="p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]">
        <div className="font-nunito text-[10.5px] text-[#7a5a52] text-center mb-2.5 leading-tight">
          Mit „Bestellung absenden" akzeptierst du unsere <span className="text-[#CC624C] font-extrabold">AGB & Vorbestellbedingungen</span>
        </div>
        <Link href="/confirmation" className="block w-full">
          <PrimaryButton className="w-full flex justify-center items-center gap-2">
            <Icons.Check size={18} />
            Bestellung absenden
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
