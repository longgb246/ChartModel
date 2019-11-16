import React, {Component} from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Login from './views/Login'
import Home from './views/Home'
import 'antd/dist/antd.css'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}