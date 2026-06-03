(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  290135,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  96315,
  (e) => {
    "use strict";
    var t = e.i(290135);
    e.s(["Mail", () => t.default]);
  },
  364895,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("arrow-right", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]);
    e.s(["default", 0, t]);
  },
  768877,
  (e) => {
    "use strict";
    var t = e.i(364895);
    e.s(["ArrowRight", () => t.default]);
  },
  919219,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("gift", [
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
    e.s(["default", 0, t]);
  },
  402661,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("circle-check-big", [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
    ]);
    e.s(["default", 0, t]);
  },
  764154,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(846932),
      s = e.i(772328);
    e.s([
      "GiganticTypography",
      0,
      function ({
        children: e,
        className: i = "",
        delay: l = 0,
        highlightWords: r = [],
        highlightColor: c = "#CC624C",
        as: n = "div",
      }) {
        let o = (0, s.useReducedMotion)(),
          d = "string" == typeof e ? e : String(e),
          x = d.split(" "),
          h = {
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
          m = a.motion[n];
        return o
          ? (0, t.jsx)(n, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${i}`,
              children: d,
            })
          : (0, t.jsx)(m, {
              variants: {
                hidden: { opacity: 0 },
                visible: (e = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: l },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${i}`,
              children: x.map((e, s) => {
                let i = e.replace(/[.,!?]/g, ""),
                  l = r.includes(i);
                return (0, t.jsx)(
                  a.motion.span,
                  {
                    variants: h,
                    style: { color: l ? c : "inherit" },
                    className: "inline-block relative z-10",
                    children: e,
                  },
                  s,
                );
              }),
            });
      },
    ]);
  },
  441978,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("arrow-down", [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
    ]);
    e.s(["default", 0, t]);
  },
  635416,
  (e) => {
    "use strict";
    var t = e.i(441978);
    e.s(["ArrowDown", () => t.default]);
  },
  282625,
  (e) => {
    "use strict";
    var t = e.i(919219);
    e.s(["Gift", () => t.default]);
  },
  985069,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      s = e.i(846932),
      i = e.i(310542),
      l = e.i(895420),
      r = e.i(635416),
      c = e.i(96315),
      n = e.i(402661),
      n = n,
      o = e.i(282625),
      d = e.i(768877),
      x = e.i(764154);
    e.s(
      [
        "default",
        0,
        function () {
          let [e, h] = (0, a.useState)(50),
            [m, u] = (0, a.useState)("mail"),
            [p, g] = (0, a.useState)(""),
            [f, b] = (0, a.useState)(""),
            [v, w] = (0, a.useState)(""),
            { scrollYProgress: y } = (0, i.useScroll)(),
            j = (0, l.useTransform)(y, [0, 1], [200, -100]),
            N = (0, l.useTransform)(y, [0, 1], [-10, 10]);
          return (0, t.jsxs)("div", {
            className:
              "min-h-[300vh] bg-transparent text-charcoal font-nunito relative",
            children: [
              (0, t.jsxs)("section", {
                className:
                  "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
                children: [
                  (0, t.jsx)(x.GiganticTypography, {
                    as: "h1",
                    highlightWords: ["Freude."],
                    highlightColor: "#CC624C",
                    className:
                      "text-center justify-center max-w-[1200px] mx-auto",
                    children: "Verschenke Freude.",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80",
                    children:
                      "Scroll weiter, um deinen Liebsten einen süßen Moment zu kreieren.",
                  }),
                  (0, t.jsx)(s.motion.div, {
                    animate: { y: [0, 10, 0] },
                    transition: { repeat: 1 / 0, duration: 2 },
                    className:
                      "absolute bottom-10 flex flex-col items-center opacity-50",
                    children: (0, t.jsx)(r.ArrowDown, {
                      size: 40,
                      className: "text-terracotta",
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("section", {
                className:
                  "min-h-[150vh] px-6 relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20 max-w-[1400px] mx-auto py-20",
                children: [
                  (0, t.jsx)(s.motion.div, {
                    style: { y: j, rotate: N },
                    className: "w-full max-w-[500px]",
                    children: (0, t.jsxs)("div", {
                      className:
                        "relative bg-terracotta rounded-[40px] p-12 text-white overflow-hidden shadow-clay-lg",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "absolute -top-12 -right-10 w-[250px] h-[250px] bg-white/10 rounded-full blur-2xl",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute top-1/2 -left-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute top-1/2 -right-6 w-[40px] h-[40px] rounded-full bg-cream -translate-y-1/2",
                        }),
                        (0, t.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "text-sm font-black tracking-widest uppercase opacity-80 mb-6",
                              children: "Hey Fede! Gutschein",
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-baseline gap-4 mt-2",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "font-calistoga text-8xl md:text-[120px] leading-none",
                                  children: "Frei" === e ? "??" : e,
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "font-calistoga text-5xl opacity-90",
                                  children: "€",
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "text-sm mt-8 opacity-90 font-bold uppercase tracking-wider",
                              children: "Einlösbar im Laden · 36 Monate gültig",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "w-full max-w-[600px] space-y-10",
                    children: (0, t.jsxs)("div", {
                      className:
                        "bg-cream/80 backdrop-blur-xl p-8 rounded-[40px] shadow-clay border border-peach/50 space-y-8",
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "text-sm font-black text-terracotta tracking-widest uppercase mb-4",
                              children: "Wähle den Betrag",
                            }),
                            (0, t.jsx)("div", {
                              className: "grid grid-cols-3 gap-3",
                              children: [10, 25, 50, 75, 100, "Frei"].map((a) =>
                                (0, t.jsx)(
                                  "button",
                                  {
                                    onClick: () => h(a),
                                    className: `rounded-2xl py-4 text-center font-calistoga text-2xl transition-all shadow-sm ${e === a ? "bg-terracotta text-white scale-105 shadow-clay" : "bg-white/50 text-charcoal hover:bg-white/80"}`,
                                    children:
                                      "number" == typeof a ? `${a} €` : a,
                                  },
                                  a,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "text-sm font-black text-terracotta tracking-widest uppercase mb-4",
                              children: "Zustellung",
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex flex-col gap-3",
                              children: [
                                (0, t.jsxs)("button", {
                                  onClick: () => u("mail"),
                                  className: `bg-white/50 rounded-2xl p-4 flex gap-4 items-center transition-all ${"mail" === m ? "ring-4 ring-terracotta bg-white" : "hover:bg-white/80"}`,
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0",
                                      children: (0, t.jsx)(c.Mail, {
                                        size: 24,
                                        className: "text-terracotta",
                                      }),
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex-1 text-left",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "font-calistoga text-xl text-charcoal",
                                          children: "Per E-Mail",
                                        }),
                                        (0, t.jsx)("div", {
                                          className:
                                            "text-sm font-bold text-brown/70 mt-1",
                                          children: "Sofort verfügbar · PDF",
                                        }),
                                      ],
                                    }),
                                    "mail" === m &&
                                      (0, t.jsx)(n.default, {
                                        size: 28,
                                        className: "text-terracotta",
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("button", {
                                  onClick: () => u("mail_physical"),
                                  className: `bg-white/50 rounded-2xl p-4 flex gap-4 items-center transition-all ${"mail_physical" === m ? "ring-4 ring-terracotta bg-white" : "hover:bg-white/80"}`,
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center shrink-0",
                                      children: (0, t.jsx)(o.Gift, {
                                        size: 24,
                                        className: "text-terracotta",
                                      }),
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex-1 text-left",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "font-calistoga text-xl text-charcoal",
                                          children: "Edler Umschlag",
                                        }),
                                        (0, t.jsx)("div", {
                                          className:
                                            "text-sm font-bold text-brown/70 mt-1",
                                          children: "+ 3,90 € · per Post",
                                        }),
                                      ],
                                    }),
                                    "mail_physical" === m &&
                                      (0, t.jsx)(n.default, {
                                        size: 28,
                                        className: "text-terracotta",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className:
                                    "block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                  children: "Nachricht (optional)",
                                }),
                                (0, t.jsx)("textarea", {
                                  value: p,
                                  onChange: (e) => g(e.target.value),
                                  placeholder: "Alles Liebe...",
                                  className:
                                    "w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta min-h-[100px] resize-none",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("label", {
                                      className:
                                        "block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                      children: "An (Name)",
                                    }),
                                    (0, t.jsx)("input", {
                                      type: "text",
                                      value: f,
                                      onChange: (e) => b(e.target.value),
                                      className:
                                        "w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta",
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("label", {
                                      className:
                                        "block text-xs font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                      children: "E-Mail",
                                    }),
                                    (0, t.jsx)("input", {
                                      type: "email",
                                      value: v,
                                      onChange: (e) => w(e.target.value),
                                      className:
                                        "w-full bg-white/50 border-none px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("button", {
                          className:
                            "w-full bg-terracotta text-white py-6 rounded-[20px] font-black text-xl uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay mt-8",
                          children: [
                            "In den Warenkorb ",
                            (0, t.jsx)(d.ArrowRight, { size: 24 }),
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
      985069,
    );
  },
]);
