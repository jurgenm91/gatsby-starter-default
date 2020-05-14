import React, { Component } from "react"
import { Link } from "gatsby"

export let menuItems = [
  {
    linkNaam: "Presentatrice",
    linkUrl: "/presentatrice",
    activeCss: "presentatrice-active",
  },
  {
    linkNaam: "Ambassadrice",
    linkUrl: "/ambassadrice",
    activeCss: "ambassadrice-active",
  },
  {
    linkNaam: "Contact",
    linkUrl: "/contact",
    activeCss: "contact-active",
  },
]

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="flex flex-wrap justify-end">
          {menuItems.map(items => (
            <li key={Math.random()} className="mr-5">
              <Link activeClassName={items.activeCss} to={items.linkUrl}>
                {items.linkNaam}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
