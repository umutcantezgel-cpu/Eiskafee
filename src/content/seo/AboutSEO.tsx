"use client";

import React, { useState } from "react";
import { BUSINESS } from "@/lib/seo/business-data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function AboutSEO() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      aria-label="Über Hey Fede! - Geschichte und Philosophie"
      className="bg-[#F5EFE8] py-16 md:py-20"
    >
      <div className="max-w-[820px] mx-auto px-6" role="region">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-peach/20">
          <h2 className="font-heading text-3xl md:text-4xl text-brown mb-6">
            Hey Fede! – Unsere Geschichte
          </h2>

          <div className="font-body text-charcoal/80 space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Ein Funke, der zur Flamme wurde: Was in der heimischen Küche als
              Leidenschaft für süße Kreationen begann, ist heute eine feste
              Institution in der Wetzlarer Altstadt. Wir glauben, dass ein
              Dessert mehr ist als nur süß – es ist ein Moment des Innehaltens
              und der Gemeinschaft.
            </p>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden space-y-8 pt-4"
                >
                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Warum Wetzlar?
                    </h3>
                    <p>
                      Die historische Kulisse der {BUSINESS.street} bot genau
                      die Atmosphäre, die wir suchten. Mitten in den
                      kopfsteingepflasterten Gassen, unweit des Doms, haben wir
                      ein zweites Wohnzimmer geschaffen, in dem Tradition auf
                      moderne Dessert-Kultur trifft.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Unsere Philosophie
                    </h3>
                    <p>
                      Ehrliches Handwerk, Zeit und Hingabe: Wir verzichten
                      konsequent auf industrielle Backmischungen und künstliche
                      Aromen. Von echter Madagaskar-Vanille bis zu hochwertiger
                      Schokolade – wir machen keine Kompromisse bei der
                      Qualität.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Unsere Partner
                    </h3>
                    <p>
                      Qualität beginnt bei den Zutaten. Wir arbeiten eng mit
                      regionalen Lieferanten und vertrauenswürdigen Händlern
                      zusammen. Transparenz, Nachhaltigkeit und Respekt vor
                      Lebensmitteln sind für uns keine Marketing-Phrasen,
                      sondern die Basis unserer Arbeit.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Die Hey Fede! Community
                    </h3>
                    <p>
                      Das Herz unseres Cafés seid ihr. Ob erstes Date,
                      Familienfeier oder einfach ein Treffen nach dem Alltag –
                      wir lieben es, Teil eurer besonderen Momente zu sein.
                      Vielen Dank für eure Treue und die unglaubliche
                      Unterstützung!
                    </p>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-6 border-t border-peach/30">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 font-heading text-xl text-terracotta hover:text-brown transition-colors group"
              >
                {isExpanded ? "Weniger anzeigen" : "Mehr über uns lesen"}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-peach/30 rounded-full p-2 group-hover:bg-peach/60"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
