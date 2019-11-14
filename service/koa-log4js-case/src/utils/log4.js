import log4js from 'koa-log4'
import config from './log4-conf'

log4js.configure(config)

const logger = log4js.getLogger()
const applicationLogger = log4js.getLogger('application')
const accessLogFunc = log4js.koaLogger(log4js.getLogger('access'))

const logUtil = {}
logUtil.logErr = (err) => {
  var logText = new String();
    logText += "\n" + "*************** error log start ***************" + "\n";
    logText += "err name: " + err.name + "\n";
    logText += "err message: " + err.message + "\n";
    logText += "err stack: " + err.stack + "\n";
    logText += "*************** error log end ***************" + "\n";
    logger.error(logText)
    return logText;
}
logUtil.log = logger
logUtil.logApp = applicationLogger

export {
  accessLogFunc,
  logUtil
}