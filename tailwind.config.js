// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        grow: "grow 2s ease-out forwards",
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }, // Or leave 'var(--tw-width)' if you're setting via CSS
        },
      },
    },
  },
  plugins: [],
};
