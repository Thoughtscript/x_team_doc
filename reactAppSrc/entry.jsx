'use strict'

/**
 *  Entry.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './Components/App'
import { createStore } from 'redux'
import { SafeStorage } from './Components/Redux/CachedReducer'

ReactDOM.render(
  (<Provider store={createStore(SafeStorage)}>
    <App/>
  </Provider>),
  document.getElementById('react_app_root')
)
