
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Craftsmanship from "../components/Craftsmanship";
import { Helmet } from 'react-helmet-async';
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us - Patwa Manufacturer</title>
      </Helmet>
      <Header />
      <main>
        <AboutHero />
        <Craftsmanship />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
