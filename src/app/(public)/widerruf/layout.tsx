import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Widerrufsbelehrung · Hey Fede!",
  description:
    "Wichtige Informationen zum Widerrufsrecht und Stornierungsmöglichkeiten für frisch zubereitete Speisen bei Hey Fede!.",
  path: "/widerruf",
  keywords: [
    "Widerrufsrecht Hey Fede",
    "Stornierung Waffeln Wetzlar",
    "Verbraucherrechte Café",
  ],
});

export default function WiderrufLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
