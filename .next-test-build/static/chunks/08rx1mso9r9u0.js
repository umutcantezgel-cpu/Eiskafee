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
      function ({ children: e, delay: a = 0, className: n = "" }) {
        let i = (0, s.useRef)(null),
          [r, l] = (0, s.useState)(!1);
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
            className: n,
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
      n = e.i(846932),
      i = e.i(88653),
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
          large: x = !1,
          sectionBg: f = "#f5efe8",
          className: h = "",
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
                let t, n;
                return [
                  ...e,
                  ((t = Date.now() + Math.random()),
                  (n = Array.from({ length: 14 }, (e, s) => ({
                    id: `${t}-${s}`,
                    angle: Math.random() * Math.PI * 2,
                    distance: 40 + 60 * Math.random(),
                    size: 4 + 10 * Math.random(),
                    rotation: (Math.random() - 0.5) * 540,
                    color: o[Math.floor(Math.random() * o.length)],
                    type: c[Math.floor(Math.random() * c.length)],
                  }))),
                  { id: t, originX: s, originY: a, particles: n }),
                ];
              }),
                d && d(e));
            },
            j = (0, t.jsxs)(n.motion.button, {
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
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${x ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${p ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${h}`,
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
                    background: f,
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
                          n.motion.div,
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
        function ({ children: e, onClick: i, href: r, className: l = "" }) {
          let [o, c] = (0, s.useState)(!1),
            d = (0, t.jsx)(n.motion.button, {
              onClick: i,
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
  290135,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  96315,
  (e) => {
    "use strict";
    var t = e.i(290135);
    e.s(["Mail", () => t.default]);
  },
  343420,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]);
    e.s(["default", 0, t]);
  },
  810818,
  (e) => {
    "use strict";
    var t = e.i(343420);
    e.s(["Info", () => t.default]);
  },
  893999,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]);
    e.s(["default", 0, t]);
  },
  730274,
  (e) => {
    "use strict";
    var t = e.i(893999);
    e.s(["Send", () => t.default]);
  },
  434552,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(636498),
      n = e.i(144925),
      i = e.i(96315),
      r = e.i(689664),
      l = e.i(730274),
      o = e.i(810818),
      c = e.i(974336),
      d = e.i(959141);
    e.i(151718);
    var u = e.i(464104),
      u = u;
    e.s(
      [
        "default",
        0,
        function () {
          let [e, x] = (0, s.useState)(""),
            [f, h] = (0, s.useState)(!1),
            [p, m] = (0, s.useState)(!1),
            [b, g] = (0, s.useState)(""),
            y = async (t) => {
              if ((t.preventDefault(), e)) {
                (h(!0), g(""));
                try {
                  (await (0, u.a6)(d.auth, e), m(!0));
                } catch (e) {
                  (console.error(e),
                    g(
                      "Ein Fehler ist aufgetreten. Bitte überprüfe deine E-Mail-Adresse.",
                    ));
                } finally {
                  h(!1);
                }
              }
            };
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
                      (0, t.jsx)("div", {
                        className:
                          "w-20 h-20 bg-[#eedfcc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm",
                        children: (0, t.jsx)(i.Mail, {
                          size: 36,
                          color: "#CC624C",
                          strokeWidth: 1.8,
                        }),
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "font-calistoga text-[1.8rem] text-[#2d1f19] mb-3",
                        children: "Kein Problem!",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "font-nunito text-[#5c3d35] max-w-[280px] mx-auto text-sm leading-relaxed",
                        children:
                          "Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "max-w-[400px] mx-auto px-6 py-10",
                children: (0, t.jsxs)(a.FadeUp, {
                  children: [
                    p
                      ? (0, t.jsxs)("div", {
                          className:
                            "p-6 border-2 border-dashed border-[#E4C0A8] rounded-2xl bg-[rgba(228,192,168,0.15)] text-center",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "w-14 h-14 bg-[#CC624C] rounded-full flex items-center justify-center mx-auto mb-4",
                              children: (0, t.jsx)(r.Check, {
                                size: 28,
                                color: "#fff",
                                strokeWidth: 2.5,
                              }),
                            }),
                            (0, t.jsx)("h2", {
                              className:
                                "font-calistoga text-lg text-[#2d1f19] mb-1",
                              children: "E-Mail unterwegs!",
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "font-nunito text-[#9a7060] text-sm leading-relaxed",
                              children: [
                                "Wir haben dir einen Reset-Link an ",
                                e,
                                " gesendet.",
                              ],
                            }),
                          ],
                        })
                      : (0, t.jsxs)("form", {
                          onSubmit: y,
                          className: "space-y-6",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-transparent focus-within:border-[#CC624C] transition-colors",
                              children: [
                                (0, t.jsx)(i.Mail, {
                                  size: 20,
                                  className: "text-[#9a7060]",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, t.jsx)("label", {
                                      className:
                                        "block font-nunito text-[10px] font-bold text-[#9a7060] uppercase tracking-wider mb-1",
                                      children: "E-Mail",
                                    }),
                                    (0, t.jsx)("input", {
                                      type: "email",
                                      required: !0,
                                      value: e,
                                      onChange: (e) => x(e.target.value),
                                      placeholder: "anna.mueller@example.de",
                                      className:
                                        "w-full bg-transparent border-none outline-none font-nunito font-bold text-[#2d1f19] text-[13px]",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            b &&
                              (0, t.jsx)("div", {
                                className:
                                  "text-red-500 font-nunito text-sm font-bold text-center",
                                children: b,
                              }),
                            (0, t.jsxs)(n.PrimaryButton, {
                              sectionBg: "#f5efe8",
                              large: !0,
                              className: "w-full",
                              disabled: f,
                              children: [
                                (0, t.jsx)(l.Send, { size: 18 }),
                                " ",
                                f ? "Wird gesendet..." : "Link senden",
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "bg-[#eedfcc] rounded-xl p-4 flex gap-3 items-start",
                              children: [
                                (0, t.jsx)(o.Info, {
                                  size: 16,
                                  className: "text-[#CC624C] mt-0.5 shrink-0",
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "font-nunito text-[11.5px] text-[#5c3d35] leading-[1.55]",
                                  children:
                                    "Falls du innerhalb von 5 Minuten keine E-Mail erhältst, prüfe bitte deinen Spam-Ordner.",
                                }),
                              ],
                            }),
                          ],
                        }),
                    (0, t.jsxs)("div", {
                      className: "text-center mt-10",
                      children: [
                        (0, t.jsx)("span", {
                          className: "font-nunito text-xs text-[#5c3d35]",
                          children: "Wieder eingefallen? ",
                        }),
                        (0, t.jsx)(c.TransitionLink, {
                          href: "/auth",
                          className:
                            "font-nunito text-xs font-black text-[#CC624C] underline hover:no-underline",
                          children: "Zurück zur Anmeldung",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      434552,
    );
  },
]);
