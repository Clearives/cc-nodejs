const { resolve } = require('./utils');

module.exports = {
  entry: {
    app: resolve('app/main.js'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve('app'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          }
        }
      }
    ],
  },
  output: {
    path: resolve('dist'),
    filename: "[name].bundle.js",
    publicPath: '/'
  }
};