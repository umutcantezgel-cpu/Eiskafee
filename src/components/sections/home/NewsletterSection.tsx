import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { NewsletterInput } from "@/components/molecules/forms/NewsletterInput";

export function NewsletterSection() {
  return (
    <section className="bg-cream py-20 text-center">
      <FadeUp className="max-w-[600px] mx-auto px-6">
        <h2 className="font-heading text-[clamp(1.7rem,3.5vw,2.7rem)] text-brown mb-4 leading-[1.1]">
          Immer auf dem Laufenden
        </h2>
        <p className="font-body text-[0.97rem] text-brown-mid leading-[1.85] mb-7 max-w-[440px] mx-auto">
          Abonniere unseren Newsletter für exklusive Angebote und die neuesten
          Dessert-Kreationen.
        </p>
        <div className="flex justify-center">
          <NewsletterInput className="w-full max-w-[320px]" />
        </div>
      </FadeUp>
    </section>
  );
}
