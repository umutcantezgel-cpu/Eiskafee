(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  343420,
  (e) => {
    "use strict";
    let n = (0, e.i(456420).default)("info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]);
    e.s(["default", 0, n]);
  },
  810818,
  (e) => {
    "use strict";
    var n = e.i(343420);
    e.s(["Info", () => n.default]);
  },
  203029,
  (e) => {
    "use strict";
    let n = (0, e.i(456420).default)("shield", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
    ]);
    e.s(["default", 0, n]);
  },
  26495,
  (e) => {
    "use strict";
    let n = (0, e.i(456420).default)("chevron-down", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
    ]);
    e.s(["default", 0, n]);
  },
  616933,
  (e) => {
    "use strict";
    let n = (0, e.i(456420).default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    e.s(["default", 0, n]);
  },
  716327,
  (e) => {
    "use strict";
    var n = e.i(26495);
    e.s(["ChevronDown", () => n.default]);
  },
  982954,
  (e) => {
    "use strict";
    var n = e.i(203029);
    e.s(["Shield", () => n.default]);
  },
  551757,
  (e) => {
    "use strict";
    var n = e.i(616933);
    e.s(["CheckCircle2", () => n.default]);
  },
  863286,
  (e) => {
    "use strict";
    var n = e.i(843476),
      i = e.i(271645),
      t = e.i(846932),
      r = e.i(88653),
      s = e.i(310542),
      l = e.i(591994),
      a = e.i(716327),
      o = e.i(551757),
      d = e.i(982954);
    function c({ children: e, color: i = "#b34832" }) {
      return (0, n.jsx)("div", {
        style: {
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: i,
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
        title: l,
        children: o,
        defaultOpen: d = !1,
      }) {
        let [u, h] = (0, i.useState)(d);
        return (0, n.jsxs)(t.motion.div, {
          layout: !0,
          style: {
            background: u ? "rgba(245,239,232,0.6)" : "transparent",
            borderRadius: 18,
            border: u
              ? "1px solid rgba(228,192,168,0.4)"
              : "1px solid transparent",
            marginBottom: 8,
            overflow: "hidden",
            transition: "background 0.3s, border 0.3s",
          },
          children: [
            (0, n.jsxs)("button", {
              onClick: () => h(!u),
              "aria-expanded": u,
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
                (0, n.jsx)(c, { children: e }),
                (0, n.jsxs)("div", {
                  style: { flex: 1 },
                  children: [
                    s &&
                      (0, n.jsx)("span", {
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
                    (0, n.jsx)("div", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.05rem",
                        color: "#2d1f19",
                      },
                      children: l,
                    }),
                  ],
                }),
                (0, n.jsx)(t.motion.div, {
                  animate: { rotate: 180 * !!u },
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                  children: (0, n.jsx)(a.ChevronDown, {
                    size: 20,
                    color: "#7a584c",
                  }),
                }),
              ],
            }),
            (0, n.jsx)(r.AnimatePresence, {
              initial: !1,
              children:
                u &&
                (0, n.jsx)(t.motion.div, {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  style: { overflow: "hidden" },
                  children: (0, n.jsx)("div", {
                    style: {
                      padding: "0 20px 20px 64px",
                      fontFamily: "var(--font-nunito), sans-serif",
                      color: "#5c3d35",
                      fontSize: "0.9rem",
                      lineHeight: 1.72,
                    },
                    children: o,
                  }),
                }),
            }),
          ],
        });
      },
      "CookieBadge",
      0,
      function ({ category: e }) {
        let i = {
            Notwendig: { bg: "#b34832", text: "#fefefe" },
            Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
            Statistik: { bg: "#7a584c", text: "#fefefe" },
            Marketing: { bg: "#5c3d35", text: "#fefefe" },
          },
          t = i[e] || i.Notwendig;
        return (0, n.jsx)("span", {
          style: {
            background: t.bg,
            color: t.text,
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
        lastUpdated: o = "Mai 2026",
      }) {
        let c = (0, i.useRef)(null),
          { scrollYProgress: u } = (0, s.useScroll)({ target: c }),
          h = (0, l.useSpring)(u, { stiffness: 100, damping: 30 });
        return (0, n.jsxs)("div", {
          ref: c,
          style: { minHeight: "100vh", background: "#fefefe" },
          children: [
            (0, n.jsx)(t.motion.div, {
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
            (0, n.jsxs)("div", {
              style: {
                background: "linear-gradient(180deg, #eedfcc 0%, #f5efe8 100%)",
                paddingTop: 120,
                paddingBottom: 48,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              },
              children: [
                (0, n.jsx)("div", {
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
                (0, n.jsx)("div", {
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
                (0, n.jsxs)(t.motion.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, n.jsxs)("div", {
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
                        (0, n.jsx)(d.Shield, { size: 14, color: "#b34832" }),
                        (0, n.jsx)("span", {
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
                    (0, n.jsx)("h1", {
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        color: "#2d1f19",
                        margin: "0 0 8px",
                      },
                      children: e,
                    }),
                    (0, n.jsx)("p", {
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
            (0, n.jsxs)("div", {
              style: {
                maxWidth: 820,
                margin: "0 auto",
                padding: "48px 24px 96px",
              },
              children: [
                a,
                (0, n.jsxs)(t.motion.div, {
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
                    o,
                    " · Diese Seite dient der Information und ersetzt keine Rechtsberatung.",
                  ],
                }),
              ],
            }),
            (0, n.jsx)("style", {
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
      function ({ right: e, article: i }) {
        return (0, n.jsxs)(t.motion.div, {
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
            (0, n.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 2,
              },
              children: [
                (0, n.jsx)(o.CheckCircle2, { size: 14, color: "#b34832" }),
                (0, n.jsx)("span", {
                  style: {
                    fontWeight: 800,
                    color: "#2d1f19",
                    fontSize: "0.85rem",
                  },
                  children: e,
                }),
              ],
            }),
            (0, n.jsx)("span", {
              style: { fontSize: "0.72rem", color: "#7a584c", fontWeight: 600 },
              children: i,
            }),
          ],
        });
      },
    ]);
  },
  571974,
  (e) => {
    "use strict";
    let n = (0, e.i(456420).default)("scale", [
      ["path", { d: "M12 3v18", key: "108xh3" }],
      ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
      [
        "path",
        { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" },
      ],
      ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
      ["path", { d: "M7 21h10", key: "1b0cd5" }],
    ]);
    e.s(["default", 0, n]);
  },
  162382,
  (e) => {
    "use strict";
    var n = e.i(571974);
    e.s(["Scale", () => n.default]);
  },
  374636,
  (e) => {
    "use strict";
    var n = e.i(843476),
      i = e.i(863286),
      t = e.i(162382),
      r = e.i(551757),
      s = e.i(810818),
      l = e.i(846932);
    e.s([
      "default",
      0,
      function () {
        return (0, n.jsxs)(i.LegalPageLayout, {
          title: "Allgemeine Geschäftsbedingungen",
          subtitle: "AGB für Vorbestellungen (Click & Collect) bei Hey Fede!",
          lastUpdated: "Juni 2026",
          children: [
            (0, n.jsxs)(l.motion.div, {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              style: {
                background: "linear-gradient(135deg, #E4C0A8 0%, #eedfcc 100%)",
                padding: 24,
                borderRadius: 20,
                marginBottom: 32,
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: "0.88rem",
                color: "#5c3d35",
                border: "1px solid rgba(228,192,168,0.3)",
              },
              children: [
                (0, n.jsxs)("h3", {
                  style: {
                    fontFamily: "var(--font-calistoga), serif",
                    color: "#2d1f19",
                    fontSize: "1rem",
                    margin: "0 0 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  },
                  children: [
                    (0, n.jsx)(s.Info, { size: 16, color: "#b34832" }),
                    " Das Wichtigste in Kürze",
                  ],
                }),
                (0, n.jsx)("div", {
                  style: { display: "grid", gap: 8 },
                  children: [
                    "Vorbestellung ist kostenlos & unverbindlich (Zubereitung beginnt oft erst kurz vor Abholung)",
                    "Zahlung erfolgt ausschließlich vor Ort im Laden",
                    "Stornierung ist bis 30 Min vor Abholung über die App oder telefonisch möglich",
                    "Nicht abgeholte Bestellungen werden nach 30 Min Wartezeit aufgelöst",
                  ].map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        },
                        children: [
                          (0, n.jsx)(r.CheckCircle2, {
                            size: 14,
                            color: "#b34832",
                          }),
                          (0, n.jsx)("span", { children: e }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, n.jsxs)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 1",
              title: "Geltungsbereich & Anbieter",
              defaultOpen: !0,
              children: [
                (0, n.jsx)("p", {
                  children:
                    "Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen (insbesondere Vorbestellungen / Click & Collect), die von Verbrauchern oder Unternehmern über die Hey Fede! Online-Plattform getätigt werden.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "Anbieter ist: Hey Fede! Dessertbar & Café, Inhaberin Federica Rossi, Langgasse 68, 35578 Wetzlar.",
                }),
              ],
            }),
            (0, n.jsxs)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 2",
              title: "Vertragsschluss",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "(1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe einer Bestellung dar.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "(2) Durch Anklicken des Bestellbuttons gibst du eine verbindliche Anfrage auf Abschluss eines Kaufvertrags ab.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "(3) Der Vertrag kommt erst mit der Bestätigung deiner Bestellung durch uns (per SMS, E-Mail oder Push-Benachrichtigung) zustande. Bis dahin gilt die Bestellung als unverbindliche Reservierungsanfrage.",
                }),
              ],
            }),
            (0, n.jsxs)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 3",
              title: "Preise, Steuern & Bezahlung",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "(1) Alle angegebenen Preise sind Endpreise inklusive der gesetzlichen Mehrwertsteuer. Bei Speisen zum Mitnehmen (Take-away) gilt der ermäßigte Steuersatz (7%), beim Verzehr vor Ort der reguläre Steuersatz (19%).",
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "(2) Die Bezahlung erfolgt bei Hey Fede! derzeit ausschließlich ",
                    (0, n.jsx)("strong", { children: "vor Ort" }),
                    " bei Abholung der Bestellung (bar, mit EC-Karte oder gängigen Kreditkarten). Ein Online-Payment wird aktuell nicht angeboten.",
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 4",
              title: "Abholung & Stornierung",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "(1) Deine Bestellung wird zu der von dir ausgewählten Abholzeit frisch zubereitet. Wir bitten dich, pünktlich zu erscheinen, um die beste Qualität (insbesondere bei Eis, Bubble Waffles und heißen Getränken) garantieren zu können.",
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "(2) ",
                    (0, n.jsx)("strong", { children: "Stornierung:" }),
                    " Du kannst deine Vorbestellung bis zu 30 Minuten vor der gewählten Abholzeit kostenlos und ohne Angabe von Gründen stornieren (per App, Telefon oder WhatsApp).",
                  ],
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "(3) ",
                    (0, n.jsx)("strong", { children: "Nichtabholung:" }),
                    " Solltest du deine Bestellung ohne vorherige Stornierung nicht abholen, bewahren wir diese maximal 30 Minuten für dich auf. Danach behalten wir uns vor, die Bestellung aus Qualitäts- und Platzgründen aufzulösen. Wir behalten uns vor, Nutzerkennungen bei wiederholten Nichtabholungen (Spaßbestellungen) temporär oder dauerhaft vom Vorbestellservice auszuschließen.",
                  ],
                }),
              ],
            }),
            (0, n.jsx)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 5",
              title: "Eigentumsvorbehalt",
              children: (0, n.jsx)("p", {
                children:
                  "Bis zur vollständigen Bezahlung vor Ort bleiben die gelieferten bzw. ausgehändigten Waren im Eigentum von Hey Fede!.",
              }),
            }),
            (0, n.jsxs)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 6",
              title: "Gewährleistung & Haftung",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "(1) Es gelten die gesetzlichen Gewährleistungsrechte. Da es sich um schnell verderbliche Lebensmittel handelt, bitten wir dich, offensichtliche Mängel direkt bei der Übergabe vor Ort zu reklamieren, damit wir sofort für Ersatz sorgen können.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "(2) Hey Fede! haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen. Für leichte Fahrlässigkeit haften wir nur bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt auf den vertragstypischen, vorhersehbaren Schaden.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "(3) Allergien und Unverträglichkeiten: Unsere Speisekarten weisen Allergene aus. Bitte weise unser Personal bei der Abholung dennoch zwingend auf schwere Allergien hin, da Kreuzkontaminationen in unserer Dessertbar trotz größter Sorgfalt nicht zu 100% ausgeschlossen werden können.",
                }),
              ],
            }),
            (0, n.jsxs)(i.AccordionSection, {
              icon: (0, n.jsx)(t.Scale, { size: 14 }),
              number: "§ 7",
              title: "Schlussbestimmungen",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "(1) Auf Verträge zwischen uns und dir findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "(2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt der Vertrag im Übrigen wirksam. Anstelle der unwirksamen Bestimmung gelten die einschlägigen gesetzlichen Vorschriften.",
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
