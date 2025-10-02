
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="py-20 bg-sand-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold-200/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Welcome to our esteemed manufacturing company, where innovation, quality, and creativity converge to bring you a remarkable array of tassels, tiebacks, lace, cords, and trimmings. With a legacy of excellence, we have become a leading force in the industry, trusted by designers, decorators, and artisans worldwide.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At our cutting-edge manufacturing facility, we combine traditional craftsmanship with advanced technology to produce an extensive range of exquisite trimmings. Our skilled artisans and designers work in harmony to create products that reflect meticulous attention to detail and showcase the latest trends in decorative accents.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every piece we create celebrates the perfect balance between heritage techniques and modern innovation, ensuring that each product meets the highest standards of quality and design excellence.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="magnetic-button inline-flex items-center text-primary hover:text-accent transition-colors font-semibold">
                <span className="mr-2 border-b-2 border-current pb-1">Discover Our Manufacturing Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src="/lovable-uploads/aa29cfdf-058d-401f-9252-d8254e582349.png" 
                alt="Luxury tassels collection" 
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center p-6 shadow-floating rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <p className="font-serif text-center text-lg text-primary">
                  Crafting excellence since our founding
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
