import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="hero is-primary is-fullheight">
                    <Navbar />
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Hero title
                            </h1>
                            <h2 className="subtitle">
                                Hero subtitle
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="hero is-white is-fullheight">
                </section>

                <section className="hero is-dark is-fullheight">
                </section>

                <section className="hero is-white is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Hero title
                            </h1>
                            <h2 className="subtitle">
                                Hero subtitle
                            </h2>
                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        );
    }
}