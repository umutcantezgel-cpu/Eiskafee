"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, updateQuantity, clearCart } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const total = cart.reduce((s, i) => s + i.quantity * (typeof i.price === 'number' ? i.price : parseFloat(i.price)), 0);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Dein Warenkorb ist leer.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Create pending draft order
      const docRef = await addDoc(collection(db, "orders"), {
        items: cart.map(it => ({ 
          name: it.name, 
          variant: it.v || it.desc || "", 
          quantity: it.quantity, 
          price: typeof it.price === 'number' ? it.price : parseFloat(it.price) 
        })),
        total,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
      useStore.getState().updateOrderData({ orderId: docRef.id });
      router.push("/pickup-time");
    } catch (err) {
      console.error("Error creating draft order:", err);
      alert("Fehler. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Warenkorb wirklich leeren?")) {
      clearCart();
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
          <div className="font-nunito text-[11px] font-bold text-[#7a5a52]">{cart.reduce((s, i) => s + i.quantity, 0)} Artikel · Pickup</div>
        </div>
        <button onClick={handleClear} className="text-[12px] font-extrabold text-[#7a5a52] underline">
          Leeren
        </button>
      </div>

      <div className="px-5 flex-1 overflow-y-auto pb-6 pt-2">
        {cart.length === 0 ? (
          <div className="text-center mt-10">
            <div className="font-calistoga text-xl text-[#2d1f19] mb-2">Warenkorb leer</div>
            <Link href="/menu">
              <PrimaryButton>Zurück zum Menü</PrimaryButton>
            </Link>
          </div>
        ) : (
          cart.map((it, idx) => {
            const IconComponent = it.ic || Icons.Package;
            const itemPrice = typeof it.price === 'number' ? it.price : parseFloat(it.price);
            return (
              <FadeUp key={it.id} delay={0.1 + idx * 0.1} className="bg-white rounded-[18px] p-3 mb-2.5 flex gap-3 items-center shadow-sm">
                <div className="w-[58px] h-[58px] rounded-[14px] bg-[#E4C0A8] flex items-center justify-center shrink-0">
                  <IconComponent size={26} color="#CC624C" strokeWidth={1.5} className="opacity-70" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-nunito font-black text-[13px] text-[#2d1f19]">{it.name}</div>
                  <div className="font-nunito text-[11px] text-[#7a5a52] mt-0.5 mb-2 leading-tight">{it.v || it.desc || ''}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-[#eedfcc] rounded-full p-[3px]">
                      <button onClick={() => updateQuantity(it.id, it.quantity - 1)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Icons.Minus size={11} color="#2d1f19" strokeWidth={2.5} />
                      </button>
                      <span className="px-2.5 font-nunito font-black text-[12px] text-[#2d1f19]">{it.quantity}</span>
                      <button onClick={() => updateQuantity(it.id, it.quantity + 1)} className="w-6 h-6 rounded-full bg-[#CC624C] flex items-center justify-center shadow-sm">
                        <Icons.Plus size={11} color="#white" strokeWidth={2.5} />
                      </button>
                    </div>
                    <span className="font-calistoga text-[14px] text-[#CC624C]">
                      {(it.quantity * itemPrice).toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                </div>
              </FadeUp>
            );
          })
        )}

        {cart.length > 0 && (
          <>
            {/* Add more */}
            <Link href="/menu">
              <FadeUp delay={0.3} className="border-2 border-dashed border-[#E4C0A8] rounded-[18px] p-3.5 flex items-center justify-center gap-2 mb-[18px]">
                <Icons.Plus size={15} color="#CC624C" strokeWidth={2} />
                <span className="font-nunito text-[12.5px] font-extrabold text-[#CC624C]">Mehr hinzufügen</span>
              </FadeUp>
            </Link>

            {/* Voucher */}
            <FadeUp delay={0.4} className="bg-white rounded-[16px] p-[12px_14px] flex items-center gap-2.5 mb-3.5 shadow-sm">
              <Icons.Gift size={18} color="#CC624C" strokeWidth={1.8} />
              <span className="font-nunito text-[12.5px] text-[#7a5a52] font-bold flex-1">Gutscheincode</span>
              <span className="font-nunito text-[11.5px] font-extrabold text-[#CC624C]">EINLÖSEN</span>
            </FadeUp>

            {/* Summary */}
            <FadeUp delay={0.5} className="bg-[#eedfcc] rounded-[18px] p-[14px_16px] shadow-sm">
              {[
                { l: 'Zwischensumme', v: `${total.toFixed(2).replace('.', ',')} €` },
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
          </>
        )}
      </div>

      {cart.length > 0 && (
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
      )}
    </div>
  );
}
