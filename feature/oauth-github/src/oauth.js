import axios from 'axios';

const clientID = '8f50d1adfb3a4693132c'
const clientSecret = ''

export default async (ctx, next) => {
  try {
    const code = ctx.query.code;
    const tokenData = await axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token?' +
        `client_id=${clientID}&` +
        `client_secret=${clientSecret}&` +
        `code=${code}`,
      headers: {
        accept: 'application/json'
      }
    });
    const access_token = tokenData.data.access_token;
    const userData = await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${access_token}`
      }
    });
    ctx.body = {
      code: 200,
      data: {
        access_token,
        user: userData.data
      }
    }
  } catch (err) {
    ctx.body = {
      code: err.status || -1,
      message: err.message
    }
  }
  await next()
}