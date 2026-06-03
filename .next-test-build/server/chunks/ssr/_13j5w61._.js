module.exports = [
  544623,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131);
    a.s([
      "FadeUp",
      0,
      function ({ children: a, delay: d = 0, className: e = "" }) {
        let f = (0, c.useRef)(null),
          [g, h] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            let a = new IntersectionObserver(
              ([a]) => {
                a.isIntersecting && h(!0);
              },
              { threshold: 0.12 },
            );
            return (f.current && a.observe(f.current), () => a.disconnect());
          }, []),
          (0, b.jsx)("div", {
            ref: f,
            className: e,
            style: {
              opacity: +!!g,
              transform: g ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${d}s`,
            },
            children: a,
          })
        );
      },
    ]);
  },
  702918,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    a.s(["default", 0, b]);
  },
  875160,
  (a) => {
    "use strict";
    var b = a.i(702918);
    a.s(["Loader2", () => b.default]);
  },
  287828,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    a.s(["default", 0, b]);
  },
  162591,
  (a) => {
    "use strict";
    var b = a.i(287828);
    a.s(["Mail", () => b.default]);
  },
  206176,
  (a) => {
    "use strict";
    let b = (0, a.i(164831).default)("lock", [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1",
        },
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
    ]);
    a.s(["default", 0, b]);
  },
  139353,
  (a) => {
    "use strict";
    var b = a.i(206176);
    a.s(["Lock", () => b.default]);
  },
  378906,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131),
      d = a.i(544623),
      e = a.i(875160),
      f = a.i(344451),
      g = a.i(162591),
      h = a.i(139353),
      i = a.i(371947),
      j = a.i(50944),
      k = a.i(420237),
      l = a.i(262536);
    a.i(730485);
    var m = a.i(65825),
      m = m,
      n = m;
    a.i(69387);
    var o = a.i(132787),
      p = a.i(601787);
    function q() {
      let [a, q] = (0, c.useState)(!0),
        [r, s] = (0, c.useState)(""),
        [t, u] = (0, c.useState)(""),
        [v, w] = (0, c.useState)(""),
        [x, y] = (0, c.useState)(""),
        [z, A] = (0, c.useState)(!1),
        B = (0, j.useRouter)(),
        C = (0, j.useSearchParams)(),
        { user: D, loading: E } = (0, l.useAuth)();
      (0, c.useEffect)(() => {
        if (D && !E) {
          let a = C.get("redirect");
          B.push(a || "/profile");
        }
      }, [D, E, B, C]);
      let F = async (b) => {
        if (
          (b.preventDefault(),
          !k.auth.app.options.apiKey ||
            "dummy" === k.auth.app.options.apiKey ||
            "DEIN_API_KEY" === k.auth.app.options.apiKey)
        )
          return void y(
            "Firebase Konfiguration fehlt. Bitte API-Keys eintragen.",
          );
        (y(""), A(!0));
        try {
          if (a) await (0, m.ac)(k.auth, r, t);
          else {
            let a = await (0, n.ab)(k.auth, r, t);
            await (0, p.setDoc)((0, o.doc)(k.db, "users", a.user.uid), {
              role: "customer",
              createdAt: new Date().toISOString(),
              name: v,
              email: r,
            });
          }
        } catch (a) {
          y(a.message || "Ein Fehler ist aufgetreten.");
        } finally {
          A(!1);
        }
      };
      return E || D
        ? null
        : (0, b.jsxs)("div", {
            className:
              "min-h-screen bg-[#f5efe8] flex items-center justify-center p-6 relative overflow-hidden",
            children: [
              (0, b.jsx)("div", {
                className:
                  "absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-[rgba(204,98,76,0.1)] rounded-full blur-3xl pointer-events-none",
              }),
              (0, b.jsx)("div", {
                className:
                  "absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgba(228,192,168,0.3)] rounded-full blur-3xl pointer-events-none",
              }),
              (0, b.jsxs)(d.FadeUp, {
                className: "w-full max-w-[440px] relative z-10",
                children: [
                  (0, b.jsxs)("div", {
                    className: "text-center mb-8",
                    children: [
                      (0, b.jsx)(i.TransitionLink, {
                        href: "/",
                        className: "inline-block mb-6",
                        children: (0, b.jsx)("div", {
                          className: "font-calistoga text-3xl text-[#CC624C]",
                          children: "Hey Fede!",
                        }),
                      }),
                      (0, b.jsx)("h1", {
                        className:
                          "font-calistoga text-3xl text-[#2d1f19] mb-2",
                        children: a ? "Willkommen zurück" : "Konto erstellen",
                      }),
                      (0, b.jsx)("p", {
                        className: "font-nunito text-[#5c3d35]",
                        children: a
                          ? "Schön, dass du wieder da bist!"
                          : "Melde dich an, um schneller zu bestellen.",
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(45,31,25,0.06)]",
                    children: [
                      (0, b.jsxs)("form", {
                        className: "space-y-5",
                        onSubmit: F,
                        children: [
                          !a &&
                            (0, b.jsxs)("div", {
                              children: [
                                (0, b.jsx)("label", {
                                  className:
                                    "block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2",
                                  children: "Name",
                                }),
                                (0, b.jsxs)("div", {
                                  className: "relative",
                                  children: [
                                    (0, b.jsx)("div", {
                                      className:
                                        "absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]",
                                      children: (0, b.jsx)(f.User, {
                                        size: 18,
                                      }),
                                    }),
                                    (0, b.jsx)("input", {
                                      type: "text",
                                      value: v,
                                      onChange: (a) => w(a.target.value),
                                      required: !a,
                                      className:
                                        "w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]",
                                      placeholder: "Max Mustermann",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2",
                                children: "E-Mail",
                              }),
                              (0, b.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, b.jsx)("div", {
                                    className:
                                      "absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]",
                                    children: (0, b.jsx)(g.Mail, { size: 18 }),
                                  }),
                                  (0, b.jsx)("input", {
                                    type: "email",
                                    value: r,
                                    onChange: (a) => s(a.target.value),
                                    required: !0,
                                    className:
                                      "w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]",
                                    placeholder: "hallo@example.de",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("label", {
                                className:
                                  "block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2",
                                children: "Passwort",
                              }),
                              (0, b.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, b.jsx)("div", {
                                    className:
                                      "absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]",
                                    children: (0, b.jsx)(h.Lock, { size: 18 }),
                                  }),
                                  (0, b.jsx)("input", {
                                    type: "password",
                                    value: t,
                                    onChange: (a) => u(a.target.value),
                                    required: !0,
                                    className:
                                      "w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]",
                                    placeholder: "••••••••",
                                  }),
                                ],
                              }),
                              a &&
                                (0, b.jsx)("div", {
                                  className: "text-right mt-2",
                                  children: (0, b.jsx)("span", {
                                    className:
                                      "font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline",
                                    children: "Passwort vergessen?",
                                  }),
                                }),
                            ],
                          }),
                          x &&
                            (0, b.jsx)("div", {
                              className:
                                "p-3 bg-red-50 text-red-600 font-nunito text-sm rounded-xl",
                              children: x,
                            }),
                          (0, b.jsx)("div", {
                            className: "pt-2",
                            children: (0, b.jsx)("button", {
                              disabled: z,
                              className:
                                "w-full bg-[#CC624C] text-white rounded-xl py-3.5 font-nunito font-black text-[0.95rem] shadow-[0_4px_14px_rgba(204,98,76,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(204,98,76,0.4)] transition-all disabled:opacity-50 flex justify-center",
                              children: z
                                ? (0, b.jsx)(e.Loader2, {
                                    className: "animate-spin",
                                    size: 20,
                                  })
                                : a
                                  ? "Anmelden"
                                  : "Registrieren",
                            }),
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        className:
                          "mt-8 text-center font-nunito text-sm text-[#5c3d35]",
                        children: [
                          a ? "Noch kein Konto? " : "Bereits ein Konto? ",
                          (0, b.jsx)("button", {
                            onClick: () => {
                              (q(!a), y(""));
                            },
                            className:
                              "font-bold text-[#CC624C] hover:underline cursor-pointer",
                            children: a ? "Jetzt erstellen" : "Anmelden",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
    }
    a.s(
      [
        "default",
        0,
        function () {
          return (0, b.jsx)(c.Suspense, {
            fallback: (0, b.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, b.jsx)(e.Loader2, {
                className: "animate-spin text-[#CC624C]",
                size: 32,
              }),
            }),
            children: (0, b.jsx)(q, {}),
          });
        },
      ],
      378906,
    );
  },
];

//# sourceMappingURL=_13j5w61._.js.map
