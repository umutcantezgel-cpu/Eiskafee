import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Dessert Gutschein Wetzlar | Geschenkkarte | Hey Fede!",
  description:
    "Verschenke süße Momente mit einem Hey Fede! Gutschein in Wetzlar. Direkt online bestellen per E-Mail zum Ausdrucken oder per Post im edlen Umschlag.",
  path: "/gutscheine",
  keywords: [
    "Gutschein Wetzlar",
    "Dessert Gutschein Wetzlar",
    "Geschenkkarte Wetzlar",
    "Eiscafé Gutschein Wetzlar",
    "Hey Fede Gutschein",
    "Geschenkgutschein Wetzlar",
  ],
});

export default function GutscheineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
