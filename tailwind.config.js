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
        primary: {
          400: '#FFA789',
          500: '#FFA573',
        },
        'foreground-default': '#505050',
        'heading-black': '#333333',
        'subtitle-gray': '#909090',
        'label-gray': '#F2F2F2',
      },
      maxWidth: {
        '2xs': '10rem',
      },
      spacing: {
        144: '36rem',
      },
    },
  },
  plugins: [],
}
