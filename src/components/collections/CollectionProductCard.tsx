import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sparkles, Download, Info } from "lucide-react";
import { Product } from "@/data/products";
import ProductSpecSheet from "./ProductSpecSheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface CollectionProductCardProps {
  product: Product;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  animationDelay?: number;
}

const CollectionProductCard = ({
  product,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
  animationDelay = 0,
}: CollectionProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
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
    setShowDetails(false);
    onMouseLeave?.();
  };

  const sku = product.sku || `PATWA-${product.id.toString().padStart(4, "0")}`;

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

          {/* SKU Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="secondary" className="text-xs font-mono">
              {sku}
            </Badge>
          </div>

          {/* Info Button */}
          <motion.button
            className="absolute top-4 right-14 z-10 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowDetails(!showDetails)}
          >
            <Info className="w-4 h-4" />
          </motion.button>

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
              src={product.image}
              alt={`${product.name} - ${product.category} by Patwa Manufacturer`}
              className="w-full aspect-[3/4] object-cover cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              loading="lazy"
              width="400"
              height="533"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
            />

            {/* Gradient overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              transition={{ duration: 0.4 }}
            />

            {/* Details Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 20 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-sm p-4 overflow-y-auto"
              style={{ display: showDetails ? "block" : "none" }}
            >
              <h4 className="font-semibold mb-3 text-sm">Technical Specifications</h4>
              <div className="space-y-2 text-xs">
                {product.material && (
                  <div>
                    <span className="text-muted-foreground">Material:</span>{" "}
                    <span className="font-medium">{product.material}</span>
                  </div>
                )}
                {product.construction && (
                  <div>
                    <span className="text-muted-foreground">Construction:</span>{" "}
                    <span className="font-medium">{product.construction}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <span className="text-muted-foreground">Dimensions:</span>
                    <div className="ml-2 mt-1 space-y-1">
                      {product.dimensions.length && <div>• Length: {product.dimensions.length}</div>}
                      {product.dimensions.width && <div>• Width: {product.dimensions.width}</div>}
                      {product.dimensions.height && <div>• Height: {product.dimensions.height}</div>}
                    </div>
                  </div>
                )}
                {product.application && product.application.length > 0 && (
                  <div>
                    <span className="text-muted-foreground">Applications:</span>
                    <div className="ml-2 mt-1 space-y-1">
                      {product.application.map((app, idx) => (
                        <div key={idx}>• {app}</div>
                      ))}
                    </div>
                  </div>
                )}
                {product.moq && (
                  <div>
                    <span className="text-muted-foreground">MOQ:</span>{" "}
                    <span className="font-medium">{product.moq} units</span>
                  </div>
                )}
                {product.leadTime && (
                  <div>
                    <span className="text-muted-foreground">Lead Time:</span>{" "}
                    <span className="font-medium">{product.leadTime}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 30,
              }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-10 w-[calc(100%-3rem)]"
            >
              <motion.a
                href={`https://wa.me/919322140480?text=${encodeURIComponent(
                  `Hello! I'm interested in ${product.name} (${sku}). Could you provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2.5 px-6 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-semibold rounded-full shadow-glow text-center text-sm hover:from-gold-500 hover:to-gold-700 transition-all duration-300"
              >
                Request Inquiry
              </motion.a>
            </motion.div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                {product.category && (
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 font-medium">
                    {product.category}
                  </p>
                )}
                <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {product.description}
            </p>

            <Separator className="my-4" />

            <div className="flex items-center justify-between text-xs">
              <div className="flex gap-4">
                <div>
                  <span className="text-muted-foreground">Colorways:</span>{" "}
                  <span className="font-semibold">{product.colorways}</span>
                </div>
                {product.style && (
                  <div>
                    <span className="text-muted-foreground">Style:</span>{" "}
                    <span className="font-semibold">{product.style}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <ProductSpecSheet product={product} />
              <motion.a
                href={`https://wa.me/919322140480?text=${encodeURIComponent(
                  `Hello! I'm interested in ${product.name} (${sku}). Could you provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-2 px-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-center text-sm font-medium rounded-md"
              >
                Inquire Now
              </motion.a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed inset-0 flex items-center justify-center p-0 max-w-full max-h-full bg-black bg-opacity-75">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default CollectionProductCard;
