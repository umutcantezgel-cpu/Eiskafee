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
  556494,
  (a) => {
    "use strict";
    var b = a.i(187924);
    a.s([
      "SEOContentBlock",
      0,
      function ({
        visible: a = !0,
        children: c,
        ariaLabel: d = "Über Hey Fede! — Hintergrundinformationen",
      }) {
        return a
          ? (0, b.jsx)("section", {
              "aria-label": d,
              role: "region",
              style: {
                background: "#faf6f1",
                borderTop: "1px solid rgba(228,192,168,0.3)",
                padding: "60px 20px",
              },
              children: (0, b.jsx)("div", {
                style: { maxWidth: 800, margin: "0 auto" },
                children: c,
              }),
            })
          : (0, b.jsx)("section", {
              "aria-label": d,
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
              children: c,
            });
      },
    ]);
  },
  710139,
  (a) => {
    "use strict";
    var b = a.i(572131);
    a.i(69387);
    var c = a.i(691431),
      d = a.i(601787),
      e = a.i(420237),
      f = a.i(544315);
    function g(a) {
      let b = [],
        c = (a, b) => {
          let c = 0;
          if ("string" == typeof a.price) {
            let b = a.price.match(/[\d,]+/);
            b && (c = parseFloat(b[0].replace(",", ".")));
          } else "number" == typeof a.price && (c = a.price);
          return {
            id: a.name,
            category: b,
            name: a.name,
            desc: a.desc,
            price: c,
            icon: "🍽️",
            color: "peach",
            available: !0,
          };
        };
      return (
        a && f.HF_DATA.menu[a]
          ? (b = f.HF_DATA.menu[a].items.map((b) => c(b, a)))
          : a ||
            Object.entries(f.HF_DATA.menu).forEach(([a, d]) => {
              b.push(...d.items.map((b) => c(b, a)));
            }),
        b
      );
    }
    a.s([
      "useMenu",
      0,
      function (a) {
        let [f, h] = (0, b.useState)([]),
          [i, j] = (0, b.useState)(!0),
          [k, l] = (0, b.useState)(null);
        return (
          (0, b.useEffect)(() => {
            let b = (0, d.query)(
              (0, c.collection)(e.db, "menu_items"),
              (0, d.orderBy)("category", "asc"),
            );
            a &&
              (b = (0, d.query)(
                (0, c.collection)(e.db, "menu_items"),
                (0, d.where)("category", "==", a),
                (0, d.orderBy)("category", "asc"),
              ));
            let f = (0, d.onSnapshot)(
              b,
              (b) => {
                (0 === b.docs.length
                  ? h(g(a))
                  : h(b.docs.map((a) => ({ id: a.id, ...a.data() }))),
                  j(!1),
                  l(null));
              },
              (b) => {
                (console.error("useMenu error:", b), h(g(a)), l(b), j(!1));
              },
            );
            return () => f();
          }, [a]),
          { items: f, loading: i, error: k }
        );
      },
    ]);
  },
  238918,
  191684,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(474614);
    function d({ filled: a = !1, className: e }) {
      return (0, b.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: a ? "currentColor" : "none",
        stroke: "currentColor",
        strokeWidth: a ? "0" : "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: (0, c.twMerge)("w-4 h-4", e),
        children: (0, b.jsx)("path", {
          d: "M 11.5 2.5 L 14.8 8 L 21.5 8.5 L 16.5 13.8 L 18.5 20.5 L 12.2 17.5 L 5.5 21 L 7.5 14 L 2.5 9.5 L 8.5 8.5 Z",
        }),
      });
    }
    function e({ score: a, max: f = 5, className: g, starClassName: h }) {
      return (0, b.jsx)("div", {
        className: (0, c.twMerge)("flex items-center gap-0.5 text-orange", g),
        children: Array.from({ length: f }).map((c, e) =>
          (0, b.jsx)(d, { filled: a >= e + 0.5, className: h }, e),
        ),
      });
    }
    (a.s(
      [
        "EyebrowPill",
        0,
        function ({
          label: a,
          statusColor: d = "bg-terracotta",
          className: e,
        }) {
          return (0, b.jsxs)("div", {
            className: (0, c.twMerge)(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
              "bg-white/70 backdrop-blur-md shadow-sm border border-white/50",
              "text-xs font-bold text-charcoal tracking-wider uppercase",
              e,
            ),
            children: [
              d &&
                (0, b.jsxs)("span", {
                  className: "relative flex h-2 w-2",
                  children: [
                    (0, b.jsx)("span", {
                      className: (0, c.twMerge)(
                        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                        d,
                      ),
                    }),
                    (0, b.jsx)("span", {
                      className: (0, c.twMerge)(
                        "relative inline-flex rounded-full h-2 w-2",
                        d,
                      ),
                    }),
                  ],
                }),
              (0, b.jsx)("span", { children: a }),
            ],
          });
        },
      ],
      238918,
    ),
      a.s(
        [
          "RatingPill",
          0,
          function ({ score: a, reviewCount: d, className: f }) {
            return (0, b.jsxs)("div", {
              className: (0, c.twMerge)(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-sand",
                f,
              ),
              children: [
                (0, b.jsx)(e, { score: a, className: "text-orange" }),
                (0, b.jsx)("span", {
                  className: "text-sm font-bold text-charcoal",
                  children: a.toFixed(1),
                }),
                (0, b.jsxs)("span", {
                  className: "text-xs text-brown",
                  children: ["(", d, ")"],
                }),
              ],
            });
          },
        ],
        191684,
      ));
  },
  492729,
  767644,
  (a) => {
    "use strict";
    var b = a.i(164831);
    let c = (0, b.default)("cake", [
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
    a.s(["default", 0, c], 492729);
    let d = (0, b.default)("image", [
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
    a.s(["default", 0, d], 767644);
  },
];

//# sourceMappingURL=_04ct038._.js.map
