import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MenuKaarten from "../components/menuKaarten"

import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        html
      }
    }
  `)
  const content = data.markdownRemark.html
  window.onload = function html() {
    document.getElementById("home-content").innerHTML = content
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-wrap mb-20">
        <div className="w-1/4 mr-10">
          <Image />
        </div>
        <div
          className="bg-shadow bg-yellow-300 h-10 w-full max-w-3xl absolute"
          style={{
            zIndex: "-1",
            filter: "blur(30px)",
            transform: "rotate(-15deg)",
            marginTop: "180px",
            opacity: "0.4",
          }}
        ></div>
        <div id="home-content" className="w-1/2 flex-grow"></div>
      </div>
      <MenuKaarten />
    </Layout>
  )
}

export default IndexPage
