import logo from './logo.svg';
import style from './App.module.css';
import Homepage from './Components/Homepage/Homepage';
import Work from './Components/Work/Work';
import Testimonial from './Components/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Burt from './Components/Burt/Burt';
import BurtTestimonial from './Components/Burt-Testimonial/BurtTestimonial';
import Capabilities from './Components/Capabilities/Capabilities';
import WebDevelopment from './Components/Web Development/WebDevelopment';
import Contact from './Components/Contact/Contact';
import EmailText from './Components/EmailText/EmailText';


function App() {
  return (
    <>
      <Navbar />
      
      <Homepage />
      <Work />
      <Testimonial />
      <Burt />
      <BurtTestimonial />
      <Capabilities />
      <WebDevelopment />
      <Contact />
      <EmailText />
      
      <Footer />
    </>
  );
}

export default App;
