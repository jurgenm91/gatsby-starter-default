import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Kaart = ({ titel, afbeelding, knopTekst, knopURL }) => {
  const getCardImage = () => {
    if (afbeelding === "presentatrice") {
      return (
        <div className="text-center ">
          <Img fixed={data.presentatriceImage.childImageSharp.fixed} />
        </div>
      )
    } else if (afbeelding === "ambassadrice") {
      return (
        <div className="text-center ">
          <Img fixed={data.ambassadriceImage.childImageSharp.fixed} />
        </div>
      )
    } else if (afbeelding === "contact") {
      return (
        <div className="text-center ">
          <Img fixed={data.contactImage.childImageSharp.fixed} />
        </div>
      )
    }
  }

  const data = useStaticQuery(graphql`
    query {
      presentatriceImage: file(relativePath: { eq: "dina-presentatrice.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      ambassadriceImage: file(relativePath: { eq: "dina-ambassadrice.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      contactImage: file(relativePath: { eq: "dina-contact.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="col-span-1 rounded overflow-hidden shadow-lg">
      <p className="titel text-center p-5 text-sm">{titel}</p>
      {getCardImage({ data, afbeelding })}
      <p className="py-5 mx-auto text-center">
        <a
          href="/"
          className="text-sm bg-transparent hover:bg-black text-black  hover:text-white py-2 px-4 border border-black hover:border-transparent"
        >
          {knopTekst}
        </a>
      </p>
    </div>
  )
}
export default Kaart
