import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const WindowTreatmentsCollection = () => {
  const windowTreatmentProducts = allProducts.filter(
    (product) => product.category === "Curtain" || product.category === "Drape"
  );

  return (
    <>
      <Helmet>
        <title>Luxury Window Treatments Collection | Patwa Manufacturer</title>
        <meta name="description" content="Custom curtains, drapes, and window accessories with handcrafted passementerie details from India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/window-treatments" />
        <meta property="og:title" content="Luxury Window Treatments | Patwa Manufacturer" />
        <meta property="og:description" content="Custom curtains and drapes finished with handcrafted passementerie." />
        <meta name="keywords" content="luxury window treatments, custom curtains, decorative drapes, window accessories, passementerie curtains, interior décor manufacturers India, custom window drapery, luxury curtain accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/window-treatments" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Window Treatments Collection",
            "description": "Custom curtains, drapes, and window accessories with signature passementerie details",
            "url": "https://patwamanufacturer.lovable.app/collections/window-treatments",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${windowTreatmentProducts.length},
              "itemListElement": [
                ${windowTreatmentProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Window Treatments"
                }`).join(',')}
              ]
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Luxury Window Treatments"
        description="Transform your windows with our exquisite collection of curtains, drapes, and window accessories. Each piece is crafted with premium fabrics and finished with our signature passementerie details for the perfect blend of elegance and functionality."
      >
        <ProductGrid products={windowTreatmentProducts} />
      </CollectionLayout>
    </>
  );
};

export default WindowTreatmentsCollection;