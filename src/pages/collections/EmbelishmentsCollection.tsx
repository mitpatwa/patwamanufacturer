
import CollectionLayout from "@/components/collections/CollectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const embelishmentsProducts = [
  {
    id: 1,
    name: "Beaded Trim",
    image: "/lovable-uploads/8a016950-b6c8-4c66-a911-b4012fad02b6.png",
    description: "Luxurious trim with glass beading for decorative applications",
    colorways: 8
  },
  {
    id: 2,
    name: "Decorative Rosettes",
    image: "/lovable-uploads/3d941b9a-d92e-4554-9eb2-c769ca603717.png",
    description: "Handcrafted rosette embellishments for upholstery accents",
    colorways: 6
  },
  {
    id: 3,
    name: "Appliqué Motifs",
    image: "/lovable-uploads/31d721e9-177c-4d5d-8e2b-2205f03f3a5c.png",
    description: "Intricate appliqué designs for custom textile applications",
    colorways: 5
  },
];

const EmbelishmentsCollection = () => {
  return (
    <CollectionLayout
      title="Luxury Embellishments Collection"
      description="Our curated selection of embellishments and decorative trims adds the perfect finishing touch to any interior project. From delicate beaded trim to statement appliqués, our artisans create pieces that elevate your design."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {embelishmentsProducts.map((product) => (
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

export default EmbelishmentsCollection;
