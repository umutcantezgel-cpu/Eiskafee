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
      function ({ children: e, delay: a = 0, className: l = "" }) {
        let n = (0, s.useRef)(null),
          [i, r] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && r(!0);
              },
              { threshold: 0.12 },
            );
            return (n.current && e.observe(n.current), () => e.disconnect());
          }, []),
          (0, t.jsx)("div", {
            ref: n,
            className: l,
            style: {
              opacity: +!!i,
              transform: i ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${a}s`,
            },
            children: e,
          })
        );
      },
    ]);
  },
  758379,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    e.s(["default", 0, t]);
  },
  632781,
  (e) => {
    "use strict";
    var t = e.i(758379);
    e.s(["Loader2", () => t.default]);
  },
  290135,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    e.s(["default", 0, t]);
  },
  96315,
  (e) => {
    "use strict";
    var t = e.i(290135);
    e.s(["Mail", () => t.default]);
  },
  832411,
  (e) => {
    "use strict";
    let t = (0, e.i(456420).default)("lock", [
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
    e.s(["default", 0, t]);
  },
  806537,
  (e) => {
    "use strict";
    var t = e.i(832411);
    e.s(["Lock", () => t.default]);
  },
  31284,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(636498),
      l = e.i(632781),
      n = e.i(901279),
      i = e.i(96315),
      r = e.i(806537),
      o = e.i(974336),
      d = e.i(618566),
      c = e.i(959141),
      u = e.i(230129);
    e.i(151718);
    var x = e.i(464104),
      x = x,
      f = x;
    e.i(436180);
    var h = e.i(386205),
      p = e.i(263802);
    function m() {
      let [e, m] = (0, s.useState)(!0),
        [b, v] = (0, s.useState)(""),
        [j, g] = (0, s.useState)(""),
        [N, y] = (0, s.useState)(""),
        [w, k] = (0, s.useState)(""),
        [C, S] = (0, s.useState)(!1),
        z = (0, d.useRouter)(),
        K = (0, d.useSearchParams)(),
        { user: _, loading: A } = (0, u.useAuth)();
      (0, s.useEffect)(() => {
        if (_ && !A) {
          let e = K.get("redirect");
          z.push(e || "/profile");
        }
      }, [_, A, z, K]);
      let M = async (t) => {
        if (
          (t.preventDefault(),
          !c.auth.app.options.apiKey ||
            "dummy" === c.auth.app.options.apiKey ||
            "DEIN_API_KEY" === c.auth.app.options.apiKey)
        )
          return void k(
            "Firebase Konfiguration fehlt. Bitte API-Keys eintragen.",
          );
        (k(""), S(!0));
        try {
          if (e) await (0, x.ac)(c.auth, b, j);
          else {
            let e = await (0, f.ab)(c.auth, b, j);
            await (0, p.setDoc)((0, h.doc)(c.db, "users", e.user.uid), {
              role: "customer",
              createdAt: new Date().toISOString(),
              name: N,
              email: b,
            });
          }
        } catch (e) {
          k(e.message || "Ein Fehler ist aufgetreten.");
        } finally {
          S(!1);
        }
      };
      return A || _
        ? null
        : (0, t.jsxs)("div", {
            className:
              "min-h-screen bg-[#f5efe8] flex items-center justify-center p-6 relative overflow-hidden",
            children: [
              (0, t.jsx)("div", {
                className:
                  "absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-[rgba(204,98,76,0.1)] rounded-full blur-3xl pointer-events-none",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgba(228,192,168,0.3)] rounded-full blur-3xl pointer-events-none",
              }),
              (0, t.jsxs)(a.FadeUp, {
                className: "w-full max-w-[440px] relative z-10",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-center mb-8",
                    children: [
                      (0, t.jsx)(o.TransitionLink, {
                        href: "/",
                        className: "inline-block mb-6",
                        children: (0, t.jsx)("div", {
                          className: "font-calistoga text-3xl text-[#CC624C]",
                          children: "Hey Fede!",
                        }),
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "font-calistoga text-3xl text-[#2d1f19] mb-2",
                        children: e ? "Willkommen zurück" : "Konto erstellen",
                      }),
                      (0, t.jsx)("p", {
                        className: "font-nunito text-[#5c3d35]",
                        children: e
                          ? "Schön, dass du wieder da bist!"
                          : "Melde dich an, um schneller zu bestellen.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(45,31,25,0.06)]",
                    children: [
                      (0, t.jsxs)("form", {
                        className: "space-y-5",
                        onSubmit: M,
                        children: [
                          !e &&
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className:
                                    "block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2",
                                  children: "Name",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "relative",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]",
                                      children: (0, t.jsx)(n.User, {
                                        size: 18,
                                      }),
                                    }),
                                    (0, t.jsx)("input", {
                                      type: "text",
                                      value: N,
                                      onChange: (e) => y(e.target.value),
                                      required: !e,
                                      className:
                                        "w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]",
                                      placeholder: "Max Mustermann",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2",
                                children: "E-Mail",
                              }),
                              (0, t.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]",
                                    children: (0, t.jsx)(i.Mail, { size: 18 }),
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "email",
                                    value: b,
                                    onChange: (e) => v(e.target.value),
                                    required: !0,
                                    className:
                                      "w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]",
                                    placeholder: "hallo@example.de",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2",
                                children: "Passwort",
                              }),
                              (0, t.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]",
                                    children: (0, t.jsx)(r.Lock, { size: 18 }),
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "password",
                                    value: j,
                                    onChange: (e) => g(e.target.value),
                                    required: !0,
                                    className:
                                      "w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]",
                                    placeholder: "••••••••",
                                  }),
                                ],
                              }),
                              e &&
                                (0, t.jsx)("div", {
                                  className: "text-right mt-2",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline",
                                    children: "Passwort vergessen?",
                                  }),
                                }),
                            ],
                          }),
                          w &&
                            (0, t.jsx)("div", {
                              className:
                                "p-3 bg-red-50 text-red-600 font-nunito text-sm rounded-xl",
                              children: w,
                            }),
                          (0, t.jsx)("div", {
                            className: "pt-2",
                            children: (0, t.jsx)("button", {
                              disabled: C,
                              className:
                                "w-full bg-[#CC624C] text-white rounded-xl py-3.5 font-nunito font-black text-[0.95rem] shadow-[0_4px_14px_rgba(204,98,76,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(204,98,76,0.4)] transition-all disabled:opacity-50 flex justify-center",
                              children: C
                                ? (0, t.jsx)(l.Loader2, {
                                    className: "animate-spin",
                                    size: 20,
                                  })
                                : e
                                  ? "Anmelden"
                                  : "Registrieren",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "mt-8 text-center font-nunito text-sm text-[#5c3d35]",
                        children: [
                          e ? "Noch kein Konto? " : "Bereits ein Konto? ",
                          (0, t.jsx)("button", {
                            onClick: () => {
                              (m(!e), k(""));
                            },
                            className:
                              "font-bold text-[#CC624C] hover:underline cursor-pointer",
                            children: e ? "Jetzt erstellen" : "Anmelden",
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
    e.s(
      [
        "default",
        0,
        function () {
          return (0, t.jsx)(s.Suspense, {
            fallback: (0, t.jsx)("div", {
              className:
                "min-h-screen bg-[#f5efe8] flex items-center justify-center",
              children: (0, t.jsx)(l.Loader2, {
                className: "animate-spin text-[#CC624C]",
                size: 32,
              }),
            }),
            children: (0, t.jsx)(m, {}),
          });
        },
      ],
      31284,
    );
  },
]);
