
import CollectionLayout from "@/components/collections/CollectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const tasselsProducts = [
  {
    id: 1,
    name: "Beaded Silk Tiebacks",
    image: "/lovable-uploads/813b0828-f1f8-43d7-9a6c-70ac5196cfd2.png",
    description: "Elegant silk tiebacks with intricate beadwork",
    colorways: 3
  },
  {
    id: 2,
    name: "Metallic Knot Tassels",
    image: "/lovable-uploads/fa393750-1cde-4474-bbf5-a168728afc85.png",
    description: "Contemporary metallic tassels with knotted detail",
    colorways: 3
  },
  {
    id: 3,
    name: "Burgundy Layered Tassel",
    image: "/lovable-uploads/42cae155-c4aa-43de-9284-a4e9742f2678.png",
    description: "Rich burgundy tassel with multiple layers",
    colorways: 4
  },
  // ... more tassels
];

const TasselsCollection = () => {
  return (
    <CollectionLayout
      title="Luxury Tassels Collection"
      description="Discover our exquisite range of handcrafted tassels, from classic designs to contemporary interpretations. Each piece is meticulously created using premium materials and time-honored techniques."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasselsProducts.map((product) => (
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

export default TasselsCollection;
