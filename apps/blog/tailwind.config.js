/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/lib/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gecko-green': '#00D98A',
        'gecko-dark': '#00B876',
        'privacy-blue': '#1E3A8A',
        'trust-blue': '#2563EB',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1)',
        'blue': '0 4px 14px rgba(37, 99, 235, 0.25)',
        'blue-lg': '0 8px 24px rgba(37, 99, 235, 0.35)',
        'green': '0 4px 14px rgba(0, 217, 138, 0.25)',
      },
    },
  },
  plugins: [],
};
