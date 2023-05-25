/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA789',
        'foreground-default': '#505050',
        'heading-black': '#333333',
        'subtitle-gray': '#909090',
      },
    },
  },
  plugins: [],
}
