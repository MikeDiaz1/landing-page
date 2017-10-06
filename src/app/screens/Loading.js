import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var Demo;

const loading = document.getElementById('loading')
const content = document.getElementById('content')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//Wait for web3 before loading page
async function startUp() {

    //Found web3
    if (typeof web3 !== 'undefined') {

        //Run all web3 reliant JavaScript here + render page
        Demo = require('./Demo.js').default
        content.remove()
        ReactDOM.render(<Demo />, loading)
        return
    }

    //No web3, keep checking...
    await sleep(2000)
    startUp()
}

export default class Loading extends Component {
    componentWillMount() {
        startUp()
    }

    render() {
        return (
            <div>
                <section className="hero is-white is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Waiting for web3...
                            </h1>
                            <h2 className="subtitle">
                                This app requires an Ethereum compatible browser (Mist, MetaMask)
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}