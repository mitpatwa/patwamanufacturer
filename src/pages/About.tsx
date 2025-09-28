
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
        <title>About Patwa Manufacturer - Interior Décor Manufacturers India | Export Quality Decorative Trims</title>
        <meta name="description" content="Learn about Patwa Manufacturer, leading interior décor manufacturers India specializing in export quality decorative trims, premium trimmings for upholstery, and artisan curtain accessories." />
        <meta name="keywords" content="interior décor manufacturers India, export quality decorative trims, premium trimmings for upholstery, artisan curtain accessories, about Patwa Manufacturer, passementerie company, luxury trims manufacturer, handcrafted textiles, textile manufacturing India" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/about" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Patwa Manufacturer",
            "description": "Leading interior décor manufacturers India specializing in export quality decorative trims",
            "url": "https://patwamanufacturer.lovable.app/about",
            "mainEntity": {
              "@type": "ManufacturingBusiness",
              "name": "Patwa Manufacturer",
              "description": "Leading manufacturer of luxury passementerie and decorative trims",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "specialty": "Interior Décor and Decorative Trims Manufacturing"
            }
          }`}
        </script>
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
