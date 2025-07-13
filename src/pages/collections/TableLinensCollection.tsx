import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const TableLinensCollection = () => {
  const tableLinensProducts = allProducts.filter(
    (product) => product.category === "Table Linen" || product.category === "Tablecloth"
  );

  return (
    <>
      <Helmet>
        <title>Table Linens Collection - Patwa Manufacturer</title>
      </Helmet>
      <CollectionLayout
        title="Luxury Table Linens"
        description="Elevate your dining experience with our exquisite collection of table linens featuring decorative fringe details. From elegant tablecloths to sophisticated runners, each piece combines functionality with artisanal craftsmanship."
      >
        <ProductGrid products={tableLinensProducts} />
      </CollectionLayout>
    </>
  );
};

export default TableLinensCollection;