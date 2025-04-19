
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const EmbelishmentsCollection = () => {
  const embelishmentsProducts = allProducts.filter(
    (product) => product.category === "Trim"
  );

  return (
    <CollectionLayout
      title="Luxury Embellishments Collection"
      description="Our curated selection of embellishments adds the perfect finishing touch to any interior project. From delicate beaded accents to statement pieces, our artisans create unique elements that elevate your design."
    >
      <ProductGrid products={embelishmentsProducts} />
    </CollectionLayout>
  );
};

export default EmbelishmentsCollection;
