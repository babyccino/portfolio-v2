/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  semi: false,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  printWidth: 100,
  arrowParens: "avoid",
  trailingComma: "all",
}
export default config
