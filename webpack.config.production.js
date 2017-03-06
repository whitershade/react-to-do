var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill',
         './src/index.js'],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
