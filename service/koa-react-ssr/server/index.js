require('@babel/register')({
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ],
  plugins: [
    [
      "css-modules-transform",
      {
        camelCase: false,
        extensions: [".css", ".less"],
      }
    ],
    "dynamic-import-node"
  ],
});
require('./app.js');
