/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        success: '#10B981',
        alert: '#EF4444'
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(15, 23, 42, 0.45)'
      }
    }
  },
  plugins: []
}
