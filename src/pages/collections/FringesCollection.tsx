
import CollectionLayout from "@/components/collections/CollectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const fringesProducts = [
  {
    id: 1,
    name: "Bullion Fringe",
    image: "/lovable-uploads/5d5da0be-a4c0-4a04-8152-cf41cbd7dc6b.png",
    description: "Classic bullion fringe with intricate detailing",
    colorways: 6
  },
  {
    id: 2,
    name: "Brush Fringe",
    image: "/lovable-uploads/45fc9b72-c954-4b2e-97e5-2de190f68f0a.png",
    description: "Soft brush fringe for elegant drapery application",
    colorways: 8
  },
  {
    id: 3,
    name: "Moss Fringe",
    image: "/lovable-uploads/5548268a-ff4d-4450-8548-4bb463ca8c26.png",
    description: "Textured moss fringe with dimensional depth",
    colorways: 4
  },
];

const FringesCollection = () => {
  return (
    <CollectionLayout
      title="Luxury Fringes Collection"
      description="Our collection of exquisite fringes features everything from traditional bullion to contemporary brush and moss variations. Each piece is crafted with precision and available in customizable lengths and colorways."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fringesProducts.map((product) => (
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

export default FringesCollection;
