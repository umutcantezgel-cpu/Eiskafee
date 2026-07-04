"use client";

import React, { useState } from "react";
import { BUSINESS } from "@/lib/seo/business-data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function MenuSEO() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      aria-label="Hey Fede! Menü - Unsere Spezialitäten"
      className="bg-[#faf6f1] py-16 md:py-20 border-t border-peach/30"
    >
      <div className="max-w-[820px] mx-auto px-6" role="region">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-peach/20">
          <h2 className="font-heading text-3xl md:text-4xl text-brown mb-6">
            Herzlich willkommen bei Hey Fede!
          </h2>

          <div className="font-body text-charcoal/80 space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Inmitten der historischen Wetzlarer Altstadt, nur einen Steinwurf
              vom Dom entfernt, findest du unsere Dessertbar. Ein Ort, an dem
              der Alltag an der Tür bleibt und Platz macht für puren Genuss und
              echte Handwerkskunst. Komm vorbei, atme den Duft von frisch
              gebackenem Waffelteig ein und fühl dich wie zu Hause.
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
                      Bubble Waffles – Die süße Sensation
                    </h3>
                    <p>
                      Unsere Bubble Waffles sind außen knusprig und innen
                      wunderbar fluffig. Wir bereiten den Teig täglich frisch zu
                      und backen jede Waffel direkt auf Bestellung. Gefüllt mit
                      cremigem Eis, hausgemachter Sahne und Toppings wie
                      frischen Früchten, Keksstücken und Saucen wird jede Waffel
                      zu einem kleinen Meisterwerk.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Crêpes – Süße und herzhafte Momente
                    </h3>
                    <p>
                      Hauchdünn, goldbraun und auf der Crêpière frisch für dich
                      zubereitet. Egal, ob du es klassisch mit Butter und
                      Zucker, dekadent mit Nougat-Creme oder herzhaft mit Käse
                      und Kräutern magst – wir haben die perfekte Variante für
                      jeden Geschmack.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Pancakes – Fluffiges Glück gestapelt
                    </h3>
                    <p>
                      Unsere Pancakes sind luftig, dick und saugen die
                      herrlichen Aromen förmlich in sich auf. Ob puristisch mit
                      echtem kanadischem Ahornsirup oder als "Chocolate
                      Lover"-Turm mit Schokoladen-Ganache übergossen – sie sind
                      das perfekte Soul Food.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Eisbecher & Special Shakes
                    </h3>
                    <p>
                      Großzügige 500ml-Eisbecher und spektakuläre "Freakshakes"
                      – unsere eisgekühlten Desserts sind ein absolutes
                      Highlight. Cremiges Premium-Eis, frische Milch und eine
                      opulente Dekoration, die alle Blicke auf sich zieht.
                      Perfekt zum Teilen oder um sich selbst so richtig zu
                      verwöhnen.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Fede Boxen – Gemeinsam genießen
                    </h3>
                    <p>
                      Unsere Fede Boxen sind die ideale Wahl für Picknicks an
                      der Lahn oder Filmabende zu Hause. Vollgepackt mit
                      Mini-Pancakes, Bubble-Waffle-Ecken, Cookies und Dips,
                      verwandeln sie jedes Treffen in ein interaktives
                      Dessert-Fest.
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
                {isExpanded
                  ? "Weniger anzeigen"
                  : "Ganze Speisekarte entdecken"}
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
