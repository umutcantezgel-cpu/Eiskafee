module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
  802110,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("shield", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  414258,
  (a) => {
    "use strict";
    var b = a.i(802110);
    a.s(["Shield", () => b.default]);
  },
  287828,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  162591,
  (a) => {
    "use strict";
    var b = a.i(287828);
    a.s(["Mail", () => b.default]);
  },
  176965,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    a.s(["default", 0, b]);
  },
  474215,
  (a) => {
    "use strict";
    var b = a.i(176965);
    a.s(["X", () => b.default]);
  },
  645766,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]);
    a.s(["default", 0, b]);
  },
  233540,
  (a) => {
    "use strict";
    var b = a.i(645766);
    a.s(["Search", () => b.default]);
  },
  855239,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("user-cog", [
      ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
      ["path", { d: "m14.305 16.53.923-.382", key: "1itpsq" }],
      ["path", { d: "m15.228 13.852-.923-.383", key: "eplpkm" }],
      ["path", { d: "m16.852 12.228-.383-.923", key: "13v3q0" }],
      ["path", { d: "m16.852 17.772-.383.924", key: "1i8mnm" }],
      ["path", { d: "m19.148 12.228.383-.923", key: "1q8j1v" }],
      ["path", { d: "m19.53 18.696-.382-.924", key: "vk1qj3" }],
      ["path", { d: "m20.772 13.852.924-.383", key: "n880s0" }],
      ["path", { d: "m20.772 16.148.924.383", key: "1g6xey" }],
      ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ]);
    a.s(["default", 0, b]);
  },
  960237,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131);
    a.i(69387);
    var d = a.i(691431),
      e = a.i(601787),
      f = a.i(132787),
      g = a.i(420237),
      h = a.i(233540),
      i = a.i(855239),
      i = i,
      j = a.i(162591),
      k = a.i(474215),
      l = a.i(414258),
      m = a.i(141146),
      n = a.i(941035);
    a.s(
      [
        "default",
        0,
        function () {
          let [a, o] = (0, c.useState)("users"),
            [p, q] = (0, c.useState)([]),
            [r, s] = (0, c.useState)([]),
            [t, u] = (0, c.useState)(!0),
            [v, w] = (0, c.useState)(""),
            [x, y] = (0, c.useState)(null),
            [z, A] = (0, c.useState)([]),
            [B, C] = (0, c.useState)(0),
            [D, E] = (0, c.useState)(0),
            { addToast: F } = (0, n.useToastStore)();
          (0, c.useEffect)(() => {
            (G(), H());
          }, []);
          let G = async () => {
              try {
                let a = await (0, e.getDocs)((0, d.collection)(g.db, "users"));
                q(a.docs.map((a) => ({ id: a.id, ...a.data() })));
              } catch (a) {
                console.error(a);
              } finally {
                u(!1);
              }
            },
            H = async () => {
              try {
                let a = (0, e.query)(
                    (0, d.collection)(g.db, "support_messages"),
                    (0, e.orderBy)("createdAt", "desc"),
                  ),
                  b = await (0, e.getDocs)(a);
                s(b.docs.map((a) => ({ id: a.id, ...a.data() })));
              } catch (a) {
                console.error(a);
              }
            },
            I = async (a) => {
              y(a);
              let b = (0, e.query)((0, d.collection)(g.db, "orders"));
              A(
                (await (0, e.getDocs)(b)).docs
                  .map((a) => ({ id: a.id, ...a.data() }))
                  .filter(
                    (b) => b.userId === a.id || b.customerEmail === a.email,
                  ),
              );
              let c = (0, f.doc)(g.db, "loyalty_points", a.id),
                h = await (0, e.getDoc)(c);
              h.exists() ? C(h.data().balance || 0) : C(0);
            },
            J = async (a) => {
              if (
                x &&
                confirm(
                  `Wirklich die Rolle von ${x.name || x.email} auf ${a.toUpperCase()} \xe4ndern?`,
                )
              )
                try {
                  (await (0, e.updateDoc)((0, f.doc)(g.db, "users", x.id), {
                    role: a,
                  }),
                    q(p.map((b) => (b.id === x.id ? { ...b, role: a } : b))),
                    y({ ...x, role: a }),
                    F({ title: "Rolle aktualisiert", type: "success" }));
                } catch (a) {
                  (console.error(a), F({ title: "Fehler", type: "error" }));
                }
            },
            K = async () => {
              if (x && !(D <= 0))
                try {
                  let a = B + D;
                  await (0, e.setDoc)(
                    (0, f.doc)(g.db, "loyalty_points", x.id),
                    { balance: a },
                    { merge: !0 },
                  );
                  let b = (0, d.collection)(
                    g.db,
                    "loyalty_points",
                    x.id,
                    "history",
                  );
                  (await (0, e.setDoc)((0, f.doc)(b), {
                    amount: D,
                    description: "Manuelle Gutschrift (Admin)",
                    createdAt: new Date().toISOString(),
                  }),
                    C(a),
                    E(0),
                    F({ title: "Coins gutgeschrieben", type: "success" }));
                } catch (a) {
                  (console.error(a), F({ title: "Fehler", type: "error" }));
                }
            },
            L = p.filter(
              (a) =>
                a.name?.toLowerCase().includes(v.toLowerCase()) ||
                a.email?.toLowerCase().includes(v.toLowerCase()),
            );
          return (0, b.jsxs)("div", {
            className: "p-8 max-w-6xl mx-auto flex gap-6",
            children: [
              (0, b.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, b.jsxs)("div", {
                    className:
                      "mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                    children: [
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("h1", {
                            className:
                              "font-calistoga text-4xl text-charcoal mb-2",
                            children: "Nutzer & Support",
                          }),
                          (0, b.jsx)("p", {
                            className: "font-bold text-charcoal/60",
                            children:
                              "Kundenverwaltung, Rechte und Nachrichten",
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, b.jsxs)("button", {
                            onClick: () => o("users"),
                            className: `px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${"users" === a ? "bg-terracotta text-cream" : "bg-cream text-charcoal border border-peach"}`,
                            children: [
                              (0, b.jsx)(i.default, { size: 18 }),
                              " Nutzer",
                            ],
                          }),
                          (0, b.jsxs)("button", {
                            onClick: () => o("support"),
                            className: `px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${"support" === a ? "bg-terracotta text-cream" : "bg-cream text-charcoal border border-peach"}`,
                            children: [
                              (0, b.jsx)(j.Mail, { size: 18 }),
                              " Support Inbox",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t
                    ? (0, b.jsxs)("div", {
                        className: "animate-pulse flex flex-col gap-4",
                        children: [
                          (0, b.jsx)("div", {
                            className: "h-20 bg-cream rounded-2xl",
                          }),
                          (0, b.jsx)("div", {
                            className: "h-20 bg-cream rounded-2xl",
                          }),
                        ],
                      })
                    : "users" === a
                      ? (0, b.jsxs)("div", {
                          className:
                            "bg-cream rounded-3xl overflow-hidden shadow-sm border border-peach",
                          children: [
                            (0, b.jsx)("div", {
                              className: "p-4 border-b border-peach",
                              children: (0, b.jsxs)("div", {
                                className: "relative w-full max-w-md",
                                children: [
                                  (0, b.jsx)(h.Search, {
                                    className:
                                      "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40",
                                  }),
                                  (0, b.jsx)("input", {
                                    type: "text",
                                    placeholder:
                                      "Suchen nach Name oder E-Mail...",
                                    value: v,
                                    onChange: (a) => w(a.target.value),
                                    className:
                                      "w-full pl-12 pr-4 py-2 rounded-full bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                                  }),
                                ],
                              }),
                            }),
                            (0, b.jsxs)("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                (0, b.jsx)("thead", {
                                  children: (0, b.jsxs)("tr", {
                                    className:
                                      "border-b border-peach bg-sand/50",
                                    children: [
                                      (0, b.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta",
                                        children: "Name",
                                      }),
                                      (0, b.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta",
                                        children: "E-Mail",
                                      }),
                                      (0, b.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta text-center",
                                        children: "Rolle",
                                      }),
                                      (0, b.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta text-right",
                                        children: "Details",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)("tbody", {
                                  children: L.map((a) =>
                                    (0, b.jsxs)(
                                      "tr",
                                      {
                                        className:
                                          "border-b border-peach/50 hover:bg-peach/10 transition-colors",
                                        children: [
                                          (0, b.jsx)("td", {
                                            className:
                                              "py-3 px-6 font-bold text-charcoal",
                                            children: a.name || "-",
                                          }),
                                          (0, b.jsx)("td", {
                                            className:
                                              "py-3 px-6 text-charcoal/80 text-sm",
                                            children: a.email || "-",
                                          }),
                                          (0, b.jsx)("td", {
                                            className: "py-3 px-6 text-center",
                                            children: (0, b.jsx)("span", {
                                              className: `px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${"admin" === a.role ? "bg-terracotta text-cream" : "bg-mint/20 text-mint"}`,
                                              children: a.role,
                                            }),
                                          }),
                                          (0, b.jsx)("td", {
                                            className: "py-3 px-6 text-right",
                                            children: (0, b.jsx)("button", {
                                              onClick: () => I(a),
                                              className:
                                                "p-2 text-terracotta bg-peach/30 rounded-full hover:bg-peach/80 transition-colors",
                                              children: (0, b.jsx)(
                                                m.ChevronRight,
                                                { size: 16 },
                                              ),
                                            }),
                                          }),
                                        ],
                                      },
                                      a.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, b.jsx)("div", {
                          className: "space-y-4",
                          children:
                            0 === r.length
                              ? (0, b.jsx)("div", {
                                  className:
                                    "text-center p-8 bg-cream rounded-3xl border border-peach text-charcoal/60 font-bold",
                                  children: "Keine Support-Nachrichten",
                                })
                              : r.map((a) =>
                                  (0, b.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                                      children: [
                                        (0, b.jsxs)("div", {
                                          className:
                                            "flex justify-between items-start mb-2",
                                          children: [
                                            (0, b.jsxs)("div", {
                                              children: [
                                                (0, b.jsx)("div", {
                                                  className:
                                                    "font-bold text-charcoal",
                                                  children: a.name,
                                                }),
                                                (0, b.jsx)("div", {
                                                  className:
                                                    "text-sm text-terracotta",
                                                  children: a.email,
                                                }),
                                              ],
                                            }),
                                            (0, b.jsx)("div", {
                                              className:
                                                "text-xs font-bold text-charcoal/40",
                                              children: a.createdAt
                                                ? new Date(
                                                    a.createdAt,
                                                  ).toLocaleDateString()
                                                : "",
                                            }),
                                          ],
                                        }),
                                        (0, b.jsx)("p", {
                                          className:
                                            "mt-4 text-charcoal/80 text-sm leading-relaxed whitespace-pre-wrap",
                                          children: a.message,
                                        }),
                                      ],
                                    },
                                    a.id,
                                  ),
                                ),
                        }),
                ],
              }),
              x &&
                (0, b.jsxs)("div", {
                  className:
                    "w-96 bg-cream rounded-3xl border border-peach shadow-sm flex flex-col h-[calc(100vh-8rem)] sticky top-8",
                  children: [
                    (0, b.jsxs)("div", {
                      className:
                        "p-6 border-b border-peach flex justify-between items-start",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "font-calistoga text-2xl text-charcoal line-clamp-1",
                              children: x.name || "Ohne Name",
                            }),
                            (0, b.jsx)("div", {
                              className: "text-sm text-charcoal/60 font-bold",
                              children: x.email,
                            }),
                          ],
                        }),
                        (0, b.jsx)("button", {
                          onClick: () => y(null),
                          className:
                            "p-1 bg-peach/30 text-terracotta rounded-full",
                          children: (0, b.jsx)(k.X, { size: 18 }),
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "p-6 flex-1 overflow-y-auto space-y-8",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("h4", {
                              className:
                                "font-nunito text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3",
                              children: "Rechteverwaltung",
                            }),
                            (0, b.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, b.jsx)("button", {
                                  onClick: () => J("customer"),
                                  disabled: "customer" === x.role,
                                  className: `flex-1 py-2 rounded-xl font-bold text-sm border-2 ${"customer" === x.role ? "border-mint text-mint bg-mint/10" : "border-peach text-charcoal/60"}`,
                                  children: "Kunde",
                                }),
                                (0, b.jsxs)("button", {
                                  onClick: () => J("admin"),
                                  disabled: "admin" === x.role,
                                  className: `flex-1 flex justify-center items-center gap-1 py-2 rounded-xl font-bold text-sm border-2 ${"admin" === x.role ? "border-terracotta text-terracotta bg-terracotta/10" : "border-peach text-charcoal/60"}`,
                                  children: [
                                    (0, b.jsx)(l.Shield, { size: 16 }),
                                    " Admin",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("h4", {
                              className:
                                "font-nunito text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3",
                              children: "Loyalty Coins",
                            }),
                            (0, b.jsxs)("div", {
                              className:
                                "bg-sand rounded-2xl p-4 flex justify-between items-center mb-3",
                              children: [
                                (0, b.jsx)("span", {
                                  className: "font-bold text-charcoal",
                                  children: "Guthaben:",
                                }),
                                (0, b.jsx)("span", {
                                  className:
                                    "font-calistoga text-2xl text-terracotta",
                                  children: B,
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, b.jsx)("input", {
                                  type: "number",
                                  value: D || "",
                                  onChange: (a) =>
                                    E(parseInt(a.target.value) || 0),
                                  placeholder: "Betrag",
                                  className:
                                    "w-full bg-sand px-3 py-2 rounded-xl font-bold outline-none",
                                }),
                                (0, b.jsx)("button", {
                                  onClick: K,
                                  className:
                                    "bg-terracotta text-cream px-4 rounded-xl font-bold text-sm",
                                  children: "Gutschreiben",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsxs)("h4", {
                              className:
                                "font-nunito text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3",
                              children: ["Bestellhistorie (", z.length, ")"],
                            }),
                            (0, b.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                z
                                  .slice(0, 5)
                                  .map((a) =>
                                    (0, b.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "bg-sand p-3 rounded-xl flex justify-between items-center",
                                        children: [
                                          (0, b.jsxs)("div", {
                                            children: [
                                              (0, b.jsx)("div", {
                                                className:
                                                  "font-bold text-charcoal text-sm",
                                                children:
                                                  a.orderNumber ||
                                                  "Online Order",
                                              }),
                                              (0, b.jsx)("div", {
                                                className:
                                                  "text-[10px] text-charcoal/60 font-bold",
                                                children: new Date(
                                                  a.createdAt,
                                                ).toLocaleDateString(),
                                              }),
                                            ],
                                          }),
                                          (0, b.jsxs)("div", {
                                            className:
                                              "font-bold text-terracotta",
                                            children: [
                                              a.total?.toFixed(2),
                                              " €",
                                            ],
                                          }),
                                        ],
                                      },
                                      a.id,
                                    ),
                                  ),
                                0 === z.length &&
                                  (0, b.jsx)("div", {
                                    className:
                                      "text-sm text-charcoal/50 font-bold italic",
                                    children: "Keine Bestellungen",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
      ],
      960237,
    );
  },
];

//# sourceMappingURL=_0tm81u7._.js.map
