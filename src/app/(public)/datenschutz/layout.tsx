import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Datenschutzerklärung | Hey Fede! Dessertbar Wetzlar",
  description:
    "Datenschutzerklärung von Hey Fede! Wetzlar: Transparente Informationen zur Verarbeitung deiner Daten nach DSGVO auf unserer Website & beim Vorbestellen.",
  path: "/datenschutz",
  keywords: [
    "Datenschutzerklärung Hey Fede",
    "Datenschutz Wetzlar",
    "DSGVO Dessertbar Wetzlar",
    "Datenschutzerklärung Café Wetzlar",
    "Datenschutzvereinbarung Hey Fede",
  ],
});

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
