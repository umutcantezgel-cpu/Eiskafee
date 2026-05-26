"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { doc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function OrderReviewPage() {
  const router = useRouter();
  const { cart, orderData, clearCart, updateOrderData } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((s, i) => s + i.quantity * (typeof i.price === 'number' ? i.price : parseFloat(i.price)), 0);
  const tax = subtotal * 0.07;

  // Format date display
  const isToday = orderData.pickupDate === new Date().toISOString().split('T')[0];
  const dateDisplay = isToday ? "Heute" : new Date(orderData.pickupDate).toLocaleDateString("de-DE", { weekday: 'short', day: '2-digit', month: '2-digit' });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const orderNumber = `#HF-${Math.floor(1000 + Math.random() * 9000)}`;
      
      if (orderData.orderId) {
        // Update existing draft order
        const docRef = doc(db, "orders", orderData.orderId);
        await updateDoc(docRef, {
          orderNumber,
          pickupDate: orderData.pickupDate,
          pickupTime: orderData.pickupTime,
          customerName: orderData.name,
          customerPhone: orderData.phone,
          customerEmail: orderData.email,
          status: "confirmed",
        });
        updateOrderData({ orderNumber });
        clearCart();
        router.push(`/confirmation?orderId=${orderData.orderId}`);
      } else {
        // Fallback if no draft exists
        const docRef = await addDoc(collection(db, "orders"), {
          orderNumber,
          items: cart.map(it => ({ 
            name: it.name, 
            variant: it.v || it.desc || "", 
            quantity: it.quantity, 
            price: typeof it.price === 'number' ? it.price : parseFloat(it.price) 
          })),
          total: subtotal,
          pickupDate: orderData.pickupDate,
          pickupTime: orderData.pickupTime,
          customerName: orderData.name,
          customerPhone: orderData.phone,
          customerEmail: orderData.email,
          status: "confirmed",
          createdAt: new Date().toISOString(),
        });
        updateOrderData({ orderId: docRef.id, orderNumber });
        clearCart();
        router.push(`/confirmation?orderId=${docRef.id}`);
      }
    } catch (err) {
      console.error("Error confirming order:", err);
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
              <div className="font-calistoga text-[26px] text-[#2d1f19] leading-none">{dateDisplay} · {orderData.pickupTime}</div>
            </div>
            <div className="font-nunito text-[11.5px] text-[#5c3d35] mt-1.5 font-bold">Langgasse 68 · Wetzlar</div>
          </div>
        </FadeUp>

        {/* Items Header */}
        <FadeUp delay={0.2} className="flex justify-between items-baseline mb-2">
          <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase">{cart.reduce((s, i) => s + i.quantity, 0)} Artikel</div>
          <button onClick={() => router.push('/checkout')} className="font-nunito text-[11px] font-extrabold text-[#CC624C] underline">
            Bearbeiten
          </button>
        </FadeUp>

        {/* Items List */}
        <FadeUp delay={0.3} className="bg-white rounded-[18px] p-1 mb-3.5 shadow-sm">
          {cart.map((it, i, a) => (
            <div key={it.id} className={`p-3 flex justify-between gap-2.5 ${i < a.length - 1 ? 'border-b border-[#eedfcc]' : ''}`}>
              <div className="flex-1 min-w-0">
                <div className="flex gap-2 mb-0.5 items-baseline">
                  <span className="font-nunito font-extrabold text-[12.5px] text-[#7a5a52]">{it.quantity}×</span>
                  <span className="font-nunito font-extrabold text-[13px] text-[#2d1f19]">{it.name}</span>
                </div>
                <div className="font-nunito text-[11px] text-[#7a5a52] ml-[23px]">{it.v || it.desc || ''}</div>
              </div>
              <span className="font-calistoga text-[14px] text-[#CC624C]">{(it.quantity * (typeof it.price === 'number' ? it.price : parseFloat(it.price))).toFixed(2).replace('.', ',')} €</span>
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
            <span>Zwischensumme</span><span className="font-bold">{subtotal.toFixed(2).replace('.', ',')} €</span>
          </div>
          <div className="flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-2">
            <span>inkl. 7% MwSt.</span><span className="font-bold">{tax.toFixed(2).replace('.', ',')} €</span>
          </div>
          <div className="h-[1px] bg-[#E4C0A8] my-1.5" />
          <div className="flex justify-between items-baseline mt-2">
            <span className="font-nunito font-black text-[13px] text-[#2d1f19]">Vor Ort zahlen</span>
            <span className="font-calistoga text-[24px] text-[#CC624C]">{subtotal.toFixed(2).replace('.', ',')} €</span>
          </div>
        </FadeUp>
      </div>

      <div className="p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]">
        <div className="font-nunito text-[10.5px] text-[#7a5a52] text-center mb-2.5 leading-tight">
          Mit „Bestellung absenden" akzeptierst du unsere <span className="text-[#CC624C] font-extrabold">AGB & Vorbestellbedingungen</span>
        </div>
        <PrimaryButton 
          className="w-full flex justify-center items-center gap-2"
          onClick={handleSubmit}
          disabled={isSubmitting || cart.length === 0}
        >
          {isSubmitting ? (
            "Wird gesendet..."
          ) : (
            <>
              <Icons.Check size={18} />
              Verbindlich vorbestellen
            </>
          )}
        </PrimaryButton>
      </div>
    </div>
  );
}
