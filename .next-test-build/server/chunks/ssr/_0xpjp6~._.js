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
  155818,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    a.s(["default", 0, b]);
  },
  470944,
  (a) => {
    "use strict";
    var b = a.i(155818);
    a.s(["Calendar", () => b.default]);
  },
  247840,
  786950,
  (a) => {
    "use strict";
    var b = a.i(164831);
    let c = (0, b.default)("heart", [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0",
        },
      ],
    ]);
    a.s(["default", 0, c], 247840);
    let d = (0, b.default)("users", [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ]);
    a.s(["default", 0, d], 786950);
  },
  619616,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("coffee", [
      ["path", { d: "M10 2v2", key: "7u0qdc" }],
      ["path", { d: "M14 2v2", key: "6buw04" }],
      [
        "path",
        {
          d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
          key: "pwadti",
        },
      ],
      ["path", { d: "M6 2v2", key: "colzsn" }],
    ]);
    a.s(["default", 0, b]);
  },
  912686,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(544623),
      e = a.i(858301),
      f = a.i(247840),
      f = f,
      g = a.i(986708),
      h = a.i(786950),
      h = h,
      i = a.i(619616),
      i = i,
      j = a.i(769544),
      k = a.i(403512),
      l = a.i(470944);
    a.s(
      [
        "default",
        0,
        function () {
          let [a, m] = (0, c.useState)(4),
            [n, o] = (0, c.useState)(25),
            [p, q] = (0, c.useState)("15:30"),
            [r, s] = (0, c.useState)("Innen · Lounge"),
            [t, u] = (0, c.useState)("Geburtstag"),
            v = [
              { ic: f.default, t: "Innen · Lounge" },
              { ic: g.Sparkles, t: "Innen · Fenster" },
              { ic: h.default, t: "Kinderecke" },
              { ic: i.default, t: "Bar-Tisch" },
            ];
          return (0, b.jsxs)("div", {
            className: "min-h-screen bg-[#f5efe8]",
            children: [
              (0, b.jsxs)("div", {
                className:
                  "bg-[#E4C0A8] pt-[110px] px-6 pb-12 text-center relative overflow-hidden",
                children: [
                  (0, b.jsx)("div", {
                    className: "absolute inset-0 opacity-[0.3] dot-bg",
                  }),
                  (0, b.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, b.jsx)("h1", {
                        className:
                          "font-calistoga text-[2.2rem] text-[#2d1f19] mb-3",
                        children: "Tisch reservieren",
                      }),
                      (0, b.jsx)("p", {
                        className:
                          "font-nunito text-[#5c3d35] max-w-sm mx-auto text-sm",
                        children: "Plane deinen Besuch",
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "max-w-[500px] mx-auto px-6 py-10 pb-32",
                children: (0, b.jsxs)(d.FadeUp, {
                  className: "space-y-8",
                  children: [
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Anzahl Gäste",
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "bg-white rounded-2xl p-4 flex items-center justify-between",
                          children: [
                            (0, b.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, b.jsx)(h.default, {
                                  size: 22,
                                  className: "text-[#CC624C]",
                                  strokeWidth: 1.8,
                                }),
                                (0, b.jsxs)("span", {
                                  className:
                                    "font-calistoga text-xl text-[#2d1f19]",
                                  children: [a, " Personen"],
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className:
                                "flex items-center bg-[#eedfcc] rounded-full p-1 gap-1",
                              children: [
                                (0, b.jsx)("button", {
                                  onClick: () => m(Math.max(1, a - 1)),
                                  className:
                                    "w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm",
                                  children: (0, b.jsx)(j.Minus, {
                                    size: 16,
                                    className: "text-[#2d1f19]",
                                    strokeWidth: 2.5,
                                  }),
                                }),
                                (0, b.jsx)("button", {
                                  onClick: () => m(a + 1),
                                  className:
                                    "w-8 h-8 rounded-full bg-[#CC624C] flex items-center justify-center shadow-sm",
                                  children: (0, b.jsx)(k.Plus, {
                                    size: 16,
                                    className: "text-white",
                                    strokeWidth: 2.5,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Datum",
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar",
                          children: [
                            { w: "Heute", d: 24, disabled: !1 },
                            { w: "Fr", d: 25, disabled: !1 },
                            { w: "Sa", d: 26, disabled: !1 },
                            { w: "So", d: 27, disabled: !1 },
                            { w: "Mo", d: 28, disabled: !1 },
                          ].map((a) =>
                            (0, b.jsxs)(
                              "button",
                              {
                                onClick: () => o(a.d),
                                className: `shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 ${n === a.d ? "bg-[#CC624C] text-white border-[#CC624C]" : "bg-white text-[#2d1f19] border-[#eedfcc]"}`,
                                children: [
                                  (0, b.jsx)("div", {
                                    className: `text-[11px] font-bold ${n === a.d ? "opacity-85" : "opacity-60"}`,
                                    children: a.w,
                                  }),
                                  (0, b.jsx)("div", {
                                    className:
                                      "font-calistoga text-xl mt-1 leading-none",
                                    children: a.d,
                                  }),
                                  (0, b.jsx)("div", {
                                    className: `text-[10px] font-bold mt-1 ${n === a.d ? "opacity-80" : "opacity-50"}`,
                                    children: "JAN",
                                  }),
                                ],
                              },
                              a.d,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Uhrzeit · Fr 25.01",
                        }),
                        (0, b.jsx)("div", {
                          className: "grid grid-cols-4 gap-2",
                          children: [
                            "12:00",
                            "12:30",
                            "13:00",
                            "13:30",
                            "15:00",
                            "15:30",
                            "17:00",
                            "17:30",
                            "18:00",
                            "18:30",
                            "19:00",
                            "19:30",
                          ].map((a, c) => {
                            let d = 2 === c,
                              e = p === a;
                            return (0, b.jsx)(
                              "button",
                              {
                                disabled: d,
                                onClick: () => q(a),
                                className: `rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 ${d ? "bg-white text-[#2d1f19] opacity-40 line-through border-[#eedfcc]" : e ? "bg-[#CC624C] text-white border-[#CC624C]" : "bg-white text-[#2d1f19] border-transparent"}`,
                                children: a,
                              },
                              a,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Bereich (optional)",
                        }),
                        (0, b.jsx)("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: v.map((a) => {
                            let c = r === a.t,
                              d = a.ic;
                            return (0, b.jsxs)(
                              "button",
                              {
                                onClick: () => s(a.t),
                                className: `rounded-2xl p-3 flex items-center gap-2.5 transition-colors ${c ? "bg-[#2d1f19] text-white" : "bg-white text-[#2d1f19]"}`,
                                children: [
                                  (0, b.jsx)(d, {
                                    size: 16,
                                    className: c
                                      ? "text-[#E4C0A8]"
                                      : "text-[#CC624C]",
                                    strokeWidth: 1.8,
                                  }),
                                  (0, b.jsx)("span", {
                                    className: "text-xs font-extrabold",
                                    children: a.t,
                                  }),
                                ],
                              },
                              a.t,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Besonderer Anlass?",
                        }),
                        (0, b.jsx)("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            "Geburtstag",
                            "Date",
                            "Familientreffen",
                            "Sonstiges",
                          ].map((a) => {
                            let c = t === a;
                            return (0, b.jsx)(
                              "button",
                              {
                                onClick: () => u(a),
                                className: `px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 ${c ? "bg-[#CC624C] text-white border-[#CC624C]" : "bg-white text-[#2d1f19] border-[#eedfcc]"}`,
                                children: a,
                              },
                              a,
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("div", {
                className:
                  "fixed bottom-0 left-0 right-0 bg-[#fef8f5] border-t border-[#eedfcc] p-4 z-50",
                children: (0, b.jsxs)("div", {
                  className: "max-w-[500px] mx-auto",
                  children: [
                    (0, b.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-xl p-3 mb-3 flex justify-between items-center text-xs",
                      children: [
                        (0, b.jsxs)("span", {
                          className: "font-bold text-[#5c3d35]",
                          children: ["Fr 25.01 · ", p, " · ", a, " Personen"],
                        }),
                        (0, b.jsx)("span", {
                          className: "font-black text-[#CC624C] text-[11px]",
                          children: "BEARBEITEN",
                        }),
                      ],
                    }),
                    (0, b.jsxs)(e.PrimaryButton, {
                      large: !0,
                      className: "w-full",
                      sectionBg: "#fef8f5",
                      children: [
                        (0, b.jsx)(l.Calendar, { size: 18 }),
                        " Tisch reservieren",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      912686,
    );
  },
];

//# sourceMappingURL=_0xpjp6~._.js.map
