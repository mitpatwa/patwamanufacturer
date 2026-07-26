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
        <title>Luxury Tie-backs & Holders Collection | Patwa Manufacturer</title>
        <meta name="description" content="Tassel tie-backs, corded holdbacks, brass hooks. Made to your curtain weight and colour." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/tie-backs" />
        <meta property="og:title" content="Luxury Tie-backs & Holders | Patwa Manufacturer" />
        <meta property="og:description" content="Handcrafted curtain tiebacks and decorative holders for luxury drapery." />
        <meta name="keywords" content="curtain tie-backs, decorative holders, luxury tiebacks, custom curtain holders, drapery accessories, window treatment tiebacks, handcrafted tiebacks, luxury curtain tiebacks supplier, artisan curtain accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/tie-backs" />
        <meta property="og:site_name" content="Patwa Manufacturer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Tie-backs & Holders | Patwa Manufacturer" />
        <meta name="twitter:description" content="Handcrafted curtain tiebacks and decorative holders for luxury drapery." />
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
        description="Tassel tie-backs, corded holdbacks, and brass hooks. Tell us the curtain weight and we will spec the cord thickness — a heavy velvet drapery needs more than a sheer linen, and a thin cord on a heavy panel snaps within a year."
      >
        <ProductGrid products={tieBacksProducts} />
      </CollectionLayout>
    </>
  );
};

export default TieBacksCollection;