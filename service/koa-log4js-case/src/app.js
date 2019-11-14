import Koa from 'koa'
import path from 'path'
import log4js from 'koa-log4'

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'access.log'),
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'application.log')
    },
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: [ 'out' ], level: 'info' },
    access: { appenders: [ 'access' ], level: 'info' },
    application: { appenders: [ 'application' ], level: 'WARN'}
  },
  replaceConsole: true
})
const app = new Koa()
const logger = log4js.getLogger()
const applicationLogger = log4js.getLogger('application')
app.use(log4js.koaLogger(log4js.getLogger('access')))
logger.error('8888888')
applicationLogger.warn('date', new Date() + Math.random().toFixed(6))

app.listen(5000, () => console.log(`✅  The server is running at 5000`))