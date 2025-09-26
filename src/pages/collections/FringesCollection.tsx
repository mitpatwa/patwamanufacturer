
import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const FringesCollection = () => {
  const fringesProducts = allProducts.filter(
    (product) => product.category === "Fringe"
  );

  return (
    <>
      <Helmet>
        <title>Luxury Fringe Trim Collection - Custom Decorative Fringes | Patwa Manufacturer</title>
        <meta name="description" content="Exquisite fringe trim collection featuring bullion, brush, and silk fringes. Custom decorative fringe trims for upholstery, drapery, and interior design. Made in India." />
        <meta name="keywords" content="luxury fringe trim, decorative fringes, bullion fringe, silk fringe, upholstery fringe, drapery trim, passementerie fringe, custom fringe" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/fringes" />
      </Helmet>
      <CollectionLayout
        title="Luxury Fringes Collection"
        description="Our collection of exquisite fringes features everything from traditional bullion to contemporary brush and moss variations. Each piece is crafted with precision and available in customizable lengths and colorways."
      >
        <ProductGrid products={fringesProducts} />
      </CollectionLayout>
    </>
  );

};

export default FringesCollection;
