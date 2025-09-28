
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
    image: "/lovable-uploads/3d941b9a-d92e-4554-9eb2-c769ca603717.png",
    description: "Sophisticated cords for perfect finishing",
    link: "/collections/cords"
  },
  {
    id: 5,
    name: "Embellishments",
    image: "/lovable-uploads/aac96efb-8b36-4b12-95d5-f75359a54ab5.png",
    description: "Exquisite embellishments for luxury finishing touches",
    link: "/collections/embelishments"
  },
  {
    id: 6,
    name: "Window Treatments",
    image: "/lovable-uploads/22dbf7e8-5d12-4434-b5c6-0752a89dc5f2.png",
    description: "Luxury curtains and drapes with premium trims",
    link: "/collections/window-treatments"
  },
  {
    id: 7,
    name: "Furniture Trims",
    image: "/lovable-uploads/f4a2fabd-9067-47f8-8829-472487596808.png",
    description: "Decorative trims for upholstery and furniture",
    link: "/collections/furniture-trims"
  },
  {
    id: 8,
    name: "Tie-backs & Holders",
    image: "/lovable-uploads/97436c1f-0307-4f5c-9ae1-0a62b25fa834.png",
    description: "Elegant curtain tie-backs and decorative holders",
    link: "/collections/tie-backs"
  },
  {
    id: 9,
    name: "Table Linens",
    image: "/lovable-uploads/437a0270-a9b1-4eb4-84f9-a85debcfc454.png",
    description: "Luxury table linens with decorative fringe details",
    link: "/collections/table-linens"
  },
  {
    id: 10,
    name: "Outdoor Fabrics",
    image: "/lovable-uploads/1b6cb1fa-4e2d-4749-bfed-3ba4be2d0ce8.png",
    description: "Weather-resistant fabrics with elegant trim accents",
    link: "/collections/outdoor-fabrics"
  },
  {
    id: 11,
    name: "Home Accessories",
    image: "/lovable-uploads/ac771606-d69a-41ea-b768-9cdc879f906e.png",
    description: "Decorative accessories featuring handcrafted details",
    link: "/collections/home-accessories"
  },
  {
    id: 12,
    name: "Window Shades",
    image: "/lovable-uploads/4cedbac7-7b23-4c38-b534-aa37f45312a8.png",
    description: "Custom window shades with premium trim finishes",
    link: "/collections/window-shades"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((collection, index) => (
          <motion.div 
            key={collection.id}
            className="interactive-card relative overflow-hidden bg-white shadow-card rounded-2xl group"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -8 }}
          >
            <div
              className="relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl"
            >
               <img
                src={collection.image}
                alt={collection.name}
                loading="eager"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110 brightness-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Shimmer effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-all duration-700 ${
                hoveredIndex === index ? "translate-x-full" : "-translate-x-full"
              }`} />
              
              {/* Floating icon */}
              <div className={`absolute top-4 right-4 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                hoveredIndex === index ? "opacity-100 scale-110" : "opacity-0 scale-90"
              }`}>
                <span className="text-white text-xl">✨</span>
              </div>
            </div>

              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <motion.h3 
                  className="text-2xl md:text-3xl font-serif mb-3 text-white text-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {collection.name}
                </motion.h3>
                <motion.p 
                  className="mb-6 text-white/90 max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {collection.description}
                </motion.p>
                <Link 
                  to={collection.link} 
                  className={`magnetic-button inline-flex items-center transition-all duration-500 text-white group/link ${
                    hoveredIndex === index ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                >
                  <span className="mr-2 border-b border-white pb-1 group-hover/link:border-gold-300 transition-colors">
                    Explore Collection
                  </span>
                  <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/collections" 
            className="magnetic-button inline-block py-4 px-12 bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 transition-all duration-300 text-lg font-semibold rounded-full shadow-glow hover:shadow-floating"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
