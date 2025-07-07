
import { useState, useEffect, useCallback } from "react";

interface UseCarouselProps {
  totalItems: number;
  itemsPerPage: number;
  autoAdvanceInterval?: number;
}

export const useCarousel = ({ 
  totalItems, 
  itemsPerPage, 
  autoAdvanceInterval = 7000 
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  useEffect(() => {
    if (autoAdvanceInterval > 0) {
      const interval = setInterval(nextSlide, autoAdvanceInterval);
      return () => clearInterval(interval);
    }
  }, [nextSlide, autoAdvanceInterval]);

  return {
    currentIndex,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide
  };
};
