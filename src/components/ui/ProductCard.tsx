
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Assuming you have a dialog component in your ui library
import { Dialog, DialogContent } from "@/components/ui/dialog";
 
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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={`${name} - ${category || 'Luxury passementerie'} by Patwa Manufacturer - Custom decorative trims and tassels`}
              className="w-full aspect-[3/4] object-cover cursor-pointer"
              onClick={openModal}
              loading="lazy"
              width="400"
              height="533"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            />
            <motion.a
              href={`https://wa.me/919322140480?text=Hello! I'm interested in ${name}. Could you provide more details?`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 py-3 px-8 bg-white text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-white"
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
