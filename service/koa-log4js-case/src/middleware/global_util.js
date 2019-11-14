import { logUtil } from '../utils/log4'
export default (ctx, next) => {
  global.logUtil = logUtil
  next()
}