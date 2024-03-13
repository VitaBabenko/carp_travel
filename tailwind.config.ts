import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          xs: "20px",
          sm: "20px",
          md: "32px",
          lg: "104px",
          xl: "104px",
        },
      },
      colors: {
        "main-color": "#FFF",
        "error-color": "#FF5757",
      },
      transitionDuration: {
        default: "300ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.3, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
