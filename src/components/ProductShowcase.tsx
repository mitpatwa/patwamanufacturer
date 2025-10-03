
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProducts } from "@/data/featured-products";
import { useCarousel } from "@/hooks/useCarousel";
import ProductCard from "@/components/ui/ProductCard";

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const productsPerPage = 3;
  
  const { currentIndex, totalSlides, nextSlide, prevSlide, goToSlide } = useCarousel({
    totalItems: featuredProducts.length,
    itemsPerPage: productsPerPage,
    autoAdvanceInterval: 8000
  });

  // Get current products for display
  const currentProducts = featuredProducts.slice(
    currentIndex * productsPerPage,
    (currentIndex + 1) * productsPerPage
  );

  return (
    <section className="py-32 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-50/30 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-primary/10 to-gold-100 text-primary rounded-full text-sm font-semibold tracking-wide">
              HANDPICKED FOR YOU
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium mb-5 leading-tight tracking-tight">
              Featured <span className="gradient-text">Collection</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg md:text-xl">
              Our most distinguished and sought-after pieces, each reflecting our dedication to quality and craftsmanship.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="h-14 w-14 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary shadow-card hover:shadow-glow transition-all duration-300"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="h-14 w-14 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary shadow-card hover:shadow-glow transition-all duration-300"
              aria-label="Next products"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {currentProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard
                {...product}
                isHovered={hoveredProduct === product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                animationDelay={idx * 0.2}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-12 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/collections" 
            className="magnetic-button inline-block py-4 px-12 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary rounded-full transition-all duration-300 text-lg font-semibold shadow-elegant hover:shadow-glow hover:scale-105"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
