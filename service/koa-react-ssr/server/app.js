import koa from 'koa'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from "react-dom/server"
import Page from '../app/pages/index'
import renderHtml  from './utils/renderHtml'

const app = new koa()

app.use((ctx, next) => {
  let _content = renderToString(
    <StaticRouter location={ctx.url}>
      <Page />
    </StaticRouter>
  )
  ctx.body = renderHtml(_content)
  next();
})

app.listen(5000, () => console.log(`✅  The server is running at 5000`))