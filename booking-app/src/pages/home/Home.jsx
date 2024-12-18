import Feature from "../../components/feature/Feature"
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertList/PropertyList"
import "./home.css"
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
export default Home