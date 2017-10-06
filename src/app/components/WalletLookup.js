import React, { Component } from 'react'
import { CONTRACT } from '../contract.js'


export default class WalletInfo extends Component {
    constructor() {
        super()
        this.state = {
            balance: 0,
            tokens: 0
        }
    }

    changeHandler(e) {
        if (!web3.isAddress(e.target.value)) {
            this.setState({
                balance: 0,
                tokens: 0
            })
            return;
        }

        web3.eth.getBalance(e.target.value, (err, bal) => {
            if (!err) {
                this.setState({
                    balance: web3.fromWei(bal, 'ether').toNumber()
                })
            }
            console.log(err)
        })

        CONTRACT.balanceOf(e.target.value, (err, tkns) => {
            if (!err) {
                this.setState({
                    tokens: web3.fromWei(tkns, 'ether').toNumber()
                })
            }
            console.log(err)
            return;
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Wallet Lookup</h1>
                <div className="control">
                    <input className="input" type="text" placeholder="Search Address" value={this.state.coinbase}
                        onChange={this.changeHandler.bind(this)}></input>
                </div>
                <h2 className="subtitle">
                    Ether Balance: {this.state.balance} Ether
                </h2>
                <h2 className="subtitle">
                    Token Balance: {this.state.tokens} Tokens
                </h2>
            </div>
        )
    }
}