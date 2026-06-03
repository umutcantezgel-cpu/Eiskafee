module.exports = [
  950640,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "InvariantError", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    class d extends Error {
      constructor(a, b) {
        (super(
          `Invariant: ${a.endsWith(".") ? a : a + "."} This is a bug in Next.js.`,
          b,
        ),
          (this.name = "InvariantError"));
      }
    }
  },
  193695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  971306,
  (a, b, c) => {
    b.exports = a.r(918622);
  },
  179847,
  (a) => {
    a.n(a.i(403343));
  },
  9185,
  (a) => {
    a.n(a.i(729432));
  },
  872842,
  (a) => {
    a.n(a.i(275164));
  },
  454897,
  (a) => {
    a.n(a.i(330106));
  },
  856157,
  (a) => {
    a.n(a.i(118970));
  },
  594331,
  (a) => {
    a.n(a.i(860644));
  },
  715988,
  (a) => {
    a.n(a.i(856952));
  },
  625766,
  (a) => {
    a.n(a.i(777341));
  },
  529725,
  (a) => {
    a.n(a.i(994290));
  },
  190833,
  (a) => {
    a.n(a.i(746994));
  },
  605785,
  (a) => {
    a.n(a.i(790588));
  },
  874793,
  (a) => {
    a.n(a.i(633169));
  },
  285826,
  (a) => {
    a.n(a.i(437111));
  },
  721565,
  (a) => {
    a.n(a.i(741763));
  },
  465911,
  (a) => {
    a.n(a.i(708950));
  },
  225128,
  (a) => {
    a.n(a.i(891562));
  },
  609455,
  (a) => {
    a.n(a.i(449670));
  },
  69411,
  (a) => {
    a.n(a.i(675700));
  },
  263081,
  (a) => {
    a.n(a.i(200276));
  },
  862837,
  (a) => {
    a.n(a.i(640795));
  },
  134607,
  (a) => {
    a.n(a.i(611614));
  },
  296338,
  (a) => {
    a.n(a.i(521751));
  },
  550642,
  (a) => {
    a.n(a.i(512213));
  },
  232242,
  (a) => {
    a.n(a.i(22693));
  },
  988530,
  (a) => {
    a.n(a.i(10531));
  },
  508583,
  (a) => {
    a.n(a.i(901082));
  },
  38534,
  (a) => {
    a.n(a.i(698175));
  },
  670408,
  (a) => {
    a.n(a.i(409095));
  },
  722922,
  (a) => {
    a.n(a.i(496772));
  },
  578294,
  (a) => {
    a.n(a.i(971717));
  },
  216625,
  (a) => {
    a.n(a.i(585034));
  },
  488648,
  (a) => {
    a.n(a.i(368113));
  },
  451914,
  (a) => {
    a.n(a.i(466482));
  },
  725466,
  (a) => {
    a.n(a.i(91505));
  },
  249924,
  (a) => {
    "use strict";
    var b = a.i(812313);
    a.s([
      "buildMetadata",
      0,
      function (a) {
        let c = `${b.SITE.url}${a.path}`,
          d = a.ogImage || "/og/default.png";
        return {
          title: a.title,
          description: a.description,
          keywords: a.keywords?.join(", ") || "",
          authors: [{ name: b.SITE.shortName, url: b.SITE.url }],
          creator: b.SITE.name,
          publisher: b.SITE.name,
          metadataBase: new URL(b.SITE.url),
          applicationName: b.SITE.shortName,
          generator: "Next.js",
          formatDetection: { telephone: !1, address: !1, email: !1 },
          alternates: {
            canonical: c,
            languages: { "de-DE": c, "de-AT": c, "de-CH": c, "x-default": c },
          },
          openGraph: {
            title: a.title,
            description: a.description,
            url: c,
            siteName: b.SITE.name,
            locale: b.SITE.locale,
            type: a.ogType || "website",
            emails: [b.BUSINESS.email],
            phoneNumbers: [b.BUSINESS.phoneTel],
            countryName: b.BUSINESS.countryName,
            images: [
              {
                url: d,
                width: 1200,
                height: 630,
                alt: a.title,
                type: "image/png",
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            title: a.title,
            description: a.description,
            images: [d],
            creator: "@heyfede_wetzlar",
            site: "@heyfede_wetzlar",
          },
          robots: a.noIndex
            ? { index: !1, follow: !1 }
            : {
                index: !0,
                follow: !0,
                nocache: !1,
                googleBot: {
                  index: !0,
                  follow: !0,
                  noimageindex: !1,
                  "max-video-preview": -1,
                  "max-image-preview": "large",
                  "max-snippet": -1,
                },
              },
          verification: {
            google: "google-site-verification-token",
            yandex: "yandex-verification-token",
            other: {
              me: [b.BUSINESS.email, b.SITE.url],
              "msvalidate.01": "bing-verification-token",
            },
          },
          category: "food and drink",
          other: {
            "geo.region": b.BUSINESS.region,
            "geo.placename": b.BUSINESS.city,
            "geo.position": `${b.BUSINESS.latitude};${b.BUSINESS.longitude}`,
            ICBM: `${b.BUSINESS.latitude}, ${b.BUSINESS.longitude}`,
          },
        };
      },
    ]);
  },
  803799,
  (a) => {
    "use strict";
    a.s(["SEOContentBlock", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call SEOContentBlock() from the server but SEOContentBlock is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/seo/SEOContentBlock.tsx <module evaluation>",
      "SEOContentBlock",
    );
  },
  784308,
  (a) => {
    "use strict";
    a.s(["SEOContentBlock", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call SEOContentBlock() from the server but SEOContentBlock is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/seo/SEOContentBlock.tsx",
      "SEOContentBlock",
    );
  },
  561256,
  (a) => {
    "use strict";
    a.i(803799);
    var b = a.i(784308);
    a.n(b);
  },
  272135,
  (a) => {
    "use strict";
    var b = a.i(812313);
    b.BUSINESS.phone;
    let c = {
        config: {
          name: "Hey Fede!",
          tagline: "Dessertbar & Café",
          address: `${b.BUSINESS.street}, ${b.BUSINESS.postalCode} ${b.BUSINESS.city}`,
          phone: b.BUSINESS.phone,
          whatsapp: "0176 25026991",
          instagram: "heyfede_wetzlar",
          rating: 4.8,
          reviewCount: 84,
        },
        categories: [
          { id: "boxen", label: "Fede Boxen", icon: "Package" },
          { id: "bubble", label: "Bubble Waffle", icon: "Layers" },
          { id: "crepes", label: "Crêpes", icon: "Cake" },
          { id: "kuchen", label: "Kuchen", icon: "Cake" },
          { id: "cookies", label: "Cookies", icon: "Cookie" },
          { id: "eisbecher", label: "Eisbecher 500ml", icon: "Coffee" },
          { id: "shakes", label: "Special Shakes", icon: "Coffee" },
          { id: "iced", label: "Iced Drinks", icon: "Droplets" },
          { id: "stullen", label: "Stullen", icon: "Sandwich" },
          { id: "getraenke", label: "Getränke", icon: "Droplets" },
        ],
        menu: {
          boxen: {
            desc: "Legendäre Sharing-Boxen — perfekt für Gruppen & Familien.",
            items: [
              {
                id: "fede-friends",
                name: "Fede & Friends",
                price: "25,00 €",
                tag: "Sharing Box",
                ticket: !0,
                desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 3 Mini-Croissants · 3 Mini-Schokobrötchen · 3 Mini-Windbeutel · 3 Schokosbällchen · 4 Soßen",
              },
              {
                id: "pancake-picknick",
                name: "Pancake Picknick",
                price: "7,00 €",
                tag: "",
                ticket: !0,
                desc: "12 Pancakes · 2 Fruchtsorten · Soße nach Wahl",
              },
              {
                id: "mix-box",
                name: "Mix Box",
                price: "15,00 €",
                tag: "Beliebt",
                ticket: !0,
                desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 2 Soßen",
              },
              {
                id: "nutella-box",
                name: "Nutella Box",
                price: "15,00 €",
                tag: "",
                ticket: !0,
                desc: "10 Pancakes · Bubble Waffle · 1 Fruchtsorte · 2× Nutella · 3 Mini-Croissants · 3 Schokosbällchen",
              },
            ],
          },
          bubble: {
            desc: "Knusprig, luftig, unwiderstehlich — mit Soßen & Toppings frei kreierbar.",
            note: "Deine Leckerei kannst du mit Soßen & Toppings deiner Wahl selbst kreieren!",
            items: [
              {
                id: "b1",
                name: "Puderzucker",
                price: "3,80 €",
                desc: "Klassisch mit Puderzucker bestäubt",
              },
              {
                id: "b2",
                name: "Soße nach Wahl",
                price: "5,00 €",
                desc: "Mit deiner Lieblingssoße",
              },
              {
                id: "b3",
                name: "Eis + Sahne",
                price: "6,50 €",
                desc: "Mit Eiskugel & Sahne (oder 2 Eiskugeln statt Sahne)",
              },
              {
                id: "b4",
                name: "Deluxe",
                price: "8,80 €",
                tag: "Beliebt",
                desc: "Eis + Sahne + 3 Toppings + Soße · auch mit 2 Eiskugeln möglich",
              },
            ],
          },
          crepes: {
            desc: "Hauchdünn und vielseitig — von klassisch bis fruchtig.",
            note: "Deine Leckerei kannst du mit Soßen & Toppings selbst kreieren!",
            items: [
              {
                id: "c1",
                name: "Puderzucker / Zimt",
                price: "3,50 €",
                desc: "Der Klassiker",
              },
              {
                id: "c2",
                name: "Nutella",
                price: "4,50 €",
                desc: "Mit reichlich Nutella",
              },
              {
                id: "c3",
                name: "Nutella + Topping",
                price: "5,50 €",
                desc: "Nutella + Topping deiner Wahl",
              },
              {
                id: "c4",
                name: "Fruit Fiesta",
                price: "5,00 €",
                tag: "Empfohlen",
                desc: "Verschiedene Früchte & eine Soße",
              },
            ],
          },
          kuchen: {
            desc: "Täglich frisch gebacken — schau in unsere Vitrine!",
            items: [
              {
                id: "k1",
                name: "Kuchen des Tages",
                price: "Auf Anfrage",
                tag: "Täglich frisch",
                desc: "Täglich wechselnde Sorten in unserer Vitrine",
              },
              {
                id: "k2",
                name: "Tortenstück",
                price: "Auf Anfrage",
                desc: "Auswahl an Tortenspezialitäten",
              },
            ],
          },
          cookies: {
            desc: "Frisch gebacken, knusprig, in verschiedenen Sorten.",
            items: [
              {
                id: "co1",
                name: "Cookies",
                price: "Auf Anfrage",
                tag: "Frisch",
                desc: "Täglich frisch gebacken in verschiedenen Sorten",
              },
            ],
          },
          eisbecher: {
            desc: "Großzügige 500ml Eisbecher — ein Traum für Eisliebhaber.",
            items: [
              {
                id: "e1",
                name: "Bananasplit",
                price: "7,50 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e2",
                name: "Walnuss",
                price: "8,00 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e3",
                name: "Schoko",
                price: "7,00 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e4",
                name: "Frucht",
                price: "7,50 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e5",
                name: "Spaghetti",
                price: "7,00 €",
                tag: "Klassiker",
                desc: "500ml Eisbecher",
              },
              {
                id: "e6",
                name: "Erdbeer",
                price: "7,50 €",
                desc: "500ml Eisbecher",
              },
            ],
          },
          shakes: {
            desc: "0,4l frisch gemixt mit Sahne — alle Sorten 6,50 €.",
            items: [
              {
                id: "s1",
                name: "Nutella Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s2",
                name: "Cheesecake Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s3",
                name: "Oreo Shake",
                price: "6,50 €",
                tag: "Beliebt",
                desc: "0,4l + Sahne",
              },
              {
                id: "s4",
                name: "Snickers Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s5",
                name: "Lotus Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s6",
                name: "Bueno Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
            ],
          },
          iced: {
            desc: "Frisch zubereitet, eiskalt serviert.",
            items: [
              {
                id: "i1",
                name: "Iced Matcha",
                price: "ab 4,50 €",
                tag: "Trend",
                desc: "Hochwertiger Matcha, kalt aufgegossen",
              },
              {
                id: "i2",
                name: "Iced Coffee",
                price: "ab 4,50 €",
                desc: "Cold Brew über Eis",
              },
              {
                id: "i3",
                name: "Iced Latte",
                price: "ab 4,50 €",
                desc: "Espresso, Milch & Eis",
              },
            ],
          },
          stullen: {
            desc: "Herzhaftes für zwischendurch.",
            items: [
              {
                id: "st1",
                name: "Stullen",
                price: "Auf Anfrage",
                desc: "Belegte Brote nach Verfügbarkeit",
              },
            ],
          },
          getraenke: {
            desc: "Kalte Getränke für jeden Geschmack.",
            items: [
              {
                id: "g1",
                name: "Eisschokolade 0,2l",
                price: "4,50 €",
                desc: "",
              },
              {
                id: "g2",
                name: "Eisschokolade 0,4l",
                price: "6,50 €",
                desc: "",
              },
              { id: "g3", name: "Eiskaffee 0,3l", price: "4,50 €", desc: "" },
              { id: "g4", name: "Eiskaffee 0,5l", price: "6,50 €", desc: "" },
              { id: "g5", name: "Milchshake 0,3l", price: "4,50 €", desc: "" },
              { id: "g6", name: "Milchshake 0,5l", price: "5,50 €", desc: "" },
            ],
          },
        },
        bestsellers: [
          {
            id: "bs1",
            name: "Fede & Friends Box",
            desc: "Das ultimative Sharing-Erlebnis für Gruppen",
            price: "25,00 €",
            tag: "Bestseller",
            icon: "Package",
          },
          {
            id: "bs2",
            name: "Bubble Waffle Deluxe",
            desc: "Eis + Sahne + 3 Toppings nach Wahl",
            price: "8,80 €",
            tag: "Beliebt",
            icon: "Layers",
          },
          {
            id: "bs3",
            name: "Oreo Special Shake",
            desc: "0,4l · frisch gemixt mit Sahne",
            price: "6,50 €",
            tag: "",
            icon: "Coffee",
          },
          {
            id: "bs4",
            name: "Pancake Picknick",
            desc: "12 Pancakes · 2 Fruchtsorten · Soße",
            price: "7,00 €",
            tag: "",
            icon: "Cake",
          },
        ],
        reviews: [
          {
            id: "r1",
            name: "Sarah M.",
            stars: 5,
            text: "Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend.",
          },
          {
            id: "r2",
            name: "Thomas K.",
            stars: 5,
            text: "Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!",
          },
          {
            id: "r3",
            name: "Lisa R.",
            stars: 5,
            text: "Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch.",
          },
          {
            id: "r4",
            name: "Marco S.",
            stars: 4,
            text: "Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!",
          },
          {
            id: "r5",
            name: "Julia W.",
            stars: 5,
            text: "Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!",
          },
        ],
      },
      {
        CATEGORIES: d,
        MENU: e,
        BESTSELLERS: f,
        REVIEWS: g,
      } = {
        CATEGORIES: c.categories,
        MENU: c.menu,
        BESTSELLERS: c.bestsellers,
        REVIEWS: c.reviews,
      };
    a.s(["HF_DATA", 0, c]);
  },
  407524,
  (a) => {
    a.v(
      "/_next/static/media/icon.0b0t.mn0lki3u.svg" +
        (globalThis.NEXT_CLIENT_ASSET_SUFFIX || ""),
    );
  },
  839375,
  (a) => {
    "use strict";
    let b = { src: a.i(407524).default, width: 429, height: 445 };
    a.s(["default", 0, b]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0.2~wi8._.js.map
