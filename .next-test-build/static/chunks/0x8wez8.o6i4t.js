(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  203029,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("shield", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  982954,
  (e) => {
    "use strict";
    var t = e.i(203029);
    e.s(["Shield", () => t.default]);
  },
  814387,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    e.s(["default", 0, t]);
  },
  263676,
  (e) => {
    "use strict";
    var t = e.i(814387);
    e.s(["X", () => t.default]);
  },
  290135,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  96315,
  (e) => {
    "use strict";
    var t = e.i(290135);
    e.s(["Mail", () => t.default]);
  },
  630299,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]);
    e.s(["default", 0, t]);
  },
  687633,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("user-cog", [
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
    e.s(["default", 0, t]);
  },
  566595,
  (e) => {
    "use strict";
    var t = e.i(630299);
    e.s(["Search", () => t.default]);
  },
  799274,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645);
    e.i(436180);
    var s = e.i(746939),
      l = e.i(263802),
      r = e.i(386205),
      c = e.i(959141),
      d = e.i(566595),
      i = e.i(687633),
      i = i,
      o = e.i(96315),
      n = e.i(263676),
      x = e.i(982954),
      h = e.i(867927),
      m = e.i(74909);
    e.s(
      [
        "default",
        0,
        function () {
          let [e, p] = (0, a.useState)("users"),
            [u, b] = (0, a.useState)([]),
            [f, j] = (0, a.useState)([]),
            [y, g] = (0, a.useState)(!0),
            [N, v] = (0, a.useState)(""),
            [k, w] = (0, a.useState)(null),
            [S, C] = (0, a.useState)([]),
            [D, z] = (0, a.useState)(0),
            [A, q] = (0, a.useState)(0),
            { addToast: L } = (0, m.useToastStore)();
          (0, a.useEffect)(() => {
            (M(), R());
          }, []);
          let M = async () => {
              try {
                let e = await (0, l.getDocs)((0, s.collection)(c.db, "users"));
                b(e.docs.map((e) => ({ id: e.id, ...e.data() })));
              } catch (e) {
                console.error(e);
              } finally {
                g(!1);
              }
            },
            R = async () => {
              try {
                let e = (0, l.query)(
                    (0, s.collection)(c.db, "support_messages"),
                    (0, l.orderBy)("createdAt", "desc"),
                  ),
                  t = await (0, l.getDocs)(e);
                j(t.docs.map((e) => ({ id: e.id, ...e.data() })));
              } catch (e) {
                console.error(e);
              }
            },
            O = async (e) => {
              w(e);
              let t = (0, l.query)((0, s.collection)(c.db, "orders"));
              C(
                (await (0, l.getDocs)(t)).docs
                  .map((e) => ({ id: e.id, ...e.data() }))
                  .filter(
                    (t) => t.userId === e.id || t.customerEmail === e.email,
                  ),
              );
              let a = (0, r.doc)(c.db, "loyalty_points", e.id),
                d = await (0, l.getDoc)(a);
              d.exists() ? z(d.data().balance || 0) : z(0);
            },
            $ = async (e) => {
              if (
                k &&
                confirm(
                  `Wirklich die Rolle von ${k.name || k.email} auf ${e.toUpperCase()} \xe4ndern?`,
                )
              )
                try {
                  (await (0, l.updateDoc)((0, r.doc)(c.db, "users", k.id), {
                    role: e,
                  }),
                    b(u.map((t) => (t.id === k.id ? { ...t, role: e } : t))),
                    w({ ...k, role: e }),
                    L({ title: "Rolle aktualisiert", type: "success" }));
                } catch (e) {
                  (console.error(e), L({ title: "Fehler", type: "error" }));
                }
            },
            B = async () => {
              if (k && !(A <= 0))
                try {
                  let e = D + A;
                  await (0, l.setDoc)(
                    (0, r.doc)(c.db, "loyalty_points", k.id),
                    { balance: e },
                    { merge: !0 },
                  );
                  let t = (0, s.collection)(
                    c.db,
                    "loyalty_points",
                    k.id,
                    "history",
                  );
                  (await (0, l.setDoc)((0, r.doc)(t), {
                    amount: A,
                    description: "Manuelle Gutschrift (Admin)",
                    createdAt: new Date().toISOString(),
                  }),
                    z(e),
                    q(0),
                    L({ title: "Coins gutgeschrieben", type: "success" }));
                } catch (e) {
                  (console.error(e), L({ title: "Fehler", type: "error" }));
                }
            },
            K = u.filter(
              (e) =>
                e.name?.toLowerCase().includes(N.toLowerCase()) ||
                e.email?.toLowerCase().includes(N.toLowerCase()),
            );
          return (0, t.jsxs)("div", {
            className: "p-8 max-w-6xl mx-auto flex gap-6",
            children: [
              (0, t.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h1", {
                            className:
                              "font-calistoga text-4xl text-charcoal mb-2",
                            children: "Nutzer & Support",
                          }),
                          (0, t.jsx)("p", {
                            className: "font-bold text-charcoal/60",
                            children:
                              "Kundenverwaltung, Rechte und Nachrichten",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, t.jsxs)("button", {
                            onClick: () => p("users"),
                            className: `px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${"users" === e ? "bg-terracotta text-cream" : "bg-cream text-charcoal border border-peach"}`,
                            children: [
                              (0, t.jsx)(i.default, { size: 18 }),
                              " Nutzer",
                            ],
                          }),
                          (0, t.jsxs)("button", {
                            onClick: () => p("support"),
                            className: `px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${"support" === e ? "bg-terracotta text-cream" : "bg-cream text-charcoal border border-peach"}`,
                            children: [
                              (0, t.jsx)(o.Mail, { size: 18 }),
                              " Support Inbox",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  y
                    ? (0, t.jsxs)("div", {
                        className: "animate-pulse flex flex-col gap-4",
                        children: [
                          (0, t.jsx)("div", {
                            className: "h-20 bg-cream rounded-2xl",
                          }),
                          (0, t.jsx)("div", {
                            className: "h-20 bg-cream rounded-2xl",
                          }),
                        ],
                      })
                    : "users" === e
                      ? (0, t.jsxs)("div", {
                          className:
                            "bg-cream rounded-3xl overflow-hidden shadow-sm border border-peach",
                          children: [
                            (0, t.jsx)("div", {
                              className: "p-4 border-b border-peach",
                              children: (0, t.jsxs)("div", {
                                className: "relative w-full max-w-md",
                                children: [
                                  (0, t.jsx)(d.Search, {
                                    className:
                                      "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40",
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "text",
                                    placeholder:
                                      "Suchen nach Name oder E-Mail...",
                                    value: N,
                                    onChange: (e) => v(e.target.value),
                                    className:
                                      "w-full pl-12 pr-4 py-2 rounded-full bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsxs)("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                (0, t.jsx)("thead", {
                                  children: (0, t.jsxs)("tr", {
                                    className:
                                      "border-b border-peach bg-sand/50",
                                    children: [
                                      (0, t.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta",
                                        children: "Name",
                                      }),
                                      (0, t.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta",
                                        children: "E-Mail",
                                      }),
                                      (0, t.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta text-center",
                                        children: "Rolle",
                                      }),
                                      (0, t.jsx)("th", {
                                        className:
                                          "py-3 px-6 font-calistoga text-terracotta text-right",
                                        children: "Details",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("tbody", {
                                  children: K.map((e) =>
                                    (0, t.jsxs)(
                                      "tr",
                                      {
                                        className:
                                          "border-b border-peach/50 hover:bg-peach/10 transition-colors",
                                        children: [
                                          (0, t.jsx)("td", {
                                            className:
                                              "py-3 px-6 font-bold text-charcoal",
                                            children: e.name || "-",
                                          }),
                                          (0, t.jsx)("td", {
                                            className:
                                              "py-3 px-6 text-charcoal/80 text-sm",
                                            children: e.email || "-",
                                          }),
                                          (0, t.jsx)("td", {
                                            className: "py-3 px-6 text-center",
                                            children: (0, t.jsx)("span", {
                                              className: `px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${"admin" === e.role ? "bg-terracotta text-cream" : "bg-mint/20 text-mint"}`,
                                              children: e.role,
                                            }),
                                          }),
                                          (0, t.jsx)("td", {
                                            className: "py-3 px-6 text-right",
                                            children: (0, t.jsx)("button", {
                                              onClick: () => O(e),
                                              className:
                                                "p-2 text-terracotta bg-peach/30 rounded-full hover:bg-peach/80 transition-colors",
                                              children: (0, t.jsx)(
                                                h.ChevronRight,
                                                { size: 16 },
                                              ),
                                            }),
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, t.jsx)("div", {
                          className: "space-y-4",
                          children:
                            0 === f.length
                              ? (0, t.jsx)("div", {
                                  className:
                                    "text-center p-8 bg-cream rounded-3xl border border-peach text-charcoal/60 font-bold",
                                  children: "Keine Support-Nachrichten",
                                })
                              : f.map((e) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className:
                                            "flex justify-between items-start mb-2",
                                          children: [
                                            (0, t.jsxs)("div", {
                                              children: [
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "font-bold text-charcoal",
                                                  children: e.name,
                                                }),
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "text-sm text-terracotta",
                                                  children: e.email,
                                                }),
                                              ],
                                            }),
                                            (0, t.jsx)("div", {
                                              className:
                                                "text-xs font-bold text-charcoal/40",
                                              children: e.createdAt
                                                ? new Date(
                                                    e.createdAt,
                                                  ).toLocaleDateString()
                                                : "",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "mt-4 text-charcoal/80 text-sm leading-relaxed whitespace-pre-wrap",
                                          children: e.message,
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                        }),
                ],
              }),
              k &&
                (0, t.jsxs)("div", {
                  className:
                    "w-96 bg-cream rounded-3xl border border-peach shadow-sm flex flex-col h-[calc(100vh-8rem)] sticky top-8",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "p-6 border-b border-peach flex justify-between items-start",
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "font-calistoga text-2xl text-charcoal line-clamp-1",
                              children: k.name || "Ohne Name",
                            }),
                            (0, t.jsx)("div", {
                              className: "text-sm text-charcoal/60 font-bold",
                              children: k.email,
                            }),
                          ],
                        }),
                        (0, t.jsx)("button", {
                          onClick: () => w(null),
                          className:
                            "p-1 bg-peach/30 text-terracotta rounded-full",
                          children: (0, t.jsx)(n.X, { size: 18 }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "p-6 flex-1 overflow-y-auto space-y-8",
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h4", {
                              className:
                                "font-nunito text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3",
                              children: "Rechteverwaltung",
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, t.jsx)("button", {
                                  onClick: () => $("customer"),
                                  disabled: "customer" === k.role,
                                  className: `flex-1 py-2 rounded-xl font-bold text-sm border-2 ${"customer" === k.role ? "border-mint text-mint bg-mint/10" : "border-peach text-charcoal/60"}`,
                                  children: "Kunde",
                                }),
                                (0, t.jsxs)("button", {
                                  onClick: () => $("admin"),
                                  disabled: "admin" === k.role,
                                  className: `flex-1 flex justify-center items-center gap-1 py-2 rounded-xl font-bold text-sm border-2 ${"admin" === k.role ? "border-terracotta text-terracotta bg-terracotta/10" : "border-peach text-charcoal/60"}`,
                                  children: [
                                    (0, t.jsx)(x.Shield, { size: 16 }),
                                    " Admin",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h4", {
                              className:
                                "font-nunito text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3",
                              children: "Loyalty Coins",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "bg-sand rounded-2xl p-4 flex justify-between items-center mb-3",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "font-bold text-charcoal",
                                  children: "Guthaben:",
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "font-calistoga text-2xl text-terracotta",
                                  children: D,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, t.jsx)("input", {
                                  type: "number",
                                  value: A || "",
                                  onChange: (e) =>
                                    q(parseInt(e.target.value) || 0),
                                  placeholder: "Betrag",
                                  className:
                                    "w-full bg-sand px-3 py-2 rounded-xl font-bold outline-none",
                                }),
                                (0, t.jsx)("button", {
                                  onClick: B,
                                  className:
                                    "bg-terracotta text-cream px-4 rounded-xl font-bold text-sm",
                                  children: "Gutschreiben",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsxs)("h4", {
                              className:
                                "font-nunito text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3",
                              children: ["Bestellhistorie (", S.length, ")"],
                            }),
                            (0, t.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                S.slice(0, 5).map((e) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "bg-sand p-3 rounded-xl flex justify-between items-center",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "font-bold text-charcoal text-sm",
                                              children:
                                                e.orderNumber || "Online Order",
                                            }),
                                            (0, t.jsx)("div", {
                                              className:
                                                "text-[10px] text-charcoal/60 font-bold",
                                              children: new Date(
                                                e.createdAt,
                                              ).toLocaleDateString(),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className:
                                            "font-bold text-terracotta",
                                          children: [e.total?.toFixed(2), " €"],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                                0 === S.length &&
                                  (0, t.jsx)("div", {
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
      799274,
    );
  },
]);
