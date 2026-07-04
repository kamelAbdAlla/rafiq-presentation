// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Keeps the option open if you ever want to build a toggle switch
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'], 
      },
      colors: {
        rafiq: {
          primary: {
            50: '#F0F6FF',
            100: '#E0EDFE',
            200: '#BAD6FE',
            300: '#7DADFD',
            400: '#3A82F6',
            500: '#1564BF', // BRAND CORE
            600: '#0F4C9B',
            700: '#0C3C7D',
            800: '#0A3166',
            900: '#082956',
            950: '#051A3B',
          },
          neutral: {
            50: '#F7F7F8',
            100: '#EEEEF0',
            200: '#DCDDE2',
            300: '#C5C6CE',
            400: '#ACADB9', // BRAND NEUTRAL
            500: '#8F91A0',
            600: '#727485',
            700: '#5C5D6C',
            800: '#4D4E59',
            900: '#40414A',
            950: '#2A2A30',
          }
        },
        // UPDATED FOR BRIGHT PRESENTATION
        background: '#FFFFFF', // Pure crisp white
        surface: '#F8FAFC', // Very subtle off-white/blue for cards
        surfaceBorder: '#E2E8F0', // Light gray/blue borders
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config