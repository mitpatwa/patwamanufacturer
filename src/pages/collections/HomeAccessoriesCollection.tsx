import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const HomeAccessoriesCollection = () => {
  const homeAccessoriesProducts = allProducts.filter(
    (product) => product.category === "Accessory" || product.category === "Decorative"
  );

  return (
    <>
      <Helmet>
        <title>Home Accessories Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Decorative Home Accessories"
        description="Complete your interior design with our curated collection of decorative accessories featuring handcrafted passementerie details. From decorative pillows to accent pieces, each item adds sophistication to your living space."
      >
        <ProductGrid products={homeAccessoriesProducts} />
      </CollectionLayout>
    </>
  );
};

export default HomeAccessoriesCollection;