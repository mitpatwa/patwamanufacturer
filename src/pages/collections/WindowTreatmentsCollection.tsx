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
        <meta name="description" content="Curtains and drapery in your fabric, finished with our own braid, fringe or tie-backs." />
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
        description="Curtains, drapery and pelmets made in your fabric, finished with our own braid, fringe or tassel tie-backs. Send a fabric swatch (or a photo of the room) and we will suggest a trim that works with the weight and the light."
      >
        <ProductGrid products={windowTreatmentProducts} />
      </CollectionLayout>
    </>
  );
};

export default WindowTreatmentsCollection;