/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,svelte,js,ts}', // Scans all HTML, Svelte, JS, and TS files in the src directory
    './public/index.html', // Scans the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

