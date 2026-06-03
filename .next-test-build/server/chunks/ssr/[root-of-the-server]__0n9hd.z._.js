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
  965264,
  (a) => {
    "use strict";
    var b = a.i(907997);
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsx)("div", {
          className: "bg-bg-creme min-h-screen pt-20",
          children: (0, b.jsx)("section", {
            className:
              "min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 border-b-8 border-terracotta bg-bg-creme",
            children: (0, b.jsxs)("div", {
              className: "max-w-4xl mx-auto space-y-6",
              children: [
                (0, b.jsx)("h1", {
                  className: "font-heading text-terracotta drop-shadow-sm",
                  children: "Hey Fede!",
                }),
                (0, b.jsx)("p", {
                  className:
                    "font-body font-black text-terracotta text-[clamp(1.2rem,3vw,2rem)] tracking-wide uppercase",
                  children: "Dessertbar & Café",
                }),
                (0, b.jsx)("p", {
                  className:
                    "font-body font-normal text-terracotta/80 text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto leading-relaxed mt-8",
                  children:
                    "Ein neues Kapitel, ein frisches Design. Unsere Bubble Waffles und Spezialitäten präsentieren sich nun in einem warmen Creme-Terracotta Gewand. Fühl dich wie zuhause.",
                }),
                (0, b.jsxs)("div", {
                  className: "pt-8 flex gap-4 justify-center flex-wrap",
                  children: [
                    (0, b.jsx)("button", {
                      className:
                        "font-body font-black bg-terracotta text-bg-creme px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1",
                      children: "Menü entdecken",
                    }),
                    (0, b.jsx)("button", {
                      className:
                        "font-body font-black bg-beige text-terracotta px-8 py-4 rounded-full hover:bg-peach transition-all shadow-sm hover:shadow-md",
                      children: "Besuch uns",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      },
    ]);
  },
  994479,
  (a) => {
    a.n(a.i(965264));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0n9hd.z._.js.map
