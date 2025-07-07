
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  category?: string;
  image: string;
  colorways: number;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  animationDelay?: number;
}

const ProductCard = ({
  id,
  name,
  category,
  image,
  colorways,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
  animationDelay = 0
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className="group overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className={`w-full aspect-[3/4] object-cover transition-transform duration-700 ${
                isHovered ? "scale-105" : ""
              }`}
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`} />
            <Link
              to="/inquiry"
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 py-3 px-8 bg-white text-primary font-medium transition-all duration-500 hover:bg-primary hover:text-white ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Request Inquiry
            </Link>
          </div>
          
          <div className="p-6 text-center">
            {category && (
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                {category}
              </p>
            )}
            <h3 className="font-serif text-xl md:text-2xl mb-4">{name}</h3>
            <p className="text-sm mb-4">{colorways} colorways available</p>
            <Link
              to="/inquiry"
              className="inline-block py-2 px-6 bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            >
              Request Inquiry
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
