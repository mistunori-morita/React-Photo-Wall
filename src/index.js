import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Comonents/Main'
import './styles/style.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rooteReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Comonents/App'


const store = createStore(rooteReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,document.getElementById('root'))