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
  739694,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("package", [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
          key: "1a0edw",
        },
      ],
      ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
    ]);
    a.s(["default", 0, b]);
  },
  892965,
  (a) => {
    "use strict";
    var b = a.i(739694);
    a.s(["Package", () => b.default]);
  },
  716679,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("qr-code", [
      [
        "rect",
        { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" },
      ],
      [
        "rect",
        { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
      ],
      [
        "rect",
        { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
      ],
      ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
      ["path", { d: "M21 21v.01", key: "ents32" }],
      ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
      ["path", { d: "M3 12h.01", key: "nlz23k" }],
      ["path", { d: "M12 3h.01", key: "n36tog" }],
      ["path", { d: "M12 16v.01", key: "133mhm" }],
      ["path", { d: "M16 12h1", key: "1slzba" }],
      ["path", { d: "M21 12v.01", key: "1lwtk9" }],
      ["path", { d: "M12 21v-1", key: "1880an" }],
    ]);
    a.s(["default", 0, b]);
  },
  56462,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(875160),
      e = a.i(752562),
      f = a.i(986708),
      g = a.i(716679),
      g = g,
      h = a.i(892965),
      i = a.i(371947),
      j = a.i(324429),
      k = a.i(544623),
      l = a.i(858301),
      m = a.i(50944);
    a.i(69387);
    var n = a.i(132787),
      o = a.i(601787),
      p = a.i(420237);
    function q() {
      let a = (0, m.useSearchParams)().get("orderId"),
        [q, r] = (0, c.useState)(null),
        [s, t] = (0, c.useState)(!0);
      if (
        ((0, c.useEffect)(() => {
          a
            ? (async () => {
                try {
                  let b = (0, n.doc)(p.db, "orders", a),
                    c = await (0, o.getDoc)(b);
                  c.exists() && r(c.data());
                } catch (a) {
                  console.error("Error fetching order:", a);
                } finally {
                  t(!1);
                }
              })()
            : t(!1);
        }, [a]),
        s)
      )
        return (0, b.jsx)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex items-center justify-center",
          children: (0, b.jsx)(d.Loader2, {
            className: "animate-spin text-[#CC624C]",
            size: 32,
          }),
        });
      if (!q)
        return (0, b.jsxs)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center px-5",
          children: [
            (0, b.jsx)("h1", {
              className: "font-calistoga text-2xl text-[#2d1f19] mb-4",
              children: "Bestellung nicht gefunden",
            }),
            (0, b.jsx)(i.TransitionLink, {
              href: "/",
              children: (0, b.jsx)(l.PrimaryButton, {
                children: "Zurück zur Startseite",
              }),
            }),
          ],
        });
      let u = q.items?.reduce((a, b) => a + b.quantity, 0) || 0,
        v =
          q.pickupDate === new Date().toISOString().split("T")[0]
            ? "Heute"
            : new Date(q.pickupDate).toLocaleDateString("de-DE", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
              });
      return (0, b.jsxs)("div", {
        className: "min-h-screen bg-[#f5efe8] flex flex-col",
        children: [
          (0, b.jsxs)("div", {
            className: "pt-8 px-6 text-center relative",
            children: [
              (0, b.jsxs)(k.FadeUp, {
                delay: 0.1,
                className:
                  "mx-auto mt-2.5 mb-4 w-[84px] h-[84px] rounded-full bg-[#CC624C] flex items-center justify-center shadow-[0_12px_28px_rgba(204,98,76,0.32)] relative",
                children: [
                  (0, b.jsx)(e.Check, {
                    size: 42,
                    color: "white",
                    strokeWidth: 2.5,
                  }),
                  (0, b.jsx)("div", {
                    className: "absolute -top-2 -right-3",
                    children: (0, b.jsx)(f.Sparkles, {
                      size: 20,
                      color: "#CC624C",
                      strokeWidth: 1.5,
                    }),
                  }),
                  (0, b.jsx)("div", {
                    className: "absolute -bottom-1.5 -left-3",
                    children: (0, b.jsx)(f.Sparkles, {
                      size: 14,
                      color: "#E4C0A8",
                      strokeWidth: 1.5,
                    }),
                  }),
                ],
              }),
              (0, b.jsxs)(k.FadeUp, {
                delay: 0.2,
                children: [
                  (0, b.jsx)("h1", {
                    className:
                      "font-calistoga text-[26px] text-[#2d1f19] leading-[1.1]",
                    children: "Bestellung bestätigt!",
                  }),
                  (0, b.jsx)("p", {
                    className:
                      "font-nunito text-[13px] text-[#5c3d35] mt-1.5 leading-relaxed max-w-[280px] mx-auto",
                    children:
                      "Wir bereiten alles frisch vor. Bestätigung per SMS an deine Nummer.",
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsx)("div", {
            className: "px-5 pt-6",
            children: (0, b.jsxs)(k.FadeUp, {
              delay: 0.3,
              className:
                "border-2 border-dashed border-[#CC624C] rounded-[20px] bg-white relative shadow-sm",
              children: [
                (0, b.jsx)("div", {
                  className:
                    "absolute -left-[13px] top-[42%] w-[26px] h-[26px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#E4C0A8] border-l-transparent border-t-transparent -rotate-45",
                }),
                (0, b.jsx)("div", {
                  className:
                    "absolute -right-[13px] top-[42%] w-[26px] h-[26px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#E4C0A8] border-r-transparent border-b-transparent -rotate-45",
                }),
                (0, b.jsxs)("div", {
                  className:
                    "p-[18px_22px_14px] text-center border-b-2 border-dashed border-[#eedfcc]",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "font-nunito text-[10px] font-black text-[#7a5a52] tracking-[1.4px] uppercase",
                      children: "Bestellnummer",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "font-calistoga text-[30px] text-[#CC624C] mt-1 tracking-wide",
                      children: q.orderNumber || "#HF-XXXX",
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "p-[18px_22px] flex gap-3.5 items-center",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "w-[88px] h-[88px] bg-[#2d1f19] rounded-[12px] p-[7px] shrink-0",
                      children: (0, b.jsxs)("div", {
                        className:
                          "w-full h-full bg-white rounded-[6px] flex flex-col items-center justify-center p-1",
                        children: [
                          (0, b.jsx)(g.default, {
                            size: 40,
                            color: "#2d1f19",
                            strokeWidth: 1.5,
                          }),
                          (0, b.jsx)("span", {
                            className:
                              "font-nunito text-[10px] font-bold text-[#2d1f19] mt-1",
                            children: q.orderNumber,
                          }),
                        ],
                      }),
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "font-nunito text-[10px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                          children: "Abholung",
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "font-calistoga text-[18px] text-[#2d1f19] mt-1 leading-[1.1]",
                          children: [v, " · ", q.pickupTime],
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "font-nunito text-[11.5px] text-[#7a5a52] mt-1.5 leading-snug",
                          children: [
                            j.BUSINESS.street,
                            (0, b.jsx)("br", {}),
                            j.BUSINESS.postalCode,
                            " ",
                            j.BUSINESS.city,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, b.jsx)("div", {
            className: "p-[18px_20px]",
            children: (0, b.jsxs)(k.FadeUp, {
              delay: 0.4,
              className:
                "bg-[#eedfcc] rounded-[14px] p-[10px_14px] flex justify-between items-center shadow-sm",
              children: [
                (0, b.jsxs)("span", {
                  className:
                    "font-nunito text-[12px] font-extrabold text-[#2d1f19]",
                  children: [u, " Artikel · vor Ort zu zahlen"],
                }),
                (0, b.jsxs)("span", {
                  className: "font-calistoga text-[17px] text-[#CC624C]",
                  children: [(q.total || 0).toFixed(2).replace(".", ","), " €"],
                }),
              ],
            }),
          }),
          (0, b.jsx)("div", {
            className: "mt-auto px-5 pb-8 pt-6",
            children: (0, b.jsxs)(k.FadeUp, {
              delay: 0.5,
              className: "flex flex-col gap-2.5",
              children: [
                (0, b.jsx)(i.TransitionLink, {
                  href: `/order-status?orderId=${a}`,
                  className: "block w-full",
                  children: (0, b.jsxs)(l.PrimaryButton, {
                    className: "w-full flex justify-center items-center gap-2",
                    children: [
                      (0, b.jsx)(h.Package, { size: 18 }),
                      "Status anzeigen",
                    ],
                  }),
                }),
                (0, b.jsx)(i.TransitionLink, {
                  href: "/",
                  className: "block w-full",
                  children: (0, b.jsx)("button", {
                    className:
                      "w-full py-3.5 rounded-[16px] border-2 border-[#E4C0A8] text-[#2d1f19] font-extrabold font-nunito text-[15px] bg-transparent active:bg-[rgba(228,192,168,0.2)] transition-colors",
                    children: "Zur Startseite",
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(
      [
        "default",
        0,
        function () {
          return (0, b.jsx)(c.Suspense, {
            fallback: (0, b.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, b.jsx)(d.Loader2, {
                className: "animate-spin text-[#CC624C]",
                size: 32,
              }),
            }),
            children: (0, b.jsx)(q, {}),
          });
        },
      ],
      56462,
    );
  },
];

//# sourceMappingURL=_0jstrb4._.js.map
