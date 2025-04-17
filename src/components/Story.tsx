
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <section className="py-20 bg-sand-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since our founding, Patwa Manufacturer has been dedicated to delivering exceptional manufacturing solutions. Our legacy is built on an unwavering commitment to quality, precision, and innovative industrial design.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every product we create reflects the expertise of our skilled professionals who meticulously craft each detail. From traditional manufacturing techniques to cutting-edge technological innovations, our journey celebrates the harmonious blend of heritage and modern industrial excellence.
            </p>
            <Link to="#" className="inline-flex items-center text-primary hover:text-accent transition-colors">
              <span className="mr-2 border-b border-current pb-1">Discover Our Manufacturing Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3" 
                alt="Patwa Manufacturer workshop" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-50 flex items-center justify-center p-6 shadow-lg">
                <p className="font-serif text-center text-lg">
                  Quality manufacturing since our founding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
