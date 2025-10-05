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
        // Base Colors - Pure Off White Background
        secondary: {
          50: '#FFFCFC', // Pure off white - main background
          100: '#faf8f8',
          200: '#f5f2f2',
          300: '#f0ecec',
          400: '#ebe6e6',
          500: '#FFFCFC', // Main pure off white
          600: '#e6e0e0',
          700: '#d9d1d1',
          800: '#ccc2c2',
          900: '#bfb3b3',
        },
        // Highlight Colors
        highlight: {
          pink: '#F078CF', // Persian Pink - buttons, CTAs, icons
          orange: '#E9562F', // Flamingo Orange - section titles, promotions
          yellow: '#FFB116', // Tangerine Yellow - hover effects, accents
        },
        // Accent Colors
        accent: {
          red: '#D03714', // Vermilion Red - alerts, special offers, key features
          purple: '#35173B', // Enhanced dark purple for better contrast
          dark: '#150716',
          gray: '#d9d1d1', // Subtle gray that works with off-white
          light: '#faf8f8', // Light accent that complements off-white
        },
        // Purple color palette for About section
        purple: {
          'light-bg': '#FFFCFC', // Pure off white background
          'dark-text': '#150716', // Dark purple for titles
          'medium-text': '#35173B', // Enhanced medium purple for paragraphs
          'card-bg': '#ffffff', // White for cards
        },
        // About section gradient colors
        about: {
          'gradient-start': '#FFFCFC', // Pure off white
          'gradient-end': '#faf8f8', // Subtle variation of off white
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
