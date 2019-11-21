import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>首页</h1>
    <Link to="/list">跳转列表页</Link>
  </div>
)
export default Home;