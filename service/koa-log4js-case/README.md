# koa日志管理【koa-log4】

## 安装
```bash
npm i koa-log4 --save
```
## 使用
### 配置文件
```js
import path from 'path'
const logPath = path.resolve(__dirname, "../../logs/")
const config = {
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join(logPath, 'access.log'),
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join(logPath, 'application.log')
    },
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: [ 'out' ], level: 'info' },
    access: { appenders: [ 'access' ], level: 'info' },
    application: { appenders: [ 'application' ], level: 'WARN'}
  }
}

export default config


// use 
import config from './log4-conf'

log4js.configure(config)

```

### 暴露方法
```js
const logger = log4js.getLogger()
const applicationLogger = log4js.getLogger('application')
const accessLogFunc = log4js.koaLogger(log4js.getLogger('access'))
```
logger表示常规的日志，在控制台输出，applicationLogger表示应用级别的日志，会输出在对应的log文件，accessLogFunc用app.use()加载，所有访问级别的日志会全部输出在对应的日志文件。

这里我们将方法统一挂载在global上，供其它地方使用。

```js
import { logUtil } from '../utils/log4'
export default (ctx, next) => {
  global.logUtil = logUtil
  next()
}
```

### 日志级别
日志级别主要分为以下几种
- trace
- debug
- info
- warn
- error
- fatal

### 参考文档
[log4js-node](https://log4js-node.github.io/log4js-node/)