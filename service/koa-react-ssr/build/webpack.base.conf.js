const { resolve } = require('./utils');

const env = process.env.NODE_ENV;
console.log(env);

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
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader', 
          'css-loader' 
        ]
      }
    ],
  },
  output: {
    path: resolve('dist'),
    filename: "[name].bundle.js",
    publicPath: '/'
  }
};