(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  636498,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645);
    e.s([
      "FadeUp",
      0,
      function ({ children: e, delay: r = 0, className: n = "" }) {
        let c = (0, s.useRef)(null),
          [i, o] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && o(!0);
              },
              { threshold: 0.12 },
            );
            return (c.current && e.observe(c.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: c,
            className: n,
            style: {
              opacity: +!!i,
              transform: i ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${r}s`,
            },
            children: e,
          })
        );
      },
    ]);
  },
]);
