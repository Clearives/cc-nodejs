import React, { useEffect } from 'react'
import Head from 'next/head'
import nookies from 'nookies'
import Nav from '../components/nav'
import service from '../utils/http'

const isDev = process.env.NODE_ENV === 'development'
const config = {
  client_id: "8f50d1adfb3a4693132c",
  authorize_uri: "https://github.com/login/oauth/authorize",
  redirect_uri: isDev ? "http://localhost:3000/auth" : `${process.env.baseUrl}/auth`,
}

const Home = ({ initData }) => {
  useEffect(() => {
    console.log(initData)
  }, [])
  const userInfo = initData && initData.userInfo
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">next hub</h1>
        {
          !initData ?
            <a className="description" href={`${config.authorize_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`}>oauth github</a> :
            <div>
              <p className="description">登录账户：{userInfo.login}</p>
              <a className="description" href={userInfo.url}>{userInfo.name}</a>
              <img className="avatar" src={userInfo.avatar_url} alt="" />
            </div>
        }
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          display: block;
          text-align: center;
        }
        .avatar {
          display: block;
          margin: 0 auto;
          width: 100px;
          height: 100px;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = async ctx => {
  const cookie = nookies.get(ctx)
  const { data } = await service('get', `/api/github/user?token=${cookie.token}`);
  return { initData: data };
}

export default Home
