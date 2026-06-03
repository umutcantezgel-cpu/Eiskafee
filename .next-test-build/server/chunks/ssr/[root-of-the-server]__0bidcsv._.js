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
  568154,
  (a) => {
    "use strict";
    a.s(["WaveDivider", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call WaveDivider() from the server but WaveDivider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/ui/WaveDivider.tsx <module evaluation>",
      "WaveDivider",
    );
  },
  889654,
  (a) => {
    "use strict";
    a.s(["WaveDivider", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call WaveDivider() from the server but WaveDivider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/ui/WaveDivider.tsx",
      "WaveDivider",
    );
  },
  595789,
  (a) => {
    "use strict";
    a.i(568154);
    var b = a.i(889654);
    a.n(b);
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
  545065,
  (a) => {
    "use strict";
    var b = a.i(907997),
      c = a.i(249924),
      d = a.i(431521),
      e = a.i(507655),
      f = a.i(595789),
      g = a.i(137720),
      h = a.i(797644),
      i = a.i(812313);
    let j = (0, c.buildMetadata)({
      title: "Bubble Waffles Wetzlar | Original & Handgemacht bei Hey Fede!",
      description:
        "Erlebe die originalen Bubble Waffles in der Wetzlarer Altstadt. Knusprig, fluffig & handgemacht. Jetzt in der Langgasse probieren oder aus Gießen & Lahn-Dill-Kreis vorbeikommen.",
      path: "/bubble-waffles-wetzlar",
      keywords: [
        "Bubble Waffle Wetzlar",
        "Waffel Gießen",
        "Dessert Lahn-Dill-Kreis",
        "Café Wetzlar Altstadt",
        "Hongkong Waffle Hessen",
        "Süßes Essen Wetzlar",
        "Eis in Waffel",
        "Hey Fede Waffeln",
      ],
    });
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsxs)("div", {
          className: "bg-bg-creme",
          children: [
            (0, b.jsx)("section", {
              className:
                "relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30",
              children: (0, b.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                children: [
                  (0, b.jsxs)("div", {
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "inline-block px-4 py-1.5 bg-terracotta text-white font-nunito font-bold rounded-full text-sm mb-6 shadow-sm",
                        children: "Das Original in Mittelhessen",
                      }),
                      (0, b.jsx)("h1", {
                        className:
                          "font-calistoga text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]",
                        children:
                          "Die beste Bubble Waffle im gesamten Lahn-Dill-Kreis",
                      }),
                      (0, b.jsx)("p", {
                        className:
                          "font-nunito text-lg text-[#5c3d35] leading-relaxed mb-8 max-w-[500px]",
                        children:
                          "Vergiss trockene, langweilige Waffeln. In der historischen Wetzlarer Langgasse backen wir das Streetfood-Original aus Hongkong. Viele unserer Stammgäste fahren extra aus Gießen, Marburg und Herborn zu uns, um dieses Meisterwerk der Texturen zu erleben.",
                      }),
                      (0, b.jsx)(g.PrimaryButton, {
                        href: "/menu",
                        children: "Jetzt Karte ansehen",
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "aspect-[4/5] bg-[#eedfcc] rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500",
                        children: (0, b.jsx)("span", {
                          className: "text-8xl",
                          children: "🧇",
                        }),
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform -rotate-6",
                        children: [
                          (0, b.jsx)("p", {
                            className:
                              "font-calistoga text-terracotta text-2xl",
                            children: "100%",
                          }),
                          (0, b.jsx)("p", {
                            className:
                              "font-nunito font-bold text-xs uppercase tracking-widest text-charcoal",
                            children: "Hausgemacht",
                          }),
                        ],
                      }),
                    ],
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
                    sub: "Warum unsere Waffeln Wetzlar begeistern",
                    children: "Die Magie der Texturen",
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "prose prose-lg prose-headings:font-calistoga prose-headings:text-charcoal prose-p:font-nunito prose-p:text-[#5c3d35] mt-12 mx-auto",
                    children: [
                      (0, b.jsx)("h2", {
                        children: "Handwerkskunst am Wetzlarer Eisenmarkt",
                      }),
                      (0, b.jsx)("p", {
                        children:
                          'Was macht eine Bubble Waffle so unwiderstehlich? Es ist das perfekte, physikalische Zusammenspiel von Hitze, Teig und Gusseisen. Während eine klassische Waffel oft durchgehend weich oder komplett knusprig ist, bieten wir bei Hey Fede! in Wetzlar das Beste aus beiden Welten. Durch das schnelle Wenden unserer speziellen Waffeleisen im exakt richtigen Moment karamellisieren die dünnen Verbindungsstege zwischen den "Bubbles" goldbraun. Gleichzeitig schließen die Kapseln heiße Luft ein und bleiben im Kern unfassbar fluffig.',
                      }),
                      (0, b.jsx)("h2", {
                        children:
                          "Dein Dessert-Trip aus Gießen, Marburg & Limburg",
                      }),
                      (0, b.jsxs)("p", {
                        children: [
                          "Wir hören es fast täglich:",
                          " ",
                          (0, b.jsx)("em", {
                            children:
                              '"Für diese Waffel fahre ich gerne die halbe Stunde aus Gießen!"',
                          }),
                          " ",
                          "Unsere Dessertbar hat sich schnell als Pilgerstätte für Süßspeisen-Liebhaber im gesamten Radius von 50 Kilometrom etabliert. Egal ob als krönender Abschluss nach einem Shopping-Trip im Forum Wetzlar, als Ziel eines Familienausflugs aus Braunfels oder als After-Work-Treff für Pendler aus Dillenburg – Hey Fede! ist der süße Ankerpunkt in Mittelhessen.",
                        ],
                      }),
                      (0, b.jsx)("h3", {
                        children: "Die unendliche Vielfalt der Toppings",
                      }),
                      (0, b.jsx)("p", {
                        children:
                          "Eine frisch gebackene, warme Waffel-Tüte ist für uns nur die leere Leinwand. Wir füllen sie mit unserem seidigen, hauseigenen Softeis, das bei perfekten Minusgraden gezapft wird. Darüber gießen wir hausgemachte Soßen – von fruchtigem Erdbeer-Püree bis hin zu reichhaltiger belgischer Schokolade. Gekrönt wird das Spektakel mit frischen Früchten, die wir von regionalen Lieferanten beziehen, sowie knusprigen Crumbles, zerkrümelten Keksen oder Nüssen. Jeder Bissen ist ein neues Abenteuer.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, b.jsxs)("section", {
              className:
                "py-24 bg-terracotta relative text-center text-white overflow-hidden",
              children: [
                (0, b.jsx)("div", {
                  className: "absolute top-0 left-0 w-full -translate-y-1",
                  children: (0, b.jsx)(f.WaveDivider, {
                    fromColor: "#ffffff",
                    toColor: "#CC624C",
                    variant: 1,
                  }),
                }),
                (0, b.jsxs)(d.FadeUp, {
                  className: "max-w-2xl mx-auto px-6 relative z-10 pt-12",
                  children: [
                    (0, b.jsx)("h2", {
                      className: "font-calistoga text-4xl mb-6",
                      children: "Lust auf eine Waffel auf dem Sofa?",
                    }),
                    (0, b.jsx)("p", {
                      className: "font-nunito text-lg text-cream/90 mb-10",
                      children:
                        "Wir liefern unsere Bubble Waffles natürlich auch direkt zu dir nach Hause. Perfekt verpackt, damit sie knusprig bleiben. Entdecke unseren Lieferservice im Lahn-Dill-Kreis.",
                    }),
                    (0, b.jsx)("a", {
                      href: "/lieferservice-desserts-lahn-dill",
                      className:
                        "inline-block bg-white text-terracotta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors",
                      children: "Zum Lieferservice →",
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)(h.SchemaScripts, {
              schema: [
                {
                  "@context": "https://schema.org",
                  "@type": "ItemPage",
                  mainEntity: {
                    "@type": "Product",
                    name: "Original Bubble Waffles Wetzlar",
                    description:
                      "Hausgemachte Bubble Waffles nach authentischem Rezept, frisch gebacken in der Wetzlarer Langgasse. Außen knusprig, innen fluffig, mit Softeis und Premium-Toppings.",
                    image: `${i.SITE.url}/og/home.png`,
                    brand: { "@type": "Brand", name: "Hey Fede!" },
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "EUR",
                      price: "6.90",
                      availability: "https://schema.org/InStock",
                      seller: {
                        "@type": "Restaurant",
                        "@id": `${i.SITE.url}/#localbusiness`,
                      },
                    },
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
    ]);
  },
  42914,
  (a) => {
    a.n(a.i(545065));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bidcsv._.js.map
