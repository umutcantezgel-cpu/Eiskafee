import { buildMetadata } from "@/lib/seo/base-metadata";
import { BUSINESS } from "@/lib/seo/business-data";

export const metadata = buildMetadata({
  title: "Hilfe & Support | FAQ & Kundenservice | Hey Fede! Wetzlar",
  description:
    "Du hast Fragen zu Desserts, Lieferung oder Reservierung bei Hey Fede! in Wetzlar? Hier findest du schnelle Antworten im FAQ oder kontaktierst uns direkt.",
  path: "/support",
  keywords: [
    "Hey Fede Support",
    "Hilfe & Support Wetzlar",
    "FAQ Hey Fede",
    "Kontakt Hey Fede Wetzlar",
    "Kundenservice Hey Fede",
    "Waffeln Wetzlar Kontakt",
    "Öffnungszeiten Hey Fede",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
