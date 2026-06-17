import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Datenschutzerklärung · Hey Fede!",
  description:
    "Informationen zum Schutz deiner persönlichen Daten bei der Nutzung der Hey Fede! Website und des Vorbestellservice.",
  path: "/datenschutz",
  keywords: [
    "Datenschutz Hey Fede",
    "DSGVO Dessertbar Wetzlar",
    "Datenschutzerklärung Café",
  ],
});

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
