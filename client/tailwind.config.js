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
        brand: {
          pink:   '#D300E5',
          purple: '#7600C4',
          cyan:   '#4CFFE7',
          dark:   '#08080F',
          card:   '#10101A',
          border: '#1A1A2E',
          muted:  '#6B7280',
        },
        t: {
          bg:        'var(--theme-bg)',
          'bg-alt':  'var(--theme-bg-alt)',
          card:      'var(--theme-card)',
          text:      'var(--theme-text)',
          secondary: 'var(--theme-text-secondary)',
          muted:     'var(--theme-text-muted)',
          faint:     'var(--theme-text-faint)',
          border:    'var(--theme-border)',
          input:     'var(--theme-input-bg)',
          result:    'var(--theme-result-card)',
          skeleton:  'var(--theme-skeleton)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine':      'shine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shine: {
          to: { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
