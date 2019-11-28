import koaRouter from 'koa-router'
import urlCtrl from '../controllers/urlCtrl'

const Router = new koaRouter({
  prefix: '/shorturl'
})

Router.get('/', async (ctx, next) => {
  ctx.body = 'shorturl'
  await next()
})

Router.post('/create', urlCtrl.create)
Router.post('/find', urlCtrl.findOne)

export default Router