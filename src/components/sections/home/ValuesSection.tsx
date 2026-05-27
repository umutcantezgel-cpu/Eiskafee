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
            { icon: 'Sparkles', title: 'Frische Zutaten', text: 'Täglich frisch verarbeitet. Keine Fertigprodukte — nur echte Zutaten und echte Qualität.' },
            { icon: 'Heart',    title: 'Mit Liebe gemacht', text: 'Jede Bubble Waffle, jeder Shake — mit Sorgfalt und Begeisterung zubereitet. Das schmeckt man.' },
            { icon: 'Baby',     title: 'Für alle', text: 'Familien, Freunde, alle Generationen. Mit Kinderecke, Wickelraum und einem herzlichen Empfang.' },
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
