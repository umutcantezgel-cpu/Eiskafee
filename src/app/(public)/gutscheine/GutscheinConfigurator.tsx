"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";

export function GutscheinConfigurator() {
  const [amount, setAmount] = useState<number | "Frei">(50);
  const [delivery, setDelivery] = useState<"mail" | "mail_physical">("mail");
  const [message, setMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  const amounts: (number | "Frei")[] = [10, 25, 50, 75, 100, "Frei"];

  const { scrollYProgress } = useScroll();
  const ticketY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const ticketRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <div className="w-full max-w-[1400px] mx-auto py-12 flex flex-col lg:flex-row justify-center items-center gap-16">
      {/* Left Side: Floating Ticket */}
      <motion.div
        style={{ y: ticketY, rotate: ticketRotate }}
        className="w-full max-w-[500px]"
      >
        <div className="relative bg-terracotta rounded-[40px] p-10 md:p-12 text-white overflow-hidden shadow-clay-lg">
          <div className="absolute -top-12 -right-10 w-[250px] h-[250px] bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 -left-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2" />
          <div className="absolute top-1/2 -right-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2" />
          <div className="relative z-10">
            <div className="text-xs md:text-sm font-black tracking-widest uppercase opacity-80 mb-6">
              Hey Fede! Gutschein Wetzlar
            </div>
            <div className="flex items-baseline gap-4 mt-2">
              <span className="font-heading text-7xl md:text-[110px] leading-none">
                {amount === "Frei" ? "??" : amount}
              </span>
              <span className="font-heading text-4xl md:text-5xl opacity-90">
                €
              </span>
            </div>
            <div className="text-xs md:text-sm mt-8 opacity-90 font-bold uppercase tracking-wider">
              Einlösbar im Eiscafé Wetzlar & Online · 36 Monate gültig
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Configuration Form */}
      <div className="w-full max-w-[600px] space-y-8">
        <div className="bg-cream/80 backdrop-blur-xl p-6 md:p-8 rounded-[40px] shadow-clay border border-peach/50 space-y-8">
          {/* Amount */}
          <div>
            <label className="block text-xs font-black text-terracotta tracking-widest uppercase mb-4">
              Wähle den Gutscheinbetrag
            </label>
            <div className="grid grid-cols-3 gap-3">
              {amounts.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setAmount(v)}
                  className={`rounded-2xl py-4 text-center font-heading text-xl md:text-2xl transition-all shadow-sm ${
                    amount === v
                      ? "bg-terracotta text-white scale-105 shadow-clay"
                      : "bg-white/60 text-charcoal hover:bg-white/90"
                  }`}
                >
                  {typeof v === "number" ? `${v} €` : v}
                </button>
              ))}
            </div>
          </div>

          {/* Delivery */}
          <div>
            <label className="block text-xs font-black text-terracotta tracking-widest uppercase mb-4">
              Zustellungsart
            </label>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setDelivery("mail")}
                className={`bg-white/60 rounded-2xl p-4 flex gap-4 items-center transition-all ${
                  delivery === "mail"
                    ? "ring-4 ring-terracotta bg-white"
                    : "hover:bg-white/90"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0">
                  <Icons.Mail size={24} className="text-terracotta" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-heading text-lg md:text-xl text-charcoal">
                    Per E-Mail (PDF)
                  </div>
                  <div className="text-xs md:text-sm font-bold text-brown/70 mt-0.5">
                    Sofort verfügbar · Zum Ausdrucken
                  </div>
                </div>
                {delivery === "mail" && (
                  <Icons.CheckCircle
                    size={26}
                    className="text-terracotta shrink-0"
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setDelivery("mail_physical")}
                className={`bg-white/60 rounded-2xl p-4 flex gap-4 items-center transition-all ${
                  delivery === "mail_physical"
                    ? "ring-4 ring-terracotta bg-white"
                    : "hover:bg-white/90"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0">
                  <Icons.Gift size={24} className="text-terracotta" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-heading text-lg md:text-xl text-charcoal">
                    Edler Geschenk-Umschlag
                  </div>
                  <div className="text-xs md:text-sm font-bold text-brown/70 mt-0.5">
                    + 3,90 € · Per Post nach Hause
                  </div>
                </div>
                {delivery === "mail_physical" && (
                  <Icons.CheckCircle
                    size={26}
                    className="text-terracotta shrink-0"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Config */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="gift-message"
                className="block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2"
              >
                Persönliche Grußnachricht (optional)
              </label>
              <textarea
                id="gift-message"
                name="gift-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Alles Liebe zum Geburtstag! Lass dir das Eis schmecken..."
                className="w-full bg-white/70 border-none px-5 py-3.5 rounded-[20px] font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta min-h-[90px] resize-none text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="gift-recipient-name"
                  className="block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2"
                >
                  Name des Empfängers
                </label>
                <input
                  id="gift-recipient-name"
                  name="gift-recipient-name"
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="z.B. Laura Schmidt"
                  className="w-full bg-white/70 border-none px-5 py-3 rounded-[20px] font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="gift-recipient-email"
                  className="block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2"
                >
                  E-Mail Adresse
                </label>
                <input
                  id="gift-recipient-email"
                  name="gift-recipient-email"
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="empfaenger@beispiel.de"
                  className="w-full bg-white/70 border-none px-5 py-3 rounded-[20px] font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta text-sm"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-terracotta text-white py-5 rounded-[20px] font-black text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay mt-6"
          >
            Gutschein in den Warenkorb <Icons.ArrowRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
