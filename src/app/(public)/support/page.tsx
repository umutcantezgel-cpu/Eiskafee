"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Send, MessageCircle, ArrowDown } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToastStore } from "@/store/useToastStore";
import { GiganticTypography } from "@/components/ui/GiganticTypography";

const FAQS = [
  {
    question: "Liefert ihr?",
    answer:
      "Ja, in ausgewählte PLZs (z.B. 35576, 35578). Check es im Checkout!",
  },
  {
    question: "Was ist in der Box?",
    answer: "2 Waffeln, 4 Soßen, Erdbeeren & sehr viel Liebe.",
  },
  {
    question: "Vegan?",
    answer: "Einige Toppings/Soßen sind vegan. Am Teig tüfteln wir noch!",
  },
  {
    question: "Reservieren?",
    answer: "Einfach via WhatsApp oder über die Reservierungs-Seite.",
  },
];

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToastStore();

  const { scrollYProgress } = useScroll();
  const formY = useTransform(scrollYProgress, [0, 1], [300, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "support_messages"), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: "new",
      });
      addToast({
        title: "Nachricht gesendet!",
        message: "Wir melden uns bald bei dir.",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      addToast({
        title: "Fehler",
        message: "Nachricht konnte nicht gesendet werden.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[400vh] bg-transparent text-[#2d1f19] font-nunito relative">
      {/* SECTION 1: Massive Intro */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20">
        <GiganticTypography
          as="h1"
          highlightWords={["helfen?"]}
          highlightColor="#CC624C"
          className="text-center justify-center max-w-[1200px] mx-auto"
        >
          Wie können wir helfen?
        </GiganticTypography>

        <p className="font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80">
          Scroll weiter, um Antworten zu finden oder schreib uns.
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center opacity-50"
        >
          <ArrowDown size={40} className="text-terracotta" />
        </motion.div>
      </section>

      {/* SECTION 2: Floating FAQs (The Bubbles) */}
      <section
        id="faq"
        className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center"
      >
        <GiganticTypography
          delay={0.2}
          className="!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center"
        >
          Fragen blubbern auf.
        </GiganticTypography>

        <div className="relative w-full max-w-[1000px] h-[60vh] flex flex-wrap justify-center items-center gap-6">
          {FAQS.map((faq, idx) => {
            const isActive = activeFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", delay: idx * 0.1 }}
                onClick={() => setActiveFaq(isActive ? null : idx)}
                className={`cursor-pointer rounded-full p-8 flex items-center justify-center text-center transition-all duration-500 shadow-clay ${isActive ? "bg-terracotta text-white scale-110 z-20 aspect-auto rounded-3xl w-full max-w-[400px]" : "bg-cream/80 backdrop-blur-md text-charcoal hover:scale-105 aspect-square w-[200px] md:w-[250px]"}`}
              >
                <AnimatePresence mode="wait">
                  {!isActive ? (
                    <motion.div
                      key="q"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-calistoga text-xl md:text-2xl"
                    >
                      {faq.question}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="a"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="font-nunito text-lg font-bold"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Contact Form */}
      <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
        <GiganticTypography className="!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center z-10">
          Nichts gefunden?
        </GiganticTypography>

        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: formY }} className="z-10">
            <form
              onSubmit={handleSubmit}
              className="bg-cream/90 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-clay border border-peach/50 flex flex-col gap-6"
            >
              <h2 className="font-calistoga text-3xl text-charcoal mb-4">
                Schreib uns
              </h2>

              <div>
                <label className="block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2">
                  Dein Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2">
                  Deine E-Mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner"
                  placeholder="mail@beispiel.de"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2">
                  Nachricht
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner min-h-[150px] resize-none"
                  placeholder="Was liegt dir auf dem Herzen?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full bg-terracotta text-white py-5 rounded-[20px] font-black text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    Senden <Send size={24} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col gap-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#3a9d52]/10 border border-[#3a9d52]/20 rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-md"
            >
              <div className="w-20 h-20 bg-[#3a9d52] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#3a9d52]/30 mb-6">
                <MessageCircle size={40} />
              </div>
              <h3 className="font-calistoga text-3xl text-[#3a9d52] mb-4">
                Direkt Texten?
              </h3>
              <p className="text-[#3a9d52]/80 text-lg font-bold mb-8">
                Schreib uns einfach auf WhatsApp. Wir antworten superschnell.
              </p>

              <a
                href="https://wa.me/49123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3a9d52] text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-[#3a9d52]/30"
              >
                WhatsApp Chat Starten
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
