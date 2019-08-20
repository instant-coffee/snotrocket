import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import PowerForm from "../components/powerForm/powerForm"
import ScoreValue from "../components/scoreBlock/index.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Input ride power</h1>
    <PowerForm zone="Zone 7 Neuromuscular" powerLabels={["5 second power", "10 second power", "20 second power" ]} zoneT="zone7"/>
    <PowerForm zone="Zone 6 Anerobic" powerLabels={["30 second power", "1 minute power", "2 minute power" ]} zoneT="zone6"/> 
    <PowerForm zone="Zone 5 V02 max" powerLabels={["3 minute power", "5 minute power", "8 minute power" ]} zoneT="zone5"/> 
    <PowerForm zone="Zone 4 Threshold" powerLabels={["20 minute power", "60 minute power", "9 minute power" ]} zoneT="zone4" /> 
        
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Power profile</Link>
  </Layout>
)

export default IndexPage
