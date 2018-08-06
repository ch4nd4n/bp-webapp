const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const DIST_DIR = `${path.resolve()}/dist`;

module.exports = {
  entry: {
    app: './src/client/index.js',
    vendor: ['react', 'react-dom']
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: DIST_DIR
  },
  plugins: [
    new CleanPlugin([DIST_DIR]),
    new CopyWebpackPlugin([
      { from: 'src/client/manifest.json', to: `${DIST_DIR}` },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'index.html'
    }),
    new workboxPlugin.GenerateSW({
      swDest: `${DIST_DIR}/sw.js`,
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ],
  }
};
