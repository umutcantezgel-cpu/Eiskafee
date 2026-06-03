(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  764154,
  (i) => {
    "use strict";
    var e = i.i(843476),
      t = i.i(846932),
      n = i.i(772328);
    i.s([
      "GiganticTypography",
      0,
      function ({
        children: i,
        className: r = "",
        delay: a = 0,
        highlightWords: l = [],
        highlightColor: s = "#CC624C",
        as: o = "div",
      }) {
        let c = (0, n.useReducedMotion)(),
          d = "string" == typeof i ? i : String(i),
          p = d.split(" "),
          g = {
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
          h = t.motion[o];
        return c
          ? (0, e.jsx)(o, {
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight ${r}`,
              children: d,
            })
          : (0, e.jsx)(h, {
              variants: {
                hidden: { opacity: 0 },
                visible: (i = 1) => ({
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: a },
                }),
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              className: `font-calistoga text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight flex flex-wrap gap-x-[2vw] ${r}`,
              children: p.map((i, n) => {
                let r = i.replace(/[.,!?]/g, ""),
                  a = l.includes(r);
                return (0, e.jsx)(
                  t.motion.span,
                  {
                    variants: g,
                    style: { color: a ? s : "inherit" },
                    className: "inline-block relative z-10",
                    children: i,
                  },
                  n,
                );
              }),
            });
      },
    ]);
  },
  931260,
  (i) => {
    "use strict";
    var e = i.i(843476);
    i.s([
      "SEOContentBlock",
      0,
      function ({
        visible: i = !0,
        children: t,
        ariaLabel: n = "Über Hey Fede! — Hintergrundinformationen",
      }) {
        return i
          ? (0, e.jsx)("section", {
              "aria-label": n,
              role: "region",
              style: {
                background: "#faf6f1",
                borderTop: "1px solid rgba(228,192,168,0.3)",
                padding: "60px 20px",
              },
              children: (0, e.jsx)("div", {
                style: { maxWidth: 800, margin: "0 auto" },
                children: t,
              }),
            })
          : (0, e.jsx)("section", {
              "aria-label": n,
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
              children: t,
            });
      },
    ]);
  },
]);
