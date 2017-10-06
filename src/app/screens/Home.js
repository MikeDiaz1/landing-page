import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="section-1" className="parallax hero is-primary is-fullheight">
                    <Navbar />
                </section>

                <section className="hero is-fullheight">
                    <section id="section-2" className="hero is-info is-bold is-medium">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    Medium title
                            </h1>
                                <h2 className="subtitle">
                                    Medium subtitle
                            </h2>
                            </div>
                        </div>
                    </section>

                    <section className="hero is-light is-large">
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
                </section>

                <section id="section-3" className="hero is-white is-fullheight">
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