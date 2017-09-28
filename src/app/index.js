var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route} from 'react-router-dom';

require('./css/index.scss');

class App extends React.Component {
    render (){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Grid}/>
                    <Route exact path='/about' component={About}/>
                </div>
            </Router>
        );
    }
}

class About extends React.Component {
    render(){
        return(
            <p>This is an about page</p>
        );
    }

}

class Grid extends React.Component {
    render (){
        return(
            <div id='grid'>
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
        );
    }
}

//Render to HTML DOM
ReactDOM.render(<App />, document.getElementById('content-wrapper'));