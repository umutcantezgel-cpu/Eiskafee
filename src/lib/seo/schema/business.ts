import { SITE, BUSINESS } from "../business-data";
import { WETZLAR_ENTITIES, LANDMARKS } from "../wetzlar-entities";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": [
      "Restaurant",
      "CafeOrCoffeeShop",
      "Bakery",
      "FoodEstablishment",
      "LocalBusiness",
      "IceCreamShop",
    ],
    "@id": `${SITE.url}/#localbusiness`,
    name: BUSINESS.name,
    alternateName: [
      "Hey Fede!",
      "Hey Fede",
      "Hey Fedee",
      "Hey Fede Dessertbar",
      "Hey Fede Wetzlar",
    ],
    image: [
      `${SITE.url}/assets/photos/laden-theke-innenraum-hey-fede-wetzlar.jpg`,
      `${SITE.url}/assets/photos/laden-eisvitrine-speisekarte-hey-fede-wetzlar.jpg`,
      `${SITE.url}/assets/photos/laden-sitzbereich-neon-mooswand-hey-fede-wetzlar.jpg`,
      `${SITE.url}/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg`,
      `${SITE.url}/og/home.png`,
      `${SITE.url}/og/default.png`,
      `${SITE.url}/og/menu.png`,
    ],
    logo: `${SITE.url}/logo.png`,
    priceRange: BUSINESS.priceRange,
    servesCuisine: BUSINESS.servesCuisine,
    paymentAccepted: BUSINESS.paymentAccepted.join(", "),
    currenciesAccepted: "EUR",
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
    hasMap: BUSINESS.googleMapsUrl,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        closes: "00:00",
        opens: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        closes: "00:00",
        opens: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: BUSINESS.openingHours.wednesday?.opens,
        closes: BUSINESS.openingHours.wednesday?.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: BUSINESS.openingHours.thursday?.opens,
        closes: BUSINESS.openingHours.thursday?.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: BUSINESS.openingHours.friday?.opens,
        closes: BUSINESS.openingHours.friday?.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: BUSINESS.openingHours.saturday?.opens,
        closes: BUSINESS.openingHours.saturday?.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: BUSINESS.openingHours.sunday?.opens,
        closes: BUSINESS.openingHours.sunday?.closes,
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: WETZLAR_ENTITIES.city.name,
        sameAs: WETZLAR_ENTITIES.city.wikidataUrl,
      },
      {
        "@type": "City",
        name: "Gießen",
        sameAs: "https://www.wikidata.org/wiki/Q320700",
      },
      {
        "@type": "City",
        name: "Limburg an der Lahn",
        sameAs: "https://www.wikidata.org/wiki/Q4178",
      },
      {
        "@type": "City",
        name: "Marburg",
        sameAs: "https://www.wikidata.org/wiki/Q3874",
      },
      {
        "@type": "City",
        name: "Herborn",
        sameAs: "https://www.wikidata.org/wiki/Q32757",
      },
      {
        "@type": "City",
        name: "Dillenburg",
        sameAs: "https://www.wikidata.org/wiki/Q48695",
      },
      {
        "@type": "City",
        name: "Solms",
        sameAs: "https://www.wikidata.org/wiki/Q574044",
      },
      {
        "@type": "City",
        name: "Braunfels",
        sameAs: "https://www.wikidata.org/wiki/Q561115",
      },
      {
        "@type": "City",
        name: "Aßlar",
        sameAs: "https://www.wikidata.org/wiki/Q558661",
      },
      {
        "@type": "City",
        name: "Lahnau",
        sameAs: "https://www.wikidata.org/wiki/Q560061",
      },
      {
        "@type": "AdministrativeArea",
        name: WETZLAR_ENTITIES.county.name,
        sameAs: WETZLAR_ENTITIES.county.wikidataUrl,
      },
      {
        "@type": "AdministrativeArea",
        name: WETZLAR_ENTITIES.state.name,
        sameAs: WETZLAR_ENTITIES.state.wikidataUrl,
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.latitude,
        longitude: BUSINESS.longitude,
      },
      geoRadius: "15000",
    },
    containedInPlace: {
      "@type": "City",
      name: WETZLAR_ENTITIES.city.name,
      sameAs: WETZLAR_ENTITIES.city.wikidataUrl,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: WETZLAR_ENTITIES.county.name,
        sameAs: WETZLAR_ENTITIES.county.wikidataUrl,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: WETZLAR_ENTITIES.state.name,
          sameAs: WETZLAR_ENTITIES.state.wikidataUrl,
        },
      },
    },
    nearbyAttraction: LANDMARKS.map((lm) => {
      const attraction: any = {
        "@type": "TouristAttraction",
        name: lm.name,
        description: lm.description,
      };
      if (lm.wikidataUrl) {
        attraction.sameAs = lm.wikidataUrl;
      }
      return attraction;
    }),
    foundingDate: BUSINESS.foundingYear,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
      image: `${SITE.url}/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg`,
      jobTitle: "Gründerin & Inhaberin",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Desserts & Bubble Waffles",
      url: `${SITE.url}/menu`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.toString(),
      reviewCount: BUSINESS.reviewCount.toString(),
    },
    potentialAction: [
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/order-hub`,
          inLanguage: "de",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
        deliveryMethod: [
          "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
        ],
      },
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/visit`,
          inLanguage: "de",
        },
      },
    ],
    sameAs: [
      BUSINESS.instagramUrl,
      "https://www.tiktok.com/@heyfede_dessertbar",
      BUSINESS.facebookUrl,
      BUSINESS.googleMapsUrl,
      "https://www.tripadvisor.de/HeyFede-Wetzlar",
      "https://www.yelp.de/biz/hey-fede-wetzlar",
      "https://foursquare.com/v/hey-fede/wetzlar",
      "https://maps.apple.com/place?address=Langgasse%2068%2C%2035576%20Wetzlar",
      "https://www.bing.com/maps?q=Hey+Fede+Wetzlar",
    ],
    accessibilityFeature: ["WheelchairAccessible"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Outdoor Seating",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Family Friendly",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Vegetarian",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Vegan", value: true },
      { "@type": "LocationFeatureSpecification", name: "Halal", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Takeaway",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Delivery",
        value: true,
      },
    ],
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah K." },
        datePublished: "2024-03-12",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Das Eis ist der Wahnsinn! Super cremig und tolle Auswahl. Die Bubble Waffles waren bei der Lieferung noch warm und knusprig.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jonas M." },
        datePublished: "2024-02-28",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Bestes Café in Wetzlar. Ich liebe die Churros hier. Die Verpackung bei Lieferung ist auch sehr hochwertig und nachhaltig.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Elena T." },
        datePublished: "2024-04-05",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Habe über die Webseite bestellt. Lieferung war schneller als angegeben, und der Matcha Latte war einfach perfekt.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Max R." },
        datePublished: "2024-01-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Sehr leckere Waffeln und toller Kaffee. Das Personal vor Ort ist extrem freundlich. Absolute Empfehlung!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lisa W." },
        datePublished: "2024-04-18",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Egal ob Eis, Churros oder Waffeln - hier schmeckt einfach alles fantastisch. Wir bestellen regelmäßig.",
      },
    ],
  };
}
