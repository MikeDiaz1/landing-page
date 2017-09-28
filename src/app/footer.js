var React = require('react');
require('./css/footer.scss');

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <FooterHeaders />
                <div id='footer-bottom'>
                    bottom
                </div>
            </footer>
        );
    }
}

class FooterHeaders extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            headers: ['Catagories', 'Help', 'My Account', 'About', 'Social']
        };
    }

    render (){
        var headers = this.state.headers;
        headers = headers.map( function(item, index) {
            return (
                <div>{item}</div>
            );
        })
        return(
            <div id='footer-top'>{headers}</div>
        );
    }
}

module.exports = Footer;