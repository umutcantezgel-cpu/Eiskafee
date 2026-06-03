module.exports = [
  42816,
  (a) => {
    "use strict";
    var b = a.i(187924),
      c = a.i(346271);
    a.s([
      "default",
      0,
      function () {
        return (0, b.jsxs)("div", {
          className:
            "fixed inset-0 bg-[#f5efe8] z-50 flex flex-col items-center justify-center",
          children: [
            (0, b.jsx)(c.motion.div, {
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
              children: (0, b.jsx)("span", {
                className: "font-calistoga text-white",
                children: "HF",
              }),
            }),
            (0, b.jsx)("div", {
              className: "flex gap-2",
              children: [0, 1, 2].map((a) =>
                (0, b.jsx)(
                  c.motion.div,
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
                      delay: 0.15 * a,
                    },
                  },
                  a,
                ),
              ),
            }),
          ],
        });
      },
    ]);
  },
];

//# sourceMappingURL=src_app_loading_tsx_0q-lkb_._.js.map
