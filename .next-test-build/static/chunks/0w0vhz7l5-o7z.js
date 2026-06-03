(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  790392,
  (e) => {
    "use strict";
    var a = e.i(843476),
      t = e.i(846932);
    e.s([
      "default",
      0,
      function () {
        return (0, a.jsxs)("div", {
          className:
            "fixed inset-0 bg-[#f5efe8] z-50 flex flex-col items-center justify-center",
          children: [
            (0, a.jsx)(t.motion.div, {
              className:
                "w-24 h-24 mb-8 bg-[#CC624C] rounded-full flex items-center justify-center text-4xl shadow-clay",
              animate: {
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 10px 25px -5px rgba(204, 98, 76, 0.4)",
                  "0 20px 35px -5px rgba(204, 98, 76, 0.6)",
                  "0 10px 25px -5px rgba(204, 98, 76, 0.4)",
                ],
              },
              transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              children: (0, a.jsx)("span", {
                className: "font-calistoga text-white",
                children: "HF",
              }),
            }),
            (0, a.jsx)("div", {
              className: "flex gap-2",
              children: [0, 1, 2].map((e) =>
                (0, a.jsx)(
                  t.motion.div,
                  {
                    className: "w-3 h-3 bg-[#CC624C] rounded-full",
                    animate: {
                      y: ["0%", "-50%", "0%"],
                      opacity: [0.3, 1, 0.3],
                    },
                    transition: {
                      duration: 0.8,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                      delay: 0.15 * e,
                    },
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      },
    ]);
  },
]);
