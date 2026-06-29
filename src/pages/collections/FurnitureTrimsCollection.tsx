import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const FurnitureTrimsCollection = () => {
  const furnitureTrimsProducts = allProducts.filter(
    (product) => product.category === "Furniture Trim" || product.category === "Upholstery"
  );

  return (
    <>
      <Helmet>
        <title>Decorative Furniture Trims | Patwa Manufacturer</title>
        <meta name="description" content="Sofa skirts, chair borders, welt cord. Made to your fabric in roughly two to three weeks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/furniture-trims" />
        <meta property="og:title" content="Decorative Furniture Trims | Patwa Manufacturer" />
        <meta property="og:description" content="Sofa fringes and chair borders for upholstered furniture." />
        <meta name="keywords" content="furniture trims, upholstery trims, decorative furniture borders, sofa fringes, chair trims, furniture embellishments, upholstery details, handcrafted furniture trims, premium trimmings for upholstery, custom lace and trimmings for interiors" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/furniture-trims" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Decorative Furniture Trims Collection",
            "description": "Stunning decorative trims and upholstery details for furniture finishing",
            "url": "https://patwamanufacturer.lovable.app/collections/furniture-trims",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${furnitureTrimsProducts.length},
              "itemListElement": [
                ${furnitureTrimsProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Furniture Trims"
                }`).join(',')}
              ]
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Decorative Furniture Trims"
        description="Sofa skirts, chair borders, welt cord, key tassels. Send us a fabric swatch and we will match the cord or dye trim to it. Lead time runs about two to three weeks once the colour is signed off."
      >
        <ProductGrid products={furnitureTrimsProducts} />
      </CollectionLayout>
    </>
  );
};

export default FurnitureTrimsCollection;