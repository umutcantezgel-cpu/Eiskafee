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
        let r = (0, s.useRef)(null),
          [n, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && l(!0);
              },
              { threshold: 0.12 },
            );
            return (r.current && e.observe(r.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: r,
            className: i,
            style: {
              opacity: +!!n,
              transform: n ? "none" : "translateY(20px)",
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
      r = e.i(88653),
      n = e.i(786563),
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
          href: x,
          large: p = !1,
          sectionBg: h = "#f5efe8",
          className: u = "",
          disabled: f = !1,
        }) {
          let [m, b] = (0, s.useState)(!1),
            [g, C] = (0, s.useState)([]);
          (0, s.useEffect)(() => {
            if (0 === g.length) return;
            let e = g.map((e) =>
              setTimeout(() => C((t) => t.filter((t) => t.id !== e.id)), 800),
            );
            return () => e.forEach(clearTimeout);
          }, [g]);
          let v = (e) => {
              if (f) return;
              let t = e.currentTarget.getBoundingClientRect(),
                s = (e.clientX ?? t.left + t.width / 2) - t.left,
                a = (e.clientY ?? t.top + t.height / 2) - t.top;
              (C((e) => {
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
            y = (0, t.jsxs)(i.motion.button, {
              onClick: x ? void 0 : v,
              disabled: f,
              onHoverStart: () => b(!0),
              onHoverEnd: () => b(!1),
              whileHover: f ? {} : { scale: 1.05 },
              whileTap: f ? {} : { scale: 0.92, scaleX: 1.06, scaleY: 0.84 },
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 1,
              },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${p ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${f ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${u}`,
              style: {
                boxShadow:
                  m && !f
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
                  children: (0, t.jsx)(r.AnimatePresence, {
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
                                (0, t.jsx)(n.Star, {
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
          return x
            ? (0, t.jsx)("div", {
                onClick: v,
                className: "inline-block",
                style: { textDecoration: "none" },
                children: (0, t.jsx)(a.TransitionLink, {
                  href: x,
                  style: { textDecoration: "none" },
                  className: "inline-block",
                  tabIndex: -1,
                  children: y,
                }),
              })
            : y;
        },
        "SecondaryButton",
        0,
        function ({ children: e, onClick: r, href: n, className: l = "" }) {
          let [o, c] = (0, s.useState)(!1),
            d = (0, t.jsx)(i.motion.button, {
              onClick: r,
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
          return n
            ? (0, t.jsx)(a.TransitionLink, {
                href: n,
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
  460573,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    e.s(["default", 0, t]);
  },
  149882,
  (e) => {
    "use strict";
    var t = e.i(460573);
    e.s(["Calendar", () => t.default]);
  },
  373235,
  672050,
  (e) => {
    "use strict";
    var t = e.i(456420);
    let s = (0, t.default)("heart", [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0",
        },
      ],
    ]);
    e.s(["default", 0, s], 373235);
    let a = (0, t.default)("users", [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ]);
    e.s(["default", 0, a], 672050);
  },
  328911,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("coffee", [
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
    e.s(["default", 0, t]);
  },
  460003,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(636498),
      i = e.i(144925),
      r = e.i(373235),
      r = r,
      n = e.i(328623),
      l = e.i(672050),
      l = l,
      o = e.i(328911),
      o = o,
      c = e.i(935829),
      d = e.i(77071),
      x = e.i(149882);
    e.s(
      [
        "default",
        0,
        function () {
          let [e, p] = (0, s.useState)(4),
            [h, u] = (0, s.useState)(25),
            [f, m] = (0, s.useState)("15:30"),
            [b, g] = (0, s.useState)("Innen · Lounge"),
            [C, v] = (0, s.useState)("Geburtstag"),
            y = [
              { ic: r.default, t: "Innen · Lounge" },
              { ic: n.Sparkles, t: "Innen · Fenster" },
              { ic: l.default, t: "Kinderecke" },
              { ic: o.default, t: "Bar-Tisch" },
            ];
          return (0, t.jsxs)("div", {
            className: "min-h-screen bg-[#f5efe8]",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "bg-[#E4C0A8] pt-[110px] px-6 pb-12 text-center relative overflow-hidden",
                children: [
                  (0, t.jsx)("div", {
                    className: "absolute inset-0 opacity-[0.3] dot-bg",
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, t.jsx)("h1", {
                        className:
                          "font-calistoga text-[2.2rem] text-[#2d1f19] mb-3",
                        children: "Tisch reservieren",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "font-nunito text-[#5c3d35] max-w-sm mx-auto text-sm",
                        children: "Plane deinen Besuch",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "max-w-[500px] mx-auto px-6 py-10 pb-32",
                children: (0, t.jsxs)(a.FadeUp, {
                  className: "space-y-8",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Anzahl Gäste",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "bg-white rounded-2xl p-4 flex items-center justify-between",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, t.jsx)(l.default, {
                                  size: 22,
                                  className: "text-[#CC624C]",
                                  strokeWidth: 1.8,
                                }),
                                (0, t.jsxs)("span", {
                                  className:
                                    "font-calistoga text-xl text-[#2d1f19]",
                                  children: [e, " Personen"],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-center bg-[#eedfcc] rounded-full p-1 gap-1",
                              children: [
                                (0, t.jsx)("button", {
                                  onClick: () => p(Math.max(1, e - 1)),
                                  className:
                                    "w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm",
                                  children: (0, t.jsx)(c.Minus, {
                                    size: 16,
                                    className: "text-[#2d1f19]",
                                    strokeWidth: 2.5,
                                  }),
                                }),
                                (0, t.jsx)("button", {
                                  onClick: () => p(e + 1),
                                  className:
                                    "w-8 h-8 rounded-full bg-[#CC624C] flex items-center justify-center shadow-sm",
                                  children: (0, t.jsx)(d.Plus, {
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
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Datum",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar",
                          children: [
                            { w: "Heute", d: 24, disabled: !1 },
                            { w: "Fr", d: 25, disabled: !1 },
                            { w: "Sa", d: 26, disabled: !1 },
                            { w: "So", d: 27, disabled: !1 },
                            { w: "Mo", d: 28, disabled: !1 },
                          ].map((e) =>
                            (0, t.jsxs)(
                              "button",
                              {
                                onClick: () => u(e.d),
                                className: `shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 ${h === e.d ? "bg-[#CC624C] text-white border-[#CC624C]" : "bg-white text-[#2d1f19] border-[#eedfcc]"}`,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: `text-[11px] font-bold ${h === e.d ? "opacity-85" : "opacity-60"}`,
                                    children: e.w,
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "font-calistoga text-xl mt-1 leading-none",
                                    children: e.d,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: `text-[10px] font-bold mt-1 ${h === e.d ? "opacity-80" : "opacity-50"}`,
                                    children: "JAN",
                                  }),
                                ],
                              },
                              e.d,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Uhrzeit · Fr 25.01",
                        }),
                        (0, t.jsx)("div", {
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
                          ].map((e, s) => {
                            let a = 2 === s,
                              i = f === e;
                            return (0, t.jsx)(
                              "button",
                              {
                                disabled: a,
                                onClick: () => m(e),
                                className: `rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 ${a ? "bg-white text-[#2d1f19] opacity-40 line-through border-[#eedfcc]" : i ? "bg-[#CC624C] text-white border-[#CC624C]" : "bg-white text-[#2d1f19] border-transparent"}`,
                                children: e,
                              },
                              e,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Bereich (optional)",
                        }),
                        (0, t.jsx)("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: y.map((e) => {
                            let s = b === e.t,
                              a = e.ic;
                            return (0, t.jsxs)(
                              "button",
                              {
                                onClick: () => g(e.t),
                                className: `rounded-2xl p-3 flex items-center gap-2.5 transition-colors ${s ? "bg-[#2d1f19] text-white" : "bg-white text-[#2d1f19]"}`,
                                children: [
                                  (0, t.jsx)(a, {
                                    size: 16,
                                    className: s
                                      ? "text-[#E4C0A8]"
                                      : "text-[#CC624C]",
                                    strokeWidth: 1.8,
                                  }),
                                  (0, t.jsx)("span", {
                                    className: "text-xs font-extrabold",
                                    children: e.t,
                                  }),
                                ],
                              },
                              e.t,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-3",
                          children: "Besonderer Anlass?",
                        }),
                        (0, t.jsx)("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            "Geburtstag",
                            "Date",
                            "Familientreffen",
                            "Sonstiges",
                          ].map((e) => {
                            let s = C === e;
                            return (0, t.jsx)(
                              "button",
                              {
                                onClick: () => v(e),
                                className: `px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 ${s ? "bg-[#CC624C] text-white border-[#CC624C]" : "bg-white text-[#2d1f19] border-[#eedfcc]"}`,
                                children: e,
                              },
                              e,
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "fixed bottom-0 left-0 right-0 bg-[#fef8f5] border-t border-[#eedfcc] p-4 z-50",
                children: (0, t.jsxs)("div", {
                  className: "max-w-[500px] mx-auto",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-xl p-3 mb-3 flex justify-between items-center text-xs",
                      children: [
                        (0, t.jsxs)("span", {
                          className: "font-bold text-[#5c3d35]",
                          children: ["Fr 25.01 · ", f, " · ", e, " Personen"],
                        }),
                        (0, t.jsx)("span", {
                          className: "font-black text-[#CC624C] text-[11px]",
                          children: "BEARBEITEN",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.PrimaryButton, {
                      large: !0,
                      className: "w-full",
                      sectionBg: "#fef8f5",
                      children: [
                        (0, t.jsx)(x.Calendar, { size: 18 }),
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
      460003,
    );
  },
]);
