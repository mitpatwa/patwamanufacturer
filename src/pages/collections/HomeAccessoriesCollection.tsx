import { Helmet } from 'react-helmet-async';
import CollectionLayout from "@/components/collections/CollectionLayout";
import ProductGrid from "@/components/collections/ProductGrid";
import { allProducts } from "@/data/products";

const HomeAccessoriesCollection = () => {
  const homeAccessoriesProducts = allProducts.filter(
    (product) => product.category === "Accessory" || product.category === "Decorative"
  );

  return (
    <>
      <Helmet>
        <title>Decorative Home Accessories | Patwa Manufacturer</title>
        <meta name="description" content="Pillows and accent pieces with handcrafted passementerie details to elevate any room." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/home-accessories" />
        <meta property="og:title" content="Decorative Home Accessories | Patwa Manufacturer" />
        <meta property="og:description" content="Pillows and accent pieces finished with handcrafted passementerie." />
        <meta name="keywords" content="decorative home accessories, handcrafted accessories, passementerie details, decorative pillows, accent pieces, luxury home décor, artisan home accessories, custom home embellishments, premium trimmings for upholstery" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/home-accessories" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Decorative Home Accessories Collection",
            "description": "Curated decorative accessories with handcrafted passementerie details for sophisticated living spaces",
            "url": "https://patwamanufacturer.lovable.app/collections/home-accessories",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${homeAccessoriesProducts.length},
              "itemListElement": [
                ${homeAccessoriesProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Home Accessories"
                }`).join(',')}
              ]
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Decorative Home Accessories"
        description="Complete your interior design with our curated collection of decorative accessories featuring handcrafted passementerie details. From decorative pillows to accent pieces, each item adds sophistication to your living space."
      >
        <ProductGrid products={homeAccessoriesProducts} />
      </CollectionLayout>
    </>
  );
};

export default HomeAccessoriesCollection;