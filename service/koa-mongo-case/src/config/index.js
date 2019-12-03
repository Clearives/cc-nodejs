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
  }
}