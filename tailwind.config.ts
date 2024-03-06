import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      darkBlue_DarkModeElements: "hsl(209, 23%, 22%)",
      veryDarkBlue_DarkModeBG: "hsl(207, 26%, 17%)",
      veryDarkBlue_LightModeText: "hsl(200, 15%, 8%)",
      darkGray_LightModeInput: "hsl(0, 0%, 52%)",
      veryLightGray_LightModeBG: "hsl(0, 0%, 98%)",
      white_DarkModeText_LightModeElements: "hsl(0, 0%, 100%)",
    },
    screens: {
      mobile: "376px",
      desktop: "1440px",
    },
    extend: {
      boxShadow: {
        full: "0 0 4px 2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;