import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'
import background from '../images/hero-background.png'

export default function About() {
  
  return <div>
      <Helmet>
        <title>Vyntrade  About</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>
    <Layout>
      <div className="pad2" style={{backgroundImage: "url(" + background + ")"}}>
        <div className="page-container" >
 <h1>About</h1>
 <p>VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​
VYNTRADE has helped producers find the ‘Route to Market’ most appropriate for their business.​
</p><br/><p>VYNTRADE has also developed numerous brand concepts from inception to market implementation.​
VYNTRADE has evolved to offer a ‘Vineyard to Trade’ Direct Wine Sales Distribution Platform.</p>
<br/>
<br/>
<br/>
<br/>
 <h2 style={{textAlign: "left"}}>FOUNDERS​</h2>
 <p>Daniel A Nelson</p>
 <p>President & CEO – VYNTRADE LLC​</p>
 <br/>
<br/>
 <p>
 Dan started in the Adult Beverage Industry by working as a Restaurant Manager and Wine Steward at the world renowned Bern’s Steak House. He then moved to the distributor side of the business working for Premier Beverage in Orlando Florida calling on A-list white table cloth restaurants and the top retail accounts.​
 </p><br/><p>He then moved to the supplier side by working for Paterno Imports where he was promoted from District Manager to Divisional Manager to Regional Manager where he was responsible for over 100 distributors in 18 states.​
 </p><br/><p>Dan then worked for several California wineries as East Coast Manager and National Sales Manager including EOS Estate Winery, Norman Vineyards and Castoro Cellars.​
 Dan has over 30 years experience in brand marketing and national sales.​
 </p>

 <br/>
<br/>
  <p>Steven M Rowland</p>
 <p>Founder and Managing Director– VYNTRADE LLC</p>
 <br/>
<br/>
 <p>
 Steve started in the Adult Beverage Industry by working as a Hotel Food and Beverage Director with Omni and Marriott. He then moved to the distributor side of the business working for Broudy-Kantor and Forman Brothers (R-NDC)​
 </p><br/><p>​

He then moved to the supplier side by working for Terlato Wines, Pasternak (Chateau Lafite), Billington Wines and finally Vintners Alliance, an InVivo Wine Company. where he was National Accounts Manager, National Sales Manager and Managing Director.
 </p><br/><p>Steve has traveled extensively throughout Europe, South America and the United States, working closely with the winemaking teams to develop, successful private label and Vine to Wine Brands that are sold in the US.​

​

Steve has over 30 years experience in brand marketing and National sales.​
 </p>
 </div>
 </div>
  </Layout>
    </div>
}
