import { motion } from "framer-motion";
import { Heart, Eye, ShoppingCart, Star, Sparkles } from "lucide-react";
import { useState } from "react";

interface EnhancedProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
  animationDelay?: number;
}

const EnhancedProductCard = ({
  id,
  name,
  price,
  image,
  category,
  rating,
  isNew = false,
  isFeatured = false,
  animationDelay = 0
}: EnhancedProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="interactive-card relative overflow-hidden bg-white rounded-2xl shadow-card">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {isNew && (
              <span className="animate-bounce-in px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                New
              </span>
            )}
            {isFeatured && (
              <span className="animate-bounce-in px-3 py-1 bg-gradient-to-r from-gold-400 to-gold-600 text-white text-sm font-semibold rounded-full flex items-center space-x-1">
                <Sparkles className="h-3 w-3" />
                <span>Featured</span>
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}>
            <motion.button
              className="magnetic-button h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white hover:text-red-500 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </motion.button>
            
            <motion.button
              className="magnetic-button h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white hover:text-primary transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="magnetic-button h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white hover:text-green-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Quick View Button */}
          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <motion.button
              className="magnetic-button w-full py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full hover:bg-white transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Quick View
            </motion.button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gold-600 font-medium uppercase tracking-wide">
              {category}
            </span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? "text-gold-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          
          <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            <motion.button
              className="magnetic-button px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-full hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedProductCard;