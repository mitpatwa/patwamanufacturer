
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

  return (
    <section className="py-16 bg-gradient-to-b from-sand-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Unlimited Customization Possibilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every passementerie piece can be fully customized to match your vision. 
            From color matching to completely bespoke designs, our master craftspeople 
            bring your ideas to life with precision and artistry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-sand-200"
            >
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center bg-primary text-primary-foreground p-8 rounded-lg"
        >
          <h3 className="font-serif text-2xl font-medium mb-4">
            Ready to Create Something Unique?
          </h3>
          <p className="mb-6 opacity-90">
            Share your vision with us and let our experts craft the perfect passementerie for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/inquiry"
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-sand-50 transition-colors duration-300"
            >
              Request Custom Quote
            </Link>
            <a
              href="mailto:patwamanufacturers@gmail.com"
              className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              patwamanufacturers@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizationHighlight;
