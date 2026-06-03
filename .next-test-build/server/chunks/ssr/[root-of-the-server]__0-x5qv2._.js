module.exports = [
  814747,
  (a, b, c) => {
    b.exports = a.x("path", () => require("path"));
  },
  224361,
  (a, b, c) => {
    b.exports = a.x("util", () => require("util"));
  },
  918622,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  556704,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  832319,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  120635,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/app-render/action-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/action-async-storage.external.js"),
    );
  },
  324725,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  43285,
  (a, b, c) => {
    b.exports = a.x(
      "next/dist/server/app-render/dynamic-access-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/dynamic-access-async-storage.external.js"),
    );
  },
  342602,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(918622);
  },
  187924,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored["react-ssr"].ReactJsxRuntime;
  },
  572131,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored["react-ssr"].React;
  },
  909270,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored.contexts.AppRouterContext;
  },
  736313,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored.contexts.HooksClientContext;
  },
  818341,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored.contexts.ServerInsertedHtml;
  },
  738783,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored["react-ssr"].ReactServerDOMTurbopackClient;
  },
  935112,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(342602).vendored["react-ssr"].ReactDOM;
  },
  521520,
  (a) => {
    "use strict";
    var b = a.i(736829),
      c = a.i(572131),
      d = a.i(965802),
      e = a.i(774290);
    a.s([
      "useMotionValue",
      0,
      function (a) {
        let f = (0, e.useConstant)(() => (0, b.motionValue)(a)),
          { isStatic: g } = (0, c.useContext)(d.MotionConfigContext);
        if (g) {
          let [, b] = (0, c.useState)(a);
          (0, c.useEffect)(() => f.on("change", b), []);
        }
        return f;
      },
    ]);
  },
  965327,
  (a) => {
    "use strict";
    var b = a.i(68203);
    a.s([
      "transform",
      0,
      function (...a) {
        let c = !Array.isArray(a[0]),
          d = c ? 0 : -1,
          e = a[0 + d],
          f = a[1 + d],
          g = a[2 + d],
          h = a[3 + d],
          i = (0, b.interpolate)(f, g, h);
        return c ? i(e) : i;
      },
    ]);
  },
  901299,
  732743,
  (a) => {
    "use strict";
    var b = a.i(965327),
      c = a.i(774290),
      d = a.i(122647),
      e = a.i(801703),
      f = a.i(521520);
    function g(a, b) {
      let c = (0, f.useMotionValue)(b()),
        g = () => c.set(b());
      return (
        g(),
        (0, e.useIsomorphicLayoutEffect)(() => {
          let b = () => d.frame.preRender(g, !1, !0),
            c = a.map((a) => a.on("change", b));
          return () => {
            (c.forEach((a) => a()), (0, d.cancelFrame)(g));
          };
        }),
        c
      );
    }
    a.s(["useCombineMotionValues", 0, g], 732743);
    var h = a.i(736829);
    function i(a, b) {
      let d = (0, c.useConstant)(() => []);
      return g(a, () => {
        d.length = 0;
        let c = a.length;
        for (let b = 0; b < c; b++) d[b] = a[b].get();
        return b(d);
      });
    }
    a.s(
      [
        "useTransform",
        0,
        function a(d, e, f, j) {
          if ("function" == typeof d) {
            let a;
            return (
              (h.collectMotionValues.current = []),
              d(),
              (a = g(h.collectMotionValues.current, d)),
              (h.collectMotionValues.current = void 0),
              a
            );
          }
          if (void 0 !== f && !Array.isArray(f) && "function" != typeof e) {
            var k = d,
              l = e,
              m = f,
              n = j;
            let b = (0, c.useConstant)(() => Object.keys(m)),
              g = (0, c.useConstant)(() => ({}));
            for (let c of b) g[c] = a(k, l, m[c], n);
            return g;
          }
          let o = "function" == typeof e ? e : (0, b.transform)(e, f, j),
            p = Array.isArray(d) ? i(d, o) : i([d], ([a]) => o(a)),
            q = Array.isArray(d) ? void 0 : d.accelerate;
          return (
            q &&
              !q.isTransformed &&
              "function" != typeof e &&
              Array.isArray(f) &&
              j?.clamp !== !1 &&
              (p.accelerate = {
                ...q,
                times: e,
                keyframes: f,
                isTransformed: !0,
                ...(j?.ease ? { ease: j.ease } : {}),
              }),
            p
          );
        },
      ],
      901299,
    );
  },
  566535,
  (a) => {
    "use strict";
    a.i(736829);
    var b = a.i(978621),
      c = a.i(198852),
      d = a.i(122647);
    function e(a) {
      return "number" == typeof a ? a : parseFloat(a);
    }
    var f = a.i(572131),
      g = a.i(965802),
      h = a.i(521520),
      i = a.i(901299);
    a.s(
      [
        "useSpring",
        0,
        function (a, j = {}) {
          return (function (a, j = {}) {
            let { isStatic: k } = (0, f.useContext)(g.MotionConfigContext),
              l = () => ((0, c.isMotionValue)(a) ? a.get() : a);
            if (k) return (0, i.useTransform)(l);
            let m = (0, h.useMotionValue)(l());
            return (
              (0, f.useInsertionEffect)(
                () =>
                  (function (a, f, g = {}) {
                    let h,
                      i = a.get(),
                      j = null,
                      k = i,
                      l =
                        "string" == typeof i
                          ? i.replace(/[\d.-]/g, "")
                          : void 0,
                      m = () => {
                        (j && (j.stop(), (j = null)), (a.animation = void 0));
                      },
                      n = () => {
                        ((() => {
                          let c = e(a.get()),
                            d = e(k);
                          if (c === d) return m();
                          let f = j
                            ? j.getGeneratorVelocity()
                            : a.getVelocity();
                          (m(),
                            (j = new b.JSAnimation({
                              keyframes: [c, d],
                              velocity: f,
                              type: "spring",
                              restDelta: 0.001,
                              restSpeed: 0.01,
                              ...g,
                              onUpdate: h,
                            })));
                        })(),
                          (a.animation = j ?? void 0),
                          a.events.animationStart?.notify(),
                          j?.then(() => {
                            ((a.animation = void 0),
                              a.events.animationComplete?.notify());
                          }));
                      };
                    if (
                      (a.attach((a, b) => {
                        ((k = a),
                          (h = (a) => {
                            var c, d;
                            return b(((c = a), (d = l) ? c + d : c));
                          }),
                          d.frame.postRender(n));
                      }, m),
                      (0, c.isMotionValue)(f))
                    ) {
                      let b = !0 === g.skipInitialAnimation,
                        c = f.on("change", (c) => {
                          var d, e, f, g;
                          b
                            ? ((b = !1),
                              a.jump(((d = c), (e = l) ? d + e : d), !1))
                            : a.set(((f = c), (g = l) ? f + g : f));
                        }),
                        d = a.on("destroy", c);
                      return () => {
                        (c(), d());
                      };
                    }
                    return m;
                  })(m, a, j),
                [m, JSON.stringify(j)],
              ),
              m
            );
          })(a, { type: "spring", ...j });
        },
      ],
      566535,
    );
  },
  522734,
  (a, b, c) => {
    b.exports = a.x("fs", () => require("fs"));
  },
  132787,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["doc", () => b.a7]);
  },
  862435,
  (a) => {
    "use strict";
    let b = (a) => (c) => {
      try {
        let d = a(c);
        if (d instanceof Promise) return d;
        return {
          then: (a) => b(a)(d),
          catch(a) {
            return this;
          },
        };
      } catch (a) {
        return {
          then(a) {
            return this;
          },
          catch: (c) => b(c)(a),
        };
      }
    };
    a.s([
      "persist",
      0,
      (a, c) => (d, e, f) => {
        let g,
          h = {
            storage: (function (a) {
              let b;
              try {
                b = a();
              } catch (a) {
                return;
              }
              return {
                getItem: (a) => {
                  var c;
                  let d = (a) => (null === a ? null : JSON.parse(a, void 0)),
                    e = null != (c = b.getItem(a)) ? c : null;
                  return e instanceof Promise ? e.then(d) : d(e);
                },
                setItem: (a, c) => b.setItem(a, JSON.stringify(c, void 0)),
                removeItem: (a) => b.removeItem(a),
              };
            })(() => window.localStorage),
            partialize: (a) => a,
            version: 0,
            merge: (a, b) => ({ ...b, ...a }),
            ...c,
          },
          i = !1,
          j = 0,
          k = new Set(),
          l = new Set(),
          m = h.storage;
        if (!m)
          return a(
            (...a) => {
              (console.warn(
                `[zustand persist middleware] Unable to update item '${h.name}', the given storage is currently unavailable.`,
              ),
                d(...a));
            },
            e,
            f,
          );
        let n = () => {
            let a = h.partialize({ ...e() });
            return m.setItem(h.name, { state: a, version: h.version });
          },
          o = f.setState;
        f.setState = (a, b) => (o(a, b), n());
        let p = a((...a) => (d(...a), n()), e, f);
        f.getInitialState = () => p;
        let q = () => {
          var a, c;
          if (!m) return;
          let f = ++j;
          ((i = !1),
            k.forEach((a) => {
              var b;
              return a(null != (b = e()) ? b : p);
            }));
          let o =
            (null == (c = h.onRehydrateStorage)
              ? void 0
              : c.call(h, null != (a = e()) ? a : p)) || void 0;
          return b(m.getItem.bind(m))(h.name)
            .then((a) => {
              if (a)
                if ("number" != typeof a.version || a.version === h.version)
                  return [!1, a.state];
                else {
                  if (h.migrate) {
                    let b = h.migrate(a.state, a.version);
                    return b instanceof Promise
                      ? b.then((a) => [!0, a])
                      : [!0, b];
                  }
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided",
                  );
                }
              return [!1, void 0];
            })
            .then((a) => {
              var b;
              if (f !== j) return;
              let [c, i] = a;
              if ((d((g = h.merge(i, null != (b = e()) ? b : p)), !0), c))
                return n();
            })
            .then(() => {
              f === j &&
                (null == o || o(e(), void 0),
                (g = e()),
                (i = !0),
                l.forEach((a) => a(g)));
            })
            .catch((a) => {
              f === j && (null == o || o(void 0, a));
            });
        };
        return (
          (f.persist = {
            setOptions: (a) => {
              ((h = { ...h, ...a }), a.storage && (m = a.storage));
            },
            clearStorage: () => {
              null == m || m.removeItem(h.name);
            },
            getOptions: () => h,
            rehydrate: () => q(),
            hasHydrated: () => i,
            onHydrate: (a) => (
              k.add(a),
              () => {
                k.delete(a);
              }
            ),
            onFinishHydration: (a) => (
              l.add(a),
              () => {
                l.delete(a);
              }
            ),
          }),
          h.skipHydration || q(),
          g || p
        );
      },
    ]);
  },
  778797,
  32193,
  (a) => {
    "use strict";
    var b = a.i(920226),
      c = a.i(862435);
    let d = {
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
    a.s(["ACHIEVEMENTS", 0, d], 32193);
    var e = a.i(420237);
    a.i(69387);
    var f = a.i(132787),
      g = a.i(601787),
      h = a.i(289015),
      h = h;
    let i = (0, b.create)()(
      (0, c.persist)(
        (a, b) => ({
          unlocked: [],
          syncFromFirebase: (c) => {
            a({ unlocked: Array.from(new Set([...b().unlocked, ...c])) });
          },
          unlock: async (c) => {
            let i = b();
            if (i.unlocked.includes(c)) return;
            a({ unlocked: [...i.unlocked, c] });
            let j = e.auth.currentUser;
            if (j)
              try {
                let a = (0, f.doc)(e.db, "users", j.uid);
                await (0, g.updateDoc)(a, { achievements: (0, h.aV)(c) });
                let b = d[c];
                if (b && b.coinReward && b.coinReward > 0) {
                  let a = (0, f.doc)(e.db, "loyalty_points", j.uid),
                    c = await (0, g.getDoc)(a),
                    d = {
                      amount: b.coinReward,
                      type: "earned",
                      date: new Date(),
                      reason: `Achievement: ${b.title}`,
                    };
                  if (c.exists()) {
                    let e = c.data();
                    await (0, g.updateDoc)(a, {
                      balance: (e.balance || 0) + b.coinReward,
                      history: (0, h.aV)(d),
                    });
                  } else
                    await (0, g.setDoc)(a, {
                      uid: j.uid,
                      balance: b.coinReward,
                      history: [d],
                    });
                }
              } catch (a) {
                console.error("Failed to sync achievement to Firestore", a);
              }
          },
          isUnlocked: (a) => b().unlocked.includes(a),
        }),
        { name: "hey-fede-achievements" },
      ),
    );
    a.s(["useAchievements", 0, i], 778797);
  },
  262536,
  (a) => {
    "use strict";
    var b = a.i(920226);
    a.i(730485);
    var c = a.i(65825),
      c = c;
    a.i(69387);
    var d = a.i(132787),
      e = a.i(601787),
      f = a.i(420237),
      g = a.i(778797);
    let h = (0, b.create)((a) => ({
      user: null,
      dbUser: null,
      role: null,
      loading: !0,
      init: () =>
        (0, c.z)(f.auth, async (b) => {
          if (b)
            try {
              let c = await (0, e.getDoc)((0, d.doc)(f.db, "users", b.uid)),
                h = c.exists() ? c.data() : null,
                i = h?.role || "customer";
              if (
                (h?.achievements &&
                  g.useAchievements.getState().syncFromFirebase(h.achievements),
                h?.birthday)
              ) {
                let a = new Date(),
                  b = `${(a.getMonth() + 1).toString().padStart(2, "0")}-${a.getDate().toString().padStart(2, "0")}`;
                h.birthday.endsWith(b) &&
                  g.useAchievements.getState().unlock("birthday-treat");
              }
              a({ user: b, dbUser: h, role: i, loading: !1 });
            } catch (c) {
              (console.error("Error fetching user data:", c),
                a({ user: b, dbUser: null, role: "customer", loading: !1 }));
            }
          else a({ user: null, dbUser: null, role: null, loading: !1 });
        }),
    }));
    (h.getState().init(), a.s(["useAuth", 0, h], 262536));
  },
  403512,
  704307,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("plus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }],
    ]);
    (a.s(["default", 0, b], 704307), a.s(["Plus", 0, b], 403512));
  },
  941035,
  (a) => {
    "use strict";
    let b = (0, a.i(920226).create)((a) => ({
      toasts: [],
      addToast: (b) => {
        let c = Math.random().toString(36).substr(2, 9);
        (a((a) => ({ toasts: [...a.toasts, { ...b, id: c }] })),
          setTimeout(() => {
            a((a) => ({ toasts: a.toasts.filter((a) => a.id !== c) }));
          }, 4e3));
      },
      removeToast: (b) =>
        a((a) => ({ toasts: a.toasts.filter((a) => a.id !== b) })),
    }));
    a.s(["useToastStore", 0, b]);
  },
  594041,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("cookie", [
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
    a.s(["default", 0, b]);
  },
  930055,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("trophy", [
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
    a.s(["default", 0, b]);
  },
  120459,
  (a) => {
    "use strict";
    var b = a.i(930055);
    a.s(["Trophy", () => b.default]);
  },
  18766,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("settings", [
      [
        "path",
        {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
          key: "1i5ecw",
        },
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ]);
    a.s(["default", 0, b]);
  },
  341476,
  (a) => {
    "use strict";
    var b = a.i(18766);
    a.s(["Settings", () => b.default]);
  },
  199968,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("chevron-right", [
      ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
    ]);
    a.s(["default", 0, b]);
  },
  141146,
  (a) => {
    "use strict";
    var b = a.i(199968);
    a.s(["ChevronRight", () => b.default]);
  },
  985950,
  162464,
  378381,
  832960,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(621216),
      g = a.i(474614),
      h = a.i(141146);
    (a.s(
      [
        "PrimaryCTA",
        0,
        function ({
          showArrow: a = !1,
          className: i,
          children: j,
          onClick: k,
          ...l
        }) {
          let [m, n] = (0, c.useState)([]),
            o = (0, f.useReducedMotion)();
          return (0, b.jsxs)("div", {
            className: "relative inline-block",
            children: [
              (0, b.jsx)(e.AnimatePresence, {
                children: m.map((a) =>
                  (0, b.jsx)(
                    d.motion.div,
                    {
                      initial: { opacity: 1, x: 0, y: 0, scale: 0 },
                      animate: { opacity: 0, x: a.x, y: a.y, scale: a.scale },
                      exit: { opacity: 0 },
                      transition: { duration: 0.8, ease: "easeOut" },
                      className:
                        "absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-terracotta pointer-events-none",
                    },
                    a.id,
                  ),
                ),
              }),
              (0, b.jsxs)(d.motion.button, {
                whileTap: o ? void 0 : { scale: 0.92 },
                transition: { type: "spring", stiffness: 300, damping: 22 },
                onClick: (a) => {
                  (o ||
                    (n(
                      Array.from({ length: 8 }).map((a, b) => {
                        let c = 40 + 20 * Math.random(),
                          d = (((360 * b) / 8) * Math.PI) / 180;
                        return {
                          id: Math.random().toString(),
                          x: Math.cos(d) * c,
                          y: Math.sin(d) * c,
                          scale: 0.5 + 0.5 * Math.random(),
                        };
                      }),
                    ),
                    setTimeout(() => n([]), 800)),
                    k && k(a));
                },
                className: (0, g.twMerge)(
                  "relative flex items-center justify-center gap-2 px-6 py-3",
                  "bg-terracotta text-cream font-bold rounded-full transition-all duration-300",
                  "hover:bg-[#C95039] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-terracotta/30",
                  "hover:[mask-image:url(#bitemark-right)] [mask-image:none]",
                  i,
                ),
                ...l,
                children: [
                  (0, b.jsx)("span", { children: j }),
                  a && (0, b.jsx)(h.ChevronRight, { className: "w-5 h-5" }),
                ],
              }),
            ],
          });
        },
      ],
      162464,
    ),
      a.s(
        [
          "SecondaryCTA",
          0,
          function ({ className: a, children: c, ...e }) {
            let h = (0, f.useReducedMotion)();
            return (0, b.jsx)(d.motion.button, {
              whileTap: h ? void 0 : { scale: 0.92 },
              transition: { type: "spring", stiffness: 300, damping: 22 },
              className: (0, g.twMerge)(
                "flex items-center justify-center px-6 py-3",
                "border-2 border-terracotta text-terracotta font-bold rounded-full transition-all duration-300",
                "hover:bg-terracotta/5 focus:outline-none focus:ring-4 focus:ring-terracotta/20",
                a,
              ),
              ...e,
              children: c,
            });
          },
        ],
        378381,
      ));
    var i = a.i(403512);
    (a.s(
      [
        "IconCirclePlus",
        0,
        function ({ className: a, ...c }) {
          let e = (0, f.useReducedMotion)();
          return (0, b.jsx)(d.motion.button, {
            whileTap: e ? void 0 : { scale: 0.9 },
            transition: { type: "spring", stiffness: 300, damping: 22 },
            className: (0, g.twMerge)(
              "flex items-center justify-center w-[34px] h-[34px] rounded-full",
              "bg-sand text-charcoal transition-colors hover:bg-terracotta hover:text-cream",
              "focus-visible:ring-4 focus-visible:ring-terracotta/30 focus:outline-none",
              a,
            ),
            "aria-label": "Hinzufügen",
            ...c,
            children: (0, b.jsx)(i.Plus, { className: "w-5 h-5" }),
          });
        },
      ],
      832960,
    ),
      a.s([], 985950));
  },
  386665,
  (a) => {
    "use strict";
    var b = a.i(572131),
      c = a.i(50944);
    function d(a) {
      return RegExp(`/${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function e(a) {
      (0, b.useEffect)(() => {
        var b;
        a.beforeSend &&
          (null == (b = window.si) ||
            b.call(window, "beforeSend", a.beforeSend));
      }, [a.beforeSend]);
      let c = (0, b.useRef)(null);
      return (
        (0, b.useEffect)(() => {
          if (!c.current) {
            let b = (function (a = {}, b) {
              return null;
            })(
              {
                framework: a.framework ?? "react",
                basePath:
                  a.basePath ??
                  (function () {
                    if ("u" > typeof process && void 0 !== process.env)
                      return process.env
                        .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                  })(),
                ...a,
              },
              a.configString ??
                (function () {
                  if ("u" > typeof process && void 0 !== process.env)
                    return process.env
                      .REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
                })(),
            );
            b && (c.current = b.setRoute);
          }
        }, [a]),
        (0, b.useEffect)(() => {
          c.current && a.route && c.current(a.route);
        }, [a.route]),
        null
      );
    }
    function f(a) {
      let f = (() => {
        let a = (0, c.useParams)(),
          b = (0, c.useSearchParams)() || new URLSearchParams(),
          e = (0, c.usePathname)();
        if (!a) return null;
        let f = Object.keys(a).length ? a : Object.fromEntries(b.entries());
        if (!e || !f) return e;
        let g = e;
        try {
          let a = Object.entries(f);
          for (let [b, c] of a)
            if (!Array.isArray(c)) {
              let a = d(c);
              a.test(g) && (g = g.replace(a, `/[${b}]`));
            }
          for (let [b, c] of a)
            if (Array.isArray(c)) {
              let a = d(c.join("/"));
              a.test(g) && (g = g.replace(a, `/[...${b}]`));
            }
          return g;
        } catch {
          return e;
        }
      })();
      return b.default.createElement(e, {
        route: f,
        ...a,
        framework: "next",
        basePath: (function () {
          if ("u" > typeof process && void 0 !== process.env)
            return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
        configString: (function () {
          if ("u" > typeof process && void 0 !== process.env)
            return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
        })(),
      });
    }
    a.s([
      "SpeedInsights",
      0,
      function (a) {
        return b.default.createElement(
          b.Suspense,
          { fallback: null },
          b.default.createElement(f, { ...a }),
        );
      },
    ]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-x5qv2._.js.map
