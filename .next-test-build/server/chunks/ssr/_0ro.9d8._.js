module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
  6282,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("shopping-bag", [
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
    a.s(["default", 0, b]);
  },
  863145,
  (a) => {
    "use strict";
    var b = a.i(6282);
    a.s(["ShoppingBag", () => b.default]);
  },
  132245,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return e;
        },
      }));
    let d = a.r(441997);
    function e({ reason: a, children: b }) {
      throw Object.defineProperty(
        new d.BailoutToCSRError(a),
        "__NEXT_ERROR_CODE",
        { value: "E394", enumerable: !1, configurable: !0 },
      );
    }
  },
  307773,
  (a, b, c) => {
    "use strict";
    function d(a) {
      return a
        .split("/")
        .map((a) => encodeURIComponent(a))
        .join("/");
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "encodeURIPath", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  297458,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let d = a.r(187924),
      e = a.r(935112),
      f = a.r(556704),
      g = a.r(307773),
      h = a.r(437344);
    function i({ moduleIds: a }) {
      let b = f.workAsyncStorage.getStore();
      if (void 0 === b) return null;
      let c = [];
      if (b.reactLoadableManifest && a) {
        let d = b.reactLoadableManifest;
        for (let b of a) {
          if (!d[b]) continue;
          let a = d[b].files;
          c.push(...a);
        }
      }
      if (0 === c.length) return null;
      let j = (0, h.getAssetTokenQuery)();
      return (0, d.jsx)(d.Fragment, {
        children: c.map((a) => {
          let c = `${b.assetPrefix}/_next/${(0, g.encodeURIPath)(a)}${j}`;
          return a.endsWith(".css")
            ? (0, d.jsx)(
                "link",
                {
                  precedence: "dynamic",
                  href: c,
                  rel: "stylesheet",
                  as: "style",
                  nonce: b.nonce,
                },
                a,
              )
            : ((0, e.preload)(c, {
                as: "script",
                fetchPriority: "low",
                nonce: b.nonce,
              }),
              null);
        }),
      });
    }
  },
  969853,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let d = a.r(187924),
      e = a.r(572131),
      f = a.r(132245),
      g = a.r(297458);
    function h(a) {
      return { default: a && "default" in a ? a.default : a };
    }
    let i = {
        loader: () => Promise.resolve(h(() => null)),
        loading: null,
        ssr: !0,
      },
      j = function (a) {
        let b = { ...i, ...a },
          c = (0, e.lazy)(() => b.loader().then(h)),
          j = b.loading;
        function k(a) {
          let h = j
              ? (0, d.jsx)(j, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            i = !b.ssr || !!b.loading,
            k = i ? e.Suspense : e.Fragment,
            l = b.ssr
              ? (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(g.PreloadChunks, { moduleIds: b.modules }),
                    (0, d.jsx)(c, { ...a }),
                  ],
                })
              : (0, d.jsx)(f.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, d.jsx)(c, { ...a }),
                });
          return (0, d.jsx)(k, { ...(i ? { fallback: h } : {}), children: l });
        }
        return ((k.displayName = "LoadableComponent"), k);
      };
  },
  819721,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return e;
        },
      }));
    let d = a.r(833354)._(a.r(969853));
    function e(a, b) {
      let c = {};
      "function" == typeof a && (c.loader = a);
      let e = { ...c, ...b };
      return (0, d.default)({ ...e, modules: e.loadableGenerated?.modules });
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  330852,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("euro", [
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
    a.s(["default", 0, b]);
  },
  142972,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(819721),
      e = a.i(420237);
    a.i(69387);
    var f = a.i(691431),
      g = a.i(601787),
      h = a.i(330852),
      h = h,
      i = a.i(863145),
      j = a.i(120459);
    let k = (0, d.default)(async () => {}, {
      loadableGenerated: { modules: [589117] },
      ssr: !1,
    });
    a.s(
      [
        "default",
        0,
        function () {
          let [a, d] = (0, c.useState)([]),
            [l, m] = (0, c.useState)(!0);
          (0, c.useEffect)(() => {
            !(async function () {
              try {
                let a = (0, g.query)(
                    (0, f.collection)(e.db, "analytics_daily"),
                    (0, g.orderBy)("date", "desc"),
                    (0, g.limit)(7),
                  ),
                  b = await (0, g.getDocs)(a);
                if (b.empty) d([]);
                else {
                  let a = b.docs.map((a) => a.data()).reverse();
                  d(a);
                }
              } catch (a) {
                console.error("Error fetching analytics", a);
              } finally {
                m(!1);
              }
            })();
          }, []);
          let n = a.length > 0 ? a[a.length - 1] : null;
          return (0, b.jsxs)("div", {
            className: "p-8 max-w-6xl mx-auto",
            children: [
              (0, b.jsxs)("div", {
                className: "mb-8",
                children: [
                  (0, b.jsx)("h1", {
                    className: "font-calistoga text-4xl text-charcoal mb-2",
                    children: "Dashboard",
                  }),
                  (0, b.jsx)("p", {
                    className: "font-bold text-charcoal/60",
                    children: "Tagesübersicht & Performance",
                  }),
                ],
              }),
              l
                ? (0, b.jsxs)("div", {
                    className: "animate-pulse space-y-8",
                    children: [
                      (0, b.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                          (0, b.jsx)("div", {
                            className: "h-32 bg-cream rounded-2xl",
                          }),
                          (0, b.jsx)("div", {
                            className: "h-32 bg-cream rounded-2xl",
                          }),
                          (0, b.jsx)("div", {
                            className: "h-32 bg-cream rounded-2xl",
                          }),
                        ],
                      }),
                      (0, b.jsx)("div", {
                        className: "h-96 bg-cream rounded-2xl",
                      }),
                    ],
                  })
                : (0, b.jsxs)(b.Fragment, {
                    children: [
                      (0, b.jsxs)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                        children: [
                          (0, b.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, b.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, b.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta",
                                  children: (0, b.jsx)(h.default, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, b.jsxs)("div", {
                                  children: [
                                    (0, b.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Umsatz Heute",
                                    }),
                                    (0, b.jsxs)("p", {
                                      className:
                                        "font-calistoga text-3xl text-charcoal",
                                      children: [
                                        n?.revenue.toFixed(2).replace(".", ","),
                                        " €",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, b.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, b.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-brown/20 flex items-center justify-center text-brown",
                                  children: (0, b.jsx)(i.ShoppingBag, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, b.jsxs)("div", {
                                  children: [
                                    (0, b.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Bestellungen",
                                    }),
                                    (0, b.jsx)("p", {
                                      className:
                                        "font-calistoga text-3xl text-charcoal",
                                      children: n?.orderCount,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, b.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, b.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-peach flex items-center justify-center text-terracotta",
                                  children: (0, b.jsx)(j.Trophy, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, b.jsxs)("div", {
                                  children: [
                                    (0, b.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Top Item",
                                    }),
                                    (0, b.jsx)("p", {
                                      className:
                                        "font-calistoga text-xl text-charcoal line-clamp-1",
                                      children: n?.topItems?.[0]?.name || "-",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className:
                              "bg-cream rounded-3xl p-6 shadow-sm border border-peach",
                            children: (0, b.jsxs)("div", {
                              className: "flex items-center gap-4 mb-4",
                              children: [
                                (0, b.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center text-mint",
                                  children: (0, b.jsx)(h.default, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, b.jsxs)("div", {
                                  children: [
                                    (0, b.jsx)("h3", {
                                      className:
                                        "font-bold text-charcoal/60 text-sm",
                                      children: "Ø Bestellwert",
                                    }),
                                    (0, b.jsxs)("p", {
                                      className:
                                        "font-calistoga text-3xl text-charcoal",
                                      children: [
                                        n && n.orderCount > 0
                                          ? (n.revenue / n.orderCount)
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
                      (0, b.jsxs)("div", {
                        className:
                          "bg-cream rounded-3xl p-6 shadow-sm border border-peach h-[400px]",
                        children: [
                          (0, b.jsx)("h3", {
                            className:
                              "font-calistoga text-xl text-charcoal mb-6",
                            children: "Umsatz (Letzte 7 Tage)",
                          }),
                          (0, b.jsx)(k, { data: a }),
                        ],
                      }),
                    ],
                  }),
            ],
          });
        },
      ],
      142972,
    );
  },
];

//# sourceMappingURL=_0ro.9d8._.js.map
