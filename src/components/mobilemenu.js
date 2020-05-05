import React, { Component } from "react"
import { menuItems } from "../components/menu"
import { Link } from "gatsby"
import "../components/mobilemenu.css"

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-menu w-full mr-4">
        <label className="text-xl float-right cursor-pointer" htmlFor="toggle">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />

        <ul id="animatie" className="menu-list block text-center">
          {menuItems.map(items => (
            <li key={Math.random()} className="mb-10">
              <Link to={items.linkUrl}>{items.linkNaam}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
