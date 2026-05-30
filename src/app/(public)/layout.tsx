import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { ScrollProgressBar } from "@/components/atoms/ScrollProgressBar";
import { TransitionCurtain } from "@/components/ui/TransitionCurtain";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { BitemarkMaskDefs } from "@/components/atoms/BitemarkSystem";
import { PhysicsPlaygroundContainer } from "@/components/ui/PhysicsPlaygroundContainer";
import { ScrollLavaBackground } from "@/components/ui/ScrollLavaBackground";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollLavaBackground />
      <ScrollProgressBar />
      <BitemarkMaskDefs />
      <SplashScreen />
      <TransitionCurtain />
      <Header />
      <main id="main-content" className="flex-grow pt-[68px] relative z-10">
        {children}
        <SpeedInsights />
      </main>
      <Footer />
      <CartDrawer />
      <PhysicsPlaygroundContainer />
    </>
  );
}
