/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Outfit", "Manrope", "system-ui", '"Segoe UI"', "sans-serif"],
        headline: [
          "Oswald",
          "Plus Jakarta Sans",
          "Manrope",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
