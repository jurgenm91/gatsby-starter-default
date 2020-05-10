import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Presentatrice = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Presentatrice tekst" } }) {
        html
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const html = data.markdownRemark.html
  return (
    <Layout>
      <div className="flex mb-10">
        <div className="w-1/4 mr-10">
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
          />
        </div>
        <div className="w-1/2">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </Layout>
  )
}

export default Presentatrice
