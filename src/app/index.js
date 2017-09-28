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
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
                <Footer />
            </div>
        );
    }
}

//Render to HTML DOM
ReactDOM.render(<App />, document.getElementById('content-wrapper'));