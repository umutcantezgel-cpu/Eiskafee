'use client';

import React from 'react';
import Link from 'next/link';
import LoyaltyCoin from '@/components/loyalty/LoyaltyCoin';
import { ChevronLeft, Gift, ArrowRight } from 'lucide-react';

export default function LoyaltyPage() {
  return (
    <div className="min-h-screen bg-cream text-bark font-body pb-20">
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <nav className="mb-8">
          <Link href="/profile" className="text-bark-soft hover:text-terra transition-colors flex items-center gap-2 w-fit font-bold text-sm">
            <ChevronLeft className="w-5 h-5" />
            Zurück zum Profil
          </Link>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-bark mb-4 tracking-tight">
            Hey Fede! <span className="text-terra">Coins</span>
          </h1>
          <p className="text-[15px] text-bark-soft max-w-lg mx-auto leading-relaxed">
            Sammle Coins bei jedem Einkauf und schalte exklusive Belohnungen frei. Deine Treue soll belohnt werden.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center items-center h-[320px] w-full bg-white rounded-[3rem] shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-peach/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="scale-150 relative z-10">
              <LoyaltyCoin />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-peach rounded-full blur-[40px] opacity-40"></div>
              <h3 className="text-bark-soft text-[13px] font-bold uppercase tracking-widest mb-1 relative z-10">Aktueller Kontostand</h3>
              <div className="flex items-baseline gap-2 relative z-10">
                <span className="text-5xl font-display text-terra">1.250</span>
                <span className="text-lg text-bark-soft font-bold">Coins</span>
              </div>
              <div className="mt-6 w-full bg-beige rounded-full h-2.5 overflow-hidden relative z-10">
                <div className="bg-terra h-full rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
              </div>
              <p className="mt-3 text-[13px] text-bark-soft relative z-10 font-medium">Noch 250 Coins bis zum <span className="text-terra font-bold">Platin-Status</span></p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center hover:bg-beige/30 transition-colors cursor-pointer shadow-sm">
                <div className="w-10 h-10 mx-auto bg-peach/40 text-terra rounded-full flex items-center justify-center mb-3">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[14px] text-bark">Coins sammeln</h4>
                <p className="text-[12px] text-bark-soft mt-1">Wege zum Sammeln</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center hover:bg-beige/30 transition-colors cursor-pointer shadow-sm">
                <div className="w-10 h-10 mx-auto bg-mint/40 text-mint-dark rounded-full flex items-center justify-center mb-3">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[14px] text-bark">Verlauf</h4>
                <p className="text-[12px] text-bark-soft mt-1">Aktivitäten anzeigen</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display text-bark">Verfügbare Belohnungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "10 € Rabatt", cost: 500, color: "bg-terra", badge: "Beliebt" },
              { title: "Kostenloser Versand", cost: 800, color: "bg-mint-dark", badge: "Neu" },
              { title: "Überraschungsbox", cost: 1200, color: "bg-[#E6A300]", badge: "Premium" },
            ].map((reward, i) => (
              <div key={i} className="group relative bg-white rounded-3xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden border border-beige">
                <div className={`absolute top-0 right-0 w-24 h-24 ${reward.color} opacity-[0.08] rounded-bl-full group-hover:scale-125 transition-transform duration-500`}></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${reward.color} text-white`}>
                    {reward.badge}
                  </div>
                  <span className="font-display text-lg text-terra">{reward.cost} <span className="text-sm">Coins</span></span>
                </div>

                <h3 className="text-[18px] font-bold text-bark mb-1.5 relative z-10">{reward.title}</h3>
                <p className="text-bark-soft text-[13px] mb-6 relative z-10 leading-relaxed">Schalte diese Belohnung mit deinen Coins frei.</p>
                
                <button className="w-full py-2.5 bg-beige hover:bg-peach text-terra text-[14px] font-bold rounded-xl transition-colors">
                  Einlösen
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
