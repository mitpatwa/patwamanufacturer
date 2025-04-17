
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Collection data
const collections = [
  {
    id: 1,
    name: "Trimmings",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3",
    description: "Our signature trimmings curated for the season",
    link: "#"
  },
  {
    id: 2,
    name: "Borders",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3",
    description: "Elegant borders for sophisticated interiors",
    link: "#"
  },
  {
    id: 3,
    name: "Braids",
    image: "https://images.unsplash.com/photo-1561913955-b55882fb77a7?ixlib=rb-4.0.3",
    description: "Intricately woven braids for any space",
    link: "#"
  },
  {
    id: 4,
    name: "Cords",
    image: "https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-4.0.3",
    description: "Sophisticated cords for perfect finishing",
    link: "#"
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
