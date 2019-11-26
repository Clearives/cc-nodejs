import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="home">
    <h1>首页</h1>
    <Link to="/list">跳转列表页></Link>
  </div>
)
export default Home;