import koaRouter from 'koa-router'
import userCtrl from '../controllers/userCtrl'

const Router = new koaRouter({
  prefix: '/api'
})

Router.get('/', async (ctx, next) => {
  ctx.body = 'api'
  await next()
})
.get('/getUser', userCtrl.findAll)
.post('/getUserByMobile', userCtrl.findOne)
.post('/createUser', userCtrl.create)
.post('/signIn', userCtrl.signIn)
.get('/getUserInfo', userCtrl.getUserInfo)


export default Router