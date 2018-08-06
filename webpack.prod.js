const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const DIST_DIR = `${path.resolve()}/public/dist`;

module.exports = {
  entry: {
    app: `${path.resolve()}/src/client/index.js`,
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: DIST_DIR
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: '../index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new WorkboxPlugin({
      globDirectory: 'dist',
      globPatterns: ['**/*.{html,js,css}'],
      swDest: path.join(DIST_DIR, 'sw.js'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
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
