import React from "react";
import { AboutSEO } from "@/content/seo/AboutSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionTitle, StampBadge } from "@/components/ui/LayoutBlocks";
import { FoodIcon } from "@/components/ui/FoodIcon";
import { LevelMap } from "@/components/ui/LevelMap";
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Über uns · Die Geschichte hinter Hey Fede!',
  description: 'Erfahre die Geschichte von Hey Fede! — gegründet von Federica. Frische Desserts, hausgemacht mit Liebe, in der Wetzlarer Altstadt.',
  path: '/about',
  keywords: ['Hey Fede Geschichte','Dessertbar Gründerin','Federica Wetzlar'],
});

export default function AboutPage() {
  const sections = [
    { id: 'about-hero',   label: 'Start' },
    { id: 'about-story',  label: 'Story' },
    { id: 'about-values', label: 'Werte' },
    { id: 'about-home',   label: 'Zuhause' },
  ];

  return (
    <>
    <div className="min-h-screen bg-[#f5efe8] animate-fade-in relative">
      <LevelMap sections={sections} />

      {/* Hero */}
      <section id="about-hero" className="bg-[#eedfcc] pt-[110px] px-6 pb-[88px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] dot-bg" />
        <div className="absolute top-[8%] right-[3%] w-[280px] h-[280px] bg-[#E4C0A8] opacity-[0.55] animate-blob-float" 
             style={{ borderRadius: '58% 42% 52% 48%/48% 58% 42% 52%' }} />
        <div className="absolute bottom-[10%] -left-[3%] w-[180px] h-[180px] bg-[#CC624C] opacity-10" 
             style={{ borderRadius: '45% 55% 40% 60%' }} />

        <div className="relative z-10 max-w-[840px] mx-auto">
          <div className="mb-4">
            <StampBadge text="Seit 2023 in Wetzlar" size={88} rotate={-6} color="#CC624C" />
          </div>
          <h1 className="font-calistoga text-[clamp(2.4rem,6vw,4.2rem)] text-[#2d1f19] leading-[1.05] mb-5">
            Hinter Hey Fede! steckt<br/>
            <span className="text-[#CC624C]">echte Leidenschaft.</span>
          </h1>
          <p className="font-nunito text-[clamp(0.95rem,1.4vw,1.05rem)] text-[#5c3d35] leading-[1.8] max-w-[600px]">
            Kein Fast-Food-Dessert, sondern handgemachte Kreationen mit Herz.
            Entstanden aus der einfachen Frage: Was fehlt Wetzlar?
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 44" className="block w-full h-[44px]" preserveAspectRatio="none">
            <path d="M0,22 C360,48 720,0 1080,26 C1260,38 1380,16 1440,22 L1440,44 L0,44 Z" fill="#f5efe8" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section id="about-story" className="py-20">
        <FadeUp className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="overflow-hidden aspect-[4/5]" style={{ borderRadius: '44% 56% 52% 48%/50% 46% 54% 50%' }}>
                <FoodIcon icon="Heart" label="Inhaberin Fede\nPorträt / Team-Foto" size="sq" shape="rounded-none" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-4 -left-3 bg-[#eedfcc] rounded-2xl px-5 py-4 shadow-[0_8px_28px_rgba(45,31,25,0.1)]">
                <div className="font-calistoga text-[1.08rem] text-[#CC624C]">Fede</div>
                <div className="font-nunito text-[0.73rem] text-[#9a7060] font-bold mt-0.5">
                  Gründerin & Inhaberin
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <h2 className="font-calistoga text-[clamp(1.6rem,3vw,2.4rem)] text-[#2d1f19] mb-5 leading-[1.12]">
                Die Geschichte<br/>von Hey Fede!
              </h2>
              <p className="font-nunito text-[0.97rem] text-[#5c3d35] leading-[1.88] mb-4.5">
                Alles begann mit einer einfachen Frage: Was fehlt Wetzlar? Eine gemütliche Dessertbar, in der man sich wie zu Hause fühlt. Mit Liebe zum Detail, frischen Zutaten und der tiefen Überzeugung, dass das Beste immer selbst gemacht ist.
              </p>
              <p className="font-nunito text-[0.97rem] text-[#5c3d35] leading-[1.88] mb-8">
                Seit der Eröffnung im September 2023 ist Hey Fede! ein Ort geworden, an dem Generationen zusammenkommen.
              </p>
              <div className="flex flex-wrap gap-7">
                {[
                  ['84+', 'Google Reviews'],
                  ['4,8★', 'Bewertung'],
                  ['Sep. 2023', 'Eröffnung']
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-calistoga text-[2.2rem] text-[#CC624C] leading-none">{n}</div>
                    <div className="font-nunito text-[0.74rem] text-[#9a7060] font-bold mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Values */}
      <section id="about-values" className="bg-[#eedfcc] py-20 relative">
        <WaveDivider fromColor="#eedfcc" toColor="#eedfcc" variant={3} />
        <FadeUp delay={0.1} className="max-w-[1200px] mx-auto px-6 pt-11">
          <SectionTitle sub="Was uns antreibt — jeden Tag.">Unsere Werte</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'Sparkles', title: 'Frische Zutaten', text: 'Täglich frisch verarbeitet. Keine Fertigprodukte — nur echte Zutaten und echte Qualität.' },
              { icon: 'Heart',    title: 'Mit Liebe gemacht', text: 'Jede Bubble Waffle, jeder Shake — mit Sorgfalt und Begeisterung zubereitet. Das schmeckt man.' },
              { icon: 'Baby',     title: 'Für alle', text: 'Familien, Freunde, alle Generationen. Mit Kinderecke, Wickelraum und einem herzlichen Empfang.' },
            ].map((v, i) => {
              const LIcon = (require('lucide-react') as any)[v.icon] || require('lucide-react').Sparkles;
              return (
                <div key={i} className="bg-[#f5efe8] rounded-[22px] p-[30px_24px] shadow-[0_3px_14px_rgba(45,31,25,0.05)]">
                  {/* Bissspur accent icon */}
                  <div className="relative w-12 h-12 mb-4.5">
                    <div className="w-12 h-12 bg-[#E4C0A8] rounded-full flex items-center justify-center">
                      <LIcon size={22} strokeWidth={1.5} color="#CC624C" />
                    </div>
                    {/* bite notch */}
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#eedfcc] rounded-full border-2 border-[#f5efe8]" />
                  </div>
                  <h3 className="font-calistoga text-[1.22rem] text-[#2d1f19] mb-2.5">{v.title}</h3>
                  <p className="font-nunito text-[0.86rem] text-[#7a5a52] leading-[1.7]">{v.text}</p>
                </div>
              );
            })}
          </div>
        </FadeUp>
        <div className="mt-[60px]">
          <WaveDivider fromColor="#eedfcc" toColor="#eedfcc" variant={2} flip={true} />
        </div>
      </section>

      {/* Photo mosaic */}
      <section id="about-home" className="bg-[#eedfcc] pb-20">
        <FadeUp className="max-w-[1200px] mx-auto px-6">
          <SectionTitle sub="Langgasse 68 · 35576 Wetzlar">Unser Zuhause in Wetzlar</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] grid-rows-auto gap-4">
            <div className="md:row-span-2 rounded-[22px] overflow-hidden min-h-[320px]">
              <FoodIcon icon="MapPin" label="Außenansicht\nHey Fede! Wetzlar" size="sq" shape="rounded-none" className="h-full min-h-[320px]" />
            </div>
            {[
              ['Coffee', 'Innenraum\nCafé-Bereich'],
              ['Baby', 'Kinderecke'],
              ['Cake', 'Theke & Vitrine'],
              ['Sparkles', 'Detail-Shot']
            ].map(([ic, lb]) => (
              <div key={ic} className="rounded-[18px] overflow-hidden min-h-[148px]">
                <FoodIcon icon={ic} label={lb} size="sq" shape="rounded-none" className="h-full min-h-[148px]" />
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blobFloat{0%,100%{transform:translate(0,0)}33%{transform:translate(6px,-10px)}66%{transform:translate(-5px,7px)}}
        .animate-blob-float { animation: blobFloat 9s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
      `}} />
    </div>
      <SEOContentBlock visible={true} ariaLabel="Die Geschichte von Hey Fede! Dessertbar Wetzlar">
        <AboutSEO />
      </SEOContentBlock>
      <JsonLd data={[breadcrumbSchema([{ name: 'Über uns', path: '/about' }])]} />
    </>
  );
}
