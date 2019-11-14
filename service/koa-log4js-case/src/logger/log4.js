import log4js from 'koa-log4'
import config from './log4-conf'

log4js.configure(config)

const logger = log4js.getLogger()
const applicationLogger = log4js.getLogger('application')
const accessLogFunc = () => log4js.koaLogger(log4js.getLogger('access'))

export {
  logger,
  applicationLogger,
  accessLogFunc
}