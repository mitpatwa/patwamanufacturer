
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
        <title>Luxury Cords & Tiebacks Collection | Patwa Manufacturer</title>
        <meta name="description" content="Twist cord, lip cord and decorative rope. Twisted on wooden bobbins, two strands at a time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/cords" />
        <meta property="og:title" content="Luxury Cords & Tiebacks Collection | Patwa Manufacturer" />
        <meta property="og:description" content="Silk cords and decorative tiebacks for luxury curtains and drapery." />
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
        description="Twist cord, lip cord (with fabric flange for seam work), and decorative rope. Diameters from 3mm to 25mm. Twisted on wooden bobbins, two at a time — the slow way, but it sits flatter in the seam."
      >
        <ProductGrid products={cordsProducts} />      
      </CollectionLayout>
    </>
  );
};

export default CordsCollection;
