import { SITE, BUSINESS } from '../business-data';

export function buildMenuSchema(menuCategories: { name: string; items: { name: string; price: string; desc: string }[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE.url}/menu#menu`,
    name: `Speisekarte - ${BUSINESS.name}`,
    description: "Die komplette Speisekarte mit Bubble Waffles, Crêpes, Pancakes und Eisbechern.",
    mainEntityOfPage: `${SITE.url}/menu`,
    hasMenuSection: menuCategories.map((cat, index) => ({
      "@type": "MenuSection",
      name: cat.name,
      hasMenuItem: cat.items.map(item => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.desc,
        offers: {
          "@type": "Offer",
          price: item.price.replace(',', '.').replace(/[^0-9.]/g, ''),
          priceCurrency: "EUR"
        }
      }))
    }))
  };
}
