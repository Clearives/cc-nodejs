import koa from 'koa'
import React from 'react'
import koaStatic from 'koa-static'
import path from 'path'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from "react-dom/server"
import { Provider } from 'react-redux';
import AppRouter from '../app/containers/router'
import renderHtml from './utils/renderHtml'
import getStore from './utils/store';


const app = new koa()
app.use(koaStatic(path.resolve(__dirname,'../dist')))
app.use((ctx, next) => {
  const store = getStore()
  const initialState = store.getState()
  console.log(initialState);
  let _content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url}>
        <AppRouter />
      </StaticRouter>
    </Provider>
  )
  ctx.body = renderHtml(_content)
  next();
})

app.listen(5000, () => console.log(`✅  The server is running at 5000`))