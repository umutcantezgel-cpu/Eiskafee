import nextConfig from "eslint-config-next/core-web-vitals";
import tsConfig from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "**/.next/**",
      "**/.next_bak/**",
      "**/.next-test-build/**",
      "**/.agents/**",
      "**/out/**",
      "**/build/**",
      "**/next-env.d.ts",
      "**/playwright-report/**",
      "**/coverage/**",
      "**/node_modules/**"
    ]
  },
  ...nextConfig,
  ...tsConfig,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/set-state-in-effect": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
];

export default eslintConfig;
