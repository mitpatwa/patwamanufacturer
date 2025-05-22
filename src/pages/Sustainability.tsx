
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Sustainability = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
