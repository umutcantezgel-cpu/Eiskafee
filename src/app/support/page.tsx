"use client";
import React, { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import { db } from "@/lib/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Frage zu einer Bestellung");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const faqs = [
    { q: 'Wie funktioniert die Vorbestellung?', a: 'Wähle deine Lieblings-Desserts aus, lege sie in den Warenkorb und wähle einen Abholzeitpunkt. Wir bereiten alles frisch zu — du holst es im Laden ab und zahlst dort.' },
    { q: 'Wie weit im Voraus kann ich bestellen?', a: 'Du kannst bis zu 7 Tage im Voraus bestellen.' },
    { q: 'Kann ich meine Bestellung stornieren?', a: 'Stornierungen sind bis 30 Minuten vor der Abholung kostenlos möglich.' },
    { q: 'Welche Zahlungsmethoden akzeptiert ihr?', a: 'Wir akzeptieren Barzahlung, EC-Karte und Kreditkarte (Visa, Mastercard).' },
    { q: 'Muss ich vorab bezahlen?', a: 'Nein, die Bezahlung erfolgt erst bei Abholung im Laden.' },
    { q: 'Habt ihr vegane Optionen?', a: 'Ja! Wir haben vegane Pancakes und Sorbets. Achte auf die entsprechende Kennzeichnung im Menü.' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      await addDoc(collection(db, "support_messages"), {
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString()
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("Frage zu einer Bestellung");
    } catch (err: any) {
      console.error(err);
      setError("Nachricht konnte nicht gesendet werden. Bitte versuche es später noch einmal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efe8]">
      {/* Header */}
      <div className="bg-[#E4C0A8] pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] dot-bg" />
        <div className="relative z-10">
          <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-3">Support & FAQ</h1>
          <p className="font-nunito text-[#5c3d35] max-w-sm mx-auto">Wie können wir dir helfen? Finde schnelle Antworten oder schreib uns eine Nachricht.</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <FadeUp>
          {/* Kontakt Cards */}
          <div id="kontakt" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 pt-10 -mt-10">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-[#eedfcc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Phone size={20} color="#CC624C" />
              </div>
              <h3 className="font-calistoga text-[#2d1f19] text-lg mb-1">Anrufen</h3>
              <p className="font-nunito text-[#CC624C] font-bold">06441 7890426</p>
            </div>
            
            <div className="bg-[#25D366] rounded-2xl p-6 text-center text-white shadow-[0_8px_20px_rgba(37,211,102,0.25)] flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
              <Icons.MessageCircle size={28} className="mb-2" />
              <h3 className="font-calistoga text-lg mb-1">WhatsApp Chat</h3>
              <p className="font-nunito text-sm opacity-90">Antwort meist binnen 30 Min</p>
            </div>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="font-calistoga text-[1.8rem] text-[#2d1f19] mb-6 pt-10 -mt-10">Häufige Fragen</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#eedfcc] last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-[#fef8f5] transition-colors"
                >
                  <span className="font-nunito font-bold text-[#2d1f19] pr-4">{faq.q}</span>
                  <Icons.ChevronDown 
                    size={20} 
                    className={`text-[#CC624C] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 bg-[#fef8f5]"
                  style={{ maxHeight: openFaq === i ? '200px' : '0px' }}
                >
                  <p className="px-6 pb-5 pt-2 font-nunito text-[#5c3d35] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Formular */}
          <h2 className="font-calistoga text-[1.8rem] text-[#2d1f19] mb-6">Schreib uns</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-1">Dein Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-none outline-none font-nunito font-bold text-[#2d1f19]" 
                  placeholder="Max Mustermann" 
                />
              </div>
              <div className="bg-white rounded-xl p-4">
                <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-1">E-Mail</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none outline-none font-nunito font-bold text-[#2d1f19]" 
                  placeholder="max@example.com" 
                />
              </div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-1">Betreff</label>
              <select 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-nunito font-bold text-[#2d1f19] appearance-none"
              >
                <option>Frage zu einer Bestellung</option>
                <option>Feedback & Lob</option>
                <option>Catering & Events</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div className="bg-white rounded-xl p-4">
              <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2">Nachricht</label>
              <textarea 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4} 
                className="w-full bg-transparent border-none outline-none font-nunito text-[#5c3d35] resize-none" 
                placeholder="Hallo Fede, ich wollte fragen..."
              ></textarea>
            </div>

            {error && <div className="text-red-500 font-nunito text-sm font-bold">{error}</div>}
            {success && <div className="text-green-600 font-nunito text-sm font-bold bg-green-50 p-4 rounded-xl">Deine Nachricht wurde erfolgreich gesendet! Wir melden uns zeitnah.</div>}

            <div className="pt-2">
              <PrimaryButton sectionBg="#f5efe8" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Absenden →"}
              </PrimaryButton>
            </div>
          </form>

        </FadeUp>
      </div>
    </div>
  );
}
