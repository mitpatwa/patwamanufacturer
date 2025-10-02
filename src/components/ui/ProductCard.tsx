
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";
 
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onMouseLeave?.();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.02 }}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
        <CardContent className="p-0 relative">
          {/* Floating Sparkles */}
          <motion.div
            className="absolute top-4 right-4 z-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-gold-400" />
          </motion.div>

          {/* Shimmer overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={`${name} - ${category || 'Luxury passementerie'} by Patwa Manufacturer - Custom decorative trims and tassels`}
              className="w-full aspect-[3/4] object-cover cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              loading="lazy"
              width="400"
              height="533"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
            />
            
            {/* Gradient overlay with enhanced effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              transition={{ duration: 0.4 }}
            />

            {/* Floating particles effect */}
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gold-300 rounded-full opacity-70"
                    initial={{ 
                      x: Math.random() * 100 + "%", 
                      y: "100%",
                      scale: 0 
                    }}
                    animate={{ 
                      y: "-20%",
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </>
            )}
            <motion.a
              href={`https://wa.me/919322140480?text=Hello! I'm interested in ${name}. Could you provide more details?`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 30,
                scale: isHovered ? 1 : 0.9
              }}
              whileHover={{ scale: 1.08, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 py-3 px-8 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-semibold rounded-full shadow-glow transition-all duration-300 hover:from-gold-500 hover:to-gold-700 z-10"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
            >
              Request Inquiry
            </motion.a>
          </div>
          
          <div className="p-6 text-center">
            {category && (
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                {category}
              </p>
            )}
            <h3 className="font-serif text-xl md:text-2xl mb-4" itemProp="name">{name}</h3>
            <p className="text-sm mb-4">{colorways} colorways available</p>
            <motion.a
              href={`https://wa.me/919322140480?text=Hello! I'm interested in ${name}. Could you provide more details?`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-2 px-6 bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            >
              Request Inquiry
            </motion.a>
          </div>
        </CardContent>
      </Card>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed inset-0 flex items-center justify-center p-0 max-w-full max-h-full bg-black bg-opacity-75">
          <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProductCard;
