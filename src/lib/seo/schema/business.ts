import { SITE, BUSINESS } from '../business-data';

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": [
      "Restaurant",
      "CafeOrCoffeeShop",
      "Bakery",
      "FoodEstablishment",
      "LocalBusiness",
      "IceCreamShop"
    ],
    "@id": `${SITE.url}/#localbusiness`,
    name: BUSINESS.name,
    alternateName: [
      "Hey Fede!",
      "Hey Fede",
      "Hey Fedee",
      "Hey Fede Dessertbar",
      "Hey Fede Wetzlar"
    ],
    image: [
      `${SITE.url}/og/home.png`,
      `${SITE.url}/og/default.png`,
      `${SITE.url}/og/menu.png`
    ],
    logo: `${SITE.url}/logo.png`,
    priceRange: BUSINESS.priceRange,
    servesCuisine: BUSINESS.servesCuisine,
    paymentAccepted: BUSINESS.paymentAccepted.join(', '),
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude
    },
    hasMap: BUSINESS.googleMapsUrl,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        closes: "00:00",
        opens: "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        closes: "00:00",
        opens: "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: BUSINESS.openingHours.wednesday?.opens,
        closes: BUSINESS.openingHours.wednesday?.closes
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: BUSINESS.openingHours.thursday?.opens,
        closes: BUSINESS.openingHours.thursday?.closes
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: BUSINESS.openingHours.friday?.opens,
        closes: BUSINESS.openingHours.friday?.closes
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: BUSINESS.openingHours.saturday?.opens,
        closes: BUSINESS.openingHours.saturday?.closes
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: BUSINESS.openingHours.sunday?.opens,
        closes: BUSINESS.openingHours.sunday?.closes
      }
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Wetzlar",
        sameAs: "https://www.wikidata.org/wiki/Q3950"
      },
      {
        "@type": "AdministrativeArea",
        name: "Lahn-Dill-Kreis",
        sameAs: "https://www.wikidata.org/wiki/Q7059"
      },
      {
        "@type": "AdministrativeArea",
        name: "Hessen",
        sameAs: "https://www.wikidata.org/wiki/Q1199"
      }
    ],
    foundingDate: BUSINESS.foundingYear,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Desserts & Bubble Waffles",
      url: `${SITE.url}/menu`
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.toString(),
      reviewCount: BUSINESS.reviewCount.toString()
    },
    potentialAction: [
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: BUSINESS.lieferandoUrl,
          inLanguage: "de",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ]
        },
        deliveryMethod: [
          "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
        ]
      },
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/visit`,
          inLanguage: "de"
        }
      }
    ],
    sameAs: [
      BUSINESS.instagramUrl,
      "https://www.tiktok.com/@heyfede_wetzlar",
      "https://www.facebook.com/heyfede",
      BUSINESS.googleMapsUrl,
      BUSINESS.lieferandoUrl
    ],
    accessibilityFeature: [
      "WheelchairAccessible"
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Family Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vegetarian", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vegan", value: true },
      { "@type": "LocationFeatureSpecification", name: "Halal", value: true },
      { "@type": "LocationFeatureSpecification", name: "Takeaway", value: true },
      { "@type": "LocationFeatureSpecification", name: "Delivery", value: true }
    ]
  };
}
