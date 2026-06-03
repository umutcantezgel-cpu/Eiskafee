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
  814747,
  (e, t, r) => {
    t.exports = e.x("path", () => require("path"));
  },
  193695,
  (e, t, r) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  522734,
  (e, t, r) => {
    t.exports = e.x("fs", () => require("fs"));
  },
  150700,
  (e, t, r) => {
    t.exports = e.x("firebase-admin-a14c8a5423a75469", () =>
      require("firebase-admin-a14c8a5423a75469"),
    );
  },
  361022,
  (e) => {
    "use strict";
    var t = e.i(747909),
      r = e.i(174017),
      a = e.i(996250),
      n = e.i(759756),
      i = e.i(561916),
      s = e.i(174677),
      o = e.i(869741),
      l = e.i(316795),
      d = e.i(487718),
      u = e.i(995169),
      c = e.i(47587),
      p = e.i(666012),
      h = e.i(570101),
      x = e.i(626937),
      m = e.i(10372),
      R = e.i(193695);
    e.i(52474);
    var g = e.i(600220),
      f = e.i(89171),
      v = e.i(150700);
    if (!v.apps.length)
      try {
        process.env.FIREBASE_ADMIN_CREDENTIALS
          ? v.initializeApp({
              credential: v.credential.cert(
                JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS),
              ),
            })
          : (console.warn(
              "FIREBASE_ADMIN_CREDENTIALS is not set. Admin SDK may not function correctly if ADC is also missing.",
            ),
            v.initializeApp());
      } catch (e) {
        console.error("Firebase admin initialization error", e);
      }
    let w = v.firestore();
    v.auth();
    var E = e.i(522734),
      A = e.i(814747);
    async function y(e) {
      try {
        let e = A.join(process.cwd(), "seed-data.json");
        if (E.existsSync(e)) {
          let t = JSON.parse(E.readFileSync(e, "utf8")),
            r = w.batch();
          for (let e of t) {
            let t = w.collection("menu_items").doc(e.id);
            r.set(t, e);
          }
          await r.commit();
        }
        let t = w.batch();
        for (let e = 0; e < 7; e++) {
          let r = new Date();
          r.setDate(r.getDate() - (6 - e));
          let a = r.toISOString().split("T")[0],
            n = w.collection("analytics_daily").doc(a);
          t.set(n, {
            date: a,
            revenue: 300 + 500 * Math.random(),
            orderCount: 15 + Math.floor(30 * Math.random()),
            topItems: [
              {
                id: "boxen-mix-box",
                name: "Mix Box",
                quantity: Math.floor(10 * Math.random()),
              },
            ],
          });
        }
        await t.commit();
        let r = w.batch();
        for (let e of [
          {
            id: "ord-12345",
            userId: "guest",
            items: [
              { id: "boxen-mix-box", name: "Mix Box", price: 15, quantity: 1 },
            ],
            total: 15,
            status: "pending",
            createdAt: new Date(),
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            name: "Max Mustermann",
          },
          {
            id: "ord-67890",
            userId: "guest",
            items: [
              { id: "bubble-deluxe", name: "Deluxe", price: 8.8, quantity: 2 },
            ],
            total: 17.6,
            status: "preparing",
            createdAt: new Date(Date.now() - 9e5),
            time: new Date(Date.now() - 9e5).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            name: "Anna Schmidt",
          },
        ]) {
          let t = w.collection("orders").doc(e.id);
          r.set(t, e);
        }
        return (
          await r.commit(),
          f.NextResponse.json({
            success: !0,
            message: "Database seeded successfully",
          })
        );
      } catch (e) {
        return (
          console.error("Seed error:", e),
          f.NextResponse.json(
            { success: !1, error: e.message },
            { status: 500 },
          )
        );
      }
    }
    e.s(["POST", 0, y], 524951);
    var b = e.i(524951);
    let C = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/admin/seed/route",
          pathname: "/api/admin/seed",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next-test-build",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/admin/seed/route.ts",
        nextConfigOutput: "",
        userland: b,
        ...{},
      }),
      { workAsyncStorage: S, workUnitAsyncStorage: N, serverHooks: D } = C;
    async function T(e, t, a) {
      (a.requestMeta && (0, n.setRequestMeta)(e, a.requestMeta),
        C.isDev &&
          (0, n.addRequestMeta)(
            e,
            "devRequestTimingInternalsEnd",
            process.hrtime.bigint(),
          ));
      let f = "/api/admin/seed/route";
      f = f.replace(/\/index$/, "") || "/";
      let v = await C.prepare(e, t, { srcPage: f, multiZoneDraftMode: !1 });
      if (!v)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: w,
          deploymentId: E,
          params: A,
          nextConfig: y,
          parsedUrl: b,
          isDraftMode: S,
          prerenderManifest: N,
          routerServerContext: D,
          isOnDemandRevalidate: T,
          revalidateOnlyGenerated: _,
          resolvedPathname: q,
          clientReferenceManifest: I,
          serverActionsManifest: M,
        } = v,
        O = (0, o.normalizeAppPath)(f),
        P = !!(N.dynamicRoutes[O] || N.routes[q]),
        j = async () => (
          (null == D ? void 0 : D.render404)
            ? await D.render404(e, t, b, !1)
            : t.end("This page could not be found"),
          null
        );
      if (P && !S) {
        let e = !!N.routes[q],
          t = N.dynamicRoutes[O];
        if (t && !1 === t.fallback && !e) {
          if (y.adapterPath) return await j();
          throw new R.NoFallbackError();
        }
      }
      let k = null;
      !P || C.isDev || S || (k = "/index" === (k = q) ? "/" : k);
      let H = !0 === C.isDev || !P,
        U = P && !H;
      M &&
        I &&
        (0, s.setManifestsSingleton)({
          page: f,
          clientReferenceManifest: I,
          serverActionsManifest: M,
        });
      let F = e.method || "GET",
        B = (0, i.getTracer)(),
        L = B.getActiveScopeSpan(),
        K = !!(null == D ? void 0 : D.isWrappedByNextServer),
        $ = !!(0, n.getRequestMeta)(e, "minimalMode"),
        z =
          (0, n.getRequestMeta)(e, "incrementalCache") ||
          (await C.getIncrementalCache(e, y, N, $));
      (null == z || z.resetRequestCache(), (globalThis.__incrementalCache = z));
      let G = {
          params: A,
          previewProps: N.preview,
          renderOpts: {
            experimental: { authInterrupts: !!y.experimental.authInterrupts },
            cacheComponents: !!y.cacheComponents,
            supportsDynamicResponse: H,
            incrementalCache: z,
            cacheLifeProfiles: y.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a, n) =>
              C.onRequestError(e, t, a, n, D),
          },
          sharedContext: { buildId: w, deploymentId: E },
        },
        V = new l.NodeNextRequest(e),
        W = new l.NodeNextResponse(t),
        X = d.NextRequestAdapter.fromNodeNextRequest(
          V,
          (0, d.signalFromNodeResponse)(t),
        );
      try {
        let n,
          s = async (e) =>
            C.handle(X, G).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = B.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== u.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route");
              if (a) {
                let t = `${F} ${a}`;
                (e.setAttributes({
                  "next.route": a,
                  "http.route": a,
                  "next.span_name": t,
                }),
                  e.updateName(t),
                  n &&
                    n !== e &&
                    (n.setAttribute("http.route", a), n.updateName(t)));
              } else e.updateName(`${F} ${f}`);
            }),
          o = async (n) => {
            var i, o;
            let l = async ({ previousCacheEntry: r }) => {
                try {
                  if (!$ && T && _ && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let i = await s(n);
                  e.fetchMetrics = G.renderOpts.fetchMetrics;
                  let o = G.renderOpts.pendingWaitUntil;
                  o && a.waitUntil && (a.waitUntil(o), (o = void 0));
                  let l = G.renderOpts.collectedTags;
                  if (!P)
                    return (
                      await (0, p.sendResponse)(
                        V,
                        W,
                        i,
                        G.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await i.blob(),
                      t = (0, h.toNodeOutgoingHttpHeaders)(i.headers);
                    (l && (t[m.NEXT_CACHE_TAGS_HEADER] = l),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let r =
                        void 0 !== G.renderOpts.collectedRevalidate &&
                        !(
                          G.renderOpts.collectedRevalidate >= m.INFINITE_CACHE
                        ) &&
                        G.renderOpts.collectedRevalidate,
                      a =
                        void 0 === G.renderOpts.collectedExpire ||
                        G.renderOpts.collectedExpire >= m.INFINITE_CACHE
                          ? void 0
                          : G.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: g.CachedRouteKind.APP_ROUTE,
                        status: i.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: a },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == r ? void 0 : r.isStale) &&
                      (await C.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: f,
                          routeType: "route",
                          revalidateReason: (0, c.getRevalidateReason)({
                            isStaticGeneration: U,
                            isOnDemandRevalidate: T,
                          }),
                        },
                        !1,
                        D,
                      )),
                    t
                  );
                }
              },
              d = await C.handleResponse({
                req: e,
                nextConfig: y,
                cacheKey: k,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: N,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: T,
                revalidateOnlyGenerated: _,
                responseGenerator: l,
                waitUntil: a.waitUntil,
                isMinimalMode: $,
              });
            if (!P) return null;
            if (
              (null == d || null == (i = d.value) ? void 0 : i.kind) !==
              g.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == d || null == (o = d.value) ? void 0 : o.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            ($ ||
              t.setHeader(
                "x-nextjs-cache",
                T
                  ? "REVALIDATED"
                  : d.isMiss
                    ? "MISS"
                    : d.isStale
                      ? "STALE"
                      : "HIT",
              ),
              S &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let u = (0, h.fromNodeOutgoingHttpHeaders)(d.value.headers);
            return (
              ($ && P) || u.delete(m.NEXT_CACHE_TAGS_HEADER),
              !d.cacheControl ||
                t.getHeader("Cache-Control") ||
                u.get("Cache-Control") ||
                u.set(
                  "Cache-Control",
                  (0, x.getCacheControlHeader)(d.cacheControl),
                ),
              await (0, p.sendResponse)(
                V,
                W,
                new Response(d.value.body, {
                  headers: u,
                  status: d.value.status || 200,
                }),
              ),
              null
            );
          };
        K && L
          ? await o(L)
          : ((n = B.getActiveScopeSpan()),
            await B.withPropagatedContext(
              e.headers,
              () =>
                B.trace(
                  u.BaseServerSpan.handleRequest,
                  {
                    spanName: `${F} ${f}`,
                    kind: i.SpanKind.SERVER,
                    attributes: { "http.method": F, "http.target": e.url },
                  },
                  o,
                ),
              void 0,
              !K,
            ));
      } catch (t) {
        if (
          (t instanceof R.NoFallbackError ||
            (await C.onRequestError(
              e,
              t,
              {
                routerKind: "App Router",
                routePath: O,
                routeType: "route",
                revalidateReason: (0, c.getRevalidateReason)({
                  isStaticGeneration: U,
                  isOnDemandRevalidate: T,
                }),
              },
              !1,
              D,
            )),
          P)
        )
          throw t;
        return (
          await (0, p.sendResponse)(V, W, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        0,
        T,
        "patchFetch",
        0,
        function () {
          return (0, a.patchFetch)({
            workAsyncStorage: S,
            workUnitAsyncStorage: N,
          });
        },
        "routeModule",
        0,
        C,
        "serverHooks",
        0,
        D,
        "workAsyncStorage",
        0,
        S,
        "workUnitAsyncStorage",
        0,
        N,
      ],
      361022,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0y2ju2u._.js.map
