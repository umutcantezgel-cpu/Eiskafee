(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  694838,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("arrow-left", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    e.s(["default", 0, t]);
  },
  711241,
  (e) => {
    "use strict";
    var t = e.i(694838);
    e.s(["ArrowLeft", () => t.default]);
  },
  832411,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("lock", [
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
    e.s(["default", 0, t]);
  },
  806537,
  (e) => {
    "use strict";
    var t = e.i(832411);
    e.s(["Lock", () => t.default]);
  },
  758379,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    e.s(["default", 0, t]);
  },
  632781,
  (e) => {
    "use strict";
    var t = e.i(758379);
    e.s(["Loader2", () => t.default]);
  },
  658709,
  (e) => {
    "use strict";
    var t = e.i(843476),
      i = e.i(271645),
      a = e.i(618566),
      s = e.i(230129),
      r = e.i(632781);
    e.s([
      "AuthGuard",
      0,
      function ({ children: e, requireAdmin: l = !1 }) {
        let { user: n, role: c, loading: o } = (0, s.useAuth)(),
          d = (0, a.useRouter)(),
          x = (0, a.usePathname)();
        return ((0, i.useEffect)(() => {
          !o &&
            (n
              ? l && "admin" !== c && d.push("/profile")
              : d.push(`/auth?redirect=${encodeURIComponent(x)}`));
        }, [n, c, o, d, x, l]),
        o)
          ? (0, t.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, t.jsx)(r.Loader2, {
                className: "w-8 h-8 text-[#CC624C] animate-spin",
              }),
            })
          : !n || (l && "admin" !== c)
            ? null
            : (0, t.jsx)(t.Fragment, { children: e });
      },
    ]);
  },
  764154,
  (e) => {
    "use strict";
    var t = e.i(843476),
      i = e.i(846932),
      a = e.i(772328);
    e.s([
      "GiganticTypography",
      0,
      function ({
        children: e,
        className: s = "",
        delay: r = 0,
        highlightWords: l = [],
        highlightColor: n = "#CC624C",
        as: c = "div",
      }) {
        let o = (0, a.useReducedMotion)(),
          d = "string" == typeof e ? e : String(e),
          x = d.split(" "),
          p = {
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
          m = i.motion[c];
        return o
          ? (0, t.jsx)(c, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${s}`,
              children: d,
            })
          : (0, t.jsx)(m, {
              variants: {
                hidden: { opacity: 0 },
                visible: (e = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: r },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${s}`,
              children: x.map((e, a) => {
                let s = e.replace(/[.,!?]/g, ""),
                  r = l.includes(s);
                return (0, t.jsx)(
                  i.motion.span,
                  {
                    variants: p,
                    style: { color: r ? n : "inherit" },
                    className: "inline-block relative z-10",
                    children: e,
                  },
                  a,
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
  860595,
  (e) => {
    "use strict";
    var t = e.i(843476),
      i = e.i(271645),
      a = e.i(711241),
      s = e.i(806537),
      r = e.i(635416),
      l = e.i(230129),
      n = e.i(43832),
      c = e.i(613516);
    e.i(436180);
    var o = e.i(386205),
      d = e.i(263802),
      x = e.i(746939),
      p = e.i(959141),
      m = e.i(846932);
    let h = () =>
      (0, t.jsxs)(m.motion.div, {
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
          (0, t.jsx)("div", {
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
          (0, t.jsx)("div", {
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
          (0, t.jsx)(m.motion.div, {
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
    var u = e.i(658709),
      f = e.i(764154),
      b = e.i(310542),
      g = e.i(895420);
    e.s(
      [
        "default",
        0,
        function () {
          let { user: e } = (0, l.useAuth)(),
            y = (0, n.useAchievements)((e) => e.unlocked),
            [v, w] = (0, i.useState)(0),
            [j, N] = (0, i.useState)([]),
            [k, C] = (0, i.useState)(!0),
            { scrollYProgress: A } = (0, b.useScroll)(),
            D = (0, g.useTransform)(A, [0, 0.2], [1, 0.5]),
            S = (0, g.useTransform)(A, [0, 0.2], [0, -100]);
          (0, i.useEffect)(() => {
            e
              ? (async () => {
                  try {
                    let t = (0, o.doc)(p.db, "loyalty_points", e.uid),
                      i = await (0, d.getDoc)(t);
                    i.exists() && w(i.data().balance || 0);
                    let a = (0, x.collection)(
                        p.db,
                        "loyalty_points",
                        e.uid,
                        "history",
                      ),
                      s = (0, d.query)(
                        a,
                        (0, d.orderBy)("createdAt", "desc"),
                        (0, d.limit)(10),
                      ),
                      r = await (0, d.getDocs)(s);
                    N(r.docs.map((e) => ({ id: e.id, ...e.data() })));
                  } catch (e) {
                    console.error("Failed to fetch loyalty points", e);
                  } finally {
                    C(!1);
                  }
                })()
              : C(!1);
          }, [e]);
          let T = Object.values(c.ACHIEVEMENTS),
            F = T.filter((e) => y.includes(e.id)),
            R = T.filter((e) => !y.includes(e.id));
          return (0, t.jsx)(u.AuthGuard, {
            children: (0, t.jsxs)("div", {
              className:
                "min-h-[300vh] bg-transparent text-[#2d1f19] font-nunito relative",
              children: [
                (0, t.jsx)("div", {
                  className: "fixed top-24 left-6 z-50",
                  children: (0, t.jsx)("button", {
                    onClick: () => window.history.back(),
                    className:
                      "w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform",
                    children: (0, t.jsx)(a.ArrowLeft, {
                      className: "w-6 h-6 text-[#CC624C]",
                    }),
                  }),
                }),
                (0, t.jsxs)("section", {
                  className:
                    "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
                  children: [
                    (0, t.jsx)(f.GiganticTypography, {
                      as: "h1",
                      highlightWords: ["Treue."],
                      highlightColor: "#CC624C",
                      className:
                        "text-center justify-center max-w-[1200px] mx-auto",
                      children: "Wir belohnen deine Treue.",
                    }),
                    (0, t.jsxs)(m.motion.div, {
                      style: { scale: D, y: S },
                      className: "mt-20 flex flex-col items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "mb-8 transform scale-150",
                          children: (0, t.jsx)(h, {}),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-sm font-black text-[#CC624C] tracking-widest uppercase mb-2",
                          children: "Dein Guthaben",
                        }),
                        (0, t.jsx)("div", {
                          className: "font-calistoga text-8xl text-charcoal",
                          children: k ? "..." : v,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(m.motion.div, {
                      animate: { y: [0, 10, 0] },
                      transition: { repeat: 1 / 0, duration: 2 },
                      className:
                        "absolute bottom-10 flex flex-col items-center opacity-50",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-xs font-bold tracking-widest uppercase mb-2",
                          children: "Scroll für Belohnungen",
                        }),
                        (0, t.jsx)(r.ArrowDown, {}),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("section", {
                  className: "min-h-[100vh] px-6 relative z-10 py-32",
                  children: (0, t.jsxs)("div", {
                    className: "max-w-[800px] mx-auto",
                    children: [
                      (0, t.jsx)(f.GiganticTypography, {
                        delay: 0.2,
                        className:
                          "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center",
                        children: "Deine Meilensteine.",
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-16",
                        children: [
                          F.map((e, i) =>
                            (0, t.jsxs)(
                              m.motion.div,
                              {
                                initial: { opacity: 0, y: 100 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0, margin: "-100px" },
                                transition: { type: "spring", bounce: 0.4 },
                                className:
                                  "bg-cream/80 backdrop-blur-xl p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center shadow-clay border border-peach/30",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "w-24 h-24 bg-terracotta rounded-full flex items-center justify-center text-5xl shrink-0 shadow-clay-lg",
                                    children: e.icon,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "font-calistoga text-3xl text-charcoal mb-2",
                                        children: e.title,
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-lg font-bold text-brown/80",
                                        children: e.description,
                                      }),
                                      e.coinReward &&
                                        e.coinReward > 0 &&
                                        (0, t.jsxs)("div", {
                                          className:
                                            "inline-block bg-[#eedfcc] px-4 py-2 rounded-full text-sm font-black text-terracotta uppercase tracking-wider mt-4",
                                          children: [
                                            "+",
                                            e.coinReward,
                                            " Coins",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                          R.map((e, i) =>
                            (0, t.jsxs)(
                              m.motion.div,
                              {
                                initial: { opacity: 0, scale: 0.9 },
                                whileInView: { opacity: 0.6, scale: 1 },
                                viewport: { once: !0, margin: "-100px" },
                                className:
                                  "bg-white/40 backdrop-blur-sm p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center border border-white/50 grayscale-[0.3]",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "w-24 h-24 bg-peach/50 rounded-full flex items-center justify-center text-brown shrink-0",
                                    children: (0, t.jsx)(s.Lock, {
                                      className: "w-8 h-8",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "font-calistoga text-3xl text-charcoal mb-2 blur-[2px]",
                                        children: "Verborgenes Rätsel",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-lg font-bold text-brown/60 blur-[3px] select-none",
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
                j.length > 0 &&
                  (0, t.jsxs)("section", {
                    className:
                      "min-h-[100vh] px-6 relative z-10 py-32 flex flex-col items-center",
                    children: [
                      (0, t.jsx)(f.GiganticTypography, {
                        className:
                          "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center",
                        children: "Deine Historie.",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "max-w-[800px] w-full bg-cream/90 backdrop-blur-xl rounded-[40px] shadow-clay overflow-hidden",
                        children: j.map((e, i) =>
                          (0, t.jsxs)(
                            m.motion.div,
                            {
                              initial: { opacity: 0, x: -50 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0 },
                              transition: { delay: 0.05 * i },
                              className: `p-6 md:p-8 flex justify-between items-center ${i !== j.length - 1 ? "border-b border-peach/50" : ""}`,
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "font-calistoga text-xl md:text-2xl text-charcoal",
                                      children:
                                        e.description || "Punkte gesammelt",
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "text-sm font-bold text-brown/70 mt-1",
                                      children: e.createdAt
                                        ? new Date(
                                            e.createdAt,
                                          ).toLocaleDateString("de-DE")
                                        : "",
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: `font-calistoga text-3xl md:text-4xl ${e.amount > 0 ? "text-[#3a9d52]" : "text-[#CC624C]"}`,
                                  children: [e.amount > 0 ? "+" : "", e.amount],
                                }),
                              ],
                            },
                            e.id,
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
      860595,
    );
  },
]);
