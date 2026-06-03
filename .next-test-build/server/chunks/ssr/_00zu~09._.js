module.exports = [
  164240,
  (a, b, c) => {
    "use strict";
    function d(a) {
      if ("function" != typeof WeakMap) return null;
      var b = new WeakMap(),
        c = new WeakMap();
      return (d = function (a) {
        return a ? c : b;
      })(a);
    }
    c._ = function (a, b) {
      if (!b && a && a.__esModule) return a;
      if (null === a || ("object" != typeof a && "function" != typeof a))
        return { default: a };
      var c = d(b);
      if (c && c.has(a)) return c.get(a);
      var e = { __proto__: null },
        f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var g in a)
        if ("default" !== g && Object.prototype.hasOwnProperty.call(a, g)) {
          var h = f ? Object.getOwnPropertyDescriptor(a, g) : null;
          h && (h.get || h.set)
            ? Object.defineProperty(e, g, h)
            : (e[g] = a[g]);
        }
      return ((e.default = a), c && c.set(a, e), e);
    };
  },
  500790,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(211857);
    a.n(
      d(
        "[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>",
      ),
    );
  },
  784707,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(211857);
    a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"));
  },
  297647,
  (a) => {
    "use strict";
    a.i(500790);
    var b = a.i(784707);
    a.n(b);
  },
  395936,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return i;
      },
      useLinkStatus: function () {
        return h.useLinkStatus;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(164240),
      g = a.r(907997),
      h = f._(a.r(297647));
    function i(a) {
      let b = a.legacyBehavior,
        c =
          "string" == typeof a.children ||
          "number" == typeof a.children ||
          "string" == typeof a.children?.type,
        d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
      return (
        !b ||
          c ||
          d ||
          (a.children?.type?.$$typeof === Symbol.for("react.lazy")
            ? console.error(
                "Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
              )
            : console.error(
                "Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
              )),
        (0, g.jsx)(h.default, { ...a })
      );
    }
    ("function" == typeof c.default ||
      ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  903363,
  (a) => {
    "use strict";
    var b = a.i(907997),
      c = a.i(395936);
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsxs)("div", {
          className:
            "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center p-5 text-center relative overflow-hidden",
          children: [
            (0, b.jsx)("div", {
              className:
                "absolute top-1/4 left-1/4 w-64 h-64 bg-[#E4C0A8] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob",
            }),
            (0, b.jsx)("div", {
              className:
                "absolute top-1/3 right-1/4 w-64 h-64 bg-[#CC624C] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000",
            }),
            (0, b.jsxs)("div", {
              className: "relative z-10 flex flex-col items-center",
              children: [
                (0, b.jsxs)("div", {
                  className: "relative mb-8 group",
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "w-40 h-40 bg-[#CC624C] rounded-full flex items-center justify-center text-7xl shadow-clay transition-transform group-hover:scale-105",
                      style: {
                        clipPath:
                          "polygon(0% 0%, 100% 0%, 100% 70%, 80% 85%, 90% 100%, 0% 100%)",
                      },
                      children: "🍪",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "absolute -bottom-2 -right-4 text-2xl animate-bounce",
                      children: "🤎",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "absolute bottom-4 -right-8 text-lg animate-bounce animation-delay-200",
                      children: "🤎",
                    }),
                  ],
                }),
                (0, b.jsx)("h1", {
                  className: "font-calistoga text-5xl text-[#2d1f19] mb-4",
                  children: "Ups! 404",
                }),
                (0, b.jsx)("p", {
                  className: "font-nunito text-lg text-[#7a5a52] max-w-sm mb-8",
                  children:
                    "Jemand hat diese Seite wohl schon vernascht. Hier gibt es leider nichts mehr zu sehen.",
                }),
                (0, b.jsx)(c.default, {
                  href: "/",
                  className:
                    "bg-[#CC624C] text-[#f5efe8] px-8 py-4 rounded-full font-bold text-lg shadow-clay hover:bg-[#a84936] transition-colors",
                  children: "Zurück zur Startseite",
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  517537,
  (a) => {
    a.n(a.i(903363));
  },
];

//# sourceMappingURL=_00zu~09._.js.map
