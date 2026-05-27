import type { Metadata } from "next";
import { SchemaScripts } from '@/components/seo/SchemaScripts';
import { buildLocalBusinessSchema } from '@/lib/seo/schema/business';
import { buildWebSiteSchema, buildOrganizationSchema } from '@/lib/seo/schema/pages';
import { ToastContainer } from "@/components/molecules/feedback/Toast";
import { AchievementBanner } from "@/components/molecules/feedback/AchievementBanner";
import CookieConsentBanner from "@/components/legal/CookieConsent";
import CookieRevoke from "@/components/legal/CookieRevoke";
import ScriptManager from "@/components/legal/ScriptManager";
import { SyrupCursor } from "@/components/ui/SyrupCursor";
import { A11yProvider } from "@/components/providers/A11yProvider";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@/styles/cookieconsent-theme.css";
import "@/styles/google-maps-overrides.css";

import { SITE, BUSINESS, FULL_ADDRESS } from '@/lib/seo/business-data';

export const metadata: Metadata = {
  title: {
    template: `%s · ${SITE.shortName} Wetzlar`,
    default: `${SITE.shortName} · Hausgemachte Bubble Waffles & Desserts in Wetzlar`,
  },
  description: `Hey Fede! Dessertbar & Café in Wetzlar — hausgemachte Bubble Waffles, Crêpes, Pancakes, Eisbecher und Special Shakes. ${FULL_ADDRESS}.`,
  metadataBase: new URL(SITE.url),
  formatDetection: { telephone: false, address: false, email: false },
  other: {
    'geo.region': BUSINESS.region,
    'geo.placename': BUSINESS.city,
    'geo.position': `${BUSINESS.latitude};${BUSINESS.longitude}`,
    'ICBM': `${BUSINESS.latitude}, ${BUSINESS.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className="h-full antialiased"
    >
      <head>
      </head>
      <body className="min-h-full flex flex-col m-0 p-0 overflow-x-hidden font-body bg-bg-creme text-terracotta">
        <A11yProvider>
          <SkipToContent />
          <ToastContainer />
          {children}
          <CookieConsentBanner />
          <CookieRevoke />
          <ScriptManager />
          <AchievementBanner />
          <SyrupCursor />
          <Analytics />
          <SpeedInsights />
          <SchemaScripts schema={[buildLocalBusinessSchema(), buildWebSiteSchema(), buildOrganizationSchema()]} />
        </A11yProvider>
      </body>
    </html>
  );
}
