import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from '../components/Footer'


export default class Demo extends Component {
    componentWillMount(){
    }

    render() {
        return (
            <div>
                <section id="section-1" className="hero is-white is-fullheight">
                    <section className="hero">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    Large title
                            </h1>
                                <h2 className="subtitle">
                                    Large subtitle
                            </h2>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </section>
            </div>
        );
    }
}