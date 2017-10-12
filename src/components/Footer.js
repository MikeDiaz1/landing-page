import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer has-text-white">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-4">
              <h1 className="title-2">Section 1</h1>
            </div>
            <div className="column is-4">
              <h1>Section 2</h1>
            </div>
            <div className="column is-4">
              <h1>Section 3</h1>
            </div>
          </div>
          <hr></hr>
          <p><small>&copy; 2017 All Rights Reserved, Upropos</small></p>
        </div>
      </footer>
    )
  }
}