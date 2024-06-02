import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ContactImg from "../assets/1.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
export default function Contact() {
    /*
    cách nhận Prop thông qua route
    const location = useLocation();
    const { userName } = location.state || {}; // Lấy userName từ state, kiểm tra nếu state không tồn tại
  
    return (
      <>
        <h1>Contact</h1>
        <p>User Name: {userName}</p>
      </>
    );
    */
    return (
      <><Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        buttonClass="hide"
      ></Hero>
      <ContactForm></ContactForm>
        <Footer/>
      </>
    );
  }
  
  
  