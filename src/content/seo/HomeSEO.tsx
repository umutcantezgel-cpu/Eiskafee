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
        Hey Fede! – Die Wetzlarer Dessertbar, die Genuss neu definiert
      </h2>

      <div className="font-body text-charcoal/80 space-y-5 text-base md:text-lg leading-relaxed">
        <p>
          Wir bei Hey Fede! sind unendlich stolz darauf, ein so lebendiger Teil
          der dynamischen Wetzlarer Gastro-Szene zu sein. Die
          Gastronomielandschaft im Herzen von Hessen, insbesondere im
          Lahn-Dill-Kreis, war schon immer geprägt von tief verwurzelten
          Traditionen, rustikalen Wirtshäusern und klassischen Cafés. Doch als
          wir 2023 beschlossen haben, genau hier in der {BUSINESS.street} unsere
          Türen zu öffnen, wussten wir, dass wir eine neue, aufregende Facette
          in das städtische Kulinarik-Portfolio einbringen wollten. Wir haben
          die historische Kulisse der Wetzlarer Altstadt nicht als
          Einschränkung, sondern als die absolut perfekte Bühne für unser
          innovatives Dessert-Konzept begriffen.
        </p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden space-y-10 pt-6"
            >
              <section>
                <h3 className="font-heading text-2xl text-terracotta mb-4">
                  Unsere Rolle in der Wetzlarer Gastro-Szene
                </h3>
                <div className="space-y-4">
                  <p>
                    Unsere Vision war es, einen Kontrastpunkt zu setzen, ohne
                    dabei den Respekt vor der Wetzlarer Geschichte zu verlieren.
                    Wenn unsere Gäste heute nach einem ausgiebigen Besuch im
                    berühmten Lottehaus, wo Johann Wolfgang von Goethe wichtige
                    Inspirationen für sein literarisches Schaffen fand, oder
                    nach einem entspannten Nachmittagsspaziergang über die Alte
                    Lahnbrücke zu uns kommen, tauchen sie in eine völlig andere
                    Welt ein. Wir verbinden die Gemütlichkeit eines familiären
                    Wohnzimmers mit dem urbanen Flair moderner Metropolen, in
                    denen Dessert-Trends wie die knusprige Bubble Waffle oder
                    üppig dekorierte Special Shakes längst zum Alltag gehören.
                  </p>
                  <p>
                    Durch die enge und vertrauensvolle Zusammenarbeit mit
                    lokalen Lieferanten und die aktive Teilnahme an Stadtfesten
                    und Events rund um den Kornmarkt haben wir tiefe Wurzeln
                    geschlagen. Wir sind nicht einfach nur irgendein Laden, der
                    Süßigkeiten verkauft; wir sind eine etablierte Institution,
                    ein Ort des täglichen, unbeschwerten Zusammenkommens für
                    Studierende der Technischen Hochschule Mittelhessen (THM),
                    für frisch verliebte Paare auf ihrer Date-Night und für
                    Großfamilien, die sich nach der Arbeitswoche etwas ganz
                    Besonderes gönnen möchten.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-heading text-2xl text-terracotta mb-4">
                  Der große Vergleich: Bubble Waffle vs. Klassische Waffel
                </h3>
                <div className="space-y-4">
                  <p>
                    Eine Frage, die uns an der Theke in der Wetzlarer Langgasse
                    immer wieder mit großer Neugier gestellt wird, lautet: "Wo
                    liegt eigentlich der genaue Unterschied zwischen eurer
                    berühmten Bubble Waffle und der klassischen, traditionellen
                    Waffel, die meine Oma früher immer gebacken hat?" Wir lieben
                    diese Frage, denn sie gibt uns die perfekte Gelegenheit,
                    unsere absolute Leidenschaft für dieses außergewöhnliche
                    Gebäck zu teilen. Um es vorwegzunehmen: Wir lieben beide
                    Varianten, aber die Bubble Waffle, die ihren historischen
                    Ursprung in den pulsierenden, neonbeleuchteten
                    Straßenmärkten von Hongkong hat, spielt in einer völlig
                    anderen, faszinierenden Textur-Liga.
                  </p>
                  <p>
                    Der offensichtlichste Unterschied liegt natürlich im
                    visuellen Erscheinungsbild und der revolutionären Struktur.
                    Während die klassische belgische oder bergische Waffel flach
                    ist und durch tiefe, quadratische oder herzförmige
                    Vertiefungen gekennzeichnet wird, zeichnet sich unsere
                    Bubble Waffle durch ihre namensgebenden, kugelrunden
                    Erhebungen, die sogenannten "Bubbles", aus. Dieses
                    einzigartige Wabenmuster entsteht durch spezielle, aus
                    dickem Gusseisen gefertigte Waffeleisen, die wir während des
                    Backvorgangs im exakt richtigen Moment wenden müssen.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-heading text-2xl text-terracotta mb-4">
                  Unser Hey Fede! Dessert-Glossar: Die Sprache des puren
                  Genusses
                </h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-bold text-charcoal text-lg mb-1">
                      Softeis (Soft Serve)
                    </dt>
                    <dd>
                      Vergiss alles, was du bisher über wässriges Softeis aus
                      dem Freizeitpark dachtest. Unser Softeis wird frisch in
                      der Maschine aufgeschlagen. Durch die kontinuierliche
                      Zugabe von kalter Luft während des Gefrierprozesses erhält
                      es diese unvergleichlich seidige, dichte und cremige
                      Textur, die bei exakt -7 Grad Celsius serviert wird.
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-charcoal text-lg mb-1">
                      Toppings & Crumbles
                    </dt>
                    <dd>
                      Ein Dessert ohne den perfekten Crunch ist für uns nur die
                      halbe Miete. Unsere Crumbles bestehen aus im Ofen
                      gerösteten, butterigen Streuseln, knusprigen Keksbröseln
                      oder gehackten Nüssen.
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-charcoal text-lg mb-1">
                      Crêpes
                    </dt>
                    <dd>
                      Ein Crêpe ist ein extrem dünner, weicher Pfannkuchen, der
                      auf einer speziell dafür vorgesehenen, flachen
                      Gusseisenplatte gebacken wird. Das Resultat ist ein fast
                      durchscheinender Teigfladen, den wir kunstvoll falten und
                      mit reichhaltigen Füllungen versehen.
                    </dd>
                  </div>
                </dl>
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
