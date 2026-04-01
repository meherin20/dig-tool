import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#0B122A",
      },
      backgroundImage: {
        brandGradient: "linear-gradient(90deg, #4f46e5 0%, #a21caf 100%)",
      },
    },
  },
  plugins: [daisyui],
};
