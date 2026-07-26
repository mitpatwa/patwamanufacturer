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
        <title>Custom Window Shades & Roman Shades | Patwa Manufacturer</title>
        <meta name="description" content="Roman shades and roller blinds finished with our own braid, fringe or beaded trim." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/window-shades" />
        <meta property="og:title" content="Window Shades & Roman Shades | Patwa Manufacturer" />
        <meta property="og:description" content="Roman shades and roller blinds finished with handcrafted passementerie trim." />
        <meta name="keywords" content="custom window shades, Roman shades, luxury window treatments, decorative trim, roller blinds, window shade trim, passementerie window shades" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/window-shades" />
        <meta property="og:site_name" content="Patwa Manufacturer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Shades & Roman Shades | Patwa Manufacturer" />
        <meta name="twitter:description" content="Roman shades and roller blinds finished with handcrafted passementerie trim." />
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
        description="Roman shades and roller blinds, finished with our own braid, fringe or beaded trim along the lower edge. We make the shade to your window size — send measurements, fabric choice, and which trim you want at the bottom."
      >
        <ProductGrid products={windowShadesProducts} />
      </CollectionLayout>
    </>
  );
};

export default WindowShadesCollection;