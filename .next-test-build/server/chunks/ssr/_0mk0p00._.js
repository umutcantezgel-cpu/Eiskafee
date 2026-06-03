module.exports = [
  483617,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]);
    a.s(["default", 0, b]);
  },
  752357,
  (a) => {
    "use strict";
    var b = a.i(483617);
    a.s(["Info", () => b.default]);
  },
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
  623577,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("triangle-alert", [
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
    a.s(["default", 0, b]);
  },
  390702,
  (a) => {
    "use strict";
    var b = a.i(623577);
    a.s(["AlertTriangle", () => b.default]);
  },
  540792,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("file-text", [
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
    a.s(["default", 0, b]);
  },
  483138,
  (a) => {
    "use strict";
    var b = a.i(540792);
    a.s(["FileText", () => b.default]);
  },
  218833,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(64),
      d = a.i(390702),
      e = a.i(752357),
      f = a.i(483138),
      g = a.i(346271),
      h = a.i(324429);
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsxs)(c.LegalPageLayout, {
          title: "Widerrufsbelehrung",
          subtitle:
            "Wichtige Hinweise zum Widerrufsrecht bei der Bestellung von Speisen und Getränken.",
          lastUpdated: "Juni 2026",
          children: [
            (0, b.jsxs)(g.motion.div, {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              style: {
                background:
                  "linear-gradient(135deg, rgba(204, 98, 76, 0.1) 0%, rgba(204, 98, 76, 0.05) 100%)",
                padding: 24,
                borderRadius: 20,
                marginBottom: 32,
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: "0.9rem",
                color: "#5c3d35",
                border: "1px solid rgba(204, 98, 76, 0.3)",
              },
              children: [
                (0, b.jsxs)("h3", {
                  style: {
                    fontFamily: "var(--font-calistoga), serif",
                    color: "#b34832",
                    fontSize: "1.2rem",
                    margin: "0 0 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  },
                  children: [
                    (0, b.jsx)(d.AlertTriangle, { size: 20, color: "#b34832" }),
                    " Ausschluss des Widerrufsrechts",
                  ],
                }),
                (0, b.jsxs)("p", {
                  style: { margin: 0, lineHeight: 1.6 },
                  children: [
                    "Da wir ausschließlich frisch zubereitete Speisen und Getränke anbieten (z. B. Bubble Waffles, Crêpes, Kaffee), die naturgemäß schnell verderben oder deren Verfallsdatum schnell überschritten würde, ",
                    (0, b.jsx)("strong", {
                      children:
                        "besteht gemäß § 312g Abs. 2 Nr. 2 BGB kein Widerrufsrecht",
                    }),
                    " für deine Bestellung.",
                  ],
                }),
              ],
            }),
            (0, b.jsx)(c.AccordionSection, {
              icon: (0, b.jsx)(e.Info, { size: 14 }),
              title: "Warum gibt es bei Speisen kein Widerrufsrecht?",
              defaultOpen: !0,
              children: (0, b.jsx)("p", {
                children:
                  "Das gesetzliche Widerrufsrecht dient im Online-Handel dazu, Ware nach Erhalt prüfen zu können. Bei frisch zubereiteten Lebensmitteln ist dies aus logistischen und hygienischen Gründen nicht möglich. Sobald wir mit der Zubereitung deiner Bestellung begonnen haben, können wir diese nicht mehr zurücknehmen oder anderweitig verkaufen.",
              }),
            }),
            (0, b.jsxs)(c.AccordionSection, {
              icon: (0, b.jsx)(f.FileText, { size: 14 }),
              title: "Freiwillige Stornierungsmöglichkeit (Kulanz)",
              children: [
                (0, b.jsxs)("p", {
                  children: [
                    "Auch wenn gesetzlich kein Widerrufsrecht besteht, möchten wir fair zu unseren Kunden sein. Daher räumen wir dir freiwillig eine ",
                    (0, b.jsx)("strong", {
                      children:
                        "Stornierungsmöglichkeit bis zu 30 Minuten vor der gewählten Abholzeit",
                    }),
                    " ein.",
                  ],
                }),
                (0, b.jsxs)("p", {
                  children: [
                    "Du kannst deine Bestellung innerhalb dieses Zeitfensters direkt in der Hey Fede! App stornieren, uns anrufen (",
                    h.BUSINESS.phone,
                    ") oder uns eine WhatsApp schreiben. Da die Bezahlung ohnehin erst vor Ort im Laden erfolgt, entstehen dir durch eine rechtzeitige Stornierung keinerlei Kosten.",
                  ],
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
];

//# sourceMappingURL=_0mk0p00._.js.map
