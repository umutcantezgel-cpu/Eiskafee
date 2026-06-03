module.exports = [
  918622,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  556704,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  832319,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  324725,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  193695,
  (e, t, r) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  470943,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      getOrigin: function () {
        return l;
      },
      resolveArray: function () {
        return o;
      },
      resolveAsArrayOrUndefined: function () {
        return a;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    function o(e) {
      return Array.isArray(e) ? e : [e];
    }
    function a(e) {
      if (null != e) return o(e);
    }
    function l(e) {
      let t;
      if ("string" == typeof e)
        try {
          t = (e = new URL(e)).origin;
        } catch {}
      return t;
    }
  },
  973853,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      resolveManifest: function () {
        return s;
      },
      resolveRobots: function () {
        return a;
      },
      resolveRouteData: function () {
        return d;
      },
      resolveSitemap: function () {
        return l;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    let o = e.r(470943);
    function a(e) {
      let t = "";
      for (let r of Array.isArray(e.rules) ? e.rules : [e.rules]) {
        for (let e of (0, o.resolveArray)(r.userAgent || ["*"]))
          t += `User-Agent: ${e}
`;
        if (r.allow)
          for (let e of (0, o.resolveArray)(r.allow))
            t += `Allow: ${e}
`;
        if (r.disallow)
          for (let e of (0, o.resolveArray)(r.disallow))
            t += `Disallow: ${e}
`;
        (r.crawlDelay &&
          (t += `Crawl-delay: ${r.crawlDelay}
`),
          (t += "\n"));
      }
      return (
        e.host &&
          (t += `Host: ${e.host}
`),
        e.sitemap &&
          (0, o.resolveArray)(e.sitemap).forEach((e) => {
            t += `Sitemap: ${e}
`;
          }),
        t
      );
    }
    function l(e) {
      let t = e.some((e) => Object.keys(e.alternates ?? {}).length > 0),
        r = e.some((e) => {
          var t;
          return !!(null == (t = e.images) ? void 0 : t.length);
        }),
        i = e.some((e) => {
          var t;
          return !!(null == (t = e.videos) ? void 0 : t.length);
        }),
        n = "";
      for (let s of ((n += '<?xml version="1.0" encoding="UTF-8"?>\n'),
      (n += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'),
      r &&
        (n += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),
      i &&
        (n += ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),
      t
        ? (n += ' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n')
        : (n += ">\n"),
      e)) {
        var o, a, l;
        ((n += "<url>\n"),
          (n += `<loc>${s.url}</loc>
`));
        let e = null == (o = s.alternates) ? void 0 : o.languages;
        if (e && Object.keys(e).length)
          for (let t in e)
            n += `<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;
        if (null == (a = s.images) ? void 0 : a.length)
          for (let e of s.images)
            n += `<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;
        if (null == (l = s.videos) ? void 0 : l.length)
          for (let e of s.videos)
            n += [
              "<video:video>",
              `<video:title>${e.title}</video:title>`,
              `<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,
              `<video:description>${e.description}</video:description>`,
              e.content_loc &&
                `<video:content_loc>${e.content_loc}</video:content_loc>`,
              e.player_loc &&
                `<video:player_loc>${e.player_loc}</video:player_loc>`,
              e.duration && `<video:duration>${e.duration}</video:duration>`,
              e.view_count &&
                `<video:view_count>${e.view_count}</video:view_count>`,
              e.tag && `<video:tag>${e.tag}</video:tag>`,
              e.rating && `<video:rating>${e.rating}</video:rating>`,
              e.expiration_date &&
                `<video:expiration_date>${e.expiration_date}</video:expiration_date>`,
              e.publication_date &&
                `<video:publication_date>${e.publication_date}</video:publication_date>`,
              e.family_friendly &&
                `<video:family_friendly>${e.family_friendly}</video:family_friendly>`,
              e.requires_subscription &&
                `<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,
              e.live && `<video:live>${e.live}</video:live>`,
              e.restriction &&
                `<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,
              e.platform &&
                `<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,
              e.uploader &&
                `<video:uploader${e.uploader.info && ` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,
              `</video:video>
`,
            ]
              .filter(Boolean)
              .join("\n");
        if (s.lastModified) {
          let e =
            s.lastModified instanceof Date
              ? s.lastModified.toISOString()
              : s.lastModified;
          n += `<lastmod>${e}</lastmod>
`;
        }
        (s.changeFrequency &&
          (n += `<changefreq>${s.changeFrequency}</changefreq>
`),
          "number" == typeof s.priority &&
            (n += `<priority>${s.priority}</priority>
`),
          (n += "</url>\n"));
      }
      return n + "</urlset>\n";
    }
    function s(e) {
      return JSON.stringify(e);
    }
    function d(e, t) {
      return "robots" === t
        ? a(e)
        : "sitemap" === t
          ? l(e)
          : "manifest" === t
            ? s(e)
            : "";
    }
  },
  283345,
  (e) => {
    "use strict";
    var t = e.i(747909),
      r = e.i(174017),
      i = e.i(996250),
      n = e.i(759756),
      o = e.i(561916),
      a = e.i(174677),
      l = e.i(869741),
      s = e.i(316795),
      d = e.i(487718),
      u = e.i(995169),
      c = e.i(47587),
      p = e.i(666012),
      v = e.i(570101),
      f = e.i(626937),
      h = e.i(10372),
      g = e.i(193695);
    e.i(52474);
    var m = e.i(600220),
      y = e.i(89171);
    function x() {
      let e = "https://hey-fede.de",
        t = new Date().toISOString();
      return [
        { url: e, lastModified: t, changeFrequency: "weekly", priority: 1 },
        {
          url: `${e}/menu`,
          lastModified: t,
          changeFrequency: "weekly",
          priority: 0.95,
        },
        {
          url: `${e}/about`,
          lastModified: t,
          changeFrequency: "monthly",
          priority: 0.8,
        },
        {
          url: `${e}/visit`,
          lastModified: t,
          changeFrequency: "monthly",
          priority: 0.85,
        },
        {
          url: `${e}/order-hub`,
          lastModified: t,
          changeFrequency: "weekly",
          priority: 0.9,
        },
        {
          url: `${e}/support`,
          lastModified: t,
          changeFrequency: "monthly",
          priority: 0.6,
        },
        {
          url: `${e}/loyalty`,
          lastModified: t,
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          url: `${e}/legal`,
          lastModified: t,
          changeFrequency: "yearly",
          priority: 0.3,
        },
        {
          url: `${e}/gutscheine`,
          lastModified: t,
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          url: `${e}/reservierung`,
          lastModified: t,
          changeFrequency: "monthly",
          priority: 0.6,
        },
      ];
    }
    e.s(["default", 0, x], 463034);
    var w = e.i(973853);
    async function R() {
      let e = await x(),
        t = (0, w.resolveRouteData)(e, "sitemap");
      return new y.NextResponse(t, {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    }
    (e.s(["GET", 0, R], 779512),
      e.i(779512),
      e.i(463034),
      e.s(["GET", 0, R], 987576));
    var _ = e.i(987576);
    let b = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/sitemap.xml/route",
          pathname: "/sitemap.xml",
          filename: "sitemap--route-entry",
          bundlePath: "",
        },
        distDir: ".next-test-build",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/sitemap--route-entry.js",
        nextConfigOutput: "",
        userland: _,
        ...{},
      }),
      { workAsyncStorage: $, workUnitAsyncStorage: A, serverHooks: E } = b;
    async function q(e, t, i) {
      (i.requestMeta && (0, n.setRequestMeta)(e, i.requestMeta),
        b.isDev &&
          (0, n.addRequestMeta)(
            e,
            "devRequestTimingInternalsEnd",
            process.hrtime.bigint(),
          ));
      let y = "/sitemap.xml/route";
      y = y.replace(/\/index$/, "") || "/";
      let x = await b.prepare(e, t, { srcPage: y, multiZoneDraftMode: !1 });
      if (!x)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == i.waitUntil || i.waitUntil.call(i, Promise.resolve()),
          null
        );
      let {
          buildId: w,
          deploymentId: R,
          params: _,
          nextConfig: $,
          parsedUrl: A,
          isDraftMode: E,
          prerenderManifest: q,
          routerServerContext: C,
          isOnDemandRevalidate: M,
          revalidateOnlyGenerated: O,
          resolvedPathname: S,
          clientReferenceManifest: T,
          serverActionsManifest: P,
        } = x,
        k = (0, l.normalizeAppPath)(y),
        N = !!(q.dynamicRoutes[k] || q.routes[S]),
        j = async () => (
          (null == C ? void 0 : C.render404)
            ? await C.render404(e, t, A, !1)
            : t.end("This page could not be found"),
          null
        );
      if (N && !E) {
        let e = !!q.routes[S],
          t = q.dynamicRoutes[k];
        if (t && !1 === t.fallback && !e) {
          if ($.adapterPath) return await j();
          throw new g.NoFallbackError();
        }
      }
      let F = null;
      !N || b.isDev || E || (F = "/index" === (F = S) ? "/" : F);
      let D = !0 === b.isDev || !N,
        U = N && !D;
      P &&
        T &&
        (0, a.setManifestsSingleton)({
          page: y,
          clientReferenceManifest: T,
          serverActionsManifest: P,
        });
      let H = e.method || "GET",
        I = (0, o.getTracer)(),
        K = I.getActiveScopeSpan(),
        B = !!(null == C ? void 0 : C.isWrappedByNextServer),
        L = !!(0, n.getRequestMeta)(e, "minimalMode"),
        G =
          (0, n.getRequestMeta)(e, "incrementalCache") ||
          (await b.getIncrementalCache(e, $, q, L));
      (null == G || G.resetRequestCache(), (globalThis.__incrementalCache = G));
      let V = {
          params: _,
          previewProps: q.preview,
          renderOpts: {
            experimental: { authInterrupts: !!$.experimental.authInterrupts },
            cacheComponents: !!$.cacheComponents,
            supportsDynamicResponse: D,
            incrementalCache: G,
            cacheLifeProfiles: $.cacheLife,
            waitUntil: i.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, i, n) =>
              b.onRequestError(e, t, i, n, C),
          },
          sharedContext: { buildId: w, deploymentId: R },
        },
        W = new s.NodeNextRequest(e),
        X = new s.NodeNextResponse(t),
        z = d.NextRequestAdapter.fromNodeNextRequest(
          W,
          (0, d.signalFromNodeResponse)(t),
        );
      try {
        let n,
          a = async (e) =>
            b.handle(z, V).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = I.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== u.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let i = r.get("next.route");
              if (i) {
                let t = `${H} ${i}`;
                (e.setAttributes({
                  "next.route": i,
                  "http.route": i,
                  "next.span_name": t,
                }),
                  e.updateName(t),
                  n &&
                    n !== e &&
                    (n.setAttribute("http.route", i), n.updateName(t)));
              } else e.updateName(`${H} ${y}`);
            }),
          l = async (n) => {
            var o, l;
            let s = async ({ previousCacheEntry: r }) => {
                try {
                  if (!L && M && O && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let o = await a(n);
                  e.fetchMetrics = V.renderOpts.fetchMetrics;
                  let l = V.renderOpts.pendingWaitUntil;
                  l && i.waitUntil && (i.waitUntil(l), (l = void 0));
                  let s = V.renderOpts.collectedTags;
                  if (!N)
                    return (
                      await (0, p.sendResponse)(
                        W,
                        X,
                        o,
                        V.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await o.blob(),
                      t = (0, v.toNodeOutgoingHttpHeaders)(o.headers);
                    (s && (t[h.NEXT_CACHE_TAGS_HEADER] = s),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let r =
                        void 0 !== V.renderOpts.collectedRevalidate &&
                        !(
                          V.renderOpts.collectedRevalidate >= h.INFINITE_CACHE
                        ) &&
                        V.renderOpts.collectedRevalidate,
                      i =
                        void 0 === V.renderOpts.collectedExpire ||
                        V.renderOpts.collectedExpire >= h.INFINITE_CACHE
                          ? void 0
                          : V.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: m.CachedRouteKind.APP_ROUTE,
                        status: o.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: i },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == r ? void 0 : r.isStale) &&
                      (await b.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: y,
                          routeType: "route",
                          revalidateReason: (0, c.getRevalidateReason)({
                            isStaticGeneration: U,
                            isOnDemandRevalidate: M,
                          }),
                        },
                        !1,
                        C,
                      )),
                    t
                  );
                }
              },
              d = await b.handleResponse({
                req: e,
                nextConfig: $,
                cacheKey: F,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: q,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: M,
                revalidateOnlyGenerated: O,
                responseGenerator: s,
                waitUntil: i.waitUntil,
                isMinimalMode: L,
              });
            if (!N) return null;
            if (
              (null == d || null == (o = d.value) ? void 0 : o.kind) !==
              m.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == d || null == (l = d.value) ? void 0 : l.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (L ||
              t.setHeader(
                "x-nextjs-cache",
                M
                  ? "REVALIDATED"
                  : d.isMiss
                    ? "MISS"
                    : d.isStale
                      ? "STALE"
                      : "HIT",
              ),
              E &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let u = (0, v.fromNodeOutgoingHttpHeaders)(d.value.headers);
            return (
              (L && N) || u.delete(h.NEXT_CACHE_TAGS_HEADER),
              !d.cacheControl ||
                t.getHeader("Cache-Control") ||
                u.get("Cache-Control") ||
                u.set(
                  "Cache-Control",
                  (0, f.getCacheControlHeader)(d.cacheControl),
                ),
              await (0, p.sendResponse)(
                W,
                X,
                new Response(d.value.body, {
                  headers: u,
                  status: d.value.status || 200,
                }),
              ),
              null
            );
          };
        B && K
          ? await l(K)
          : ((n = I.getActiveScopeSpan()),
            await I.withPropagatedContext(
              e.headers,
              () =>
                I.trace(
                  u.BaseServerSpan.handleRequest,
                  {
                    spanName: `${H} ${y}`,
                    kind: o.SpanKind.SERVER,
                    attributes: { "http.method": H, "http.target": e.url },
                  },
                  l,
                ),
              void 0,
              !B,
            ));
      } catch (t) {
        if (
          (t instanceof g.NoFallbackError ||
            (await b.onRequestError(
              e,
              t,
              {
                routerKind: "App Router",
                routePath: k,
                routeType: "route",
                revalidateReason: (0, c.getRevalidateReason)({
                  isStaticGeneration: U,
                  isOnDemandRevalidate: M,
                }),
              },
              !1,
              C,
            )),
          N)
        )
          throw t;
        return (
          await (0, p.sendResponse)(W, X, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        0,
        q,
        "patchFetch",
        0,
        function () {
          return (0, i.patchFetch)({
            workAsyncStorage: $,
            workUnitAsyncStorage: A,
          });
        },
        "routeModule",
        0,
        b,
        "serverHooks",
        0,
        E,
        "workAsyncStorage",
        0,
        $,
        "workUnitAsyncStorage",
        0,
        A,
      ],
      283345,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u7r_cv._.js.map
