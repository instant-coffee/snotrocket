import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import PowerForm from "../components/powerForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Input ride power</h1>
    <PowerForm zone="Zone 7 Neuromuscular" powerLables={["3 second power", "5 second power", "10 second power" ]} />
    <PowerForm zone="Zone 6 Anerobic" powerLables={["30 second power", "1 minute power", "2 minute power" ]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Power profile</Link>
  </Layout>
)

export default IndexPage
