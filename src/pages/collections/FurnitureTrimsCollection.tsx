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
        <title>Decorative Furniture Trims Collection - Upholstery Trims & Borders | Patwa Manufacturer</title>
        <meta name="description" content="Stunning collection of decorative furniture trims and upholstery details. Handcrafted sofa fringes, chair borders, and elegant finishing touches for any furniture piece." />
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
        description="Elevate your furniture with our stunning collection of decorative trims and upholstery details. From sophisticated sofa fringes to elegant chair borders, our handcrafted trims add the perfect finishing touch to any piece of furniture."
      >
        <ProductGrid products={furnitureTrimsProducts} />
      </CollectionLayout>
    </>
  );
};

export default FurnitureTrimsCollection;