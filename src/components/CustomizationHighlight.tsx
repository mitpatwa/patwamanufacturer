
import { motion } from "framer-motion";

import { Palette, Scissors, Sparkles, Mail } from "lucide-react";

const CustomizationHighlight = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Colors",
      description: "Match any color palette with our precision dyeing services"
    },
    {
      icon: Scissors,
      title: "Bespoke Design",
      description: "Create unique pieces tailored to your exact specifications"
    },
    {
      icon: Sparkles,
      title: "Premium Materials",
      description: "Choose from silk, cotton, metallic threads, and luxury fibers"
    }
  ];

  const customExamples = [
    {
      image: "/public/lovable-uploads/03ee33a7-3f59-4a56-aef6-1d2c6e8182ff.png", // Replace with actual image paths
      description: "Bespoke drapery tieback with custom color matching."
    },
    {
      image: "/public/lovable-uploads/1467f076-5bc0-4a6a-a6b4-8b23cdb903c0.png",
      description: "Hand-crafted trim for historical furniture restoration."
    },
    {
      image: "/public/lovable-uploads/15a2a908-a2ee-4c7b-871d-322c41720c5c.png",
      description: "Unique cord design with metallic thread accents."
    },
     {
      image: "/public/lovable-uploads/168b44f5-ac13-4eec-bfca-6e0c3e6edce2.png",
      description: "Custom tassel creation for high-end interior design."
    },
     {
      image: "/public/lovable-uploads/1a2a40a3-9a8f-40f8-bf53-cbb5908b0788.png",
      description: "Elaborate braid pattern developed for a fashion project."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-sand-50 via-white to-sand-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-primary/10 to-gold-100 text-primary rounded-full text-sm font-semibold tracking-wide">
              BESPOKE CRAFTSMANSHIP
            </span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl font-medium mb-6 tracking-tight">
            Unlimited <span className="gradient-text">Customization</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every passementerie piece can be fully customized to match your vision. 
            From color matching to completely bespoke designs, our master craftspeople 
            bring your ideas to life with precision and artistry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-8 bg-white rounded-2xl shadow-card hover:shadow-floating border border-sand-100 group transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-gold-100 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="h-9 w-9 text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Custom Examples Section */}
        <div className="mt-12 mb-12">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-medium">
              Examples of Our Custom Work
            </h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {customExamples.map((example, index) => (
              <motion.div
                key={index}
                 initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <img
                  src={example.image}
                  alt={example.description}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-sm px-3 font-medium">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-10 md:p-12 rounded-3xl shadow-floating relative overflow-hidden"
        >
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-5">
              Ready to Create Something Unique?
            </h3>
            <p className="mb-8 opacity-95 text-lg max-w-2xl mx-auto">
              Share your vision with us and let our experts craft the perfect passementerie for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.a
                href="https://wa.me/919322140480?text=Hello! I'm interested in your custom passementerie services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-button bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-sand-50 transition-all duration-300 shadow-elegant"
              >
                Request Custom Quote
              </motion.a>
              <a
                href="mailto:patwamanufacturers@gmail.com"
                className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity px-6 py-3"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">patwamanufacturers@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizationHighlight;
