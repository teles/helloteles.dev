module.exports = {
  purge: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js',
    ],
    options: {
      safelist: ['prose', 'prose-sm', 'm-auto', 'text-left'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['iA Writer Quattro', 'monospace'],
      },      
    }
  },
  variants: {},
  plugins: [],
}