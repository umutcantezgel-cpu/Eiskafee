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
  857880,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("house", [
      [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          key: "r6nss1",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  555486,
  (a) => {
    "use strict";
    var b = a.i(857880);
    a.s(["Home", () => b.default]);
  },
  115304,
  853349,
  (a) => {
    "use strict";
    var b = a.i(164831);
    let c = (0, b.default)("chef-hat", [
      [
        "path",
        {
          d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
          key: "1qvrer",
        },
      ],
      ["path", { d: "M6 17h12", key: "1jwigz" }],
    ]);
    a.s(["default", 0, c], 115304);
    let d = (0, b.default)("scroll-text", [
      ["path", { d: "M15 12h-5", key: "r7krc0" }],
      ["path", { d: "M15 8h-5", key: "1khuty" }],
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
      [
        "path",
        {
          d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
          key: "1ph1d7",
        },
      ],
    ]);
    a.s(["default", 0, d], 853349);
  },
  180596,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(875160),
      e = a.i(752562),
      f = a.i(115304),
      f = f,
      g = a.i(863145),
      h = a.i(219107),
      i = a.i(954098),
      j = a.i(555486),
      k = a.i(853349),
      k = k,
      l = a.i(344451),
      m = a.i(371947),
      n = a.i(544623),
      o = a.i(50944),
      p = a.i(324429);
    a.i(69387);
    var q = a.i(132787),
      r = a.i(601787),
      s = a.i(420237),
      t = a.i(778797);
    function u() {
      let u = (0, o.useRouter)(),
        v = (0, o.useSearchParams)().get("orderId"),
        [w, x] = (0, c.useState)(null),
        [y, z] = (0, c.useState)(!0),
        [A, B] = (0, c.useState)(!1);
      if (
        ((0, c.useEffect)(() => {
          if (!v) return void z(!1);
          let b = (0, r.onSnapshot)(
            (0, q.doc)(s.db, "orders", v),
            (b) => {
              if (b.exists()) {
                let c = b.data();
                (x(c),
                  c?.createdAt &&
                    10 >
                      ("function" == typeof c.createdAt.toDate
                        ? c.createdAt.toDate()
                        : new Date(c.createdAt)
                      ).getHours() &&
                    t.useAchievements.getState().unlock("early-bird"),
                  c?.status === "ready" &&
                    B((b) => {
                      if (!b) {
                        a.A(48743).then(({ default: a }) => {
                          a({
                            particleCount: 150,
                            spread: 70,
                            origin: { y: 0.6 },
                            colors: ["#CC624C", "#E4C0A8", "#eedfcc"],
                          });
                        });
                        try {
                          new Audio("/ready.mp3")
                            .play()
                            .catch((a) =>
                              console.log("Audio blocked by browser:", a),
                            );
                        } catch (a) {
                          console.log("Audio error:", a);
                        }
                        return !0;
                      }
                      return b;
                    }));
              }
              z(!1);
            },
            (a) => {
              (console.error("Error listening to order:", a), z(!1));
            },
          );
          return () => b();
        }, [v]),
        y)
      )
        return (0, b.jsx)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex items-center justify-center",
          children: (0, b.jsx)(d.Loader2, {
            className: "animate-spin text-[#CC624C]",
            size: 32,
          }),
        });
      if (!w)
        return (0, b.jsxs)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center px-5",
          children: [
            (0, b.jsx)("h1", {
              className: "font-calistoga text-2xl text-[#2d1f19] mb-4",
              children: "Bestellung nicht gefunden",
            }),
            (0, b.jsx)("button", {
              onClick: () => u.push("/"),
              className: "font-nunito font-bold underline text-[#CC624C]",
              children: "Zurück zur Startseite",
            }),
          ],
        });
      let C = w.status || "confirmed",
        D = [
          {
            t: "Bestätigt",
            ic: e.Check,
            done: ["confirmed", "preparing", "ready", "completed"].includes(C),
            active: "confirmed" === C,
          },
          {
            t: "In Zubereitung",
            ic: f.default,
            done: ["preparing", "ready", "completed"].includes(C),
            active: "preparing" === C,
          },
          {
            t: "Abholbereit",
            ic: g.ShoppingBag,
            done: ["ready", "completed"].includes(C),
            active: "ready" === C,
          },
        ],
        E =
          w.pickupDate === new Date().toISOString().split("T")[0]
            ? "Heute"
            : new Date(w.pickupDate).toLocaleDateString("de-DE", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
              });
      return (0, b.jsxs)("div", {
        className: "min-h-screen bg-[#f5efe8] flex flex-col",
        children: [
          (0, b.jsxs)("div", {
            className:
              "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between",
            children: [
              (0, b.jsx)("button", {
                onClick: () => u.back(),
                className:
                  "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
                children: (0, b.jsx)(h.ArrowLeft, {
                  size: 20,
                  color: "#2d1f19",
                }),
              }),
              (0, b.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, b.jsxs)("div", {
                    className:
                      "font-calistoga text-lg text-[#2d1f19] leading-tight",
                    children: ["Bestellung ", w.orderNumber],
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "font-nunito text-[11px] font-bold text-[#7a5a52]",
                    children: ["Geschätzt ", w.pickupTime],
                  }),
                ],
              }),
              (0, b.jsx)("div", { className: "w-10 h-10" }),
            ],
          }),
          (0, b.jsxs)("div", {
            className: "px-5 flex-1 overflow-y-auto pb-6 pt-2",
            children: [
              (0, b.jsxs)(n.FadeUp, {
                delay: 0.1,
                className:
                  "bg-[#CC624C] rounded-[22px] p-[20px_22px] text-white mb-4 relative overflow-hidden shadow-md",
                children: [
                  (0, b.jsx)("div", {
                    className:
                      "absolute -top-5 -right-2.5 w-[110px] h-[110px] bg-[rgba(255,248,241,0.16)] rounded-full",
                  }),
                  (0, b.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "font-nunito text-[10px] font-black tracking-[1.4px] uppercase opacity-85",
                        children: "Aktueller Status",
                      }),
                      (0, b.jsx)("div", {
                        className:
                          "font-calistoga text-[24px] leading-[1.15] mt-1",
                        children:
                          "confirmed" === C
                            ? "Deine Bestellung wurde bestätigt"
                            : "preparing" === C
                              ? "Deine Bestellung wird zubereitet"
                              : "ready" === C
                                ? "Deine Bestellung ist abholbereit!"
                                : "completed" === C
                                  ? "Bestellung abgeschlossen"
                                  : "cancelled" === C
                                    ? "Bestellung storniert"
                                    : "Wird verarbeitet",
                      }),
                      (0, b.jsx)("div", {
                        className:
                          "font-nunito text-[12px] mt-2 opacity-90 font-bold",
                        children:
                          "ready" === C
                            ? "Abholung jetzt möglich"
                            : `Geplant f\xfcr ${E} \xb7 ${w.pickupTime}`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)(n.FadeUp, {
                delay: 0.2,
                className: "relative pl-2 mb-5",
                children: D.map((a, c) => {
                  let d = a.done || a.active;
                  return (0, b.jsxs)(
                    "div",
                    {
                      className: `flex gap-3.5 relative ${c < D.length - 1 ? "pb-5" : ""}`,
                      children: [
                        c < D.length - 1 &&
                          (0, b.jsx)("div", {
                            className: `absolute left-[17px] top-[34px] bottom-0 w-0.5 ${a.done ? "bg-[#CC624C]" : "bg-[#eedfcc]"}`,
                          }),
                        (0, b.jsx)("div", {
                          className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${d ? "bg-[#CC624C]" : "bg-[#eedfcc]"} ${a.active ? "shadow-[0_0_0_5px_rgba(204,98,76,0.18)]" : ""}`,
                          children: (0, b.jsx)(a.ic, {
                            size: 16,
                            color: d ? "#fff" : "#7a5a52",
                            strokeWidth: 2.2,
                          }),
                        }),
                        (0, b.jsx)("div", {
                          className: "flex-1 pt-1.5",
                          children: (0, b.jsx)("div", {
                            className: `font-nunito font-black text-[13px] ${d ? "text-[#2d1f19]" : "text-[#7a5a52]"}`,
                            children: a.t,
                          }),
                        }),
                      ],
                    },
                    a.t,
                  );
                }),
              }),
              (0, b.jsxs)(n.FadeUp, {
                delay: 0.3,
                className:
                  "bg-white rounded-[18px] p-3.5 flex gap-3 items-start mb-2.5 shadow-sm",
                children: [
                  (0, b.jsx)("div", {
                    className:
                      "w-[42px] h-[42px] rounded-full bg-[#E4C0A8] flex items-center justify-center shrink-0",
                    children: (0, b.jsx)(i.MapPin, {
                      size: 20,
                      color: "#CC624C",
                      strokeWidth: 2,
                    }),
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, b.jsxs)("div", {
                        className: "font-calistoga text-[14px] text-[#2d1f19]",
                        children: [p.BUSINESS.street, " · ", p.BUSINESS.city],
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "font-nunito text-[11.5px] text-[#7a5a52] mt-[1px]",
                        children: [
                          "Tipp: Bestellnummer ",
                          w.orderNumber,
                          " nennen",
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex gap-2 mt-2.5",
                        children: [
                          (0, b.jsx)("div", {
                            className:
                              "px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]",
                            children: "Route →",
                          }),
                          (0, b.jsx)("div", {
                            className:
                              "px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]",
                            children: "Anrufen",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsx)("div", {
            className:
              "bg-[#f5efe8] border-t border-[#eedfcc] pb-8 pt-3 px-6 flex justify-around items-center",
            children: [
              { icon: j.Home, label: "Home", to: "/" },
              { icon: g.ShoppingBag, label: "Order", to: "/order-hub" },
              { icon: k.default, label: "Menu", to: "/menu" },
              { icon: l.User, label: "Profil", to: "/auth" },
            ].map((a) =>
              (0, b.jsxs)(
                m.TransitionLink,
                {
                  href: a.to,
                  className: `flex flex-col items-center gap-1 ${"Order" === a.label ? "text-[#CC624C] opacity-100" : "text-[#5c3d35] opacity-50"}`,
                  children: [
                    (0, b.jsx)(a.icon, {
                      size: 22,
                      strokeWidth: "Order" === a.label ? 2.5 : 2,
                    }),
                    (0, b.jsx)("span", {
                      className: "text-[10px] font-nunito font-bold",
                      children: a.label,
                    }),
                  ],
                },
                a.label,
              ),
            ),
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
            children: (0, b.jsx)(u, {}),
          });
        },
      ],
      180596,
    );
  },
];

//# sourceMappingURL=_0pe7bmb._.js.map
