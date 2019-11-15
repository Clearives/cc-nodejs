import KoaRouter from 'koa-router'
import api from './api'

const Router = new KoaRouter
Router.use(api.routes(), api.allowedMethods())
Router.get('/', (ctx) => {
  ctx.body = 'index'
})
export default Router