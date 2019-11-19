import Koa from 'koa'
import routers from './routes'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import path from 'path'


const app = new Koa()
const main = koaStatic(path.join(__dirname + '/../public'))
app.use(main)
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024
  }
}))
app.use(routers())
app.on('error', (err, ctx) => {
  console.log('error', err)
})
app.listen(5000, () => console.log(`✅  The server is running at 5000`))