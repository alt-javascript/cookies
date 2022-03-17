export default [
  // Monolithic ESM bundle for browser module implementation.
  {
    input: 'index.js',
    treeshake: true,
    output: {
      file: 'dist/alt-javascript-cookies-esm.js',
      format: 'esm',
      strict: false,
      externalLiveBindings: false,
      freeze: false,
      sourcemap: false,
      sourcemapExcludeSources: true,
    },
  },
  // IIFE bundle for browsers global import.
  {
    input: 'browser/cookies.js',
    treeshake: true,
    output: {
      file: 'dist/alt-javascript-cookies-iife.js',
      format: 'iife',
      name: 'cookies',
      strict: false,
      externalLiveBindings: false,
      freeze: false,
      sourcemap: false,
      sourcemapExcludeSources: true,
    },
  },
];
