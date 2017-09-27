var React = require('react');
var ReactDOM = require('react-dom');

require('./styles.scss');

//Create a component
var Grid = React.createClass({
    render: function(){
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
});

ReactDOM.render(<Grid />, document.getElementById('grid-wrapper'));