import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

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

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
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
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".hover": {
          position: "relative",
        },
        ".hover::after": {
          content: "''",
          position: "absolute",
          bottom: "-3px",
          left: "0",
          width: "100%",
          height: "1px",
          backgroundColor: "#fff",
          transform: "scaleX(0)",
          transition: "transform 0.25s ease-in-out",
        },
        ".hover:hover::after": {
          transform: "scaleX(1)",
        },
      });
    }),
  ],
};
export default config;
