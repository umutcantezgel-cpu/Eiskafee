"use client";
import React, { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Leaf,
  Snowflake,
  Flower2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WaveDivider } from "@/components/ui/WaveDivider";

const SEASONS = [
  {
    id: "spring",
    name: "Frühling",
    icon: <Flower2 className="w-6 h-6" />,
    color: "#E4C0A8",
    specialTitle: "Rhabarber-Erdbeer Traum",
    specialDesc:
      "Sobald die ersten warmen Sonnenstrahlen Wetzlars Kopfsteinpflaster erwärmen, eröffnen wir die Frühlingssaison. Freu dich auf unsere Bubble Waffle mit frischem Rhabarber-Kompott, den ersten regionalen Erdbeeren und einer leichten Vanillecreme, die den grauen Winter endgültig vertreibt.",
    items: [
      "Rhabarber-Erdbeer Bubble Waffle",
      "Matcha Latte mit Sakura-Sirup",
      "Fruchtiger Frühlings-Crêpe",
    ],
  },
  {
    id: "summer",
    name: "Sommer",
    icon: <Sun className="w-6 h-6" />,
    color: "#b34832",
    specialTitle: "Tropical Mango Madness",
    specialDesc:
      "Wenn die Hitze über dem Eisenmarkt steht, sorgt unser Sommer-Spezial für die perfekte Abkühlung. Ein gigantischer 500ml Eisbecher mit hausgemachtem Mango-Sorbet, frischen Maracuja-Kernen, Kokosraspeln und unserem cremigen Softeis. Ein tropischer Kurzurlaub mitten in Hessen.",
    items: [
      "Tropical Mango Eisbecher",
      "Iced Caramel Macchiato",
      "Zitronen-Sorbet Shake",
    ],
  },
  {
    id: "autumn",
    name: "Herbst",
    icon: <Leaf className="w-6 h-6" />,
    color: "#9a7060",
    specialTitle: "Pumpkin Spice Pancake Stack",
    specialDesc:
      "Wenn das Laub der Lahnauen sich bunt färbt, holen wir die wärmenden Gewürze heraus. Unser fluffiger Pancake-Stapel, verfeinert mit echtem Kürbispüree, Zimt, Muskatnuss und übergossen mit warmem Ahornsirup und gerösteten Pekannüssen, ist pures Herbst-Glück auf dem Teller.",
    items: [
      "Pumpkin Spice Pancakes",
      "Karamellisierter Apfel-Crêpe",
      "Chai Tea Latte",
    ],
  },
  {
    id: "winter",
    name: "Winter",
    icon: <Snowflake className="w-6 h-6" />,
    color: "#5c3d35",
    specialTitle: "Spekulatius-Winterzauber",
    specialDesc:
      "Nach einem Bummel über den Wetzlarer Weihnachtsmarkt wärmst du dich am besten bei uns auf. Genieße unsere Winter-Bubble-Waffle mit heißer Schokoladensoße, zerkrümelten Spekulatius-Keksen, gebrannten Mandeln und einer großzügigen Haube aus frisch geschlagener Sahne.",
    items: [
      "Spekulatius Bubble Waffle",
      "Heiße Schokolade mit Marshmallows",
      "Lebkuchen Shake",
    ],
  },
];

export function SeasonalHighlights() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Summer

  const next = () => setCurrentIndex((prev) => (prev + 1) % SEASONS.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + SEASONS.length) % SEASONS.length);

  const activeSeason = SEASONS[currentIndex];

  return (
    <section className="bg-[#eedfcc] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full -translate-y-1">
        <WaveDivider fromColor="#f5efe8" toColor="#eedfcc" variant={2} />
      </div>

      <FadeUp delay={0.1} className="max-w-[1200px] mx-auto px-6 pt-12">
        <SectionTitle sub="Im Rhythmus der Jahreszeiten.">
          Saisonale Highlights
        </SectionTitle>

        <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
          {SEASONS.map((season, i) => (
            <button
              key={season.id}
              onClick={() => setCurrentIndex(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                currentIndex === i
                  ? "bg-[#b34832] text-white shadow-md scale-105"
                  : "bg-white text-[#5c3d35] hover:bg-cream border border-peach/50"
              }`}
            >
              {season.icon}
              {season.name}
            </button>
          ))}
        </div>

        <div className="relative bg-white rounded-[32px] p-8 md:p-12 shadow-lg border-2 border-peach/40 max-w-[900px] mx-auto min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeason.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"
            >
              <div>
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-6"
                  style={{ backgroundColor: activeSeason.color }}
                >
                  Das aktuelle Special
                </div>
                <h3 className="font-calistoga text-3xl md:text-4xl text-[#2d1f19] mb-6 leading-tight">
                  {activeSeason.specialTitle}
                </h3>
                <p className="font-nunito text-[#5c3d35] leading-relaxed mb-8">
                  {activeSeason.specialDesc}
                </p>
              </div>

              <div className="bg-[#f5efe8] rounded-3xl p-8 border border-peach/50 relative">
                <div className="absolute -top-4 -right-4 bg-terracotta text-white w-12 h-12 flex items-center justify-center rounded-full font-calistoga text-2xl shadow-md rotate-12">
                  ★
                </div>
                <h4 className="font-calistoga text-xl text-[#2d1f19] mb-6">
                  Weitere {activeSeason.name}s-Highlights
                </h4>
                <ul className="space-y-4">
                  {activeSeason.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        style={{ color: activeSeason.color }}
                        className="font-bold text-xl mt-[-2px]"
                      >
                        •
                      </span>
                      <span className="font-nunito font-bold text-[#5c3d35]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 hidden md:block">
            <button
              onClick={prev}
              className="bg-white text-terracotta w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-cream transition-colors border-2 border-peach/30"
            >
              <ChevronLeft className="w-8 h-8 ml-[-2px]" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 hidden md:block">
            <button
              onClick={next}
              className="bg-white text-terracotta w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-cream transition-colors border-2 border-peach/30"
            >
              <ChevronRight className="w-8 h-8 mr-[-2px]" />
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
