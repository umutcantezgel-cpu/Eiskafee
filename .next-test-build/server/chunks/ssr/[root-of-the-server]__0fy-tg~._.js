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
  507655,
  (a) => {
    "use strict";
    var b = a.i(907997);
    a.s([
      "SectionTitle",
      0,
      function ({ children: a, sub: c, center: d = !0, light: e = !1 }) {
        return (0, b.jsxs)("div", {
          className: `mb-10 md:mb-12 ${d ? "text-center" : ""}`,
          children: [
            (0, b.jsx)("h2", {
              style: {
                fontFamily: "var(--font-calistoga), serif",
                fontSize: "clamp(1.7rem,4vw,2.8rem)",
                color: e ? "#f5efe8" : "#2d1f19",
                lineHeight: 1.1,
                marginBottom: 8,
              },
              children: a,
            }),
            c &&
              (0, b.jsx)("p", {
                style: {
                  fontSize: "0.92rem",
                  color: e ? "rgba(245,239,232,0.75)" : "#9a7060",
                  maxWidth: 440,
                  margin: d ? "0 auto" : 0,
                  lineHeight: 1.65,
                },
                children: c,
              }),
          ],
        });
      },
      "StampBadge",
      0,
      function ({
        text: a,
        size: c = 88,
        rotate: d = -12,
        color: e = "#CC624C",
      }) {
        let f = `sb-${a.replace(/\\W/g, "")}-${c}`,
          g = c / 2 - 10;
        return (0, b.jsx)("div", {
          style: {
            width: c,
            height: c,
            flexShrink: 0,
            transform: `rotate(${d}deg)`,
          },
          children: (0, b.jsxs)("svg", {
            viewBox: `0 0 ${c} ${c}`,
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, b.jsx)("defs", {
                children: (0, b.jsx)("path", {
                  id: f,
                  d: `M${c / 2},${c / 2} m-${g},0 a${g},${g} 0 1,1 ${2 * g},0 a${g},${g} 0 1,1 -${2 * g},0`,
                }),
              }),
              (0, b.jsx)("circle", {
                cx: c / 2,
                cy: c / 2,
                r: c / 2 - 3,
                fill: "none",
                stroke: e,
                strokeWidth: "1.5",
                strokeDasharray: "3.5 2.5",
              }),
              (0, b.jsx)("text", {
                fontSize: "9",
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: "800",
                fill: e,
                letterSpacing: "2",
                children: (0, b.jsx)("textPath", {
                  href: `#${f}`,
                  startOffset: "50%",
                  textAnchor: "middle",
                  children: a.toUpperCase(),
                }),
              }),
            ],
          }),
        });
      },
      "TicketCard",
      0,
      function ({ children: a, sectionBg: c = "#f5efe8", className: d = "" }) {
        return (0, b.jsxs)("div", {
          className: `relative border-2 border-dashed border-[#CC624C] rounded-2xl bg-white overflow-visible ${d}`,
          style: { margin: "0 14px" },
          children: [
            (0, b.jsx)("div", {
              style: {
                position: "absolute",
                left: -13,
                top: "50%",
                transform: "translateY(-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: c,
                border: "2px dashed #E4C0A8",
              },
            }),
            (0, b.jsx)("div", {
              style: {
                position: "absolute",
                right: -13,
                top: "50%",
                transform: "translateY(-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: c,
                border: "2px dashed #E4C0A8",
              },
            }),
            (0, b.jsx)("div", { style: { padding: "24px 28px" }, children: a }),
          ],
        });
      },
    ]);
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
  827345,
  (a) => {
    "use strict";
    a.s(["FadeUp", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call FadeUp() from the server but FadeUp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/ui/FadeUp.tsx <module evaluation>",
      "FadeUp",
    );
  },
  585659,
  (a) => {
    "use strict";
    a.s(["FadeUp", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call FadeUp() from the server but FadeUp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/ui/FadeUp.tsx",
      "FadeUp",
    );
  },
  431521,
  (a) => {
    "use strict";
    a.i(827345);
    var b = a.i(585659);
    a.n(b);
  },
  995479,
  (a) => {
    "use strict";
    a.s(["PrimaryButton", () => c, "SecondaryButton", () => d]);
    var b = a.i(211857);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call PrimaryButton() from the server but PrimaryButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/src/components/ui/Btn.tsx <module evaluation>",
        "PrimaryButton",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call SecondaryButton() from the server but SecondaryButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/src/components/ui/Btn.tsx <module evaluation>",
        "SecondaryButton",
      );
  },
  433006,
  (a) => {
    "use strict";
    a.s(["PrimaryButton", () => c, "SecondaryButton", () => d]);
    var b = a.i(211857);
    let c = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call PrimaryButton() from the server but PrimaryButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/src/components/ui/Btn.tsx",
        "PrimaryButton",
      ),
      d = (0, b.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call SecondaryButton() from the server but SecondaryButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "[project]/src/components/ui/Btn.tsx",
        "SecondaryButton",
      );
  },
  137720,
  (a) => {
    "use strict";
    a.i(995479);
    var b = a.i(433006);
    a.n(b);
  },
  708174,
  (a) => {
    "use strict";
    a.s(["default", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.mjs <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/node_modules/lucide-react/dist/esm/Icon.mjs <module evaluation>",
      "default",
    );
  },
  990697,
  (a) => {
    "use strict";
    a.s(["default", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.mjs from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/node_modules/lucide-react/dist/esm/Icon.mjs",
      "default",
    );
  },
  653808,
  (a) => {
    "use strict";
    a.i(708174);
    var b = a.i(990697);
    a.n(b);
  },
  892277,
  (a) => {
    "use strict";
    var b = a.i(688517);
    let c = (a) => {
      let b = a.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, b, c) =>
        c ? c.toUpperCase() : b.toLowerCase(),
      );
      return b.charAt(0).toUpperCase() + b.slice(1);
    };
    var d = a.i(653808);
    a.s(
      [
        "default",
        0,
        (a, e) => {
          let f = (0, b.forwardRef)(({ className: f, ...g }, h) =>
            (0, b.createElement)(d.default, {
              ref: h,
              iconNode: e,
              className: ((...a) =>
                a
                  .filter(
                    (a, b, c) => !!a && "" !== a.trim() && c.indexOf(a) === b,
                  )
                  .join(" ")
                  .trim())(
                `lucide-${c(a)
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()}`,
                `lucide-${a}`,
                f,
              ),
              ...g,
            }),
          );
          return ((f.displayName = c(a)), f);
        },
      ],
      892277,
    );
  },
  797113,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    a.s(["default", 0, b]);
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
  633865,
  (a) => {
    "use strict";
    var b = a.i(907997),
      c = a.i(249924),
      d = a.i(431521),
      e = a.i(507655),
      f = a.i(137720),
      g = a.i(797644),
      h = a.i(812313),
      i = a.i(797113),
      i = i;
    let j = (0, c.buildMetadata)({
      title: "Vegane & Halal Desserts Wetzlar | Hey Fede!",
      description:
        "Inklusiver Genuss in der Wetzlarer Altstadt. Entdecke unsere Auswahl an 100% veganen Eis-Sorten, laktosefreien Shakes und Halal-zertifizierten Süßspeisen.",
      path: "/vegane-desserts-wetzlar",
      keywords: [
        "Veganes Café Wetzlar",
        "Halal Desserts Gießen",
        "Veganes Eis Lahn-Dill-Kreis",
        "Laktosefreie Waffeln Hessen",
        "Pflanzliche Süßspeisen",
        "Halal Süßigkeiten Wetzlar",
        "Vegan essen gehen Wetzlar",
        "Hey Fede Vegan",
      ],
    });
    a.s(
      [
        "default",
        0,
        function () {
          return (0, b.jsxs)("div", {
            className: "bg-bg-creme",
            children: [
              (0, b.jsx)("section", {
                className:
                  "relative pt-[120px] pb-24 bg-[#e6efeb] overflow-hidden border-b border-[#c8dbd1]",
                children: (0, b.jsxs)("div", {
                  className: "max-w-7xl mx-auto px-6 relative z-10 text-center",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "inline-block px-4 py-1.5 bg-[#4a7c59] text-white font-nunito font-bold rounded-full text-sm mb-6 shadow-sm",
                      children: "Inklusiver Genuss in Mittelhessen",
                    }),
                    (0, b.jsxs)("h1", {
                      className:
                        "font-calistoga text-5xl md:text-7xl text-[#2d4b36] mb-6 leading-[1.1]",
                      children: [
                        "Vegane & Halal",
                        (0, b.jsx)("br", {}),
                        "Süßspeisen",
                      ],
                    }),
                    (0, b.jsx)("p", {
                      className:
                        "font-nunito text-lg text-[#3e664b] leading-relaxed mb-10 max-w-[600px] mx-auto",
                      children:
                        "Gutes Essen sollte für alle da sein. Wir sind stolz darauf, eine der besten Anlaufstellen im Lahn-Dill-Kreis und dem Raum Gießen für pflanzliche Eiscreme und Halal-konforme Desserts zu sein.",
                    }),
                    (0, b.jsx)(f.PrimaryButton, {
                      href: "/menu",
                      sectionBg: "#e6efeb",
                      className: "bg-[#4a7c59] text-white hover:bg-[#3e664b]",
                      children: "Zur Speisekarte",
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "py-24 bg-white relative",
                children: (0, b.jsxs)(d.FadeUp, {
                  className: "max-w-4xl mx-auto px-6",
                  children: [
                    (0, b.jsx)(e.SectionTitle, {
                      sub: "Ohne Kompromisse beim Geschmack",
                      children: "Pflanzlich & Lecker",
                    }),
                    (0, b.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-12 mt-16",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("h2", {
                              className:
                                "font-calistoga text-3xl text-charcoal mb-6",
                              children: "Veganes Eis & Shakes",
                            }),
                            (0, b.jsx)("ul", {
                              className: "space-y-4",
                              children: [
                                "Fruchtige Sorbets (Mango, Zitrone, Erdbeere)",
                                "Pflanzliche Milchalternativen (Hafer, Soja, Mandel)",
                                "Vegane Cookie-Crumbles & Toppings",
                                "100% dunkle Premium-Schokoladensoße",
                              ].map((a, c) =>
                                (0, b.jsxs)(
                                  "li",
                                  {
                                    className: "flex items-start gap-3",
                                    children: [
                                      (0, b.jsx)(i.default, {
                                        className:
                                          "w-6 h-6 text-[#4a7c59] shrink-0 mt-0.5",
                                      }),
                                      (0, b.jsx)("span", {
                                        className:
                                          "font-nunito text-[#5c3d35] text-lg",
                                        children: a,
                                      }),
                                    ],
                                  },
                                  c,
                                ),
                              ),
                            }),
                            (0, b.jsx)("p", {
                              className:
                                "font-nunito text-[#5c3d35] mt-6 leading-relaxed",
                              children:
                                "Egal ob du dich aus ethischen Gründen rein pflanzlich ernährst oder laktoseintolerant bist – bei uns musst du auf nichts verzichten. Genieße unsere veganen Fruit-Shakes, während du durch die Wetzlarer Altstadt schlenderst.",
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "bg-[#f5efe8] rounded-3xl p-8 border border-peach/30",
                          children: [
                            (0, b.jsx)("h2", {
                              className:
                                "font-calistoga text-3xl text-charcoal mb-6",
                              children: "Halal Transparenz",
                            }),
                            (0, b.jsx)("p", {
                              className:
                                "font-nunito text-[#5c3d35] leading-relaxed mb-4",
                              children:
                                "Viele unserer Gäste aus Wetzlar, Gießen und Marburg legen großen Wert auf Halal-konforme Ernährung. Bei uns gibt es volle Transparenz:",
                            }),
                            (0, b.jsx)("ul", {
                              className: "space-y-4",
                              children: [
                                "Kein Alkohol in unseren Desserts oder Soßen",
                                "Gelatinefreie Marshmallows & Gummibärchen (auf pflanzlicher Pektin-Basis)",
                                "Zutaten aus nachverfolgbaren, sicheren Quellen",
                              ].map((a, c) =>
                                (0, b.jsxs)(
                                  "li",
                                  {
                                    className: "flex items-start gap-3",
                                    children: [
                                      (0, b.jsx)(i.default, {
                                        className:
                                          "w-6 h-6 text-terracotta shrink-0 mt-0.5",
                                      }),
                                      (0, b.jsx)("span", {
                                        className: "font-nunito text-[#5c3d35]",
                                        children: a,
                                      }),
                                    ],
                                  },
                                  c,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsx)(g.SchemaScripts, {
                schema: [
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Vegane & Halal Desserts bei Hey Fede!",
                    description:
                      "Informationen zu pflanzlichen, laktosefreien und Halal-zertifizierten Dessert-Optionen in unserer Wetzlarer Dessertbar.",
                    about: {
                      "@type": "Thing",
                      name: "Dietary Options (Vegan, Halal, Lactose-Free)",
                    },
                    provider: {
                      "@type": "Restaurant",
                      "@id": `${h.SITE.url}/#localbusiness`,
                    },
                  },
                ],
              }),
            ],
          });
        },
        "metadata",
        0,
        j,
        "revalidate",
        0,
        60,
      ],
      633865,
    );
  },
  389179,
  (a) => {
    a.n(a.i(633865));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fy-tg~._.js.map
