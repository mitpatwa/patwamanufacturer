
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
        <meta name="keywords" content="luxury cords, curtain tiebacks, decorative tiebacks, silk cords, rope tiebacks, drapery ties, window treatment accessories, custom tiebacks, luxury curtain tiebacks supplier, decorative cords and piping" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/cords" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Cords & Tiebacks Collection",
            "description": "Premium cords and tiebacks featuring silk, rope, and decorative varieties for window treatments",
            "url": "https://patwamanufacturer.lovable.app/collections/cords",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${cordsProducts.length},
              "itemListElement": [
                ${cordsProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Curtain Cords & Tiebacks"
                }`).join(',')}
              ]
            }
          }`}
        </script>
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
