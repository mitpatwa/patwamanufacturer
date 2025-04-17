
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Hero slides for the carousel
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3",
    title: "Spring Collection",
    subtitle: "Elegance in every detail",
    ctaText: "Discover",
    ctaLink: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3",
    title: "Artisan Crafted",
    subtitle: "Timeless quality and craftsmanship",
    ctaText: "Explore",
    ctaLink: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3",
    title: "Design Excellence",
    subtitle: "The finest materials, expertly crafted",
    ctaText: "View Collection",
    ctaLink: "#"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to the next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <section className="relative pt-20 lg:pt-24 h-[100vh] overflow-hidden">
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
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
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
              <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
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
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrentSlide(index);
              setTimeout(() => setIsTransitioning(false), 700);
            }}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
