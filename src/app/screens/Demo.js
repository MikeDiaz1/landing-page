import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import WalletInfo from '../components/WalletInfo'
import WalletLookup from '../components/WalletLookup'
import Footer from '../components/Footer'

export default class Demo extends Component {

    render() {
        return (
            <div className="section is-large">
                <WalletInfo />
                <WalletLookup />
            </div>
        );
    }
}