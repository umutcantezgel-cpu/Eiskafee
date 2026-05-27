import { buildMetadata } from '@/lib/seo/base-metadata';
import { BUSINESS } from '@/lib/seo/business-data';

export const metadata = buildMetadata({
  title: 'Hilfe & Kontakt',
  description: `FAQ, Kontakt und Hilfe für Hey Fede! Wetzlar. Telefon: ${BUSINESS.phone}, WhatsApp: ${BUSINESS.whatsappDisplay}.`,
  path: '/support',
  keywords: ['Hey Fede Kontakt','FAQ Hey Fede','Telefon Hey Fede'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
