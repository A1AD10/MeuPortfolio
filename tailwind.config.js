/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        preto: '#000000',
        branco: '#ffffff',
        azul: '#0424D9',
        azulClaro: '#2793F2',
        cinza: '#353535',
        cinzaClaro: '#7e7e7e',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      margin: {
        7: '7%',
      }
    },
  },
  plugins: [],
}
