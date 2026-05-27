import { SITE, BUSINESS, FULL_ADDRESS, DIRECTIONS_URL } from './business-data';

/* ═══════════════════════════════════════════════════════════
   JSON-LD Schema Templates for Hey Fede!
   ═══════════════════════════════════════════════════════════ */

/** Opening Hours Specifications */
const openingHoursSpec = () => {
  const dayMap: Record<string, string> = {
    wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday',
    saturday: 'Saturday', sunday: 'Sunday',
  };
  return Object.entries(BUSINESS.openingHours)
    .filter(([, h]) => h !== null)
    .map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${dayMap[day]}`,
      opens: hours!.opens,
      closes: hours!.closes,
    }));
};

/* ─── 1. LocalBusiness (Restaurant + Multi-Type) ─── */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'CafeOrCoffeeShop', 'Bakery', 'IceCreamShop'],
  '@id': `${SITE.url}#business`,
  name: SITE.name,
  alternateName: ['Hey Fede', 'Hey Fede! Wetzlar', 'Hey Fede Dessertbar'],
  description: 'Hausgemachte Bubble Waffles, Crêpes, Pancakes, Eisbecher und Special Shakes in Wetzlar. Familiengeführte Dessertbar in der Langgasse 68 — frisch, lecker, mit Liebe.',
  url: SITE.url,
  telephone: BUSINESS.phoneTel,
  email: BUSINESS.email,
  image: [`${SITE.url}/og/default.png`],
  logo: `${SITE.url}/favicon.ico`,
  priceRange: BUSINESS.priceRange,
  servesCuisine: BUSINESS.servesCuisine,
  paymentAccepted: BUSINESS.paymentAccepted,
  currenciesAccepted: 'EUR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  hasMap: BUSINESS.googleMapsUrl,
  openingHoursSpecification: openingHoursSpec(),
  areaServed: [
    { '@type': 'City', name: 'Wetzlar', sameAs: 'https://www.wikidata.org/wiki/Q3950' },
    { '@type': 'City', name: 'Gießen', sameAs: 'https://www.wikidata.org/wiki/Q3955' },
    { '@type': 'AdministrativeArea', name: 'Lahn-Dill-Kreis' },
  ],
  containedInPlace: [
    { '@type': 'City', name: 'Wetzlar', sameAs: 'https://www.wikidata.org/wiki/Q3950' },
    { '@type': 'AdministrativeArea', name: 'Lahn-Dill-Kreis', sameAs: 'https://www.wikidata.org/wiki/Q7059' },
    { '@type': 'State', name: 'Hessen', sameAs: 'https://www.wikidata.org/wiki/Q1199' },
  ],
  founder: {
    '@type': 'Person',
    name: BUSINESS.founder,
  },
  foundingDate: BUSINESS.foundingYear,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(BUSINESS.rating),
    reviewCount: String(BUSINESS.reviewCount),
    bestRating: '5',
    worstRating: '1',
  },
  potentialAction: [
    {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/order-hub`,
        inLanguage: 'de-DE',
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      deliveryMethod: [
        'https://schema.org/OnSitePickup',
        'https://schema.org/ParcelService',
      ],
    },
    {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/visit` },
    },
  ],
  sameAs: [
    BUSINESS.instagramUrl,
    BUSINESS.googleMapsUrl,
    BUSINESS.lieferandoUrl,
  ],
  amenityFeature: Object.entries(BUSINESS.amenities)
    .filter(([, v]) => v)
    .map(([k]) => ({
      '@type': 'LocationFeatureSpecification',
      name: k, value: true,
    })),
  publicAccess: true,
  smokingAllowed: false,
  isAccessibleForFree: true,
  keywords: 'Bubble Waffle Wetzlar, Dessertbar, Café, Pancakes, Crêpes, Eisbecher, Hausgemacht, Langgasse',
};

/* ─── 2. WebSite Schema ─── */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}#website`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  inLanguage: SITE.language,
  publisher: { '@id': `${SITE.url}#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/menu?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

/* ─── 3. Organization Schema ─── */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}#org`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.ico`,
  founder: { '@type': 'Person', name: BUSINESS.founder },
  foundingDate: BUSINESS.foundingYear,
  address: localBusinessSchema.address,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    contactType: 'customer service',
    availableLanguage: ['German'],
  },
  sameAs: localBusinessSchema.sameAs,
  knowsAbout: [
    'Bubble Waffles', 'Pancakes', 'Crêpes', 'Eisbecher', 'Milkshakes',
    'Kaffee', 'Desserts', 'Wetzlar Gastronomie',
  ],
};

/* ─── 4. Breadcrumb Generator ─── */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hey Fede!', item: SITE.url },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE.url}${item.path}`,
      })),
    ],
  };
}

/* ─── 5. FAQ Schema Generator ─── */
export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

/* ─── 6. Menu Schema ─── */
export function menuSchema(categories: { name: string; items: { name: string; price: string; desc: string }[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${SITE.url}/menu#menu`,
    name: 'Hey Fede! Speisekarte',
    url: `${SITE.url}/menu`,
    inLanguage: 'de',
    hasMenuSection: categories.map(cat => ({
      '@type': 'MenuSection',
      name: cat.name,
      hasMenuItem: cat.items.map(item => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.desc,
        offers: {
          '@type': 'Offer',
          price: item.price.replace(/[^0-9,.]/g, '').replace(',', '.'),
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      })),
    })),
  };
}

/* ─── 7. Wetzlar Nearby Attractions ─── */
export const nearbyAttractionsSchema = [
  { '@type': 'TouristAttraction', name: 'Wetzlarer Dom', sameAs: 'https://www.wikidata.org/wiki/Q876773' },
  { '@type': 'TouristAttraction', name: 'Lottehaus', sameAs: 'https://www.wikidata.org/wiki/Q1873041' },
  { '@type': 'TouristAttraction', name: 'Alte Lahnbrücke', sameAs: 'https://www.wikidata.org/wiki/Q1305263' },
];
