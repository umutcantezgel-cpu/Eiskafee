import React from "react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cookie-Richtlinie & Cookie-Nutzung | Hey Fede! Wetzlar",
  description:
    "Alle Details zur Nutzung von Cookies und Web-Technologien bei Hey Fede! in Wetzlar. Transparente Cookie-Richtlinie & volle Kontrolle deiner Daten.",
  path: "/cookie-richtlinie",
  keywords: [
    "Cookie Richtlinie Hey Fede",
    "Cookie Richtlinie Wetzlar",
    "Datenschutz Cookies Hey Fede",
    "Cookie Einstellungen Hey Fede",
  ],
});

export default function CookieRichtlinieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
