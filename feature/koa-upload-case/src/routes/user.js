import koaRouter from 'koa-router'

const Router = new koaRouter({
  prefix: '/user'
})

Router.get('/', async (ctx, next) => {
  ctx.body = 'user'
  await next()
})
Router.get('/:id', async (ctx, next) => {
  ctx.body = `user:${ctx.params.id}`
  await next()
})
export default Router