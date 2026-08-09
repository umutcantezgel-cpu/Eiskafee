import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata = buildMetadata({
  title: "Kontakt & Anfahrt | Hey Fede Dessertbar & Café Wetzlar",
  description:
    "Kontaktiere Hey Fede! Dessertbar & Café in Wetzlar. Schreib uns per Formular, WhatsApp oder E-Mail. Wir freuen uns auf deine Nachricht!",
  path: "/kontakt",
  keywords: [
    "Hey Fede Kontakt",
    "Kontakt Dessertbar Wetzlar",
    "Anfrage Hey Fede",
    "Catering Anfrage Wetzlar",
    "WhatsApp Hey Fede",
  ],
});

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
