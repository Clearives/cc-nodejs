const redisIp = '127.0.0.1'
export default {
  db: {
    mongodbUrl: 'mongodb://localhost:27017/jwt'
  },
  secret: 'clearives-secret',
  redisConfig: {
    "port": 6379,
    "prefix": "cc-nodejs:",
    "host": "127.0.0.1",
    "family": 4,
    "db": 0
  },
  redisIp: [{
    port: 7000,
    host: redisIp
  }, {
    port: 7001,
    host: redisIp
  }, {
    port: 7002,
    host: redisIp
  }, {
    port: 7003,
    host: redisIp
  }, {
    port: 7004,
    host: redisIp
  }, {
    port: 7005,
    host: redisIp
  }]
}