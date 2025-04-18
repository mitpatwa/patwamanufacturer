
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Craftsmanship from "../components/Craftsmanship";
import Workshop from "../components/Workshop";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <Craftsmanship />
        <Workshop />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
