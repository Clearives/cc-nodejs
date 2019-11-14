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