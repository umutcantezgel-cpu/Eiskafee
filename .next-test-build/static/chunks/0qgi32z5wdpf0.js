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
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
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
  658709,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(618566),
      r = e.i(230129),
      i = e.i(632781);
    e.s([
      "AuthGuard",
      0,
      function ({ children: e, requireAdmin: n = !1 }) {
        let { user: l, role: c, loading: d } = (0, r.useAuth)(),
          u = (0, a.useRouter)(),
          o = (0, a.usePathname)();
        return ((0, s.useEffect)(() => {
          !d &&
            (l
              ? n && "admin" !== c && u.push("/profile")
              : u.push(`/auth?redirect=${encodeURIComponent(o)}`));
        }, [l, c, d, u, o, n]),
        d)
          ? (0, t.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, t.jsx)(i.Loader2, {
                className: "w-8 h-8 text-[#CC624C] animate-spin",
              }),
            })
          : !l || (n && "admin" !== c)
            ? null
            : (0, t.jsx)(t.Fragment, { children: e });
      },
    ]);
  },
  224840,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var s = e.i(746939),
      a = e.i(263802),
      r = e.i(959141),
      i = e.i(230129);
    e.s([
      "useOrders",
      0,
      function () {
        let [e, n] = (0, t.useState)([]),
          [l, c] = (0, t.useState)(!0),
          [d, u] = (0, t.useState)(null),
          { user: o, role: x, loading: f } = (0, i.useAuth)();
        return (
          (0, t.useEffect)(() => {
            if (f) return;
            if (!o) {
              (n([]), c(!1));
              return;
            }
            let e = (0, a.query)(
              (0, s.collection)(r.db, "orders"),
              (0, a.orderBy)("createdAt", "desc"),
            );
            "admin" !== x &&
              (e = (0, a.query)(
                (0, s.collection)(r.db, "orders"),
                (0, a.where)("userId", "==", o.uid),
                (0, a.orderBy)("createdAt", "desc"),
              ));
            let t = (0, a.onSnapshot)(
              e,
              (e) => {
                (n(
                  e.docs.map((e) => ({
                    id: e.id,
                    ...e.data(),
                    createdAt: e.data().createdAt?.toDate() || new Date(),
                  })),
                ),
                  c(!1),
                  u(null));
              },
              (e) => {
                (console.error("useOrders error:", e), u(e), c(!1));
              },
            );
            return () => t();
          }, [o, x, f]),
          { orders: e, loading: l, error: d }
        );
      },
    ]);
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
  107330,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("rotate-ccw", [
      [
        "path",
        {
          d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
          key: "1357e3",
        },
      ],
      ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ]);
    e.s(["default", 0, t]);
  },
  679258,
  (e) => {
    "use strict";
    var t = e.i(63139);
    e.s(["Package", () => t.default]);
  },
  810603,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(618566),
      a = e.i(224840),
      r = e.i(798688),
      i = e.i(658709),
      n = e.i(636498),
      l = e.i(711241),
      c = e.i(107330),
      c = c,
      d = e.i(679258),
      u = e.i(632781);
    e.s(
      [
        "default",
        0,
        function () {
          let { orders: e, loading: o } = (0, a.useOrders)(),
            x = (0, s.useRouter)(),
            { setCart: f, setOrderType: h } = (0, r.useStore)();
          return (0, t.jsx)(i.AuthGuard, {
            children: (0, t.jsxs)("div", {
              className: "min-h-screen bg-[#f5efe8] flex flex-col",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between",
                  children: [
                    (0, t.jsx)("button", {
                      onClick: () => x.push("/profile"),
                      className:
                        "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
                      children: (0, t.jsx)(l.ArrowLeft, {
                        size: 20,
                        color: "#2d1f19",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "text-center",
                      children: (0, t.jsx)("div", {
                        className:
                          "font-calistoga text-lg text-[#2d1f19] leading-tight",
                        children: "Bestellungen",
                      }),
                    }),
                    (0, t.jsx)("div", { className: "w-10 h-10" }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "px-5 flex-1 overflow-y-auto pb-10 pt-4",
                  children: o
                    ? (0, t.jsx)("div", {
                        className: "flex justify-center mt-10",
                        children: (0, t.jsx)(u.Loader2, {
                          className: "animate-spin text-[#CC624C]",
                          size: 32,
                        }),
                      })
                    : 0 === e.length
                      ? (0, t.jsxs)("div", {
                          className: "text-center mt-20",
                          children: [
                            (0, t.jsx)(d.Package, {
                              size: 48,
                              className: "mx-auto text-[#eedfcc] mb-4",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "font-calistoga text-xl text-[#2d1f19] mb-2",
                              children: "Noch keine Bestellungen",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "font-nunito text-[13px] text-[#7a5a52]",
                              children: "Zeit für ein paar süße Momente!",
                            }),
                            (0, t.jsx)("button", {
                              onClick: () => x.push("/menu"),
                              className:
                                "mt-6 bg-[#CC624C] text-white px-6 py-2.5 rounded-xl font-bold text-sm",
                              children: "Zur Speisekarte",
                            }),
                          ],
                        })
                      : (0, t.jsx)("div", {
                          className: "space-y-4",
                          children: e.map((e, s) =>
                            (0, t.jsx)(
                              n.FadeUp,
                              {
                                delay: 0.1 * s,
                                children: (0, t.jsxs)("div", {
                                  className:
                                    "bg-white rounded-[18px] p-4 shadow-sm relative overflow-hidden",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex justify-between items-start mb-3",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "font-nunito text-[10px] font-black text-[#CC624C] tracking-widest uppercase mb-1",
                                              children: new Date(
                                                e.createdAt,
                                              ).toLocaleDateString("de-DE", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                              }),
                                            }),
                                            (0, t.jsxs)("div", {
                                              className:
                                                "font-calistoga text-[16px] text-[#2d1f19]",
                                              children: [
                                                e.total
                                                  ?.toFixed(2)
                                                  .replace(".", ","),
                                                " €",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("div", {
                                          className: `px-2 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider ${((
                                            e,
                                          ) => {
                                            switch (e) {
                                              case "ready":
                                                return "bg-[#3a9d52] text-white";
                                              case "completed":
                                                return "bg-[#2d1f19] text-white";
                                              case "cancelled":
                                                return "bg-red-500 text-white";
                                              default:
                                                return "bg-[#CC624C] text-white";
                                            }
                                          })(e.status)}`,
                                          children: ((e) => {
                                            switch (e) {
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
                                                return e;
                                            }
                                          })(e.status),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "border-t border-dashed border-[#eedfcc] pt-3 pb-4 mb-3 space-y-1.5",
                                      children: e.items?.map((e, s) =>
                                        (0, t.jsxs)(
                                          "div",
                                          {
                                            className: "flex gap-2",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className:
                                                  "font-nunito font-extrabold text-[12px] text-[#7a5a52]",
                                                children: [e.quantity, "×"],
                                              }),
                                              (0, t.jsxs)("span", {
                                                className:
                                                  "font-nunito font-bold text-[13px] text-[#2d1f19] flex-1",
                                                children: [
                                                  e.name,
                                                  " ",
                                                  (0, t.jsx)("span", {
                                                    className:
                                                      "text-[#7a5a52] font-normal text-[11px]",
                                                    children: e.variant
                                                      ? `(${e.variant})`
                                                      : "",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          s,
                                        ),
                                      ),
                                    }),
                                    (0, t.jsxs)("button", {
                                      onClick: () => {
                                        (f(
                                          e.items.map((e, t) => ({
                                            id: `${e.name}-${t}`,
                                            name: e.name,
                                            price: e.price,
                                            quantity: e.quantity,
                                            v: e.variant || "",
                                            desc: e.variant || "",
                                          })),
                                        ),
                                          h(e.type || "pickup"),
                                          x.push("/checkout"));
                                      },
                                      className:
                                        "w-full flex items-center justify-center gap-2 bg-[#f5efe8] text-[#CC624C] py-2.5 rounded-[12px] font-bold text-[13px] hover:bg-[#eedfcc] transition-colors",
                                      children: [
                                        (0, t.jsx)(c.default, { size: 16 }),
                                        "Bestellung wiederholen",
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e.id,
                            ),
                          ),
                        }),
                }),
              ],
            }),
          });
        },
      ],
      810603,
    );
  },
]);
