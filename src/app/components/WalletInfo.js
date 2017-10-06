import React, { Component } from 'react'
import { CONTRACT } from '../contract.js'


export default class WalletInfo extends Component {
    constructor() {
        super()
        this.state = {
            coinbase: '0x00',
            balance: 0,
            tokens: 0
        }
    }

    updateChecker() {
        setInterval(() => {
            web3.eth.getCoinbase((err, cb) => {
                if (!err) {
                    if (this.state.coinbase != cb) {
                        this.update()
                    }
                }
            })
        }, 1000)
    }

    componentWillMount() {
        this.update()
        this.updateChecker()
    }

    update() {
        web3.eth.getCoinbase((err, cb) => {
            if (!err) {
                this.setState({
                    coinbase: cb
                })

                CONTRACT._eth.getBalance(this.state.coinbase, (err, bal) => {
                    if (!err) {
                        this.setState({
                            balance: web3.fromWei(bal, 'ether').toNumber()
                        })
                    }
                    else {
                        console.log(err)
                    }
                })

                CONTRACT.balanceOf(this.state.coinbase, (err, tkns) => {
                    if (!err) {
                        this.setState({
                            tokens: web3.fromWei(tkns, 'ether').toNumber()
                        })
                    }
                    else {
                        console.log(err)
                    }
                })
            }
            else {
                console.log(err)
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Your Wallet</h1>
                <h2 className="subtitle">
                    Address: {this.state.coinbase}
                </h2>
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