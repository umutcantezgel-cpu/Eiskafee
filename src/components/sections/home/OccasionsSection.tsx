import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import {
  Heart,
  Users,
  Coffee,
  Gift,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";

export function OccasionsSection() {
  const occasions = [
    {
      icon: <Heart className="w-8 h-8 text-[#CC624C]" />,
      title: "Romantische Date-Night",
      description:
        "Gedimmtes Licht, eine süße Bubble Waffle zum Teilen und zwei Löffel. Hey Fede! bietet die perfekte, unkomplizierte Atmosphäre in der Wetzlarer Altstadt, um sich beim ersten oder hundertsten Date ungestört näherzukommen.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#CC624C]" />,
      title: "Sonntags mit der Familie",
      description:
        "Nach einem langen Spaziergang an der Lahn gibt es nichts Schöneres, als sich gemeinsam aufzuwärmen. Unsere familienfreundliche Dessertbar bietet viel Platz, eine Kinderecke und süße Belohnungen, die garantiert jedes Kinderauge zum Leuchten bringen.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#CC624C]" />,
      title: "Der entspannte After-Work",
      description:
        "Lass den anstrengenden Büroalltag einfach hinter dir. Ein aromatischer Espresso, ein frisch gebackener Crêpe und gute Gespräche mit Kollegen in gemütlicher Atmosphäre sind die beste Art, den verdienten Feierabend in Wetzlar einzuläuten.",
    },
    {
      icon: <Gift className="w-8 h-8 text-[#CC624C]" />,
      title: "Unvergessliche Geburtstage",
      description:
        "Feier deinen besonderen Tag bei uns! Mit unseren riesigen Fede Boxen, dekoriert mit funkelnden Wunderkerzen, und einer Auswahl deiner absoluten Lieblingsdesserts wird jeder Geburtstag zu einem süßen Fest, das du und deine Freunde so schnell nicht vergessen werden.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#CC624C]" />,
      title: "Der wöchentliche Studi-Treff",
      description:
        "Als Student der THM brauchst du Nervennahrung für lange Lernsessions. Bei Hey Fede! findest du kostenloses WLAN, bequeme Sitzplätze und großartige Pancake-Stapel, die dir die nötige Energie für deine nächste Klausurenphase liefern.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#CC624C]" />,
      title: "Die süße Shopping-Pause",
      description:
        "Nach einem ausgiebigen Einkaufsbummel durch die Wetzlarer Altstadt gibt es keinen besseren Ort für einen Boxenstopp. Gönn dir eine wohlverdiente Zucker-Dosis in unserer gemütlichen Dessertbar, bevor es mit vollen Taschen weitergeht.",
    },
  ];

  return (
    <section className="bg-cream py-24 border-t border-peach/30">
      <FadeUp delay={0.1} className="max-w-[1200px] mx-auto px-6">
        <SectionTitle sub="Jeder Besuch ein Fest.">
          Beliebte Anlässe
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {occasions.map((occ, i) => (
            <div
              key={i}
              className="bg-[#f5efe8] rounded-3xl p-8 border border-peach/50 hover:border-terracotta/50 transition-colors shadow-sm"
            >
              <div className="bg-cream w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-peach/30">
                {occ.icon}
              </div>
              <h3 className="font-calistoga text-2xl text-[#2d1f19] mb-4">
                {occ.title}
              </h3>
              <p className="font-nunito text-[#5c3d35] leading-relaxed text-[0.95rem]">
                {occ.description}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
