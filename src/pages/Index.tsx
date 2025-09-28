
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import ProductShowcase from "../components/ProductShowcase";
import Story from "../components/Story";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Workshop from "../components/Workshop";
import PassementerieSelector from "../components/PassementerieSelector";
import CustomizationHighlight from "../components/CustomizationHighlight";
import WhatsAppFloat from "../components/WhatsAppFloat";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import InteractiveSearch from "../components/InteractiveSearch";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Manufacturer of Passementerie, Custom Tassels, Fringes, Braids & Decorative Trimmings | Patwa Manufacturer</title>
        <meta name="description" content="Leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings in India. Premium handcrafted quality for interior designers worldwide. Custom orders available." />
        <meta name="keywords" content="manufacturer of passementerie, custom tassels manufacturer, fringes manufacturer, braids manufacturer, decorative trimmings manufacturer, passementerie supplier, custom tassels supplier, luxury passementerie, handcrafted tassels, decorative fringes, textile braids, curtain trimmings, interior design accessories, passementerie India, tassels India, fringes India, braids India" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Manufacturer of Passementerie, Custom Tassels, Fringes, Braids & Decorative Trimmings",
            "description": "Leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings in India. Premium handcrafted quality for interior designers worldwide.",
            "url": "https://patwamanufacturer.lovable.app/",
            "mainEntity": {
              "@type": "ManufacturingBusiness",
              "name": "Patwa Manufacturer",
              "specialty": "Passementerie and Decorative Trims"
            }
          }`}
        </script>
      </Helmet>
      <Header />
      <main role="main">
        <Hero />
        <Collections />
        <ProductShowcase />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <CustomizationHighlight />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Story />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Workshop />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <PassementerieSelector />
        </motion.div>
        <TestimonialsCarousel />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Newsletter />
        </motion.div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <InteractiveSearch />
    </div>
  );
};

export default Index;
