import React from "react"
import Layout from '../components/layout2'
import { Helmet } from 'react-helmet'
import background from '../images/hero-background.png'

export default function Clients() {
  
  return <div>
     <Helmet>
        <title>Vyntrade  Clients</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>
      <Layout>
      <div className="pad2" style={{backgroundImage: "url(" + background + ")"}}>
          <div className="page-container">
  <h1>Clients</h1>
  <div className="list">
<div >
<li>ABC – Florida​</li>
<li>Aldi – National​</li>
<li>Apple Jacks – Colorado​</li>
<li>Bottle Stores – NY​</li>
<li>Calvert Woodley – Washington, DC​</li>
<li>Cost Plus – National​</li>
<li>Costco – Regional​</li>
<li>Fairway – CT​</li>
<li>Fresh Market – National​</li>
<li>Frugal MacDoogal – Regional​</li>
<li>Goody Liquor – TX​</li>
<li>HEB Central Market – TX​</li>
  </div>
  <div >
<li>Harris Teeter – Regional​</li>
<li>Kreston – Delaware​</li>
<li>Kroger’s – Regional​</li>
<li>Lidl – Regional​</li>
<li>Publix – Regional​</li>
<li>Safeway - Regional​</li>
<li>Southeast Grocer's - Regional</li>
<li>Spec’s Liquor - TX</li>
<li>Total Wine & More - National</li>
<li>Wegman’s - Regional</li>
<li>Whole Foods – National​</li>
</div>

</div>
</div>
</div>
  </Layout>
  </div>
}
