import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import logo from '../../../public/img/Logo.png'
import WalletInfo from '../components/WalletInfo'
import WalletLookup from '../components/WalletLookup'
import SendTokens from '../components/SendTokens'
import Footer from '../components/Footer'


function Active(props) {
    const tab = props.tab;
    switch (tab) {
        case 0:
            return <WalletInfo />
            break;
        case 1:
            return <WalletLookup />
            break;
        case 2:
            return <SendTokens />
            break;
    }
}

export default class Demo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            classes: ["is-active", "", "", ""]
        }
    }

    tabHandler(tab) {
        this.setState({
            active: tab
        })

        switch (tab) {
            case 0:
                this.setState({
                    classes: ["is-active", "", "", ""]
                })
                break
            case 1:
                this.setState({
                    classes: ["", "is-active", "", ""]
                })
                break
            case 2:
                this.setState({
                    classes: ["", "", "is-active", ""]
                })
                break
        }
    }

    render() {
        return (
            <div>
                <div className="hero is-fullheight is-light">
                    <div className="container is-widescreen is-fullheight">
                        <div className="hero is-medium">
                            <div className="hero-head">
                                <a href="/">
                                    <span className="icon is-large has-text-dark fa-3x"><i className="fa fa-home"></i></span>
                                </a>
                            </div>
                            <div className="hero-body has-text-centered">
                                <div className="container">
                                    <h1 className="title">
                                    <img src={logo} alt="Upropos: The Future of Crowdfunding"></img>
                                    </h1>
                                    <h2 className="subtitle">
                                        The Future of Crowdfunding
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="box has-text-centered">
                            <div className="tabs is-centered is-boxed">
                                <ul>
                                    <li className={this.state.classes[0]}>
                                        <a onClick={() => { this.tabHandler(0) }}>
                                            <span className="icon is-small"><i className="fa fa-user"></i></span>
                                            <span>My Wallet</span>
                                        </a>
                                    </li>
                                    <li className={this.state.classes[1]}>
                                        <a onClick={() => { this.tabHandler(1) }}>
                                            <span className="icon is-small"><i className="fa fa-search"></i></span>
                                            <span>Wallet Lookup</span>
                                        </a>
                                    </li>
                                    <li className={this.state.classes[2]}>
                                        <a onClick={() => { this.tabHandler(2) }}>
                                            <span className="icon is-small"><i className="fa fa-paper-plane"></i></span>
                                            <span>Send Tokens</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="icon is-small"><i className="fa fa-shopping-cart"></i></span>
                                            <span>Buy Tokens</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Active tab={this.state.active} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}