import React from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";

export default function OrderHubPage() {
  return (
    <div className="min-h-screen bg-[#f5efe8] pb-32">
      {/* Top Bar Area */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3.5">
        <div className="font-calistoga text-3xl text-[#CC624C]">Hey Fede!</div>
        <div className="relative">
          <div className="w-[38px] h-[38px] rounded-full bg-[rgba(255,255,255,0.7)] flex items-center justify-center">
            <Icons.Bell size={18} color="#2d1f19" strokeWidth={2} />
          </div>
          <div className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-[#CC624C] border-[1.5px] border-[#f5efe8]" />
        </div>
      </div>

      {/* HERO Card */}
      <FadeUp delay={0.1} className="mx-5 mt-1 bg-[#E4C0A8] rounded-[24px] p-[22px_22px_24px] relative overflow-hidden">
        <div className="absolute -top-[18px] -right-[18px] w-[130px] h-[130px] bg-[rgba(245,239,232,0.4)] rounded-[58%_42%_52%_48%/48%_58%_42%_52%]" />
        <div className="relative z-10">
          <div className="inline-block bg-[rgba(255,255,255,0.55)] px-[11px] py-1 rounded-full text-[10px] font-black text-[#CC624C] tracking-[1.2px] uppercase mb-3">
            Click & Collect
          </div>
          <h1 className="font-calistoga text-[30px] leading-[1.05] text-[#2d1f19]">
            Vorbestellen.<br/>Abholen.<br/><span className="text-[#CC624C]">Genießen.</span>
          </h1>
          <p className="font-nunito text-[13px] text-[#5c3d35] mt-2.5 leading-[1.55] max-w-[240px]">
            Reserviere deine Lieblings-Desserts und hol sie ofenfrisch in der Langgasse ab.
          </p>
        </div>
      </FadeUp>

      {/* Steps */}
      <div className="px-5 pt-6">
        <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3.5">
          So funktioniert's
        </div>
        {[
          { icon: Icons.ShoppingBag, title: "1. Auswählen", desc: "Stöber durch die Speisekarte" },
          { icon: Icons.Clock, title: "2. Abholzeit wählen", desc: "Wir bereiten alles frisch zu" },
          { icon: Icons.Wallet, title: "3. Im Laden bezahlen", desc: "Bar oder Karte — keine Vorkasse" },
        ].map((step, idx) => (
          <FadeUp key={step.title} delay={0.2 + idx * 0.1} className="flex gap-3.5 items-center bg-[rgba(255,255,255,0.6)] rounded-[18px] p-[12px_14px] mb-[9px]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#f5efe8] flex items-center justify-center shrink-0">
              <step.icon size={20} color="#CC624C" strokeWidth={2} />
            </div>
            <div>
              <div className="font-nunito font-extrabold text-[13.5px] text-[#2d1f19]">{step.title}</div>
              <div className="font-nunito text-[11.5px] text-[#7a5a52] mt-[1px]">{step.desc}</div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Why us */}
      <div className="px-5 pt-5 grid grid-cols-2 gap-2.5">
        {[
          { icon: Icons.Clock, val: "15 Min", label: "bereit" },
          { icon: Icons.Wallet, val: "0€", label: "Vorkasse" },
        ].map((stat, idx) => (
          <FadeUp key={stat.val} delay={0.5 + idx * 0.1} className="bg-[#eedfcc] rounded-[16px] p-[12px_14px]">
            <stat.icon size={16} color="#CC624C" strokeWidth={2} />
            <div className="font-calistoga text-[22px] text-[#2d1f19] mt-1.5 leading-none">{stat.val}</div>
            <div className="font-nunito text-[11px] text-[#7a5a52] mt-0.5 font-bold">{stat.label}</div>
          </FadeUp>
        ))}
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-[104px] left-0 w-full px-5 z-40">
        <Link href="/menu" className="block w-full">
          <PrimaryButton className="w-full flex justify-center items-center gap-2">
            <Icons.ShoppingBag size={18} />
            Jetzt vorbestellen
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
