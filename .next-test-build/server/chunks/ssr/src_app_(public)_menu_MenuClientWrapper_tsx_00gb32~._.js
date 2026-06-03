module.exports = [
  31755,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(50944),
      e = a.i(346271),
      f = a.i(923699);
    let g = {
      boxen: f.Boxen,
      bubble: f.BubbleWaffle,
      crepes: f.Crepes,
      kuchen: f.Cake,
      cookies: f.Cake,
      eisbecher: f.Eisbecher,
      shakes: f.Shakes,
      iced: f.Coffee,
      stullen: f.Pancakes,
      getraenke: f.Coffee,
    };
    function h({ categories: a, activeCategory: d, onChange: i }) {
      let j = (0, c.useRef)(null);
      return (
        (0, c.useEffect)(() => {
          if (!j.current) return;
          let a = j.current.querySelector('[data-active="true"]');
          a &&
            a.scrollIntoView({
              inline: "center",
              block: "nearest",
              behavior: "smooth",
            });
        }, [d]),
        (0, b.jsx)("div", {
          className:
            "sticky top-[88px] z-[800] bg-sand/90 backdrop-blur-md shadow-sm border-b border-peach",
          children: (0, b.jsx)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: (0, b.jsx)("div", {
              ref: j,
              className:
                "flex gap-2 overflow-x-auto py-3 hide-scrollbar snap-x snap-mandatory",
              children: a.map((a) => {
                let c = d === a.id,
                  h = g[a.id] || f.BubbleWaffle;
                return (0, b.jsxs)(
                  "button",
                  {
                    "data-active": c,
                    onClick: () => i(a.id),
                    className: `relative flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full whitespace-nowrap shrink-0 snap-start transition-colors duration-200 ${c ? "text-cream" : "text-charcoal hover:bg-cream/50"}`,
                    children: [
                      c &&
                        (0, b.jsx)(e.motion.div, {
                          layoutId: "activeMenuTab",
                          className:
                            "absolute inset-0 bg-terracotta rounded-full shadow-clay",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          },
                        }),
                      (0, b.jsxs)("span", {
                        className: "relative z-10 flex items-center gap-2",
                        children: [
                          (0, b.jsx)(h, { className: "w-4 h-4" }),
                          a.label,
                        ],
                      }),
                    ],
                  },
                  a.id,
                );
              }),
            }),
          }),
        })
      );
    }
    var i = a.i(262036),
      j = a.i(710139),
      k = a.i(521520),
      l = a.i(566535),
      m = a.i(901299),
      n = a.i(621216),
      o = a.i(474614);
    function p({ className: a, children: d, onClick: f }) {
      let g = (0, c.useRef)(null),
        h = (0, n.useReducedMotion)(),
        i = (0, k.useMotionValue)(0),
        j = (0, k.useMotionValue)(0),
        q = (0, l.useSpring)(i, { stiffness: 300, damping: 30 }),
        r = (0, l.useSpring)(j, { stiffness: 300, damping: 30 }),
        s = (0, m.useTransform)(r, [-1, 1], [10, -10]),
        t = (0, m.useTransform)(q, [-1, 1], [-10, 10]),
        u = (0, m.useTransform)(q, [-1, 1], [0, 100]),
        v = (0, m.useTransform)(r, [-1, 1], [0, 100]);
      return (0, b.jsxs)(e.motion.div, {
        ref: g,
        style: {
          perspective: 1200,
          rotateX: h ? 0 : s,
          rotateY: h ? 0 : t,
          transformStyle: "preserve-3d",
        },
        onMouseMove: (a) => {
          if (!g.current || h) return;
          let b = g.current.getBoundingClientRect(),
            c = b.width,
            d = b.height,
            e = a.clientX - b.left,
            f = a.clientY - b.top;
          (i.set((e / c) * 2 - 1), j.set((f / d) * 2 - 1));
        },
        onMouseLeave: () => {
          h || (i.set(0), j.set(0));
        },
        onClick: f,
        whileHover: h ? void 0 : { y: -5 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
        className: (0, o.twMerge)(
          "relative flex flex-col p-5 rounded-2xl bg-white shadow-clay cursor-pointer",
          "transition-shadow duration-300 hover:shadow-lg",
          a,
        ),
        children: [
          !h &&
            (0, b.jsx)(e.motion.div, {
              className:
                "pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay",
              style: {
                background: (0, m.useTransform)(
                  () =>
                    `radial-gradient(circle at ${u.get()}% ${v.get()}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
                ),
              },
            }),
          (0, b.jsx)("div", {
            className: "relative z-10 flex-grow",
            style: { transform: h ? "none" : "translateZ(20px)" },
            children: d,
          }),
        ],
      });
    }
    function q({ position: a, className: c, fillClass: d = "text-sand" }) {
      let e = "top" === a || "bottom" === a;
      return (0, b.jsx)("div", {
        className: (0, o.twMerge)(
          "absolute pointer-events-none overflow-hidden",
          e ? "left-0 right-0 h-3" : "top-0 bottom-0 w-3",
          "top" === a ? "-top-1.5" : "",
          "bottom" === a ? "-bottom-1.5" : "",
          "left" === a ? "-left-1.5" : "",
          "right" === a ? "-right-1.5" : "",
          c,
        ),
        "aria-hidden": "true",
        children: (0, b.jsxs)("svg", {
          width: "100%",
          height: "100%",
          className: d,
          children: [
            (0, b.jsx)("defs", {
              children: (0, b.jsx)("pattern", {
                id: `ticket-perf-${a}`,
                x: "0",
                y: "0",
                width: e ? 12 : 100,
                height: e ? 100 : 12,
                patternUnits: "userSpaceOnUse",
                children: (0, b.jsx)("circle", {
                  cx: e ? 6 : 12 * ("left" !== a),
                  cy: e ? 12 * ("top" !== a) : 6,
                  r: "4",
                  fill: "currentColor",
                }),
              }),
            }),
            (0, b.jsx)("rect", {
              width: "100%",
              height: "100%",
              fill: `url(#ticket-perf-${a})`,
            }),
          ],
        }),
      });
    }
    var r = a.i(238918),
      s = a.i(403512),
      t = a.i(769544);
    function u({
      title: a,
      desc: c,
      price: d,
      icon: e,
      isNew: f,
      className: g,
      quantity: h = 0,
      onIncrement: i,
      onDecrement: j,
      onClick: k,
    }) {
      return (0, b.jsxs)("div", {
        onClick: k,
        className: (0, o.twMerge)(
          "relative flex items-center p-4 bg-cream rounded-xl border-2 border-dashed border-terracotta/40 cursor-pointer",
          "transition-all duration-300 hover:border-terracotta hover:shadow-clay",
          g,
        ),
        children: [
          (0, b.jsx)(q, { position: "left", fillClass: "text-sand" }),
          (0, b.jsx)(q, { position: "right", fillClass: "text-sand" }),
          e &&
            (0, b.jsx)("div", {
              className:
                "flex-shrink-0 w-16 h-16 flex items-center justify-center text-terracotta mr-4",
              children: e,
            }),
          (0, b.jsxs)("div", {
            className: "flex-grow flex flex-col justify-center py-1",
            children: [
              (0, b.jsxs)("div", {
                className: "flex items-center gap-3 mb-1",
                children: [
                  (0, b.jsx)("h3", {
                    className: "font-calistoga text-xl text-charcoal",
                    children: a,
                  }),
                  f &&
                    (0, b.jsx)(r.EyebrowPill, {
                      label: "NEU",
                      statusColor: "bg-peach",
                    }),
                ],
              }),
              c &&
                (0, b.jsx)("p", {
                  className: "text-sm text-charcoal/70 line-clamp-2",
                  children: c,
                }),
            ],
          }),
          d &&
            (0, b.jsxs)("div", {
              className: "flex-shrink-0 ml-4 flex items-center gap-3",
              children: [
                (0, b.jsx)("span", {
                  className:
                    "font-bold text-lg text-terracotta whitespace-nowrap",
                  children: d,
                }),
                h > 0
                  ? (0, b.jsxs)("div", {
                      className:
                        "flex items-center gap-2 bg-white rounded-full p-1 border border-peach",
                      onClick: (a) => a.stopPropagation(),
                      children: [
                        (0, b.jsx)("button", {
                          onClick: (a) => {
                            (a.stopPropagation(), j?.());
                          },
                          className:
                            "w-7 h-7 flex items-center justify-center bg-cream rounded-full text-charcoal hover:bg-peach/50 transition-colors",
                          "aria-label": "Menge reduzieren",
                          children: (0, b.jsx)(t.Minus, { size: 14 }),
                        }),
                        (0, b.jsx)("span", {
                          className: "font-bold text-sm w-4 text-center",
                          children: h,
                        }),
                        (0, b.jsx)("button", {
                          onClick: (a) => {
                            (a.stopPropagation(), i?.());
                          },
                          className:
                            "w-7 h-7 flex items-center justify-center bg-terracotta rounded-full text-white hover:bg-brown transition-colors",
                          "aria-label": "Menge erhöhen",
                          children: (0, b.jsx)(s.Plus, { size: 14 }),
                        }),
                      ],
                    })
                  : (0, b.jsx)("button", {
                      className:
                        "bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm",
                      "aria-label": "Zum Warenkorb hinzufügen",
                      onClick: (a) => {
                        (a.stopPropagation(), i ? i() : k && k());
                      },
                      children: (0, b.jsx)(s.Plus, {
                        size: 18,
                        strokeWidth: 2.5,
                      }),
                    }),
              ],
            }),
        ],
      });
    }
    function v({ className: a }) {
      return (0, b.jsxs)("div", {
        className: (0, o.twMerge)(
          "flex flex-col p-5 rounded-2xl bg-white shadow-clay animate-pulse",
          "h-[320px]",
          a,
        ),
        children: [
          (0, b.jsx)("div", {
            className: "w-full h-40 bg-sand rounded-xl mb-4",
          }),
          (0, b.jsx)("div", { className: "w-3/4 h-6 bg-sand rounded-md mb-2" }),
          (0, b.jsx)("div", {
            className: "w-full h-4 bg-sand rounded-md mb-2",
          }),
          (0, b.jsx)("div", {
            className: "w-5/6 h-4 bg-sand rounded-md mb-auto",
          }),
          (0, b.jsxs)("div", {
            className: "flex justify-between items-center mt-4",
            children: [
              (0, b.jsx)("div", { className: "w-1/3 h-6 bg-sand rounded-md" }),
              (0, b.jsx)("div", { className: "w-8 h-8 bg-sand rounded-full" }),
            ],
          }),
        ],
      });
    }
    a.i(191684);
    var w = a.i(371947),
      x = a.i(492729),
      x = x,
      y = a.i(767644),
      y = y,
      z = a.i(307759),
      A = a.i(762492),
      B = a.i(571987);
    function C({ activeCategory: a }) {
      let { items: c, loading: d, error: f } = (0, j.useMenu)(a),
        g = (0, A.useStore)((a) => a.cart),
        h = (0, A.useStore)((a) => a.addToCart),
        k = (0, A.useStore)((a) => a.updateQuantity),
        l = (0, A.useStore)((a) => a.removeFromCart);
      return (0, b.jsxs)("div", {
        className: "max-w-7xl mx-auto px-6 py-12 min-h-[60vh]",
        children: [
          f &&
            (0, b.jsxs)("div", {
              className:
                "text-center text-red-500 font-bold p-12 bg-red-500/10 rounded-3xl",
              children: ["Fehler beim Laden der Produkte: ", f.message],
            }),
          d &&
            !f &&
            (0, b.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              children: Array.from({ length: 8 }).map((a, c) =>
                (0, b.jsx)(v, {}, c),
              ),
            }),
          !d &&
            !f &&
            0 === c.length &&
            (0, b.jsxs)(e.motion.div, {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className:
                "flex flex-col items-center justify-center text-center py-20 relative",
              children: [
                (0, b.jsx)(z.FloatingBlob, {
                  variant: "organic3",
                  color: "peach",
                  size: 300,
                  opacity: 0.3,
                  className: "absolute z-0",
                }),
                (0, b.jsxs)("div", {
                  className: "relative z-10",
                  children: [
                    (0, b.jsx)("span", {
                      className: "text-7xl mb-6 block",
                      children: "🧐",
                    }),
                    (0, b.jsx)("h3", {
                      className: "font-calistoga text-3xl text-charcoal mb-3",
                      children: "Nichts gefunden!",
                    }),
                    (0, b.jsxs)("p", {
                      className: "font-bold text-charcoal/70",
                      children: [
                        "In dieser Kategorie gibt es aktuell keine Leckereien.",
                        (0, b.jsx)("br", {}),
                        "Schau doch mal in einer anderen vorbei!",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          !d &&
            !f &&
            c.length > 0 &&
            (0, b.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              children: (0, b.jsx)(i.AnimatePresence, {
                mode: "popLayout",
                children: c.map((c, d) => {
                  let f = g.find((a) => a.id === c.id),
                    i = f?.quantity || 0,
                    j = () => {
                      i > 0
                        ? k(c.id, i + 1)
                        : h({
                            id: c.id,
                            name: c.name,
                            price: Number(c.price) || 0,
                          });
                    },
                    m = () => {
                      i > 1 ? k(c.id, i - 1) : l(c.id);
                    };
                  return (0, b.jsx)(
                    e.motion.div,
                    {
                      layout: !0,
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: 0.05 * d,
                      },
                      children:
                        "boxen" === a
                          ? (0, b.jsx)(u, {
                              title: c.name,
                              desc: c.desc,
                              price: String(c.price),
                              quantity: i,
                              onIncrement: j,
                              onDecrement: m,
                              onClick: 0 === i ? j : void 0,
                            })
                          : (0, b.jsx)(p, {
                              onClick: 0 === i ? j : void 0,
                              children: (0, b.jsxs)("div", {
                                className: "flex flex-col h-full relative",
                                children: [
                                  (0, b.jsx)("div", {
                                    className:
                                      "w-full aspect-[4/3] bg-cream rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-peach/30 relative",
                                    children: c.image
                                      ? (0, b.jsx)(B.default, {
                                          src: c.image,
                                          alt: c.name,
                                          fill: !0,
                                          className: "object-cover",
                                        })
                                      : (0, b.jsxs)("div", {
                                          className:
                                            "flex flex-col items-center justify-center text-peach/80",
                                          children: [
                                            (0, b.jsx)(y.default, {
                                              size: 32,
                                              className: "mb-2 opacity-50",
                                            }),
                                            (0, b.jsx)("span", {
                                              className:
                                                "text-xs font-bold uppercase tracking-wider opacity-60",
                                              children: "Kein Bild",
                                            }),
                                          ],
                                        }),
                                  }),
                                  (0, b.jsx)("h3", {
                                    className:
                                      "font-calistoga text-xl text-charcoal mb-2",
                                    children: c.name,
                                  }),
                                  (0, b.jsx)("p", {
                                    className:
                                      "text-sm text-charcoal/70 line-clamp-2 flex-grow mb-4",
                                    children: c.desc,
                                  }),
                                  (0, b.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between mt-auto",
                                    children: [
                                      (0, b.jsx)("span", {
                                        className:
                                          "font-bold text-lg text-terracotta whitespace-nowrap",
                                        children:
                                          "number" == typeof c.price
                                            ? `${c.price.toFixed(2).replace(".", ",")} €`
                                            : c.price,
                                      }),
                                      (0, b.jsx)("div", {
                                        onClick: (a) => a.stopPropagation(),
                                        children:
                                          i > 0
                                            ? (0, b.jsxs)(e.motion.div, {
                                                initial: {
                                                  opacity: 0,
                                                  width: 40,
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  width: "auto",
                                                },
                                                className:
                                                  "flex items-center gap-2 bg-cream rounded-full p-1 border border-peach shadow-sm",
                                                children: [
                                                  (0, b.jsx)("button", {
                                                    onClick: m,
                                                    className:
                                                      "w-8 h-8 flex items-center justify-center bg-white rounded-full text-charcoal hover:bg-peach/50 transition-colors",
                                                    "aria-label":
                                                      "Menge reduzieren",
                                                    children: (0, b.jsx)(
                                                      t.Minus,
                                                      { size: 16 },
                                                    ),
                                                  }),
                                                  (0, b.jsx)("span", {
                                                    className:
                                                      "font-bold text-sm w-4 text-center",
                                                    children: i,
                                                  }),
                                                  (0, b.jsx)("button", {
                                                    onClick: j,
                                                    className:
                                                      "w-8 h-8 flex items-center justify-center bg-terracotta rounded-full text-white hover:bg-brown transition-colors",
                                                    "aria-label":
                                                      "Menge erhöhen",
                                                    children: (0, b.jsx)(
                                                      s.Plus,
                                                      { size: 16 },
                                                    ),
                                                  }),
                                                ],
                                              })
                                            : (0, b.jsx)(e.motion.button, {
                                                whileTap: { scale: 0.9 },
                                                onClick: j,
                                                className:
                                                  "bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm",
                                                "aria-label":
                                                  "Zum Warenkorb hinzufügen",
                                                children: (0, b.jsx)(s.Plus, {
                                                  size: 18,
                                                  strokeWidth: 2.5,
                                                }),
                                              }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                    },
                    c.id,
                  );
                }),
              }),
            }),
          !d &&
            !f &&
            ("kuchen" === a || "cookies" === a || "toppings" === a) &&
            (0, b.jsxs)(e.motion.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              className:
                "mt-12 bg-peach/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-peach",
              children: [
                (0, b.jsx)("div", {
                  className:
                    "w-16 h-16 rounded-full bg-peach flex items-center justify-center shrink-0",
                  children: (0, b.jsx)(x.default, {
                    className: "w-8 h-8 text-terracotta",
                  }),
                }),
                (0, b.jsx)("div", {
                  className: "flex-1 text-center md:text-left",
                  children: (0, b.jsx)("p", {
                    className: "font-bold text-charcoal leading-relaxed",
                    children:
                      "Psst... frischen, leckeren Kuchen und viele weitere Specials findest du tagesaktuell in unserer Vitrine vor Ort in Wetzlar!",
                  }),
                }),
                (0, b.jsx)(w.TransitionLink, {
                  href: "/visit",
                  children: (0, b.jsx)("button", {
                    className:
                      "bg-terracotta text-cream px-6 py-3 rounded-full font-bold whitespace-nowrap shadow-clay hover:bg-brown transition-colors",
                    children: "Besuchen",
                  }),
                }),
              ],
            }),
        ],
      });
    }
    var D = a.i(544315),
      E = a.i(202558);
    function F() {
      let a = (0, d.useRouter)(),
        e = (0, d.useSearchParams)(),
        [f, g] = (0, c.useState)("bubble");
      return (
        (0, c.useEffect)(() => {
          let a = e.get("category");
          a && D.HF_DATA.categories.find((b) => b.id === a) && g(a);
        }, [e]),
        (0, b.jsxs)("div", {
          className: "bg-transparent min-h-[200vh] relative z-10 font-nunito",
          children: [
            (0, b.jsxs)("section", {
              className:
                "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
              children: [
                (0, b.jsx)("div", {
                  className:
                    "absolute right-0 top-40 w-48 h-48 opacity-70 pointer-events-none transform rotate-[20deg] z-0",
                  children: (0, b.jsx)(B.default, {
                    src: "/assets/illustrations/Hand illustration.svg",
                    alt: "hand",
                    fill: !0,
                    className: "object-contain",
                  }),
                }),
                (0, b.jsx)(E.GiganticTypography, {
                  as: "h1",
                  highlightWords: ["Süßes!"],
                  highlightColor: "#CC624C",
                  className:
                    "text-center justify-center max-w-[1200px] mx-auto z-10",
                  children: "Gönn dir was Süßes!",
                }),
                (0, b.jsx)("p", {
                  className:
                    "font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80 z-10",
                  children:
                    "Alles frisch, hausgemacht und mit viel Liebe zubereitet. Wähl deinen Favoriten.",
                }),
              ],
            }),
            (0, b.jsxs)("section", {
              className: "px-6 pb-40 max-w-[1400px] mx-auto relative z-20",
              children: [
                (0, b.jsx)("div", {
                  className:
                    "absolute -left-32 top-40 w-[600px] h-[600px] opacity-30 pointer-events-none z-[-1]",
                  children: (0, b.jsx)(B.default, {
                    src: "/assets/illustrations/Form hellbeige.svg",
                    alt: "shape",
                    fill: !0,
                    className: "object-contain",
                  }),
                }),
                (0, b.jsxs)("div", {
                  className:
                    "bg-cream/90 backdrop-blur-2xl rounded-[40px] shadow-clay border border-peach/50 overflow-hidden pb-10",
                  children: [
                    (0, b.jsx)(h, {
                      categories: D.HF_DATA.categories,
                      activeCategory: f,
                      onChange: (b) => {
                        (g(b),
                          a.replace(`/menu?category=${b}`, { scroll: !1 }));
                      },
                    }),
                    (0, b.jsx)("div", {
                      className: "px-6 md:px-10 mt-10",
                      children: (0, b.jsx)(C, { activeCategory: f }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    a.s(
      [
        "MenuClientWrapper",
        0,
        function () {
          return (0, b.jsx)(c.Suspense, {
            fallback: (0, b.jsx)("div", {
              className: "min-h-[200vh] bg-transparent",
            }),
            children: (0, b.jsx)(F, {}),
          });
        },
      ],
      31755,
    );
  },
];

//# sourceMappingURL=src_app_%28public%29_menu_MenuClientWrapper_tsx_00gb32~._.js.map
