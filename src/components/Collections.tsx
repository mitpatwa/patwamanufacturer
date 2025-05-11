
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Tassels",
    image: "/lovable-uploads/42cae155-c4aa-43de-9284-a4e9742f2678.png",
    description: "Our signature tassels curated for the season",
    link: "/collections/tassels"
  },
  {
    id: 2,
    name: "Fringes",
    image: "/lovable-uploads/fa393750-1cde-4474-bbf5-a168728afc85.png",
    description: "Elegant fringes for sophisticated interiors",
    link: "/collections/fringes"
  },
  {
    id: 3,
    name: "Braids",
    image: "/lovable-uploads/168b44f5-ac13-4eec-bfca-6e0c3e6edce2.png",
    description: "Intricately woven braids for any space",
    link: "/collections/braids"
  },
  {
    id: 4,
    name: "Cords",
    image: "/lovable-uploads/c0e3994d-011f-4a47-b1ad-d1b74515cf8f.png",
    description: "Sophisticated cords for perfect finishing",
    link: "/collections/cords"
  }
];

const Collections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-28 bg-sand-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading">
            Our <span className="text-gold-600">Collections</span>
          </h2>
          <p className="section-subheading mx-auto">
            Discover our curated selection of luxurious trimmings and embellishments, 
            crafted with the highest standards of quality and design excellence.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((collection, index) => (
            <motion.div 
              key={collection.id}
              className="relative overflow-hidden bg-white shadow-md"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative h-[400px] md:h-[450px] overflow-hidden"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h3 className="text-2xl md:text-3xl font-serif mb-3 text-white">{collection.name}</h3>
                <p className="mb-6 text-white/90 max-w-xs">{collection.description}</p>
                <Link 
                  to={collection.link} 
                  className={`inline-flex items-center transition-all duration-500 text-white ${
                    hoveredIndex === index ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                >
                  <span className="mr-2 border-b border-white pb-1">Explore Collection</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/collections" className="btn-primary text-lg">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
