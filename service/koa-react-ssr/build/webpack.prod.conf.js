const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const { resolve } = require('./utils');

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: resolve('app/tpl.html'),  // 这里也可以是'app/tpl.html',建议用resolve，省的出错
    inject: 'body',
      minify: {
        removeComments: true, // 去除注释
        collapseWhitespace: true, // 去除空格
      }
  })
]

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js',
  },
  plugins
})
