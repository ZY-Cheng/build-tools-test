// const webpack = require("webpack");
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const rootDir = path.resolve(__dirname, '../../');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(rootDir, 'dist/webpack'),
    filename: `[name].${new Date().toLocaleString()}.[contenthash].js`,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
