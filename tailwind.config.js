/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false,
  target: "relaxed",
  prefix: "",
  important: false,
  separator: ":",
  content: [
    "./**/*.html",
    "./**/*.tsx",
    "./**/*.jsx",
    "./**/*.js",
    "./**/*.styles.ts",
    "./**/*.styles.tsx",
  ],
  theme: {},
  plugins: [],
};
