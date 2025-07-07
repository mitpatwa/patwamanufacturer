
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const BraidsCollection = () => {
  const braidsProducts = allProducts.filter(
    (product) => product.category === "Braid"
  );
  return (
      <ProductGrid products={braidsProducts} />
    </CollectionLayout>
    <>
      <Helmet><title>Braids Collection - Patwa Manufacturer</title></Helmet>
      <CollectionLayout
  );
};
    <CollectionLayout
      title="Luxury Braids Collection"
      description="Discover our exquisite range of handcrafted braids, ideal for upholstery borders, cushion edges, and drapery accents. Our skilled artisans combine traditional techniques with contemporary design sensibilities."
    >

export default BraidsCollection;
