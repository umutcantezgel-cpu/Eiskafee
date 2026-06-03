module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
  176965,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    a.s(["default", 0, b]);
  },
  474215,
  (a) => {
    "use strict";
    var b = a.i(176965);
    a.s(["X", () => b.default]);
  },
  324429,
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
      c = `${b.street}, ${b.postalCode} ${b.city}`;
    (b.latitude, b.longitude, a.s(["BUSINESS", 0, b, "FULL_ADDRESS", 0, c]));
  },
  544315,
  (a) => {
    "use strict";
    var b = a.i(324429);
    let c = {
        is_open: !0,
        is_accepting_orders: !0,
        busy_mode: !1,
        pickup_time_estimate_mins: 15,
        phone: b.BUSINESS.phone,
        emergencyNotice: null,
      },
      d = {
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
        CATEGORIES: e,
        MENU: f,
        BESTSELLERS: g,
        REVIEWS: h,
      } = {
        CATEGORIES: d.categories,
        MENU: d.menu,
        BESTSELLERS: d.bestsellers,
        REVIEWS: d.reviews,
      };
    a.s(["BESTSELLERS", 0, g, "HF_DATA", 0, d, "store_settings", 0, c]);
  },
  710139,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.i(69387);
    var c = a.i(691431),
      d = a.i(601787),
      e = a.i(420237),
      f = a.i(544315);
    function g(a) {
      let b = [],
        c = (a, b) => {
          let c = 0;
          if ("string" == typeof a.price) {
            let b = a.price.match(/[\d,]+/);
            b && (c = parseFloat(b[0].replace(",", ".")));
          } else "number" == typeof a.price && (c = a.price);
          return {
            id: a.name,
            category: b,
            name: a.name,
            desc: a.desc,
            price: c,
            icon: "🍽️",
            color: "peach",
            available: !0,
          };
        };
      return (
        a && f.HF_DATA.menu[a]
          ? (b = f.HF_DATA.menu[a].items.map((b) => c(b, a)))
          : a ||
            Object.entries(f.HF_DATA.menu).forEach(([a, d]) => {
              b.push(...d.items.map((b) => c(b, a)));
            }),
        b
      );
    }
    a.s([
      "useMenu",
      0,
      function (a) {
        let [f, h] = (0, b.useState)([]),
          [i, j] = (0, b.useState)(!0),
          [k, l] = (0, b.useState)(null);
        return (
          (0, b.useEffect)(() => {
            let b = (0, d.query)(
              (0, c.collection)(e.db, "menu_items"),
              (0, d.orderBy)("category", "asc"),
            );
            a &&
              (b = (0, d.query)(
                (0, c.collection)(e.db, "menu_items"),
                (0, d.where)("category", "==", a),
                (0, d.orderBy)("category", "asc"),
              ));
            let f = (0, d.onSnapshot)(
              b,
              (b) => {
                (0 === b.docs.length
                  ? h(g(a))
                  : h(b.docs.map((a) => ({ id: a.id, ...a.data() }))),
                  j(!1),
                  l(null));
              },
              (b) => {
                (console.error("useMenu error:", b), h(g(a)), l(b), j(!1));
              },
            );
            return () => f();
          }, [a]),
          { items: f, loading: i, error: k }
        );
      },
    ]);
  },
  781784,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("pen", [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  645766,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]);
    a.s(["default", 0, b]);
  },
  233540,
  (a) => {
    "use strict";
    var b = a.i(645766);
    a.s(["Search", () => b.default]);
  },
  207068,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(710139),
      e = a.i(420237);
    a.i(69387);
    var f = a.i(132787),
      g = a.i(601787),
      h = a.i(691431),
      i = a.i(233540),
      j = a.i(781784),
      j = j,
      k = a.i(403512),
      l = a.i(346271),
      m = a.i(262036),
      n = a.i(621216),
      o = a.i(474614),
      p = a.i(474215),
      q = a.i(720083);
    function r({ isOpen: a, onClose: d, title: e, children: f, className: g }) {
      let h = (0, n.useReducedMotion)(),
        i = (0, c.useRef)(null),
        j = (0, c.useRef)(null);
      return (
        (0, c.useEffect)(() => {
          if (!a) return;
          let b = window.getComputedStyle(document.body).overflow;
          document.body.style.overflow = "hidden";
          let c = (a) => {
            "Escape" === a.key && d();
          };
          return (
            window.addEventListener("keydown", c),
            () => {
              ((document.body.style.overflow = b),
                window.removeEventListener("keydown", c));
            }
          );
        }, [a, d]),
        (0, b.jsx)(m.AnimatePresence, {
          children:
            a &&
            (0, b.jsx)(q.default, {
              focusTrapOptions: { initialFocus: !1 },
              children: (0, b.jsxs)("div", {
                className:
                  "fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6",
                children: [
                  (0, b.jsx)(l.motion.div, {
                    ref: i,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                    className:
                      "absolute inset-0 bg-charcoal/40 backdrop-blur-sm",
                    onClick: d,
                    "aria-hidden": "true",
                  }),
                  (0, b.jsxs)(l.motion.div, {
                    ref: j,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": e ? "modal-title" : void 0,
                    tabIndex: -1,
                    initial: h
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.95, y: 20 },
                    animate: h
                      ? { opacity: 1 }
                      : { opacity: 1, scale: 1, y: 0 },
                    exit: h
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.95, y: 20 },
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                    className: (0, o.twMerge)(
                      "relative w-full max-w-lg bg-cream rounded-3xl shadow-clay flex flex-col max-h-[90vh]",
                      g,
                    ),
                    children: [
                      (0, b.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-6 pb-4 border-b border-sand",
                        children: [
                          e &&
                            (0, b.jsx)("h2", {
                              id: "modal-title",
                              className:
                                "font-calistoga text-2xl text-charcoal",
                              children: e,
                            }),
                          (0, b.jsx)("button", {
                            onClick: d,
                            className:
                              "ml-auto w-10 h-10 flex items-center justify-center rounded-full bg-sand/50 text-charcoal hover:bg-terracotta hover:text-cream transition-colors focus-visible:ring-4 focus-visible:ring-terracotta/30",
                            "aria-label": "Schließen",
                            children: (0, b.jsx)(p.X, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                      (0, b.jsx)("div", {
                        className: "p-6 overflow-y-auto overscroll-contain",
                        children: f,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        })
      );
    }
    a.s(
      [
        "default",
        0,
        function () {
          let { items: a, loading: l } = (0, d.useMenu)(),
            [m, n] = (0, c.useState)(""),
            [o, p] = (0, c.useState)(null),
            q = async (a) => {
              try {
                await (0, g.updateDoc)((0, f.doc)(e.db, "menu_items", a.id), {
                  available: !a.available,
                });
              } catch (a) {
                console.error("Failed to toggle availability", a);
              }
            },
            s = async (a) => {
              if ((a.preventDefault(), o))
                try {
                  let { id: a, ...b } = o;
                  ("new" === a
                    ? await (0, g.addDoc)(
                        (0, h.collection)(e.db, "menu_items"),
                        b,
                      )
                    : await (0, g.updateDoc)(
                        (0, f.doc)(e.db, "menu_items", a),
                        b,
                      ),
                    p(null));
                } catch (a) {
                  console.error("Failed to save item", a);
                }
            },
            t = a.filter(
              (a) =>
                a.name.toLowerCase().includes(m.toLowerCase()) ||
                a.category.toLowerCase().includes(m.toLowerCase()),
            );
          return (0, b.jsxs)("div", {
            className: "p-8 max-w-6xl mx-auto",
            children: [
              (0, b.jsxs)("div", {
                className:
                  "mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                children: [
                  (0, b.jsxs)("div", {
                    children: [
                      (0, b.jsx)("h1", {
                        className: "font-calistoga text-4xl text-charcoal mb-2",
                        children: "Menü Manager",
                      }),
                      (0, b.jsx)("p", {
                        className: "font-bold text-charcoal/60",
                        children:
                          "Produkte, Preise und Verfügbarkeit verwalten",
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex gap-4 w-full md:w-auto",
                    children: [
                      (0, b.jsxs)("div", {
                        className: "relative w-full md:w-72",
                        children: [
                          (0, b.jsx)(i.Search, {
                            className:
                              "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40",
                          }),
                          (0, b.jsx)("input", {
                            type: "text",
                            placeholder: "Suchen...",
                            value: m,
                            onChange: (a) => n(a.target.value),
                            className:
                              "w-full pl-12 pr-4 py-3 rounded-full bg-cream border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal placeholder:text-charcoal/40",
                          }),
                        ],
                      }),
                      (0, b.jsxs)("button", {
                        onClick: () => {
                          p({
                            id: "new",
                            name: "",
                            desc: "",
                            price: 0,
                            category: "boxen",
                            available: !0,
                            tags: [],
                            icon: "",
                            color: "",
                          });
                        },
                        className:
                          "flex items-center gap-2 bg-terracotta text-cream px-6 py-3 rounded-full font-bold shadow-clay hover:bg-brown transition-colors shrink-0",
                        children: [
                          (0, b.jsx)(k.Plus, { className: "w-5 h-5" }),
                          "Neues Produkt",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l
                ? (0, b.jsx)("div", {
                    className: "animate-pulse flex flex-col gap-4",
                    children: [1, 2, 3, 4, 5].map((a) =>
                      (0, b.jsx)(
                        "div",
                        { className: "h-20 bg-cream rounded-2xl" },
                        a,
                      ),
                    ),
                  })
                : (0, b.jsx)("div", {
                    className:
                      "bg-cream rounded-3xl overflow-hidden shadow-sm border border-peach",
                    children: (0, b.jsxs)("table", {
                      className: "w-full text-left border-collapse",
                      children: [
                        (0, b.jsx)("thead", {
                          children: (0, b.jsxs)("tr", {
                            className: "border-b border-peach",
                            children: [
                              (0, b.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta",
                                children: "Produkt",
                              }),
                              (0, b.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta hidden md:table-cell",
                                children: "Kategorie",
                              }),
                              (0, b.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta",
                                children: "Preis",
                              }),
                              (0, b.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta text-center",
                                children: "Verfügbar",
                              }),
                              (0, b.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta text-right",
                                children: "Aktion",
                              }),
                            ],
                          }),
                        }),
                        (0, b.jsx)("tbody", {
                          children: t.map((a) =>
                            (0, b.jsxs)(
                              "tr",
                              {
                                className:
                                  "border-b border-peach/50 hover:bg-peach/10 transition-colors",
                                children: [
                                  (0, b.jsxs)("td", {
                                    className: "py-4 px-6",
                                    children: [
                                      (0, b.jsx)("div", {
                                        className: "font-bold text-charcoal",
                                        children: a.name,
                                      }),
                                      (0, b.jsx)("div", {
                                        className:
                                          "text-xs text-charcoal/60 line-clamp-1 max-w-xs",
                                        children: a.desc,
                                      }),
                                    ],
                                  }),
                                  (0, b.jsx)("td", {
                                    className: "py-4 px-6 hidden md:table-cell",
                                    children: (0, b.jsx)("span", {
                                      className:
                                        "bg-sand px-3 py-1 rounded-full text-xs font-bold text-brown uppercase tracking-wider",
                                      children: a.category,
                                    }),
                                  }),
                                  (0, b.jsxs)("td", {
                                    className:
                                      "py-4 px-6 font-bold text-charcoal",
                                    children: [
                                      "number" == typeof a.price
                                        ? a.price.toFixed(2).replace(".", ",")
                                        : a.price,
                                      " €",
                                    ],
                                  }),
                                  (0, b.jsx)("td", {
                                    className: "py-4 px-6 text-center",
                                    children: (0, b.jsx)("button", {
                                      onClick: () => q(a),
                                      className: `relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${a.available ? "bg-terracotta" : "bg-charcoal/20"}`,
                                      children: (0, b.jsx)("span", {
                                        className: `inline-block h-5 w-5 transform rounded-full bg-cream transition-transform shadow-sm ${a.available ? "translate-x-6" : "translate-x-1"}`,
                                      }),
                                    }),
                                  }),
                                  (0, b.jsx)("td", {
                                    className: "py-4 px-6 text-right",
                                    children: (0, b.jsx)("button", {
                                      onClick: () => p(a),
                                      className:
                                        "p-2 text-charcoal/60 hover:text-terracotta hover:bg-peach/30 rounded-full transition-colors",
                                      children: (0, b.jsx)(j.default, {
                                        className: "w-5 h-5",
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              a.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
              (0, b.jsx)(r, {
                isOpen: !!o,
                onClose: () => p(null),
                title:
                  o?.id === "new"
                    ? "Neues Produkt anlegen"
                    : "Produkt bearbeiten",
                children:
                  o &&
                  (0, b.jsxs)("form", {
                    onSubmit: s,
                    className: "flex flex-col gap-4",
                    children: [
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("label", {
                            className:
                              "block text-sm font-bold text-brown mb-1",
                            children: "Name",
                          }),
                          (0, b.jsx)("input", {
                            type: "text",
                            value: o.name,
                            onChange: (a) => p({ ...o, name: a.target.value }),
                            className:
                              "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block text-sm font-bold text-brown mb-1",
                                children: "Preis (€)",
                              }),
                              (0, b.jsx)("input", {
                                type: "number",
                                step: "0.01",
                                value: o.price,
                                onChange: (a) =>
                                  p({
                                    ...o,
                                    price: parseFloat(a.target.value),
                                  }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block text-sm font-bold text-brown mb-1",
                                children: "Kategorie",
                              }),
                              (0, b.jsx)("input", {
                                type: "text",
                                value: o.category,
                                onChange: (a) =>
                                  p({ ...o, category: a.target.value }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("label", {
                            className:
                              "block text-sm font-bold text-brown mb-1",
                            children: "Beschreibung",
                          }),
                          (0, b.jsx)("textarea", {
                            value: o.desc,
                            onChange: (a) => p({ ...o, desc: a.target.value }),
                            className:
                              "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal min-h-[100px] resize-none",
                          }),
                        ],
                      }),
                      (0, b.jsx)("button", {
                        type: "submit",
                        className:
                          "mt-4 bg-terracotta text-cream py-3 rounded-xl font-bold text-lg shadow-clay hover:bg-brown transition-colors",
                        children: "Speichern",
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
      ],
      207068,
    );
  },
];

//# sourceMappingURL=_08zghul._.js.map
