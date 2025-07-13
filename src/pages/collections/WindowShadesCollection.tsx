import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const WindowShadesCollection = () => {
  const windowShadesProducts = allProducts.filter(
    (product) => product.category === "Shade" || product.category === "Roman Shade"
  );

  return (
    <>
      <Helmet>
        <title>Window Shades Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Custom Window Shades"
        description="Enhance your windows with our collection of custom window shades featuring premium trim finishes. From Roman shades to roller blinds, each piece combines light control with elegant design details."
      >
        <ProductGrid products={windowShadesProducts} />
      </CollectionLayout>
    </>
  );
};

export default WindowShadesCollection;