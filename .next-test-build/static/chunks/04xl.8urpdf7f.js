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
        return u;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(190809)._(e.r(998183)),
      o = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        i = e.pathname || "",
        l = e.hash || "",
        s = e.query || "",
        u = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (u += ":" + e.port)),
        s && "object" == typeof s && (s = String(a.urlQueryToSearchParams(s))));
      let c = e.search || (s && `?${s}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || o.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
          : u || (u = ""),
        l && "#" !== l[0] && (l = "#" + l),
        c && "?" !== c[0] && (c = "?" + c),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${i}${c}${l}`
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
    function u(e) {
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
      o = e.r(843476),
      l = a._(e.r(271645)),
      s = e.r(195057),
      u = e.r(8372),
      c = e.r(818581),
      d = e.r(718967),
      f = e.r(405550);
    e.r(233525);
    let p = e.r(388540),
      h = e.r(91949),
      m = e.r(573668),
      g = e.r(509396);
    function y(t) {
      var r, n;
      let i,
        a,
        y,
        [v, x] = (0, l.useOptimistic)(h.IDLE_LINK_STATUS),
        _ = (0, l.useRef)(null),
        {
          href: j,
          as: w,
          children: P,
          prefetch: S = null,
          passHref: O,
          replace: C,
          shallow: E,
          scroll: R,
          onClick: M,
          onMouseEnter: k,
          onTouchStart: T,
          legacyBehavior: I = !1,
          onNavigate: z,
          transitionTypes: L,
          ref: A,
          unstable_dynamicOnHover: N,
          ...$
        } = t;
      ((i = P),
        I &&
          ("string" == typeof i || "number" == typeof i) &&
          (i = (0, o.jsx)("a", { children: i })));
      let D = l.default.useContext(u.AppRouterContext),
        U = !1 !== S,
        B =
          !1 !== S
            ? null === (n = S) || "auto" === n
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        F = "string" == typeof (r = w || j) ? r : (0, s.formatUrl)(r);
      if (I) {
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
      let W = I ? a && "object" == typeof a && a.ref : A,
        q = l.default.useCallback(
          (e) => (
            null !== D &&
              (_.current = (0, h.mountLinkInstance)(e, F, D, B, U, x)),
            () => {
              (_.current &&
                ((0, h.unmountLinkForCurrentNavigation)(_.current),
                (_.current = null)),
                (0, h.unmountPrefetchableInstance)(e));
            }
          ),
          [U, F, D, B, x],
        ),
        K = {
          ref: (0, c.useMergedRef)(q, W),
          onClick(t) {
            (I || "function" != typeof M || M(t),
              I &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !D ||
                t.defaultPrevented ||
                (function (t, r, n, i, a, o, s) {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
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
                        s,
                      );
                    });
                  }
                })(t, F, _, C, R, z, L));
          },
          onMouseEnter(e) {
            (I || "function" != typeof k || k(e),
              I &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              D && U && (0, h.onNavigationIntent)(e.currentTarget, !0 === N));
          },
          onTouchStart: function (e) {
            (I || "function" != typeof T || T(e),
              I &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              D && U && (0, h.onNavigationIntent)(e.currentTarget, !0 === N));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(F)
          ? (K.href = F)
          : (I && !O && ("a" !== a.type || "href" in a.props)) ||
            (K.href = (0, f.addBasePath)(F)),
        (y = I
          ? l.default.cloneElement(a, K)
          : (0, o.jsx)("a", { ...$, ...K, children: i })),
        (0, o.jsx)(b.Provider, { value: v, children: y })
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
      function ({ href: e, children: o, onClick: l, ...s }) {
        let u = (0, n.useRouter)(),
          { setBusy: c, isBusy: d } = (0, i.useTransition)(),
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
              if ((t.preventDefault(), l && l(t), f)) return void u.push(e);
              (c(!0),
                setTimeout(() => {
                  (u.push(e), setTimeout(() => c(!1), 200));
                }, 600));
            }
          },
          ...s,
          children: o,
        });
      },
    ]);
  },
  694838,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("arrow-left", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    e.s(["default", 0, t]);
  },
  711241,
  (e) => {
    "use strict";
    var t = e.i(694838);
    e.s(["ArrowLeft", () => t.default]);
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
      r = e.i(271645),
      n = e.i(618566),
      i = e.i(230129),
      a = e.i(632781);
    e.s([
      "AuthGuard",
      0,
      function ({ children: e, requireAdmin: o = !1 }) {
        let { user: l, role: s, loading: u } = (0, i.useAuth)(),
          c = (0, n.useRouter)(),
          d = (0, n.usePathname)();
        return ((0, r.useEffect)(() => {
          !u &&
            (l
              ? o && "admin" !== s && c.push("/profile")
              : c.push(`/auth?redirect=${encodeURIComponent(d)}`));
        }, [l, s, u, c, d, o]),
        u)
          ? (0, t.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, t.jsx)(a.Loader2, {
                className: "w-8 h-8 text-[#CC624C] animate-spin",
              }),
            })
          : !l || (o && "admin" !== s)
            ? null
            : (0, t.jsx)(t.Fragment, { children: e });
      },
    ]);
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
      objectFit: o,
    }) {
      let l = r ? 40 * r : e,
        s = i ? 40 * i : t,
        u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
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
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
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
          return u;
        },
      }),
      e.r(233525));
    let n = e.r(543369),
      i = e.r(488143),
      a = e.r(987690),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function s(e) {
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
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: d = !1,
        loading: f,
        className: p,
        quality: h,
        width: m,
        height: g,
        fill: y = !1,
        style: b,
        overrideSrc: v,
        onLoad: x,
        onLoadingComplete: _,
        placeholder: j = "empty",
        blurDataURL: w,
        fetchPriority: P,
        decoding: S = "async",
        layout: O,
        objectFit: C,
        objectPosition: E,
        lazyBoundary: R,
        lazyRoot: M,
        ...k
      },
      T,
    ) {
      var I;
      let z,
        L,
        A,
        { imgConf: N, showAltText: $, blurComplete: D, defaultLoader: U } = T,
        B = N || a.imageConfigDefault;
      if ("allSizes" in B) z = B;
      else {
        let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
          t = B.deviceSizes.sort((e, t) => e - t),
          r = B.qualities?.sort((e, t) => e - t);
        z = { ...B, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let F = k.loader || U;
      (delete k.loader, delete k.srcSet);
      let W = "__next_img_default" in F;
      if (W) {
        if ("custom" === z.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (O) {
        "fill" === O && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[O];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[O];
        r && !t && (t = r);
      }
      let q = "",
        K = s(m),
        G = s(g);
      if ((I = e) && "object" == typeof I && (l(I) || void 0 !== I.src)) {
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
          ((L = t.blurWidth),
          (A = t.blurHeight),
          (w = w || t.blurDataURL),
          (q = t.src),
          !y)
        )
          if (K || G) {
            if (K && !G) {
              let e = K / t.width;
              G = Math.round(t.height * e);
            } else if (!K && G) {
              let e = G / t.height;
              K = Math.round(t.width * e);
            }
          } else ((K = t.width), (G = t.height));
      }
      let V = !c && !d && ("lazy" === f || void 0 === f);
      ((!(e = "string" == typeof e ? e : q) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (V = !1)),
        z.unoptimized && (r = !0),
        W &&
          !z.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0));
      let X = s(h),
        H = Object.assign(
          y
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: C,
                objectPosition: E,
              }
            : {},
          $ ? {} : { color: "transparent" },
          b,
        ),
        J =
          D || "empty" === j
            ? null
            : "blur" === j
              ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: K, heightInt: G, blurWidth: L, blurHeight: A, blurDataURL: w || "", objectFit: H.objectFit })}")`
              : `url("${j}")`,
        Q = o.includes(H.objectFit)
          ? "fill" === H.objectFit
            ? "100% 100%"
            : "cover"
          : H.objectFit,
        Y = J
          ? {
              backgroundSize: Q,
              backgroundPosition: H.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: J,
            }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: a,
          sizes: o,
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
          let { widths: s, kind: u } = (function (
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
            })(e, i, o),
            c = s.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: s
              .map(
                (r, n) =>
                  `${l({ config: e, src: t, quality: a, width: r })} ${"w" === u ? r : n + 1}${u}`,
              )
              .join(", "),
            src: l({ config: e, src: t, quality: a, width: s[c] }),
          };
        })({
          config: z,
          src: e,
          unoptimized: r,
          width: K,
          quality: X,
          sizes: t,
          loader: F,
        }),
        ee = V ? "lazy" : f;
      return {
        props: {
          ...k,
          loading: ee,
          fetchPriority: P,
          width: K,
          height: G,
          decoding: S,
          className: p,
          style: { ...H, ...Y },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: v || Z.src,
        },
        meta: { unoptimized: r, preload: d || c, placeholder: j, fill: y },
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
      o = i ? () => {} : n.useEffect;
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
        o(
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
        return m;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(555682),
      o = e.r(190809),
      l = e.r(843476),
      s = o._(e.r(271645)),
      u = a._(e.r(898879)),
      c = e.r(742732);
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
        : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
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
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
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
                      ("name" !== r || !o) && n.has(t)
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
          return s.default.cloneElement(e, { key: r });
        });
    }
    let m = function ({ children: e }) {
      let t = (0, s.useContext)(c.HeadManagerContext);
      return (0, l.jsx)(u.default, {
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
          return o;
        },
      }));
    let n = e.r(670965),
      i = e.r(543369);
    function a({ config: e, src: t, width: r, quality: o }) {
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
      let s = (0, n.findClosestQuality)(o, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`;
    }
    a.__next_img_default = !0;
    let o = a;
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
      o = i._(e.r(271645)),
      l = n._(e.r(174080)),
      s = n._(e.r(325633)),
      u = e.r(908927),
      c = e.r(987690),
      d = e.r(918556);
    e.r(233525);
    let f = e.r(65856),
      p = n._(e.r(1948)),
      h = e.r(818581),
      m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, r, n, i, a, o) {
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
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, o.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: i,
          decoding: l,
          className: s,
          style: u,
          fetchPriority: c,
          placeholder: d,
          loading: f,
          unoptimized: p,
          fill: m,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: x,
          setShowAltText: _,
          sizesInput: j,
          onLoad: w,
          onError: P,
          ...S
        },
        O,
      ) => {
        let C = (0, o.useCallback)(
            (e) => {
              e && (P && (e.src = e.src), e.complete && g(e, d, b, v, x, p, j));
            },
            [e, d, b, v, x, P, p, j],
          ),
          E = (0, h.useMergedRef)(O, C);
        return (0, a.jsx)("img", {
          ...S,
          ...y(c),
          loading: f,
          width: i,
          height: n,
          decoding: l,
          "data-nimg": m ? "fill" : "1",
          className: s,
          style: u,
          sizes: r,
          srcSet: t,
          src: e,
          ref: E,
          onLoad: (e) => {
            g(e.currentTarget, d, b, v, x, p, j);
          },
          onError: (e) => {
            (_(!0), "empty" !== d && x(!0), P && P(e));
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
        : (0, a.jsx)(s.default, {
            children: (0, a.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let x = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(f.RouterContext),
        n = (0, o.useContext)(d.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = m || n || c.imageConfigDefault,
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
        { onLoad: l, onLoadingComplete: s } = e,
        h = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        h.current = l;
      }, [l]);
      let g = (0, o.useRef)(s);
      (0, o.useEffect)(() => {
        g.current = s;
      }, [s]);
      let [y, x] = (0, o.useState)(!1),
        [_, j] = (0, o.useState)(!1),
        { props: w, meta: P } = (0, u.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: y,
          showAltText: _,
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(b, {
            ...w,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: h,
            onLoadingCompleteRef: g,
            setBlurComplete: x,
            setShowAltText: j,
            sizesInput: e.sizes,
            ref: t,
          }),
          P.preload
            ? (0, a.jsx)(v, { isAppRouter: !r, imgAttributes: w })
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
        return c;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(555682),
      o = e.r(908927),
      l = e.r(605500),
      s = a._(e.r(1948));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: s.default,
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
    let c = l.Image;
  },
  657688,
  (e, t, r) => {
    t.exports = e.r(794909);
  },
  806267,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("utensils", [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
      ["path", { d: "M7 2v20", key: "1473qp" }],
      [
        "path",
        { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  235328,
  845926,
  (e) => {
    "use strict";
    var t = e.i(456420);
    let r = (0, t.default)("layout-dashboard", [
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
    e.s(["default", 0, r], 235328);
    let n = (0, t.default)("list-ordered", [
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
    e.s(["default", 0, n], 845926);
  },
  956094,
  (e) => {
    "use strict";
    var t = e.i(806267);
    e.s(["Utensils", () => t.default]);
  },
  113185,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(974336),
      n = e.i(618566),
      i = e.i(235328),
      i = i,
      a = e.i(845926),
      a = a,
      o = e.i(956094),
      l = e.i(166794),
      s = e.i(711241),
      u = e.i(974539);
    let c = [
      { href: "/admin", label: "Dashboard", icon: i.default },
      { href: "/admin/orders", label: "KDS Kanban", icon: a.default },
      { href: "/admin/menu", label: "Menü Manager", icon: o.Utensils },
      { href: "/admin/settings", label: "Einstellungen", icon: l.Settings },
    ];
    e.s(
      [
        "AdminSidebar",
        0,
        function () {
          let e = (0, n.usePathname)();
          return (0, t.jsxs)("aside", {
            className:
              "w-64 bg-cream border-r border-peach h-screen sticky top-0 flex flex-col hidden md:flex shrink-0",
            children: [
              (0, t.jsx)("div", {
                className: "p-6 border-b border-peach",
                children: (0, t.jsxs)(r.TransitionLink, {
                  href: "/",
                  className: "flex items-center gap-3",
                  children: [
                    (0, t.jsx)(u.Logo, {
                      variant: "rund",
                      className: "w-8 h-8 text-terra",
                    }),
                    (0, t.jsx)("span", {
                      className: "font-calistoga text-xl text-bark mt-1",
                      children: "Admin",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("nav", {
                "aria-label": "Admin Navigation",
                className: "flex-1 p-4 flex flex-col gap-2",
                children: c.map((n) => {
                  let i = e === n.href;
                  return (0, t.jsxs)(
                    r.TransitionLink,
                    {
                      href: n.href,
                      className: `flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${i ? "bg-terra text-white shadow-terra" : "text-bark hover:bg-beige hover:text-terra"}`,
                      children: [
                        (0, t.jsx)(n.icon, { size: 20 }),
                        (0, t.jsx)("span", {
                          className: "font-bold text-[14px]",
                          children: n.label,
                        }),
                      ],
                    },
                    n.href,
                  );
                }),
              }),
              (0, t.jsx)("div", {
                className: "absolute bottom-6 left-6 right-6",
                children: (0, t.jsxs)(r.TransitionLink, {
                  href: "/",
                  className:
                    "flex items-center gap-3 px-4 py-3 rounded-2xl text-bark-soft hover:bg-beige hover:text-terra transition-colors",
                  children: [
                    (0, t.jsx)(s.ArrowLeft, { size: 20 }),
                    (0, t.jsx)("span", {
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
      113185,
    );
  },
]);
