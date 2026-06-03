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
          [r, d] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && d(!0);
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
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
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
      i = e.i(230129),
      l = e.i(632781);
    e.s([
      "AuthGuard",
      0,
      function ({ children: e, requireAdmin: r = !1 }) {
        let { user: d, role: n, loading: c } = (0, i.useAuth)(),
          o = (0, a.useRouter)(),
          x = (0, a.usePathname)();
        return ((0, s.useEffect)(() => {
          !c &&
            (d
              ? r && "admin" !== n && o.push("/profile")
              : o.push(`/auth?redirect=${encodeURIComponent(x)}`));
        }, [d, n, c, o, x, r]),
        c)
          ? (0, t.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, t.jsx)(l.Loader2, {
                className: "w-8 h-8 text-[#CC624C] animate-spin",
              }),
            })
          : !d || (r && "admin" !== n)
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
      i = e.i(959141),
      l = e.i(230129);
    e.s([
      "useOrders",
      0,
      function () {
        let [e, r] = (0, t.useState)([]),
          [d, n] = (0, t.useState)(!0),
          [c, o] = (0, t.useState)(null),
          { user: x, role: u, loading: f } = (0, l.useAuth)();
        return (
          (0, t.useEffect)(() => {
            if (f) return;
            if (!x) {
              (r([]), n(!1));
              return;
            }
            let e = (0, a.query)(
              (0, s.collection)(i.db, "orders"),
              (0, a.orderBy)("createdAt", "desc"),
            );
            "admin" !== u &&
              (e = (0, a.query)(
                (0, s.collection)(i.db, "orders"),
                (0, a.where)("userId", "==", x.uid),
                (0, a.orderBy)("createdAt", "desc"),
              ));
            let t = (0, a.onSnapshot)(
              e,
              (e) => {
                (r(
                  e.docs.map((e) => ({
                    id: e.id,
                    ...e.data(),
                    createdAt: e.data().createdAt?.toDate() || new Date(),
                  })),
                ),
                  n(!1),
                  o(null));
              },
              (e) => {
                (console.error("useOrders error:", e), o(e), n(!1));
              },
            );
            return () => t();
          }, [x, u, f]),
          { orders: e, loading: d, error: c }
        );
      },
    ]);
  },
  460573,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    e.s(["default", 0, t]);
  },
  9306,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("trash-2", [
      ["path", { d: "M10 11v6", key: "nco0om" }],
      ["path", { d: "M14 11v6", key: "outv1u" }],
      [
        "path",
        { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" },
      ],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
    ]);
    e.s(["default", 0, t]);
  },
  919219,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("gift", [
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
    e.s(["default", 0, t]);
  },
  545995,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("log-out", [
      ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
      ["path", { d: "M21 12H9", key: "dn1m92" }],
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ]);
    e.s(["default", 0, t]);
  },
  282625,
  (e) => {
    "use strict";
    var t = e.i(919219);
    e.s(["Gift", () => t.default]);
  },
  149882,
  (e) => {
    "use strict";
    var t = e.i(460573);
    e.s(["Calendar", () => t.default]);
  },
  573474,
  (e) => {
    "use strict";
    var t = e.i(9306);
    e.s(["Trash2", () => t.default]);
  },
  228776,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(974336),
      i = e.i(282625),
      l = e.i(420865),
      r = e.i(901279),
      d = e.i(545995),
      d = d,
      n = e.i(77071),
      c = e.i(573474),
      o = e.i(149882),
      x = e.i(230129),
      u = e.i(224840),
      f = e.i(959141);
    e.i(151718);
    var h = e.i(464104),
      h = h;
    e.i(436180);
    var p = e.i(386205),
      m = e.i(263802),
      b = e.i(636498),
      v = e.i(658709);
    e.s(
      [
        "default",
        0,
        function () {
          let { user: e, dbUser: j } = (0, x.useAuth)(),
            { orders: g } = (0, u.useOrders)(),
            [y, C] = (0, s.useState)(!1),
            [N, w] = (0, s.useState)(j?.name || e?.displayName || ""),
            [k, A] = (0, s.useState)(j?.phone || ""),
            [S, M] = (0, s.useState)(j?.birthday || ""),
            [z, D] = (0, s.useState)(!1),
            [H, O] = (0, s.useState)(j?.addresses || []),
            [T, U] = (0, s.useState)(!1),
            [L, P] = (0, s.useState)({ street: "", zip: "", city: "" }),
            B = g.length,
            E = async () => {
              await (0, h.D)(f.auth);
            },
            F = async () => {
              if (e) {
                D(!0);
                try {
                  (await (0, m.updateDoc)((0, p.doc)(f.db, "users", e.uid), {
                    name: N,
                    phone: k,
                    birthday: S,
                  }),
                    C(!1));
                } catch (e) {
                  (console.error(e), alert("Fehler beim Speichern"));
                } finally {
                  D(!1);
                }
              }
            },
            G = async () => {
              if (e && L.street && L.zip && L.city) {
                D(!0);
                try {
                  let t = [...H, L];
                  (await (0, m.updateDoc)((0, p.doc)(f.db, "users", e.uid), {
                    addresses: t,
                  }),
                    O(t),
                    U(!1),
                    P({ street: "", zip: "", city: "" }));
                } catch (e) {
                  console.error(e);
                } finally {
                  D(!1);
                }
              }
            },
            R = async (t) => {
              if (e) {
                D(!0);
                try {
                  let s = H.filter((e, s) => s !== t);
                  (await (0, m.updateDoc)((0, p.doc)(f.db, "users", e.uid), {
                    addresses: s,
                  }),
                    O(s));
                } catch (e) {
                  console.error(e);
                } finally {
                  D(!1);
                }
              }
            };
          return (0, t.jsx)(v.AuthGuard, {
            children: (0, t.jsxs)("div", {
              className:
                "min-h-screen bg-[#f5efe8] text-[#2d1f19] font-nunito pb-20",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "bg-[#E4C0A8] pt-12 pb-10 px-6 relative overflow-hidden",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute -top-8 -right-8 w-40 h-40 bg-[rgba(245,239,232,0.4)] rounded-[58%_42%_52%_48%/48%_58%_42%_52%]",
                    }),
                    (0, t.jsxs)("div", {
                      className: "relative flex items-center gap-4",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-16 h-16 rounded-full bg-[#CC624C] flex items-center justify-center text-white font-calistoga text-2xl shadow-sm",
                          children: N?.[0]?.toUpperCase() || "H",
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "text-[10px] font-black text-[#CC624C] tracking-widest uppercase",
                              children: "Mein Konto",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "font-calistoga text-2xl text-[#2d1f19] mt-0.5 leading-none",
                              children: N || "Gast",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "text-xs text-[#7a5a52] mt-1.5 font-bold",
                              children: [
                                "Mitglied seit ",
                                j?.createdAt
                                  ? new Date(j.createdAt).getFullYear()
                                  : "2024",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "-mt-4 mx-5 bg-white rounded-[18px] p-4 shadow-sm relative z-10 flex divide-x divide-[#eedfcc]",
                  children: [
                    (0, t.jsxs)(a.TransitionLink, {
                      href: "/profile/orders",
                      className:
                        "flex-1 text-center py-2 block hover:bg-[#f5efe8] rounded-l-xl transition-colors",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-2xl font-calistoga text-[#2d1f19]",
                          children: B,
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-bold text-[#7a5a52] mt-1 uppercase tracking-wide",
                          children: "Bestellungen",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(a.TransitionLink, {
                      href: "/loyalty",
                      className:
                        "flex-1 text-center py-2 block hover:bg-[#f5efe8] rounded-r-xl transition-colors",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-2xl font-calistoga text-[#2d1f19] flex items-center justify-center gap-1",
                          children: (0, t.jsx)(i.Gift, {
                            className: "w-5 h-5 text-[#CC624C]",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-[11px] font-bold text-[#7a5a52] mt-1 uppercase tracking-wide",
                          children: "Rewards",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "px-5 mt-6 space-y-5",
                  children: [
                    (0, t.jsxs)(b.FadeUp, {
                      delay: 0.1,
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex justify-between items-baseline mb-2.5",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                              children: "Persönliche Daten",
                            }),
                            (0, t.jsx)("button", {
                              onClick: () => (y ? F() : C(!0)),
                              disabled: z,
                              className:
                                "font-nunito text-[11px] font-extrabold text-[#CC624C] underline",
                              children: z
                                ? "..."
                                : y
                                  ? "Speichern"
                                  : "Bearbeiten",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "bg-white rounded-[18px] p-1 shadow-sm",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "p-3.5 border-b border-[#eedfcc] flex gap-3 items-center",
                              children: [
                                (0, t.jsx)(r.User, {
                                  size: 18,
                                  className: "text-[#CC624C]",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-wider mb-0.5",
                                      children: "Name",
                                    }),
                                    y
                                      ? (0, t.jsx)("input", {
                                          type: "text",
                                          value: N,
                                          onChange: (e) => w(e.target.value),
                                          className:
                                            "w-full font-bold text-[#2d1f19] bg-[#f5efe8] px-2 py-1 rounded outline-none",
                                        })
                                      : (0, t.jsx)("div", {
                                          className:
                                            "font-bold text-[#2d1f19] text-[13px]",
                                          children: N,
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "p-3.5 border-b border-[#eedfcc] flex gap-3 items-center",
                              children: [
                                (0, t.jsx)("div", { className: "w-[18px]" }),
                                (0, t.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-wider mb-0.5",
                                      children: "Handy",
                                    }),
                                    y
                                      ? (0, t.jsx)("input", {
                                          type: "tel",
                                          value: k,
                                          onChange: (e) => A(e.target.value),
                                          className:
                                            "w-full font-bold text-[#2d1f19] bg-[#f5efe8] px-2 py-1 rounded outline-none",
                                        })
                                      : (0, t.jsx)("div", {
                                          className:
                                            "font-bold text-[#2d1f19] text-[13px]",
                                          children: k || "—",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "p-3.5 flex gap-3 items-center",
                              children: [
                                (0, t.jsx)(o.Calendar, {
                                  size: 18,
                                  className: "text-[#CC624C]",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-wider mb-0.5",
                                      children:
                                        "Geburtstag (für Überraschungen 🎁)",
                                    }),
                                    y
                                      ? (0, t.jsx)("input", {
                                          type: "date",
                                          value: S,
                                          onChange: (e) => M(e.target.value),
                                          className:
                                            "w-full font-bold text-[#2d1f19] bg-[#f5efe8] px-2 py-1 rounded outline-none",
                                        })
                                      : (0, t.jsx)("div", {
                                          className:
                                            "font-bold text-[#2d1f19] text-[13px]",
                                          children: S
                                            ? new Date(S).toLocaleDateString(
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
                    (0, t.jsxs)(b.FadeUp, {
                      delay: 0.2,
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "flex justify-between items-baseline mb-2.5",
                          children: (0, t.jsx)("div", {
                            className:
                              "font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase",
                            children: "Lieferadressen",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            H.map((e, s) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className:
                                    "bg-white rounded-[18px] p-3.5 shadow-sm flex items-center justify-between",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, t.jsx)(l.MapPin, {
                                          size: 18,
                                          className: "text-[#CC624C]",
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "font-bold text-[#2d1f19] text-[13px]",
                                              children: e.street,
                                            }),
                                            (0, t.jsxs)("div", {
                                              className:
                                                "text-[11px] text-[#7a5a52] font-semibold",
                                              children: [e.zip, " ", e.city],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("button", {
                                      onClick: () => R(s),
                                      disabled: z,
                                      className:
                                        "w-8 h-8 rounded-full bg-[#f5efe8] flex items-center justify-center text-[#CC624C] hover:bg-[#eedfcc]",
                                      children: (0, t.jsx)(c.Trash2, {
                                        size: 14,
                                      }),
                                    }),
                                  ],
                                },
                                s,
                              ),
                            ),
                            T
                              ? (0, t.jsxs)("div", {
                                  className:
                                    "bg-white rounded-[18px] p-4 shadow-sm border border-[#CC624C]",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "space-y-2.5",
                                      children: [
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          placeholder: "Straße & Hausnr.",
                                          value: L.street,
                                          onChange: (e) =>
                                            P({ ...L, street: e.target.value }),
                                          className:
                                            "w-full font-bold text-[#2d1f19] text-sm bg-[#f5efe8] px-3 py-2 rounded-xl outline-none",
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex gap-2",
                                          children: [
                                            (0, t.jsx)("input", {
                                              type: "text",
                                              placeholder: "PLZ",
                                              value: L.zip,
                                              onChange: (e) =>
                                                P({
                                                  ...L,
                                                  zip: e.target.value,
                                                }),
                                              className:
                                                "w-1/3 font-bold text-[#2d1f19] text-sm bg-[#f5efe8] px-3 py-2 rounded-xl outline-none",
                                            }),
                                            (0, t.jsx)("input", {
                                              type: "text",
                                              placeholder: "Ort",
                                              value: L.city,
                                              onChange: (e) =>
                                                P({
                                                  ...L,
                                                  city: e.target.value,
                                                }),
                                              className:
                                                "flex-1 font-bold text-[#2d1f19] text-sm bg-[#f5efe8] px-3 py-2 rounded-xl outline-none",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex gap-2 mt-3",
                                      children: [
                                        (0, t.jsx)("button", {
                                          onClick: G,
                                          disabled: z,
                                          className:
                                            "flex-1 bg-[#CC624C] text-white font-bold text-[12px] py-2 rounded-xl",
                                          children: "Hinzufügen",
                                        }),
                                        (0, t.jsx)("button", {
                                          onClick: () => U(!1),
                                          disabled: z,
                                          className:
                                            "flex-1 bg-[#eedfcc] text-[#2d1f19] font-bold text-[12px] py-2 rounded-xl",
                                          children: "Abbrechen",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, t.jsxs)("button", {
                                  onClick: () => U(!0),
                                  className:
                                    "w-full bg-[rgba(255,255,255,0.6)] rounded-[18px] p-3.5 flex items-center justify-center gap-2 border-2 border-dashed border-[#E4C0A8] text-[#CC624C] font-extrabold text-[12.5px] hover:bg-white transition-colors",
                                  children: [
                                    (0, t.jsx)(n.Plus, { size: 16 }),
                                    " Neue Adresse",
                                  ],
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "pt-10 pb-12 text-center",
                  children: (0, t.jsxs)("button", {
                    onClick: E,
                    className:
                      "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(204,98,76,0.1)] hover:bg-[rgba(204,98,76,0.15)] transition-colors",
                    children: [
                      (0, t.jsx)(d.default, {
                        size: 16,
                        className: "text-[#CC624C]",
                        strokeWidth: 2,
                      }),
                      (0, t.jsx)("span", {
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
      228776,
    );
  },
]);
