import KoaRouter from 'koa-router'

const Router = new KoaRouter({
  prefix: '/api'
})

Router.get('/', (ctx, next) => {
  ctx.status = 404
  ctx.method = 'OPTIONS'
  next()
})
export default Router