
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import InteractiveSearch from "../components/InteractiveSearch";

// Lazy load non-critical components
const Collections = lazy(() => import("../components/Collections"));
const ProductShowcase = lazy(() => import("../components/ProductShowcase"));
const Story = lazy(() => import("../components/Story"));
const Newsletter = lazy(() => import("../components/Newsletter"));
const Workshop = lazy(() => import("../components/Workshop"));
const PassementerieSelector = lazy(() => import("../components/PassementerieSelector"));
const CustomizationHighlight = lazy(() => import("../components/CustomizationHighlight"));
const TestimonialsCarousel = lazy(() => import("../components/TestimonialsCarousel"));

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
        <Suspense fallback={<div className="h-20 animate-pulse bg-muted" />}>
          <Collections />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <ProductShowcase />
        </Suspense>
        <Suspense fallback={<div className="h-64 animate-pulse bg-muted" />}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <CustomizationHighlight />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Story />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Workshop />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="h-64 animate-pulse bg-muted" />}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <PassementerieSelector />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="h-64 animate-pulse bg-muted" />}>
          <TestimonialsCarousel />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-muted" />}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Newsletter />
          </motion.div>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
      <InteractiveSearch />
    </div>
  );
};

export default Index;
