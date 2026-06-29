
import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const BraidsCollection = () => {
  const braidsProducts = allProducts.filter(
    (product) => product.category === "Braid"
  );

  return (
    <>
      <Helmet>
        <title>Luxury Braids Collection | Patwa Manufacturer</title>
        <meta name="description" content="Flat braid, gimp and scroll patterns for upholstery, cushions and drapery. Made to your fabric." />
        <meta name="keywords" content="decorative braids, upholstery trim, gimp braid, cushion edging, luxury braids, handcrafted trim, passementerie braids, custom braids" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/braids" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/braids" />
        <meta property="og:title" content="Luxury Braids Collection | Patwa Manufacturer" />
        <meta property="og:description" content="Decorative braids and gimp trim handcrafted for upholstery, cushions, and drapery." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Braids Collection",
            "description": "Handcrafted decorative braids for upholstery borders, cushion edges, and drapery accents",
            "url": "https://patwamanufacturer.lovable.app/collections/braids",
            "provider": {
              "@type": "Organization",
              "name": "Patwa Manufacturer"
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Luxury Braids Collection"
        description="Flat braid, raised gimp, scroll and cord-edge patterns. Widths from 8mm to 50mm. Most designs are stocked; custom widths and colours need a 50 metre minimum."
      >
        <ProductGrid products={braidsProducts} />
      </CollectionLayout>
    </>
  );
};

export default BraidsCollection;
