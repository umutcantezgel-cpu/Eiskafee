import { MenuClientWrapper } from "./MenuClientWrapper";
import { buildMetadata } from '@/lib/seo/base-metadata';
import { MenuSEO } from "@/content/seo/MenuSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildBreadcrumbSchema } from "@/lib/seo/schema/pages";
import { buildMenuSchema } from "@/lib/seo/schema/menu";
import { HF_DATA } from "@/lib/data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: 'Speisekarte · Bubble Waffles, Crêpes & mehr',
  description: 'Die komplette Speisekarte von Hey Fede! Wetzlar: Bubble Waffles, Crêpes, Pancakes, Eisbecher 500ml, Special Shakes, Fede Boxen und mehr.',
  path: '/menu',
  keywords: [
    'Speisekarte Hey Fede',
    'Bubble Waffle Sorten',
    'Crêpes Wetzlar',
    'Pancakes Wetzlar',
    'Eisbecher Wetzlar',
    'Special Shakes Lahn-Dill',
    'Waffel Toppings',
    'Dessert Menü',
    'Kaffee Spezialitäten Wetzlar'
  ],
  ogImage: '/og/menu.png'
});

const menuCategories = Object.entries(HF_DATA.menu).map(([key, cat]) => ({
  name: HF_DATA.categories.find(c => c.id === key)?.label || key,
  items: (cat as { items: { name: string; price: string; desc: string }[] }).items,
}));

export default function MenuPage() {
  return (
    <>
      <MenuClientWrapper />
      <SEOContentBlock visible={true} ariaLabel="Wissenswertes rund um unsere Speisekarte">
        <MenuSEO />
      </SEOContentBlock>
      <SchemaScripts schema={[buildMenuSchema(menuCategories), buildBreadcrumbSchema([{ name: 'Speisekarte', path: '/menu' }])]} />
    </>
  );
}
