import React from 'react'
import ReactDOM from 'react-dom'
import App from './routers'
import { Provider } from 'react-redux'
import store from '@/store'
import 'style/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)