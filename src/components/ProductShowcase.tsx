import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Product data
const products = [
  {
    id: 1,
    name: "Beaded Silk Tiebacks",
    category: "Tieback",
    image: "/lovable-uploads/813b0828-f1f8-43d7-9a6c-70ac5196cfd2.png",
    price: "$195.00 / pair",
    colorways: 3
  },
  {
    id: 2,
    name: "Metallic Knot Tassels",
    category: "Tassel",
    image: "/lovable-uploads/fa393750-1cde-4474-bbf5-a168728afc85.png",
    price: "$165.00 / set",
    colorways: 3
  },
  {
    id: 3,
    name: "Burgundy Layered Tassel",
    category: "Tassel",
    image: "/lovable-uploads/42cae155-c4aa-43de-9284-a4e9742f2678.png",
    price: "$225.00 / each",
    colorways: 4
  },
  {
    id: 4,
    name: "Metallic Chain Tassels",
    category: "Tassel",
    image: "/lovable-uploads/fc494274-86e3-455d-b513-fbfa251b1b11.png",
    price: "$185.00 / pair",
    colorways: 2
  },
  {
    id: 5,
    name: "Crystal Beaded Tassel",
    category: "Tassel",
    image: "/lovable-uploads/ecf10800-7f78-46f7-bb79-963c62f67c04.png",
    price: "$195.00 / each",
    colorways: 2
  },
  {
    id: 6,
    name: "Natural Rope Tieback",
    category: "Tieback",
    image: "/lovable-uploads/b17a5bdd-8666-478c-b577-d89f09db672f.png",
    price: "$85.00 / each",
    colorways: 3
  },
  {
    id: 7,
    name: "Gold Fringe Trim",
    category: "Trim",
    image: "/lovable-uploads/8a016950-b6c8-4c66-a911-b4012fad02b6.png",
    price: "$75.00 / yard",
    colorways: 4
  },
  {
    id: 8,
    name: "Classic Swag Valance",
    category: "Drapery",
    image: "/lovable-uploads/62276329-d2b8-46b7-8040-1c9ce87a985b.png",
    price: "$450.00 / panel",
    colorways: 6
  },
  {
    id: 9,
    name: "Braided Rope Tieback",
    category: "Tieback",
    image: "/lovable-uploads/e05674f3-915d-4bf0-a203-d3c941e17b97.png",
    price: "$95.00 / each",
    colorways: 5
  },
  {
    id: 10,
    name: "Royal Gold Tassel",
    category: "Tassel",
    image: "/lovable-uploads/c44a1bd0-7c43-40b8-8a18-e7f7ab40a989.png",
    price: "$175.00 / pair",
    colorways: 3
  },
  {
    id: 11,
    name: "Pearl White Tassels",
    category: "Tassel",
    image: "/lovable-uploads/d5e67b2c-9936-4102-afd5-aa999e460e64.png",
    price: "$215.00 / pair",
    colorways: 2
  },
  {
    id: 12,
    name: "Golden Crown Tassels",
    category: "Tassel",
    image: "/lovable-uploads/873e6a26-afd9-4994-87da-2b19b2419b0a.png",
    price: "$245.00 / pair",
    colorways: 3
  },
  {
    id: 13,
    name: "Black & White Tassel",
    category: "Tassel",
    image: "/lovable-uploads/f9a017f0-dd42-45b0-8691-1584f936f6a1.png",
    price: "$165.00 / each",
    colorways: 2
  },
  {
    id: 14,
    name: "Blue Crystal Tassel",
    category: "Tassel",
    image: "/lovable-uploads/cbdb04e9-a055-4b2b-9b9d-0a8a4c440bc6.png",
    price: "$225.00 / each",
    colorways: 4
  },
  {
    id: 15,
    name: "Silver Classic Tassel",
    category: "Tassel",
    image: "/lovable-uploads/5548268a-ff4d-4450-8548-4bb463ca8c26.png",
    price: "$195.00 / pair",
    colorways: 3
  },
  {
    id: 16,
    name: "Decorative Rope Tieback",
    category: "Tieback",
    image: "/lovable-uploads/3d941b9a-d92e-4554-9eb2-c769ca603717.png",
    price: "$125.00 / each",
    colorways: 4
  },
  {
    id: 17,
    name: "Victorian Tassels",
    category: "Tassel",
    image: "/lovable-uploads/45fc9b72-c954-4b2e-97e5-2de190f68f0a.png",
    price: "$275.00 / pair",
    colorways: 3
  },
  {
    id: 18,
    name: "Beaded White Tassel",
    category: "Tassel",
    image: "/lovable-uploads/8d1190f8-63bc-4ce0-84f7-df2a961f9aa2.png",
    price: "$185.00 / each",
    colorways: 2
  },
  {
    id: 19,
    name: "Silver Grey Tiebacks",
    category: "Tieback",
    image: "/lovable-uploads/d74c3fb7-87fd-4b43-b0e4-01bf9cef3e2c.png",
    price: "$165.00 / pair",
    colorways: 2
  },
  {
    id: 20,
    name: "Luxury Gold Tassel",
    category: "Tassel",
    image: "/lovable-uploads/208fcff3-65d4-4ca7-9cbc-00251babcfc4.png",
    price: "$295.00 / pair",
    colorways: 1
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
