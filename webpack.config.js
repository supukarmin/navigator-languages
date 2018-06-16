const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const packageJson = require('./package.json');

const config = {
  target: 'node',
  externals: [ webpackNodeExternals() ],
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    //new UglifyJsPlugin(),
  ],
};

module.exports = config;
