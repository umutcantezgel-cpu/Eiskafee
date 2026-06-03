(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  818581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(271645);
    function i(e, t) {
      let r = (0, n.useRef)(null),
        i = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = i.current;
            t && ((i.current = null), t());
          } else (e && (r.current = a(e, n)), t && (i.current = a(t, n)));
        },
        [e, t],
      );
    }
    function a(e, t) {
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
        return l;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(190809)._(e.r(998183)),
      s = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        i = e.pathname || "",
        l = e.hash || "",
        o = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        o && "object" == typeof o && (o = String(a.urlQueryToSearchParams(o))));
      let u = e.search || (o && `?${o}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || s.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), i && "/" !== i[0] && (i = "/" + i))
          : c || (c = ""),
        l && "#" !== l[0] && (l = "#" + l),
        u && "?" !== u[0] && (u = "?" + u),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (u = u.replace("#", "%23")),
        `${n}${c}${i}${u}${l}`
      );
    }
    let o = [
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
    function c(e) {
      return l(e);
    }
  },
  573668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(718967),
      i = e.r(652817);
    function a(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, i.hasBasePath)(r.pathname);
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
        return y;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(190809),
      s = e.r(843476),
      l = a._(e.r(271645)),
      o = e.r(195057),
      c = e.r(8372),
      u = e.r(818581),
      d = e.r(718967),
      f = e.r(405550);
    e.r(233525);
    let p = e.r(388540),
      h = e.r(91949),
      g = e.r(573668),
      m = e.r(509396);
    function y(t) {
      var r, n;
      let i,
        a,
        y,
        [v, x] = (0, l.useOptimistic)(h.IDLE_LINK_STATUS),
        S = (0, l.useRef)(null),
        {
          href: w,
          as: k,
          children: j,
          prefetch: C = null,
          passHref: M,
          replace: _,
          shallow: E,
          scroll: P,
          onClick: O,
          onMouseEnter: L,
          onTouchStart: T,
          legacyBehavior: R = !1,
          onNavigate: D,
          transitionTypes: N,
          ref: B,
          unstable_dynamicOnHover: A,
          ...z
        } = t;
      ((i = j),
        R &&
          ("string" == typeof i || "number" == typeof i) &&
          (i = (0, s.jsx)("a", { children: i })));
      let I = l.default.useContext(c.AppRouterContext),
        W = !1 !== C,
        F =
          !1 !== C
            ? null === (n = C) || "auto" === n
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        $ = "string" == typeof (r = k || w) ? r : (0, o.formatUrl)(r);
      if (R) {
        if (i?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = l.default.Children.only(i);
      }
      let U = R ? a && "object" == typeof a && a.ref : B,
        H = l.default.useCallback(
          (e) => (
            null !== I &&
              (S.current = (0, h.mountLinkInstance)(e, $, I, F, W, x)),
            () => {
              (S.current &&
                ((0, h.unmountLinkForCurrentNavigation)(S.current),
                (S.current = null)),
                (0, h.unmountPrefetchableInstance)(e));
            }
          ),
          [W, $, I, F, x],
        ),
        K = {
          ref: (0, u.useMergedRef)(H, U),
          onClick(t) {
            (R || "function" != typeof O || O(t),
              R &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !I ||
                t.defaultPrevented ||
                (function (t, r, n, i, a, s, o) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: u } = t.currentTarget;
                    if (
                      ("A" === u.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, g.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), s)) {
                      let e = !1;
                      if (
                        (s({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(699781);
                    l.default.startTransition(() => {
                      d(
                        r,
                        i ? "replace" : "push",
                        !1 === a
                          ? p.ScrollBehavior.NoScroll
                          : p.ScrollBehavior.Default,
                        n.current,
                        o,
                      );
                    });
                  }
                })(t, $, S, _, P, D, N));
          },
          onMouseEnter(e) {
            (R || "function" != typeof L || L(e),
              R &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              I && W && (0, h.onNavigationIntent)(e.currentTarget, !0 === A));
          },
          onTouchStart: function (e) {
            (R || "function" != typeof T || T(e),
              R &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              I && W && (0, h.onNavigationIntent)(e.currentTarget, !0 === A));
          },
        };
      return (
        (0, d.isAbsoluteUrl)($)
          ? (K.href = $)
          : (R && !M && ("a" !== a.type || "href" in a.props)) ||
            (K.href = (0, f.addBasePath)($)),
        (y = R
          ? l.default.cloneElement(a, K)
          : (0, s.jsx)("a", { ...z, ...K, children: i })),
        (0, s.jsx)(b.Provider, { value: v, children: y })
      );
    }
    e.r(284508);
    let b = (0, l.createContext)(h.IDLE_LINK_STATUS),
      v = () => (0, l.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  783872,
  (e) => {
    "use strict";
    let t = (0, e.i(944296).create)((e) => ({
      isBusy: !1,
      setBusy: (t) => e({ isBusy: t }),
    }));
    e.s(["useTransition", 0, t]);
  },
  974336,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(522016),
      n = e.i(618566),
      i = e.i(783872),
      a = e.i(772328);
    e.s([
      "TransitionLink",
      0,
      function ({ href: e, children: s, onClick: l, ...o }) {
        let c = (0, n.useRouter)(),
          { setBusy: u, isBusy: d } = (0, i.useTransition)(),
          f = (0, a.useReducedMotion)();
        return (0, t.jsx)(r.default, {
          href: e,
          onClick: (t) => {
            if (
              !t.metaKey &&
              !t.ctrlKey &&
              0 === t.button &&
              !d &&
              !(
                e.startsWith("http") ||
                e.startsWith("mailto:") ||
                e.startsWith("tel:")
              )
            ) {
              if ((t.preventDefault(), l && l(t), f)) return void c.push(e);
              (u(!0),
                setTimeout(() => {
                  (c.push(e), setTimeout(() => u(!1), 200));
                }, 600));
            }
          },
          ...o,
          children: s,
        });
      },
    ]);
  },
  310542,
  (e) => {
    "use strict";
    var t = e.i(560140),
      r = e.i(930551),
      n = e.i(486427),
      i = e.i(965566),
      a = e.i(271645),
      s = e.i(260830),
      l = e.i(287022);
    function o(e, t) {
      let r,
        n = () => {
          let { currentTime: n } = t,
            i = (null === n ? 0 : n.value) / 100;
          (r !== i && e(i), (r = i));
        };
      return (l.frame.preUpdate(n, !0), () => (0, l.cancelFrame)(n));
    }
    function c(e) {
      return (
        !("u" < typeof window) &&
        (e ? (0, r.supportsViewTimeline)() : (0, r.supportsScrollTimeline)())
      );
    }
    var u = e.i(661327),
      d = e.i(783920),
      f = e.i(325791);
    let p = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      h = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
    function g(e, t, r, n) {
      let i = r[t],
        { length: a, position: s } = h[t],
        l = i.current,
        o = r.time;
      ((i.current = Math.abs(e[`scroll${s}`])),
        (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
        (i.offset.length = 0),
        (i.offset[0] = 0),
        (i.offset[1] = i.scrollLength),
        (i.progress = (0, d.progress)(0, i.scrollLength, i.current)));
      let c = n - o;
      i.velocity = c > 50 ? 0 : (0, f.velocityPerSecond)(i.current - l, c);
    }
    e.i(247167);
    var m = e.i(344230),
      y = e.i(515923),
      b = e.i(476959),
      v = e.i(772846);
    let x = { start: 0, center: 0.5, end: 1 };
    function S(e, t, r = 0) {
      let n = 0;
      if ((e in x && (e = x[e]), "string" == typeof e)) {
        let t = parseFloat(e);
        e.endsWith("px")
          ? (n = t)
          : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
              ? (n = (t / 100) * document.documentElement.clientWidth)
              : e.endsWith("vh")
                ? (n = (t / 100) * document.documentElement.clientHeight)
                : (e = t);
      }
      return ("number" == typeof e && (n = t * e), r + n);
    }
    let w = [0, 0],
      k = [
        [0, 0],
        [1, 1],
      ],
      j = { x: 0, y: 0 },
      C = new WeakMap(),
      M = new WeakMap(),
      _ = new WeakMap(),
      E = new WeakMap(),
      P = new WeakMap(),
      O = (e) => (e === document.scrollingElement ? window : e);
    function L(
      e,
      {
        container: t = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
      } = {},
    ) {
      if (!t) return s.noop;
      let i = _.get(t);
      i || ((i = new Set()), _.set(t, i));
      let a = (function (e, t, r, n = {}) {
        return {
          measure: (t) => {
            (!(function (e, t = e, r) {
              if (((r.x.targetOffset = 0), (r.y.targetOffset = 0), t !== e)) {
                let n = t;
                for (; n && n !== e; )
                  ((r.x.targetOffset += n.offsetLeft),
                    (r.y.targetOffset += n.offsetTop),
                    (n = n.offsetParent));
              }
              ((r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                (r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                (r.x.containerLength = e.clientWidth),
                (r.y.containerLength = e.clientHeight));
            })(e, n.target, r),
              g(e, "x", r, t),
              g(e, "y", r, t),
              (r.time = t),
              (n.offset || n.target) &&
                (function (e, t, r) {
                  let { offset: n = k } = r,
                    { target: i = e, axis: a = "y" } = r,
                    s = "y" === a ? "height" : "width",
                    l =
                      i !== e
                        ? (function (e, t) {
                            let r = { x: 0, y: 0 },
                              n = e;
                            for (; n && n !== t; )
                              if ((0, v.isHTMLElement)(n))
                                ((r.x += n.offsetLeft),
                                  (r.y += n.offsetTop),
                                  (n = n.offsetParent));
                              else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                  t = (n =
                                    n.parentElement).getBoundingClientRect();
                                ((r.x += e.left - t.left),
                                  (r.y += e.top - t.top));
                              } else if (n instanceof SVGGraphicsElement) {
                                let { x: e, y: t } = n.getBBox();
                                ((r.x += e), (r.y += t));
                                let i = null,
                                  a = n.parentNode;
                                for (; !i; )
                                  ("svg" === a.tagName && (i = a),
                                    (a = n.parentNode));
                                n = i;
                              } else break;
                            return r;
                          })(i, e)
                        : j,
                    o =
                      i === e
                        ? { width: e.scrollWidth, height: e.scrollHeight }
                        : "getBBox" in i && "svg" !== i.tagName
                          ? i.getBBox()
                          : { width: i.clientWidth, height: i.clientHeight },
                    c = { width: e.clientWidth, height: e.clientHeight };
                  t[a].offset.length = 0;
                  let u = !t[a].interpolate,
                    d = n.length;
                  for (let e = 0; e < d; e++) {
                    let r = (function (e, t, r, n) {
                      let i = Array.isArray(e) ? e : w,
                        a = 0;
                      return (
                        "number" == typeof e
                          ? (i = [e, e])
                          : "string" == typeof e &&
                            (i = (e = e.trim()).includes(" ")
                              ? e.split(" ")
                              : [e, x[e] ? e : "0"]),
                        (a = S(i[0], r, n)) - S(i[1], t)
                      );
                    })(n[e], c[s], o[s], l[a]);
                    (u || r === t[a].interpolatorOffsets[e] || (u = !0),
                      (t[a].offset[e] = r));
                  }
                  (u &&
                    ((t[a].interpolate = (0, m.interpolate)(
                      t[a].offset,
                      (0, y.defaultOffset)(n),
                      { clamp: !1 },
                    )),
                    (t[a].interpolatorOffsets = [...t[a].offset])),
                    (t[a].progress = (0, b.clamp)(
                      0,
                      1,
                      t[a].interpolate(t[a].current),
                    )));
                })(e, r, n));
          },
          notify: () => t(r),
        };
      })(t, e, { time: 0, x: p(), y: p() }, n);
      if ((i.add(a), !C.has(t))) {
        let e = () => {
            for (let e of i) e.measure(l.frameData.timestamp);
            l.frame.preUpdate(r);
          },
          r = () => {
            for (let e of i) e.notify();
          },
          n = () => l.frame.read(e);
        C.set(t, n);
        let a = O(t);
        (window.addEventListener("resize", n),
          t !== document.documentElement && M.set(t, (0, u.resize)(t, n)),
          a.addEventListener("scroll", n),
          n());
      }
      if (r && !P.has(t)) {
        let e = C.get(t),
          r = { width: t.scrollWidth, height: t.scrollHeight };
        E.set(t, r);
        let n = l.frame.read(() => {
          let n = t.scrollWidth,
            i = t.scrollHeight;
          (r.width !== n || r.height !== i) &&
            (e(), (r.width = n), (r.height = i));
        }, !0);
        P.set(t, n);
      }
      let o = C.get(t);
      return (
        l.frame.read(o, !1, !0),
        () => {
          (0, l.cancelFrame)(o);
          let e = _.get(t);
          if (!e || (e.delete(a), e.size)) return;
          let r = C.get(t);
          (C.delete(t),
            r &&
              (O(t).removeEventListener("scroll", r),
              M.get(t)?.(),
              window.removeEventListener("resize", r)));
          let n = P.get(t);
          (n && ((0, l.cancelFrame)(n), P.delete(t)), E.delete(t));
        }
      );
    }
    let T = [
        [
          [
            [0, 1],
            [1, 1],
          ],
          "entry",
        ],
        [
          [
            [0, 0],
            [1, 0],
          ],
          "exit",
        ],
        [
          [
            [1, 0],
            [0, 1],
          ],
          "cover",
        ],
        [k, "contain"],
      ],
      R = { start: 0, end: 1 };
    function D(e) {
      if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
      for (let [t, r] of T)
        if (
          (function (e, t) {
            let r = (function (e) {
              if (2 !== e.length) return;
              let t = [];
              for (let r of e)
                if (Array.isArray(r)) t.push(r);
                else {
                  if ("string" != typeof r) return;
                  let e = (function (e) {
                    let t = e.trim().split(/\s+/);
                    if (2 !== t.length) return;
                    let r = R[t[0]],
                      n = R[t[1]];
                    if (void 0 !== r && void 0 !== n) return [r, n];
                  })(r);
                  if (!e) return;
                  t.push(e);
                }
              return t;
            })(e);
            if (!r) return !1;
            for (let e = 0; e < 2; e++) {
              let n = r[e],
                i = t[e];
              if (n[0] !== i[0] || n[1] !== i[1]) return !1;
            }
            return !0;
          })(e, t)
        )
          return { rangeStart: `${r} 0%`, rangeEnd: `${r} 100%` };
    }
    let N = new Map();
    function B(e) {
      let t = { value: 0 },
        r = L((r) => {
          t.value = 100 * r[e.axis].progress;
        }, e);
      return { currentTime: t, cancel: r };
    }
    function A({ source: e, container: t, ...r }) {
      let { axis: n } = r;
      e && (t = e);
      let i = N.get(t);
      i || ((i = new Map()), N.set(t, i));
      let a = r.target ?? "self",
        s = i.get(a);
      s || ((s = {}), i.set(a, s));
      let l = n + (r.offset ?? []).join(",");
      return (
        s[l] ||
          (r.target && c(r.target)
            ? D(r.offset)
              ? (s[l] = new ViewTimeline({ subject: r.target, axis: n }))
              : (s[l] = B({ container: t, ...r }))
            : c()
              ? (s[l] = new ScrollTimeline({ source: t, axis: n }))
              : (s[l] = B({ container: t, ...r }))),
        s[l]
      );
    }
    function z(
      e,
      { axis: t = "y", container: r = document.scrollingElement, ...n } = {},
    ) {
      let i, a, l;
      if (!r) return s.noop;
      let u = { axis: t, container: r, ...n };
      return "function" == typeof e
        ? (function (e, t) {
            return 2 === e.length || (t && (t.target || t.offset))
              ? L((r) => {
                  e(r[t.axis].progress, r);
                }, t)
              : o(e, A(t));
          })(e, u)
        : ((i = A(u)),
          (a = u.target ? D(u.offset) : void 0),
          (l = u.target ? c(u.target) && !!a : c()),
          e.attachTimeline({
            timeline: l ? i : void 0,
            ...(a && l && { rangeStart: a.rangeStart, rangeEnd: a.rangeEnd }),
            observe: (e) => (
              e.pause(),
              o((t) => {
                e.time = e.iterationDuration * t;
              }, i)
            ),
          }));
    }
    var I = e.i(947414),
      W = e.i(674008);
    let F = () => ({
        scrollX: (0, n.motionValue)(0),
        scrollY: (0, n.motionValue)(0),
        scrollXProgress: (0, n.motionValue)(0),
        scrollYProgress: (0, n.motionValue)(0),
      }),
      $ = (e) => !!e && !e.current;
    function U(e, r, n, i) {
      return {
        factory: (a) => {
          let s,
            l = () => {
              $(n) || $(i)
                ? t.microtask.read(l)
                : (s = z(a, {
                    ...r,
                    axis: e,
                    container: n?.current || void 0,
                    target: i?.current || void 0,
                  }));
            };
          return (
            t.microtask.read(l),
            () => {
              ((0, t.cancelMicrotask)(l), s?.());
            }
          );
        },
        times: [0, 1],
        keyframes: [0, 1],
        ease: (e) => e,
        duration: 1,
      };
    }
    e.s(
      [
        "useScroll",
        0,
        function ({ container: e, target: n, ...s } = {}) {
          var l;
          let o = (0, I.useConstant)(F);
          ((l = s.offset),
            !("u" < typeof window) &&
              (n
                ? (0, r.supportsViewTimeline)() && !!D(l)
                : (0, r.supportsScrollTimeline)()) &&
              ((o.scrollXProgress.accelerate = U("x", s, e, n)),
              (o.scrollYProgress.accelerate = U("y", s, e, n))));
          let c = (0, a.useRef)(null),
            u = (0, a.useRef)(!1),
            d = (0, a.useCallback)(
              () => (
                (c.current = z(
                  (e, { x: t, y: r }) => {
                    (o.scrollX.set(t.current),
                      o.scrollXProgress.set(t.progress),
                      o.scrollY.set(r.current),
                      o.scrollYProgress.set(r.progress));
                  },
                  {
                    ...s,
                    container: e?.current || void 0,
                    target: n?.current || void 0,
                  },
                )),
                () => {
                  c.current?.();
                }
              ),
              [e, n, JSON.stringify(s.offset)],
            );
          return (
            (0, W.useIsomorphicLayoutEffect)(() => {
              if (((u.current = !1), !($(e) || $(n)))) return d();
              u.current = !0;
            }, [d]),
            (0, a.useEffect)(() => {
              let r;
              if (!u.current) return;
              let a = () => {
                let t = $(e),
                  a = $(n);
                ((0, i.invariant)(
                  !t,
                  "Container ref is defined but not hydrated",
                  "use-scroll-ref",
                ),
                  (0, i.invariant)(
                    !a,
                    "Target ref is defined but not hydrated",
                    "use-scroll-ref",
                  ),
                  t || a || (r = d()));
              };
              return (
                t.microtask.read(a),
                () => {
                  ((0, t.cancelMicrotask)(a), r?.());
                }
              );
            }, [d]),
            o
          );
        },
      ],
      310542,
    );
  },
  798688,
  (e) => {
    "use strict";
    var t = e.i(944296),
      r = e.i(579473);
    let n = (e) => e.reduce((e, t) => e + t.price * t.quantity, 0),
      i = (0, t.create)()(
        (0, r.persist)(
          (e, t) => ({
            cart: [],
            isCartOpen: !1,
            orderType: null,
            orderData: {},
            total: 0,
            addToCart: (t) =>
              e((e) => {
                let r = e.cart.find((e) => e.id === t.id)
                  ? e.cart.map((e) =>
                      e.id === t.id ? { ...e, quantity: e.quantity + 1 } : e,
                    )
                  : [...e.cart, { ...t, quantity: 1 }];
                return { cart: r, total: n(r) };
              }),
            removeFromCart: (t) =>
              e((e) => {
                let r = e.cart.filter((e) => e.id !== t);
                return { cart: r, total: n(r) };
              }),
            updateQuantity: (t, r) =>
              e((e) => {
                let i =
                  r <= 0
                    ? e.cart.filter((e) => e.id !== t)
                    : e.cart.map((e) =>
                        e.id === t ? { ...e, quantity: r } : e,
                      );
                return { cart: i, total: n(i) };
              }),
            openCart: () => e({ isCartOpen: !0 }),
            closeCart: () => e({ isCartOpen: !1 }),
            toggleCart: () => e((e) => ({ isCartOpen: !e.isCartOpen })),
            clearCart: () => e({ cart: [], total: 0 }),
            setCart: (t) => e({ cart: t, total: n(t) }),
            setOrderType: (t) => e({ orderType: t }),
            updateOrderData: (t) =>
              e((e) => ({ orderData: { ...e.orderData, ...t } })),
            clearOrderData: () => e({ orderData: {}, orderType: null }),
          }),
          {
            name: "hey-fede-cart",
            partialize: (e) => ({
              cart: e.cart,
              orderType: e.orderType,
              orderData: e.orderData,
            }),
          },
        ),
      );
    e.s(["useStore", 0, i]);
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
  389876,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]);
    e.s(["default", 0, t]);
  },
  420865,
  (e) => {
    "use strict";
    var t = e.i(389876);
    e.s(["MapPin", () => t.default]);
  },
  71395,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("user", [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
    ]);
    e.s(["default", 0, t]);
  },
  901279,
  (e) => {
    "use strict";
    var t = e.i(71395);
    e.s(["User", () => t.default]);
  },
  488143,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: i,
      blurDataURL: a,
      objectFit: s,
    }) {
      let l = r ? 40 * r : e,
        o = i ? 40 * i : t,
        c = l && o ? `viewBox='0 0 ${l} ${o}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  987690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return a;
      },
      imageConfigDefault: function () {
        return s;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
      s = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  908927,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      e.r(233525));
    let n = e.r(543369),
      i = e.r(488143),
      a = e.r(987690),
      s = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function o(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function c(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: d = !1,
        loading: f,
        className: p,
        quality: h,
        width: g,
        height: m,
        fill: y = !1,
        style: b,
        overrideSrc: v,
        onLoad: x,
        onLoadingComplete: S,
        placeholder: w = "empty",
        blurDataURL: k,
        fetchPriority: j,
        decoding: C = "async",
        layout: M,
        objectFit: _,
        objectPosition: E,
        lazyBoundary: P,
        lazyRoot: O,
        ...L
      },
      T,
    ) {
      var R;
      let D,
        N,
        B,
        { imgConf: A, showAltText: z, blurComplete: I, defaultLoader: W } = T,
        F = A || a.imageConfigDefault;
      if ("allSizes" in F) D = F;
      else {
        let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
          t = F.deviceSizes.sort((e, t) => e - t),
          r = F.qualities?.sort((e, t) => e - t);
        D = { ...F, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === W)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let $ = L.loader || W;
      (delete L.loader, delete L.srcSet);
      let U = "__next_img_default" in $;
      if (U) {
        if ("custom" === D.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = $;
        $ = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (M) {
        "fill" === M && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[M];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[M];
        r && !t && (t = r);
      }
      let H = "",
        K = o(g),
        q = o(m);
      if ((R = e) && "object" == typeof R && (l(R) || void 0 !== R.src)) {
        let t = l(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (
          ((N = t.blurWidth),
          (B = t.blurHeight),
          (k = k || t.blurDataURL),
          (H = t.src),
          !y)
        )
          if (K || q) {
            if (K && !q) {
              let e = K / t.width;
              q = Math.round(t.height * e);
            } else if (!K && q) {
              let e = q / t.height;
              K = Math.round(t.width * e);
            }
          } else ((K = t.width), (q = t.height));
      }
      let G = !u && !d && ("lazy" === f || void 0 === f);
      ((!(e = "string" == typeof e ? e : H) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (G = !1)),
        D.unoptimized && (r = !0),
        U &&
          !D.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0));
      let V = o(h),
        X = Object.assign(
          y
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: _,
                objectPosition: E,
              }
            : {},
          z ? {} : { color: "transparent" },
          b,
        ),
        Z =
          I || "empty" === w
            ? null
            : "blur" === w
              ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: K, heightInt: q, blurWidth: N, blurHeight: B, blurDataURL: k || "", objectFit: X.objectFit })}")`
              : `url("${w}")`,
        Q = s.includes(X.objectFit)
          ? "fill" === X.objectFit
            ? "100% 100%"
            : "cover"
          : X.objectFit,
        Y = Z
          ? {
              backgroundSize: Q,
              backgroundPosition: X.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Z,
            }
          : {},
        J = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: a,
          sizes: s,
          loader: l,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, n.getDeploymentId)();
              if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let n = new URLSearchParams(t.slice(r + 1));
                  n.get("dpl") ||
                    (n.append("dpl", e),
                    (t = t.slice(0, r) + "?" + n.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: o, kind: c } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n,
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1],
                        ),
                      ),
                    ],
                    kind: "x",
                  };
            })(e, i, s),
            u = o.length - 1;
          return {
            sizes: s || "w" !== c ? s : "100vw",
            srcSet: o
              .map(
                (r, n) =>
                  `${l({ config: e, src: t, quality: a, width: r })} ${"w" === c ? r : n + 1}${c}`,
              )
              .join(", "),
            src: l({ config: e, src: t, quality: a, width: o[u] }),
          };
        })({
          config: D,
          src: e,
          unoptimized: r,
          width: K,
          quality: V,
          sizes: t,
          loader: $,
        }),
        ee = G ? "lazy" : f;
      return {
        props: {
          ...L,
          loading: ee,
          fetchPriority: j,
          width: K,
          height: q,
          decoding: C,
          className: p,
          style: { ...X, ...Y },
          sizes: J.sizes,
          srcSet: J.srcSet,
          src: v || J.src,
        },
        meta: { unoptimized: r, preload: d || u, placeholder: w, fill: y },
      };
    }
  },
  898879,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(271645),
      i = "u" < typeof window,
      a = i ? () => {} : n.useLayoutEffect,
      s = i ? () => {} : n.useEffect;
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function l() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean),
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), l()),
        a(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        a(
          () => (
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l);
            }
          ),
        ),
        s(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  325633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(555682),
      s = e.r(190809),
      l = e.r(843476),
      o = s._(e.r(271645)),
      c = a._(e.r(898879)),
      u = e.r(742732);
    function d() {
      return [
        (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, l.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport",
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                [],
              ),
            )
          : e.concat(t);
    }
    e.r(233525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function h(e) {
      let t, r, n, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let a = !0,
              s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              s = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (a = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (a = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (a = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !s) && n.has(t)
                        ? (a = !1)
                        : (n.add(t), (i[r] = n));
                    }
                }
            }
            return a;
          }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return o.default.cloneElement(e, { key: r });
        });
    }
    let g = function ({ children: e }) {
      let t = (0, o.useContext)(u.HeadManagerContext);
      return (0, l.jsx)(c.default, {
        reduceComponentsToState: h,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  918556,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(555682)._(e.r(271645)),
      i = e.r(987690),
      a = n.default.createContext(i.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(555682)._(e.r(271645)).default.createContext(null);
  },
  670965,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            t.qualities[0],
          )
        : r;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  1948,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let n = e.r(670965),
      i = e.r(543369);
    function a({ config: e, src: t, width: r, quality: s }) {
      let l = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let r = new URLSearchParams(t.slice(e + 1)),
            n = r.get("dpl");
          if (n) {
            ((l = n), r.delete("dpl"));
            let i = r.toString();
            t = t.slice(0, e) + (i ? "?" + i : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let o = (0, n.findClosestQuality)(s, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`;
    }
    a.__next_img_default = !0;
    let s = a;
  },
  605500,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return x;
        },
      }));
    let n = e.r(555682),
      i = e.r(190809),
      a = e.r(843476),
      s = i._(e.r(271645)),
      l = n._(e.r(174080)),
      o = n._(e.r(325633)),
      c = e.r(908927),
      u = e.r(987690),
      d = e.r(918556);
    e.r(233525);
    let f = e.r(65856),
      p = n._(e.r(1948)),
      h = e.r(818581),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function m(e, t, r, n, i, a, s) {
      let l = e?.src;
      e &&
        e["data-loaded-src"] !== l &&
        ((e["data-loaded-src"] = l),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    ((n = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((i = !0), t.stopPropagation());
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function y(e) {
      return s.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, s.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: i,
          decoding: l,
          className: o,
          style: c,
          fetchPriority: u,
          placeholder: d,
          loading: f,
          unoptimized: p,
          fill: g,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: x,
          setShowAltText: S,
          sizesInput: w,
          onLoad: k,
          onError: j,
          ...C
        },
        M,
      ) => {
        let _ = (0, s.useCallback)(
            (e) => {
              e && (j && (e.src = e.src), e.complete && m(e, d, b, v, x, p, w));
            },
            [e, d, b, v, x, j, p, w],
          ),
          E = (0, h.useMergedRef)(M, _);
        return (0, a.jsx)("img", {
          ...C,
          ...y(u),
          loading: f,
          width: i,
          height: n,
          decoding: l,
          "data-nimg": g ? "fill" : "1",
          className: o,
          style: c,
          sizes: r,
          srcSet: t,
          src: e,
          ref: E,
          onLoad: (e) => {
            m(e.currentTarget, d, b, v, x, p, w);
          },
          onError: (e) => {
            (S(!0), "empty" !== d && x(!0), j && j(e));
          },
        });
      },
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && l.default.preload
        ? (l.default.preload(t.src, r), null)
        : (0, a.jsx)(o.default, {
            children: (0, a.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let x = (0, s.forwardRef)((e, t) => {
      let r = (0, s.useContext)(f.RouterContext),
        n = (0, s.useContext)(d.ImageConfigContext),
        i = (0, s.useMemo)(() => {
          let e = g || n || u.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: l, onLoadingComplete: o } = e,
        h = (0, s.useRef)(l);
      (0, s.useEffect)(() => {
        h.current = l;
      }, [l]);
      let m = (0, s.useRef)(o);
      (0, s.useEffect)(() => {
        m.current = o;
      }, [o]);
      let [y, x] = (0, s.useState)(!1),
        [S, w] = (0, s.useState)(!1),
        { props: k, meta: j } = (0, c.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: y,
          showAltText: S,
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(b, {
            ...k,
            unoptimized: j.unoptimized,
            placeholder: j.placeholder,
            fill: j.fill,
            onLoadRef: h,
            onLoadingCompleteRef: m,
            setBlurComplete: x,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t,
          }),
          j.preload
            ? (0, a.jsx)(v, { isAppRouter: !r, imgAttributes: k })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  794909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return u;
      },
      getImageProps: function () {
        return c;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(555682),
      s = e.r(908927),
      l = e.r(605500),
      o = a._(e.r(1948));
    function c(e) {
      let { props: t } = (0, s.getImgProps)(e, {
        defaultLoader: o.default,
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
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let u = l.Image;
  },
  657688,
  (e, t, r) => {
    t.exports = e.r(794909);
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
  476303,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("phone", [
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
          key: "9njp5v",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  575387,
  (e) => {
    "use strict";
    var t = e.i(476303);
    e.s(["Phone", () => t.default]);
  },
  153287,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var r = e.i(386205),
      n = e.i(263802),
      i = e.i(959141);
    e.s([
      "useStoreSettings",
      0,
      function () {
        let [e, a] = (0, t.useState)(null),
          [s, l] = (0, t.useState)(!0),
          [o, c] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            let e = (0, n.onSnapshot)(
              (0, r.doc)(i.db, "store_settings", "general"),
              (e) => {
                (e.exists() ? a({ id: e.id, ...e.data() }) : a(null),
                  l(!1),
                  c(null));
              },
              (e) => {
                (console.error("useStoreSettings error:", e), c(e), l(!1));
              },
            );
            return () => e();
          }, []),
          { settings: e, loading: s, error: o }
        );
      },
    ]);
  },
  615227,
  (e) => {
    "use strict";
    var t = e.i(164939);
    e.s(["MessageCircle", () => t.default]);
  },
  176699,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("minus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
    ]);
    e.s(["default", 0, t]);
  },
  935829,
  (e) => {
    "use strict";
    var t = e.i(176699);
    e.s(["Minus", () => t.default]);
  },
  747265,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(919056);
    let n = {
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": !0,
    };
    e.s([
      "Boxen",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", { d: "M4 12 L16 18 L28 12 L16 6 Z" }),
            (0, t.jsx)("path", { d: "M4 12 L4 22 L16 28 L28 22 L28 12" }),
            (0, t.jsx)("path", { d: "M16 18 L16 28" }),
          ],
        });
      },
      "BubbleWaffle",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", {
              d: "M16 28 C 10 20 6 12 10 6 C 14 8 18 8 22 6 C 26 12 22 20 16 28 Z",
            }),
            (0, t.jsx)("circle", { cx: "12", cy: "12", r: "1.5" }),
            (0, t.jsx)("circle", { cx: "16", cy: "14", r: "1.5" }),
            (0, t.jsx)("circle", { cx: "20", cy: "12", r: "1.5" }),
            (0, t.jsx)("circle", { cx: "14", cy: "18", r: "1.5" }),
            (0, t.jsx)("circle", { cx: "18", cy: "18", r: "1.5" }),
            (0, t.jsx)("circle", { cx: "16", cy: "22", r: "1.5" }),
          ],
        });
      },
      "Cake",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", { d: "M6 24 L26 24 L26 12 L16 6 L6 12 Z" }),
            (0, t.jsx)("path", { d: "M6 16 L26 16" }),
            (0, t.jsx)("path", { d: "M16 6 L16 2" }),
            (0, t.jsx)("circle", {
              cx: "16",
              cy: "2",
              r: "1",
              fill: "currentColor",
              stroke: "none",
            }),
          ],
        });
      },
      "Coffee",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", {
              d: "M8 10 L8 24 C 8 26 10 28 16 28 C 22 28 24 26 24 24 L24 10 Z",
            }),
            (0, t.jsx)("path", { d: "M24 14 C 28 14 28 20 24 20" }),
            (0, t.jsx)("path", { d: "M12 4 C 11 6 13 8 12 10" }),
            (0, t.jsx)("path", { d: "M16 3 C 15 5 17 7 16 9" }),
            (0, t.jsx)("path", { d: "M20 4 C 19 6 21 8 20 10" }),
          ],
        });
      },
      "Crepes",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", { d: "M4 26 L28 26 L16 6 L8 14 Z" }),
            (0, t.jsx)("path", { d: "M12 26 L20 16" }),
            (0, t.jsx)("path", { d: "M18 26 L24 20" }),
          ],
        });
      },
      "Eisbecher",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", { d: "M8 12 L12 26 L20 26 L24 12 Z" }),
            (0, t.jsx)("path", { d: "M10 26 L6 28 M22 26 L26 28" }),
            (0, t.jsx)("path", {
              d: "M10 12 C 10 7 14 4 16 4 C 18 4 22 7 22 12",
            }),
            (0, t.jsx)("path", { d: "M13 12 C 13 9 19 9 19 12" }),
          ],
        });
      },
      "HamburgerIcon",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", { d: "M4.5 9 C 12 8 20 10 27.5 9" }),
            (0, t.jsx)("path", { d: "M5 16 C 10 16 22 15 27 16" }),
            (0, t.jsx)("path", { d: "M4.5 23 C 12 24 20 22 27.5 23" }),
          ],
        });
      },
      "Pancakes",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("ellipse", { cx: "16", cy: "22", rx: "10", ry: "3" }),
            (0, t.jsx)("ellipse", { cx: "16", cy: "17", rx: "10", ry: "3" }),
            (0, t.jsx)("ellipse", { cx: "16", cy: "12", rx: "10", ry: "3" }),
            (0, t.jsx)("path", {
              d: "M14 6 C 14 4 18 4 18 6 C 18 9 14 9 14 6 Z",
              fill: "currentColor",
              stroke: "none",
            }),
          ],
        });
      },
      "Shakes",
      0,
      function ({ className: e, ...i }) {
        return (0, t.jsxs)("svg", {
          ...n,
          className: (0, r.twMerge)("w-6 h-6", e),
          ...i,
          children: [
            (0, t.jsx)("path", { d: "M10 14 L12 28 L20 28 L22 14 Z" }),
            (0, t.jsx)("path", {
              d: "M9 14 C 9 9 13 6 16 6 C 19 6 23 9 23 14",
            }),
            (0, t.jsx)("path", { d: "M18 6 L20 2" }),
          ],
        });
      },
    ]);
  },
  667585,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(132061);
    function i({ reason: e, children: t }) {
      if ("u" < typeof window)
        throw Object.defineProperty(
          new n.BailoutToCSRError(e),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return t;
    }
  },
  309885,
  (e, t, r) => {
    "use strict";
    function n(e) {
      return e
        .split("/")
        .map((e) => encodeURIComponent(e))
        .join("/");
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  652157,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(843476),
      i = e.r(174080),
      a = e.r(563599),
      s = e.r(309885),
      l = e.r(543369);
    function o({ moduleIds: e }) {
      if ("u" > typeof window) return null;
      let t = a.workAsyncStorage.getStore();
      if (void 0 === t) return null;
      let r = [];
      if (t.reactLoadableManifest && e) {
        let n = t.reactLoadableManifest;
        for (let t of e) {
          if (!n[t]) continue;
          let e = n[t].files;
          r.push(...e);
        }
      }
      if (0 === r.length) return null;
      let c = (0, l.getAssetTokenQuery)();
      return (0, n.jsx)(n.Fragment, {
        children: r.map((e) => {
          let r = `${t.assetPrefix}/_next/${(0, s.encodeURIPath)(e)}${c}`;
          return e.endsWith(".css")
            ? (0, n.jsx)(
                "link",
                {
                  precedence: "dynamic",
                  href: r,
                  rel: "stylesheet",
                  as: "style",
                  nonce: t.nonce,
                },
                e,
              )
            : ((0, i.preload)(r, {
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
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    let n = e.r(843476),
      i = e.r(271645),
      a = e.r(667585),
      s = e.r(652157);
    function l(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let o = {
        loader: () => Promise.resolve(l(() => null)),
        loading: null,
        ssr: !0,
      },
      c = function (e) {
        let t = { ...o, ...e },
          r = (0, i.lazy)(() => t.loader().then(l)),
          c = t.loading;
        function u(e) {
          let l = c
              ? (0, n.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            o = !t.ssr || !!t.loading,
            u = o ? i.Suspense : i.Fragment,
            d = t.ssr
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    "u" < typeof window
                      ? (0, n.jsx)(s.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, n.jsx)(r, { ...e }),
                  ],
                })
              : (0, n.jsx)(a.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, n.jsx)(r, { ...e }),
                });
          return (0, n.jsx)(u, { ...(o ? { fallback: l } : {}), children: d });
        }
        return ((u.displayName = "LoadableComponent"), u);
      };
  },
  770703,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(555682)._(e.r(869093));
    function i(e, t) {
      let r = {};
      "function" == typeof e && (r.loader = e);
      let i = { ...r, ...t };
      return (0, n.default)({ ...i, modules: i.loadableGenerated?.modules });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  724983,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("circle-alert", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
    ]);
    e.s(["default", 0, t]);
  },
  399847,
  (e) => {
    "use strict";
    var t = e.i(724983);
    e.s(["AlertCircle", () => t.default]);
  },
  126515,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(318028),
      n = e.i(816148),
      i = e.i(399847);
    e.s([
      "ClientHoursTable",
      0,
      function () {
        let e,
          a = 0 === (e = new Date().getDay()) ? 6 : e - 1,
          { emergencyNotice: s } = n.store_settings;
        return (0, t.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [
            s &&
              (0, t.jsxs)("div", {
                className:
                  "bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 rounded-[15px] p-3 flex gap-2.5 items-start",
                children: [
                  (0, t.jsx)(i.AlertCircle, {
                    size: 18,
                    color: "#ff4d4d",
                    className: "shrink-0 mt-0.5",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "font-nunito text-[0.85rem] text-[#ff4d4d] leading-[1.4] font-bold",
                    children: s,
                  }),
                ],
              }),
            (0, t.jsx)("div", {
              className: "bg-[#eedfcc] rounded-[18px] overflow-hidden",
              children: r.BUSINESS.openingHoursDisplay.map((e, r) => {
                let n = r === a,
                  i = "Geschlossen" === e.hours;
                return (0, t.jsxs)(
                  "div",
                  {
                    className: `flex justify-between items-center p-[13px_19px] ${n ? "bg-[#CC624C]" : "bg-transparent border-b border-[rgba(228,192,168,0.45)] last:border-b-0"}`,
                    itemScope: !0,
                    itemProp: "openingHoursSpecification",
                    itemType: "https://schema.org/OpeningHoursSpecification",
                    children: [
                      (0, t.jsx)("meta", {
                        itemProp: "dayOfWeek",
                        content: `https://schema.org/${e.day.replace("Montag", "Monday").replace("Dienstag", "Tuesday").replace("Mittwoch", "Wednesday").replace("Donnerstag", "Thursday").replace("Freitag", "Friday").replace("Samstag", "Saturday").replace("Sonntag", "Sunday")}`,
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          n &&
                            (0, t.jsx)("div", {
                              className:
                                "w-1.5 h-1.5 bg-white rounded-full shrink-0",
                            }),
                          (0, t.jsx)("span", {
                            className: `font-nunito text-[0.87rem] ${n ? "font-black text-white" : "font-semibold text-[#2d1f19]"}`,
                            children: e.day,
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex items-center gap-[9px]",
                        children: [
                          (0, t.jsx)("span", {
                            className: `font-nunito text-[0.87rem] ${n ? "text-white font-bold" : i ? "text-[#9a7060] font-normal" : "text-[#5c3d35] font-normal"}`,
                            children: e.hours,
                          }),
                          n &&
                            (0, t.jsx)("span", {
                              className:
                                "bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full",
                              children: "Heute",
                            }),
                        ],
                      }),
                    ],
                  },
                  e.day,
                );
              }),
            }),
          ],
        });
      },
    ]);
  },
  318028,
  (e) => {
    "use strict";
    let t = {
        name: "Hey Fede! Dessertbar & Café",
        legalName: "Hey Fede!",
        street: "Langgasse 68",
        postalCode: "35576",
        city: "Wetzlar",
        region: "DE-HE",
        country: "DE",
        countryName: "Deutschland",
        phone: "06441 7890426",
        phoneTel: "+4964417890426",
        whatsapp: "017625026991",
        whatsappDisplay: "0176 25026991",
        email: "hallo@hey-fede.de",
        emailPrivacy: "datenschutz@hey-fede.de",
        latitude: 50.5604,
        longitude: 8.5048,
        instagram: "heyfede_wetzlar",
        instagramUrl: "https://www.instagram.com/heyfede_wetzlar",
        googleMapsUrl: "https://maps.google.com/?q=Langgasse+68+Wetzlar",
        lieferandoUrl: "https://www.lieferando.de/speisekarte/hey-fede",
        foundingYear: "2023",
        founder: "Federica",
        priceRange: "€€",
        rating: 4.8,
        reviewCount: 84,
        servesCuisine: [
          "Desserts",
          "Bubble Waffles",
          "Crêpes",
          "Pancakes",
          "Eisbecher",
          "Milkshakes",
          "Café",
          "Kaffee",
          "Kuchen",
          "Cookies",
        ],
        paymentAccepted: [
          "Bargeld",
          "EC-Karte",
          "Kreditkarte",
          "Apple Pay",
          "Google Pay",
        ],
        openingHours: {
          monday: null,
          tuesday: null,
          wednesday: { opens: "12:00", closes: "19:00" },
          thursday: { opens: "12:00", closes: "19:00" },
          friday: { opens: "12:00", closes: "19:00" },
          saturday: { opens: "12:00", closes: "19:00" },
          sunday: { opens: "13:00", closes: "19:00" },
        },
        openingHoursDisplay: [
          { day: "Montag", hours: "Geschlossen" },
          { day: "Dienstag", hours: "Geschlossen" },
          { day: "Mittwoch", hours: "12:00 – 19:00 Uhr" },
          { day: "Donnerstag", hours: "12:00 – 19:00 Uhr" },
          { day: "Freitag", hours: "12:00 – 19:00 Uhr" },
          { day: "Samstag", hours: "12:00 – 19:00 Uhr" },
          { day: "Sonntag", hours: "13:00 – 19:00 Uhr" },
        ],
        amenities: {
          wifi: !0,
          outdoorSeating: !0,
          familyFriendly: !0,
          vegetarian: !0,
          vegan: !0,
          halal: !0,
          takeaway: !0,
          delivery: !0,
          wheelchairAccessible: !0,
          cardPayment: !0,
        },
      },
      r = `${t.street}, ${t.postalCode} ${t.city}`;
    (t.latitude, t.longitude, e.s(["BUSINESS", 0, t, "FULL_ADDRESS", 0, r]));
  },
  816148,
  (e) => {
    "use strict";
    var t = e.i(318028);
    let r = {
        is_open: !0,
        is_accepting_orders: !0,
        busy_mode: !1,
        pickup_time_estimate_mins: 15,
        phone: t.BUSINESS.phone,
        emergencyNotice: null,
      },
      n = {
        config: {
          name: "Hey Fede!",
          tagline: "Dessertbar & Café",
          address: `${t.BUSINESS.street}, ${t.BUSINESS.postalCode} ${t.BUSINESS.city}`,
          phone: t.BUSINESS.phone,
          whatsapp: "0176 25026991",
          instagram: "heyfede_wetzlar",
          rating: 4.8,
          reviewCount: 84,
        },
        categories: [
          { id: "boxen", label: "Fede Boxen", icon: "Package" },
          { id: "bubble", label: "Bubble Waffle", icon: "Layers" },
          { id: "crepes", label: "Crêpes", icon: "Cake" },
          { id: "kuchen", label: "Kuchen", icon: "Cake" },
          { id: "cookies", label: "Cookies", icon: "Cookie" },
          { id: "eisbecher", label: "Eisbecher 500ml", icon: "Coffee" },
          { id: "shakes", label: "Special Shakes", icon: "Coffee" },
          { id: "iced", label: "Iced Drinks", icon: "Droplets" },
          { id: "stullen", label: "Stullen", icon: "Sandwich" },
          { id: "getraenke", label: "Getränke", icon: "Droplets" },
        ],
        menu: {
          boxen: {
            desc: "Legendäre Sharing-Boxen — perfekt für Gruppen & Familien.",
            items: [
              {
                id: "fede-friends",
                name: "Fede & Friends",
                price: "25,00 €",
                tag: "Sharing Box",
                ticket: !0,
                desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 3 Mini-Croissants · 3 Mini-Schokobrötchen · 3 Mini-Windbeutel · 3 Schokosbällchen · 4 Soßen",
              },
              {
                id: "pancake-picknick",
                name: "Pancake Picknick",
                price: "7,00 €",
                tag: "",
                ticket: !0,
                desc: "12 Pancakes · 2 Fruchtsorten · Soße nach Wahl",
              },
              {
                id: "mix-box",
                name: "Mix Box",
                price: "15,00 €",
                tag: "Beliebt",
                ticket: !0,
                desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 2 Soßen",
              },
              {
                id: "nutella-box",
                name: "Nutella Box",
                price: "15,00 €",
                tag: "",
                ticket: !0,
                desc: "10 Pancakes · Bubble Waffle · 1 Fruchtsorte · 2× Nutella · 3 Mini-Croissants · 3 Schokosbällchen",
              },
            ],
          },
          bubble: {
            desc: "Knusprig, luftig, unwiderstehlich — mit Soßen & Toppings frei kreierbar.",
            note: "Deine Leckerei kannst du mit Soßen & Toppings deiner Wahl selbst kreieren!",
            items: [
              {
                id: "b1",
                name: "Puderzucker",
                price: "3,80 €",
                desc: "Klassisch mit Puderzucker bestäubt",
              },
              {
                id: "b2",
                name: "Soße nach Wahl",
                price: "5,00 €",
                desc: "Mit deiner Lieblingssoße",
              },
              {
                id: "b3",
                name: "Eis + Sahne",
                price: "6,50 €",
                desc: "Mit Eiskugel & Sahne (oder 2 Eiskugeln statt Sahne)",
              },
              {
                id: "b4",
                name: "Deluxe",
                price: "8,80 €",
                tag: "Beliebt",
                desc: "Eis + Sahne + 3 Toppings + Soße · auch mit 2 Eiskugeln möglich",
              },
            ],
          },
          crepes: {
            desc: "Hauchdünn und vielseitig — von klassisch bis fruchtig.",
            note: "Deine Leckerei kannst du mit Soßen & Toppings selbst kreieren!",
            items: [
              {
                id: "c1",
                name: "Puderzucker / Zimt",
                price: "3,50 €",
                desc: "Der Klassiker",
              },
              {
                id: "c2",
                name: "Nutella",
                price: "4,50 €",
                desc: "Mit reichlich Nutella",
              },
              {
                id: "c3",
                name: "Nutella + Topping",
                price: "5,50 €",
                desc: "Nutella + Topping deiner Wahl",
              },
              {
                id: "c4",
                name: "Fruit Fiesta",
                price: "5,00 €",
                tag: "Empfohlen",
                desc: "Verschiedene Früchte & eine Soße",
              },
            ],
          },
          kuchen: {
            desc: "Täglich frisch gebacken — schau in unsere Vitrine!",
            items: [
              {
                id: "k1",
                name: "Kuchen des Tages",
                price: "Auf Anfrage",
                tag: "Täglich frisch",
                desc: "Täglich wechselnde Sorten in unserer Vitrine",
              },
              {
                id: "k2",
                name: "Tortenstück",
                price: "Auf Anfrage",
                desc: "Auswahl an Tortenspezialitäten",
              },
            ],
          },
          cookies: {
            desc: "Frisch gebacken, knusprig, in verschiedenen Sorten.",
            items: [
              {
                id: "co1",
                name: "Cookies",
                price: "Auf Anfrage",
                tag: "Frisch",
                desc: "Täglich frisch gebacken in verschiedenen Sorten",
              },
            ],
          },
          eisbecher: {
            desc: "Großzügige 500ml Eisbecher — ein Traum für Eisliebhaber.",
            items: [
              {
                id: "e1",
                name: "Bananasplit",
                price: "7,50 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e2",
                name: "Walnuss",
                price: "8,00 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e3",
                name: "Schoko",
                price: "7,00 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e4",
                name: "Frucht",
                price: "7,50 €",
                desc: "500ml Eisbecher",
              },
              {
                id: "e5",
                name: "Spaghetti",
                price: "7,00 €",
                tag: "Klassiker",
                desc: "500ml Eisbecher",
              },
              {
                id: "e6",
                name: "Erdbeer",
                price: "7,50 €",
                desc: "500ml Eisbecher",
              },
            ],
          },
          shakes: {
            desc: "0,4l frisch gemixt mit Sahne — alle Sorten 6,50 €.",
            items: [
              {
                id: "s1",
                name: "Nutella Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s2",
                name: "Cheesecake Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s3",
                name: "Oreo Shake",
                price: "6,50 €",
                tag: "Beliebt",
                desc: "0,4l + Sahne",
              },
              {
                id: "s4",
                name: "Snickers Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s5",
                name: "Lotus Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
              {
                id: "s6",
                name: "Bueno Shake",
                price: "6,50 €",
                desc: "0,4l + Sahne",
              },
            ],
          },
          iced: {
            desc: "Frisch zubereitet, eiskalt serviert.",
            items: [
              {
                id: "i1",
                name: "Iced Matcha",
                price: "ab 4,50 €",
                tag: "Trend",
                desc: "Hochwertiger Matcha, kalt aufgegossen",
              },
              {
                id: "i2",
                name: "Iced Coffee",
                price: "ab 4,50 €",
                desc: "Cold Brew über Eis",
              },
              {
                id: "i3",
                name: "Iced Latte",
                price: "ab 4,50 €",
                desc: "Espresso, Milch & Eis",
              },
            ],
          },
          stullen: {
            desc: "Herzhaftes für zwischendurch.",
            items: [
              {
                id: "st1",
                name: "Stullen",
                price: "Auf Anfrage",
                desc: "Belegte Brote nach Verfügbarkeit",
              },
            ],
          },
          getraenke: {
            desc: "Kalte Getränke für jeden Geschmack.",
            items: [
              {
                id: "g1",
                name: "Eisschokolade 0,2l",
                price: "4,50 €",
                desc: "",
              },
              {
                id: "g2",
                name: "Eisschokolade 0,4l",
                price: "6,50 €",
                desc: "",
              },
              { id: "g3", name: "Eiskaffee 0,3l", price: "4,50 €", desc: "" },
              { id: "g4", name: "Eiskaffee 0,5l", price: "6,50 €", desc: "" },
              { id: "g5", name: "Milchshake 0,3l", price: "4,50 €", desc: "" },
              { id: "g6", name: "Milchshake 0,5l", price: "5,50 €", desc: "" },
            ],
          },
        },
        bestsellers: [
          {
            id: "bs1",
            name: "Fede & Friends Box",
            desc: "Das ultimative Sharing-Erlebnis für Gruppen",
            price: "25,00 €",
            tag: "Bestseller",
            icon: "Package",
          },
          {
            id: "bs2",
            name: "Bubble Waffle Deluxe",
            desc: "Eis + Sahne + 3 Toppings nach Wahl",
            price: "8,80 €",
            tag: "Beliebt",
            icon: "Layers",
          },
          {
            id: "bs3",
            name: "Oreo Special Shake",
            desc: "0,4l · frisch gemixt mit Sahne",
            price: "6,50 €",
            tag: "",
            icon: "Coffee",
          },
          {
            id: "bs4",
            name: "Pancake Picknick",
            desc: "12 Pancakes · 2 Fruchtsorten · Soße",
            price: "7,00 €",
            tag: "",
            icon: "Cake",
          },
        ],
        reviews: [
          {
            id: "r1",
            name: "Sarah M.",
            stars: 5,
            text: "Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend.",
          },
          {
            id: "r2",
            name: "Thomas K.",
            stars: 5,
            text: "Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!",
          },
          {
            id: "r3",
            name: "Lisa R.",
            stars: 5,
            text: "Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch.",
          },
          {
            id: "r4",
            name: "Marco S.",
            stars: 4,
            text: "Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!",
          },
          {
            id: "r5",
            name: "Julia W.",
            stars: 5,
            text: "Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!",
          },
        ],
      },
      {
        CATEGORIES: i,
        MENU: a,
        BESTSELLERS: s,
        REVIEWS: l,
      } = {
        CATEGORIES: n.categories,
        MENU: n.menu,
        BESTSELLERS: n.bestsellers,
        REVIEWS: n.reviews,
      };
    e.s(["BESTSELLERS", 0, s, "HF_DATA", 0, n, "store_settings", 0, r]);
  },
  892732,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(846932),
      n = e.i(772328);
    let i = {
      organic1:
        "M 60,10 C 90,5 120,30 110,60 C 105,85 75,105 45,100 C 15,95 5,65 15,40 C 25,15 40,12 60,10 Z",
      organic2:
        "M 50,15 C 80,8 105,35 95,60 C 90,80 70,98 45,95 C 20,92 8,68 12,42 C 18,20 35,18 50,15 Z",
      organic3:
        "M 55,8 C 85,12 110,28 108,55 C 106,82 80,102 50,98 C 18,94 4,62 12,38 C 18,18 35,5 55,8 Z",
    };
    e.s([
      "FloatingBlob",
      0,
      function ({
        variant: e = "organic1",
        color: a = "peach",
        opacity: s = 0.55,
        size: l = 360,
        delay: o = 0,
        reverse: c = !1,
        className: u,
      }) {
        let d = (0, n.useReducedMotion)();
        return (0, t.jsx)(r.motion.svg, {
          viewBox: "0 0 120 120",
          width: l,
          height: l,
          className: `absolute pointer-events-none ${u ?? ""}`,
          "aria-hidden": "true",
          animate: d
            ? void 0
            : {
                y: c ? [0, 12, 0] : [0, -12, 0],
                x: c ? [0, -8, 0] : [0, 8, 0],
                rotate: c ? [0, -3, 0] : [0, 3, 0],
                scale: [1, 1.04, 1],
              },
          transition: d
            ? void 0
            : { duration: 12, delay: o, repeat: 1 / 0, ease: "easeInOut" },
          children: (0, t.jsx)("path", {
            d: i[e],
            className: {
              peach: "fill-peach",
              cream: "fill-cream",
              terracotta: "fill-terracotta",
              beige: "fill-beige",
              brown: "fill-brown",
            }[a],
            opacity: s,
          }),
        });
      },
    ]);
  },
  164939,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("message-circle", [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  213227,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("camera", [
      [
        "path",
        {
          d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
          key: "18u6gg",
        },
      ],
      ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
    ]);
    e.s(["default", 0, t]);
  },
  480929,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(919056);
    let n = {
      "single-bump": "M0,50 Q500,0 1000,50 L1000,100 L0,100 Z",
      "three-bump": "M0,50 Q250,20 500,50 T1000,50 L1000,100 L0,100 Z",
      "long-curve": "M0,100 C300,20 700,80 1000,0 L1000,100 L0,100 Z",
    };
    e.s([
      "WaveDivider",
      0,
      function ({
        variant: e = "single-bump",
        fillClass: i = "text-sand",
        flip: a = !1,
        className: s,
      }) {
        return (0, t.jsx)("div", {
          className: (0, r.twMerge)("w-full overflow-hidden leading-none", s),
          style: { transform: a ? "rotate(180deg)" : "none" },
          children: (0, t.jsx)("svg", {
            viewBox: "0 0 1000 100",
            preserveAspectRatio: "none",
            className: (0, r.twMerge)("w-full h-12 md:h-20 lg:h-24", i),
            children: (0, t.jsx)("path", { d: n[e], fill: "currentColor" }),
          }),
        });
      },
    ]);
  },
  67275,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      n = e.i(919056);
    e.i(146492);
    var i = e.i(763159);
    e.s([
      "NewsletterInput",
      0,
      function ({ className: a }) {
        let [s, l] = (0, r.useState)(""),
          [o, c] = (0, r.useState)("idle");
        return (0, t.jsx)("form", {
          onSubmit: (t) => {
            (t.preventDefault(),
              s &&
                (c("loading"),
                setTimeout(() => {
                  (c("success"),
                    l(""),
                    e.A(80233).then(({ default: e }) => {
                      e({
                        particleCount: 80,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#C95039", "#FFB8A6", "#FFF5EE", "#5C4033"],
                      });
                    }),
                    setTimeout(() => c("idle"), 3e3));
                }, 800)));
          },
          className: (0, n.twMerge)("relative w-full max-w-md", a),
          children: (0, t.jsxs)("div", {
            className:
              "flex bg-cream p-1 rounded-full border-2 border-peach focus-within:border-terracotta transition-colors duration-300",
            children: [
              (0, t.jsx)("input", {
                type: "email",
                value: s,
                onChange: (e) => l(e.target.value),
                placeholder: "Bleib hungrig...",
                className:
                  "flex-grow bg-transparent px-4 py-2 outline-none text-charcoal placeholder:text-charcoal/50",
                required: !0,
                disabled: "idle" !== o,
              }),
              (0, t.jsx)(i.PrimaryCTA, {
                type: "submit",
                disabled: "idle" !== o,
                className: "py-2 px-6 whitespace-nowrap",
                children:
                  "loading" === o
                    ? "..."
                    : "success" === o
                      ? "Dabei!"
                      : "Abonnieren",
              }),
            ],
          }),
        });
      },
    ]);
  },
  80233,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/082gckvq3hos8.js"].map((t) => e.l(t))).then(
        () => t(59133),
      ),
    );
  },
  379140,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "static/chunks/0_npor91tv4ar.js",
          "static/chunks/0q2zsj.kaf6pi.js",
        ].map((t) => e.l(t)),
      ).then(() => t(330500)),
    );
  },
]);
