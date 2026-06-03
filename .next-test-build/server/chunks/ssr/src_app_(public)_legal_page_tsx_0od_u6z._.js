module.exports = [
  793790,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(995180),
      g = a.i(566535),
      h = a.i(414258),
      i = a.i(139353),
      j = a.i(755681),
      k = a.i(483138),
      l = a.i(134532),
      m = a.i(727061),
      n = a.i(178623),
      o = a.i(129391),
      p = a.i(162591),
      q = a.i(390702),
      r = a.i(589027),
      s = a.i(168370),
      t = a.i(613412),
      u = a.i(752357),
      v = a.i(427377),
      w = a.i(866491),
      x = a.i(845474),
      y = a.i(324429);
    function z({ children: a, color: c = "#CC624C" }) {
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
    function A({
      icon: a,
      number: f,
      title: g,
      children: h,
      defaultOpen: i = !1,
    }) {
      let [j, k] = (0, c.useState)(i);
      return (0, b.jsxs)(d.motion.div, {
        layout: !0,
        style: {
          background: j ? "rgba(245,239,232,0.6)" : "transparent",
          borderRadius: 18,
          border: j
            ? "1px solid rgba(228,192,168,0.4)"
            : "1px solid transparent",
          marginBottom: 8,
          overflow: "hidden",
          transition: "background 0.3s, border 0.3s",
        },
        children: [
          (0, b.jsxs)("button", {
            onClick: () => k(!j),
            "aria-expanded": j,
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
              (0, b.jsx)(z, { children: a }),
              (0, b.jsxs)("div", {
                style: { flex: 1 },
                children: [
                  (0, b.jsx)("span", {
                    style: {
                      fontFamily: "var(--font-nunito), sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#CC624C",
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
                animate: { rotate: 180 * !!j },
                transition: { type: "spring", stiffness: 300, damping: 25 },
                children: (0, b.jsx)(r.ChevronDown, {
                  size: 20,
                  color: "#9a7060",
                }),
              }),
            ],
          }),
          (0, b.jsx)(e.AnimatePresence, {
            initial: !1,
            children:
              j &&
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
                  children: h,
                }),
              }),
          }),
        ],
      });
    }
    function B({ category: a }) {
      let c = {
          Notwendig: { bg: "#CC624C", text: "#fefefe" },
          Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
          Statistik: { bg: "#9a7060", text: "#fefefe" },
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
    }
    function C({ right: a, article: c }) {
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
              (0, b.jsx)(t.CheckCircle2, { size: 14, color: "#CC624C" }),
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
            style: { fontSize: "0.72rem", color: "#9a7060", fontWeight: 600 },
            children: c,
          }),
        ],
      });
    }
    a.s([
      "default",
      0,
      function () {
        let a = (0, c.useRef)(null),
          { scrollYProgress: e } = (0, f.useScroll)({ target: a }),
          r = (0, g.useSpring)(e, { stiffness: 100, damping: 30 }),
          [z, D] = (0, c.useState)("impressum");
        (0, c.useEffect)(() => {
          let a = new IntersectionObserver(
            (a) => {
              a.forEach((a) => {
                a.isIntersecting && D(a.target.id);
              });
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
          );
          return (
            document
              .querySelectorAll("section[id]")
              .forEach((b) => a.observe(b)),
            () => a.disconnect()
          );
        }, []);
        let E = [
          {
            id: "impressum",
            label: "Impressum",
            icon: (0, b.jsx)(v.Building2, { size: 14 }),
          },
          {
            id: "datenschutz",
            label: "Datenschutz",
            icon: (0, b.jsx)(h.Shield, { size: 14 }),
          },
          {
            id: "cookies",
            label: "Cookies",
            icon: (0, b.jsx)(n.Cookie, { size: 14 }),
          },
          {
            id: "agb",
            label: "AGB",
            icon: (0, b.jsx)(k.FileText, { size: 14 }),
          },
        ];
        return (0, b.jsxs)("div", {
          ref: a,
          style: { minHeight: "100vh", background: "#fefefe" },
          children: [
            (0, b.jsx)(d.motion.div, {
              style: {
                position: "fixed",
                top: 68,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #CC624C, #E4C0A8)",
                transformOrigin: "left",
                scaleX: r,
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
                        (0, b.jsx)(h.Shield, { size: 14, color: "#CC624C" }),
                        (0, b.jsx)("span", {
                          style: {
                            fontFamily: "var(--font-nunito), sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#CC624C",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          },
                          children: "DSGVO · TDDDG · DDG konform",
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
                      children: "Rechtliches",
                    }),
                    (0, b.jsx)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        fontSize: "1rem",
                        margin: 0,
                      },
                      children: "Transparenz & Vertrauen bei Hey Fede!",
                    }),
                  ],
                }),
                (0, b.jsx)(d.motion.nav, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  style: {
                    display: "flex",
                    gap: 6,
                    justifyContent: "center",
                    marginTop: 28,
                    flexWrap: "wrap",
                    padding: "0 16px",
                  },
                  children: E.map((a) =>
                    (0, b.jsxs)(
                      "a",
                      {
                        href: `#${a.id}`,
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background:
                            z === a.id ? "#CC624C" : "rgba(245,239,232,0.8)",
                          color: z === a.id ? "#fefefe" : "#5c3d35",
                          padding: "8px 18px",
                          borderRadius: 50,
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontWeight: 800,
                          fontSize: "0.8rem",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          backdropFilter: "blur(8px)",
                          border:
                            z === a.id
                              ? "1px solid transparent"
                              : "1px solid rgba(228,192,168,0.3)",
                        },
                        children: [a.icon, " ", a.label],
                      },
                      a.id,
                    ),
                  ),
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
                (0, b.jsxs)("section", {
                  id: "impressum",
                  style: { marginBottom: 72, scrollMarginTop: 100 },
                  children: [
                    (0, b.jsxs)(d.motion.h2, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.8rem",
                        color: "#2d1f19",
                        marginBottom: 28,
                        borderBottom: "2px solid #eedfcc",
                        paddingBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      },
                      children: [
                        (0, b.jsx)(v.Building2, { size: 24, color: "#CC624C" }),
                        " Impressum",
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      style: {
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: 16,
                      },
                      children: [
                        (0, b.jsxs)(d.motion.div, {
                          whileHover: { y: -4 },
                          style: {
                            background: "#f5efe8",
                            borderRadius: 20,
                            padding: 24,
                            border: "1px solid rgba(228,192,168,0.3)",
                          },
                          children: [
                            (0, b.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 12,
                              },
                              children: [
                                (0, b.jsx)(v.Building2, {
                                  size: 16,
                                  color: "#CC624C",
                                }),
                                (0, b.jsx)("h3", {
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
                            (0, b.jsxs)("p", {
                              style: {
                                fontFamily: "var(--font-nunito), sans-serif",
                                color: "#5c3d35",
                                fontSize: "0.88rem",
                                lineHeight: 1.7,
                                margin: 0,
                              },
                              children: [
                                "Hey Fede! Dessertbar & Café",
                                (0, b.jsx)("br", {}),
                                "Inhaberin: Federica Rossi",
                                (0, b.jsx)("br", {}),
                                y.BUSINESS.street,
                                (0, b.jsx)("br", {}),
                                y.BUSINESS.postalCode,
                                " ",
                                y.BUSINESS.city,
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)(d.motion.div, {
                          whileHover: { y: -4 },
                          style: {
                            background: "#f5efe8",
                            borderRadius: 20,
                            padding: 24,
                            border: "1px solid rgba(228,192,168,0.3)",
                          },
                          children: [
                            (0, b.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 12,
                              },
                              children: [
                                (0, b.jsx)(w.Phone, {
                                  size: 16,
                                  color: "#CC624C",
                                }),
                                (0, b.jsx)("h3", {
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
                            (0, b.jsxs)("p", {
                              style: {
                                fontFamily: "var(--font-nunito), sans-serif",
                                color: "#5c3d35",
                                fontSize: "0.88rem",
                                lineHeight: 1.7,
                                margin: 0,
                              },
                              children: [
                                "Tel: ",
                                y.BUSINESS.phone,
                                (0, b.jsx)("br", {}),
                                "WhatsApp: ",
                                y.BUSINESS.whatsappDisplay,
                                (0, b.jsx)("br", {}),
                                "E-Mail:",
                                " ",
                                (0, b.jsx)("span", {
                                  style: { color: "#CC624C", fontWeight: 700 },
                                  children: "hallo@hey-fede.de",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)(d.motion.div, {
                          whileHover: { y: -4 },
                          style: {
                            background: "#f5efe8",
                            borderRadius: 20,
                            padding: 24,
                            border: "1px solid rgba(228,192,168,0.3)",
                          },
                          children: [
                            (0, b.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 12,
                              },
                              children: [
                                (0, b.jsx)(k.FileText, {
                                  size: 16,
                                  color: "#CC624C",
                                }),
                                (0, b.jsx)("h3", {
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
                            (0, b.jsxs)("p", {
                              style: {
                                fontFamily: "var(--font-nunito), sans-serif",
                                color: "#5c3d35",
                                fontSize: "0.88rem",
                                lineHeight: 1.7,
                                margin: 0,
                              },
                              children: [
                                "USt-IdNr. gem. § 27a UStG:",
                                (0, b.jsx)("br", {}),
                                (0, b.jsx)("span", {
                                  style: {
                                    display: "inline-block",
                                    background: "#eedfcc",
                                    padding: "3px 10px",
                                    borderRadius: 8,
                                    fontFamily: "monospace",
                                    fontSize: "0.85rem",
                                    marginTop: 6,
                                    color: "#CC624C",
                                    fontWeight: "bold",
                                  },
                                  children: "[HIER DEINE USt-ID EINTRAGEN]",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)(d.motion.div, {
                          whileHover: { y: -4 },
                          style: {
                            background: "#f5efe8",
                            borderRadius: 20,
                            padding: 24,
                            border: "1px solid rgba(228,192,168,0.3)",
                          },
                          children: [
                            (0, b.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 12,
                              },
                              children: [
                                (0, b.jsx)(u.Info, {
                                  size: 16,
                                  color: "#CC624C",
                                }),
                                (0, b.jsx)("h3", {
                                  style: {
                                    fontFamily: "var(--font-calistoga), serif",
                                    color: "#2d1f19",
                                    fontSize: "0.95rem",
                                    margin: 0,
                                  },
                                  children: "§ 18 MStV",
                                }),
                              ],
                            }),
                            (0, b.jsxs)("p", {
                              style: {
                                fontFamily: "var(--font-nunito), sans-serif",
                                color: "#5c3d35",
                                fontSize: "0.88rem",
                                lineHeight: 1.7,
                                margin: 0,
                              },
                              children: [
                                "Verantwortlich für den Inhalt:",
                                (0, b.jsx)("br", {}),
                                "Federica Rossi",
                                (0, b.jsx)("br", {}),
                                y.FULL_ADDRESS,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)(d.motion.div, {
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      viewport: { once: !0 },
                      style: {
                        background:
                          "linear-gradient(135deg, #eedfcc 0%, #f5efe8 100%)",
                        padding: 20,
                        borderRadius: 16,
                        marginTop: 20,
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-nunito), sans-serif",
                        color: "#5c3d35",
                        border: "1px solid rgba(228,192,168,0.3)",
                      },
                      children: [
                        (0, b.jsx)("strong", {
                          style: { color: "#2d1f19" },
                          children: "EU-Streitschlichtung:",
                        }),
                        " ",
                        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:",
                        " ",
                        (0, b.jsxs)("a", {
                          href: "https://ec.europa.eu/consumers/odr",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: {
                            color: "#CC624C",
                            fontWeight: 700,
                            textDecoration: "underline",
                            textUnderlineOffset: 3,
                          },
                          children: [
                            "ec.europa.eu/consumers/odr",
                            " ",
                            (0, b.jsx)(s.ExternalLink, {
                              size: 12,
                              style: { verticalAlign: "middle" },
                            }),
                          ],
                        }),
                        ". Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("section", {
                  id: "datenschutz",
                  style: { marginBottom: 72, scrollMarginTop: 100 },
                  children: [
                    (0, b.jsxs)(d.motion.h2, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.8rem",
                        color: "#2d1f19",
                        marginBottom: 28,
                        borderBottom: "2px solid #eedfcc",
                        paddingBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      },
                      children: [
                        (0, b.jsx)(h.Shield, { size: 24, color: "#CC624C" }),
                        " Datenschutzerklärung",
                      ],
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(h.Shield, { size: 14 }),
                      number: "01",
                      title: "Verantwortlicher",
                      defaultOpen: !0,
                      children: (0, b.jsxs)("p", {
                        children: [
                          "Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café",
                          (0, b.jsx)("br", {}),
                          y.FULL_ADDRESS,
                          (0, b.jsx)("br", {}),
                          "E-Mail:",
                          " ",
                          (0, b.jsx)("span", {
                            style: { fontWeight: 700, color: "#CC624C" },
                            children: "datenschutz@hey-fede.de",
                          }),
                        ],
                      }),
                    }),
                    (0, b.jsxs)(A, {
                      icon: (0, b.jsx)(m.Database, { size: 14 }),
                      number: "02",
                      title: "Erhobene Daten",
                      children: [
                        (0, b.jsx)("p", {
                          style: { marginBottom: 12 },
                          children:
                            "Für die Nutzung unserer Website und den Vorbestellservice erfassen wir:",
                        }),
                        (0, b.jsxs)("ul", {
                          style: { paddingLeft: 20, listStyleType: "disc" },
                          children: [
                            (0, b.jsx)("li", {
                              children:
                                "Name & Handynummer (für Rückfragen zur Abholung)",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "E-Mail-Adresse (für Bestellbestätigung & Kontoanmeldung)",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "Bestelldaten (zur Zubereitung deiner Bestellung)",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "Technische Daten: IP-Adresse, Browser-Typ, Gerät, Betriebssystem",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "Nutzungsdaten: Aufgerufene Seiten, Verweildauer (nur bei Statistik-Consent)",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(o.Scale, { size: 14 }),
                      number: "03",
                      title: "Rechtsgrundlagen",
                      children: (0, b.jsx)("div", {
                        style: {
                          display: "grid",
                          gap: 10,
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        },
                        children: [
                          {
                            art: "Art. 6 Abs. 1 lit. a",
                            title: "Einwilligung",
                            desc: "Optionale Cookies (Statistik, Marketing)",
                          },
                          {
                            art: "Art. 6 Abs. 1 lit. b",
                            title: "Vertragserfüllung",
                            desc: "Abwicklung deiner Bestellung",
                          },
                          {
                            art: "Art. 6 Abs. 1 lit. f",
                            title: "Berechtigtes Interesse",
                            desc: "Server-Logs, Website-Sicherheit",
                          },
                        ].map((a) =>
                          (0, b.jsxs)(
                            "div",
                            {
                              style: {
                                background: "rgba(238,223,204,0.5)",
                                borderRadius: 14,
                                padding: 16,
                                border: "1px solid rgba(228,192,168,0.3)",
                              },
                              children: [
                                (0, b.jsx)("div", {
                                  style: {
                                    fontSize: "0.72rem",
                                    fontWeight: 800,
                                    color: "#CC624C",
                                    marginBottom: 4,
                                  },
                                  children: a.art,
                                }),
                                (0, b.jsx)("div", {
                                  style: {
                                    fontWeight: 800,
                                    color: "#2d1f19",
                                    fontSize: "0.88rem",
                                  },
                                  children: a.title,
                                }),
                                (0, b.jsx)("div", {
                                  style: {
                                    fontSize: "0.8rem",
                                    color: "#9a7060",
                                    marginTop: 4,
                                  },
                                  children: a.desc,
                                }),
                              ],
                            },
                            a.art,
                          ),
                        ),
                      }),
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(j.Eye, { size: 14 }),
                      number: "04",
                      title: "Empfänger & Auftragsverarbeiter",
                      children: (0, b.jsx)("div", {
                        style: { overflowX: "auto" },
                        children: (0, b.jsxs)("table", {
                          style: {
                            width: "100%",
                            borderCollapse: "collapse",
                            fontSize: "0.82rem",
                          },
                          children: [
                            (0, b.jsx)("thead", {
                              children: (0, b.jsx)("tr", {
                                style: { background: "rgba(238,223,204,0.6)" },
                                children: ["Dienst", "Anbieter", "Zweck"].map(
                                  (a) =>
                                    (0, b.jsx)(
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
                                          borderBottom:
                                            "1px solid rgba(228,192,168,0.4)",
                                        },
                                        children: a,
                                      },
                                      a,
                                    ),
                                ),
                              }),
                            }),
                            (0, b.jsx)("tbody", {
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
                                [
                                  "Vercel",
                                  "Vercel Inc., USA",
                                  "Website-Hosting & CDN",
                                ],
                                [
                                  "Google Maps",
                                  "Google Ireland Ltd",
                                  "Interaktive Karte (nach Einwilligung)",
                                ],
                              ].map(([a, c, d], e) =>
                                (0, b.jsxs)(
                                  "tr",
                                  {
                                    style: {
                                      borderBottom:
                                        "1px solid rgba(228,192,168,0.25)",
                                    },
                                    children: [
                                      (0, b.jsx)("td", {
                                        style: {
                                          padding: "10px 14px",
                                          fontWeight: 700,
                                        },
                                        children: a,
                                      }),
                                      (0, b.jsx)("td", {
                                        style: { padding: "10px 14px" },
                                        children: c,
                                      }),
                                      (0, b.jsx)("td", {
                                        style: { padding: "10px 14px" },
                                        children: d,
                                      }),
                                    ],
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(l.Server, { size: 14 }),
                      number: "05",
                      title: "Drittlandtransfer (USA)",
                      children: (0, b.jsxs)("p", {
                        children: [
                          "Einige der eingesetzten Dienste (Google, Vercel) haben ihren Sitz in den USA. Die Datenübermittlung erfolgt auf Grundlage des",
                          " ",
                          (0, b.jsx)("strong", {
                            children: "EU-US Data Privacy Framework",
                          }),
                          " ",
                          "(Angemessenheitsbeschluss gem. Art. 45 DSGVO) sowie ergänzend auf Basis von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).",
                        ],
                      }),
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(k.FileText, { size: 14 }),
                      number: "06",
                      title: "Speicherdauer",
                      children: (0, b.jsxs)("ul", {
                        style: { paddingLeft: 20, listStyleType: "disc" },
                        children: [
                          (0, b.jsxs)("li", {
                            children: [
                              (0, b.jsx)("strong", {
                                children: "Bestelldaten:",
                              }),
                              " 90 Tage nach Abholung (automatische Löschung)",
                            ],
                          }),
                          (0, b.jsxs)("li", {
                            children: [
                              (0, b.jsx)("strong", { children: "Kontodaten:" }),
                              " Bis zur Löschung deines Kontos durch dich",
                            ],
                          }),
                          (0, b.jsxs)("li", {
                            children: [
                              (0, b.jsx)("strong", {
                                children: "Server-Logs:",
                              }),
                              " Maximal 30 Tage",
                            ],
                          }),
                          (0, b.jsxs)("li", {
                            children: [
                              (0, b.jsx)("strong", {
                                children: "Kontaktanfragen:",
                              }),
                              " 6 Monate nach Abschluss der Bearbeitung",
                            ],
                          }),
                          (0, b.jsxs)("li", {
                            children: [
                              (0, b.jsx)("strong", {
                                children: "Steuerrelevante Daten:",
                              }),
                              " 10 Jahre (gesetzliche Aufbewahrungspflicht)",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, b.jsxs)(A, {
                      icon: (0, b.jsx)(i.Lock, { size: 14 }),
                      number: "07",
                      title: "Deine Rechte (Betroffenenrechte)",
                      children: [
                        (0, b.jsx)("p", {
                          style: { marginBottom: 12 },
                          children:
                            "Nach der DSGVO stehen dir folgende Rechte zu:",
                        }),
                        (0, b.jsx)("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(170px, 1fr))",
                            gap: 8,
                          },
                          children: [
                            ["Auskunft", "Art. 15"],
                            ["Berichtigung", "Art. 16"],
                            ["Löschung", "Art. 17"],
                            ["Einschränkung", "Art. 18"],
                            ["Datenübertragbarkeit", "Art. 20"],
                            ["Widerspruch", "Art. 21"],
                          ].map(([a, c]) =>
                            (0, b.jsx)(C, { right: a, article: c }, a),
                          ),
                        }),
                        (0, b.jsxs)("p", {
                          style: { marginTop: 16 },
                          children: [
                            "Kontaktiere uns unter",
                            " ",
                            (0, b.jsx)("span", {
                              style: { fontWeight: 700, color: "#CC624C" },
                              children: "datenschutz@hey-fede.de",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(l.Server, { size: 14 }),
                      number: "08",
                      title: "Hosting & CDN",
                      children: (0, b.jsxs)("p", {
                        children: [
                          "Unsere Website wird bei ",
                          (0, b.jsx)("strong", { children: "Vercel Inc." }),
                          " (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf werden technische Daten (IP-Adresse, Browser, Zeitpunkt) automatisch erhoben. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.",
                        ],
                      }),
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(m.Database, { size: 14 }),
                      number: "09",
                      title: "Firebase (Google)",
                      children: (0, b.jsx)("p", {
                        children:
                          "Für die Nutzer-Authentifizierung und Datenspeicherung nutzen wir Firebase-Dienste von Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Datentransfer in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework.",
                      }),
                    }),
                    (0, b.jsx)(A, {
                      icon: (0, b.jsx)(p.Mail, { size: 14 }),
                      number: "10",
                      title: "Kontaktformular",
                      children: (0, b.jsx)("p", {
                        children:
                          "Wenn du uns kontaktierst, werden die angegebenen Daten (Name, E-Mail, Nachricht) zur Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nach Abschluss der Bearbeitung und Ablauf steuerrechtlicher Aufbewahrungsfristen gelöscht.",
                      }),
                    }),
                    (0, b.jsxs)(A, {
                      icon: (0, b.jsx)(q.AlertTriangle, { size: 14 }),
                      number: "11",
                      title: "Beschwerderecht",
                      children: [
                        (0, b.jsx)("p", {
                          children:
                            "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).",
                        }),
                        (0, b.jsxs)("div", {
                          style: {
                            background: "rgba(238,223,204,0.5)",
                            borderRadius: 14,
                            padding: 16,
                            marginTop: 12,
                            border: "1px solid rgba(228,192,168,0.3)",
                          },
                          children: [
                            (0, b.jsx)("strong", {
                              style: { color: "#2d1f19" },
                              children: "Zuständige Behörde:",
                            }),
                            (0, b.jsx)("br", {}),
                            "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)",
                            (0, b.jsx)("br", {}),
                            "Postfach 3163, 65021 Wiesbaden",
                            (0, b.jsx)("br", {}),
                            (0, b.jsxs)("a", {
                              href: "https://datenschutz.hessen.de",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              style: {
                                color: "#CC624C",
                                fontWeight: 700,
                                textDecoration: "underline",
                                textUnderlineOffset: 3,
                              },
                              children: [
                                "datenschutz.hessen.de",
                                " ",
                                (0, b.jsx)(s.ExternalLink, {
                                  size: 12,
                                  style: { verticalAlign: "middle" },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("section", {
                  id: "cookies",
                  style: { marginBottom: 72, scrollMarginTop: 100 },
                  children: [
                    (0, b.jsxs)(d.motion.h2, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.8rem",
                        color: "#2d1f19",
                        marginBottom: 12,
                        borderBottom: "2px solid #eedfcc",
                        paddingBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      },
                      children: [
                        (0, b.jsx)(n.Cookie, { size: 24, color: "#CC624C" }),
                        " Cookies & Tracking",
                      ],
                    }),
                    (0, b.jsx)("p", {
                      style: {
                        fontFamily: "var(--font-nunito), sans-serif",
                        fontSize: "0.9rem",
                        color: "#5c3d35",
                        lineHeight: 1.72,
                        marginBottom: 24,
                      },
                      children:
                        "Unsere Website verwendet Cookies. Die Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen Cookies holen wir deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).",
                    }),
                    (0, b.jsx)("div", {
                      style: { display: "grid", gap: 12 },
                      children: [
                        {
                          name: "cc_cookie",
                          provider: "Hey Fede!",
                          purpose: "Cookie-Einstellungen speichern",
                          duration: "6 Monate",
                          category: "Notwendig",
                        },
                        {
                          name: "__session",
                          provider: "Firebase Auth",
                          purpose: "Login-Session-Verwaltung",
                          duration: "Sitzung",
                          category: "Notwendig",
                        },
                        {
                          name: "splash_shown",
                          provider: "Hey Fede!",
                          purpose: "Splash-Screen nur 1× zeigen",
                          duration: "Sitzung",
                          category: "Notwendig",
                        },
                        {
                          name: "hf_ach_*",
                          provider: "Hey Fede!",
                          purpose: "Achievement-Gamification-Fortschritt",
                          duration: "Dauerhaft",
                          category: "Funktional",
                        },
                        {
                          name: "NID / 1P_JAR",
                          provider: "Google Maps",
                          purpose: "Interaktive Karte auf der Besuch-Seite",
                          duration: "6 Monate",
                          category: "Funktional",
                        },
                      ].map((a) =>
                        (0, b.jsxs)(
                          d.motion.div,
                          {
                            whileHover: { x: 4 },
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            },
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 16,
                              background: "#f5efe8",
                              borderRadius: 16,
                              padding: "14px 20px",
                              border: "1px solid rgba(228,192,168,0.3)",
                              flexWrap: "wrap",
                            },
                            children: [
                              (0, b.jsx)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontWeight: 700,
                                  fontSize: "0.82rem",
                                  color: "#2d1f19",
                                  minWidth: 100,
                                },
                                children: a.name,
                              }),
                              (0, b.jsx)("span", {
                                style: {
                                  flex: 1,
                                  fontSize: "0.82rem",
                                  color: "#5c3d35",
                                  minWidth: 140,
                                },
                                children: a.purpose,
                              }),
                              (0, b.jsx)("span", {
                                style: {
                                  fontSize: "0.75rem",
                                  color: "#9a7060",
                                  minWidth: 70,
                                },
                                children: a.duration,
                              }),
                              (0, b.jsx)(B, { category: a.category }),
                            ],
                          },
                          a.name,
                        ),
                      ),
                    }),
                    (0, b.jsxs)(d.motion.button, {
                      whileHover: { scale: 1.03, y: -2 },
                      whileTap: { scale: 0.97 },
                      onClick: () => x.showPreferences(),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        justifyContent: "center",
                        width: "100%",
                        marginTop: 24,
                        padding: "14px 28px",
                        background: "#CC624C",
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
                        (0, b.jsx)(n.Cookie, { size: 18 }),
                        " Cookie-Einstellungen jetzt anpassen",
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("section", {
                  id: "agb",
                  style: { scrollMarginTop: 100 },
                  children: [
                    (0, b.jsxs)(d.motion.h2, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      style: {
                        fontFamily: "var(--font-calistoga), serif",
                        fontSize: "1.8rem",
                        color: "#2d1f19",
                        marginBottom: 28,
                        borderBottom: "2px solid #eedfcc",
                        paddingBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      },
                      children: [
                        (0, b.jsx)(k.FileText, { size: 24, color: "#CC624C" }),
                        " AGB",
                      ],
                    }),
                    (0, b.jsxs)(d.motion.div, {
                      initial: { opacity: 0, y: 10 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      style: {
                        background:
                          "linear-gradient(135deg, #E4C0A8 0%, #eedfcc 100%)",
                        padding: 24,
                        borderRadius: 20,
                        marginBottom: 32,
                        fontFamily: "var(--font-nunito), sans-serif",
                        fontSize: "0.88rem",
                        color: "#5c3d35",
                        border: "1px solid rgba(228,192,168,0.3)",
                      },
                      children: [
                        (0, b.jsxs)("h3", {
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
                            (0, b.jsx)(u.Info, { size: 16, color: "#CC624C" }),
                            " Das Wichtigste in Kürze",
                          ],
                        }),
                        (0, b.jsx)("div", {
                          style: { display: "grid", gap: 8 },
                          children: [
                            "Vorbestellung ist kostenlos & unverbindlich",
                            "Zahlung erfolgt vor Ort im Laden",
                            "Stornierung bis 30 Min vor Abholung möglich",
                            "Nicht abgeholte Bestellungen werden nach 30 Min aufgelöst",
                          ].map((a) =>
                            (0, b.jsxs)(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                },
                                children: [
                                  (0, b.jsx)(t.CheckCircle2, {
                                    size: 14,
                                    color: "#CC624C",
                                  }),
                                  (0, b.jsx)("span", { children: a }),
                                ],
                              },
                              a,
                            ),
                          ),
                        }),
                      ],
                    }),
                    [
                      {
                        n: "§ 1",
                        t: "Geltungsbereich",
                        c: "Diese AGB gelten für alle Vorbestellungen über die Hey Fede! Online-Plattform.",
                      },
                      {
                        n: "§ 2",
                        t: "Vertragsschluss",
                        c: "Der Vertrag kommt mit Bestätigung deiner Bestellung per SMS oder E-Mail zustande. Bis dahin gilt die Bestellung als unverbindliche Anfrage.",
                      },
                      {
                        n: "§ 3",
                        t: "Preise & Bezahlung",
                        c: "Alle Preise inkl. gesetzl. MwSt. (7% für Speisen zum Mitnehmen, 19% Verzehr vor Ort). Bezahlt wird ausschließlich vor Ort — bar, mit EC- oder Kreditkarte.",
                      },
                      {
                        n: "§ 4",
                        t: "Abholung & Stornierung",
                        c: "Stornierung kostenlos bis 30 Min vor Abholzeit über die App, telefonisch oder per WhatsApp. Bei Nichtabholung kann die Bestellung anderweitig vergeben werden.",
                      },
                      {
                        n: "§ 5",
                        t: "Haftung",
                        c: "Hey Fede! haftet nur bei Vorsatz und grober Fahrlässigkeit. Für leichte Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.",
                      },
                    ].map((a) =>
                      (0, b.jsx)(
                        A,
                        {
                          icon: (0, b.jsx)(o.Scale, { size: 14 }),
                          number: a.n,
                          title: a.t,
                          children: (0, b.jsx)("p", {
                            style: { margin: 0 },
                            children: a.c,
                          }),
                        },
                        a.n,
                      ),
                    ),
                  ],
                }),
                (0, b.jsx)(d.motion.div, {
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
                    color: "#9a7060",
                    textAlign: "center",
                    border: "1px solid rgba(228,192,168,0.3)",
                  },
                  children:
                    "Stand: Mai 2026 · Diese Seite dient der Information und ersetzt keine Rechtsberatung.",
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
    ]);
  },
];

//# sourceMappingURL=src_app_%28public%29_legal_page_tsx_0od_u6z._.js.map
