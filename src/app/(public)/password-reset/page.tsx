"use client";

import React, { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError(
        "Ein Fehler ist aufgetreten. Bitte überprüfe deine E-Mail-Adresse.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-peach pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 hf-dot-bg pointer-events-none" />
        <div className="relative z-10">
          <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Icons.Mail size={36} color="#CC624C" strokeWidth={1.8} />
          </div>
          <h1 className="font-heading text-[1.8rem] text-brown mb-3">
            Kein Problem!
          </h1>
          <p className="font-body text-brown-mid max-w-[280px] mx-auto text-sm leading-relaxed">
            Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum
            Zurücksetzen.
          </p>
        </div>
      </div>

      <div className="max-w-[400px] mx-auto px-6 py-10">
        <FadeUp>
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-transparent focus-within:border-terracotta transition-colors">
                <Icons.Mail size={20} className="text-bark-soft" />
                <div className="flex-1">
                  <label className="block font-body text-[10px] font-bold text-bark-soft uppercase tracking-wider mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anna.mueller@example.de"
                    className="w-full bg-transparent border-none outline-none font-body font-bold text-brown text-[13px]"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 font-body text-sm font-bold text-center">
                  {error}
                </div>
              )}

              <PrimaryButton
                sectionBg="#F5EFE8"
                large
                className="w-full"
                disabled={isSubmitting}
              >
                <Icons.Send size={18} />{" "}
                {isSubmitting ? "Wird gesendet..." : "Link senden"}
              </PrimaryButton>

              <div className="bg-beige rounded-xl p-4 flex gap-3 items-start">
                <Icons.Info
                  size={16}
                  className="text-terracotta mt-0.5 shrink-0"
                />
                <p className="font-body text-[11.5px] text-brown-mid leading-[1.55]">
                  Falls du innerhalb von 5 Minuten keine E-Mail erhältst, prüfe
                  bitte deinen Spam-Ordner.
                </p>
              </div>
            </form>
          ) : (
            <div className="p-6 border-2 border-dashed border-peach rounded-2xl bg-[rgba(228,192,168,0.15)] text-center">
              <div className="w-14 h-14 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Check size={28} color="#fff" strokeWidth={2.5} />
              </div>
              <h2 className="font-heading text-lg text-brown mb-1">
                E-Mail unterwegs!
              </h2>
              <p className="font-body text-bark-soft text-sm leading-relaxed">
                Wir haben dir einen Reset-Link an {email} gesendet.
              </p>
            </div>
          )}

          <div className="text-center mt-10">
            <span className="font-body text-xs text-brown-mid">
              Wieder eingefallen?{" "}
            </span>
            <TransitionLink
              href="/auth"
              className="font-body text-xs font-black text-terracotta underline hover:no-underline"
            >
              Zurück zur Anmeldung
            </TransitionLink>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
