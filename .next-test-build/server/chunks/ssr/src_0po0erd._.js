module.exports = [
  942938,
  (a) => {
    "use strict";
    a.s(["AdminSidebar", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AdminSidebar() from the server but AdminSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/admin/AdminSidebar.tsx <module evaluation>",
      "AdminSidebar",
    );
  },
  636019,
  (a) => {
    "use strict";
    a.s(["AdminSidebar", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AdminSidebar() from the server but AdminSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/admin/AdminSidebar.tsx",
      "AdminSidebar",
    );
  },
  458986,
  (a) => {
    "use strict";
    a.i(942938);
    var b = a.i(636019);
    a.n(b);
  },
  68608,
  (a) => {
    "use strict";
    a.s(["AuthGuard", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AuthGuard() from the server but AuthGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/auth/AuthGuard.tsx <module evaluation>",
      "AuthGuard",
    );
  },
  702293,
  (a) => {
    "use strict";
    a.s(["AuthGuard", () => b]);
    let b = (0, a.i(211857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AuthGuard() from the server but AuthGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/auth/AuthGuard.tsx",
      "AuthGuard",
    );
  },
  252964,
  (a) => {
    "use strict";
    a.i(68608);
    var b = a.i(702293);
    a.n(b);
  },
  454309,
  (a) => {
    "use strict";
    var b = a.i(907997),
      c = a.i(458986),
      d = a.i(252964);
    a.s([
      "default",
      0,
      function ({ children: a }) {
        return (0, b.jsx)(d.AuthGuard, {
          requireAdmin: !0,
          children: (0, b.jsxs)("div", {
            className: "flex h-screen bg-[#f5efe8]",
            children: [
              (0, b.jsx)(c.AdminSidebar, {}),
              (0, b.jsx)("main", {
                id: "main-content",
                className: "flex-1 overflow-y-auto",
                children: a,
              }),
            ],
          }),
        });
      },
      "metadata",
      0,
      { title: "Admin Dashboard", robots: "noindex, nofollow" },
    ]);
  },
  318173,
  (a) => {
    a.n(a.i(454309));
  },
];

//# sourceMappingURL=src_0po0erd._.js.map
