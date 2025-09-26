
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
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/embellishments" />
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
