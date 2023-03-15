// tsup.config.js
export default {
  entryPoints: ['src/server.ts'],
  format: ['cjs'],
  bundle: true,
  loader: {
    '.sqlite': 'file',
  },
};
