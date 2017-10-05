import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './bulma/bulma.sass'
import Home from './screens/Home'

export default class App extends Component {
    render (){
        return(
            <Router>
                <Switch>
                    <Route exact path='*' component={Home}/>
                </Switch>
            </Router>
        );
    }
}