import React, { Component } from "react"
import { Link } from "gatsby"

export let menuItems = [
  {
    linkNaam: "Presentatrice",
    linkUrl: "/presentatrice",
  },
  {
    linkNaam: "Ambassadrice",
    linkUrl: "/ambassadrice",
  },
  {
    linkNaam: "Contact",
    linkUrl: "/contact",
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
