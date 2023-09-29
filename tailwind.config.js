/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "primary-Logo": "var(--primary-logo)",

        // Accessory colors
        "accessory-search": "var(--accessory-search)",
        "accessory-profile": "var(--accessory-profile)",

        // Background color
        "dark-background": "var(--dark-background)",
        "dark-text": "var(--dark-text)",
        "dark-channel": "var(--dark-channel)",
      },
    },
  },
  plugins: [],
};
