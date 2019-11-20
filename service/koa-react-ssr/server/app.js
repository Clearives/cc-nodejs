import koa from 'koa'
import React from 'react'
import { renderToString } from "react-dom/server"

const app = new koa()
const App = () => (
  <div>
    <h3>Koa SSR</h3>
    <a href="https://github.com/Clearives">https://github.com/Clearives</a>
  </div>
)

app.use(ctx => {
  ctx.body = renderToString(<App/>)
})

app.listen(5000, () => console.log(`✅  The server is running at 5000`))