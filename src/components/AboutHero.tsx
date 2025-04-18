
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-sand-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              About Our Company
            </h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With a legacy of excellence and a commitment to quality, we have become a leading force in the industry, trusted by designers, decorators, and artisans worldwide for our exceptional passementerie products.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our journey began with a passion for traditional craftsmanship, which we've combined with modern techniques to create timeless pieces that add elegance and sophistication to interior spaces.
            </p>
            <Link to="/craftsmanship" className="btn-primary">
              Explore Our Craftsmanship
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3" 
              alt="Artisan at work" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-50 flex items-center justify-center p-6 shadow-lg">
              <p className="font-serif text-center text-lg">
                Honoring traditions since our founding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
