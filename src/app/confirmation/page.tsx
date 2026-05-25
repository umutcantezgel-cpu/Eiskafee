"use client";

import React from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      {/* Hero confetti area */}
      <div className="pt-8 px-6 text-center relative">
        <FadeUp delay={0.1} className="mx-auto mt-2.5 mb-4 w-[84px] h-[84px] rounded-full bg-[#CC624C] flex items-center justify-center shadow-[0_12px_28px_rgba(204,98,76,0.32)] relative">
          <Icons.Check size={42} color="#white" strokeWidth={2.5} />
          {/* sparkles */}
          <div className="absolute -top-2 -right-3">
            <Icons.Sparkles size={20} color="#CC624C" strokeWidth={1.5} />
          </div>
          <div className="absolute -bottom-1.5 -left-3">
            <Icons.Sparkles size={14} color="#E4C0A8" strokeWidth={1.5} />
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className="font-calistoga text-[26px] text-[#2d1f19] leading-[1.1]">Bestellung bestätigt!</h1>
          <p className="font-nunito text-[13px] text-[#5c3d35] mt-1.5 leading-relaxed max-w-[280px] mx-auto">
            Wir bereiten alles frisch vor. Bestätigung per SMS an deine Nummer.
          </p>
        </FadeUp>
      </div>

      {/* Ticket */}
      <div className="px-5 pt-6">
        <FadeUp delay={0.3} className="border-2 border-dashed border-[#CC624C] rounded-[20px] bg-white relative shadow-sm">
          {/* Cutouts */}
          <div className="absolute -left-[13px] top-[42%] w-[26px] h-[26px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#E4C0A8] border-l-transparent border-t-transparent -rotate-45" />
          <div className="absolute -right-[13px] top-[42%] w-[26px] h-[26px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#E4C0A8] border-r-transparent border-b-transparent -rotate-45" />

          <div className="p-[18px_22px_14px] text-center border-b-2 border-dashed border-[#eedfcc]">
            <div className="font-nunito text-[10px] font-black text-[#7a5a52] tracking-[1.4px] uppercase">Bestellnummer</div>
            <div className="font-calistoga text-[30px] text-[#CC624C] mt-1 tracking-wide">#F-24891</div>
          </div>

          <div className="p-[18px_22px] flex gap-3.5 items-center">
            <div className="w-[88px] h-[88px] bg-[#2d1f19] rounded-[12px] p-[7px] shrink-0">
              <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                <Icons.QrCode size={60} color="#2d1f19" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="font-nunito text-[10px] font-black text-[#CC624C] tracking-[1.4px] uppercase">Abholung</div>
              <div className="font-calistoga text-[18px] text-[#2d1f19] mt-1 leading-[1.1]">Heute · 15:30</div>
              <div className="font-nunito text-[11.5px] text-[#7a5a52] mt-1.5 leading-snug">
                Langgasse 68<br/>35576 Wetzlar
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Summary mini */}
      <div className="p-[18px_20px]">
        <FadeUp delay={0.4} className="bg-[#eedfcc] rounded-[14px] p-[10px_14px] flex justify-between items-center shadow-sm">
          <span className="font-nunito text-[12px] font-extrabold text-[#2d1f19]">3 Artikel · vor Ort zu zahlen</span>
          <span className="font-calistoga text-[17px] text-[#CC624C]">24,80 €</span>
        </FadeUp>
      </div>

      <div className="mt-auto px-5 pb-8 pt-6">
        <FadeUp delay={0.5} className="flex flex-col gap-2.5">
          <Link href="/order-status" className="block w-full">
            <PrimaryButton className="w-full flex justify-center items-center gap-2">
              <Icons.Package size={18} />
              Status anzeigen
            </PrimaryButton>
          </Link>
          <Link href="/" className="block w-full">
            <button className="w-full py-3.5 rounded-[16px] border-2 border-[#E4C0A8] text-[#2d1f19] font-extrabold font-nunito text-[15px] bg-transparent active:bg-[rgba(228,192,168,0.2)] transition-colors">
              Zur Startseite
            </button>
          </Link>
        </FadeUp>
      </div>
    </div>
  );
}
