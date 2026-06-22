import { buildMetadata } from "@/lib/seo/base-metadata";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";

export const metadata = buildMetadata({
  title: `Besuche uns · ${BUSINESS.street}, ${BUSINESS.city}`,
  description: `So findest du Hey Fede! - ${FULL_ADDRESS}. Öffnungszeiten: Mo-Fr 12:00-20:00, Sa-So 10:00-20:00. Anfahrt, Parken & Route.`,
  path: "/visit",
  keywords: [
    "Hey Fede Adresse",
    `${BUSINESS.street} ${BUSINESS.city}`,
    "Öffnungszeiten Hey Fede",
    "Anfahrt Hey Fede",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
