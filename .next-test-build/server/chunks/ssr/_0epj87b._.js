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
  287828,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  162591,
  (a) => {
    "use strict";
    var b = a.i(287828);
    a.s(["Mail", () => b.default]);
  },
  483617,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]);
    a.s(["default", 0, b]);
  },
  752357,
  (a) => {
    "use strict";
    var b = a.i(483617);
    a.s(["Info", () => b.default]);
  },
  694369,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]);
    a.s(["default", 0, b]);
  },
  674746,
  (a) => {
    "use strict";
    var b = a.i(694369);
    a.s(["Send", () => b.default]);
  },
  206700,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(544623),
      e = a.i(858301),
      f = a.i(162591),
      g = a.i(752562),
      h = a.i(674746),
      i = a.i(752357),
      j = a.i(371947),
      k = a.i(420237);
    a.i(730485);
    var l = a.i(65825),
      l = l;
    a.s(
      [
        "default",
        0,
        function () {
          let [a, m] = (0, c.useState)(""),
            [n, o] = (0, c.useState)(!1),
            [p, q] = (0, c.useState)(!1),
            [r, s] = (0, c.useState)(""),
            t = async (b) => {
              if ((b.preventDefault(), a)) {
                (o(!0), s(""));
                try {
                  (await (0, l.a6)(k.auth, a), q(!0));
                } catch (a) {
                  (console.error(a),
                    s(
                      "Ein Fehler ist aufgetreten. Bitte überprüfe deine E-Mail-Adresse.",
                    ));
                } finally {
                  o(!1);
                }
              }
            };
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
                      (0, b.jsx)("div", {
                        className:
                          "w-20 h-20 bg-[#eedfcc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm",
                        children: (0, b.jsx)(f.Mail, {
                          size: 36,
                          color: "#CC624C",
                          strokeWidth: 1.8,
                        }),
                      }),
                      (0, b.jsx)("h1", {
                        className:
                          "font-calistoga text-[1.8rem] text-[#2d1f19] mb-3",
                        children: "Kein Problem!",
                      }),
                      (0, b.jsx)("p", {
                        className:
                          "font-nunito text-[#5c3d35] max-w-[280px] mx-auto text-sm leading-relaxed",
                        children:
                          "Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "max-w-[400px] mx-auto px-6 py-10",
                children: (0, b.jsxs)(d.FadeUp, {
                  children: [
                    p
                      ? (0, b.jsxs)("div", {
                          className:
                            "p-6 border-2 border-dashed border-[#E4C0A8] rounded-2xl bg-[rgba(228,192,168,0.15)] text-center",
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "w-14 h-14 bg-[#CC624C] rounded-full flex items-center justify-center mx-auto mb-4",
                              children: (0, b.jsx)(g.Check, {
                                size: 28,
                                color: "#fff",
                                strokeWidth: 2.5,
                              }),
                            }),
                            (0, b.jsx)("h2", {
                              className:
                                "font-calistoga text-lg text-[#2d1f19] mb-1",
                              children: "E-Mail unterwegs!",
                            }),
                            (0, b.jsxs)("p", {
                              className:
                                "font-nunito text-[#9a7060] text-sm leading-relaxed",
                              children: [
                                "Wir haben dir einen Reset-Link an ",
                                a,
                                " gesendet.",
                              ],
                            }),
                          ],
                        })
                      : (0, b.jsxs)("form", {
                          onSubmit: t,
                          className: "space-y-6",
                          children: [
                            (0, b.jsxs)("div", {
                              className:
                                "bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-transparent focus-within:border-[#CC624C] transition-colors",
                              children: [
                                (0, b.jsx)(f.Mail, {
                                  size: 20,
                                  className: "text-[#9a7060]",
                                }),
                                (0, b.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, b.jsx)("label", {
                                      className:
                                        "block font-nunito text-[10px] font-bold text-[#9a7060] uppercase tracking-wider mb-1",
                                      children: "E-Mail",
                                    }),
                                    (0, b.jsx)("input", {
                                      type: "email",
                                      required: !0,
                                      value: a,
                                      onChange: (a) => m(a.target.value),
                                      placeholder: "anna.mueller@example.de",
                                      className:
                                        "w-full bg-transparent border-none outline-none font-nunito font-bold text-[#2d1f19] text-[13px]",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r &&
                              (0, b.jsx)("div", {
                                className:
                                  "text-red-500 font-nunito text-sm font-bold text-center",
                                children: r,
                              }),
                            (0, b.jsxs)(e.PrimaryButton, {
                              sectionBg: "#f5efe8",
                              large: !0,
                              className: "w-full",
                              disabled: n,
                              children: [
                                (0, b.jsx)(h.Send, { size: 18 }),
                                " ",
                                n ? "Wird gesendet..." : "Link senden",
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className:
                                "bg-[#eedfcc] rounded-xl p-4 flex gap-3 items-start",
                              children: [
                                (0, b.jsx)(i.Info, {
                                  size: 16,
                                  className: "text-[#CC624C] mt-0.5 shrink-0",
                                }),
                                (0, b.jsx)("p", {
                                  className:
                                    "font-nunito text-[11.5px] text-[#5c3d35] leading-[1.55]",
                                  children:
                                    "Falls du innerhalb von 5 Minuten keine E-Mail erhältst, prüfe bitte deinen Spam-Ordner.",
                                }),
                              ],
                            }),
                          ],
                        }),
                    (0, b.jsxs)("div", {
                      className: "text-center mt-10",
                      children: [
                        (0, b.jsx)("span", {
                          className: "font-nunito text-xs text-[#5c3d35]",
                          children: "Wieder eingefallen? ",
                        }),
                        (0, b.jsx)(j.TransitionLink, {
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
      206700,
    );
  },
];

//# sourceMappingURL=_0epj87b._.js.map
