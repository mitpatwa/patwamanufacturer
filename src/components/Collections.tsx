import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Tassels",
    image: "/lovable-uploads/3c66a637-4fda-4d59-96bc-a568454c94c3.png",
    description: "Our signature tassels curated for the season",
    link: "/collections/tassels"
  },
  {
    id: 2,
    name: "Fringes",
    image: "/lovable-uploads/1a2a40a3-9a8f-40f8-bf53-cbb5908b0788.png",
    description: "Elegant fringes for sophisticated interiors",
    link: "/collections/fringes"
  },
  {
    id: 3,
    name: "Braids",
    image: "/lovable-uploads/90e95429-da77-4311-a13e-29206be6ee45.png",
    description: "Intricately woven braids for any space",
    link: "/collections/braids"
  },
  {
    id: 4,
    name: "Cords",
    image: "/lovable-uploads/f0b8f593-7c49-428b-8796-40de1b8c6228.png",
    description: "Sophisticated cords for perfect finishing",
    link: "/collections/cords"
  }
];

const Collections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Our Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of luxurious trimmings and embellishments, 
            crafted with the highest standards of quality and design excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="relative group overflow-hidden bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative h-96 overflow-hidden"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif mb-2">{collection.name}</h3>
                <p className="mb-4 max-w-xs">{collection.description}</p>
                <Link 
                  to={collection.link} 
                  className={`inline-flex items-center transition-all duration-500 ${
                    hoveredIndex === index ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                >
                  <span className="mr-2 border-b border-white pb-1">Explore Collection</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="#" className="btn-primary">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
