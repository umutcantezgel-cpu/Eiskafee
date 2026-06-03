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
      function ({ children: e, delay: i = 0, className: a = "" }) {
        let r = (0, s.useRef)(null),
          [l, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && n(!0);
              },
              { threshold: 0.12 },
            );
            return (r.current && e.observe(r.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: r,
            className: a,
            style: {
              opacity: +!!l,
              transform: l ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${i}s`,
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
      i = e.i(974336),
      a = e.i(846932),
      r = e.i(88653),
      l = e.i(786563),
      n = e.i(188873);
    e.s(["Sparkles", () => n.default], 328623);
    var n = n;
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
          large: u = !1,
          sectionBg: f = "#f5efe8",
          className: p = "",
          disabled: h = !1,
        }) {
          let [m, g] = (0, s.useState)(!1),
            [b, y] = (0, s.useState)([]);
          (0, s.useEffect)(() => {
            if (0 === b.length) return;
            let e = b.map((e) =>
              setTimeout(() => y((t) => t.filter((t) => t.id !== e.id)), 800),
            );
            return () => e.forEach(clearTimeout);
          }, [b]);
          let v = (e) => {
              if (h) return;
              let t = e.currentTarget.getBoundingClientRect(),
                s = (e.clientX ?? t.left + t.width / 2) - t.left,
                i = (e.clientY ?? t.top + t.height / 2) - t.top;
              (y((e) => {
                let t, a;
                return [
                  ...e,
                  ((t = Date.now() + Math.random()),
                  (a = Array.from({ length: 14 }, (e, s) => ({
                    id: `${t}-${s}`,
                    angle: Math.random() * Math.PI * 2,
                    distance: 40 + 60 * Math.random(),
                    size: 4 + 10 * Math.random(),
                    rotation: (Math.random() - 0.5) * 540,
                    color: o[Math.floor(Math.random() * o.length)],
                    type: c[Math.floor(Math.random() * c.length)],
                  }))),
                  { id: t, originX: s, originY: i, particles: a }),
                ];
              }),
                d && d(e));
            },
            j = (0, t.jsxs)(a.motion.button, {
              onClick: x ? void 0 : v,
              disabled: h,
              onHoverStart: () => g(!0),
              onHoverEnd: () => g(!1),
              whileHover: h ? {} : { scale: 1.05 },
              whileTap: h ? {} : { scale: 0.92, scaleX: 1.06, scaleY: 0.84 },
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 1,
              },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${u ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${h ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${p}`,
              style: {
                boxShadow:
                  m && !h
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
                    background: f,
                    transform: m ? "scale(1)" : "scale(0)",
                    transformOrigin: "center bottom",
                    transition: "transform .25s cubic-bezier(0.34,1.56,0.64,1)",
                  },
                }),
                (0, t.jsx)("span", {
                  className:
                    "absolute inset-0 pointer-events-none overflow-visible z-20",
                  children: (0, t.jsx)(r.AnimatePresence, {
                    children: b.map((e) =>
                      e.particles.map((s) =>
                        (0, t.jsxs)(
                          a.motion.div,
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
                                (0, t.jsx)(l.Star, {
                                  size: s.size,
                                  strokeWidth: 0,
                                  color: s.color,
                                  fill: s.color,
                                }),
                              "sparkle" === s.type &&
                                (0, t.jsx)(n.default, {
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
                children: (0, t.jsx)(i.TransitionLink, {
                  href: x,
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
        function ({ children: e, onClick: r, href: l, className: n = "" }) {
          let [o, c] = (0, s.useState)(!1),
            d = (0, t.jsx)(a.motion.button, {
              onClick: r,
              onHoverStart: () => c(!0),
              onHoverEnd: () => c(!1),
              whileTap: { scale: 0.94, scaleX: 1.04, scaleY: 0.88 },
              transition: { type: "spring", stiffness: 600, damping: 15 },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold rounded-full cursor-pointer whitespace-nowrap px-[25px] py-[10px] text-[0.88rem] ${n}`,
              style: {
                border: "2px solid #CC624C",
                color: o ? "#fff" : "#CC624C",
                background: o ? "#CC624C" : "transparent",
                transition: "background .2s ease, color .2s ease",
              },
              children: e,
            });
          return l
            ? (0, t.jsx)(i.TransitionLink, {
                href: l,
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
  273555,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      i = e.i(711241),
      a = e.i(420865),
      r = e.i(768877),
      l = e.i(636498),
      n = e.i(144925),
      o = e.i(618566),
      c = e.i(798688),
      d = e.i(318028);
    e.s([
      "default",
      0,
      function () {
        let e = (0, o.useRouter)(),
          { updateOrderData: x, orderType: u } = (0, c.useStore)(),
          [f] = (0, s.useState)(() =>
            (function () {
              let e = [],
                t = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
              for (let s = 0; s < 5; s++) {
                let i = new Date();
                i.setDate(i.getDate() + s);
                let a = t[i.getDay()];
                (0 === s ? (a = "Heute") : 1 === s && (a = "Morgen"),
                  e.push({
                    label: a,
                    date: i.getDate(),
                    fullDate: i.toISOString().split("T")[0],
                  }));
              }
              return e;
            })(),
          ),
          [p, h] = (0, s.useState)(f[0].fullDate),
          [m, g] = (0, s.useState)(""),
          b = (function (e) {
            let t = [],
              s = new Date("2000-01-01T12:00:00"),
              i = new Date("2000-01-01T22:00:00"),
              a = new Date(),
              r = e === a.toISOString().split("T")[0];
            for (; s <= i; ) {
              let e = s.getHours().toString().padStart(2, "0"),
                i = s.getMinutes().toString().padStart(2, "0"),
                l = `${e}:${i}`,
                n = !1;
              if (r) {
                let e = new Date();
                (e.setHours(s.getHours(), s.getMinutes(), 0, 0),
                  e.getTime() < a.getTime() + 9e5 && (n = !0));
              }
              (t.push({ time: l, isPast: n }),
                s.setMinutes(s.getMinutes() + 15));
            }
            return t;
          })(p);
        return (0, t.jsxs)("div", {
          className: "min-h-screen bg-[#f5efe8] flex flex-col",
          children: [
            (0, t.jsxs)("div", {
              className:
                "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between",
              children: [
                (0, t.jsx)("button", {
                  onClick: () => e.back(),
                  className:
                    "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
                  children: (0, t.jsx)(i.ArrowLeft, {
                    size: 20,
                    color: "#2d1f19",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "font-calistoga text-lg text-[#2d1f19] leading-tight",
                      children: "delivery" === u ? "Lieferzeit" : "Abholzeit",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-bold text-[#7a5a52]",
                      children: "Schritt 2 von 3",
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: "w-10 h-10" }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "px-5 pb-4 flex gap-1.5",
              children: [!0, !0, !1].map((e, s) =>
                (0, t.jsx)(
                  "div",
                  {
                    className: `flex-1 h-1 rounded-full ${e ? "bg-[#CC624C]" : "bg-[#eedfcc]"}`,
                  },
                  s,
                ),
              ),
            }),
            (0, t.jsxs)("div", {
              className: "px-5 flex-1 overflow-y-auto pb-6",
              children: [
                "delivery" !== u &&
                  (0, t.jsxs)(l.FadeUp, {
                    delay: 0.1,
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                        children: "Ort",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-white rounded-[18px] p-3.5 flex gap-3 items-start mb-5 shadow-sm",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "w-[42px] h-[42px] rounded-full bg-[#E4C0A8] flex items-center justify-center shrink-0",
                            children: (0, t.jsx)(a.MapPin, {
                              size: 20,
                              color: "#CC624C",
                              strokeWidth: 2,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "font-calistoga text-[15px] text-[#2d1f19]",
                                children: "Hey Fede! Wetzlar",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "font-nunito text-[11.5px] text-[#7a5a52] mt-0.5",
                                children: d.FULL_ADDRESS,
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-1.5 bg-[rgba(72,160,90,0.13)] px-2 py-1 rounded-full mt-2",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-[#3a9d52]",
                                  }),
                                  (0, t.jsx)("span", {
                                    className:
                                      "font-nunito text-[10px] font-extrabold text-[#3a9d52]",
                                    children: "Geöffnet · bis 22:00",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, t.jsxs)(l.FadeUp, {
                  delay: 0.2,
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                      children: "Welcher Tag?",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "flex gap-2 mb-5 overflow-x-auto hide-scrollbar pb-2",
                      children: f.map((e) =>
                        (0, t.jsxs)(
                          "button",
                          {
                            onClick: () => {
                              (h(e.fullDate), g(""));
                            },
                            className: `shrink-0 w-[60px] py-2.5 rounded-[14px] text-center transition-all ${p === e.fullDate ? "bg-[#CC624C] text-white shadow-md" : "bg-white text-[#2d1f19] shadow-sm"}`,
                            children: [
                              (0, t.jsx)("div", {
                                className: `font-nunito text-[10px] font-bold ${p === e.fullDate ? "opacity-85" : "opacity-60"}`,
                                children: e.label,
                              }),
                              (0, t.jsx)("div", {
                                className: "font-calistoga text-lg mt-0.5",
                                children: e.date,
                              }),
                            ],
                          },
                          e.fullDate,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)(l.FadeUp, {
                  delay: 0.3,
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                      children: "Welche Uhrzeit?",
                    }),
                    (0, t.jsx)("div", {
                      className: "grid grid-cols-3 gap-2 mb-5",
                      children: b.map((e) => {
                        let s = m === e.time && !e.isPast;
                        return (0, t.jsx)(
                          "button",
                          {
                            disabled: e.isPast,
                            onClick: () => g(e.time),
                            className: `rounded-[12px] py-2.5 text-center text-[13px] font-extrabold transition-all ${e.isPast ? "opacity-40 bg-white text-[#2d1f19] line-through" : s ? "bg-[#CC624C] text-white shadow-md" : "bg-white text-[#2d1f19] shadow-sm"}`,
                            children: e.time,
                          },
                          e.time,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]",
              children: (0, t.jsxs)(n.PrimaryButton, {
                onClick: () => {
                  m
                    ? (x({ pickupDate: p, pickupTime: m }),
                      e.push("/order-review"))
                    : alert(
                        `Bitte w\xe4hle eine ${"delivery" === u ? "Lieferzeit" : "Abholzeit"} aus.`,
                      );
                },
                className: "w-full flex justify-center items-center gap-2",
                children: [
                  "Bestellung prüfen",
                  (0, t.jsx)(r.ArrowRight, { size: 18 }),
                ],
              }),
            }),
          ],
        });
      },
    ]);
  },
]);
