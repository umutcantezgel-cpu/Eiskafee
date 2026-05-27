import React from 'react';
import { FadeUp } from '@/components/ui/FadeUp';
import { ValueCard } from '@/components/ui/ValueCard';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { SectionTitle } from '@/components/ui/LayoutBlocks';

export function ValuesSection() {
  return (
    <section className="bg-[#eedfcc] py-20 relative">
      <WaveDivider fromColor="#eedfcc" toColor="#eedfcc" variant={3} />
      <FadeUp delay={0.1} className="max-w-[1200px] mx-auto px-6 pt-11">
        <SectionTitle sub="Was uns antreibt — jeden Tag.">Unsere Werte</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: 'Heart', 
              title: '100% Hausgemacht & Echt', 
              text: 'Wenn wir morgens die Türen in der Wetzlarer Langgasse aufschließen, beginnt unser Tag mit echtem Handwerk. Wir rühren jeden einzelnen Teig für unsere Bubble Waffles und Pancakes frisch und nach eigener Geheimrezeptur an – ganz ohne fertige Backmischungen oder industrielle Zusätze. Selbst unsere cremigen Soßen und feinen Dips köcheln wir mit viel Geduld am eigenen Herd. Wir glauben fest daran, dass echte Liebe zum Produkt keinen Platz für Abkürzungen lässt. Jeder Bissen, den du bei uns genießt, ist das direkte Resultat ehrlicher, traditioneller Handarbeit, die wir mit größter Leidenschaft für dich ausführen.' 
            },
            { 
              icon: 'Sparkles', 
              title: 'Kompromisslose Frische', 
              text: 'Bei der Auswahl unserer Zutaten kennen wir keine Kompromisse. Ob knackige Nüsse, tiefroter Erdbeeren im Sommer oder cremige Milch für unsere legendären Special Shakes – wir achten penibel auf allerhöchste Qualität und tagesaktuelle Frische. Künstliche Aromen, Geschmacksverstärker oder unnötige Konservierungsstoffe haben in unserer Küche absolutes Hausverbot. Stattdessen vertrauen wir auf den reinen, unverfälschten Eigengeschmack bester Rohstoffe. Wenn du bei uns eine Bubble Waffle mit frischen Früchten und unserem hauseigenen Softeis bestellst, schmeckst du sofort den gewaltigen Unterschied: Natur pur, schonend verarbeitet und immer darauf ausgerichtet, dir das intensivste Geschmackserlebnis Wetzlars zu servieren.' 
            },
            { 
              icon: 'MapPin', 
              title: 'Tief in Wetzlar verwurzelt', 
              text: 'Unsere Dessertbar ist mehr als nur ein Café; sie ist unser persönlicher Liebesbrief an die historische Altstadt von Wetzlar. Wir lieben das bunte Treiben rund um den Eisenmarkt, die Spaziergänger auf dem Weg zum Lottehaus und die einzigartige, familiäre Gemeinschaft im Lahn-Dill-Kreis. Wo immer es uns möglich ist, arbeiten wir eng mit lokalen Partnern und Lieferanten zusammen, um die heimische Wirtschaft zu stärken und die Transportwege kurz zu halten. Hey Fede! ist ein lebendiger Treffpunkt für Einheimische und Besucher gleichermaßen – ein Ort, an dem sich die Wetzlarer Geschichte mit modernem, süßem Genuss verbindet.' 
            },
          ].map((v, i) => (
            <ValueCard key={i} icon={v.icon as any} title={v.title} text={v.text} />
          ))}
        </div>
      </FadeUp>
      <div className="mt-[60px]">
        <WaveDivider fromColor="#eedfcc" toColor="#eedfcc" variant={2} flip={true} />
      </div>
    </section>
  );
}
