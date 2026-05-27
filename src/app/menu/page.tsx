import { HF_DATA } from "@/lib/data";
import { MenuClient } from "@/components/menu/MenuClient";
import { buildMetadata } from '@/lib/seo/metadata';
import { MenuSEO } from "@/content/seo/MenuSEO";
import { SEOContentBlock } from "@/components/seo/SEOContentBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, menuSchema } from "@/lib/seo/schemas";

export const metadata = buildMetadata({
  title: 'Speisekarte · Bubble Waffles, Crêpes & mehr',
  description: 'Die komplette Speisekarte von Hey Fede! Wetzlar: Bubble Waffles, Crêpes, Pancakes, Eisbecher 500ml, Special Shakes, Fede Boxen und mehr.',
  path: '/menu',
  keywords: ['Speisekarte Hey Fede','Bubble Waffle Sorten','Crêpes Wetzlar','Pancakes Wetzlar','Eisbecher Wetzlar'],
});

const menuSchemaData = menuSchema(
  Object.entries(HF_DATA.menu).map(([key, cat]) => ({
    name: HF_DATA.categories.find(c => c.id === key)?.label || key,
    items: (cat as { items: { name: string; price: string; desc: string }[] }).items,
  }))
);

export default function MenuPage() {
  return (
    <>
      <MenuClient categories={HF_DATA.categories} menu={HF_DATA.menu} />
      <SEOContentBlock visible={true} ariaLabel="Wissenswertes rund um unsere Speisekarte">
        <MenuSEO />
      </SEOContentBlock>
      <JsonLd data={[menuSchemaData, breadcrumbSchema([{ name: 'Speisekarte', path: '/menu' }])]} />
    </>
  );
}
