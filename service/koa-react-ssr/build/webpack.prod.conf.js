const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
  optimization: {
    // split vendor js into its own file
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          filename: 'js/vendor.[chunkhash].js',
          priority: 10,
          enforce: true,
        },
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        cache: true,
        parallel: true,
        uglifyOptions: {
          // https://stackoverflow.com/questions/55989693/warnings-is-not-a-supported-option-error-from-uglifyjs
          warnings: false,  
          comments: false,
          sourceMap: true
        }
      })
    ]
  },
  plugins
})
