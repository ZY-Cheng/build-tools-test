// const rollup = require('rollup');
const babel = require('@rollup/plugin-babel').babel;
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
const url = require('@rollup/plugin-url');
const postcss = require('rollup-plugin-postcss');
const vue = require('rollup-plugin-vue');
const commonConfig = {
  plugins: [
    nodeResolve(),
    commonjs(),
    postcss(),
    vue(),
    babel({
      babelHelpers: 'runtime',
    }),
    json(),
    url(),
  ],
};

module.exports = [
  {
    input: 'src/index.js',
    output: [
      {
        file: `dist/rollup/${new Date().toLocaleString()}.bundle.iife.js`,
        format: 'iife', // amd, cjs, es, iife, umd, system
      },
      {
        file: `dist/rollup/${new Date().toLocaleString()}.bundle.es.js`,
        format: 'es',
      },
    ],
    ...commonConfig,
  },
];
