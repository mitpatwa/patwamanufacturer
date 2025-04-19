
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const TasselsCollection = () => {
  const tasselsProducts = allProducts.filter(
    (product) => product.category === "Tassel"
  );

  return (
    <CollectionLayout
      title="Luxury Tassels Collection"
      description="Discover our exquisite range of handcrafted tassels, from classic designs to contemporary interpretations. Each piece is meticulously created using premium materials and time-honored techniques."
    >
      <ProductGrid products={tasselsProducts} />
    </CollectionLayout>
  );
};

export default TasselsCollection;
