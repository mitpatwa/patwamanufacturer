import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Hero slides for the carousel
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3",
    title: "Artisan Collection",
    subtitle: "Handcrafted excellence in every thread",
    ctaText: "Discover",
    ctaLink: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3",
    title: "Luxury Textures",
    subtitle: "Premium materials for distinguished interiors",
    ctaText: "Explore",
    ctaLink: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3",
    title: "Bespoke Designs",
    subtitle: "Custom passementerie crafted to perfection",
    ctaText: "View Collection",
    ctaLink: "#"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Function to go to the next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
      setIsVisible(true);
    }, 500);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
      setIsVisible(true);
    }, 500);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  // Initial visibility animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-10000 scale-105"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                animation: index === currentSlide ? "subtle-zoom 15s ease-out" : "none"
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <h2 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-xl">
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
              setIsVisible(false);
              
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
                setIsVisible(true);
              }, 500);
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
