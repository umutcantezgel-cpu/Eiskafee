import { buildMetadata } from '@/lib/seo/base-metadata';

export const metadata = buildMetadata({
  title: 'Gutscheine · Hey Fede! Wetzlar',
  description: 'Verschenke süße Momente! Bestelle unsere Gutscheine bequem per E-Mail zum Selbstausdrucken oder im edlen Umschlag nach Hause.',
  path: '/gutscheine',
  keywords: ['Gutschein Hey Fede', 'Geschenkkarte Wetzlar', 'Dessert Gutschein'],
});

export default function GutscheineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
