import React, { Component } from 'react'

export default class Navbar extends Component {

  scrollTo(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="img/Logo-white.png" alt="Upropos: The Future of Crowdfunding"></img>
          </a>

          <a className="navbar-item is-hidden-desktop" href="https://twitter.com/upropos1" target="_blank">
              <span className="icon" style={{ color: '#FFF' }}>
                <i className="fa fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item is-hidden-desktop" href="https://www.facebook.com/Upropos1/" target="_blank">
              <span className="icon" style={{ color: '#FFF' }}>
                <i className="fa fa-lg fa-facebook-square"></i>
              </span>
            </a>
            <a className="navbar-item is-hidden-desktop" href="https://www.instagram.com/upropos1/" target="_blank">
              <span className="icon" style={{ color: '#FFF' }}>
                <i className="fa fa-lg fa-instagram"></i>
              </span>
            </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="nav-item" onClick={() => this.scrollTo('section-1')}>Home</a>
            <a className="nav-item" onClick={() => this.scrollTo('section-2')}>About</a>
            <a className="nav-item" onClick={() => this.scrollTo('section-3')}>Contact</a>
            <a className="nav-item" href="/Demo">Demo</a>

            <a className="navbar-item" href="https://twitter.com/upropos1" target="_blank">
              <span className="icon" style={{ color: '#FFF' }}>
                <i className="fa fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.facebook.com/Upropos1/" target="_blank">
              <span className="icon" style={{ color: '#FFF' }}>
                <i className="fa fa-lg fa-facebook-square"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.instagram.com/upropos1/" target="_blank">
              <span className="icon" style={{ color: '#FFF' }}>
                <i className="fa fa-lg fa-instagram"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }


}