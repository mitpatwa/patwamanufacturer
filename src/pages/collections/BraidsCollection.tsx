
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const BraidsCollection = () => {
  const braidsProducts = allProducts.filter(
    (product) => product.category === "Braid"
  );

  return (
    <CollectionLayout
      title="Luxury Braids Collection"
      description="Discover our exquisite range of handcrafted braids, ideal for upholstery borders, cushion edges, and drapery accents. Our skilled artisans combine traditional techniques with contemporary design sensibilities."
    >
      <ProductGrid products={braidsProducts} />
    </CollectionLayout>
  );
};

export default BraidsCollection;
