module.exports = [
  437344,
  (a, b, c) => {
    "use strict";
    let d;
    Object.defineProperty(c, "__esModule", { value: !0 });
    var e = {
      getAssetToken: function () {
        return i;
      },
      getAssetTokenQuery: function () {
        return j;
      },
      getDeploymentId: function () {
        return g;
      },
      getDeploymentIdQuery: function () {
        return h;
      },
    };
    for (var f in e) Object.defineProperty(c, f, { enumerable: !0, get: e[f] });
    function g() {
      return d;
    }
    function h(a = !1) {
      return d ? `${a ? "&" : "?"}dpl=${d}` : "";
    }
    function i() {
      return !1;
    }
    function j(a = !1) {
      return "";
    }
    d = void 0;
  },
  808591,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return e;
        },
      }));
    let d = a.r(572131);
    function e(a, b) {
      let c = (0, d.useRef)(null),
        e = (0, d.useRef)(null);
      return (0, d.useCallback)(
        (d) => {
          if (null === d) {
            let a = c.current;
            a && ((c.current = null), a());
            let b = e.current;
            b && ((e.current = null), b());
          } else (a && (c.current = f(a, d)), b && (e.current = f(b, d)));
        },
        [a, b],
      );
    }
    function f(a, b) {
      if ("function" != typeof a)
        return (
          (a.current = b),
          () => {
            a.current = null;
          }
        );
      {
        let c = a(b);
        return "function" == typeof c ? c : () => a(null);
      }
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  192434,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "warnOnce", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    let d = (a) => {};
  },
  104443,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("refresh-ccw", [
      [
        "path",
        {
          d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
          key: "14sxne",
        },
      ],
      ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      [
        "path",
        {
          d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
          key: "1hlbsb",
        },
      ],
      ["path", { d: "M16 16h5v5", key: "ccwih5" }],
    ]);
    a.s(["default", 0, b]);
  },
  857880,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("house", [
      [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          key: "r6nss1",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  555486,
  (a) => {
    "use strict";
    var b = a.i(857880);
    a.s(["Home", () => b.default]);
  },
  123953,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(104443),
      d = d,
      e = a.i(555486),
      f = a.i(238246);
    a.s(
      [
        "default",
        0,
        function ({ error: a, reset: g }) {
          return (
            (0, c.useEffect)(() => {
              console.error("App Error:", a);
            }, [a]),
            (0, b.jsxs)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center p-5 text-center",
              children: [
                (0, b.jsxs)("div", {
                  className: "relative mb-8",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "w-32 h-32 bg-[#E4C0A8] rounded-full flex items-center justify-center text-6xl shadow-inner relative z-10",
                      children: "🍦",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#E4C0A8] rounded-[50%] blur-sm opacity-60",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "absolute -bottom-8 left-1/3 w-4 h-6 bg-[#E4C0A8] rounded-full blur-[2px]",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "absolute -bottom-6 right-1/4 w-3 h-4 bg-[#E4C0A8] rounded-full blur-[1px]",
                    }),
                  ],
                }),
                (0, b.jsx)("h1", {
                  className: "font-calistoga text-4xl text-[#2d1f19] mb-4",
                  children: "Oh nein, wir schmelzen!",
                }),
                (0, b.jsx)("p", {
                  className: "font-nunito text-[#7a5a52] max-w-sm mb-8",
                  children:
                    "Ein unerwarteter Fehler ist aufgetreten. Unsere Eismaschine streikt gerade ein wenig.",
                }),
                (0, b.jsxs)("div", {
                  className: "flex gap-4",
                  children: [
                    (0, b.jsxs)("button", {
                      onClick: () => g(),
                      className:
                        "flex items-center gap-2 bg-[#CC624C] text-[#f5efe8] px-6 py-3 rounded-xl font-bold shadow-clay hover:bg-[#a84936] transition-colors",
                      children: [
                        (0, b.jsx)(d.default, { size: 18 }),
                        "Nochmal versuchen",
                      ],
                    }),
                    (0, b.jsxs)(f.default, {
                      href: "/",
                      className:
                        "flex items-center gap-2 bg-white text-[#2d1f19] px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-gray-50 border border-[#eedfcc] transition-colors",
                      children: [
                        (0, b.jsx)(e.Home, { size: 18 }),
                        "Startseite",
                      ],
                    }),
                  ],
                }),
                !1,
              ],
            })
          );
        },
      ],
      123953,
    );
  },
];

//# sourceMappingURL=_06xgek.._.js.map
