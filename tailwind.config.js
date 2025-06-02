/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        cusm: "350px",
        xs: "475px",
        sm: "640px", // Small screens (e.g., small mobile devices)
        md: "768px",
        umlg: "770px",
        lg: "1024px", // Large screens (e.g., laptops)
        xlg: "1100px", // Large screens (e.g., laptops)
        xl: "1280px", // Extra large screens (e.g., desktop)
        lg2: "1440px",
        "2xl": "1536px", // 2x Extra large screens (e.g., large desktop monitors)
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
