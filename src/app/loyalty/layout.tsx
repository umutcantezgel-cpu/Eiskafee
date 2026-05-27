import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Hey Fede! Coins · Treueprogramm',
  description: 'Sammle Hey Fede! Coins und erhalte exklusive Belohnungen. Unser Treueprogramm für Stammgäste.',
  path: '/loyalty',
  keywords: ['Hey Fede Treueprogramm','Hey Fede Coins'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
