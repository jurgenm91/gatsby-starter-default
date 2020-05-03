import React, { Component } from "react"
import { Link } from "gatsby"

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="flex flex-wrap justify-end">
          <li className="mr-5">
            <Link to="/">Presentatrice</Link>
          </li>
          <li className="mr-5">
            <Link to="/">Ambassadrice</Link>
          </li>
          <li className="mr-5">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}
