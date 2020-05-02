import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MenuKaarten from "../components/menuKaarten"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-wrap mb-20">
      <div className="w-1/4 mr-10">
        <Image />
      </div>
      <div
        className="bg-shadow bg-yellow-300 h-10 w-full max-w-3xl absolute"
        style={{
          zIndex: "-1",
          filter: "blur(30px)",
          transform: "rotate(-15deg)",
          marginTop: "180px",
          opacity: "0.4",
        }}
      ></div>
      <div className="w-1/2 flex-grow">
        <p>Hallo,</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo
          ipsum metus, nec commodo magna ultrices vitae. Duis rhoncus ligula ac
          massa pellentesque tempor. Pellentesque interdum massa mauris, ut
          vulputate enim gravida quis. Praesent dignissim nunc quis vestibulum
          iaculis. Praesent ac ex malesuada, cursus nulla ut, feugiat velit.
        </p>
        <p>
          Vestibulum a tortor gravida, placerat sem eget, cursus felis. In
          placerat nisi a eros vehicula ornare. Cras eleifend, augue et
          hendrerit ornare, nisi ante ornare nisi, nec congue lorem metus vel
          velit. Nunc mauris metus, placerat at ipsum eu, efficitur interdum
          turpis. Cras sed tempus libero, ut tincidunt nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo
          ipsum metus, nec commodo magna ultrices vitae. Duis rhoncus ligula ac
          massa pellentesque tempor. Pellentesque interdum massa mauris, ut
          vulputate enim gravida quis.
        </p>
      </div>
    </div>
    <MenuKaarten />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
