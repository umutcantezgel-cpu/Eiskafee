(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  343420,
  (e) => {
    "use strict";
    let i = (0, e.i(456420).default)("info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]);
    e.s(["default", 0, i]);
  },
  810818,
  (e) => {
    "use strict";
    var i = e.i(343420);
    e.s(["Info", () => i.default]);
  },
  203029,
  (e) => {
    "use strict";
    let i = (0, e.i(456420).default)("shield", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
    ]);
    e.s(["default", 0, i]);
  },
  26495,
  (e) => {
    "use strict";
    let i = (0, e.i(456420).default)("chevron-down", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
    ]);
    e.s(["default", 0, i]);
  },
  616933,
  (e) => {
    "use strict";
    let i = (0, e.i(456420).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    e.s(["default", 0, i]);
  },
  716327,
  (e) => {
    "use strict";
    var i = e.i(26495);
    e.s(["ChevronDown", () => i.default]);
  },
  982954,
  (e) => {
    "use strict";
    var i = e.i(203029);
    e.s(["Shield", () => i.default]);
  },
  551757,
  (e) => {
    "use strict";
    var i = e.i(616933);
    e.s(["CheckCircle2", () => i.default]);
  },
  863286,
  (e) => {
    "use strict";
    var i = e.i(843476),
      t = e.i(271645),
      n = e.i(846932),
      r = e.i(88653),
      s = e.i(310542),
      o = e.i(591994),
      a = e.i(716327),
      l = e.i(551757),
      d = e.i(982954);
    function c({ children: e, color: t = "#b34832" }) {
      return (0, i.jsx)("div", {
        style: {
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: t,
          color: "#fefefe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        },
        children: e,
      });
    }
    e.s([
      "AccordionSection",
      0,
      function ({
        icon: e,
        number: s,
        title: o,
        children: l,
        defaultOpen: d = !1,
      }) {
        let [f, h] = (0, t.useState)(d);
        return (0, i.jsxs)(n.motion.div, {
          layout: !0,
          style: {
            background: f ? "rgba(245,239,232,0.6)" : "transparent",
            borderRadius: 18,
            border: f
              ? "1px solid rgba(228,192,168,0.4)"
              : "1px solid transparent",
            marginBottom: 8,
            overflow: "hidden",
            transition: "background 0.3s, border 0.3s",
          },
          children: [
            (0, i.jsxs)("button", {
              onClick: () => h(!f),
              "aria-expanded": f,
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
                (0, i.jsx)(c, { children: e }),
                (0, i.jsxs)("div", {
                  style: { flex: 1 },
                  children: [
                    s &&
                      (0, i.jsx)("span", {
                        style: {
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          color: "#b34832",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        },
                        children: s,
                      }),
                    (0, i.jsx)("div", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.05rem",
                        color: "#2d1f19",
                      },
                      children: o,
                    }),
                  ],
                }),
                (0, i.jsx)(n.motion.div, {
                  animate: { rotate: 180 * !!f },
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                  children: (0, i.jsx)(a.ChevronDown, {
                    size: 20,
                    color: "#7a584c",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(r.AnimatePresence, {
              initial: !1,
              children:
                f &&
                (0, i.jsx)(n.motion.div, {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  style: { overflow: "hidden" },
                  children: (0, i.jsx)("div", {
                    style: {
                      padding: "0 20px 20px 64px",
                      fontFamily: "var(--font-nunito), sans-serif",
                      color: "#5c3d35",
                      fontSize: "0.9rem",
                      lineHeight: 1.72,
                    },
                    children: l,
                  }),
                }),
            }),
          ],
        });
      },
      "CookieBadge",
      0,
      function ({ category: e }) {
        let t = {
            Notwendig: { bg: "#b34832", text: "#fefefe" },
            Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
            Statistik: { bg: "#7a584c", text: "#fefefe" },
            Marketing: { bg: "#5c3d35", text: "#fefefe" },
          },
          n = t[e] || t.Notwendig;
        return (0, i.jsx)("span", {
          style: {
            background: n.bg,
            color: n.text,
            padding: "3px 12px",
            borderRadius: 50,
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.03em",
          },
          children: e,
        });
      },
      "LegalPageLayout",
      0,
      function ({
        title: e,
        subtitle: r,
        children: a,
        lastUpdated: l = "Mai 2026",
      }) {
        let c = (0, t.useRef)(null),
          { scrollYProgress: f } = (0, s.useScroll)({ target: c }),
          h = (0, o.useSpring)(f, { stiffness: 100, damping: 30 });
        return (0, i.jsxs)("div", {
          ref: c,
          style: { minHeight: "100vh", background: "#fefefe" },
          children: [
            (0, i.jsx)(n.motion.div, {
              style: {
                position: "fixed",
                top: 68,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #b34832, #E4C0A8)",
                transformOrigin: "left",
                scaleX: h,
                zIndex: 100,
              },
            }),
            (0, i.jsxs)("div", {
              style: {
                background: "linear-gradient(180deg, #eedfcc 0%, #f5efe8 100%)",
                paddingTop: 120,
                paddingBottom: 48,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              },
              children: [
                (0, i.jsx)("div", {
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
                (0, i.jsx)("div", {
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
                (0, i.jsxs)(n.motion.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, i.jsxs)("div", {
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
                        (0, i.jsx)(d.Shield, { size: 14, color: "#b34832" }),
                        (0, i.jsx)("span", {
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
                    (0, i.jsx)("h1", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        color: "#2d1f19",
                        margin: "0 0 8px",
                      },
                      children: e,
                    }),
                    (0, i.jsx)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "1rem",
                        margin: 0,
                      },
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              style: {
                maxWidth: 820,
                margin: "0 auto",
                padding: "48px 24px 96px",
              },
              children: [
                a,
                (0, i.jsxs)(n.motion.div, {
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
                    l,
                    " · Diese Seite dient der Information und ersetzt keine Rechtsberatung.",
                  ],
                }),
              ],
            }),
            (0, i.jsx)("style", {
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
      function ({ right: e, article: t }) {
        return (0, i.jsxs)(n.motion.div, {
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
            (0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 2,
              },
              children: [
                (0, i.jsx)(l.CheckCircle2, { size: 14, color: "#b34832" }),
                (0, i.jsx)("span", {
                  style: {
                    fontWeight: 800,
                    color: "#2d1f19",
                    fontSize: "0.85rem",
                  },
                  children: e,
                }),
              ],
            }),
            (0, i.jsx)("span", {
              style: { fontSize: "0.72rem", color: "#7a584c", fontWeight: 600 },
              children: t,
            }),
          ],
        });
      },
    ]);
  },
  723375,
  (e) => {
    "use strict";
    let i = (0, e.i(456420).default)("building-2", [
      ["path", { d: "M10 12h4", key: "a56b0p" }],
      ["path", { d: "M10 8h4", key: "1sr2af" }],
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
      [
        "path",
        {
          d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
          key: "secmi2",
        },
      ],
      [
        "path",
        { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" },
      ],
    ]);
    e.s(["default", 0, i]);
  },
  374491,
  (e) => {
    "use strict";
    let i = (0, e.i(456420).default)("file-text", [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6",
        },
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M10 9H8", key: "b1mrlr" }],
      ["path", { d: "M16 13H8", key: "t4e002" }],
      ["path", { d: "M16 17H8", key: "z1uh3a" }],
    ]);
    e.s(["default", 0, i]);
  },
  226091,
  (e) => {
    "use strict";
    var i = e.i(374491);
    e.s(["FileText", () => i.default]);
  },
  146387,
  (e) => {
    "use strict";
    var i = e.i(723375);
    e.s(["Building2", () => i.default]);
  },
  997929,
  (e) => {
    "use strict";
    var i = e.i(843476),
      t = e.i(863286),
      n = e.i(846932),
      r = e.i(146387),
      s = e.i(575387),
      o = e.i(226091),
      a = e.i(810818),
      l = e.i(318028);
    e.s([
      "default",
      0,
      function () {
        return (0, i.jsxs)(t.LegalPageLayout, {
          title: "Impressum",
          subtitle: "Informationen gemäß § 5 TMG / § 5 DDG und § 18 MStV.",
          lastUpdated: "Juni 2026",
          children: [
            (0, i.jsxs)("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              },
              children: [
                (0, i.jsxs)(n.motion.div, {
                  whileHover: { y: -4 },
                  style: {
                    background: "#f5efe8",
                    borderRadius: 20,
                    padding: 24,
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children: [
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 12,
                      },
                      children: [
                        (0, i.jsx)(r.Building2, { size: 16, color: "#b34832" }),
                        (0, i.jsx)("h3", {
                          style: {
                            fontFamily: "var(--font-calistoga), serif",
                            color: "#2d1f19",
                            fontSize: "0.95rem",
                            margin: 0,
                          },
                          children: "Anbieter",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "0.88rem",
                        lineHeight: 1.7,
                        margin: 0,
                      },
                      children: [
                        "Hey Fede! Dessertbar & Café",
                        (0, i.jsx)("br", {}),
                        "Inhaberin: Federica Rossi",
                        (0, i.jsx)("br", {}),
                        l.BUSINESS.street,
                        (0, i.jsx)("br", {}),
                        l.BUSINESS.postalCode,
                        " ",
                        l.BUSINESS.city,
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(n.motion.div, {
                  whileHover: { y: -4 },
                  style: {
                    background: "#f5efe8",
                    borderRadius: 20,
                    padding: 24,
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children: [
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 12,
                      },
                      children: [
                        (0, i.jsx)(s.Phone, { size: 16, color: "#b34832" }),
                        (0, i.jsx)("h3", {
                          style: {
                            fontFamily: "var(--font-calistoga), serif",
                            color: "#2d1f19",
                            fontSize: "0.95rem",
                            margin: 0,
                          },
                          children: "Kontakt",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "0.88rem",
                        lineHeight: 1.7,
                        margin: 0,
                      },
                      children: [
                        "Tel: ",
                        l.BUSINESS.phone,
                        (0, i.jsx)("br", {}),
                        "WhatsApp: ",
                        l.BUSINESS.whatsappDisplay,
                        (0, i.jsx)("br", {}),
                        "E-Mail:",
                        " ",
                        (0, i.jsx)("a", {
                          href: "mailto:hallo@hey-fede.de",
                          style: {
                            color: "#b34832",
                            fontWeight: 700,
                            textDecoration: "none",
                          },
                          children: "hallo@hey-fede.de",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(n.motion.div, {
                  whileHover: { y: -4 },
                  style: {
                    background: "#f5efe8",
                    borderRadius: 20,
                    padding: 24,
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children: [
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 12,
                      },
                      children: [
                        (0, i.jsx)(o.FileText, { size: 16, color: "#b34832" }),
                        (0, i.jsx)("h3", {
                          style: {
                            fontFamily: "var(--font-calistoga), serif",
                            color: "#2d1f19",
                            fontSize: "0.95rem",
                            margin: 0,
                          },
                          children: "Steuernummer",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "0.88rem",
                        lineHeight: 1.7,
                        margin: 0,
                      },
                      children: [
                        "USt-IdNr. gem. § 27a UStG:",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("span", {
                          style: {
                            display: "inline-block",
                            background: "#eedfcc",
                            padding: "3px 10px",
                            borderRadius: 8,
                            fontFamily: "monospace",
                            fontSize: "0.85rem",
                            marginTop: 6,
                            color: "#b34832",
                            fontWeight: "bold",
                          },
                          children: "[IN BEARBEITUNG]",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(n.motion.div, {
                  whileHover: { y: -4 },
                  style: {
                    background: "#f5efe8",
                    borderRadius: 20,
                    padding: 24,
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children: [
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 12,
                      },
                      children: [
                        (0, i.jsx)(a.Info, { size: 16, color: "#b34832" }),
                        (0, i.jsx)("h3", {
                          style: {
                            fontFamily: "var(--font-calistoga), serif",
                            color: "#2d1f19",
                            fontSize: "0.95rem",
                            margin: 0,
                          },
                          children: "§ 18 Abs. 2 MStV",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "0.88rem",
                        lineHeight: 1.7,
                        margin: 0,
                      },
                      children: [
                        "Verantwortlich für den Inhalt:",
                        (0, i.jsx)("br", {}),
                        "Federica Rossi",
                        (0, i.jsx)("br", {}),
                        l.FULL_ADDRESS,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              style: {
                marginTop: 40,
                fontFamily: "var(--font-nunito), sans-serif",
                color: "#5c3d35",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              },
              children: [
                (0, i.jsx)("h2", {
                  style: {
                    fontFamily: "var(--font-calistoga), serif",
                    color: "#2d1f19",
                    fontSize: "1.4rem",
                    marginBottom: 16,
                  },
                  children: "EU-Streitschlichtung",
                }),
                (0, i.jsxs)("p", {
                  children: [
                    "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
                    " ",
                    (0, i.jsx)("a", {
                      href: "https://ec.europa.eu/consumers/odr/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "#b34832", textDecoration: "underline" },
                      children: "https://ec.europa.eu/consumers/odr/",
                    }),
                    ".",
                    (0, i.jsx)("br", {}),
                    "Unsere E-Mail-Adresse findest du oben im Impressum.",
                  ],
                }),
                (0, i.jsx)("h2", {
                  style: {
                    fontFamily: "var(--font-calistoga), serif",
                    color: "#2d1f19",
                    fontSize: "1.4rem",
                    marginTop: 32,
                    marginBottom: 16,
                  },
                  children:
                    "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
                }),
                (0, i.jsx)("p", {
                  children:
                    "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
                }),
                (0, i.jsx)("h2", {
                  style: {
                    fontFamily: "var(--font-calistoga), serif",
                    color: "#2d1f19",
                    fontSize: "1.4rem",
                    marginTop: 32,
                    marginBottom: 16,
                  },
                  children: "Haftung für Inhalte",
                }),
                (0, i.jsx)("p", {
                  children:
                    "Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
                }),
                (0, i.jsx)("p", {
                  children:
                    "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
