import koaRouter from 'koa-router'

const Router = new koaRouter({
  prefix: '/api'
})

Router.get('/', async (ctx, next) => {
  ctx.body = 'api'
  await next()
})
export default Router