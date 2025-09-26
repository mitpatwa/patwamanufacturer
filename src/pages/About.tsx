
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
        <title>About Patwa Manufacturer - Leading Passementerie & Luxury Trims Manufacturer</title>
        <meta name="description" content="Learn about Patwa Manufacturer, a leading producer of luxury passementerie and decorative trims. Our expertise in handcrafted tassels, fringes, and braids spans generations." />
        <meta name="keywords" content="about Patwa Manufacturer, passementerie company, luxury trims manufacturer, handcrafted textiles, textile manufacturing India, decorative trims company" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/about" />
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
