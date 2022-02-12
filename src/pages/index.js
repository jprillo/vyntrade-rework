import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'
import { Link} from 'gatsby'
import background from '../images/hero-background.png'
import wine from '../images/wine.png'
import client from '../images/clients.jpg'


export default function Home() {
  
  return <div>
       <Helmet>
        <title>Vyntrade  Vineyard to Trade</title>
        <meta name="description" content="Create and Implement Profitable Business Opportunities in the US Wine Market for ​Wine Producers through Direct Sales Strategies to Key Retail Clients." />
        <meta name="theme-color" content="black" />
      </Helmet>
  <Layout>
    <div className="hero" style={{textAlign: "center", backgroundImage: "url(" + background + ")"}}>
   <h1 className="hero-head">VINEYARD TO TRADE</h1>
   <div className="align-center mission" style ={{background: "white"}}>
      <h2>Our Mission</h2>
      <p>Create and Implement Profitable Business Opportunities in the US Wine Market for ​Wine Producers through Direct Sales Strategies to Key Retail Clients.</p>
    </div>
    </div>

  

    <div className="about align-center" >
      <div className="about-image" style={{overflow: "hidden"}}>
        <img  height="100%" src={wine} alt="about us"/>
      </div>
      <div className="about-description">
        <h3>About Us</h3>
        <p style={{marginBottom: "2em"}}>VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​</p>
       <Link  className= "primary-button" to ="/about">Learn More</Link>
      </div>
      </div>

      <div className="align-center about-description" style={{backgroundColor: "#9B1919"}}>
        <h3 style={{color: "white"}}>Portfolio</h3>
        <div className="index-portfolio">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link className= "secondary-button" to ="/portfolio">Learn More</Link>
      </div>

      <div className="align-center about-description" style={{paddingTop: "22vh", height: "60vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: "url(" + client + ")", }}>
    <h3>Our Client's Success Stories</h3>
        <Link className= "primary-button"  to ="/clients">Learn More</Link>
      </div>
   

  </Layout>
    
  
  
    </div>
}
