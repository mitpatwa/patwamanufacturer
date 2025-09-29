import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/hero-1-new.png",
    fallback: "/lovable-uploads/hero-1-new.png",
    title: "Exquisite Trimmings",
    subtitle: "Innovation, Quality, Creativity",
    ctaText: "Discover",
    ctaLink: "#"
  },
  {
    id: 2,
    image: "/lovable-uploads/hero-2-new.png",
    fallback: "/lovable-uploads/hero-2-new.png",
    title: "Elegant Home Textiles",
    subtitle: "Quality, Craftsmanship, Inspiration",
    ctaText: "Explore",
    ctaLink: "#"
  },
  {
    id: 3,
    image: "/lovable-uploads/hero-3-new.png",
    fallback: "/lovable-uploads/hero-3-new.png",
    title: "Artisanal Craftsmanship",
    subtitle: "Experience the art of traditional craftsmanship with modern precision",
    ctaText: "View Collection",
    ctaLink: "#"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Optimized slide transition function to prevent forced reflows
  const transitionToSlide = useCallback((newSlide: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Use requestAnimationFrame to batch DOM operations and prevent forced reflows
    requestAnimationFrame(() => {
      setCurrentSlide(newSlide);
      // Use a single timeout to reset transition state
      setTimeout(() => setIsTransitioning(false), 300);
    });
  }, [isTransitioning]);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    transitionToSlide(nextIndex);
  }, [currentSlide, transitionToSlide]);

  // Function to go to the previous slide
  const prevSlide = useCallback(() => {
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    transitionToSlide(prevIndex);
  }, [currentSlide, transitionToSlide]);

  // Function to go to specific slide
  const goToSlide = useCallback((index: number) => {
    transitionToSlide(index);
  }, [transitionToSlide]);

  // Memoized current slide data
  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide]);

  // Auto-advance slides with optimized interval
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[90vh] lg:h-screen overflow-hidden">
      {/* Slide images with optimized loading */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ willChange: index === currentSlide ? 'opacity' : 'auto' }}
          >
            <OptimizedImage
              src={slide.image}
              fallback={slide.fallback}
              alt={`${slide.title} - Premium passementerie and luxury decorative trimmings by Patwa Manufacturer`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              sizes="100vw"
              width={1920}
              height={1080}
              onError={() => {
                setImageErrors(prev => new Set([...prev, slide.id]));
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content container with optimized rendering */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
              style={{ 
                willChange: index === currentSlide ? 'opacity, transform' : 'auto',
                transform: 'translateZ(0)' // Force hardware acceleration
              }}
            >
              <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink}
                className="inline-block py-3 px-8 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300 text-lg"
                style={{ willChange: 'background-color, color' }}
              >
                {slide.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons with optimized interactions */}
      <div className="absolute bottom-12 right-12 flex space-x-4 z-10">
        <button
          onClick={prevSlide}
          className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
          aria-label="Previous slide"
          style={{ willChange: 'background-color, color' }}
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={nextSlide}
          className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
          aria-label="Next slide"
          style={{ willChange: 'background-color, color' }}
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      {/* Slide indicators with optimized click handlers */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-10 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            style={{ willChange: 'width, background-color' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
