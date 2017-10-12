import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Loading from './screens/Loading'

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Demo" component={Loading} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    )
  }
}