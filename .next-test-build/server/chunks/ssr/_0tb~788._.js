module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
  202558,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(346271),
      d = a.i(621216);
    a.s([
      "GiganticTypography",
      0,
      function ({
        children: a,
        className: e = "",
        delay: f = 0,
        highlightWords: g = [],
        highlightColor: h = "#CC624C",
        as: i = "div",
      }) {
        let j = (0, d.useReducedMotion)(),
          k = "string" == typeof a ? a : String(a),
          l = k.split(" "),
          m = {
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
          n = c.motion[i];
        return j
          ? (0, b.jsx)(i, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${e}`,
              children: k,
            })
          : (0, b.jsx)(n, {
              variants: {
                hidden: { opacity: 0 },
                visible: (a = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: f },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${e}`,
              children: l.map((a, d) => {
                let e = a.replace(/[.,!?]/g, ""),
                  f = g.includes(e);
                return (0, b.jsx)(
                  c.motion.span,
                  {
                    variants: m,
                    style: { color: f ? h : "inherit" },
                    className: "inline-block relative z-10",
                    children: a,
                  },
                  d,
                );
              }),
            });
      },
    ]);
  },
  150096,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("arrow-down", [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
    ]);
    a.s(["default", 0, b]);
  },
  347929,
  (a) => {
    "use strict";
    var b = a.i(150096);
    a.s(["ArrowDown", () => b.default]);
  },
  694369,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]);
    a.s(["default", 0, b]);
  },
  674746,
  (a) => {
    "use strict";
    var b = a.i(694369);
    a.s(["Send", () => b.default]);
  },
  16326,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(995180),
      g = a.i(901299),
      h = a.i(674746),
      i = a.i(944597),
      j = a.i(347929);
    a.i(69387);
    var k = a.i(691431),
      l = a.i(601787),
      m = a.i(420237),
      n = a.i(941035),
      o = a.i(202558);
    let p = [
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
    a.s([
      "default",
      0,
      function () {
        let [a, q] = (0, c.useState)(null),
          [r, s] = (0, c.useState)({ name: "", email: "", message: "" }),
          [t, u] = (0, c.useState)(!1),
          { addToast: v } = (0, n.useToastStore)(),
          { scrollYProgress: w } = (0, f.useScroll)(),
          x = (0, g.useTransform)(w, [0, 1], [300, 0]),
          y = async (a) => {
            if ((a.preventDefault(), r.name && r.email && r.message)) {
              u(!0);
              try {
                (await (0, l.addDoc)(
                  (0, k.collection)(m.db, "support_messages"),
                  { ...r, createdAt: new Date().toISOString(), status: "new" },
                ),
                  v({
                    title: "Nachricht gesendet!",
                    message: "Wir melden uns bald bei dir.",
                    type: "success",
                  }),
                  s({ name: "", email: "", message: "" }));
              } catch (a) {
                (console.error(a),
                  v({
                    title: "Fehler",
                    message: "Nachricht konnte nicht gesendet werden.",
                    type: "error",
                  }));
              } finally {
                u(!1);
              }
            }
          };
        return (0, b.jsxs)("div", {
          className:
            "min-h-[400vh] bg-transparent text-[#2d1f19] font-nunito relative",
          children: [
            (0, b.jsxs)("section", {
              className:
                "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
              children: [
                (0, b.jsx)(o.GiganticTypography, {
                  as: "h1",
                  highlightWords: ["helfen?"],
                  highlightColor: "#CC624C",
                  className:
                    "text-center justify-center max-w-[1200px] mx-auto",
                  children: "Wie können wir helfen?",
                }),
                (0, b.jsx)("p", {
                  className:
                    "font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80",
                  children:
                    "Scroll weiter, um Antworten zu finden oder schreib uns.",
                }),
                (0, b.jsx)(d.motion.div, {
                  animate: { y: [0, 10, 0] },
                  transition: { repeat: 1 / 0, duration: 2 },
                  className:
                    "absolute bottom-10 flex flex-col items-center opacity-50",
                  children: (0, b.jsx)(j.ArrowDown, {
                    size: 40,
                    className: "text-terracotta",
                  }),
                }),
              ],
            }),
            (0, b.jsxs)("section", {
              id: "faq",
              className:
                "min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center",
              children: [
                (0, b.jsx)(o.GiganticTypography, {
                  delay: 0.2,
                  className: "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center",
                  children: "Fragen blubbern auf.",
                }),
                (0, b.jsx)("div", {
                  className:
                    "relative w-full max-w-[1000px] h-[60vh] flex flex-wrap justify-center items-center gap-6",
                  children: p.map((c, f) => {
                    let g = a === f;
                    return (0, b.jsx)(
                      d.motion.div,
                      {
                        initial: { opacity: 0, y: 100 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-100px" },
                        transition: { type: "spring", delay: 0.1 * f },
                        onClick: () => q(g ? null : f),
                        className: `cursor-pointer rounded-full p-8 flex items-center justify-center text-center transition-all duration-500 shadow-clay ${g ? "bg-terracotta text-white scale-110 z-20 aspect-auto rounded-3xl w-full max-w-[400px]" : "bg-cream/80 backdrop-blur-md text-charcoal hover:scale-105 aspect-square w-[200px] md:w-[250px]"}`,
                        children: (0, b.jsx)(e.AnimatePresence, {
                          mode: "wait",
                          children: g
                            ? (0, b.jsx)(
                                d.motion.div,
                                {
                                  initial: { opacity: 0, scale: 0.8 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, scale: 0.8 },
                                  className: "font-nunito text-lg font-bold",
                                  children: c.answer,
                                },
                                "a",
                              )
                            : (0, b.jsx)(
                                d.motion.div,
                                {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  className:
                                    "font-calistoga text-xl md:text-2xl",
                                  children: c.question,
                                },
                                "q",
                              ),
                        }),
                      },
                      f,
                    );
                  }),
                }),
              ],
            }),
            (0, b.jsxs)("section", {
              className:
                "min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden",
              children: [
                (0, b.jsx)(o.GiganticTypography, {
                  className:
                    "!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center z-10",
                  children: "Nichts gefunden?",
                }),
                (0, b.jsxs)("div", {
                  className:
                    "w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    (0, b.jsx)(d.motion.div, {
                      style: { y: x },
                      className: "z-10",
                      children: (0, b.jsxs)("form", {
                        onSubmit: y,
                        className:
                          "bg-cream/90 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-clay border border-peach/50 flex flex-col gap-6",
                        children: [
                          (0, b.jsx)("h2", {
                            className:
                              "font-calistoga text-3xl text-charcoal mb-4",
                            children: "Schreib uns",
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                children: "Dein Name",
                              }),
                              (0, b.jsx)("input", {
                                type: "text",
                                required: !0,
                                value: r.name,
                                onChange: (a) =>
                                  s({ ...r, name: a.target.value }),
                                className:
                                  "w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner",
                                placeholder: "Dein Name",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                children: "Deine E-Mail",
                              }),
                              (0, b.jsx)("input", {
                                type: "email",
                                required: !0,
                                value: r.email,
                                onChange: (a) =>
                                  s({ ...r, email: a.target.value }),
                                className:
                                  "w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner",
                                placeholder: "mail@beispiel.de",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block text-sm font-black text-brown/70 uppercase tracking-widest mb-2 ml-2",
                                children: "Nachricht",
                              }),
                              (0, b.jsx)("textarea", {
                                required: !0,
                                value: r.message,
                                onChange: (a) =>
                                  s({ ...r, message: a.target.value }),
                                className:
                                  "w-full bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-terracotta px-6 py-4 rounded-[20px] font-bold text-charcoal focus:outline-none transition-all shadow-inner min-h-[150px] resize-none",
                                placeholder: "Was liegt dir auf dem Herzen?",
                              }),
                            ],
                          }),
                          (0, b.jsx)("button", {
                            type: "submit",
                            disabled: t,
                            className:
                              "mt-4 w-full bg-terracotta text-white py-5 rounded-[20px] font-black text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-clay disabled:opacity-50",
                            children: t
                              ? "Wird gesendet..."
                              : (0, b.jsxs)(b.Fragment, {
                                  children: [
                                    "Senden ",
                                    (0, b.jsx)(h.Send, { size: 24 }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    }),
                    (0, b.jsx)("div", {
                      className: "flex flex-col gap-8 z-10",
                      children: (0, b.jsxs)(d.motion.div, {
                        initial: { opacity: 0, x: 50 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0 },
                        className:
                          "bg-[#3a9d52]/10 border border-[#3a9d52]/20 rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-md",
                        children: [
                          (0, b.jsx)("div", {
                            className:
                              "w-20 h-20 bg-[#3a9d52] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#3a9d52]/30 mb-6",
                            children: (0, b.jsx)(i.MessageCircle, { size: 40 }),
                          }),
                          (0, b.jsx)("h3", {
                            className:
                              "font-calistoga text-3xl text-[#3a9d52] mb-4",
                            children: "Direkt Texten?",
                          }),
                          (0, b.jsx)("p", {
                            className:
                              "text-[#3a9d52]/80 text-lg font-bold mb-8",
                            children:
                              "Schreib uns einfach auf WhatsApp. Wir antworten superschnell.",
                          }),
                          (0, b.jsx)("a", {
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
];

//# sourceMappingURL=_0tb~788._.js.map
