/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}", // Ajoutez cette ligne pour inclure tous les fichiers dans le dossier src
  ],
  theme: {
    extend: {
      colors: {
        primary:"#3DCBB1",
        Black90:"#1B1B1B90",
        Black60:"#1B1B1B60",
        Black30:"#1B1B1B30",
        Black10:"#1B1B1B10",
        P80:"#C42A22",
        White30: "#F9F9F930",
        White60: "#F9F9F960",
        

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
