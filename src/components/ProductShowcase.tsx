
import { useState, useRef } from "react";
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
    <section className="py-28">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
              Featured <span className="text-gold-600">Collection</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Our most distinguished and sought-after pieces, each reflecting our dedication to quality and craftsmanship.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next products"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {currentProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              {...product}
              isHovered={hoveredProduct === product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              animationDelay={idx * 0.2}
            />
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
        
        <div className="mt-16 text-center">
          <Link to="/collections" className="inline-block py-3 px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-lg">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
