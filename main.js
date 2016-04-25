'use strict'
import ReactDOM from 'react-dom'

const routes = require('./routes')
require('bootstrap/dist/css/bootstrap')


ReactDOM.render(routes()
,  document.getElementById('app'));
