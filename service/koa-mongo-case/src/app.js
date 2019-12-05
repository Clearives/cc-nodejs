import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import Redis from 'ioredis'
import session from 'koa-session2'
import routers from './routes'
import Store from './config/Store';
import { db, redisConfig, redisIp } from './config'

// const redis = new Redis(redisConfig)
// const redis = new Redis.Cluster(redisIp)

mongoose.connect(db.mongodbUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log(`✅  Mongodb is Connected.Please have a great coding.`);
})

const app = new Koa()
const _store = new Store()
app.use(session({
  store: _store,
  key: "clearives"
}));
app.use(async (ctx, next) => {
  ctx.state.redis = _store.redis
  await next()
})
app.use(bodyParser())

app.use(routers())

app.on('error', (err, ctx) => {
  console.log('error', err)
})
app.listen(5000, () => console.log(`✅  The server is running at 5000`))