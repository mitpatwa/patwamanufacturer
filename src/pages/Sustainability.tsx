import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Sustainability = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Sustainability & Ethical Manufacturing | Eco-Friendly Passementerie | Patwa Manufacturer</title>
      <meta name="description" content="Sustainable passementerie manufacturing with eco-friendly materials, ethical production, and waste reduction. Learn about our commitment to environmental responsibility and heritage preservation." />
      <meta name="keywords" content="sustainable textiles, eco-friendly trims, ethical manufacturing, sustainable passementerie, green production, waste reduction, fair trade textiles, sustainable craftsmanship" />
      <link rel="canonical" href="https://patwamanufacturer.lovable.app/sustainability" />
      <meta property="og:title" content="Sustainability & Ethical Manufacturing | Patwa Manufacturer" />
      <meta property="og:description" content="Discover our commitment to sustainable passementerie manufacturing with eco-friendly materials and ethical production practices." />
      <meta property="og:url" content="https://patwamanufacturer.lovable.app/sustainability" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sustainability - Patwa Manufacturer",
          "description": "Our commitment to sustainable and ethical passementerie manufacturing",
          "url": "https://patwamanufacturer.lovable.app/sustainability",
          "publisher": {
            "@type": "Organization",
            "name": "Patwa Manufacturer",
            "logo": {
              "@type": "ImageObject",
              "url": "https://patwamanufacturer.lovable.app/images/patwa-logo.png"
            }
          }
        }`}
      </script>
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-center">
              Our Commitment to <span className="text-gold-600">Sustainability</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-lg text-muted-foreground">
                We are committed to sustainable practices in our passementerie craftsmanship, 
                ensuring that our artisanal traditions respect both our heritage and our environment.
              </p>
            </div>
          </motion.div>

          {/* Placeholder content sections */}
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-medium mb-6">Sustainable Sourcing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-medium mb-6">Ethical Production & Waste Reduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                className="bg-secondary p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-medium mb-4">Sustainable Materials</h2>
                <p className="text-muted-foreground">
                  We carefully source our materials from sustainable suppliers, 
                  prioritizing natural fibers and eco-friendly production methods.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-medium mb-4">Waste Reduction</h2>
                <p className="text-muted-foreground">
                  Our workshop implements comprehensive waste reduction practices, 
                  recycling materials whenever possible and minimizing our environmental impact.
                </p>
              </motion.div>

              <motion.div 
                className="bg-secondary p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-medium mb-4">Ethical Production</h2>
                <p className="text-muted-foreground">
                  We ensure fair labor practices throughout our supply chain and manufacture,
                  supporting artisan communities and traditional craft skills.
                </p>
              </motion.div>

              <motion.div 
                className="bg-secondary p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-medium mb-4">Heritage Preservation</h2>
                <p className="text-muted-foreground">
                  By sustaining ancient craft techniques, we preserve cultural heritage
                  while evolving our practices to meet modern environmental standards.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sustainability;
