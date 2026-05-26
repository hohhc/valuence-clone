/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#3CA96C',
        gray: {
          dark: '#1a1a1a',
          medium: '#595757',
          light: '#F7F7F7',
          border: '#e5e7eb',
        }
      },
      fontFamily: {
        en: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        ja: ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tighter: '-.04em',
        tightest: '-.06em',
      },
      fontSize: {
        // 本家のヒーロー級・ディスプレイ級サイズ
        'display-sm': ['clamp(2.5rem, 6vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'display':    ['clamp(3rem, 8vw, 5rem)',     { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(3.5rem, 10vw, 6.5rem)',{ lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'hero':       ['clamp(3rem, 9vw, 6rem)',     { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      transitionTimingFunction: {
        // 本家の滑らかなイージング
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.6)', opacity: '0' },
        },
        scrollHint: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-out infinite',
        'scroll-hint': 'scrollHint 2.4s cubic-bezier(0.25, 1, 0.5, 1) infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) both',
      }
    },
  },
  plugins: [],
}
