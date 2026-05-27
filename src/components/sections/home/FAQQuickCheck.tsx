'use client';
import React, { useState } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';
import { SectionTitle } from '@/components/ui/LayoutBlocks';
import { FAQ_DATA } from '@/content/seo/faq-data';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQQuickCheck() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  // We only take the first 8 questions for the Quick Check on the homepage
  const topFaqs = FAQ_DATA.slice(0, 8);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream py-24 relative z-10">
      <FadeUp className="max-w-[800px] mx-auto px-6">
        <SectionTitle sub="Gut zu wissen.">FAQ Quick-Check</SectionTitle>
        <p className="text-center font-nunito text-[#5c3d35] mb-12">
          Hier sind die häufigsten Fragen, die unsere Gäste in Wetzlar stellen. Für noch mehr Details schau einfach auf unserer ausführlichen FAQ-Seite vorbei.
        </p>

        <div className="space-y-4">
          {topFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-terracotta shadow-md' : 'border-peach/50 shadow-sm hover:border-terracotta/50'}`}
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-calistoga text-[#2d1f19] text-[1.15rem] leading-tight">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-terracotta text-white rotate-180' : 'bg-[#f5efe8] text-terracotta'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 font-nunito text-[#5c3d35] leading-relaxed">
                        <div className="w-full h-[1px] bg-peach/30 mb-4" />
                        <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
