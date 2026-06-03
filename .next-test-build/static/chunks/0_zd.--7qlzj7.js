(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  746939,
  (e) => {
    "use strict";
    var s = e.i(727286);
    e.s(["collection", () => s.aO]);
  },
  302269,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(271645);
    e.i(436180);
    var r = e.i(746939),
      i = e.i(263802),
      c = e.i(959141);
    e.s([
      "default",
      0,
      function () {
        let [e, n] = (0, t.useState)("Testing connection..."),
          [o, a] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            !(async function () {
              try {
                let e = await (0, i.getDocs)(
                  (0, r.collection)(c.db, "test_collection"),
                );
                n(`Success: Read ${e.size} documents.`);
              } catch (e) {
                (n("Error occurred during read."), a(e.message));
              }
            })();
          }, []),
          (0, s.jsxs)("div", {
            className: "p-8 font-sans",
            children: [
              (0, s.jsx)("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Firebase Init Test",
              }),
              (0, s.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, s.jsx)("strong", { children: "Status:" }),
                  " ",
                  e,
                ],
              }),
              o &&
                (0, s.jsxs)("div", {
                  className:
                    "p-4 bg-red-100 text-red-800 border border-red-300 rounded",
                  children: [
                    (0, s.jsx)("strong", { children: "Expected Error:" }),
                    " ",
                    o,
                  ],
                }),
              (0, s.jsx)("p", {
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
]);
