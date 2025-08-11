// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjusted to support all relevant file types
  theme: {
    extend: {
      animation: {
        grow: "grow 2s ease-out forwards", // Animation name "grow"
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }, // Width expands from 0 to 100%
        },
      },
    },
  },
  plugins: [],
};
