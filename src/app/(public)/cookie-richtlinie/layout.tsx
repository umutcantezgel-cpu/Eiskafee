import React from "react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Cookie-Richtlinie · Hey Fede!",
  description:
    "Erfahre mehr über die Verwendung von Cookies und ähnlichen Technologien auf der Website von Hey Fede!.",
  path: "/cookie-richtlinie",
  keywords: [
    "Cookies Hey Fede",
    "Cookie Richtlinie Café Wetzlar",
    "Datenschutz Cookies",
  ],
});

export default function CookieRichtlinieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
