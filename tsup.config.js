// tsup.config.js
export default {
  entryPoints: ['src/index.ts'],
  format: ['cjs'],
  bundle: true,
  loader: {
    '.sqlite': 'file',
  },
};
