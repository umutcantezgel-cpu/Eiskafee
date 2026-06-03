"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MenuFilter } from "@/components/sections/menu/MenuFilter";
import { ProductGrid } from "@/components/sections/menu/ProductGrid";
import { HF_DATA } from "@/lib/data";
import { GiganticTypography } from "@/components/ui/GiganticTypography";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function MenuContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("bubble");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && HF_DATA.categories.find((c) => c.id === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    router.replace(`/menu?category=${catId}`, { scroll: false });
  };

  return (
    <div className="bg-transparent min-h-[200vh] relative z-10 font-nunito">
      {/* Massive Scroll Hero */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20">
        <div className="absolute right-0 top-40 w-48 h-48 opacity-70 pointer-events-none transform rotate-[20deg] z-0">
          <Image
            src="/assets/illustrations/Hand illustration.svg"
            alt="hand"
            fill
            className="object-contain"
          />
        </div>

        <GiganticTypography
          as="h1"
          highlightWords={["Süßes!"]}
          highlightColor="#b34832"
          className="text-center justify-center max-w-[1200px] mx-auto z-10"
        >
          Gönn dir was Süßes!
        </GiganticTypography>

        <p className="font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80 z-10">
          Alles frisch, hausgemacht und mit viel Liebe zubereitet. Wähl deinen
          Favoriten.
        </p>
      </section>

      {/* Menu Area */}
      <section className="px-6 pb-40 max-w-[1400px] mx-auto relative z-20">
        <div className="absolute -left-32 top-40 w-[600px] h-[600px] opacity-30 pointer-events-none z-[-1]">
          <Image
            src="/assets/illustrations/Form hellbeige.svg"
            alt="shape"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-cream/90 backdrop-blur-2xl rounded-[40px] shadow-clay border border-peach/50 overflow-hidden pb-10">
          <MenuFilter
            categories={HF_DATA.categories}
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
          />
          <div className="px-6 md:px-10 mt-10">
            <ProductGrid activeCategory={activeCategory} />
          </div>
        </div>
      </section>
    </div>
  );
}

export function MenuClientWrapper() {
  return (
    <Suspense fallback={<div className="min-h-[200vh] bg-transparent" />}>
      <MenuContent />
    </Suspense>
  );
}
