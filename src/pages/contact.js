import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import MenuKaarten from "../components/menuKaarten"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { IconContext } from "react-icons"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Contact tekst" } }) {
        html
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth: 850, maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="flex mb-10 flex-wrap">
        <div className="w-full mb-10 text-center">
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
          />
        </div>

        <div className="w-full sm:w-3/4 mb-10 pl-4 pr-4 ">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <p>
              <label>
                <p>
                  <input
                    className="w-full p-2 border-solid border border-black"
                    type="text"
                    name="name"
                    placeholder="Wat is jouw naam?"
                  />
                </p>
              </label>
            </p>
            <p>
              <label>
                <p>
                  <input
                    className="w-full p-2 border-solid border border-black"
                    type="text"
                    name="voornaam"
                    placeholder="Wat is jouw voornaam?"
                  />
                </p>
              </label>
            </p>
            <p>
              <label>
                <p>
                  <input
                    className="w-full p-2 border-solid border border-black"
                    type="email"
                    name="email"
                    placeholder="Wat is jouw e-mailadres?"
                  />
                </p>
              </label>
            </p>
            <p>
              <textarea
                className="w-full p-2 border-solid border border-black"
                rows="10"
                name="bericht"
                placeholder="Wat wil jij mij vertellen?"
              ></textarea>
            </p>
            <p>
              <button
                className="hover:bg-black text-black hover:text-white py-2 border border-black hover:border-transparent w-1/4"
                type="submit"
              >
                Verzenden
              </button>
            </p>
          </form>
        </div>
        <div
          className="w-full sm:w-1/4 mb-20 flex flex-wrap"
          style={{ borderLeft: "solid 1px #dadada", paddingLeft: "20px" }}
        >
          <div className="w-full">
            <p>Social media:</p>
          </div>
          <div className="w-1/4" style={{ marginTop: "-250px" }}>
            <IconContext.Provider value={{ size: "2em" }}>
              <a href="https://www.facebook.com/dinatersagoofficial/">
                <FaFacebookSquare />
              </a>
            </IconContext.Provider>
          </div>
          <div className="w-1/4" style={{ marginTop: "-250px" }}>
            <IconContext.Provider value={{ size: "2em" }}>
              <a href="https://www.instagram.com/dina_tersago/">
                <FaInstagram />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-full">
          <MenuKaarten />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
