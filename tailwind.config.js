module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['components', 'src'],
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
