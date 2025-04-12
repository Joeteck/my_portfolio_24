import type { Config } from 'tailwindcss';

export default {
  mode: 'jit',
  darkMode: 'class', // Dark mode enabled
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        hover_light: 'var(--hover-light)',
        hover_dark: 'var(--hover-dark)',
        error: 'var(--error)',
        success: 'var(--success)',
        black: 'var(--black)',
        white: 'var(--white)',
      },
      fontFamily: {
        sans: ['-apple-system', 'Roboto', 'Allura', 'Playfair Display', 'Arial', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'slide-in-top': 'slideInTop 1.2s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 1.2s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "1" },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "1" },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
