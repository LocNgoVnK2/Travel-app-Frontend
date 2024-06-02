import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ServiceImg from "../assets/1.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
export default function Service() {
    return (
      <>    
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        buttonClass="hide"
      ></Hero>
         <Trip></Trip>
        <Footer/>
      </>
    );
  }
  
  
  