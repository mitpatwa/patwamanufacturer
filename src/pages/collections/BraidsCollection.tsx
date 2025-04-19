
import CollectionLayout from "@/components/collections/CollectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const braidsProducts = [
  {
    id: 1,
    name: "Traditional Braid",
    image: "/lovable-uploads/7050fb8c-3e98-4d49-aa5c-e03f8e59474e.png",
    description: "Classic braided design for traditional interiors",
    colorways: 7
  },
  {
    id: 2,
    name: "Multi-colored Braid",
    image: "/lovable-uploads/79692394-606a-41a3-b4f2-8a0624bd845b.png",
    description: "Intricately woven braid with multiple color variations",
    colorways: 5
  },
  {
    id: 3,
    name: "Ornate Braided Trim",
    image: "/lovable-uploads/67323a28-410c-44b8-b4a4-c9b3f175483c.png",
    description: "Luxurious hand-braided trim with decorative elements",
    colorways: 4
  },
];

const BraidsCollection = () => {
  return (
    <CollectionLayout
      title="Luxury Braids Collection"
      description="Discover our exquisite range of handcrafted braids, ideal for upholstery borders, cushion edges, and drapery accents. Our skilled artisans combine traditional techniques with contemporary design sensibilities."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {braidsProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link
                  to="/inquiry"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-6 bg-white text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  Request Quote
                </Link>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-2">{product.description}</p>
                <p className="text-sm">{product.colorways} colorways available</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CollectionLayout>
  );
};

export default BraidsCollection;
