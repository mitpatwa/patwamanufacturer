
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
        <title>Luxury Embellishments & Decorative Trims Collection | Patwa Manufacturer</title>
        <meta name="description" content="Exquisite embellishments and decorative trim collection featuring beaded accents, metallic trims, and luxury finishings for interior design projects." />
        <meta name="keywords" content="luxury embellishments, decorative trims, beaded accents, metallic trims, passementerie embellishments, custom trim work, interior design accessories" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/embelishments" />
        <meta property="og:title" content="Luxury Embellishments Collection | Patwa Manufacturer" />
        <meta property="og:description" content="Exquisite embellishments and decorative trims for luxury interior design." />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/embelishments" />
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
        description="Our curated selection of embellishments adds the perfect finishing touch to any interior project. From delicate beaded accents to statement pieces, our artisans create unique elements that elevate your design."
      >
        <ProductGrid products={embelishmentsProducts} />
      </CollectionLayout>
    </>
  );
};

export default EmbelishmentsCollection;
