import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Besuche uns · Langgasse 68, Wetzlar',
  description: 'So findest du Hey Fede! — Langgasse 68, 35576 Wetzlar. Öffnungszeiten: Mi–Sa 12:00–19:00, So 13:00–19:00. Anfahrt, Parken & Route.',
  path: '/visit',
  keywords: ['Hey Fede Adresse','Langgasse 68 Wetzlar','Öffnungszeiten Hey Fede','Anfahrt Hey Fede'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
