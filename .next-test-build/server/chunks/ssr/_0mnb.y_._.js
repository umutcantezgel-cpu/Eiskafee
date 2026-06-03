module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
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
  415337,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ]);
    a.s(["default", 0, b]);
  },
  308311,
  (a) => {
    "use strict";
    var b = a.i(415337);
    a.s(["Clock", () => b.default]);
  },
  77158,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(933164),
      d = a.i(572131);
    (a.s([], 78807), a.i(78807));
    var e = a.i(900702);
    let f = (0, d.createContext)(null);
    var g = a.i(346271),
      h = a.i(774290),
      i = a.i(955761),
      j = a.i(332562);
    let k = (0, d.forwardRef)(function (
      {
        children: a,
        as: c = "ul",
        axis: k = "y",
        onReorder: m,
        values: n,
        ...o
      },
      p,
    ) {
      let q = (0, h.useConstant)(() => g.motion[c]),
        r = [],
        s = (0, d.useRef)(!1),
        t = (0, d.useRef)(null);
      ((0, e.invariant)(
        !!n,
        "Reorder.Group must be provided a values prop",
        "reorder-values",
      ),
        (0, d.useEffect)(() => {
          s.current = !1;
        }));
      let u = { overflowAnchor: "none", ...o.style };
      return (0, b.jsx)(q, {
        ...o,
        style: u,
        ref: (a) => {
          ((t.current = a),
            "function" == typeof p ? p(a) : p && (p.current = a));
        },
        ignoreStrict: !0,
        children: (0, b.jsx)(f.Provider, {
          value: {
            axis: k,
            groupRef: t,
            registerItem: (a, b) => {
              let c = r.findIndex((b) => a === b.value);
              (-1 !== c
                ? (r[c].layout = b[k])
                : r.push({ value: a, layout: b[k] }),
                r.sort(l));
            },
            updateOrder: (a, b, c) => {
              if (s.current) return;
              let d = (function (a, b, c, d) {
                if (!d) return a;
                let e = a.findIndex((a) => a.value === b);
                if (-1 === e) return a;
                let f = d > 0 ? 1 : -1,
                  g = a[e + f];
                if (!g) return a;
                let h = a[e],
                  k = g.layout,
                  l = (0, i.mixNumber)(k.min, k.max, 0.5);
                return (1 === f && h.layout.max + c > l) ||
                  (-1 === f && h.layout.min + c < l)
                  ? (0, j.moveItem)(a, e, e + f)
                  : a;
              })(r, a, b, c);
              if (r !== d) {
                s.current = !0;
                let a = [...n];
                for (let b = 0; b < d.length; b++)
                  if (r[b].value !== d[b].value) {
                    let c = n.indexOf(r[b].value),
                      e = n.indexOf(d[b].value);
                    -1 !== c && -1 !== e && ([a[c], a[e]] = [a[e], a[c]]);
                    break;
                  }
                m(a);
              }
            },
          },
          children: a,
        }),
      });
    });
    function l(a, b) {
      return a.layout.min - b.layout.min;
    }
    var m = a.i(198852),
      n = a.i(521520),
      o = a.i(901299);
    let p = new Set(["auto", "scroll"]),
      q = new WeakMap(),
      r = new WeakMap(),
      s = null;
    function t(a, b) {
      let c = a?.parentElement;
      for (; c; ) {
        if (
          (function (a, b) {
            let c = getComputedStyle(a),
              d = "x" === b ? c.overflowX : c.overflowY,
              e = a === document.body || a === document.documentElement;
            return p.has(d) || e;
          })(c, b)
        )
          return c;
        c = c.parentElement;
      }
      return null;
    }
    function u(a, b = 0) {
      return (0, m.isMotionValue)(a) ? a : (0, n.useMotionValue)(b);
    }
    let v = (0, d.forwardRef)(function (
      {
        children: a,
        style: c = {},
        value: i,
        as: j = "li",
        onDrag: k,
        onDragEnd: l,
        layout: m = !0,
        ...n
      },
      p,
    ) {
      let v = (0, h.useConstant)(() => g.motion[j]),
        w = (0, d.useContext)(f),
        x = { x: u(c.x), y: u(c.y) },
        y = (0, o.useTransform)([x.x, x.y], ([a, b]) => (a || b ? 1 : "unset"));
      (0, e.invariant)(
        !!w,
        "Reorder.Item must be a child of Reorder.Group",
        "reorder-item-child",
      );
      let { axis: z, registerItem: A, updateOrder: B, groupRef: C } = w;
      return (0, b.jsx)(v, {
        drag: z,
        ...n,
        dragSnapToOrigin: !0,
        style: { ...c, x: x.x, y: x.y, zIndex: y },
        layout: m,
        onDrag: (a, b) => {
          let { velocity: c, point: d } = b;
          (B(i, x[z].get(), c[z]),
            (function (a, b, c, d) {
              if (!a) return;
              s = a;
              let e = t(a, c);
              if (!e) return;
              let { amount: f, edge: g } = (function (a, b, c) {
                let d = b.getBoundingClientRect(),
                  e = "x" === c ? Math.max(0, d.left) : Math.max(0, d.top),
                  f =
                    "x" === c
                      ? Math.min(window.innerWidth, d.right)
                      : Math.min(window.innerHeight, d.bottom),
                  g = a - e,
                  h = f - a;
                if (g < 50) {
                  let a = 1 - g / 50;
                  return { amount: -25 * a * a, edge: "start" };
                }
                if (h < 50) {
                  let a = 1 - h / 50;
                  return { amount: 25 * a * a, edge: "end" };
                }
                return { amount: 0, edge: null };
              })(b - ("x" === c ? window.scrollX : window.scrollY), e, c);
              if (null === g) {
                (r.delete(e), q.delete(e));
                return;
              }
              let h = r.get(e),
                i = e === document.body || e === document.documentElement;
              if (h !== g) {
                if (!(("start" === g && d < 0) || ("end" === g && d > 0)))
                  return;
                r.set(e, g);
                let a =
                  "x" === c
                    ? e.scrollWidth - (i ? window.innerWidth : e.clientWidth)
                    : e.scrollHeight -
                      (i ? window.innerHeight : e.clientHeight);
                q.set(e, a);
              }
              if (f > 0) {
                let a = q.get(e);
                if (
                  ("x" === c
                    ? i
                      ? window.scrollX
                      : e.scrollLeft
                    : i
                      ? window.scrollY
                      : e.scrollTop) >= a
                )
                  return;
              }
              "x" === c
                ? i
                  ? window.scrollBy({ left: f })
                  : (e.scrollLeft += f)
                : i
                  ? window.scrollBy({ top: f })
                  : (e.scrollTop += f);
            })(C.current, d[z], z, c[z]),
            k && k(a, b));
        },
        onDragEnd: (a, b) => {
          if (s) {
            let a = t(s, "y");
            a && (r.delete(a), q.delete(a));
            let b = t(s, "x");
            (b && b !== a && (r.delete(b), q.delete(b)), (s = null));
          }
          l && l(a, b);
        },
        onLayoutMeasure: (a) => {
          A(i, a);
        },
        ref: p,
        ignoreStrict: !0,
        children: a,
      });
    });
    a.s(["Group", 0, k, "Item", 0, v], 449560);
    var w = a.i(449560),
      w = w,
      x = a.i(262036),
      y = a.i(420237);
    a.i(69387);
    var z = a.i(132787),
      A = a.i(601787),
      B = a.i(308311),
      C = a.i(752562),
      D = a.i(141146);
    let E = ["pending", "preparing", "ready"];
    function F({ initialOrders: a }) {
      let [c, e] = (0, d.useState)(a);
      (0, d.useEffect)(() => {
        e(a);
      }, [a]);
      let f = async (b, c) => {
        e((a) => a.map((a) => (a.id === b ? { ...a, status: c } : a)));
        try {
          await (0, A.updateDoc)((0, z.doc)(y.db, "orders", b), { status: c });
        } catch (b) {
          (console.error("Failed to update status:", b), e(a));
        }
      };
      return (0, b.jsx)("div", {
        className:
          "grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]",
        children: E.map((a) => {
          let d = c.filter((b) => b.status === a),
            e = "",
            g = "";
          return (
            "pending" === a && ((e = "Eingegangen"), (g = "bg-peach/30")),
            "preparing" === a &&
              ((e = "In Zubereitung"), (g = "bg-[#E4C0A8]/40")),
            "ready" === a &&
              ((e = "Abholbereit"),
              (g = "bg-terracotta/10 border-terracotta/20")),
            (0, b.jsxs)(
              "div",
              {
                className: `flex flex-col rounded-3xl ${g} border border-peach/50 p-4`,
                children: [
                  (0, b.jsxs)("div", {
                    className: "flex justify-between items-center mb-4 px-2",
                    children: [
                      (0, b.jsx)("h2", {
                        className: "font-calistoga text-xl text-charcoal",
                        children: e,
                      }),
                      (0, b.jsx)("span", {
                        className:
                          "bg-white/60 text-charcoal font-bold px-3 py-1 rounded-full text-sm",
                        children: d.length,
                      }),
                    ],
                  }),
                  (0, b.jsx)("div", {
                    className: "flex-1 overflow-y-auto hide-scrollbar",
                    children: (0, b.jsx)(w.Group, {
                      axis: "y",
                      values: d,
                      onReorder: (a) => {},
                      className: "flex flex-col gap-3 min-h-[50%]",
                      children: (0, b.jsx)(x.AnimatePresence, {
                        children: d.map((c) =>
                          (0, b.jsxs)(
                            w.Item,
                            {
                              value: c,
                              className:
                                "bg-cream rounded-2xl p-4 shadow-sm border border-white relative cursor-grab active:cursor-grabbing",
                              children: [
                                (0, b.jsxs)("div", {
                                  className:
                                    "flex justify-between items-start mb-2",
                                  children: [
                                    (0, b.jsxs)("span", {
                                      className:
                                        "font-black text-charcoal text-sm",
                                      children: [
                                        "#",
                                        c.id.slice(-5).toUpperCase(),
                                      ],
                                    }),
                                    (0, b.jsxs)("div", {
                                      className:
                                        "flex items-center gap-1 text-terracotta font-bold text-sm bg-terracotta/10 px-2 py-0.5 rounded-md",
                                      children: [
                                        (0, b.jsx)(B.Clock, {
                                          className: "w-3 h-3",
                                        }),
                                        c.time,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, b.jsxs)("div", {
                                  className: "mb-3",
                                  children: [
                                    (0, b.jsx)("p", {
                                      className:
                                        "font-bold text-charcoal line-clamp-1",
                                      children: c.name,
                                    }),
                                    c.items.map((a, c) =>
                                      (0, b.jsxs)(
                                        "p",
                                        {
                                          className:
                                            "text-xs text-charcoal/70 font-bold leading-tight mt-1",
                                          children: [a.quantity, "x ", a.name],
                                        },
                                        c,
                                      ),
                                    ),
                                  ],
                                }),
                                (0, b.jsxs)("div", {
                                  className:
                                    "flex justify-between items-center mt-4 pt-3 border-t border-peach/50",
                                  children: [
                                    (0, b.jsxs)("span", {
                                      className:
                                        "font-calistoga text-terracotta",
                                      children: [
                                        c.total.toFixed(2).replace(".", ","),
                                        " €",
                                      ],
                                    }),
                                    (0, b.jsx)("button", {
                                      onClick: () => {
                                        "pending" === c.status
                                          ? f(c.id, "preparing")
                                          : "preparing" === c.status
                                            ? f(c.id, "ready")
                                            : "ready" === c.status &&
                                              f(c.id, "completed");
                                      },
                                      className:
                                        "bg-charcoal text-cream w-8 h-8 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors",
                                      children:
                                        "ready" === a
                                          ? (0, b.jsx)(C.Check, {
                                              className: "w-4 h-4",
                                            })
                                          : (0, b.jsx)(D.ChevronRight, {
                                              className: "w-4 h-4",
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            c.id,
                          ),
                        ),
                      }),
                    }),
                  }),
                ],
              },
              a,
            )
          );
        }),
      });
    }
    a.s(
      [
        "default",
        0,
        function () {
          let { orders: a, loading: d } = (0, c.useOrders)();
          return (0, b.jsxs)("div", {
            className: "p-8 h-full flex flex-col",
            children: [
              (0, b.jsx)("div", {
                className: "mb-6 flex justify-between items-end",
                children: (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("h1", {
                      className: "font-calistoga text-4xl text-charcoal mb-2",
                      children: "KDS Kanban",
                    }),
                    (0, b.jsx)("p", {
                      className: "font-bold text-charcoal/60",
                      children: "Bestellungen verwalten & bearbeiten",
                    }),
                  ],
                }),
              }),
              d
                ? (0, b.jsx)("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: (0, b.jsx)("div", {
                      className:
                        "w-12 h-12 border-4 border-peach border-t-terracotta rounded-full animate-spin",
                    }),
                  })
                : (0, b.jsx)(F, { initialOrders: a }),
            ],
          });
        },
      ],
      77158,
    );
  },
];

//# sourceMappingURL=_0mnb.y_._.js.map
