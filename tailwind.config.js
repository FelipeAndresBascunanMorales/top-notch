/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'slow-spin': 'spin 12s linear infinite',
        'reverse-spin': 'reverse-spin 10s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        'matrix-float': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
          },
          '25%': {
            transform: 'translateY(-15px) translateX(5px)',
          },
          '50%': {
            transform: 'translateY(0) translateX(10px)',
          },
          '75%': {
            transform: 'translateY(15px) translateX(5px)',
          }
        },
        'matrix-pulse': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: 0.8,
          },
          '50%': { 
            transform: 'scale(1.1) rotate(180deg)',
            opacity: 1,
          }
        },
        'matrix-glow': {
          '0%, 100%': { 
            opacity: 0.3,
            transform: 'scale(1.2)',
          },
          '50%': { 
            opacity: 0.6,
            transform: 'scale(1.4)',
          }
        }
      },
    },
  },
  plugins: [],
};