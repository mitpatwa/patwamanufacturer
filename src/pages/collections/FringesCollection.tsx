
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
        <title>Luxury Fringe Trim Collection | Patwa Manufacturer</title>
        <meta name="description" content="Bullion, brush, loop and tassel fringe. Cut to length, drops from 1cm to 30cm. Made in Bareilly." />
        <meta name="keywords" content="luxury fringe trim, decorative fringes, bullion fringe, silk fringe, upholstery fringe, drapery trim, passementerie fringe, custom fringe, beaded fringe trim wholesale" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/collections/fringes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/collections/fringes" />
        <meta property="og:title" content="Luxury Fringe Trim Collection | Patwa Manufacturer" />
        <meta property="og:description" content="Bullion, brush and silk fringe trims handcrafted for upholstery and drapery." />
        <meta property="og:site_name" content="Patwa Manufacturer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Fringe Trim Collection | Patwa Manufacturer" />
        <meta name="twitter:description" content="Bullion, brush and silk fringe trims handcrafted for upholstery and drapery." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Luxury Fringe Trim Collection",
            "description": "Exquisite fringe collection featuring bullion, brush, and silk varieties for upholstery and drapery",
            "url": "https://patwamanufacturer.lovable.app/collections/fringes",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${fringesProducts.length},
              "itemListElement": [
                ${fringesProducts.slice(0, 5).map((product, index) => `{
                  "@type": "Product",
                  "position": ${index + 1},
                  "name": "${product.name}",
                  "description": "${product.description}",
                  "category": "Decorative Fringes"
                }`).join(',')}
              ]
            }
          }`}
        </script>
      </Helmet>
      <CollectionLayout
        title="Luxury Fringes Collection"
        description="Bullion, brush, loop, moss, tassel. Drops from 1cm to 30cm, cut to your length. Custom colours dyed to a Pantone reference — minimum 50 metres per shade."
      >
        <ProductGrid products={fringesProducts} />
      </CollectionLayout>
    </>
  );

};

export default FringesCollection;
