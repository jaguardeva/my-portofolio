/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "first-background": "url('/public/Image/home-banner.png')",
        "second-background": "url('/public/Image/banner-2.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
