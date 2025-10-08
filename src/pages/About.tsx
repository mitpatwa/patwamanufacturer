
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
        <title>About Patwa Manufacturer - 30+ Years Passementerie Manufacturing Excellence India</title>
        <meta name="description" content="Established manufacturer of luxury passementerie since 1990. Specializing in custom tassels, fringes, braids & decorative trims. 50+ artisans, export to 30+ countries. ISO certified manufacturing facility in India." />
        <meta name="keywords" content="about Patwa Manufacturer, passementerie manufacturer India, tassel manufacturer heritage, luxury trim factory, handcrafted passementerie, decorative trim manufacturer, artisan tassel maker, ISO certified trim manufacturer, export passementerie manufacturer, wholesale tassel supplier, passementerie manufacturing facility" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/about" />
        <meta property="og:title" content="About Patwa Manufacturer - Passementerie Manufacturing Excellence" />
        <meta property="og:description" content="30+ years manufacturing luxury passementerie. 50+ artisans. Export to 30+ countries." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Patwa Manufacturer",
            "description": "Heritage craftsmanship meets modern innovation in luxury passementerie manufacturing since 1990",
            "url": "https://patwamanufacturer.lovable.app/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Patwa Manufacturer",
              "foundingDate": "1990",
              "description": "Leading manufacturer of luxury passementerie, tassels, fringes, braids and decorative trims in India",
              "numberOfEmployees": "50",
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India"
                }
              },
              "award": ["ISO 9001:2015 Certified", "Export Excellence Award"],
              "knowsAbout": ["Passementerie Manufacturing", "Tassel Production", "Fringe Manufacturing", "Braid Weaving", "Custom Trim Design"],
              "slogan": "Crafting Luxury, One Thread at a Time"
            }
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://patwamanufacturer.lovable.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://patwamanufacturer.lovable.app/about"
              }
            ]
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
