/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['General Sans', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero': "url('/assets/img/hero.svg')",
        'footer': "url('/assets/img/footer.svg')"
      }
    },
  },
  plugins: [],
}
