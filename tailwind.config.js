/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warm: {
          cream: '#FFFAF5',
          page: '#FFF7ED',
          orange: '#F97316',
          'orange-light': '#FFF7ED',
          coral: '#F43F5E',
          'coral-light': '#FFF1F2',
          dark: '#1C1917',
          gray: '#78716C',
          'gray-light': '#A8A29E',
          border: '#FED7AA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 24px -4px rgba(249, 115, 22, 0.08)',
        'warm-lg': '0 8px 40px -8px rgba(249, 115, 22, 0.12)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
