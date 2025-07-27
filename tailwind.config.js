import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.hmtl", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};
