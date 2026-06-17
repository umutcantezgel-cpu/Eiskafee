import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Impressum · Hey Fede!",
  description:
    "Rechtliche Angaben und Impressum für Hey Fede! Dessertbar & Café in Wetzlar.",
  path: "/impressum",
  keywords: [
    "Impressum Hey Fede",
    "Federica Rossi Wetzlar",
    "Kontakt Café Altstadt",
  ],
});

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
