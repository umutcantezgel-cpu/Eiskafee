import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Impressum | Hey Fede! Dessertbar & Eiscafé in Wetzlar",
  description:
    "Offizielles Impressum & rechtliche Informationen von Hey Fede! Dessertbar & Eiscafé Wetzlar. Angaben gemäß § 5 DDG & § 18 MStV sowie Kontaktdaten.",
  path: "/impressum",
  keywords: [
    "Impressum Hey Fede",
    "Impressum Dessertbar Wetzlar",
    "Federica Rossi Wetzlar",
    "Kontakt Hey Fede Wetzlar",
  ],
});

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
