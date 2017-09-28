var React = require('react');
require('./css/footer.scss');

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <FooterTop />
                <FooterBottom />
            </footer>
        );
    }
}

class FooterTop extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            headers: ['Catagories', '', 'Help', 'My Account', 'About', 'Social'],
            listItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
        };
    }

    render (){
        var headers = this.state.headers;
        var listItems = this.state.listItems;

        listItems = listItems.map( function(item, index) {
            return(
                <div><a href='#'>{item}</a></div>
            )
        })


        headers = headers.map( function(item, index) {
            return (
                <div>
                    <strong>{item}</strong>
                    {listItems}
                </div>
            );
        })

        return(
            <div id='footer-top'>{headers}</div>
        );
    }
}

class FooterBottom extends React.Component {

    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div id='footer-bottom'>
                <hr></hr>
                <span>&copy; Michael Diaz-Stewart</span>
            </div>
        );
    }

}

module.exports = Footer;