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
  860097,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(219107),
      e = a.i(954098),
      f = a.i(818783),
      g = a.i(544623),
      h = a.i(858301),
      i = a.i(50944),
      j = a.i(762492),
      k = a.i(324429);
    a.s([
      "default",
      0,
      function () {
        let a = (0, i.useRouter)(),
          { updateOrderData: l, orderType: m } = (0, j.useStore)(),
          [n] = (0, c.useState)(() =>
            (function () {
              let a = [],
                b = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
              for (let c = 0; c < 5; c++) {
                let d = new Date();
                d.setDate(d.getDate() + c);
                let e = b[d.getDay()];
                (0 === c ? (e = "Heute") : 1 === c && (e = "Morgen"),
                  a.push({
                    label: e,
                    date: d.getDate(),
                    fullDate: d.toISOString().split("T")[0],
                  }));
              }
              return a;
            })(),
          ),
          [o, p] = (0, c.useState)(n[0].fullDate),
          [q, r] = (0, c.useState)(""),
          s = (function (a) {
            let b = [],
              c = new Date("2000-01-01T12:00:00"),
              d = new Date("2000-01-01T22:00:00"),
              e = new Date(),
              f = a === e.toISOString().split("T")[0];
            for (; c <= d; ) {
              let a = c.getHours().toString().padStart(2, "0"),
                d = c.getMinutes().toString().padStart(2, "0"),
                g = `${a}:${d}`,
                h = !1;
              if (f) {
                let a = new Date();
                (a.setHours(c.getHours(), c.getMinutes(), 0, 0),
                  a.getTime() < e.getTime() + 9e5 && (h = !0));
              }
              (b.push({ time: g, isPast: h }),
                c.setMinutes(c.getMinutes() + 15));
            }
            return b;
          })(o);
        return (0, b.jsxs)("div", {
          className: "min-h-screen bg-[#f5efe8] flex flex-col",
          children: [
            (0, b.jsxs)("div", {
              className:
                "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between",
              children: [
                (0, b.jsx)("button", {
                  onClick: () => a.back(),
                  className:
                    "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
                  children: (0, b.jsx)(d.ArrowLeft, {
                    size: 20,
                    color: "#2d1f19",
                  }),
                }),
                (0, b.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "font-calistoga text-lg text-[#2d1f19] leading-tight",
                      children: "delivery" === m ? "Lieferzeit" : "Abholzeit",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-bold text-[#7a5a52]",
                      children: "Schritt 2 von 3",
                    }),
                  ],
                }),
                (0, b.jsx)("div", { className: "w-10 h-10" }),
              ],
            }),
            (0, b.jsx)("div", {
              className: "px-5 pb-4 flex gap-1.5",
              children: [!0, !0, !1].map((a, c) =>
                (0, b.jsx)(
                  "div",
                  {
                    className: `flex-1 h-1 rounded-full ${a ? "bg-[#CC624C]" : "bg-[#eedfcc]"}`,
                  },
                  c,
                ),
              ),
            }),
            (0, b.jsxs)("div", {
              className: "px-5 flex-1 overflow-y-auto pb-6",
              children: [
                "delivery" !== m &&
                  (0, b.jsxs)(g.FadeUp, {
                    delay: 0.1,
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                        children: "Ort",
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "bg-white rounded-[18px] p-3.5 flex gap-3 items-start mb-5 shadow-sm",
                        children: [
                          (0, b.jsx)("div", {
                            className:
                              "w-[42px] h-[42px] rounded-full bg-[#E4C0A8] flex items-center justify-center shrink-0",
                            children: (0, b.jsx)(e.MapPin, {
                              size: 20,
                              color: "#CC624C",
                              strokeWidth: 2,
                            }),
                          }),
                          (0, b.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, b.jsx)("div", {
                                className:
                                  "font-calistoga text-[15px] text-[#2d1f19]",
                                children: "Hey Fede! Wetzlar",
                              }),
                              (0, b.jsx)("div", {
                                className:
                                  "font-nunito text-[11.5px] text-[#7a5a52] mt-0.5",
                                children: k.FULL_ADDRESS,
                              }),
                              (0, b.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-1.5 bg-[rgba(72,160,90,0.13)] px-2 py-1 rounded-full mt-2",
                                children: [
                                  (0, b.jsx)("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-[#3a9d52]",
                                  }),
                                  (0, b.jsx)("span", {
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
                (0, b.jsxs)(g.FadeUp, {
                  delay: 0.2,
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                      children: "Welcher Tag?",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "flex gap-2 mb-5 overflow-x-auto hide-scrollbar pb-2",
                      children: n.map((a) =>
                        (0, b.jsxs)(
                          "button",
                          {
                            onClick: () => {
                              (p(a.fullDate), r(""));
                            },
                            className: `shrink-0 w-[60px] py-2.5 rounded-[14px] text-center transition-all ${o === a.fullDate ? "bg-[#CC624C] text-white shadow-md" : "bg-white text-[#2d1f19] shadow-sm"}`,
                            children: [
                              (0, b.jsx)("div", {
                                className: `font-nunito text-[10px] font-bold ${o === a.fullDate ? "opacity-85" : "opacity-60"}`,
                                children: a.label,
                              }),
                              (0, b.jsx)("div", {
                                className: "font-calistoga text-lg mt-0.5",
                                children: a.date,
                              }),
                            ],
                          },
                          a.fullDate,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, b.jsxs)(g.FadeUp, {
                  delay: 0.3,
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                      children: "Welche Uhrzeit?",
                    }),
                    (0, b.jsx)("div", {
                      className: "grid grid-cols-3 gap-2 mb-5",
                      children: s.map((a) => {
                        let c = q === a.time && !a.isPast;
                        return (0, b.jsx)(
                          "button",
                          {
                            disabled: a.isPast,
                            onClick: () => r(a.time),
                            className: `rounded-[12px] py-2.5 text-center text-[13px] font-extrabold transition-all ${a.isPast ? "opacity-40 bg-white text-[#2d1f19] line-through" : c ? "bg-[#CC624C] text-white shadow-md" : "bg-white text-[#2d1f19] shadow-sm"}`,
                            children: a.time,
                          },
                          a.time,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)("div", {
              className:
                "p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]",
              children: (0, b.jsxs)(h.PrimaryButton, {
                onClick: () => {
                  q
                    ? (l({ pickupDate: o, pickupTime: q }),
                      a.push("/order-review"))
                    : alert(
                        `Bitte w\xe4hle eine ${"delivery" === m ? "Lieferzeit" : "Abholzeit"} aus.`,
                      );
                },
                className: "w-full flex justify-center items-center gap-2",
                children: [
                  "Bestellung prüfen",
                  (0, b.jsx)(f.ArrowRight, { size: 18 }),
                ],
              }),
            }),
          ],
        });
      },
    ]);
  },
];

//# sourceMappingURL=_0r7ok7u._.js.map
