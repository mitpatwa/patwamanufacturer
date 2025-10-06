
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
        <title>Luxury Decorative Braids Collection - Custom Upholstery Trim | Patwa Manufacturer</title>
        <meta name="description" content="Premium decorative braids and gimp trim collection for upholstery, cushions, and drapery. Handcrafted luxury braids with custom colors and designs. Made in India." />
        <meta name="keywords" content="decorative braids, upholstery trim, gimp braid, cushion edging, luxury braids, handcrafted trim, passementerie braids, custom braids" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/braids" />
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
        description="Discover our exquisite range of handcrafted braids, ideal for upholstery borders, cushion edges, and drapery accents. Our skilled artisans combine traditional techniques with contemporary design sensibilities."
      >
        <ProductGrid products={braidsProducts} />
      </CollectionLayout>
    </>
  );
};

export default BraidsCollection;
