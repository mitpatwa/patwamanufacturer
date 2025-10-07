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
        <title>Luxury Tie-backs & Holders Collection - Custom Curtain Tiebacks | Patwa Manufacturer</title>
        <meta name="description" content="Sophisticated tie-backs and decorative holders collection featuring handcrafted curtain tiebacks with premium materials. Custom luxury curtain accessories from India." />
        <meta name="keywords" content="curtain tie-backs, decorative holders, luxury tiebacks, custom curtain holders, drapery accessories, window treatment tiebacks, handcrafted tiebacks, luxury curtain tiebacks supplier, artisan curtain accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/tie-backs" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Tie-backs & Holders Collection",
            "description": "Sophisticated curtain tie-backs and decorative holders with premium materials and intricate details",
            "url": "https://patwamanufacturer.lovable.app/collections/tie-backs",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${tieBacksProducts.length},
              "itemListElement": [
                ${tieBacksProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Curtain Tie-backs & Holders"
                }`).join(',')}
              ]
            }
          }`}
        </script>
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