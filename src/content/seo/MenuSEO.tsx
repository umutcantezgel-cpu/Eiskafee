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
            Dessert-Spezialitäten auf der Hey Fede Speisekarte in Wetzlar
          </h2>

          <div className="font-body text-charcoal/80 space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Inmitten der historischen Wetzlarer Altstadt, nur einen Steinwurf
              vom Dom entfernt, findest du unsere Dessertbar. Ein Ort, an dem
              der Alltag an der Tür bleibt und Platz macht für puren Genuss und
              echte Handwerkskunst. Komm vorbei, atme den verführerischen Duft
              von frisch gebackenem Waffelteig ein und entdecke unsere
              vielfältige Speisekarte.
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
                      Unsere Bubble Waffles sind außen knusprig, innen wunderbar
                      fluffig und das Herzstück unserer Speisekarte. Wir
                      bereiten den Teig täglich nach eigenem Hausrezept frisch
                      zu und backen jede Waffel direkt auf deine Bestellung.
                      Gefüllt mit cremigem Eis, frisch aufgeschlagener Sahne und
                      einer großen Auswahl an Toppings wie frischen Früchten,
                      Keksstücken und Saucen wird jede Waffel zu einem
                      einzigartigen Dessert-Meisterwerk in Wetzlar.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Crêpes – Süße und herzhafte Momente
                    </h3>
                    <p>
                      Unsere Crêpes werden hauchdünn, goldbraun und stets frisch
                      auf der traditionellen Crêpière für dich zubereitet. Egal,
                      ob du es klassisch mit Butter und Zucker, dekadent mit
                      Nougat-Creme und frischen Erdbeeren oder herzhaft mit Käse
                      und Kräutern magst – auf unserer Speisekarte bieten wir
                      für jeden Geschmack die passende Variation in Wetzlar.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Pancakes – Fluffiges Glück gestapelt
                    </h3>
                    <p>
                      Die Pancakes bei Hey Fede sind besonders fluffig, in
                      mehreren Schichten gestapelt und nehmen köstliche Saucen
                      hervorragend auf. Genieße deinen Pancaketurm ganz
                      klassisch mit feinstem kanadischen Ahornsirup oder
                      entscheide dich für unsere beliebten Kombinationen mit
                      Schokoladen-Ganache, Knusper-Toppings und frischem Obst.
                      Ein echtes Highlight für alle Dessert-Fans.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Eisbecher & Special Shakes
                    </h3>
                    <p>
                      Unsere großzügigen 500ml-Eisbecher und spektakulären
                      Special Shakes bieten eisgekühlten Dessertgenuss der
                      Extraklasse. Ausgewähltes Premium-Eis, frische Vollmilch
                      und eine opulente Dekoration aus Saucen, Sahne und Sweets
                      machen jedes Getränk und jeden Eisbecher zu einem
                      optischen und geschmacklichen Erlebnis. Perfekt zum Teilen
                      mit Freunden oder für die süße Verwöhnauszeit.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-heading text-2xl text-terracotta mb-3">
                      Fede Boxen – Gemeinsam genießen
                    </h3>
                    <p>
                      Die Fede Boxen auf unserer Speisekarte sind die ideale
                      Wahl für gemeinsame Genussmomente, Picknicks an der Lahn
                      oder gemütliche Filmabende daheim. Vollgepackt mit
                      mundgerechten Mini-Pancakes, Bubble-Waffle-Ecken,
                      verschiedenen Cookies und köstlichen Dips zum Tunken
                      verwandeln sie jedes Treffen in ein interaktives
                      Dessert-Fest in Wetzlar.
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
