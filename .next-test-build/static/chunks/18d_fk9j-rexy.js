(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  636498,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645);
    e.s([
      "FadeUp",
      0,
      function ({ children: e, delay: n = 0, className: r = "" }) {
        let s = (0, a.useRef)(null),
          [l, i] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && i(!0);
              },
              { threshold: 0.12 },
            );
            return (s.current && e.observe(s.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: s,
            className: r,
            style: {
              opacity: +!!l,
              transform: l ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${n}s`,
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
      a = e.i(271645),
      n = e.i(974336),
      r = e.i(846932),
      s = e.i(88653),
      l = e.i(786563),
      i = e.i(188873);
    e.s(["Sparkles", () => i.default], 328623);
    var i = i;
    let o = ["#CC624C", "#E4C0A8", "#eedfcc", "#fefefe"],
      d = ["dot", "sparkle", "star"];
    e.s(
      [
        "PrimaryButton",
        0,
        function ({
          children: e,
          onClick: c,
          href: p,
          large: x = !1,
          sectionBg: u = "#f5efe8",
          className: f = "",
          disabled: h = !1,
        }) {
          let [m, b] = (0, a.useState)(!1),
            [g, v] = (0, a.useState)([]);
          (0, a.useEffect)(() => {
            if (0 === g.length) return;
            let e = g.map((e) =>
              setTimeout(() => v((t) => t.filter((t) => t.id !== e.id)), 800),
            );
            return () => e.forEach(clearTimeout);
          }, [g]);
          let y = (e) => {
              if (h) return;
              let t = e.currentTarget.getBoundingClientRect(),
                a = (e.clientX ?? t.left + t.width / 2) - t.left,
                n = (e.clientY ?? t.top + t.height / 2) - t.top;
              (v((e) => {
                let t, r;
                return [
                  ...e,
                  ((t = Date.now() + Math.random()),
                  (r = Array.from({ length: 14 }, (e, a) => ({
                    id: `${t}-${a}`,
                    angle: Math.random() * Math.PI * 2,
                    distance: 40 + 60 * Math.random(),
                    size: 4 + 10 * Math.random(),
                    rotation: (Math.random() - 0.5) * 540,
                    color: o[Math.floor(Math.random() * o.length)],
                    type: d[Math.floor(Math.random() * d.length)],
                  }))),
                  { id: t, originX: a, originY: n, particles: r }),
                ];
              }),
                c && c(e));
            },
            j = (0, t.jsxs)(r.motion.button, {
              onClick: p ? void 0 : y,
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
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${x ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${h ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${f}`,
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
                  children: (0, t.jsx)(s.AnimatePresence, {
                    children: g.map((e) =>
                      e.particles.map((a) =>
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
                              x: e.originX + Math.cos(a.angle) * a.distance,
                              y:
                                e.originY + Math.sin(a.angle) * a.distance - 20,
                              opacity: [1, 1, 0],
                              scale: [0, 1, 0.5],
                              rotate: a.rotation,
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
                              width: a.size,
                              height: a.size,
                              borderRadius: "dot" === a.type ? "50%" : 0,
                              background:
                                "dot" === a.type ? a.color : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: [
                              "star" === a.type &&
                                (0, t.jsx)(l.Star, {
                                  size: a.size,
                                  strokeWidth: 0,
                                  color: a.color,
                                  fill: a.color,
                                }),
                              "sparkle" === a.type &&
                                (0, t.jsx)(i.default, {
                                  size: a.size,
                                  strokeWidth: 0,
                                  color: a.color,
                                  fill: a.color,
                                }),
                            ],
                          },
                          a.id,
                        ),
                      ),
                    ),
                  }),
                }),
              ],
            });
          return p
            ? (0, t.jsx)("div", {
                onClick: y,
                className: "inline-block",
                style: { textDecoration: "none" },
                children: (0, t.jsx)(n.TransitionLink, {
                  href: p,
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
        function ({ children: e, onClick: s, href: l, className: i = "" }) {
          let [o, d] = (0, a.useState)(!1),
            c = (0, t.jsx)(r.motion.button, {
              onClick: s,
              onHoverStart: () => d(!0),
              onHoverEnd: () => d(!1),
              whileTap: { scale: 0.94, scaleX: 1.04, scaleY: 0.88 },
              transition: { type: "spring", stiffness: 600, damping: 15 },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold rounded-full cursor-pointer whitespace-nowrap px-[25px] py-[10px] text-[0.88rem] ${i}`,
              style: {
                border: "2px solid #CC624C",
                color: o ? "#fff" : "#CC624C",
                background: o ? "#CC624C" : "transparent",
                transition: "background .2s ease, color .2s ease",
              },
              children: e,
            });
          return l
            ? (0, t.jsx)(n.TransitionLink, {
                href: l,
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
  358101,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      n = e.i(711241),
      r = e.i(768877),
      s = e.i(636498),
      l = e.i(144925),
      i = e.i(618566),
      o = e.i(798688),
      d = e.i(230129);
    let c = ["35576", "35578", "35580", "35581"];
    e.s([
      "default",
      0,
      function () {
        let e = (0, i.useRouter)(),
          {
            cart: p,
            orderType: x,
            updateOrderData: u,
            orderData: f,
            updateQuantity: h,
            clearCart: m,
          } = (0, o.useStore)(),
          { user: b } = (0, d.useAuth)(),
          [g, v] = (0, a.useState)(f.name || ""),
          [y, j] = (0, a.useState)(f.phone || ""),
          [k, C] = (0, a.useState)(f.email || ""),
          [w, N] = (0, a.useState)(f.notes || ""),
          [z, S] = (0, a.useState)(f.address?.street || ""),
          [M, F] = (0, a.useState)(f.address?.zip || ""),
          [A, L] = (0, a.useState)(f.address?.city || ""),
          [T, B] = (0, a.useState)("");
        (0, a.useEffect)(() => {
          b &&
            (!g && b.displayName && v(b.displayName),
            !k && b.email && C(b.email));
        }, [b]);
        let D = p.reduce(
          (e, t) =>
            e +
            t.quantity *
              ("number" == typeof t.price ? t.price : parseFloat(t.price)),
          0,
        );
        return (0, t.jsxs)("div", {
          className: "min-h-screen bg-[#f5efe8] flex flex-col md:flex-row",
          children: [
            (0, t.jsxs)("div", {
              className: "flex-1 overflow-y-auto pb-32 md:pb-6",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between md:hidden",
                  children: [
                    (0, t.jsx)("button", {
                      onClick: () => e.back(),
                      className:
                        "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
                      children: (0, t.jsx)(n.ArrowLeft, {
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
                          children: "Kontaktdaten",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "font-nunito text-[11px] font-bold text-[#7a5a52]",
                          children: "Schritt 1 von 3",
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: "w-10 h-10" }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "px-5 pb-4 flex gap-1.5 md:mt-6",
                  children: [!0, !1, !1].map((e, a) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: `flex-1 h-1 rounded-full ${e ? "bg-[#CC624C]" : "bg-[#eedfcc]"}`,
                      },
                      a,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: "px-5",
                  children: [
                    (0, t.jsxs)(s.FadeUp, {
                      delay: 0.1,
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                          children: "Deine Daten",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "bg-white rounded-[18px] p-4 mb-3 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "checkout-name",
                              className:
                                "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                              children: "Name *",
                            }),
                            (0, t.jsx)("input", {
                              id: "checkout-name",
                              type: "text",
                              value: g,
                              onChange: (e) => v(e.target.value),
                              placeholder: "Dein Vorname",
                              autoComplete: "name",
                              className:
                                "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "bg-white rounded-[18px] p-4 mb-3 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "checkout-email",
                              className:
                                "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                              children: "E-Mail *",
                            }),
                            (0, t.jsx)("input", {
                              id: "checkout-email",
                              type: "email",
                              value: k,
                              onChange: (e) => C(e.target.value),
                              placeholder: "name@example.com",
                              autoComplete: "email",
                              className:
                                "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "bg-white rounded-[18px] p-4 mb-5 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "checkout-phone",
                              className:
                                "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                              children: "Handynummer *",
                            }),
                            (0, t.jsx)("input", {
                              id: "checkout-phone",
                              type: "tel",
                              value: y,
                              onChange: (e) => j(e.target.value),
                              placeholder: "Für Rückfragen",
                              autoComplete: "tel",
                              className:
                                "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40",
                            }),
                          ],
                        }),
                      ],
                    }),
                    "delivery" === x &&
                      (0, t.jsxs)(s.FadeUp, {
                        delay: 0.2,
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                            children: "Lieferadresse",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "bg-white rounded-[18px] p-4 mb-3 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "checkout-street",
                                className:
                                  "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                                children: "Straße & Hausnr. *",
                              }),
                              (0, t.jsx)("input", {
                                id: "checkout-street",
                                type: "text",
                                value: z,
                                onChange: (e) => S(e.target.value),
                                placeholder: "Musterstraße 12",
                                autoComplete: "street-address",
                                className:
                                  "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "grid grid-cols-[1fr_2fr] gap-3 mb-5",
                            children: [
                              (0, t.jsxs)("div", {
                                className: `bg-white rounded-[18px] p-4 shadow-sm border-2 ${T ? "border-red-500" : "border-transparent focus-within:border-[#CC624C]"}`,
                                children: [
                                  (0, t.jsx)("label", {
                                    htmlFor: "checkout-zip",
                                    className:
                                      "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                                    children: "PLZ *",
                                  }),
                                  (0, t.jsx)("input", {
                                    id: "checkout-zip",
                                    type: "text",
                                    value: M,
                                    onChange: (e) => {
                                      (F(e.target.value), B(""));
                                    },
                                    placeholder: "35576",
                                    autoComplete: "postal-code",
                                    "aria-invalid": !!T,
                                    "aria-describedby": T
                                      ? "zone-error"
                                      : void 0,
                                    className:
                                      "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "bg-white rounded-[18px] p-4 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                                children: [
                                  (0, t.jsx)("label", {
                                    htmlFor: "checkout-city",
                                    className:
                                      "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                                    children: "Stadt *",
                                  }),
                                  (0, t.jsx)("input", {
                                    id: "checkout-city",
                                    type: "text",
                                    value: A,
                                    onChange: (e) => L(e.target.value),
                                    placeholder: "Wetzlar",
                                    autoComplete: "address-level2",
                                    className:
                                      "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            "aria-live": "polite",
                            "aria-atomic": "true",
                            children:
                              T &&
                              (0, t.jsx)("div", {
                                id: "zone-error",
                                className:
                                  "text-red-500 font-nunito text-sm font-bold mb-4",
                                children: T,
                              }),
                          }),
                        ],
                      }),
                    (0, t.jsxs)(s.FadeUp, {
                      delay: 0.3,
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5",
                          children: "Zusätzliche Infos",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "bg-white rounded-[18px] p-4 mb-6 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "checkout-notes",
                              className:
                                "block font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]",
                              children: "Anmerkungen (Optional)",
                            }),
                            (0, t.jsx)("textarea", {
                              id: "checkout-notes",
                              value: w,
                              onChange: (e) => N(e.target.value),
                              placeholder: "Z.B. Klingel ist defekt...",
                              className:
                                "font-nunito text-[14px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full resize-none min-h-[60px] placeholder:opacity-40",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "w-full md:w-[380px] bg-[#fef8f5] border-t md:border-t-0 md:border-l border-[#eedfcc] flex flex-col fixed md:relative bottom-0 left-0 right-0 z-40 max-h-[50vh] md:max-h-none overflow-y-auto",
              children: [
                (0, t.jsxs)("div", {
                  className: "hidden md:block px-6 pt-8 pb-4",
                  children: [
                    (0, t.jsx)("div", {
                      className: "font-calistoga text-2xl text-[#2d1f19]",
                      children: "Dein Warenkorb",
                    }),
                    (0, t.jsx)("button", {
                      onClick: () => {
                        confirm("Wirklich leeren?") && m();
                      },
                      className:
                        "text-[12px] font-extrabold text-[#7a5a52] underline mt-1",
                      children: "Leeren",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "px-5 md:px-6 flex-1 py-4",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex justify-between items-center mb-4 md:hidden",
                      children: [
                        (0, t.jsxs)("span", {
                          className: "font-calistoga text-xl text-[#2d1f19]",
                          children: [D.toFixed(2).replace(".", ","), " €"],
                        }),
                        (0, t.jsxs)("span", {
                          className:
                            "font-nunito text-sm text-[#7a5a52] font-bold",
                          children: [
                            p.reduce((e, t) => e + t.quantity, 0),
                            " Artikel",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "hidden md:block space-y-3 mb-6",
                      children: p.map((e) => {
                        let a =
                          "number" == typeof e.price
                            ? e.price
                            : parseFloat(e.price);
                        return (0, t.jsxs)(
                          "div",
                          {
                            className:
                              "flex justify-between gap-3 bg-white p-3 rounded-2xl shadow-sm",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                      (0, t.jsxs)("span", {
                                        className:
                                          "font-nunito font-extrabold text-[#CC624C] text-[13px]",
                                        children: [e.quantity, "×"],
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "font-nunito font-bold text-[14px] text-[#2d1f19] truncate",
                                        children: e.name,
                                      }),
                                    ],
                                  }),
                                  e.variant &&
                                    (0, t.jsx)("div", {
                                      className:
                                        "font-nunito text-[11px] text-[#7a5a52] ml-5",
                                      children: e.variant,
                                    }),
                                ],
                              }),
                              (0, t.jsxs)("span", {
                                className:
                                  "font-calistoga text-[14px] text-[#CC624C]",
                                children: [
                                  (e.quantity * a).toFixed(2).replace(".", ","),
                                  " €",
                                ],
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                    (0, t.jsxs)(l.PrimaryButton, {
                      onClick: () => {
                        let t;
                        if (0 === p.length)
                          return void alert("Dein Warenkorb ist leer.");
                        if (!g || !y || !k)
                          return void alert(
                            "Bitte fülle alle Pflichtfelder (Name, Handynummer, E-Mail) aus.",
                          );
                        if ("delivery" === x) {
                          if (!z || !M || !A)
                            return void alert(
                              "Bitte gib deine vollständige Lieferadresse an.",
                            );
                          if (!c.includes(M))
                            return void B(
                              "Sorry, wir liefern aktuell leider nicht in deine Postleitzahl.",
                            );
                          (B(""), (t = { street: z, zip: M, city: A }));
                        }
                        (u({
                          name: g,
                          phone: y,
                          email: k,
                          notes: w,
                          address: t,
                        }),
                          e.push("/pickup-time"));
                      },
                      className:
                        "w-full flex justify-center items-center gap-2",
                      children: [
                        "Weiter zu ",
                        "delivery" === x ? "Lieferzeit" : "Abholzeit",
                        (0, t.jsx)(r.ArrowRight, { size: 18 }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
