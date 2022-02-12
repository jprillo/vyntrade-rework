import React from "react"
import Layout from '../components/layout2'
import wineone from '../images/Pres VynTrade + Molinos-07.jpg'
import winetwo from '../images/Pres VynTrade + Molinos-08.jpg'
import winethree from '../images/Pres VynTrade + Molinos-09.jpg'
import winefour from '../images/Pres VynTrade + Molinos-10.jpg'

export default function Portfolio() {
  
  return <div>
      <Layout>
<h1>Portfolio</h1>
<div className="portfolio-container">
  <div>
     <img width = "100%" src={wineone} alt="wineone"/>
  </div>
  <div>
     <img width = "100%" src={winetwo} alt="wineone"/>
  </div>

  <div>
     <img width = "100%" src={winethree} alt="wineone"/>
  </div>

  <div>
     <img width = "100%" src={winefour} alt="wineone"/>
  </div>



</div>
  </Layout>
  </div>
}
