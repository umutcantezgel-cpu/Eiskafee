(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
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
  853138,
  (e) => {
    "use strict";
    var t = e.i(755566);
    e.s(["AlertTriangle", () => t.default]);
  },
  413281,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ]);
    e.s(["default", 0, t]);
  },
  474544,
  (e) => {
    "use strict";
    var t = e.i(413281);
    e.s(["Clock", () => t.default]);
  },
  153287,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var a = e.i(386205),
      s = e.i(263802),
      l = e.i(959141);
    e.s([
      "useStoreSettings",
      0,
      function () {
        let [e, n] = (0, t.useState)(null),
          [r, o] = (0, t.useState)(!0),
          [i, c] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            let e = (0, s.onSnapshot)(
              (0, a.doc)(l.db, "store_settings", "general"),
              (e) => {
                (e.exists() ? n({ id: e.id, ...e.data() }) : n(null),
                  o(!1),
                  c(null));
              },
              (e) => {
                (console.error("useStoreSettings error:", e), c(e), o(!1));
              },
            );
            return () => e();
          }, []),
          { settings: e, loading: r, error: i }
        );
      },
    ]);
  },
  460573,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    e.s(["default", 0, t]);
  },
  9306,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("trash-2", [
      ["path", { d: "M10 11v6", key: "nco0om" }],
      ["path", { d: "M14 11v6", key: "outv1u" }],
      [
        "path",
        { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" },
      ],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
    ]);
    e.s(["default", 0, t]);
  },
  667362,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("tag", [
      [
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          key: "vktsd0",
        },
      ],
      [
        "circle",
        { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  903872,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("power", [
      ["path", { d: "M12 2v10", key: "mnfbl" }],
      ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
    ]);
    e.s(["default", 0, t]);
  },
  702332,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("megaphone", [
      [
        "path",
        {
          d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
          key: "q8bfy3",
        },
      ],
      [
        "path",
        {
          d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
          key: "1853fq",
        },
      ],
      ["path", { d: "M8 6v8", key: "15ugcq" }],
    ]);
    e.s(["default", 0, t]);
  },
  980799,
  (e) => {
    "use strict";
    var t = e.i(667362);
    e.s(["Tag", () => t.default]);
  },
  149882,
  (e) => {
    "use strict";
    var t = e.i(460573);
    e.s(["Calendar", () => t.default]);
  },
  573474,
  (e) => {
    "use strict";
    var t = e.i(9306);
    e.s(["Trash2", () => t.default]);
  },
  308204,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      s = e.i(846932),
      l = e.i(153287),
      n = e.i(959141);
    e.i(436180);
    var r = e.i(386205),
      o = e.i(263802),
      i = e.i(746939),
      c = e.i(903872),
      c = c,
      d = e.i(474544),
      x = e.i(702332),
      x = x,
      u = e.i(149882),
      h = e.i(853138),
      m = e.i(980799),
      p = e.i(573474),
      b = e.i(77071),
      f = e.i(74909);
    e.s(
      [
        "default",
        0,
        function () {
          let { settings: e, loading: g } = (0, l.useStoreSettings)(),
            { addToast: y } = (0, f.useToastStore)(),
            [v, j] = (0, a.useState)({
              currentWaitTime: 15,
              bannerText: "",
              emergencyNotice: "",
              openingHours: "Mi-Sa 12-19 Uhr, So 13-19 Uhr",
              deliveryZones: "35576, 35578",
            }),
            [N, w] = (0, a.useState)(!1),
            [k, S] = (0, a.useState)([]),
            [T, M] = (0, a.useState)({ code: "", type: "fixed", amount: 0 }),
            O = async () => {
              try {
                let e = await (0, o.getDocs)(
                  (0, i.collection)(n.db, "promo_codes"),
                );
                S(e.docs.map((e) => ({ id: e.id, ...e.data() })));
              } catch (e) {
                console.error(e);
              }
            };
          (0, a.useEffect)(() => {
            (e &&
              j({
                currentWaitTime: e.currentWaitTime || 15,
                bannerText: e.bannerText || "",
                emergencyNotice: e.emergencyNotice || "",
                openingHours: e.openingHours || "Mi-Sa 12-19 Uhr, So 13-19 Uhr",
                deliveryZones: e.deliveryZones || "35576, 35578",
              }),
              O());
          }, [e]);
          let z = async () => {
              if (e)
                try {
                  (await (0, o.updateDoc)(
                    (0, r.doc)(n.db, "store_settings", "general"),
                    { isOnline: !e.isOnline },
                  ),
                    y({
                      title: e.isOnline
                        ? "Notfall-Stopp aktiv"
                        : "Shop ist Online",
                      message: e.isOnline
                        ? "Bestellannahme gestoppt."
                        : "Bestellungen werden jetzt angenommen.",
                      type: e.isOnline ? "error" : "success",
                    }));
                } catch (e) {
                  (console.error(e),
                    y({
                      title: "Fehler",
                      message: "Status konnte nicht geändert werden.",
                      type: "error",
                    }));
                }
            },
            C = async (e) => {
              (e.preventDefault(), w(!0));
              try {
                (await (0, o.setDoc)(
                  (0, r.doc)(n.db, "store_settings", "general"),
                  { ...v },
                  { merge: !0 },
                ),
                  y({
                    title: "Gespeichert",
                    message: "Einstellungen wurden erfolgreich aktualisiert.",
                    type: "success",
                  }));
              } catch (e) {
                (console.error(e),
                  y({
                    title: "Fehler",
                    message: "Speichern fehlgeschlagen.",
                    type: "error",
                  }));
              } finally {
                w(!1);
              }
            },
            D = async () => {
              if (T.code && !(T.amount <= 0))
                try {
                  let e = T.code.toUpperCase();
                  (await (0, o.setDoc)((0, r.doc)(n.db, "promo_codes", e), {
                    type: T.type,
                    amount: T.amount,
                    active: !0,
                  }),
                    M({ code: "", type: "fixed", amount: 0 }),
                    O(),
                    y({ title: "Gutschein erstellt", type: "success" }));
                } catch (e) {
                  console.error(e);
                }
            },
            A = async (e) => {
              try {
                (await (0, o.deleteDoc)((0, r.doc)(n.db, "promo_codes", e)),
                  O());
              } catch (e) {
                console.error(e);
              }
            };
          return (0, t.jsxs)("div", {
            className: "p-8 max-w-4xl mx-auto",
            children: [
              (0, t.jsxs)("div", {
                className: "mb-10",
                children: [
                  (0, t.jsx)("h1", {
                    className: "font-calistoga text-4xl text-charcoal mb-2",
                    children: "Einstellungen",
                  }),
                  (0, t.jsx)("p", {
                    className: "font-bold text-charcoal/60",
                    children: "Store-Status, Wartezeiten und Texte verwalten",
                  }),
                ],
              }),
              g
                ? (0, t.jsxs)("div", {
                    className: "animate-pulse flex flex-col gap-8",
                    children: [
                      (0, t.jsx)("div", {
                        className: "h-32 bg-cream rounded-3xl",
                      }),
                      (0, t.jsx)("div", {
                        className: "h-64 bg-cream rounded-3xl",
                      }),
                    ],
                  })
                : (0, t.jsxs)("div", {
                    className: "flex flex-col gap-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: `p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-500 ${e?.isOnline ? "bg-mint/20 border-mint/40" : "bg-red-500/10 border-red-500/20"} border-2`,
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsxs)("h2", {
                                className:
                                  "font-calistoga text-2xl text-charcoal mb-2 flex items-center gap-3",
                                children: [
                                  (0, t.jsx)(c.default, {
                                    className: e?.isOnline
                                      ? "text-mint"
                                      : "text-red-500",
                                  }),
                                  e?.isOnline
                                    ? "Store ist Online"
                                    : "Store ist Offline (Notfall-Stopp)",
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: "font-bold text-charcoal/70",
                                children: e?.isOnline
                                  ? "Kunden können aktuell Bestellungen aufgeben."
                                  : "Die Bestellannahme ist komplett deaktiviert. Der Shop zeigt einen Wartungshinweis.",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("button", {
                            onClick: z,
                            className: `relative flex h-14 w-28 items-center rounded-full p-2 transition-colors duration-500 shrink-0 ${e?.isOnline ? "bg-mint" : "bg-red-500"}`,
                            children: [
                              (0, t.jsx)(s.motion.div, {
                                layout: !0,
                                transition: {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                },
                                className:
                                  "h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center",
                                children: (0, t.jsx)(c.default, {
                                  className: `w-5 h-5 ${e?.isOnline ? "text-mint" : "text-red-500"}`,
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-between px-4 pointer-events-none",
                                children: [
                                  (0, t.jsx)("span", {
                                    className: `text-white font-bold text-xs ${e?.isOnline ? "opacity-100" : "opacity-0"}`,
                                    children: "ON",
                                  }),
                                  (0, t.jsx)("span", {
                                    className: `text-white font-bold text-xs ${!e?.isOnline ? "opacity-100" : "opacity-0"}`,
                                    children: "OFF",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("form", {
                        onSubmit: C,
                        className:
                          "bg-cream p-8 rounded-3xl border border-peach flex flex-col gap-6",
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2 border-b border-peach pb-4",
                            children: "Allgemeine Einstellungen",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, t.jsx)(d.Clock, { className: "w-4 h-4" }),
                                  " Aktuelle Wartezeit (Minuten)",
                                ],
                              }),
                              (0, t.jsx)("input", {
                                type: "number",
                                value: v.currentWaitTime,
                                onChange: (e) =>
                                  j({
                                    ...v,
                                    currentWaitTime:
                                      parseInt(e.target.value) || 0,
                                  }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal max-w-xs",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-xs text-charcoal/50 mt-2 font-bold",
                                children:
                                  "Wird im Checkout als geschätzte Zubereitungszeit angezeigt.",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, t.jsx)(x.default, {
                                    className: "w-4 h-4",
                                  }),
                                  " Promo-Banner Text",
                                ],
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                value: v.bannerText,
                                onChange: (e) =>
                                  j({ ...v, bannerText: e.target.value }),
                                placeholder:
                                  "z.B. Heute 10% auf alle Bubble Waffles!",
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-xs text-charcoal/50 mt-2 font-bold",
                                children:
                                  "Wird als Marquee im Header angezeigt. Leer lassen zum Ausblenden.",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, t.jsx)(h.AlertTriangle, {
                                    className: "w-4 h-4",
                                  }),
                                  " Notfall-Banner Text",
                                ],
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                value: v.emergencyNotice,
                                onChange: (e) =>
                                  j({ ...v, emergencyNotice: e.target.value }),
                                placeholder:
                                  "z.B. Wir haben heute wegen Krankheit geschlossen.",
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-xs text-charcoal/50 mt-2 font-bold",
                                children:
                                  "Wird nur angezeigt, wenn der Store Offline geschaltet ist.",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, t.jsx)(u.Calendar, {
                                    className: "w-4 h-4",
                                  }),
                                  " Öffnungszeiten (Anzeige)",
                                ],
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                value: v.openingHours,
                                onChange: (e) =>
                                  j({ ...v, openingHours: e.target.value }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: "Lieferzonen (PLZ, kommagetrennt)",
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                value: v.deliveryZones,
                                onChange: (e) =>
                                  j({ ...v, deliveryZones: e.target.value }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                          (0, t.jsx)("button", {
                            type: "submit",
                            disabled: N,
                            className:
                              "mt-6 bg-terracotta text-cream py-4 rounded-xl font-bold text-lg shadow-clay hover:bg-brown transition-colors disabled:opacity-50",
                            children: N
                              ? "Speichert..."
                              : "Einstellungen speichern",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-cream p-8 rounded-3xl border border-peach flex flex-col gap-6",
                        children: [
                          (0, t.jsxs)("h2", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2 border-b border-peach pb-4 flex items-center gap-2",
                            children: [
                              (0, t.jsx)(m.Tag, {
                                className: "w-6 h-6 text-terracotta",
                              }),
                              " Promo Codes",
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "bg-sand p-4 rounded-2xl flex gap-3 items-end",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                  (0, t.jsx)("label", {
                                    className:
                                      "block text-xs font-bold text-brown mb-1",
                                    children: "Code",
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "text",
                                    value: T.code,
                                    onChange: (e) =>
                                      M({ ...T, code: e.target.value }),
                                    placeholder: "z.B. SUMMER24",
                                    className:
                                      "w-full bg-cream border border-peach px-3 py-2 rounded-xl outline-none font-bold uppercase",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "w-32",
                                children: [
                                  (0, t.jsx)("label", {
                                    className:
                                      "block text-xs font-bold text-brown mb-1",
                                    children: "Typ",
                                  }),
                                  (0, t.jsxs)("select", {
                                    value: T.type,
                                    onChange: (e) =>
                                      M({ ...T, type: e.target.value }),
                                    className:
                                      "w-full bg-cream border border-peach px-3 py-2 rounded-xl outline-none font-bold",
                                    children: [
                                      (0, t.jsx)("option", {
                                        value: "fixed",
                                        children: "€ Rabatt",
                                      }),
                                      (0, t.jsx)("option", {
                                        value: "percent",
                                        children: "% Rabatt",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "w-24",
                                children: [
                                  (0, t.jsx)("label", {
                                    className:
                                      "block text-xs font-bold text-brown mb-1",
                                    children: "Wert",
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "number",
                                    value: T.amount || "",
                                    onChange: (e) =>
                                      M({
                                        ...T,
                                        amount: parseFloat(e.target.value) || 0,
                                      }),
                                    className:
                                      "w-full bg-cream border border-peach px-3 py-2 rounded-xl outline-none font-bold",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("button", {
                                onClick: D,
                                className:
                                  "bg-terracotta text-cream px-4 py-2 rounded-xl font-bold mb-[1px]",
                                children: (0, t.jsx)(b.Plus, { size: 20 }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              k.map((e) =>
                                (0, t.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex justify-between items-center bg-white p-4 rounded-2xl border border-peach shadow-sm",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className:
                                              "font-calistoga text-lg text-terracotta",
                                            children: e.id,
                                          }),
                                          (0, t.jsx)("span", {
                                            className:
                                              "px-2 py-1 bg-sand text-brown rounded-full text-[10px] font-black uppercase tracking-widest",
                                            children:
                                              "fixed" === e.type
                                                ? `${e.amount}€`
                                                : `${e.amount}%`,
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("button", {
                                        onClick: () => A(e.id),
                                        className:
                                          "text-charcoal/40 hover:text-red-500 transition-colors",
                                        children: (0, t.jsx)(p.Trash2, {
                                          size: 18,
                                        }),
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                              0 === k.length &&
                                (0, t.jsx)("div", {
                                  className:
                                    "text-sm font-bold text-charcoal/50",
                                  children: "Keine Gutscheincodes vorhanden.",
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-cream p-8 rounded-3xl border border-peach flex flex-col gap-6",
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2 border-b border-peach pb-4 text-red-600",
                            children: "Entwickler-Optionen",
                          }),
                          (0, t.jsx)("p", {
                            className: "font-bold text-charcoal/70",
                            children:
                              "Mit dieser Option kannst du das Backend mit den anfänglichen Demo-Daten (Menü, Analytics, Bestellungen) befüllen.",
                          }),
                          (0, t.jsx)("button", {
                            onClick: async () => {
                              if (
                                confirm(
                                  "Achtung: Dies fügt Dummy-Daten zur Datenbank hinzu. Fortfahren?",
                                )
                              )
                                try {
                                  (
                                    await fetch("/api/admin/seed", {
                                      method: "POST",
                                    })
                                  ).ok
                                    ? y({
                                        title: "Erfolg",
                                        message: "Datenbank wurde befüllt!",
                                        type: "success",
                                      })
                                    : y({
                                        title: "Fehler",
                                        message: "Seed fehlgeschlagen",
                                        type: "error",
                                      });
                                } catch (e) {
                                  y({
                                    title: "Fehler",
                                    message: "Seed fehlgeschlagen",
                                    type: "error",
                                  });
                                }
                            },
                            className:
                              "bg-red-500 text-white py-3 px-6 rounded-xl font-bold shadow-clay hover:bg-red-600 transition-colors self-start",
                            children: "Datenbank initialisieren (Seed)",
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          });
        },
      ],
      308204,
    );
  },
]);
