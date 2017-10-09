const path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'BookingCalendar',
    publicPath: '/lib/',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
