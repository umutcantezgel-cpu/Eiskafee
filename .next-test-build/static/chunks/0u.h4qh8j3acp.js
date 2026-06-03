(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var a = e.i(727286);
    e.s(["collection", () => a.aO]);
  },
  814387,
  (e) => {
    "use strict";
    let a = (0, e.i(456420).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    e.s(["default", 0, a]);
  },
  263676,
  (e) => {
    "use strict";
    var a = e.i(814387);
    e.s(["X", () => a.default]);
  },
  630299,
  (e) => {
    "use strict";
    let a = (0, e.i(456420).default)("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]);
    e.s(["default", 0, a]);
  },
  206505,
  (e) => {
    "use strict";
    let a = (0, e.i(456420).default)("pen", [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu",
        },
      ],
    ]);
    e.s(["default", 0, a]);
  },
  318028,
  (e) => {
    "use strict";
    let a = {
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
      s = `${a.street}, ${a.postalCode} ${a.city}`;
    (a.latitude, a.longitude, e.s(["BUSINESS", 0, a, "FULL_ADDRESS", 0, s]));
  },
  816148,
  (e) => {
    "use strict";
    var a = e.i(318028);
    let s = {
        is_open: !0,
        is_accepting_orders: !0,
        busy_mode: !1,
        pickup_time_estimate_mins: 15,
        phone: a.BUSINESS.phone,
        emergencyNotice: null,
      },
      t = {
        config: {
          name: "Hey Fede!",
          tagline: "Dessertbar & Café",
          address: `${a.BUSINESS.street}, ${a.BUSINESS.postalCode} ${a.BUSINESS.city}`,
          phone: a.BUSINESS.phone,
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
        CATEGORIES: i,
        MENU: r,
        BESTSELLERS: c,
        REVIEWS: l,
      } = {
        CATEGORIES: t.categories,
        MENU: t.menu,
        BESTSELLERS: t.bestsellers,
        REVIEWS: t.reviews,
      };
    e.s(["BESTSELLERS", 0, c, "HF_DATA", 0, t, "store_settings", 0, s]);
  },
  805109,
  (e) => {
    "use strict";
    var a = e.i(271645);
    e.i(436180);
    var s = e.i(746939),
      t = e.i(263802),
      i = e.i(959141),
      r = e.i(816148);
    function c(e) {
      let a = [],
        s = (e, a) => {
          let s = 0;
          if ("string" == typeof e.price) {
            let a = e.price.match(/[\d,]+/);
            a && (s = parseFloat(a[0].replace(",", ".")));
          } else "number" == typeof e.price && (s = e.price);
          return {
            id: e.name,
            category: a,
            name: e.name,
            desc: e.desc,
            price: s,
            icon: "🍽️",
            color: "peach",
            available: !0,
          };
        };
      return (
        e && r.HF_DATA.menu[e]
          ? (a = r.HF_DATA.menu[e].items.map((a) => s(a, e)))
          : e ||
            Object.entries(r.HF_DATA.menu).forEach(([e, t]) => {
              a.push(...t.items.map((a) => s(a, e)));
            }),
        a
      );
    }
    e.s([
      "useMenu",
      0,
      function (e) {
        let [r, l] = (0, a.useState)([]),
          [n, o] = (0, a.useState)(!0),
          [d, h] = (0, a.useState)(null);
        return (
          (0, a.useEffect)(() => {
            let a = (0, t.query)(
              (0, s.collection)(i.db, "menu_items"),
              (0, t.orderBy)("category", "asc"),
            );
            e &&
              (a = (0, t.query)(
                (0, s.collection)(i.db, "menu_items"),
                (0, t.where)("category", "==", e),
                (0, t.orderBy)("category", "asc"),
              ));
            let r = (0, t.onSnapshot)(
              a,
              (a) => {
                (0 === a.docs.length
                  ? l(c(e))
                  : l(a.docs.map((e) => ({ id: e.id, ...e.data() }))),
                  o(!1),
                  h(null));
              },
              (a) => {
                (console.error("useMenu error:", a), l(c(e)), h(a), o(!1));
              },
            );
            return () => r();
          }, [e]),
          { items: r, loading: n, error: d }
        );
      },
    ]);
  },
  566595,
  (e) => {
    "use strict";
    var a = e.i(630299);
    e.s(["Search", () => a.default]);
  },
  656376,
  (e) => {
    "use strict";
    var a = e.i(843476),
      s = e.i(271645),
      t = e.i(805109),
      i = e.i(959141);
    e.i(436180);
    var r = e.i(386205),
      c = e.i(263802),
      l = e.i(746939),
      n = e.i(566595),
      o = e.i(206505),
      o = o,
      d = e.i(77071),
      h = e.i(846932),
      u = e.i(88653),
      m = e.i(772328),
      p = e.i(919056),
      b = e.i(263676),
      f = e.i(840535);
    function g({ isOpen: e, onClose: t, title: i, children: r, className: c }) {
      let l = (0, m.useReducedMotion)(),
        n = (0, s.useRef)(null),
        o = (0, s.useRef)(null);
      return (
        (0, s.useEffect)(() => {
          if (!e) return;
          let a = window.getComputedStyle(document.body).overflow;
          document.body.style.overflow = "hidden";
          let s = (e) => {
            "Escape" === e.key && t();
          };
          return (
            window.addEventListener("keydown", s),
            () => {
              ((document.body.style.overflow = a),
                window.removeEventListener("keydown", s));
            }
          );
        }, [e, t]),
        (0, a.jsx)(u.AnimatePresence, {
          children:
            e &&
            (0, a.jsx)(f.default, {
              focusTrapOptions: { initialFocus: !1 },
              children: (0, a.jsxs)("div", {
                className:
                  "fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6",
                children: [
                  (0, a.jsx)(h.motion.div, {
                    ref: n,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                    className:
                      "absolute inset-0 bg-charcoal/40 backdrop-blur-sm",
                    onClick: t,
                    "aria-hidden": "true",
                  }),
                  (0, a.jsxs)(h.motion.div, {
                    ref: o,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": i ? "modal-title" : void 0,
                    tabIndex: -1,
                    initial: l
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.95, y: 20 },
                    animate: l
                      ? { opacity: 1 }
                      : { opacity: 1, scale: 1, y: 0 },
                    exit: l
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.95, y: 20 },
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                    className: (0, p.twMerge)(
                      "relative w-full max-w-lg bg-cream rounded-3xl shadow-clay flex flex-col max-h-[90vh]",
                      c,
                    ),
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-6 pb-4 border-b border-sand",
                        children: [
                          i &&
                            (0, a.jsx)("h2", {
                              id: "modal-title",
                              className:
                                "font-calistoga text-2xl text-charcoal",
                              children: i,
                            }),
                          (0, a.jsx)("button", {
                            onClick: t,
                            className:
                              "ml-auto w-10 h-10 flex items-center justify-center rounded-full bg-sand/50 text-charcoal hover:bg-terracotta hover:text-cream transition-colors focus-visible:ring-4 focus-visible:ring-terracotta/30",
                            "aria-label": "Schließen",
                            children: (0, a.jsx)(b.X, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "p-6 overflow-y-auto overscroll-contain",
                        children: r,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        })
      );
    }
    e.s(
      [
        "default",
        0,
        function () {
          let { items: e, loading: h } = (0, t.useMenu)(),
            [u, m] = (0, s.useState)(""),
            [p, b] = (0, s.useState)(null),
            f = async (e) => {
              try {
                await (0, c.updateDoc)((0, r.doc)(i.db, "menu_items", e.id), {
                  available: !e.available,
                });
              } catch (e) {
                console.error("Failed to toggle availability", e);
              }
            },
            x = async (e) => {
              if ((e.preventDefault(), p))
                try {
                  let { id: e, ...a } = p;
                  ("new" === e
                    ? await (0, c.addDoc)(
                        (0, l.collection)(i.db, "menu_items"),
                        a,
                      )
                    : await (0, c.updateDoc)(
                        (0, r.doc)(i.db, "menu_items", e),
                        a,
                      ),
                    b(null));
                } catch (e) {
                  console.error("Failed to save item", e);
                }
            },
            k = e.filter(
              (e) =>
                e.name.toLowerCase().includes(u.toLowerCase()) ||
                e.category.toLowerCase().includes(u.toLowerCase()),
            );
          return (0, a.jsxs)("div", {
            className: "p-8 max-w-6xl mx-auto",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h1", {
                        className: "font-calistoga text-4xl text-charcoal mb-2",
                        children: "Menü Manager",
                      }),
                      (0, a.jsx)("p", {
                        className: "font-bold text-charcoal/60",
                        children:
                          "Produkte, Preise und Verfügbarkeit verwalten",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 w-full md:w-auto",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative w-full md:w-72",
                        children: [
                          (0, a.jsx)(n.Search, {
                            className:
                              "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40",
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            placeholder: "Suchen...",
                            value: u,
                            onChange: (e) => m(e.target.value),
                            className:
                              "w-full pl-12 pr-4 py-3 rounded-full bg-cream border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal placeholder:text-charcoal/40",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        onClick: () => {
                          b({
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
                          (0, a.jsx)(d.Plus, { className: "w-5 h-5" }),
                          "Neues Produkt",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              h
                ? (0, a.jsx)("div", {
                    className: "animate-pulse flex flex-col gap-4",
                    children: [1, 2, 3, 4, 5].map((e) =>
                      (0, a.jsx)(
                        "div",
                        { className: "h-20 bg-cream rounded-2xl" },
                        e,
                      ),
                    ),
                  })
                : (0, a.jsx)("div", {
                    className:
                      "bg-cream rounded-3xl overflow-hidden shadow-sm border border-peach",
                    children: (0, a.jsxs)("table", {
                      className: "w-full text-left border-collapse",
                      children: [
                        (0, a.jsx)("thead", {
                          children: (0, a.jsxs)("tr", {
                            className: "border-b border-peach",
                            children: [
                              (0, a.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta",
                                children: "Produkt",
                              }),
                              (0, a.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta hidden md:table-cell",
                                children: "Kategorie",
                              }),
                              (0, a.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta",
                                children: "Preis",
                              }),
                              (0, a.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta text-center",
                                children: "Verfügbar",
                              }),
                              (0, a.jsx)("th", {
                                className:
                                  "py-4 px-6 font-calistoga text-terracotta text-right",
                                children: "Aktion",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("tbody", {
                          children: k.map((e) =>
                            (0, a.jsxs)(
                              "tr",
                              {
                                className:
                                  "border-b border-peach/50 hover:bg-peach/10 transition-colors",
                                children: [
                                  (0, a.jsxs)("td", {
                                    className: "py-4 px-6",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "font-bold text-charcoal",
                                        children: e.name,
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-xs text-charcoal/60 line-clamp-1 max-w-xs",
                                        children: e.desc,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("td", {
                                    className: "py-4 px-6 hidden md:table-cell",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "bg-sand px-3 py-1 rounded-full text-xs font-bold text-brown uppercase tracking-wider",
                                      children: e.category,
                                    }),
                                  }),
                                  (0, a.jsxs)("td", {
                                    className:
                                      "py-4 px-6 font-bold text-charcoal",
                                    children: [
                                      "number" == typeof e.price
                                        ? e.price.toFixed(2).replace(".", ",")
                                        : e.price,
                                      " €",
                                    ],
                                  }),
                                  (0, a.jsx)("td", {
                                    className: "py-4 px-6 text-center",
                                    children: (0, a.jsx)("button", {
                                      onClick: () => f(e),
                                      className: `relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${e.available ? "bg-terracotta" : "bg-charcoal/20"}`,
                                      children: (0, a.jsx)("span", {
                                        className: `inline-block h-5 w-5 transform rounded-full bg-cream transition-transform shadow-sm ${e.available ? "translate-x-6" : "translate-x-1"}`,
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("td", {
                                    className: "py-4 px-6 text-right",
                                    children: (0, a.jsx)("button", {
                                      onClick: () => b(e),
                                      className:
                                        "p-2 text-charcoal/60 hover:text-terracotta hover:bg-peach/30 rounded-full transition-colors",
                                      children: (0, a.jsx)(o.default, {
                                        className: "w-5 h-5",
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
              (0, a.jsx)(g, {
                isOpen: !!p,
                onClose: () => b(null),
                title:
                  p?.id === "new"
                    ? "Neues Produkt anlegen"
                    : "Produkt bearbeiten",
                children:
                  p &&
                  (0, a.jsxs)("form", {
                    onSubmit: x,
                    className: "flex flex-col gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-sm font-bold text-brown mb-1",
                            children: "Name",
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            value: p.name,
                            onChange: (e) => b({ ...p, name: e.target.value }),
                            className:
                              "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("label", {
                                className:
                                  "block text-sm font-bold text-brown mb-1",
                                children: "Preis (€)",
                              }),
                              (0, a.jsx)("input", {
                                type: "number",
                                step: "0.01",
                                value: p.price,
                                onChange: (e) =>
                                  b({
                                    ...p,
                                    price: parseFloat(e.target.value),
                                  }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("label", {
                                className:
                                  "block text-sm font-bold text-brown mb-1",
                                children: "Kategorie",
                              }),
                              (0, a.jsx)("input", {
                                type: "text",
                                value: p.category,
                                onChange: (e) =>
                                  b({ ...p, category: e.target.value }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-sm font-bold text-brown mb-1",
                            children: "Beschreibung",
                          }),
                          (0, a.jsx)("textarea", {
                            value: p.desc,
                            onChange: (e) => b({ ...p, desc: e.target.value }),
                            className:
                              "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal min-h-[100px] resize-none",
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
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
      656376,
    );
  },
]);
