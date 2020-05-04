/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Menu from "../components/menu"
import MobileMenu from "../components/mobilemenu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
      <div className="header-wrap flex flex-wrap">
        <div className="w-1/2">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
        </div>
        <MobileMenu />
        <div className="w-1/2 mt-8">
          <Menu />
        </div>
      </div>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, <a href="/">Dina Tersago</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
