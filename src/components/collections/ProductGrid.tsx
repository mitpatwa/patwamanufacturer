
import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          colorways={product.colorways}
          isHovered={hoveredProduct === product.id}
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
