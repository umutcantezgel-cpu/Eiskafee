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
  361722,
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
      title: "Dessert Catering & Events in Hessen | Hey Fede!",
      description:
        "Mache dein Event unvergesslich! Dessert-Catering, Fede-Boxen und Sweettables für Hochzeiten & Firmenfeiern in Gießen, Marburg, Wetzlar und Frankfurt.",
      path: "/events-catering-hessen",
      keywords: [
        "Dessert Catering Wetzlar",
        "Hochzeit Sweettable Gießen",
        "Catering Hessen",
        "Firmenfeier Marburg Dessert",
        "Fede Boxen Wetzlar",
        "Event Catering Lahn-Dill-Kreis",
        "Süßes Catering Frankfurt",
        "Hey Fede Catering",
      ],
    });
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsxs)("div", {
          className: "bg-bg-creme",
          children: [
            (0, b.jsxs)("section", {
              className:
                "relative pt-[120px] pb-24 bg-[#5c3d35] text-white overflow-hidden",
              children: [
                (0, b.jsxs)("div", {
                  className: "max-w-7xl mx-auto px-6 relative z-10 text-center",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "inline-block px-4 py-1.5 bg-terracotta text-white font-nunito font-bold rounded-full text-sm mb-6 shadow-sm",
                      children: "B2B & Private Feiern in ganz Hessen",
                    }),
                    (0, b.jsxs)("h1", {
                      className:
                        "font-calistoga text-5xl md:text-7xl mb-6 leading-[1.1]",
                      children: [
                        "Dessert Catering, das",
                        (0, b.jsx)("br", {}),
                        "Begeisterung weckt",
                      ],
                    }),
                    (0, b.jsx)("p", {
                      className:
                        "font-nunito text-lg text-cream/80 leading-relaxed mb-10 max-w-[600px] mx-auto",
                      children:
                        "Von der eleganten Hochzeit in Marburg bis zum Corporate Event im Frankfurter Norden. Wir bringen die Magie der Bubble Waffles und unsere exklusiven Fede Boxen direkt auf dein Event.",
                    }),
                    (0, b.jsx)(g.PrimaryButton, {
                      href: "/kontakt",
                      sectionBg: "#5c3d35",
                      className: "bg-white text-charcoal hover:bg-cream",
                      children: "Jetzt Event-Anfrage stellen",
                    }),
                  ],
                }),
                (0, b.jsx)("div", {
                  className: "absolute bottom-0 left-0 w-full translate-y-1",
                  children: (0, b.jsx)(f.WaveDivider, {
                    fromColor: "#5c3d35",
                    toColor: "#f5efe8",
                    variant: 2,
                  }),
                }),
              ],
            }),
            (0, b.jsx)("section", {
              className: "py-24 bg-cream relative",
              children: (0, b.jsxs)(d.FadeUp, {
                className: "max-w-5xl mx-auto px-6",
                children: [
                  (0, b.jsx)(e.SectionTitle, {
                    sub: "Das Highlight deiner Feier",
                    children: "Die Fede Boxen",
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center",
                    children: [
                      (0, b.jsxs)("div", {
                        className:
                          "prose prose-lg prose-headings:font-calistoga prose-headings:text-charcoal prose-p:font-nunito prose-p:text-[#5c3d35]",
                        children: [
                          (0, b.jsx)("h2", {
                            children: "Süße Vielfalt, perfekt präsentiert",
                          }),
                          (0, b.jsxs)("p", {
                            children: [
                              "Kuchenbüffet war gestern. Überrasche deine Gäste oder Mitarbeiter mit unseren maßgeschneiderten",
                              " ",
                              (0, b.jsx)("strong", { children: "Fede Boxen" }),
                              ". Diese edlen Präsentationsboxen werden frisch in unserer Wetzlarer Dessertbar bestückt und enthalten eine sorgfältig kuratierte Auswahl unserer besten Kreationen.",
                            ],
                          }),
                          (0, b.jsxs)("ul", {
                            children: [
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    children: "Bubble Waffle Minis:",
                                  }),
                                  " Handlich, knusprig und perfekt portioniert.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    children: "Crêpe-Röllchen:",
                                  }),
                                  " Gefüllt mit Premium-Nougatcreme und frischen Erdbeeren.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    children: "Churros & Dips:",
                                  }),
                                  " Spanischer Flair mit hausgemachter belgischer Schokoladensoße.",
                                ],
                              }),
                            ],
                          }),
                          (0, b.jsx)("p", {
                            children:
                              "Egal, ob du ein Team-Meeting in Gießen aufwerten willst, oder einen Sweettable für eine Traumhochzeit in Braunfels planst – wir haben die perfekte Box für dich.",
                          }),
                        ],
                      }),
                      (0, b.jsx)("div", {
                        className: "relative",
                        children: (0, b.jsxs)("div", {
                          className:
                            "aspect-square bg-white rounded-[40px] border border-peach/50 shadow-lg p-8 flex flex-col justify-center items-center text-center",
                          children: [
                            (0, b.jsx)("span", {
                              className: "text-7xl mb-6",
                              children: "🎁",
                            }),
                            (0, b.jsx)("h3", {
                              className:
                                "font-calistoga text-2xl text-charcoal mb-2",
                              children: "Corporate & Wedding",
                            }),
                            (0, b.jsx)("p", {
                              className: "font-nunito text-[#5c3d35]",
                              children: "Lieferung im gesamten 50km Radius",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, b.jsx)(h.SchemaScripts, {
              schema: [
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: "Hey Fede! Dessert Catering & Events",
                  description:
                    "Exklusives Dessert-Catering für Hochzeiten, Geburtstage und Firmen-Events. Wir liefern unsere Fede-Boxen und Sweettables im Radius von 50 km (Wetzlar, Gießen, Marburg, Butzbach, Frankfurt-Nord).",
                  provider: {
                    "@type": "Restaurant",
                    "@id": `${i.SITE.url}/#localbusiness`,
                  },
                  areaServed: [
                    { "@type": "City", name: "Wetzlar" },
                    { "@type": "City", name: "Gießen" },
                    { "@type": "City", name: "Marburg" },
                    { "@type": "City", name: "Frankfurt am Main" },
                    { "@type": "City", name: "Limburg an der Lahn" },
                    { "@type": "City", name: "Bad Nauheim" },
                    { "@type": "City", name: "Butzbach" },
                    { "@type": "AdministrativeArea", name: "Hessen" },
                  ],
                  serviceType: "Catering",
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
  297027,
  (a) => {
    a.n(a.i(361722));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09im8do._.js.map
