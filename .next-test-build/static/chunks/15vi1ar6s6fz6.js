(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  430506,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(846932),
      a = e.i(310542),
      r = e.i(591994);
    e.s([
      "ScrollProgressBar",
      0,
      function () {
        let { scrollYProgress: e } = (0, a.useScroll)(),
          i = (0, r.useSpring)(e, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          });
        return (0, t.jsx)(s.motion.div, {
          className:
            "fixed top-0 left-0 right-0 h-[3px] bg-terracotta origin-left z-50 rounded-r-full",
          style: { scaleX: i },
          "aria-hidden": "true",
        });
      },
    ]);
  },
  603374,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(618566),
      r = e.i(846932),
      i = e.i(310542),
      n = e.i(895420),
      l = e.i(772328),
      o = e.i(901279),
      c = e.i(263448),
      d = e.i(974539),
      x = e.i(747265),
      m = e.i(974336);
    e.i(146492);
    var h = e.i(763159),
      p = e.i(798688),
      f = e.i(153287),
      u = e.i(88653),
      b = e.i(867927),
      g = e.i(892732);
    function j({ isOpen: e, onClose: s, pathname: a }) {
      let i = (0, l.useReducedMotion)();
      return (0, t.jsx)(u.AnimatePresence, {
        children:
          e &&
          (0, t.jsxs)(r.motion.div, {
            initial: i ? { opacity: 0 } : { opacity: 0, y: -20 },
            animate: i ? { opacity: 1 } : { opacity: 1, y: 0 },
            exit: i ? { opacity: 0 } : { opacity: 0, y: -20 },
            transition: { type: "spring", stiffness: 300, damping: 25 },
            className:
              "fixed top-[88px] left-0 right-0 bottom-0 z-[890] bg-cream p-6 flex flex-col gap-3 overflow-hidden",
            children: [
              (0, t.jsx)(g.FloatingBlob, {
                variant: "organic2",
                color: "peach",
                opacity: 0.3,
                size: 400,
                className: "-top-20 -right-20",
              }),
              (0, t.jsx)("nav", {
                "aria-label": "Mobile Navigation",
                className: "relative z-10 flex flex-col gap-3 mt-4",
                children: [
                  { id: "menu", href: "/menu", label: "Speisekarte" },
                  { id: "about", href: "/about", label: "Über Uns" },
                  { id: "visit", href: "/visit", label: "Besuchen & Liefern" },
                ].map(({ id: e, href: r, label: i }) => {
                  let n = a === r;
                  return (0, t.jsxs)(
                    m.TransitionLink,
                    {
                      href: r,
                      onClick: s,
                      className: `
                    w-full flex items-center justify-between p-5 rounded-2xl
                    font-calistoga text-2xl transition-colors duration-200
                    ${n ? "bg-sand text-terracotta" : "bg-transparent text-charcoal hover:bg-sand/50"}
                  `,
                      children: [
                        (0, t.jsx)("span", { children: i }),
                        (0, t.jsx)(b.ChevronRight, {
                          className: `w-6 h-6 ${n ? "text-terracotta" : "text-brown"}`,
                        }),
                      ],
                    },
                    e,
                  );
                }),
              }),
              (0, t.jsxs)("div", {
                className:
                  "relative z-10 mt-auto bg-sand rounded-2xl p-5 mb-4 border border-peach/50",
                children: [
                  (0, t.jsx)("p", {
                    className: "font-bold text-sm text-charcoal mb-1",
                    children: "Mi – Sa 12:00–19:00 · So 13:00–19:00",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-xs text-brown font-bold uppercase tracking-wider",
                    children: "Mo + Di geschlossen",
                  }),
                ],
              }),
            ],
          }),
      });
    }
    var v = e.i(919056);
    function w({ text: e, className: s }) {
      let a = (0, l.useReducedMotion)();
      return (0, t.jsx)("div", {
        className: (0, v.twMerge)(
          "w-full bg-peach text-terracotta overflow-hidden py-1.5 flex whitespace-nowrap",
          s,
        ),
        children: (0, t.jsxs)(r.motion.div, {
          initial: a ? { x: 0 } : { x: "100%" },
          animate: a ? { x: 0 } : { x: "-100%" },
          transition: a
            ? void 0
            : { repeat: 1 / 0, ease: "linear", duration: 15 },
          className:
            "font-bold text-sm tracking-widest uppercase px-4 flex-shrink-0",
          children: [
            e,
            " ",
            (0, t.jsx)("span", { className: "mx-8", children: "•" }),
            " ",
            e,
            " ",
            (0, t.jsx)("span", { className: "mx-8", children: "•" }),
            " ",
            e,
          ],
        }),
      });
    }
    var N = e.i(430506);
    e.s(
      [
        "Header",
        0,
        function () {
          let [e, u] = (0, s.useState)(!1),
            b = (0, a.usePathname)(),
            { cart: g, toggleCart: y } = (0, p.useStore)(),
            { settings: k } = (0, f.useStoreSettings)(),
            S = (0, l.useReducedMotion)(),
            { scrollY: C } = (0, i.useScroll)(),
            T = (0, n.useTransform)(C, [0, 80], [0, 0.9]),
            L = (0, n.useTransform)(C, [0, 80], [0, 12]),
            E = (0, n.useTransform)(C, [0, 80], [0, 0.1]),
            P = (0, n.useTransform)(C, [0, 80], [0, 1]),
            B = (0, n.useTransform)(T, (e) => `rgba(255,245,238, ${e})`),
            z = (0, n.useTransform)(L, (e) => `blur(${e}px)`),
            I = (0, n.useTransform)(
              P,
              (e) => `1px solid rgba(238,223,204, ${e})`,
            ),
            M = (0, n.useTransform)(
              E,
              (e) => `0 4px 20px rgba(45,31,25, ${e})`,
            );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(N.ScrollProgressBar, {}),
              (0, t.jsxs)("div", {
                className: "fixed top-0 left-0 right-0 z-[900] flex flex-col",
                children: [
                  k?.bannerText && (0, t.jsx)(w, { text: k.bannerText }),
                  (0, t.jsx)(r.motion.header, {
                    style: S
                      ? {
                          backgroundColor: "rgba(255,245,238, 0.95)",
                          backdropFilter: "blur(12px)",
                          borderBottom: "1px solid var(--color-sand)",
                          boxShadow: "0 4px 20px rgba(45,31,25, 0.08)",
                        }
                      : {
                          backgroundColor: B,
                          backdropFilter: z,
                          borderBottom: I,
                          boxShadow: M,
                        },
                    className: "w-full transition-all duration-200",
                    children: (0, t.jsxs)("div", {
                      className:
                        "max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between gap-4",
                      children: [
                        (0, t.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, t.jsx)(m.TransitionLink, {
                            href: "/",
                            "aria-label": "Hey Fedee! Startseite",
                            className: "block",
                            children: (0, t.jsx)(d.Logo, {
                              variant: "orange",
                              className: "w-[60px]",
                            }),
                          }),
                        }),
                        (0, t.jsx)("nav", {
                          "aria-label": "Hauptnavigation",
                          className: "hidden md:flex items-center gap-2",
                          children: [
                            { id: "menu", href: "/menu", label: "Speisekarte" },
                            { id: "about", href: "/about", label: "Über Uns" },
                            {
                              id: "visit",
                              href: "/visit",
                              label: "Besuchen & Liefern",
                            },
                          ].map(({ id: e, href: s, label: a }) => {
                            let r = b === s;
                            return (0, t.jsx)(
                              m.TransitionLink,
                              {
                                href: s,
                                className: (0, v.twMerge)(
                                  "px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200",
                                  r
                                    ? "bg-sand text-terracotta"
                                    : "text-charcoal hover:bg-sand/50",
                                ),
                                children: a,
                              },
                              e,
                            );
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, t.jsx)("div", {
                              className: "hidden md:block",
                              children: (0, t.jsx)(m.TransitionLink, {
                                href: "/menu",
                                tabIndex: -1,
                                children: (0, t.jsx)(h.PrimaryCTA, {
                                  className: "py-2.5 text-sm",
                                  showArrow: !0,
                                  children: "Jetzt bestellen",
                                }),
                              }),
                            }),
                            (0, t.jsx)(m.TransitionLink, {
                              href: "/auth",
                              "aria-label": "Profil",
                              children: (0, t.jsx)("div", {
                                className:
                                  "w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer",
                                children: (0, t.jsx)(o.User, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                }),
                              }),
                            }),
                            (0, t.jsxs)("button", {
                              onClick: y,
                              className:
                                "relative w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer",
                              "aria-label": "Warenkorb",
                              children: [
                                (0, t.jsx)(c.ShoppingBag, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                }),
                                g.length > 0 &&
                                  (0, t.jsx)("span", {
                                    className:
                                      "absolute -top-1.5 -right-1.5 w-[22px] h-[22px] bg-terracotta text-cream text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-cream",
                                    children: g.length,
                                  }),
                              ],
                            }),
                            (0, t.jsx)("button", {
                              className:
                                "md:hidden w-11 h-11 flex items-center justify-center bg-transparent border-none text-charcoal",
                              onClick: () => u(!e),
                              "aria-label": "Menü öffnen",
                              children: (0, t.jsx)(x.HamburgerIcon, {
                                className: "w-8 h-8",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(j, { isOpen: e, onClose: () => u(!1), pathname: b }),
            ],
          });
        },
      ],
      603374,
    );
  },
  58234,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(213227),
      s = s,
      a = e.i(974539),
      r = e.i(657688),
      i = e.i(974336),
      n = e.i(480929),
      l = e.i(67275),
      o = e.i(318028),
      c = e.i(420865),
      d = e.i(575387),
      x = e.i(615227),
      s = s;
    function m({ variant: e = "footer", className: a = "" }) {
      let r = "footer" === e;
      return (0, t.jsxs)("div", {
        className: `nap-block ${a}`,
        itemScope: !0,
        itemType: "https://schema.org/Restaurant",
        children: [
          (0, t.jsx)("meta", { itemProp: "name", content: o.BUSINESS.name }),
          (0, t.jsx)("meta", {
            itemProp: "telephone",
            content: o.BUSINESS.phoneTel,
          }),
          (0, t.jsxs)("div", {
            itemProp: "geo",
            itemScope: !0,
            itemType: "https://schema.org/GeoCoordinates",
            className: "hidden",
            children: [
              (0, t.jsx)("meta", {
                itemProp: "latitude",
                content: o.BUSINESS.latitude.toString(),
              }),
              (0, t.jsx)("meta", {
                itemProp: "longitude",
                content: o.BUSINESS.longitude.toString(),
              }),
            ],
          }),
          (0, t.jsx)("div", {
            itemProp: "address",
            itemScope: !0,
            itemType: "https://schema.org/PostalAddress",
            className: r
              ? "text-[#5c3d35] font-nunito text-[0.95rem] leading-[1.8]"
              : "flex flex-col gap-2.5",
            children: r
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 mb-6",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-start gap-3",
                      children: [
                        (0, t.jsx)(c.MapPin, {
                          className: "w-5 h-5 text-terracotta shrink-0 mt-0.5",
                        }),
                        (0, t.jsxs)("span", {
                          className: "font-bold text-sm text-charcoal",
                          children: [
                            (0, t.jsx)("span", {
                              itemProp: "streetAddress",
                              children: o.BUSINESS.street,
                            }),
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("span", {
                              itemProp: "postalCode",
                              children: o.BUSINESS.postalCode,
                            }),
                            " ",
                            (0, t.jsx)("span", {
                              itemProp: "addressLocality",
                              children: o.BUSINESS.city,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, t.jsx)(d.Phone, {
                          className: "w-5 h-5 text-terracotta shrink-0",
                        }),
                        (0, t.jsx)("a", {
                          href: `tel:${o.BUSINESS.phoneTel}`,
                          className:
                            "font-bold text-sm text-charcoal hover:text-terracotta transition-colors",
                          children: o.BUSINESS.phone,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, t.jsx)(c.MapPin, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "Adresse",
                            }),
                            (0, t.jsxs)("span", {
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19]",
                              children: [
                                (0, t.jsx)("span", {
                                  itemProp: "streetAddress",
                                  children: o.BUSINESS.street,
                                }),
                                ", ",
                                (0, t.jsx)("span", {
                                  itemProp: "postalCode",
                                  children: o.BUSINESS.postalCode,
                                }),
                                " ",
                                (0, t.jsx)("span", {
                                  itemProp: "addressLocality",
                                  children: o.BUSINESS.city,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, t.jsx)(d.Phone, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "Telefon",
                            }),
                            (0, t.jsx)("a", {
                              href: `tel:${o.BUSINESS.phoneTel}`,
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline",
                              children: o.BUSINESS.phone,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, t.jsx)(x.MessageCircle, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "WhatsApp",
                            }),
                            (0, t.jsx)("a", {
                              href: `https://wa.me/${o.BUSINESS.whatsapp}`,
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline",
                              children: o.BUSINESS.whatsappDisplay,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, t.jsx)(s.default, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "Instagram",
                            }),
                            (0, t.jsxs)("a", {
                              href: o.BUSINESS.instagramUrl,
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline",
                              children: ["@", o.BUSINESS.instagram],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          }),
        ],
      });
    }
    var h = e.i(126515);
    e.s(
      [
        "Footer",
        0,
        function () {
          return (
            new Date().getDay(),
            (0, t.jsxs)("footer", {
              className: "relative bg-sand pt-10",
              children: [
                (0, t.jsx)("div", {
                  className: "absolute top-0 left-0 w-full -translate-y-[99%]",
                  children: (0, t.jsx)(n.WaveDivider, {
                    variant: "long-curve",
                    className: "w-[150%] md:w-full h-auto text-sand",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "max-w-7xl mx-auto px-6 pt-12 pb-8",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex flex-col items-start",
                          children: [
                            (0, t.jsx)(i.TransitionLink, {
                              href: "/",
                              "aria-label": "Startseite",
                              children: (0, t.jsx)(a.Logo, {
                                variant: "orange",
                                className: "w-20 mb-4",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "font-calistoga text-xl text-charcoal mb-4",
                              children: "Dessertbar & Café",
                            }),
                            (0, t.jsx)(m, { variant: "footer" }),
                            (0, t.jsx)("div", {
                              className: "flex gap-3",
                              children: (0, t.jsxs)("a", {
                                href: o.BUSINESS.instagramUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "bg-terracotta text-cream px-4 py-2 rounded-full font-bold text-[13px] hover:bg-[#b05240] transition-colors flex items-center gap-2",
                                children: [
                                  (0, t.jsx)(s.default, {
                                    className: "w-4 h-4",
                                  }),
                                  " Instagram",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "font-calistoga text-xl text-terracotta mb-6",
                              children: "Hey Fede!",
                            }),
                            (0, t.jsx)("nav", {
                              "aria-label": "Footer Navigation",
                              className: "flex flex-col gap-4 mb-8",
                              children: [
                                { href: "/", label: "Startseite" },
                                { href: "/menu", label: "Speisekarte" },
                                { href: "/about", label: "Über Uns" },
                                { href: "/visit", label: "Besuchen & Liefern" },
                              ].map((e) =>
                                (0, t.jsxs)(
                                  i.TransitionLink,
                                  {
                                    href: e.href,
                                    className:
                                      "font-bold text-charcoal w-fit hover:text-terracotta transition-colors relative group",
                                    children: [
                                      e.label,
                                      (0, t.jsx)("span", {
                                        className:
                                          "absolute -bottom-1 left-0 w-full h-[3px] bg-terracotta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                                        style: {
                                          maskImage:
                                            "url(\"data:image/svg+xml,%3Csvg width='10' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1.5 Q 2.5 0, 5 1.5 T 10 1.5' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E\")",
                                          maskRepeat: "repeat-x",
                                        },
                                      }),
                                    ],
                                  },
                                  e.href,
                                ),
                              ),
                            }),
                            (0, t.jsx)("h3", {
                              className:
                                "font-calistoga text-lg text-terracotta/80 mb-4",
                              children: "Entdecke Mehr",
                            }),
                            (0, t.jsx)("nav", {
                              "aria-label": "SEO Navigation",
                              className: "flex flex-col gap-3",
                              children: [
                                {
                                  href: "/bubble-waffles-wetzlar",
                                  label: "Bubble Waffles",
                                },
                                {
                                  href: "/lieferservice-desserts-lahn-dill",
                                  label: "Lieferservice",
                                },
                                {
                                  href: "/eisdiele-wetzlar-special-shakes",
                                  label: "Eisdiele & Shakes",
                                },
                                {
                                  href: "/events-catering-hessen",
                                  label: "Event Catering",
                                },
                                {
                                  href: "/vegane-desserts-wetzlar",
                                  label: "Vegane Desserts",
                                },
                              ].map((e) =>
                                (0, t.jsx)(
                                  i.TransitionLink,
                                  {
                                    href: e.href,
                                    className:
                                      "text-sm font-nunito font-bold text-charcoal/80 w-fit hover:text-terracotta transition-colors",
                                    children: e.label,
                                  },
                                  e.href,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "font-calistoga text-xl text-terracotta mb-6",
                              children: "Öffnungszeiten",
                            }),
                            (0, t.jsx)("div", {
                              className: "mb-4",
                              children: (0, t.jsx)(h.ClientHoursTable, {}),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "mt-6 p-4 bg-cream rounded-2xl border-2 border-peach text-xs font-bold text-terracotta text-center transform -rotate-2",
                              children: "✓ Keine Liefergebühr bei Lieferando",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "font-calistoga text-xl text-terracotta mb-6",
                              children: "Stay Sweet",
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-sm font-bold text-charcoal/80 mb-4",
                              children:
                                "Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.",
                            }),
                            (0, t.jsx)(l.NewsletterInput, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-12 border-t border-peach/50 relative",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "font-calistoga text-3xl md:text-5xl text-charcoal transform -rotate-3 hover:rotate-0 transition-transform",
                          children: "Frisch",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "text-terracotta font-calistoga text-2xl hidden md:block",
                          children: "·",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "font-calistoga text-3xl md:text-5xl text-charcoal transform rotate-2 hover:rotate-0 transition-transform",
                          children: "Selbstgemacht",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "text-terracotta font-calistoga text-2xl hidden md:block",
                          children: "·",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "font-calistoga text-3xl md:text-5xl text-terracotta transform -rotate-1 hover:rotate-0 transition-transform",
                          children: "Mit Liebe",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "h-16 w-full rounded-full overflow-hidden relative mb-12 flex items-center justify-around opacity-60",
                      style: {
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, rgba(201, 80, 57, 0.15) 1px, transparent 0)",
                        backgroundSize: "16px 16px",
                      },
                      children: [
                        (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-terracotta",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: (0, t.jsx)("path", {
                            d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                          }),
                        }),
                        (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-peach",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: (0, t.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                          }),
                        }),
                        (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-brown",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: (0, t.jsx)("path", {
                            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
                          }),
                        }),
                        (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-terracotta",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: (0, t.jsx)("path", {
                            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
                          }),
                        }),
                        (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-charcoal",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: (0, t.jsx)("path", {
                            d: "M12 2L15 8l6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "mb-12 text-center",
                      itemScope: !0,
                      itemType: "https://schema.org/Place",
                      children: [
                        (0, t.jsx)("h3", {
                          className:
                            "font-calistoga text-xl text-terracotta mb-4",
                          children: "Wir sind hier zuhause",
                        }),
                        (0, t.jsxs)("p", {
                          className:
                            "text-sm font-nunito font-bold text-charcoal/70 flex flex-wrap justify-center items-center gap-2",
                          children: [
                            (0, t.jsxs)("span", {
                              itemProp: "containedInPlace",
                              itemScope: !0,
                              itemType: "https://schema.org/AdministrativeArea",
                              children: [
                                (0, t.jsx)("span", {
                                  itemProp: "name",
                                  className: "text-charcoal",
                                  children: "Hessen",
                                }),
                                (0, t.jsx)("link", {
                                  itemProp: "sameAs",
                                  href: "https://www.wikidata.org/wiki/Q1199",
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "text-peach",
                              children: "›",
                            }),
                            (0, t.jsxs)("span", {
                              itemProp: "containedInPlace",
                              itemScope: !0,
                              itemType: "https://schema.org/AdministrativeArea",
                              children: [
                                (0, t.jsx)("span", {
                                  itemProp: "name",
                                  className: "text-charcoal",
                                  children: "Lahn-Dill-Kreis",
                                }),
                                (0, t.jsx)("link", {
                                  itemProp: "sameAs",
                                  href: "https://www.wikidata.org/wiki/Q7059",
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "text-peach",
                              children: "›",
                            }),
                            (0, t.jsxs)("span", {
                              itemProp: "containedInPlace",
                              itemScope: !0,
                              itemType: "https://schema.org/City",
                              children: [
                                (0, t.jsx)("span", {
                                  itemProp: "name",
                                  className: "text-charcoal",
                                  children: "Wetzlar",
                                }),
                                (0, t.jsx)("link", {
                                  itemProp: "sameAs",
                                  href: "https://www.wikidata.org/wiki/Q3950",
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "text-peach",
                              children: "›",
                            }),
                            (0, t.jsx)("span", {
                              itemProp: "address",
                              itemScope: !0,
                              itemType: "https://schema.org/PostalAddress",
                              children: (0, t.jsx)("span", {
                                itemProp: "streetAddress",
                                className: "text-charcoal",
                                children: "Langgasse",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-col items-center mb-12",
                      children: [
                        (0, t.jsx)("h3", {
                          className:
                            "font-calistoga text-lg text-charcoal/80 mb-4",
                          children: "Besuche uns auch auf",
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-wrap justify-center gap-4",
                          children: [
                            (0, t.jsxs)("a", {
                              href: o.BUSINESS.googleMapsUrl,
                              target: "_blank",
                              rel: "external nofollow",
                              className:
                                "flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-[#4285F4] font-extrabold",
                                  children: "G",
                                }),
                                " Google",
                              ],
                            }),
                            (0, t.jsxs)("a", {
                              href: "https://www.tripadvisor.de/HeyFede-Wetzlar",
                              target: "_blank",
                              rel: "external nofollow",
                              className:
                                "flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "text-[#34E0A1] text-[16px] leading-none",
                                  children: "●",
                                }),
                                " ",
                                "TripAdvisor",
                              ],
                            }),
                            (0, t.jsx)("a", {
                              href: "https://www.yelp.de/biz/hey-fede-wetzlar",
                              target: "_blank",
                              rel: "external nofollow",
                              className:
                                "flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm",
                              children: (0, t.jsxs)("span", {
                                className: "text-red-700 font-extrabold",
                                children: [
                                  "y",
                                  (0, t.jsx)("span", { children: "elp" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "flex justify-center mb-12",
                      children: (0, t.jsx)("div", {
                        className:
                          "relative w-32 h-32 opacity-80 hover:opacity-100 transition-opacity",
                        children: (0, t.jsx)(r.default, {
                          src: "/assets/logos/Logo rund beige.svg",
                          alt: "Made with Love in Wetzlar",
                          fill: !0,
                          className:
                            "object-contain animate-spin [animation-duration:12s]",
                        }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-brown",
                      children: [
                        (0, t.jsxs)("p", {
                          children: [
                            "© ",
                            new Date().getFullYear(),
                            " Hey Fede! Dessertbar & Café",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex gap-6",
                          children: [
                            (0, t.jsx)(i.TransitionLink, {
                              href: "/legal#impressum",
                              className:
                                "hover:text-terracotta transition-colors",
                              children: "Impressum",
                            }),
                            (0, t.jsx)(i.TransitionLink, {
                              href: "/legal#datenschutz",
                              className:
                                "hover:text-terracotta transition-colors",
                              children: "Datenschutz",
                            }),
                            (0, t.jsx)(i.TransitionLink, {
                              href: "/legal#agb",
                              className:
                                "hover:text-terracotta transition-colors",
                              children: "AGB",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
      ],
      58234,
    );
  },
  235171,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(798688),
      r = e.i(88653),
      i = e.i(846932),
      n = e.i(772328),
      l = e.i(263676),
      o = e.i(935829);
    e.i(146492);
    var c = e.i(763159),
      d = e.i(59745),
      x = e.i(974336);
    let m = () => {
      let { closeCart: e } = (0, a.useStore)();
      return (0, t.jsxs)(i.motion.div, {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className:
          "h-full flex flex-col items-center justify-center text-center px-4",
        children: [
          (0, t.jsx)("div", {
            className: "w-48 h-48 mb-8 relative",
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 100 100",
              className: "w-full h-full text-[#eedfcc] fill-current",
              children: [
                (0, t.jsx)("path", {
                  d: "M25,40 L75,40 L65,85 L35,85 Z",
                  opacity: "0.5",
                }),
                (0, t.jsx)("path", {
                  d: "M35,40 C35,20 65,20 65,40",
                  stroke: "currentColor",
                  strokeWidth: "4",
                  fill: "none",
                  opacity: "0.8",
                }),
                (0, t.jsx)("circle", {
                  cx: "40",
                  cy: "60",
                  r: "4",
                  className: "text-[#CC624C] fill-current",
                }),
                (0, t.jsx)("circle", {
                  cx: "60",
                  cy: "60",
                  r: "4",
                  className: "text-[#CC624C] fill-current",
                }),
                (0, t.jsx)("path", {
                  d: "M45,70 Q50,75 55,70",
                  stroke: "#CC624C",
                  strokeWidth: "3",
                  fill: "none",
                  strokeLinecap: "round",
                }),
              ],
            }),
          }),
          (0, t.jsx)("h3", {
            className: "font-calistoga text-3xl text-[#2d1f19] mb-3",
            children: "Gähnende Leere!",
          }),
          (0, t.jsx)("p", {
            className:
              "font-nunito text-[#7a5a52] leading-relaxed mb-8 max-w-[250px]",
            children:
              "Dein Warenkorb ist noch hungrig. Zeit für ein paar süße Waffeln!",
          }),
          (0, t.jsx)(x.TransitionLink, {
            href: "/menu",
            onClick: e,
            className:
              "bg-[#CC624C] text-[#f5efe8] px-8 py-4 rounded-full font-bold text-lg shadow-clay hover:bg-[#a84936] transition-colors",
            children: "Jetzt bestellen",
          }),
        ],
      });
    };
    var h = e.i(840535);
    e.s(
      [
        "CartDrawer",
        0,
        function () {
          let {
              cart: e,
              isCartOpen: p,
              closeCart: f,
              updateQuantity: u,
              removeFromCart: b,
            } = (0, a.useStore)(),
            g = (0, n.useReducedMotion)(),
            j = e.reduce((e, t) => e + t.price * t.quantity, 0);
          return (
            (0, s.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && p && f();
              };
              return (
                window.addEventListener("keydown", e),
                () => window.removeEventListener("keydown", e)
              );
            }, [p, f]),
            (0, t.jsx)(r.AnimatePresence, {
              children:
                p &&
                (0, t.jsx)(h.default, {
                  focusTrapOptions: { initialFocus: !1 },
                  children: (0, t.jsxs)("div", {
                    className: "cart-drawer-wrapper",
                    children: [
                      (0, t.jsx)(i.motion.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        onClick: f,
                        className:
                          "fixed inset-0 bg-charcoal/40 backdrop-blur-md z-[1000]",
                      }),
                      (0, t.jsxs)(i.motion.div, {
                        initial: g ? { x: "100%" } : { x: "100%", skewX: -5 },
                        animate: g ? { x: 0 } : { x: 0, skewX: 0 },
                        exit: g ? { x: "100%" } : { x: "100%", skewX: 5 },
                        transition: {
                          type: "spring",
                          damping: 25,
                          stiffness: 200,
                        },
                        className:
                          "fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-[1001] shadow-2xl flex flex-col",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Warenkorb",
                        tabIndex: -1,
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "px-6 py-5 flex items-center justify-between border-b border-sand",
                            children: [
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("h2", {
                                    className:
                                      "font-calistoga text-2xl text-charcoal",
                                    children: "Warenkorb",
                                  }),
                                  (0, t.jsxs)("p", {
                                    className:
                                      "font-bold text-sm text-brown mt-1",
                                    children: [e.length, " Artikel"],
                                  }),
                                ],
                              }),
                              (0, t.jsx)("button", {
                                onClick: f,
                                className:
                                  "w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-cream transition-colors",
                                "aria-label": "Warenkorb schließen",
                                children: (0, t.jsx)(l.X, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "flex-1 overflow-y-auto overflow-x-hidden p-6 overscroll-contain",
                            children:
                              0 === e.length
                                ? (0, t.jsx)(m, {})
                                : (0, t.jsx)("div", {
                                    className: "flex flex-col gap-4",
                                    children: (0, t.jsx)(r.AnimatePresence, {
                                      initial: !1,
                                      children: e.map((e, s) =>
                                        (0, t.jsx)(
                                          i.motion.div,
                                          {
                                            initial: g
                                              ? { opacity: 0 }
                                              : { opacity: 0, x: 50 },
                                            animate: g
                                              ? { opacity: 1 }
                                              : { opacity: 1, x: 0 },
                                            exit: {
                                              opacity: 0,
                                              scale: 0.8,
                                              transition: { duration: 0.2 },
                                            },
                                            transition: {
                                              type: "spring",
                                              damping: 25,
                                              stiffness: 300,
                                              delay: 0.05 * s,
                                            },
                                            className: "relative",
                                            drag: "x",
                                            dragConstraints: {
                                              left: 0,
                                              right: 0,
                                            },
                                            dragElastic: 0.8,
                                            onDragEnd: (t, s) => {
                                              (s.offset.x > 100 ||
                                                s.offset.x < -100) &&
                                                b(e.id);
                                            },
                                            children: (0, t.jsx)("div", {
                                              className:
                                                "bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm border border-sand",
                                              children: (0, t.jsxs)("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "font-bold text-base text-charcoal mb-1 truncate",
                                                    children: e.name,
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className:
                                                      "text-sm text-terracotta font-bold mb-3",
                                                    children: [
                                                      (e.price * e.quantity)
                                                        .toFixed(2)
                                                        .replace(".", ","),
                                                      " ",
                                                      "€",
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-3",
                                                    children: [
                                                      (0, t.jsx)("button", {
                                                        onClick: () =>
                                                          u(
                                                            e.id,
                                                            e.quantity - 1,
                                                          ),
                                                        className:
                                                          "w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-cream transition-colors",
                                                        "aria-label":
                                                          "Menge verringern",
                                                        children: (0, t.jsx)(
                                                          o.Minus,
                                                          {
                                                            size: 16,
                                                            strokeWidth: 2.5,
                                                          },
                                                        ),
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        className:
                                                          "w-4 text-center font-bold text-charcoal",
                                                        children: [
                                                          (0, t.jsx)("span", {
                                                            className:
                                                              "sr-only",
                                                            children: "Menge: ",
                                                          }),
                                                          e.quantity,
                                                        ],
                                                      }),
                                                      (0, t.jsx)(
                                                        d.IconCirclePlus,
                                                        {
                                                          "aria-label":
                                                            "Menge erhöhen",
                                                          onClick: () =>
                                                            u(
                                                              e.id,
                                                              e.quantity + 1,
                                                            ),
                                                          className: "w-8 h-8",
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                  }),
                          }),
                          e.length > 0 &&
                            (0, t.jsxs)("div", {
                              className:
                                "p-6 bg-cream border-t border-sand shadow-[0_-10px_20px_rgba(0,0,0,0.03)] relative z-10",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex justify-between items-end mb-6",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "font-bold text-brown",
                                      children: "Gesamt",
                                    }),
                                    (0, t.jsxs)("span", {
                                      className:
                                        "font-calistoga text-3xl text-terracotta leading-none",
                                      children: [
                                        j.toFixed(2).replace(".", ","),
                                        " €",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(x.TransitionLink, {
                                  href: "/checkout",
                                  onClick: f,
                                  className: "block w-full",
                                  children: (0, t.jsx)(c.PrimaryCTA, {
                                    className:
                                      "w-full justify-center text-lg py-4",
                                    showArrow: !0,
                                    children: "Weiter zur Kasse",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
            })
          );
        },
      ],
      235171,
    );
  },
  33136,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(846932),
      r = e.i(88653);
    let i = "M 0 0 L 100 0 Q 50 0 0 0 Z",
      n = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z";
    e.s([
      "SplashScreen",
      0,
      function () {
        let [e, l] = (0, s.useState)(!1),
          [o, c] = (0, s.useState)(!1);
        return ((0, s.useEffect)(() => {
          if ((c(!0), sessionStorage.getItem("splash_shown")))
            window.dispatchEvent(new CustomEvent("splash:done"));
          else {
            (l(!0), sessionStorage.setItem("splash_shown", "true"));
            let e = setTimeout(() => {
              (l(!1), window.dispatchEvent(new CustomEvent("splash:done")));
            }, 3e3);
            return () => clearTimeout(e);
          }
        }, []),
        o)
          ? (0, t.jsx)(r.AnimatePresence, {
              children:
                e &&
                (0, t.jsxs)(
                  a.motion.div,
                  {
                    initial: { opacity: 1 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: { duration: 0.3 } },
                    style: {
                      position: "fixed",
                      inset: 0,
                      zIndex: 99999,
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: [
                      (0, t.jsxs)(a.motion.div, {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.9 },
                        transition: {
                          duration: 0.6,
                          delay: 0.4,
                          ease: [0.76, 0, 0.24, 1],
                        },
                        style: {
                          position: "absolute",
                          zIndex: 10,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        },
                        children: [
                          (0, t.jsx)("h1", {
                            style: {
                              fontFamily: "var(--font-calistoga), serif",
                              fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                              color: "#fffdd0",
                              margin: 0,
                            },
                            children: "Hey Fede!",
                          }),
                          (0, t.jsx)("p", {
                            style: {
                              fontFamily: "var(--font-nunito), sans-serif",
                              color: "#fffdd0",
                              fontWeight: 700,
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              fontSize: "0.85rem",
                              marginTop: 8,
                            },
                            children: "Dessertbar & Café",
                          }),
                        ],
                      }),
                      (0, t.jsx)("svg", {
                        viewBox: "0 0 100 100",
                        preserveAspectRatio: "none",
                        style: {
                          width: "100%",
                          height: "100%",
                          display: "block",
                          filter:
                            "drop-shadow(0 20px 30px rgba(204,98,76,0.3))",
                        },
                        children: (0, t.jsx)(a.motion.path, {
                          fill: "#CC624C",
                          initial: { d: i },
                          animate: {
                            d: [
                              i,
                              "M 0 0 L 100 0 L 100 100 Q 50 150 0 100 Z",
                              n,
                              n,
                              "M 0 0 L 100 0 L 100 0 Q 50 50 0 0 Z",
                              "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z",
                            ],
                          },
                          transition: {
                            duration: 2,
                            times: [0, 0.2, 0.4, 0.7, 0.9, 1],
                            ease: [0.76, 0, 0.24, 1],
                          },
                          onAnimationComplete: () => {
                            (l(!1),
                              window.dispatchEvent(
                                new CustomEvent("splash:done"),
                              ));
                          },
                        }),
                      }),
                    ],
                  },
                  "splash",
                ),
            })
          : null;
      },
    ]);
  },
  688398,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(846932),
      r = e.i(88653),
      i = e.i(772328),
      n = e.i(783872);
    e.s([
      "TransitionCurtain",
      0,
      function () {
        let { isBusy: e } = (0, n.useTransition)(),
          l = (0, i.useReducedMotion)(),
          [o, c] = (0, s.useState)(!1),
          [d, x] = (0, s.useState)("top");
        return ((0, s.useEffect)(() => {
          if (!l)
            if (e) (x("top"), c(!0));
            else {
              x("bottom");
              let e = setTimeout(() => c(!1), 800);
              return () => clearTimeout(e);
            }
        }, [e, l]),
        (0, s.useEffect)(() => {
          let e = () => {
            l ||
              (n.useTransition.setState({ isBusy: !0 }),
              setTimeout(() => n.useTransition.setState({ isBusy: !1 }), 800));
          };
          return (
            window.addEventListener("popstate", e),
            () => window.removeEventListener("popstate", e)
          );
        }, [l]),
        l)
          ? null
          : (0, t.jsx)(r.AnimatePresence, {
              children:
                o &&
                (0, t.jsx)(a.motion.div, {
                  initial: { scaleY: +!e },
                  animate: { scaleY: +!!e },
                  exit: { scaleY: 0 },
                  transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
                  className:
                    "fixed inset-0 z-[9999] bg-terracotta pointer-events-none",
                  style: { transformOrigin: d },
                  children:
                    "top" === d &&
                    e &&
                    (0, t.jsx)(a.motion.svg, {
                      initial: { y: 0 },
                      animate: { y: [0, 20, 0] },
                      transition: {
                        repeat: 1 / 0,
                        duration: 2,
                        ease: "easeInOut",
                      },
                      className:
                        "absolute top-full left-0 w-full h-16 text-terracotta fill-current",
                      viewBox: "0 0 1000 100",
                      preserveAspectRatio: "none",
                      children: (0, t.jsx)("path", {
                        d: "M0,0 L1000,0 L1000,20 Q950,80 900,20 T800,20 T700,20 T600,20 T500,20 T400,20 T300,20 T200,20 T100,20 T0,20 Z",
                      }),
                    }),
                }),
            });
      },
    ]);
  },
  392538,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645);
    let a = (0, e.i(770703).default)(() => e.A(379140), {
      loadableGenerated: { modules: [330500] },
      ssr: !1,
    });
    e.s([
      "PhysicsPlaygroundContainer",
      0,
      function () {
        let [e, r] = (0, s.useState)(!1);
        return ((0, s.useEffect)(() => {
          let e,
            t = (t) => {
              "sweet-tooth" === t.detail &&
                (r(!0),
                e && clearTimeout(e),
                (e = setTimeout(() => {
                  r(!1);
                }, 6e4)));
            };
          return (
            window.addEventListener("achievementUnlocked", t),
            () => {
              (window.removeEventListener("achievementUnlocked", t),
                e && clearTimeout(e));
            }
          );
        }, []),
        e)
          ? (0, t.jsx)(a, {})
          : null;
      },
    ]);
  },
  687313,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(846932),
      r = e.i(310542),
      i = e.i(895420),
      n = e.i(591994),
      l = e.i(772328);
    e.s([
      "ScrollLavaBackground",
      0,
      function () {
        let e = (0, s.useRef)(null),
          o = (0, l.useReducedMotion)(),
          { scrollYProgress: c } = (0, r.useScroll)({
            target: e,
            offset: ["start start", "end end"],
          }),
          d = (0, n.useSpring)(c, {
            stiffness: 40,
            damping: 20,
            restDelta: 0.001,
          }),
          x = (0, i.useTransform)(d, [0, 1], ["0%", "200%"]),
          m = (0, i.useTransform)(d, [0, 0.5, 1], ["0%", "50%", "-20%"]),
          h = (0, i.useTransform)(d, [0, 0.5, 1], [1, 1.5, 0.8]),
          p = (0, i.useTransform)(d, [0, 1], [0, 180]),
          f = (0, i.useTransform)(d, [0, 1], ["100%", "400%"]),
          u = (0, i.useTransform)(d, [0, 0.5, 1], ["-20%", "-60%", "10%"]),
          b = (0, i.useTransform)(d, [0, 0.5, 1], [1.2, 0.9, 1.6]),
          g = (0, i.useTransform)(d, [0, 1], [0, -120]),
          j = (0, i.useTransform)(d, [0, 1], ["-50%", "300%"]),
          v = (0, i.useTransform)(d, [0, 0.5, 1], ["20%", "-30%", "60%"]),
          w = (0, i.useTransform)(d, [0, 1], [45, -45]);
        return o
          ? (0, t.jsxs)("div", {
              className: "fixed inset-0 pointer-events-none -z-10 opacity-30",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#E4C0A8] rounded-full blur-3xl opacity-40",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] bg-[#CC624C] rounded-full blur-3xl opacity-20",
                }),
              ],
            })
          : (0, t.jsxs)("div", {
              ref: e,
              className:
                "fixed inset-0 pointer-events-none -z-10 overflow-hidden",
              children: [
                (0, t.jsx)("div", {
                  className: "absolute inset-0 opacity-[0.22] dot-bg",
                }),
                (0, t.jsx)(a.motion.div, {
                  style: {
                    y: x,
                    x: m,
                    scale: h,
                    rotate: p,
                    borderRadius: "58% 42% 52% 48%/48% 58% 42% 52%",
                  },
                  className:
                    "absolute -top-[10%] -right-[10%] w-[60vw] max-w-[800px] aspect-square bg-[#CC624C] opacity-20 mix-blend-multiply blur-[8px]",
                }),
                (0, t.jsx)(a.motion.div, {
                  style: {
                    y: f,
                    x: u,
                    scale: b,
                    rotate: g,
                    borderRadius: "45% 55% 40% 60%/55% 45% 60% 40%",
                  },
                  className:
                    "absolute top-[20%] -left-[20%] w-[70vw] max-w-[900px] aspect-square bg-[#E4C0A8] opacity-40 mix-blend-multiply blur-[12px]",
                }),
                (0, t.jsx)(a.motion.div, {
                  style: {
                    y: j,
                    x: v,
                    rotate: w,
                    borderRadius: "60% 40% 55% 45%/45% 55% 40% 60%",
                  },
                  className:
                    "absolute top-[40%] right-[20%] w-[40vw] max-w-[600px] aspect-square bg-[#9a7060] opacity-10 mix-blend-multiply blur-[20px]",
                }),
              ],
            });
      },
    ]);
  },
]);
