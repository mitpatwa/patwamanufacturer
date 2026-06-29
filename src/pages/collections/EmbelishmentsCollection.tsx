
import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const EmbelishmentsCollection = () => {
  const embelishmentsProducts = allProducts.filter(

    (product) => product.category === "Trim"
  );

  return (
    <>
      <Helmet>
        <title>Luxury Embellishments Collection | Patwa Manufacturer</title>
        <meta name="description" content="Beaded accents, metallic detail, hand-stitched rosettes. For cushions, lampshades, headboards." />
        <meta name="keywords" content="luxury embellishments, decorative trims, beaded accents, metallic trims, passementerie embellishments, custom trim work, interior design accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/embelishments" />
        <meta property="og:title" content="Luxury Embellishments Collection | Patwa Manufacturer" />
        <meta property="og:description" content="Beaded accents and metallic trims that finish any luxury interior project." />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/embelishments" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Embellishments & Decorative Trims",
            "description": "Beaded accents, metallic trims, and luxury finishings for interior projects",
            "url": "https://patwamanufacturer.lovable.app/collections/embelishments"
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Luxury Embellishments Collection"
        description="Beaded accents, metallic detail, hand-stitched rosettes and medallions. Small batch work — most pieces are stitched one at a time. Tell us the project and we will suggest what fits."
      >
        <ProductGrid products={embelishmentsProducts} />
      </CollectionLayout>
    </>
  );
};

export default EmbelishmentsCollection;
