import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-Work_Sans)", ...fontFamily.sans],
        spaceMono: ["var(--font-spaceMono)", ...fontFamily.sans],
      },
      borderRadius: {
        5: "20px",
      },
    },
    colors: {
      primary: "#A259FF",
      dark: "#2B2B2B",
      secondary: "#3B3B3B",
      label: " #858584",
      white: "#ffffff",
      "gradient-1": "#FF6250",
      "gradient-2": "#377DF7",
    },
  },
  plugins: [],
};
export default config;
