import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './home';
import List from './list';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
  </Switch>
)
