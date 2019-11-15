import KoaRouter from 'koa-router'

const Router = new KoaRouter({
  prefix: '/api'
})

Router.get('/', (ctx) => {
  ctx.body = 'api index'
})
export default Router