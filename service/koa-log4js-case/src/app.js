import Koa from 'koa'
import appRoute from './routes/app'
import globalUtil from './middleware/global_util'
import { accessLogFunc } from './utils/log4'

const app = new Koa()
// global.logUtil
app.use(globalUtil)
app.use(accessLogFunc)
app.use(appRoute.routes())
app.on('error', function(err, ctx) {
  logUtil.log.error('error', err)
})
app.listen(5000, () => console.log(`✅  The server is running at 5000`))