import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Comonents/Main'
import './styles/style.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rooteReducer from './redux/reducer'


const store = createStore(rooteReducer)

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,document.getElementById('root'))