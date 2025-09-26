
import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";
const CordsCollection = () => {
  const cordsProducts = allProducts.filter(
    (product) => product.category === "Tieback"
  );

  return (
    <>
      <Helmet>
        <title>Luxury Cords & Tiebacks Collection - Custom Curtain Tiebacks | Patwa Manufacturer</title>
        <meta name="description" content="Premium cords and tiebacks collection featuring silk cords, decorative tiebacks, and rope ties. Custom curtain tiebacks for luxury drapery and window treatments." />
        <meta name="keywords" content="luxury cords, curtain tiebacks, decorative tiebacks, silk cords, rope tiebacks, drapery ties, window treatment accessories, custom tiebacks" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/cords" />
      </Helmet>
      <CollectionLayout
        title="Luxury Cords & Tiebacks Collection"
        description="Our comprehensive collection of cords and tiebacks ranges from delicate silk varieties to substantial decorative options. Perfect for furnishings, drapery ties, and custom applications."
      >
        <ProductGrid products={cordsProducts} />      
      </CollectionLayout>
    </>
  );
};

export default CordsCollection;
