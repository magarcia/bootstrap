const production = process.env.NODE_ENV !== 'production';

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    content: ['./src/index.html', './src/**/*.svelte'],
    whitelistPatterns: [/svelte-/],
    enabled: production // disable purge in dev
  },
};