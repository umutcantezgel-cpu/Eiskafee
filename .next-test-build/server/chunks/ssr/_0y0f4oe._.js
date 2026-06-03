module.exports = [
  287828,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  162591,
  (a) => {
    "use strict";
    var b = a.i(287828);
    a.s(["Mail", () => b.default]);
  },
  759314,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("arrow-right", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]);
    a.s(["default", 0, b]);
  },
  818783,
  (a) => {
    "use strict";
    var b = a.i(759314);
    a.s(["ArrowRight", () => b.default]);
  },
  202558,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(346271),
      d = a.i(621216);
    a.s([
      "GiganticTypography",
      0,
      function ({
        children: a,
        className: e = "",
        delay: f = 0,
        highlightWords: g = [],
        highlightColor: h = "#CC624C",
        as: i = "div",
      }) {
        let j = (0, d.useReducedMotion)(),
          k = "string" == typeof a ? a : String(a),
          l = k.split(" "),
          m = {
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
            hidden: {
              opacity: 0,
              y: 80,
              scale: 0.8,
              filter: "blur(10px)",
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
          },
          n = c.motion[i];
        return j
          ? (0, b.jsx)(i, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${e}`,
              children: k,
            })
          : (0, b.jsx)(n, {
              variants: {
                hidden: { opacity: 0 },
                visible: (a = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: f },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${e}`,
              children: l.map((a, d) => {
                let e = a.replace(/[.,!?]/g, ""),
                  f = g.includes(e);
                return (0, b.jsx)(
                  c.motion.span,
                  {
                    variants: m,
                    style: { color: f ? h : "inherit" },
                    className: "inline-block relative z-10",
                    children: a,
                  },
                  d,
                );
              }),
            });
      },
    ]);
  },
  150096,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("arrow-down", [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
    ]);
    a.s(["default", 0, b]);
  },
  347929,
  (a) => {
    "use strict";
    var b = a.i(150096);
    a.s(["ArrowDown", () => b.default]);
  },
  755137,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("circle-check-big", [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
    ]);
    a.s(["default", 0, b]);
  },
  478930,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("gift", [
      ["path", { d: "M12 7v14", key: "1akyts" }],
      [
        "path",
        { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "1sqzm4" },
      ],
      [
        "path",
        {
          d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",
          key: "kc0143",
        },
      ],
      [
        "rect",
        { x: "3", y: "7", width: "18", height: "4", rx: "1", key: "1hberx" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  705632,
  (a) => {
    "use strict";
    var b = a.i(478930);
    a.s(["Gift", () => b.default]);
  },
  609e3,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(995180),
      f = a.i(901299),
      g = a.i(347929),
      h = a.i(162591),
      i = a.i(755137),
      i = i,
      j = a.i(705632),
      k = a.i(818783),
      l = a.i(202558);
    a.s(
      [
        "default",
        0,
        function () {
          let [a, m] = (0, c.useState)(50),
            [n, o] = (0, c.useState)("mail"),
            [p, q] = (0, c.useState)(""),
            [r, s] = (0, c.useState)(""),
            [t, u] = (0, c.useState)(""),
            { scrollYProgress: v } = (0, e.useScroll)(),
            w = (0, f.useTransform)(v, [0, 1], [200, -100]),
            x = (0, f.useTransform)(v, [0, 1], [-10, 10]);
          return (0, b.jsxs)("div", {
            className:
              "min-h-[300vh] bg-transparent text-charcoal font-nunito relative",
            children: [
              (0, b.jsxs)("section", {
                className:
                  "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
                children: [
                  (0, b.jsx)(l.GiganticTypography, {
                    as: "h1",
                    highlightWords: ["Freude."],
                    highlightColor: "#CC624C",
                    className:
                      "text-center justify-center max-w-[1200px] mx-auto",
                    children: "Verschenke Freude.",
                  }),
                  (0, b.jsx)("p", {
                    className:
                      "font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80",
                    children:
                      "Scroll weiter, um deinen Liebsten einen süßen Moment zu kreieren.",
                  }),
                  (0, b.jsx)(d.motion.div, {
                    animate: { y: [0, 10, 0] },
                    transition: { repeat: 1 / 0, duration: 2 },
                    className:
                      "absolute bottom-10 flex flex-col items-center opacity-50",
                    children: (0, b.jsx)(g.ArrowDown, {
                      size: 40,
                      className: "text-terracotta",
                    }),
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                className:
                  "min-h-[150vh] px-6 relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20 max-w-[1400px] mx-auto py-20",
                children: [
                  (0, b.jsx)(d.motion.div, {
                    style: { y: w, rotate: x },
                    className: "w-full max-w-[500px]",
                    children: (0, b.jsxs)("div", {
                      className:
                        "relative bg-terracotta rounded-[40px] p-12 text-white overflow-hidden shadow-clay-lg",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "absolute -top-12 -right-10 w-[250px] h-[250px] bg-white/10 rounded-full blur-2xl",
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "absolute top-1/2 -left-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2",
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "absolute top-1/2 -right-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2",
                        }),
                        (0, b.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "text-sm font-black tracking-widest uppercase opacity-80 mb-6",
                              children: "Hey Fede! Gutschein",
                            }),
                            (0, b.jsxs)("div", {
                              className: "flex items-baseline gap-4 mt-2",
                              children: [
                                (0, b.jsx)("span", {
                                  className:
                                    "font-calistoga text-8xl md:text-[120px] leading-none",
                                  children: "Frei" === a ? "??" : a,
                                }),
                                (0, b.jsx)("span", {
                                  className:
                                    "font-calistoga text-5xl opacity-90",
                                  children: "€",
                                }),
                              ],
                            }),
                            (0, b.jsx)("div", {
                              className:
                                "text-sm mt-8 opacity-90 font-bold uppercase tracking-wider",
                              children: "Einlösbar im Laden · 36 Monate gültig",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, b.jsx)("div", {
                    className: "w-full max-w-[600px] space-y-10",
                    children: (0, b.jsxs)("div", {
                      className:
                        "bg-cream/80 backdrop-blur-xl p-8 rounded-[40px] shadow-clay border border-peach/50 space-y-8",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "text-sm font-black text-terracotta tracking-widest uppercase mb-4",
                              children: "Wähle den Betrag",
                            }),
                            (0, b.jsx)("div", {
                              className: "grid grid-cols-3 gap-3",
                              children: [10, 25, 50, 75, 100, "Frei"].map((c) =>
                                (0, b.jsx)(
                                  "button",
                                  {
                                    onClick: () => m(c),
                                    className: `rounded-2xl py-4 text-center font-calistoga text-2xl transition-all shadow-sm ${a === c ? "bg-terracotta text-white scale-105 shadow-clay" : "bg-white/50 text-charcoal hover:bg-white/80"}`,
                                    children:
                                      "number" == typeof c ? `${c} €` : c,
                                  },
                                  c,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "text-sm font-black text-terracotta tracking-widest uppercase mb-4",
                              children: "Zustellung",
                            }),
                            (0, b.jsxs)("div", {
                              className: "flex flex-col gap-3",
                              children: [
                                (0, b.jsxs)("button", {
                                  onClick: () => o("mail"),
                                  className: `bg-white/50 rounded-2xl p-4 flex gap-4 items-center transition-all ${"mail" === n ? "ring-4 ring-terracotta bg-white" : "hover:bg-white/80"}`,
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0",
                                      children: (0, b.jsx)(h.Mail, {
                                        size: 24,
                                        className: "text-terracotta",
                                      }),
                                    }),
                                    (0, b.jsxs)("div", {
                                      className: "flex-1 text-left",
                                      children: [
                                        (0, b.jsx)("div", {
                                          className:
                                            "font-calistoga text-xl text-charcoal",
                                          children: "Per E-Mail",
                                        }),
                                        (0, b.jsx)("div", {
                                          className:
                                            "text-sm font-bold text-brown/70 mt-1",
                                          children: "Sofort verfügbar · PDF",
                                        }),
                                      ],
                                    }),
                                    "mail" === n &&
                                      (0, b.jsx)(i.default, {
                                        size: 28,
                                        className: "text-terracotta",
                                      }),
                                  ],
                                }),
                                (0, b.jsxs)("button", {
                                  onClick: () => o("mail_physical"),
                                  className: `bg-white/50 rounded-2xl p-4 flex gap-4 items-center transition-all ${"mail_physical" === n ? "ring-4 ring-terracotta bg-white" : "hover:bg-white/80"}`,
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0",
                                      children: (0, b.jsx)(j.Gift, {
                                        size: 24,
                                        className: "text-terracotta",
                                      }),
                                    }),
                                    (0, b.jsxs)("div", {
                                      className: "flex-1 text-left",
                                      children: [
                                        (0, b.jsx)("div", {
                                          className:
                                            "font-calistoga text-xl text-charcoal",
                                          children: "Edler Umschlag",
                                        }),
                                        (0, b.jsx)("div", {
                                          className:
                                            "text-sm font-bold text-brown/70 mt-1",
                                          children: "+ 3,90 € · per Post",
                                        }),
                                      ],
                                    }),
                                    "mail_physical" === n &&
                                      (0, b.jsx)(i.default, {
                                        size: 28,
                                        className: "text-terracotta",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, b.jsxs)("div", {
                              children: [
                                (0, b.jsx)("label", {
                                  className:
                                    "block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                  children: "Nachricht (optional)",
                                }),
                                (0, b.jsx)("textarea", {
                                  value: p,
                                  onChange: (a) => q(a.target.value),
                                  placeholder: "Alles Liebe...",
                                  className:
                                    "w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta min-h-[100px] resize-none",
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
                                        "block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                      children: "An (Name)",
                                    }),
                                    (0, b.jsx)("input", {
                                      type: "text",
                                      value: r,
                                      onChange: (a) => s(a.target.value),
                                      className:
                                        "w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta",
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)("div", {
                                  children: [
                                    (0, b.jsx)("label", {
                                      className:
                                        "block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                      children: "E-Mail",
                                    }),
                                    (0, b.jsx)("input", {
                                      type: "email",
                                      value: t,
                                      onChange: (a) => u(a.target.value),
                                      className:
                                        "w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("button", {
                          className:
                            "w-full bg-terracotta text-white py-6 rounded-[20px] font-black text-xl uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay mt-8",
                          children: [
                            "In den Warenkorb ",
                            (0, b.jsx)(k.ArrowRight, { size: 24 }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
      ],
      609e3,
    );
  },
];

//# sourceMappingURL=_0y0f4oe._.js.map
