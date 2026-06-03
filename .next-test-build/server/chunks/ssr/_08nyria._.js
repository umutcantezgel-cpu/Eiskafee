module.exports = [
  544623,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131);
    a.s([
      "FadeUp",
      0,
      function ({ children: a, delay: d = 0, className: e = "" }) {
        let f = (0, c.useRef)(null),
          [g, h] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            let a = new IntersectionObserver(
              ([a]) => {
                a.isIntersecting && h(!0);
              },
              { threshold: 0.12 },
            );
            return (f.current && a.observe(f.current), () => a.disconnect());
          }, []),
          (0, b.jsx)("div", {
            ref: f,
            className: e,
            style: {
              opacity: +!!g,
              transform: g ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${d}s`,
            },
            children: a,
          })
        );
      },
    ]);
  },
  526634,
  383784,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("star", [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
          key: "r04s7s",
        },
      ],
    ]);
    (a.s(["default", 0, b], 383784), a.s(["Star", 0, b], 526634));
  },
  858301,
  943784,
  986708,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(371947),
      e = a.i(346271),
      f = a.i(262036),
      g = a.i(526634);
    let h = (0, a.i(164831).default)("sparkles", [
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
    (a.s(["default", 0, h], 943784), a.s(["Sparkles", 0, h], 986708));
    let i = ["#CC624C", "#E4C0A8", "#eedfcc", "#fefefe"],
      j = ["dot", "sparkle", "star"];
    a.s(
      [
        "PrimaryButton",
        0,
        function ({
          children: a,
          onClick: k,
          href: l,
          large: m = !1,
          sectionBg: n = "#f5efe8",
          className: o = "",
          disabled: p = !1,
        }) {
          let [q, r] = (0, c.useState)(!1),
            [s, t] = (0, c.useState)([]);
          (0, c.useEffect)(() => {
            if (0 === s.length) return;
            let a = s.map((a) =>
              setTimeout(() => t((b) => b.filter((b) => b.id !== a.id)), 800),
            );
            return () => a.forEach(clearTimeout);
          }, [s]);
          let u = (a) => {
              if (p) return;
              let b = a.currentTarget.getBoundingClientRect(),
                c = (a.clientX ?? b.left + b.width / 2) - b.left,
                d = (a.clientY ?? b.top + b.height / 2) - b.top;
              (t((a) => {
                let b, e;
                return [
                  ...a,
                  ((b = Date.now() + Math.random()),
                  (e = Array.from({ length: 14 }, (a, c) => ({
                    id: `${b}-${c}`,
                    angle: Math.random() * Math.PI * 2,
                    distance: 40 + 60 * Math.random(),
                    size: 4 + 10 * Math.random(),
                    rotation: (Math.random() - 0.5) * 540,
                    color: i[Math.floor(Math.random() * i.length)],
                    type: j[Math.floor(Math.random() * j.length)],
                  }))),
                  { id: b, originX: c, originY: d, particles: e }),
                ];
              }),
                k && k(a));
            },
            v = (0, b.jsxs)(e.motion.button, {
              onClick: l ? void 0 : u,
              disabled: p,
              onHoverStart: () => r(!0),
              onHoverEnd: () => r(!1),
              whileHover: p ? {} : { scale: 1.05 },
              whileTap: p ? {} : { scale: 0.92, scaleX: 1.06, scaleY: 0.84 },
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 1,
              },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${m ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${p ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${o}`,
              style: {
                boxShadow:
                  q && !p
                    ? "0 8px 28px rgba(204,98,76,0.34)"
                    : "0 3px 12px rgba(204,98,76,0.18)",
              },
              children: [
                (0, b.jsx)("span", {
                  className: "relative z-10 flex items-center gap-2",
                  children: a,
                }),
                (0, b.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "absolute z-0 w-[18px] h-[18px] rounded-full bottom-[-1px] left-[14px] pointer-events-none",
                  style: {
                    background: n,
                    transform: q ? "scale(1)" : "scale(0)",
                    transformOrigin: "center bottom",
                    transition: "transform .25s cubic-bezier(0.34,1.56,0.64,1)",
                  },
                }),
                (0, b.jsx)("span", {
                  className:
                    "absolute inset-0 pointer-events-none overflow-visible z-20",
                  children: (0, b.jsx)(f.AnimatePresence, {
                    children: s.map((a) =>
                      a.particles.map((c) =>
                        (0, b.jsxs)(
                          e.motion.div,
                          {
                            initial: {
                              x: a.originX,
                              y: a.originY,
                              opacity: 1,
                              scale: 0,
                              rotate: 0,
                            },
                            animate: {
                              x: a.originX + Math.cos(c.angle) * c.distance,
                              y:
                                a.originY + Math.sin(c.angle) * c.distance - 20,
                              opacity: [1, 1, 0],
                              scale: [0, 1, 0.5],
                              rotate: c.rotation,
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
                              width: c.size,
                              height: c.size,
                              borderRadius: "dot" === c.type ? "50%" : 0,
                              background:
                                "dot" === c.type ? c.color : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: [
                              "star" === c.type &&
                                (0, b.jsx)(g.Star, {
                                  size: c.size,
                                  strokeWidth: 0,
                                  color: c.color,
                                  fill: c.color,
                                }),
                              "sparkle" === c.type &&
                                (0, b.jsx)(h, {
                                  size: c.size,
                                  strokeWidth: 0,
                                  color: c.color,
                                  fill: c.color,
                                }),
                            ],
                          },
                          c.id,
                        ),
                      ),
                    ),
                  }),
                }),
              ],
            });
          return l
            ? (0, b.jsx)("div", {
                onClick: u,
                className: "inline-block",
                style: { textDecoration: "none" },
                children: (0, b.jsx)(d.TransitionLink, {
                  href: l,
                  style: { textDecoration: "none" },
                  className: "inline-block",
                  tabIndex: -1,
                  children: v,
                }),
              })
            : v;
        },
        "SecondaryButton",
        0,
        function ({ children: a, onClick: f, href: g, className: h = "" }) {
          let [i, j] = (0, c.useState)(!1),
            k = (0, b.jsx)(e.motion.button, {
              onClick: f,
              onHoverStart: () => j(!0),
              onHoverEnd: () => j(!1),
              whileTap: { scale: 0.94, scaleX: 1.04, scaleY: 0.88 },
              transition: { type: "spring", stiffness: 600, damping: 15 },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold rounded-full cursor-pointer whitespace-nowrap px-[25px] py-[10px] text-[0.88rem] ${h}`,
              style: {
                border: "2px solid #CC624C",
                color: i ? "#fff" : "#CC624C",
                background: i ? "#CC624C" : "transparent",
                transition: "background .2s ease, color .2s ease",
              },
              children: a,
            });
          return g
            ? (0, b.jsx)(d.TransitionLink, {
                href: g,
                style: { textDecoration: "none" },
                className: "inline-block",
                children: k,
              })
            : k;
        },
      ],
      858301,
    );
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
  2589,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]);
    a.s(["default", 0, b]);
  },
  752562,
  (a) => {
    "use strict";
    var b = a.i(2589);
    a.s(["Check", () => b.default]);
  },
  710460,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("utensils", [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
      ["path", { d: "M7 2v20", key: "1473qp" }],
      [
        "path",
        { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  505281,
  (a) => {
    "use strict";
    var b = a.i(710460);
    a.s(["Utensils", () => b.default]);
  },
  419150,
  705576,
  (a) => {
    "use strict";
    var b = a.i(164831);
    let c = (0, b.default)("store", [
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
    a.s(["default", 0, c], 419150);
    let d = (0, b.default)("truck", [
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
    a.s(["default", 0, d], 705576);
  },
  973073,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(571987),
      e = a.i(474215),
      f = a.i(97546),
      g = a.i(419150),
      g = g,
      h = a.i(705576),
      h = h,
      i = a.i(505281),
      j = a.i(752562),
      k = a.i(875160),
      l = a.i(544623),
      m = a.i(858301),
      n = a.i(50944);
    a.i(69387);
    var o = a.i(132787),
      p = a.i(601787),
      q = a.i(420237),
      r = a.i(762492);
    a.s(
      [
        "default",
        0,
        function () {
          let a = (0, n.useRouter)(),
            { setOrderType: s } = (0, r.useStore)(),
            [t, u] = (0, c.useState)(null),
            [v, w] = (0, c.useState)(!0),
            [x, y] = (0, c.useState)(null);
          return (
            (0, c.useEffect)(() => {
              !(async function () {
                try {
                  let a = (0, o.doc)(q.db, "store_settings", "main"),
                    b = await (0, p.getDoc)(a);
                  b.exists() && b.data()?.isOnline !== void 0
                    ? u(b.data().isOnline)
                    : u(!0);
                } catch (a) {
                  (console.error("Fehler beim Abrufen der Store-Settings:", a),
                    u(!0));
                } finally {
                  w(!1);
                }
              })();
            }, []),
            (0, b.jsxs)("div", {
              className: "min-h-screen bg-[#f5efe8] pb-32",
              children: [
                (0, b.jsxs)("div", {
                  className:
                    "flex items-center justify-between px-5 pt-4 pb-3.5",
                  children: [
                    (0, b.jsx)("div", {
                      className: "w-32 h-10 relative",
                      children: (0, b.jsx)(d.default, {
                        src: "/assets/logos/Logo Wortmarke beige.svg",
                        alt: "Hey Fede! Logo",
                        fill: !0,
                        className: "object-contain object-left",
                      }),
                    }),
                    (0, b.jsx)("button", {
                      onClick: () => a.push("/"),
                      className:
                        "w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm",
                      children: (0, b.jsx)(e.X, { size: 20, color: "#2d1f19" }),
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "px-5",
                  children: [
                    (0, b.jsx)("h1", {
                      className: "font-calistoga text-2xl text-[#2d1f19] mb-6",
                      children: "Wie möchtest du bestellen?",
                    }),
                    v
                      ? (0, b.jsx)("div", {
                          className: "flex justify-center items-center py-10",
                          children: (0, b.jsx)(k.Loader2, {
                            size: 32,
                            className: "animate-spin text-[#CC624C]",
                          }),
                        })
                      : (0, b.jsxs)("div", {
                          className: "space-y-3",
                          children: [
                            !1 === t &&
                              (0, b.jsxs)(l.FadeUp, {
                                className:
                                  "bg-[rgba(204,98,76,0.1)] border-2 border-[#CC624C] rounded-[18px] p-4 flex gap-3 items-start mb-6",
                                children: [
                                  (0, b.jsx)(f.AlertCircle, {
                                    size: 20,
                                    className: "text-[#CC624C] shrink-0 mt-0.5",
                                  }),
                                  (0, b.jsxs)("div", {
                                    children: [
                                      (0, b.jsx)("div", {
                                        className:
                                          "font-calistoga text-[15px] text-[#2d1f19] mb-1",
                                        children:
                                          "Online-Bestellungen pausiert",
                                      }),
                                      (0, b.jsx)("div", {
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
                                icon: g.default,
                                disabled: !t,
                              },
                              {
                                id: "delivery",
                                title: "Lieferung",
                                desc: "Bequem nach Hause liefern lassen",
                                icon: h.default,
                                disabled: !t,
                              },
                              {
                                id: "in-store",
                                title: "Im Laden essen",
                                desc: "Reserviere einen Tisch vor Ort",
                                icon: i.Utensils,
                                disabled: !1,
                              },
                            ].map((a, c) => {
                              let d = a.disabled,
                                e = x === a.id;
                              return (0, b.jsx)(
                                l.FadeUp,
                                {
                                  delay: 0.1 + 0.1 * c,
                                  children: (0, b.jsxs)("button", {
                                    disabled: d,
                                    onClick: () => y(a.id),
                                    className: `w-full text-left rounded-[20px] p-[16px_18px] flex items-center gap-4 transition-all border-2 ${d ? "opacity-40 bg-white border-transparent cursor-not-allowed" : e ? "bg-[#CC624C] text-white border-[#CC624C] shadow-[0_8px_20px_rgba(204,98,76,0.25)]" : "bg-white text-[#2d1f19] border-transparent shadow-sm"}`,
                                    children: [
                                      (0, b.jsx)("div", {
                                        className: `w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 ${e ? "bg-[rgba(255,255,255,0.2)]" : "bg-[#f5efe8]"}`,
                                        children: (0, b.jsx)(a.icon, {
                                          size: 22,
                                          className: e
                                            ? "text-white"
                                            : "text-[#CC624C]",
                                          strokeWidth: 1.8,
                                        }),
                                      }),
                                      (0, b.jsxs)("div", {
                                        className: "flex-1",
                                        children: [
                                          (0, b.jsx)("div", {
                                            className:
                                              "font-calistoga text-[17px] mb-0.5",
                                            children: a.title,
                                          }),
                                          (0, b.jsx)("div", {
                                            className: `font-nunito text-[12px] font-bold ${e ? "text-[rgba(255,255,255,0.8)]" : "text-[#7a5a52]"}`,
                                            children: a.desc,
                                          }),
                                        ],
                                      }),
                                      e &&
                                        (0, b.jsx)("div", {
                                          className:
                                            "w-6 h-6 rounded-full bg-white flex items-center justify-center",
                                          children: (0, b.jsx)(j.Check, {
                                            size: 14,
                                            className: "text-[#CC624C]",
                                            strokeWidth: 3,
                                          }),
                                        }),
                                    ],
                                  }),
                                },
                                a.id,
                              );
                            }),
                          ],
                        }),
                  ],
                }),
                (0, b.jsx)("div", {
                  className:
                    "fixed bottom-0 left-0 right-0 p-[16px_20px_32px] bg-gradient-to-t from-[#f5efe8] via-[#f5efe8] to-transparent z-40",
                  children: (0, b.jsx)(m.PrimaryButton, {
                    className: "w-full",
                    disabled: !x || !1 === t,
                    onClick: () => {
                      x && (s(x), a.push("/menu"));
                    },
                    children: "Auswahl bestätigen",
                  }),
                }),
              ],
            })
          );
        },
      ],
      973073,
    );
  },
];

//# sourceMappingURL=_08nyria._.js.map
