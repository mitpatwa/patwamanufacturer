
import CollectionLayout from "@/components/collections/CollectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const cordsProducts = [
  {
    id: 1,
    name: "Twisted Silk Cord",
    image: "/lovable-uploads/873e6a26-afd9-4994-87da-2b19b2419b0a.png",
    description: "Elegant twisted silk cord for furniture and drapery",
    colorways: 12
  },
  {
    id: 2,
    name: "Metallic Decorative Cord",
    image: "/lovable-uploads/65e6e9e0-4108-42c6-ae93-a32021d3910d.png",
    description: "Luxurious cord with metallic thread for sophisticated interiors",
    colorways: 6
  },
  {
    id: 3,
    name: "Classic Piping Cord",
    image: "/lovable-uploads/7990aac2-7198-4bf8-9818-9551e38785ae.png",
    description: "Traditional piping cord for upholstery and soft furnishings",
    colorways: 10
  },
];

const CordsCollection = () => {
  return (
    <CollectionLayout
      title="Luxury Cords Collection"
      description="Our comprehensive collection of cords ranges from delicate silk varieties to substantial decorative options. Perfect for furnishings, drapery ties, and custom pillow applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cordsProducts.map((product) => (
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

export default CordsCollection;
