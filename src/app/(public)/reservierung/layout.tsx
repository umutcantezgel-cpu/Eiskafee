import { buildMetadata } from '@/lib/seo/base-metadata';

export const metadata = buildMetadata({
  title: 'Tisch reservieren · Hey Fede! Wetzlar',
  description: 'Reserviere jetzt deinen Tisch in unserer Dessertbar in der Wetzlarer Altstadt. Perfekt für Dates, Familientreffen oder Geburtstage.',
  path: '/reservierung',
  keywords: ['Tisch reservieren Wetzlar', 'Hey Fede Reservierung', 'Dessertbar Wetzlar'],
});

export default function ReservierungLayout({ children }: { children: React.ReactNode }) {
  return children;
}
