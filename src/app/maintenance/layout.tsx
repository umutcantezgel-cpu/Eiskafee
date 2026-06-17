import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* We intentionally omit the Header, Footer, CartDrawer etc. */}
      <main
        id="main-content"
        role="main"
        className="flex-grow relative z-10 min-h-screen"
      >
        {children}
        <SpeedInsights />
      </main>
    </>
  );
}
