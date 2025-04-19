
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const FringesCollection = () => {
  const fringesProducts = allProducts.filter(
    (product) => product.category === "Fringe"
  );

  return (
    <CollectionLayout
      title="Luxury Fringes Collection"
      description="Our collection of exquisite fringes features everything from traditional bullion to contemporary brush and moss variations. Each piece is crafted with precision and available in customizable lengths and colorways."
    >
      <ProductGrid products={fringesProducts} />
    </CollectionLayout>
  );
};

export default FringesCollection;
