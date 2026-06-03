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
  797113,
  (a) => {
    "use strict";
    let b = (0, a.i(892277).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    a.s(["default", 0, b]);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0wwybk.._.js.map
