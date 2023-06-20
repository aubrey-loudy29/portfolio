/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				transparent: 'transparent',
        white: '#e5e2df',
        darkWhite: '#cac5c0',
				black: "#000000",
				darkGray: '#212224',
				lightGreen: '#9bb4ab',
				green: '#3c4b45',
				darkGreen: '#2c3a35',
				peach: '#b3522f',
				lightPink: '#efd7ce',
				pink: '#cc9885',
				tan: '#ba926a',
				beige: '#eae5d9',
        lightBeige: '#f7f5f1',
    		},
    },
  },
  plugins: [],
}

