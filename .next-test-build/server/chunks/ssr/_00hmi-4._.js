module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
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
  677874,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.i(69387);
    var c = a.i(132787),
      d = a.i(601787),
      e = a.i(420237);
    a.s([
      "useStoreSettings",
      0,
      function () {
        let [a, f] = (0, b.useState)(null),
          [g, h] = (0, b.useState)(!0),
          [i, j] = (0, b.useState)(null);
        return (
          (0, b.useEffect)(() => {
            let a = (0, d.onSnapshot)(
              (0, c.doc)(e.db, "store_settings", "general"),
              (a) => {
                (a.exists() ? f({ id: a.id, ...a.data() }) : f(null),
                  h(!1),
                  j(null));
              },
              (a) => {
                (console.error("useStoreSettings error:", a), j(a), h(!1));
              },
            );
            return () => a();
          }, []),
          { settings: a, loading: g, error: i }
        );
      },
    ]);
  },
  871281,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("tag", [
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
    a.s(["default", 0, b]);
  },
  31247,
  (a) => {
    "use strict";
    var b = a.i(871281);
    a.s(["Tag", () => b.default]);
  },
  415337,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ]);
    a.s(["default", 0, b]);
  },
  308311,
  (a) => {
    "use strict";
    var b = a.i(415337);
    a.s(["Clock", () => b.default]);
  },
  991645,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("power", [
      ["path", { d: "M12 2v10", key: "mnfbl" }],
      ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
    ]);
    a.s(["default", 0, b]);
  },
  593741,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("megaphone", [
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
    a.s(["default", 0, b]);
  },
  155818,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    a.s(["default", 0, b]);
  },
  470944,
  (a) => {
    "use strict";
    var b = a.i(155818);
    a.s(["Calendar", () => b.default]);
  },
  683835,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("trash-2", [
      ["path", { d: "M10 11v6", key: "nco0om" }],
      ["path", { d: "M14 11v6", key: "outv1u" }],
      [
        "path",
        { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" },
      ],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
    ]);
    a.s(["default", 0, b]);
  },
  980180,
  (a) => {
    "use strict";
    var b = a.i(683835);
    a.s(["Trash2", () => b.default]);
  },
  520553,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(677874),
      f = a.i(420237);
    a.i(69387);
    var g = a.i(132787),
      h = a.i(601787),
      i = a.i(691431),
      j = a.i(991645),
      j = j,
      k = a.i(308311),
      l = a.i(593741),
      l = l,
      m = a.i(470944),
      n = a.i(390702),
      o = a.i(31247),
      p = a.i(980180),
      q = a.i(403512),
      r = a.i(941035);
    a.s(
      [
        "default",
        0,
        function () {
          let { settings: a, loading: s } = (0, e.useStoreSettings)(),
            { addToast: t } = (0, r.useToastStore)(),
            [u, v] = (0, c.useState)({
              currentWaitTime: 15,
              bannerText: "",
              emergencyNotice: "",
              openingHours: "Mi-Sa 12-19 Uhr, So 13-19 Uhr",
              deliveryZones: "35576, 35578",
            }),
            [w, x] = (0, c.useState)(!1),
            [y, z] = (0, c.useState)([]),
            [A, B] = (0, c.useState)({ code: "", type: "fixed", amount: 0 }),
            C = async () => {
              try {
                let a = await (0, h.getDocs)(
                  (0, i.collection)(f.db, "promo_codes"),
                );
                z(a.docs.map((a) => ({ id: a.id, ...a.data() })));
              } catch (a) {
                console.error(a);
              }
            };
          (0, c.useEffect)(() => {
            (a &&
              v({
                currentWaitTime: a.currentWaitTime || 15,
                bannerText: a.bannerText || "",
                emergencyNotice: a.emergencyNotice || "",
                openingHours: a.openingHours || "Mi-Sa 12-19 Uhr, So 13-19 Uhr",
                deliveryZones: a.deliveryZones || "35576, 35578",
              }),
              C());
          }, [a]);
          let D = async () => {
              if (a)
                try {
                  (await (0, h.updateDoc)(
                    (0, g.doc)(f.db, "store_settings", "general"),
                    { isOnline: !a.isOnline },
                  ),
                    t({
                      title: a.isOnline
                        ? "Notfall-Stopp aktiv"
                        : "Shop ist Online",
                      message: a.isOnline
                        ? "Bestellannahme gestoppt."
                        : "Bestellungen werden jetzt angenommen.",
                      type: a.isOnline ? "error" : "success",
                    }));
                } catch (a) {
                  (console.error(a),
                    t({
                      title: "Fehler",
                      message: "Status konnte nicht geändert werden.",
                      type: "error",
                    }));
                }
            },
            E = async (a) => {
              (a.preventDefault(), x(!0));
              try {
                (await (0, h.setDoc)(
                  (0, g.doc)(f.db, "store_settings", "general"),
                  { ...u },
                  { merge: !0 },
                ),
                  t({
                    title: "Gespeichert",
                    message: "Einstellungen wurden erfolgreich aktualisiert.",
                    type: "success",
                  }));
              } catch (a) {
                (console.error(a),
                  t({
                    title: "Fehler",
                    message: "Speichern fehlgeschlagen.",
                    type: "error",
                  }));
              } finally {
                x(!1);
              }
            },
            F = async () => {
              if (A.code && !(A.amount <= 0))
                try {
                  let a = A.code.toUpperCase();
                  (await (0, h.setDoc)((0, g.doc)(f.db, "promo_codes", a), {
                    type: A.type,
                    amount: A.amount,
                    active: !0,
                  }),
                    B({ code: "", type: "fixed", amount: 0 }),
                    C(),
                    t({ title: "Gutschein erstellt", type: "success" }));
                } catch (a) {
                  console.error(a);
                }
            },
            G = async (a) => {
              try {
                (await (0, h.deleteDoc)((0, g.doc)(f.db, "promo_codes", a)),
                  C());
              } catch (a) {
                console.error(a);
              }
            };
          return (0, b.jsxs)("div", {
            className: "p-8 max-w-4xl mx-auto",
            children: [
              (0, b.jsxs)("div", {
                className: "mb-10",
                children: [
                  (0, b.jsx)("h1", {
                    className: "font-calistoga text-4xl text-charcoal mb-2",
                    children: "Einstellungen",
                  }),
                  (0, b.jsx)("p", {
                    className: "font-bold text-charcoal/60",
                    children: "Store-Status, Wartezeiten und Texte verwalten",
                  }),
                ],
              }),
              s
                ? (0, b.jsxs)("div", {
                    className: "animate-pulse flex flex-col gap-8",
                    children: [
                      (0, b.jsx)("div", {
                        className: "h-32 bg-cream rounded-3xl",
                      }),
                      (0, b.jsx)("div", {
                        className: "h-64 bg-cream rounded-3xl",
                      }),
                    ],
                  })
                : (0, b.jsxs)("div", {
                    className: "flex flex-col gap-8",
                    children: [
                      (0, b.jsxs)("div", {
                        className: `p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-500 ${a?.isOnline ? "bg-mint/20 border-mint/40" : "bg-red-500/10 border-red-500/20"} border-2`,
                        children: [
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsxs)("h2", {
                                className:
                                  "font-calistoga text-2xl text-charcoal mb-2 flex items-center gap-3",
                                children: [
                                  (0, b.jsx)(j.default, {
                                    className: a?.isOnline
                                      ? "text-mint"
                                      : "text-red-500",
                                  }),
                                  a?.isOnline
                                    ? "Store ist Online"
                                    : "Store ist Offline (Notfall-Stopp)",
                                ],
                              }),
                              (0, b.jsx)("p", {
                                className: "font-bold text-charcoal/70",
                                children: a?.isOnline
                                  ? "Kunden können aktuell Bestellungen aufgeben."
                                  : "Die Bestellannahme ist komplett deaktiviert. Der Shop zeigt einen Wartungshinweis.",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("button", {
                            onClick: D,
                            className: `relative flex h-14 w-28 items-center rounded-full p-2 transition-colors duration-500 shrink-0 ${a?.isOnline ? "bg-mint" : "bg-red-500"}`,
                            children: [
                              (0, b.jsx)(d.motion.div, {
                                layout: !0,
                                transition: {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                },
                                className:
                                  "h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center",
                                children: (0, b.jsx)(j.default, {
                                  className: `w-5 h-5 ${a?.isOnline ? "text-mint" : "text-red-500"}`,
                                }),
                              }),
                              (0, b.jsxs)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-between px-4 pointer-events-none",
                                children: [
                                  (0, b.jsx)("span", {
                                    className: `text-white font-bold text-xs ${a?.isOnline ? "opacity-100" : "opacity-0"}`,
                                    children: "ON",
                                  }),
                                  (0, b.jsx)("span", {
                                    className: `text-white font-bold text-xs ${!a?.isOnline ? "opacity-100" : "opacity-0"}`,
                                    children: "OFF",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, b.jsxs)("form", {
                        onSubmit: E,
                        className:
                          "bg-cream p-8 rounded-3xl border border-peach flex flex-col gap-6",
                        children: [
                          (0, b.jsx)("h2", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2 border-b border-peach pb-4",
                            children: "Allgemeine Einstellungen",
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, b.jsx)(k.Clock, { className: "w-4 h-4" }),
                                  " Aktuelle Wartezeit (Minuten)",
                                ],
                              }),
                              (0, b.jsx)("input", {
                                type: "number",
                                value: u.currentWaitTime,
                                onChange: (a) =>
                                  v({
                                    ...u,
                                    currentWaitTime:
                                      parseInt(a.target.value) || 0,
                                  }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal max-w-xs",
                              }),
                              (0, b.jsx)("p", {
                                className:
                                  "text-xs text-charcoal/50 mt-2 font-bold",
                                children:
                                  "Wird im Checkout als geschätzte Zubereitungszeit angezeigt.",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, b.jsx)(l.default, {
                                    className: "w-4 h-4",
                                  }),
                                  " Promo-Banner Text",
                                ],
                              }),
                              (0, b.jsx)("input", {
                                type: "text",
                                value: u.bannerText,
                                onChange: (a) =>
                                  v({ ...u, bannerText: a.target.value }),
                                placeholder:
                                  "z.B. Heute 10% auf alle Bubble Waffles!",
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                              (0, b.jsx)("p", {
                                className:
                                  "text-xs text-charcoal/50 mt-2 font-bold",
                                children:
                                  "Wird als Marquee im Header angezeigt. Leer lassen zum Ausblenden.",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, b.jsx)(n.AlertTriangle, {
                                    className: "w-4 h-4",
                                  }),
                                  " Notfall-Banner Text",
                                ],
                              }),
                              (0, b.jsx)("input", {
                                type: "text",
                                value: u.emergencyNotice,
                                onChange: (a) =>
                                  v({ ...u, emergencyNotice: a.target.value }),
                                placeholder:
                                  "z.B. Wir haben heute wegen Krankheit geschlossen.",
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                              (0, b.jsx)("p", {
                                className:
                                  "text-xs text-charcoal/50 mt-2 font-bold",
                                children:
                                  "Wird nur angezeigt, wenn der Store Offline geschaltet ist.",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsxs)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: [
                                  (0, b.jsx)(m.Calendar, {
                                    className: "w-4 h-4",
                                  }),
                                  " Öffnungszeiten (Anzeige)",
                                ],
                              }),
                              (0, b.jsx)("input", {
                                type: "text",
                                value: u.openingHours,
                                onChange: (a) =>
                                  v({ ...u, openingHours: a.target.value }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "flex items-center gap-2 text-sm font-bold text-brown mb-2",
                                children: "Lieferzonen (PLZ, kommagetrennt)",
                              }),
                              (0, b.jsx)("input", {
                                type: "text",
                                value: u.deliveryZones,
                                onChange: (a) =>
                                  v({ ...u, deliveryZones: a.target.value }),
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-sand border border-peach focus:outline-none focus:border-terracotta font-bold text-charcoal",
                              }),
                            ],
                          }),
                          (0, b.jsx)("button", {
                            type: "submit",
                            disabled: w,
                            className:
                              "mt-6 bg-terracotta text-cream py-4 rounded-xl font-bold text-lg shadow-clay hover:bg-brown transition-colors disabled:opacity-50",
                            children: w
                              ? "Speichert..."
                              : "Einstellungen speichern",
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "bg-cream p-8 rounded-3xl border border-peach flex flex-col gap-6",
                        children: [
                          (0, b.jsxs)("h2", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2 border-b border-peach pb-4 flex items-center gap-2",
                            children: [
                              (0, b.jsx)(o.Tag, {
                                className: "w-6 h-6 text-terracotta",
                              }),
                              " Promo Codes",
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            className:
                              "bg-sand p-4 rounded-2xl flex gap-3 items-end",
                            children: [
                              (0, b.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                  (0, b.jsx)("label", {
                                    className:
                                      "block text-xs font-bold text-brown mb-1",
                                    children: "Code",
                                  }),
                                  (0, b.jsx)("input", {
                                    type: "text",
                                    value: A.code,
                                    onChange: (a) =>
                                      B({ ...A, code: a.target.value }),
                                    placeholder: "z.B. SUMMER24",
                                    className:
                                      "w-full bg-cream border border-peach px-3 py-2 rounded-xl outline-none font-bold uppercase",
                                  }),
                                ],
                              }),
                              (0, b.jsxs)("div", {
                                className: "w-32",
                                children: [
                                  (0, b.jsx)("label", {
                                    className:
                                      "block text-xs font-bold text-brown mb-1",
                                    children: "Typ",
                                  }),
                                  (0, b.jsxs)("select", {
                                    value: A.type,
                                    onChange: (a) =>
                                      B({ ...A, type: a.target.value }),
                                    className:
                                      "w-full bg-cream border border-peach px-3 py-2 rounded-xl outline-none font-bold",
                                    children: [
                                      (0, b.jsx)("option", {
                                        value: "fixed",
                                        children: "€ Rabatt",
                                      }),
                                      (0, b.jsx)("option", {
                                        value: "percent",
                                        children: "% Rabatt",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, b.jsxs)("div", {
                                className: "w-24",
                                children: [
                                  (0, b.jsx)("label", {
                                    className:
                                      "block text-xs font-bold text-brown mb-1",
                                    children: "Wert",
                                  }),
                                  (0, b.jsx)("input", {
                                    type: "number",
                                    value: A.amount || "",
                                    onChange: (a) =>
                                      B({
                                        ...A,
                                        amount: parseFloat(a.target.value) || 0,
                                      }),
                                    className:
                                      "w-full bg-cream border border-peach px-3 py-2 rounded-xl outline-none font-bold",
                                  }),
                                ],
                              }),
                              (0, b.jsx)("button", {
                                onClick: F,
                                className:
                                  "bg-terracotta text-cream px-4 py-2 rounded-xl font-bold mb-[1px]",
                                children: (0, b.jsx)(q.Plus, { size: 20 }),
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              y.map((a) =>
                                (0, b.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex justify-between items-center bg-white p-4 rounded-2xl border border-peach shadow-sm",
                                    children: [
                                      (0, b.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          (0, b.jsx)("div", {
                                            className:
                                              "font-calistoga text-lg text-terracotta",
                                            children: a.id,
                                          }),
                                          (0, b.jsx)("span", {
                                            className:
                                              "px-2 py-1 bg-sand text-brown rounded-full text-[10px] font-black uppercase tracking-widest",
                                            children:
                                              "fixed" === a.type
                                                ? `${a.amount}€`
                                                : `${a.amount}%`,
                                          }),
                                        ],
                                      }),
                                      (0, b.jsx)("button", {
                                        onClick: () => G(a.id),
                                        className:
                                          "text-charcoal/40 hover:text-red-500 transition-colors",
                                        children: (0, b.jsx)(p.Trash2, {
                                          size: 18,
                                        }),
                                      }),
                                    ],
                                  },
                                  a.id,
                                ),
                              ),
                              0 === y.length &&
                                (0, b.jsx)("div", {
                                  className:
                                    "text-sm font-bold text-charcoal/50",
                                  children: "Keine Gutscheincodes vorhanden.",
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "bg-cream p-8 rounded-3xl border border-peach flex flex-col gap-6",
                        children: [
                          (0, b.jsx)("h2", {
                            className:
                              "font-calistoga text-2xl text-charcoal mb-2 border-b border-peach pb-4 text-red-600",
                            children: "Entwickler-Optionen",
                          }),
                          (0, b.jsx)("p", {
                            className: "font-bold text-charcoal/70",
                            children:
                              "Mit dieser Option kannst du das Backend mit den anfänglichen Demo-Daten (Menü, Analytics, Bestellungen) befüllen.",
                          }),
                          (0, b.jsx)("button", {
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
                                    ? t({
                                        title: "Erfolg",
                                        message: "Datenbank wurde befüllt!",
                                        type: "success",
                                      })
                                    : t({
                                        title: "Fehler",
                                        message: "Seed fehlgeschlagen",
                                        type: "error",
                                      });
                                } catch (a) {
                                  t({
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
      520553,
    );
  },
];

//# sourceMappingURL=_00hmi-4._.js.map
