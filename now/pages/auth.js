import React, { useEffect } from 'react'
import Router from 'next/router'
import { setCookie } from 'nookies'
import service from '../utils/http'


const Auth = ({ initData }) => {
  useEffect(() => {
    if(initData) {
      localStorage.setItem('token', initData.access_token)
      Router.push('/')
    } else {
      console.log('授权失败')
    }
  }, [])
  return null
}
Auth.getInitialProps = async ctx => {
  const { code } = ctx.query;
  const { data } = await service('get', `/api/oauth?code=${code}`);
  setCookie(ctx, 'token', data.access_token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
  return { initData: data };
}

export default Auth