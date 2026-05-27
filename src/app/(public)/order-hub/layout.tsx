import { buildMetadata } from '@/lib/seo/base-metadata';

export const metadata = buildMetadata({
  title: 'Online Bestellen',
  description: 'Bestelle online bei Hey Fede! Wetzlar — Bubble Waffles, Pancakes & mehr. Abholung oder Lieferung via Lieferando.',
  path: '/order-hub',
  keywords: ['Hey Fede bestellen','Lieferung Wetzlar','Dessert bestellen'],
});

export default function OrderHubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
