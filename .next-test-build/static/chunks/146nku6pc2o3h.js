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
      function ({ children: e, delay: a = 0, className: i = "" }) {
        let l = (0, s.useRef)(null),
          [r, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && n(!0);
              },
              { threshold: 0.12 },
            );
            return (l.current && e.observe(l.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: l,
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
  902434,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("house", [
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
    e.s(["default", 0, t]);
  },
  478943,
  439026,
  (e) => {
    "use strict";
    var t = e.i(456420);
    let s = (0, t.default)("chef-hat", [
      [
        "path",
        {
          d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
          key: "1qvrer",
        },
      ],
      ["path", { d: "M6 17h12", key: "1jwigz" }],
    ]);
    e.s(["default", 0, s], 478943);
    let a = (0, t.default)("scroll-text", [
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
    e.s(["default", 0, a], 439026);
  },
  749817,
  (e) => {
    "use strict";
    var t = e.i(902434);
    e.s(["Home", () => t.default]);
  },
  406123,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(632781),
      i = e.i(689664),
      l = e.i(478943),
      l = l,
      r = e.i(263448),
      n = e.i(711241),
      c = e.i(420865),
      d = e.i(749817),
      o = e.i(439026),
      o = o,
      u = e.i(901279),
      f = e.i(974336),
      x = e.i(636498),
      p = e.i(618566),
      h = e.i(318028);
    e.i(436180);
    var m = e.i(386205),
      b = e.i(263802),
      g = e.i(959141),
      v = e.i(43832);
    function j() {
      let j = (0, p.useRouter)(),
        y = (0, p.useSearchParams)().get("orderId"),
        [N, C] = (0, s.useState)(null),
        [k, w] = (0, s.useState)(!0),
        [S, A] = (0, s.useState)(!1);
      if (
        ((0, s.useEffect)(() => {
          if (!y) return void w(!1);
          let t = (0, b.onSnapshot)(
            (0, m.doc)(g.db, "orders", y),
            (t) => {
              if (t.exists()) {
                let s = t.data();
                (C(s),
                  s?.createdAt &&
                    10 >
                      ("function" == typeof s.createdAt.toDate
                        ? s.createdAt.toDate()
                        : new Date(s.createdAt)
                      ).getHours() &&
                    v.useAchievements.getState().unlock("early-bird"),
                  s?.status === "ready" &&
                    A((t) => {
                      if (!t) {
                        e.A(80233).then(({ default: e }) => {
                          e({
                            particleCount: 150,
                            spread: 70,
                            origin: { y: 0.6 },
                            colors: ["#CC624C", "#E4C0A8", "#eedfcc"],
                          });
                        });
                        try {
                          new Audio("/ready.mp3")
                            .play()
                            .catch((e) =>
                              console.log("Audio blocked by browser:", e),
                            );
                        } catch (e) {
                          console.log("Audio error:", e);
                        }
                        return !0;
                      }
                      return t;
                    }));
              }
              w(!1);
            },
            (e) => {
              (console.error("Error listening to order:", e), w(!1));
            },
          );
          return () => t();
        }, [y]),
        k)
      )
        return (0, t.jsx)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex items-center justify-center",
          children: (0, t.jsx)(a.Loader2, {
            className: "animate-spin text-[#CC624C]",
            size: 32,
          }),
        });
      if (!N)
        return (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center px-5",
          children: [
            (0, t.jsx)("h1", {
              className: "font-calistoga text-2xl text-[#2d1f19] mb-4",
              children: "Bestellung nicht gefunden",
            }),
            (0, t.jsx)("button", {
              onClick: () => j.push("/"),
              className: "font-nunito font-bold underline text-[#CC624C]",
              children: "Zurück zur Startseite",
            }),
          ],
        });
      let z = N.status || "confirmed",
        B = [
          {
            t: "Bestätigt",
            ic: i.Check,
            done: ["confirmed", "preparing", "ready", "completed"].includes(z),
            active: "confirmed" === z,
          },
          {
            t: "In Zubereitung",
            ic: l.default,
            done: ["preparing", "ready", "completed"].includes(z),
            active: "preparing" === z,
          },
          {
            t: "Abholbereit",
            ic: r.ShoppingBag,
            done: ["ready", "completed"].includes(z),
            active: "ready" === z,
          },
        ],
        M =
          N.pickupDate === new Date().toISOString().split("T")[0]
            ? "Heute"
            : new Date(N.pickupDate).toLocaleDateString("de-DE", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
              });
      return (0, t.jsxs)("div", {
        className: "min-h-screen bg-[#f5efe8] flex flex-col",
        children: [
          (0, t.jsxs)("div", {
            className:
              "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between",
            children: [
              (0, t.jsx)("button", {
                onClick: () => j.back(),
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
                  (0, t.jsxs)("div", {
                    className:
                      "font-calistoga text-lg text-[#2d1f19] leading-tight",
                    children: ["Bestellung ", N.orderNumber],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "font-nunito text-[11px] font-bold text-[#7a5a52]",
                    children: ["Geschätzt ", N.pickupTime],
                  }),
                ],
              }),
              (0, t.jsx)("div", { className: "w-10 h-10" }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "px-5 flex-1 overflow-y-auto pb-6 pt-2",
            children: [
              (0, t.jsxs)(x.FadeUp, {
                delay: 0.1,
                className:
                  "bg-[#CC624C] rounded-[22px] p-[20px_22px] text-white mb-4 relative overflow-hidden shadow-md",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "absolute -top-5 -right-2.5 w-[110px] h-[110px] bg-[rgba(255,248,241,0.16)] rounded-full",
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "font-nunito text-[10px] font-black tracking-[1.4px] uppercase opacity-85",
                        children: "Aktueller Status",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "font-calistoga text-[24px] leading-[1.15] mt-1",
                        children:
                          "confirmed" === z
                            ? "Deine Bestellung wurde bestätigt"
                            : "preparing" === z
                              ? "Deine Bestellung wird zubereitet"
                              : "ready" === z
                                ? "Deine Bestellung ist abholbereit!"
                                : "completed" === z
                                  ? "Bestellung abgeschlossen"
                                  : "cancelled" === z
                                    ? "Bestellung storniert"
                                    : "Wird verarbeitet",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "font-nunito text-[12px] mt-2 opacity-90 font-bold",
                        children:
                          "ready" === z
                            ? "Abholung jetzt möglich"
                            : `Geplant f\xfcr ${M} \xb7 ${N.pickupTime}`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(x.FadeUp, {
                delay: 0.2,
                className: "relative pl-2 mb-5",
                children: B.map((e, s) => {
                  let a = e.done || e.active;
                  return (0, t.jsxs)(
                    "div",
                    {
                      className: `flex gap-3.5 relative ${s < B.length - 1 ? "pb-5" : ""}`,
                      children: [
                        s < B.length - 1 &&
                          (0, t.jsx)("div", {
                            className: `absolute left-[17px] top-[34px] bottom-0 w-0.5 ${e.done ? "bg-[#CC624C]" : "bg-[#eedfcc]"}`,
                          }),
                        (0, t.jsx)("div", {
                          className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${a ? "bg-[#CC624C]" : "bg-[#eedfcc]"} ${e.active ? "shadow-[0_0_0_5px_rgba(204,98,76,0.18)]" : ""}`,
                          children: (0, t.jsx)(e.ic, {
                            size: 16,
                            color: a ? "#fff" : "#7a5a52",
                            strokeWidth: 2.2,
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "flex-1 pt-1.5",
                          children: (0, t.jsx)("div", {
                            className: `font-nunito font-black text-[13px] ${a ? "text-[#2d1f19]" : "text-[#7a5a52]"}`,
                            children: e.t,
                          }),
                        }),
                      ],
                    },
                    e.t,
                  );
                }),
              }),
              (0, t.jsxs)(x.FadeUp, {
                delay: 0.3,
                className:
                  "bg-white rounded-[18px] p-3.5 flex gap-3 items-start mb-2.5 shadow-sm",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "w-[42px] h-[42px] rounded-full bg-[#E4C0A8] flex items-center justify-center shrink-0",
                    children: (0, t.jsx)(c.MapPin, {
                      size: 20,
                      color: "#CC624C",
                      strokeWidth: 2,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "font-calistoga text-[14px] text-[#2d1f19]",
                        children: [h.BUSINESS.street, " · ", h.BUSINESS.city],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "font-nunito text-[11.5px] text-[#7a5a52] mt-[1px]",
                        children: [
                          "Tipp: Bestellnummer ",
                          N.orderNumber,
                          " nennen",
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex gap-2 mt-2.5",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "px-3 py-1.5 rounded-full bg-[#eedfcc] font-nunito text-[11px] font-extrabold text-[#CC624C]",
                            children: "Route →",
                          }),
                          (0, t.jsx)("div", {
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
          (0, t.jsx)("div", {
            className:
              "bg-[#f5efe8] border-t border-[#eedfcc] pb-8 pt-3 px-6 flex justify-around items-center",
            children: [
              { icon: d.Home, label: "Home", to: "/" },
              { icon: r.ShoppingBag, label: "Order", to: "/order-hub" },
              { icon: o.default, label: "Menu", to: "/menu" },
              { icon: u.User, label: "Profil", to: "/auth" },
            ].map((e) =>
              (0, t.jsxs)(
                f.TransitionLink,
                {
                  href: e.to,
                  className: `flex flex-col items-center gap-1 ${"Order" === e.label ? "text-[#CC624C] opacity-100" : "text-[#5c3d35] opacity-50"}`,
                  children: [
                    (0, t.jsx)(e.icon, {
                      size: 22,
                      strokeWidth: "Order" === e.label ? 2.5 : 2,
                    }),
                    (0, t.jsx)("span", {
                      className: "text-[10px] font-nunito font-bold",
                      children: e.label,
                    }),
                  ],
                },
                e.label,
              ),
            ),
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
            children: (0, t.jsx)(j, {}),
          });
        },
      ],
      406123,
    );
  },
]);
