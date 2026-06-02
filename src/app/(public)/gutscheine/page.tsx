"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import { GiganticTypography } from "@/components/ui/GiganticTypography";

export default function GutscheinePage() {
  const [amount, setAmount] = useState<number | "Frei">(50);
  const [delivery, setDelivery] = useState<"mail" | "mail_physical">("mail");
  const [message, setMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  const amounts: (number | "Frei")[] = [10, 25, 50, 75, 100, "Frei"];

  const { scrollYProgress } = useScroll();
  const ticketY = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const ticketRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <div className="min-h-[300vh] bg-transparent text-charcoal font-nunito relative">
      {/* SECTION 1: Massive Intro */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20">
        <GiganticTypography
          as="h1"
          highlightWords={["Freude."]}
          highlightColor="#CC624C"
          className="text-center justify-center max-w-[1200px] mx-auto"
        >
          Verschenke Freude.
        </GiganticTypography>

        <p className="font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80">
          Scroll weiter, um deinen Liebsten einen süßen Moment zu kreieren.
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center opacity-50"
        >
          <Icons.ArrowDown size={40} className="text-terracotta" />
        </motion.div>
      </section>

      {/* SECTION 2: The Ticket & Form */}
      <section className="min-h-[150vh] px-6 relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20 max-w-[1400px] mx-auto py-20">
        {/* Left Side: Floating Ticket */}
        <motion.div
          style={{ y: ticketY, rotate: ticketRotate }}
          className="w-full max-w-[500px]"
        >
          <div className="relative bg-terracotta rounded-[40px] p-12 text-white overflow-hidden shadow-clay-lg">
            <div className="absolute -top-12 -right-10 w-[250px] h-[250px] bg-white/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -left-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2" />
            <div className="absolute top-1/2 -right-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2" />
            <div className="relative">
              <div className="text-sm font-black tracking-widest uppercase opacity-80 mb-6">
                Hey Fede! Gutschein
              </div>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="font-calistoga text-8xl md:text-[120px] leading-none">
                  {amount === "Frei" ? "??" : amount}
                </span>
                <span className="font-calistoga text-5xl opacity-90">€</span>
              </div>
              <div className="text-sm mt-8 opacity-90 font-bold uppercase tracking-wider">
                Einlösbar im Laden · 36 Monate gültig
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Configuration Form */}
        <div className="w-full max-w-[600px] space-y-10">
          <div className="bg-cream/80 backdrop-blur-xl p-8 rounded-[40px] shadow-clay border border-peach/50 space-y-8">
            {/* Amount */}
            <div>
              <div className="text-sm font-black text-terracotta tracking-widest uppercase mb-4">
                Wähle den Betrag
              </div>
              <div className="grid grid-cols-3 gap-3">
                {amounts.map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`rounded-2xl py-4 text-center font-calistoga text-2xl transition-all shadow-sm ${
                      amount === v
                        ? "bg-terracotta text-white scale-105 shadow-clay"
                        : "bg-white/50 text-charcoal hover:bg-white/80"
                    }`}
                  >
                    {typeof v === "number" ? `${v} €` : v}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery */}
            <div>
              <div className="text-sm font-black text-terracotta tracking-widest uppercase mb-4">
                Zustellung
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setDelivery("mail")}
                  className={`bg-white/50 rounded-2xl p-4 flex gap-4 items-center transition-all ${delivery === "mail" ? "ring-4 ring-terracotta bg-white" : "hover:bg-white/80"}`}
                >
                  <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0">
                    <Icons.Mail size={24} className="text-terracotta" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-calistoga text-xl text-charcoal">
                      Per E-Mail
                    </div>
                    <div className="text-sm font-bold text-brown/70 mt-1">
                      Sofort verfügbar · PDF
                    </div>
                  </div>
                  {delivery === "mail" && (
                    <Icons.CheckCircle size={28} className="text-terracotta" />
                  )}
                </button>

                <button
                  onClick={() => setDelivery("mail_physical")}
                  className={`bg-white/50 rounded-2xl p-4 flex gap-4 items-center transition-all ${delivery === "mail_physical" ? "ring-4 ring-terracotta bg-white" : "hover:bg-white/80"}`}
                >
                  <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0">
                    <Icons.Gift size={24} className="text-terracotta" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-calistoga text-xl text-charcoal">
                      Edler Umschlag
                    </div>
                    <div className="text-sm font-bold text-brown/70 mt-1">
                      + 3,90 € · per Post
                    </div>
                  </div>
                  {delivery === "mail_physical" && (
                    <Icons.CheckCircle size={28} className="text-terracotta" />
                  )}
                </button>
              </div>
            </div>

            {/* Config */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2">
                  Nachricht (optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Alles Liebe..."
                  className="w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta min-h-[100px] resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2">
                    An (Name)
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-terracotta text-white py-6 rounded-[20px] font-black text-xl uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay mt-8">
              In den Warenkorb <Icons.ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
