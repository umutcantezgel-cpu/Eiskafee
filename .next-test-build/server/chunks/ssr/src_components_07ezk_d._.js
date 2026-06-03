module.exports = [
  737577,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(346271),
      d = a.i(995180),
      e = a.i(566535);
    a.s([
      "ScrollProgressBar",
      0,
      function () {
        let { scrollYProgress: a } = (0, d.useScroll)(),
          f = (0, e.useSpring)(a, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          });
        return (0, b.jsx)(c.motion.div, {
          className:
            "fixed top-0 left-0 right-0 h-[3px] bg-terracotta origin-left z-50 rounded-r-full",
          style: { scaleX: f },
          "aria-hidden": "true",
        });
      },
    ]);
  },
  43218,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(50944),
      e = a.i(346271),
      f = a.i(995180),
      g = a.i(901299),
      h = a.i(621216),
      i = a.i(344451),
      j = a.i(863145),
      k = a.i(635187),
      l = a.i(923699),
      m = a.i(371947);
    a.i(985950);
    var n = a.i(162464),
      o = a.i(762492),
      p = a.i(677874),
      q = a.i(262036),
      r = a.i(141146),
      s = a.i(307759);
    function t({ isOpen: a, onClose: c, pathname: d }) {
      let f = (0, h.useReducedMotion)();
      return (0, b.jsx)(q.AnimatePresence, {
        children:
          a &&
          (0, b.jsxs)(e.motion.div, {
            initial: f ? { opacity: 0 } : { opacity: 0, y: -20 },
            animate: f ? { opacity: 1 } : { opacity: 1, y: 0 },
            exit: f ? { opacity: 0 } : { opacity: 0, y: -20 },
            transition: { type: "spring", stiffness: 300, damping: 25 },
            className:
              "fixed top-[88px] left-0 right-0 bottom-0 z-[890] bg-cream p-6 flex flex-col gap-3 overflow-hidden",
            children: [
              (0, b.jsx)(s.FloatingBlob, {
                variant: "organic2",
                color: "peach",
                opacity: 0.3,
                size: 400,
                className: "-top-20 -right-20",
              }),
              (0, b.jsx)("nav", {
                "aria-label": "Mobile Navigation",
                className: "relative z-10 flex flex-col gap-3 mt-4",
                children: [
                  { id: "menu", href: "/menu", label: "Speisekarte" },
                  { id: "about", href: "/about", label: "Über Uns" },
                  { id: "visit", href: "/visit", label: "Besuchen & Liefern" },
                ].map(({ id: a, href: e, label: f }) => {
                  let g = d === e;
                  return (0, b.jsxs)(
                    m.TransitionLink,
                    {
                      href: e,
                      onClick: c,
                      className: `
                    w-full flex items-center justify-between p-5 rounded-2xl
                    font-calistoga text-2xl transition-colors duration-200
                    ${g ? "bg-sand text-terracotta" : "bg-transparent text-charcoal hover:bg-sand/50"}
                  `,
                      children: [
                        (0, b.jsx)("span", { children: f }),
                        (0, b.jsx)(r.ChevronRight, {
                          className: `w-6 h-6 ${g ? "text-terracotta" : "text-brown"}`,
                        }),
                      ],
                    },
                    a,
                  );
                }),
              }),
              (0, b.jsxs)("div", {
                className:
                  "relative z-10 mt-auto bg-sand rounded-2xl p-5 mb-4 border border-peach/50",
                children: [
                  (0, b.jsx)("p", {
                    className: "font-bold text-sm text-charcoal mb-1",
                    children: "Mi – Sa 12:00–19:00 · So 13:00–19:00",
                  }),
                  (0, b.jsx)("p", {
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
    var u = a.i(474614);
    function v({ text: a, className: c }) {
      let d = (0, h.useReducedMotion)();
      return (0, b.jsx)("div", {
        className: (0, u.twMerge)(
          "w-full bg-peach text-terracotta overflow-hidden py-1.5 flex whitespace-nowrap",
          c,
        ),
        children: (0, b.jsxs)(e.motion.div, {
          initial: d ? { x: 0 } : { x: "100%" },
          animate: d ? { x: 0 } : { x: "-100%" },
          transition: d
            ? void 0
            : { repeat: 1 / 0, ease: "linear", duration: 15 },
          className:
            "font-bold text-sm tracking-widest uppercase px-4 flex-shrink-0",
          children: [
            a,
            " ",
            (0, b.jsx)("span", { className: "mx-8", children: "•" }),
            " ",
            a,
            " ",
            (0, b.jsx)("span", { className: "mx-8", children: "•" }),
            " ",
            a,
          ],
        }),
      });
    }
    var w = a.i(737577);
    a.s(
      [
        "Header",
        0,
        function () {
          let [a, q] = (0, c.useState)(!1),
            r = (0, d.usePathname)(),
            { cart: s, toggleCart: x } = (0, o.useStore)(),
            { settings: y } = (0, p.useStoreSettings)(),
            z = (0, h.useReducedMotion)(),
            { scrollY: A } = (0, f.useScroll)(),
            B = (0, g.useTransform)(A, [0, 80], [0, 0.9]),
            C = (0, g.useTransform)(A, [0, 80], [0, 12]),
            D = (0, g.useTransform)(A, [0, 80], [0, 0.1]),
            E = (0, g.useTransform)(A, [0, 80], [0, 1]),
            F = (0, g.useTransform)(B, (a) => `rgba(255,245,238, ${a})`),
            G = (0, g.useTransform)(C, (a) => `blur(${a}px)`),
            H = (0, g.useTransform)(
              E,
              (a) => `1px solid rgba(238,223,204, ${a})`,
            ),
            I = (0, g.useTransform)(
              D,
              (a) => `0 4px 20px rgba(45,31,25, ${a})`,
            );
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(w.ScrollProgressBar, {}),
              (0, b.jsxs)("div", {
                className: "fixed top-0 left-0 right-0 z-[900] flex flex-col",
                children: [
                  y?.bannerText && (0, b.jsx)(v, { text: y.bannerText }),
                  (0, b.jsx)(e.motion.header, {
                    style: z
                      ? {
                          backgroundColor: "rgba(255,245,238, 0.95)",
                          backdropFilter: "blur(12px)",
                          borderBottom: "1px solid var(--color-sand)",
                          boxShadow: "0 4px 20px rgba(45,31,25, 0.08)",
                        }
                      : {
                          backgroundColor: F,
                          backdropFilter: G,
                          borderBottom: H,
                          boxShadow: I,
                        },
                    className: "w-full transition-all duration-200",
                    children: (0, b.jsxs)("div", {
                      className:
                        "max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between gap-4",
                      children: [
                        (0, b.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, b.jsx)(m.TransitionLink, {
                            href: "/",
                            "aria-label": "Hey Fedee! Startseite",
                            className: "block",
                            children: (0, b.jsx)(k.Logo, {
                              variant: "orange",
                              className: "w-[60px]",
                            }),
                          }),
                        }),
                        (0, b.jsx)("nav", {
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
                          ].map(({ id: a, href: c, label: d }) => {
                            let e = r === c;
                            return (0, b.jsx)(
                              m.TransitionLink,
                              {
                                href: c,
                                className: (0, u.twMerge)(
                                  "px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200",
                                  e
                                    ? "bg-sand text-terracotta"
                                    : "text-charcoal hover:bg-sand/50",
                                ),
                                children: d,
                              },
                              a,
                            );
                          }),
                        }),
                        (0, b.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, b.jsx)("div", {
                              className: "hidden md:block",
                              children: (0, b.jsx)(m.TransitionLink, {
                                href: "/menu",
                                tabIndex: -1,
                                children: (0, b.jsx)(n.PrimaryCTA, {
                                  className: "py-2.5 text-sm",
                                  showArrow: !0,
                                  children: "Jetzt bestellen",
                                }),
                              }),
                            }),
                            (0, b.jsx)(m.TransitionLink, {
                              href: "/auth",
                              "aria-label": "Profil",
                              children: (0, b.jsx)("div", {
                                className:
                                  "w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer",
                                children: (0, b.jsx)(i.User, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                }),
                              }),
                            }),
                            (0, b.jsxs)("button", {
                              onClick: x,
                              className:
                                "relative w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer",
                              "aria-label": "Warenkorb",
                              children: [
                                (0, b.jsx)(j.ShoppingBag, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                }),
                                s.length > 0 &&
                                  (0, b.jsx)("span", {
                                    className:
                                      "absolute -top-1.5 -right-1.5 w-[22px] h-[22px] bg-terracotta text-cream text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-cream",
                                    children: s.length,
                                  }),
                              ],
                            }),
                            (0, b.jsx)("button", {
                              className:
                                "md:hidden w-11 h-11 flex items-center justify-center bg-transparent border-none text-charcoal",
                              onClick: () => q(!a),
                              "aria-label": "Menü öffnen",
                              children: (0, b.jsx)(l.HamburgerIcon, {
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
              (0, b.jsx)(t, { isOpen: a, onClose: () => q(!1), pathname: r }),
            ],
          });
        },
      ],
      43218,
    );
  },
  325250,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(910209),
      c = c,
      d = a.i(635187),
      e = a.i(571987),
      f = a.i(371947),
      g = a.i(989308),
      h = a.i(320514),
      i = a.i(324429),
      j = a.i(954098),
      k = a.i(866491),
      l = a.i(944597),
      c = c;
    function m({ variant: a = "footer", className: d = "" }) {
      let e = "footer" === a;
      return (0, b.jsxs)("div", {
        className: `nap-block ${d}`,
        itemScope: !0,
        itemType: "https://schema.org/Restaurant",
        children: [
          (0, b.jsx)("meta", { itemProp: "name", content: i.BUSINESS.name }),
          (0, b.jsx)("meta", {
            itemProp: "telephone",
            content: i.BUSINESS.phoneTel,
          }),
          (0, b.jsxs)("div", {
            itemProp: "geo",
            itemScope: !0,
            itemType: "https://schema.org/GeoCoordinates",
            className: "hidden",
            children: [
              (0, b.jsx)("meta", {
                itemProp: "latitude",
                content: i.BUSINESS.latitude.toString(),
              }),
              (0, b.jsx)("meta", {
                itemProp: "longitude",
                content: i.BUSINESS.longitude.toString(),
              }),
            ],
          }),
          (0, b.jsx)("div", {
            itemProp: "address",
            itemScope: !0,
            itemType: "https://schema.org/PostalAddress",
            className: e
              ? "text-[#5c3d35] font-nunito text-[0.95rem] leading-[1.8]"
              : "flex flex-col gap-2.5",
            children: e
              ? (0, b.jsxs)("div", {
                  className: "flex flex-col gap-3 mb-6",
                  children: [
                    (0, b.jsxs)("div", {
                      className: "flex items-start gap-3",
                      children: [
                        (0, b.jsx)(j.MapPin, {
                          className: "w-5 h-5 text-terracotta shrink-0 mt-0.5",
                        }),
                        (0, b.jsxs)("span", {
                          className: "font-bold text-sm text-charcoal",
                          children: [
                            (0, b.jsx)("span", {
                              itemProp: "streetAddress",
                              children: i.BUSINESS.street,
                            }),
                            (0, b.jsx)("br", {}),
                            (0, b.jsx)("span", {
                              itemProp: "postalCode",
                              children: i.BUSINESS.postalCode,
                            }),
                            " ",
                            (0, b.jsx)("span", {
                              itemProp: "addressLocality",
                              children: i.BUSINESS.city,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, b.jsx)(k.Phone, {
                          className: "w-5 h-5 text-terracotta shrink-0",
                        }),
                        (0, b.jsx)("a", {
                          href: `tel:${i.BUSINESS.phoneTel}`,
                          className:
                            "font-bold text-sm text-charcoal hover:text-terracotta transition-colors",
                          children: i.BUSINESS.phone,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, b.jsx)(j.MapPin, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "Adresse",
                            }),
                            (0, b.jsxs)("span", {
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19]",
                              children: [
                                (0, b.jsx)("span", {
                                  itemProp: "streetAddress",
                                  children: i.BUSINESS.street,
                                }),
                                ", ",
                                (0, b.jsx)("span", {
                                  itemProp: "postalCode",
                                  children: i.BUSINESS.postalCode,
                                }),
                                " ",
                                (0, b.jsx)("span", {
                                  itemProp: "addressLocality",
                                  children: i.BUSINESS.city,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, b.jsx)(k.Phone, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "Telefon",
                            }),
                            (0, b.jsx)("a", {
                              href: `tel:${i.BUSINESS.phoneTel}`,
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline",
                              children: i.BUSINESS.phone,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, b.jsx)(l.MessageCircle, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "WhatsApp",
                            }),
                            (0, b.jsx)("a", {
                              href: `https://wa.me/${i.BUSINESS.whatsapp}`,
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline",
                              children: i.BUSINESS.whatsappDisplay,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "bg-[#eedfcc] rounded-[15px] p-[13px_17px] flex gap-[13px] items-center",
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "w-[38px] h-[38px] bg-[#CC624C] rounded-full flex items-center justify-center shrink-0",
                          children: (0, b.jsx)(c.default, {
                            size: 16,
                            color: "#fefefe",
                            strokeWidth: 2,
                          }),
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("div", {
                              className:
                                "font-nunito font-black text-[0.74rem] text-[#9a7060] uppercase tracking-[0.8px] mb-[1px]",
                              children: "Instagram",
                            }),
                            (0, b.jsxs)("a", {
                              href: i.BUSINESS.instagramUrl,
                              className:
                                "font-nunito font-bold text-[0.88rem] text-[#2d1f19] no-underline",
                              children: ["@", i.BUSINESS.instagram],
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
    var n = a.i(13522);
    a.s(
      [
        "Footer",
        0,
        function () {
          return (
            new Date().getDay(),
            (0, b.jsxs)("footer", {
              className: "relative bg-sand pt-10",
              children: [
                (0, b.jsx)("div", {
                  className: "absolute top-0 left-0 w-full -translate-y-[99%]",
                  children: (0, b.jsx)(g.WaveDivider, {
                    variant: "long-curve",
                    className: "w-[150%] md:w-full h-auto text-sand",
                  }),
                }),
                (0, b.jsxs)("div", {
                  className: "max-w-7xl mx-auto px-6 pt-12 pb-8",
                  children: [
                    (0, b.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16",
                      children: [
                        (0, b.jsxs)("div", {
                          className: "flex flex-col items-start",
                          children: [
                            (0, b.jsx)(f.TransitionLink, {
                              href: "/",
                              "aria-label": "Startseite",
                              children: (0, b.jsx)(d.Logo, {
                                variant: "orange",
                                className: "w-20 mb-4",
                              }),
                            }),
                            (0, b.jsx)("p", {
                              className:
                                "font-calistoga text-xl text-charcoal mb-4",
                              children: "Dessertbar & Café",
                            }),
                            (0, b.jsx)(m, { variant: "footer" }),
                            (0, b.jsx)("div", {
                              className: "flex gap-3",
                              children: (0, b.jsxs)("a", {
                                href: i.BUSINESS.instagramUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "bg-terracotta text-cream px-4 py-2 rounded-full font-bold text-[13px] hover:bg-[#b05240] transition-colors flex items-center gap-2",
                                children: [
                                  (0, b.jsx)(c.default, {
                                    className: "w-4 h-4",
                                  }),
                                  " Instagram",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("h3", {
                              className:
                                "font-calistoga text-xl text-terracotta mb-6",
                              children: "Hey Fede!",
                            }),
                            (0, b.jsx)("nav", {
                              "aria-label": "Footer Navigation",
                              className: "flex flex-col gap-4 mb-8",
                              children: [
                                { href: "/", label: "Startseite" },
                                { href: "/menu", label: "Speisekarte" },
                                { href: "/about", label: "Über Uns" },
                                { href: "/visit", label: "Besuchen & Liefern" },
                              ].map((a) =>
                                (0, b.jsxs)(
                                  f.TransitionLink,
                                  {
                                    href: a.href,
                                    className:
                                      "font-bold text-charcoal w-fit hover:text-terracotta transition-colors relative group",
                                    children: [
                                      a.label,
                                      (0, b.jsx)("span", {
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
                                  a.href,
                                ),
                              ),
                            }),
                            (0, b.jsx)("h3", {
                              className:
                                "font-calistoga text-lg text-terracotta/80 mb-4",
                              children: "Entdecke Mehr",
                            }),
                            (0, b.jsx)("nav", {
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
                              ].map((a) =>
                                (0, b.jsx)(
                                  f.TransitionLink,
                                  {
                                    href: a.href,
                                    className:
                                      "text-sm font-nunito font-bold text-charcoal/80 w-fit hover:text-terracotta transition-colors",
                                    children: a.label,
                                  },
                                  a.href,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("h3", {
                              className:
                                "font-calistoga text-xl text-terracotta mb-6",
                              children: "Öffnungszeiten",
                            }),
                            (0, b.jsx)("div", {
                              className: "mb-4",
                              children: (0, b.jsx)(n.ClientHoursTable, {}),
                            }),
                            (0, b.jsx)("div", {
                              className:
                                "mt-6 p-4 bg-cream rounded-2xl border-2 border-peach text-xs font-bold text-terracotta text-center transform -rotate-2",
                              children: "✓ Keine Liefergebühr bei Lieferando",
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("h3", {
                              className:
                                "font-calistoga text-xl text-terracotta mb-6",
                              children: "Stay Sweet",
                            }),
                            (0, b.jsx)("p", {
                              className:
                                "text-sm font-bold text-charcoal/80 mb-4",
                              children:
                                "Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.",
                            }),
                            (0, b.jsx)(h.NewsletterInput, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-12 border-t border-peach/50 relative",
                      children: [
                        (0, b.jsx)("span", {
                          className:
                            "font-calistoga text-3xl md:text-5xl text-charcoal transform -rotate-3 hover:rotate-0 transition-transform",
                          children: "Frisch",
                        }),
                        (0, b.jsx)("span", {
                          className:
                            "text-terracotta font-calistoga text-2xl hidden md:block",
                          children: "·",
                        }),
                        (0, b.jsx)("span", {
                          className:
                            "font-calistoga text-3xl md:text-5xl text-charcoal transform rotate-2 hover:rotate-0 transition-transform",
                          children: "Selbstgemacht",
                        }),
                        (0, b.jsx)("span", {
                          className:
                            "text-terracotta font-calistoga text-2xl hidden md:block",
                          children: "·",
                        }),
                        (0, b.jsx)("span", {
                          className:
                            "font-calistoga text-3xl md:text-5xl text-terracotta transform -rotate-1 hover:rotate-0 transition-transform",
                          children: "Mit Liebe",
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "h-16 w-full rounded-full overflow-hidden relative mb-12 flex items-center justify-around opacity-60",
                      style: {
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, rgba(201, 80, 57, 0.15) 1px, transparent 0)",
                        backgroundSize: "16px 16px",
                      },
                      children: [
                        (0, b.jsx)("svg", {
                          className: "w-6 h-6 text-terracotta",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: (0, b.jsx)("path", {
                            d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                          }),
                        }),
                        (0, b.jsx)("svg", {
                          className: "w-6 h-6 text-peach",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: (0, b.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                          }),
                        }),
                        (0, b.jsx)("svg", {
                          className: "w-6 h-6 text-brown",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: (0, b.jsx)("path", {
                            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
                          }),
                        }),
                        (0, b.jsx)("svg", {
                          className: "w-6 h-6 text-terracotta",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: (0, b.jsx)("path", {
                            d: "M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z",
                          }),
                        }),
                        (0, b.jsx)("svg", {
                          className: "w-6 h-6 text-charcoal",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: (0, b.jsx)("path", {
                            d: "M12 2L15 8l6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z",
                          }),
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "mb-12 text-center",
                      itemScope: !0,
                      itemType: "https://schema.org/Place",
                      children: [
                        (0, b.jsx)("h3", {
                          className:
                            "font-calistoga text-xl text-terracotta mb-4",
                          children: "Wir sind hier zuhause",
                        }),
                        (0, b.jsxs)("p", {
                          className:
                            "text-sm font-nunito font-bold text-charcoal/70 flex flex-wrap justify-center items-center gap-2",
                          children: [
                            (0, b.jsxs)("span", {
                              itemProp: "containedInPlace",
                              itemScope: !0,
                              itemType: "https://schema.org/AdministrativeArea",
                              children: [
                                (0, b.jsx)("span", {
                                  itemProp: "name",
                                  className: "text-charcoal",
                                  children: "Hessen",
                                }),
                                (0, b.jsx)("link", {
                                  itemProp: "sameAs",
                                  href: "https://www.wikidata.org/wiki/Q1199",
                                }),
                              ],
                            }),
                            (0, b.jsx)("span", {
                              className: "text-peach",
                              children: "›",
                            }),
                            (0, b.jsxs)("span", {
                              itemProp: "containedInPlace",
                              itemScope: !0,
                              itemType: "https://schema.org/AdministrativeArea",
                              children: [
                                (0, b.jsx)("span", {
                                  itemProp: "name",
                                  className: "text-charcoal",
                                  children: "Lahn-Dill-Kreis",
                                }),
                                (0, b.jsx)("link", {
                                  itemProp: "sameAs",
                                  href: "https://www.wikidata.org/wiki/Q7059",
                                }),
                              ],
                            }),
                            (0, b.jsx)("span", {
                              className: "text-peach",
                              children: "›",
                            }),
                            (0, b.jsxs)("span", {
                              itemProp: "containedInPlace",
                              itemScope: !0,
                              itemType: "https://schema.org/City",
                              children: [
                                (0, b.jsx)("span", {
                                  itemProp: "name",
                                  className: "text-charcoal",
                                  children: "Wetzlar",
                                }),
                                (0, b.jsx)("link", {
                                  itemProp: "sameAs",
                                  href: "https://www.wikidata.org/wiki/Q3950",
                                }),
                              ],
                            }),
                            (0, b.jsx)("span", {
                              className: "text-peach",
                              children: "›",
                            }),
                            (0, b.jsx)("span", {
                              itemProp: "address",
                              itemScope: !0,
                              itemType: "https://schema.org/PostalAddress",
                              children: (0, b.jsx)("span", {
                                itemProp: "streetAddress",
                                className: "text-charcoal",
                                children: "Langgasse",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "flex flex-col items-center mb-12",
                      children: [
                        (0, b.jsx)("h3", {
                          className:
                            "font-calistoga text-lg text-charcoal/80 mb-4",
                          children: "Besuche uns auch auf",
                        }),
                        (0, b.jsxs)("div", {
                          className: "flex flex-wrap justify-center gap-4",
                          children: [
                            (0, b.jsxs)("a", {
                              href: i.BUSINESS.googleMapsUrl,
                              target: "_blank",
                              rel: "external nofollow",
                              className:
                                "flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm",
                              children: [
                                (0, b.jsx)("span", {
                                  className: "text-[#4285F4] font-extrabold",
                                  children: "G",
                                }),
                                " Google",
                              ],
                            }),
                            (0, b.jsxs)("a", {
                              href: "https://www.tripadvisor.de/HeyFede-Wetzlar",
                              target: "_blank",
                              rel: "external nofollow",
                              className:
                                "flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm",
                              children: [
                                (0, b.jsx)("span", {
                                  className:
                                    "text-[#34E0A1] text-[16px] leading-none",
                                  children: "●",
                                }),
                                " ",
                                "TripAdvisor",
                              ],
                            }),
                            (0, b.jsx)("a", {
                              href: "https://www.yelp.de/biz/hey-fede-wetzlar",
                              target: "_blank",
                              rel: "external nofollow",
                              className:
                                "flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm",
                              children: (0, b.jsxs)("span", {
                                className: "text-red-700 font-extrabold",
                                children: [
                                  "y",
                                  (0, b.jsx)("span", { children: "elp" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsx)("div", {
                      className: "flex justify-center mb-12",
                      children: (0, b.jsx)("div", {
                        className:
                          "relative w-32 h-32 opacity-80 hover:opacity-100 transition-opacity",
                        children: (0, b.jsx)(e.default, {
                          src: "/assets/logos/Logo rund beige.svg",
                          alt: "Made with Love in Wetzlar",
                          fill: !0,
                          className:
                            "object-contain animate-spin [animation-duration:12s]",
                        }),
                      }),
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-brown",
                      children: [
                        (0, b.jsxs)("p", {
                          children: [
                            "© ",
                            new Date().getFullYear(),
                            " Hey Fede! Dessertbar & Café",
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          className: "flex gap-6",
                          children: [
                            (0, b.jsx)(f.TransitionLink, {
                              href: "/legal#impressum",
                              className:
                                "hover:text-terracotta transition-colors",
                              children: "Impressum",
                            }),
                            (0, b.jsx)(f.TransitionLink, {
                              href: "/legal#datenschutz",
                              className:
                                "hover:text-terracotta transition-colors",
                              children: "Datenschutz",
                            }),
                            (0, b.jsx)(f.TransitionLink, {
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
      325250,
    );
  },
  735491,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(762492),
      e = a.i(262036),
      f = a.i(346271),
      g = a.i(621216),
      h = a.i(474215),
      i = a.i(769544);
    a.i(985950);
    var j = a.i(162464),
      k = a.i(832960),
      l = a.i(371947);
    let m = () => {
      let { closeCart: a } = (0, d.useStore)();
      return (0, b.jsxs)(f.motion.div, {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className:
          "h-full flex flex-col items-center justify-center text-center px-4",
        children: [
          (0, b.jsx)("div", {
            className: "w-48 h-48 mb-8 relative",
            children: (0, b.jsxs)("svg", {
              viewBox: "0 0 100 100",
              className: "w-full h-full text-[#eedfcc] fill-current",
              children: [
                (0, b.jsx)("path", {
                  d: "M25,40 L75,40 L65,85 L35,85 Z",
                  opacity: "0.5",
                }),
                (0, b.jsx)("path", {
                  d: "M35,40 C35,20 65,20 65,40",
                  stroke: "currentColor",
                  strokeWidth: "4",
                  fill: "none",
                  opacity: "0.8",
                }),
                (0, b.jsx)("circle", {
                  cx: "40",
                  cy: "60",
                  r: "4",
                  className: "text-[#CC624C] fill-current",
                }),
                (0, b.jsx)("circle", {
                  cx: "60",
                  cy: "60",
                  r: "4",
                  className: "text-[#CC624C] fill-current",
                }),
                (0, b.jsx)("path", {
                  d: "M45,70 Q50,75 55,70",
                  stroke: "#CC624C",
                  strokeWidth: "3",
                  fill: "none",
                  strokeLinecap: "round",
                }),
              ],
            }),
          }),
          (0, b.jsx)("h3", {
            className: "font-calistoga text-3xl text-[#2d1f19] mb-3",
            children: "Gähnende Leere!",
          }),
          (0, b.jsx)("p", {
            className:
              "font-nunito text-[#7a5a52] leading-relaxed mb-8 max-w-[250px]",
            children:
              "Dein Warenkorb ist noch hungrig. Zeit für ein paar süße Waffeln!",
          }),
          (0, b.jsx)(l.TransitionLink, {
            href: "/menu",
            onClick: a,
            className:
              "bg-[#CC624C] text-[#f5efe8] px-8 py-4 rounded-full font-bold text-lg shadow-clay hover:bg-[#a84936] transition-colors",
            children: "Jetzt bestellen",
          }),
        ],
      });
    };
    var n = a.i(720083);
    a.s(
      [
        "CartDrawer",
        0,
        function () {
          let {
              cart: a,
              isCartOpen: o,
              closeCart: p,
              updateQuantity: q,
              removeFromCart: r,
            } = (0, d.useStore)(),
            s = (0, g.useReducedMotion)(),
            t = a.reduce((a, b) => a + b.price * b.quantity, 0);
          return (
            (0, c.useEffect)(() => {
              let a = (a) => {
                "Escape" === a.key && o && p();
              };
              return (
                window.addEventListener("keydown", a),
                () => window.removeEventListener("keydown", a)
              );
            }, [o, p]),
            (0, b.jsx)(e.AnimatePresence, {
              children:
                o &&
                (0, b.jsx)(n.default, {
                  focusTrapOptions: { initialFocus: !1 },
                  children: (0, b.jsxs)("div", {
                    className: "cart-drawer-wrapper",
                    children: [
                      (0, b.jsx)(f.motion.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        onClick: p,
                        className:
                          "fixed inset-0 bg-charcoal/40 backdrop-blur-md z-[1000]",
                      }),
                      (0, b.jsxs)(f.motion.div, {
                        initial: s ? { x: "100%" } : { x: "100%", skewX: -5 },
                        animate: s ? { x: 0 } : { x: 0, skewX: 0 },
                        exit: s ? { x: "100%" } : { x: "100%", skewX: 5 },
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
                          (0, b.jsxs)("div", {
                            className:
                              "px-6 py-5 flex items-center justify-between border-b border-sand",
                            children: [
                              (0, b.jsxs)("div", {
                                children: [
                                  (0, b.jsx)("h2", {
                                    className:
                                      "font-calistoga text-2xl text-charcoal",
                                    children: "Warenkorb",
                                  }),
                                  (0, b.jsxs)("p", {
                                    className:
                                      "font-bold text-sm text-brown mt-1",
                                    children: [a.length, " Artikel"],
                                  }),
                                ],
                              }),
                              (0, b.jsx)("button", {
                                onClick: p,
                                className:
                                  "w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-cream transition-colors",
                                "aria-label": "Warenkorb schließen",
                                children: (0, b.jsx)(h.X, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                }),
                              }),
                            ],
                          }),
                          (0, b.jsx)("div", {
                            className:
                              "flex-1 overflow-y-auto overflow-x-hidden p-6 overscroll-contain",
                            children:
                              0 === a.length
                                ? (0, b.jsx)(m, {})
                                : (0, b.jsx)("div", {
                                    className: "flex flex-col gap-4",
                                    children: (0, b.jsx)(e.AnimatePresence, {
                                      initial: !1,
                                      children: a.map((a, c) =>
                                        (0, b.jsx)(
                                          f.motion.div,
                                          {
                                            initial: s
                                              ? { opacity: 0 }
                                              : { opacity: 0, x: 50 },
                                            animate: s
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
                                              delay: 0.05 * c,
                                            },
                                            className: "relative",
                                            drag: "x",
                                            dragConstraints: {
                                              left: 0,
                                              right: 0,
                                            },
                                            dragElastic: 0.8,
                                            onDragEnd: (b, c) => {
                                              (c.offset.x > 100 ||
                                                c.offset.x < -100) &&
                                                r(a.id);
                                            },
                                            children: (0, b.jsx)("div", {
                                              className:
                                                "bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm border border-sand",
                                              children: (0, b.jsxs)("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  (0, b.jsx)("div", {
                                                    className:
                                                      "font-bold text-base text-charcoal mb-1 truncate",
                                                    children: a.name,
                                                  }),
                                                  (0, b.jsxs)("div", {
                                                    className:
                                                      "text-sm text-terracotta font-bold mb-3",
                                                    children: [
                                                      (a.price * a.quantity)
                                                        .toFixed(2)
                                                        .replace(".", ","),
                                                      " ",
                                                      "€",
                                                    ],
                                                  }),
                                                  (0, b.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-3",
                                                    children: [
                                                      (0, b.jsx)("button", {
                                                        onClick: () =>
                                                          q(
                                                            a.id,
                                                            a.quantity - 1,
                                                          ),
                                                        className:
                                                          "w-8 h-8 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-cream transition-colors",
                                                        "aria-label":
                                                          "Menge verringern",
                                                        children: (0, b.jsx)(
                                                          i.Minus,
                                                          {
                                                            size: 16,
                                                            strokeWidth: 2.5,
                                                          },
                                                        ),
                                                      }),
                                                      (0, b.jsxs)("span", {
                                                        className:
                                                          "w-4 text-center font-bold text-charcoal",
                                                        children: [
                                                          (0, b.jsx)("span", {
                                                            className:
                                                              "sr-only",
                                                            children: "Menge: ",
                                                          }),
                                                          a.quantity,
                                                        ],
                                                      }),
                                                      (0, b.jsx)(
                                                        k.IconCirclePlus,
                                                        {
                                                          "aria-label":
                                                            "Menge erhöhen",
                                                          onClick: () =>
                                                            q(
                                                              a.id,
                                                              a.quantity + 1,
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
                                          a.id,
                                        ),
                                      ),
                                    }),
                                  }),
                          }),
                          a.length > 0 &&
                            (0, b.jsxs)("div", {
                              className:
                                "p-6 bg-cream border-t border-sand shadow-[0_-10px_20px_rgba(0,0,0,0.03)] relative z-10",
                              children: [
                                (0, b.jsxs)("div", {
                                  className:
                                    "flex justify-between items-end mb-6",
                                  children: [
                                    (0, b.jsx)("span", {
                                      className: "font-bold text-brown",
                                      children: "Gesamt",
                                    }),
                                    (0, b.jsxs)("span", {
                                      className:
                                        "font-calistoga text-3xl text-terracotta leading-none",
                                      children: [
                                        t.toFixed(2).replace(".", ","),
                                        " €",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, b.jsx)(l.TransitionLink, {
                                  href: "/checkout",
                                  onClick: p,
                                  className: "block w-full",
                                  children: (0, b.jsx)(j.PrimaryCTA, {
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
      735491,
    );
  },
  314996,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036);
    let f = "M 0 0 L 100 0 Q 50 0 0 0 Z",
      g = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z";
    a.s([
      "SplashScreen",
      0,
      function () {
        let [a, h] = (0, c.useState)(!1),
          [i, j] = (0, c.useState)(!1);
        return ((0, c.useEffect)(() => {
          if ((j(!0), sessionStorage.getItem("splash_shown")))
            window.dispatchEvent(new CustomEvent("splash:done"));
          else {
            (h(!0), sessionStorage.setItem("splash_shown", "true"));
            let a = setTimeout(() => {
              (h(!1), window.dispatchEvent(new CustomEvent("splash:done")));
            }, 3e3);
            return () => clearTimeout(a);
          }
        }, []),
        i)
          ? (0, b.jsx)(e.AnimatePresence, {
              children:
                a &&
                (0, b.jsxs)(
                  d.motion.div,
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
                      (0, b.jsxs)(d.motion.div, {
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
                          (0, b.jsx)("h1", {
                            style: {
                              fontFamily: "var(--font-calistoga), serif",
                              fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                              color: "#fffdd0",
                              margin: 0,
                            },
                            children: "Hey Fede!",
                          }),
                          (0, b.jsx)("p", {
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
                      (0, b.jsx)("svg", {
                        viewBox: "0 0 100 100",
                        preserveAspectRatio: "none",
                        style: {
                          width: "100%",
                          height: "100%",
                          display: "block",
                          filter:
                            "drop-shadow(0 20px 30px rgba(204,98,76,0.3))",
                        },
                        children: (0, b.jsx)(d.motion.path, {
                          fill: "#CC624C",
                          initial: { d: f },
                          animate: {
                            d: [
                              f,
                              "M 0 0 L 100 0 L 100 100 Q 50 150 0 100 Z",
                              g,
                              g,
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
                            (h(!1),
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
  277605,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(262036),
      f = a.i(621216),
      g = a.i(729141);
    a.s([
      "TransitionCurtain",
      0,
      function () {
        let { isBusy: a } = (0, g.useTransition)(),
          h = (0, f.useReducedMotion)(),
          [i, j] = (0, c.useState)(!1),
          [k, l] = (0, c.useState)("top");
        return ((0, c.useEffect)(() => {
          if (!h)
            if (a) (l("top"), j(!0));
            else {
              l("bottom");
              let a = setTimeout(() => j(!1), 800);
              return () => clearTimeout(a);
            }
        }, [a, h]),
        (0, c.useEffect)(() => {
          let a = () => {
            h ||
              (g.useTransition.setState({ isBusy: !0 }),
              setTimeout(() => g.useTransition.setState({ isBusy: !1 }), 800));
          };
          return (
            window.addEventListener("popstate", a),
            () => window.removeEventListener("popstate", a)
          );
        }, [h]),
        h)
          ? null
          : (0, b.jsx)(e.AnimatePresence, {
              children:
                i &&
                (0, b.jsx)(d.motion.div, {
                  initial: { scaleY: +!a },
                  animate: { scaleY: +!!a },
                  exit: { scaleY: 0 },
                  transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
                  className:
                    "fixed inset-0 z-[9999] bg-terracotta pointer-events-none",
                  style: { transformOrigin: k },
                  children:
                    "top" === k &&
                    a &&
                    (0, b.jsx)(d.motion.svg, {
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
                      children: (0, b.jsx)("path", {
                        d: "M0,0 L1000,0 L1000,20 Q950,80 900,20 T800,20 T700,20 T600,20 T500,20 T400,20 T300,20 T200,20 T100,20 T0,20 Z",
                      }),
                    }),
                }),
            });
      },
    ]);
  },
  828426,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131);
    let d = (0, a.i(819721).default)(async () => {}, {
      loadableGenerated: { modules: [330500] },
      ssr: !1,
    });
    a.s([
      "PhysicsPlaygroundContainer",
      0,
      function () {
        let [a, e] = (0, c.useState)(!1);
        return ((0, c.useEffect)(() => {
          let a,
            b = (b) => {
              "sweet-tooth" === b.detail &&
                (e(!0),
                a && clearTimeout(a),
                (a = setTimeout(() => {
                  e(!1);
                }, 6e4)));
            };
          return (
            window.addEventListener("achievementUnlocked", b),
            () => {
              (window.removeEventListener("achievementUnlocked", b),
                a && clearTimeout(a));
            }
          );
        }, []),
        a)
          ? (0, b.jsx)(d, {})
          : null;
      },
    ]);
  },
  275141,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(346271),
      e = a.i(995180),
      f = a.i(901299),
      g = a.i(566535),
      h = a.i(621216);
    a.s([
      "ScrollLavaBackground",
      0,
      function () {
        let a = (0, c.useRef)(null),
          i = (0, h.useReducedMotion)(),
          { scrollYProgress: j } = (0, e.useScroll)({
            target: a,
            offset: ["start start", "end end"],
          }),
          k = (0, g.useSpring)(j, {
            stiffness: 40,
            damping: 20,
            restDelta: 0.001,
          }),
          l = (0, f.useTransform)(k, [0, 1], ["0%", "200%"]),
          m = (0, f.useTransform)(k, [0, 0.5, 1], ["0%", "50%", "-20%"]),
          n = (0, f.useTransform)(k, [0, 0.5, 1], [1, 1.5, 0.8]),
          o = (0, f.useTransform)(k, [0, 1], [0, 180]),
          p = (0, f.useTransform)(k, [0, 1], ["100%", "400%"]),
          q = (0, f.useTransform)(k, [0, 0.5, 1], ["-20%", "-60%", "10%"]),
          r = (0, f.useTransform)(k, [0, 0.5, 1], [1.2, 0.9, 1.6]),
          s = (0, f.useTransform)(k, [0, 1], [0, -120]),
          t = (0, f.useTransform)(k, [0, 1], ["-50%", "300%"]),
          u = (0, f.useTransform)(k, [0, 0.5, 1], ["20%", "-30%", "60%"]),
          v = (0, f.useTransform)(k, [0, 1], [45, -45]);
        return i
          ? (0, b.jsxs)("div", {
              className: "fixed inset-0 pointer-events-none -z-10 opacity-30",
              children: [
                (0, b.jsx)("div", {
                  className:
                    "absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#E4C0A8] rounded-full blur-3xl opacity-40",
                }),
                (0, b.jsx)("div", {
                  className:
                    "absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] bg-[#CC624C] rounded-full blur-3xl opacity-20",
                }),
              ],
            })
          : (0, b.jsxs)("div", {
              ref: a,
              className:
                "fixed inset-0 pointer-events-none -z-10 overflow-hidden",
              children: [
                (0, b.jsx)("div", {
                  className: "absolute inset-0 opacity-[0.22] dot-bg",
                }),
                (0, b.jsx)(d.motion.div, {
                  style: {
                    y: l,
                    x: m,
                    scale: n,
                    rotate: o,
                    borderRadius: "58% 42% 52% 48%/48% 58% 42% 52%",
                  },
                  className:
                    "absolute -top-[10%] -right-[10%] w-[60vw] max-w-[800px] aspect-square bg-[#CC624C] opacity-20 mix-blend-multiply blur-[8px]",
                }),
                (0, b.jsx)(d.motion.div, {
                  style: {
                    y: p,
                    x: q,
                    scale: r,
                    rotate: s,
                    borderRadius: "45% 55% 40% 60%/55% 45% 60% 40%",
                  },
                  className:
                    "absolute top-[20%] -left-[20%] w-[70vw] max-w-[900px] aspect-square bg-[#E4C0A8] opacity-40 mix-blend-multiply blur-[12px]",
                }),
                (0, b.jsx)(d.motion.div, {
                  style: {
                    y: t,
                    x: u,
                    rotate: v,
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
];

//# sourceMappingURL=src_components_07ezk_d._.js.map
