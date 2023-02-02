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
      },
      animation: {
        jump: 'jump 0.25s ease-in-out 1',
        wiggle: 'wiggle .5s ease-out infinite',
        blob: "blob 15s infinite",
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(0px, -6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          }
        }
      }
    },
  },
  plugins: [],
}
