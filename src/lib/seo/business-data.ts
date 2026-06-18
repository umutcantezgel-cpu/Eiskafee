/**
 * SINGLE SOURCE OF TRUTH - Hey Fede! Business Data
 * ALL business information MUST be imported from here.
 * Never hardcode NAP data in components.
 */

export const SITE = {
  name: "Hey Fede! Dessertbar & Café",
  shortName: "Hey Fede!",
  url: "https://hey-fede.de",
  locale: "de_DE",
  language: "de",
} as const;

export const BUSINESS = {
  // ─── NAP (Name · Address · Phone) ───
  name: "Hey Fede! Dessertbar & Café",
  legalName: "Hey Fede - Dessertbar & Cafè",
  vatId: "DE332145918",
  street: "Langgasse 68",
  postalCode: "35576",
  city: "Wetzlar",
  region: "DE-HE",
  country: "DE",
  countryName: "Deutschland",

  // ─── Contact ───
  phone: "06441 7890426",
  phoneTel: "+4964417890426",
  whatsapp: "017625026991",
  whatsappDisplay: "0176 25026991",
  email: "hallo@hey-fede.de",
  emailPrivacy: "datenschutz@hey-fede.de",

  // ─── Geo ───
  latitude: 50.55842,
  longitude: 8.49852,

  // ─── Social ───
  instagram: "heyfede_dessertbar",
  instagramUrl: "https://www.instagram.com/heyfede_dessertbar/",
  facebook: "eiscafeitaliawetzlar",
  facebookUrl: "https://www.facebook.com/eiscafeitaliawetzlar/",
  googleMapsUrl: "https://maps.google.com/?q=Langgasse+68+Wetzlar",

  // ─── Business Details ───
  foundingYear: "2023",
  founder: "Federica Anicito Viro",
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

  // ─── Opening Hours (KORREKT: Mo+Di geschlossen) ───
  openingHours: {
    monday: null, // geschlossen
    tuesday: null, // geschlossen
    wednesday: { opens: "12:00", closes: "19:00" },
    thursday: { opens: "12:00", closes: "19:00" },
    friday: { opens: "12:00", closes: "19:00" },
    saturday: { opens: "12:00", closes: "19:00" },
    sunday: { opens: "13:00", closes: "19:00" },
  },

  openingHoursDisplay: [
    { day: "Montag", hours: "Geschlossen" },
    { day: "Dienstag", hours: "Geschlossen" },
    { day: "Mittwoch", hours: "12:00 - 19:00 Uhr" },
    { day: "Donnerstag", hours: "12:00 - 19:00 Uhr" },
    { day: "Freitag", hours: "12:00 - 19:00 Uhr" },
    { day: "Samstag", hours: "12:00 - 19:00 Uhr" },
    { day: "Sonntag", hours: "13:00 - 19:00 Uhr" },
  ],

  // ─── Amenities ───
  amenities: {
    wifi: true,
    outdoorSeating: true,
    familyFriendly: true,
    vegetarian: true,
    vegan: true,
    halal: true,
    takeaway: true,
    delivery: true,
    wheelchairAccessible: true,
    cardPayment: true,
  },
} as const;

/** Formatted full address */
export const FULL_ADDRESS = `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`;

/** Google Maps directions URL */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.latitude},${BUSINESS.longitude}`;
