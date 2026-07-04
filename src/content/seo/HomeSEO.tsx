"use client";

import React, { useState } from "react";
import { BUSINESS } from "@/lib/seo/business-data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HomeSEO() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      itemScope
      itemType="https://schema.org/Article"
      className="bg-beige rounded-3xl p-8 md:p-10 shadow-sm border border-peach/20"
    >
      <h2
        itemProp="headline"
        className="font-heading text-3xl md:text-4xl text-brown mb-6"
      >
        Hey Fede! – Dessertkultur im Herzen Wetzlars
      </h2>

      <div className="font-body text-charcoal/80 space-y-5 text-base md:text-lg leading-relaxed">
        <p>
          Willkommen bei Hey Fede! In der {BUSINESS.street} bringen wir moderne
          Dessert-Trends und echtes Café-Feeling zusammen. Ob knusprige Bubble
          Waffles, feine Crêpes oder hausgemachte Special Shakes – bei uns
          trifft Handwerk auf Leidenschaft.
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
                  Mehr als nur süß
                </h3>
                <p>
                  Wir lieben Kontraste: Die historische Kulisse der Wetzlarer
                  Altstadt trifft auf neon-inspirierte Dessert-Innovationen aus
                  aller Welt. Unser Ziel ist es, einen Raum zu schaffen, in dem
                  man den Alltag vergisst – egal ob nach einem Spaziergang über
                  die Lahnbrücke, beim Date oder beim Familienausflug.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-2xl text-terracotta mb-3">
                  Qualität, die man schmeckt
                </h3>
                <p>
                  Wir setzen auf frisch aufgeschlagenes Softeis, liebevolle
                  Toppings und den perfekten Back-Moment. Jede Bubble Waffle und
                  jeder Crêpe wird frisch vor deinen Augen zubereitet, um dir
                  das absolute Maximum an Textur und Geschmack zu bieten.
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
            {isExpanded ? "Weniger anzeigen" : "Mehr über Hey Fede! lesen"}
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
  );
}
