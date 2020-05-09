import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../components/kaart.css"
import { Link } from "gatsby"

const Kaart = ({ titel, afbeelding, knopTekst, knopURL }) => {
  const getCardImage = () => {
    if (afbeelding === "presentatrice") {
      return (
        <div className="text-center">
          <Img
            className="presentatrice"
            fixed={data.presentatriceImage.childImageSharp.fixed}
          />
        </div>
      )
    } else if (afbeelding === "ambassadrice") {
      return (
        <div className="text-center">
          <Img
            className="ambassadrice"
            fixed={data.ambassadriceImage.childImageSharp.fixed}
          />
        </div>
      )
    } else if (afbeelding === "contact") {
      return (
        <div className="text-center">
          <Img
            className="contact"
            fixed={data.contactImage.childImageSharp.fixed}
          />
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
    <div className="kaart col-span-1 rounded overflow-hidden shadow-md">
      <p className="titel font-bold text-center p-5 text-sm">{titel}</p>
      {getCardImage({ data, afbeelding })}
      <p className="py-5 mx-auto text-center">
        <Link
          to={knopURL}
          className="kaart-button text-sm font-normal bg-transparent hover:bg-black text-black  hover:text-white py-2 border border-black hover:border-transparent"
        >
          {knopTekst}
        </Link>
      </p>
    </div>
  )
}
export default Kaart
