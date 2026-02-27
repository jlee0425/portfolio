import postcssImport from "postcss-import";

const config = {
  plugins: {
    "postcss-import": postcssImport,
    "@tailwindcss/postcss": {},
  },
};

export default config;
