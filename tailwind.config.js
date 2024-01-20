/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "adastra-dark-blue": "#01014b",
      "adastra-light-blue" : "#0062f4",
      "adastra-white" : "#e7ffff",
      "adastra-purple" : "#d701f9"
    },
    fontFamily: {
      "Logo" : "'Lemon', serif",
      "Normal-Text": "'Teko', sans-serif"
    }
  },
  plugins: [],
};
