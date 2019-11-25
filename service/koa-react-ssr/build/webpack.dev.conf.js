const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const { resolve } = require('./utils');

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: resolve('app/tpl.html')
  })
]

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  plugins
})
