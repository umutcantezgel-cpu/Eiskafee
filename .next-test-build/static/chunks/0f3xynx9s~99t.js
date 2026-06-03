(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  4090,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      i = e.i(846932);
    e.s([
      "ScratchCard",
      0,
      function ({ children: r, frostingColor: s = "#eedfcc" }) {
        let a = (0, n.useRef)(null),
          l = (0, n.useRef)(null),
          o = (0, n.useRef)(null),
          d = (0, n.useRef)(!1),
          c = (0, n.useRef)({ x: 0, y: 0 }),
          u = (0, n.useRef)(0),
          [h, m] = (0, n.useState)(!1),
          [f, g] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          ("true" === sessionStorage.getItem("heyfede_scratch_revealed") &&
            m(!0),
            g(window.matchMedia("(prefers-reduced-motion: reduce)").matches));
          let e = l.current,
            t = a.current;
          if (!e || !t) return;
          let n = () => {
            let n = window.devicePixelRatio || 1,
              i = t.getBoundingClientRect();
            if (0 === i.width || 0 === i.height) return;
            ((e.width = i.width * n),
              (e.height = i.height * n),
              (e.style.width = i.width + "px"),
              (e.style.height = i.height + "px"));
            let r = e.getContext("2d", { willReadFrequently: !0 });
            if (r) {
              (r.scale(n, n),
                (o.current = r),
                (r.fillStyle = s),
                r.fillRect(0, 0, i.width, i.height),
                (r.fillStyle = "rgba(204,98,76,0.06)"));
              for (let e = 0; e < 30; e++)
                (r.beginPath(),
                  r.arc(
                    Math.random() * i.width,
                    Math.random() * i.height,
                    10 + 30 * Math.random(),
                    0,
                    2 * Math.PI,
                  ),
                  r.fill());
              ((r.fillStyle = "#CC624C"),
                (r.font = "bold 22px Nunito, sans-serif"),
                (r.textAlign = "center"),
                (r.textBaseline = "middle"),
                r.fillText(
                  "Rubbel mich frei! ✨",
                  i.width / 2,
                  i.height / 2 - 4,
                ),
                (r.font = "600 12px Nunito, sans-serif"),
                (r.fillStyle = "rgba(204,98,76,0.7)"),
                r.fillText(
                  "Wische über das Ticket",
                  i.width / 2,
                  i.height / 2 + 22,
                ));
            }
          };
          n();
          let i = new ResizeObserver(() => n());
          return (i.observe(t), () => i.disconnect());
        }, [s]);
        let b = (e) => {
            let t = l.current.getBoundingClientRect();
            return { x: e.clientX - t.left, y: e.clientY - t.top };
          },
          p = () => {
            let t = performance.now();
            if (t - u.current < 150) return;
            u.current = t;
            let n = l.current,
              i = o.current;
            if (!n || !i) return;
            let r = i.getImageData(0, 0, n.width, n.height).data,
              s = 0,
              a = 0;
            for (let e = 3; e < r.length; e += 32) (a++, 0 === r[e] && s++);
            s / a > 0.5 &&
              !h &&
              (m(!0),
              sessionStorage.setItem("heyfede_scratch_revealed", "true"),
              e.A(80233).then(({ default: e }) => {
                e({
                  particleCount: 150,
                  spread: 80,
                  origin: { y: 0.55 },
                  colors: ["#CC624C", "#E4C0A8", "#eedfcc", "#fff8f1"],
                  zIndex: 9999,
                  shapes: ["circle", "square"],
                  scalar: 1.1,
                });
              }),
              navigator.vibrate && navigator.vibrate([60, 30, 60]));
          },
          x = () => {
            ((d.current = !1), h || p());
          },
          v =
            h && !f
              ? {
                  x: [-8, 8, -5, 5, 0],
                  y: [-2, 2, -1, 1, 0],
                  boxShadow: [
                    "0px 0px 0px rgba(204,98,76,0)",
                    "0px 0px 60px rgba(204,98,76,0.6)",
                    "0px 8px 28px rgba(204,98,76,0.18)",
                  ],
                }
              : {};
        return (0, t.jsxs)("div", {
          ref: a,
          style: { position: "relative", borderRadius: 22 },
          children: [
            (0, t.jsx)(i.motion.div, {
              animate: v,
              transition: { duration: 0.6, ease: "easeOut" },
              style: { borderRadius: 22 },
              children: r,
            }),
            (0, t.jsx)("canvas", {
              ref: l,
              onPointerDown: (e) => {
                h ||
                  ((d.current = !0),
                  l.current &&
                    l.current.setPointerCapture &&
                    l.current.setPointerCapture(e.pointerId),
                  (c.current = b(e)));
              },
              onPointerMove: (e) => {
                if (!d.current || h) return;
                let t = b(e),
                  n = o.current;
                n &&
                  ((n.globalCompositeOperation = "destination-out"),
                  (n.lineCap = "round"),
                  (n.lineJoin = "round"),
                  (n.lineWidth = 45),
                  n.beginPath(),
                  n.moveTo(c.current.x, c.current.y),
                  n.lineTo(t.x, t.y),
                  n.stroke(),
                  (c.current = t),
                  p());
              },
              onPointerUp: x,
              onPointerLeave: x,
              style: {
                position: "absolute",
                inset: 0,
                zIndex: 10,
                touchAction: "none",
                cursor: "crosshair",
                opacity: +!h,
                pointerEvents: h ? "none" : "auto",
                transition: "opacity .5s ease",
                borderRadius: 22,
              },
            }),
          ],
        });
      },
    ]);
  },
  17253,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.s([
      "SectionTitle",
      0,
      function ({ children: e, sub: n, center: i = !0, light: r = !1 }) {
        return (0, t.jsxs)("div", {
          className: `mb-10 md:mb-12 ${i ? "text-center" : ""}`,
          children: [
            (0, t.jsx)("h2", {
              style: {
                fontFamily: "var(--font-calistoga), serif",
                fontSize: "clamp(1.7rem,4vw,2.8rem)",
                color: r ? "#f5efe8" : "#2d1f19",
                lineHeight: 1.1,
                marginBottom: 8,
              },
              children: e,
            }),
            n &&
              (0, t.jsx)("p", {
                style: {
                  fontSize: "0.92rem",
                  color: r ? "rgba(245,239,232,0.75)" : "#9a7060",
                  maxWidth: 440,
                  margin: i ? "0 auto" : 0,
                  lineHeight: 1.65,
                },
                children: n,
              }),
          ],
        });
      },
    ]);
  },
  823043,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      i = e.i(846932),
      r = e.i(786563),
      s = e.i(411463),
      s = s,
      a = e.i(482022),
      l = e.i(989033),
      o = e.i(636498),
      d = e.i(17253);
    let c = ["#CC624C", "#5c3d35", "#E4C0A8", "#9a7060", "#3a2820"];
    function u({ review: e, index: a, isTouch: l }) {
      let [o, d] = (0, n.useState)(!1),
        h = c[a % c.length];
      return (0, t.jsxs)(i.motion.div, {
        onHoverStart: () => d(!0),
        onHoverEnd: () => d(!1),
        whileHover: l ? void 0 : { y: -8, scale: 1.02 },
        whileTap: l ? { scale: 0.97 } : void 0,
        transition: { type: "spring", stiffness: 300, damping: 22 },
        style: {
          background: "#f5efe8",
          borderRadius: 22,
          padding: "28px 24px",
          minWidth: 310,
          maxWidth: 350,
          flexShrink: 0,
          cursor: "default",
          boxShadow: o
            ? "0 16px 40px rgba(204,98,76,0.18)"
            : "0 4px 18px rgba(45,31,25,0.07)",
          transition: "box-shadow 0.3s ease",
          position: "relative",
          overflow: "hidden",
          ...(l ? { scrollSnapAlign: "start" } : {}),
        },
        children: [
          (0, t.jsx)(i.motion.div, {
            animate: { opacity: o ? 0.12 : 0.06, scale: o ? 1.1 : 1 },
            transition: { duration: 0.3 },
            style: {
              position: "absolute",
              top: 16,
              right: 16,
              color: "#CC624C",
            },
            children: (0, t.jsx)(s.default, { size: 48, strokeWidth: 1.5 }),
          }),
          (0, t.jsx)("div", {
            style: { display: "flex", gap: 3, marginBottom: 16 },
            "aria-label": `${e.stars} von 5 Sternen`,
            role: "img",
            children: Array(e.stars)
              .fill(0)
              .map((e, n) =>
                (0, t.jsx)(
                  i.motion.div,
                  {
                    initial: { opacity: 0, y: -8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.08 * n, duration: 0.3 },
                    children: (0, t.jsx)(r.Star, {
                      size: 15,
                      fill: "#CC624C",
                      color: "#CC624C",
                      "aria-hidden": "true",
                    }),
                  },
                  n,
                ),
              ),
          }),
          (0, t.jsxs)("p", {
            style: {
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: "0.9rem",
              color: "#5c3d35",
              lineHeight: 1.72,
              marginBottom: 20,
              fontStyle: "italic",
              position: "relative",
              zIndex: 1,
            },
            children: ["„", e.text, '"'],
          }),
          (0, t.jsxs)("div", {
            style: { display: "flex", alignItems: "center", gap: 12 },
            children: [
              (0, t.jsx)(i.motion.div, {
                whileHover: { rotate: [0, -5, 5, 0] },
                transition: { duration: 0.4 },
                style: {
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: h,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fefefe",
                  fontFamily: "var(--font-calistoga), serif",
                  fontSize: "0.85rem",
                  flexShrink: 0,
                },
                children: e.name
                  .split(" ")
                  .map((e) => e[0])
                  .join("")
                  .toUpperCase(),
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    style: {
                      fontFamily: "var(--font-nunito), sans-serif",
                      fontWeight: 800,
                      fontSize: "0.88rem",
                      color: "#2d1f19",
                    },
                    children: e.name,
                  }),
                  (0, t.jsx)("div", {
                    style: {
                      fontFamily: "var(--font-nunito), sans-serif",
                      fontSize: "0.72rem",
                      color: "#9a7060",
                      fontWeight: 600,
                    },
                    children: "Verifizierte Google-Bewertung",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)(i.motion.div, {
            animate: { scaleX: +!!o },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(90deg, #CC624C, #E4C0A8)",
              transformOrigin: "left",
            },
          }),
        ],
      });
    }
    e.s(
      [
        "ReviewsSection",
        0,
        function ({ reviews: e, config: s }) {
          let c = (0, n.useRef)(null),
            [h, m] = (0, n.useState)(!1),
            [f, g] = (0, n.useState)(!1),
            [b, p] = (0, n.useState)(0);
          ((0, n.useEffect)(() => {
            g(window.matchMedia("(pointer: coarse)").matches);
          }, []),
            (0, n.useEffect)(() => {
              let e;
              if (f) return;
              let t = c.current;
              if (!t) return;
              let n = 0,
                i = () => {
                  if (!h && t) {
                    n += 0.5;
                    let e = t.scrollWidth / 2;
                    (n >= e && (n = 0), (t.scrollLeft = n));
                  }
                  e = requestAnimationFrame(i);
                };
              return (
                (e = requestAnimationFrame(i)),
                () => cancelAnimationFrame(e)
              );
            }, [h, f]));
          let x = (0, n.useCallback)(() => {
            let t = c.current;
            t && f && p(Math.min(Math.round(t.scrollLeft / 330), e.length - 1));
          }, [f, e.length]);
          (0, n.useEffect)(() => {
            let e = c.current;
            if (e && f)
              return (
                e.addEventListener("scroll", x, { passive: !0 }),
                () => e.removeEventListener("scroll", x)
              );
          }, [f, x]);
          let v = f ? e : [...e, ...e];
          return (0, t.jsxs)("section", {
            style: {
              background: "#E4C0A8",
              paddingBottom: 80,
              position: "relative",
              overflow: "hidden",
            },
            children: [
              (0, t.jsx)(l.WaveDivider, {
                fromColor: "#E4C0A8",
                toColor: "#E4C0A8",
                variant: 1,
              }),
              (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-30 dot-bg",
              }),
              (0, t.jsxs)(o.FadeUp, {
                className: "relative z-10 max-w-[1200px] mx-auto px-6 pt-6",
                children: [
                  (0, t.jsx)(d.SectionTitle, {
                    sub: `${s.rating}/5 \xb7 ${s.reviewCount}+ echte Bewertungen auf Google`,
                    children: "Was unsere Gäste sagen",
                  }),
                  (0, t.jsx)("div", {
                    ref: c,
                    onMouseEnter: () => m(!0),
                    onMouseLeave: () => m(!1),
                    onTouchStart: () => m(!0),
                    onTouchEnd: () => m(!1),
                    style: {
                      display: "flex",
                      gap: 20,
                      overflowX: f ? "auto" : "hidden",
                      paddingBottom: 8,
                      scrollBehavior: "auto",
                      ...(f
                        ? {
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                          }
                        : {
                            WebkitMaskImage:
                              "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
                            maskImage:
                              "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
                          }),
                    },
                    children: v.map((e, n) =>
                      (0, t.jsx)(
                        u,
                        { review: e, index: n, isTouch: f },
                        `${e.id}-${n}`,
                      ),
                    ),
                  }),
                  f &&
                    e.length > 1 &&
                    (0, t.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        gap: 8,
                        marginTop: 16,
                      },
                      children: e.map((e, n) =>
                        (0, t.jsx)(
                          "button",
                          {
                            "aria-label": `Bewertung ${n + 1} anzeigen`,
                            onClick: () => {
                              let e;
                              !(e = c.current) ||
                                e.scrollTo({
                                  left: 330 * n,
                                  behavior: "smooth",
                                });
                            },
                            style: {
                              width: b === n ? 24 : 8,
                              height: 8,
                              borderRadius: 4,
                              background:
                                b === n ? "#CC624C" : "rgba(92,61,53,0.25)",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            },
                          },
                          n,
                        ),
                      ),
                    }),
                  (0, t.jsxs)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 24,
                      flexWrap: "wrap",
                      gap: 16,
                    },
                    children: [
                      (0, t.jsx)("p", {
                        style: {
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontSize: "0.78rem",
                          color: "#5c3d35",
                          opacity: 0.7,
                        },
                        children: f
                          ? "← Swipe zum Entdecken →"
                          : "← Hover um anzuhalten · Swipe zum Entdecken →",
                      }),
                      (0, t.jsxs)(i.motion.a, {
                        href: "https://maps.app.goo.gl/heyfede",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: { scale: 1.05, y: -2 },
                        whileTap: { scale: 0.97 },
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          background: "#fefefe",
                          color: "#2d1f19",
                          fontFamily: "var(--font-nunito), sans-serif",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          padding: "10px 20px",
                          borderRadius: 50,
                          textDecoration: "none",
                          boxShadow: "0 4px 16px rgba(45,31,25,0.1)",
                        },
                        children: [
                          (0, t.jsx)(r.Star, {
                            size: 16,
                            fill: "#CC624C",
                            color: "#CC624C",
                          }),
                          "Auf Google bewerten",
                          (0, t.jsx)(a.ExternalLink, {
                            size: 14,
                            color: "#9a7060",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      823043,
    );
  },
  328858,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(846932),
      i = e.i(772328),
      r = e.i(974336),
      s = e.i(892732),
      a = e.i(105515),
      l = e.i(771763);
    e.i(146492);
    var o = e.i(763159),
      d = e.i(778609);
    function c({
      label: e,
      variant: n = "terracotta",
      size: i = 86,
      className: r = "",
      rotate: s,
    }) {
      let a = "terracotta" === n ? "#CC624C" : "#5c3d35",
        l = i / 2,
        o = l - 3,
        d = `sb-${e}-${i}`;
      return (0, t.jsx)("div", {
        className: r,
        style: {
          width: i,
          height: i,
          flexShrink: 0,
          transform: `rotate(${void 0 !== s ? s : "terracotta" === n ? 14 : -9}deg)`,
        },
        children: (0, t.jsxs)("svg", {
          viewBox: `0 0 ${i} ${i}`,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, t.jsx)("defs", {
              children: (0, t.jsx)("path", {
                id: d,
                d: `M${l},${l} m-${o},0 a${o},${o} 0 1,1 ${2 * o},0 a${o},${o} 0 1,1 -${2 * o},0`,
              }),
            }),
            (0, t.jsx)("circle", {
              cx: l,
              cy: l,
              r: o - 3,
              fill: "none",
              stroke: a,
              strokeWidth: "1.5",
              strokeDasharray: "3.5 2.5",
            }),
            (0, t.jsx)("text", {
              fontSize: "9",
              fontFamily: "var(--font-nunito), sans-serif",
              fontWeight: "800",
              fill: a,
              letterSpacing: "2",
              children: (0, t.jsx)("textPath", {
                href: `#${d}`,
                startOffset: "50%",
                textAnchor: "middle",
                children: e,
              }),
            }),
          ],
        }),
      });
    }
    var u = e.i(480929),
      h = e.i(498026);
    e.s(
      [
        "Hero",
        0,
        function () {
          let e = (0, i.useReducedMotion)(),
            m = {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 },
              },
            };
          return (0, t.jsxs)("section", {
            className:
              "relative w-full min-h-[100svh] flex items-center bg-peach pt-28 pb-32 overflow-hidden",
            children: [
              (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-40 pointer-events-none",
                style: {
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(201, 80, 57, 0.15) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                },
              }),
              (0, t.jsx)(s.FloatingBlob, {
                variant: "organic1",
                color: "cream",
                size: 360,
                opacity: 0.4,
                className: "-top-[10%] -right-[5%]",
              }),
              (0, t.jsx)(s.FloatingBlob, {
                variant: "organic3",
                color: "terracotta",
                size: 220,
                opacity: 0.12,
                reverse: !0,
                delay: 1.5,
                className: "-bottom-[5%] -left-[5%]",
              }),
              (0, t.jsx)("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6 w-full",
                children: (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center",
                  children: [
                    (0, t.jsxs)(n.motion.div, {
                      variants: e
                        ? void 0
                        : {
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.1 },
                            },
                          },
                      initial: "hidden",
                      animate: "visible",
                      className: "flex flex-col items-start max-w-2xl",
                      children: [
                        (0, t.jsx)(n.motion.div, {
                          variants: m,
                          className: "mb-6",
                          children: (0, t.jsx)(a.EyebrowPill, {
                            label: "DESSERTBAR & CAFÉ · WETZLAR",
                            statusColor: "bg-terracotta",
                          }),
                        }),
                        (0, t.jsxs)(n.motion.h1, {
                          variants: m,
                          className:
                            "font-calistoga text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6",
                          children: [
                            "Süße Momente,",
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("span", {
                              className: "text-terracotta",
                              children: "frisch gemacht.",
                            }),
                          ],
                        }),
                        (0, t.jsx)(n.motion.p, {
                          variants: m,
                          className:
                            "font-bold text-charcoal/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg",
                          children:
                            "Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.",
                        }),
                        (0, t.jsxs)(n.motion.div, {
                          variants: m,
                          className: "flex flex-wrap items-center gap-4 mb-12",
                          children: [
                            (0, t.jsx)(r.TransitionLink, {
                              href: "/menu",
                              tabIndex: -1,
                              children: (0, t.jsx)(o.PrimaryCTA, {
                                className: "py-3 px-8 text-lg",
                                showArrow: !0,
                                children: "Zur Speisekarte",
                              }),
                            }),
                            (0, t.jsx)(r.TransitionLink, {
                              href: "/visit",
                              tabIndex: -1,
                              children: (0, t.jsx)(d.SecondaryCTA, {
                                className:
                                  "py-3 px-8 text-lg bg-cream/50 backdrop-blur-sm border-terracotta text-terracotta hover:bg-terracotta hover:text-cream hover:border-terracotta",
                                children: "Uns besuchen",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(n.motion.div, {
                          variants: m,
                          children: (0, t.jsx)(l.RatingPill, {
                            score: 4.8,
                            reviewCount: 84,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.motion.div, {
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      transition: {
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.3,
                      },
                      className:
                        "hidden md:flex justify-center items-center relative",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "absolute w-[88%] aspect-square bg-[#f5efe8]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          style: {
                            borderRadius: "56% 44% 52% 48% / 48% 56% 44% 52%",
                          },
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "relative z-10 w-[76%] max-w-[360px] aspect-square shadow-2xl",
                          style: {
                            borderRadius: "54% 46% 56% 44% / 50% 54% 46% 50%",
                          },
                          children: (0, t.jsx)(h.default, { size: 360 }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute top-[4%] -right-[2%] z-20 pointer-events-none",
                          children: (0, t.jsx)(c, {
                            label: "HAUSGEMACHT",
                            size: 86,
                            rotate: 14,
                            variant: "terracotta",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute bottom-[5%] left-[0%] z-20 pointer-events-none",
                          children: (0, t.jsx)(c, {
                            label: "FRISCH & LECKER",
                            size: 78,
                            rotate: -9,
                            variant: "brown",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "absolute bottom-0 left-0 w-full translate-y-[1px]",
                children: (0, t.jsx)(u.WaveDivider, {
                  variant: "long-curve",
                  className: "w-full h-12 md:h-16 lg:h-24 text-sand",
                }),
              }),
            ],
          });
        },
      ],
      328858,
    );
  },
  255531,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(816148),
      i = e.i(636498),
      r = e.i(17253),
      s = e.i(271645),
      a = e.i(846932),
      l = e.i(887652),
      o = e.i(895420),
      d = e.i(591994),
      c = e.i(83411),
      u = e.i(212381);
    function h(e, ...t) {
      let n = e.length;
      return (0, u.useCombineMotionValues)(
        t.filter(c.isMotionValue),
        function () {
          let i = "";
          for (let r = 0; r < n; r++) {
            i += e[r];
            let n = t[r];
            n && (i += (0, c.isMotionValue)(n) ? n.get() : n);
          }
          return i;
        },
      );
    }
    var m = e.i(77071),
      f = e.i(731370),
      g = e.i(618566);
    function b({ item: e }) {
      let n = (0, g.useRouter)(),
        i = (0, l.useMotionValue)(0),
        r = (0, l.useMotionValue)(0),
        c = (0, d.useSpring)(i, { stiffness: 400, damping: 30 }),
        u = (0, d.useSpring)(r, { stiffness: 400, damping: 30 }),
        p = (0, o.useTransform)(u, [-0.5, 0.5], [12, -12]),
        x = (0, o.useTransform)(c, [-0.5, 0.5], [-12, 12]),
        v = (0, o.useTransform)(c, [-0.5, 0.5], [0, 100]),
        w = (0, o.useTransform)(u, [-0.5, 0.5], [0, 100]),
        y = h`radial-gradient(farthest-corner circle at ${v}% ${w}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)`,
        [k, j] = (0, s.useState)(!1),
        [z, S] = (0, s.useState)(!1);
      (0, s.useEffect)(() => {
        (j(window.matchMedia("(pointer: coarse)").matches),
          S(window.matchMedia("(prefers-reduced-motion: reduce)").matches));
      }, []);
      let W = z || k ? 0 : p,
        C = z || k ? 0 : x,
        F = f[e.icon] || f.Sparkles,
        N = (0, t.jsxs)(t.Fragment, {
          children: [
            e.tag &&
              (0, t.jsx)(a.motion.div, {
                className:
                  "absolute z-10 top-3 right-3 font-sans font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider",
                style: {
                  transform: "translateZ(40px)",
                  background: "#CC624C",
                  color: "#fefefe",
                },
                children: e.tag,
              }),
            (0, t.jsxs)(a.motion.div, {
              className:
                "w-full aspect-[4/3] rounded-[16px] mb-4 flex items-center justify-center overflow-hidden relative",
              style: {
                transform: "translateZ(60px)",
                background:
                  "linear-gradient(135deg, #E4C0A8 0%, #eedfcc 50%, #f5efe8 100%)",
              },
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-3 left-3 w-16 h-16 rounded-full opacity-20",
                  style: { background: "#CC624C" },
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute bottom-2 right-4 w-10 h-10 rounded-full opacity-15",
                  style: { background: "#CC624C" },
                }),
                (0, t.jsx)(F, {
                  size: 64,
                  strokeWidth: 1.2,
                  color: "#CC624C",
                  style: { opacity: 0.85 },
                }),
              ],
            }),
            (0, t.jsxs)(a.motion.div, {
              style: { transform: "translateZ(30px)" },
              children: [
                (0, t.jsx)("h3", {
                  className:
                    "font-calistoga text-[1.1rem] text-[#2d1f19] leading-tight mb-1",
                  children: e.name,
                }),
                (0, t.jsx)("p", {
                  className:
                    "font-nunito text-sm text-[#5c3d35] leading-relaxed mb-4",
                  children: e.desc,
                }),
                (0, t.jsxs)("div", {
                  className: "flex justify-between items-center mt-auto",
                  children: [
                    (0, t.jsx)("span", {
                      className: "font-calistoga text-xl text-[#CC624C]",
                      children: e.price,
                    }),
                    (0, t.jsx)("button", {
                      onClick: () => n.push("/menu"),
                      "aria-label": `${e.name} ansehen`,
                      className:
                        "w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95",
                      style: {
                        background: "#CC624C",
                        boxShadow: "0 2px 8px rgba(204,98,76,0.25)",
                      },
                      children: (0, t.jsx)(m.Plus, {
                        size: 18,
                        color: "#fefefe",
                        strokeWidth: 2.5,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            !k &&
              (0, t.jsx)(a.motion.div, {
                "aria-hidden": !0,
                className:
                  "absolute inset-0 rounded-card pointer-events-none z-10",
                style: { background: y, mixBlendMode: "overlay" },
              }),
          ],
        }),
        H = {
          position: "relative",
          background: "#f5efe8",
          borderRadius: 22,
          padding: 20,
          overflow: "hidden",
          boxShadow: "0 2px 8px 0 rgba(204, 98, 76, 0.08)",
          cursor: "pointer",
        };
      return (0, t.jsx)("div", {
        style: { perspective: 1200 },
        children: k
          ? (0, t.jsxs)(a.motion.div, {
              whileTap: { scale: 0.97 },
              transition: { type: "spring", stiffness: 400, damping: 25 },
              className: "holo-tilt-touch",
              style: H,
              children: [
                N,
                (0, t.jsx)("style", {
                  dangerouslySetInnerHTML: {
                    __html: `
            .holo-tilt-touch:active {
              animation: holoTouchGlow 0.6s ease-out;
            }
            @keyframes holoTouchGlow {
              0% { box-shadow: 0 2px 8px 0 rgba(204, 98, 76, 0.08); }
              40% { box-shadow: 0 4px 20px 4px rgba(204, 98, 76, 0.28); }
              100% { box-shadow: 0 2px 8px 0 rgba(204, 98, 76, 0.08); }
            }
          `,
                  },
                }),
              ],
            })
          : (0, t.jsx)(a.motion.div, {
              onPointerMove: (e) => {
                let t = e.currentTarget.getBoundingClientRect();
                (i.set((e.clientX - t.left) / t.width - 0.5),
                  r.set((e.clientY - t.top) / t.height - 0.5));
              },
              onPointerLeave: () => {
                (i.set(0), r.set(0));
              },
              ...{
                whileHover: {
                  y: -3,
                  boxShadow: "0 8px 24px 0 rgba(204, 98, 76, 0.12)",
                },
                transition: { type: "spring", stiffness: 300, damping: 20 },
              },
              style: {
                ...H,
                transformStyle: "preserve-3d",
                rotateX: W,
                rotateY: C,
              },
              children: N,
            }),
      });
    }
    var p = e.i(144925),
      x = e.i(974336);
    e.s(
      [
        "BestsellersSection",
        0,
        function () {
          let e = n.BESTSELLERS.slice(0, 4);
          return 0 === e.length
            ? null
            : (0, t.jsxs)("section", {
                className: "bg-[#eedfcc] py-20 relative",
                children: [
                  (0, t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 leading-none",
                    children: (0, t.jsx)("svg", {
                      viewBox: "0 0 1440 44",
                      className: "block w-full h-[44px]",
                      preserveAspectRatio: "none",
                      "aria-hidden": "true",
                      children: (0, t.jsx)("path", {
                        d: "M0,22 C360,44 720,0 1080,22 C1260,33 1380,18 1440,22 L1440,0 L0,0 Z",
                        fill: "#eedfcc",
                      }),
                    }),
                  }),
                  (0, t.jsxs)(i.FadeUp, {
                    className: "max-w-[1200px] mx-auto px-6 pt-7",
                    children: [
                      (0, t.jsx)(r.SectionTitle, {
                        sub: "Alles frisch und selbstgemacht — das schmeckt man.",
                        children: "Unsere Highlights",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
                        children: e.map((e) =>
                          (0, t.jsx)(b, { item: e }, e.id),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: "text-center mt-10",
                        children: (0, t.jsx)(x.TransitionLink, {
                          href: "/menu",
                          children: (0, t.jsx)(p.PrimaryButton, {
                            large: !0,
                            sectionBg: "#eedfcc",
                            children: "Alle Produkte ansehen",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              });
        },
      ],
      255531,
    );
  },
  881013,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      i = e.i(636498),
      r = e.i(17253),
      s = e.i(686190),
      s = s,
      a = e.i(867927),
      l = e.i(906815),
      l = l,
      o = e.i(581030),
      o = o,
      d = e.i(388341),
      d = d,
      c = e.i(183468),
      c = c,
      u = e.i(846932),
      h = e.i(88653),
      m = e.i(989033);
    let f = [
      {
        id: "spring",
        name: "Frühling",
        icon: (0, t.jsx)(c.default, { className: "w-6 h-6" }),
        color: "#E4C0A8",
        specialTitle: "Rhabarber-Erdbeer Traum",
        specialDesc:
          "Sobald die ersten warmen Sonnenstrahlen Wetzlars Kopfsteinpflaster erwärmen, eröffnen wir die Frühlingssaison. Freu dich auf unsere Bubble Waffle mit frischem Rhabarber-Kompott, den ersten regionalen Erdbeeren und einer leichten Vanillecreme, die den grauen Winter endgültig vertreibt.",
        items: [
          "Rhabarber-Erdbeer Bubble Waffle",
          "Matcha Latte mit Sakura-Sirup",
          "Fruchtiger Frühlings-Crêpe",
        ],
      },
      {
        id: "summer",
        name: "Sommer",
        icon: (0, t.jsx)(l.default, { className: "w-6 h-6" }),
        color: "#CC624C",
        specialTitle: "Tropical Mango Madness",
        specialDesc:
          "Wenn die Hitze über dem Eisenmarkt steht, sorgt unser Sommer-Spezial für die perfekte Abkühlung. Ein gigantischer 500ml Eisbecher mit hausgemachtem Mango-Sorbet, frischen Maracuja-Kernen, Kokosraspeln und unserem cremigen Softeis. Ein tropischer Kurzurlaub mitten in Hessen.",
        items: [
          "Tropical Mango Eisbecher",
          "Iced Caramel Macchiato",
          "Zitronen-Sorbet Shake",
        ],
      },
      {
        id: "autumn",
        name: "Herbst",
        icon: (0, t.jsx)(o.default, { className: "w-6 h-6" }),
        color: "#9a7060",
        specialTitle: "Pumpkin Spice Pancake Stack",
        specialDesc:
          "Wenn das Laub der Lahnauen sich bunt färbt, holen wir die wärmenden Gewürze heraus. Unser fluffiger Pancake-Stapel, verfeinert mit echtem Kürbispüree, Zimt, Muskatnuss und übergossen mit warmem Ahornsirup und gerösteten Pekannüssen, ist pures Herbst-Glück auf dem Teller.",
        items: [
          "Pumpkin Spice Pancakes",
          "Karamellisierter Apfel-Crêpe",
          "Chai Tea Latte",
        ],
      },
      {
        id: "winter",
        name: "Winter",
        icon: (0, t.jsx)(d.default, { className: "w-6 h-6" }),
        color: "#5c3d35",
        specialTitle: "Spekulatius-Winterzauber",
        specialDesc:
          "Nach einem Bummel über den Wetzlarer Weihnachtsmarkt wärmst du dich am besten bei uns auf. Genieße unsere Winter-Bubble-Waffle mit heißer Schokoladensoße, zerkrümelten Spekulatius-Keksen, gebrannten Mandeln und einer großzügigen Haube aus frisch geschlagener Sahne.",
        items: [
          "Spekulatius Bubble Waffle",
          "Heiße Schokolade mit Marshmallows",
          "Lebkuchen Shake",
        ],
      },
    ];
    e.s(
      [
        "SeasonalHighlights",
        0,
        function () {
          let [e, l] = (0, n.useState)(1),
            o = f[e];
          return (0, t.jsxs)("section", {
            className: "bg-[#eedfcc] py-24 relative overflow-hidden",
            children: [
              (0, t.jsx)("div", {
                className: "absolute top-0 left-0 w-full -translate-y-1",
                children: (0, t.jsx)(m.WaveDivider, {
                  fromColor: "#f5efe8",
                  toColor: "#eedfcc",
                  variant: 2,
                }),
              }),
              (0, t.jsxs)(i.FadeUp, {
                delay: 0.1,
                className: "max-w-[1200px] mx-auto px-6 pt-12",
                children: [
                  (0, t.jsx)(r.SectionTitle, {
                    sub: "Im Rhythmus der Jahreszeiten.",
                    children: "Saisonale Highlights",
                  }),
                  (0, t.jsx)("div", {
                    className: "flex justify-center gap-4 mt-8 mb-12 flex-wrap",
                    children: f.map((n, i) =>
                      (0, t.jsxs)(
                        "button",
                        {
                          onClick: () => l(i),
                          className: `flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${e === i ? "bg-[#CC624C] text-white shadow-md scale-105" : "bg-white text-[#5c3d35] hover:bg-cream border border-peach/50"}`,
                          children: [n.icon, n.name],
                        },
                        n.id,
                      ),
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "relative bg-white rounded-[32px] p-8 md:p-12 shadow-lg border-2 border-peach/40 max-w-[900px] mx-auto min-h-[400px] flex items-center",
                    children: [
                      (0, t.jsx)(h.AnimatePresence, {
                        mode: "wait",
                        children: (0, t.jsxs)(
                          u.motion.div,
                          {
                            initial: { opacity: 0, x: 20 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: -20 },
                            transition: { duration: 0.3 },
                            className:
                              "grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full",
                            children: [
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-6",
                                    style: { backgroundColor: o.color },
                                    children: "Das aktuelle Special",
                                  }),
                                  (0, t.jsx)("h3", {
                                    className:
                                      "font-calistoga text-3xl md:text-4xl text-[#2d1f19] mb-6 leading-tight",
                                    children: o.specialTitle,
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "font-nunito text-[#5c3d35] leading-relaxed mb-8",
                                    children: o.specialDesc,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "bg-[#f5efe8] rounded-3xl p-8 border border-peach/50 relative",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute -top-4 -right-4 bg-terracotta text-white w-12 h-12 flex items-center justify-center rounded-full font-calistoga text-2xl shadow-md rotate-12",
                                    children: "★",
                                  }),
                                  (0, t.jsxs)("h4", {
                                    className:
                                      "font-calistoga text-xl text-[#2d1f19] mb-6",
                                    children: [
                                      "Weitere ",
                                      o.name,
                                      "s-Highlights",
                                    ],
                                  }),
                                  (0, t.jsx)("ul", {
                                    className: "space-y-4",
                                    children: o.items.map((e, n) =>
                                      (0, t.jsxs)(
                                        "li",
                                        {
                                          className: "flex items-start gap-3",
                                          children: [
                                            (0, t.jsx)("span", {
                                              style: { color: o.color },
                                              className:
                                                "font-bold text-xl mt-[-2px]",
                                              children: "•",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "font-nunito font-bold text-[#5c3d35]",
                                              children: e,
                                            }),
                                          ],
                                        },
                                        n,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          },
                          o.id,
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 hidden md:block",
                        children: (0, t.jsx)("button", {
                          onClick: () =>
                            l((e) => (e - 1 + f.length) % f.length),
                          className:
                            "bg-white text-terracotta w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-cream transition-colors border-2 border-peach/30",
                          children: (0, t.jsx)(s.default, {
                            className: "w-8 h-8 ml-[-2px]",
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 hidden md:block",
                        children: (0, t.jsx)("button", {
                          onClick: () => l((e) => (e + 1) % f.length),
                          className:
                            "bg-white text-terracotta w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-cream transition-colors border-2 border-peach/30",
                          children: (0, t.jsx)(a.ChevronRight, {
                            className: "w-8 h-8 mr-[-2px]",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      881013,
    );
  },
  411161,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      i = e.i(636498),
      r = e.i(17253);
    let s = [
      {
        q: "Was ist Hey Fede?",
        a: "Hey Fede! ist eine Dessertbar in der Wetzlarer Altstadt, die auf handgemachte Bubble Waffles, Pancakes, Eis und kreative Dessert-Kreationen spezialisiert ist. Wir verbinden frische Zutaten mit einzigartigen Rezepturen, um dir ein unvergessliches Geschmackserlebnis zu bieten.",
      },
      {
        q: "Wo ist Hey Fede?",
        a: "Hey Fede! befindet sich in der Altstadt von Wetzlar, mitten im historischen Stadtkern. Du findest uns in fußläufiger Nähe zum Wetzlarer Dom und den beliebten Einkaufsstraßen der Innenstadt.",
      },
      {
        q: "Wann hat Hey Fede geöffnet?",
        a: "Unsere aktuellen Öffnungszeiten findest du immer auf unserer Website und auf Google Maps. Wir haben in der Regel von Dienstag bis Sonntag geöffnet und freuen uns auf deinen Besuch in der Wetzlarer Altstadt.",
      },
      {
        q: "Seit wann gibt es Hey Fede?",
        a: "Hey Fede! wurde mit der Vision gegründet, Wetzlar um eine einzigartige Dessert-Experience zu bereichern. Seitdem sind wir ein fester Bestandteil der Wetzlarer Gastro-Szene und begeistern täglich Gäste mit unseren kreativen Kreationen.",
      },
      {
        q: "Wer steckt hinter Hey Fede?",
        a: "Hinter Hey Fede! steht ein leidenschaftliches Team, das Desserts liebt und Wetzlar als Heimat betrachtet. Unser Gründer hat die Idee einer modernen Dessertbar nach Wetzlar gebracht, um Menschen mit außergewöhnlichen Süßspeisen zusammenzubringen.",
      },
      {
        q: "Was macht Hey Fede besonders?",
        a: "Was uns besonders macht, sind unsere handgemachten Bubble Waffles mit individuellen Toppings, die frische Zubereitung vor deinen Augen und die einladende Atmosphäre mitten in der Wetzlarer Altstadt. Jede Kreation wird mit Liebe und Sorgfalt zubereitet.",
      },
      {
        q: "Wie sind die Bewertungen von Hey Fede?",
        a: "Wir freuen uns über durchweg positive Bewertungen auf Google und Social Media. Unsere Gäste loben besonders die Qualität unserer Bubble Waffles, den freundlichen Service und das gemütliche Ambiente in unserer Dessertbar in Wetzlar.",
      },
      {
        q: "Gibt es WLAN bei Hey Fede?",
        a: "Ja, wir bieten kostenloses WLAN für unsere Gäste an. Genieße deine Bubble Waffle oder deinen Pancake und bleib dabei online – perfekt für eine gemütliche Pause in der Wetzlarer Altstadt.",
      },
      {
        q: "Akzeptiert Hey Fede Kartenzahlung?",
        a: "Ja, bei uns kannst du bequem mit Karte zahlen. Wir akzeptieren gängige Kredit- und Debitkarten sowie kontaktloses Bezahlen. Natürlich ist auch Barzahlung möglich.",
      },
      {
        q: "Hat Hey Fede Außenplätze?",
        a: "Ja, wir haben Sitzplätze im Außenbereich, wo du bei schönem Wetter deine Desserts genießen kannst. Die Lage in der Wetzlarer Altstadt bietet dabei eine wunderschöne Kulisse mit historischem Flair.",
      },
      {
        q: "Was sind Bubble Waffles?",
        a: "Bubble Waffles sind knusprige Waffeln mit charakteristischen runden Blasen, die ursprünglich aus Hongkong stammen. Bei Hey Fede! werden sie frisch zubereitet, zu einer Tüte geformt und mit Eis, Früchten, Saucen und kreativen Toppings gefüllt.",
      },
      {
        q: "Sind eure Bubble Waffles glutenfrei?",
        a: "Unsere klassischen Bubble Waffles enthalten Gluten. Bitte sprich uns vor Ort an, wenn du Unverträglichkeiten hast – wir beraten dich gerne zu Alternativen und informieren dich über alle Inhaltsstoffe.",
      },
      {
        q: "Hat Hey Fede vegane Optionen?",
        a: "Ja, wir bieten vegane Optionen an, darunter ausgewählte Eissorten und Toppings. Frag unser Team vor Ort nach den aktuell verfügbaren veganen Kreationen – wir erweitern unser Angebot regelmäßig.",
      },
      {
        q: "Gibt es bei Hey Fede vegetarische Desserts?",
        a: "Auf jeden Fall! Der Großteil unserer Desserts ist vegetarisch. Von Bubble Waffles über Pancakes bis hin zu unseren Eiskreationen – als Vegetarier findest du bei uns eine große Auswahl in unserer Dessertbar in Wetzlar.",
      },
      {
        q: "Sind die Produkte bei Hey Fede Halal?",
        a: "Ja, unsere Produkte sind Halal. Wir achten darauf, dass unsere Zutaten den Halal-Anforderungen entsprechen, damit alle Gäste unsere Desserts unbeschwert genießen können.",
      },
      {
        q: "Was ist die beliebteste Bestellung bei Hey Fede?",
        a: "Unser absoluter Bestseller ist die Bubble Waffle mit Eis und frischen Toppings – die Kombination aus knuspriger Waffel und cremigem Eis begeistert unsere Gäste immer wieder. Auch unsere Fede & Friends Box ist sehr beliebt für Gruppen.",
      },
      {
        q: "Was ist die Fede & Friends Box?",
        a: "Die Fede & Friends Box ist unsere Sharing-Box, perfekt zum Teilen mit Freunden oder der Familie. Sie enthält eine Auswahl unserer beliebtesten Desserts und Toppings – ideal für gemeinsame Genussmomente in Wetzlar oder zu Hause.",
      },
      {
        q: "Macht Hey Fede die Pancakes selbst?",
        a: "Ja, unsere Pancakes werden frisch und von Hand in unserer Küche zubereitet. Wir verwenden hochwertige Zutaten für den perfekten, fluffigen Teig und servieren sie mit einer Vielzahl an Toppings und Saucen.",
      },
      {
        q: "Welche Eissorten hat Hey Fede?",
        a: "Wir bieten eine wechselnde Auswahl an cremigen Eissorten, von Klassikern wie Vanille und Schokolade bis hin zu besonderen Geschmacksrichtungen. Schau auf unserer Karte oder frag vor Ort nach den aktuellen Sorten.",
      },
      {
        q: "Gibt es bei Hey Fede saisonale Specials?",
        a: "Ja, wir überraschen unsere Gäste regelmäßig mit saisonalen Specials und limitierten Kreationen. Folge uns auf Instagram, um keine Neuheit zu verpassen und als Erster von unseren neuen Dessert-Kreationen in Wetzlar zu erfahren.",
      },
      {
        q: "Kann ich bei Hey Fede online bestellen?",
        a: "Ja, du kannst über Lieferando bei uns bestellen und dir deine Lieblings-Desserts direkt nach Hause liefern lassen. Alternativ kannst du auch telefonisch oder per WhatsApp vorbestellen und deine Bestellung abholen.",
      },
      {
        q: "Liefert Hey Fede?",
        a: "Ja, wir liefern über Lieferando im Raum Wetzlar. So kannst du unsere Bubble Waffles, Pancakes und Eis-Kreationen bequem zu Hause genießen, ohne unsere Dessertbar in der Altstadt besuchen zu müssen.",
      },
      {
        q: "Gibt es bei Hey Fede Abholung?",
        a: "Ja, du kannst deine Bestellung bei uns vorbestellen und zur Abholung in unserer Dessertbar in der Wetzlarer Altstadt bereithalten lassen. So sparst du Wartezeit und kannst dein Dessert direkt mitnehmen.",
      },
      {
        q: "Wie bestelle ich bei Hey Fede über Lieferando?",
        a: 'Suche einfach nach "Hey Fede" in der Lieferando-App oder auf der Lieferando-Website. Dort findest du unsere aktuelle Karte, kannst deine Wunsch-Kreation zusammenstellen und bequem nach Hause liefern lassen.',
      },
      {
        q: "Wie lange dauert die Zubereitung bei Hey Fede?",
        a: "Da wir alles frisch zubereiten, dauert es in der Regel 5 bis 10 Minuten, bis deine Bestellung fertig ist. Bei hohem Andrang kann es etwas länger dauern – die Frische ist es aber definitiv wert!",
      },
      {
        q: "Kann ich bei Hey Fede vorbestellen?",
        a: "Ja, du kannst telefonisch oder über WhatsApp vorbestellen. Das ist besonders praktisch, wenn du wenig Zeit hast oder eine größere Bestellung für eine Gruppe aufgeben möchtest.",
      },
      {
        q: "Gibt es einen Mindestbestellwert bei Hey Fede?",
        a: "Für Bestellungen über Lieferando gelten die üblichen Mindestbestellwerte der Plattform. Vor Ort in unserer Dessertbar in Wetzlar gibt es keinen Mindestbestellwert – jeder ist willkommen!",
      },
      {
        q: "Welche Zahlungsarten akzeptiert Hey Fede?",
        a: "Wir akzeptieren Barzahlung, EC-Karte, Kreditkarte und kontaktloses Bezahlen. Bei Lieferando-Bestellungen stehen dir alle dort verfügbaren Zahlungsmethoden wie PayPal und Kreditkarte zur Verfügung.",
      },
      {
        q: "Kann ich bei Hey Fede per WhatsApp bestellen?",
        a: "Ja, du kannst uns über WhatsApp kontaktieren, um vorzubestellen oder Fragen zu unserer Karte zu stellen. Die aktuelle WhatsApp-Nummer findest du auf unserer Website und auf Google Maps.",
      },
      {
        q: "Gibt es Hey Fede Gutscheine?",
        a: "Ja, wir bieten Gutscheine an – das perfekte Geschenk für alle Dessert-Liebhaber in Wetzlar! Du kannst sie direkt bei uns in der Dessertbar erwerben. Frag einfach unser Team vor Ort.",
      },
      {
        q: "Wie komme ich mit dem Bus zu Hey Fede?",
        a: "Hey Fede! ist mit dem Bus gut erreichbar. Mehrere Buslinien halten in der Nähe der Wetzlarer Altstadt. Von der nächsten Haltestelle sind es nur wenige Gehminuten bis zu unserer Dessertbar.",
      },
      {
        q: "Wo kann ich bei Hey Fede parken?",
        a: "In der Nähe unserer Dessertbar gibt es mehrere öffentliche Parkplätze und Parkhäuser in der Wetzlarer Innenstadt. Das Parkhaus am Forum Wetzlar und die Parkplätze am Domplatz sind gute Optionen für deinen Besuch.",
      },
      {
        q: "Wie weit ist Hey Fede vom Bahnhof Wetzlar?",
        a: "Vom Bahnhof Wetzlar erreichst du unsere Dessertbar in der Altstadt in etwa 10 bis 15 Minuten zu Fuß. Der Weg führt dich durch die charmante Innenstadt – ein schöner Spaziergang bis zu deinem Dessert.",
      },
      {
        q: "Kann man bei Hey Fede reservieren?",
        a: 'Da wir eine Dessertbar mit begrenzten Sitzplätzen sind, funktionieren wir in der Regel ohne Reservierung nach dem Prinzip „First come, first served". Für größere Gruppen empfehlen wir, uns vorher zu kontaktieren.',
      },
      {
        q: "Ist Hey Fede barrierefrei?",
        a: "Wir bemühen uns, unsere Dessertbar in der Wetzlarer Altstadt so zugänglich wie möglich zu gestalten. Bitte kontaktiere uns vorab, wenn du spezielle Anforderungen hast, damit wir deinen Besuch optimal vorbereiten können.",
      },
      {
        q: "Ist Hey Fede kinderfreundlich?",
        a: "Absolut! Hey Fede! ist ein beliebtes Ziel für Familien in Wetzlar. Unsere bunten Desserts und die freundliche Atmosphäre begeistern Kinder genauso wie Erwachsene. Wir heißen Familien herzlich willkommen.",
      },
      {
        q: "Kann ich bei Hey Fede für eine Gruppe reservieren?",
        a: "Für größere Gruppen empfehlen wir, uns vorher per Telefon oder WhatsApp zu kontaktieren. So können wir sicherstellen, dass genügend Platz vorhanden ist und dein Gruppen-Besuch in unserer Wetzlarer Dessertbar reibungslos klappt.",
      },
      {
        q: "Gibt es bei Hey Fede eine Kinderecke?",
        a: "Unser gemütlicher Laden ist kompakt, aber familienfreundlich gestaltet. Kinder sind bei uns in der Wetzlarer Altstadt jederzeit herzlich willkommen und können sich auf bunte Desserts und ein tolles Erlebnis freuen.",
      },
      {
        q: "Wie weit ist Hey Fede vom Wetzlarer Dom?",
        a: "Der Wetzlarer Dom ist nur wenige Gehminuten von unserer Dessertbar entfernt. Nach einem Besuch des historischen Doms kannst du perfekt bei uns vorbeischauen und ein Dessert in der Altstadt genießen.",
      },
      {
        q: "Wie ist die Atmosphäre bei Hey Fede?",
        a: "Die Atmosphäre bei Hey Fede! ist modern, einladend und gemütlich. Unser Laden in der Wetzlarer Altstadt verbindet ein stylisches Ambiente mit einer warmen, freundlichen Stimmung – perfekt für einen süßen Zwischenstopp.",
      },
    ];
    var a = e.i(716327),
      l = e.i(846932),
      o = e.i(88653);
    e.s(
      [
        "FAQQuickCheck",
        0,
        function () {
          let [e, d] = (0, n.useState)(0),
            c = s.slice(0, 8);
          return (0, t.jsx)("section", {
            className: "bg-cream py-24 relative z-10",
            children: (0, t.jsxs)(i.FadeUp, {
              className: "max-w-[800px] mx-auto px-6",
              children: [
                (0, t.jsx)(r.SectionTitle, {
                  sub: "Gut zu wissen.",
                  children: "FAQ Quick-Check",
                }),
                (0, t.jsx)("p", {
                  className: "text-center font-nunito text-[#5c3d35] mb-12",
                  children:
                    "Hier sind die häufigsten Fragen, die unsere Gäste in Wetzlar stellen. Für noch mehr Details schau einfach auf unserer ausführlichen FAQ-Seite vorbei.",
                }),
                (0, t.jsx)("div", {
                  className: "space-y-4",
                  children: c.map((n, i) => {
                    let r = e === i;
                    return (0, t.jsxs)(
                      "div",
                      {
                        className: `bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${r ? "border-terracotta shadow-md" : "border-peach/50 shadow-sm hover:border-terracotta/50"}`,
                        children: [
                          (0, t.jsxs)("button", {
                            onClick: () => {
                              d(e === i ? null : i);
                            },
                            className:
                              "w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none",
                            "aria-expanded": r,
                            children: [
                              (0, t.jsx)("span", {
                                className:
                                  "font-calistoga text-[#2d1f19] text-[1.15rem] leading-tight",
                                children: n.q,
                              }),
                              (0, t.jsx)("div", {
                                className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${r ? "bg-terracotta text-white rotate-180" : "bg-[#f5efe8] text-terracotta"}`,
                                children: (0, t.jsx)(a.ChevronDown, {
                                  className: "w-5 h-5",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)(o.AnimatePresence, {
                            children:
                              r &&
                              (0, t.jsx)(l.motion.div, {
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: {
                                  duration: 0.3,
                                  ease: "easeInOut",
                                },
                                children: (0, t.jsxs)("div", {
                                  className:
                                    "px-6 pb-6 font-nunito text-[#5c3d35] leading-relaxed",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "w-full h-[1px] bg-peach/30 mb-4",
                                    }),
                                    (0, t.jsx)("div", {
                                      dangerouslySetInnerHTML: { __html: n.a },
                                    }),
                                  ],
                                }),
                              }),
                          }),
                        ],
                      },
                      i,
                    );
                  }),
                }),
              ],
            }),
          });
        },
      ],
      411161,
    );
  },
]);
