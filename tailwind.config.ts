import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        script: ['var(--font-script)', ...fontFamily.serif],

        // define helpers for the specific fonts we use
        montserrat: ['Montserrat', 'sans-serif'],
        oleo: ['Oleo Script', 'cursive'],
        smooch: ['Smooch', 'cursive'],
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
