(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  290135,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  96315,
  (e) => {
    "use strict";
    var t = e.i(290135);
    e.s(["Mail", () => t.default]);
  },
  203029,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("shield", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  26495,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("chevron-down", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
    ]);
    e.s(["default", 0, t]);
  },
  616933,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    e.s(["default", 0, t]);
  },
  716327,
  (e) => {
    "use strict";
    var t = e.i(26495);
    e.s(["ChevronDown", () => t.default]);
  },
  982954,
  (e) => {
    "use strict";
    var t = e.i(203029);
    e.s(["Shield", () => t.default]);
  },
  551757,
  (e) => {
    "use strict";
    var t = e.i(616933);
    e.s(["CheckCircle2", () => t.default]);
  },
  863286,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(846932),
      i = e.i(88653),
      s = e.i(310542),
      a = e.i(591994),
      d = e.i(716327),
      l = e.i(551757),
      o = e.i(982954);
    function c({ children: e, color: n = "#b34832" }) {
      return (0, t.jsx)("div", {
        style: {
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: n,
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
        title: a,
        children: l,
        defaultOpen: o = !1,
      }) {
        let [h, u] = (0, n.useState)(o);
        return (0, t.jsxs)(r.motion.div, {
          layout: !0,
          style: {
            background: h ? "rgba(245,239,232,0.6)" : "transparent",
            borderRadius: 18,
            border: h
              ? "1px solid rgba(228,192,168,0.4)"
              : "1px solid transparent",
            marginBottom: 8,
            overflow: "hidden",
            transition: "background 0.3s, border 0.3s",
          },
          children: [
            (0, t.jsxs)("button", {
              onClick: () => u(!h),
              "aria-expanded": h,
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
                (0, t.jsx)(c, { children: e }),
                (0, t.jsxs)("div", {
                  style: { flex: 1 },
                  children: [
                    s &&
                      (0, t.jsx)("span", {
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
                    (0, t.jsx)("div", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.05rem",
                        color: "#2d1f19",
                      },
                      children: a,
                    }),
                  ],
                }),
                (0, t.jsx)(r.motion.div, {
                  animate: { rotate: 180 * !!h },
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                  children: (0, t.jsx)(d.ChevronDown, {
                    size: 20,
                    color: "#7a584c",
                  }),
                }),
              ],
            }),
            (0, t.jsx)(i.AnimatePresence, {
              initial: !1,
              children:
                h &&
                (0, t.jsx)(r.motion.div, {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  style: { overflow: "hidden" },
                  children: (0, t.jsx)("div", {
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
        let n = {
            Notwendig: { bg: "#b34832", text: "#fefefe" },
            Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
            Statistik: { bg: "#7a584c", text: "#fefefe" },
            Marketing: { bg: "#5c3d35", text: "#fefefe" },
          },
          r = n[e] || n.Notwendig;
        return (0, t.jsx)("span", {
          style: {
            background: r.bg,
            color: r.text,
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
        subtitle: i,
        children: d,
        lastUpdated: l = "Mai 2026",
      }) {
        let c = (0, n.useRef)(null),
          { scrollYProgress: h } = (0, s.useScroll)({ target: c }),
          u = (0, a.useSpring)(h, { stiffness: 100, damping: 30 });
        return (0, t.jsxs)("div", {
          ref: c,
          style: { minHeight: "100vh", background: "#fefefe" },
          children: [
            (0, t.jsx)(r.motion.div, {
              style: {
                position: "fixed",
                top: 68,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #b34832, #E4C0A8)",
                transformOrigin: "left",
                scaleX: u,
                zIndex: 100,
              },
            }),
            (0, t.jsxs)("div", {
              style: {
                background: "linear-gradient(180deg, #eedfcc 0%, #f5efe8 100%)",
                paddingTop: 120,
                paddingBottom: 48,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              },
              children: [
                (0, t.jsx)("div", {
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
                (0, t.jsx)("div", {
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
                (0, t.jsxs)(r.motion.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, t.jsxs)("div", {
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
                        (0, t.jsx)(o.Shield, { size: 14, color: "#b34832" }),
                        (0, t.jsx)("span", {
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
                    (0, t.jsx)("h1", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        color: "#2d1f19",
                        margin: "0 0 8px",
                      },
                      children: e,
                    }),
                    (0, t.jsx)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "1rem",
                        margin: 0,
                      },
                      children: i,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              style: {
                maxWidth: 820,
                margin: "0 auto",
                padding: "48px 24px 96px",
              },
              children: [
                d,
                (0, t.jsxs)(r.motion.div, {
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
            (0, t.jsx)("style", {
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
      function ({ right: e, article: n }) {
        return (0, t.jsxs)(r.motion.div, {
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
            (0, t.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 2,
              },
              children: [
                (0, t.jsx)(l.CheckCircle2, { size: 14, color: "#b34832" }),
                (0, t.jsx)("span", {
                  style: {
                    fontWeight: 800,
                    color: "#2d1f19",
                    fontSize: "0.85rem",
                  },
                  children: e,
                }),
              ],
            }),
            (0, t.jsx)("span", {
              style: { fontSize: "0.72rem", color: "#7a584c", fontWeight: 600 },
              children: n,
            }),
          ],
        });
      },
    ]);
  },
  832411,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("lock", [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1",
        },
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
    ]);
    e.s(["default", 0, t]);
  },
  806537,
  (e) => {
    "use strict";
    var t = e.i(832411);
    e.s(["Lock", () => t.default]);
  },
  755566,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("triangle-alert", [
      [
        "path",
        {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
          key: "wmoenq",
        },
      ],
      ["path", { d: "M12 9v4", key: "juzpu7" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
    ]);
    e.s(["default", 0, t]);
  },
  374491,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("file-text", [
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
    e.s(["default", 0, t]);
  },
  571974,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("scale", [
      ["path", { d: "M12 3v18", key: "108xh3" }],
      ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
      [
        "path",
        { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" },
      ],
      ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
      ["path", { d: "M7 21h10", key: "1b0cd5" }],
    ]);
    e.s(["default", 0, t]);
  },
  935046,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("database", [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
    ]);
    e.s(["default", 0, t]);
  },
  461064,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("server", [
      [
        "rect",
        {
          width: "20",
          height: "8",
          x: "2",
          y: "2",
          rx: "2",
          ry: "2",
          key: "ngkwjq",
        },
      ],
      [
        "rect",
        {
          width: "20",
          height: "8",
          x: "2",
          y: "14",
          rx: "2",
          ry: "2",
          key: "iecqi9",
        },
      ],
      ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
      ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
    ]);
    e.s(["default", 0, t]);
  },
  22866,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("eye", [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0",
        },
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ]);
    e.s(["default", 0, t]);
  },
  853138,
  (e) => {
    "use strict";
    var t = e.i(755566);
    e.s(["AlertTriangle", () => t.default]);
  },
  226091,
  (e) => {
    "use strict";
    var t = e.i(374491);
    e.s(["FileText", () => t.default]);
  },
  162382,
  (e) => {
    "use strict";
    var t = e.i(571974);
    e.s(["Scale", () => t.default]);
  },
  809584,
  (e) => {
    "use strict";
    var t = e.i(935046);
    e.s(["Database", () => t.default]);
  },
  841220,
  (e) => {
    "use strict";
    var t = e.i(461064);
    e.s(["Server", () => t.default]);
  },
  772382,
  (e) => {
    "use strict";
    var t = e.i(22866);
    e.s(["Eye", () => t.default]);
  },
  342548,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(863286),
      r = e.i(982954),
      i = e.i(809584),
      s = e.i(162382),
      a = e.i(841220),
      d = e.i(96315),
      l = e.i(853138),
      o = e.i(772382),
      c = e.i(806537),
      h = e.i(226091),
      u = e.i(318028);
    e.s([
      "default",
      0,
      function () {
        return (0, t.jsxs)(n.LegalPageLayout, {
          title: "Datenschutzerklärung",
          subtitle:
            "Transparenz über die Verarbeitung deiner personenbezogenen Daten nach der DSGVO.",
          lastUpdated: "Juni 2026",
          children: [
            (0, t.jsxs)(n.AccordionSection, {
              icon: (0, t.jsx)(r.Shield, { size: 14 }),
              number: "01",
              title: "1. Datenschutz auf einen Blick",
              defaultOpen: !0,
              children: [
                (0, t.jsx)("h3", {
                  style: {
                    fontWeight: 800,
                    marginTop: 12,
                    marginBottom: 8,
                    color: "#2d1f19",
                  },
                  children: "Allgemeine Hinweise",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.",
                }),
                (0, t.jsx)("h3", {
                  style: {
                    fontWeight: 800,
                    marginTop: 16,
                    marginBottom: 8,
                    color: "#2d1f19",
                  },
                  children: "Datenerfassung auf dieser Website",
                }),
                (0, t.jsx)("p", {
                  children: (0, t.jsx)("strong", {
                    children: "Wer ist verantwortlich für die Datenerfassung?",
                  }),
                }),
                (0, t.jsxs)("p", {
                  children: [
                    "Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café",
                    (0, t.jsx)("br", {}),
                    u.FULL_ADDRESS,
                    (0, t.jsx)("br", {}),
                    "E-Mail: ",
                    (0, t.jsx)("span", {
                      style: { fontWeight: 700, color: "#b34832" },
                      children: "datenschutz@hey-fede.de",
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)(n.AccordionSection, {
              icon: (0, t.jsx)(i.Database, { size: 14 }),
              number: "02",
              title: "2. Erhobene Daten & Hosting",
              children: [
                (0, t.jsx)("p", {
                  style: { marginBottom: 12 },
                  children:
                    "Für die Nutzung unserer Website und den Vorbestellservice erfassen wir:",
                }),
                (0, t.jsxs)("ul", {
                  style: {
                    paddingLeft: 20,
                    listStyleType: "disc",
                    marginBottom: 16,
                  },
                  children: [
                    (0, t.jsx)("li", {
                      children:
                        "Name & Handynummer (für Rückfragen zur Abholung)",
                    }),
                    (0, t.jsx)("li", {
                      children:
                        "E-Mail-Adresse (für Bestellbestätigung & Kontoanmeldung)",
                    }),
                    (0, t.jsx)("li", {
                      children:
                        "Bestelldaten (zur Zubereitung deiner Bestellung)",
                    }),
                    (0, t.jsx)("li", {
                      children:
                        "Technische Daten: IP-Adresse, Browser-Typ, Gerät, Betriebssystem (durch unseren Hoster)",
                    }),
                  ],
                }),
                (0, t.jsx)("h3", {
                  style: {
                    fontWeight: 800,
                    marginTop: 16,
                    marginBottom: 8,
                    color: "#2d1f19",
                  },
                  children: "Externes Hosting",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Diese Website wird extern gehostet (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.",
                }),
              ],
            }),
            (0, t.jsxs)(n.AccordionSection, {
              icon: (0, t.jsx)(s.Scale, { size: 14 }),
              number: "03",
              title: "3. Rechtsgrundlagen der Verarbeitung",
              children: [
                (0, t.jsx)("p", {
                  children:
                    "Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutz-Grundverordnung (DSGVO) als Rechtsgrundlage.",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.",
                }),
              ],
            }),
            (0, t.jsx)(n.AccordionSection, {
              icon: (0, t.jsx)(o.Eye, { size: 14 }),
              number: "04",
              title: "4. Drittanbieter & Empfänger",
              children: (0, t.jsx)("div", {
                style: { overflowX: "auto" },
                children: (0, t.jsxs)("table", {
                  style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "0.82rem",
                  },
                  children: [
                    (0, t.jsx)("thead", {
                      children: (0, t.jsx)("tr", {
                        style: { background: "rgba(238,223,204,0.6)" },
                        children: ["Dienst", "Anbieter", "Zweck"].map((e) =>
                          (0, t.jsx)(
                            "th",
                            {
                              style: {
                                padding: "10px 14px",
                                fontWeight: 800,
                                color: "#2d1f19",
                                textAlign: "left",
                                fontSize: "0.72rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                borderBottom: "1px solid rgba(228,192,168,0.4)",
                              },
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                    (0, t.jsx)("tbody", {
                      children: [
                        [
                          "Firebase Auth",
                          "Google Ireland Ltd",
                          "Nutzer-Authentifizierung",
                        ],
                        [
                          "Firebase Firestore",
                          "Google Ireland Ltd",
                          "Speicherung von Bestellungen",
                        ],
                        ["Vercel", "Vercel Inc., USA", "Website-Hosting & CDN"],
                        [
                          "Google Maps",
                          "Google Ireland Ltd",
                          "Interaktive Karte (nach Einwilligung)",
                        ],
                      ].map(([e, n, r], i) =>
                        (0, t.jsxs)(
                          "tr",
                          {
                            style: {
                              borderBottom: "1px solid rgba(228,192,168,0.25)",
                            },
                            children: [
                              (0, t.jsx)("td", {
                                style: {
                                  padding: "10px 14px",
                                  fontWeight: 700,
                                },
                                children: e,
                              }),
                              (0, t.jsx)("td", {
                                style: { padding: "10px 14px" },
                                children: n,
                              }),
                              (0, t.jsx)("td", {
                                style: { padding: "10px 14px" },
                                children: r,
                              }),
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(n.AccordionSection, {
              icon: (0, t.jsx)(a.Server, { size: 14 }),
              number: "05",
              title: "5. Drittlandtransfer (USA)",
              children: (0, t.jsxs)("p", {
                children: [
                  "Einige der eingesetzten Dienste (z. B. Google, Vercel) haben ihren Sitz in den USA oder übertragen Daten auf US-Server. Die Datenübermittlung in die USA erfolgt auf Grundlage des ",
                  (0, t.jsx)("strong", {
                    children: "EU-US Data Privacy Framework",
                  }),
                  " (Angemessenheitsbeschluss gem. Art. 45 DSGVO) sowie ergänzend auf Basis von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).",
                ],
              }),
            }),
            (0, t.jsx)(n.AccordionSection, {
              icon: (0, t.jsx)(h.FileText, { size: 14 }),
              number: "06",
              title: "6. Speicherdauer",
              children: (0, t.jsxs)("ul", {
                style: { paddingLeft: 20, listStyleType: "disc" },
                children: [
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", { children: "Bestelldaten:" }),
                      " 90 Tage nach Abholung (automatische Löschung zur Entlastung des Systems)",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", { children: "Kontodaten:" }),
                      " Bis zur Löschung deines Kontos durch dich",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", { children: "Server-Logs:" }),
                      " Maximal 30 Tage",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", { children: "Kontaktanfragen:" }),
                      " 6 Monate nach Abschluss der Bearbeitung",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", {
                        children: "Steuerrelevante Daten:",
                      }),
                      " 10 Jahre (gesetzliche Aufbewahrungspflicht nach HGB und AO)",
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsxs)(n.AccordionSection, {
              icon: (0, t.jsx)(c.Lock, { size: 14 }),
              number: "07",
              title: "7. Deine Rechte (Betroffenenrechte)",
              children: [
                (0, t.jsx)("p", {
                  style: { marginBottom: 12 },
                  children:
                    "Nach der DSGVO stehen dir jederzeit folgende Rechte zu:",
                }),
                (0, t.jsx)("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                    gap: 8,
                  },
                  children: [
                    ["Auskunft", "Art. 15 DSGVO"],
                    ["Berichtigung", "Art. 16 DSGVO"],
                    ["Löschung", "Art. 17 DSGVO"],
                    ["Einschränkung", "Art. 18 DSGVO"],
                    ["Datenübertragbarkeit", "Art. 20 DSGVO"],
                    ["Widerspruch", "Art. 21 DSGVO"],
                  ].map(([e, r]) =>
                    (0, t.jsx)(n.RightCard, { right: e, article: r }, e),
                  ),
                }),
                (0, t.jsxs)("p", {
                  style: { marginTop: 16 },
                  children: [
                    "Möchtest du von deinen Rechten Gebrauch machen, kontaktiere uns einfach unter",
                    " ",
                    (0, t.jsx)("span", {
                      style: { fontWeight: 700, color: "#b34832" },
                      children: "datenschutz@hey-fede.de",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            (0, t.jsx)(n.AccordionSection, {
              icon: (0, t.jsx)(d.Mail, { size: 14 }),
              number: "08",
              title: "8. Kontaktformular & E-Mail-Kontakt",
              children: (0, t.jsx)("p", {
                children:
                  "Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine Angaben aus dem Formular bzw. der E-Mail inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt, oder auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) an der effektiven Bearbeitung der Anfragen.",
              }),
            }),
            (0, t.jsxs)(n.AccordionSection, {
              icon: (0, t.jsx)(l.AlertTriangle, { size: 14 }),
              number: "09",
              title: "9. Beschwerderecht bei der Aufsichtsbehörde",
              children: [
                (0, t.jsx)("p", {
                  children:
                    "Im Falle von Verstößen gegen die DSGVO steht dir ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat deines gewöhnlichen Aufenthalts, deines Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes (Art. 77 DSGVO).",
                }),
                (0, t.jsxs)("div", {
                  style: {
                    background: "rgba(238,223,204,0.5)",
                    borderRadius: 14,
                    padding: 16,
                    marginTop: 12,
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children: [
                    (0, t.jsx)("strong", {
                      style: { color: "#2d1f19" },
                      children: "Unsere zuständige Behörde:",
                    }),
                    (0, t.jsx)("br", {}),
                    "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)",
                    (0, t.jsx)("br", {}),
                    "Postfach 3163, 65021 Wiesbaden",
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("a", {
                      href: "https://datenschutz.hessen.de",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        color: "#b34832",
                        fontWeight: 700,
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                      },
                      children: "datenschutz.hessen.de",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
