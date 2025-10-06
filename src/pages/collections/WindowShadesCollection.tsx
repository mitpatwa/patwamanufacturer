import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const WindowShadesCollection = () => {
  const windowShadesProducts = allProducts.filter(
    (product) => product.category === "Shade" || product.category === "Roman Shade"
  );

  return (
    <>
      <Helmet>
        <title>Custom Window Shades & Roman Shades - Luxury Trim Finishes | Patwa Manufacturer</title>
        <meta name="description" content="Premium window shades collection featuring custom Roman shades, roller blinds with elegant trim finishes. Luxury window treatments with decorative passementerie details." />
        <meta name="keywords" content="custom window shades, Roman shades, luxury window treatments, decorative trim, roller blinds, window shade trim, passementerie window shades" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/window-shades" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Custom Window Shades Collection",
            "description": "Premium window shades featuring custom trim finishes for elegant light control and design",
            "url": "https://patwamanufacturer.lovable.app/collections/window-shades",
            "provider": {
              "@type": "Organization",
              "name": "Patwa Manufacturer"
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Custom Window Shades"
        description="Enhance your windows with our collection of custom window shades featuring premium trim finishes. From Roman shades to roller blinds, each piece combines light control with elegant design details."
      >
        <ProductGrid products={windowShadesProducts} />
      </CollectionLayout>
    </>
  );
};

export default WindowShadesCollection;