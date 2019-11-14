import Koa from 'koa'
import { logger, applicationLogger, accessLogFunc} from './logger/log4'

const app = new Koa()
app.use(accessLogFunc())
applicationLogger.warn('date', new Date() + Math.random().toFixed(6))
app.on('error', function(err, ctx) {
  logger.error('error', err)
})
app.listen(5000, () => console.log(`✅  The server is running at 5000`))