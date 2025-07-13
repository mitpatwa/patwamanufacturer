import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const TieBacksCollection = () => {
  const tieBacksProducts = allProducts.filter(
    (product) => product.category === "Tieback" || product.category === "Holder"
  );

  return (
    <>
      <Helmet>
        <title>Tie-backs & Holders Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Elegant Tie-backs & Holders"
        description="Complete your window treatments with our sophisticated collection of curtain tie-backs and decorative holders. Each piece is meticulously crafted with premium materials and intricate details to perfectly complement your drapery."
      >
        <ProductGrid products={tieBacksProducts} />
      </CollectionLayout>
    </>
  );
};

export default TieBacksCollection;