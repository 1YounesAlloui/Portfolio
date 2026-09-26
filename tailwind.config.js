/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#05070d',
          surface: '#0b101c',
          panel: 'rgba(11, 16, 28, 0.68)',
          'panel-hover': 'rgba(16, 23, 40, 0.82)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(34, 211, 238, 0.45)',
          muted: '#8b9bb4',
          text: '#f1f5f9',
        },
        accent: {
          cyan: '#06b6d4',
          glow: '#22d3ee',
          blue: '#3b82f6',
          indigo: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'black-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.55), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'black-glass-hover': '0 16px 48px -4px rgba(0, 0, 0, 0.75), inset 0 1px 2px 0 rgba(255, 255, 255, 0.18), 0 0 25px -5px rgba(6, 182, 212, 0.15)',
        'black-glass-sm': '0 4px 20px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'light-diamond': '0 0 12px 1px rgba(255, 255, 255, 0.45), 0 0 24px 2px rgba(34, 211, 238, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
