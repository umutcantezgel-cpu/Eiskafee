(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  224840,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var s = e.i(746939),
      r = e.i(263802),
      i = e.i(959141),
      a = e.i(230129);
    e.s([
      "useOrders",
      0,
      function () {
        let [e, l] = (0, t.useState)([]),
          [n, o] = (0, t.useState)(!0),
          [c, d] = (0, t.useState)(null),
          { user: u, role: h, loading: m } = (0, a.useAuth)();
        return (
          (0, t.useEffect)(() => {
            if (m) return;
            if (!u) {
              (l([]), o(!1));
              return;
            }
            let e = (0, r.query)(
              (0, s.collection)(i.db, "orders"),
              (0, r.orderBy)("createdAt", "desc"),
            );
            "admin" !== h &&
              (e = (0, r.query)(
                (0, s.collection)(i.db, "orders"),
                (0, r.where)("userId", "==", u.uid),
                (0, r.orderBy)("createdAt", "desc"),
              ));
            let t = (0, r.onSnapshot)(
              e,
              (e) => {
                (l(
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
          }, [u, h, m]),
          { orders: e, loading: n, error: c }
        );
      },
    ]);
  },
  805109,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var s = e.i(746939),
      r = e.i(263802),
      i = e.i(959141),
      a = e.i(816148);
    function l(e) {
      let t = [],
        s = (e, t) => {
          let s = 0;
          if ("string" == typeof e.price) {
            let t = e.price.match(/[\d,]+/);
            t && (s = parseFloat(t[0].replace(",", ".")));
          } else "number" == typeof e.price && (s = e.price);
          return {
            id: e.name,
            category: t,
            name: e.name,
            desc: e.desc,
            price: s,
            icon: "🍽️",
            color: "peach",
            available: !0,
          };
        };
      return (
        e && a.HF_DATA.menu[e]
          ? (t = a.HF_DATA.menu[e].items.map((t) => s(t, e)))
          : e ||
            Object.entries(a.HF_DATA.menu).forEach(([e, r]) => {
              t.push(...r.items.map((t) => s(t, e)));
            }),
        t
      );
    }
    e.s([
      "useMenu",
      0,
      function (e) {
        let [a, n] = (0, t.useState)([]),
          [o, c] = (0, t.useState)(!0),
          [d, u] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            let t = (0, r.query)(
              (0, s.collection)(i.db, "menu_items"),
              (0, r.orderBy)("category", "asc"),
            );
            e &&
              (t = (0, r.query)(
                (0, s.collection)(i.db, "menu_items"),
                (0, r.where)("category", "==", e),
                (0, r.orderBy)("category", "asc"),
              ));
            let a = (0, r.onSnapshot)(
              t,
              (t) => {
                (0 === t.docs.length
                  ? n(l(e))
                  : n(t.docs.map((e) => ({ id: e.id, ...e.data() }))),
                  c(!1),
                  u(null));
              },
              (t) => {
                (console.error("useMenu error:", t), n(l(e)), u(t), c(!1));
              },
            );
            return () => a();
          }, [e]),
          { items: a, loading: o, error: d }
        );
      },
    ]);
  },
  239014,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(153287),
      r = e.i(805109),
      i = e.i(224840),
      a = e.i(230129);
    e.s([
      "default",
      0,
      function () {
        let { settings: e, loading: l } = (0, s.useStoreSettings)(),
          { items: n, loading: o } = (0, r.useMenu)(),
          { orders: c, loading: d } = (0, i.useOrders)(),
          { user: u, role: h } = (0, a.useAuth)();
        return (0, t.jsxs)("div", {
          className: "p-8 max-w-4xl mx-auto space-y-8 bg-cream text-charcoal",
          children: [
            (0, t.jsx)("h1", {
              className: "text-3xl font-calistoga text-terracotta",
              children: "Realtime Hooks Test",
            }),
            (0, t.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, t.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Auth Status",
                }),
                (0, t.jsxs)("p", {
                  children: ["User: ", u ? u.email : "Not logged in"],
                }),
                (0, t.jsxs)("p", {
                  children: [
                    "Role: ",
                    (0, t.jsx)("span", {
                      className: "font-bold text-peach",
                      children: h || "None",
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, t.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Store Settings (Live)",
                }),
                l
                  ? (0, t.jsx)("p", { children: "Loading..." })
                  : (0, t.jsx)("pre", {
                      className: "bg-sand p-4 rounded text-sm overflow-auto",
                      children: JSON.stringify(e, null, 2),
                    }),
                (0, t.jsx)("p", {
                  className: "mt-2 text-sm text-gray-500",
                  children:
                    "Gehe in die Firebase Console ➔ Firestore ➔ `store_settings/general` und ändere `isOnline` oder `currentWaitTime`. Die Änderung sollte hier sofort erscheinen.",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, t.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Menu Items (Live, first 3)",
                }),
                o
                  ? (0, t.jsx)("p", { children: "Loading..." })
                  : (0, t.jsx)("pre", {
                      className: "bg-sand p-4 rounded text-sm overflow-auto",
                      children: JSON.stringify(n.slice(0, 3), null, 2),
                    }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, t.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Orders (Live)",
                }),
                d
                  ? (0, t.jsx)("p", { children: "Loading..." })
                  : (0, t.jsx)("pre", {
                      className: "bg-sand p-4 rounded text-sm overflow-auto",
                      children: JSON.stringify(c, null, 2),
                    }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
