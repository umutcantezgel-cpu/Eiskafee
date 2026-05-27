'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Send, MessageCircle } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useToastStore } from '@/store/useToastStore';

const FAQS = [
  {
    question: "Liefert ihr auch nach Hause?",
    answer: "Ja, wir liefern in ausgewählte Postleitzahlen (z.B. 35576, 35578). Ob wir auch zu dir liefern, siehst du im Checkout, wenn du 'Lieferung' auswählst."
  },
  {
    question: "Was ist in der Original Fede Box?",
    answer: "Unsere Original Box enthält zwei frisch gebackene Bubble Waffles, vier Soßen nach Wahl, frische Erdbeeren und eine Extra-Portion Liebe."
  },
  {
    question: "Habt ihr auch vegane Alternativen?",
    answer: "Aktuell arbeiten wir noch an einem perfekten veganen Teig für unsere Waffeln. Einige unserer Toppings und Soßen sind jedoch bereits vegan!"
  },
  {
    question: "Wie kann ich reservieren?",
    answer: "Nutze dafür einfach unsere Reservierungs-Seite oder kontaktiere uns direkt via WhatsApp. Für Gruppen ab 8 Personen bitten wir um 2 Tage Vorlauf."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToastStore();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'support_messages'), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'new'
      });
      addToast({ title: 'Nachricht gesendet!', message: 'Wir melden uns bald bei dir.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      addToast({ title: 'Fehler', message: 'Nachricht konnte nicht gesendet werden.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efe8] pt-24 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-4">Wie können wir dir helfen?</h1>
          <p className="font-nunito text-[#7a5a52] max-w-lg mx-auto">
            Egal ob Frage zur Bestellung, Feedback oder einfach nur Hallo sagen – wir sind für dich da!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* FAQ Section */}
          <div>
            <h2 className="font-calistoga text-2xl text-[#2d1f19] mb-6">Häufige Fragen</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-[24px] shadow-sm border border-[#eedfcc] overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-white"
                  >
                    <span className="font-bold text-[#2d1f19] pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-[#CC624C]"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 pt-2 text-[#7a5a52] text-sm leading-relaxed border-t border-[#eedfcc] border-dashed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 bg-[#3a9d52]/10 border border-[#3a9d52]/20 rounded-[24px] p-6 flex items-center justify-between">
              <div>
                <h3 className="font-calistoga text-xl text-[#3a9d52] mb-1">Lieber direkt texten?</h3>
                <p className="text-[#3a9d52]/80 text-sm font-bold">Schreib uns auf WhatsApp.</p>
              </div>
              <a 
                href="https://wa.me/49123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#3a9d52] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#3a9d52]/30 shrink-0"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-calistoga text-2xl text-[#2d1f19] mb-6">Schreib uns</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-[32px] shadow-sm border border-[#eedfcc] flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold text-[#7a5a52] mb-1.5 ml-2">Dein Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#f5efe8] border-none px-5 py-3.5 rounded-[18px] font-bold text-[#2d1f19] focus:outline-none focus:ring-2 focus:ring-[#CC624C]"
                  placeholder="Hey, ich bin..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#7a5a52] mb-1.5 ml-2">Deine E-Mail</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#f5efe8] border-none px-5 py-3.5 rounded-[18px] font-bold text-[#2d1f19] focus:outline-none focus:ring-2 focus:ring-[#CC624C]"
                  placeholder="mail@beispiel.de"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#7a5a52] mb-1.5 ml-2">Deine Nachricht</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#f5efe8] border-none px-5 py-3.5 rounded-[18px] font-bold text-[#2d1f19] focus:outline-none focus:ring-2 focus:ring-[#CC624C] min-h-[120px] resize-none"
                  placeholder="Wie können wir dir helfen?"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full bg-[#CC624C] text-white py-4 rounded-[18px] font-bold flex items-center justify-center gap-2 hover:bg-[#A84B38] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Wird gesendet...' : (
                  <>Nachricht senden <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
