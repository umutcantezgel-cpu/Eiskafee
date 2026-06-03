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
  953292,
  (a) => {
    "use strict";
    var b = a.i(907997),
      c = a.i(249924),
      d = a.i(431521),
      e = a.i(507655),
      f = a.i(797644),
      g = a.i(812313);
    let h = (0, c.buildMetadata)({
      title: "Eisdiele Wetzlar & Special Shakes | Hey Fede!",
      description:
        "Das beste Softeis in Wetzlar! Entdecke unsere gigantischen 500ml Eisbecher und extravaganten Special Milkshakes. Erfrischung pur direkt am Eisenmarkt.",
      path: "/eisdiele-wetzlar-special-shakes",
      keywords: [
        "Eisdiele Wetzlar",
        "Eis essen Wetzlar Altstadt",
        "Softeis Hessen",
        "Special Shakes Lahn-Dill",
        "Milchshake Gießen Umgebung",
        "Eisbecher bestellen Wetzlar",
        "Sommer Dessert Wetzlar",
        "Hey Fede Eis",
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
                "relative pt-[120px] pb-24 bg-cream overflow-hidden border-b border-peach/30",
              children: (0, b.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                children: [
                  (0, b.jsx)("div", {
                    className: "order-2 md:order-1 relative",
                    children: (0, b.jsx)("div", {
                      className:
                        "aspect-[4/5] bg-white rounded-[40px] border-4 border-peach/50 shadow-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500",
                      children: (0, b.jsx)("span", {
                        className: "text-8xl",
                        children: "🥤",
                      }),
                    }),
                  }),
                  (0, b.jsxs)("div", {
                    className: "order-1 md:order-2",
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "inline-block px-4 py-1.5 bg-terracotta text-white font-nunito font-bold rounded-full text-sm mb-6 shadow-sm",
                        children: "Erfrischung pur am Eisenmarkt",
                      }),
                      (0, b.jsx)("h1", {
                        className:
                          "font-calistoga text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]",
                        children: "Deine moderne Eisdiele in Wetzlar",
                      }),
                      (0, b.jsx)("p", {
                        className:
                          "font-nunito text-lg text-[#5c3d35] leading-relaxed mb-8 max-w-[500px]",
                        children:
                          "Kugel-Eis war gestern. Erlebe die seidige Textur unseres frisch gezapften Softeises in gigantischen 500ml Bechern oder als Basis für unsere legendären Special Shakes. Ein kühles Meisterwerk für heiße Sommertage im Lahn-Dill-Kreis.",
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
                    sub: "Nicht einfach nur ein Milchshake",
                    children: "Die Special Shakes",
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "prose prose-lg prose-headings:font-calistoga prose-headings:text-charcoal prose-p:font-nunito prose-p:text-[#5c3d35] mt-12 mx-auto",
                    children: [
                      (0, b.jsx)("h2", {
                        children: "Die Kunst des perfekten Shakes in Hessen",
                      }),
                      (0, b.jsxs)("p", {
                        children: [
                          "Wenn die Sonne über der Wetzlarer Altstadt und der Alten Lahnbrücke scheint, gibt es nichts Besseres als eine eiskalte Erfrischung. Doch wir bei Hey Fede! geben uns nicht mit einem einfachen Schoko-Milchshake zufrieden. Unsere",
                          " ",
                          (0, b.jsx)("strong", { children: "Special Shakes" }),
                          " sind hochstapelnde Kunstwerke.",
                        ],
                      }),
                      (0, b.jsx)("p", {
                        children:
                          "Wir nutzen unser hauseigenes Softeis als cremige Basis. Der Glasrand wird aufwendig mit Schokolade, Karamell oder Frosting verziert und mit knusprigen Crumbles besetzt. Das Sahnehäubchen wird wörtlich genommen und zusätzlich mit Brownie-Stücken, ganzen Keksen oder frischen Erdbeeren gekrönt. Kein Wunder, dass unsere Shakes auf Instagram so beliebt sind und Gäste aus Butzbach und Weilburg anlocken.",
                      }),
                      (0, b.jsx)("h2", {
                        children: "500ml Eisbecher: Das XL Eis-Erlebnis",
                      }),
                      (0, b.jsx)("p", {
                        children:
                          "Wer Eis liebt, wird unsere 500ml Eisbecher vergöttern. Wir schichten cremiges Softeis im perfekten Wechsel mit fruchtigen Soßen, Nuss-Nougat-Creme und knusprigen Toppings. Egal ob du deinen Eisbecher nach dem Spaziergang durch Wetzlar direkt bei uns im Café genießt, oder ihn dir entspannt über Lieferando nach Lahnau oder Aßlar bestellst – die Qualität bleibt kompromisslos hoch.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, b.jsx)(f.SchemaScripts, {
              schema: [
                {
                  "@context": "https://schema.org",
                  "@type": "ItemPage",
                  mainEntity: {
                    "@type": "Product",
                    name: "Special Shakes & Premium Eisbecher",
                    description:
                      "Gigantische 500ml Special Shakes und frische Softeis-Becher, meisterhaft dekoriert mit Premium-Toppings. Die moderne Eisdiele in der Wetzlarer Altstadt.",
                    image: `${g.SITE.url}/og/menu.png`,
                    brand: { "@type": "Brand", name: "Hey Fede!" },
                    category: "Ice Cream & Milkshakes",
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "EUR",
                      price: "5.50",
                      availability: "https://schema.org/InStock",
                      seller: {
                        "@type": "IceCreamShop",
                        "@id": `${g.SITE.url}/#localbusiness`,
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
      h,
      "revalidate",
      0,
      60,
    ]);
  },
  823850,
  (a) => {
    a.n(a.i(953292));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0v93jnn._.js.map
