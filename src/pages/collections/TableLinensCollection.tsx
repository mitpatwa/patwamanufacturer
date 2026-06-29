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
        <title>Luxury Table Linens Collection | Patwa Manufacturer</title>
        <meta name="description" content="Runners and tablecloths with fringe stitched at the edge. Cotton, linen, or linen-blend bases." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/table-linens" />
        <meta property="og:title" content="Luxury Table Linens | Patwa Manufacturer" />
        <meta property="og:description" content="Tablecloths and runners with artisanal fringe details for elegant dining." />
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
        description="Runners and cloths in cotton, linen or a linen blend, with fringe stitched at the edge. Sizes are made to your table — give us length, width and the drop you want. Washable at 30 degrees, line dry."
      >
        <ProductGrid products={tableLinensProducts} />
      </CollectionLayout>
    </>
  );
};

export default TableLinensCollection;