import React, { Component } from "react"
import { Link } from "gatsby"

export let menuItems = [
  {
    linkNaam: "Presentatrice",
    linkUrl: "/",
  },
  {
    linkNaam: "Ambassadrice",
    linkUrl: "/",
  },
  {
    linkNaam: "Contact",
    linkUrl: "/",
  },
]

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="flex flex-wrap justify-end">
          {menuItems.map(items => (
            <li key={Math.random()} className="mr-5">
              <Link to={items.linkUrl}>{items.linkNaam}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
