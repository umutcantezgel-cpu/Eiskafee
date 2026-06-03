module.exports = [
  387136,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(346271),
      d = a.i(262036),
      e = a.i(621216),
      f = a.i(941035),
      g = a.i(474614);
    a.s([
      "ToastContainer",
      0,
      function () {
        let a = (0, f.useToastStore)((a) => a.toasts),
          h = (0, e.useReducedMotion)();
        return (0, b.jsx)("div", {
          className:
            "fixed top-4 left-0 right-0 z-[100] flex flex-col items-center gap-2 pointer-events-none",
          "aria-live": "polite",
          role: "status",
          children: (0, b.jsx)(d.AnimatePresence, {
            children: a.map((a) =>
              (0, b.jsxs)(
                c.motion.div,
                {
                  initial: h
                    ? { opacity: 0 }
                    : { opacity: 0, y: -50, scale: 0.9 },
                  animate: h ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
                  exit: h ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.9 },
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                  className: (0, g.twMerge)(
                    "pointer-events-auto px-6 py-3 rounded-full shadow-clay backdrop-blur-md font-bold text-center",
                    "error" === a.type
                      ? "bg-red-500/90 text-white"
                      : "success" === a.type
                        ? "bg-terracotta text-cream"
                        : "bg-charcoal/90 text-cream",
                  ),
                  children: [
                    a.title,
                    a.message &&
                      (0, b.jsx)("span", {
                        className:
                          "block text-sm font-normal opacity-90 mt-0.5",
                        children: a.message,
                      }),
                  ],
                },
                a.id,
              ),
            ),
          }),
        });
      },
    ]);
  },
  999747,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(621216),
      g = a.i(120459);
    a.s([
      "AchievementBanner",
      0,
      function () {
        let [a, h] = (0, c.useState)(null),
          i = (0, f.useReducedMotion)();
        return (
          (0, c.useEffect)(() => {
            let a = (a) => {
              let b = a.detail,
                c = "string" == typeof b ? b : b?.id,
                d =
                  b?.message ||
                  "Sweet Tooth! Du hast das Logo oft genug angetippt.";
              if (!c) return;
              let e = JSON.parse(
                localStorage.getItem("heyfede_achievements") || "[]",
              );
              if (!e.includes(c)) {
                (e.push(c),
                  localStorage.setItem(
                    "heyfede_achievements",
                    JSON.stringify(e),
                  ),
                  h({ id: c, message: d }));
                try {
                  let a = new Audio("/sounds/achievement.mp3");
                  ((a.volume = 0.5), a.play().catch(() => {}));
                } catch (a) {}
                setTimeout(() => h(null), 5e3);
              }
            };
            return (
              window.addEventListener("achievementUnlocked", a),
              () => window.removeEventListener("achievementUnlocked", a)
            );
          }, []),
          (0, b.jsx)("div", {
            className:
              "fixed top-20 left-1/2 -translate-x-1/2 z-[150] pointer-events-none w-full max-w-sm px-4",
            children: (0, b.jsx)(e.AnimatePresence, {
              children:
                a &&
                (0, b.jsx)(d.motion.div, {
                  initial: i
                    ? { opacity: 0 }
                    : { opacity: 0, y: -50, scale: 0.8, rotate: -2 },
                  animate: i
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1, rotate: 0 },
                  exit: i
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20, scale: 0.9, rotate: 2 },
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                  className:
                    "pointer-events-auto bg-gradient-to-r from-peach to-terracotta p-1 rounded-2xl shadow-clay",
                  children: (0, b.jsxs)("div", {
                    className:
                      "bg-cream rounded-xl p-4 flex items-center gap-4 border-2 border-peach/50",
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-peach rounded-full flex items-center justify-center text-terracotta",
                        children: (0, b.jsx)(g.Trophy, {
                          className: "w-6 h-6",
                        }),
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, b.jsx)("p", {
                            className:
                              "text-xs font-bold text-terracotta uppercase tracking-wider mb-0.5",
                            children: "Achievement Unlocked",
                          }),
                          (0, b.jsx)("p", {
                            className:
                              "text-sm font-bold text-charcoal leading-tight",
                            children: a.message,
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
  734634,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(621216);
    a.i(985950);
    var g = a.i(162464),
      h = a.i(378381),
      i = a.i(178623),
      j = a.i(845474);
    a.s([
      "CookieBanner",
      0,
      function () {
        let [a, k] = (0, c.useState)(!1),
          l = (0, f.useReducedMotion)();
        (0, c.useEffect)(() => {
          let a = () => {
              setTimeout(() => {
                (j.run({
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
                    k(!1);
                  },
                  onChange: () => {
                    k(!1);
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
                  j.validCookie("cc_cookie") || k(!0));
              }, 500);
            },
            b = () => {
              (window.removeEventListener("splash:done", b),
                clearTimeout(c),
                a());
            };
          window.addEventListener("splash:done", b);
          let c = setTimeout(() => {
            (window.removeEventListener("splash:done", b), a());
          }, 4e3);
          return () => {
            (window.removeEventListener("splash:done", b), clearTimeout(c));
          };
        }, []);
        let m = (a) => {
          "custom" === a
            ? j.showPreferences()
            : ("all" === a
                ? j.acceptCategory("all")
                : "essential" === a && j.acceptCategory([]),
              j.hide(),
              k(!1));
        };
        return (0, b.jsx)(e.AnimatePresence, {
          children:
            a &&
            (0, b.jsx)(d.motion.div, {
              initial: l ? { opacity: 0 } : { opacity: 0, y: 100 },
              animate: l ? { opacity: 1 } : { opacity: 1, y: 0 },
              exit: l ? { opacity: 0 } : { opacity: 0, y: 100 },
              transition: { type: "spring", stiffness: 300, damping: 30 },
              className:
                "fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none flex justify-center",
              children: (0, b.jsxs)("div", {
                className:
                  "pointer-events-auto bg-cream border-2 border-peach rounded-3xl shadow-clay p-6 w-full max-w-4xl flex flex-col gap-6 relative overflow-hidden",
                children: [
                  (0, b.jsx)("div", {
                    className:
                      "absolute top-0 right-0 w-16 h-16 pointer-events-none",
                    style: { maskImage: "url(#bitemark-top-right)" },
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex flex-col md:flex-row gap-6 items-center",
                    children: [
                      (0, b.jsx)("div", {
                        className:
                          "flex-shrink-0 w-16 h-16 bg-peach rounded-full flex items-center justify-center text-terracotta",
                        children: (0, b.jsx)(i.Cookie, {
                          className: "w-8 h-8",
                        }),
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex-grow text-center md:text-left",
                        children: [
                          (0, b.jsx)("h3", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2",
                            children: "Cookies für dich!",
                          }),
                          (0, b.jsx)("p", {
                            className:
                              "text-sm text-charcoal/80 leading-relaxed max-w-xl",
                            children:
                              "Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?",
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row gap-3 w-full md:w-auto",
                        children: [
                          (0, b.jsx)("button", {
                            onClick: () => m("essential"),
                            className:
                              "text-sm font-bold text-charcoal/60 hover:text-charcoal underline underline-offset-4 px-4 py-2 transition-colors",
                            children: "Ablehnen",
                          }),
                          (0, b.jsx)(h.SecondaryCTA, {
                            onClick: () => m("custom"),
                            className: "py-2 text-sm",
                            children: "Anpassen",
                          }),
                          (0, b.jsx)(g.PrimaryCTA, {
                            onClick: () => m("all"),
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
  89569,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(845474),
      g = a.i(178623),
      h = a.i(341476);
    a.s([
      "default",
      0,
      function () {
        let [a, i] = (0, c.useState)(!1),
          [j, k] = (0, c.useState)(!1),
          [l, m] = (0, c.useState)(!1);
        return ((0, c.useEffect)(() => {
          let a = () => i(f.validConsent());
          (a(),
            window.addEventListener("cc:onConsent", a),
            window.addEventListener("cc:onChange", a));
          let b = setTimeout(() => {
            f.validConsent() && (m(!0), setTimeout(() => m(!1), 3e3));
          }, 5e3);
          return () => {
            (window.removeEventListener("cc:onConsent", a),
              window.removeEventListener("cc:onChange", a),
              clearTimeout(b));
          };
        }, []),
        a)
          ? (0, b.jsxs)("div", {
              style: { position: "fixed", bottom: 20, left: 20, zIndex: 800 },
              children: [
                (0, b.jsx)(e.AnimatePresence, {
                  children:
                    (j || l) &&
                    (0, b.jsxs)(d.motion.div, {
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
                        (0, b.jsx)("div", {
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
                (0, b.jsx)(d.motion.div, {
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
                (0, b.jsx)(d.motion.button, {
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
                    (k(!0), m(!1));
                  },
                  onHoverEnd: () => k(!1),
                  onClick: () => f.showPreferences(),
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
                    boxShadow: j
                      ? "0 8px 28px rgba(204,98,76,0.25), 0 0 0 1px rgba(228,192,168,0.5) inset"
                      : "0 4px 16px rgba(45,31,25,0.1), 0 0 0 1px rgba(228,192,168,0.3) inset",
                    transition: "box-shadow 0.3s ease",
                  },
                  children: (0, b.jsx)(d.motion.div, {
                    animate: { rotate: 90 * !!j },
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                    children: j
                      ? (0, b.jsx)(h.Settings, {
                          size: 20,
                          color: "#CC624C",
                          strokeWidth: 2,
                        })
                      : (0, b.jsx)(g.Cookie, {
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
  290028,
  (a) => {
    "use strict";
    var b = a.i(572131),
      c = a.i(845474);
    a.s([
      "default",
      0,
      function () {
        return (
          (0, b.useEffect)(() => {
            let a = () => {
              (c.acceptedCategory("analytics"),
                c.acceptedCategory("marketing"),
                c.acceptedCategory("functional"));
            };
            return (
              window.addEventListener("cc:onConsent", a),
              window.addEventListener("cc:onChange", a),
              a(),
              () => {
                (window.removeEventListener("cc:onConsent", a),
                  window.removeEventListener("cc:onChange", a));
              }
            );
          }, []),
          null
        );
      },
    ]);
  },
  119569,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(566535),
      f = a.i(521520),
      g = a.i(621216);
    a.s([
      "SyrupCursor",
      0,
      function () {
        let a = (0, g.useReducedMotion)(),
          [h, i] = (0, c.useState)(!1),
          [j, k] = (0, c.useState)(!1),
          l = (0, f.useMotionValue)(-100),
          m = (0, f.useMotionValue)(-100),
          n = (0, e.useSpring)(l, { stiffness: 1e3, damping: 40 }),
          o = (0, e.useSpring)(m, { stiffness: 1e3, damping: 40 }),
          p = (0, e.useSpring)(l, { stiffness: 150, damping: 18, mass: 0.5 }),
          q = (0, e.useSpring)(m, { stiffness: 150, damping: 18, mass: 0.5 });
        return ((0, c.useEffect)(() => {
          if (
            a ||
            !window.matchMedia("(pointer: fine) and (hover: hover)").matches
          )
            return;
          k(!0);
          let b = (a) => {
              (l.set(a.clientX), m.set(a.clientY));
            },
            c = (a) => {
              let b = a.target;
              b &&
                i(
                  "a" === b.tagName.toLowerCase() ||
                    "button" === b.tagName.toLowerCase() ||
                    null !== b.closest("a") ||
                    null !== b.closest("button") ||
                    "pointer" === window.getComputedStyle(b).cursor,
                );
            };
          return (
            window.addEventListener("mousemove", b),
            window.addEventListener("mouseover", c),
            () => {
              (window.removeEventListener("mousemove", b),
                window.removeEventListener("mouseover", c));
            }
          );
        }, [l, m, a]),
        a || !j)
          ? null
          : (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)("svg", {
                  className: "hidden",
                  children: (0, b.jsx)("defs", {
                    children: (0, b.jsxs)("filter", {
                      id: "goo",
                      children: [
                        (0, b.jsx)("feGaussianBlur", {
                          in: "SourceGraphic",
                          stdDeviation: "6",
                          result: "blur",
                        }),
                        (0, b.jsx)("feColorMatrix", {
                          in: "blur",
                          mode: "matrix",
                          values:
                            "1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 25 -9",
                          result: "goo",
                        }),
                        (0, b.jsx)("feComposite", {
                          in: "SourceGraphic",
                          in2: "goo",
                          operator: "atop",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, b.jsxs)("div", {
                  className:
                    "fixed inset-0 pointer-events-none z-[9999] mix-blend-multiply hidden md:block",
                  style: { filter: "url(#goo)" },
                  children: [
                    (0, b.jsx)(d.motion.div, {
                      className:
                        "absolute top-0 left-0 bg-terracotta rounded-full",
                      style: {
                        x: n,
                        y: o,
                        width: 16,
                        height: 16,
                        translateX: "-50%",
                        translateY: "-50%",
                      },
                      animate: { scale: h ? 1.5 : 1 },
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }),
                    (0, b.jsx)(d.motion.div, {
                      className:
                        "absolute top-0 left-0 bg-terracotta/70 rounded-full",
                      style: {
                        x: p,
                        y: q,
                        width: 32,
                        height: 32,
                        translateX: "-50%",
                        translateY: "-50%",
                      },
                      animate: { scale: h ? 1.5 : 1 },
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
  856505,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(262536);
    a.s([
      "AuthProvider",
      0,
      function ({ children: a }) {
        return (
          (0, c.useEffect)(() => {
            d.useAuth.getState().init();
          }, []),
          (0, b.jsx)(b.Fragment, { children: a })
        );
      },
    ]);
  },
  102562,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131);
    a.s([
      "A11yProvider",
      0,
      function ({ children: a }) {
        return (
          (0, c.useEffect)(() => {}, []),
          (0, b.jsx)(b.Fragment, { children: a })
        );
      },
    ]);
  },
  980468,
  (a) => {
    "use strict";
    var b = a.i(187924);
    a.s([
      "SkipToContent",
      0,
      function () {
        return (0, b.jsx)("a", {
          href: "#main-content",
          className:
            "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-terracotta text-cream px-6 py-3 rounded-full font-bold shadow-clay focus:outline-none focus:ring-4 focus:ring-terracotta/50",
          children: "Zum Hauptinhalt springen",
        });
      },
    ]);
  },
  689630,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.s([
      "Analytics",
      0,
      function (a) {
        return (
          (0, b.useEffect)(() => {
            var b;
            a.beforeSend &&
              (null == (b = window.va) ||
                b.call(window, "beforeSend", a.beforeSend));
          }, [a.beforeSend]),
          (0, b.useEffect)(() => {
            !(function (a = { debug: !0 }, b) {})(
              {
                framework: a.framework || "react",
                basePath:
                  a.basePath ??
                  (function () {
                    if ("u" > typeof process && void 0 !== process.env)
                      return process.env
                        .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                  })(),
                ...(void 0 !== a.route && { disableAutoTrack: !0 }),
                ...a,
              },
              a.configString ??
                (function () {
                  if ("u" > typeof process && void 0 !== process.env)
                    return process.env
                      .REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
                })(),
            );
          }, []),
          (0, b.useEffect)(() => {
            a.route &&
              a.path &&
              (function ({ route: a, path: b }) {
                var c;
                null == (c = window.va) ||
                  c.call(window, "pageview", { route: a, path: b });
              })({ route: a.route, path: a.path });
          }, [a.route, a.path]),
          null
        );
      },
      "track",
      0,
      function (a, b, c) {
        {
          let a =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          !0;
          console.warn(a);
          return;
        }
      },
    ]);
  },
];

//# sourceMappingURL=_0.39.36._.js.map
