import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#4a2d8a',
          medium: '#6b4db0',
          light: '#9b7ed4',
          50: '#f3f1f9',
          100: '#e8e5f4',
        },
        status: {
          teal: '#2A8A76',
          'teal-light': '#E6F4F1',
          orange: '#D87228',
          'orange-light': '#FDF0E6',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        text: {
          primary: '#212529',
          secondary: '#495057',
          muted: '#6C757D',
        },
      },
      fontFamily: {
        heading: ['var(--font-baloo2)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 24px rgba(74,45,138,0.12)',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float-orb': 'floatOrb 12s ease-in-out infinite',
        'float-orb-reverse': 'floatOrbReverse 16s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatOrb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.97)' },
        },
        floatOrbReverse: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-25px, 20px) scale(0.96)' },
          '66%': { transform: 'translate(20px, -15px) scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
