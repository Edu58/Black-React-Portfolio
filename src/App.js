import logo from './logo.svg';
import style from './App.module.css';
import Homepage from './Components/Homepage/Homepage';
import Work from './Components/Work/Work';
import Testimonial from './Components/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Burt from './Components/Burt/Burt';
import BurtTestimonial from './Components/Burt-Testimonial/BurtTestimonial';


function App() {
  return (
    <>
      <Navbar />
      
      <Homepage />
      <Work />
      <Testimonial />
      <Burt />
      <BurtTestimonial />

      <Footer />
    </>
  );
}

export default App;
