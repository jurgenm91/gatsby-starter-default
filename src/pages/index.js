import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kaart from "../components/kaart"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
      <Kaart
        titel="Presentatrice"
        afbeelding="presentatrice"
        knopTekst="Lees meer"
      />
      <Kaart
        titel="Ambassadrice"
        afbeelding="ambassadrice"
        knopTekst="Lees meer"
      />
      <Kaart titel="Contact" afbeelding="contact" knopTekst="Lees meer" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
