var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route} from 'react-router-dom';
require('./css/index.scss');

//Component imports
import Nav from './navBar';
import Footer from './footer';
import About from './about';

class App extends React.Component {
    render (){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/about' component={About}/>
                </div>
            </Router>
        );
    }
}

class Main extends React.Component {
    render (){
        return(
            <div>
                <Nav />
                <div id="content">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Footer />
            </div>
        );
    }
}

//Render to HTML DOM
ReactDOM.render(<App />, document.getElementById('content-wrapper'));