"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Send,
  MessageCircle,
  ArrowDown,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToastStore } from "@/store/useToastStore";
import { GiganticTypography } from "@/components/ui/GiganticTypography";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildFaqSchema } from "@/lib/seo/schema/pages";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";

const FAQS = [
  {
    question: "Liefert Hey Fede! Desserts & Waffeln in Wetzlar?",
    answer:
      "Ja! Wir liefern unsere frischen Bubble Waffles, Crêpes, Eisbecher und Shakes in ausgewählte Postleitzahlengebiete in Wetzlar (z.B. 35576, 35578) und Umgebung. Gib einfach deine Adresse im Online-Checkout ein, um die Verfügbarkeit zu prüfen.",
  },
  {
    question: "Was genau beinhaltet die Hey Fede! Waffel-Box?",
    answer:
      "Unsere beliebte Waffel-Box enthält zwei frisch gebackene, knusprige Bubble Waffles, vier leckere Soßen nach Wahl, frische Erdbeeren sowie knusprige Toppings – perfekt zusammengestellt für gemeinsamen Genuss zu Hause.",
  },
  {
    question: "Gibt es vegane & laktosefreie Optionen im Angebot?",
    answer:
      "Selbstverständlich! Wir bieten eine vielfältige Auswahl an veganen und laktosefreien Toppings, Fruchtsoßen, Erfrischungssorbets sowie Hafermilch für alle Kaffeespezialitäten an. Unser Service-Team berät dich gerne vor Ort.",
  },
  {
    question: "Wie kann ich einen Tisch im Eiscafé Wetzlar reservieren?",
    answer:
      "Du kannst deinen Lieblingsplatz im Café bequem online über unsere Reservierungsseite reservieren oder uns eine kurze Nachricht via WhatsApp schicken. Wir bestätigen deine Anfrage innerhalb kürzester Zeit.",
  },
  {
    question: "Welche Zahlungsmethoden werden im Café akzeptiert?",
    answer:
      "Bei Hey Fede! in Wetzlar akzeptieren wir sowohl kontaktlose Zahlungen per EC-Karte, Kreditkarte, Apple Pay und Google Pay als auch klassischen Barzahlung. Auch bei Online-Vorbestellungen zahlst du sicher und flexibel.",
  },
  {
    question: "Bietet ihr Catering für Feiern & Events an?",
    answer:
      "Ja! Wir bringen frische Bubble Waffles, Crêpes und Eis-Catering zu Kindergeburtstagen, Firmenfeiern, Hochzeiten und privaten Feiern im gesamten Lahn-Dill-Kreis. Kontaktiere uns für ein maßgeschneidertes Angebot.",
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
      // 1. Save to Firestore (instant, for admin dashboard)
      await addDoc(collection(db, "support_messages"), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: "new",
      });

      // 2. Send email notification (non-blocking)
      fetch("/api/email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => console.warn("Email send failed (non-critical):", err));

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
    <div className="min-h-[400vh] bg-transparent text-brown font-body relative">
      {/* SECTION 1: Massive Intro */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20">
        <GiganticTypography
          as="h1"
          highlightWords={["Support"]}
          highlightColor="#CC624C"
          className="text-center justify-center max-w-[1200px] mx-auto"
        >
          Hilfe & Support bei Hey Fede!
        </GiganticTypography>

        <p className="font-body text-xl md:text-2xl mt-12 text-center max-w-[750px] font-bold text-brown/80 leading-relaxed">
          Willkommen beim Kundenservice von Hey Fede! Dessertbar & Café in
          Wetzlar. Ob Fragen zu Lieferservice, allergenfreien Zutaten,
          Tischreservierungen oder Event-Catering – wir helfen dir persönlich
          weiter. Finde sofort Antworten im FAQ oder kontaktiere unser Team
          direkt.
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
          as="h2"
          className="!text-[clamp(2.5rem,5vw,4rem)] mb-6 text-center"
        >
          Häufig gestellte Fragen (FAQ)
        </GiganticTypography>
        <p className="text-center font-bold text-brown/70 max-w-[650px] mx-auto mb-16 text-lg">
          Klicke auf ein Thema, um Antworten zu Lieferservice, Zutaten,
          Tischreservierungen und Zahlungsmöglichkeiten bei Hey Fede! in Wetzlar
          zu erhalten.
        </p>

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
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => setActiveFaq(isActive ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveFaq(isActive ? null : idx);
                  }
                }}
                className={`cursor-pointer rounded-full p-8 flex items-center justify-center text-center transition-all duration-500 shadow-clay ${isActive ? "bg-terracotta text-white scale-110 z-20 aspect-auto rounded-3xl w-full max-w-[400px]" : "bg-cream/80 backdrop-blur-md text-charcoal hover:scale-105 aspect-square w-[200px] md:w-[250px]"}`}
              >
                <AnimatePresence mode="wait">
                  {!isActive ? (
                    <motion.div
                      key="q"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-heading text-xl md:text-2xl"
                    >
                      {faq.question}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="a"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="font-body text-lg font-bold"
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
      <section
        id="kontakt"
        className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden"
      >
        <GiganticTypography
          as="h2"
          className="!text-[clamp(2.5rem,5vw,4rem)] mb-6 text-center z-10"
        >
          Noch Fragen? Kontaktier uns!
        </GiganticTypography>
        <p className="text-center font-bold text-brown/70 max-w-[650px] mx-auto mb-16 text-lg z-10">
          Du hast deine Antwort in den FAQs nicht gefunden? Sende uns eine
          Nachricht über das Formular oder melde dich direkt per WhatsApp bei
          uns.
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: formY }} className="z-10">
            <form
              onSubmit={handleSubmit}
              className="bg-cream/90 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-clay border border-peach/50 flex flex-col gap-6"
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Schreib uns eine Nachricht
              </h3>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2"
                >
                  Dein Name
                </label>
                <input
                  id="contact-name"
                  name="contact-name"
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
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2"
                >
                  Deine E-Mail
                </label>
                <input
                  id="contact-email"
                  name="contact-email"
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
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="contact-message"
                  name="contact-message"
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
              className="bg-success/10 border border-success/20 rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-md"
            >
              <div className="w-20 h-20 bg-success text-white rounded-full flex items-center justify-center shadow-lg shadow-success/30 mb-6">
                <MessageCircle size={40} />
              </div>
              <h3 className="font-heading text-3xl text-success mb-4">
                Schnell per WhatsApp chatten
              </h3>
              <p className="text-success/80 text-lg font-bold mb-8 max-w-[400px]">
                Möchtest du eine besonders schnelle Antwort zu deiner Bestellung
                oder Reservierung? Schreib unserem Team in Wetzlar direkt auf
                WhatsApp – wir sind für dich da!
              </p>

              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-success text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-success/30"
              >
                WhatsApp Chat Starten
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Direct Contact & Business Info */}
      <section className="py-20 px-6 relative z-10 max-w-[1200px] mx-auto">
        <div className="bg-cream/80 backdrop-blur-md border border-terracotta/20 rounded-[40px] p-8 md:p-12 shadow-clay">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-8 text-center">
            Persönlicher Kundenservice in Wetzlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <h3 className="font-heading text-xl text-charcoal">Standort</h3>
              <p className="text-brown/80 font-bold text-sm leading-relaxed">
                {FULL_ADDRESS}
                <br />
                Altstadt Wetzlar
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
                <Phone size={28} />
              </div>
              <h3 className="font-heading text-xl text-charcoal">
                Telefon & E-Mail
              </h3>
              <p className="text-brown/80 font-bold text-sm leading-relaxed">
                Tel: {BUSINESS.phone}
                <br />
                E-Mail: {BUSINESS.email}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
                <Clock size={28} />
              </div>
              <h3 className="font-heading text-xl text-charcoal">
                Öffnungszeiten
              </h3>
              <p className="text-brown/80 font-bold text-sm leading-relaxed">
                Mo–Fr: 12:00 – 20:00 Uhr
                <br />
                Sa–So: 10:00 – 20:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </section>

      <SchemaScripts
        schema={[
          buildFaqSchema(
            FAQS.map((faq) => ({ q: faq.question, a: faq.answer })),
          ),
        ]}
      />
    </div>
  );
}
