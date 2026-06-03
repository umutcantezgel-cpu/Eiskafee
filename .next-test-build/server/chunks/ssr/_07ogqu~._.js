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
  995180,
  (a) => {
    "use strict";
    var b = a.i(98585),
      c = a.i(736829),
      d = a.i(900702),
      e = a.i(572131),
      f = a.i(145034),
      g = a.i(122647);
    function h(a, b) {
      let c,
        d = () => {
          let { currentTime: d } = b,
            e = (null === d ? 0 : d.value) / 100;
          (c !== e && a(e), (c = e));
        };
      return (g.frame.preUpdate(d, !0), () => (0, g.cancelFrame)(d));
    }
    var i = a.i(194401),
      j = a.i(984913),
      k = a.i(192016);
    let l = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      m = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
    function n(a, b, c, d) {
      let e = c[b],
        { length: f, position: g } = m[b],
        h = e.current,
        i = c.time;
      ((e.current = Math.abs(a[`scroll${g}`])),
        (e.scrollLength = a[`scroll${f}`] - a[`client${f}`]),
        (e.offset.length = 0),
        (e.offset[0] = 0),
        (e.offset[1] = e.scrollLength),
        (e.progress = (0, j.progress)(0, e.scrollLength, e.current)));
      let l = d - i;
      e.velocity = l > 50 ? 0 : (0, k.velocityPerSecond)(e.current - h, l);
    }
    var o = a.i(68203),
      p = a.i(478025),
      q = a.i(365786),
      r = a.i(991128);
    let s = { start: 0, center: 0.5, end: 1 };
    function t(a, b, c = 0) {
      let d = 0;
      if ((a in s && (a = s[a]), "string" == typeof a)) {
        let b = parseFloat(a);
        a.endsWith("px")
          ? (d = b)
          : a.endsWith("%")
            ? (a = b / 100)
            : a.endsWith("vw")
              ? (d = (b / 100) * document.documentElement.clientWidth)
              : a.endsWith("vh")
                ? (d = (b / 100) * document.documentElement.clientHeight)
                : (a = b);
      }
      return ("number" == typeof a && (d = b * a), c + d);
    }
    let u = [0, 0],
      v = [
        [0, 0],
        [1, 1],
      ],
      w = { x: 0, y: 0 },
      x = new WeakMap(),
      y = new WeakMap(),
      z = new WeakMap(),
      A = new WeakMap(),
      B = new WeakMap(),
      C = (a) => (a === document.scrollingElement ? window : a);
    function D(
      a,
      {
        container: b = document.scrollingElement,
        trackContentSize: c = !1,
        ...d
      } = {},
    ) {
      if (!b) return f.noop;
      let e = z.get(b);
      e || ((e = new Set()), z.set(b, e));
      let h = (function (a, b, c, d = {}) {
        return {
          measure: (b) => {
            (!(function (a, b = a, c) {
              if (((c.x.targetOffset = 0), (c.y.targetOffset = 0), b !== a)) {
                let d = b;
                for (; d && d !== a; )
                  ((c.x.targetOffset += d.offsetLeft),
                    (c.y.targetOffset += d.offsetTop),
                    (d = d.offsetParent));
              }
              ((c.x.targetLength = b === a ? b.scrollWidth : b.clientWidth),
                (c.y.targetLength = b === a ? b.scrollHeight : b.clientHeight),
                (c.x.containerLength = a.clientWidth),
                (c.y.containerLength = a.clientHeight));
            })(a, d.target, c),
              n(a, "x", c, b),
              n(a, "y", c, b),
              (c.time = b),
              (d.offset || d.target) &&
                (function (a, b, c) {
                  let { offset: d = v } = c,
                    { target: e = a, axis: f = "y" } = c,
                    g = "y" === f ? "height" : "width",
                    h =
                      e !== a
                        ? (function (a, b) {
                            let c = { x: 0, y: 0 },
                              d = a;
                            for (; d && d !== b; )
                              if ((0, r.isHTMLElement)(d))
                                ((c.x += d.offsetLeft),
                                  (c.y += d.offsetTop),
                                  (d = d.offsetParent));
                              else if ("svg" === d.tagName) {
                                let a = d.getBoundingClientRect(),
                                  b = (d =
                                    d.parentElement).getBoundingClientRect();
                                ((c.x += a.left - b.left),
                                  (c.y += a.top - b.top));
                              } else if (d instanceof SVGGraphicsElement) {
                                let { x: a, y: b } = d.getBBox();
                                ((c.x += a), (c.y += b));
                                let e = null,
                                  f = d.parentNode;
                                for (; !e; )
                                  ("svg" === f.tagName && (e = f),
                                    (f = d.parentNode));
                                d = e;
                              } else break;
                            return c;
                          })(e, a)
                        : w,
                    i =
                      e === a
                        ? { width: a.scrollWidth, height: a.scrollHeight }
                        : "getBBox" in e && "svg" !== e.tagName
                          ? e.getBBox()
                          : { width: e.clientWidth, height: e.clientHeight },
                    j = { width: a.clientWidth, height: a.clientHeight };
                  b[f].offset.length = 0;
                  let k = !b[f].interpolate,
                    l = d.length;
                  for (let a = 0; a < l; a++) {
                    let c = (function (a, b, c, d) {
                      let e = Array.isArray(a) ? a : u,
                        f = 0;
                      return (
                        "number" == typeof a
                          ? (e = [a, a])
                          : "string" == typeof a &&
                            (e = (a = a.trim()).includes(" ")
                              ? a.split(" ")
                              : [a, s[a] ? a : "0"]),
                        (f = t(e[0], c, d)) - t(e[1], b)
                      );
                    })(d[a], j[g], i[g], h[f]);
                    (k || c === b[f].interpolatorOffsets[a] || (k = !0),
                      (b[f].offset[a] = c));
                  }
                  (k &&
                    ((b[f].interpolate = (0, o.interpolate)(
                      b[f].offset,
                      (0, p.defaultOffset)(d),
                      { clamp: !1 },
                    )),
                    (b[f].interpolatorOffsets = [...b[f].offset])),
                    (b[f].progress = (0, q.clamp)(
                      0,
                      1,
                      b[f].interpolate(b[f].current),
                    )));
                })(a, c, d));
          },
          notify: () => b(c),
        };
      })(b, a, { time: 0, x: l(), y: l() }, d);
      if ((e.add(h), !x.has(b))) {
        let a = () => {
            for (let a of e) a.measure(g.frameData.timestamp);
            g.frame.preUpdate(c);
          },
          c = () => {
            for (let a of e) a.notify();
          },
          d = () => g.frame.read(a);
        x.set(b, d);
        let f = C(b);
        (window.addEventListener("resize", d),
          b !== document.documentElement && y.set(b, (0, i.resize)(b, d)),
          f.addEventListener("scroll", d),
          d());
      }
      if (c && !B.has(b)) {
        let a = x.get(b),
          c = { width: b.scrollWidth, height: b.scrollHeight };
        A.set(b, c);
        let d = g.frame.read(() => {
          let d = b.scrollWidth,
            e = b.scrollHeight;
          (c.width !== d || c.height !== e) &&
            (a(), (c.width = d), (c.height = e));
        }, !0);
        B.set(b, d);
      }
      let j = x.get(b);
      return (
        g.frame.read(j, !1, !0),
        () => {
          (0, g.cancelFrame)(j);
          let a = z.get(b);
          if (!a || (a.delete(h), a.size)) return;
          let c = x.get(b);
          (x.delete(b),
            c &&
              (C(b).removeEventListener("scroll", c),
              y.get(b)?.(),
              window.removeEventListener("resize", c)));
          let d = B.get(b);
          (d && ((0, g.cancelFrame)(d), B.delete(b)), A.delete(b));
        }
      );
    }
    let E = [
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
        [v, "contain"],
      ],
      F = { start: 0, end: 1 },
      G = new Map();
    function H({ source: a, container: b, ...c }) {
      let { axis: d } = c;
      a && (b = a);
      let e = G.get(b);
      e || ((e = new Map()), G.set(b, e));
      let f = c.target ?? "self",
        g = e.get(f);
      g || ((g = {}), e.set(f, g));
      let h = d + (c.offset ?? []).join(",");
      if (!g[h]) {
        var i;
        let a, d;
        c.target && c.target;
        g[h] =
          ((i = { container: b, ...c }),
          (a = { value: 0 }),
          (d = D((b) => {
            a.value = 100 * b[i.axis].progress;
          }, i)),
          { currentTime: a, cancel: d });
      }
      return g[h];
    }
    function I(
      a,
      { axis: b = "y", container: c = document.scrollingElement, ...d } = {},
    ) {
      let e, g, i;
      if (!c) return f.noop;
      let j = { axis: b, container: c, ...d };
      return "function" == typeof a
        ? (function (a, b) {
            return 2 === a.length || (b && (b.target || b.offset))
              ? D((c) => {
                  a(c[b.axis].progress, c);
                }, b)
              : h(a, H(b));
          })(a, j)
        : ((e = H(j)),
          (g = j.target
            ? (function (a) {
                if (!a)
                  return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
                for (let [b, c] of E)
                  if (
                    (function (a, b) {
                      let c = (function (a) {
                        if (2 !== a.length) return;
                        let b = [];
                        for (let c of a)
                          if (Array.isArray(c)) b.push(c);
                          else {
                            if ("string" != typeof c) return;
                            let a = (function (a) {
                              let b = a.trim().split(/\s+/);
                              if (2 !== b.length) return;
                              let c = F[b[0]],
                                d = F[b[1]];
                              if (void 0 !== c && void 0 !== d) return [c, d];
                            })(c);
                            if (!a) return;
                            b.push(a);
                          }
                        return b;
                      })(a);
                      if (!c) return !1;
                      for (let a = 0; a < 2; a++) {
                        let d = c[a],
                          e = b[a];
                        if (d[0] !== e[0] || d[1] !== e[1]) return !1;
                      }
                      return !0;
                    })(a, b)
                  )
                    return { rangeStart: `${c} 0%`, rangeEnd: `${c} 100%` };
              })(j.offset)
            : void 0),
          (i = !!j.target && (j.target, !1)),
          a.attachTimeline({
            timeline: i ? e : void 0,
            ...(g && i && { rangeStart: g.rangeStart, rangeEnd: g.rangeEnd }),
            observe: (a) => (
              a.pause(),
              h((b) => {
                a.time = a.iterationDuration * b;
              }, e)
            ),
          }));
    }
    var J = a.i(774290),
      K = a.i(801703);
    let L = () => ({
        scrollX: (0, c.motionValue)(0),
        scrollY: (0, c.motionValue)(0),
        scrollXProgress: (0, c.motionValue)(0),
        scrollYProgress: (0, c.motionValue)(0),
      }),
      M = (a) => !!a && !a.current;
    function N(a, c, d, e) {
      return {
        factory: (f) => {
          let g,
            h = () => {
              M(d) || M(e)
                ? b.microtask.read(h)
                : (g = I(f, {
                    ...c,
                    axis: a,
                    container: d?.current || void 0,
                    target: e?.current || void 0,
                  }));
            };
          return (
            b.microtask.read(h),
            () => {
              ((0, b.cancelMicrotask)(h), g?.());
            }
          );
        },
        times: [0, 1],
        keyframes: [0, 1],
        ease: (a) => a,
        duration: 1,
      };
    }
    a.s(
      [
        "useScroll",
        0,
        function ({ container: a, target: c, ...f } = {}) {
          let g = (0, J.useConstant)(L);
          f.offset;
          let h = (0, e.useRef)(null),
            i = (0, e.useRef)(!1),
            j = (0, e.useCallback)(
              () => (
                (h.current = I(
                  (a, { x: b, y: c }) => {
                    (g.scrollX.set(b.current),
                      g.scrollXProgress.set(b.progress),
                      g.scrollY.set(c.current),
                      g.scrollYProgress.set(c.progress));
                  },
                  {
                    ...f,
                    container: a?.current || void 0,
                    target: c?.current || void 0,
                  },
                )),
                () => {
                  h.current?.();
                }
              ),
              [a, c, JSON.stringify(f.offset)],
            );
          return (
            (0, K.useIsomorphicLayoutEffect)(() => {
              if (((i.current = !1), !(M(a) || M(c)))) return j();
              i.current = !0;
            }, [j]),
            (0, e.useEffect)(() => {
              let e;
              if (!i.current) return;
              let f = () => {
                let b = M(a),
                  f = M(c);
                ((0, d.invariant)(
                  !b,
                  "Container ref is defined but not hydrated",
                  "use-scroll-ref",
                ),
                  (0, d.invariant)(
                    !f,
                    "Target ref is defined but not hydrated",
                    "use-scroll-ref",
                  ),
                  b || f || (e = j()));
              };
              return (
                b.microtask.read(f),
                () => {
                  ((0, b.cancelMicrotask)(f), e?.());
                }
              );
            }, [j]),
            g
          );
        },
      ],
      995180,
    );
  },
  762492,
  (a) => {
    "use strict";
    var b = a.i(920226),
      c = a.i(862435);
    let d = (a) => a.reduce((a, b) => a + b.price * b.quantity, 0),
      e = (0, b.create)()(
        (0, c.persist)(
          (a, b) => ({
            cart: [],
            isCartOpen: !1,
            orderType: null,
            orderData: {},
            total: 0,
            addToCart: (b) =>
              a((a) => {
                let c = a.cart.find((a) => a.id === b.id)
                  ? a.cart.map((a) =>
                      a.id === b.id ? { ...a, quantity: a.quantity + 1 } : a,
                    )
                  : [...a.cart, { ...b, quantity: 1 }];
                return { cart: c, total: d(c) };
              }),
            removeFromCart: (b) =>
              a((a) => {
                let c = a.cart.filter((a) => a.id !== b);
                return { cart: c, total: d(c) };
              }),
            updateQuantity: (b, c) =>
              a((a) => {
                let e =
                  c <= 0
                    ? a.cart.filter((a) => a.id !== b)
                    : a.cart.map((a) =>
                        a.id === b ? { ...a, quantity: c } : a,
                      );
                return { cart: e, total: d(e) };
              }),
            openCart: () => a({ isCartOpen: !0 }),
            closeCart: () => a({ isCartOpen: !1 }),
            toggleCart: () => a((a) => ({ isCartOpen: !a.isCartOpen })),
            clearCart: () => a({ cart: [], total: 0 }),
            setCart: (b) => a({ cart: b, total: d(b) }),
            setOrderType: (b) => a({ orderType: b }),
            updateOrderData: (b) =>
              a((a) => ({ orderData: { ...a.orderData, ...b } })),
            clearOrderData: () => a({ orderData: {}, orderType: null }),
          }),
          {
            name: "hey-fede-cart",
            partialize: (a) => ({
              cart: a.cart,
              orderType: a.orderType,
              orderData: a.orderData,
            }),
          },
        ),
      );
    a.s(["useStore", 0, e]);
  },
  176965,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    a.s(["default", 0, b]);
  },
  474215,
  (a) => {
    "use strict";
    var b = a.i(176965);
    a.s(["X", () => b.default]);
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
  783130,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("phone", [
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
          key: "9njp5v",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  866491,
  (a) => {
    "use strict";
    var b = a.i(783130);
    a.s(["Phone", () => b.default]);
  },
  677874,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.i(69387);
    var c = a.i(132787),
      d = a.i(601787),
      e = a.i(420237);
    a.s([
      "useStoreSettings",
      0,
      function () {
        let [a, f] = (0, b.useState)(null),
          [g, h] = (0, b.useState)(!0),
          [i, j] = (0, b.useState)(null);
        return (
          (0, b.useEffect)(() => {
            let a = (0, d.onSnapshot)(
              (0, c.doc)(e.db, "store_settings", "general"),
              (a) => {
                (a.exists() ? f({ id: a.id, ...a.data() }) : f(null),
                  h(!1),
                  j(null));
              },
              (a) => {
                (console.error("useStoreSettings error:", a), j(a), h(!1));
              },
            );
            return () => a();
          }, []),
          { settings: a, loading: g, error: i }
        );
      },
    ]);
  },
  404782,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]);
    a.s(["default", 0, b]);
  },
  954098,
  (a) => {
    "use strict";
    var b = a.i(404782);
    a.s(["MapPin", () => b.default]);
  },
  393507,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("user", [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
    ]);
    a.s(["default", 0, b]);
  },
  344451,
  (a) => {
    "use strict";
    var b = a.i(393507);
    a.s(["User", () => b.default]);
  },
  737292,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("message-circle", [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  944597,
  (a) => {
    "use strict";
    var b = a.i(737292);
    a.s(["MessageCircle", () => b.default]);
  },
  722166,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("minus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
    ]);
    a.s(["default", 0, b]);
  },
  769544,
  (a) => {
    "use strict";
    var b = a.i(722166);
    a.s(["Minus", () => b.default]);
  },
  923699,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(474614);
    let d = {
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": !0,
    };
    a.s([
      "Boxen",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", { d: "M4 12 L16 18 L28 12 L16 6 Z" }),
            (0, b.jsx)("path", { d: "M4 12 L4 22 L16 28 L28 22 L28 12" }),
            (0, b.jsx)("path", { d: "M16 18 L16 28" }),
          ],
        });
      },
      "BubbleWaffle",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", {
              d: "M16 28 C 10 20 6 12 10 6 C 14 8 18 8 22 6 C 26 12 22 20 16 28 Z",
            }),
            (0, b.jsx)("circle", { cx: "12", cy: "12", r: "1.5" }),
            (0, b.jsx)("circle", { cx: "16", cy: "14", r: "1.5" }),
            (0, b.jsx)("circle", { cx: "20", cy: "12", r: "1.5" }),
            (0, b.jsx)("circle", { cx: "14", cy: "18", r: "1.5" }),
            (0, b.jsx)("circle", { cx: "18", cy: "18", r: "1.5" }),
            (0, b.jsx)("circle", { cx: "16", cy: "22", r: "1.5" }),
          ],
        });
      },
      "Cake",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", { d: "M6 24 L26 24 L26 12 L16 6 L6 12 Z" }),
            (0, b.jsx)("path", { d: "M6 16 L26 16" }),
            (0, b.jsx)("path", { d: "M16 6 L16 2" }),
            (0, b.jsx)("circle", {
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
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", {
              d: "M8 10 L8 24 C 8 26 10 28 16 28 C 22 28 24 26 24 24 L24 10 Z",
            }),
            (0, b.jsx)("path", { d: "M24 14 C 28 14 28 20 24 20" }),
            (0, b.jsx)("path", { d: "M12 4 C 11 6 13 8 12 10" }),
            (0, b.jsx)("path", { d: "M16 3 C 15 5 17 7 16 9" }),
            (0, b.jsx)("path", { d: "M20 4 C 19 6 21 8 20 10" }),
          ],
        });
      },
      "Crepes",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", { d: "M4 26 L28 26 L16 6 L8 14 Z" }),
            (0, b.jsx)("path", { d: "M12 26 L20 16" }),
            (0, b.jsx)("path", { d: "M18 26 L24 20" }),
          ],
        });
      },
      "Eisbecher",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", { d: "M8 12 L12 26 L20 26 L24 12 Z" }),
            (0, b.jsx)("path", { d: "M10 26 L6 28 M22 26 L26 28" }),
            (0, b.jsx)("path", {
              d: "M10 12 C 10 7 14 4 16 4 C 18 4 22 7 22 12",
            }),
            (0, b.jsx)("path", { d: "M13 12 C 13 9 19 9 19 12" }),
          ],
        });
      },
      "HamburgerIcon",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", { d: "M4.5 9 C 12 8 20 10 27.5 9" }),
            (0, b.jsx)("path", { d: "M5 16 C 10 16 22 15 27 16" }),
            (0, b.jsx)("path", { d: "M4.5 23 C 12 24 20 22 27.5 23" }),
          ],
        });
      },
      "Pancakes",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("ellipse", { cx: "16", cy: "22", rx: "10", ry: "3" }),
            (0, b.jsx)("ellipse", { cx: "16", cy: "17", rx: "10", ry: "3" }),
            (0, b.jsx)("ellipse", { cx: "16", cy: "12", rx: "10", ry: "3" }),
            (0, b.jsx)("path", {
              d: "M14 6 C 14 4 18 4 18 6 C 18 9 14 9 14 6 Z",
              fill: "currentColor",
              stroke: "none",
            }),
          ],
        });
      },
      "Shakes",
      0,
      function ({ className: a, ...e }) {
        return (0, b.jsxs)("svg", {
          ...d,
          className: (0, c.twMerge)("w-6 h-6", a),
          ...e,
          children: [
            (0, b.jsx)("path", { d: "M10 14 L12 28 L20 28 L22 14 Z" }),
            (0, b.jsx)("path", {
              d: "M9 14 C 9 9 13 6 16 6 C 19 6 23 9 23 14",
            }),
            (0, b.jsx)("path", { d: "M18 6 L20 2" }),
          ],
        });
      },
    ]);
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
  648396,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("circle-alert", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
    ]);
    a.s(["default", 0, b]);
  },
  97546,
  (a) => {
    "use strict";
    var b = a.i(648396);
    a.s(["AlertCircle", () => b.default]);
  },
  13522,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(324429),
      d = a.i(544315),
      e = a.i(97546);
    a.s([
      "ClientHoursTable",
      0,
      function () {
        let a,
          f = 0 === (a = new Date().getDay()) ? 6 : a - 1,
          { emergencyNotice: g } = d.store_settings;
        return (0, b.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [
            g &&
              (0, b.jsxs)("div", {
                className:
                  "bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 rounded-[15px] p-3 flex gap-2.5 items-start",
                children: [
                  (0, b.jsx)(e.AlertCircle, {
                    size: 18,
                    color: "#ff4d4d",
                    className: "shrink-0 mt-0.5",
                  }),
                  (0, b.jsx)("p", {
                    className:
                      "font-nunito text-[0.85rem] text-[#ff4d4d] leading-[1.4] font-bold",
                    children: g,
                  }),
                ],
              }),
            (0, b.jsx)("div", {
              className: "bg-[#eedfcc] rounded-[18px] overflow-hidden",
              children: c.BUSINESS.openingHoursDisplay.map((a, c) => {
                let d = c === f,
                  e = "Geschlossen" === a.hours;
                return (0, b.jsxs)(
                  "div",
                  {
                    className: `flex justify-between items-center p-[13px_19px] ${d ? "bg-[#CC624C]" : "bg-transparent border-b border-[rgba(228,192,168,0.45)] last:border-b-0"}`,
                    itemScope: !0,
                    itemProp: "openingHoursSpecification",
                    itemType: "https://schema.org/OpeningHoursSpecification",
                    children: [
                      (0, b.jsx)("meta", {
                        itemProp: "dayOfWeek",
                        content: `https://schema.org/${a.day.replace("Montag", "Monday").replace("Dienstag", "Tuesday").replace("Mittwoch", "Wednesday").replace("Donnerstag", "Thursday").replace("Freitag", "Friday").replace("Samstag", "Saturday").replace("Sonntag", "Sunday")}`,
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          d &&
                            (0, b.jsx)("div", {
                              className:
                                "w-1.5 h-1.5 bg-white rounded-full shrink-0",
                            }),
                          (0, b.jsx)("span", {
                            className: `font-nunito text-[0.87rem] ${d ? "font-black text-white" : "font-semibold text-[#2d1f19]"}`,
                            children: a.day,
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex items-center gap-[9px]",
                        children: [
                          (0, b.jsx)("span", {
                            className: `font-nunito text-[0.87rem] ${d ? "text-white font-bold" : e ? "text-[#9a7060] font-normal" : "text-[#5c3d35] font-normal"}`,
                            children: a.hours,
                          }),
                          d &&
                            (0, b.jsx)("span", {
                              className:
                                "bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full",
                              children: "Heute",
                            }),
                        ],
                      }),
                    ],
                  },
                  a.day,
                );
              }),
            }),
          ],
        });
      },
    ]);
  },
  324429,
  (a) => {
    "use strict";
    let b = {
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
      c = `${b.street}, ${b.postalCode} ${b.city}`;
    (b.latitude, b.longitude, a.s(["BUSINESS", 0, b, "FULL_ADDRESS", 0, c]));
  },
  544315,
  (a) => {
    "use strict";
    var b = a.i(324429);
    let c = {
        is_open: !0,
        is_accepting_orders: !0,
        busy_mode: !1,
        pickup_time_estimate_mins: 15,
        phone: b.BUSINESS.phone,
        emergencyNotice: null,
      },
      d = {
        config: {
          name: "Hey Fede!",
          tagline: "Dessertbar & Café",
          address: `${b.BUSINESS.street}, ${b.BUSINESS.postalCode} ${b.BUSINESS.city}`,
          phone: b.BUSINESS.phone,
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
        CATEGORIES: e,
        MENU: f,
        BESTSELLERS: g,
        REVIEWS: h,
      } = {
        CATEGORIES: d.categories,
        MENU: d.menu,
        BESTSELLERS: d.bestsellers,
        REVIEWS: d.reviews,
      };
    a.s(["BESTSELLERS", 0, g, "HF_DATA", 0, d, "store_settings", 0, c]);
  },
  307759,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(346271),
      d = a.i(621216);
    let e = {
      organic1:
        "M 60,10 C 90,5 120,30 110,60 C 105,85 75,105 45,100 C 15,95 5,65 15,40 C 25,15 40,12 60,10 Z",
      organic2:
        "M 50,15 C 80,8 105,35 95,60 C 90,80 70,98 45,95 C 20,92 8,68 12,42 C 18,20 35,18 50,15 Z",
      organic3:
        "M 55,8 C 85,12 110,28 108,55 C 106,82 80,102 50,98 C 18,94 4,62 12,38 C 18,18 35,5 55,8 Z",
    };
    a.s([
      "FloatingBlob",
      0,
      function ({
        variant: a = "organic1",
        color: f = "peach",
        opacity: g = 0.55,
        size: h = 360,
        delay: i = 0,
        reverse: j = !1,
        className: k,
      }) {
        let l = (0, d.useReducedMotion)();
        return (0, b.jsx)(c.motion.svg, {
          viewBox: "0 0 120 120",
          width: h,
          height: h,
          className: `absolute pointer-events-none ${k ?? ""}`,
          "aria-hidden": "true",
          animate: l
            ? void 0
            : {
                y: j ? [0, 12, 0] : [0, -12, 0],
                x: j ? [0, -8, 0] : [0, 8, 0],
                rotate: j ? [0, -3, 0] : [0, 3, 0],
                scale: [1, 1.04, 1],
              },
          transition: l
            ? void 0
            : { duration: 12, delay: i, repeat: 1 / 0, ease: "easeInOut" },
          children: (0, b.jsx)("path", {
            d: e[a],
            className: {
              peach: "fill-peach",
              cream: "fill-cream",
              terracotta: "fill-terracotta",
              beige: "fill-beige",
              brown: "fill-brown",
            }[f],
            opacity: g,
          }),
        });
      },
    ]);
  },
  910209,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("camera", [
      [
        "path",
        {
          d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
          key: "18u6gg",
        },
      ],
      ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
    ]);
    a.s(["default", 0, b]);
  },
  989308,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(474614);
    let d = {
      "single-bump": "M0,50 Q500,0 1000,50 L1000,100 L0,100 Z",
      "three-bump": "M0,50 Q250,20 500,50 T1000,50 L1000,100 L0,100 Z",
      "long-curve": "M0,100 C300,20 700,80 1000,0 L1000,100 L0,100 Z",
    };
    a.s([
      "WaveDivider",
      0,
      function ({
        variant: a = "single-bump",
        fillClass: e = "text-sand",
        flip: f = !1,
        className: g,
      }) {
        return (0, b.jsx)("div", {
          className: (0, c.twMerge)("w-full overflow-hidden leading-none", g),
          style: { transform: f ? "rotate(180deg)" : "none" },
          children: (0, b.jsx)("svg", {
            viewBox: "0 0 1000 100",
            preserveAspectRatio: "none",
            className: (0, c.twMerge)("w-full h-12 md:h-20 lg:h-24", e),
            children: (0, b.jsx)("path", { d: d[a], fill: "currentColor" }),
          }),
        });
      },
    ]);
  },
  320514,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(474614);
    a.i(985950);
    var e = a.i(162464);
    a.s([
      "NewsletterInput",
      0,
      function ({ className: f }) {
        let [g, h] = (0, c.useState)(""),
          [i, j] = (0, c.useState)("idle");
        return (0, b.jsx)("form", {
          onSubmit: (b) => {
            (b.preventDefault(),
              g &&
                (j("loading"),
                setTimeout(() => {
                  (j("success"),
                    h(""),
                    a.A(48743).then(({ default: a }) => {
                      a({
                        particleCount: 80,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#C95039", "#FFB8A6", "#FFF5EE", "#5C4033"],
                      });
                    }),
                    setTimeout(() => j("idle"), 3e3));
                }, 800)));
          },
          className: (0, d.twMerge)("relative w-full max-w-md", f),
          children: (0, b.jsxs)("div", {
            className:
              "flex bg-cream p-1 rounded-full border-2 border-peach focus-within:border-terracotta transition-colors duration-300",
            children: [
              (0, b.jsx)("input", {
                type: "email",
                value: g,
                onChange: (a) => h(a.target.value),
                placeholder: "Bleib hungrig...",
                className:
                  "flex-grow bg-transparent px-4 py-2 outline-none text-charcoal placeholder:text-charcoal/50",
                required: !0,
                disabled: "idle" !== i,
              }),
              (0, b.jsx)(e.PrimaryCTA, {
                type: "submit",
                disabled: "idle" !== i,
                className: "py-2 px-6 whitespace-nowrap",
                children:
                  "loading" === i
                    ? "..."
                    : "success" === i
                      ? "Dabei!"
                      : "Abonnieren",
              }),
            ],
          }),
        });
      },
    ]);
  },
  48743,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/node_modules_canvas-confetti_dist_confetti_module_mjs_0s-.hx0._.js",
        ].map((b) => a.l(b)),
      ).then(() => b(544783)),
    );
  },
];

//# sourceMappingURL=_07ogqu~._.js.map
