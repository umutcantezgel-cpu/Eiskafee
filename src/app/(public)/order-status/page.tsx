"use client";

import React, { useEffect, useState, Suspense } from "react";
import * as Icons from "lucide-react";
import { TransitionLink } from '@/components/ui/TransitionLink';
import { FadeUp } from "@/components/ui/FadeUp";
import { useRouter, useSearchParams } from "next/navigation";
import { BUSINESS } from "@/lib/seo/business-data";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAchievements } from "@/store/useAchievements";

type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "completed" | "cancelled";

function OrderStatusContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [hasTriggeredReady, setHasTriggeredReady] = useState(false);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }
    
    const unsubscribe = onSnapshot(doc(db, "orders", orderId), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setOrder(data);
        
        // Trigger early-bird achievement
        if (data?.createdAt) {
          const date = typeof data.createdAt.toDate === 'function' ? data.createdAt.toDate() : new Date(data.createdAt);
          if (date.getHours() < 10) {
            useAchievements.getState().unlock('early-bird');
          }
        }
        
        if (data?.status === "ready") {
          setHasTriggeredReady((prev) => {
            if (!prev) {
              // Trigger confetti dynamically and audio
              import('canvas-confetti').then(({ default: confetti }) => {
                confetti({
                  particleCount: 150,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#CC624C', '#E4C0A8', '#eedfcc']
                });
              });
              try {
                const audio = new Audio('/ready.mp3');
                audio.play().catch(e => console.log('Audio blocked by browser:', e));
              } catch (e) {
                console.log('Audio error:', e);
              }
              return true;
            }
            return prev;
          });
        }
      }
      setLoading(false);
    }, (error) => {
      console.error("Error listening to order:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center">
        <Icons.Loader2 className="animate-spin text-[#CC624C]" size={32} />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center px-5">
        <h1 className="font-calistoga text-2xl text-[#2d1f19] mb-4">Bestellung nicht gefunden</h1>
        <button onClick={() => router.push('/')} className="font-nunito font-bold underline text-[#CC624C]">
          Zurück zur Startseite
        </button>
      </div>
    );
  }

  const status: OrderStatus = order.status || "confirmed";

  const getStatusText = () => {
    if (status === "confirmed") return "Deine Bestellung wurde bestätigt";
    if (status === "preparing") return "Deine Bestellung wird zubereitet";
    if (status === "ready") return "Deine Bestellung ist abholbereit!";
    if (status === "completed") return "Bestellung abgeschlossen";
    if (status === "cancelled") return "Bestellung storniert";
    return "Wird verarbeitet";
  };

  const steps = [
    { 
      t: 'Bestätigt', 
      ic: Icons.Check, 
      done: ["confirmed", "preparing", "ready", "completed"].includes(status),
      active: status === "confirmed" 
    },
    { 
      t: 'In Zubereitung', 
      ic: Icons.ChefHat, 
      done: ["preparing", "ready", "completed"].includes(status), 
      active: status === "preparing" 
    },
    { 
      t: 'Abholbereit', 
      ic: Icons.ShoppingBag, 
      done: ["ready", "completed"].includes(status), 
      active: status === "ready" 
    },
  ];

  const dateDisplay = order.pickupDate === new Date().toISOString().split('T')[0] ? "Heute" : new Date(order.pickupDate).toLocaleDateString("de-DE", { weekday: 'short', day: '2-digit', month: '2-digit' });

  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      {/* Header */}
      <div className="bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Icons.ArrowLeft size={20} color="#2d1f19" />
        </button>
        <div className="text-center">
          <div className="font-calistoga text-lg text-[#2d1f19] leading-tight">Bestellung {order.orderNumber}</div>
          <div className="font-nunito text-[11px] font-bold text-[#7a5a52]">Geschätzt {order.pickupTime}</div>
        </div>
        <div className="w-10 h-10" />
      </div>

      <div className="px-5 flex-1 overflow-y-auto pb-6 pt-2">
        {/* Big status pill */}
        <FadeUp delay={0.1} className="bg-[#CC624C] rounded-[22px] p-[20px_22px] text-white mb-4 relative overflow-hidden shadow-md">
          <div className="absolute -top-5 -right-2.5 w-[110px] h-[110px] bg-[rgba(255,248,241,0.16)] rounded-full" />
          <div className="relative z-10">
            <div className="font-nunito text-[10px] font-black tracking-[1.4px] uppercase opacity-85">Aktueller Status</div>
            <div className="font-calistoga text-[24px] leading-[1.15] mt-1">{getStatusText()}</div>
            <div className="font-nunito text-[12px] mt-2 opacity-90 font-bold">{status === 'ready' ? 'Abholung jetzt möglich' : `Geplant für ${dateDisplay} · ${order.pickupTime}`}</div>
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
            <div className="font-calistoga text-[14px] text-[#2d1f19]">{BUSINESS.street} · {BUSINESS.city}</div>
            <div className="font-nunito text-[11.5px] text-[#7a5a52] mt-[1px]">Tipp: Bestellnummer {order.orderNumber} nennen</div>
            <div className="flex gap-2 mt-2.5">
              <div className="px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]">Route →</div>
              <div className="px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]">Anrufen</div>
            </div>
          </div>
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
          <TransitionLink key={item.label} href={item.to} className={`flex flex-col items-center gap-1 ${item.label === 'Order' ? 'text-[#CC624C] opacity-100' : 'text-[#5c3d35] opacity-50'}`}>
            <item.icon size={22} strokeWidth={item.label === 'Order' ? 2.5 : 2} />
            <span className={`text-[10px] font-nunito font-bold`}>{item.label}</span>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}

export default function OrderStatusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5efe8] flex items-center justify-center"><Icons.Loader2 className="animate-spin text-[#CC624C]" size={32} /></div>}>
      <OrderStatusContent />
    </Suspense>
  );
}
