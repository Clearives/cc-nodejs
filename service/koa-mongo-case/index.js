const env = process.env.NODE_ENV || 'development';
const src = env === 'production' ? './build/app' : './src/app';

if (env === 'development') {
  require('@babel/register');
}
require(src);
