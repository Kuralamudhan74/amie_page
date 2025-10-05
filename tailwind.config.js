/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // AMIE Brand Colors - Dark Purple Primary
        primary: {
          50: '#f3f0f4',
          100: '#e6dde9',
          200: '#d1c0d6',
          300: '#b89bbf',
          400: '#9d73a6',
          500: '#351736', // Main dark purple
          600: '#2d132e',
          700: '#250f26',
          800: '#1d0b1e',
          900: '#150716',
        },
        secondary: {
          50: '#fffcec',
          100: '#fff8d9',
          200: '#fff0b3',
          300: '#ffe88d',
          400: '#ffe066',
          500: '#fffcec', // Main cream
          600: '#e6e3d4',
          700: '#cccaa1',
          800: '#b3b06e',
          900: '#99963b',
        },
        accent: {
          purple: '#2d132e',
          dark: '#150716',
          gray: '#cccaa1',
          light: '#fff8d9',
        },
        // Purple color palette for About section
        purple: {
          'light-bg': '#fffcec', // Very light cream background
          'dark-text': '#150716', // Dark purple for titles
          'medium-text': '#351736', // Medium purple for paragraphs
          'card-bg': '#ffffff', // White for cards
        },
        // About section gradient colors
        about: {
          'gradient-start': '#fffcec', // Light cream
          'gradient-end': '#fff8d9', // Slightly darker cream
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-about': 'linear-gradient(180deg, #ffffff 0%, #f2fbfa 100%)',
      },
    },
  },
  plugins: [],
}
