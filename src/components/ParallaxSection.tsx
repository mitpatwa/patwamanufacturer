import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = "",
  offset = 0 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset - 200 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`parallax-element ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
