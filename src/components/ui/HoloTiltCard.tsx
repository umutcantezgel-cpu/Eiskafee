"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Plus } from "lucide-react";
import * as Icons from "lucide-react";
import { useRouter } from "next/navigation";

export function HoloTiltCard({ item }: { item: any }) {
  const router = useRouter();

  const handleAction = () => {
    // If ticket, go to order-hub, else to menu
    if (item.ticket) {
      router.push("/order-hub");
    } else {
      router.push("/menu");
    }
  };

  const LIcon = (Icons as any)[item.icon] || Icons.Sparkles;

  return (
    <div
      onClick={handleAction}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleAction();
        }
      }}
      role="button"
      tabIndex={0}
      className="hf-hover-lift relative bg-[#F5EFE8] rounded-[22px] p-5 overflow-hidden flex flex-col h-full"
    >
      {item.tag && (
        <div className="absolute z-10 top-3 left-3 flex gap-2">
          <span
            className={`hf-tag ${item.tag === "Neu" ? "hf-tag--outline" : "hf-tag--terra"}`}
          >
            {item.tag}
          </span>
        </div>
      )}

      <div
        className="w-full aspect-[4/3] rounded-[16px] mb-4 flex items-center justify-center overflow-hidden relative shrink-0"
        style={{
          background:
            "linear-gradient(135deg, #E4C0A8 0%, #eedfcc 50%, #F5EFE8 100%)",
        }}
      >
        <div className="absolute top-3 left-3 w-16 h-16 rounded-full opacity-20 bg-[#CC624C]" />
        <div className="absolute bottom-2 right-4 w-10 h-10 rounded-full opacity-15 bg-[#CC624C]" />
        <LIcon
          size={64}
          strokeWidth={1.2}
          color="#CC624C"
          style={{ opacity: 0.85 }}
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="font-heading text-[1.1rem] text-brown leading-tight mb-1">
          {item.name}
        </h3>
        <p className="font-body text-sm text-brown-mid leading-relaxed mb-4">
          {item.desc}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="font-heading text-xl text-terracotta">
            {item.price}
          </span>
          <div
            aria-hidden="true"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 bg-terracotta"
            style={{ boxShadow: "0 2px 8px rgba(204,98,76,0.25)" }}
          >
            <Plus size={18} color="#fefefe" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
