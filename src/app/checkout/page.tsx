"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function CheckoutPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const items = [
    { n: 'Pancake Picknick Box', v: 'Erdbeere · Banane · Schoko', q: 1, p: 9.80, ic: Icons.Package },
    { n: 'Bubble Waffel Klassik', v: 'Vanille · Erdbeere', q: 2, p: 7.50, ic: Icons.IceCream },
  ];
  
  const total = items.reduce((s, i) => s + i.q * i.p, 0);

  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "orders"), {
        items: items.map(it => ({ name: it.n, variant: it.v, quantity: it.q, price: it.p })),
        total,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
      router.push("/pickup-time");
    } catch (err) {
      console.error("Error creating order:", err);
      alert("Fehler bei der Bestellung. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      {/* Header */}
      <div className="bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Icons.ArrowLeft size={20} color="#2d1f19" />
        </button>
        <div className="text-center">
          <div className="font-calistoga text-lg text-[#2d1f19] leading-tight">Dein Warenkorb</div>
          <div className="font-nunito text-[11px] font-bold text-[#7a5a52]">2 Artikel · Pickup</div>
        </div>
        <button className="text-[12px] font-extrabold text-[#7a5a52] underline">
          Leeren
        </button>
      </div>

      <div className="px-5 flex-1 overflow-y-auto pb-6 pt-2">
        {items.map((it, idx) => (
          <FadeUp key={it.n} delay={0.1 + idx * 0.1} className="bg-white rounded-[18px] p-3 mb-2.5 flex gap-3 items-center shadow-sm">
            <div className="w-[58px] h-[58px] rounded-[14px] bg-[#E4C0A8] flex items-center justify-center shrink-0">
              <it.ic size={26} color="#CC624C" strokeWidth={1.5} className="opacity-70" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-nunito font-black text-[13px] text-[#2d1f19]">{it.n}</div>
              <div className="font-nunito text-[11px] text-[#7a5a52] mt-0.5 mb-2 leading-tight">{it.v}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-[#eedfcc] rounded-full p-[3px]">
                  <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Icons.Minus size={11} color="#2d1f19" strokeWidth={2.5} />
                  </button>
                  <span className="px-2.5 font-nunito font-black text-[12px] text-[#2d1f19]">{it.q}</span>
                  <button className="w-6 h-6 rounded-full bg-[#CC624C] flex items-center justify-center shadow-sm">
                    <Icons.Plus size={11} color="#white" strokeWidth={2.5} />
                  </button>
                </div>
                <span className="font-calistoga text-[14px] text-[#CC624C]">
                  {(it.q * it.p).toFixed(2).replace('.', ',')} €
                </span>
              </div>
            </div>
          </FadeUp>
        ))}

        {/* Add more */}
        <FadeUp delay={0.3} className="border-2 border-dashed border-[#E4C0A8] rounded-[18px] p-3.5 flex items-center justify-center gap-2 mb-[18px]">
          <Icons.Plus size={15} color="#CC624C" strokeWidth={2} />
          <span className="font-nunito text-[12.5px] font-extrabold text-[#CC624C]">Mehr hinzufügen</span>
        </FadeUp>

        {/* Voucher */}
        <FadeUp delay={0.4} className="bg-white rounded-[16px] p-[12px_14px] flex items-center gap-2.5 mb-3.5 shadow-sm">
          <Icons.Gift size={18} color="#CC624C" strokeWidth={1.8} />
          <span className="font-nunito text-[12.5px] text-[#7a5a52] font-bold flex-1">Gutscheincode</span>
          <span className="font-nunito text-[11.5px] font-extrabold text-[#CC624C]">EINLÖSEN</span>
        </FadeUp>

        {/* Summary */}
        <FadeUp delay={0.5} className="bg-[#eedfcc] rounded-[18px] p-[14px_16px] shadow-sm">
          {[
            { l: 'Zwischensumme', v: '24,80 €' },
            { l: 'Pickup-Rabatt', v: '– 0,00 €' },
          ].map((row) => (
            <div key={row.l} className="flex justify-between font-nunito text-[12.5px] text-[#7a5a52] mb-2">
              <span>{row.l}</span>
              <span className="font-bold">{row.v}</span>
            </div>
          ))}
          <div className="h-[1px] bg-[#E4C0A8] my-2" />
          <div className="flex justify-between items-baseline mt-2">
            <span className="font-nunito font-black text-[13px] text-[#2d1f19]">Gesamt</span>
            <span className="font-calistoga text-[22px] text-[#CC624C]">
              {total.toFixed(2).replace('.', ',')} €
            </span>
          </div>
        </FadeUp>
      </div>

      <div className="p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]">
        <PrimaryButton 
          className="w-full flex justify-center items-center gap-2" 
          onClick={handleCheckout} 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird verarbeitet..." : "Weiter zur Abholung"}
          <Icons.ArrowRight size={18} />
        </PrimaryButton>
        <div className="text-center font-nunito text-[11px] text-[#7a5a52] mt-2 font-bold">
          Zahlung erfolgt vor Ort im Laden
        </div>
      </div>
    </div>
  );
}
