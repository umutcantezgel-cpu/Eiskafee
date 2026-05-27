import { buildMetadata } from '@/lib/seo/base-metadata';

export const metadata = buildMetadata({
  title: 'Impressum & Datenschutz',
  description: 'Impressum, Datenschutzerklärung und AGB von Hey Fede! Dessertbar & Café, Wetzlar.',
  path: '/legal',
  keywords: ['Impressum Hey Fede','Datenschutz Hey Fede'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
