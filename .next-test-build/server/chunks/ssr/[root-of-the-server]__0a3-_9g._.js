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
  453339,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]);
    a.s(["default", 0, b]);
  },
  157236,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ]);
    a.s(["default", 0, b]);
  },
  468069,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("bike", [
      ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
      ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }],
    ]);
    a.s(["default", 0, b]);
  },
  881005,
  (a) => {
    "use strict";
    var b = a.i(453339);
    a.s(["MapPin", () => b.default]);
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
  492682,
  (a) => {
    "use strict";
    var b = a.i(907997),
      c = a.i(249924),
      d = a.i(431521),
      e = a.i(507655),
      f = a.i(595789),
      g = a.i(137720),
      h = a.i(797644),
      i = a.i(812313),
      j = a.i(881005),
      k = a.i(157236),
      k = k,
      l = a.i(468069),
      l = l;
    let m = (0, c.buildMetadata)({
      title: "Dessert Lieferservice Wetzlar & Lahn-Dill-Kreis | Hey Fede!",
      description:
        "Süßigkeiten, Bubble Waffles und Eis direkt nach Hause bestellen. 0€ Liefergebühr via Lieferando. Wir liefern in Wetzlar, Lahnau, Solms und Umgebung.",
      path: "/lieferservice-desserts-lahn-dill",
      keywords: [
        "Dessert bestellen Wetzlar",
        "Süßigkeiten Lieferservice",
        "Waffeln bestellen Lahn-Dill-Kreis",
        "Eis Lieferservice Wetzlar",
        "Lieferando Dessert",
        "Essen bestellen Gießen Umgebung",
        "Hey Fede Lieferservice",
        "Nachtisch bestellen",
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
              (0, b.jsxs)("section", {
                className:
                  "relative pt-[120px] pb-24 bg-terracotta text-white overflow-hidden",
                children: [
                  (0, b.jsxs)("div", {
                    className:
                      "max-w-7xl mx-auto px-6 relative z-10 text-center",
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "inline-block px-4 py-1.5 bg-white text-terracotta font-nunito font-bold rounded-full text-sm mb-6 shadow-sm",
                        children: "0€ Liefergebühr via Lieferando",
                      }),
                      (0, b.jsxs)("h1", {
                        className:
                          "font-calistoga text-5xl md:text-7xl mb-6 leading-[1.1]",
                        children: [
                          "Der süßeste Lieferservice",
                          (0, b.jsx)("br", {}),
                          "in Wetzlar",
                        ],
                      }),
                      (0, b.jsx)("p", {
                        className:
                          "font-nunito text-lg text-cream/90 leading-relaxed mb-10 max-w-[600px] mx-auto",
                        children:
                          "Regenwetter in der Altstadt? Kein Problem! Mach es dir auf dem Sofa bequem. Wir bringen dir unsere frisch gebackenen Bubble Waffles, Crêpes und Premium-Eisbecher direkt an die Haustür – im gesamten Lahn-Dill-Kreis.",
                      }),
                      (0, b.jsx)(g.PrimaryButton, {
                        href: i.BUSINESS.lieferandoUrl,
                        sectionBg: "#ffffff",
                        className: "text-terracotta shadow-lg",
                        children: "Jetzt über Lieferando bestellen →",
                      }),
                    ],
                  }),
                  (0, b.jsx)("div", {
                    className: "absolute bottom-0 left-0 w-full translate-y-1",
                    children: (0, b.jsx)(f.WaveDivider, {
                      fromColor: "#CC624C",
                      toColor: "#ffffff",
                      variant: 3,
                    }),
                  }),
                ],
              }),
              (0, b.jsx)("section", {
                className: "py-24 bg-white relative",
                children: (0, b.jsxs)(d.FadeUp, {
                  className: "max-w-6xl mx-auto px-6",
                  children: [
                    (0, b.jsx)(e.SectionTitle, {
                      sub: "Bequem, schnell & frisch",
                      children: "So funktioniert's",
                    }),
                    (0, b.jsx)("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16",
                      children: [
                        {
                          icon: (0, b.jsx)(j.MapPin, {
                            className: "w-8 h-8 text-terracotta",
                          }),
                          title: "Dein Liefergebiet",
                          desc: "Wir beliefern nicht nur die Wetzlarer Innenstadt. Unser Radius erstreckt sich über Lahnau, Solms, Aßlar bis in angrenzende Teile des Lahn-Dill-Kreises.",
                        },
                        {
                          icon: (0, b.jsx)(k.default, {
                            className: "w-8 h-8 text-terracotta",
                          }),
                          title: "Schnelle Zubereitung",
                          desc: "Sobald deine Bestellung reinkommt, wird der Waffelteig frisch auf das Eisen gegossen. Keine Vorproduktion, 100% à la minute Qualität.",
                        },
                        {
                          icon: (0, b.jsx)(l.default, {
                            className: "w-8 h-8 text-terracotta",
                          }),
                          title: "Sichere Verpackung",
                          desc: "Wir nutzen spezielle Thermo-Verpackungen. Dein Eis kommt eisgekühlt und deine Waffel angenehm warm bei dir an – getrennt verpackt für den optimalen Genuss.",
                        },
                      ].map((a, c) =>
                        (0, b.jsxs)(
                          "div",
                          {
                            className:
                              "bg-sand rounded-[32px] p-8 text-center border border-peach/30 shadow-sm hover:shadow-md transition-shadow",
                            children: [
                              (0, b.jsx)("div", {
                                className:
                                  "bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm",
                                children: a.icon,
                              }),
                              (0, b.jsx)("h3", {
                                className:
                                  "font-calistoga text-2xl text-charcoal mb-4",
                                children: a.title,
                              }),
                              (0, b.jsx)("p", {
                                className:
                                  "font-nunito text-[#5c3d35] leading-relaxed",
                                children: a.desc,
                              }),
                            ],
                          },
                          c,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "py-24 bg-sand relative",
                children: (0, b.jsxs)(d.FadeUp, {
                  className:
                    "max-w-4xl mx-auto px-6 prose prose-lg prose-headings:font-calistoga prose-headings:text-charcoal prose-p:font-nunito prose-p:text-[#5c3d35]",
                  children: [
                    (0, b.jsx)("h2", {
                      children: "Dein Dessert-Delivery für jeden Anlass",
                    }),
                    (0, b.jsx)("p", {
                      children:
                        "Stell dir vor: Es ist ein verregneter Sonntagabend in Hessen. Der letzte Tatort läuft im Fernsehen, und plötzlich packt dich dieser unbändige Heißhunger auf etwas Süßes. Früher musstest du dich in Gießen oder Wetzlar noch ins Auto setzen – heute öffnest du einfach Lieferando.",
                    }),
                    (0, b.jsx)("p", {
                      children:
                        "Unser Dessert-Lieferservice schließt eine gewaltige Lücke in der Wetzlarer Gastronomie. Ob als süße Überraschung für die Date-Night zu Hause, als Nervennahrung für Studierende der THM, die bis tief in die Nacht an Hausarbeiten tippen, oder als Highlight auf eurer WG-Party: Hey Fede! liefert das volle Dessertbar-Erlebnis.",
                    }),
                    (0, b.jsx)("h3", {
                      children: "Bestelle ohne Liefergebühr",
                    }),
                    (0, b.jsxs)("p", {
                      children: [
                        "Wir möchten, dass du den puren Genuss ohne versteckte Kosten erlebst. Deshalb bieten wir bei Bestellungen über unseren Lieferando-Partner-Shop ",
                        (0, b.jsx)("strong", { children: "0€ Liefergebühr" }),
                        " an (ab einem geringen Mindestbestellwert, abhängig von deiner PLZ).",
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsx)(h.SchemaScripts, {
                schema: [
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Dessert Lieferservice Wetzlar & Lahn-Dill",
                    description:
                      "Bestelle frische Bubble Waffles, Crêpes und Eis bequem nach Hause. Schnelle Lieferung in Wetzlar und im gesamten Lahn-Dill-Kreis.",
                    mainEntity: {
                      "@type": "Service",
                      name: "Dessert Delivery Hey Fede!",
                      provider: {
                        "@type": "Restaurant",
                        "@id": `${i.SITE.url}/#localbusiness`,
                      },
                      areaServed: [
                        { "@type": "City", name: "Wetzlar" },
                        { "@type": "City", name: "Lahnau" },
                        { "@type": "City", name: "Solms" },
                        { "@type": "City", name: "Aßlar" },
                        {
                          "@type": "AdministrativeArea",
                          name: "Lahn-Dill-Kreis",
                        },
                      ],
                      hasOfferCatalog: {
                        "@type": "OfferCatalog",
                        name: "Lieferservice Speisekarte",
                        itemListElement: [
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Product",
                              name: "Bubble Waffles Delivery",
                            },
                          },
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Product",
                              name: "Eisbecher Delivery",
                            },
                          },
                        ],
                      },
                      offers: {
                        "@type": "Offer",
                        priceCurrency: "EUR",
                        price: "0.00",
                        name: "Kostenlose Lieferung über Lieferando",
                        deliveryChargeSpecification: {
                          "@type": "DeliveryChargeSpecification",
                          price: "0.00",
                          priceCurrency: "EUR",
                          appliesToDeliveryMethod:
                            "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
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
        m,
        "revalidate",
        0,
        60,
      ],
      492682,
    );
  },
  649880,
  (a) => {
    a.n(a.i(492682));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a3-_9g._.js.map
