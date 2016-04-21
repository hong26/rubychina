import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

const Home=React.createClass({
  render(){
    return(
      <div>
        <p>heoll</p>
        <Link to='no'>404</Link>
      </div>
    )
  }
})
export default Home;
