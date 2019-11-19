import koaRouter from 'koa-router'
import fs from 'fs'
import path from 'path'

const Router = new koaRouter({
  prefix: '/api'
})

Router.get('/', async (ctx, next) => {
  ctx.body = 'api'
  await next()
})
Router.post('/upload', async (ctx, next) => {
  const file = ctx.request.files.file
  const readStream = fs.createReadStream(file.path)
  const writeStream = fs.createWriteStream(`${path.join(__dirname, "../../public/upload/")}${file.name}`)
  readStream.pipe(writeStream)
  ctx.body = {
    code: 200,
    path: `http://localhost:5000/upload/${file.name}`
  }
  await next()
})
export default Router