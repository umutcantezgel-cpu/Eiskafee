"use client";

import React from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { useRouter } from "next/navigation";

export default function OrderStatusPage() {
  const router = useRouter();

  const steps = [
    { t: 'Bestellung erhalten', ti: '14:42', ic: Icons.Check, done: true },
    { t: 'Wird zubereitet', ti: '14:55', ic: Icons.ChefHat, done: true, active: false },
    { t: 'Bereit zur Abholung', ti: '~15:30', ic: Icons.ShoppingBag, done: false, active: true },
    { t: 'Abgeholt', ti: '', ic: Icons.ThumbsUp, done: false },
  ];

  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      {/* Header */}
      <div className="bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Icons.ArrowLeft size={20} color="#2d1f19" />
        </button>
        <div className="text-center">
          <div className="font-calistoga text-lg text-[#2d1f19] leading-tight">Bestellung #F-24891</div>
          <div className="font-nunito text-[11px] font-bold text-[#7a5a52]">Geschätzt 15:30</div>
        </div>
        <div className="w-10 h-10" />
      </div>

      <div className="px-5 flex-1 overflow-y-auto pb-6 pt-2">
        {/* Big status pill */}
        <FadeUp delay={0.1} className="bg-[#CC624C] rounded-[22px] p-[20px_22px] text-white mb-4 relative overflow-hidden shadow-md">
          <div className="absolute -top-5 -right-2.5 w-[110px] h-[110px] bg-[rgba(255,248,241,0.16)] rounded-full" />
          <div className="relative z-10">
            <div className="font-nunito text-[10px] font-black tracking-[1.4px] uppercase opacity-85">Aktueller Status</div>
            <div className="font-calistoga text-[24px] leading-[1.15] mt-1">Deine Bestellung wird zubereitet</div>
            <div className="font-nunito text-[12px] mt-2 opacity-90 font-bold">Ofenfrisch in ca. 35 Min · 15:30</div>
          </div>
        </FadeUp>

        {/* Timeline */}
        <FadeUp delay={0.2} className="relative pl-2 mb-5">
          {steps.map((s, i) => {
            const isDoneOrActive = s.done || s.active;
            return (
              <div key={s.t} className={`flex gap-3.5 relative ${i < steps.length - 1 ? 'pb-5' : ''}`}>
                {i < steps.length - 1 && (
                  <div className={`absolute left-[17px] top-[34px] bottom-0 w-0.5 ${s.done ? 'bg-[#CC624C]' : 'bg-[#eedfcc]'}`} />
                )}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                  isDoneOrActive ? 'bg-[#CC624C]' : 'bg-[#eedfcc]'
                } ${s.active ? 'shadow-[0_0_0_5px_rgba(204,98,76,0.18)]' : ''}`}>
                  <s.ic size={16} color={isDoneOrActive ? '#fff' : '#7a5a52'} strokeWidth={2.2} />
                </div>
                <div className="flex-1 pt-1.5">
                  <div className={`font-nunito font-black text-[13px] ${isDoneOrActive ? 'text-[#2d1f19]' : 'text-[#7a5a52]'}`}>
                    {s.t}
                  </div>
                  {s.ti && (
                    <div className="font-nunito text-[11px] text-[#7a5a52] mt-[1px] font-bold">{s.ti}</div>
                  )}
                </div>
              </div>
            )
          })}
        </FadeUp>

        {/* Pickup info card */}
        <FadeUp delay={0.3} className="bg-white rounded-[18px] p-3.5 flex gap-3 items-start mb-2.5 shadow-sm">
          <div className="w-[42px] h-[42px] rounded-full bg-[#E4C0A8] flex items-center justify-center shrink-0">
            <Icons.MapPin size={20} color="#CC624C" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <div className="font-calistoga text-[14px] text-[#2d1f19]">Langgasse 68 · Wetzlar</div>
            <div className="font-nunito text-[11.5px] text-[#7a5a52] mt-[1px]">Tipp: Bestellnummer #F-24891 nennen</div>
            <div className="flex gap-2 mt-2.5">
              <div className="px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]">Route →</div>
              <div className="px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]">Anrufen</div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4} className="text-center pt-3.5 pb-8">
          <button className="font-nunito text-[11px] text-[#7a5a52] font-bold underline">
            Bestellung stornieren
          </button>
        </FadeUp>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#f5efe8] border-t border-[#eedfcc] pb-8 pt-3 px-6 flex justify-around items-center">
        {[
          { icon: Icons.Home, label: 'Home', to: '/' },
          { icon: Icons.ShoppingBag, label: 'Order', to: '/order-hub' },
          { icon: Icons.ScrollText, label: 'Menu', to: '/menu' },
          { icon: Icons.User, label: 'Profil', to: '/auth' },
        ].map(item => (
          <Link key={item.label} href={item.to} className={`flex flex-col items-center gap-1 ${item.label === 'Order' ? 'text-[#CC624C] opacity-100' : 'text-[#5c3d35] opacity-50'}`}>
            <item.icon size={22} strokeWidth={item.label === 'Order' ? 2.5 : 2} />
            <span className={`text-[10px] font-nunito font-bold`}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
