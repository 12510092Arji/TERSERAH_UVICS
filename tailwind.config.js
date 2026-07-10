/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#2E8B7D",
        aqua: "#6FC6C1",
        jasmine: "#F8D184",
        porcelain: "#FAFAF7",
        graphite: "#2B2B2B",
        border: "#e4e9e5",
        muted: "#eef2f0",
        "muted-foreground": "#56655f",
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: { center: true, padding: '1.25rem' },
    },
  },
  plugins: [],
}
