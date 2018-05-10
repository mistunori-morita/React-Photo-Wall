import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Comonents/Main'
import './styles/style.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,document.getElementById('root'))