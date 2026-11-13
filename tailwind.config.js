/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botanix: {
          green: '#3D6B4F',
          'green-dark': '#2E523C',
          'green-light': '#E9F1EC',
          'green-accent': '#528F69',
          forest: '#1C221D',
          'forest-dark': '#151A16',
          'forest-card': '#252D26',
          cream: '#FAF7F2',
          sand: '#F4EFEA',
          warm: '#EFEAE2',
          amber: '#E5A955',
          border: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        editorial: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
