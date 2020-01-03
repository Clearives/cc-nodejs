const Koa = require('koa');
const axios = require('axios')


const app = new Koa()

app.use(async ctx => {
  try {
    const {token} = ctx.query
    const userData = await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${token}`
      }
    });
    ctx.body = {
      code: 200,
      data: {
        joke: 'severLess',
        userInfo: userData.data
      }
    }
  } catch (err) {
    ctx.body = {
      code: err.status || -1,
      message: err.message
    }
  }
})


module.exports = app.callback()