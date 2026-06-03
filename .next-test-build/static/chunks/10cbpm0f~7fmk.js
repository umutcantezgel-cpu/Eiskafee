(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  233525,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (e) => {};
  },
  718967,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      DecodeError: function () {
        return v;
      },
      MiddlewareNotFoundError: function () {
        return x;
      },
      MissingStaticPage: function () {
        return w;
      },
      NormalizeError: function () {
        return y;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return a;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return d;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return k;
      },
    };
    for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        n = !1;
      return (...r) => (n || ((n = !0), (t = e(...r))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => s.test(e);
    function c() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let r = await e.getInitialProps(t);
      if (n && f(n)) return r;
      if (!r)
        throw Object.defineProperty(
          Error(
            `"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 },
        );
      return r;
    }
    let m = "u" > typeof performance,
      g =
        m &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class v extends Error {}
    class y extends Error {}
    class b extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class w extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class x extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function k(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  998183,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
    function o(e) {
      let t = {};
      for (let [n, r] of e.entries()) {
        let e = t[n];
        void 0 === e
          ? (t[n] = r)
          : Array.isArray(e)
            ? e.push(r)
            : (t[n] = [e, r]);
      }
      return t;
    }
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [n, r] of Object.entries(e))
        if (Array.isArray(r)) for (let e of r) t.append(n, a(e));
        else t.set(n, a(r));
      return t;
    }
    function l(e, ...t) {
      for (let n of t) {
        for (let t of n.keys()) e.delete(t);
        for (let [t, r] of n.entries()) e.append(t, r);
      }
      return e;
    }
  },
  396661,
  (e) => {
    "use strict";
    e.s([
      "mergeClasses",
      0,
      (...e) =>
        e
          .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
          .join(" ")
          .trim(),
    ]);
  },
  871987,
  388973,
  (e) => {
    "use strict";
    (e.s(
      [
        "default",
        0,
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
      871987,
    ),
      e.s(
        [
          "hasA11yProp",
          0,
          (e) => {
            for (let t in e)
              if (t.startsWith("aria-") || "role" === t || "title" === t)
                return !0;
            return !1;
          },
        ],
        388973,
      ));
  },
  20438,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let n = (0, t.createContext)({});
    e.s([
      "LucideProvider",
      0,
      function ({
        children: e,
        size: r,
        color: i,
        strokeWidth: o,
        absoluteStrokeWidth: a,
        className: s,
      }) {
        let l = (0, t.useMemo)(
          () => ({
            size: r,
            color: i,
            strokeWidth: o,
            absoluteStrokeWidth: a,
            className: s,
          }),
          [r, i, o, a, s],
        );
        return (0, t.createElement)(n.Provider, { value: l }, e);
      },
      "useLucideContext",
      0,
      () => (0, t.useContext)(n),
    ]);
  },
  505014,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(871987),
      r = e.i(388973),
      i = e.i(396661),
      o = e.i(20438);
    let a = (0, t.forwardRef)(
      (
        {
          color: e,
          size: a,
          strokeWidth: s,
          absoluteStrokeWidth: l,
          className: c = "",
          children: d,
          iconNode: u,
          ...f
        },
        p,
      ) => {
        let {
            size: h = 24,
            strokeWidth: m = 2,
            absoluteStrokeWidth: g = !1,
            color: v = "currentColor",
            className: y = "",
          } = (0, o.useLucideContext)() ?? {},
          b = (l ?? g) ? (24 * Number(s ?? m)) / Number(a ?? h) : (s ?? m);
        return (0, t.createElement)(
          "svg",
          {
            ref: p,
            ...n.default,
            width: a ?? h ?? n.default.width,
            height: a ?? h ?? n.default.height,
            stroke: e ?? v,
            strokeWidth: b,
            className: (0, i.mergeClasses)("lucide", y, c),
            ...(!d && !(0, r.hasA11yProp)(f) && { "aria-hidden": "true" }),
            ...f,
          },
          [
            ...u.map(([e, n]) => (0, t.createElement)(e, n)),
            ...(Array.isArray(d) ? d : [d]),
          ],
        );
      },
    );
    e.s(["default", 0, a]);
  },
  456420,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(396661);
    let r = (e) => {
      let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
        n ? n.toUpperCase() : t.toLowerCase(),
      );
      return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var i = e.i(505014);
    e.s(
      [
        "default",
        0,
        (e, o) => {
          let a = (0, t.forwardRef)(({ className: a, ...s }, l) =>
            (0, t.createElement)(i.default, {
              ref: l,
              iconNode: o,
              className: (0, n.mergeClasses)(
                `lucide-${r(e)
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()}`,
                `lucide-${e}`,
                a,
              ),
              ...s,
            }),
          );
          return ((a.displayName = r(e)), a);
        },
      ],
      456420,
    );
  },
  138544,
  571164,
  (e) => {
    "use strict";
    let t = { current: null },
      n = { current: !1 };
    e.s(
      ["hasReducedMotionListener", 0, n, "prefersReducedMotion", 0, t],
      571164,
    );
    let r = "u" > typeof window;
    e.s(
      [
        "initPrefersReducedMotion",
        0,
        function () {
          if (((n.current = !0), r))
            if (window.matchMedia) {
              let e = window.matchMedia("(prefers-reduced-motion)"),
                n = () => (t.current = e.matches);
              (e.addEventListener("change", n), n());
            } else t.current = !1;
        },
      ],
      138544,
    );
  },
  88653,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(231178),
      i = e.i(947414),
      o = e.i(674008),
      a = e.i(821476),
      s = e.i(772846),
      l = n,
      c = e.i(737806);
    function d(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class u extends l.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (
          (0, s.isHTMLElement)(t) &&
          e.isPresent &&
          !this.props.isPresent &&
          !1 !== this.props.pop
        ) {
          let e = t.offsetParent,
            n = ((0, s.isHTMLElement)(e) && e.offsetWidth) || 0,
            r = ((0, s.isHTMLElement)(e) && e.offsetHeight) || 0,
            i = getComputedStyle(t),
            o = this.props.sizeRef.current;
          ((o.height = parseFloat(i.height)),
            (o.width = parseFloat(i.width)),
            (o.top = t.offsetTop),
            (o.left = t.offsetLeft),
            (o.right = n - o.width - o.left),
            (o.bottom = r - o.height - o.top),
            (o.direction = i.direction));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function f({
      children: e,
      isPresent: r,
      anchorX: i,
      anchorY: o,
      root: a,
      pop: s,
    }) {
      let p = (0, l.useId)(),
        h = (0, l.useRef)(null),
        m = (0, l.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          direction: "ltr",
        }),
        { nonce: g } = (0, l.useContext)(c.MotionConfigContext),
        v = (function (...e) {
          return n.useCallback(
            (function (...e) {
              return (t) => {
                let n = !1,
                  r = e.map((e) => {
                    let r = d(e, t);
                    return (n || "function" != typeof r || (n = !0), r);
                  });
                if (n)
                  return () => {
                    for (let t = 0; t < r.length; t++) {
                      let n = r[t];
                      "function" == typeof n ? n() : d(e[t], null);
                    }
                  };
              };
            })(...e),
            e,
          );
        })(h, e.props?.ref ?? e?.ref);
      return (
        (0, l.useInsertionEffect)(() => {
          let {
            width: e,
            height: t,
            top: n,
            left: l,
            right: c,
            bottom: d,
            direction: u,
          } = m.current;
          if (r || !1 === s || !h.current || !e || !t) return;
          let f = "rtl" === u,
            v =
              "left" === i
                ? f
                  ? `right: ${c}`
                  : `left: ${l}`
                : f
                  ? `left: ${l}`
                  : `right: ${c}`,
            y = "bottom" === o ? `bottom: ${d}` : `top: ${n}`;
          h.current.dataset.motionPopId = p;
          let b = document.createElement("style");
          g && (b.nonce = g);
          let w = a ?? document.head;
          return (
            w.appendChild(b),
            b.sheet &&
              b.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${v}px !important;
            ${y}px !important;
          }
        `),
            () => {
              (h.current?.removeAttribute("data-motion-pop-id"),
                w.contains(b) && w.removeChild(b));
            }
          );
        }, [r]),
        (0, t.jsx)(u, {
          isPresent: r,
          childRef: h,
          sizeRef: m,
          pop: s,
          children: !1 === s ? e : l.cloneElement(e, { ref: v }),
        })
      );
    }
    let p = ({
      children: e,
      initial: r,
      isPresent: o,
      onExitComplete: s,
      custom: l,
      presenceAffectsLayout: c,
      mode: d,
      anchorX: u,
      anchorY: p,
      root: m,
    }) => {
      let g = (0, i.useConstant)(h),
        v = (0, n.useId)(),
        y = !0,
        b = (0, n.useMemo)(
          () => (
            (y = !1),
            {
              id: v,
              initial: r,
              isPresent: o,
              custom: l,
              onExitComplete: (e) => {
                for (let t of (g.set(e, !0), g.values())) if (!t) return;
                s && s();
              },
              register: (e) => (g.set(e, !1), () => g.delete(e)),
            }
          ),
          [o, g, s],
        );
      return (
        c && y && (b = { ...b }),
        (0, n.useMemo)(() => {
          g.forEach((e, t) => g.set(t, !1));
        }, [o]),
        n.useEffect(() => {
          o || g.size || !s || s();
        }, [o]),
        (e = (0, t.jsx)(f, {
          pop: "popLayout" === d,
          isPresent: o,
          anchorX: u,
          anchorY: p,
          root: m,
          children: e,
        })),
        (0, t.jsx)(a.PresenceContext.Provider, { value: b, children: e })
      );
    };
    function h() {
      return new Map();
    }
    var m = e.i(464978);
    let g = (e) => e.key || "";
    function v(e) {
      let t = [];
      return (
        n.Children.forEach(e, (e) => {
          (0, n.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    e.s(
      [
        "AnimatePresence",
        0,
        ({
          children: e,
          custom: a,
          initial: s = !0,
          onExitComplete: l,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
          propagate: u = !1,
          anchorX: f = "left",
          anchorY: h = "top",
          root: y,
        }) => {
          let [b, w] = (0, m.usePresence)(u),
            x = (0, n.useMemo)(() => v(e), [e]),
            k = u && !b ? [] : x.map(g),
            C = (0, n.useRef)(!0),
            S = (0, n.useRef)(x),
            E = (0, i.useConstant)(() => new Map()),
            L = (0, n.useRef)(new Set()),
            [A, M] = (0, n.useState)(x),
            [T, j] = (0, n.useState)(x);
          (0, o.useIsomorphicLayoutEffect)(() => {
            ((C.current = !1), (S.current = x));
            for (let e = 0; e < T.length; e++) {
              let t = g(T[e]);
              k.includes(t)
                ? (E.delete(t), L.current.delete(t))
                : !0 !== E.get(t) && E.set(t, !1);
            }
          }, [T, k.length, k.join("-")]);
          let P = [];
          if (x !== A) {
            let e = [...x];
            for (let t = 0; t < T.length; t++) {
              let n = T[t],
                r = g(n);
              k.includes(r) || (e.splice(t, 0, n), P.push(n));
            }
            return ("wait" === d && P.length && (e = P), j(v(e)), M(x), null);
          }
          let { forceRender: N } = (0, n.useContext)(r.LayoutGroupContext);
          return (0, t.jsx)(t.Fragment, {
            children: T.map((e) => {
              let n = g(e),
                r = (!u || !!b) && (x === T || k.includes(n));
              return (0, t.jsx)(
                p,
                {
                  isPresent: r,
                  initial: (!C.current || !!s) && void 0,
                  custom: a,
                  presenceAffectsLayout: c,
                  mode: d,
                  root: y,
                  onExitComplete: r
                    ? void 0
                    : () => {
                        if (L.current.has(n) || !E.has(n)) return;
                        (L.current.add(n), E.set(n, !0));
                        let e = !0;
                        (E.forEach((t) => {
                          t || (e = !1);
                        }),
                          e && (N?.(), j(S.current), u && w?.(), l && l()));
                      },
                  anchorX: f,
                  anchorY: h,
                  children: e,
                },
                n,
              );
            }),
          });
        },
      ],
      88653,
    );
  },
  772328,
  (e) => {
    "use strict";
    var t = e.i(571164),
      n = e.i(138544),
      r = e.i(271645);
    e.s([
      "useReducedMotion",
      0,
      function () {
        t.hasReducedMotionListener.current || (0, n.initPrefersReducedMotion)();
        let [e] = (0, r.useState)(t.prefersReducedMotion.current);
        return e;
      },
    ]);
  },
  944296,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let n = (e) => {
        let t,
          n = new Set(),
          r = (e, r) => {
            let i = "function" == typeof e ? e(t) : e;
            if (!Object.is(i, t)) {
              let e = t;
              ((t = (null != r ? r : "object" != typeof i || null === i)
                ? i
                : Object.assign({}, t, i)),
                n.forEach((n) => n(t, e)));
            }
          },
          i = () => t,
          o = {
            setState: r,
            getState: i,
            getInitialState: () => a,
            subscribe: (e) => (n.add(e), () => n.delete(e)),
          },
          a = (t = e(r, i, o));
        return o;
      },
      r = (e) => {
        let r = e ? n(e) : n,
          i = (e) =>
            (function (e, n = (e) => e) {
              let r = t.default.useSyncExternalStore(
                e.subscribe,
                t.default.useCallback(() => n(e.getState()), [e, n]),
                t.default.useCallback(() => n(e.getInitialState()), [e, n]),
              );
              return (t.default.useDebugValue(r), r);
            })(r, e);
        return (Object.assign(i, r), i);
      };
    e.s(["create", 0, (e) => (e ? r(e) : r)], 944296);
  },
  618566,
  (e, t, n) => {
    t.exports = e.r(976562);
  },
  887652,
  (e) => {
    "use strict";
    var t = e.i(486427),
      n = e.i(271645),
      r = e.i(737806),
      i = e.i(947414);
    e.s([
      "useMotionValue",
      0,
      function (e) {
        let o = (0, i.useConstant)(() => (0, t.motionValue)(e)),
          { isStatic: a } = (0, n.useContext)(r.MotionConfigContext);
        if (a) {
          let [, t] = (0, n.useState)(e);
          (0, n.useEffect)(() => o.on("change", t), []);
        }
        return o;
      },
    ]);
  },
  958866,
  (e) => {
    "use strict";
    var t = e.i(344230);
    e.s([
      "transform",
      0,
      function (...e) {
        let n = !Array.isArray(e[0]),
          r = n ? 0 : -1,
          i = e[0 + r],
          o = e[1 + r],
          a = e[2 + r],
          s = e[3 + r],
          l = (0, t.interpolate)(o, a, s);
        return n ? l(i) : l;
      },
    ]);
  },
  895420,
  212381,
  (e) => {
    "use strict";
    var t = e.i(958866),
      n = e.i(947414),
      r = e.i(287022),
      i = e.i(674008),
      o = e.i(887652);
    function a(e, t) {
      let n = (0, o.useMotionValue)(t()),
        a = () => n.set(t());
      return (
        a(),
        (0, i.useIsomorphicLayoutEffect)(() => {
          let t = () => r.frame.preRender(a, !1, !0),
            n = e.map((e) => e.on("change", t));
          return () => {
            (n.forEach((e) => e()), (0, r.cancelFrame)(a));
          };
        }),
        n
      );
    }
    e.s(["useCombineMotionValues", 0, a], 212381);
    var s = e.i(486427);
    function l(e, t) {
      let r = (0, n.useConstant)(() => []);
      return a(e, () => {
        r.length = 0;
        let n = e.length;
        for (let t = 0; t < n; t++) r[t] = e[t].get();
        return t(r);
      });
    }
    e.s(
      [
        "useTransform",
        0,
        function e(r, i, o, c) {
          if ("function" == typeof r) {
            let e;
            return (
              (s.collectMotionValues.current = []),
              r(),
              (e = a(s.collectMotionValues.current, r)),
              (s.collectMotionValues.current = void 0),
              e
            );
          }
          if (void 0 !== o && !Array.isArray(o) && "function" != typeof i) {
            var d = r,
              u = i,
              f = o,
              p = c;
            let t = (0, n.useConstant)(() => Object.keys(f)),
              a = (0, n.useConstant)(() => ({}));
            for (let n of t) a[n] = e(d, u, f[n], p);
            return a;
          }
          let h = "function" == typeof i ? i : (0, t.transform)(i, o, c),
            m = Array.isArray(r) ? l(r, h) : l([r], ([e]) => h(e)),
            g = Array.isArray(r) ? void 0 : r.accelerate;
          return (
            g &&
              !g.isTransformed &&
              "function" != typeof i &&
              Array.isArray(o) &&
              c?.clamp !== !1 &&
              (m.accelerate = {
                ...g,
                times: i,
                keyframes: o,
                isTransformed: !0,
                ...(c?.ease ? { ease: c.ease } : {}),
              }),
            m
          );
        },
      ],
      895420,
    );
  },
  591994,
  (e) => {
    "use strict";
    e.i(486427);
    var t = e.i(83352),
      n = e.i(83411),
      r = e.i(287022);
    function i(e) {
      return "number" == typeof e ? e : parseFloat(e);
    }
    var o = e.i(271645),
      a = e.i(737806),
      s = e.i(887652),
      l = e.i(895420);
    e.s(
      [
        "useSpring",
        0,
        function (e, c = {}) {
          return (function (e, c = {}) {
            let { isStatic: d } = (0, o.useContext)(a.MotionConfigContext),
              u = () => ((0, n.isMotionValue)(e) ? e.get() : e);
            if (d) return (0, l.useTransform)(u);
            let f = (0, s.useMotionValue)(u());
            return (
              (0, o.useInsertionEffect)(
                () =>
                  (function (e, o, a = {}) {
                    let s,
                      l = e.get(),
                      c = null,
                      d = l,
                      u =
                        "string" == typeof l
                          ? l.replace(/[\d.-]/g, "")
                          : void 0,
                      f = () => {
                        (c && (c.stop(), (c = null)), (e.animation = void 0));
                      },
                      p = () => {
                        ((() => {
                          let n = i(e.get()),
                            r = i(d);
                          if (n === r) return f();
                          let o = c
                            ? c.getGeneratorVelocity()
                            : e.getVelocity();
                          (f(),
                            (c = new t.JSAnimation({
                              keyframes: [n, r],
                              velocity: o,
                              type: "spring",
                              restDelta: 0.001,
                              restSpeed: 0.01,
                              ...a,
                              onUpdate: s,
                            })));
                        })(),
                          (e.animation = c ?? void 0),
                          e.events.animationStart?.notify(),
                          c?.then(() => {
                            ((e.animation = void 0),
                              e.events.animationComplete?.notify());
                          }));
                      };
                    if (
                      (e.attach((e, t) => {
                        ((d = e),
                          (s = (e) => {
                            var n, r;
                            return t(((n = e), (r = u) ? n + r : n));
                          }),
                          r.frame.postRender(p));
                      }, f),
                      (0, n.isMotionValue)(o))
                    ) {
                      let t = !0 === a.skipInitialAnimation,
                        n = o.on("change", (n) => {
                          var r, i, o, a;
                          t
                            ? ((t = !1),
                              e.jump(((r = n), (i = u) ? r + i : r), !1))
                            : e.set(((o = n), (a = u) ? o + a : o));
                        }),
                        r = e.on("destroy", n);
                      return () => {
                        (n(), r());
                      };
                    }
                    return f;
                  })(f, e, c),
                [f, JSON.stringify(c)],
              ),
              f
            );
          })(e, { type: "spring", ...c });
        },
      ],
      591994,
    );
  },
  386205,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["doc", () => t.a6]);
  },
  579473,
  (e) => {
    "use strict";
    let t = (e) => (n) => {
      try {
        let r = e(n);
        if (r instanceof Promise) return r;
        return {
          then: (e) => t(e)(r),
          catch(e) {
            return this;
          },
        };
      } catch (e) {
        return {
          then(e) {
            return this;
          },
          catch: (n) => t(n)(e),
        };
      }
    };
    e.s([
      "persist",
      0,
      (e, n) => (r, i, o) => {
        let a,
          s = {
            storage: (function (e) {
              let t;
              try {
                t = e();
              } catch (e) {
                return;
              }
              return {
                getItem: (e) => {
                  var n;
                  let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                    i = null != (n = t.getItem(e)) ? n : null;
                  return i instanceof Promise ? i.then(r) : r(i);
                },
                setItem: (e, n) => t.setItem(e, JSON.stringify(n, void 0)),
                removeItem: (e) => t.removeItem(e),
              };
            })(() => window.localStorage),
            partialize: (e) => e,
            version: 0,
            merge: (e, t) => ({ ...t, ...e }),
            ...n,
          },
          l = !1,
          c = 0,
          d = new Set(),
          u = new Set(),
          f = s.storage;
        if (!f)
          return e(
            (...e) => {
              (console.warn(
                `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`,
              ),
                r(...e));
            },
            i,
            o,
          );
        let p = () => {
            let e = s.partialize({ ...i() });
            return f.setItem(s.name, { state: e, version: s.version });
          },
          h = o.setState;
        o.setState = (e, t) => (h(e, t), p());
        let m = e((...e) => (r(...e), p()), i, o);
        o.getInitialState = () => m;
        let g = () => {
          var e, n;
          if (!f) return;
          let o = ++c;
          ((l = !1),
            d.forEach((e) => {
              var t;
              return e(null != (t = i()) ? t : m);
            }));
          let h =
            (null == (n = s.onRehydrateStorage)
              ? void 0
              : n.call(s, null != (e = i()) ? e : m)) || void 0;
          return t(f.getItem.bind(f))(s.name)
            .then((e) => {
              if (e)
                if ("number" != typeof e.version || e.version === s.version)
                  return [!1, e.state];
                else {
                  if (s.migrate) {
                    let t = s.migrate(e.state, e.version);
                    return t instanceof Promise
                      ? t.then((e) => [!0, e])
                      : [!0, t];
                  }
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided",
                  );
                }
              return [!1, void 0];
            })
            .then((e) => {
              var t;
              if (o !== c) return;
              let [n, l] = e;
              if ((r((a = s.merge(l, null != (t = i()) ? t : m)), !0), n))
                return p();
            })
            .then(() => {
              o === c &&
                (null == h || h(i(), void 0),
                (a = i()),
                (l = !0),
                u.forEach((e) => e(a)));
            })
            .catch((e) => {
              o === c && (null == h || h(void 0, e));
            });
        };
        return (
          (o.persist = {
            setOptions: (e) => {
              ((s = { ...s, ...e }), e.storage && (f = e.storage));
            },
            clearStorage: () => {
              null == f || f.removeItem(s.name);
            },
            getOptions: () => s,
            rehydrate: () => g(),
            hasHydrated: () => l,
            onHydrate: (e) => (
              d.add(e),
              () => {
                d.delete(e);
              }
            ),
            onFinishHydration: (e) => (
              u.add(e),
              () => {
                u.delete(e);
              }
            ),
          }),
          s.skipHydration || g(),
          a || m
        );
      },
    ]);
  },
  43832,
  613516,
  (e) => {
    "use strict";
    var t = e.i(944296),
      n = e.i(579473);
    let r = {
      "sweet-tooth": {
        id: "sweet-tooth",
        title: "Sweet Tooth",
        description: "Du hast das Geheimnis im Logo gefunden!",
        icon: "🍬",
        coinReward: 0,
      },
      "early-bird": {
        id: "early-bird",
        title: "Early Bird",
        description:
          "Eine Bestellung vor 10:00 Uhr aufgegeben. Der frühe Vogel fängt die Waffel!",
        icon: "🌅",
        coinReward: 10,
      },
      "loyal-fan": {
        id: "loyal-fan",
        title: "Loyal Fan",
        description: "Wow, du hast bereits 10 Bestellungen bei uns gemacht!",
        icon: "🏆",
        coinReward: 50,
      },
      "waffle-master": {
        id: "waffle-master",
        title: "Waffle Master",
        description: "Du hast im Physik-Playground über 50 Waffeln gespawnt.",
        icon: "🧇",
        coinReward: 20,
      },
      "birthday-treat": {
        id: "birthday-treat",
        title: "Birthday Treat",
        description:
          "Happy Birthday! Lass dich feiern und genieß deine Bonus-Coins.",
        icon: "🎂",
        coinReward: 100,
      },
    };
    e.s(["ACHIEVEMENTS", 0, r], 613516);
    var i = e.i(959141);
    e.i(436180);
    var o = e.i(386205),
      a = e.i(263802),
      s = e.i(727286),
      s = s;
    let l = (0, t.create)()(
      (0, n.persist)(
        (e, t) => ({
          unlocked: [],
          syncFromFirebase: (n) => {
            e({ unlocked: Array.from(new Set([...t().unlocked, ...n])) });
          },
          unlock: async (n) => {
            let l = t();
            if (l.unlocked.includes(n)) return;
            (e({ unlocked: [...l.unlocked, n] }),
              window.dispatchEvent(
                new CustomEvent("achievementUnlocked", { detail: n }),
              ));
            let c = i.auth.currentUser;
            if (c)
              try {
                let e = (0, o.doc)(i.db, "users", c.uid);
                await (0, a.updateDoc)(e, { achievements: (0, s.aM)(n) });
                let t = r[n];
                if (t && t.coinReward && t.coinReward > 0) {
                  let e = (0, o.doc)(i.db, "loyalty_points", c.uid),
                    n = await (0, a.getDoc)(e),
                    r = {
                      amount: t.coinReward,
                      type: "earned",
                      date: new Date(),
                      reason: `Achievement: ${t.title}`,
                    };
                  if (n.exists()) {
                    let i = n.data();
                    await (0, a.updateDoc)(e, {
                      balance: (i.balance || 0) + t.coinReward,
                      history: (0, s.aM)(r),
                    });
                  } else
                    await (0, a.setDoc)(e, {
                      uid: c.uid,
                      balance: t.coinReward,
                      history: [r],
                    });
                }
              } catch (e) {
                console.error("Failed to sync achievement to Firestore", e);
              }
          },
          isUnlocked: (e) => t().unlocked.includes(e),
        }),
        { name: "hey-fede-achievements" },
      ),
    );
    (window.addEventListener("achievementUnlocked", (e) => {}),
      e.s(["useAchievements", 0, l], 43832));
  },
  230129,
  (e) => {
    "use strict";
    var t = e.i(944296);
    e.i(151718);
    var n = e.i(464104),
      n = n;
    e.i(436180);
    var r = e.i(386205),
      i = e.i(263802),
      o = e.i(959141),
      a = e.i(43832);
    let s = (0, t.create)((e) => ({
      user: null,
      dbUser: null,
      role: null,
      loading: !0,
      init: () =>
        (0, n.z)(o.auth, async (t) => {
          if (t)
            try {
              let n = await (0, i.getDoc)((0, r.doc)(o.db, "users", t.uid)),
                s = n.exists() ? n.data() : null,
                l = s?.role || "customer";
              if (
                (s?.achievements &&
                  a.useAchievements.getState().syncFromFirebase(s.achievements),
                s?.birthday)
              ) {
                let e = new Date(),
                  t = `${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`;
                s.birthday.endsWith(t) &&
                  a.useAchievements.getState().unlock("birthday-treat");
              }
              e({ user: t, dbUser: s, role: l, loading: !1 });
            } catch (n) {
              (console.error("Error fetching user data:", n),
                e({ user: t, dbUser: null, role: "customer", loading: !1 }));
            }
          else e({ user: null, dbUser: null, role: null, loading: !1 });
        }),
    }));
    (s.getState().init(), e.s(["useAuth", 0, s], 230129));
  },
  127012,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("plus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }],
    ]);
    e.s(["default", 0, t]);
  },
  77071,
  (e) => {
    "use strict";
    var t = e.i(127012);
    e.s(["Plus", () => t.default]);
  },
  74909,
  (e) => {
    "use strict";
    let t = (0, e.i(944296).create)((e) => ({
      toasts: [],
      addToast: (t) => {
        let n = Math.random().toString(36).substr(2, 9);
        (e((e) => ({ toasts: [...e.toasts, { ...t, id: n }] })),
          setTimeout(() => {
            e((e) => ({ toasts: e.toasts.filter((e) => e.id !== n) }));
          }, 4e3));
      },
      removeToast: (t) =>
        e((e) => ({ toasts: e.toasts.filter((e) => e.id !== t) })),
    }));
    e.s(["useToastStore", 0, t]);
  },
  690699,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("cookie", [
      [
        "path",
        {
          d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
          key: "laymnq",
        },
      ],
      ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
      ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
      ["path", { d: "M12 12v.01", key: "u5ubse" }],
      ["path", { d: "M11 17v.01", key: "1hyl5a" }],
      ["path", { d: "M7 14v.01", key: "uct60s" }],
    ]);
    e.s(["default", 0, t]);
  },
  16239,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("settings", [
      [
        "path",
        {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
          key: "1i5ecw",
        },
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ]);
    e.s(["default", 0, t]);
  },
  127992,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("trophy", [
      [
        "path",
        {
          d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
          key: "1n3hpd",
        },
      ],
      [
        "path",
        {
          d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
          key: "rfe1zi",
        },
      ],
      ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
      ["path", { d: "M4 22h16", key: "57wxv0" }],
      [
        "path",
        {
          d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
          key: "1mhfuq",
        },
      ],
      ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
    ]);
    e.s(["default", 0, t]);
  },
  265694,
  (e) => {
    "use strict";
    var t = e.i(690699);
    e.s(["Cookie", () => t.default]);
  },
  262663,
  (e) => {
    "use strict";
    let t,
      n = "opt-in",
      r = "opt-out",
      i = "show--consent",
      o = "show--preferences",
      a = "disable--interaction",
      s = "data-category",
      l = "button",
      c = "aria-hidden",
      d = "btn-group",
      u = "click",
      f = "data-role",
      p = "consentModal",
      h = "preferencesModal",
      m = new (class {
        constructor() {
          ((this.t = {
            mode: n,
            revision: 0,
            autoShow: !0,
            lazyHtmlGeneration: !0,
            autoClearCookies: !0,
            manageScriptTags: !0,
            hideFromBots: !0,
            cookie: {
              name: "cc_cookie",
              expiresAfterDays: 182,
              domain: "",
              path: "/",
              secure: !0,
              sameSite: "Lax",
            },
          }),
            (this.o = {
              i: {},
              l: "",
              _: {},
              u: {},
              p: {},
              m: [],
              v: !1,
              h: null,
              C: null,
              S: null,
              M: "",
              D: !0,
              T: !1,
              k: !1,
              A: !1,
              N: !1,
              H: [],
              V: !1,
              I: !0,
              L: [],
              j: !1,
              F: "",
              P: !1,
              O: [],
              R: [],
              B: [],
              $: [],
              G: !1,
              J: !1,
              U: !1,
              q: [],
              K: [],
              W: [],
              X: {},
              Y: {},
              Z: {},
              ee: {},
              te: {},
              oe: [],
            }),
            (this.ne = { ae: {}, se: {} }),
            (this.ce = {}),
            (this.re = {
              ie: "cc:onFirstConsent",
              le: "cc:onConsent",
              de: "cc:onChange",
              fe: "cc:onModalShow",
              _e: "cc:onModalHide",
              ue: "cc:onModalReady",
            }));
        }
      })(),
      g = (e, t) => -1 !== e.indexOf(t),
      v = (e) => !!e && "object" == typeof e && !Array.isArray(e),
      y = (e) => "function" == typeof e,
      b = (e) => Object.keys(e),
      w = (e) => Array.from(new Set(e)),
      x = (e) => e.preventDefault(),
      k = (e) => {
        let t = document.createElement(e);
        return (e === l && (t.type = e), t);
      },
      C = (e, t, n) => e.setAttribute(t, n),
      S = (e, t, n) => {
        e.removeAttribute(n ? "data-" + t : t);
      },
      E = (e, t, n) => e.getAttribute(n ? "data-" + t : t),
      L = (e, t) => e.appendChild(t),
      A = (e, t) => {
        let n;
        return ((n = "cm__" + t), e.classList.add(n));
      },
      M = (e, t) => {
        let n;
        return ((n = "pm__" + t), e.classList.add(n));
      },
      T = (e) => {
        if ("object" != typeof e) return e;
        if (e instanceof Date) return new Date(e.getTime());
        let t = Array.isArray(e) ? [] : {};
        for (let n in e) {
          let r = e[n];
          t[n] = T(r);
        }
        return t;
      },
      j = (e, t) => dispatchEvent(new CustomEvent(e, { detail: t })),
      P = (e, t, n, r) => {
        (e.addEventListener(t, n), r && m.o.m.push({ pe: e, ge: t, me: n }));
      },
      N = (e, t) => {
        let n = e || [],
          r = t || [];
        return n.filter((e) => !g(r, e)).concat(r.filter((e) => !g(n, e)));
      },
      R = (e) => {
        ((m.o.R = w(e)),
          (m.o.F = (() => {
            let e = "custom",
              { R: t, O: n, B: r } = m.o,
              i = t.length;
            return (
              i === n.length
                ? (e = "all")
                : i === r.length && (e = "necessary"),
              e
            );
          })()));
      },
      _ = (e, t, n, r) => {
        let i = "accept-",
          {
            show: o,
            showPreferences: a,
            hide: s,
            hidePreferences: l,
            acceptCategory: c,
          } = t,
          d = e || document,
          f = (e) => {
            let t;
            return ((t = `[data-cc="${e}"]`), d.querySelectorAll(t));
          },
          p = (e, t) => {
            (x(e), c(t), l(), s());
          },
          h = f("show-preferencesModal"),
          g = f("show-consentModal"),
          v = f(i + "all"),
          y = f(i + "necessary"),
          b = f(i + "custom"),
          w = m.t.lazyHtmlGeneration;
        for (let e of h)
          (C(e, "aria-haspopup", "dialog"),
            P(e, u, (e) => {
              (x(e), a());
            }),
            w &&
              (P(
                e,
                "mouseenter",
                (e) => {
                  (x(e), m.o.N || n(t, r));
                },
                !0,
              ),
              P(e, "focus", () => {
                m.o.N || n(t, r);
              })));
        for (let e of g)
          (C(e, "aria-haspopup", "dialog"),
            P(
              e,
              u,
              (e) => {
                (x(e), o(!0));
              },
              !0,
            ));
        for (let e of v)
          P(
            e,
            u,
            (e) => {
              p(e, "all");
            },
            !0,
          );
        for (let e of b)
          P(
            e,
            u,
            (e) => {
              p(e);
            },
            !0,
          );
        for (let e of y)
          P(
            e,
            u,
            (e) => {
              p(e, []);
            },
            !0,
          );
      },
      I = (e, t) => {
        e &&
          (t && (e.tabIndex = -1),
          e.focus(),
          t && e.removeAttribute("tabindex"));
      },
      O = (e, t) => {
        let n = (r) => {
          (r.target.removeEventListener("transitionend", n),
            "opacity" === r.propertyName &&
              "1" === getComputedStyle(e).opacity &&
              I(1 === t ? m.ne.be : m.ne.ve));
        };
        P(e, "transitionend", n);
      },
      B = (e) => {
        let n;
        (clearTimeout(t),
          e
            ? ((n = m.ne.ye), n.classList.add(a))
            : (t = setTimeout(() => {
                let e;
                ((e = m.ne.ye), e.classList.remove(a));
              }, 500)));
      },
      z = [
        "M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5",
        "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885",
        "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 ",
      ],
      D = (e = 0, t = 1.5) =>
        `<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${z[e]}"/></svg>`,
      $ = (e) => {
        let t,
          n = m.ne,
          r = m.o;
        ((t = e === n.he),
          P(
            r.i.disablePageInteraction ? n.ye : t ? n.Ce : n.ye,
            "keydown",
            (n) => {
              if ("Tab" !== n.key || !(t ? r.k && !r.A : r.A)) return;
              let i = document.activeElement,
                o = t ? r.q : r.K;
              0 !== o.length &&
                (n.shiftKey
                  ? (i !== o[0] && e.contains(i)) || (x(n), I(o[1]))
                  : (i !== o[1] && e.contains(i)) || (x(n), I(o[0])));
            },
            !0,
          ));
      },
      H = ["[href]", l, "input", "details", "[tabindex]"]
        .map((e) => e + ':not([tabindex="-1"])')
        .join(","),
      F = (e) => {
        let { o: t, ne: n } = m,
          r = (e, t) => {
            let n = e.querySelectorAll(H);
            ((t[0] = n[0]), (t[1] = n[n.length - 1]));
          };
        (1 === e && t.T && r(n.he, t.q), 2 === e && t.N && r(n.we, t.K));
      },
      V = (e, t, n) => {
        let { de: r, le: i, ie: o, _e: a, ue: s, fe: l } = m.ce,
          c = m.re;
        if (t) {
          let r = { modalName: t };
          return (
            e === c.fe
              ? y(l) && l(r)
              : e === c._e
                ? y(a) && a(r)
                : ((r.modal = n), y(s) && s(r)),
            j(e, r)
          );
        }
        let d = { cookie: m.o.p };
        (e === c.ie
          ? y(o) && o(T(d))
          : e === c.le
            ? y(i) && i(T(d))
            : ((d.changedCategories = m.o.L),
              (d.changedServices = m.o.ee),
              y(r) && r(T(d))),
          j(e, T(d)));
      },
      W = (e, t) => {
        try {
          return e();
        } catch (e) {
          return (t || console.warn("CookieConsent:", e), !1);
        }
      },
      U = (e) => {
        let { Y: t, ee: n, O: r, X: i, oe: o, p: a, L: l } = m.o;
        for (let e of r)
          for (let r of n[e] || t[e] || []) {
            let n = i[e][r];
            if (!n) continue;
            let { onAccept: o, onReject: a } = n;
            !n.Se && g(t[e], r)
              ? ((n.Se = !0), y(o) && o())
              : n.Se && !g(t[e], r) && ((n.Se = !1), y(a) && a());
          }
        if (!m.t.manageScriptTags) return;
        let c = e || a.categories || [],
          d = (e, r) => {
            if (r >= e.length) return;
            let i = o[r];
            if (i.xe) return d(e, r + 1);
            let a = i.Me,
              u = i.De,
              f = i.Te,
              p = g(c, u),
              h = !!f && g(t[u], f);
            if (
              (!f && !i.ke && p) ||
              (!f && i.ke && !p && g(l, u)) ||
              (f && !i.ke && h) ||
              (f && i.ke && !h && g(n[u] || [], f))
            ) {
              i.xe = !0;
              let t = E(a, "type", !0);
              (S(a, "type", !!t), S(a, s));
              let n = E(a, "src", !0);
              n && S(a, "src", !0);
              let o = k("script");
              for (let { nodeName: e } of ((o.textContent = a.innerHTML),
              a.attributes))
                C(o, e, a[e] || E(a, e));
              (t && (o.type = t), n ? (o.src = n) : (n = a.src));
              let l = !!n && (!t || ["text/javascript", "module"].includes(t));
              if (
                (l &&
                  (o.onload = o.onerror =
                    () => {
                      d(e, ++r);
                    }),
                a.replaceWith(o),
                l)
              )
                return;
            }
            d(e, ++r);
          };
        d(o, 0);
      },
      q = "bottom",
      Y = "left",
      G = "center",
      Z = "right",
      J = "inline",
      X = "wide",
      K = "pm--",
      Q = ["middle", "top", q],
      ee = [Y, G, Z],
      et = {
        box: { Ee: [X, J], Ae: Q, Ne: ee, He: q, Ve: Z },
        cloud: { Ee: [J], Ae: Q, Ne: ee, He: q, Ve: G },
        bar: { Ee: [J], Ae: Q.slice(1), Ne: [], He: q, Ve: "" },
      },
      en = {
        box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" },
        bar: { Ee: [X], Ae: [], Ne: [Y, Z], He: "", Ve: Y },
      },
      er = (e) => {
        let t = m.o.i.guiOptions,
          n = t && t.consentModal,
          r = t && t.preferencesModal;
        (0 === e && ei(m.ne.he, et, n, "cm--", "box", "cm"),
          1 === e && ei(m.ne.we, en, r, K, "box", "pm"));
      },
      ei = (e, t, n, r, i, o) => {
        e.className = o;
        let a = n && n.layout,
          s = n && n.position,
          l = n && n.flipButtons,
          c = !n || !1 !== n.equalWeightButtons,
          d = (a && a.split(" ")) || [],
          u = d[0],
          f = d[1],
          p = u in t ? u : i,
          h = t[p],
          v = g(h.Ee, f) && f,
          y = (s && s.split(" ")) || [],
          b = y[0],
          w = r === K ? y[0] : y[1],
          x = g(h.Ae, b) ? b : h.He,
          k = g(h.Ne, w) ? w : h.Ve,
          C = (t) => {
            t && e.classList.add(r + t);
          };
        (C(p), C(v), C(x), C(k), l && C("flip"));
        let S = o + "__btn--secondary";
        if ("cm" === o) {
          let { Ie: e, Le: t } = m.ne;
          (e && (c ? e.classList.remove(S) : e.classList.add(S)),
            t && (c ? t.classList.remove(S) : t.classList.add(S)));
        } else {
          let { je: e } = m.ne;
          e && (c ? e.classList.remove(S) : e.classList.add(S));
        }
      },
      eo = (e, t) => {
        let n,
          r = m.o,
          i = m.ne,
          { hide: o, hidePreferences: a, acceptCategory: s } = e,
          p = (e) => {
            (s(e), a(), o());
          },
          g = r.u && r.u.preferencesModal;
        if (!g) return;
        let y = g.title,
          w = g.closeIconLabel,
          x = g.acceptAllBtn,
          S = g.acceptNecessaryBtn,
          E = g.savePreferencesBtn,
          A = g.sections || [],
          T = x || S || E;
        if (i.Fe) ((i.Pe = k("div")), M(i.Pe, "body"));
        else {
          let e;
          ((i.Fe = k("div")), (e = i.Fe), e.classList.add("pm-wrapper"));
          let t = k("div");
          (t.classList.add("pm-overlay"),
            L(i.Fe, t),
            P(t, u, a),
            (i.we = k("div")),
            i.we.classList.add("pm"),
            C(i.we, "role", "dialog"),
            C(i.we, c, !0),
            C(i.we, "aria-modal", !0),
            C(i.we, "aria-labelledby", "pm__title"),
            P(
              i.ye,
              "keydown",
              (e) => {
                27 === e.keyCode && a();
              },
              !0,
            ),
            (i.Oe = k("div")),
            M(i.Oe, "header"),
            (i.Re = k("h2")),
            M(i.Re, "title"),
            (i.Re.id = "pm__title"),
            (i.Be = k(l)),
            M(i.Be, "close-btn"),
            C(i.Be, "aria-label", g.closeIconLabel || ""),
            P(i.Be, u, a),
            (i.$e = k("span")),
            (i.$e.innerHTML = D()),
            L(i.Be, i.$e),
            (i.Ge = k("div")),
            M(i.Ge, "body"),
            (i.Je = k("div")),
            M(i.Je, "footer"),
            k("div").classList.add("btns"));
          var j = k("div"),
            N = k("div");
          (M(j, d),
            M(N, d),
            L(i.Je, j),
            L(i.Je, N),
            L(i.Oe, i.Re),
            L(i.Oe, i.Be),
            (i.ve = k("div")),
            C(i.ve, "tabIndex", -1),
            L(i.we, i.ve),
            L(i.we, i.Oe),
            L(i.we, i.Ge),
            T && L(i.we, i.Je),
            L(i.Fe, i.we));
        }
        (y && ((i.Re.innerHTML = y), w && C(i.Be, "aria-label", w)),
          A.forEach((e, t) => {
            let o = e.title,
              a = e.description,
              s = e.linkedCategory,
              d = s && r.P[s],
              f = e.cookieTable,
              p = f && f.body,
              h = f && f.caption,
              m = p && p.length > 0,
              y = !!d,
              w = y && r.X[s],
              x = (v(w) && b(w)) || [],
              S = y && (!!a || !!m || b(w).length > 0);
            var E,
              A,
              T = k("div");
            if ((M(T, "section"), S || a)) {
              var j = k("div");
              M(j, "section-desc-wrapper");
            }
            let N = x.length;
            if (S && N > 0) {
              let e = k("div");
              for (let t of (M(e, "section-services"), x)) {
                let n = w[t],
                  r = (n && n.label) || t,
                  i = k("div"),
                  o = k("div"),
                  a = k("div"),
                  l = k("div");
                (M(i, "service"),
                  M(l, "service-title"),
                  M(o, "service-header"),
                  M(a, "service-icon"));
                let c = ea(r, t, d, !0, s);
                ((l.innerHTML = r),
                  L(o, a),
                  L(o, l),
                  L(i, o),
                  L(i, c),
                  L(e, i));
              }
              L(j, e);
            }
            if (o) {
              var R = k("div"),
                _ = k(y ? l : "div");
              if (
                (M(R, "section-title-wrapper"),
                M(_, "section-title"),
                (_.innerHTML = o),
                L(R, _),
                y)
              ) {
                let e = k("span");
                ((e.innerHTML = D(2, 3.5)),
                  M(e, "section-arrow"),
                  L(R, e),
                  (T.className += "--toggle"));
                let t = ea(o, s, d),
                  n = g.serviceCounterLabel;
                if (N > 0 && "string" == typeof n) {
                  let e = k("span");
                  (M(e, "badge"),
                    M(e, "service-counter"),
                    C(e, c, !0),
                    C(e, "data-servicecounter", N),
                    n &&
                      C(
                        e,
                        "data-counterlabel",
                        (n =
                          (n = n.split("|")).length > 1 && N > 1 ? n[1] : n[0]),
                      ),
                    (e.innerHTML = N + (n ? " " + n : "")),
                    L(_, e));
                }
                if (S) {
                  M(T, "section--expandable");
                  var I = s + "-desc";
                  (C(_, "aria-expanded", !1), C(_, "aria-controls", I));
                }
                L(R, t);
              } else (C(_, "role", "heading"), C(_, "aria-level", "3"));
              L(T, R);
            }
            if (a) {
              var O = k("p");
              (M(O, "section-desc"), (O.innerHTML = a), L(j, O));
            }
            if (
              S &&
              (C(j, c, "true"),
              (j.id = I),
              (E = j),
              (A = _),
              P(_, u, () => {
                T.classList.contains("is-expanded")
                  ? (T.classList.remove("is-expanded"),
                    C(A, "aria-expanded", "false"),
                    C(E, c, "true"))
                  : (T.classList.add("is-expanded"),
                    C(A, "aria-expanded", "true"),
                    C(E, c, "false"));
              }),
              m)
            ) {
              let e = k("table"),
                n = k("thead"),
                r = k("tbody");
              if (h) {
                let t = k("caption");
                (M(t, "table-caption"), (t.innerHTML = h), e.appendChild(t));
              }
              (M(e, "section-table"), M(n, "table-head"), M(r, "table-body"));
              let o = f.headers,
                a = b(o),
                s = i.Ue.createDocumentFragment(),
                l = k("tr");
              for (let e of a) {
                let n = o[e],
                  r = k("th");
                ((r.id = "cc__row-" + n + t),
                  C(r, "scope", "col"),
                  M(r, "table-th"),
                  (r.innerHTML = n),
                  L(s, r));
              }
              (L(l, s), L(n, l));
              let c = i.Ue.createDocumentFragment();
              for (let e of p) {
                let n = k("tr");
                for (let r of (M(n, "table-tr"), a)) {
                  let i = o[r],
                    a = e[r],
                    s = k("td"),
                    l = k("div");
                  (M(s, "table-td"),
                    C(s, "data-column", i),
                    C(s, "headers", "cc__row-" + i + t),
                    l.insertAdjacentHTML("beforeend", a),
                    L(s, l),
                    L(n, s));
                }
                L(c, n);
              }
              (L(r, c), L(e, n), L(e, r), L(j, e));
            }
            (S || a) && L(T, j);
            let B = i.Pe || i.Ge;
            (y
              ? (n || M((n = k("div")), "section-toggles"), n.appendChild(T))
              : (n = null),
              L(B, n || T));
          }),
          x &&
            (i.ze ||
              ((i.ze = k(l)),
              M(i.ze, "btn"),
              C(i.ze, f, "all"),
              L(j, i.ze),
              P(i.ze, u, () => p("all"))),
            (i.ze.innerHTML = x)),
          S &&
            (i.je ||
              ((i.je = k(l)),
              M(i.je, "btn"),
              C(i.je, f, "necessary"),
              L(j, i.je),
              P(i.je, u, () => p([]))),
            (i.je.innerHTML = S)),
          E &&
            (i.qe ||
              ((i.qe = k(l)),
              M(i.qe, "btn"),
              M(i.qe, "btn--secondary"),
              C(i.qe, f, "save"),
              L(N, i.qe),
              P(i.qe, u, () => p())),
            (i.qe.innerHTML = E)),
          i.Pe && (i.we.replaceChild(i.Pe, i.Ge), (i.Ge = i.Pe)),
          er(1),
          r.N ||
            ((r.N = !0),
            V(m.re.ue, h, i.we),
            t(e),
            L(i.Ce, i.Fe),
            $(i.we),
            setTimeout(() => {
              let e;
              return ((e = i.Fe), e.classList.add("cc--anim"));
            }, 100)),
          F(2));
      };
    function ea(e, t, n, r, i) {
      let o = m.o,
        a = m.ne,
        l = k("label"),
        d = k("input"),
        f = k("span"),
        p = k("span"),
        h = k("span"),
        v = k("span"),
        y = k("span");
      if (
        ((v.innerHTML = D(1, 3)),
        (y.innerHTML = D(0, 3)),
        (d.type = "checkbox"),
        l.classList.add("section__toggle-wrapper"),
        d.classList.add("section__toggle"),
        v.classList.add("toggle__icon-on"),
        y.classList.add("toggle__icon-off"),
        f.classList.add("toggle__icon"),
        p.classList.add("toggle__icon-circle"),
        h.classList.add("toggle__label"),
        C(f, c, "true"),
        r
          ? (l.classList.add("toggle-service"), C(d, s, i), (a.se[i][t] = d))
          : (a.ae[t] = d),
        r
          ? P(d, "change", () => {
              let e = a.se[i],
                t = a.ae[i];
              for (let t in ((o.Z[i] = []), e)) {
                let n = e[t];
                n.checked && o.Z[i].push(n.value);
              }
              t.checked = o.Z[i].length > 0;
            })
          : P(d, u, () => {
              let e = a.se[t],
                n = d.checked;
              for (let r in ((o.Z[t] = []), e))
                ((e[r].checked = n), n && o.Z[t].push(r));
            }),
        (d.value = t),
        (h.textContent = e.replace(/<.*>.*<\/.*>/gm, "")),
        L(p, y),
        L(p, v),
        L(f, p),
        o.D)
      )
        (n.readOnly || n.enabled) && (d.checked = !0);
      else if (r) {
        let e = o.Y[i];
        d.checked = n.readOnly || g(e, t);
      } else g(o.R, t) && (d.checked = !0);
      return (n.readOnly && (d.disabled = !0), L(l, d), L(l, f), L(l, h), l);
    }
    let es = () => {
        let e = k("span");
        return (m.ne.Ke || (m.ne.Ke = e), e);
      },
      el = (e, t) => {
        let n = m.o,
          r = m.ne,
          { hide: i, showPreferences: o, acceptCategory: a } = e,
          s = n.u && n.u.consentModal;
        if (!s) return;
        let h = s.acceptAllBtn,
          g = s.acceptNecessaryBtn,
          v = s.showPreferencesBtn,
          y = s.closeIconLabel,
          b = s.footer,
          w = s.label,
          x = s.title,
          S = (e) => {
            (i(), a(e));
          };
        if (!r.Qe) {
          let e;
          ((r.Qe = k("div")),
            (r.he = k("div")),
            (r.We = k("div")),
            (r.Xe = k("div")),
            (r.Ye = k("div")),
            (e = r.Qe),
            e.classList.add("cm-wrapper"),
            r.he.classList.add("cm"),
            A(r.We, "body"),
            A(r.Xe, "texts"),
            A(r.Ye, "btns"),
            C(r.he, "role", "dialog"),
            C(r.he, "aria-modal", "true"),
            C(r.he, c, "false"),
            C(r.he, "aria-describedby", "cm__desc"),
            w
              ? C(r.he, "aria-label", w)
              : x && C(r.he, "aria-labelledby", "cm__title"));
          let t = n.i.guiOptions,
            i = t && t.consentModal,
            o = "box" === ((i && i.layout) || "box").split(" ")[0];
          (x &&
            y &&
            o &&
            (r.Le ||
              ((r.Le = k(l)),
              (r.Le.innerHTML = D()),
              A(r.Le, "btn"),
              A(r.Le, "btn--close"),
              P(r.Le, u, () => {
                S([]);
              }),
              L(r.We, r.Le)),
            C(r.Le, "aria-label", y)),
            L(r.We, r.Xe),
            (h || g || v) && L(r.We, r.Ye),
            (r.be = k("div")),
            C(r.be, "tabIndex", -1),
            L(r.he, r.be),
            L(r.he, r.We),
            L(r.Qe, r.he));
        }
        x &&
          (r.Ze ||
            ((r.Ze = k("h2")),
            (r.Ze.className = r.Ze.id = "cm__title"),
            L(r.Xe, r.Ze)),
          (r.Ze.innerHTML = x));
        let E = s.description;
        if (
          (E &&
            (n.V &&
              (E = E.replace(
                "{{revisionMessage}}",
                n.I ? "" : s.revisionMessage || "",
              )),
            r.et ||
              ((r.et = k("p")),
              (r.et.className = r.et.id = "cm__desc"),
              L(r.Xe, r.et)),
            (r.et.innerHTML = E)),
          h &&
            (r.tt ||
              ((r.tt = k(l)),
              L(r.tt, es()),
              A(r.tt, "btn"),
              C(r.tt, f, "all"),
              P(r.tt, u, () => {
                S("all");
              })),
            (r.tt.firstElementChild.innerHTML = h)),
          g &&
            (r.Ie ||
              ((r.Ie = k(l)),
              L(r.Ie, es()),
              A(r.Ie, "btn"),
              C(r.Ie, f, "necessary"),
              P(r.Ie, u, () => {
                S([]);
              })),
            (r.Ie.firstElementChild.innerHTML = g)),
          v &&
            (r.ot ||
              ((r.ot = k(l)),
              L(r.ot, es()),
              A(r.ot, "btn"),
              A(r.ot, "btn--secondary"),
              C(r.ot, f, "show"),
              P(r.ot, "mouseenter", () => {
                n.N || eo(e, t);
              }),
              P(r.ot, u, o)),
            (r.ot.firstElementChild.innerHTML = v)),
          r.nt ||
            ((r.nt = k("div")),
            A(r.nt, d),
            h && L(r.nt, r.tt),
            g && L(r.nt, r.Ie),
            (h || g) && L(r.We, r.nt),
            L(r.Ye, r.nt)),
          r.ot &&
            !r.st &&
            ((r.st = k("div")),
            r.Ie && r.tt
              ? (A(r.st, d), L(r.st, r.ot), L(r.Ye, r.st))
              : (L(r.nt, r.ot), A(r.nt, d + "--uneven"))),
          b)
        ) {
          if (!r.ct) {
            let e = k("div"),
              t = k("div");
            ((r.ct = k("div")),
              A(e, "footer"),
              A(t, "links"),
              A(r.ct, "link-group"),
              L(t, r.ct),
              L(e, t),
              L(r.he, e));
          }
          r.ct.innerHTML = b;
        }
        (er(0),
          n.T ||
            ((n.T = !0),
            V(m.re.ue, p, r.he),
            t(e),
            L(r.Ce, r.Qe),
            $(r.he),
            setTimeout(() => {
              let e;
              return ((e = r.Qe), e.classList.add("cc--anim"));
            }, 100)),
          F(1),
          _(r.We, e, eo, t));
      },
      ec = (e) => {
        if ("string" != typeof e) return null;
        if (e in m.o._) return e;
        let t = e.slice(0, 2);
        return t in m.o._ ? t : null;
      },
      ed = () => m.o.l || m.o.i.language.default,
      eu = (e) => {
        e && (m.o.l = e);
      },
      ef = async (e) => {
        let t = m.o,
          n = ec(e) ? e : ed(),
          r = t._[n];
        if (
          ("string" == typeof r
            ? (r = await (async (e) => {
                try {
                  let t = await fetch(e);
                  return await t.json();
                } catch (e) {
                  return (console.error(e), !1);
                }
              })(r))
            : y(r) && (r = await r()),
          !r)
        )
          throw `Could not load translation for the '${n}' language`;
        return ((t.u = r), eu(n), !0);
      },
      ep = () => {
        let e = m.ne;
        if (e.Ce) return;
        ((e.Ce = k("div")),
          (e.Ce.id = "cc-main"),
          e.Ce.setAttribute("data-nosnippet", ""),
          (() => {
            let e = m.o.i.language.rtl,
              t = m.ne.Ce;
            e &&
              t &&
              (Array.isArray(e) || (e = [e]),
              g(e, m.o.l)
                ? t.classList.add("cc--rtl")
                : t.classList.remove("cc--rtl"));
          })());
        let t = m.o.i.root;
        (t && "string" == typeof t && (t = document.querySelector(t)),
          (t || e.Ue.body).appendChild(e.Ce));
      },
      eh = (e, t) => {
        if (t instanceof RegExp) return e.filter((e) => t.test(e));
        {
          let n = e.indexOf(t);
          return n > -1 ? [e[n]] : [];
        }
      },
      em = (e, t, n) => {
        if (0 === e.length) return;
        let r = n || m.t.cookie.domain,
          i = t || m.t.cookie.path,
          o = "www." === r.slice(0, 4),
          a = o && r.substring(4),
          s = (e, t) => {
            (t && "." !== t.slice(0, 1) && (t = "." + t),
              (document.cookie =
                e +
                "=; path=" +
                i +
                (t ? "; domain=" + t : "") +
                "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"));
          };
        for (let t of e) (s(t, n), n || s(t, r), o && s(t, a));
      },
      eg = (e, t) => {
        let n = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
        return n ? (t ? n.pop() : e) : "";
      },
      ev = (e, t = []) => {
        (((e, t) => {
          let { O: n, R: r, B: i, N: o, Z: a, $: s, X: l } = m.o,
            c = [];
          if (e)
            for (let t of (Array.isArray(e)
              ? c.push(...e)
              : "string" == typeof e && (c = "all" === e ? n : [e]),
            n))
              a[t] = g(c, t) ? b(l[t]) : [];
          else
            ((c = [...r, ...s]),
              o &&
                (c = (() => {
                  let e = m.ne.ae;
                  if (!e) return [];
                  let t = [];
                  for (let n in e) e[n].checked && t.push(n);
                  return t;
                })()));
          ((c = c.filter((e) => !g(n, e) || !g(t, e))).push(...i), R(c));
        })(e, t),
          (() => {
            let e = m.o,
              { Z: t, B: n, Y: r, X: i, O: o } = e;
            for (let a of ((e.te = T(r)), o)) {
              let o = b(i[a]),
                s = t[a] && t[a].length > 0,
                l = g(n, a);
              if (0 !== o.length) {
                if (((r[a] = []), l)) r[a].push(...o);
                else if (s) {
                  let e = t[a];
                  r[a].push(...e);
                } else r[a] = e.Z[a];
                r[a] = w(r[a]);
              }
            }
          })(),
          (() => {
            let e = m.o;
            e.L = m.t.mode === r && e.D ? N(e.$, e.R) : N(e.R, e.p.categories);
            let t = e.L.length > 0,
              i = !1;
            for (let t of e.O)
              ((e.ee[t] = N(e.Y[t], e.te[t])), e.ee[t].length > 0 && (i = !0));
            let o = m.ne.ae;
            for (let t in o) o[t].checked = g(e.R, t);
            for (let t of e.O) {
              let n = m.ne.se[t],
                r = e.Y[t];
              for (let e in n) n[e].checked = g(r, e);
            }
            (e.C || (e.C = new Date()),
              e.M ||
                (e.M = "10000000-1000-4000-8000-100000000000".replace(
                  /[018]/g,
                  (e) =>
                    (
                      e ^
                      (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (e / 4)))
                    ).toString(16),
                )),
              (e.p = {
                categories: T(e.R),
                revision: m.t.revision,
                data: e.h,
                consentTimestamp: e.C.toISOString(),
                consentId: e.M,
                services: T(e.Y),
                languageCode: m.o.l,
              }),
              e.S && (e.p.lastConsentTimestamp = e.S.toISOString()));
            let a = !1,
              s = t || i;
            ((e.D || s) &&
              (e.D && ((e.D = !1), (a = !0)),
              (e.S = e.S ? new Date() : e.C),
              (e.p.lastConsentTimestamp = e.S.toISOString()),
              (() => {
                let e,
                  { hostname: t, protocol: n } = location,
                  {
                    name: r,
                    path: i,
                    domain: o,
                    sameSite: a,
                    useLocalStorage: s,
                    secure: l,
                  } = m.t.cookie,
                  c =
                    864e5 *
                    (y((e = m.t.cookie.expiresAfterDays)) ? e(m.o.F) : e),
                  d = new Date();
                (d.setTime(d.getTime() + c),
                  (m.o.p.expirationTime = d.getTime()));
                let u = JSON.stringify(m.o.p),
                  f =
                    r +
                    "=" +
                    encodeURIComponent(u) +
                    (0 !== c ? "; expires=" + d.toUTCString() : "") +
                    "; Path=" +
                    i +
                    "; SameSite=" +
                    a;
                (g(t, ".") && (f += "; Domain=" + o),
                  l && "https:" === n && (f += "; Secure"),
                  s
                    ? W(() => localStorage.setItem(r, u))
                    : (document.cookie = f),
                  m.o.p);
              })(),
              m.t.autoClearCookies &&
                (a || s) &&
                ((e) => {
                  let t,
                    n = m.o,
                    r = (() => {
                      let e = document.cookie.split(/;\s*/),
                        t = [];
                      for (let n of e) {
                        let e = n.split("=")[0];
                        t.push(e);
                      }
                      return t;
                    })(),
                    i =
                      ((t = m.o),
                      (e ? t.O : t.L).filter((e) => {
                        let n = t.P[e];
                        return !!n && !n.readOnly && !!n.autoClear;
                      }));
                  for (let e in n.ee)
                    for (let t of n.ee[e]) {
                      let i = n.X[e][t].cookies;
                      if (!g(n.Y[e], t) && i)
                        for (let e of i) em(eh(r, e.name), e.path, e.domain);
                    }
                  for (let t of i) {
                    let i = n.P[t].autoClear,
                      o = (i && i.cookies) || [],
                      a = g(n.L, t),
                      s = !g(n.R, t),
                      l = a && s;
                    if (e ? s : l)
                      for (let e of (i.reloadPage && l && (n.j = !0), o))
                        em(eh(r, e.name), e.path, e.domain);
                  }
                })(a),
              U()),
              (a && (V(m.re.ie), V(m.re.le), m.t.mode === n)) ||
                (s && V(m.re.de), e.j && ((e.j = !1), location.reload())));
          })());
      },
      ey = (e) => g(m.o.D ? [] : m.o.R, e),
      eb = (e, t) => g(m.o.D ? [] : m.o.Y[t] || [], e),
      ew = (e) => {
        let { ne: t, o: n } = m;
        if (!n.k) {
          let r;
          if (!n.T) {
            if (!e) return;
            el(eC, ep);
          }
          ((n.k = !0),
            (n.J = document.activeElement),
            n.v && B(!0),
            O(t.he, 1),
            (r = t.ye),
            r.classList.add(i),
            C(t.he, c, "false"),
            setTimeout(() => {
              I(m.ne.be);
            }, 100),
            V(m.re.fe, p));
        }
      },
      ex = () => {
        let e,
          { ne: t, o: n, re: r } = m;
        n.k &&
          ((n.k = !1),
          n.v && B(),
          I(t.Ke, !0),
          (e = t.ye),
          e.classList.remove(i),
          C(t.he, c, "true"),
          I(n.J),
          (n.J = null),
          V(r._e, p));
      },
      ek = () => {
        let e,
          t = m.o;
        t.A ||
          (t.N || eo(eC, ep),
          (t.A = !0),
          t.k ? (t.U = document.activeElement) : (t.J = document.activeElement),
          O(m.ne.we, 2),
          (e = m.ne.ye),
          e.classList.add(o),
          C(m.ne.we, c, "false"),
          setTimeout(() => {
            I(m.ne.ve);
          }, 100),
          V(m.re.fe, h));
      };
    var eC = {
      show: ew,
      hide: ex,
      showPreferences: ek,
      hidePreferences: () => {
        let e,
          t = m.o;
        t.A &&
          ((t.A = !1),
          (() => {
            let e = eS(),
              t = m.o.P,
              n = m.ne.ae,
              r = m.ne.se,
              i = (e) => g(m.o.$, e);
            for (let o in n) {
              let a = !!t[o].readOnly;
              for (let t in ((n[o].checked = a || (e ? ey(o) : i(o))), r[o]))
                r[o][t].checked = a || (e ? eb(t, o) : i(o));
            }
          })(),
          I(m.ne.$e, !0),
          (e = m.ne.ye),
          e.classList.remove(o),
          C(m.ne.we, c, "true"),
          t.k ? (I(t.U), (t.U = null)) : (I(t.J), (t.J = null)),
          V(m.re._e, h));
      },
      acceptCategory: ev,
    };
    let eS = () => !m.o.D,
      eE = async (e) => {
        let { o: t, t: n, re: i } = m,
          o = window;
        if (!o._ccRun) {
          if (
            ((o._ccRun = !0),
            ((e) => {
              let { ne: t, t: n, o: i } = m,
                { cookie: o } = n,
                a = m.ce,
                l = e.cookie,
                c = e.categories,
                d = b(c) || [],
                u = navigator,
                f = document;
              ((t.Ue = f),
                (t.ye = f.documentElement),
                (o.domain = location.hostname),
                (i.i = e),
                (i.P = c),
                (i.O = d),
                (i._ = e.language.translations),
                (i.v = !!e.disablePageInteraction),
                (a.ie = e.onFirstConsent),
                (a.le = e.onConsent),
                (a.de = e.onChange),
                (a._e = e.onModalHide),
                (a.fe = e.onModalShow),
                (a.ue = e.onModalReady));
              let {
                mode: p,
                autoShow: h,
                lazyHtmlGeneration: y,
                autoClearCookies: w,
                revision: x,
                manageScriptTags: k,
                hideFromBots: C,
              } = e;
              (p === r && (n.mode = p),
                "boolean" == typeof w && (n.autoClearCookies = w),
                "boolean" == typeof k && (n.manageScriptTags = k),
                "number" == typeof x &&
                  x >= 0 &&
                  ((n.revision = x), (i.V = !0)),
                "boolean" == typeof h && (n.autoShow = h),
                "boolean" == typeof y && (n.lazyHtmlGeneration = y),
                !1 === C && (n.hideFromBots = !1),
                !0 === n.hideFromBots &&
                  u &&
                  (i.G =
                    (u.userAgent &&
                      /bot|crawl|spider|slurp|teoma/i.test(u.userAgent)) ||
                    u.webdriver),
                v(l) && (n.cookie = { ...o, ...l }),
                n.autoClearCookies,
                i.V,
                n.manageScriptTags,
                ((e) => {
                  let { P: t, X: n, Y: r, Z: i, B: o } = m.o;
                  for (let a of e) {
                    let e = t[a],
                      s = e.services || {},
                      l = (v(s) && b(s)) || [];
                    for (let t of ((n[a] = {}),
                    (r[a] = []),
                    (i[a] = []),
                    e.readOnly && (o.push(a), (r[a] = l)),
                    (m.ne.se[a] = {}),
                    l)) {
                      let e = s[t];
                      ((e.Se = !1), (n[a][t] = e));
                    }
                  }
                })(d),
                (() => {
                  let e, t;
                  if (!m.t.manageScriptTags) return;
                  let n = m.o;
                  for (let r of ((e = document),
                  (t = "script[" + s + "]"),
                  e.querySelectorAll(t))) {
                    let e = E(r, s),
                      t = r.dataset.service || "",
                      i = !1;
                    if (
                      (e && "!" === e.charAt(0) && ((e = e.slice(1)), (i = !0)),
                      "!" === t.charAt(0) && ((t = t.slice(1)), (i = !0)),
                      g(n.O, e) &&
                        (n.oe.push({ Me: r, xe: !1, ke: i, De: e, Te: t }), t))
                    ) {
                      let r = n.X[e];
                      r[t] || (r[t] = { Se: !1 });
                    }
                  }
                })(),
                eu(
                  (() => {
                    let e = m.o.i.language.autoDetect;
                    if (e) {
                      let t = ec(
                        {
                          browser: navigator.language,
                          document: document.documentElement.lang,
                        }[e],
                      );
                      if (t) return t;
                    }
                    return ed();
                  })(),
                ));
            })(e),
            t.G)
          )
            return;
          (() => {
            let e,
              t = m.o,
              n = m.t,
              i = (() => {
                var e;
                let t = m.t.cookie.name,
                  n = m.t.cookie.useLocalStorage;
                return (
                  (e = n ? W(() => localStorage.getItem(t)) || "" : eg(t, !0)),
                  W(() => JSON.parse(n ? e : decodeURIComponent(e)), !0) || {}
                );
              })(),
              {
                categories: o,
                services: a,
                consentId: s,
                consentTimestamp: l,
                lastConsentTimestamp: c,
                data: d,
                revision: u,
              } = i,
              f = Array.isArray(o);
            ((t.p = i), (t.M = s));
            let p = !!s && "string" == typeof s;
            ((t.C = l),
              t.C && (t.C = new Date(l)),
              (t.S = c),
              t.S && (t.S = new Date(c)),
              (t.h = void 0 !== d ? d : null),
              t.V && p && u !== n.revision && (t.I = !1),
              (t.D = !(p && t.I && t.C && t.S && f)),
              n.cookie.useLocalStorage &&
                !t.D &&
                ((t.D = new Date().getTime() > (i.expirationTime || 0)),
                t.D &&
                  ((e = n.cookie.name), W(() => localStorage.removeItem(e)))),
              t.D,
              (() => {
                let e = m.o;
                for (let t of e.O) {
                  let n = e.P[t];
                  if (n.readOnly || n.enabled) {
                    e.$.push(t);
                    let n = e.X[t] || {};
                    for (let i in n)
                      (e.Z[t].push(i), e.i.mode === r && e.Y[t].push(i));
                  }
                }
              })(),
              t.D
                ? n.mode === r && (t.R = [...t.$])
                : ((t.Y = { ...t.Y, ...a }),
                  (t.Z = { ...t.Y }),
                  R([...t.B, ...o])));
          })();
          let a = eS();
          if (!(await ef())) return !1;
          if (
            (_(null, eC, eo, ep),
            m.o.D && el(eC, ep),
            m.t.lazyHtmlGeneration || eo(eC, ep),
            n.autoShow && !a && ew(!0),
            a)
          )
            return (U(), V(i.le));
          n.mode === r && U(t.$);
        }
      };
    e.s([
      "acceptCategory",
      0,
      ev,
      "acceptedCategory",
      0,
      ey,
      "hide",
      0,
      ex,
      "run",
      0,
      eE,
      "showPreferences",
      0,
      ek,
      "validConsent",
      0,
      eS,
      "validCookie",
      0,
      (e) => "" !== eg(e, !0),
    ]);
  },
  166794,
  (e) => {
    "use strict";
    var t = e.i(16239);
    e.s(["Settings", () => t.default]);
  },
  474816,
  (e) => {
    "use strict";
    var t = e.i(127992);
    e.s(["Trophy", () => t.default]);
  },
  986253,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("chevron-right", [
      ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
    ]);
    e.s(["default", 0, t]);
  },
  867927,
  (e) => {
    "use strict";
    var t = e.i(986253);
    e.s(["ChevronRight", () => t.default]);
  },
  146492,
  763159,
  778609,
  59745,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(846932),
      i = e.i(88653),
      o = e.i(772328),
      a = e.i(919056),
      s = e.i(867927);
    (e.s(
      [
        "PrimaryCTA",
        0,
        function ({
          showArrow: e = !1,
          className: l,
          children: c,
          onClick: d,
          ...u
        }) {
          let [f, p] = (0, n.useState)([]),
            h = (0, o.useReducedMotion)();
          return (0, t.jsxs)("div", {
            className: "relative inline-block",
            children: [
              (0, t.jsx)(i.AnimatePresence, {
                children: f.map((e) =>
                  (0, t.jsx)(
                    r.motion.div,
                    {
                      initial: { opacity: 1, x: 0, y: 0, scale: 0 },
                      animate: { opacity: 0, x: e.x, y: e.y, scale: e.scale },
                      exit: { opacity: 0 },
                      transition: { duration: 0.8, ease: "easeOut" },
                      className:
                        "absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-terracotta pointer-events-none",
                    },
                    e.id,
                  ),
                ),
              }),
              (0, t.jsxs)(r.motion.button, {
                whileTap: h ? void 0 : { scale: 0.92 },
                transition: { type: "spring", stiffness: 300, damping: 22 },
                onClick: (e) => {
                  (h ||
                    (p(
                      Array.from({ length: 8 }).map((e, t) => {
                        let n = 40 + 20 * Math.random(),
                          r = (((360 * t) / 8) * Math.PI) / 180;
                        return {
                          id: Math.random().toString(),
                          x: Math.cos(r) * n,
                          y: Math.sin(r) * n,
                          scale: 0.5 + 0.5 * Math.random(),
                        };
                      }),
                    ),
                    setTimeout(() => p([]), 800)),
                    d && d(e));
                },
                className: (0, a.twMerge)(
                  "relative flex items-center justify-center gap-2 px-6 py-3",
                  "bg-terracotta text-cream font-bold rounded-full transition-all duration-300",
                  "hover:bg-[#C95039] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-terracotta/30",
                  "hover:[mask-image:url(#bitemark-right)] [mask-image:none]",
                  l,
                ),
                ...u,
                children: [
                  (0, t.jsx)("span", { children: c }),
                  e && (0, t.jsx)(s.ChevronRight, { className: "w-5 h-5" }),
                ],
              }),
            ],
          });
        },
      ],
      763159,
    ),
      e.s(
        [
          "SecondaryCTA",
          0,
          function ({ className: e, children: n, ...i }) {
            let s = (0, o.useReducedMotion)();
            return (0, t.jsx)(r.motion.button, {
              whileTap: s ? void 0 : { scale: 0.92 },
              transition: { type: "spring", stiffness: 300, damping: 22 },
              className: (0, a.twMerge)(
                "flex items-center justify-center px-6 py-3",
                "border-2 border-terracotta text-terracotta font-bold rounded-full transition-all duration-300",
                "hover:bg-terracotta/5 focus:outline-none focus:ring-4 focus:ring-terracotta/20",
                e,
              ),
              ...i,
              children: n,
            });
          },
        ],
        778609,
      ));
    var l = e.i(77071);
    (e.s(
      [
        "IconCirclePlus",
        0,
        function ({ className: e, ...n }) {
          let i = (0, o.useReducedMotion)();
          return (0, t.jsx)(r.motion.button, {
            whileTap: i ? void 0 : { scale: 0.9 },
            transition: { type: "spring", stiffness: 300, damping: 22 },
            className: (0, a.twMerge)(
              "flex items-center justify-center w-[34px] h-[34px] rounded-full",
              "bg-sand text-charcoal transition-colors hover:bg-terracotta hover:text-cream",
              "focus-visible:ring-4 focus-visible:ring-terracotta/30 focus:outline-none",
              e,
            ),
            "aria-label": "Hinzufügen",
            ...n,
            children: (0, t.jsx)(l.Plus, { className: "w-5 h-5" }),
          });
        },
      ],
      59745,
    ),
      e.s([], 146492));
  },
  957215,
  (e) => {
    "use strict";
    var t = e.i(247167),
      n = e.i(271645),
      r = e.i(618566);
    function i() {
      return false;
    }
    function o(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function a(e) {
      return e.startsWith("http://") ||
        e.startsWith("https://") ||
        e.startsWith("/")
        ? e
        : `/${e}`;
    }
    function s(e) {
      (0, n.useEffect)(() => {
        var t;
        e.beforeSend &&
          (null == (t = window.si) ||
            t.call(window, "beforeSend", e.beforeSend));
      }, [e.beforeSend]);
      let r = (0, n.useRef)(null);
      return (
        (0, n.useEffect)(() => {
          if (!r.current) {
            let n = (function (e = {}, t) {
              var n;
              if (!("u" > typeof window) || null === e.route) return null;
              window.si ||
                (window.si = function (...e) {
                  ((window.siq = window.siq || []), window.siq.push(e));
                });
              let {
                beforeSend: r,
                src: o,
                dataset: s,
              } = (function (e, t) {
                var n, r;
                let o = e;
                if (t)
                  try {
                    o = {
                      ...(null == (n = JSON.parse(t))
                        ? void 0
                        : n.speedInsights),
                      ...e,
                    };
                  } catch {}
                let s = {
                  sdkn:
                    "@vercel/speed-insights" +
                    (o.framework ? `/${o.framework}` : ""),
                  sdkv: "2.0.0",
                };
                return (
                  o.sampleRate && (s.sampleRate = o.sampleRate.toString()),
                  o.route && (s.route = o.route),
                  i() && !1 === o.debug && (s.debug = "false"),
                  o.dsn && (s.dsn = o.dsn),
                  o.endpoint
                    ? (s.endpoint = a(o.endpoint))
                    : o.basePath &&
                      (s.endpoint = a(`${o.basePath}/speed-insights/vitals`)),
                  {
                    src: (r = o).scriptSrc
                      ? a(r.scriptSrc)
                      : i()
                        ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
                        : r.dsn
                          ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
                          : r.basePath
                            ? a(`${r.basePath}/speed-insights/script.js`)
                            : "/_vercel/speed-insights/script.js",
                    beforeSend: o.beforeSend,
                    dataset: s,
                  }
                );
              })(e, t);
              if (document.head.querySelector(`script[src*="${o}"]`))
                return null;
              r && (null == (n = window.si) || n.call(window, "beforeSend", r));
              let l = document.createElement("script");
              for (let [e, t] of ((l.src = o),
              (l.defer = !0),
              Object.entries(s)))
                l.dataset[e] = t;
              return (
                (l.onerror = () => {
                  console.log(
                    `[Vercel Speed Insights] Failed to load script from ${o}. Please check if any content blockers are enabled and try again.`,
                  );
                }),
                document.head.appendChild(l),
                {
                  setRoute: (e) => {
                    l.dataset.route = e ?? void 0;
                  },
                }
              );
            })(
              {
                framework: e.framework ?? "react",
                basePath:
                  e.basePath ??
                  (function () {
                    if (void 0 !== t.default && void 0 !== t.default.env)
                      return t.default.env
                        .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                  })(),
                ...e,
              },
              e.configString ??
                (function () {
                  if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env
                      .REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
                })(),
            );
            n && (r.current = n.setRoute);
          }
        }, [e]),
        (0, n.useEffect)(() => {
          r.current && e.route && r.current(e.route);
        }, [e.route]),
        null
      );
    }
    function l(e) {
      let i = (() => {
        let e = (0, r.useParams)(),
          t = (0, r.useSearchParams)() || new URLSearchParams(),
          n = (0, r.usePathname)();
        if (!e) return null;
        let i = Object.keys(e).length ? e : Object.fromEntries(t.entries());
        if (!n || !i) return n;
        let a = n;
        try {
          let e = Object.entries(i);
          for (let [t, n] of e)
            if (!Array.isArray(n)) {
              let e = o(n);
              e.test(a) && (a = a.replace(e, `/[${t}]`));
            }
          for (let [t, n] of e)
            if (Array.isArray(n)) {
              let e = o(n.join("/"));
              e.test(a) && (a = a.replace(e, `/[...${t}]`));
            }
          return a;
        } catch {
          return n;
        }
      })();
      return n.default.createElement(s, {
        route: i,
        ...e,
        framework: "next",
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
        configString: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
        })(),
      });
    }
    e.s([
      "SpeedInsights",
      0,
      function (e) {
        return n.default.createElement(
          n.Suspense,
          { fallback: null },
          n.default.createElement(l, { ...e }),
        );
      },
    ]);
  },
  245812,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(846932),
      r = e.i(88653),
      i = e.i(772328),
      o = e.i(74909),
      a = e.i(919056);
    e.s([
      "ToastContainer",
      0,
      function () {
        let e = (0, o.useToastStore)((e) => e.toasts),
          s = (0, i.useReducedMotion)();
        return (0, t.jsx)("div", {
          className:
            "fixed top-4 left-0 right-0 z-[100] flex flex-col items-center gap-2 pointer-events-none",
          "aria-live": "polite",
          role: "status",
          children: (0, t.jsx)(r.AnimatePresence, {
            children: e.map((e) =>
              (0, t.jsxs)(
                n.motion.div,
                {
                  initial: s
                    ? { opacity: 0 }
                    : { opacity: 0, y: -50, scale: 0.9 },
                  animate: s ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
                  exit: s ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.9 },
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                  className: (0, a.twMerge)(
                    "pointer-events-auto px-6 py-3 rounded-full shadow-clay backdrop-blur-md font-bold text-center",
                    "error" === e.type
                      ? "bg-red-500/90 text-white"
                      : "success" === e.type
                        ? "bg-terracotta text-cream"
                        : "bg-charcoal/90 text-cream",
                  ),
                  children: [
                    e.title,
                    e.message &&
                      (0, t.jsx)("span", {
                        className:
                          "block text-sm font-normal opacity-90 mt-0.5",
                        children: e.message,
                      }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        });
      },
    ]);
  },
  965856,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(846932),
      i = e.i(88653),
      o = e.i(772328),
      a = e.i(474816);
    e.s([
      "AchievementBanner",
      0,
      function () {
        let [e, s] = (0, n.useState)(null),
          l = (0, o.useReducedMotion)();
        return (
          (0, n.useEffect)(() => {
            let e = (e) => {
              let t = e.detail,
                n = "string" == typeof t ? t : t?.id,
                r =
                  t?.message ||
                  "Sweet Tooth! Du hast das Logo oft genug angetippt.";
              if (!n) return;
              let i = JSON.parse(
                localStorage.getItem("heyfede_achievements") || "[]",
              );
              if (!i.includes(n)) {
                (i.push(n),
                  localStorage.setItem(
                    "heyfede_achievements",
                    JSON.stringify(i),
                  ),
                  s({ id: n, message: r }));
                try {
                  let e = new Audio("/sounds/achievement.mp3");
                  ((e.volume = 0.5), e.play().catch(() => {}));
                } catch (e) {}
                setTimeout(() => s(null), 5e3);
              }
            };
            return (
              window.addEventListener("achievementUnlocked", e),
              () => window.removeEventListener("achievementUnlocked", e)
            );
          }, []),
          (0, t.jsx)("div", {
            className:
              "fixed top-20 left-1/2 -translate-x-1/2 z-[150] pointer-events-none w-full max-w-sm px-4",
            children: (0, t.jsx)(i.AnimatePresence, {
              children:
                e &&
                (0, t.jsx)(r.motion.div, {
                  initial: l
                    ? { opacity: 0 }
                    : { opacity: 0, y: -50, scale: 0.8, rotate: -2 },
                  animate: l
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1, rotate: 0 },
                  exit: l
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20, scale: 0.9, rotate: 2 },
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                  className:
                    "pointer-events-auto bg-gradient-to-r from-peach to-terracotta p-1 rounded-2xl shadow-clay",
                  children: (0, t.jsxs)("div", {
                    className:
                      "bg-cream rounded-xl p-4 flex items-center gap-4 border-2 border-peach/50",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-peach rounded-full flex items-center justify-center text-terracotta",
                        children: (0, t.jsx)(a.Trophy, {
                          className: "w-6 h-6",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "text-xs font-bold text-terracotta uppercase tracking-wider mb-0.5",
                            children: "Achievement Unlocked",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-sm font-bold text-charcoal leading-tight",
                            children: e.message,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            }),
          })
        );
      },
    ]);
  },
  397813,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(846932),
      i = e.i(88653),
      o = e.i(772328);
    e.i(146492);
    var a = e.i(763159),
      s = e.i(778609),
      l = e.i(265694),
      c = e.i(262663);
    e.s([
      "CookieBanner",
      0,
      function () {
        let [e, d] = (0, n.useState)(!1),
          u = (0, o.useReducedMotion)();
        (0, n.useEffect)(() => {
          let e = () => {
              setTimeout(() => {
                (c.run({
                  autoShow: !1,
                  guiOptions: {
                    consentModal: {
                      layout: "box",
                      position: "bottom left",
                      equalWeightButtons: !0,
                    },
                    preferencesModal: { layout: "box" },
                  },
                  categories: {
                    necessary: { enabled: !0, readOnly: !0 },
                    functional: { enabled: !1 },
                    analytics: { enabled: !1 },
                    marketing: { enabled: !1 },
                  },
                  onConsent: () => {
                    d(!1);
                  },
                  onChange: () => {
                    d(!1);
                  },
                  language: {
                    default: "de",
                    translations: {
                      de: {
                        consentModal: {
                          title: "🧇 Cookies & Datenschutz",
                          description:
                            'Hey! Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Du entscheidest selbst, welche Kategorien du zulassen möchtest. Mehr dazu in unserer <a href="/legal#datenschutz" class="cc-link">Datenschutzerklärung</a>.',
                          acceptAllBtn: "Alle akzeptieren",
                          acceptNecessaryBtn: "Nur Notwendige",
                          showPreferencesBtn: "Einstellungen anpassen",
                        },
                        preferencesModal: {
                          title: "Cookie-Einstellungen",
                          acceptAllBtn: "Alle akzeptieren",
                          acceptNecessaryBtn: "Alle ablehnen",
                          savePreferencesBtn: "Auswahl speichern",
                          closeIconLabel: "Schließen",
                          sections: [
                            {
                              title: "Deine Cookie-Einstellungen",
                              description:
                                "Hier kannst du genau festlegen, welche Cookies wir setzen dürfen. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.",
                            },
                            {
                              title: "Technisch Notwendige Cookies",
                              description:
                                "Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie die Anmeldung, den Warenkorb und die Seitennavigation.",
                              linkedCategory: "necessary",
                              cookieTable: {
                                headers: {
                                  name: "Cookie",
                                  domain: "Anbieter",
                                  description: "Zweck",
                                  expiration: "Laufzeit",
                                },
                                body: [
                                  {
                                    name: "cc_cookie",
                                    domain: "hey-fede.de",
                                    description:
                                      "Speichert deine Cookie-Einstellungen",
                                    expiration: "6 Monate",
                                  },
                                  {
                                    name: "__session",
                                    domain: "Firebase Auth",
                                    description: "Login-Session-Verwaltung",
                                    expiration: "Sitzung",
                                  },
                                ],
                              },
                            },
                            {
                              title: "Funktionale Cookies",
                              description:
                                "Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern deiner Spracheinstellungen, Theme-Präferenzen und Gamification-Fortschritte (z.B. Achievements).",
                              linkedCategory: "functional",
                              cookieTable: {
                                headers: {
                                  name: "Cookie",
                                  domain: "Anbieter",
                                  description: "Zweck",
                                  expiration: "Laufzeit",
                                },
                                body: [
                                  {
                                    name: "hf_ach_*",
                                    domain: "hey-fede.de",
                                    description:
                                      "Achievement-Gamification-Fortschritt",
                                    expiration: "Dauerhaft",
                                  },
                                ],
                              },
                            },
                            {
                              title: "Statistik & Analyse",
                              description:
                                "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Alle Daten werden anonymisiert erfasst.",
                              linkedCategory: "analytics",
                            },
                            {
                              title: "Marketing & Social Media",
                              description:
                                "Diese Cookies werden genutzt, um dir personalisierte Inhalte und Werbung anzuzeigen. Sie können auch von Drittanbietern gesetzt werden, deren Dienste wir auf unserer Website eingebunden haben.",
                              linkedCategory: "marketing",
                            },
                            {
                              title: "Weitere Informationen",
                              description:
                                'Bei Fragen zu unseren Cookies kontaktiere uns unter <a href="mailto:datenschutz@hey-fede.de" class="cc-link">datenschutz@hey-fede.de</a> oder lies unsere vollständige <a href="/legal#datenschutz" class="cc-link">Datenschutzerklärung</a>.',
                            },
                          ],
                        },
                      },
                    },
                  },
                }),
                  c.validCookie("cc_cookie") || d(!0));
              }, 500);
            },
            t = () => {
              (window.removeEventListener("splash:done", t),
                clearTimeout(n),
                e());
            };
          window.addEventListener("splash:done", t);
          let n = setTimeout(() => {
            (window.removeEventListener("splash:done", t), e());
          }, 4e3);
          return () => {
            (window.removeEventListener("splash:done", t), clearTimeout(n));
          };
        }, []);
        let f = (e) => {
          "custom" === e
            ? c.showPreferences()
            : ("all" === e
                ? c.acceptCategory("all")
                : "essential" === e && c.acceptCategory([]),
              c.hide(),
              d(!1));
        };
        return (0, t.jsx)(i.AnimatePresence, {
          children:
            e &&
            (0, t.jsx)(r.motion.div, {
              initial: u ? { opacity: 0 } : { opacity: 0, y: 100 },
              animate: u ? { opacity: 1 } : { opacity: 1, y: 0 },
              exit: u ? { opacity: 0 } : { opacity: 0, y: 100 },
              transition: { type: "spring", stiffness: 300, damping: 30 },
              className:
                "fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none flex justify-center",
              children: (0, t.jsxs)("div", {
                className:
                  "pointer-events-auto bg-cream border-2 border-peach rounded-3xl shadow-clay p-6 w-full max-w-4xl flex flex-col gap-6 relative overflow-hidden",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-0 right-0 w-16 h-16 pointer-events-none",
                    style: { maskImage: "url(#bitemark-top-right)" },
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col md:flex-row gap-6 items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "flex-shrink-0 w-16 h-16 bg-peach rounded-full flex items-center justify-center text-terracotta",
                        children: (0, t.jsx)(l.Cookie, {
                          className: "w-8 h-8",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex-grow text-center md:text-left",
                        children: [
                          (0, t.jsx)("h3", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2",
                            children: "Cookies für dich!",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-sm text-charcoal/80 leading-relaxed max-w-xl",
                            children:
                              "Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row gap-3 w-full md:w-auto",
                        children: [
                          (0, t.jsx)("button", {
                            onClick: () => f("essential"),
                            className:
                              "text-sm font-bold text-charcoal/60 hover:text-charcoal underline underline-offset-4 px-4 py-2 transition-colors",
                            children: "Ablehnen",
                          }),
                          (0, t.jsx)(s.SecondaryCTA, {
                            onClick: () => f("custom"),
                            className: "py-2 text-sm",
                            children: "Anpassen",
                          }),
                          (0, t.jsx)(a.PrimaryCTA, {
                            onClick: () => f("all"),
                            className: "py-2 text-sm whitespace-nowrap",
                            children: "Akzeptieren",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        });
      },
    ]);
  },
  522215,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(846932),
      i = e.i(88653),
      o = e.i(262663),
      a = e.i(265694),
      s = e.i(166794);
    e.s([
      "default",
      0,
      function () {
        let [e, l] = (0, n.useState)(!1),
          [c, d] = (0, n.useState)(!1),
          [u, f] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
          let e = () => l(o.validConsent());
          (e(),
            window.addEventListener("cc:onConsent", e),
            window.addEventListener("cc:onChange", e));
          let t = setTimeout(() => {
            o.validConsent() && (f(!0), setTimeout(() => f(!1), 3e3));
          }, 5e3);
          return () => {
            (window.removeEventListener("cc:onConsent", e),
              window.removeEventListener("cc:onChange", e),
              clearTimeout(t));
          };
        }, []),
        e)
          ? (0, t.jsxs)("div", {
              style: { position: "fixed", bottom: 20, left: 20, zIndex: 800 },
              children: [
                (0, t.jsx)(i.AnimatePresence, {
                  children:
                    (c || u) &&
                    (0, t.jsxs)(r.motion.div, {
                      initial: { opacity: 0, x: -8, scale: 0.9 },
                      animate: { opacity: 1, x: 0, scale: 1 },
                      exit: { opacity: 0, x: -8, scale: 0.9 },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                      style: {
                        position: "absolute",
                        bottom: "calc(100% + 10px)",
                        left: 0,
                        background: "rgba(45, 31, 25, 0.92)",
                        backdropFilter: "blur(12px)",
                        color: "#fefefe",
                        padding: "8px 14px",
                        borderRadius: 12,
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-nunito), sans-serif",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        boxShadow: "0 8px 24px rgba(45,31,25,0.2)",
                        pointerEvents: "none",
                      },
                      children: [
                        "Cookie-Einstellungen",
                        (0, t.jsx)("div", {
                          style: {
                            position: "absolute",
                            bottom: -5,
                            left: 16,
                            width: 10,
                            height: 10,
                            background: "rgba(45, 31, 25, 0.92)",
                            transform: "rotate(45deg)",
                            borderRadius: 2,
                          },
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(r.motion.div, {
                  animate: { scale: [1, 1.6, 1.6], opacity: [0.4, 0, 0] },
                  transition: { duration: 3, repeat: 1 / 0, ease: "easeOut" },
                  style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #CC624C",
                    pointerEvents: "none",
                  },
                }),
                (0, t.jsx)(r.motion.button, {
                  initial: { opacity: 0, scale: 0, rotate: -180 },
                  animate: { opacity: 1, scale: 1, rotate: 0 },
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1.5,
                  },
                  whileHover: { scale: 1.12 },
                  whileTap: { scale: 0.9 },
                  onHoverStart: () => {
                    (d(!0), f(!1));
                  },
                  onHoverEnd: () => d(!1),
                  onClick: () => o.showPreferences(),
                  "aria-label": "Cookie-Einstellungen öffnen",
                  style: {
                    position: "relative",
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(245, 239, 232, 0.85)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: c
                      ? "0 8px 28px rgba(204,98,76,0.25), 0 0 0 1px rgba(228,192,168,0.5) inset"
                      : "0 4px 16px rgba(45,31,25,0.1), 0 0 0 1px rgba(228,192,168,0.3) inset",
                    transition: "box-shadow 0.3s ease",
                  },
                  children: (0, t.jsx)(r.motion.div, {
                    animate: { rotate: 90 * !!c },
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                    children: c
                      ? (0, t.jsx)(s.Settings, {
                          size: 20,
                          color: "#CC624C",
                          strokeWidth: 2,
                        })
                      : (0, t.jsx)(a.Cookie, {
                          size: 20,
                          color: "#CC624C",
                          strokeWidth: 2,
                        }),
                  }),
                }),
              ],
            })
          : null;
      },
    ]);
  },
  940542,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(262663);
    e.s([
      "default",
      0,
      function () {
        return (
          (0, t.useEffect)(() => {
            let e = () => {
              (n.acceptedCategory("analytics"),
                n.acceptedCategory("marketing"),
                n.acceptedCategory("functional"));
            };
            return (
              window.addEventListener("cc:onConsent", e),
              window.addEventListener("cc:onChange", e),
              e(),
              () => {
                (window.removeEventListener("cc:onConsent", e),
                  window.removeEventListener("cc:onChange", e));
              }
            );
          }, []),
          null
        );
      },
    ]);
  },
  114629,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(846932),
      i = e.i(591994),
      o = e.i(887652),
      a = e.i(772328);
    e.s([
      "SyrupCursor",
      0,
      function () {
        let e = (0, a.useReducedMotion)(),
          [s, l] = (0, n.useState)(!1),
          [c, d] = (0, n.useState)(!1),
          u = (0, o.useMotionValue)(-100),
          f = (0, o.useMotionValue)(-100),
          p = (0, i.useSpring)(u, { stiffness: 1e3, damping: 40 }),
          h = (0, i.useSpring)(f, { stiffness: 1e3, damping: 40 }),
          m = (0, i.useSpring)(u, { stiffness: 150, damping: 18, mass: 0.5 }),
          g = (0, i.useSpring)(f, { stiffness: 150, damping: 18, mass: 0.5 });
        return ((0, n.useEffect)(() => {
          if (
            e ||
            !window.matchMedia("(pointer: fine) and (hover: hover)").matches
          )
            return;
          d(!0);
          let t = (e) => {
              (u.set(e.clientX), f.set(e.clientY));
            },
            n = (e) => {
              let t = e.target;
              t &&
                l(
                  "a" === t.tagName.toLowerCase() ||
                    "button" === t.tagName.toLowerCase() ||
                    null !== t.closest("a") ||
                    null !== t.closest("button") ||
                    "pointer" === window.getComputedStyle(t).cursor,
                );
            };
          return (
            window.addEventListener("mousemove", t),
            window.addEventListener("mouseover", n),
            () => {
              (window.removeEventListener("mousemove", t),
                window.removeEventListener("mouseover", n));
            }
          );
        }, [u, f, e]),
        e || !c)
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("svg", {
                  className: "hidden",
                  children: (0, t.jsx)("defs", {
                    children: (0, t.jsxs)("filter", {
                      id: "goo",
                      children: [
                        (0, t.jsx)("feGaussianBlur", {
                          in: "SourceGraphic",
                          stdDeviation: "6",
                          result: "blur",
                        }),
                        (0, t.jsx)("feColorMatrix", {
                          in: "blur",
                          mode: "matrix",
                          values:
                            "1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 25 -9",
                          result: "goo",
                        }),
                        (0, t.jsx)("feComposite", {
                          in: "SourceGraphic",
                          in2: "goo",
                          operator: "atop",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "fixed inset-0 pointer-events-none z-[9999] mix-blend-multiply hidden md:block",
                  style: { filter: "url(#goo)" },
                  children: [
                    (0, t.jsx)(r.motion.div, {
                      className:
                        "absolute top-0 left-0 bg-terracotta rounded-full",
                      style: {
                        x: p,
                        y: h,
                        width: 16,
                        height: 16,
                        translateX: "-50%",
                        translateY: "-50%",
                      },
                      animate: { scale: s ? 1.5 : 1 },
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }),
                    (0, t.jsx)(r.motion.div, {
                      className:
                        "absolute top-0 left-0 bg-terracotta/70 rounded-full",
                      style: {
                        x: m,
                        y: g,
                        width: 32,
                        height: 32,
                        translateX: "-50%",
                        translateY: "-50%",
                      },
                      animate: { scale: s ? 1.5 : 1 },
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }),
                  ],
                }),
              ],
            });
      },
    ]);
  },
  15789,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(230129);
    e.s([
      "AuthProvider",
      0,
      function ({ children: e }) {
        return (
          (0, n.useEffect)(() => {
            r.useAuth.getState().init();
          }, []),
          (0, t.jsx)(t.Fragment, { children: e })
        );
      },
    ]);
  },
  720741,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645);
    e.s([
      "A11yProvider",
      0,
      function ({ children: e }) {
        return (
          (0, n.useEffect)(() => {}, []),
          (0, t.jsx)(t.Fragment, { children: e })
        );
      },
    ]);
  },
  960454,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.s([
      "SkipToContent",
      0,
      function () {
        return (0, t.jsx)("a", {
          href: "#main-content",
          className:
            "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-terracotta text-cream px-6 py-3 rounded-full font-bold shadow-clay focus:outline-none focus:ring-4 focus:ring-terracotta/50",
          children: "Zum Hauptinhalt springen",
        });
      },
    ]);
  },
  443880,
  (e) => {
    "use strict";
    var t = e.i(247167),
      n = e.i(271645);
    function r() {
      return "u" > typeof window;
    }
    function i() {
      return "production";
    }
    function o() {
      return (r() ? window.vam : i()) || "production";
    }
    function a() {
      return "production" === o();
    }
    function s() {
      return "development" === o();
    }
    function l(e) {
      return e.startsWith("http://") ||
        e.startsWith("https://") ||
        e.startsWith("/")
        ? e
        : `/${e}`;
    }
    e.s([
      "Analytics",
      0,
      function (e) {
        return (
          (0, n.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, n.useEffect)(() => {
            !(function (e = { debug: !0 }, t) {
              var n;
              if (!r()) return;
              let {
                beforeSend: o,
                src: a,
                dataset: c,
              } = (function (e, t) {
                var n, r;
                let o = e;
                if (t)
                  try {
                    o = {
                      ...(null == (n = JSON.parse(t)) ? void 0 : n.analytics),
                      ...e,
                    };
                  } catch {}
                !(function (e = "auto") {
                  if ("auto" === e) {
                    window.vam = i();
                    return;
                  }
                  window.vam = e;
                })(o.mode);
                let a = {
                  sdkn:
                    "@vercel/analytics" +
                    (o.framework ? `/${o.framework}` : ""),
                  sdkv: "2.0.1",
                };
                return (
                  o.disableAutoTrack && (a.disableAutoTrack = "1"),
                  o.viewEndpoint && (a.viewEndpoint = l(o.viewEndpoint)),
                  o.eventEndpoint && (a.eventEndpoint = l(o.eventEndpoint)),
                  o.sessionEndpoint &&
                    (a.sessionEndpoint = l(o.sessionEndpoint)),
                  s() && !1 === o.debug && (a.debug = "false"),
                  o.dsn && (a.dsn = o.dsn),
                  o.endpoint
                    ? (a.endpoint = o.endpoint)
                    : o.basePath && (a.endpoint = l(`${o.basePath}/insights`)),
                  {
                    beforeSend: o.beforeSend,
                    src: (r = o).scriptSrc
                      ? l(r.scriptSrc)
                      : s()
                        ? "https://va.vercel-scripts.com/v1/script.debug.js"
                        : r.basePath
                          ? l(`${r.basePath}/insights/script.js`)
                          : "/_vercel/insights/script.js",
                    dataset: a,
                  }
                );
              })(e, t);
              if (
                (window.va ||
                  (window.va = function (...e) {
                    (window.vaq || (window.vaq = []), window.vaq.push(e));
                  }),
                o &&
                  (null == (n = window.va) || n.call(window, "beforeSend", o)),
                document.head.querySelector(`script[src*="${a}"]`))
              )
                return;
              let d = document.createElement("script");
              for (let [e, t] of ((d.src = a), Object.entries(c)))
                d.dataset[e] = t;
              ((d.defer = !0),
                (d.onerror = () => {
                  let e = s()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    `[Vercel Web Analytics] Failed to load script from ${a}. ${e}`,
                  );
                }),
                document.head.appendChild(d));
            })(
              {
                framework: e.framework || "react",
                basePath:
                  e.basePath ??
                  (function () {
                    if (void 0 !== t.default && void 0 !== t.default.env)
                      return t.default.env
                        .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                  })(),
                ...(void 0 !== e.route && { disableAutoTrack: !0 }),
                ...e,
              },
              e.configString ??
                (function () {
                  if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env
                      .REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
                })(),
            );
          }, []),
          (0, n.useEffect)(() => {
            e.route &&
              e.path &&
              (function ({ route: e, path: t }) {
                var n;
                null == (n = window.va) ||
                  n.call(window, "pageview", { route: e, path: t });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      },
      "track",
      0,
      function (e, t, n) {
        var i, o;
        if (!r()) {
          let e =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          if (a()) console.warn(e);
          else throw Error(e);
          return;
        }
        if (!t) {
          null == (i = window.va) ||
            i.call(window, "event", { name: e, options: n });
          return;
        }
        try {
          let r = (function (e, t) {
            if (!e) return;
            let n = e,
              r = [];
            for (let [i, o] of Object.entries(e))
              "object" == typeof o &&
                null !== o &&
                (t.strip
                  ? (n = (function (e, { [e]: t, ...n }) {
                      return n;
                    })(i, n))
                  : r.push(i));
            if (r.length > 0 && !t.strip)
              throw Error(
                `The following properties are not valid: ${r.join(", ")}. Only strings, numbers, booleans, and null are allowed.`,
              );
            return n;
          })(t, { strip: a() });
          null == (o = window.va) ||
            o.call(window, "event", { name: e, data: r, options: n });
        } catch (e) {
          e instanceof Error && s() && console.error(e);
        }
      },
    ]);
  },
]);
