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
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
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
  999272,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(50944),
      e = a.i(262536),
      f = a.i(875160);
    a.s([
      "AuthGuard",
      0,
      function ({ children: a, requireAdmin: g = !1 }) {
        let { user: h, role: i, loading: j } = (0, e.useAuth)(),
          k = (0, d.useRouter)(),
          l = (0, d.usePathname)();
        return ((0, c.useEffect)(() => {
          !j &&
            (h
              ? g && "admin" !== i && k.push("/profile")
              : k.push(`/auth?redirect=${encodeURIComponent(l)}`));
        }, [h, i, j, k, l, g]),
        j)
          ? (0, b.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, b.jsx)(f.Loader2, {
                className: "w-8 h-8 text-[#CC624C] animate-spin",
              }),
            })
          : !h || (g && "admin" !== i)
            ? null
            : (0, b.jsx)(b.Fragment, { children: a });
      },
    ]);
  },
  933164,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.i(69387);
    var c = a.i(691431),
      d = a.i(601787),
      e = a.i(420237),
      f = a.i(262536);
    a.s([
      "useOrders",
      0,
      function () {
        let [a, g] = (0, b.useState)([]),
          [h, i] = (0, b.useState)(!0),
          [j, k] = (0, b.useState)(null),
          { user: l, role: m, loading: n } = (0, f.useAuth)();
        return (
          (0, b.useEffect)(() => {
            if (n) return;
            if (!l) {
              (g([]), i(!1));
              return;
            }
            let a = (0, d.query)(
              (0, c.collection)(e.db, "orders"),
              (0, d.orderBy)("createdAt", "desc"),
            );
            "admin" !== m &&
              (a = (0, d.query)(
                (0, c.collection)(e.db, "orders"),
                (0, d.where)("userId", "==", l.uid),
                (0, d.orderBy)("createdAt", "desc"),
              ));
            let b = (0, d.onSnapshot)(
              a,
              (a) => {
                (g(
                  a.docs.map((a) => ({
                    id: a.id,
                    ...a.data(),
                    createdAt: a.data().createdAt?.toDate() || new Date(),
                  })),
                ),
                  i(!1),
                  k(null));
              },
              (a) => {
                (console.error("useOrders error:", a), k(a), i(!1));
              },
            );
            return () => b();
          }, [l, m, n]),
          { orders: a, loading: h, error: j }
        );
      },
    ]);
  },
  393318,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("rotate-ccw", [
      [
        "path",
        {
          d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
          key: "1357e3",
        },
      ],
      ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ]);
    a.s(["default", 0, b]);
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
  405405,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(50944),
      d = a.i(933164),
      e = a.i(762492),
      f = a.i(999272),
      g = a.i(544623),
      h = a.i(219107),
      i = a.i(393318),
      i = i,
      j = a.i(892965),
      k = a.i(875160);
    a.s(
      [
        "default",
        0,
        function () {
          let { orders: a, loading: l } = (0, d.useOrders)(),
            m = (0, c.useRouter)(),
            { setCart: n, setOrderType: o } = (0, e.useStore)();
          return (0, b.jsx)(f.AuthGuard, {
            children: (0, b.jsxs)("div", {
              className: "min-h-screen bg-[#f5efe8] flex flex-col",
              children: [
                (0, b.jsxs)("div", {
                  className:
                    "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between",
                  children: [
                    (0, b.jsx)("button", {
                      onClick: () => m.push("/profile"),
                      className:
                        "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
                      children: (0, b.jsx)(h.ArrowLeft, {
                        size: 20,
                        color: "#2d1f19",
                      }),
                    }),
                    (0, b.jsx)("div", {
                      className: "text-center",
                      children: (0, b.jsx)("div", {
                        className:
                          "font-calistoga text-lg text-[#2d1f19] leading-tight",
                        children: "Bestellungen",
                      }),
                    }),
                    (0, b.jsx)("div", { className: "w-10 h-10" }),
                  ],
                }),
                (0, b.jsx)("div", {
                  className: "px-5 flex-1 overflow-y-auto pb-10 pt-4",
                  children: l
                    ? (0, b.jsx)("div", {
                        className: "flex justify-center mt-10",
                        children: (0, b.jsx)(k.Loader2, {
                          className: "animate-spin text-[#CC624C]",
                          size: 32,
                        }),
                      })
                    : 0 === a.length
                      ? (0, b.jsxs)("div", {
                          className: "text-center mt-20",
                          children: [
                            (0, b.jsx)(j.Package, {
                              size: 48,
                              className: "mx-auto text-[#eedfcc] mb-4",
                            }),
                            (0, b.jsx)("div", {
                              className:
                                "font-calistoga text-xl text-[#2d1f19] mb-2",
                              children: "Noch keine Bestellungen",
                            }),
                            (0, b.jsx)("div", {
                              className:
                                "font-nunito text-[13px] text-[#7a5a52]",
                              children: "Zeit für ein paar süße Momente!",
                            }),
                            (0, b.jsx)("button", {
                              onClick: () => m.push("/menu"),
                              className:
                                "mt-6 bg-[#CC624C] text-white px-6 py-2.5 rounded-xl font-bold text-sm",
                              children: "Zur Speisekarte",
                            }),
                          ],
                        })
                      : (0, b.jsx)("div", {
                          className: "space-y-4",
                          children: a.map((a, c) =>
                            (0, b.jsx)(
                              g.FadeUp,
                              {
                                delay: 0.1 * c,
                                children: (0, b.jsxs)("div", {
                                  className:
                                    "bg-white rounded-[18px] p-4 shadow-sm relative overflow-hidden",
                                  children: [
                                    (0, b.jsxs)("div", {
                                      className:
                                        "flex justify-between items-start mb-3",
                                      children: [
                                        (0, b.jsxs)("div", {
                                          children: [
                                            (0, b.jsx)("div", {
                                              className:
                                                "font-nunito text-[10px] font-black text-[#CC624C] tracking-widest uppercase mb-1",
                                              children: new Date(
                                                a.createdAt,
                                              ).toLocaleDateString("de-DE", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                              }),
                                            }),
                                            (0, b.jsxs)("div", {
                                              className:
                                                "font-calistoga text-[16px] text-[#2d1f19]",
                                              children: [
                                                a.total
                                                  ?.toFixed(2)
                                                  .replace(".", ","),
                                                " €",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, b.jsx)("div", {
                                          className: `px-2 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider ${((
                                            a,
                                          ) => {
                                            switch (a) {
                                              case "ready":
                                                return "bg-[#3a9d52] text-white";
                                              case "completed":
                                                return "bg-[#2d1f19] text-white";
                                              case "cancelled":
                                                return "bg-red-500 text-white";
                                              default:
                                                return "bg-[#CC624C] text-white";
                                            }
                                          })(a.status)}`,
                                          children: ((a) => {
                                            switch (a) {
                                              case "pending":
                                                return "Ausstehend";
                                              case "confirmed":
                                                return "Bestätigt";
                                              case "preparing":
                                                return "In Zubereitung";
                                              case "ready":
                                                return "Abholbereit";
                                              case "completed":
                                                return "Abgeschlossen";
                                              case "cancelled":
                                                return "Storniert";
                                              default:
                                                return a;
                                            }
                                          })(a.status),
                                        }),
                                      ],
                                    }),
                                    (0, b.jsx)("div", {
                                      className:
                                        "border-t border-dashed border-[#eedfcc] pt-3 pb-4 mb-3 space-y-1.5",
                                      children: a.items?.map((a, c) =>
                                        (0, b.jsxs)(
                                          "div",
                                          {
                                            className: "flex gap-2",
                                            children: [
                                              (0, b.jsxs)("span", {
                                                className:
                                                  "font-nunito font-extrabold text-[12px] text-[#7a5a52]",
                                                children: [a.quantity, "×"],
                                              }),
                                              (0, b.jsxs)("span", {
                                                className:
                                                  "font-nunito font-bold text-[13px] text-[#2d1f19] flex-1",
                                                children: [
                                                  a.name,
                                                  " ",
                                                  (0, b.jsx)("span", {
                                                    className:
                                                      "text-[#7a5a52] font-normal text-[11px]",
                                                    children: a.variant
                                                      ? `(${a.variant})`
                                                      : "",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          c,
                                        ),
                                      ),
                                    }),
                                    (0, b.jsxs)("button", {
                                      onClick: () => {
                                        (n(
                                          a.items.map((a, b) => ({
                                            id: `${a.name}-${b}`,
                                            name: a.name,
                                            price: a.price,
                                            quantity: a.quantity,
                                            v: a.variant || "",
                                            desc: a.variant || "",
                                          })),
                                        ),
                                          o(a.type || "pickup"),
                                          m.push("/checkout"));
                                      },
                                      className:
                                        "w-full flex items-center justify-center gap-2 bg-[#f5efe8] text-[#CC624C] py-2.5 rounded-[12px] font-bold text-[13px] hover:bg-[#eedfcc] transition-colors",
                                      children: [
                                        (0, b.jsx)(i.default, { size: 16 }),
                                        "Bestellung wiederholen",
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              a.id,
                            ),
                          ),
                        }),
                }),
              ],
            }),
          });
        },
      ],
      405405,
    );
  },
];

//# sourceMappingURL=_0lxu88.._.js.map
