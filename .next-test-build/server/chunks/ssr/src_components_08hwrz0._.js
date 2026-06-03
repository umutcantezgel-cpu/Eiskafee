module.exports = [
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
];

//# sourceMappingURL=src_components_08hwrz0._.js.map
