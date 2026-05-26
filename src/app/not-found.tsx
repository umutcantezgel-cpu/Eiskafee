"use client";

import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#E4C0A8] relative overflow-hidden flex flex-col justify-center items-center p-6 text-center">
      {/* Decorative blobs */}
      <div className="absolute top-[60px] -right-[40px] w-[180px] h-[180px] bg-[rgba(245,239,232,0.4)] rounded-[58%_42%_52%_48%/48%_58%_42%_52%]" />
      <div className="absolute bottom-[120px] -left-[40px] w-[130px] h-[130px] bg-[rgba(204,98,76,0.12)] rounded-[45%_55%_40%_60%/58%_42%_58%_42%]" />

      <FadeUp className="relative z-10 w-full max-w-[400px] mx-auto flex flex-col items-center">
        {/* Spilled ice-cream illustration */}
        <div className="relative mb-8">
          <div className="w-[120px] h-[140px] relative">
            <div className="relative flex items-baseline gap-0.5 font-calistoga text-[130px] leading-[0.85] text-[#CC624C] tracking-[-4px]">
              <span className="inline-block -rotate-6">4</span>
              <span className="relative">
                <span className="inline-block">0</span>
                <div className="absolute top-[14px] left-[14px] w-2 h-2 rounded-full bg-[#f5efe8]" />
              </span>
              <span className="inline-block rotate-6">4</span>
            </div>
            {/* drips */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-[30px] bg-[#CC624C] rounded-[40%_60%_50%_50%/30%_30%_70%_70%]" />
            <div className="absolute -bottom-[18px] left-[45%] w-2.5 h-[18px] bg-[#CC624C] rounded-full" />
          </div>
        </div>

        <h1 className="font-calistoga text-[1.8rem] text-[#2d1f19] leading-[1.1] mb-3">Hier ist nur<br />geschmolzene Eiscreme!</h1>
        <p className="font-nunito text-sm text-[#5c3d35] leading-relaxed max-w-[300px] mb-8">
          Diese Seite gibt's leider nicht (mehr). Vielleicht stattdessen ein Dessert?
        </p>

        <div className="flex flex-col gap-3 w-full max-w-[280px]">
          <PrimaryButton href="/" sectionBg="#E4C0A8" large>
            <Icons.Home size={18} /> Zur Startseite
          </PrimaryButton>
          <SecondaryButton href="/menu" className="w-full">
            Speisekarte ansehen
          </SecondaryButton>
        </div>
      </FadeUp>

      {/* Tiny footer */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
        {['Hilfe', 'Kontakt', 'Impressum'].map((l) => (
          <Link key={l} href={l === 'Impressum' ? '/legal' : '/support'} className="font-nunito text-[11px] text-[#2d1f19] font-bold underline opacity-60 hover:opacity-100 transition-opacity">
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
}
