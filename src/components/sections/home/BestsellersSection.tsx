"use client";

import React from "react";
import { BESTSELLERS } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { HoloTiltCard } from "@/components/ui/HoloTiltCard";
import { PrimaryButton } from "@/components/ui/Btn";
import { TransitionLink } from "@/components/ui/TransitionLink";

export function BestsellersSection() {
  const bestsellers = BESTSELLERS.slice(0, 4);

  if (bestsellers.length === 0) return null;

  return (
    <section className="bg-beige py-20 relative">
      <FadeUp className="max-w-[1200px] mx-auto px-6 pt-7">
        <SectionTitle sub="Alles frisch und selbstgemacht - das schmeckt man.">
          Unsere Highlights
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bestsellers.map((item) => (
            <HoloTiltCard key={item.id} item={item as any} />
          ))}
        </div>
        <div className="text-center mt-10">
          <TransitionLink href="/menu">
            <PrimaryButton large sectionBg="#eedfcc">
              Alle Produkte ansehen
            </PrimaryButton>
          </TransitionLink>
        </div>
      </FadeUp>
    </section>
  );
}
