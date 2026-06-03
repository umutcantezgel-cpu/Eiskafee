module.exports = [
  691431,
  (a) => {
    "use strict";
    var b = a.i(289015);
    a.s(["collection", () => b.aX]);
  },
  97835,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(572131);
    a.i(69387);
    var d = a.i(691431),
      e = a.i(601787),
      f = a.i(420237);
    a.s([
      "default",
      0,
      function () {
        let [a, g] = (0, c.useState)("Testing connection..."),
          [h, i] = (0, c.useState)(null);
        return (
          (0, c.useEffect)(() => {
            !(async function () {
              try {
                let a = await (0, e.getDocs)(
                  (0, d.collection)(f.db, "test_collection"),
                );
                g(`Success: Read ${a.size} documents.`);
              } catch (a) {
                (g("Error occurred during read."), i(a.message));
              }
            })();
          }, []),
          (0, b.jsxs)("div", {
            className: "p-8 font-sans",
            children: [
              (0, b.jsx)("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Firebase Init Test",
              }),
              (0, b.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, b.jsx)("strong", { children: "Status:" }),
                  " ",
                  a,
                ],
              }),
              h &&
                (0, b.jsxs)("div", {
                  className:
                    "p-4 bg-red-100 text-red-800 border border-red-300 rounded",
                  children: [
                    (0, b.jsx)("strong", { children: "Expected Error:" }),
                    " ",
                    h,
                  ],
                }),
              (0, b.jsx)("p", {
                className: "mt-8 text-sm text-gray-500",
                children:
                  'If you see a "Missing or insufficient permissions" error (or similar), Firebase is correctly initialized and communicating with the server.',
              }),
            ],
          })
        );
      },
    ]);
  },
];

//# sourceMappingURL=_0yumvrh._.js.map
