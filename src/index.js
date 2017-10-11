import React from 'react'
import ReactDOM from 'react-dom'

import './bulma/bulma.sass'
import 'font-awesome/scss/font-awesome.scss'
import '../img/TorontoSkyline-Darken.jpg'
import '../img/favicon.ico'

import Main from './Main'

const content = document.getElementById('content')
ReactDOM.render(<Main />, content)