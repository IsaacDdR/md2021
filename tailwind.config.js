module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        vinos: "url('~/assets/img/vino-background.jpg')",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
