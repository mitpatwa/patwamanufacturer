import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const FurnitureTrimsCollection = () => {
  const furnitureTrimsProducts = allProducts.filter(
    (product) => product.category === "Furniture Trim" || product.category === "Upholstery"
  );

  return (
    <>
      <Helmet>
        <title>Furniture Trims Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Decorative Furniture Trims"
        description="Elevate your furniture with our stunning collection of decorative trims and upholstery details. From sophisticated sofa fringes to elegant chair borders, our handcrafted trims add the perfect finishing touch to any piece of furniture."
      >
        <ProductGrid products={furnitureTrimsProducts} />
      </CollectionLayout>
    </>
  );
};

export default FurnitureTrimsCollection;