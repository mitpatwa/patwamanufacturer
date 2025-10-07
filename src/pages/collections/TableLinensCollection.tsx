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
        <title>Luxury Table Linens Collection - Decorative Tablecloths & Runners | Patwa Manufacturer</title>
        <meta name="description" content="Exquisite table linens featuring decorative fringe details, luxury tablecloths, and sophisticated runners. Handcrafted dining accessories combining functionality with artisanal craftsmanship." />
        <meta name="keywords" content="luxury table linens, decorative tablecloths, table runners, fringe tablecloths, handcrafted table linens, dining accessories, premium table textiles, custom table linens, designer textile embellishments" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/table-linens" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Table Linens Collection",
            "description": "Exquisite table linens with decorative fringe details for sophisticated dining experiences",
            "url": "https://patwamanufacturer.lovable.app/collections/table-linens",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${tableLinensProducts.length},
              "itemListElement": [
                ${tableLinensProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Table Linens"
                }`).join(',')}
              ]
            }
          }`}
        </script>
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