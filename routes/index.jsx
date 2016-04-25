import React from 'react'
// import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Home from '../public/home'
import No from '../public/no'
import Topics from '../public/topics'
import Topic from '../public/topic'
import Paging from '../public/paging'

module.exports = () =>{
  return (<Router history={createBrowserHistory()}>
    <Route path="/" component={Paging} />
    <Route path='/home' component={Home} />
    <Route path='/topics/:item' component={Topics} />
    <Route path='/topic/:itemId' component={Topic} />
    <Route path='*' component={No} />
    </Router>)
}
