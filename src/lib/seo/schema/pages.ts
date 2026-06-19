import { SITE, BUSINESS } from "../business-data";

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description:
      "Hausgemachte Bubble Waffles, Crêpes, Pancakes & Eisbecher in der Dessertbar Wetzlar.",
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "de-DE",
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: [
      BUSINESS.instagramUrl,
      "https://www.tiktok.com/@heyfede_dessertbar",
    ],
  };
}

export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/about#webpage`,
    url: `${SITE.url}/about`,
    name: "Über uns · Die Geschichte hinter Hey Fede!",
    description:
      "Erfahre die Geschichte von Hey Fede! - gegründet von Federica. Frische Desserts, hausgemacht mit Liebe, in der Wetzlarer Altstadt.",
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    about: {
      "@id": `${SITE.url}/about#person`,
    },
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/about#person`,
    name: BUSINESS.founder,
    jobTitle: "Gründerin & Inhaberin",
    worksFor: {
      "@id": `${SITE.url}/#organization`,
    },
    description:
      "Gründerin der Dessertbar Hey Fede! in Wetzlar mit einer Leidenschaft für hausgemachte Desserts und echte Zutaten.",
  };
}

export function buildPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${SITE.url}/visit#place`,
    name: BUSINESS.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    telephone: BUSINESS.phoneTel,
    publicAccess: true,
  };
}

export function buildTouristDestinationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${SITE.url}/visit#touristdestination`,
    name: "Hey Fede! Wetzlar Altstadt",
    description:
      "Ein beliebtes Café und Dessertbar in der malerischen Wetzlarer Altstadt, bekannt für Bubble Waffles und hausgemachte Eisbecher.",
    includesAttraction: {
      "@id": `${SITE.url}/visit#place`,
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE.url}${item.path}`,
      })),
    ],
  };
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
