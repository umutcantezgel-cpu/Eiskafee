import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wartungsmodus",
  description: "Hey Fede ist bald für euch da!",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-bg-creme flex flex-col items-center justify-center p-6 text-center font-body relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        {/* Playful icon/emoji */}
        <div className="text-6xl md:text-8xl mb-8 animate-bounce">🧇</div>

        <h1 className="font-calistoga text-4xl md:text-5xl text-terracotta mb-6 leading-tight">
          Wir rühren gerade frischen Teig an...
        </h1>

        <p className="font-nunito text-lg md:text-xl text-charcoal/80 mb-10 leading-relaxed font-medium">
          Hey Fede bekommt gerade den letzten Feinschliff. Wir sind sehr bald
          offiziell für euch da und freuen uns schon riesig darauf, euch unsere
          hausgemachten Desserts zu servieren!
        </p>

        <div className="bg-white/60 backdrop-blur-sm border border-terracotta/20 rounded-3xl p-6 shadow-sm">
          <p className="font-nunito text-sm text-charcoal/70 font-bold uppercase tracking-wider mb-2">
            Kontakt
          </p>
          <a
            href="mailto:hallo@hey-fede.de"
            className="font-calistoga text-xl text-terracotta hover:text-charcoal transition-colors"
          >
            hallo@hey-fede.de
          </a>
        </div>
      </div>
    </div>
  );
}
