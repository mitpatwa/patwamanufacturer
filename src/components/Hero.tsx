import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/hero-1-trimmings.png",
    fallback: "/lovable-uploads/hero-1-trimmings.png",
    title: "Exquisite Trimmings",
    subtitle: "Welcome to our world of exquisite trimmings - Innovation, Quality, Creativity",
    ctaText: "Discover",
    ctaLink: "#"
  },
  {
    id: 2,
    image: "/lovable-uploads/hero-2-textiles.png",
    fallback: "/lovable-uploads/hero-2-textiles.png",
    title: "Elegant Home Textiles",
    subtitle: "Our world of elegant home textiles - Quality, Craftsmanship, Inspiration",
    ctaText: "Explore",
    ctaLink: "#"
  },
  {
    id: 3,
    image: "/lovable-uploads/hero-3-craftsmanship.png",
    fallback: "/lovable-uploads/hero-3-craftsmanship.png",
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

  // Function to go to the next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    requestAnimationFrame(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 100);
    });
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    requestAnimationFrame(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 100);
    });
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section className="relative h-[90vh] lg:h-screen overflow-hidden">
      {/* Slide images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img 
              src={imageErrors.has(slide.id) ? slide.fallback : slide.image}
              alt={`${slide.title} - Premium passementerie and luxury decorative trimmings by Patwa Manufacturer`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="sync"
              fetchpriority="high"
              sizes="100vw"
              width="1920"
              height="1080"
              onError={() => {
                setImageErrors(prev => new Set([...prev, slide.id]));
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content container */}
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
              >
                {slide.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-12 right-12 flex space-x-4 z-10">
        <button
          onClick={prevSlide}
          className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={nextSlide}
          className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              
              requestAnimationFrame(() => {
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 100);
              });
            }}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-10 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
