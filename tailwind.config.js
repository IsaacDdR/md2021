const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Antique', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        vinos: "url('~/assets/img/vino-background.jpg')",
      }),
      plugins: [
        require('@tailwindcss/aspect-ratio'),
        // ...
      ],
    },
  },
}
