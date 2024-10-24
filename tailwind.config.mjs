/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(@.@deg)" },

          "15%": { transform: "rotate(14.0deg)" },

          "30%": { transform: "rotate(-8.0deg)" },

          "40%": { transform: "rotate(14.0deg)" },

          "50%": { transform: "rotate(-4.0deg)" },

          "60%": { transform: "rotate(10.0deg)" },

          "70%": { transform: "rotate(0.8deg)" },

          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
