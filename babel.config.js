module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'umd',
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { modules: false }],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-syntax-dynamic-import'],
  ],
};
