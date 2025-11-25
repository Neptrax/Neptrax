/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a5f',
          950: '#0f172a',
        },
        dark: {
          bg: '#0d1117',
          card: '#1e293b',
          border: '#334155',
          text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
            tertiary: '#64748b',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(37, 99, 235, 0.3)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.4)',
        'glow-md': '0 0 30px rgba(37, 99, 235, 0.5)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.6)',
        'glow-xl': '0 0 60px rgba(37, 99, 235, 0.7)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};