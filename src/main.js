import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import store from './state/store'
import './global.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
