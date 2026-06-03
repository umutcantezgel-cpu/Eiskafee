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
    <div className="min-h-screen bg-[#f5efe8]">
      <div className="bg-[#E4C0A8] pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] dot-bg" />
        <div className="relative z-10">
          <div className="w-20 h-20 bg-[#eedfcc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Icons.Mail size={36} color="#b34832" strokeWidth={1.8} />
          </div>
          <h1 className="font-calistoga text-[1.8rem] text-[#2d1f19] mb-3">
            Kein Problem!
          </h1>
          <p className="font-nunito text-[#5c3d35] max-w-[280px] mx-auto text-sm leading-relaxed">
            Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum
            Zurücksetzen.
          </p>
        </div>
      </div>

      <div className="max-w-[400px] mx-auto px-6 py-10">
        <FadeUp>
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-transparent focus-within:border-[#b34832] transition-colors">
                <Icons.Mail size={20} className="text-[#9a7060]" />
                <div className="flex-1">
                  <label className="block font-nunito text-[10px] font-bold text-[#9a7060] uppercase tracking-wider mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anna.mueller@example.de"
                    className="w-full bg-transparent border-none outline-none font-nunito font-bold text-[#2d1f19] text-[13px]"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 font-nunito text-sm font-bold text-center">
                  {error}
                </div>
              )}

              <PrimaryButton
                sectionBg="#f5efe8"
                large
                className="w-full"
                disabled={isSubmitting}
              >
                <Icons.Send size={18} />{" "}
                {isSubmitting ? "Wird gesendet..." : "Link senden"}
              </PrimaryButton>

              <div className="bg-[#eedfcc] rounded-xl p-4 flex gap-3 items-start">
                <Icons.Info
                  size={16}
                  className="text-[#b34832] mt-0.5 shrink-0"
                />
                <p className="font-nunito text-[11.5px] text-[#5c3d35] leading-[1.55]">
                  Falls du innerhalb von 5 Minuten keine E-Mail erhältst, prüfe
                  bitte deinen Spam-Ordner.
                </p>
              </div>
            </form>
          ) : (
            <div className="p-6 border-2 border-dashed border-[#E4C0A8] rounded-2xl bg-[rgba(228,192,168,0.15)] text-center">
              <div className="w-14 h-14 bg-[#b34832] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Check size={28} color="#fff" strokeWidth={2.5} />
              </div>
              <h2 className="font-calistoga text-lg text-[#2d1f19] mb-1">
                E-Mail unterwegs!
              </h2>
              <p className="font-nunito text-[#9a7060] text-sm leading-relaxed">
                Wir haben dir einen Reset-Link an {email} gesendet.
              </p>
            </div>
          )}

          <div className="text-center mt-10">
            <span className="font-nunito text-xs text-[#5c3d35]">
              Wieder eingefallen?{" "}
            </span>
            <TransitionLink
              href="/auth"
              className="font-nunito text-xs font-black text-[#b34832] underline hover:no-underline"
            >
              Zurück zur Anmeldung
            </TransitionLink>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
