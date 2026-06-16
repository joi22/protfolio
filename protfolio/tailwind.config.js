/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        card: '#13131A',
        text: '#F4F4FF',
        accent: '#10b981', // Emerald Green
        hover: '#059669', // Darker Emerald Green
      },
    },
  },
  plugins: [],
};
