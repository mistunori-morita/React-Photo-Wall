import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Comonents/Main'
import './styles/style.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rooteReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Comonents/App'
import thunk from 'redux-thunk'
import database from './database/config'

const store = createStore(rooteReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,document.getElementById('root'))