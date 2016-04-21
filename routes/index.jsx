import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Home from '../public/home'
import No from '../public/no'

module.exports = () =>{
  return (<Router history={createBrowserHistory()}>
    <Route path="/" component={Home} />
    <Route path='no' component={No} />
    <Route path='*' component={No} />
    </Router>)
}
