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
        brand: {
          navy: "#0a192f",
          dark: "#0f172a",
          blue: "#1d4ed8",
          orange: "#f97316",
          cyan: "#06b6d4",
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
