"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

/* lucide-react doesn't export Instagram — inline SVG */
function InstagramIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";

/* ─── Subject options ─── */
const SUBJECTS = [
  { value: "allgemein", label: "Allgemeine Anfrage" },
  { value: "catering", label: "Catering & Events" },
  { value: "reservierung", label: "Reservierung" },
  { value: "feedback", label: "Feedback & Lob" },
  { value: "kooperation", label: "Kooperation & Presse" },
  { value: "beschwerde", label: "Beschwerde" },
];

/* ─── Animations ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "allgemein",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, "support_messages"), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: "new",
        source: "kontakt-page",
      });

      // 2. Send email via API
      const res = await fetch("/api/email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Senden fehlgeschlagen");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "allgemein",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Nachricht konnte nicht gesendet werden.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* ═══ Hero ═══ */}
      <section className="bg-beige pt-[110px] px-6 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hf-dot-bg pointer-events-none" />
        <div
          className="absolute top-[18%] right-[6%] w-[200px] h-[200px] bg-peach opacity-40 animate-blob-float"
          style={{ borderRadius: "56% 44% 48% 52%/52% 60% 40% 48%" }}
        />
        <div
          className="absolute bottom-[12%] left-[4%] w-[140px] h-[140px] bg-terracotta opacity-8"
          style={{ borderRadius: "42% 58% 55% 45%" }}
        />

        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          <motion.h1
            {...fadeUp}
            className="font-heading text-[clamp(2.4rem,6vw,4.2rem)] text-brown mb-4 leading-[1.05]"
          >
            Kontakt – Hey Fede Dessertbar & Café Wetzlar
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-body text-[1.06rem] text-brown-mid max-w-[580px] mx-auto"
          >
            Hast du Fragen zu unseren handgemachten Eissortimenten, veganen
            Waffeln, Crêpes oder Catering für deine Feier in Wetzlar? Schreib
            uns direkt über das Kontaktformular, per WhatsApp oder E-Mail. Unser
            Team steht dir gerne persönlich zur Seite.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 44"
            className="block w-full h-[44px]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,22 C480,48 960,0 1440,26 L1440,44 L0,44 Z"
              fill="#F5EFE8"
            />
          </svg>
        </div>
      </section>

      {/* ═══ Main Content: Form + Info ═══ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* ── Contact Form (3/5) ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-[0_8px_40px_rgba(45,31,25,0.06)] border border-peach/30">
                <h2 className="font-heading text-[1.6rem] text-brown mb-2">
                  Kontaktformular
                </h2>
                <p className="font-body text-[0.88rem] text-brown-mid mb-8">
                  Egal ob allgemeine Anfragen, Tischreservierungen,
                  Catering-Planung oder Feedback – schick uns deine Nachricht
                  und unser Service-Team meldet sich innerhalb von 24 Stunden
                  persönlich bei dir zurück.
                </p>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center text-center py-12 gap-5"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
                        <CheckCircle size={40} className="text-[#22c55e]" />
                      </div>
                      <h3 className="font-heading text-2xl text-brown">
                        Nachricht gesendet!
                      </h3>
                      <p className="font-body text-brown-mid max-w-[360px]">
                        Vielen Dank für deine Nachricht. Wir haben dir eine
                        Bestätigung per E-Mail geschickt und melden uns
                        schnellstmöglich.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 font-body font-bold text-terracotta hover:underline underline-offset-4"
                      >
                        Weitere Nachricht senden
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      variants={stagger}
                      initial="initial"
                      animate="animate"
                      className="flex flex-col gap-5"
                    >
                      {/* Name + Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <motion.div variants={fadeUp}>
                          <label
                            htmlFor="kontakt-name"
                            className="block text-[0.72rem] font-black text-brown/60 uppercase tracking-[0.12em] mb-2 ml-1"
                          >
                            Name *
                          </label>
                          <input
                            id="kontakt-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-cream/60 border-2 border-transparent focus:border-terracotta/60 px-5 py-3.5 rounded-2xl font-body font-bold text-charcoal focus:outline-none transition-all placeholder:text-brown/30"
                            placeholder="Dein Name"
                          />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                          <label
                            htmlFor="kontakt-email"
                            className="block text-[0.72rem] font-black text-brown/60 uppercase tracking-[0.12em] mb-2 ml-1"
                          >
                            E-Mail *
                          </label>
                          <input
                            id="kontakt-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-cream/60 border-2 border-transparent focus:border-terracotta/60 px-5 py-3.5 rounded-2xl font-body font-bold text-charcoal focus:outline-none transition-all placeholder:text-brown/30"
                            placeholder="mail@beispiel.de"
                          />
                        </motion.div>
                      </div>

                      {/* Phone + Subject Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <motion.div variants={fadeUp}>
                          <label
                            htmlFor="kontakt-phone"
                            className="block text-[0.72rem] font-black text-brown/60 uppercase tracking-[0.12em] mb-2 ml-1"
                          >
                            Telefon{" "}
                            <span className="text-brown/30">(optional)</span>
                          </label>
                          <input
                            id="kontakt-phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-cream/60 border-2 border-transparent focus:border-terracotta/60 px-5 py-3.5 rounded-2xl font-body font-bold text-charcoal focus:outline-none transition-all placeholder:text-brown/30"
                            placeholder="0176 ..."
                          />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                          <label
                            htmlFor="kontakt-subject"
                            className="block text-[0.72rem] font-black text-brown/60 uppercase tracking-[0.12em] mb-2 ml-1"
                          >
                            Betreff
                          </label>
                          <select
                            id="kontakt-subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-cream/60 border-2 border-transparent focus:border-terracotta/60 px-5 py-3.5 rounded-2xl font-body font-bold text-charcoal focus:outline-none transition-all appearance-none cursor-pointer"
                          >
                            {SUBJECTS.map((s) => (
                              <option key={s.value} value={s.value}>
                                {s.label}
                              </option>
                            ))}
                          </select>
                        </motion.div>
                      </div>

                      {/* Message */}
                      <motion.div variants={fadeUp}>
                        <label
                          htmlFor="kontakt-message"
                          className="block text-[0.72rem] font-black text-brown/60 uppercase tracking-[0.12em] mb-2 ml-1"
                        >
                          Nachricht *
                        </label>
                        <textarea
                          id="kontakt-message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full bg-cream/60 border-2 border-transparent focus:border-terracotta/60 px-5 py-3.5 rounded-2xl font-body font-bold text-charcoal focus:outline-none transition-all resize-none placeholder:text-brown/30"
                          placeholder="Was liegt dir auf dem Herzen?"
                        />
                      </motion.div>

                      {/* Error message */}
                      <AnimatePresence>
                        {status === "error" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-3 bg-red-50 text-red-700 px-5 py-3 rounded-2xl text-sm font-bold"
                          >
                            <AlertCircle size={18} />
                            {errorMsg}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit */}
                      <motion.button
                        variants={fadeUp}
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-2 w-full bg-terracotta text-white py-4 rounded-2xl font-black text-[0.95rem] uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_6px_20px_rgba(204,98,76,0.25)] hover:shadow-[0_8px_28px_rgba(204,98,76,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 size={20} className="animate-spin" /> Wird
                            gesendet...
                          </>
                        ) : (
                          <>
                            Nachricht senden <Send size={18} />
                          </>
                        )}
                      </motion.button>

                      <p className="text-[0.72rem] text-brown/40 text-center mt-1">
                        Mit dem Absenden stimmst du unserer{" "}
                        <a
                          href="/datenschutz"
                          className="underline hover:text-terracotta"
                        >
                          Datenschutzerklärung
                        </a>{" "}
                        zu.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── Info Sidebar (2/5) ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Contact Info Card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-[28px] p-7 shadow-[0_8px_40px_rgba(45,31,25,0.06)] border border-peach/30">
                <h3 className="font-heading text-[1.3rem] text-brown mb-5">
                  Kontaktdaten
                </h3>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: MapPin,
                      label: FULL_ADDRESS,
                      href: `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.latitude},${BUSINESS.longitude}`,
                    },
                    {
                      icon: Phone,
                      label: BUSINESS.phone,
                      href: `tel:${BUSINESS.phone.replace(/\s/g, "")}`,
                    },
                    {
                      icon: MessageCircle,
                      label: `WhatsApp: ${BUSINESS.whatsappDisplay}`,
                      href: `https://wa.me/${BUSINESS.whatsappDisplay.replace(/\s/g, "").replace(/^0/, "49")}`,
                    },
                    {
                      icon: Mail,
                      label: BUSINESS.email,
                      href: `mailto:${BUSINESS.email}`,
                    },
                    {
                      icon: InstagramIcon,
                      label: `@${BUSINESS.instagram}`,
                      href: `https://instagram.com/${BUSINESS.instagram}`,
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-3.5 p-3 -mx-3 rounded-xl hover:bg-peach/15 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-peach/30 flex items-center justify-center shrink-0 group-hover:bg-terracotta/15 transition-colors">
                        <item.icon size={16} className="text-terracotta" />
                      </div>
                      <span className="font-body text-[0.88rem] font-bold text-brown/80 pt-1.5 leading-snug group-hover:text-brown transition-colors">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-[28px] p-7 shadow-[0_8px_40px_rgba(45,31,25,0.06)] border border-peach/30">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-peach/30 flex items-center justify-center">
                    <Clock size={16} className="text-terracotta" />
                  </div>
                  <h3 className="font-heading text-[1.3rem] text-brown">
                    Öffnungszeiten
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { day: "Montag", time: "12:00 - 20:00" },
                    { day: "Dienstag", time: "12:00 - 20:00" },
                    { day: "Mittwoch", time: "12:00 - 20:00" },
                    { day: "Donnerstag", time: "12:00 - 20:00" },
                    { day: "Freitag", time: "12:00 - 20:00" },
                    { day: "Samstag", time: "10:00 - 20:00" },
                    { day: "Sonntag", time: "10:00 - 20:00" },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center py-1.5 px-1 text-[0.84rem] font-body text-brown/80"
                    >
                      <span className="font-bold">{row.day}</span>
                      <span className="font-bold">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${BUSINESS.whatsappDisplay.replace(/\s/g, "").replace(/^0/, "49")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366]/10 border border-[#25D366]/20 rounded-[28px] p-7 flex items-center gap-5 hover:bg-[#25D366]/15 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.12)]"
              >
                <div className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/25 shrink-0">
                  <MessageCircle size={26} />
                </div>
                <div>
                  <div className="font-heading text-[1.1rem] text-[#25D366] mb-0.5">
                    Lieber direkt per WhatsApp kontaktieren?
                  </div>
                  <div className="font-body text-[0.82rem] text-[#25D366]/80 font-bold">
                    Schreib uns eine schnelle Nachricht auf WhatsApp für
                    spontane Fragen zu Öffnungszeiten, Reservierungen oder
                    unseren Eissorten.
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Anfahrt & Zusatzinformationen ═══ */}
      <section className="pb-20 pt-4 px-6 border-t border-peach/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-peach/20 shadow-sm">
              <h3 className="font-heading text-lg text-brown mb-2">
                Anfahrt &amp; Erreichbarkeit
              </h3>
              <p className="font-body text-sm text-brown-mid leading-relaxed">
                Du findest unsere Hey Fede Dessertbar zentral gelegen in
                Wetzlar. Ob zu Fuß durch die Innenstadt, mit dem Fahrrad oder
                mit öffentlichen Verkehrsmitteln – wir sind bequem erreichbar
                und freuen uns auf deinen Besuch.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-peach/20 shadow-sm">
              <h3 className="font-heading text-lg text-brown mb-2">
                Catering &amp; Event-Anfragen
              </h3>
              <p className="font-body text-sm text-brown-mid leading-relaxed">
                Planst du eine Hochzeit, einen Geburtstag oder ein Firmenevent
                in Wetzlar und Umgebung? Nutze unser Formular mit der
                Betreff-Auswahl &bdquo;Catering &amp; Events&ldquo; und wir
                erstellen dir ein individuelles Dessert-Angebot.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-peach/20 shadow-sm">
              <h3 className="font-heading text-lg text-brown mb-2">
                Schnelle Antwortzeiten
              </h3>
              <p className="font-body text-sm text-brown-mid leading-relaxed">
                Wir bearbeiten deine Nachrichten schnellstmöglich. Für besonders
                dringende Anfragen oder spontane Reservierungen erreichst du uns
                am schnellsten direkt per WhatsApp oder telefonisch während
                unserer Öffnungszeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blobFloat{0%,100%{transform:translate(0,0)}33%{transform:translate(6px,-10px)}66%{transform:translate(-5px,7px)}}
        .animate-blob-float { animation: blobFloat 10s ease-in-out infinite; }
      `,
        }}
      />
    </div>
  );
}
