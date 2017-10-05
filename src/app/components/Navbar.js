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
                        <a className="nav-item" href="#">Section 1</a>
                        <a className="nav-item" href="#">Section 2</a>
                        <a className="nav-item" href="#">Section 3</a>
                        <a className="nav-item" href="#">Section 4</a>
                    </div>
                </div>
            </nav>
        )
    }
}