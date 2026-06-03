(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
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
  224840,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var r = e.i(746939),
      l = e.i(263802),
      n = e.i(959141),
      a = e.i(230129);
    e.s([
      "useOrders",
      0,
      function () {
        let [e, i] = (0, t.useState)([]),
          [s, o] = (0, t.useState)(!0),
          [c, d] = (0, t.useState)(null),
          { user: u, role: m, loading: f } = (0, a.useAuth)();
        return (
          (0, t.useEffect)(() => {
            if (f) return;
            if (!u) {
              (i([]), o(!1));
              return;
            }
            let e = (0, l.query)(
              (0, r.collection)(n.db, "orders"),
              (0, l.orderBy)("createdAt", "desc"),
            );
            "admin" !== m &&
              (e = (0, l.query)(
                (0, r.collection)(n.db, "orders"),
                (0, l.where)("userId", "==", u.uid),
                (0, l.orderBy)("createdAt", "desc"),
              ));
            let t = (0, l.onSnapshot)(
              e,
              (e) => {
                (i(
                  e.docs.map((e) => ({
                    id: e.id,
                    ...e.data(),
                    createdAt: e.data().createdAt?.toDate() || new Date(),
                  })),
                ),
                  o(!1),
                  d(null));
              },
              (e) => {
                (console.error("useOrders error:", e), d(e), o(!1));
              },
            );
            return () => t();
          }, [u, m, f]),
          { orders: e, loading: s, error: c }
        );
      },
    ]);
  },
  413281,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ]);
    e.s(["default", 0, t]);
  },
  474544,
  (e) => {
    "use strict";
    var t = e.i(413281);
    e.s(["Clock", () => t.default]);
  },
  821304,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(224840),
      l = e.i(271645);
    (e.s([], 842959), e.i(842959));
    var n = e.i(965566);
    let a = (0, l.createContext)(null);
    var i = e.i(846932),
      s = e.i(947414),
      o = e.i(100706),
      c = e.i(133887);
    let d = (0, l.forwardRef)(function (
      {
        children: e,
        as: r = "ul",
        axis: d = "y",
        onReorder: m,
        values: f,
        ...x
      },
      h,
    ) {
      let p = (0, s.useConstant)(() => i.motion[r]),
        g = [],
        b = (0, l.useRef)(!1),
        y = (0, l.useRef)(null);
      ((0, n.invariant)(
        !!f,
        "Reorder.Group must be provided a values prop",
        "reorder-values",
      ),
        (0, l.useEffect)(() => {
          b.current = !1;
        }));
      let v = { overflowAnchor: "none", ...x.style };
      return (0, t.jsx)(p, {
        ...x,
        style: v,
        ref: (e) => {
          ((y.current = e),
            "function" == typeof h ? h(e) : h && (h.current = e));
        },
        ignoreStrict: !0,
        children: (0, t.jsx)(a.Provider, {
          value: {
            axis: d,
            groupRef: y,
            registerItem: (e, t) => {
              let r = g.findIndex((t) => e === t.value);
              (-1 !== r
                ? (g[r].layout = t[d])
                : g.push({ value: e, layout: t[d] }),
                g.sort(u));
            },
            updateOrder: (e, t, r) => {
              if (b.current) return;
              let l = (function (e, t, r, l) {
                if (!l) return e;
                let n = e.findIndex((e) => e.value === t);
                if (-1 === n) return e;
                let a = l > 0 ? 1 : -1,
                  i = e[n + a];
                if (!i) return e;
                let s = e[n],
                  d = i.layout,
                  u = (0, o.mixNumber)(d.min, d.max, 0.5);
                return (1 === a && s.layout.max + r > u) ||
                  (-1 === a && s.layout.min + r < u)
                  ? (0, c.moveItem)(e, n, n + a)
                  : e;
              })(g, e, t, r);
              if (g !== l) {
                b.current = !0;
                let e = [...f];
                for (let t = 0; t < l.length; t++)
                  if (g[t].value !== l[t].value) {
                    let r = f.indexOf(g[t].value),
                      n = f.indexOf(l[t].value);
                    -1 !== r && -1 !== n && ([e[r], e[n]] = [e[n], e[r]]);
                    break;
                  }
                m(e);
              }
            },
          },
          children: e,
        }),
      });
    });
    function u(e, t) {
      return e.layout.min - t.layout.min;
    }
    var m = e.i(83411),
      f = e.i(887652),
      x = e.i(895420);
    let h = new Set(["auto", "scroll"]),
      p = new WeakMap(),
      g = new WeakMap(),
      b = null;
    function y(e, t) {
      let r = e?.parentElement;
      for (; r; ) {
        if (
          (function (e, t) {
            let r = getComputedStyle(e),
              l = "x" === t ? r.overflowX : r.overflowY,
              n = e === document.body || e === document.documentElement;
            return h.has(l) || n;
          })(r, t)
        )
          return r;
        r = r.parentElement;
      }
      return null;
    }
    function v(e, t = 0) {
      return (0, m.isMotionValue)(e) ? e : (0, f.useMotionValue)(t);
    }
    let w = (0, l.forwardRef)(function (
      {
        children: e,
        style: r = {},
        value: o,
        as: c = "li",
        onDrag: d,
        onDragEnd: u,
        layout: m = !0,
        ...f
      },
      h,
    ) {
      let w = (0, s.useConstant)(() => i.motion[c]),
        j = (0, l.useContext)(a),
        N = { x: v(r.x), y: v(r.y) },
        C = (0, x.useTransform)([N.x, N.y], ([e, t]) => (e || t ? 1 : "unset"));
      (0, n.invariant)(
        !!j,
        "Reorder.Item must be a child of Reorder.Group",
        "reorder-item-child",
      );
      let { axis: k, registerItem: R, updateOrder: S, groupRef: A } = j;
      return (0, t.jsx)(w, {
        drag: k,
        ...f,
        dragSnapToOrigin: !0,
        style: { ...r, x: N.x, y: N.y, zIndex: C },
        layout: m,
        onDrag: (e, t) => {
          let { velocity: r, point: l } = t;
          (S(o, N[k].get(), r[k]),
            (function (e, t, r, l) {
              if (!e) return;
              b = e;
              let n = y(e, r);
              if (!n) return;
              let { amount: a, edge: i } = (function (e, t, r) {
                let l = t.getBoundingClientRect(),
                  n = "x" === r ? Math.max(0, l.left) : Math.max(0, l.top),
                  a =
                    "x" === r
                      ? Math.min(window.innerWidth, l.right)
                      : Math.min(window.innerHeight, l.bottom),
                  i = e - n,
                  s = a - e;
                if (i < 50) {
                  let e = 1 - i / 50;
                  return { amount: -25 * e * e, edge: "start" };
                }
                if (s < 50) {
                  let e = 1 - s / 50;
                  return { amount: 25 * e * e, edge: "end" };
                }
                return { amount: 0, edge: null };
              })(t - ("x" === r ? window.scrollX : window.scrollY), n, r);
              if (null === i) {
                (g.delete(n), p.delete(n));
                return;
              }
              let s = g.get(n),
                o = n === document.body || n === document.documentElement;
              if (s !== i) {
                if (!(("start" === i && l < 0) || ("end" === i && l > 0)))
                  return;
                g.set(n, i);
                let e =
                  "x" === r
                    ? n.scrollWidth - (o ? window.innerWidth : n.clientWidth)
                    : n.scrollHeight -
                      (o ? window.innerHeight : n.clientHeight);
                p.set(n, e);
              }
              if (a > 0) {
                let e = p.get(n);
                if (
                  ("x" === r
                    ? o
                      ? window.scrollX
                      : n.scrollLeft
                    : o
                      ? window.scrollY
                      : n.scrollTop) >= e
                )
                  return;
              }
              "x" === r
                ? o
                  ? window.scrollBy({ left: a })
                  : (n.scrollLeft += a)
                : o
                  ? window.scrollBy({ top: a })
                  : (n.scrollTop += a);
            })(A.current, l[k], k, r[k]),
            d && d(e, t));
        },
        onDragEnd: (e, t) => {
          if (b) {
            let e = y(b, "y");
            e && (g.delete(e), p.delete(e));
            let t = y(b, "x");
            (t && t !== e && (g.delete(t), p.delete(t)), (b = null));
          }
          u && u(e, t);
        },
        onLayoutMeasure: (e) => {
          R(o, e);
        },
        ref: h,
        ignoreStrict: !0,
        children: e,
      });
    });
    e.s(["Group", 0, d, "Item", 0, w], 540025);
    var j = e.i(540025),
      j = j,
      N = e.i(88653),
      C = e.i(959141);
    e.i(436180);
    var k = e.i(386205),
      R = e.i(263802),
      S = e.i(474544),
      A = e.i(689664),
      M = e.i(867927);
    let O = ["pending", "preparing", "ready"];
    function E({ initialOrders: e }) {
      let [r, n] = (0, l.useState)(e);
      (0, l.useEffect)(() => {
        n(e);
      }, [e]);
      let a = async (t, r) => {
        n((e) => e.map((e) => (e.id === t ? { ...e, status: r } : e)));
        try {
          await (0, R.updateDoc)((0, k.doc)(C.db, "orders", t), { status: r });
        } catch (t) {
          (console.error("Failed to update status:", t), n(e));
        }
      };
      return (0, t.jsx)("div", {
        className:
          "grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]",
        children: O.map((e) => {
          let l = r.filter((t) => t.status === e),
            n = "",
            i = "";
          return (
            "pending" === e && ((n = "Eingegangen"), (i = "bg-peach/30")),
            "preparing" === e &&
              ((n = "In Zubereitung"), (i = "bg-[#E4C0A8]/40")),
            "ready" === e &&
              ((n = "Abholbereit"),
              (i = "bg-terracotta/10 border-terracotta/20")),
            (0, t.jsxs)(
              "div",
              {
                className: `flex flex-col rounded-3xl ${i} border border-peach/50 p-4`,
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex justify-between items-center mb-4 px-2",
                    children: [
                      (0, t.jsx)("h2", {
                        className: "font-calistoga text-xl text-charcoal",
                        children: n,
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "bg-white/60 text-charcoal font-bold px-3 py-1 rounded-full text-sm",
                        children: l.length,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "flex-1 overflow-y-auto hide-scrollbar",
                    children: (0, t.jsx)(j.Group, {
                      axis: "y",
                      values: l,
                      onReorder: (e) => {},
                      className: "flex flex-col gap-3 min-h-[50%]",
                      children: (0, t.jsx)(N.AnimatePresence, {
                        children: l.map((r) =>
                          (0, t.jsxs)(
                            j.Item,
                            {
                              value: r,
                              className:
                                "bg-cream rounded-2xl p-4 shadow-sm border border-white relative cursor-grab active:cursor-grabbing",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex justify-between items-start mb-2",
                                  children: [
                                    (0, t.jsxs)("span", {
                                      className:
                                        "font-black text-charcoal text-sm",
                                      children: [
                                        "#",
                                        r.id.slice(-5).toUpperCase(),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex items-center gap-1 text-terracotta font-bold text-sm bg-terracotta/10 px-2 py-0.5 rounded-md",
                                      children: [
                                        (0, t.jsx)(S.Clock, {
                                          className: "w-3 h-3",
                                        }),
                                        r.time,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "mb-3",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "font-bold text-charcoal line-clamp-1",
                                      children: r.name,
                                    }),
                                    r.items.map((e, r) =>
                                      (0, t.jsxs)(
                                        "p",
                                        {
                                          className:
                                            "text-xs text-charcoal/70 font-bold leading-tight mt-1",
                                          children: [e.quantity, "x ", e.name],
                                        },
                                        r,
                                      ),
                                    ),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex justify-between items-center mt-4 pt-3 border-t border-peach/50",
                                  children: [
                                    (0, t.jsxs)("span", {
                                      className:
                                        "font-calistoga text-terracotta",
                                      children: [
                                        r.total.toFixed(2).replace(".", ","),
                                        " €",
                                      ],
                                    }),
                                    (0, t.jsx)("button", {
                                      onClick: () => {
                                        "pending" === r.status
                                          ? a(r.id, "preparing")
                                          : "preparing" === r.status
                                            ? a(r.id, "ready")
                                            : "ready" === r.status &&
                                              a(r.id, "completed");
                                      },
                                      className:
                                        "bg-charcoal text-cream w-8 h-8 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors",
                                      children:
                                        "ready" === e
                                          ? (0, t.jsx)(A.Check, {
                                              className: "w-4 h-4",
                                            })
                                          : (0, t.jsx)(M.ChevronRight, {
                                              className: "w-4 h-4",
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            r.id,
                          ),
                        ),
                      }),
                    }),
                  }),
                ],
              },
              e,
            )
          );
        }),
      });
    }
    e.s(
      [
        "default",
        0,
        function () {
          let { orders: e, loading: l } = (0, r.useOrders)();
          return (0, t.jsxs)("div", {
            className: "p-8 h-full flex flex-col",
            children: [
              (0, t.jsx)("div", {
                className: "mb-6 flex justify-between items-end",
                children: (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h1", {
                      className: "font-calistoga text-4xl text-charcoal mb-2",
                      children: "KDS Kanban",
                    }),
                    (0, t.jsx)("p", {
                      className: "font-bold text-charcoal/60",
                      children: "Bestellungen verwalten & bearbeiten",
                    }),
                  ],
                }),
              }),
              l
                ? (0, t.jsx)("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: (0, t.jsx)("div", {
                      className:
                        "w-12 h-12 border-4 border-peach border-t-terracotta rounded-full animate-spin",
                    }),
                  })
                : (0, t.jsx)(E, { initialOrders: e }),
            ],
          });
        },
      ],
      821304,
    );
  },
]);
