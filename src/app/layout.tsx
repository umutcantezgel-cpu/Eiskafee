import type { Metadata } from "next";
import { Calistoga, Nunito } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AuthContextProvider } from "@/lib/firebase/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SyrupCursor } from "@/components/ui/SyrupCursor";
import { AchievementBanner } from "@/components/ui/AchievementBanner";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { TransitionProvider } from "@/components/ui/TransitionProvider";
import Script from "next/script";
import { BitemarkMaskDefs } from "@/components/atoms/BitemarkSystem";
import CookieConsentBanner from "@/components/legal/CookieConsent";
import CookieRevoke from "@/components/legal/CookieRevoke";
import ScriptManager from "@/components/legal/ScriptManager";
import "./globals.css";
import "@/styles/cookieconsent-theme.css";
import "@/styles/google-maps-overrides.css";

const calistoga = Calistoga({
  weight: "400",
  variable: "--font-calistoga",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hey Fede! | Premium Waffeln & Desserts in Wetzlar",
  description: "Entdecke bei Hey Fede! in Wetzlar frisch zubereitete Premium Waffeln und hausgemachte Desserts. Genieße Qualität mit Liebe zum Detail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${calistoga.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-full flex flex-col m-0 p-0 overflow-x-hidden font-sans">
        <BitemarkMaskDefs />
        <SplashScreen />
        <AuthContextProvider>
          <TransitionProvider>
            <SyrupCursor />
          <Header />
          <main className="flex-grow pt-[68px]">
            {children}
            <SpeedInsights />
          </main>
          <Footer />
          <CartDrawer />
            <AchievementBanner />
          </TransitionProvider>
        </AuthContextProvider>
        <CookieConsentBanner />
        <CookieRevoke />
        <ScriptManager />
      </body>
    </html>
  );
}
