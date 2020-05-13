import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import MenuKaarten from "../components/menuKaarten"

const Ambassadrice = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Ambassadrice tekst" } }) {
        html
        frontmatter {
          image {
            childImageSharp {
              fixed(width: 850, height: 500, quality: 90) {
                ...GatsbyImageSharpFixed
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
        <div className="w-full mb-10 text-center">
          <Img
            fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
          />
        </div>
        <div className="w-3/4 mb-10 pl-4  ">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div
          className="w-1/4 mb-20 "
          style={{ borderLeft: "solid 1px #dadada", paddingLeft: "20px" }}
        >
          <p>Zijbalk</p>
        </div>
        <div className="w-full">
          <MenuKaarten />
        </div>
      </div>
    </Layout>
  )
}

export default Ambassadrice
