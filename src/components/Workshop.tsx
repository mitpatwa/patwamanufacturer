import { motion } from "framer-motion";

const Workshop = () => {
  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
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
              className="font-serif text-3xl md:text-4xl font-medium mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Workshop
            </motion.h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At our cutting-edge manufacturing facility, we combine traditional craftsmanship with advanced technology to produce an extensive range of exquisite trimmings. Our skilled artisans and designers work in harmony to create products that reflect meticulous attention to detail.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With our advanced production capabilities, we can fulfill orders of any size while maintaining the highest standards of quality. From small custom projects to large commercial orders, our workshop is equipped to meet the diverse needs of our clients.
            </p>
            <motion.a 
              href="https://wa.me/919322140480?text=Hello! I'm interested in learning more about your workshop and custom services."
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button inline-block py-3 px-8 bg-gradient-to-r from-primary to-gold-600 text-white hover:from-primary/90 hover:to-gold-700 transition-all duration-300 rounded-full font-semibold shadow-elegant"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make an Inquiry
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3" 
              alt="Workshop detail" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-4.0.3" 
              alt="Artisan working" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg mt-8"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1561913955-b55882fb77a7?ixlib=rb-4.0.3" 
              alt="Materials" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg mt-8"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3" 
              alt="Production process" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
