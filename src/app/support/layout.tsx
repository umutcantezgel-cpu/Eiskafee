import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Hilfe & Kontakt',
  description: 'FAQ, Kontakt und Hilfe für Hey Fede! Wetzlar. Telefon: 06441 7890426, WhatsApp: 0176 25026991.',
  path: '/support',
  keywords: ['Hey Fede Kontakt','FAQ Hey Fede','Telefon Hey Fede'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
