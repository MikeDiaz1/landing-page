import React, { Component } from 'react';

import logo from '../../../public/img/Logo-white.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src={logo} alt="Upropos: The Future of Crowdfunding"></img>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">

                    </div>
                </div>
            </nav>
        )
    }
}