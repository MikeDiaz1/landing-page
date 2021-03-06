import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubscribeBar from '../components/SubscribeBar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="section-1" className="parallax hero is-dark is-fullheight">
          <Navbar />
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="subtitle is-1">
                We Are Upropos
              </h1>
              <h2 className="title is-1">
                The Future of Crowdfunding
              </h2>
            </div>
          </div>
        </section>

        <section id="section-2" className="hero is-light is-fullheight">

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Section 1
              </h1>
              <h2 className="subtitle">
                Subtitle 1
              </h2>
            </div>
          </div>

          <section className="hero is-dark">
            <div className="hero-body">
              <SubscribeBar />
            </div>
          </section>
        </section>

        <section id="section-3" className="hero is-white is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Section 3
              </h1>
              <h2 className="subtitle">
                Subtitle 3
              </h2>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    )
  }
}