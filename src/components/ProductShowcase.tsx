import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Product data
const products = [
  {
    id: 1,
    name: "Victorian Rose Tassel",
    category: "Tassel",
    image: "/lovable-uploads/65e6e9e0-4108-42c6-ae93-a32021d3910d.png",
    price: "$125.00 / each",
    colorways: 8
  },
  {
    id: 2,
    name: "Chateau Fringe",
    category: "Fringe",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3",
    price: "$75.00 / yard",
    colorways: 22
  },
  {
    id: 3,
    name: "Cosimo Braid",
    category: "Braid",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3",
    price: "$62.50 / yard",
    colorways: 18
  },
  {
    id: 4,
    name: "Elegance Tassel",
    category: "Tassel",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3",
    price: "$85.00 / each",
    colorways: 14
  },
  {
    id: 5,
    name: "Metropolitan Cord",
    category: "Cord",
    image: "https://images.unsplash.com/photo-1618220242345-9cce69e3a73b?ixlib=rb-4.0.3",
    price: "$48.00 / yard",
    colorways: 26
  },
  {
    id: 6,
    name: "Couture Border",
    category: "Border",
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3",
    price: "$95.00 / yard",
    colorways: 12
  },
  {
    id: 7,
    name: "Artisan Braid",
    category: "Braid",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3",
    price: "$72.00 / yard",
    colorways: 20
  }
];

const ProductShowcase = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const productsPerPage = 3;
  const totalSlides = Math.ceil(products.length / productsPerPage);
  
  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  // Get current products
  const currentProducts = products.slice(
    slideIndex * productsPerPage,
    (slideIndex + 1) * productsPerPage
  );

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Our most distinguished and sought-after pieces, each reflecting our dedication to quality and craftsmanship.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="h-10 w-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="h-10 w-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next products"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div 
              key={product.id}
              className="group animate-fade-in"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-6 bg-white text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  Quick View
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl mb-1">{product.name}</h3>
                <p className="text-muted-foreground mb-1">{product.price}</p>
                <p className="text-sm">{product.colorways} colorways</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === slideIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
