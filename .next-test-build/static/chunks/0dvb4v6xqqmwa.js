(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var t = e.i(727286);
    e.s(["collection", () => t.aO]);
  },
  764154,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(846932),
      a = e.i(772328);
    e.s([
      "GiganticTypography",
      0,
      function ({
        children: e,
        className: i = "",
        delay: r = 0,
        highlightWords: n = [],
        highlightColor: l = "#CC624C",
        as: o = "div",
      }) {
        let c = (0, a.useReducedMotion)(),
          d = "string" == typeof e ? e : String(e),
          h = d.split(" "),
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
          u = s.motion[o];
        return c
          ? (0, t.jsx)(o, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${i}`,
              children: d,
            })
          : (0, t.jsx)(u, {
              variants: {
                hidden: { opacity: 0 },
                visible: (e = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: r },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${i}`,
              children: h.map((e, a) => {
                let i = e.replace(/[.,!?]/g, ""),
                  r = n.includes(i);
                return (0, t.jsx)(
                  s.motion.span,
                  {
                    variants: x,
                    style: { color: r ? l : "inherit" },
                    className: "inline-block relative z-10",
                    children: e,
                  },
                  a,
                );
              }),
            });
      },
    ]);
  },
  931260,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.s([
      "SEOContentBlock",
      0,
      function ({
        visible: e = !0,
        children: s,
        ariaLabel: a = "Über Hey Fede! — Hintergrundinformationen",
      }) {
        return e
          ? (0, t.jsx)("section", {
              "aria-label": a,
              role: "region",
              style: {
                background: "#faf6f1",
                borderTop: "1px solid rgba(228,192,168,0.3)",
                padding: "60px 20px",
              },
              children: (0, t.jsx)("div", {
                style: { maxWidth: 800, margin: "0 auto" },
                children: s,
              }),
            })
          : (0, t.jsx)("section", {
              "aria-label": a,
              style: {
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              },
              children: s,
            });
      },
    ]);
  },
  805109,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.i(436180);
    var s = e.i(746939),
      a = e.i(263802),
      i = e.i(959141),
      r = e.i(816148);
    function n(e) {
      let t = [],
        s = (e, t) => {
          let s = 0;
          if ("string" == typeof e.price) {
            let t = e.price.match(/[\d,]+/);
            t && (s = parseFloat(t[0].replace(",", ".")));
          } else "number" == typeof e.price && (s = e.price);
          return {
            id: e.name,
            category: t,
            name: e.name,
            desc: e.desc,
            price: s,
            icon: "🍽️",
            color: "peach",
            available: !0,
          };
        };
      return (
        e && r.HF_DATA.menu[e]
          ? (t = r.HF_DATA.menu[e].items.map((t) => s(t, e)))
          : e ||
            Object.entries(r.HF_DATA.menu).forEach(([e, a]) => {
              t.push(...a.items.map((t) => s(t, e)));
            }),
        t
      );
    }
    e.s([
      "useMenu",
      0,
      function (e) {
        let [r, l] = (0, t.useState)([]),
          [o, c] = (0, t.useState)(!0),
          [d, h] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            let t = (0, a.query)(
              (0, s.collection)(i.db, "menu_items"),
              (0, a.orderBy)("category", "asc"),
            );
            e &&
              (t = (0, a.query)(
                (0, s.collection)(i.db, "menu_items"),
                (0, a.where)("category", "==", e),
                (0, a.orderBy)("category", "asc"),
              ));
            let r = (0, a.onSnapshot)(
              t,
              (t) => {
                (0 === t.docs.length
                  ? l(n(e))
                  : l(t.docs.map((e) => ({ id: e.id, ...e.data() }))),
                  c(!1),
                  h(null));
              },
              (t) => {
                (console.error("useMenu error:", t), l(n(e)), h(t), c(!1));
              },
            );
            return () => r();
          }, [e]),
          { items: r, loading: o, error: d }
        );
      },
    ]);
  },
  131588,
  675849,
  (e) => {
    "use strict";
    var t = e.i(456420);
    let s = (0, t.default)("cake", [
      [
        "path",
        { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" },
      ],
      [
        "path",
        {
          d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
          key: "n2jgmb",
        },
      ],
      ["path", { d: "M2 21h20", key: "1nyx9w" }],
      ["path", { d: "M7 8v3", key: "1qtyvj" }],
      ["path", { d: "M12 8v3", key: "hwp4zt" }],
      ["path", { d: "M17 8v3", key: "1i6e5u" }],
      ["path", { d: "M7 4h.01", key: "1bh4kh" }],
      ["path", { d: "M12 4h.01", key: "1ujb9j" }],
      ["path", { d: "M17 4h.01", key: "1upcoc" }],
    ]);
    e.s(["default", 0, s], 131588);
    let a = (0, t.default)("image", [
      [
        "rect",
        {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
          key: "1m3agn",
        },
      ],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      [
        "path",
        { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
      ],
    ]);
    e.s(["default", 0, a], 675849);
  },
  105515,
  771763,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(919056);
    function a({ filled: e = !1, className: i }) {
      return (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: e ? "currentColor" : "none",
        stroke: "currentColor",
        strokeWidth: e ? "0" : "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: (0, s.twMerge)("w-4 h-4", i),
        children: (0, t.jsx)("path", {
          d: "M 11.5 2.5 L 14.8 8 L 21.5 8.5 L 16.5 13.8 L 18.5 20.5 L 12.2 17.5 L 5.5 21 L 7.5 14 L 2.5 9.5 L 8.5 8.5 Z",
        }),
      });
    }
    function i({ score: e, max: r = 5, className: n, starClassName: l }) {
      return (0, t.jsx)("div", {
        className: (0, s.twMerge)("flex items-center gap-0.5 text-orange", n),
        children: Array.from({ length: r }).map((s, i) =>
          (0, t.jsx)(a, { filled: e >= i + 0.5, className: l }, i),
        ),
      });
    }
    (e.s(
      [
        "EyebrowPill",
        0,
        function ({
          label: e,
          statusColor: a = "bg-terracotta",
          className: i,
        }) {
          return (0, t.jsxs)("div", {
            className: (0, s.twMerge)(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
              "bg-white/70 backdrop-blur-md shadow-sm border border-white/50",
              "text-xs font-bold text-charcoal tracking-wider uppercase",
              i,
            ),
            children: [
              a &&
                (0, t.jsxs)("span", {
                  className: "relative flex h-2 w-2",
                  children: [
                    (0, t.jsx)("span", {
                      className: (0, s.twMerge)(
                        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                        a,
                      ),
                    }),
                    (0, t.jsx)("span", {
                      className: (0, s.twMerge)(
                        "relative inline-flex rounded-full h-2 w-2",
                        a,
                      ),
                    }),
                  ],
                }),
              (0, t.jsx)("span", { children: e }),
            ],
          });
        },
      ],
      105515,
    ),
      e.s(
        [
          "RatingPill",
          0,
          function ({ score: e, reviewCount: a, className: r }) {
            return (0, t.jsxs)("div", {
              className: (0, s.twMerge)(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-sand",
                r,
              ),
              children: [
                (0, t.jsx)(i, { score: e, className: "text-orange" }),
                (0, t.jsx)("span", {
                  className: "text-sm font-bold text-charcoal",
                  children: e.toFixed(1),
                }),
                (0, t.jsxs)("span", {
                  className: "text-xs text-brown",
                  children: ["(", a, ")"],
                }),
              ],
            });
          },
        ],
        771763,
      ));
  },
  459762,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(618566),
      i = e.i(846932),
      r = e.i(747265);
    let n = {
      boxen: r.Boxen,
      bubble: r.BubbleWaffle,
      crepes: r.Crepes,
      kuchen: r.Cake,
      cookies: r.Cake,
      eisbecher: r.Eisbecher,
      shakes: r.Shakes,
      iced: r.Coffee,
      stullen: r.Pancakes,
      getraenke: r.Coffee,
    };
    function l({ categories: e, activeCategory: a, onChange: o }) {
      let c = (0, s.useRef)(null);
      return (
        (0, s.useEffect)(() => {
          if (!c.current) return;
          let e = c.current.querySelector('[data-active="true"]');
          e &&
            e.scrollIntoView({
              inline: "center",
              block: "nearest",
              behavior: "smooth",
            });
        }, [a]),
        (0, t.jsx)("div", {
          className:
            "sticky top-[88px] z-[800] bg-sand/90 backdrop-blur-md shadow-sm border-b border-peach",
          children: (0, t.jsx)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: (0, t.jsx)("div", {
              ref: c,
              className:
                "flex gap-2 overflow-x-auto py-3 hide-scrollbar snap-x snap-mandatory",
              children: e.map((e) => {
                let s = a === e.id,
                  l = n[e.id] || r.BubbleWaffle;
                return (0, t.jsxs)(
                  "button",
                  {
                    "data-active": s,
                    onClick: () => o(e.id),
                    className: `relative flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full whitespace-nowrap shrink-0 snap-start transition-colors duration-200 ${s ? "text-cream" : "text-charcoal hover:bg-cream/50"}`,
                    children: [
                      s &&
                        (0, t.jsx)(i.motion.div, {
                          layoutId: "activeMenuTab",
                          className:
                            "absolute inset-0 bg-terracotta rounded-full shadow-clay",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          },
                        }),
                      (0, t.jsxs)("span", {
                        className: "relative z-10 flex items-center gap-2",
                        children: [
                          (0, t.jsx)(l, { className: "w-4 h-4" }),
                          e.label,
                        ],
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
          }),
        })
      );
    }
    var o = e.i(88653),
      c = e.i(805109),
      d = e.i(887652),
      h = e.i(591994),
      x = e.i(895420),
      u = e.i(772328),
      m = e.i(919056);
    function p({ className: e, children: a, onClick: r }) {
      let n = (0, s.useRef)(null),
        l = (0, u.useReducedMotion)(),
        o = (0, d.useMotionValue)(0),
        c = (0, d.useMotionValue)(0),
        f = (0, h.useSpring)(o, { stiffness: 300, damping: 30 }),
        g = (0, h.useSpring)(c, { stiffness: 300, damping: 30 }),
        b = (0, x.useTransform)(g, [-1, 1], [10, -10]),
        v = (0, x.useTransform)(f, [-1, 1], [-10, 10]),
        j = (0, x.useTransform)(f, [-1, 1], [0, 100]),
        y = (0, x.useTransform)(g, [-1, 1], [0, 100]);
      return (0, t.jsxs)(i.motion.div, {
        ref: n,
        style: {
          perspective: 1200,
          rotateX: l ? 0 : b,
          rotateY: l ? 0 : v,
          transformStyle: "preserve-3d",
        },
        onMouseMove: (e) => {
          if (!n.current || l) return;
          let t = n.current.getBoundingClientRect(),
            s = t.width,
            a = t.height,
            i = e.clientX - t.left,
            r = e.clientY - t.top;
          (o.set((i / s) * 2 - 1), c.set((r / a) * 2 - 1));
        },
        onMouseLeave: () => {
          l || (o.set(0), c.set(0));
        },
        onClick: r,
        whileHover: l ? void 0 : { y: -5 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
        className: (0, m.twMerge)(
          "relative flex flex-col p-5 rounded-2xl bg-white shadow-clay cursor-pointer",
          "transition-shadow duration-300 hover:shadow-lg",
          e,
        ),
        children: [
          !l &&
            (0, t.jsx)(i.motion.div, {
              className:
                "pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay",
              style: {
                background: (0, x.useTransform)(
                  () =>
                    `radial-gradient(circle at ${j.get()}% ${y.get()}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
                ),
              },
            }),
          (0, t.jsx)("div", {
            className: "relative z-10 flex-grow",
            style: { transform: l ? "none" : "translateZ(20px)" },
            children: a,
          }),
        ],
      });
    }
    function f({ position: e, className: s, fillClass: a = "text-sand" }) {
      let i = "top" === e || "bottom" === e;
      return (0, t.jsx)("div", {
        className: (0, m.twMerge)(
          "absolute pointer-events-none overflow-hidden",
          i ? "left-0 right-0 h-3" : "top-0 bottom-0 w-3",
          "top" === e ? "-top-1.5" : "",
          "bottom" === e ? "-bottom-1.5" : "",
          "left" === e ? "-left-1.5" : "",
          "right" === e ? "-right-1.5" : "",
          s,
        ),
        "aria-hidden": "true",
        children: (0, t.jsxs)("svg", {
          width: "100%",
          height: "100%",
          className: a,
          children: [
            (0, t.jsx)("defs", {
              children: (0, t.jsx)("pattern", {
                id: `ticket-perf-${e}`,
                x: "0",
                y: "0",
                width: i ? 12 : 100,
                height: i ? 100 : 12,
                patternUnits: "userSpaceOnUse",
                children: (0, t.jsx)("circle", {
                  cx: i ? 6 : 12 * ("left" !== e),
                  cy: i ? 12 * ("top" !== e) : 6,
                  r: "4",
                  fill: "currentColor",
                }),
              }),
            }),
            (0, t.jsx)("rect", {
              width: "100%",
              height: "100%",
              fill: `url(#ticket-perf-${e})`,
            }),
          ],
        }),
      });
    }
    var g = e.i(105515),
      b = e.i(77071),
      v = e.i(935829);
    function j({
      title: e,
      desc: s,
      price: a,
      icon: i,
      isNew: r,
      className: n,
      quantity: l = 0,
      onIncrement: o,
      onDecrement: c,
      onClick: d,
    }) {
      return (0, t.jsxs)("div", {
        onClick: d,
        className: (0, m.twMerge)(
          "relative flex items-center p-4 bg-cream rounded-xl border-2 border-dashed border-terracotta/40 cursor-pointer",
          "transition-all duration-300 hover:border-terracotta hover:shadow-clay",
          n,
        ),
        children: [
          (0, t.jsx)(f, { position: "left", fillClass: "text-sand" }),
          (0, t.jsx)(f, { position: "right", fillClass: "text-sand" }),
          i &&
            (0, t.jsx)("div", {
              className:
                "flex-shrink-0 w-16 h-16 flex items-center justify-center text-terracotta mr-4",
              children: i,
            }),
          (0, t.jsxs)("div", {
            className: "flex-grow flex flex-col justify-center py-1",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center gap-3 mb-1",
                children: [
                  (0, t.jsx)("h3", {
                    className: "font-calistoga text-xl text-charcoal",
                    children: e,
                  }),
                  r &&
                    (0, t.jsx)(g.EyebrowPill, {
                      label: "NEU",
                      statusColor: "bg-peach",
                    }),
                ],
              }),
              s &&
                (0, t.jsx)("p", {
                  className: "text-sm text-charcoal/70 line-clamp-2",
                  children: s,
                }),
            ],
          }),
          a &&
            (0, t.jsxs)("div", {
              className: "flex-shrink-0 ml-4 flex items-center gap-3",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "font-bold text-lg text-terracotta whitespace-nowrap",
                  children: a,
                }),
                l > 0
                  ? (0, t.jsxs)("div", {
                      className:
                        "flex items-center gap-2 bg-white rounded-full p-1 border border-peach",
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, t.jsx)("button", {
                          onClick: (e) => {
                            (e.stopPropagation(), c?.());
                          },
                          className:
                            "w-7 h-7 flex items-center justify-center bg-cream rounded-full text-charcoal hover:bg-peach/50 transition-colors",
                          "aria-label": "Menge reduzieren",
                          children: (0, t.jsx)(v.Minus, { size: 14 }),
                        }),
                        (0, t.jsx)("span", {
                          className: "font-bold text-sm w-4 text-center",
                          children: l,
                        }),
                        (0, t.jsx)("button", {
                          onClick: (e) => {
                            (e.stopPropagation(), o?.());
                          },
                          className:
                            "w-7 h-7 flex items-center justify-center bg-terracotta rounded-full text-white hover:bg-brown transition-colors",
                          "aria-label": "Menge erhöhen",
                          children: (0, t.jsx)(b.Plus, { size: 14 }),
                        }),
                      ],
                    })
                  : (0, t.jsx)("button", {
                      className:
                        "bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm",
                      "aria-label": "Zum Warenkorb hinzufügen",
                      onClick: (e) => {
                        (e.stopPropagation(), o ? o() : d && d());
                      },
                      children: (0, t.jsx)(b.Plus, {
                        size: 18,
                        strokeWidth: 2.5,
                      }),
                    }),
              ],
            }),
        ],
      });
    }
    function y({ className: e }) {
      return (0, t.jsxs)("div", {
        className: (0, m.twMerge)(
          "flex flex-col p-5 rounded-2xl bg-white shadow-clay animate-pulse",
          "h-[320px]",
          e,
        ),
        children: [
          (0, t.jsx)("div", {
            className: "w-full h-40 bg-sand rounded-xl mb-4",
          }),
          (0, t.jsx)("div", { className: "w-3/4 h-6 bg-sand rounded-md mb-2" }),
          (0, t.jsx)("div", {
            className: "w-full h-4 bg-sand rounded-md mb-2",
          }),
          (0, t.jsx)("div", {
            className: "w-5/6 h-4 bg-sand rounded-md mb-auto",
          }),
          (0, t.jsxs)("div", {
            className: "flex justify-between items-center mt-4",
            children: [
              (0, t.jsx)("div", { className: "w-1/3 h-6 bg-sand rounded-md" }),
              (0, t.jsx)("div", { className: "w-8 h-8 bg-sand rounded-full" }),
            ],
          }),
        ],
      });
    }
    e.i(771763);
    var w = e.i(974336),
      N = e.i(131588),
      N = N,
      k = e.i(675849),
      k = k,
      C = e.i(892732),
      M = e.i(798688),
      z = e.i(657688);
    function S({ activeCategory: e }) {
      let { items: s, loading: a, error: r } = (0, c.useMenu)(e),
        n = (0, M.useStore)((e) => e.cart),
        l = (0, M.useStore)((e) => e.addToCart),
        d = (0, M.useStore)((e) => e.updateQuantity),
        h = (0, M.useStore)((e) => e.removeFromCart);
      return (0, t.jsxs)("div", {
        className: "max-w-7xl mx-auto px-6 py-12 min-h-[60vh]",
        children: [
          r &&
            (0, t.jsxs)("div", {
              className:
                "text-center text-red-500 font-bold p-12 bg-red-500/10 rounded-3xl",
              children: ["Fehler beim Laden der Produkte: ", r.message],
            }),
          a &&
            !r &&
            (0, t.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              children: Array.from({ length: 8 }).map((e, s) =>
                (0, t.jsx)(y, {}, s),
              ),
            }),
          !a &&
            !r &&
            0 === s.length &&
            (0, t.jsxs)(i.motion.div, {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className:
                "flex flex-col items-center justify-center text-center py-20 relative",
              children: [
                (0, t.jsx)(C.FloatingBlob, {
                  variant: "organic3",
                  color: "peach",
                  size: 300,
                  opacity: 0.3,
                  className: "absolute z-0",
                }),
                (0, t.jsxs)("div", {
                  className: "relative z-10",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-7xl mb-6 block",
                      children: "🧐",
                    }),
                    (0, t.jsx)("h3", {
                      className: "font-calistoga text-3xl text-charcoal mb-3",
                      children: "Nichts gefunden!",
                    }),
                    (0, t.jsxs)("p", {
                      className: "font-bold text-charcoal/70",
                      children: [
                        "In dieser Kategorie gibt es aktuell keine Leckereien.",
                        (0, t.jsx)("br", {}),
                        "Schau doch mal in einer anderen vorbei!",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          !a &&
            !r &&
            s.length > 0 &&
            (0, t.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              children: (0, t.jsx)(o.AnimatePresence, {
                mode: "popLayout",
                children: s.map((s, a) => {
                  let r = n.find((e) => e.id === s.id),
                    o = r?.quantity || 0,
                    c = () => {
                      o > 0
                        ? d(s.id, o + 1)
                        : l({
                            id: s.id,
                            name: s.name,
                            price: Number(s.price) || 0,
                          });
                    },
                    x = () => {
                      o > 1 ? d(s.id, o - 1) : h(s.id);
                    };
                  return (0, t.jsx)(
                    i.motion.div,
                    {
                      layout: !0,
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: 0.05 * a,
                      },
                      children:
                        "boxen" === e
                          ? (0, t.jsx)(j, {
                              title: s.name,
                              desc: s.desc,
                              price: String(s.price),
                              quantity: o,
                              onIncrement: c,
                              onDecrement: x,
                              onClick: 0 === o ? c : void 0,
                            })
                          : (0, t.jsx)(p, {
                              onClick: 0 === o ? c : void 0,
                              children: (0, t.jsxs)("div", {
                                className: "flex flex-col h-full relative",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "w-full aspect-[4/3] bg-cream rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-peach/30 relative",
                                    children: s.image
                                      ? (0, t.jsx)(z.default, {
                                          src: s.image,
                                          alt: s.name,
                                          fill: !0,
                                          className: "object-cover",
                                        })
                                      : (0, t.jsxs)("div", {
                                          className:
                                            "flex flex-col items-center justify-center text-peach/80",
                                          children: [
                                            (0, t.jsx)(k.default, {
                                              size: 32,
                                              className: "mb-2 opacity-50",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-xs font-bold uppercase tracking-wider opacity-60",
                                              children: "Kein Bild",
                                            }),
                                          ],
                                        }),
                                  }),
                                  (0, t.jsx)("h3", {
                                    className:
                                      "font-calistoga text-xl text-charcoal mb-2",
                                    children: s.name,
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-sm text-charcoal/70 line-clamp-2 flex-grow mb-4",
                                    children: s.desc,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between mt-auto",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "font-bold text-lg text-terracotta whitespace-nowrap",
                                        children:
                                          "number" == typeof s.price
                                            ? `${s.price.toFixed(2).replace(".", ",")} €`
                                            : s.price,
                                      }),
                                      (0, t.jsx)("div", {
                                        onClick: (e) => e.stopPropagation(),
                                        children:
                                          o > 0
                                            ? (0, t.jsxs)(i.motion.div, {
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
                                                  (0, t.jsx)("button", {
                                                    onClick: x,
                                                    className:
                                                      "w-8 h-8 flex items-center justify-center bg-white rounded-full text-charcoal hover:bg-peach/50 transition-colors",
                                                    "aria-label":
                                                      "Menge reduzieren",
                                                    children: (0, t.jsx)(
                                                      v.Minus,
                                                      { size: 16 },
                                                    ),
                                                  }),
                                                  (0, t.jsx)("span", {
                                                    className:
                                                      "font-bold text-sm w-4 text-center",
                                                    children: o,
                                                  }),
                                                  (0, t.jsx)("button", {
                                                    onClick: c,
                                                    className:
                                                      "w-8 h-8 flex items-center justify-center bg-terracotta rounded-full text-white hover:bg-brown transition-colors",
                                                    "aria-label":
                                                      "Menge erhöhen",
                                                    children: (0, t.jsx)(
                                                      b.Plus,
                                                      { size: 16 },
                                                    ),
                                                  }),
                                                ],
                                              })
                                            : (0, t.jsx)(i.motion.button, {
                                                whileTap: { scale: 0.9 },
                                                onClick: c,
                                                className:
                                                  "bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm",
                                                "aria-label":
                                                  "Zum Warenkorb hinzufügen",
                                                children: (0, t.jsx)(b.Plus, {
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
                    s.id,
                  );
                }),
              }),
            }),
          !a &&
            !r &&
            ("kuchen" === e || "cookies" === e || "toppings" === e) &&
            (0, t.jsxs)(i.motion.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              className:
                "mt-12 bg-peach/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-peach",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "w-16 h-16 rounded-full bg-peach flex items-center justify-center shrink-0",
                  children: (0, t.jsx)(N.default, {
                    className: "w-8 h-8 text-terracotta",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "flex-1 text-center md:text-left",
                  children: (0, t.jsx)("p", {
                    className: "font-bold text-charcoal leading-relaxed",
                    children:
                      "Psst... frischen, leckeren Kuchen und viele weitere Specials findest du tagesaktuell in unserer Vitrine vor Ort in Wetzlar!",
                  }),
                }),
                (0, t.jsx)(w.TransitionLink, {
                  href: "/visit",
                  children: (0, t.jsx)("button", {
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
    var T = e.i(816148),
      P = e.i(764154);
    function L() {
      let e = (0, a.useRouter)(),
        i = (0, a.useSearchParams)(),
        [r, n] = (0, s.useState)("bubble");
      return (
        (0, s.useEffect)(() => {
          let e = i.get("category");
          e && T.HF_DATA.categories.find((t) => t.id === e) && n(e);
        }, [i]),
        (0, t.jsxs)("div", {
          className: "bg-transparent min-h-[200vh] relative z-10 font-nunito",
          children: [
            (0, t.jsxs)("section", {
              className:
                "min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute right-0 top-40 w-48 h-48 opacity-70 pointer-events-none transform rotate-[20deg] z-0",
                  children: (0, t.jsx)(z.default, {
                    src: "/assets/illustrations/Hand illustration.svg",
                    alt: "hand",
                    fill: !0,
                    className: "object-contain",
                  }),
                }),
                (0, t.jsx)(P.GiganticTypography, {
                  as: "h1",
                  highlightWords: ["Süßes!"],
                  highlightColor: "#CC624C",
                  className:
                    "text-center justify-center max-w-[1200px] mx-auto z-10",
                  children: "Gönn dir was Süßes!",
                }),
                (0, t.jsx)("p", {
                  className:
                    "font-nunito text-xl md:text-2xl mt-12 text-center max-w-[600px] font-bold text-brown/80 z-10",
                  children:
                    "Alles frisch, hausgemacht und mit viel Liebe zubereitet. Wähl deinen Favoriten.",
                }),
              ],
            }),
            (0, t.jsxs)("section", {
              className: "px-6 pb-40 max-w-[1400px] mx-auto relative z-20",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute -left-32 top-40 w-[600px] h-[600px] opacity-30 pointer-events-none z-[-1]",
                  children: (0, t.jsx)(z.default, {
                    src: "/assets/illustrations/Form hellbeige.svg",
                    alt: "shape",
                    fill: !0,
                    className: "object-contain",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "bg-cream/90 backdrop-blur-2xl rounded-[40px] shadow-clay border border-peach/50 overflow-hidden pb-10",
                  children: [
                    (0, t.jsx)(l, {
                      categories: T.HF_DATA.categories,
                      activeCategory: r,
                      onChange: (t) => {
                        (n(t),
                          e.replace(`/menu?category=${t}`, { scroll: !1 }));
                      },
                    }),
                    (0, t.jsx)("div", {
                      className: "px-6 md:px-10 mt-10",
                      children: (0, t.jsx)(S, { activeCategory: r }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    e.s(
      [
        "MenuClientWrapper",
        0,
        function () {
          return (0, t.jsx)(s.Suspense, {
            fallback: (0, t.jsx)("div", {
              className: "min-h-[200vh] bg-transparent",
            }),
            children: (0, t.jsx)(L, {}),
          });
        },
      ],
      459762,
    );
  },
]);
