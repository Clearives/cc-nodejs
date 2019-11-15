import Koa from 'koa'
import routers from './routes';

const app = new Koa()
app.use(routers())
app.on('error', (err, ctx) => {
  console.log('error', err)
})
app.listen(5000, () => console.log(`✅  The server is running at 5000`))