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
  729141,
  (a) => {
    "use strict";
    let b = (0, a.i(920226).create)((a) => ({
      isBusy: !1,
      setBusy: (b) => a({ isBusy: b }),
    }));
    a.s(["useTransition", 0, b]);
  },
  371947,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(238246),
      d = a.i(50944),
      e = a.i(729141),
      f = a.i(621216);
    a.s([
      "TransitionLink",
      0,
      function ({ href: a, children: g, onClick: h, ...i }) {
        let j = (0, d.useRouter)(),
          { setBusy: k, isBusy: l } = (0, e.useTransition)(),
          m = (0, f.useReducedMotion)();
        return (0, b.jsx)(c.default, {
          href: a,
          onClick: (b) => {
            if (
              !b.metaKey &&
              !b.ctrlKey &&
              0 === b.button &&
              !l &&
              !(
                a.startsWith("http") ||
                a.startsWith("mailto:") ||
                a.startsWith("tel:")
              )
            ) {
              if ((b.preventDefault(), h && h(b), m)) return void j.push(a);
              (k(!0),
                setTimeout(() => {
                  (j.push(a), setTimeout(() => k(!1), 200));
                }, 600));
            }
          },
          ...i,
          children: g,
        });
      },
    ]);
  },
  863414,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("arrow-left", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    a.s(["default", 0, b]);
  },
  219107,
  (a) => {
    "use strict";
    var b = a.i(863414);
    a.s(["ArrowLeft", () => b.default]);
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
  833354,
  (a, b, c) => {
    "use strict";
    c._ = function (a) {
      return a && a.__esModule ? a : { default: a };
    };
  },
  533095,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return k;
      },
      getImageProps: function () {
        return j;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(833354),
      g = a.r(494915),
      h = a.r(767161),
      i = f._(a.r(402305));
    function j(a) {
      let { props: b } = (0, g.getImgProps)(a, {
        defaultLoader: i.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [a, c] of Object.entries(b)) void 0 === c && delete b[a];
      return { props: b };
    }
    let k = h.Image;
  },
  571987,
  (a, b, c) => {
    b.exports = a.r(533095);
  },
  710460,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("utensils", [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
      ["path", { d: "M7 2v20", key: "1473qp" }],
      [
        "path",
        { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  505281,
  (a) => {
    "use strict";
    var b = a.i(710460);
    a.s(["Utensils", () => b.default]);
  },
  926578,
  3753,
  (a) => {
    "use strict";
    var b = a.i(164831);
    let c = (0, b.default)("layout-dashboard", [
      [
        "rect",
        { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
      ],
      [
        "rect",
        { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
      ],
      [
        "rect",
        { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
      ],
      [
        "rect",
        { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
      ],
    ]);
    a.s(["default", 0, c], 926578);
    let d = (0, b.default)("list-ordered", [
      ["path", { d: "M11 5h10", key: "1cz7ny" }],
      ["path", { d: "M11 12h10", key: "1438ji" }],
      ["path", { d: "M11 19h10", key: "11t30w" }],
      ["path", { d: "M4 4h1v5", key: "10yrso" }],
      ["path", { d: "M4 9h2", key: "r1h2o0" }],
      [
        "path",
        {
          d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
          key: "xtkcd5",
        },
      ],
    ]);
    a.s(["default", 0, d], 3753);
  },
  783196,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(371947),
      d = a.i(50944),
      e = a.i(926578),
      e = e,
      f = a.i(3753),
      f = f,
      g = a.i(505281),
      h = a.i(341476),
      i = a.i(219107),
      j = a.i(635187);
    let k = [
      { href: "/admin", label: "Dashboard", icon: e.default },
      { href: "/admin/orders", label: "KDS Kanban", icon: f.default },
      { href: "/admin/menu", label: "Menü Manager", icon: g.Utensils },
      { href: "/admin/settings", label: "Einstellungen", icon: h.Settings },
    ];
    a.s(
      [
        "AdminSidebar",
        0,
        function () {
          let a = (0, d.usePathname)();
          return (0, b.jsxs)("aside", {
            className:
              "w-64 bg-cream border-r border-peach h-screen sticky top-0 flex flex-col hidden md:flex shrink-0",
            children: [
              (0, b.jsx)("div", {
                className: "p-6 border-b border-peach",
                children: (0, b.jsxs)(c.TransitionLink, {
                  href: "/",
                  className: "flex items-center gap-3",
                  children: [
                    (0, b.jsx)(j.Logo, {
                      variant: "rund",
                      className: "w-8 h-8 text-terra",
                    }),
                    (0, b.jsx)("span", {
                      className: "font-calistoga text-xl text-bark mt-1",
                      children: "Admin",
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("nav", {
                "aria-label": "Admin Navigation",
                className: "flex-1 p-4 flex flex-col gap-2",
                children: k.map((d) => {
                  let e = a === d.href;
                  return (0, b.jsxs)(
                    c.TransitionLink,
                    {
                      href: d.href,
                      className: `flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${e ? "bg-terra text-white shadow-terra" : "text-bark hover:bg-beige hover:text-terra"}`,
                      children: [
                        (0, b.jsx)(d.icon, { size: 20 }),
                        (0, b.jsx)("span", {
                          className: "font-bold text-[14px]",
                          children: d.label,
                        }),
                      ],
                    },
                    d.href,
                  );
                }),
              }),
              (0, b.jsx)("div", {
                className: "absolute bottom-6 left-6 right-6",
                children: (0, b.jsxs)(c.TransitionLink, {
                  href: "/",
                  className:
                    "flex items-center gap-3 px-4 py-3 rounded-2xl text-bark-soft hover:bg-beige hover:text-terra transition-colors",
                  children: [
                    (0, b.jsx)(i.ArrowLeft, { size: 20 }),
                    (0, b.jsx)("span", {
                      className: "font-bold text-[14px]",
                      children: "Zum Shop",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      783196,
    );
  },
];

//# sourceMappingURL=_07ekehj._.js.map
