import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "54": "54px",
      "48": "48px",
      "42": "42px",
      "36": "36px",
      "32": "32px",
      "28": "28px",
      "24": "24px",
      "20": "20px",
      "18": "18px",
      "16": "16px",
      "14": "14px",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Encode: ["Encode Sans Expanded", "sans-serif"],
      },
      colors: {
        primary: "#E9BF97",
        secondary: "#fdf8f6",
        black: {
          100: "#1C1D21 ",
          75: "#1C1c21 ",
          50: "#212025 ",
          25: "#232228 ",
        },
      },
    },
  },
  plugins: [],
};
export default config;
