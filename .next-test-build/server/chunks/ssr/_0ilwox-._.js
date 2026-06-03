module.exports = [
  560790,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("chevron-down", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
    ]);
    a.s(["default", 0, b]);
  },
  589027,
  (a) => {
    "use strict";
    var b = a.i(560790);
    a.s(["ChevronDown", () => b.default]);
  },
  765973,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    a.s(["default", 0, b]);
  },
  802110,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("shield", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  414258,
  (a) => {
    "use strict";
    var b = a.i(802110);
    a.s(["Shield", () => b.default]);
  },
  613412,
  (a) => {
    "use strict";
    var b = a.i(765973);
    a.s(["CheckCircle2", () => b.default]);
  },
  64,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(995180),
      g = a.i(566535),
      h = a.i(589027),
      i = a.i(613412),
      j = a.i(414258);
    function k({ children: a, color: c = "#b34832" }) {
      return (0, b.jsx)("div", {
        style: {
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: c,
          color: "#fefefe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        },
        children: a,
      });
    }
    a.s([
      "AccordionSection",
      0,
      function ({
        icon: a,
        number: f,
        title: g,
        children: i,
        defaultOpen: j = !1,
      }) {
        let [l, m] = (0, c.useState)(j);
        return (0, b.jsxs)(d.motion.div, {
          layout: !0,
          style: {
            background: l ? "rgba(245,239,232,0.6)" : "transparent",
            borderRadius: 18,
            border: l
              ? "1px solid rgba(228,192,168,0.4)"
              : "1px solid transparent",
            marginBottom: 8,
            overflow: "hidden",
            transition: "background 0.3s, border 0.3s",
          },
          children: [
            (0, b.jsxs)("button", {
              onClick: () => m(!l),
              "aria-expanded": l,
              style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              },
              children: [
                (0, b.jsx)(k, { children: a }),
                (0, b.jsxs)("div", {
                  style: { flex: 1 },
                  children: [
                    f &&
                      (0, b.jsx)("span", {
                        style: {
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          color: "#b34832",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        },
                        children: f,
                      }),
                    (0, b.jsx)("div", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.05rem",
                        color: "#2d1f19",
                      },
                      children: g,
                    }),
                  ],
                }),
                (0, b.jsx)(d.motion.div, {
                  animate: { rotate: 180 * !!l },
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                  children: (0, b.jsx)(h.ChevronDown, {
                    size: 20,
                    color: "#7a584c",
                  }),
                }),
              ],
            }),
            (0, b.jsx)(e.AnimatePresence, {
              initial: !1,
              children:
                l &&
                (0, b.jsx)(d.motion.div, {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  style: { overflow: "hidden" },
                  children: (0, b.jsx)("div", {
                    style: {
                      padding: "0 20px 20px 64px",
                      fontFamily: "var(--font-nunito), sans-serif",
                      color: "#5c3d35",
                      fontSize: "0.9rem",
                      lineHeight: 1.72,
                    },
                    children: i,
                  }),
                }),
            }),
          ],
        });
      },
      "CookieBadge",
      0,
      function ({ category: a }) {
        let c = {
            Notwendig: { bg: "#b34832", text: "#fefefe" },
            Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
            Statistik: { bg: "#7a584c", text: "#fefefe" },
            Marketing: { bg: "#5c3d35", text: "#fefefe" },
          },
          d = c[a] || c.Notwendig;
        return (0, b.jsx)("span", {
          style: {
            background: d.bg,
            color: d.text,
            padding: "3px 12px",
            borderRadius: 50,
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.03em",
          },
          children: a,
        });
      },
      "LegalPageLayout",
      0,
      function ({
        title: a,
        subtitle: e,
        children: h,
        lastUpdated: i = "Mai 2026",
      }) {
        let k = (0, c.useRef)(null),
          { scrollYProgress: l } = (0, f.useScroll)({ target: k }),
          m = (0, g.useSpring)(l, { stiffness: 100, damping: 30 });
        return (0, b.jsxs)("div", {
          ref: k,
          style: { minHeight: "100vh", background: "#fefefe" },
          children: [
            (0, b.jsx)(d.motion.div, {
              style: {
                position: "fixed",
                top: 68,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #b34832, #E4C0A8)",
                transformOrigin: "left",
                scaleX: m,
                zIndex: 100,
              },
            }),
            (0, b.jsxs)("div", {
              style: {
                background: "linear-gradient(180deg, #eedfcc 0%, #f5efe8 100%)",
                paddingTop: 120,
                paddingBottom: 48,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              },
              children: [
                (0, b.jsx)("div", {
                  style: {
                    position: "absolute",
                    top: 80,
                    right: "10%",
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "rgba(204,98,76,0.06)",
                    animation: "blobFloat 9s ease-in-out infinite",
                  },
                }),
                (0, b.jsx)("div", {
                  style: {
                    position: "absolute",
                    bottom: 20,
                    left: "5%",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(228,192,168,0.15)",
                    animation: "blobFloat 12s ease-in-out infinite reverse",
                  },
                }),
                (0, b.jsxs)(d.motion.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, b.jsxs)("div", {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(204,98,76,0.1)",
                        padding: "6px 16px",
                        borderRadius: 50,
                        marginBottom: 16,
                      },
                      children: [
                        (0, b.jsx)(j.Shield, { size: 14, color: "#b34832" }),
                        (0, b.jsx)("span", {
                          style: {
                            fontFamily: "var(--font-nunito), sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#b34832",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          },
                          children: "Rechtlich auf der sicheren Seite",
                        }),
                      ],
                    }),
                    (0, b.jsx)("h1", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        color: "#2d1f19",
                        margin: "0 0 8px",
                      },
                      children: a,
                    }),
                    (0, b.jsx)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "1rem",
                        margin: 0,
                      },
                      children: e,
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsxs)("div", {
              style: {
                maxWidth: 820,
                margin: "0 auto",
                padding: "48px 24px 96px",
              },
              children: [
                h,
                (0, b.jsxs)(d.motion.div, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  style: {
                    marginTop: 56,
                    padding: "16px 24px",
                    background:
                      "linear-gradient(135deg, #eedfcc 0%, #f5efe8 100%)",
                    borderRadius: 16,
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: "0.78rem",
                    color: "#7a584c",
                    textAlign: "center",
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children: [
                    "Stand: ",
                    i,
                    " · Diese Seite dient der Information und ersetzt keine Rechtsberatung.",
                  ],
                }),
              ],
            }),
            (0, b.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: `
        @keyframes blobFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(6px,-10px)} 66%{transform:translate(-5px,7px)} }
      `,
              },
            }),
          ],
        });
      },
      "RightCard",
      0,
      function ({ right: a, article: c }) {
        return (0, b.jsxs)(d.motion.div, {
          whileHover: { y: -3, boxShadow: "0 8px 24px rgba(204,98,76,0.12)" },
          transition: { type: "spring", stiffness: 300, damping: 20 },
          style: {
            background: "rgba(238,223,204,0.5)",
            borderRadius: 14,
            padding: "14px 18px",
            cursor: "default",
            border: "1px solid rgba(228,192,168,0.3)",
          },
          children: [
            (0, b.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 2,
              },
              children: [
                (0, b.jsx)(i.CheckCircle2, { size: 14, color: "#b34832" }),
                (0, b.jsx)("span", {
                  style: {
                    fontWeight: 800,
                    color: "#2d1f19",
                    fontSize: "0.85rem",
                  },
                  children: a,
                }),
              ],
            }),
            (0, b.jsx)("span", {
              style: { fontSize: "0.72rem", color: "#7a584c", fontWeight: 600 },
              children: c,
            }),
          ],
        });
      },
    ]);
  },
  469196,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(64),
      d = a.i(178623),
      e = a.i(346271),
      f = a.i(845474);
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsx)(c.LegalPageLayout, {
          title: "Cookie-Richtlinie",
          subtitle:
            "Details zu allen eingesetzten Cookies und Technologien auf Hey Fede!",
          lastUpdated: "Juni 2026",
          children: (0, b.jsxs)("div", {
            style: {
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: "0.9rem",
              color: "#5c3d35",
              lineHeight: 1.7,
            },
            children: [
              (0, b.jsx)("p", {
                style: { marginBottom: 24 },
                children:
                  "Diese Cookie-Richtlinie erklärt, was Cookies sind und wie wir sie auf unserer Website verwenden. Du solltest diese Richtlinie lesen, um zu verstehen, welche Arten von Cookies wir verwenden, welche Informationen wir mit Cookies sammeln und wie diese Informationen verwendet werden.",
              }),
              (0, b.jsxs)("p", {
                style: { marginBottom: 24 },
                children: [
                  "Deine Zustimmung gilt für die folgende Domain: ",
                  (0, b.jsx)("strong", { children: "hey-fede.de" }),
                  " (sowie etwaige Subdomains).",
                ],
              }),
              (0, b.jsx)("h2", {
                style: {
                  fontFamily: "var(--font-calistoga), serif",
                  fontSize: "1.6rem",
                  color: "#2d1f19",
                  marginBottom: 16,
                },
                children: "1. Was sind Cookies?",
              }),
              (0, b.jsx)("p", {
                style: { marginBottom: 24 },
                children:
                  "Cookies sind kleine Textdateien, die dazu verwendet werden, kleine Informationen zu speichern. Sie werden auf deinem Gerät gespeichert, wenn die Website in deinem Browser geladen wird. Diese Cookies helfen uns, die Website ordnungsgemäß funktionieren zu lassen, sie sicherer zu machen, eine bessere Benutzererfahrung zu bieten und zu verstehen, wie die Website funktioniert, sowie zu analysieren, was funktioniert und wo Verbesserungen nötig sind.",
              }),
              (0, b.jsx)("h2", {
                style: {
                  fontFamily: "var(--font-calistoga), serif",
                  fontSize: "1.6rem",
                  color: "#2d1f19",
                  marginBottom: 16,
                },
                children: "2. Wie verwenden wir Cookies?",
              }),
              (0, b.jsxs)("p", {
                style: { marginBottom: 24 },
                children: [
                  "Wie die meisten Online-Dienste verwendet unsere Website First-Party- und Third-Party-Cookies für verschiedene Zwecke. Die First-Party-Cookies (Erstanbieter) sind meistens notwendig, damit die Website richtig funktioniert. Sie sammeln keine deiner persönlich identifizierbaren Daten. ",
                  (0, b.jsx)("br", {}),
                  (0, b.jsx)("br", {}),
                  "Die Third-Party-Cookies (Drittanbieter), die auf unserer Website verwendet werden, dienen hauptsächlich dazu, zu verstehen, wie die Website funktioniert, wie du mit unserer Website interagierst, unsere Dienste sicher zu halten, dir irrelevante Werbung fernzuhalten und dir alles in allem eine bessere und verbesserte Benutzererfahrung zu bieten.",
                ],
              }),
              (0, b.jsx)("h2", {
                style: {
                  fontFamily: "var(--font-calistoga), serif",
                  fontSize: "1.6rem",
                  color: "#2d1f19",
                  marginBottom: 16,
                },
                children: "3. Welche Arten von Cookies verwenden wir?",
              }),
              (0, b.jsx)("div", {
                style: { display: "grid", gap: 12, marginBottom: 32 },
                children: [
                  {
                    name: "cc_cookie",
                    provider: "Hey Fede!",
                    purpose:
                      "Speichert deine getroffenen Cookie-Einwilligungen und -Ablehnungen, damit das Banner nicht ständig neu erscheint.",
                    duration: "6 Monate",
                    category: "Notwendig",
                  },
                  {
                    name: "__session",
                    provider: "Firebase Auth",
                    purpose:
                      "Verwaltung der aktiven Login-Sitzung, wenn du ein Konto bei uns erstellt hast.",
                    duration: "Sitzung",
                    category: "Notwendig",
                  },
                  {
                    name: "splash_shown",
                    provider: "Hey Fede!",
                    purpose:
                      "Stellt sicher, dass die Eintrittsanimation (Splash-Screen) pro Sitzung nur einmalig abgespielt wird.",
                    duration: "Sitzung",
                    category: "Notwendig",
                  },
                  {
                    name: "hf_ach_*",
                    provider: "Hey Fede!",
                    purpose:
                      "Speichert deinen Fortschritt bei versteckten Easter Eggs und Achievements (Gamification) lokal in deinem Browser.",
                    duration: "Dauerhaft (Local Storage)",
                    category: "Funktional",
                  },
                  {
                    name: "NID / 1P_JAR",
                    provider: "Google Maps",
                    purpose:
                      "Wird von Google gesetzt, um Nutzereinstellungen und Informationen zu speichern, wenn du die interaktive Anfahrtskarte ansiehst.",
                    duration: "6 Monate",
                    category: "Funktional",
                  },
                ].map((a) =>
                  (0, b.jsxs)(
                    e.motion.div,
                    {
                      whileHover: { x: 4 },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      },
                      style: {
                        background: "#f5efe8",
                        borderRadius: 16,
                        padding: "16px 20px",
                        border: "1px solid rgba(228,192,168,0.3)",
                      },
                      children: [
                        (0, b.jsxs)("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 12,
                            marginBottom: 8,
                          },
                          children: [
                            (0, b.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                color: "#2d1f19",
                              },
                              children: a.name,
                            }),
                            (0, b.jsx)(c.CookieBadge, { category: a.category }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          style: {
                            fontSize: "0.85rem",
                            color: "#5c3d35",
                            marginBottom: 6,
                          },
                          children: [
                            (0, b.jsx)("strong", { children: "Anbieter:" }),
                            " ",
                            a.provider,
                            " | ",
                            (0, b.jsx)("strong", { children: "Dauer:" }),
                            " ",
                            a.duration,
                          ],
                        }),
                        (0, b.jsx)("div", {
                          style: { fontSize: "0.85rem", color: "#5c3d35" },
                          children: a.purpose,
                        }),
                      ],
                    },
                    a.name,
                  ),
                ),
              }),
              (0, b.jsx)("h2", {
                style: {
                  fontFamily: "var(--font-calistoga), serif",
                  fontSize: "1.6rem",
                  color: "#2d1f19",
                  marginBottom: 16,
                },
                children: "4. Verwalte deine Einstellungen",
              }),
              (0, b.jsx)("p", {
                style: { marginBottom: 24 },
                children:
                  "Du kannst deine Cookie-Präferenzen jederzeit ändern, indem du auf die Schaltfläche unten klickst. Dies ermöglicht dir, das Einwilligungsbanner erneut aufzurufen und deine Präferenzen zu ändern oder deine Einwilligung sofort zu widerrufen.",
              }),
              (0, b.jsxs)(e.motion.button, {
                whileHover: { scale: 1.02, y: -2 },
                whileTap: { scale: 0.98 },
                onClick: () => f.showPreferences(),
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  background: "#b34832",
                  color: "#fefefe",
                  border: "none",
                  borderRadius: 50,
                  cursor: "pointer",
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  boxShadow: "0 6px 20px rgba(204,98,76,0.3)",
                },
                children: [
                  (0, b.jsx)(d.Cookie, { size: 18 }),
                  " Cookie-Einstellungen aufrufen",
                ],
              }),
            ],
          }),
        });
      },
    ]);
  },
];

//# sourceMappingURL=_0ilwox-._.js.map
