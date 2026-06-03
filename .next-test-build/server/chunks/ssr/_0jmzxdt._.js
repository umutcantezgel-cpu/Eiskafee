module.exports = [
  812313,
  (a) => {
    "use strict";
    let b = {
        name: "Hey Fede! Dessertbar & Café",
        legalName: "Hey Fede!",
        street: "Langgasse 68",
        postalCode: "35576",
        city: "Wetzlar",
        region: "DE-HE",
        country: "DE",
        countryName: "Deutschland",
        phone: "06441 7890426",
        phoneTel: "+4964417890426",
        whatsapp: "017625026991",
        whatsappDisplay: "0176 25026991",
        email: "hallo@hey-fede.de",
        emailPrivacy: "datenschutz@hey-fede.de",
        latitude: 50.5604,
        longitude: 8.5048,
        instagram: "heyfede_wetzlar",
        instagramUrl: "https://www.instagram.com/heyfede_wetzlar",
        googleMapsUrl: "https://maps.google.com/?q=Langgasse+68+Wetzlar",
        lieferandoUrl: "https://www.lieferando.de/speisekarte/hey-fede",
        foundingYear: "2023",
        founder: "Federica",
        priceRange: "€€",
        rating: 4.8,
        reviewCount: 84,
        servesCuisine: [
          "Desserts",
          "Bubble Waffles",
          "Crêpes",
          "Pancakes",
          "Eisbecher",
          "Milkshakes",
          "Café",
          "Kaffee",
          "Kuchen",
          "Cookies",
        ],
        paymentAccepted: [
          "Bargeld",
          "EC-Karte",
          "Kreditkarte",
          "Apple Pay",
          "Google Pay",
        ],
        openingHours: {
          monday: null,
          tuesday: null,
          wednesday: { opens: "12:00", closes: "19:00" },
          thursday: { opens: "12:00", closes: "19:00" },
          friday: { opens: "12:00", closes: "19:00" },
          saturday: { opens: "12:00", closes: "19:00" },
          sunday: { opens: "13:00", closes: "19:00" },
        },
        openingHoursDisplay: [
          { day: "Montag", hours: "Geschlossen" },
          { day: "Dienstag", hours: "Geschlossen" },
          { day: "Mittwoch", hours: "12:00 – 19:00 Uhr" },
          { day: "Donnerstag", hours: "12:00 – 19:00 Uhr" },
          { day: "Freitag", hours: "12:00 – 19:00 Uhr" },
          { day: "Samstag", hours: "12:00 – 19:00 Uhr" },
          { day: "Sonntag", hours: "13:00 – 19:00 Uhr" },
        ],
        amenities: {
          wifi: !0,
          outdoorSeating: !0,
          familyFriendly: !0,
          vegetarian: !0,
          vegan: !0,
          halal: !0,
          takeaway: !0,
          delivery: !0,
          wheelchairAccessible: !0,
          cardPayment: !0,
        },
      },
      c = `${b.street}, ${b.postalCode} ${b.city}`,
      d = `https://www.google.com/maps/dir/?api=1&destination=${b.latitude},${b.longitude}`;
    a.s([
      "BUSINESS",
      0,
      b,
      "DIRECTIONS_URL",
      0,
      d,
      "FULL_ADDRESS",
      0,
      c,
      "SITE",
      0,
      {
        name: "Hey Fede! Dessertbar & Café",
        shortName: "Hey Fede!",
        url: "https://hey-fede.de",
        locale: "de_DE",
        language: "de",
      },
    ]);
  },
  797644,
  (a) => {
    "use strict";
    var b = a.i(907997);
    a.s([
      "SchemaScripts",
      0,
      function ({ schema: a }) {
        return a
          ? (0, b.jsx)("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: JSON.stringify(a) },
            })
          : null;
      },
    ]);
  },
  139712,
  (a) => {
    "use strict";
    var b = a.i(812313);
    a.s([
      "buildAboutPageSchema",
      0,
      function () {
        return {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${b.SITE.url}/about#webpage`,
          url: `${b.SITE.url}/about`,
          name: "Über uns · Die Geschichte hinter Hey Fede!",
          description:
            "Erfahre die Geschichte von Hey Fede! — gegründet von Federica. Frische Desserts, hausgemacht mit Liebe, in der Wetzlarer Altstadt.",
          isPartOf: { "@id": `${b.SITE.url}/#website` },
          about: { "@id": `${b.SITE.url}/about#person` },
        };
      },
      "buildBreadcrumbSchema",
      0,
      function (a) {
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: b.SITE.url,
            },
            ...a.map((a, c) => ({
              "@type": "ListItem",
              position: c + 2,
              name: a.name,
              item: `${b.SITE.url}${a.path}`,
            })),
          ],
        };
      },
      "buildFaqSchema",
      0,
      function (a) {
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: a.map((a) => ({
            "@type": "Question",
            name: a.q,
            acceptedAnswer: { "@type": "Answer", text: a.a },
          })),
        };
      },
      "buildOrganizationSchema",
      0,
      function () {
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${b.SITE.url}/#organization`,
          name: b.SITE.name,
          url: b.SITE.url,
          logo: {
            "@type": "ImageObject",
            url: `${b.SITE.url}/logo.png`,
            width: 512,
            height: 512,
          },
          sameAs: [
            b.BUSINESS.instagramUrl,
            "https://www.tiktok.com/@heyfede_wetzlar",
            "https://www.facebook.com/heyfede",
          ],
        };
      },
      "buildPersonSchema",
      0,
      function () {
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${b.SITE.url}/about#person`,
          name: b.BUSINESS.founder,
          jobTitle: "Gründerin & Inhaberin",
          worksFor: { "@id": `${b.SITE.url}/#organization` },
          description:
            "Gründerin der Dessertbar Hey Fede! in Wetzlar mit einer Leidenschaft für hausgemachte Desserts und echte Zutaten.",
        };
      },
      "buildPlaceSchema",
      0,
      function () {
        return {
          "@context": "https://schema.org",
          "@type": "Place",
          "@id": `${b.SITE.url}/visit#place`,
          name: b.BUSINESS.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: b.BUSINESS.street,
            addressLocality: b.BUSINESS.city,
            addressRegion: b.BUSINESS.region,
            postalCode: b.BUSINESS.postalCode,
            addressCountry: b.BUSINESS.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: b.BUSINESS.latitude,
            longitude: b.BUSINESS.longitude,
          },
          telephone: b.BUSINESS.phoneTel,
          publicAccess: !0,
        };
      },
      "buildTouristDestinationSchema",
      0,
      function () {
        return {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          "@id": `${b.SITE.url}/visit#touristdestination`,
          name: "Hey Fede! Wetzlar Altstadt",
          description:
            "Ein beliebtes Café und Dessertbar in der malerischen Wetzlarer Altstadt, bekannt für Bubble Waffles und hausgemachte Eisbecher.",
          includesAttraction: { "@id": `${b.SITE.url}/visit#place` },
        };
      },
      "buildWebSiteSchema",
      0,
      function () {
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${b.SITE.url}/#website`,
          url: b.SITE.url,
          name: b.SITE.name,
          description:
            "Hausgemachte Bubble Waffles, Crêpes, Pancakes & Eisbecher in der Dessertbar Wetzlar.",
          publisher: { "@id": `${b.SITE.url}/#organization` },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${b.SITE.url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          inLanguage: "de-DE",
        };
      },
    ]);
  },
  281740,
  (a) => {
    "use strict";
    a.s(["SpeedInsights", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call SpeedInsights() from the server but SpeedInsights is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs <module evaluation>",
      "SpeedInsights",
    );
  },
  8978,
  (a) => {
    "use strict";
    a.s(["SpeedInsights", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call SpeedInsights() from the server but SpeedInsights is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs",
      "SpeedInsights",
    );
  },
  859150,
  (a) => {
    "use strict";
    a.i(281740);
    var b = a.i(8978);
    a.n(b);
  },
  391982,
  (a) => {
    "use strict";
    a.s([
      "LANDMARKS",
      0,
      [
        {
          name: "Wetzlarer Dom",
          wikidataUrl: "https://www.wikidata.org/wiki/Q876773",
          wikipediaUrl: "https://de.wikipedia.org/wiki/Wetzlarer_Dom",
          distanceStr: "350m",
          description:
            "Das historische Wahrzeichen der Stadt Wetzlar und ein absolutes Muss bei deinem Besuch in der Altstadt.",
          lat: 50.556,
          lng: 8.502,
        },
        {
          name: "Lottehaus",
          wikidataUrl: "https://www.wikidata.org/wiki/Q1873041",
          wikipediaUrl: "https://de.wikipedia.org/wiki/Lottehaus",
          distanceStr: "200m",
          description:
            "Die historische Gedenkstätte für Charlotte Buff, Werthers Muse in Goethes berühmtem Werkzeug.",
          lat: 50.5567,
          lng: 8.5005,
        },
        {
          name: "Wetzlarer Altstadt",
          wikidataUrl: "https://www.wikidata.org/wiki/Q2588471",
          wikipediaUrl:
            "https://de.wikipedia.org/wiki/Historische_Altstadt_Wetzlar",
          distanceStr: "0m",
          description:
            "Wir befinden uns mitten in den verwinkelten Gassen der malerischen Wetzlarer Altstadt.",
          lat: 50.555,
          lng: 8.5025,
        },
        {
          name: "Eisenmarkt",
          wikidataUrl: "",
          wikipediaUrl:
            "https://de.wikipedia.org/wiki/Historische_Altstadt_Wetzlar#Eisenmarkt",
          distanceStr: "100m",
          description:
            "Der wunderschöne historische Eisenmarkt, umrahmt von charmanten Fachwerkhäusern, ist nur einen Katzensprung entfernt.",
          lat: 50.5555,
          lng: 8.502,
        },
        {
          name: "Alte Lahnbrücke",
          wikidataUrl: "https://www.wikidata.org/wiki/Q1305263",
          wikipediaUrl:
            "https://de.wikipedia.org/wiki/Alte_Lahnbr%C3%BCcke_(Wetzlar)",
          distanceStr: "500m",
          description:
            "Die steinerne Brücke über die Lahn aus dem 13. Jahrhundert ist ein beliebtes Fotomotiv.",
          lat: 50.5545,
          lng: 8.4988,
        },
        {
          name: "Reichskammergerichtsmuseum",
          wikidataUrl: "",
          wikipediaUrl:
            "https://de.wikipedia.org/wiki/Reichskammergerichtsmuseum",
          distanceStr: "450m",
          description:
            "Tauche ein in die Rechtsgeschichte und das historische Erbe Wetzlars in diesem faszinierenden Museum.",
          lat: 50.5564,
          lng: 8.5015,
        },
        {
          name: "Goethe-Weg",
          wikidataUrl: "",
          wikipediaUrl: "https://de.wikipedia.org/wiki/Goetheweg_(Wetzlar)",
          distanceStr: "400m",
          description:
            "Spaziere auf den Pfaden, die einst der junge Goethe während seines Sommeraufenthalts in Wetzlar nahm.",
          lat: 50.557,
          lng: 8.505,
        },
      ],
      "WETZLAR_ENTITIES",
      0,
      {
        city: {
          name: "Wetzlar",
          wikidataUrl: "https://www.wikidata.org/wiki/Q3950",
        },
        county: {
          name: "Lahn-Dill-Kreis",
          wikidataUrl: "https://www.wikidata.org/wiki/Q7059",
        },
        state: {
          name: "Hessen",
          wikidataUrl: "https://www.wikidata.org/wiki/Q1199",
        },
      },
    ]);
  },
];

//# sourceMappingURL=_0jmzxdt._.js.map
