import AboutHeader from "../components/About/AboutHeader";
import Team from "../components/About/Team";
import Header from "../components/Header";
// import AboutStart from "../components/About/AboutStart";
import Footer from "../components/Footer";

import FinalCarousel from "../components/About/FinalCarousel";
import Cards from "../components/About/Cards";
import Chatbot from "../components/About/Chatbot";
function About() {
  return (
    <>
      <Header />
      <Chatbot/>
      <FinalCarousel/>
      <Cards/>
      <Footer />
    </>
  );
}

export default About;
