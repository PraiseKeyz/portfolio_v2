import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
      },
      fontFamily: {
        primary: ['Michroma', 'sans-serif'],
        secondary: ['Ubuntu', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-in': 'slideInAnimation 0.5s ease-out',
        'fade-in': 'fadeInAnimation 0.6s ease-out',
        'glow': 'glowAnimation 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        slideInAnimation: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowAnimation: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
