module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
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
  871281,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("tag", [
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
    a.s(["default", 0, b]);
  },
  31247,
  (a) => {
    "use strict";
    var b = a.i(871281);
    a.s(["Tag", () => b.default]);
  },
  911416,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(219107),
      e = a.i(31247),
      f = a.i(474215),
      g = a.i(752562),
      h = a.i(544623),
      i = a.i(858301),
      j = a.i(50944),
      k = a.i(762492);
    a.i(69387);
    var l = a.i(691431),
      m = a.i(601787),
      n = a.i(132787),
      o = a.i(420237),
      p = a.i(324429);
    a.s([
      "default",
      0,
      function () {
        let a = (0, j.useRouter)(),
          {
            cart: q,
            orderType: r,
            orderData: s,
            clearCart: t,
            clearOrderData: u,
          } = (0, k.useStore)(),
          [v, w] = (0, c.useState)(!1),
          [x, y] = (0, c.useState)(""),
          [z, A] = (0, c.useState)(""),
          [B, C] = (0, c.useState)(0),
          [D, E] = (0, c.useState)(!1),
          [F, G] = (0, c.useState)(null),
          H = q.reduce(
            (a, b) =>
              a +
              b.quantity *
                ("number" == typeof b.price ? b.price : parseFloat(b.price)),
            0,
          ),
          I = Math.max(0, H - B),
          J = 0.07 * I,
          K =
            s.pickupDate === new Date().toISOString().split("T")[0]
              ? "Heute"
              : new Date(s.pickupDate || "").toLocaleDateString("de-DE", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                }),
          L = async () => {
            if (x) {
              (E(!0), A(""));
              try {
                let a = (0, n.doc)(o.db, "promo_codes", x.toUpperCase()),
                  b = await (0, m.getDoc)(a);
                if (b.exists()) {
                  let a = b.data();
                  !1 !== a.active
                    ? ("fixed" === a.type
                        ? C(a.amount)
                        : "percent" === a.type && C(H * (a.amount / 100)),
                      G(x.toUpperCase()))
                    : A("Dieser Code ist nicht mehr gültig.");
                } else A("Ungültiger Gutscheincode.");
              } catch (a) {
                (console.error(a), A("Fehler bei der Prüfung."));
              } finally {
                E(!1);
              }
            }
          },
          M = async () => {
            w(!0);
            try {
              let b = {
                  orderNumber: `#HF-${Math.floor(1e3 + 9e3 * Math.random())}`,
                  type: r,
                  items: q.map((a) => ({
                    name: a.name,
                    variant: a.variant || a.desc || "",
                    quantity: a.quantity,
                    price:
                      "number" == typeof a.price
                        ? a.price
                        : parseFloat(a.price),
                  })),
                  subtotal: H,
                  discount: B,
                  promoCode: F,
                  total: I,
                  pickupDate: s.pickupDate,
                  pickupTime: s.pickupTime,
                  customerName: s.name,
                  customerPhone: s.phone,
                  customerEmail: s.email,
                  customerNotes: s.notes || "",
                  address: "delivery" === r ? s.address : null,
                  status: "confirmed",
                  createdAt: new Date().toISOString(),
                },
                c = await (0, m.addDoc)((0, l.collection)(o.db, "orders"), b);
              (t(), u(), a.push(`/order-status?orderId=${c.id}`));
            } catch (a) {
              (console.error("Error confirming order:", a),
                alert("Fehler bei der Bestellung. Bitte versuche es erneut."),
                w(!1));
            }
          };
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
                      children: "Übersicht",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "font-nunito text-[11px] font-bold text-[#7a5a52]",
                      children: "Schritt 3 von 3",
                    }),
                  ],
                }),
                (0, b.jsx)("div", { className: "w-10 h-10" }),
              ],
            }),
            (0, b.jsx)("div", {
              className: "px-5 pb-4 flex gap-1.5",
              children: [!0, !0, !0].map((a, c) =>
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
                (0, b.jsxs)(h.FadeUp, {
                  delay: 0.1,
                  className:
                    "bg-[#E4C0A8] rounded-[20px] p-[16px_18px] mb-3.5 relative overflow-hidden shadow-sm",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "absolute -top-5 -right-5 w-[90px] h-[90px] bg-[rgba(245,239,232,0.4)] rounded-full",
                    }),
                    (0, b.jsxs)("div", {
                      className: "relative z-10",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "font-nunito text-[10px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                          children: "delivery" === r ? "Lieferung" : "Abholung",
                        }),
                        (0, b.jsx)("div", {
                          className: "flex items-baseline gap-2 mt-1",
                          children: (0, b.jsxs)("div", {
                            className:
                              "font-calistoga text-[26px] text-[#2d1f19] leading-none",
                            children: [K, " · ", s.pickupTime],
                          }),
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "font-nunito text-[11.5px] text-[#5c3d35] mt-1.5 font-bold",
                          children:
                            "delivery" === r
                              ? `${s.address?.street}, ${s.address?.zip} ${s.address?.city}`
                              : `${p.BUSINESS.street} \xb7 ${p.BUSINESS.city}`,
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "font-nunito text-[11px] text-[#5c3d35] mt-2 opacity-80",
                          children: [s.name, " · ", s.phone],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsx)(h.FadeUp, {
                  delay: 0.2,
                  className: "bg-white rounded-[18px] p-1 mb-3.5 shadow-sm",
                  children: q.map((a, c, d) =>
                    (0, b.jsxs)(
                      "div",
                      {
                        className: `p-3 flex justify-between gap-2.5 ${c < d.length - 1 ? "border-b border-[#eedfcc]" : ""}`,
                        children: [
                          (0, b.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              (0, b.jsxs)("div", {
                                className: "flex gap-2 mb-0.5 items-baseline",
                                children: [
                                  (0, b.jsxs)("span", {
                                    className:
                                      "font-nunito font-extrabold text-[12.5px] text-[#7a5a52]",
                                    children: [a.quantity, "×"],
                                  }),
                                  (0, b.jsx)("span", {
                                    className:
                                      "font-nunito font-extrabold text-[13px] text-[#2d1f19]",
                                    children: a.name,
                                  }),
                                ],
                              }),
                              (0, b.jsx)("div", {
                                className:
                                  "font-nunito text-[11px] text-[#7a5a52] ml-[23px]",
                                children: a.variant || a.desc || "",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("span", {
                            className:
                              "font-calistoga text-[14px] text-[#CC624C]",
                            children: [
                              (
                                a.quantity *
                                ("number" == typeof a.price
                                  ? a.price
                                  : parseFloat(a.price))
                              )
                                .toFixed(2)
                                .replace(".", ","),
                              " €",
                            ],
                          }),
                        ],
                      },
                      a.id,
                    ),
                  ),
                }),
                (0, b.jsxs)(h.FadeUp, {
                  delay: 0.3,
                  className:
                    "bg-white rounded-[18px] p-4 mb-3.5 shadow-sm border-2 border-transparent focus-within:border-[#CC624C]",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px] mb-2",
                      children: "Gutscheincode",
                    }),
                    F
                      ? (0, b.jsxs)("div", {
                          className:
                            "flex justify-between items-center bg-[#eedfcc] p-3 rounded-[12px]",
                          children: [
                            (0, b.jsxs)("div", {
                              className:
                                "flex items-center gap-2 text-[#2d1f19] font-bold text-sm",
                              children: [
                                (0, b.jsx)(e.Tag, {
                                  size: 16,
                                  className: "text-[#CC624C]",
                                }),
                                F,
                              ],
                            }),
                            (0, b.jsx)("button", {
                              onClick: () => {
                                (G(null), C(0));
                              },
                              className: "text-[#CC624C]",
                              children: (0, b.jsx)(f.X, { size: 18 }),
                            }),
                          ],
                        })
                      : (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, b.jsx)("input", {
                                  type: "text",
                                  value: x,
                                  onChange: (a) => y(a.target.value),
                                  placeholder: "Code eingeben",
                                  className:
                                    "font-nunito text-[14px] font-bold text-[#2d1f19] bg-[#f5efe8] rounded-[12px] px-3 py-2 outline-none flex-1 placeholder:opacity-50 uppercase",
                                }),
                                (0, b.jsx)("button", {
                                  onClick: L,
                                  disabled: !x || D,
                                  className:
                                    "bg-[#2d1f19] text-white px-4 rounded-[12px] font-nunito text-[12px] font-bold disabled:opacity-50",
                                  children: D ? "..." : "Einlösen",
                                }),
                              ],
                            }),
                            z &&
                              (0, b.jsx)("div", {
                                className:
                                  "text-red-500 font-nunito text-[11px] font-bold mt-2",
                                children: z,
                              }),
                          ],
                        }),
                  ],
                }),
                (0, b.jsxs)(h.FadeUp, {
                  delay: 0.4,
                  className:
                    "bg-[#eedfcc] rounded-[18px] p-[14px_16px] shadow-sm mb-3.5",
                  children: [
                    (0, b.jsxs)("div", {
                      className:
                        "flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-1.5",
                      children: [
                        (0, b.jsx)("span", { children: "Zwischensumme" }),
                        (0, b.jsxs)("span", {
                          className: "font-bold",
                          children: [H.toFixed(2).replace(".", ","), " €"],
                        }),
                      ],
                    }),
                    B > 0 &&
                      (0, b.jsxs)("div", {
                        className:
                          "flex justify-between font-nunito text-[12.5px] text-[#CC624C] mb-1.5 font-bold",
                        children: [
                          (0, b.jsx)("span", { children: "Rabatt" }),
                          (0, b.jsxs)("span", {
                            children: [
                              "– ",
                              B.toFixed(2).replace(".", ","),
                              " €",
                            ],
                          }),
                        ],
                      }),
                    "delivery" === r &&
                      (0, b.jsxs)("div", {
                        className:
                          "flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-1.5",
                        children: [
                          (0, b.jsx)("span", { children: "Liefergebühr" }),
                          (0, b.jsx)("span", {
                            className: "font-bold",
                            children: "0,00 €",
                          }),
                        ],
                      }),
                    (0, b.jsxs)("div", {
                      className:
                        "flex justify-between font-nunito text-[12.5px] text-[#5c3d35] mb-2",
                      children: [
                        (0, b.jsx)("span", { children: "inkl. 7% MwSt." }),
                        (0, b.jsxs)("span", {
                          className: "font-bold",
                          children: [J.toFixed(2).replace(".", ","), " €"],
                        }),
                      ],
                    }),
                    (0, b.jsx)("div", {
                      className: "h-[1px] bg-[#E4C0A8] my-1.5",
                    }),
                    (0, b.jsxs)("div", {
                      className: "flex justify-between items-baseline mt-2",
                      children: [
                        (0, b.jsx)("span", {
                          className:
                            "font-nunito font-black text-[13px] text-[#2d1f19]",
                          children: "Vor Ort zahlen",
                        }),
                        (0, b.jsxs)("span", {
                          className:
                            "font-calistoga text-[24px] text-[#CC624C]",
                          children: [I.toFixed(2).replace(".", ","), " €"],
                        }),
                      ],
                    }),
                  ],
                }),
                s.notes &&
                  (0, b.jsxs)(h.FadeUp, {
                    delay: 0.5,
                    className:
                      "font-nunito text-[12px] text-[#7a5a52] bg-white rounded-[14px] p-3 italic",
                    children: ['"', s.notes, '"'],
                  }),
              ],
            }),
            (0, b.jsxs)("div", {
              className:
                "p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]",
              children: [
                (0, b.jsxs)("div", {
                  className:
                    "font-nunito text-[10.5px] text-[#7a5a52] text-center mb-2.5 leading-tight",
                  children: [
                    'Mit „Bestellung absenden" akzeptierst du unsere ',
                    (0, b.jsx)("span", {
                      className: "text-[#CC624C] font-extrabold",
                      children: "AGB & Vorbestellbedingungen",
                    }),
                  ],
                }),
                (0, b.jsx)(i.PrimaryButton, {
                  className: "w-full flex justify-center items-center gap-2",
                  onClick: M,
                  disabled: v || 0 === q.length,
                  children: v
                    ? "Wird gesendet..."
                    : (0, b.jsxs)(b.Fragment, {
                        children: [
                          (0, b.jsx)(g.Check, { size: 18 }),
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
];

//# sourceMappingURL=_129c6is._.js.map
