import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const OutdoorFabricsCollection = () => {
  const outdoorFabricsProducts = allProducts.filter(
    (product) => product.category === "Outdoor" || product.category === "Marine"
  );

  return (
    <>
      <Helmet>
        <title>Outdoor Fabrics & Marine Trims | Patwa Manufacturer</title>
        <meta name="description" content="Solution-dyed acrylic and PE trims that hold colour in sun. For patios, pergolas and boats." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/outdoor-fabrics" />
        <meta property="og:title" content="Outdoor Fabrics & Marine Trims | Patwa Manufacturer" />
        <meta property="og:description" content="Weather-resistant trims and textiles for outdoor living spaces." />
        <meta name="keywords" content="outdoor fabrics, marine trims, weather-resistant textiles, outdoor living textiles, marine-grade fabrics, patio fabrics, outdoor upholstery, boat trims, durable outdoor textiles, export quality decorative trims" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/outdoor-fabrics" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Outdoor Fabrics & Marine Trims Collection",
            "description": "Weather-resistant fabrics and marine-grade trims for outdoor living spaces",
            "url": "https://patwamanufacturer.lovable.app/collections/outdoor-fabrics",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${outdoorFabricsProducts.length},
              "itemListElement": [
                ${outdoorFabricsProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Outdoor Fabrics"
                }`).join(',')}
              ]
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Outdoor Fabrics & Marine Trims"
        description="Solution-dyed acrylic and polyethylene. Holds colour for years in full sun and wipes clean with mild soap. Not waterproof in the marine sense, but happy in rain and pool spray. MOQ 100 metres for custom colours."
      >
        <ProductGrid products={outdoorFabricsProducts} />
      </CollectionLayout>
    </>
  );
};

export default OutdoorFabricsCollection;