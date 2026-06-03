import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";

export function StatsSection() {
  const stats = [
    { label: "Google Reviews", value: "4.8", suffix: "/ 84+", icon: "★" },
    { label: "Handgemachte Items", value: "39", suffix: "", icon: "🧇" },
    {
      label: "In Wetzlar",
      value: "2023",
      suffix: "Seit",
      icon: "📍",
      prefix: true,
    },
  ];

  return (
    <section className="bg-[#f5efe8] py-20 border-t border-peach/30">
      <FadeUp delay={0.1} className="max-w-[1200px] mx-auto px-6">
        <SectionTitle sub="Zahlen, die für uns sprechen.">
          Hey Fede! im Überblick
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-peach/40 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="font-calistoga text-5xl text-[#b34832] mb-2 flex items-baseline justify-center gap-1">
                {stat.prefix && (
                  <span className="text-2xl text-[#9a7060] font-nunito">
                    {stat.suffix}
                  </span>
                )}
                {stat.value}
                {!stat.prefix && (
                  <span className="text-2xl text-[#9a7060] font-nunito">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="font-nunito font-bold text-[#5c3d35] uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
