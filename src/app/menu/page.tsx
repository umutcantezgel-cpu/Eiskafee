import { HF_DATA } from "@/lib/data";
import { MenuClient } from "@/components/menu/MenuClient";
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Speisekarte · Bubble Waffles, Crêpes & mehr',
  description: 'Die komplette Speisekarte von Hey Fede! Wetzlar: Bubble Waffles, Crêpes, Pancakes, Eisbecher 500ml, Special Shakes, Fede Boxen und mehr.',
  path: '/menu',
  keywords: ['Speisekarte Hey Fede','Bubble Waffle Sorten','Crêpes Wetzlar','Pancakes Wetzlar','Eisbecher Wetzlar'],
});

export default function MenuPage() {
  return <MenuClient categories={HF_DATA.categories} menu={HF_DATA.menu} />;
}
