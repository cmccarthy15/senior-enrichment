'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Routes from './Routes'
//import Navbar from './components/Navbar'
// import StudentList from './components/StudentList'

render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
);
