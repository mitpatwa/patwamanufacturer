
import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const BraidsCollection = () => {
  const braidsProducts = allProducts.filter(
    (product) => product.category === "Braid"
  );

  return (
    <>
      <Helmet>
        <title>Braids Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Luxury Braids Collection"
        description="Discover our exquisite range of handcrafted braids, ideal for upholstery borders, cushion edges, and drapery accents. Our skilled artisans combine traditional techniques with contemporary design sensibilities."
      >
        <ProductGrid products={braidsProducts} />
      </CollectionLayout>
    </>
  );
};

export default BraidsCollection;
