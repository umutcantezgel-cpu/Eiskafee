(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  636498,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645);
    e.s([
      "FadeUp",
      0,
      function ({ children: e, delay: a = 0, className: i = "" }) {
        let n = (0, s.useRef)(null),
          [r, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && l(!0);
              },
              { threshold: 0.12 },
            );
            return (n.current && e.observe(n.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: n,
            className: i,
            style: {
              opacity: +!!r,
              transform: r ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${a}s`,
            },
            children: e,
          })
        );
      },
    ]);
  },
  180778,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("star", [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
          key: "r04s7s",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  188873,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("sparkles", [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr",
        },
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
    ]);
    e.s(["default", 0, t]);
  },
  786563,
  (e) => {
    "use strict";
    var t = e.i(180778);
    e.s(["Star", () => t.default]);
  },
  144925,
  328623,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(974336),
      i = e.i(846932),
      n = e.i(88653),
      r = e.i(786563),
      l = e.i(188873);
    e.s(["Sparkles", () => l.default], 328623);
    var l = l;
    let o = ["#CC624C", "#E4C0A8", "#eedfcc", "#fefefe"],
      c = ["dot", "sparkle", "star"];
    e.s(
      [
        "PrimaryButton",
        0,
        function ({
          children: e,
          onClick: d,
          href: u,
          large: f = !1,
          sectionBg: h = "#f5efe8",
          className: x = "",
          disabled: p = !1,
        }) {
          let [m, b] = (0, s.useState)(!1),
            [g, y] = (0, s.useState)([]);
          (0, s.useEffect)(() => {
            if (0 === g.length) return;
            let e = g.map((e) =>
              setTimeout(() => y((t) => t.filter((t) => t.id !== e.id)), 800),
            );
            return () => e.forEach(clearTimeout);
          }, [g]);
          let v = (e) => {
              if (p) return;
              let t = e.currentTarget.getBoundingClientRect(),
                s = (e.clientX ?? t.left + t.width / 2) - t.left,
                a = (e.clientY ?? t.top + t.height / 2) - t.top;
              (y((e) => {
                let t, i;
                return [
                  ...e,
                  ((t = Date.now() + Math.random()),
                  (i = Array.from({ length: 14 }, (e, s) => ({
                    id: `${t}-${s}`,
                    angle: Math.random() * Math.PI * 2,
                    distance: 40 + 60 * Math.random(),
                    size: 4 + 10 * Math.random(),
                    rotation: (Math.random() - 0.5) * 540,
                    color: o[Math.floor(Math.random() * o.length)],
                    type: c[Math.floor(Math.random() * c.length)],
                  }))),
                  { id: t, originX: s, originY: a, particles: i }),
                ];
              }),
                d && d(e));
            },
            j = (0, t.jsxs)(i.motion.button, {
              onClick: u ? void 0 : v,
              disabled: p,
              onHoverStart: () => b(!0),
              onHoverEnd: () => b(!1),
              whileHover: p ? {} : { scale: 1.05 },
              whileTap: p ? {} : { scale: 0.92, scaleX: 1.06, scaleY: 0.84 },
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 1,
              },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${f ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${p ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${x}`,
              style: {
                boxShadow:
                  m && !p
                    ? "0 8px 28px rgba(204,98,76,0.34)"
                    : "0 3px 12px rgba(204,98,76,0.18)",
              },
              children: [
                (0, t.jsx)("span", {
                  className: "relative z-10 flex items-center gap-2",
                  children: e,
                }),
                (0, t.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "absolute z-0 w-[18px] h-[18px] rounded-full bottom-[-1px] left-[14px] pointer-events-none",
                  style: {
                    background: h,
                    transform: m ? "scale(1)" : "scale(0)",
                    transformOrigin: "center bottom",
                    transition: "transform .25s cubic-bezier(0.34,1.56,0.64,1)",
                  },
                }),
                (0, t.jsx)("span", {
                  className:
                    "absolute inset-0 pointer-events-none overflow-visible z-20",
                  children: (0, t.jsx)(n.AnimatePresence, {
                    children: g.map((e) =>
                      e.particles.map((s) =>
                        (0, t.jsxs)(
                          i.motion.div,
                          {
                            initial: {
                              x: e.originX,
                              y: e.originY,
                              opacity: 1,
                              scale: 0,
                              rotate: 0,
                            },
                            animate: {
                              x: e.originX + Math.cos(s.angle) * s.distance,
                              y:
                                e.originY + Math.sin(s.angle) * s.distance - 20,
                              opacity: [1, 1, 0],
                              scale: [0, 1, 0.5],
                              rotate: s.rotation,
                            },
                            transition: {
                              duration: 0.65,
                              ease: "easeOut",
                              times: [0, 0.3, 1],
                            },
                            style: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: s.size,
                              height: s.size,
                              borderRadius: "dot" === s.type ? "50%" : 0,
                              background:
                                "dot" === s.type ? s.color : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: [
                              "star" === s.type &&
                                (0, t.jsx)(r.Star, {
                                  size: s.size,
                                  strokeWidth: 0,
                                  color: s.color,
                                  fill: s.color,
                                }),
                              "sparkle" === s.type &&
                                (0, t.jsx)(l.default, {
                                  size: s.size,
                                  strokeWidth: 0,
                                  color: s.color,
                                  fill: s.color,
                                }),
                            ],
                          },
                          s.id,
                        ),
                      ),
                    ),
                  }),
                }),
              ],
            });
          return u
            ? (0, t.jsx)("div", {
                onClick: v,
                className: "inline-block",
                style: { textDecoration: "none" },
                children: (0, t.jsx)(a.TransitionLink, {
                  href: u,
                  style: { textDecoration: "none" },
                  className: "inline-block",
                  tabIndex: -1,
                  children: j,
                }),
              })
            : j;
        },
        "SecondaryButton",
        0,
        function ({ children: e, onClick: n, href: r, className: l = "" }) {
          let [o, c] = (0, s.useState)(!1),
            d = (0, t.jsx)(i.motion.button, {
              onClick: n,
              onHoverStart: () => c(!0),
              onHoverEnd: () => c(!1),
              whileTap: { scale: 0.94, scaleX: 1.04, scaleY: 0.88 },
              transition: { type: "spring", stiffness: 600, damping: 15 },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold rounded-full cursor-pointer whitespace-nowrap px-[25px] py-[10px] text-[0.88rem] ${l}`,
              style: {
                border: "2px solid #CC624C",
                color: o ? "#fff" : "#CC624C",
                background: o ? "#CC624C" : "transparent",
                transition: "background .2s ease, color .2s ease",
              },
              children: e,
            });
          return r
            ? (0, t.jsx)(a.TransitionLink, {
                href: r,
                style: { textDecoration: "none" },
                className: "inline-block",
                children: d,
              })
            : d;
        },
      ],
      144925,
    );
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
  643957,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]);
    e.s(["default", 0, t]);
  },
  689664,
  (e) => {
    "use strict";
    var t = e.i(643957);
    e.s(["Check", () => t.default]);
  },
  806267,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("utensils", [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
      ["path", { d: "M7 2v20", key: "1473qp" }],
      [
        "path",
        { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  602778,
  593358,
  (e) => {
    "use strict";
    var t = e.i(456420);
    let s = (0, t.default)("store", [
      [
        "path",
        { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" },
      ],
      [
        "path",
        {
          d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
          key: "o0xfot",
        },
      ],
      [
        "path",
        {
          d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
          key: "wn3emo",
        },
      ],
    ]);
    e.s(["default", 0, s], 602778);
    let a = (0, t.default)("truck", [
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
    e.s(["default", 0, a], 593358);
  },
  956094,
  (e) => {
    "use strict";
    var t = e.i(806267);
    e.s(["Utensils", () => t.default]);
  },
  881461,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(657688),
      i = e.i(263676),
      n = e.i(399847),
      r = e.i(602778),
      r = r,
      l = e.i(593358),
      l = l,
      o = e.i(956094),
      c = e.i(689664),
      d = e.i(632781),
      u = e.i(636498),
      f = e.i(144925),
      h = e.i(618566);
    e.i(436180);
    var x = e.i(386205),
      p = e.i(263802),
      m = e.i(959141),
      b = e.i(798688);
    e.s(
      [
        "default",
        0,
        function () {
          let e = (0, h.useRouter)(),
            { setOrderType: g } = (0, b.useStore)(),
            [y, v] = (0, s.useState)(null),
            [j, k] = (0, s.useState)(!0),
            [C, w] = (0, s.useState)(null);
          return (
            (0, s.useEffect)(() => {
              !(async function () {
                try {
                  let e = (0, x.doc)(m.db, "store_settings", "main"),
                    t = await (0, p.getDoc)(e);
                  t.exists() && t.data()?.isOnline !== void 0
                    ? v(t.data().isOnline)
                    : v(!0);
                } catch (e) {
                  (console.error("Fehler beim Abrufen der Store-Settings:", e),
                    v(!0));
                } finally {
                  k(!1);
                }
              })();
            }, []),
            (0, t.jsxs)("div", {
              className: "min-h-screen bg-[#f5efe8] pb-32",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "flex items-center justify-between px-5 pt-4 pb-3.5",
                  children: [
                    (0, t.jsx)("div", {
                      className: "w-32 h-10 relative",
                      children: (0, t.jsx)(a.default, {
                        src: "/assets/logos/Logo Wortmarke beige.svg",
                        alt: "Hey Fede! Logo",
                        fill: !0,
                        className: "object-contain object-left",
                      }),
                    }),
                    (0, t.jsx)("button", {
                      onClick: () => e.push("/"),
                      className:
                        "w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm",
                      children: (0, t.jsx)(i.X, { size: 20, color: "#2d1f19" }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "px-5",
                  children: [
                    (0, t.jsx)("h1", {
                      className: "font-calistoga text-2xl text-[#2d1f19] mb-6",
                      children: "Wie möchtest du bestellen?",
                    }),
                    j
                      ? (0, t.jsx)("div", {
                          className: "flex justify-center items-center py-10",
                          children: (0, t.jsx)(d.Loader2, {
                            size: 32,
                            className: "animate-spin text-[#CC624C]",
                          }),
                        })
                      : (0, t.jsxs)("div", {
                          className: "space-y-3",
                          children: [
                            !1 === y &&
                              (0, t.jsxs)(u.FadeUp, {
                                className:
                                  "bg-[rgba(204,98,76,0.1)] border-2 border-[#CC624C] rounded-[18px] p-4 flex gap-3 items-start mb-6",
                                children: [
                                  (0, t.jsx)(n.AlertCircle, {
                                    size: 20,
                                    className: "text-[#CC624C] shrink-0 mt-0.5",
                                  }),
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "font-calistoga text-[15px] text-[#2d1f19] mb-1",
                                        children:
                                          "Online-Bestellungen pausiert",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "font-nunito text-[12.5px] text-[#5c3d35] leading-relaxed",
                                        children:
                                          "Wir bereiten aktuell sehr viele Bestellungen im Laden zu und können momentan keine Online-Orders annehmen.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            [
                              {
                                id: "pickup",
                                title: "Abholung",
                                desc: "Ofenfrisch im Laden abholen",
                                icon: r.default,
                                disabled: !y,
                              },
                              {
                                id: "delivery",
                                title: "Lieferung",
                                desc: "Bequem nach Hause liefern lassen",
                                icon: l.default,
                                disabled: !y,
                              },
                              {
                                id: "in-store",
                                title: "Im Laden essen",
                                desc: "Reserviere einen Tisch vor Ort",
                                icon: o.Utensils,
                                disabled: !1,
                              },
                            ].map((e, s) => {
                              let a = e.disabled,
                                i = C === e.id;
                              return (0, t.jsx)(
                                u.FadeUp,
                                {
                                  delay: 0.1 + 0.1 * s,
                                  children: (0, t.jsxs)("button", {
                                    disabled: a,
                                    onClick: () => w(e.id),
                                    className: `w-full text-left rounded-[20px] p-[16px_18px] flex items-center gap-4 transition-all border-2 ${a ? "opacity-40 bg-white border-transparent cursor-not-allowed" : i ? "bg-[#CC624C] text-white border-[#CC624C] shadow-[0_8px_20px_rgba(204,98,76,0.25)]" : "bg-white text-[#2d1f19] border-transparent shadow-sm"}`,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: `w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 ${i ? "bg-[rgba(255,255,255,0.2)]" : "bg-[#f5efe8]"}`,
                                        children: (0, t.jsx)(e.icon, {
                                          size: 22,
                                          className: i
                                            ? "text-white"
                                            : "text-[#CC624C]",
                                          strokeWidth: 1.8,
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "flex-1",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className:
                                              "font-calistoga text-[17px] mb-0.5",
                                            children: e.title,
                                          }),
                                          (0, t.jsx)("div", {
                                            className: `font-nunito text-[12px] font-bold ${i ? "text-[rgba(255,255,255,0.8)]" : "text-[#7a5a52]"}`,
                                            children: e.desc,
                                          }),
                                        ],
                                      }),
                                      i &&
                                        (0, t.jsx)("div", {
                                          className:
                                            "w-6 h-6 rounded-full bg-white flex items-center justify-center",
                                          children: (0, t.jsx)(c.Check, {
                                            size: 14,
                                            className: "text-[#CC624C]",
                                            strokeWidth: 3,
                                          }),
                                        }),
                                    ],
                                  }),
                                },
                                e.id,
                              );
                            }),
                          ],
                        }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "fixed bottom-0 left-0 right-0 p-[16px_20px_32px] bg-gradient-to-t from-[#f5efe8] via-[#f5efe8] to-transparent z-40",
                  children: (0, t.jsx)(f.PrimaryButton, {
                    className: "w-full",
                    disabled: !C || !1 === y,
                    onClick: () => {
                      C && (g(C), e.push("/menu"));
                    },
                    children: "Auswahl bestätigen",
                  }),
                }),
              ],
            })
          );
        },
      ],
      881461,
    );
  },
]);
