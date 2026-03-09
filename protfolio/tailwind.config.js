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
        accent: '#7C3AED',
        hover: '#9333EA',
      },
    },
  },
  plugins: [],
};
