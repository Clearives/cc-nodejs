import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

const Home = () => (
  <div>
    <h1>首页</h1>
    <Link to="/list">跳转列表页</Link>
  </div>
)

const list = [
  '一二三四五',
  '上山打老虎',
  '老虎在睡觉',
  '上去就一脚'
]

const List = () => (
  <ul>
    {list.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
  </Switch>
)
