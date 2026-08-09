import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Tisch reservieren in Wetzlar | Hey Fede! Eiscafé Lounge",
  description:
    "Jetzt online deinen Tisch in Wetzlar reservieren bei Hey Fede! Genieße hausgemachtes Eis, Desserts & Kaffee in gemütlicher Lounge-Atmosphäre.",
  path: "/reservierung",
  keywords: [
    "Tisch reservieren Wetzlar",
    "Hey Fede Reservierung",
    "Dessertbar Wetzlar",
    "Eiscafé Wetzlar Tischreservierung",
  ],
});

export default function ReservierungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
