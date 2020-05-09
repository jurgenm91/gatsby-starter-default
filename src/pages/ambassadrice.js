import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Ambassadrice = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Ambassadrice tekst" } }) {
        html
      }
    }
  `)
  const html = data.markdownRemark.html
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Ambassadrice
