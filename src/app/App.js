import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './screens/Home'
import NotFound from './screens/NotFound'

export default class App extends Component {
    render (){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='*' component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}