import React, { Component } from 'react'
import NavMenu from '../../components/NavMenu'
import Header from '../../components/Header'
import { Switch, Route } from 'react-router-dom'

import MockOne from '../MockOne'
import MockOneResult from '../MockOneResult'

// import Content from '../../components/Content'
import './index.less'

export default class Home extends Component {

  render() {
    return (
      <div className='home'>
        <NavMenu/>
        <div className="content">
          <Header/>
          <div className="main">
            <Switch>
              <Route path='/home/one/result' component={MockOneResult}></Route>
              <Route path='/home/one' component={MockOne}></Route>
              <Route path='/home/two'></Route>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
