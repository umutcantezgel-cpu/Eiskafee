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
  419379,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("log-out", [
      ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
      ["path", { d: "M21 12H9", key: "dn1m92" }],
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ]);
    a.s(["default", 0, b]);
  },
  478930,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("gift", [
      ["path", { d: "M12 7v14", key: "1akyts" }],
      [
        "path",
        { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "1sqzm4" },
      ],
      [
        "path",
        {
          d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",
          key: "kc0143",
        },
      ],
      [
        "rect",
        { x: "3", y: "7", width: "18", height: "4", rx: "1", key: "1hberx" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  705632,
  (a) => {
    "use strict";
    var b = a.i(478930);
    a.s(["Gift", () => b.default]);
  },
  155818,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    a.s(["default", 0, b]);
  },
  470944,
  (a) => {
    "use strict";
    var b = a.i(155818);
    a.s(["Calendar", () => b.default]);
  },
  683835,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("trash-2", [
      ["path", { d: "M10 11v6", key: "nco0om" }],
      ["path", { d: "M14 11v6", key: "outv1u" }],
      [
        "path",
        { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" },
      ],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
    ]);
    a.s(["default", 0, b]);
  },
  980180,
  (a) => {
    "use strict";
    var b = a.i(683835);
    a.s(["Trash2", () => b.default]);
  },
  326032,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(371947),
      e = a.i(705632),
      f = a.i(954098),
      g = a.i(344451),
      h = a.i(419379),
      h = h,
      i = a.i(403512),
      j = a.i(980180),
      k = a.i(470944),
      l = a.i(262536),
      m = a.i(933164),
      n = a.i(420237);
    a.i(730485);
    var o = a.i(65825),
      o = o;
    a.i(69387);
    var p = a.i(132787),
      q = a.i(601787),
      r = a.i(544623),
      s = a.i(999272);
    a.s(
      [
        "default",
        0,
        function () {
          let { user: a, dbUser: t } = (0, l.useAuth)(),
            { orders: u } = (0, m.useOrders)(),
            [v, w] = (0, c.useState)(!1),
            [x, y] = (0, c.useState)(t?.name || a?.displayName || ""),
            [z, A] = (0, c.useState)(t?.phone || ""),
            [B, C] = (0, c.useState)(t?.birthday || ""),
            [D, E] = (0, c.useState)(!1),
            [F, G] = (0, c.useState)(t?.addresses || []),
            [H, I] = (0, c.useState)(!1),
            [J, K] = (0, c.useState)({ street: "", zip: "", city: "" }),
            L = u.length,
            M = async () => {
              await (0, o.D)(n.auth);
            },
            N = async () => {
              if (a) {
                E(!0);
                try {
                  (await (0, q.updateDoc)((0, p.doc)(n.db, "users", a.uid), {
                    name: x,
                    phone: z,
                    birthday: B,
                  }),
                    w(!1));
                } catch (a) {
                  (console.error(a), alert("Fehler beim Speichern"));
                } finally {
                  E(!1);
                }
              }
            },
            O = async () => {
              if (a && J.street && J.zip && J.city) {
                E(!0);
                try {
                  let b = [...F, J];
                  (await (0, q.updateDoc)((0, p.doc)(n.db, "users", a.uid), {
                    addresses: b,
                  }),
                    G(b),
                    I(!1),
                    K({ street: "", zip: "", city: "" }));
                } catch (a) {
                  console.error(a);
                } finally {
                  E(!1);
                }
              }
            },
            P = async (b) => {
              if (a) {
                E(!0);
                try {
                  let c = F.filter((a, c) => c !== b);
                  (await (0, q.updateDoc)((0, p.doc)(n.db, "users", a.uid), {
                    addresses: c,
                  }),
                    G(c));
                } catch (a) {
                  console.error(a);
                } finally {
                  E(!1);
                }
              }
            };
          return (0, b.jsx)(s.AuthGuard, {
            children: (0, b.jsxs)("div", {
              className:
                "min-h-screen bg-[#f5efe8] text-[#2d1f19] font-nunito pb-20",
              children: [
                (0, b.jsxs)("div", {
                  className:
                    "bg-[#E4C0A8] pt-12 pb-10 px-6 relative overflow-hidden",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "absolute -top-8 -right-8 w-40 h-40 bg-[rgba(245,239,232,0.4)] rounded-[58%_42%_52%_48%/48%_58%_42%_52%]",
                    }),
                    (0, b.jsxs)("div", {
                      className: "relative flex items-center gap-4",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "w-16 h-16 rounded-full bg-[#CC624C] flex items-center justify-center text-white font-calistoga text-2xl shadow-sm",
                          children: x?.[0]?.toUpperCase() || "H",
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "text-[10px] font-black text-[#CC624C] tracking-widest uppercase",
                              children: "Mein Konto",
                            }),
                            (0, b.jsx)("div", {
                              className:
                                "font-calistoga text-2xl text-[#2d1f19] mt-0.5 leading-none",
                              children: x || "Gast",
                            }),
                            (0, b.jsxs)("div", {
                              className:
                                "text-xs text-[#7a5a52] mt-1.5 font-bold",
                              children: [
                                "Mitglied seit ",
                                t?.createdAt
                                  ? new Date(t.createdAt).getFullYear()
                                  : "2024",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className:
                    "-mt-4 mx-5 bg-white rounded-[18px] p-4 shadow-sm relative z-10 flex divide-x divide-[#eedfcc]",
                  children: [
                    (0, b.jsxs)(d.TransitionLink, {
                      href: "/profile/orders",
                      className:
                        "flex-1 text-center py-2 block hover:bg-[#f5efe8] rounded-l-xl transition-colors",
                      children: [
                        (0, b.jsx)("div", {
                          className: "text-2xl font-calistoga text-[#2d1f19]",
                          children: L,
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-bold text-[#7a5a52] mt-1 uppercase tracking-wide",
                          children: "Bestellungen",
                        }),
                      ],
                    }),
                    (0, b.jsxs)(d.TransitionLink, {
                      href: "/loyalty",
                      className:
                        "flex-1 text-center py-2 block hover:bg-[#f5efe8] rounded-r-xl transition-colors",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "text-2xl font-calistoga text-[#2d1f19] flex items-center justify-center gap-1",
                          children: (0, b.jsx)(e.Gift, {
                            className: "w-5 h-5 text-[#CC624C]",
                          }),
                        }),
                        (0, b.jsx)("div", {
                          className:
                            "text-[11px] font-bold text-[#7a5a52] mt-1 uppercase tracking-wide",
                          children: "Rewards",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "px-5 mt-6 space-y-5",
                  children: [
                    (0, b.jsxs)(r.FadeUp, {
                      delay: 0.1,
                      children: [
                        (0, b.jsxs)("div", {
                          className:
                            "flex justify-between items-baseline mb-2.5",
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                              children: "Persönliche Daten",
                            }),
                            (0, b.jsx)("button", {
                              onClick: () => (v ? N() : w(!0)),
                              disabled: D,
                              className:
                                "font-nunito text-[11px] font-extrabold text-[#CC624C] underline",
                              children: D
                                ? "..."
                                : v
                                  ? "Speichern"
                                  : "Bearbeiten",
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          className: "bg-white rounded-[18px] p-1 shadow-sm",
                          children: [
                            (0, b.jsxs)("div", {
                              className:
                                "p-3.5 border-b border-[#eedfcc] flex gap-3 items-center",
                              children: [
                                (0, b.jsx)(g.User, {
                                  size: 18,
                                  className: "text-[#CC624C]",
                                }),
                                (0, b.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-wider mb-0.5",
                                      children: "Name",
                                    }),
                                    v
                                      ? (0, b.jsx)("input", {
                                          type: "text",
                                          value: x,
                                          onChange: (a) => y(a.target.value),
                                          className:
                                            "w-full font-bold text-[#2d1f19] bg-[#f5efe8] px-2 py-1 rounded outline-none",
                                        })
                                      : (0, b.jsx)("div", {
                                          className:
                                            "font-bold text-[#2d1f19] text-[13px]",
                                          children: x,
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className:
                                "p-3.5 border-b border-[#eedfcc] flex gap-3 items-center",
                              children: [
                                (0, b.jsx)("div", { className: "w-[18px]" }),
                                (0, b.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-wider mb-0.5",
                                      children: "Handy",
                                    }),
                                    v
                                      ? (0, b.jsx)("input", {
                                          type: "tel",
                                          value: z,
                                          onChange: (a) => A(a.target.value),
                                          className:
                                            "w-full font-bold text-[#2d1f19] bg-[#f5efe8] px-2 py-1 rounded outline-none",
                                        })
                                      : (0, b.jsx)("div", {
                                          className:
                                            "font-bold text-[#2d1f19] text-[13px]",
                                          children: z || "—",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              className: "p-3.5 flex gap-3 items-center",
                              children: [
                                (0, b.jsx)(k.Calendar, {
                                  size: 18,
                                  className: "text-[#CC624C]",
                                }),
                                (0, b.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-wider mb-0.5",
                                      children:
                                        "Geburtstag (für Überraschungen 🎁)",
                                    }),
                                    v
                                      ? (0, b.jsx)("input", {
                                          type: "date",
                                          value: B,
                                          onChange: (a) => C(a.target.value),
                                          className:
                                            "w-full font-bold text-[#2d1f19] bg-[#f5efe8] px-2 py-1 rounded outline-none",
                                        })
                                      : (0, b.jsx)("div", {
                                          className:
                                            "font-bold text-[#2d1f19] text-[13px]",
                                          children: B
                                            ? new Date(B).toLocaleDateString(
                                                "de-DE",
                                              )
                                            : "—",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)(r.FadeUp, {
                      delay: 0.2,
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "flex justify-between items-baseline mb-2.5",
                          children: (0, b.jsx)("div", {
                            className:
                              "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                            children: "Lieferadressen",
                          }),
                        }),
                        (0, b.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            F.map((a, c) =>
                              (0, b.jsxs)(
                                "div",
                                {
                                  className:
                                    "bg-white rounded-[18px] p-3.5 shadow-sm flex items-center justify-between",
                                  children: [
                                    (0, b.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, b.jsx)(f.MapPin, {
                                          size: 18,
                                          className: "text-[#CC624C]",
                                        }),
                                        (0, b.jsxs)("div", {
                                          children: [
                                            (0, b.jsx)("div", {
                                              className:
                                                "font-bold text-[#2d1f19] text-[13px]",
                                              children: a.street,
                                            }),
                                            (0, b.jsxs)("div", {
                                              className:
                                                "text-[11px] text-[#7a5a52] font-semibold",
                                              children: [a.zip, " ", a.city],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, b.jsx)("button", {
                                      onClick: () => P(c),
                                      disabled: D,
                                      className:
                                        "w-8 h-8 rounded-full bg-[#f5efe8] flex items-center justify-center text-[#CC624C] hover:bg-[#eedfcc]",
                                      children: (0, b.jsx)(j.Trash2, {
                                        size: 14,
                                      }),
                                    }),
                                  ],
                                },
                                c,
                              ),
                            ),
                            H
                              ? (0, b.jsxs)("div", {
                                  className:
                                    "bg-white rounded-[18px] p-4 shadow-sm border border-[#CC624C]",
                                  children: [
                                    (0, b.jsxs)("div", {
                                      className: "space-y-2.5",
                                      children: [
                                        (0, b.jsx)("input", {
                                          type: "text",
                                          placeholder: "Straße & Hausnr.",
                                          value: J.street,
                                          onChange: (a) =>
                                            K({ ...J, street: a.target.value }),
                                          className:
                                            "w-full font-bold text-[#2d1f19] text-sm bg-[#f5efe8] px-3 py-2 rounded-xl outline-none",
                                        }),
                                        (0, b.jsxs)("div", {
                                          className: "flex gap-2",
                                          children: [
                                            (0, b.jsx)("input", {
                                              type: "text",
                                              placeholder: "PLZ",
                                              value: J.zip,
                                              onChange: (a) =>
                                                K({
                                                  ...J,
                                                  zip: a.target.value,
                                                }),
                                              className:
                                                "w-1/3 font-bold text-[#2d1f19] text-sm bg-[#f5efe8] px-3 py-2 rounded-xl outline-none",
                                            }),
                                            (0, b.jsx)("input", {
                                              type: "text",
                                              placeholder: "Ort",
                                              value: J.city,
                                              onChange: (a) =>
                                                K({
                                                  ...J,
                                                  city: a.target.value,
                                                }),
                                              className:
                                                "flex-1 font-bold text-[#2d1f19] text-sm bg-[#f5efe8] px-3 py-2 rounded-xl outline-none",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, b.jsxs)("div", {
                                      className: "flex gap-2 mt-3",
                                      children: [
                                        (0, b.jsx)("button", {
                                          onClick: O,
                                          disabled: D,
                                          className:
                                            "flex-1 bg-[#CC624C] text-white font-bold text-[12px] py-2 rounded-xl",
                                          children: "Hinzufügen",
                                        }),
                                        (0, b.jsx)("button", {
                                          onClick: () => I(!1),
                                          disabled: D,
                                          className:
                                            "flex-1 bg-[#eedfcc] text-[#2d1f19] font-bold text-[12px] py-2 rounded-xl",
                                          children: "Abbrechen",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, b.jsxs)("button", {
                                  onClick: () => I(!0),
                                  className:
                                    "w-full bg-[rgba(255,255,255,0.6)] rounded-[18px] p-3.5 flex items-center justify-center gap-2 border-2 border-dashed border-[#E4C0A8] text-[#CC624C] font-extrabold text-[12.5px] hover:bg-white transition-colors",
                                  children: [
                                    (0, b.jsx)(i.Plus, { size: 16 }),
                                    " Neue Adresse",
                                  ],
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsx)("div", {
                  className: "pt-10 pb-12 text-center",
                  children: (0, b.jsxs)("button", {
                    onClick: M,
                    className:
                      "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(204,98,76,0.1)] hover:bg-[rgba(204,98,76,0.15)] transition-colors",
                    children: [
                      (0, b.jsx)(h.default, {
                        size: 16,
                        className: "text-[#CC624C]",
                        strokeWidth: 2,
                      }),
                      (0, b.jsx)("span", {
                        className: "text-[13px] font-bold text-[#CC624C]",
                        children: "Abmelden",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
      ],
      326032,
    );
  },
];

//# sourceMappingURL=_0n~dc34._.js.map
