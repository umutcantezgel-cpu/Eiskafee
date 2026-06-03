module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
  863414,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("arrow-left", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    a.s(["default", 0, b]);
  },
  219107,
  (a) => {
    "use strict";
    var b = a.i(863414);
    a.s(["ArrowLeft", () => b.default]);
  },
  206176,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("lock", [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1",
        },
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
    ]);
    a.s(["default", 0, b]);
  },
  139353,
  (a) => {
    "use strict";
    var b = a.i(206176);
    a.s(["Lock", () => b.default]);
  },
  702918,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    a.s(["default", 0, b]);
  },
  875160,
  (a) => {
    "use strict";
    var b = a.i(702918);
    a.s(["Loader2", () => b.default]);
  },
  999272,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(50944),
      e = a.i(262536),
      f = a.i(875160);
    a.s([
      "AuthGuard",
      0,
      function ({ children: a, requireAdmin: g = !1 }) {
        let { user: h, role: i, loading: j } = (0, e.useAuth)(),
          k = (0, d.useRouter)(),
          l = (0, d.usePathname)();
        return ((0, c.useEffect)(() => {
          !j &&
            (h
              ? g && "admin" !== i && k.push("/profile")
              : k.push(`/auth?redirect=${encodeURIComponent(l)}`));
        }, [h, i, j, k, l, g]),
        j)
          ? (0, b.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, b.jsx)(f.Loader2, {
                className: "w-8 h-8 text-[#CC624C] animate-spin",
              }),
            })
          : !h || (g && "admin" !== i)
            ? null
            : (0, b.jsx)(b.Fragment, { children: a });
      },
    ]);
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
  39604,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(219107),
      e = a.i(139353),
      f = a.i(347929),
      g = a.i(262536),
      h = a.i(778797),
      i = a.i(32193);
    a.i(69387);
    var j = a.i(132787),
      k = a.i(601787),
      l = a.i(691431),
      m = a.i(420237),
      n = a.i(346271);
    let o = () =>
      (0, b.jsxs)(n.motion.div, {
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          cursor: "pointer",
          background:
            "linear-gradient(135deg, #FFF7D6 0%, #FFD700 25%, #E6A300 50%, #FDB931 75%, #FFF7D6 100%)",
          boxShadow:
            "0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.8), inset 0 0 25px rgba(218, 165, 32, 0.9)",
          border: "2px solid rgba(255, 255, 255, 0.6)",
          transformStyle: "preserve-3d",
        },
        animate: { rotateY: [0, 360] },
        transition: { duration: 3, repeat: 1 / 0, ease: "linear" },
        whileHover: {
          scale: 1.15,
          boxShadow:
            "0 0 40px rgba(255, 215, 0, 0.9), inset 0 0 15px rgba(255, 255, 255, 1), inset 0 0 30px rgba(218, 165, 32, 1)",
          transition: { duration: 0.3 },
        },
        whileTap: { scale: 0.9 },
        children: [
          (0, b.jsx)("div", {
            style: {
              position: "absolute",
              top: "8px",
              left: "8px",
              right: "8px",
              bottom: "8px",
              borderRadius: "50%",
              border: "2px dashed rgba(184, 134, 11, 0.5)",
              transform: "translateZ(10px)",
            },
          }),
          (0, b.jsx)("div", {
            style: {
              fontSize: "36px",
              fontWeight: "bold",
              color: "#8B6508",
              textShadow:
                "1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.1)",
              transform: "translateZ(20px)",
            },
            children: "F",
          }),
          (0, b.jsx)(n.motion.div, {
            style: {
              position: "absolute",
              top: "15px",
              left: "20px",
              width: "8px",
              height: "8px",
              background: "white",
              borderRadius: "50%",
              filter: "blur(1px)",
              transform: "translateZ(25px)",
            },
            animate: { opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] },
            transition: {
              duration: 2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: 0.5,
            },
          }),
        ],
      });
    var p = a.i(999272),
      q = a.i(202558),
      r = a.i(995180),
      s = a.i(901299);
    a.s(
      [
        "default",
        0,
        function () {
          let { user: a } = (0, g.useAuth)(),
            t = (0, h.useAchievements)((a) => a.unlocked),
            [u, v] = (0, c.useState)(0),
            [w, x] = (0, c.useState)([]),
            [y, z] = (0, c.useState)(!0),
            { scrollYProgress: A } = (0, r.useScroll)(),
            B = (0, s.useTransform)(A, [0, 0.2], [1, 0.5]),
            C = (0, s.useTransform)(A, [0, 0.2], [0, -100]);
          (0, c.useEffect)(() => {
            a
              ? (async () => {
                  try {
                    let b = (0, j.doc)(m.db, "loyalty_points", a.uid),
                      c = await (0, k.getDoc)(b);
                    c.exists() && v(c.data().balance || 0);
                    let d = (0, l.collection)(
                        m.db,
                        "loyalty_points",
                        a.uid,
                        "history",
                      ),
                      e = (0, k.query)(
                        d,
                        (0, k.orderBy)("createdAt", "desc"),
                        (0, k.limit)(10),
                      ),
                      f = await (0, k.getDocs)(e);
                    x(f.docs.map((a) => ({ id: a.id, ...a.data() })));
                  } catch (a) {
                    console.error("Failed to fetch loyalty points", a);
                  } finally {
                    z(!1);
                  }
                })()
              : z(!1);
          }, [a]);
          let D = Object.values(i.ACHIEVEMENTS),
            E = D.filter((a) => t.includes(a.id)),
            F = D.filter((a) => !t.includes(a.id));
          return (0, b.jsx)(p.AuthGuard, {
            children: (0, b.jsxs)("div", {
              className:
                "min-h-[300vh] bg-transparent text-[#2d1f19] font-nunito relative",
              children: [
                (0, b.jsx)("div", {
                  className: "fixed top-24 left-6 z-50",
                  children: (0, b.jsx)("button", {
                    onClick: () => window.history.back(),
                    className:
                      "w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform",
                    children: (0, b.jsx)(d.ArrowLeft, {
                      className: "w-6 h-6 text-[#CC624C]",
                    }),
                  }),
                }),
                (0, b.jsxs)("section", {
                  className:
                    "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
                  children: [
                    (0, b.jsx)(q.GiganticTypography, {
                      as: "h1",
                      highlightWords: ["Treue."],
                      highlightColor: "#CC624C",
                      className:
                        "text-center justify-center max-w-[1200px] mx-auto",
                      children: "Wir belohnen deine Treue.",
                    }),
                    (0, b.jsxs)(n.motion.div, {
                      style: { scale: B, y: C },
                      className: "mt-20 flex flex-col items-center",
                      children: [
                        (0, b.jsx)("div", {
                          className: "mb-8 transform scale-150",
                          children: (0, b.jsx)(o, {}),
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "text-sm font-black text-[#CC624C] tracking-widest uppercase mb-2",
                          children: "Dein Guthaben",
                        }),
                        (0, b.jsx)("div", {
                          className: "font-calistoga text-8xl text-charcoal",
                          children: y ? "..." : u,
                        }),
                      ],
                    }),
                    (0, b.jsxs)(n.motion.div, {
                      animate: { y: [0, 10, 0] },
                      transition: { repeat: 1 / 0, duration: 2 },
                      className:
                        "absolute bottom-10 flex flex-col items-center opacity-50",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-xs font-bold tracking-widest uppercase mb-2",
                          children: "Scroll für Belohnungen",
                        }),
                        (0, b.jsx)(f.ArrowDown, {}),
                      ],
                    }),
                  ],
                }),
                (0, b.jsx)("section", {
                  className: "min-h-[100vh] px-6 relative z-10 py-32",
                  children: (0, b.jsxs)("div", {
                    className: "max-w-[800px] mx-auto",
                    children: [
                      (0, b.jsx)(q.GiganticTypography, {
                        delay: 0.2,
                        className:
                          "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center",
                        children: "Deine Meilensteine.",
                      }),
                      (0, b.jsxs)("div", {
                        className: "space-y-16",
                        children: [
                          E.map((a, c) =>
                            (0, b.jsxs)(
                              n.motion.div,
                              {
                                initial: { opacity: 0, y: 100 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0, margin: "-100px" },
                                transition: { type: "spring", bounce: 0.4 },
                                className:
                                  "bg-cream/80 backdrop-blur-xl p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center shadow-clay border border-peach/30",
                                children: [
                                  (0, b.jsx)("div", {
                                    className:
                                      "w-24 h-24 bg-terracotta rounded-full flex items-center justify-center text-5xl shrink-0 shadow-clay-lg",
                                    children: a.icon,
                                  }),
                                  (0, b.jsxs)("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                      (0, b.jsx)("div", {
                                        className:
                                          "font-calistoga text-3xl text-charcoal mb-2",
                                        children: a.title,
                                      }),
                                      (0, b.jsx)("div", {
                                        className:
                                          "text-lg font-bold text-brown/80",
                                        children: a.description,
                                      }),
                                      a.coinReward &&
                                        a.coinReward > 0 &&
                                        (0, b.jsxs)("div", {
                                          className:
                                            "inline-block bg-[#eedfcc] px-4 py-2 rounded-full text-sm font-black text-terracotta uppercase tracking-wider mt-4",
                                          children: [
                                            "+",
                                            a.coinReward,
                                            " Coins",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              a.id,
                            ),
                          ),
                          F.map((a, c) =>
                            (0, b.jsxs)(
                              n.motion.div,
                              {
                                initial: { opacity: 0, scale: 0.9 },
                                whileInView: { opacity: 0.6, scale: 1 },
                                viewport: { once: !0, margin: "-100px" },
                                className:
                                  "bg-white/40 backdrop-blur-sm p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center border border-white/50 grayscale-[0.3]",
                                children: [
                                  (0, b.jsx)("div", {
                                    className:
                                      "w-24 h-24 bg-peach/50 rounded-full flex items-center justify-center text-brown shrink-0",
                                    children: (0, b.jsx)(e.Lock, {
                                      className: "w-8 h-8",
                                    }),
                                  }),
                                  (0, b.jsxs)("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                      (0, b.jsx)("div", {
                                        className:
                                          "font-calistoga text-3xl text-charcoal mb-2 blur-[2px]",
                                        children: "Verborgenes Rätsel",
                                      }),
                                      (0, b.jsx)("div", {
                                        className:
                                          "text-lg font-bold text-brown/60 blur-[3px] select-none",
                                        children: a.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              a.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
                w.length > 0 &&
                  (0, b.jsxs)("section", {
                    className:
                      "min-h-[100vh] px-6 relative z-10 py-32 flex flex-col items-center",
                    children: [
                      (0, b.jsx)(q.GiganticTypography, {
                        className:
                          "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center",
                        children: "Deine Historie.",
                      }),
                      (0, b.jsx)("div", {
                        className:
                          "max-w-[800px] w-full bg-cream/90 backdrop-blur-xl rounded-[40px] shadow-clay overflow-hidden",
                        children: w.map((a, c) =>
                          (0, b.jsxs)(
                            n.motion.div,
                            {
                              initial: { opacity: 0, x: -50 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0 },
                              transition: { delay: 0.05 * c },
                              className: `p-6 md:p-8 flex justify-between items-center ${c !== w.length - 1 ? "border-b border-peach/50" : ""}`,
                              children: [
                                (0, b.jsxs)("div", {
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "font-calistoga text-xl md:text-2xl text-charcoal",
                                      children:
                                        a.description || "Punkte gesammelt",
                                    }),
                                    (0, b.jsx)("div", {
                                      className:
                                        "text-sm font-bold text-brown/70 mt-1",
                                      children: a.createdAt
                                        ? new Date(
                                            a.createdAt,
                                          ).toLocaleDateString("de-DE")
                                        : "",
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)("div", {
                                  className: `font-calistoga text-3xl md:text-4xl ${a.amount > 0 ? "text-[#3a9d52]" : "text-[#CC624C]"}`,
                                  children: [a.amount > 0 ? "+" : "", a.amount],
                                }),
                              ],
                            },
                            a.id,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
      ],
      39604,
    );
  },
];

//# sourceMappingURL=_0tq_g0c._.js.map
