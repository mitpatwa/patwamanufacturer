
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
        <title>Tassel Trim Manufacturer | Custom Luxury Tassels Collection | Patwa Manufacturer</title>
        <meta name="description" content="Leading tassel trim manufacturer offering custom luxury tassels, handcrafted passementerie tassels, silk tassels, and crystal tassels for interior designers. Export quality from India." />
        <meta name="keywords" content="tassel trim manufacturer, custom luxury tassels, handcrafted tassels, passementerie tassels, silk tassels, crystal tassels, curtain tassels, decorative tassels, luxury curtain tiebacks supplier, artisan curtain accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/tassels" />
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
        description="Discover our exquisite range of handcrafted tassels, from classic designs to contemporary interpretations. Each piece is meticulously created using premium materials and time-honored techniques."
      >
        <ProductGrid products={tasselsProducts} />
      </CollectionLayout>
    </>
  );
};

export default TasselsCollection;
