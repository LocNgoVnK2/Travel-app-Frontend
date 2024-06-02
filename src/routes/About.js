import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/night.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function About() {
    return (
      <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        buttonClass="hide"
      ></Hero>
      <AboutUs></AboutUs>
        <Footer/>
      </>
    );
  }
  
  
  