/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'olivine': '#b4c88a',
        'ebony': '#4e5648',
        'lavender-web': '#e4e1ec',
        'asparagus': '#7b9b48',
        'space-cadet': '#1e1f33',
        'rose-quartz': '#a6a0a4',
      }
    }
  },
  plugins: [],
}

