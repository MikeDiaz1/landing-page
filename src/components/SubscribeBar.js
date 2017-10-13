import React, { Component } from 'react'

export default class SubscribeBar extends Component {
  render() {
    return (
      <div className="container is-fluid has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-2">
            <div className="field-label is-medium has-text-centered">
              <label className="label has-text-white">Looking for updates?</label>
            </div>
          </div>
          <div className="column is-8">
            <div className="field">
              <div className="control has-icons-left">
                <input className="input is-medium" type="email" placeholder="Email Address"></input>
                <span className="icon is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column is-2">
            <div className="field">
              <p className="control has-text-centered">
                <a className="button is-medium is-info">
                  <span>
                  Subscribe
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}