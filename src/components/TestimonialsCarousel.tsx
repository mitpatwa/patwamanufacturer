import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Interior Designer",
    company: "Mitchell Design Studio",
    text: "The quality of craftsmanship is absolutely exceptional. Every tassel, every trim detail reflects true artisan skill. My clients are always impressed with the luxury feel.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "James Richardson",
    role: "Luxury Hotel Manager",
    company: "The Grand Palace",
    text: "We've been using Patwa's products for our presidential suites for over 3 years. The attention to detail and durability is unmatched in the industry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Architect",
    company: "Chen & Associates",
    text: "The custom embellishments perfectly complement our high-end residential projects. The team's expertise in understanding our vision is remarkable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Textile Curator",
    company: "Metropolitan Museum",
    text: "Working with Patwa on our exhibition pieces has been a privilege. Their knowledge of traditional techniques combined with modern innovation is extraordinary.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-28 bg-gradient-to-br from-sand-50 to-gold-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-100/30 to-sand-100/30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="section-subheading mx-auto">
            Discover why interior designers, architects, and luxury establishments trust us with their most prestigious projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <Quote className="h-16 w-16 text-gold-400 mx-auto mb-8 animate-pulse-glow" />
                <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gold-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <motion.img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-4 border-gold-200 animate-glow"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gold-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="magnetic-button h-12 w-12 rounded-full bg-white shadow-card flex items-center justify-center text-gold-600 hover:bg-gold-50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentTestimonial(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-gold-400 w-8 animate-pulse-glow" 
                      : "bg-gold-200 hover:bg-gold-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="magnetic-button h-12 w-12 rounded-full bg-white shadow-card flex items-center justify-center text-gold-600 hover:bg-gold-50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;