
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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Patwa Manufacturer - Premium Passementerie & Luxury Trimmings</title>
        <meta name="description" content="Leading manufacturer of luxury passementerie, custom tassels, fringes, braids & decorative trims. Handcrafted quality for interior designers worldwide. Made in India." />
        <meta name="keywords" content="passementerie manufacturer, luxury trimmings, custom tassels, decorative fringes, handcrafted braids, curtain tiebacks, textile trims, interior design accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Patwa Manufacturer - Premium Passementerie",
            "description": "Leading manufacturer of luxury passementerie, custom tassels, fringes, braids & decorative trims",
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
    </div>
  );
};

export default Index;
