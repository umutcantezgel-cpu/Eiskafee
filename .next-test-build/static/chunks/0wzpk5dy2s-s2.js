(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  636498,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645);
    e.s([
      "FadeUp",
      0,
      function ({ children: e, delay: a = 0, className: i = "" }) {
        let n = (0, s.useRef)(null),
          [r, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && l(!0);
              },
              { threshold: 0.12 },
            );
            return (n.current && e.observe(n.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: n,
            className: i,
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
      i = e.i(846932),
      n = e.i(88653),
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
          href: x,
          large: p = !1,
          sectionBg: u = "#f5efe8",
          className: f = "",
          disabled: m = !1,
        }) {
          let [h, b] = (0, s.useState)(!1),
            [g, y] = (0, s.useState)([]);
          (0, s.useEffect)(() => {
            if (0 === g.length) return;
            let e = g.map((e) =>
              setTimeout(() => y((t) => t.filter((t) => t.id !== e.id)), 800),
            );
            return () => e.forEach(clearTimeout);
          }, [g]);
          let j = (e) => {
              if (m) return;
              let t = e.currentTarget.getBoundingClientRect(),
                s = (e.clientX ?? t.left + t.width / 2) - t.left,
                a = (e.clientY ?? t.top + t.height / 2) - t.top;
              (y((e) => {
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
            v = (0, t.jsxs)(i.motion.button, {
              onClick: x ? void 0 : j,
              disabled: m,
              onHoverStart: () => b(!0),
              onHoverEnd: () => b(!1),
              whileHover: m ? {} : { scale: 1.05 },
              whileTap: m ? {} : { scale: 0.92, scaleX: 1.06, scaleY: 0.84 },
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 1,
              },
              className: `relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#CC624C] border-none rounded-full overflow-visible ${p ? "px-9 py-[15px] text-[0.96rem]" : "px-[26px] py-[11px] text-[0.88rem]"} ${m ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${f}`,
              style: {
                boxShadow:
                  h && !m
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
                    transform: h ? "scale(1)" : "scale(0)",
                    transformOrigin: "center bottom",
                    transition: "transform .25s cubic-bezier(0.34,1.56,0.64,1)",
                  },
                }),
                (0, t.jsx)("span", {
                  className:
                    "absolute inset-0 pointer-events-none overflow-visible z-20",
                  children: (0, t.jsx)(n.AnimatePresence, {
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
                  children: v,
                }),
              })
            : v;
        },
        "SecondaryButton",
        0,
        function ({ children: e, onClick: n, href: r, className: l = "" }) {
          let [o, c] = (0, s.useState)(!1),
            d = (0, t.jsx)(i.motion.button, {
              onClick: n,
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
  667362,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("tag", [
      [
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          key: "vktsd0",
        },
      ],
      [
        "circle",
        { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  980799,
  (e) => {
    "use strict";
    var t = e.i(667362);
    e.s(["Tag", () => t.default]);
  },
  240415,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(711241),
      i = e.i(980799),
      n = e.i(263676),
      r = e.i(689664),
      l = e.i(636498),
      o = e.i(144925),
      c = e.i(618566),
      d = e.i(798688);
    e.i(436180);
    var x = e.i(746939),
      p = e.i(263802),
      u = e.i(386205),
      f = e.i(959141),
      m = e.i(318028);
    e.s([
      "default",
      0,
      function () {
        let e = (0, c.useRouter)(),
          {
            cart: h,
            orderType: b,
            orderData: g,
            clearCart: y,
            clearOrderData: j,
          } = (0, d.useStore)(),
          [v, N] = (0, s.useState)(!1),
          [C, k] = (0, s.useState)(""),
          [w, S] = (0, s.useState)(""),
          [z, M] = (0, s.useState)(0),
          [F, T] = (0, s.useState)(!1),
          [D, $] = (0, s.useState)(null),
          E = h.reduce(
            (e, t) =>
              e +
              t.quantity *
                ("number" == typeof t.price ? t.price : parseFloat(t.price)),
            0,
          ),
          A = Math.max(0, E - z),
          U = 0.07 * A,
          B =
            g.pickupDate === new Date().toISOString().split("T")[0]
              ? "Heute"
              : new Date(g.pickupDate || "").toLocaleDateString("de-DE", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                }),
          I = async () => {
            if (C) {
              (T(!0), S(""));
              try {
                let e = (0, u.doc)(f.db, "promo_codes", C.toUpperCase()),
                  t = await (0, p.getDoc)(e);
                if (t.exists()) {
                  let e = t.data();
                  !1 !== e.active
                    ? ("fixed" === e.type
                        ? M(e.amount)
                        : "percent" === e.type && M(E * (e.amount / 100)),
                      $(C.toUpperCase()))
                    : S("Dieser Code ist nicht mehr gültig.");
                } else S("Ungültiger Gutscheincode.");
              } catch (e) {
                (console.error(e), S("Fehler bei der Prüfung."));
              } finally {
                T(!1);
              }
            }
          },
          H = async () => {
            N(!0);
            try {
              let t = {
                  orderNumber: `#HF-${Math.floor(1e3 + 9e3 * Math.random())}`,
                  type: b,
                  items: h.map((e) => ({
                    name: e.name,
                    variant: e.variant || e.desc || "",
                    quantity: e.quantity,
                    price:
                      "number" == typeof e.price
                        ? e.price
                        : parseFloat(e.price),
                  })),
                  subtotal: E,
                  discount: z,
                  promoCode: D,
                  total: A,
                  pickupDate: g.pickupDate,
                  pickupTime: g.pickupTime,
                  customerName: g.name,
                  customerPhone: g.phone,
                  customerEmail: g.email,
                  customerNotes: g.notes || "",
                  address: "delivery" === b ? g.address : null,
                  status: "confirmed",
                  createdAt: new Date().toISOString(),
                },
                s = await (0, p.addDoc)((0, x.collection)(f.db, "orders"), t);
              (y(), j(), e.push(`/order-status?orderId=${s.id}`));
            } catch (e) {
              (console.error("Error confirming order:", e),
                alert("Fehler bei der Bestellung. Bitte versuche es erneut."),
                N(!1));
            }
          };
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
                  children: (0, t.jsx)(a.ArrowLeft, {
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
                      children: "Übersicht",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-bold text-[#7a5a52]",
                      children: "Schritt 3 von 3",
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: "w-10 h-10" }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "px-5 pb-4 flex gap-1.5",
              children: [!0, !0, !0].map((e, s) =>
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
                (0, t.jsxs)(l.FadeUp, {
                  delay: 0.1,
                  className:
                    "bg-[#E4C0A8] rounded-[20px] p-[16px_18px] mb-3.5 relative overflow-hidden shadow-sm",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute -top-5 -right-5 w-[90px] h-[90px] bg-[rgba(245,239,232,0.4)] rounded-full",
                    }),
                    (0, t.jsxs)("div", {
                      className: "relative z-10",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "font-nunito text-[10px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                          children: "delivery" === b ? "Lieferung" : "Abholung",
                        }),
                        (0, t.jsx)("div", {
                          className: "flex items-baseline gap-2 mt-1",
                          children: (0, t.jsxs)("div", {
                            className:
                              "font-calistoga text-[26px] text-[#2d1f19] leading-none",
                            children: [B, " · ", g.pickupTime],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "font-nunito text-[11.5px] text-[#5c3d35] mt-1.5 font-bold",
                          children:
                            "delivery" === b
                              ? `${g.address?.street}, ${g.address?.zip} ${g.address?.city}`
                              : `${m.BUSINESS.street} \xb7 ${m.BUSINESS.city}`,
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "font-nunito text-[11px] text-[#5c3d35] mt-2 opacity-80",
                          children: [g.name, " · ", g.phone],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(l.FadeUp, {
                  delay: 0.2,
                  className: "bg-white rounded-[18px] p-1 mb-3.5 shadow-sm",
                  children: h.map((e, s, a) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: `p-3 flex justify-between gap-2.5 ${s < a.length - 1 ? "border-b border-[#eedfcc]" : ""}`,
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex gap-2 mb-0.5 items-baseline",
                                children: [
                                  (0, t.jsxs)("span", {
                                    className:
                                      "font-nunito font-extrabold text-[12.5px] text-[#7a5a52]",
                                    children: [e.quantity, "×"],
                                  }),
                                  (0, t.jsx)("span", {
                                    className:
                                      "font-nunito font-extrabold text-[13px] text-[#2d1f19]",
                                    children: e.name,
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "font-nunito text-[11px] text-[#7a5a52] ml-[23px]",
                                children: e.variant || e.desc || "",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("span", {
                            className:
                              "font-calistoga text-[14px] text-[#CC624C]",
                            children: [
                              (
                                e.quantity *
                                ("number" == typeof e.price
                                  ? e.price
                                  : parseFloat(e.price))
                              )
                                .toFixed(2)
                                .replace(".", ","),
                              " €",
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, t.jsxs)(l.FadeUp, {
                  delay: 0.3,
                  className:
                    "bg-white rounded-[18px] p-4 mb-3.5 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px] mb-2",
                      children: "Gutscheincode",
                    }),
                    D
                      ? (0, t.jsxs)("div", {
                          className:
                            "flex justify-between items-center bg-[#eedfcc] p-3 rounded-[12px]",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-center gap-2 text-[#2d1f19] font-bold text-sm",
                              children: [
                                (0, t.jsx)(i.Tag, {
                                  size: 16,
                                  className: "text-[#CC624C]",
                                }),
                                D,
                              ],
                            }),
                            (0, t.jsx)("button", {
                              onClick: () => {
                                ($(null), M(0));
                              },
                              className: "text-[#CC624C]",
                              children: (0, t.jsx)(n.X, { size: 18 }),
                            }),
                          ],
                        })
                      : (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, t.jsx)("input", {
                                  type: "text",
                                  value: C,
                                  onChange: (e) => k(e.target.value),
                                  placeholder: "Code eingeben",
                                  className:
                                    "font-nunito text-[14px] font-bold text-[#2d1f19] bg-[#f5efe8] rounded-[12px] px-3 py-2 outline-none flex-1 placeholder:opacity-50 uppercase",
                                }),
                                (0, t.jsx)("button", {
                                  onClick: I,
                                  disabled: !C || F,
                                  className:
                                    "bg-[#2d1f19] text-white px-4 rounded-[12px] font-nunito text-[12px] font-bold disabled:opacity-50",
                                  children: F ? "..." : "Einlösen",
                                }),
                              ],
                            }),
                            w &&
                              (0, t.jsx)("div", {
                                className:
                                  "text-red-500 font-nunito text-[11px] font-bold mt-2",
                                children: w,
                              }),
                          ],
                        }),
                  ],
                }),
                (0, t.jsxs)(l.FadeUp, {
                  delay: 0.4,
                  className:
                    "bg-[#eedfcc] rounded-[18px] p-[14px_16px] shadow-sm mb-3.5",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-1.5",
                      children: [
                        (0, t.jsx)("span", { children: "Zwischensumme" }),
                        (0, t.jsxs)("span", {
                          className: "font-bold",
                          children: [E.toFixed(2).replace(".", ","), " €"],
                        }),
                      ],
                    }),
                    z > 0 &&
                      (0, t.jsxs)("div", {
                        className:
                          "flex justify-between font-nunito text-[12.5px] text-[#CC624C] mb-1.5 font-bold",
                        children: [
                          (0, t.jsx)("span", { children: "Rabatt" }),
                          (0, t.jsxs)("span", {
                            children: [
                              "– ",
                              z.toFixed(2).replace(".", ","),
                              " €",
                            ],
                          }),
                        ],
                      }),
                    "delivery" === b &&
                      (0, t.jsxs)("div", {
                        className:
                          "flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-1.5",
                        children: [
                          (0, t.jsx)("span", { children: "Liefergebühr" }),
                          (0, t.jsx)("span", {
                            className: "font-bold",
                            children: "0,00 €",
                          }),
                        ],
                      }),
                    (0, t.jsxs)("div", {
                      className:
                        "flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-2",
                      children: [
                        (0, t.jsx)("span", { children: "inkl. 7% MwSt." }),
                        (0, t.jsxs)("span", {
                          className: "font-bold",
                          children: [U.toFixed(2).replace(".", ","), " €"],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "h-[1px] bg-[#E4C0A8] my-1.5",
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex justify-between items-baseline mt-2",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "font-nunito font-black text-[13px] text-[#2d1f19]",
                          children: "Vor Ort zahlen",
                        }),
                        (0, t.jsxs)("span", {
                          className:
                            "font-calistoga text-[24px] text-[#CC624C]",
                          children: [A.toFixed(2).replace(".", ","), " €"],
                        }),
                      ],
                    }),
                  ],
                }),
                g.notes &&
                  (0, t.jsxs)(l.FadeUp, {
                    delay: 0.5,
                    className:
                      "font-nunito text-[12px] text-[#7a5a52] bg-white rounded-[14px] p-3 italic",
                    children: ['"', g.notes, '"'],
                  }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "font-nunito text-[10.5px] text-[#7a5a52] text-center mb-2.5 leading-tight",
                  children: [
                    'Mit „Bestellung absenden" akzeptierst du unsere ',
                    (0, t.jsx)("span", {
                      className: "text-[#CC624C] font-extrabold",
                      children: "AGB & Vorbestellbedingungen",
                    }),
                  ],
                }),
                (0, t.jsx)(o.PrimaryButton, {
                  className: "w-full flex justify-center items-center gap-2",
                  onClick: H,
                  disabled: v || 0 === h.length,
                  children: v
                    ? "Wird gesendet..."
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(r.Check, { size: 18 }),
                          " Verbindlich vorbestellen",
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
