import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        beige: "var(--soft-beige)",
        peach: "var(--waffle-peach)",
        terra: "var(--terracotta)",
        "terra-dark": "var(--terracotta-dark)",
        bark: "var(--dark)",
        "bark-mid": "var(--dark-mid)",
        "bark-soft": "var(--dark-soft)",
        mint: "var(--mint)",
        "mint-dark": "var(--mint-dark)",
      },
      fontFamily: {
        display: ["var(--font-calistoga)"],
        body: ["var(--font-nunito)"],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        terra: "var(--shadow-terra)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      transitionTimingFunction: {
        spring: "var(--ease-spring)",
        smooth: "var(--ease-smooth)",
      },
    },
  },
  plugins: [],
};

export default config;
