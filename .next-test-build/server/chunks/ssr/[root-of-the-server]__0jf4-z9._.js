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
  797113,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    a.s(["default", 0, b]);
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
  988180,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("camera", [
      [
        "path",
        {
          d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
          key: "18u6gg",
        },
      ],
      ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
    ]);
    a.s(["default", 0, b]);
  },
  767637,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("chevron-right", [
      ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
    ]);
    a.s(["default", 0, b]);
  },
  693907,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("compass", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        {
          d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
          key: "9ktpf1",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  571461,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("message-circle", [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  428049,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("phone", [
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
          key: "9njp5v",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  15554,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("truck", [
      [
        "path",
        {
          d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
          key: "wrbu53",
        },
      ],
      ["path", { d: "M15 18H9", key: "1lyqi6" }],
      [
        "path",
        {
          d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
          key: "lysw3i",
        },
      ],
      ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
      ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
    ]);
    a.s(["default", 0, b]);
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
  157236,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ]);
    a.s(["default", 0, b]);
  },
  371029,
  (a, b, c) => {
    "use strict";
    c._ = function (a) {
      return a && a.__esModule ? a : { default: a };
    };
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0jf4-z9._.js.map
