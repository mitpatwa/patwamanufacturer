import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular" | "card";
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const SkeletonLoader = ({ 
  className = "", 
  variant = "rectangular", 
  width, 
  height, 
  lines = 1 
}: SkeletonLoaderProps) => {
  const baseClasses = "bg-gradient-to-r from-sand-200 via-sand-100 to-sand-200 bg-[length:200%_100%] animate-shimmer rounded";
  
  const variantClasses = {
    text: "h-4",
    rectangular: "h-32",
    circular: "rounded-full",
    card: "h-64"
  };

  const style = {
    width: width || "100%",
    height: height || (variant === "circular" ? "4rem" : undefined)
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]} mb-2`}
            style={{ ...style, width: index === lines - 1 ? "75%" : "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default SkeletonLoader;
