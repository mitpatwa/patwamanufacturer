
import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const TasselsCollection = () => {
  const tasselsProducts = allProducts.filter(


    (product) => product.category === "Tassel"
  );

  return (
    <>
      <Helmet>
        <title>Luxury Tassels Collection | Patwa Manufacturer</title>
        <meta name="description" content="Over 400 tassel designs in silk, cotton and metallic. Made to order in custom colours from 50 pieces." />
        <meta name="keywords" content="tassel trim manufacturer, custom luxury tassels, handcrafted tassels, passementerie tassels, silk tassels, crystal tassels, curtain tassels, decorative tassels, luxury curtain tiebacks supplier, artisan curtain accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/tassels" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/tassels" />
        <meta property="og:title" content="Luxury Tassels Collection | Patwa Manufacturer" />
        <meta property="og:description" content="Handcrafted silk, crystal, and metallic tassels for curtains, upholstery, and luxury interiors." />
        <meta property="og:site_name" content="Patwa Manufacturer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Tassels Collection | Patwa Manufacturer" />
        <meta name="twitter:description" content="Handcrafted silk, crystal, and metallic tassels for curtains, upholstery, and luxury interiors." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Tassels Collection",
            "description": "Premium handcrafted tassels collection featuring silk, crystal, and metallic designs",
            "url": "https://patwamanufacturer.lovable.app/collections/tassels",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${tasselsProducts.length},
              "itemListElement": [
                ${tasselsProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Passementerie Tassels"
                }`).join(',')}
              ]
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Luxury Tassels Collection"
        description="Over 400 tassel designs in stock — silk, cotton, viscose, metallic. Each head is wrapped by one person, start to finish (about forty minutes). Custom colours from 50 pieces, dye lot in roughly two weeks."
      >
        <ProductGrid products={tasselsProducts} />
      </CollectionLayout>
    </>
  );
};

export default TasselsCollection;
