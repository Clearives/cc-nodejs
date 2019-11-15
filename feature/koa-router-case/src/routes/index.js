import path from 'path'
import glob from 'glob'
import koaCompose from 'koa-compose'

export default () => {
  let routers = []
  glob.sync(path.resolve(__dirname, '*.js'))
    .filter(item => item.indexOf('index.js') === -1)
    .map(item => {
      let _router = require(item).default
      routers.push(_router.routes());
      routers.push(_router.allowedMethods());
    });
  return koaCompose(routers)
}