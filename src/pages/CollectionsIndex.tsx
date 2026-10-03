
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CollectionLayout from '@/components/collections/CollectionLayout';

const collections = [
  { name: 'Tassels', href: '/collections/tassels', description: 'Silk, crystal, and metallic tassels for tie-backs, cushions, and key details.' },
  { name: 'Fringes', href: '/collections/fringes', description: 'Bullion, brush, and silk fringe for curtains, valances, and upholstery.' },
  { name: 'Braids', href: '/collections/braids', description: 'Gimp and decorative braid for leading edges and borders.' },
  { name: 'Cords', href: '/collections/cords', description: 'Silk cords and rope ties, made to length.' },
  { name: 'Tie-backs', href: '/collections/tie-backs', description: 'Curtain tiebacks and holders in matched colourways.' },
  { name: 'Embellishments', href: '/collections/embellishments', description: 'Beaded accents, metallic detail, and hand-stitched rosettes.' },
  { name: 'Window Treatments', href: '/collections/window-treatments', description: 'Custom curtains and drapes finished with our trims.' },
  { name: 'Window Shades', href: '/collections/window-shades', description: 'Roman shades with trim finishes.' },
  { name: 'Furniture Trims', href: '/collections/furniture-trims', description: 'Sofa fringes, chair borders, and upholstery details.' },
  { name: 'Home Accessories', href: '/collections/home-accessories', description: 'Pillows and accent pieces finished by hand.' },
  { name: 'Table Linens', href: '/collections/table-linens', description: 'Decorative tablecloths and runners with trim work.' },
  { name: 'Outdoor Fabrics', href: '/collections/outdoor-fabrics', description: 'Weather-resistant trims and textiles for covered spaces.' },
];

const CollectionsIndex = () => (
  <>
    <Helmet>
      <title>All Collections | Patwa Manufacturer</title>
      <meta name="description" content="Browse every collection: tassels, fringes, braids, cords, tie-backs, embellishments, and finished pieces." />
      <link rel="canonical" href="https://patwamanufacturer.com/collections" />
      <meta property="og:title" content="All Collections | Patwa Manufacturer" />
      <meta property="og:description" content="Browse every collection: tassels, fringes, braids, cords, tie-backs, embellishments, and finished pieces." />
      <meta property="og:url" content="https://patwamanufacturer.com/collections" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Patwa Manufacturer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="All Collections | Patwa Manufacturer" />
      <meta name="twitter:description" content="Browse every collection: tassels, fringes, braids, cords, tie-backs, embellishments, and finished pieces." />
    </Helmet>
    <Header />
    <CollectionLayout
      title="All Collections"
      description="Twelve collections, one workshop in Mumbai. Every piece below is made by hand and can be matched to your fabric or ordered as a sample first."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link
            key={collection.href}
            to={collection.href}
            className="group block border border-border rounded-md p-6 bg-card hover:shadow-md transition-shadow"
          >
            <h2 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              {collection.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{collection.description}</p>
          </Link>
        ))}
      </div>
    </CollectionLayout>
    <Footer />
  </>
);

export default CollectionsIndex;
