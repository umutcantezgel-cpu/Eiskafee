(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  818581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(271645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = l(e, n)), t && (o.current = l(t, n)));
        },
        [e, t],
      );
    }
    function l(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  195057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return u;
      },
      formatWithValidation: function () {
        return i;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let l = e.r(190809)._(e.r(998183)),
      a = /https?|ftp|gopher|file/;
    function u(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        u = e.hash || "",
        s = e.query || "",
        i = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (i = t + e.host)
          : r &&
            ((i = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (i += ":" + e.port)),
        s && "object" == typeof s && (s = String(l.urlQueryToSearchParams(s))));
      let c = e.search || (s && `?${s}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== i)
          ? ((i = "//" + (i || "")), o && "/" !== o[0] && (o = "/" + o))
          : i || (i = ""),
        u && "#" !== u[0] && (u = "#" + u),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${i}${o}${c}${u}`
      );
    }
    let s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function i(e) {
      return u(e);
    }
  },
  573668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(718967),
      o = e.r(652817);
    function l(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  284508,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  522016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return m;
      },
      useLinkStatus: function () {
        return g;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let l = e.r(190809),
      a = e.r(843476),
      u = l._(e.r(271645)),
      s = e.r(195057),
      i = e.r(8372),
      c = e.r(818581),
      f = e.r(718967),
      d = e.r(405550);
    e.r(233525);
    let h = e.r(388540),
      p = e.r(91949),
      b = e.r(573668),
      y = e.r(509396);
    function m(t) {
      var r, n;
      let o,
        l,
        m,
        [g, x] = (0, u.useOptimistic)(p.IDLE_LINK_STATUS),
        j = (0, u.useRef)(null),
        {
          href: _,
          as: C,
          children: O,
          prefetch: P = null,
          passHref: w,
          replace: E,
          shallow: S,
          scroll: M,
          onClick: T,
          onMouseEnter: k,
          onTouchStart: N,
          legacyBehavior: R = !1,
          onNavigate: A,
          transitionTypes: L,
          ref: U,
          unstable_dynamicOnHover: I,
          ...K
        } = t;
      ((o = O),
        R &&
          ("string" == typeof o || "number" == typeof o) &&
          (o = (0, a.jsx)("a", { children: o })));
      let $ = u.default.useContext(i.AppRouterContext),
        B = !1 !== P,
        z =
          !1 !== P
            ? null === (n = P) || "auto" === n
              ? y.FetchStrategy.PPR
              : y.FetchStrategy.Full
            : y.FetchStrategy.PPR,
        D = "string" == typeof (r = C || _) ? r : (0, s.formatUrl)(r);
      if (R) {
        if (o?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        l = u.default.Children.only(o);
      }
      let F = R ? l && "object" == typeof l && l.ref : U,
        q = u.default.useCallback(
          (e) => (
            null !== $ &&
              (j.current = (0, p.mountLinkInstance)(e, D, $, z, B, x)),
            () => {
              (j.current &&
                ((0, p.unmountLinkForCurrentNavigation)(j.current),
                (j.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [B, D, $, z, x],
        ),
        H = {
          ref: (0, c.useMergedRef)(q, F),
          onClick(t) {
            (R || "function" != typeof T || T(t),
              R &&
                l.props &&
                "function" == typeof l.props.onClick &&
                l.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, n, o, l, a, s) {
                  if ("u" > typeof window) {
                    let i,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((i = t.currentTarget.getAttribute("target")) &&
                          "_self" !== i) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, b.isLocalURL)(r)) {
                      o && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), a)) {
                      let e = !1;
                      if (
                        (a({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(699781);
                    u.default.startTransition(() => {
                      f(
                        r,
                        o ? "replace" : "push",
                        !1 === l
                          ? h.ScrollBehavior.NoScroll
                          : h.ScrollBehavior.Default,
                        n.current,
                        s,
                      );
                    });
                  }
                })(t, D, j, E, M, A, L));
          },
          onMouseEnter(e) {
            (R || "function" != typeof k || k(e),
              R &&
                l.props &&
                "function" == typeof l.props.onMouseEnter &&
                l.props.onMouseEnter(e),
              $ && B && (0, p.onNavigationIntent)(e.currentTarget, !0 === I));
          },
          onTouchStart: function (e) {
            (R || "function" != typeof N || N(e),
              R &&
                l.props &&
                "function" == typeof l.props.onTouchStart &&
                l.props.onTouchStart(e),
              $ && B && (0, p.onNavigationIntent)(e.currentTarget, !0 === I));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(D)
          ? (H.href = D)
          : (R && !w && ("a" !== l.type || "href" in l.props)) ||
            (H.href = (0, d.addBasePath)(D)),
        (m = R
          ? u.default.cloneElement(l, H)
          : (0, a.jsx)("a", { ...K, ...H, children: o })),
        (0, a.jsx)(v.Provider, { value: g, children: m })
      );
    }
    e.r(284508);
    let v = (0, u.createContext)(p.IDLE_LINK_STATUS),
      g = () => (0, u.useContext)(v);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  902434,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("house", [
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
    e.s(["default", 0, t]);
  },
  238674,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("refresh-ccw", [
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
    e.s(["default", 0, t]);
  },
  749817,
  (e) => {
    "use strict";
    var t = e.i(902434);
    e.s(["Home", () => t.default]);
  },
  758298,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(843476),
      r = e.i(271645),
      n = e.i(238674),
      n = n,
      o = e.i(749817),
      l = e.i(522016);
    e.s(
      [
        "default",
        0,
        function ({ error: e, reset: a }) {
          return (
            (0, r.useEffect)(() => {
              console.error("App Error:", e);
            }, [e]),
            (0, t.jsxs)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center p-5 text-center",
              children: [
                (0, t.jsxs)("div", {
                  className: "relative mb-8",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "w-32 h-32 bg-[#E4C0A8] rounded-full flex items-center justify-center text-6xl shadow-inner relative z-10",
                      children: "🍦",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#E4C0A8] rounded-[50%] blur-sm opacity-60",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute -bottom-8 left-1/3 w-4 h-6 bg-[#E4C0A8] rounded-full blur-[2px]",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute -bottom-6 right-1/4 w-3 h-4 bg-[#E4C0A8] rounded-full blur-[1px]",
                    }),
                  ],
                }),
                (0, t.jsx)("h1", {
                  className: "font-calistoga text-4xl text-[#2d1f19] mb-4",
                  children: "Oh nein, wir schmelzen!",
                }),
                (0, t.jsx)("p", {
                  className: "font-nunito text-[#7a5a52] max-w-sm mb-8",
                  children:
                    "Ein unerwarteter Fehler ist aufgetreten. Unsere Eismaschine streikt gerade ein wenig.",
                }),
                (0, t.jsxs)("div", {
                  className: "flex gap-4",
                  children: [
                    (0, t.jsxs)("button", {
                      onClick: () => a(),
                      className:
                        "flex items-center gap-2 bg-[#CC624C] text-[#f5efe8] px-6 py-3 rounded-xl font-bold shadow-clay hover:bg-[#a84936] transition-colors",
                      children: [
                        (0, t.jsx)(n.default, { size: 18 }),
                        "Nochmal versuchen",
                      ],
                    }),
                    (0, t.jsxs)(l.default, {
                      href: "/",
                      className:
                        "flex items-center gap-2 bg-white text-[#2d1f19] px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-gray-50 border border-[#eedfcc] transition-colors",
                      children: [
                        (0, t.jsx)(o.Home, { size: 18 }),
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
      758298,
    );
  },
]);
