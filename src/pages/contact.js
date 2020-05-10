import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Contact tekst" } }) {
        html
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth: 900, quality: 90) {
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
      <div className="flex mb-10 flex-wrap">
        <div className="w-1/2">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div className="w-full mb-10">
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
