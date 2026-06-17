import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Allgemeine Geschäftsbedingungen (AGB) · Hey Fede!",
  description:
    "Die Allgemeinen Geschäftsbedingungen für Vorbestellungen (Click & Collect) bei Hey Fede! Dessertbar & Café.",
  path: "/agb",
  keywords: [
    "AGB Hey Fede",
    "Click and Collect Bedingungen Wetzlar",
    "Rechtliches Dessertbar",
  ],
});

export default function AGBLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
