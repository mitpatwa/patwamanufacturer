
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";
import { Helmet } from 'react-helmet-async';
const CordsCollection = () => {
  const cordsProducts = allProducts.filter(
    (product) => product.category === "Tieback"
  );

  

  return (
    <CollectionLayout
      title="Luxury Cords & Tiebacks Collection"
      description="Our comprehensive collection of cords and tiebacks ranges from delicate silk varieties to substantial decorative options. Perfect for furnishings, drapery ties, and custom applications."
    >
      <ProductGrid products={cordsProducts} />      
    </CollectionLayout>
  );
};

export default CordsCollection;
