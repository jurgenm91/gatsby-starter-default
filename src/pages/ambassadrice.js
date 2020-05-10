import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Ambassadrice = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Ambassadrice tekst" } }) {
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
        <div className="w-full mb-10">
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

export default Ambassadrice
