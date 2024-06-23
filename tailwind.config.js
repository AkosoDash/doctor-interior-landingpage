/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url('/public/assets/images/banner-background.jpg')",
        "about-us-image":
          "url('/public/assets/images/about-us-background.jpg')",
      },
    },
  },
  plugins: [],
};
