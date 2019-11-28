import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import routers from './routes'
import { db } from './config'

console.log(db)

mongoose.connect(db.mongodbUrl, {
  useCreateIndex: true,
  useNewUrlParser:true,
  useFindAndModify:false, 
  useUnifiedTopology: true
}).then(() => {
  console.log(`✅  Mongodb is Connected.Please have a great coding.`);
})

const app = new Koa()
app.use(bodyParser())
app.use(routers())
app.on('error', (err, ctx) => {
  console.log('error', err)
})
app.listen(5000, () => console.log(`✅  The server is running at 5000`))