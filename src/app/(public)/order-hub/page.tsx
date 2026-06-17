"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Icons from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useStoreSettings } from "@/hooks/useStoreSettings";
import { useStore, OrderType } from "@/store/useStore";

export default function OrderHubPage() {
  const router = useRouter();
  const { setOrderType } = useStore();
  const { settings, loading } = useStoreSettings();
  const [selected, setSelected] = useState<OrderType>(null);

  const isOnline = settings?.isOnline ?? true;
  const isDeliveryActive = settings?.isDeliveryActive ?? true;

  const handleNext = () => {
    if (!selected) return;
    setOrderType(selected);
    router.push("/menu"); // They still need to pick items first
  };

  return (
    <div className="min-h-screen bg-cream pb-32">
      {/* Top Bar Area */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3.5">
        <div className="w-32 h-10 relative">
          <Image
            src="/assets/logos/Logo Wortmarke beige.svg"
            alt="Hey Fede! Logo"
            fill
            className="object-contain object-left"
          />
        </div>
        <button
          onClick={() => router.push("/")}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
        >
          <Icons.X size={20} color="#2d1f19" />
        </button>
      </div>

      <div className="px-5">
        <h1 className="font-heading text-2xl text-brown mb-6">
          Wie möchtest du bestellen?
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <Icons.Loader2 size={32} className="animate-spin text-terracotta" />
          </div>
        ) : (
          <div className="space-y-3">
            {!isOnline && (
              <FadeUp className="bg-[rgba(204,98,76,0.1)] border-2 border-terracotta rounded-[18px] p-4 flex gap-3 items-start mb-6">
                <Icons.AlertCircle
                  size={20}
                  className="text-terracotta shrink-0 mt-0.5"
                />
                <div>
                  <div className="font-heading text-[15px] text-brown mb-1">
                    Online-Bestellungen pausiert
                  </div>
                  <div className="font-body text-[12.5px] text-brown-mid leading-relaxed">
                    Wir bereiten aktuell sehr viele Bestellungen im Laden zu und
                    können momentan keine Online-Orders annehmen.
                  </div>
                </div>
              </FadeUp>
            )}

            {[
              {
                id: "pickup",
                title: "Abholung",
                desc: "Ofenfrisch im Laden abholen",
                icon: Icons.Store,
                disabled: !isOnline,
                hidden: false,
              },
              {
                id: "delivery",
                title: "Lieferung",
                desc: "Bequem nach Hause liefern lassen",
                icon: Icons.Truck,
                disabled: !isOnline,
                hidden: !isDeliveryActive,
              },
              {
                id: "in-store",
                title: "Im Laden essen",
                desc: "Reserviere einen Tisch vor Ort",
                icon: Icons.Utensils,
                disabled: false,
                hidden: false,
              },
            ]
              .filter((c) => !c.hidden)
              .map((choice, i) => {
                const disabled = choice.disabled;
                const isSelected = selected === choice.id;

                return (
                  <FadeUp key={choice.id} delay={0.1 + i * 0.1}>
                    <button
                      disabled={disabled}
                      onClick={() => setSelected(choice.id as OrderType)}
                      className={`w-full text-left rounded-[20px] p-[16px_18px] flex items-center gap-4 transition-all border-2 ${
                        disabled
                          ? "opacity-40 bg-white border-transparent cursor-not-allowed"
                          : isSelected
                            ? "bg-terracotta text-white border-terracotta shadow-[0_8px_20px_rgba(204,98,76,0.25)]"
                            : "bg-white text-brown border-transparent shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 ${isSelected ? "bg-[rgba(255,255,255,0.2)]" : "bg-cream"}`}
                      >
                        <choice.icon
                          size={22}
                          className={
                            isSelected ? "text-white" : "text-terracotta"
                          }
                          strokeWidth={1.8}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-heading text-[17px] mb-0.5">
                          {choice.title}
                        </div>
                        <div
                          className={`font-body text-[12px] font-bold ${isSelected ? "text-[rgba(255,255,255,0.8)]" : "text-brown-muted"}`}
                        >
                          {choice.desc}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <Icons.Check
                            size={14}
                            className="text-terracotta"
                            strokeWidth={3}
                          />
                        </div>
                      )}
                    </button>
                  </FadeUp>
                );
              })}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-[16px_20px_32px] bg-gradient-to-t from-[#F5EFE8] via-[#F5EFE8] to-transparent z-40">
        <PrimaryButton
          className="w-full"
          disabled={!selected || isOnline === false}
          onClick={handleNext}
        >
          Auswahl bestätigen
        </PrimaryButton>
      </div>
    </div>
  );
}
