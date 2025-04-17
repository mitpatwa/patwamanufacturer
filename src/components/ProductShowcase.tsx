import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Product data
const products = [
  {
    id: 1,
    name: "Metallic Chain Tassel",
    category: "Tassel",
    image: "/lovable-uploads/b4e3a075-fd02-49b6-9d27-130b698464d2.png",
    price: "$145.00 / each",
    colorways: 5
  },
  {
    id: 2,
    name: "Jewel Glass Tassels",
    category: "Tassel",
    image: "/lovable-uploads/5d5da0be-a4c0-4a04-8152-cf41cbd7dc6b.png",
    price: "$165.00 / set",
    colorways: 12
  },
  {
    id: 3,
    name: "Royal Burgundy Tassel",
    category: "Tassel",
    image: "/lovable-uploads/dd9bfc00-0255-426c-9dc3-1f8c1e40df40.png",
    price: "$185.00 / pair",
    colorways: 8
  },
  {
    id: 4,
    name: "Classic White Tassel",
    category: "Tassel",
    image: "/lovable-uploads/28a2328b-ee15-4438-9f3a-afad54919bdc.png",
    price: "$95.00 / each",
    colorways: 6
  },
  {
    id: 5,
    name: "Beaded Grey Tassel",
    category: "Tassel",
    image: "/lovable-uploads/67323a28-410c-44b8-b4a4-c9b3f175483c.png",
    price: "$125.00 / each",
    colorways: 4
  },
  {
    id: 6,
    name: "Woven Knot Collection",
    category: "Tassel",
    image: "/lovable-uploads/baffb0b3-c9de-4a9a-9739-11bd5bbfe666.png",
    price: "$165.00 / each",
    colorways: 6
  },
  {
    id: 7,
    name: "Classic White Trim",
    category: "Trim",
    image: "/lovable-uploads/1467f076-5bc0-4a6a-a6b4-8b23cdb903c0.png",
    price: "$45.00 / yard",
    colorways: 1
  },
  {
    id: 8,
    name: "Decorative Scroll Trim",
    category: "Trim",
    image: "/lovable-uploads/aabfc16c-9845-4952-8f22-8970eebc045a.png",
    price: "$65.00 / yard",
    colorways: 8
  },
  {
    id: 9,
    name: "Beige Silk Tassels",
    category: "Tassel",
    image: "/lovable-uploads/202a166e-3edd-4a30-978f-9674029cfcaa.png",
    price: "$135.00 / pair",
    colorways: 4
  },
  {
    id: 10,
    name: "Silver Silk Tassel",
    category: "Tassel",
    image: "/lovable-uploads/7990aac2-7198-4bf8-9818-9551e38785ae.png",
    price: "$115.00 / each",
    colorways: 3
  },
  {
    id: 11,
    name: "Luxury Drapery Set",
    category: "Drapery",
    image: "/lovable-uploads/849929ee-d6c1-4bea-94dc-649e96dee418.png",
    price: "$1,250.00 / set",
    colorways: 4
  },
  {
    id: 12,
    name: "Modern Tassel Tieback",
    category: "Tieback",
    image: "/lovable-uploads/1bc02ecc-6588-451d-a6de-5411f7bdcee0.png",
    price: "$85.00 / each",
    colorways: 6
  },
  {
    id: 13,
    name: "Pearl Drapery Holder",
    category: "Tieback",
    image: "/lovable-uploads/7050fb8c-3e98-4d49-aa5c-e03f8e59474e.png",
    price: "$75.00 / each",
    colorways: 2
  },
  {
    id: 14,
    name: "Crystal Beaded Fringe",
    category: "Fringe",
    image: "/lovable-uploads/aa1aa750-b187-45d1-8a8d-7fcf49e56574.png",
    price: "$95.00 / yard",
    colorways: 4
  },
  {
    id: 15,
    name: "Signature Pink Tassel",
    category: "Tassel",
    image: "/lovable-uploads/03ee33a7-3f59-4a56-aef6-1d2c6e8182ff.png",
    price: "$155.00 / pair",
    colorways: 8
  },
  {
    id: 16,
    name: "Gold Beaded Tassel",
    category: "Tassel",
    image: "/lovable-uploads/31d721e9-177c-4d5d-8e2b-2205f03f3a5c.png",
    price: "$175.00 / each",
    colorways: 3
  },
  {
    id: 17,
    name: "Royal Purple Decor",
    category: "Drapery",
    image: "/lovable-uploads/79692394-606a-41a3-b4f2-8a0624bd845b.png",
    price: "$225.00 / panel",
    colorways: 5
  },
  {
    id: 18,
    name: "Silver Silk Tieback",
    category: "Tieback",
    image: "/lovable-uploads/a3ae41e0-6860-4fea-8975-34572496d637.png",
    price: "$95.00 / each",
    colorways: 4
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
