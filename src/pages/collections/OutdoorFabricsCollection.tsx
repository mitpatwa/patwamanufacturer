import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const OutdoorFabricsCollection = () => {
  const outdoorFabricsProducts = allProducts.filter(
    (product) => product.category === "Outdoor" || product.category === "Marine"
  );

  return (
    <>
      <Helmet>
        <title>Outdoor Fabrics Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Outdoor Fabrics & Marine Trims"
        description="Discover our weather-resistant fabrics and marine-grade trims designed for outdoor living spaces. Our outdoor collection combines durability with elegant styling, perfect for patios, boats, and al fresco dining areas."
      >
        <ProductGrid products={outdoorFabricsProducts} />
      </CollectionLayout>
    </>
  );
};

export default OutdoorFabricsCollection;