import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductFilters, { ActiveFilters, FilterOptions } from "./ProductFilters";
import CollectionProductCard from "./CollectionProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    categories: [],
    materials: [],
    styles: [],
    colors: [],
    applications: [],
    priceRanges: [],
    searchQuery: "",
  });

  // Extract unique filter options from products
  const filterOptions: FilterOptions = useMemo(() => {
    const categories = new Set<string>();
    const materials = new Set<string>();
    const styles = new Set<string>();
    const colors = new Set<string>();
    const applications = new Set<string>();

    products.forEach((product) => {
      categories.add(product.category);
      if (product.material) materials.add(product.material);
      if (product.style) styles.add(product.style);
      if (product.colors) product.colors.forEach((color) => colors.add(color));
      if (product.application) product.application.forEach((app) => applications.add(app));
    });

    return {
      categories: Array.from(categories).sort(),
      materials: Array.from(materials).sort(),
      styles: Array.from(styles).sort(),
      colors: Array.from(colors).sort(),
      applications: Array.from(applications).sort(),
      priceRanges: ["$0-$50", "$50-$100", "$100-$200", "$200+"],
    };
  }, [products]);

  // Filter products based on active filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.sku?.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (
        activeFilters.categories.length > 0 &&
        !activeFilters.categories.includes(product.category)
      ) {
        return false;
      }

      // Material filter
      if (
        activeFilters.materials.length > 0 &&
        (!product.material || !activeFilters.materials.includes(product.material))
      ) {
        return false;
      }

      // Style filter
      if (
        activeFilters.styles.length > 0 &&
        (!product.style || !activeFilters.styles.includes(product.style))
      ) {
        return false;
      }

      // Color filter
      if (activeFilters.colors.length > 0) {
        if (!product.colors || !product.colors.some((c) => activeFilters.colors.includes(c))) {
          return false;
        }
      }

      // Application filter
      if (activeFilters.applications.length > 0) {
        if (
          !product.application ||
          !product.application.some((a) => activeFilters.applications.includes(a))
        ) {
          return false;
        }
      }

      return true;
    });
  }, [products, searchQuery, activeFilters]);

  const handleFilterChange = (filters: ActiveFilters) => {
    setActiveFilters(filters);
  };

  return (
    <div className="flex gap-8">
      <ProductFilters
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        totalProducts={products.length}
        filteredCount={filteredProducts.length}
      />

      <div className="flex-1">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products by name, SKU, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <CollectionProductCard
                key={product.id}
                product={product}
                isHovered={hoveredProduct === product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No products found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
