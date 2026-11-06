/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./brand.config.js"
  ],
  theme: {
    extend: {
      colors: {
        silk: {
          maroon: '#4A0E17',
          'maroon-dark': '#2E050B',
          'maroon-light': '#6B1724',
          gold: '#D4AF37',
          'gold-light': '#F5E6BE',
          'gold-dark': '#A67C1E',
          emerald: '#0B3B24',
          'emerald-light': '#145A38',
          cream: '#FDFBF7',
          ivory: '#F7F2E7',
          sand: '#ECE3D4',
          charcoal: '#1A1817'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'silk-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'silk-glow-lg': '0 0 50px rgba(212, 175, 55, 0.35)',
        'card-lux': '0 20px 40px -15px rgba(46, 5, 11, 0.12)',
      },
      backgroundImage: {
        'zari-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFF3B0 50%, #A67C1E 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #4A0E17 0%, #2E050B 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite linear',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}

