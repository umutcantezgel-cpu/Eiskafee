module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
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
  710139,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.i(69387);
    var c = a.i(691431),
      d = a.i(601787),
      e = a.i(420237),
      f = a.i(544315);
    function g(a) {
      let b = [],
        c = (a, b) => {
          let c = 0;
          if ("string" == typeof a.price) {
            let b = a.price.match(/[\d,]+/);
            b && (c = parseFloat(b[0].replace(",", ".")));
          } else "number" == typeof a.price && (c = a.price);
          return {
            id: a.name,
            category: b,
            name: a.name,
            desc: a.desc,
            price: c,
            icon: "🍽️",
            color: "peach",
            available: !0,
          };
        };
      return (
        a && f.HF_DATA.menu[a]
          ? (b = f.HF_DATA.menu[a].items.map((b) => c(b, a)))
          : a ||
            Object.entries(f.HF_DATA.menu).forEach(([a, d]) => {
              b.push(...d.items.map((b) => c(b, a)));
            }),
        b
      );
    }
    a.s([
      "useMenu",
      0,
      function (a) {
        let [f, h] = (0, b.useState)([]),
          [i, j] = (0, b.useState)(!0),
          [k, l] = (0, b.useState)(null);
        return (
          (0, b.useEffect)(() => {
            let b = (0, d.query)(
              (0, c.collection)(e.db, "menu_items"),
              (0, d.orderBy)("category", "asc"),
            );
            a &&
              (b = (0, d.query)(
                (0, c.collection)(e.db, "menu_items"),
                (0, d.where)("category", "==", a),
                (0, d.orderBy)("category", "asc"),
              ));
            let f = (0, d.onSnapshot)(
              b,
              (b) => {
                (0 === b.docs.length
                  ? h(g(a))
                  : h(b.docs.map((a) => ({ id: a.id, ...a.data() }))),
                  j(!1),
                  l(null));
              },
              (b) => {
                (console.error("useMenu error:", b), h(g(a)), l(b), j(!1));
              },
            );
            return () => f();
          }, [a]),
          { items: f, loading: i, error: k }
        );
      },
    ]);
  },
  671046,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(677874),
      d = a.i(710139),
      e = a.i(933164),
      f = a.i(262536);
    a.s([
      "default",
      0,
      function () {
        let { settings: a, loading: g } = (0, c.useStoreSettings)(),
          { items: h, loading: i } = (0, d.useMenu)(),
          { orders: j, loading: k } = (0, e.useOrders)(),
          { user: l, role: m } = (0, f.useAuth)();
        return (0, b.jsxs)("div", {
          className: "p-8 max-w-4xl mx-auto space-y-8 bg-cream text-charcoal",
          children: [
            (0, b.jsx)("h1", {
              className: "text-3xl font-calistoga text-terracotta",
              children: "Realtime Hooks Test",
            }),
            (0, b.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, b.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Auth Status",
                }),
                (0, b.jsxs)("p", {
                  children: ["User: ", l ? l.email : "Not logged in"],
                }),
                (0, b.jsxs)("p", {
                  children: [
                    "Role: ",
                    (0, b.jsx)("span", {
                      className: "font-bold text-peach",
                      children: m || "None",
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, b.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Store Settings (Live)",
                }),
                g
                  ? (0, b.jsx)("p", { children: "Loading..." })
                  : (0, b.jsx)("pre", {
                      className: "bg-sand p-4 rounded text-sm overflow-auto",
                      children: JSON.stringify(a, null, 2),
                    }),
                (0, b.jsx)("p", {
                  className: "mt-2 text-sm text-gray-500",
                  children:
                    "Gehe in die Firebase Console ➔ Firestore ➔ `store_settings/general` und ändere `isOnline` oder `currentWaitTime`. Die Änderung sollte hier sofort erscheinen.",
                }),
              ],
            }),
            (0, b.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, b.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Menu Items (Live, first 3)",
                }),
                i
                  ? (0, b.jsx)("p", { children: "Loading..." })
                  : (0, b.jsx)("pre", {
                      className: "bg-sand p-4 rounded text-sm overflow-auto",
                      children: JSON.stringify(h.slice(0, 3), null, 2),
                    }),
              ],
            }),
            (0, b.jsxs)("div", {
              className: "p-6 bg-white rounded-xl shadow-clay",
              children: [
                (0, b.jsx)("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Orders (Live)",
                }),
                k
                  ? (0, b.jsx)("p", { children: "Loading..." })
                  : (0, b.jsx)("pre", {
                      className: "bg-sand p-4 rounded text-sm overflow-auto",
                      children: JSON.stringify(j, null, 2),
                    }),
              ],
            }),
          ],
        });
      },
    ]);
  },
];

//# sourceMappingURL=_0spxeto._.js.map
