import koaRouter from 'koa-router'

const router = new koaRouter({
  prefix: '/app'
})

router.get('/', async (ctx) => {
  const data = await test();
  logUtil.log.info('date', new Date() + Math.random())
  logUtil.logApp.warn('date', new Date() + Math.random())
  ctx.body = 'app' + data
})

function test() {
  return new Promise((resolve, reject) => {
    resolve('ok');
  })
}

export default router