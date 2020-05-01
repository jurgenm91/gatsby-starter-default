import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Kaart = ({ titel, afbeelding, knopTekst, knopTitel }) => {
  const getCardImage = () => {
    if (afbeelding == "presentatrice") {
      return <Img fluid={data.presentatriceImage.childImageSharp.fluid} />
    } else {
      return <Img fluid={data.contactImage.childImageSharp.fluid} />
    }
  }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dina-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      presentatriceImage: file(relativePath: { eq: "dina-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      ambassadriceImage: file(relativePath: { eq: "dina-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      contactImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="kaart" style={{ width: "400px" }}>
      <p className="titel" style={{ textAlign: "center" }}>
        {titel}
      </p>
      {getCardImage({ data, afbeelding })}
    </div>
  )
}
export default Kaart
