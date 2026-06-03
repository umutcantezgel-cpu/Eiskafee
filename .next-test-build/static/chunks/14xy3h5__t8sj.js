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
      function ({ children: e, delay: a = 0, className: r = "" }) {
        let i = (0, s.useRef)(null),
          [n, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && l(!0);
              },
              { threshold: 0.12 },
            );
            return (i.current && e.observe(i.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: i,
            className: r,
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
      r = e.i(846932),
      i = e.i(88653),
      n = e.i(786563),
      l = e.i(188873);
    e.s(["Sparkles", () => l.default], 328623);
    var l = l;
    let o = ["#CC624C", "#E4C0A8", "#eedfcc", "#fefefe"],
      d = ["dot", "sparkle", "star"];
    e.s(
      [
        "PrimaryButton",
        0,
        function ({
          children: e,
          onClick: c,
          href: x,
          large: p = !1,
          sectionBg: u = "#f5efe8",
          className: f = "",
          disabled: h = !1,
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
          let j = (e) => {
              if (h) return;
              let t = e.currentTarget.getBoundingClientRect(),
                s = (e.clientX ?? t.left + t.width / 2) - t.left,
                a = (e.clientY ?? t.top + t.height / 2) - t.top;
              (y((e) => {
                let t, r;
                return [
                  ...e,
                  ((t = Date.now() + Math.random()),
                  (r = Array.from({ length: 14 }, (e, s) => ({
                    id: `${t}-${s}`,
                    angle: Math.random() * Math.PI * 2,
                    distance: 40 + 60 * Math.random(),
                    size: 4 + 10 * Math.random(),
                    rotation: (Math.random() - 0.5) * 540,
                    color: o[Math.floor(Math.random() * o.length)],
                    type: d[Math.floor(Math.random() * d.length)],
                  }))),
                  { id: t, originX: s, originY: a, particles: r }),
                ];
              }),
                c && c(e));
            },
            k = (0, t.jsxs)(r.motion.button, {
              onClick: x ? void 0 : j,
              disabled: h,
              onHoverStart: () => b(!0),
              onHoverEnd: () => b(!1),
              whileHover: h ? {} : { scale: 1.05 },
              whileTap: h ? {} : { scale: 0.92, scaleX: 1.06, scaleY: 0.84 },
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 1,
              },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${p ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${h ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${f}`,
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
                    background: u,
                    transform: m ? "scale(1)" : "scale(0)",
                    transformOrigin: "center bottom",
                    transition: "transform .25s cubic-bezier(0.34,1.56,0.64,1)",
                  },
                }),
                (0, t.jsx)("span", {
                  className:
                    "absolute inset-0 pointer-events-none overflow-visible z-20",
                  children: (0, t.jsx)(i.AnimatePresence, {
                    children: g.map((e) =>
                      e.particles.map((s) =>
                        (0, t.jsxs)(
                          r.motion.div,
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
                onClick: j,
                className: "inline-block",
                style: { textDecoration: "none" },
                children: (0, t.jsx)(a.TransitionLink, {
                  href: x,
                  style: { textDecoration: "none" },
                  className: "inline-block",
                  tabIndex: -1,
                  children: k,
                }),
              })
            : k;
        },
        "SecondaryButton",
        0,
        function ({ children: e, onClick: i, href: n, className: l = "" }) {
          let [o, d] = (0, s.useState)(!1),
            c = (0, t.jsx)(r.motion.button, {
              onClick: i,
              onHoverStart: () => d(!0),
              onHoverEnd: () => d(!1),
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
                children: c,
              })
            : c;
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
  63139,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("package", [
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
    e.s(["default", 0, t]);
  },
  443971,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("qr-code", [
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
    e.s(["default", 0, t]);
  },
  679258,
  (e) => {
    "use strict";
    var t = e.i(63139);
    e.s(["Package", () => t.default]);
  },
  978754,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(632781),
      r = e.i(689664),
      i = e.i(328623),
      n = e.i(443971),
      n = n,
      l = e.i(679258),
      o = e.i(974336),
      d = e.i(318028),
      c = e.i(636498),
      x = e.i(144925),
      p = e.i(618566);
    e.i(436180);
    var u = e.i(386205),
      f = e.i(263802),
      h = e.i(959141);
    function m() {
      let e = (0, p.useSearchParams)().get("orderId"),
        [m, b] = (0, s.useState)(null),
        [g, y] = (0, s.useState)(!0);
      if (
        ((0, s.useEffect)(() => {
          e
            ? (async () => {
                try {
                  let t = (0, u.doc)(h.db, "orders", e),
                    s = await (0, f.getDoc)(t);
                  s.exists() && b(s.data());
                } catch (e) {
                  console.error("Error fetching order:", e);
                } finally {
                  y(!1);
                }
              })()
            : y(!1);
        }, [e]),
        g)
      )
        return (0, t.jsx)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex items-center justify-center",
          children: (0, t.jsx)(a.Loader2, {
            className: "animate-spin text-[#CC624C]",
            size: 32,
          }),
        });
      if (!m)
        return (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center px-5",
          children: [
            (0, t.jsx)("h1", {
              className: "font-calistoga text-2xl text-[#2d1f19] mb-4",
              children: "Bestellung nicht gefunden",
            }),
            (0, t.jsx)(o.TransitionLink, {
              href: "/",
              children: (0, t.jsx)(x.PrimaryButton, {
                children: "Zurück zur Startseite",
              }),
            }),
          ],
        });
      let j = m.items?.reduce((e, t) => e + t.quantity, 0) || 0,
        k =
          m.pickupDate === new Date().toISOString().split("T")[0]
            ? "Heute"
            : new Date(m.pickupDate).toLocaleDateString("de-DE", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
              });
      return (0, t.jsxs)("div", {
        className: "min-h-screen bg-[#f5efe8] flex flex-col",
        children: [
          (0, t.jsxs)("div", {
            className: "pt-8 px-6 text-center relative",
            children: [
              (0, t.jsxs)(c.FadeUp, {
                delay: 0.1,
                className:
                  "mx-auto mt-2.5 mb-4 w-[84px] h-[84px] rounded-full bg-[#CC624C] flex items-center justify-center shadow-[0_12px_28px_rgba(204,98,76,0.32)] relative",
                children: [
                  (0, t.jsx)(r.Check, {
                    size: 42,
                    color: "white",
                    strokeWidth: 2.5,
                  }),
                  (0, t.jsx)("div", {
                    className: "absolute -top-2 -right-3",
                    children: (0, t.jsx)(i.Sparkles, {
                      size: 20,
                      color: "#CC624C",
                      strokeWidth: 1.5,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "absolute -bottom-1.5 -left-3",
                    children: (0, t.jsx)(i.Sparkles, {
                      size: 14,
                      color: "#E4C0A8",
                      strokeWidth: 1.5,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)(c.FadeUp, {
                delay: 0.2,
                children: [
                  (0, t.jsx)("h1", {
                    className:
                      "font-calistoga text-[26px] text-[#2d1f19] leading-[1.1]",
                    children: "Bestellung bestätigt!",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "font-nunito text-[13px] text-[#5c3d35] mt-1.5 leading-relaxed max-w-[280px] mx-auto",
                    children:
                      "Wir bereiten alles frisch vor. Bestätigung per SMS an deine Nummer.",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "px-5 pt-6",
            children: (0, t.jsxs)(c.FadeUp, {
              delay: 0.3,
              className:
                "border-2 border-dashed border-[#CC624C] rounded-[20px] bg-white relative shadow-sm",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute -left-[13px] top-[42%] w-[26px] h-[26px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#E4C0A8] border-l-transparent border-t-transparent -rotate-45",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute -right-[13px] top-[42%] w-[26px] h-[26px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#E4C0A8] border-r-transparent border-b-transparent -rotate-45",
                }),
                (0, t.jsxs)("div", {
                  className:
                    "p-[18px_22px_14px] text-center border-b-2 border-dashed border-[#eedfcc]",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "font-nunito text-[10px] font-black text-[#7a5a52] tracking-[1.4px] uppercase",
                      children: "Bestellnummer",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "font-calistoga text-[30px] text-[#CC624C] mt-1 tracking-wide",
                      children: m.orderNumber || "#HF-XXXX",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "p-[18px_22px] flex gap-3.5 items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "w-[88px] h-[88px] bg-[#2d1f19] rounded-[12px] p-[7px] shrink-0",
                      children: (0, t.jsxs)("div", {
                        className:
                          "w-full h-full bg-white rounded-[6px] flex flex-col items-center justify-center p-1",
                        children: [
                          (0, t.jsx)(n.default, {
                            size: 40,
                            color: "#2d1f19",
                            strokeWidth: 1.5,
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "font-nunito text-[10px] font-bold text-[#2d1f19] mt-1",
                            children: m.orderNumber,
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "font-nunito text-[10px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                          children: "Abholung",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "font-calistoga text-[18px] text-[#2d1f19] mt-1 leading-[1.1]",
                          children: [k, " · ", m.pickupTime],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "font-nunito text-[11.5px] text-[#7a5a52] mt-1.5 leading-snug",
                          children: [
                            d.BUSINESS.street,
                            (0, t.jsx)("br", {}),
                            d.BUSINESS.postalCode,
                            " ",
                            d.BUSINESS.city,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "p-[18px_20px]",
            children: (0, t.jsxs)(c.FadeUp, {
              delay: 0.4,
              className:
                "bg-[#eedfcc] rounded-[14px] p-[10px_14px] flex justify-between items-center shadow-sm",
              children: [
                (0, t.jsxs)("span", {
                  className:
                    "font-nunito text-[12px] font-extrabold text-[#2d1f19]",
                  children: [j, " Artikel · vor Ort zu zahlen"],
                }),
                (0, t.jsxs)("span", {
                  className: "font-calistoga text-[17px] text-[#CC624C]",
                  children: [(m.total || 0).toFixed(2).replace(".", ","), " €"],
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "mt-auto px-5 pb-8 pt-6",
            children: (0, t.jsxs)(c.FadeUp, {
              delay: 0.5,
              className: "flex flex-col gap-2.5",
              children: [
                (0, t.jsx)(o.TransitionLink, {
                  href: `/order-status?orderId=${e}`,
                  className: "block w-full",
                  children: (0, t.jsxs)(x.PrimaryButton, {
                    className: "w-full flex justify-center items-center gap-2",
                    children: [
                      (0, t.jsx)(l.Package, { size: 18 }),
                      "Status anzeigen",
                    ],
                  }),
                }),
                (0, t.jsx)(o.TransitionLink, {
                  href: "/",
                  className: "block w-full",
                  children: (0, t.jsx)("button", {
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
    e.s(
      [
        "default",
        0,
        function () {
          return (0, t.jsx)(s.Suspense, {
            fallback: (0, t.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, t.jsx)(a.Loader2, {
                className: "animate-spin text-[#CC624C]",
                size: 32,
              }),
            }),
            children: (0, t.jsx)(m, {}),
          });
        },
      ],
      978754,
    );
  },
]);
