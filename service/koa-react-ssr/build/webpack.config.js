const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (...arg) => path.join(__dirname, '..', ...arg);

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: resolve('app/tpl.html')
  })
]
module.exports = {
  mode: dev ? "development" : "production",
  context: resolve('app'),
  devtool: dev ? "inline-source-map" : "source-map",
  entry: {
    app: resolve('app/main.js'),
  },
  devServer: {
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve('app'),
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
  },
  plugins,
};