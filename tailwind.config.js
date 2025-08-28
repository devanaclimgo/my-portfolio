/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1220',
        cosmos: '#3B2BFF',
        lilac: '#8A6CFF',
        cotton: '#F7F9FB',
        pastelPink: '#FF85D0',
        softBlue: '#86D0FF'
      },
      backgroundImage: {
        'cosmic': 'radial-gradient(ellipse at center, rgba(255,255,255,0.05), transparent 40%), linear-gradient(180deg,#0B1220,#3B2BFF)'
      }
    }
  },
  plugins: []
}
