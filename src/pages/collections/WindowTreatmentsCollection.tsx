import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const WindowTreatmentsCollection = () => {
  const windowTreatmentProducts = allProducts.filter(
    (product) => product.category === "Curtain" || product.category === "Drape"
  );

  return (
    <>
      <Helmet>
        <title>Window Treatments Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Luxury Window Treatments"
        description="Transform your windows with our exquisite collection of curtains, drapes, and window accessories. Each piece is crafted with premium fabrics and finished with our signature passementerie details for the perfect blend of elegance and functionality."
      >
        <ProductGrid products={windowTreatmentProducts} />
      </CollectionLayout>
    </>
  );
};

export default WindowTreatmentsCollection;