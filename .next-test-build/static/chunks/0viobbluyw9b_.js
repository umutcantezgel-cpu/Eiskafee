(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  19379,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("euro", [
      ["path", { d: "M4 10h12", key: "1y6xl8" }],
      ["path", { d: "M4 14h9", key: "1loblj" }],
      [
        "path",
        {
          d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
          key: "1j6lzo",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  915291,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("shopping-bag", [
      ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
      ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
      [
        "path",
        {
          d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
          key: "o988cm",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  263448,
  (e) => {
    "use strict";
    var t = e.i(915291);
    e.s(["ShoppingBag", () => t.default]);
  },
  667585,
  (e, t, l) => {
    "use strict";
    (Object.defineProperty(l, "__esModule", { value: !0 }),
      Object.defineProperty(l, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let a = e.r(132061);
    function s({ reason: e, children: t }) {
      if ("u" < typeof window)
        throw Object.defineProperty(
          new a.BailoutToCSRError(e),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return t;
    }
  },
  309885,
  (e, t, l) => {
    "use strict";
    function a(e) {
      return e
        .split("/")
        .map((e) => encodeURIComponent(e))
        .join("/");
    }
    (Object.defineProperty(l, "__esModule", { value: !0 }),
      Object.defineProperty(l, "encodeURIPath", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
  },
  652157,
  (e, t, l) => {
    "use strict";
    (Object.defineProperty(l, "__esModule", { value: !0 }),
      Object.defineProperty(l, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    let a = e.r(843476),
      s = e.r(174080),
      r = e.r(563599),
      n = e.r(309885),
      c = e.r(543369);
    function d({ moduleIds: e }) {
      if ("u" > typeof window) return null;
      let t = r.workAsyncStorage.getStore();
      if (void 0 === t) return null;
      let l = [];
      if (t.reactLoadableManifest && e) {
        let a = t.reactLoadableManifest;
        for (let t of e) {
          if (!a[t]) continue;
          let e = a[t].files;
          l.push(...e);
        }
      }
      if (0 === l.length) return null;
      let o = (0, c.getAssetTokenQuery)();
      return (0, a.jsx)(a.Fragment, {
        children: l.map((e) => {
          let l = `${t.assetPrefix}/_next/${(0, n.encodeURIPath)(e)}${o}`;
          return e.endsWith(".css")
            ? (0, a.jsx)(
                "link",
                {
                  precedence: "dynamic",
                  href: l,
                  rel: "stylesheet",
                  as: "style",
                  nonce: t.nonce,
                },
                e,
              )
            : ((0, s.preload)(l, {
                as: "script",
                fetchPriority: "low",
                nonce: t.nonce,
              }),
              null);
        }),
      });
    }
  },
  869093,
  (e, t, l) => {
    "use strict";
    (Object.defineProperty(l, "__esModule", { value: !0 }),
      Object.defineProperty(l, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let a = e.r(843476),
      s = e.r(271645),
      r = e.r(667585),
      n = e.r(652157);
    function c(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let d = {
        loader: () => Promise.resolve(c(() => null)),
        loading: null,
        ssr: !0,
      },
      o = function (e) {
        let t = { ...d, ...e },
          l = (0, s.lazy)(() => t.loader().then(c)),
          o = t.loading;
        function i(e) {
          let c = o
              ? (0, a.jsx)(o, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            d = !t.ssr || !!t.loading,
            i = d ? s.Suspense : s.Fragment,
            u = t.ssr
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    "u" < typeof window
                      ? (0, a.jsx)(n.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, a.jsx)(l, { ...e }),
                  ],
                })
              : (0, a.jsx)(r.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, a.jsx)(l, { ...e }),
                });
          return (0, a.jsx)(i, { ...(d ? { fallback: c } : {}), children: u });
        }
        return ((i.displayName = "LoadableComponent"), i);
      };
  },
  770703,
  (e, t, l) => {
    "use strict";
    (Object.defineProperty(l, "__esModule", { value: !0 }),
      Object.defineProperty(l, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let a = e.r(555682)._(e.r(869093));
    function s(e, t) {
      let l = {};
      "function" == typeof e && (l.loader = e);
      let s = { ...l, ...t };
      return (0, a.default)({ ...s, modules: s.loadableGenerated?.modules });
    }
    ("function" == typeof l.default ||
      ("object" == typeof l.default && null !== l.default)) &&
      void 0 === l.default.__esModule &&
      (Object.defineProperty(l.default, "__esModule", { value: !0 }),
      Object.assign(l.default, l),
      (t.exports = l.default));
  },
  131643,
  (e) => {
    "use strict";
    var t = e.i(843476),
      l = e.i(271645),
      a = e.i(770703),
      s = e.i(959141);
    e.i(436180);
    var r = e.i(746939),
      n = e.i(263802),
      c = e.i(19379),
      c = c,
      d = e.i(263448),
      o = e.i(474816);
    let i = (0, a.default)(() => e.A(493386), {
      loadableGenerated: { modules: [589117] },
      ssr: !1,
    });
    e.s(
      [
        "default",
        0,
        function () {
          let [e, a] = (0, l.useState)([]),
            [u, h] = (0, l.useState)(!0);
          (0, l.useEffect)(() => {
            !(async function () {
              try {
                let e = (0, n.query)(
                    (0, r.collection)(s.db, "analytics_daily"),
                    (0, n.orderBy)("date", "desc"),
                    (0, n.limit)(7),
                  ),
                  t = await (0, n.getDocs)(e);
                if (t.empty) a([]);
                else {
                  let e = t.docs.map((e) => e.data()).reverse();
                  a(e);
                }
              } catch (e) {
                console.error("Error fetching analytics", e);
              } finally {
                h(!1);
              }
            })();
          }, []);
          let m = e.length > 0 ? e[e.length - 1] : null;
          return (0, t.jsxs)("div", {
            className: "p-8 max-w-6xl mx-auto",
            children: [
              (0, t.jsxs)("div", {
                className: "mb-8",
                children: [
                  (0, t.jsx)("h1", {
                    className: "font-calistoga text-4xl text-charcoal mb-2",
                    children: "Dashboard",
                  }),
                  (0, t.jsx)("p", {
                    className: "font-bold text-charcoal/60",
                    children: "Tagesübersicht & Performance",
                  }),
                ],
              }),
              u
                ? (0, t.jsxs)("div", {
                    className: "animate-pulse space-y-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                          (0, t.jsx)("div", {
                            className: "h-32 bg-cream rounded-2xl",
                          }),
                          (0, t.jsx)("div", {
                            className: "h-32 bg-cream rounded-2xl",
                          }),
                          (0, t.jsx)("div", {
                            className: "h-32 bg-cream rounded-2xl",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "h-96 bg-cream rounded-2xl",
                      }),
                    ],
                  })
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, t.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta",
                                  children: (0, t.jsx)(c.default, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Umsatz Heute",
                                    }),
                                    (0, t.jsxs)("p", {
                                      className:
                                        "font-calistoga text-3xl text-charcoal",
                                      children: [
                                        m?.revenue.toFixed(2).replace(".", ","),
                                        " €",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, t.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-brown/20 flex items-center justify-center text-brown",
                                  children: (0, t.jsx)(d.ShoppingBag, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Bestellungen",
                                    }),
                                    (0, t.jsx)("p", {
                                      className:
                                        "font-calistoga text-3xl text-charcoal",
                                      children: m?.orderCount,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, t.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-peach flex items-center justify-center text-terracotta",
                                  children: (0, t.jsx)(o.Trophy, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Top Item",
                                    }),
                                    (0, t.jsx)("p", {
                                      className:
                                        "font-calistoga text-xl text-charcoal line-clamp-1",
                                      children: m?.topItems?.[0]?.name || "-",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, t.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center text-mint",
                                  children: (0, t.jsx)(c.default, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Ø Bestellwert",
                                    }),
                                    (0, t.jsxs)("p", {
                                      className:
                                        "font-calistoga text-3xl text-charcoal",
                                      children: [
                                        m && m.orderCount > 0
                                          ? (m.revenue / m.orderCount)
                                              .toFixed(2)
                                              .replace(".", ",")
                                          : "0,00",
                                        " ",
                                        "€",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-cream rounded-3xl p-6 shadow-sm border border-peach h-[400px]",
                        children: [
                          (0, t.jsx)("h3", {
                            className:
                              "font-calistoga text-xl text-charcoal mb-6",
                            children: "Umsatz (Letzte 7 Tage)",
                          }),
                          (0, t.jsx)(i, { data: e }),
                        ],
                      }),
                    ],
                  }),
            ],
          });
        },
      ],
      131643,
    );
  },
  493386,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/0~vkbog943_6o.js"].map((t) => e.l(t))).then(
        () => t(589117),
      ),
    );
  },
]);
