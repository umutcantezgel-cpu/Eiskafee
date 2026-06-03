(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  893999,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]);
    e.s(["default", 0, t]);
  },
  764154,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(846932),
      i = e.i(772328);
    e.s([
      "GiganticTypography",
      0,
      function ({
        children: e,
        className: r = "",
        delay: s = 0,
        highlightWords: n = [],
        highlightColor: l = "#CC624C",
        as: c = "div",
      }) {
        let o = (0, i.useReducedMotion)(),
          d = "string" == typeof e ? e : String(e),
          m = d.split(" "),
          x = {
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
            hidden: {
              opacity: 0,
              y: 80,
              scale: 0.8,
              filter: "blur(10px)",
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
          },
          p = a.motion[c];
        return o
          ? (0, t.jsx)(c, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${r}`,
              children: d,
            })
          : (0, t.jsx)(p, {
              variants: {
                hidden: { opacity: 0 },
                visible: (e = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: s },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${r}`,
              children: m.map((e, i) => {
                let r = e.replace(/[.,!?]/g, ""),
                  s = n.includes(r);
                return (0, t.jsx)(
                  a.motion.span,
                  {
                    variants: x,
                    style: { color: s ? l : "inherit" },
                    className: "inline-block relative z-10",
                    children: e,
                  },
                  i,
                );
              }),
            });
      },
    ]);
  },
  441978,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("arrow-down", [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
    ]);
    e.s(["default", 0, t]);
  },
  635416,
  (e) => {
    "use strict";
    var t = e.i(441978);
    e.s(["ArrowDown", () => t.default]);
  },
  730274,
  (e) => {
    "use strict";
    var t = e.i(893999);
    e.s(["Send", () => t.default]);
  },
  704348,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      i = e.i(846932),
      r = e.i(88653),
      s = e.i(310542),
      n = e.i(895420),
      l = e.i(730274),
      c = e.i(615227),
      o = e.i(635416);
    e.i(436180);
    var d = e.i(746939),
      m = e.i(263802),
      x = e.i(959141),
      p = e.i(74909),
      h = e.i(764154);
    let u = [
      {
        question: "Liefert ihr?",
        answer:
          "Ja, in ausgewählte PLZs (z.B. 35576, 35578). Check es im Checkout!",
      },
      {
        question: "Was ist in der Box?",
        answer: "2 Waffeln, 4 Soßen, Erdbeeren & sehr viel Liebe.",
      },
      {
        question: "Vegan?",
        answer: "Einige Toppings/Soßen sind vegan. Am Teig tüfteln wir noch!",
      },
      {
        question: "Reservieren?",
        answer: "Einfach via WhatsApp oder über die Reservierungs-Seite.",
      },
    ];
    e.s([
      "default",
      0,
      function () {
        let [e, f] = (0, a.useState)(null),
          [g, b] = (0, a.useState)({ name: "", email: "", message: "" }),
          [w, y] = (0, a.useState)(!1),
          { addToast: v } = (0, p.useToastStore)(),
          { scrollYProgress: j } = (0, s.useScroll)(),
          N = (0, n.useTransform)(j, [0, 1], [300, 0]),
          k = async (e) => {
            if ((e.preventDefault(), g.name && g.email && g.message)) {
              y(!0);
              try {
                (await (0, m.addDoc)(
                  (0, d.collection)(x.db, "support_messages"),
                  { ...g, createdAt: new Date().toISOString(), status: "new" },
                ),
                  v({
                    title: "Nachricht gesendet!",
                    message: "Wir melden uns bald bei dir.",
                    type: "success",
                  }),
                  b({ name: "", email: "", message: "" }));
              } catch (e) {
                (console.error(e),
                  v({
                    title: "Fehler",
                    message: "Nachricht konnte nicht gesendet werden.",
                    type: "error",
                  }));
              } finally {
                y(!1);
              }
            }
          };
        return (0, t.jsxs)("div", {
          className:
            "min-h-[400vh] bg-transparent text-[#2d1f19] font-nunito relative",
          children: [
            (0, t.jsxs)("section", {
              className:
                "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
              children: [
                (0, t.jsx)(h.GiganticTypography, {
                  as: "h1",
                  highlightWords: ["helfen?"],
                  highlightColor: "#CC624C",
                  className:
                    "text-center justify-center max-w-[1200px] mx-auto",
                  children: "Wie können wir helfen?",
                }),
                (0, t.jsx)("p", {
                  className:
                    "font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80",
                  children:
                    "Scroll weiter, um Antworten zu finden oder schreib uns.",
                }),
                (0, t.jsx)(i.motion.div, {
                  animate: { y: [0, 10, 0] },
                  transition: { repeat: 1 / 0, duration: 2 },
                  className:
                    "absolute bottom-10 flex flex-col items-center opacity-50",
                  children: (0, t.jsx)(o.ArrowDown, {
                    size: 40,
                    className: "text-terracotta",
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("section", {
              id: "faq",
              className:
                "min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center",
              children: [
                (0, t.jsx)(h.GiganticTypography, {
                  delay: 0.2,
                  className: "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center",
                  children: "Fragen blubbern auf.",
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative w-full max-w-[1000px] h-[60vh] flex flex-wrap justify-center items-center gap-6",
                  children: u.map((a, s) => {
                    let n = e === s;
                    return (0, t.jsx)(
                      i.motion.div,
                      {
                        initial: { opacity: 0, y: 100 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-100px" },
                        transition: { type: "spring", delay: 0.1 * s },
                        onClick: () => f(n ? null : s),
                        className: `cursor-pointer rounded-full p-8 flex items-center justify-center text-center transition-all duration-500 shadow-clay ${n ? "bg-terracotta text-white scale-110 z-20 aspect-auto rounded-3xl w-full max-w-[400px]" : "bg-cream/80 backdrop-blur-md text-charcoal hover:scale-105 aspect-square w-[200px] md:w-[250px]"}`,
                        children: (0, t.jsx)(r.AnimatePresence, {
                          mode: "wait",
                          children: n
                            ? (0, t.jsx)(
                                i.motion.div,
                                {
                                  initial: { opacity: 0, scale: 0.8 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, scale: 0.8 },
                                  className: "font-nunito text-lg font-bold",
                                  children: a.answer,
                                },
                                "a",
                              )
                            : (0, t.jsx)(
                                i.motion.div,
                                {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  className:
                                    "font-calistoga text-xl md:text-2xl",
                                  children: a.question,
                                },
                                "q",
                              ),
                        }),
                      },
                      s,
                    );
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("section", {
              className:
                "min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden",
              children: [
                (0, t.jsx)(h.GiganticTypography, {
                  className:
                    "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center z-10",
                  children: "Nichts gefunden?",
                }),
                (0, t.jsxs)("div", {
                  className:
                    "w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    (0, t.jsx)(i.motion.div, {
                      style: { y: N },
                      className: "z-10",
                      children: (0, t.jsxs)("form", {
                        onSubmit: k,
                        className:
                          "bg-cream/90 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-clay border border-peach/50 flex flex-col gap-6",
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "font-calistoga text-3xl text-charcoal mb-4",
                            children: "Schreib uns",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                children: "Dein Name",
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                required: !0,
                                value: g.name,
                                onChange: (e) =>
                                  b({ ...g, name: e.target.value }),
                                className:
                                  "w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner",
                                placeholder: "Dein Name",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                children: "Deine E-Mail",
                              }),
                              (0, t.jsx)("input", {
                                type: "email",
                                required: !0,
                                value: g.email,
                                onChange: (e) =>
                                  b({ ...g, email: e.target.value }),
                                className:
                                  "w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner",
                                placeholder: "mail@beispiel.de",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                children: "Nachricht",
                              }),
                              (0, t.jsx)("textarea", {
                                required: !0,
                                value: g.message,
                                onChange: (e) =>
                                  b({ ...g, message: e.target.value }),
                                className:
                                  "w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner min-h-[150px] resize-none",
                                placeholder: "Was liegt dir auf dem Herzen?",
                              }),
                            ],
                          }),
                          (0, t.jsx)("button", {
                            type: "submit",
                            disabled: w,
                            className:
                              "mt-4 w-full bg-terracotta text-white py-5 rounded-[20px] font-black text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay disabled:opacity-50",
                            children: w
                              ? "Wird gesendet..."
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    "Senden ",
                                    (0, t.jsx)(l.Send, { size: 24 }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "flex flex-col gap-8 z-10",
                      children: (0, t.jsxs)(i.motion.div, {
                        initial: { opacity: 0, x: 50 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0 },
                        className:
                          "bg-[#3a9d52]/10 border border-[#3a9d52]/20 rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-md",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "w-20 h-20 bg-[#3a9d52] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#3a9d52]/30 mb-6",
                            children: (0, t.jsx)(c.MessageCircle, { size: 40 }),
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "font-calistoga text-3xl text-[#3a9d52] mb-4",
                            children: "Direkt Texten?",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-[#3a9d52]/80 text-lg font-bold mb-8",
                            children:
                              "Schreib uns einfach auf WhatsApp. Wir antworten superschnell.",
                          }),
                          (0, t.jsx)("a", {
                            href: "https://wa.me/49123456789",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "bg-[#3a9d52] text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-[#3a9d52]/30",
                            children: "WhatsApp Chat Starten",
                          }),
                        ],
                      }),
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
