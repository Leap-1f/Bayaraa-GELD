/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.{js}",
  ],
  daisyui: {
    themes: ["light", "cupcake"],
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
